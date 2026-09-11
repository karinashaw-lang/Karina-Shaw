import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { isStripeConfigured } from "@/lib/integrations/stripe";
import DistributorOnboardingForm from "@/components/distributor-onboarding-form";

export default async function EarningsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const earnings = await prisma.distributorEarning.findMany({
    where: { distributorId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      tip: {
        include: {
          distributorLink: {
            include: { moment: { include: { video: { include: { creator: true } } } } },
          },
        },
      },
    },
  });

  const totalCents = earnings
    .filter((earning) => !earning.refundedAt)
    .reduce((sum, earning) => sum + earning.amountCents, 0);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Your earnings</h1>
      <p className="mt-1 text-sm text-zinc-500">
        What you&apos;ve earned by sharing creators&apos; moments — see{" "}
        <Link href="/wall" className="underline">
          your wall
        </Link>{" "}
        for moments you can grab a share link for.
      </p>

      <div className="mt-6 rounded-lg border border-black/10 p-4 dark:border-white/10">
        <p className="text-2xl font-semibold">${(totalCents / 100).toFixed(2)}</p>
        <p className="text-sm text-zinc-500">Total earned from shared moments</p>
      </div>

      {!isStripeConfigured() ? (
        <p className="mt-4 text-xs text-zinc-500">
          Distributor payouts are simulated for now — no payment processor is connected yet.
        </p>
      ) : (
        <div className="mt-6 rounded-lg border border-black/10 p-4 dark:border-white/10">
          <h2 className="text-lg font-medium">Payout account</h2>
          {user.stripeChargesEnabled ? (
            <p className="mt-1 text-sm text-green-700 dark:text-green-500">
              Stripe payouts are set up — earnings pay out directly to you.
            </p>
          ) : (
            <>
              <p className="mt-1 text-sm text-zinc-500">
                {user.stripeAccountId
                  ? "Onboarding started but not finished yet — you can't earn from share links until it's complete."
                  : "Set this up before you can get a share link for any moment."}
              </p>
              <div className="mt-2">
                <DistributorOnboardingForm
                  returnPath="/earnings"
                  label={user.stripeAccountId ? "Finish setting up payouts" : "Set up payouts with Stripe"}
                />
              </div>
            </>
          )}
        </div>
      )}

      <h2 className="mt-8 text-lg font-medium">Earnings history</h2>
      {earnings.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">
          No earnings yet — grab a share link from a published moment page and earn a cut when it
          leads to a tip.
        </p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {earnings.map((earning) => {
            const moment = earning.tip.distributorLink?.moment;
            return (
              <li
                key={earning.id}
                className={`flex items-center justify-between gap-4 ${earning.refundedAt ? "opacity-50" : ""}`}
              >
                <span>
                  {moment ? (
                    <>
                      <Link href={`/moments/${moment.id}`} className="underline">
                        {moment.title}
                      </Link>{" "}
                      <span className="text-zinc-500">by {moment.video.creator.displayName}</span>
                    </>
                  ) : (
                    <span className="text-zinc-500">A moment that&apos;s since been removed</span>
                  )}
                  {earning.refundedAt && (
                    <span className="ml-2 text-xs text-zinc-500">(refunded — not counted above)</span>
                  )}
                </span>
                <span className={earning.refundedAt ? "line-through" : "font-medium"}>
                  ${(earning.amountCents / 100).toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
