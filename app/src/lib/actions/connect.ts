"use server";

import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { getAppUrl } from "@/lib/app-url";
import { createConnectOnboardingLink } from "@/lib/integrations/stripe";

export type ConnectOnboardingState = { error: string } | null;

/**
 * Redirects the creator to Stripe's hosted onboarding for their Connect
 * Express account. A form action (not an event-handler toggle) so
 * redirect() isn't caught by a client try/catch — same reasoning as the
 * subscription checkout flow.
 */
export async function startStripeConnectOnboarding(
  // Required by useActionState's action signature even though this form has
  // no fields to submit.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _prevState: ConnectOnboardingState
): Promise<ConnectOnboardingState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to set up payouts." };
  }

  const appUrl = await getAppUrl();
  const url = await createConnectOnboardingLink(user.creatorProfile, user.email, appUrl);
  redirect(url);
}
