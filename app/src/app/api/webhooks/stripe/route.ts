import { NextResponse } from "next/server";
import type Stripe from "stripe";

import prisma from "@/lib/prisma";
import { getStripe, isStripeConfigured } from "@/lib/integrations/stripe";
import { distributorCutCents } from "@/lib/distributor";

/**
 * Splits a distributor-attributed tip's charge between the distributor and
 * the creator via separate Transfer objects — done here, after the charge
 * completes, rather than at Checkout-creation time, because Stripe's
 * transfer_data only supports one destination per PaymentIntent. The
 * distributor side always fires (DistributorLink only exists once its
 * owner has completed payout onboarding — see
 * src/lib/actions/distributor.ts); the creator side is skipped if they
 * haven't set up payouts, same fallback as an un-attributed tip.
 */
async function splitDistributorPayout(
  stripe: Stripe,
  tipId: string,
  distributorLinkId: string,
  amountCents: number,
  paymentIntentId: string
) {
  const link = await prisma.distributorLink.findUnique({
    where: { id: distributorLinkId },
    include: {
      distributor: true,
      moment: { include: { video: { include: { creator: true } } } },
    },
  });
  if (!link || !link.distributor.stripeChargesEnabled || !link.distributor.stripeAccountId) return;

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
    expand: ["latest_charge"],
  });
  const charge = paymentIntent.latest_charge;
  const chargeId = typeof charge === "string" ? charge : charge?.id;
  if (!chargeId) return;

  const distributorCut = distributorCutCents(amountCents);

  await stripe.transfers.create({
    amount: distributorCut,
    currency: "usd",
    destination: link.distributor.stripeAccountId,
    source_transaction: chargeId,
  });

  await prisma.distributorEarning.create({
    data: { distributorId: link.distributorId, tipId, amountCents: distributorCut },
  });

  const creator = link.moment.video.creator;
  if (creator.stripeChargesEnabled && creator.stripeAccountId) {
    await stripe.transfers.create({
      amount: amountCents - distributorCut,
      currency: "usd",
      destination: creator.stripeAccountId,
      source_transaction: chargeId,
    });
  }
}

/**
 * Stripe only calls this once STRIPE_WEBHOOK_SECRET is set and the endpoint
 * is registered (Stripe CLI `stripe listen --forward-to
 * localhost:3000/api/webhooks/stripe` for local dev). Tip/Subscription rows
 * are written here, not at Checkout redirect time, so they only reflect
 * payments Stripe actually confirmed.
 */
export async function POST(request: Request) {
  if (!isStripeConfigured() || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 404 });
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const stripe = getStripe();
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const kind = session.metadata?.kind;

      if (kind === "tip" || kind === "guest_tip") {
        const { fromUserId, toCreatorId, message, distributorLinkId } = session.metadata!;
        const amountCents = session.amount_total ?? 0;

        const tip = await prisma.tip.upsert({
          where: { stripeCheckoutSessionId: session.id },
          create: {
            fromUserId: kind === "tip" ? fromUserId! : undefined,
            guestEmail: kind === "guest_tip" ? (session.customer_details?.email ?? undefined) : undefined,
            toCreatorId: toCreatorId!,
            amountCents,
            message: message || undefined,
            distributorLinkId: distributorLinkId || undefined,
            stripeCheckoutSessionId: session.id,
          },
          update: {},
        });

        const paymentIntentId =
          typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id;

        if (distributorLinkId && paymentIntentId) {
          // The Tip above is already recorded regardless of what happens
          // here — a failed transfer (e.g. a transient Stripe error) should
          // never make it look like the payment itself wasn't received.
          try {
            await splitDistributorPayout(stripe, tip.id, distributorLinkId, amountCents, paymentIntentId);
          } catch (err) {
            console.error("Distributor payout split failed for tip", tip.id, err);
          }
        }
      } else if (kind === "unlock_behind_the_cut") {
        const { behindTheCutId, userId } = session.metadata!;
        if (behindTheCutId && userId) {
          await prisma.behindTheCutUnlock.upsert({
            where: { behindTheCutId_userId: { behindTheCutId, userId } },
            create: {
              behindTheCutId,
              userId,
              amountCents: session.amount_total ?? 0,
              stripeCheckoutSessionId: session.id,
            },
            update: {},
          });
        }
      } else if (kind === "subscription") {
        const { subscriberId, creatorId } = session.metadata!;
        const subscriptionId =
          typeof session.subscription === "string" ? session.subscription : session.subscription?.id;
        if (subscriberId && creatorId && subscriptionId) {
          await prisma.subscription.upsert({
            where: { subscriberId_creatorId: { subscriberId, creatorId } },
            create: { subscriberId, creatorId, stripeSubscriptionId: subscriptionId },
            update: { stripeSubscriptionId: subscriptionId },
          });
        }
      }
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      await prisma.subscription.deleteMany({
        where: { stripeSubscriptionId: subscription.id },
      });
      break;
    }

    case "account.updated": {
      const account = event.data.object;
      const chargesEnabled = Boolean(account.charges_enabled);
      await Promise.all([
        prisma.creatorProfile.updateMany({
          where: { stripeAccountId: account.id },
          data: { stripeChargesEnabled: chargesEnabled },
        }),
        prisma.user.updateMany({
          where: { stripeAccountId: account.id },
          data: { stripeChargesEnabled: chargesEnabled },
        }),
      ]);
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
