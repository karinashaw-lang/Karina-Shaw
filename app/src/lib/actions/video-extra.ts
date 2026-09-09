"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";
import { saveOuttakesFile, saveAttachmentFile } from "@/lib/video-storage";
import { getOrCreateStripeCustomer, getStripe, isStripeConfigured } from "@/lib/integrations/stripe";
import { getOpenAI, isOpenAIConfigured } from "@/lib/integrations/openai";

export type VideoExtraActionState = { error: string } | { success: true } | null;

const addSchema = z.object({
  videoId: z.string().min(1),
  type: z.enum(["RESOURCE_SHEET", "OUTTAKES", "ATTACHMENT"]),
  title: z.string().min(1).max(120),
  text: z.string().max(8000).optional(),
  priceDollars: z.coerce.number().min(1).max(500),
});

/**
 * Adds one of the plan's "additional per-video items" — a resource sheet,
 * outtakes, or a paid attachment. Unlike Behind the Cut's five fixed
 * slots (one upsert per video), a video can have any number of these, so
 * this always creates a new row rather than upserting.
 */
export async function addVideoExtra(
  _prevState: VideoExtraActionState,
  formData: FormData
): Promise<VideoExtraActionState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to add this." };
  }

  const parsed = addSchema.safeParse({
    videoId: formData.get("videoId"),
    type: formData.get("type"),
    title: formData.get("title"),
    text: formData.get("text") || undefined,
    priceDollars: formData.get("priceDollars"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid details." };
  }
  const { videoId, type, title, text, priceDollars } = parsed.data;

  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only add extras to your own videos." };
  }

  let fileUrl: string | null = null;

  if (type === "RESOURCE_SHEET") {
    if (!text) return { error: "A resource sheet needs some text." };
  } else if (type === "OUTTAKES") {
    const file = formData.get("outtakesFile");
    if (!(file instanceof File) || file.size === 0) {
      return { error: "Pick a video file for the outtakes." };
    }
    try {
      fileUrl = await saveOuttakesFile(file);
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not save that file." };
    }
  } else {
    const file = formData.get("attachmentFile");
    if (!(file instanceof File) || file.size === 0) {
      return { error: "Pick a file to attach." };
    }
    try {
      fileUrl = await saveAttachmentFile(file);
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not save that file." };
    }
  }

  await prisma.videoExtra.create({
    data: {
      videoId,
      type,
      title,
      text: type === "RESOURCE_SHEET" ? text : undefined,
      fileUrl,
      priceCents: Math.round(priceDollars * 100),
    },
  });

  revalidatePath(`/videos/${videoId}`);
  return { success: true };
}

/** Removes a VideoExtra — its unlock history goes with it, same as any
 * other creator-owned content deletion in this app. */
export async function deleteVideoExtra(videoExtraId: string, path: string) {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) throw new Error("You must be a creator to do this.");

  const extra = await prisma.videoExtra.findUnique({
    where: { id: videoExtraId },
    include: { video: true },
  });
  if (!extra || extra.video.creatorId !== user.creatorProfile.id) {
    throw new Error("You can only delete extras on your own videos.");
  }

  await prisma.videoExtraUnlock.deleteMany({ where: { videoExtraId } });
  await prisma.videoExtra.delete({ where: { id: videoExtraId } });

  revalidatePath(path);
}

const draftSchema = z.object({ videoId: z.string().min(1) });

export type DraftState = { error: string } | { draft: string } | null;

/**
 * "Resource sheet: everything mentioned in the episode, pulled by AI,
 * checked by the creator" — a one-shot GPT pass over the transcript that
 * fills the textarea for the creator to edit, not an auto-published
 * result. Without OPENAI_API_KEY there's nothing to draft from, so the
 * creator just writes it themselves.
 */
export async function generateResourceSheetDraft(
  _prevState: DraftState,
  formData: FormData
): Promise<DraftState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) return { error: "You must be a creator to do this." };
  if (!isOpenAIConfigured()) return { error: "AI drafting needs OPENAI_API_KEY — write it yourself for now." };

  const parsed = draftSchema.safeParse({ videoId: formData.get("videoId") });
  if (!parsed.success) return { error: "Invalid video." };

  const video = await prisma.video.findUnique({
    where: { id: parsed.data.videoId },
    include: { transcript: { orderBy: { startSeconds: "asc" } } },
  });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only draft this for your own videos." };
  }
  if (video.transcript.length === 0) {
    return { error: "No transcript to draft from yet." };
  }

  const openai = getOpenAI();
  const fullText = video.transcript.map((s) => s.text).join(" ").slice(0, 12000);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Given a video transcript, list everything concretely mentioned that a viewer might want to look up: tools, books, products, places, people, links, gear. One item per line, plain text, no numbering or markdown. Be concise — a real resource list, not a summary of the episode.",
      },
      { role: "user", content: fullText },
    ],
  });

  const draft = response.choices[0]?.message?.content?.trim();
  if (!draft) return { error: "Couldn't draft anything from this transcript." };
  return { draft };
}

export type UnlockExtraState = { error: string } | { success: true } | null;

/**
 * Unlocks one VideoExtra for the current viewer — same real-Stripe-or-
 * simulated pattern as unlockBehindTheCut. A subscriber never needs this;
 * their access is checked directly against Subscription wherever extras
 * are rendered.
 */
export async function unlockVideoExtra(
  _prevState: UnlockExtraState,
  formData: FormData
): Promise<UnlockExtraState> {
  const user = await getCurrentUser();
  if (!user) return { error: "You must be signed in to unlock this." };

  const videoExtraId = String(formData.get("videoExtraId") ?? "");
  const extra = await prisma.videoExtra.findUnique({
    where: { id: videoExtraId },
    include: { video: { include: { creator: true } } },
  });
  if (!extra) return { error: "Nothing to unlock here." };
  if (extra.video.creatorId === user.creatorProfile?.id) return { error: "This is your own video." };

  const existing = await prisma.videoExtraUnlock.findUnique({
    where: { videoExtraId_userId: { videoExtraId, userId: user.id } },
  });
  if (existing) {
    revalidatePath(`/videos/${extra.videoId}`);
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
              unit_amount: extra.priceCents,
              product_data: { name: `${extra.title} — ${extra.video.title}` },
            },
          },
        ],
        payment_intent_data:
          extra.video.creator.stripeChargesEnabled && extra.video.creator.stripeAccountId
            ? { transfer_data: { destination: extra.video.creator.stripeAccountId } }
            : undefined,
        metadata: {
          kind: "unlock_video_extra",
          videoExtraId: extra.id,
          userId: user.id,
        },
        success_url: `${appUrl}/videos/${extra.videoId}?unlocked=1`,
        cancel_url: `${appUrl}/videos/${extra.videoId}`,
      });
      checkoutUrl = session.url;
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not start checkout." };
    }

    if (!checkoutUrl) return { error: "Could not start checkout. Try again." };
    redirect(checkoutUrl);
  }

  await prisma.videoExtraUnlock.create({
    data: { videoExtraId, userId: user.id, amountCents: extra.priceCents },
  });

  revalidatePath(`/videos/${extra.videoId}`);
  return { success: true };
}
