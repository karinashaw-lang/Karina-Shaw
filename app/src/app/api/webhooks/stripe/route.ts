import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getStripe, isStripeConfigured } from "@/lib/integrations/stripe";

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

      if (kind === "tip") {
        const { fromUserId, toCreatorId, message } = session.metadata!;
        await prisma.tip.upsert({
          where: { stripeCheckoutSessionId: session.id },
          create: {
            fromUserId: fromUserId!,
            toCreatorId: toCreatorId!,
            amountCents: session.amount_total ?? 0,
            message: message || undefined,
            stripeCheckoutSessionId: session.id,
          },
          update: {},
        });
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

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
