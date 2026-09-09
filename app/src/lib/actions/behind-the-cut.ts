"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";
import { saveBehindTheCutFile } from "@/lib/video-storage";
import { getOrCreateStripeCustomer, getStripe, isStripeConfigured } from "@/lib/integrations/stripe";

export type BehindTheCutState = { error: string } | { success: true } | null;

const textSchema = z.object({
  videoId: z.string().min(1),
  planText: z.string().max(4000).optional(),
  kitText: z.string().max(2000).optional(),
  hardPartText: z.string().max(2000).optional(),
  priceDollars: z.coerce.number().min(1).max(100),
});

/**
 * Full-form save of a video's Behind the Cut — five fixed slots, any of
 * them optional. Text slots are always replaced wholesale with what's
 * submitted (an empty textarea clears that slot), matching the "any slot
 * can be empty" rule. File slots (raw footage, cut scenes) only change
 * when a new file is actually chosen — re-uploading on every text edit
 * would be a much heavier ask than the plan's "ten minutes of work."
 */
export async function saveBehindTheCut(
  _prevState: BehindTheCutState,
  formData: FormData
): Promise<BehindTheCutState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to edit Behind the Cut." };
  }

  const parsed = textSchema.safeParse({
    videoId: formData.get("videoId"),
    planText: formData.get("planText") || undefined,
    kitText: formData.get("kitText") || undefined,
    hardPartText: formData.get("hardPartText") || undefined,
    priceDollars: formData.get("priceDollars"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid details." };
  }
  const { videoId, planText, kitText, hardPartText, priceDollars } = parsed.data;

  const video = await prisma.video.findUnique({
    where: { id: videoId },
    include: { behindTheCut: true },
  });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only edit Behind the Cut on your own videos." };
  }

  let rawFootageUrl = video.behindTheCut?.rawFootageUrl ?? null;
  const rawFile = formData.get("rawFootageFile");
  if (rawFile instanceof File && rawFile.size > 0) {
    try {
      rawFootageUrl = await saveBehindTheCutFile(rawFile);
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not save the raw footage file." };
    }
  }

  let cutScenesUrl = video.behindTheCut?.cutScenesUrl ?? null;
  const cutFile = formData.get("cutScenesFile");
  if (cutFile instanceof File && cutFile.size > 0) {
    try {
      cutScenesUrl = await saveBehindTheCutFile(cutFile);
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not save the cut scenes file." };
    }
  }

  const priceCents = Math.round(priceDollars * 100);

  await prisma.behindTheCut.upsert({
    where: { videoId },
    create: { videoId, planText, rawFootageUrl, cutScenesUrl, kitText, hardPartText, priceCents },
    update: {
      planText: planText ?? null,
      rawFootageUrl,
      cutScenesUrl,
      kitText: kitText ?? null,
      hardPartText: hardPartText ?? null,
      priceCents,
    },
  });

  revalidatePath(`/videos/${videoId}`);
  return { success: true };
}

const effortSchema = z.object({
  videoId: z.string().min(1),
  effortHours: z.coerce.number().min(0).max(10000).optional(),
  effortReshoots: z.coerce.number().int().min(0).max(1000).optional(),
  effortMinutesCut: z.coerce.number().int().min(0).max(100000).optional(),
});

/** The free effort badge — makes the paid section above feel earned. */
export async function saveEffortBadge(
  _prevState: BehindTheCutState,
  formData: FormData
): Promise<BehindTheCutState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to edit this." };
  }

  const parsed = effortSchema.safeParse({
    videoId: formData.get("videoId"),
    effortHours: formData.get("effortHours") || undefined,
    effortReshoots: formData.get("effortReshoots") || undefined,
    effortMinutesCut: formData.get("effortMinutesCut") || undefined,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid details." };
  }
  const { videoId, effortHours, effortReshoots, effortMinutesCut } = parsed.data;

  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only edit your own videos." };
  }

  await prisma.video.update({
    where: { id: videoId },
    data: {
      effortHours: effortHours ?? null,
      effortReshoots: effortReshoots ?? null,
      effortMinutesCut: effortMinutesCut ?? null,
    },
  });

  revalidatePath(`/videos/${videoId}`);
  return { success: true };
}

export type UnlockState = { error: string } | { success: true } | null;

/**
 * Unlocks a video's Behind the Cut for the current viewer. When Stripe is
 * configured, a real Checkout Session (confirmed via webhook, same as
 * tips); without one, an instant simulated unlock, matching every other
 * Stripe-gated feature's fallback. A subscriber never needs this at all —
 * their access is checked directly against Subscription wherever Behind
 * the Cut is rendered.
 */
export async function unlockBehindTheCut(
  _prevState: UnlockState,
  formData: FormData
): Promise<UnlockState> {
  const user = await getCurrentUser();
  if (!user) return { error: "You must be signed in to unlock this." };

  const videoId = String(formData.get("videoId") ?? "");
  const video = await prisma.video.findUnique({
    where: { id: videoId },
    include: { behindTheCut: true, creator: true },
  });
  if (!video?.behindTheCut) return { error: "Nothing to unlock here." };
  if (video.creatorId === user.creatorProfile?.id) return { error: "This is your own video." };

  const behindTheCut = video.behindTheCut;

  const existing = await prisma.behindTheCutUnlock.findUnique({
    where: { behindTheCutId_userId: { behindTheCutId: behindTheCut.id, userId: user.id } },
  });
  if (existing) {
    revalidatePath(`/videos/${videoId}`);
    return { success: true };
  }

  if (isStripeConfigured()) {
    let checkoutUrl: string | null;
    try {
      const stripe = getStripe();
      const customerId = await getOrCreateStripeCustomer(user);
      const appUrl = await getAppUrl();

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer: customerId,
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: behindTheCut.priceCents,
              product_data: { name: `Behind the Cut — ${video.title}` },
            },
          },
        ],
        payment_intent_data:
          video.creator.stripeChargesEnabled && video.creator.stripeAccountId
            ? { transfer_data: { destination: video.creator.stripeAccountId } }
            : undefined,
        metadata: {
          kind: "unlock_behind_the_cut",
          behindTheCutId: behindTheCut.id,
          userId: user.id,
        },
        success_url: `${appUrl}/videos/${videoId}?unlocked=1`,
        cancel_url: `${appUrl}/videos/${videoId}`,
      });
      checkoutUrl = session.url;
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not start checkout." };
    }

    if (!checkoutUrl) return { error: "Could not start checkout. Try again." };
    redirect(checkoutUrl);
  }

  await prisma.behindTheCutUnlock.create({
    data: { behindTheCutId: behindTheCut.id, userId: user.id },
  });

  revalidatePath(`/videos/${videoId}`);
  return { success: true };
}
