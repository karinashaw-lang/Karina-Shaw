"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const tipSchema = z.object({
  creatorId: z.string().min(1),
  handle: z.string().min(1),
  amountDollars: z.coerce.number().positive().max(1000),
  message: z.string().max(280).optional(),
});

export type TipActionState = { error: string } | { success: true } | null;

/**
 * Records a tip as a ledger entry. There is no real payment processor wired
 * up yet (e.g. Stripe) — this simulates the transaction so the product loop
 * can be built and tested end to end before that integration exists.
 */
export async function sendTip(
  _prevState: TipActionState,
  formData: FormData
): Promise<TipActionState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "You must be signed in to send a tip." };
  }

  const parsed = tipSchema.safeParse({
    creatorId: formData.get("creatorId"),
    handle: formData.get("handle"),
    amountDollars: formData.get("amountDollars"),
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid tip amount." };
  }

  const { creatorId, handle, amountDollars, message } = parsed.data;

  if (user.creatorProfile?.id === creatorId) {
    return { error: "You can't tip yourself." };
  }

  await prisma.tip.create({
    data: {
      fromUserId: user.id,
      toCreatorId: creatorId,
      amountCents: Math.round(amountDollars * 100),
      message,
    },
  });

  revalidatePath(`/creators/${handle}`);
  return { success: true };
}
