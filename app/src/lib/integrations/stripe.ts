import "server-only";

import Stripe from "stripe";

import prisma from "@/lib/prisma";

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

let client: Stripe | null = null;

/** Throws if STRIPE_SECRET_KEY isn't set — check `isStripeConfigured()` first. */
export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  if (!client) {
    client = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return client;
}

export async function getOrCreateStripeCustomer(user: {
  id: string;
  email: string;
  name: string;
  stripeCustomerId: string | null;
}): Promise<string> {
  if (user.stripeCustomerId) return user.stripeCustomerId;

  const stripe = getStripe();
  const customer = await stripe.customers.create({
    email: user.email,
    name: user.name,
    metadata: { userId: user.id },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { stripeCustomerId: customer.id },
  });

  return customer.id;
}

/**
 * Gets or creates a Stripe Connect Express account for a creator, then
 * returns an onboarding link URL. Tips/subscriptions only route funds to
 * the creator (via transfer_data) once Stripe reports the account's
 * charges_enabled — see the account.updated handler in
 * src/app/api/webhooks/stripe/route.ts. Until then, payments go to the
 * platform's own Stripe account, same as if Stripe Connect weren't set up
 * at all.
 */
export async function createConnectOnboardingLink(
  creator: { id: string; stripeAccountId: string | null },
  userEmail: string,
  appUrl: string
): Promise<string> {
  const stripe = getStripe();

  let accountId = creator.stripeAccountId;
  if (!accountId) {
    const account = await stripe.accounts.create({
      type: "express",
      email: userEmail,
      metadata: { creatorId: creator.id },
    });
    accountId = account.id;
    await prisma.creatorProfile.update({
      where: { id: creator.id },
      data: { stripeAccountId: accountId },
    });
  }

  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    type: "account_onboarding",
    refresh_url: `${appUrl}/creator/dashboard`,
    return_url: `${appUrl}/creator/dashboard`,
  });

  return accountLink.url;
}

/**
 * Same as createConnectOnboardingLink, but for a distributor payout
 * account on a User rather than a CreatorProfile — any viewer can earn
 * from sharing a Curated Moment (see src/lib/actions/distributor.ts)
 * regardless of whether they're also a creator, so this can't reuse the
 * creator's own Connect account.
 */
export async function createDistributorOnboardingLink(
  user: { id: string; stripeAccountId: string | null },
  userEmail: string,
  appUrl: string,
  returnPath: string
): Promise<string> {
  const stripe = getStripe();

  let accountId = user.stripeAccountId;
  if (!accountId) {
    const account = await stripe.accounts.create({
      type: "express",
      email: userEmail,
      metadata: { distributorUserId: user.id },
    });
    accountId = account.id;
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeAccountId: accountId },
    });
  }

  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    type: "account_onboarding",
    refresh_url: `${appUrl}${returnPath}`,
    return_url: `${appUrl}${returnPath}`,
  });

  return accountLink.url;
}
