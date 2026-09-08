"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";
import { getStripe, isStripeConfigured } from "@/lib/integrations/stripe";
import { resolveDistributorLink } from "@/lib/actions/distributor";

const guestTipSchema = z.object({
  creatorId: z.string().min(1),
  returnPath: z.string().min(1),
  amountDollars: z.coerce.number().positive().max(1000),
  message: z.string().max(280).optional(),
  distributorLinkId: z.string().optional(),
});

export type GuestTipActionState = { error: string } | null;

/**
 * Tips a creator without a platform account — guest checkout, per the
 * plan, for moment pages and embeds where a stranger clicking in from a
 * newsletter or social post shouldn't have to sign up first. Only makes
 * sense with real Stripe: without a key there's no payment happening
 * either way, so callers should only render this when
 * `isStripeConfigured()` — there's no meaningful simulated fallback for a
 * tip with no account behind it.
 */
export async function sendGuestTip(
  _prevState: GuestTipActionState,
  formData: FormData
): Promise<GuestTipActionState> {
  if (!isStripeConfigured()) {
    return { error: "Guest tipping isn't available yet." };
  }

  const parsed = guestTipSchema.safeParse({
    creatorId: formData.get("creatorId"),
    returnPath: formData.get("returnPath"),
    amountDollars: formData.get("amountDollars"),
    message: formData.get("message") || undefined,
    distributorLinkId: formData.get("distributorLinkId") || undefined,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid tip amount." };
  }
  const { creatorId, returnPath, amountDollars, message, distributorLinkId } = parsed.data;

  const creator = await prisma.creatorProfile.findUnique({ where: { id: creatorId } });
  if (!creator) return { error: "That creator no longer exists." };

  // No signed-in tipper id to check for self-referral — see resolveDistributorLink.
  const resolvedLinkId = await resolveDistributorLink(distributorLinkId, creatorId, null);

  const amountCents = Math.round(amountDollars * 100);
  const stripe = getStripe();
  const appUrl = await getAppUrl();

  let checkoutUrl: string | null;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // No `customer` — Stripe Checkout still collects the payer's email on
      // its own (available on the confirmed session as customer_details.email),
      // which is the only record kept of who a guest was.
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
      payment_intent_data:
        !resolvedLinkId && creator.stripeChargesEnabled && creator.stripeAccountId
          ? { transfer_data: { destination: creator.stripeAccountId } }
          : undefined,
      metadata: {
        kind: "guest_tip",
        toCreatorId: creatorId,
        message: message ?? "",
        distributorLinkId: resolvedLinkId ?? "",
      },
      success_url: `${appUrl}${returnPath}${returnPath.includes("?") ? "&" : "?"}tipped=1`,
      cancel_url: `${appUrl}${returnPath}`,
    });
    checkoutUrl = session.url;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not start checkout." };
  }

  if (!checkoutUrl) return { error: "Could not start checkout. Try again." };
  redirect(checkoutUrl);
}
