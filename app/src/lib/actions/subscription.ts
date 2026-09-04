"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function subscribeToCreator(creatorId: string, handle: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to subscribe.");
  if (user.creatorProfile?.id === creatorId) {
    throw new Error("You can't subscribe to yourself.");
  }

  await prisma.subscription.upsert({
    where: { subscriberId_creatorId: { subscriberId: user.id, creatorId } },
    create: { subscriberId: user.id, creatorId },
    update: {},
  });

  revalidatePath(`/creators/${handle}`);
}

export async function unsubscribeFromCreator(creatorId: string, handle: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to unsubscribe.");

  await prisma.subscription.deleteMany({
    where: { subscriberId: user.id, creatorId },
  });

  revalidatePath(`/creators/${handle}`);
}

const priceSchema = z.object({
  subscriptionPriceDollars: z.coerce.number().min(0).max(1000).optional(),
});

export type SubscriptionPriceState = { error: string } | null;

export async function setSubscriptionPrice(
  _prevState: SubscriptionPriceState,
  formData: FormData
): Promise<SubscriptionPriceState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to set a subscription price." };
  }

  const raw = formData.get("subscriptionPriceDollars");
  const parsed = priceSchema.safeParse({
    subscriptionPriceDollars: raw === "" ? undefined : raw,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid price." };
  }

  const cents =
    parsed.data.subscriptionPriceDollars !== undefined
      ? Math.round(parsed.data.subscriptionPriceDollars * 100)
      : null;

  await prisma.creatorProfile.update({
    where: { id: user.creatorProfile.id },
    data: { subscriptionPriceCents: cents },
  });

  revalidatePath(`/creators/${user.creatorProfile.handle}`);
  revalidatePath("/creator/dashboard");
  return null;
}
