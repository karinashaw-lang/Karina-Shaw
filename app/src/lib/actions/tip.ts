"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";
import { getOrCreateStripeCustomer, getStripe, isStripeConfigured } from "@/lib/integrations/stripe";

const tipSchema = z.object({
  creatorId: z.string().min(1),
  handle: z.string().min(1),
  amountDollars: z.coerce.number().positive().max(1000),
  message: z.string().max(280).optional(),
});

export type TipActionState = { error: string } | { success: true } | null;

/**
 * Sends a tip. When STRIPE_SECRET_KEY is set, this creates a real Stripe
 * Checkout Session and redirects the payer to it — the Tip row itself is
 * only written once Stripe confirms payment via webhook (see
 * src/app/api/webhooks/stripe/route.ts). Without a Stripe key, it falls
 * back to instantly recording a simulated ledger entry, same as before.
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

  const amountCents = Math.round(amountDollars * 100);

  if (isStripeConfigured()) {
    const creator = await prisma.creatorProfile.findUnique({ where: { id: creatorId } });
    if (!creator) return { error: "That creator no longer exists." };

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
            product_data: { name: `Tip for ${creator.displayName}` },
          },
        },
      ],
      metadata: {
        kind: "tip",
        fromUserId: user.id,
        toCreatorId: creatorId,
        message: message ?? "",
      },
      success_url: `${appUrl}/creators/${handle}?tipped=1`,
      cancel_url: `${appUrl}/creators/${handle}`,
    });

    if (!session.url) return { error: "Could not start checkout. Try again." };
    redirect(session.url);
  }

  await prisma.tip.create({
    data: {
      fromUserId: user.id,
      toCreatorId: creatorId,
      amountCents,
      message,
    },
  });

  revalidatePath(`/creators/${handle}`);
  return { success: true };
}
