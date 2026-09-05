"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";
import { getOrCreateStripeCustomer, getStripe, isStripeConfigured } from "@/lib/integrations/stripe";

/**
 * Simulated-mode subscribe: instant, no billing. Only used when Stripe isn't
 * configured — see `startSubscriptionCheckout` for the real-payment path.
 */
export async function subscribeToCreator(creatorId: string, handle: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to subscribe.");
  if (user.creatorProfile?.id === creatorId) {
    throw new Error("You can't subscribe to yourself.");
  }
  if (isStripeConfigured()) {
    throw new Error("Stripe is configured — use the checkout flow instead.");
  }

  await prisma.subscription.upsert({
    where: { subscriberId_creatorId: { subscriberId: user.id, creatorId } },
    create: { subscriberId: user.id, creatorId },
    update: {},
  });

  revalidatePath(`/creators/${handle}`);
}

export type SubscribeCheckoutState = { error: string } | null;

/**
 * Real-payment subscribe: creates a Stripe Checkout Session (subscription
 * mode) and redirects there. The Subscription row is only written once
 * Stripe confirms via webhook (see src/app/api/webhooks/stripe/route.ts).
 * This is a form action (not an event-handler toggle like the simulated
 * path) specifically so `redirect()` isn't caught by a client try/catch.
 */
export async function startSubscriptionCheckout(
  _prevState: SubscribeCheckoutState,
  formData: FormData
): Promise<SubscribeCheckoutState> {
  const user = await getCurrentUser();
  if (!user) return { error: "You must be signed in to subscribe." };

  const creatorId = String(formData.get("creatorId") ?? "");
  const handle = String(formData.get("handle") ?? "");
  if (user.creatorProfile?.id === creatorId) {
    return { error: "You can't subscribe to yourself." };
  }

  const creator = await prisma.creatorProfile.findUnique({ where: { id: creatorId } });
  if (!creator?.subscriptionPriceCents) {
    return { error: "This creator doesn't have a subscription set up." };
  }

  const stripe = getStripe();
  const customerId = await getOrCreateStripeCustomer(user);
  const appUrl = await getAppUrl();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          recurring: { interval: "month" },
          unit_amount: creator.subscriptionPriceCents,
          product_data: { name: `Subscription to ${creator.displayName}` },
        },
      },
    ],
    metadata: { kind: "subscription", subscriberId: user.id, creatorId },
    success_url: `${appUrl}/creators/${handle}?subscribed=1`,
    cancel_url: `${appUrl}/creators/${handle}`,
  });

  if (!session.url) return { error: "Could not start checkout. Try again." };
  redirect(session.url);
}

export async function unsubscribeFromCreator(creatorId: string, handle: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to unsubscribe.");

  if (isStripeConfigured()) {
    const subscription = await prisma.subscription.findUnique({
      where: { subscriberId_creatorId: { subscriberId: user.id, creatorId } },
    });
    if (subscription?.stripeSubscriptionId) {
      await getStripe().subscriptions.cancel(subscription.stripeSubscriptionId);
      // The Subscription row is removed by the webhook's
      // `customer.subscription.deleted` handler, not here, so it stays in
      // sync with what Stripe actually did.
      revalidatePath(`/creators/${handle}`);
      return;
    }
  }

  await prisma.subscription.deleteMany({
    where: { subscriberId: user.id, creatorId },
  });

  revalidatePath(`/creators/${handle}`);
}

const priceSchema = z.object({
  subscriptionPriceDollars: z.coerce.number().min(0).max(1000).optional(),
});

export type SubscriptionPriceState = { error: string } | null;

export async function setSubscriptionPrice(
  _prevState: SubscriptionPriceState,
  formData: FormData
): Promise<SubscriptionPriceState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to set a subscription price." };
  }

  const raw = formData.get("subscriptionPriceDollars");
  const parsed = priceSchema.safeParse({
    subscriptionPriceDollars: raw === "" ? undefined : raw,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid price." };
  }

  const cents =
    parsed.data.subscriptionPriceDollars !== undefined
      ? Math.round(parsed.data.subscriptionPriceDollars * 100)
      : null;

  await prisma.creatorProfile.update({
    where: { id: user.creatorProfile.id },
    data: { subscriptionPriceCents: cents },
  });

  revalidatePath(`/creators/${user.creatorProfile.handle}`);
  revalidatePath("/creator/dashboard");
  return null;
}
