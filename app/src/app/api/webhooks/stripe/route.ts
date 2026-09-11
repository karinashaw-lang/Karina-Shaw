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
    expand: ["latest_charge", "latest_charge.payment_method_details"],
  });
  const charge = paymentIntent.latest_charge;
  const chargeId = typeof charge === "string" ? charge : charge?.id;
  if (!chargeId) return;

  // Recorded regardless of what happens below — it's the running history
  // the self-referral check compares future tips against, signed-in or guest.
  const fingerprint =
    charge && typeof charge === "object" ? (charge.payment_method_details?.card?.fingerprint ?? null) : null;
  const tip = await prisma.tip.update({
    where: { id: tipId },
    data: { cardFingerprint: fingerprint ?? undefined, stripePaymentIntentId: paymentIntentId },
  });

  // A signed-in self-tip is already blocked in resolveDistributorLink (no
  // distributorLinkId is ever attached to it), but a guest tip has no
  // fromUserId to compare — these three are the fallback, each best-effort
  // on its own (per the plan's risk section, not a guarantee — a shared
  // network can share an IP, a first-ever card has no history to match)
  // but meaningfully harder to fake all three at once. Self-referral
  // cancels the distributor's cut, not the creator's — the tip itself is
  // still real money that should still reach the creator in full.
  let selfReferral = false;
  let reason: string | null = null;

  if (fingerprint) {
    const priorOwnTip = await prisma.tip.findFirst({
      where: { fromUserId: link.distributorId, cardFingerprint: fingerprint },
    });
    if (priorOwnTip) {
      selfReferral = true;
      reason = `card fingerprint matches distributor's own past tip ${priorOwnTip.id}`;
    }
  }

  if (!selfReferral && tip.guestEmail && link.distributor.email.toLowerCase() === tip.guestEmail.toLowerCase()) {
    selfReferral = true;
    reason = "guest tip email matches the distributor's own account email";
  }

  if (!selfReferral && tip.ipAddress && link.createdIp && tip.ipAddress === link.createdIp) {
    selfReferral = true;
    reason = "tip's IP address matches the IP the share link was generated from";
  }

  if (selfReferral) {
    console.warn(`Blocked distributor payout for tip ${tipId}: ${reason} (self-referral).`);
  }

  const distributorCut = selfReferral ? 0 : distributorCutCents(amountCents);

  if (!selfReferral) {
    const transfer = await stripe.transfers.create({
      amount: distributorCut,
      currency: "usd",
      destination: link.distributor.stripeAccountId,
      source_transaction: chargeId,
    });

    await prisma.distributorEarning.create({
      data: {
        distributorId: link.distributorId,
        tipId,
        amountCents: distributorCut,
        stripeTransferId: transfer.id,
      },
    });
  }

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
 * Claws back a distributor's cut when the underlying tip is refunded —
 * reverses the actual Transfer (pulling the money back out of their
 * Connect balance) where one exists, and marks the ledger row so it drops
 * out of running totals either way. Simulated-mode earnings have no
 * stripeTransferId, so only the ledger side applies there.
 */
async function clawBackRefundedTip(stripe: Stripe, paymentIntentId: string) {
  const tip = await prisma.tip.findUnique({
    where: { stripePaymentIntentId: paymentIntentId },
    include: { earning: true },
  });
  if (!tip?.earning || tip.earning.refundedAt) return;

  if (tip.earning.stripeTransferId) {
    try {
      await stripe.transfers.createReversal(tip.earning.stripeTransferId);
    } catch (err) {
      console.error(
        `Failed to reverse distributor transfer ${tip.earning.stripeTransferId} for refunded tip ${tip.id}`,
        err
      );
    }
  }

  await prisma.distributorEarning.update({
    where: { id: tip.earning.id },
    data: { refundedAt: new Date() },
  });
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
        const { fromUserId, toCreatorId, message, distributorLinkId, ipAddress } = session.metadata!;
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
            ipAddress: ipAddress || undefined,
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
      } else if (kind === "unlock_video_extra") {
        const { videoExtraId, userId } = session.metadata!;
        if (videoExtraId && userId) {
          await prisma.videoExtraUnlock.upsert({
            where: { videoExtraId_userId: { videoExtraId, userId } },
            create: {
              videoExtraId,
              userId,
              amountCents: session.amount_total ?? 0,
              stripeCheckoutSessionId: session.id,
            },
            update: {},
          });
        }
      } else if (kind === "paid_question") {
        const { creatorId, fromUserId, question } = session.metadata!;
        if (creatorId && fromUserId && question) {
          await prisma.paidQuestion.upsert({
            where: { stripeCheckoutSessionId: session.id },
            create: {
              creatorId,
              fromUserId,
              question,
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

    case "charge.refunded": {
      const charge = event.data.object;
      const paymentIntentId =
        typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent?.id;
      if (paymentIntentId) {
        try {
          await clawBackRefundedTip(stripe, paymentIntentId);
        } catch (err) {
          console.error("Refund clawback failed for payment intent", paymentIntentId, err);
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
