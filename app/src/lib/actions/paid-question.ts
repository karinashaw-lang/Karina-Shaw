"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";
import { getOrCreateStripeCustomer, getStripe, isStripeConfigured } from "@/lib/integrations/stripe";

export type QuestionPriceState = { error: string } | { success: true } | null;

const priceSchema = z.object({
  questionPriceDollars: z.coerce.number().min(1).max(500).optional(),
});

/** Sets or clears a creator's paid-question price — null (unset) turns
 * the feature off, matching how subscriptionPriceCents already works. */
export async function setQuestionPrice(
  _prevState: QuestionPriceState,
  formData: FormData
): Promise<QuestionPriceState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) return { error: "You must be a creator to do this." };

  const parsed = priceSchema.safeParse({
    questionPriceDollars: formData.get("questionPriceDollars") || undefined,
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid price." };

  await prisma.creatorProfile.update({
    where: { id: user.creatorProfile.id },
    data: {
      questionPriceCents: parsed.data.questionPriceDollars
        ? Math.round(parsed.data.questionPriceDollars * 100)
        : null,
    },
  });

  revalidatePath("/creator/dashboard");
  return { success: true };
}

export type SubmitQuestionState = { error: string } | { success: true } | null;

const submitSchema = z.object({
  creatorId: z.string().min(1),
  handle: z.string().min(1),
  question: z.string().min(3).max(500),
});

/**
 * Submits a paid question for the creator's next episode. Real Stripe
 * checkout when configured (the platform fee, per the plan, applies to
 * this like every other transaction); an instant simulated record
 * otherwise, same fallback as tips and unlocks elsewhere.
 */
export async function submitPaidQuestion(
  _prevState: SubmitQuestionState,
  formData: FormData
): Promise<SubmitQuestionState> {
  const user = await getCurrentUser();
  if (!user) return { error: "You must be signed in to ask a paid question." };

  const parsed = submitSchema.safeParse({
    creatorId: formData.get("creatorId"),
    handle: formData.get("handle"),
    question: formData.get("question"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Ask a real question." };
  }
  const { creatorId, handle, question } = parsed.data;

  const creator = await prisma.creatorProfile.findUnique({ where: { id: creatorId } });
  if (!creator || creator.questionPriceCents === null) {
    return { error: "This creator isn't taking paid questions right now." };
  }
  if (user.creatorProfile?.id === creatorId) {
    return { error: "You can't pay yourself for a question." };
  }

  const amountCents = creator.questionPriceCents;

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
              unit_amount: amountCents,
              product_data: { name: `Paid question for ${creator.displayName}` },
            },
          },
        ],
        payment_intent_data:
          creator.stripeChargesEnabled && creator.stripeAccountId
            ? { transfer_data: { destination: creator.stripeAccountId } }
            : undefined,
        metadata: {
          kind: "paid_question",
          creatorId,
          fromUserId: user.id,
          question,
        },
        success_url: `${appUrl}/creators/${handle}?asked=1`,
        cancel_url: `${appUrl}/creators/${handle}`,
      });
      checkoutUrl = session.url;
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not start checkout." };
    }

    if (!checkoutUrl) return { error: "Could not start checkout. Try again." };
    redirect(checkoutUrl);
  }

  await prisma.paidQuestion.create({
    data: { creatorId, fromUserId: user.id, question, amountCents },
  });

  revalidatePath(`/creators/${handle}`);
  return { success: true };
}

export type AnswerQuestionState = { error: string } | { success: true } | null;

const answerSchema = z.object({
  paidQuestionId: z.string().min(1),
  answeredVideoId: z.string().optional(),
});

/** Marks a paid question answered, optionally linking the video where it
 * was addressed — the plan's promise back to whoever paid to ask. */
export async function markQuestionAnswered(
  _prevState: AnswerQuestionState,
  formData: FormData
): Promise<AnswerQuestionState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) return { error: "You must be a creator to do this." };

  const parsed = answerSchema.safeParse({
    paidQuestionId: formData.get("paidQuestionId"),
    answeredVideoId: formData.get("answeredVideoId") || undefined,
  });
  if (!parsed.success) return { error: "Invalid question." };
  const { paidQuestionId, answeredVideoId } = parsed.data;

  const question = await prisma.paidQuestion.findUnique({ where: { id: paidQuestionId } });
  if (!question || question.creatorId !== user.creatorProfile.id) {
    return { error: "You can only answer your own questions." };
  }

  if (answeredVideoId) {
    const video = await prisma.video.findUnique({ where: { id: answeredVideoId } });
    if (!video || video.creatorId !== user.creatorProfile.id) {
      return { error: "You can only link one of your own videos." };
    }
  }

  await prisma.paidQuestion.update({
    where: { id: paidQuestionId },
    data: { status: "ANSWERED", answeredVideoId: answeredVideoId ?? undefined },
  });

  revalidatePath("/creator/dashboard");
  return { success: true };
}
