import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { isStripeConfigured } from "@/lib/integrations/stripe";
import SubscriptionPriceForm from "@/components/subscription-price-form";
import StripeConnectButton from "@/components/stripe-connect-button";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.creatorProfile) redirect("/creator/setup");

  const creatorId = user.creatorProfile.id;

  const [videoCount, followerCount, subscriberCount, tips] = await Promise.all([
    prisma.video.count({ where: { creatorId } }),
    prisma.follow.count({ where: { creatorId } }),
    prisma.subscription.count({ where: { creatorId } }),
    prisma.tip.findMany({
      where: { toCreatorId: creatorId },
      orderBy: { createdAt: "desc" },
      include: { fromUser: true },
      take: 20,
    }),
  ]);

  const totalCents = tips.reduce((sum, tip) => sum + tip.amountCents, 0);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Creator dashboard</h1>

      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="text-2xl font-semibold">{videoCount}</p>
          <p className="text-sm text-zinc-500">Videos</p>
        </div>
        <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="text-2xl font-semibold">{followerCount}</p>
          <p className="text-sm text-zinc-500">Followers</p>
        </div>
        <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="text-2xl font-semibold">{subscriberCount}</p>
          <p className="text-sm text-zinc-500">Subscribers</p>
        </div>
        <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="text-2xl font-semibold">${(totalCents / 100).toFixed(2)}</p>
          <p className="text-sm text-zinc-500">Tips received</p>
        </div>
      </div>

      {!isStripeConfigured() ? (
        <p className="mt-4 text-xs text-zinc-500">
          Tips and subscriptions are simulated for now — no payment processor is connected yet.
        </p>
      ) : (
        <div className="mt-6 rounded-lg border border-black/10 p-4 dark:border-white/10">
          <h2 className="text-lg font-medium">Payouts</h2>
          {user.creatorProfile.stripeChargesEnabled ? (
            <p className="mt-1 text-sm text-green-700 dark:text-green-500">
              Stripe payouts are set up — tips and subscriptions pay out directly to you.
            </p>
          ) : (
            <>
              <p className="mt-1 text-sm text-zinc-500">
                {user.creatorProfile.stripeAccountId
                  ? "Onboarding started but not finished yet — payments still go to the platform until it's complete."
                  : "Without this, tips and subscriptions are still charged for real but go to the platform's account, not to you."}
              </p>
              <div className="mt-2">
                <StripeConnectButton
                  label={user.creatorProfile.stripeAccountId ? "Finish setting up payouts" : "Set up payouts with Stripe"}
                />
              </div>
            </>
          )}
        </div>
      )}

      <h2 className="mt-8 text-lg font-medium">Subscription price</h2>
      <SubscriptionPriceForm currentPriceCents={user.creatorProfile.subscriptionPriceCents} />

      <h2 className="mt-8 text-lg font-medium">Recent tips</h2>
      {tips.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">No tips yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {tips.map((tip) => (
            <li key={tip.id}>
              <span className="font-medium">{tip.fromUser.name}</span> sent $
              {(tip.amountCents / 100).toFixed(2)}
              {tip.message && <> — &ldquo;{tip.message}&rdquo;</>}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8">
        <Link href={`/creators/${user.creatorProfile.handle}`} className="underline">
          View your public profile
        </Link>
      </p>
    </div>
  );
}
