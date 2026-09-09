"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";
import { getOrCreateStripeCustomer, getStripe, isStripeConfigured } from "@/lib/integrations/stripe";
import { resolveDistributorLink } from "@/lib/actions/distributor";
import { distributorCutCents } from "@/lib/distributor";

const tipSchema = z.object({
  creatorId: z.string().min(1),
  handle: z.string().min(1),
  amountDollars: z.coerce.number().positive().max(1000),
  message: z.string().max(280).optional(),
  distributorLinkId: z.string().optional(),
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
    distributorLinkId: formData.get("distributorLinkId") || undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid tip amount." };
  }

  const { creatorId, handle, amountDollars, message, distributorLinkId } = parsed.data;

  if (user.creatorProfile?.id === creatorId) {
    return { error: "You can't tip yourself." };
  }

  const amountCents = Math.round(amountDollars * 100);

  if (isStripeConfigured()) {
    const creator = await prisma.creatorProfile.findUnique({ where: { id: creatorId } });
    if (!creator) return { error: "That creator no longer exists." };

    const resolvedLinkId = await resolveDistributorLink(distributorLinkId, creatorId, user.id);
    const appUrl = await getAppUrl();

    let checkoutUrl: string | null;
    try {
      const stripe = getStripe();
      const customerId = await getOrCreateStripeCustomer(user);

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
        // A distributor-attributed tip is split after the fact (see the
        // webhook) via separate Transfer objects, since transfer_data only
        // supports one destination — so the charge stays on the platform's
        // balance here instead of routing straight to the creator.
        // Otherwise, routes the full tip straight to the creator's connected
        // account once they've completed Stripe Connect onboarding; without
        // one it's charged to the platform's own account. No platform fee
        // taken on tips at all yet — see README if that changes.
        payment_intent_data:
          !resolvedLinkId && creator.stripeChargesEnabled && creator.stripeAccountId
            ? { transfer_data: { destination: creator.stripeAccountId } }
            : undefined,
        metadata: {
          kind: "tip",
          fromUserId: user.id,
          toCreatorId: creatorId,
          message: message ?? "",
          distributorLinkId: resolvedLinkId ?? "",
        },
        success_url: `${appUrl}/creators/${handle}?tipped=1`,
        cancel_url: `${appUrl}/creators/${handle}`,
      });
      checkoutUrl = session.url;
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not start checkout." };
    }

    if (!checkoutUrl) return { error: "Could not start checkout. Try again." };
    redirect(checkoutUrl);
  }

  const resolvedLinkId = await resolveDistributorLink(distributorLinkId, creatorId, user.id);

  const tip = await prisma.tip.create({
    data: {
      fromUserId: user.id,
      toCreatorId: creatorId,
      amountCents,
      message,
      distributorLinkId: resolvedLinkId ?? undefined,
    },
  });

  // No real Stripe Transfer to wait on in simulated mode — the split is
  // just another simulated ledger entry, recorded immediately, same as the
  // tip itself.
  if (resolvedLinkId) {
    const link = await prisma.distributorLink.findUniqueOrThrow({ where: { id: resolvedLinkId } });
    await prisma.distributorEarning.create({
      data: { distributorId: link.distributorId, tipId: tip.id, amountCents: distributorCutCents(amountCents) },
    });
  }

  revalidatePath(`/creators/${handle}`);
  return { success: true };
}
