import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { isStripeConfigured } from "@/lib/integrations/stripe";
import SubscriptionPriceForm from "@/components/subscription-price-form";
import StripeConnectButton from "@/components/stripe-connect-button";
import QuestionPriceForm from "@/components/question-price-form";
import PaidQuestionsInbox from "@/components/paid-questions-inbox";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.creatorProfile) redirect("/creator/setup");

  const creatorId = user.creatorProfile.id;

  const [
    videoCount,
    followerCount,
    subscriberCount,
    tips,
    distributorSplits,
    unlocks,
    extraUnlocks,
    paidQuestions,
    videos,
  ] = await Promise.all([
    prisma.video.count({ where: { creatorId } }),
    prisma.follow.count({ where: { creatorId } }),
    prisma.subscription.count({ where: { creatorId } }),
    prisma.tip.findMany({
      where: { toCreatorId: creatorId },
      orderBy: { createdAt: "desc" },
      include: { fromUser: true },
      take: 20,
    }),
    prisma.distributorEarning.findMany({ where: { tip: { toCreatorId: creatorId } } }),
    prisma.behindTheCutUnlock.findMany({
      where: { behindTheCut: { video: { creatorId } } },
      orderBy: { createdAt: "desc" },
      include: { user: true, behindTheCut: { include: { video: true } } },
      take: 20,
    }),
    prisma.videoExtraUnlock.findMany({
      where: { videoExtra: { video: { creatorId } } },
      orderBy: { createdAt: "desc" },
      include: { user: true, videoExtra: { include: { video: true } } },
      take: 20,
    }),
    prisma.paidQuestion.findMany({
      where: { creatorId },
      orderBy: { createdAt: "desc" },
      include: { fromUser: true, answeredVideo: true },
    }),
    prisma.video.findMany({ where: { creatorId }, select: { id: true, title: true }, orderBy: { createdAt: "desc" } }),
  ]);

  const totalCents = tips.reduce((sum, tip) => sum + tip.amountCents, 0);
  const distributorSplitCents = distributorSplits
    .filter((earning) => !earning.refundedAt)
    .reduce((sum, earning) => sum + earning.amountCents, 0);
  const unlockCents = unlocks.reduce((sum, unlock) => sum + unlock.amountCents, 0);
  const extraUnlockCents = extraUnlocks.reduce((sum, unlock) => sum + unlock.amountCents, 0);
  const paidQuestionCents = paidQuestions.reduce((sum, q) => sum + q.amountCents, 0);

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
        <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="text-2xl font-semibold">${(unlockCents / 100).toFixed(2)}</p>
          <p className="text-sm text-zinc-500">Behind the Cut</p>
        </div>
        <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="text-2xl font-semibold">${(extraUnlockCents / 100).toFixed(2)}</p>
          <p className="text-sm text-zinc-500">Extras</p>
        </div>
        <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="text-2xl font-semibold">${(paidQuestionCents / 100).toFixed(2)}</p>
          <p className="text-sm text-zinc-500">Paid questions</p>
        </div>
      </div>

      {distributorSplitCents > 0 && (
        <p className="mt-2 text-xs text-zinc-500">
          ${(distributorSplitCents / 100).toFixed(2)} of the tips above went to viewers who shared your
          moments through a distributor link.
        </p>
      )}

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

      <h2 className="mt-8 text-lg font-medium">Paid questions</h2>
      <QuestionPriceForm currentPriceCents={user.creatorProfile.questionPriceCents} />
      {user.creatorProfile.questionPriceCents !== null && (
        <div className="mt-3">
          <PaidQuestionsInbox questions={paidQuestions} videos={videos} />
        </div>
      )}

      <h2 className="mt-8 text-lg font-medium">Recent tips</h2>
      {tips.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">No tips yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {tips.map((tip) => (
            <li key={tip.id}>
              <span className="font-medium">{tip.fromUser?.name ?? tip.guestEmail ?? "A guest"}</span> sent $
              {(tip.amountCents / 100).toFixed(2)}
              {tip.message && <> — &ldquo;{tip.message}&rdquo;</>}
            </li>
          ))}
        </ul>
      )}

      <h2 className="mt-8 text-lg font-medium">Recent Behind the Cut unlocks</h2>
      {unlocks.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">No unlocks yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {unlocks.map((unlock) => (
            <li key={unlock.id}>
              <span className="font-medium">{unlock.user.name}</span> unlocked{" "}
              <Link href={`/videos/${unlock.behindTheCut.videoId}`} className="underline">
                {unlock.behindTheCut.video.title}
              </Link>{" "}
              for ${(unlock.amountCents / 100).toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      <h2 className="mt-8 text-lg font-medium">Recent extra unlocks</h2>
      {extraUnlocks.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">No unlocks yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {extraUnlocks.map((unlock) => (
            <li key={unlock.id}>
              <span className="font-medium">{unlock.user.name}</span> unlocked{" "}
              <Link href={`/videos/${unlock.videoExtra.videoId}`} className="underline">
                {unlock.videoExtra.title}
              </Link>{" "}
              on {unlock.videoExtra.video.title} for ${(unlock.amountCents / 100).toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8 flex flex-wrap gap-4">
        <Link href={`/creators/${user.creatorProfile.handle}`} className="underline">
          View your public profile
        </Link>
        <a href="/api/creator/export" className="underline">
          Export your data
        </a>
      </p>
      <p className="-mt-2 text-xs text-zinc-500">
        Downloads everything you have here — videos, transcripts, moments, your buyer list, and
        earnings history — as one file, plus 24-hour download links for any raw footage, outtakes,
        or attachments you&apos;ve uploaded.
      </p>
    </div>
  );
}
