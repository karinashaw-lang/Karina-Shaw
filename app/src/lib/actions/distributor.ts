"use server";

import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { getAppUrl } from "@/lib/app-url";
import prisma from "@/lib/prisma";
import { createDistributorOnboardingLink, isStripeConfigured } from "@/lib/integrations/stripe";
import { getRequestIp } from "@/lib/request-ip";

/** New-link creations allowed per distributor in NEW_LINK_WINDOW_MINUTES —
 * generating a link is free and instant, so nothing else naturally limits
 * how many a script could churn out. Existing links (the common case,
 * revisiting a moment you already have a link for) never count against
 * this. */
const NEW_LINK_RATE_LIMIT = 20;
const NEW_LINK_WINDOW_MINUTES = 10;

export type DistributorOnboardingState = { error: string } | null;

/**
 * Sends a viewer to Stripe's hosted onboarding for a distributor payout
 * account. Deliberately separate from creator Connect onboarding — any
 * viewer can earn from sharing a moment, not just creators.
 */
export async function startDistributorOnboarding(
  _prevState: DistributorOnboardingState,
  formData: FormData
): Promise<DistributorOnboardingState> {
  if (!isStripeConfigured()) return { error: "Distributor payouts aren't available yet." };

  const user = await getCurrentUser();
  if (!user) return { error: "You must be signed in to set up payouts." };

  const returnPath = String(formData.get("returnPath") ?? "/wall");
  const appUrl = await getAppUrl();

  let url: string;
  try {
    url = await createDistributorOnboardingLink(user, user.email, appUrl, returnPath);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not start onboarding." };
  }

  redirect(url);
}

export type ShareLinkResult = { url: string } | { error: string };

/**
 * Gets (or creates, on first use) a viewer's personal share link for a
 * published Curated Moment — Distributor Payouts, per the plan. Requires
 * payouts already set up (`user.stripeChargesEnabled`) specifically so
 * every link that ever exists is guaranteed payable — there's no "link
 * exists but the distributor never finished onboarding" state to handle
 * later, in the webhook or anywhere else.
 */
export async function getOrCreateDistributorLink(momentId: string): Promise<ShareLinkResult> {
  const user = await getCurrentUser();
  if (!user) return { error: "You must be signed in to get a share link." };

  const moment = await prisma.curatedMoment.findUnique({
    where: { id: momentId },
    include: { video: { include: { creator: true } } },
  });
  if (!moment || moment.status !== "PUBLISHED") {
    return { error: "This moment isn't published." };
  }
  if (moment.video.creator.userId === user.id) {
    return { error: "You can't be your own distributor." };
  }
  if (!user.stripeChargesEnabled) {
    return { error: "Set up payouts first." };
  }

  const existingLink = await prisma.distributorLink.findUnique({
    where: { distributorId_momentId: { distributorId: user.id, momentId } },
  });
  if (!existingLink) {
    const windowStart = new Date(Date.now() - NEW_LINK_WINDOW_MINUTES * 60 * 1000);
    const recentCount = await prisma.distributorLink.count({
      where: { distributorId: user.id, createdAt: { gte: windowStart } },
    });
    if (recentCount >= NEW_LINK_RATE_LIMIT) {
      return { error: "You're creating share links too quickly — try again in a few minutes." };
    }
  }

  const link = await prisma.distributorLink.upsert({
    where: { distributorId_momentId: { distributorId: user.id, momentId } },
    create: { distributorId: user.id, momentId, createdIp: await getRequestIp() },
    update: {},
  });

  const appUrl = await getAppUrl();
  return { url: `${appUrl}/moments/${momentId}?d=${link.id}` };
}

/**
 * Validates a `?d=` share-link id at checkout time, before trusting it
 * enough to put in Stripe metadata. Returns null (silently, not an error —
 * a stale/invalid/self-referral link shouldn't block a genuine tip) unless
 * the link is for this exact creator and the tipper isn't the distributor
 * themselves. Guest tips (tipperUserId null) skip this specific check —
 * there's no user id to compare — but still go through the card
 * fingerprint / email / IP checks in splitDistributorPayout once the
 * payment confirms, which is the only point a guest tip's real identity
 * signals exist at all.
 */
export async function resolveDistributorLink(
  distributorLinkId: string | null | undefined,
  creatorId: string,
  tipperUserId: string | null
): Promise<string | null> {
  if (!distributorLinkId) return null;

  const link = await prisma.distributorLink.findUnique({
    where: { id: distributorLinkId },
    include: { moment: { include: { video: true } } },
  });
  if (!link) return null;
  if (link.moment.video.creatorId !== creatorId) return null;
  if (tipperUserId && link.distributorId === tipperUserId) return null;

  return link.id;
}
