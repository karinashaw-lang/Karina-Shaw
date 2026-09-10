import Link from "next/link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { isStripeConfigured } from "@/lib/integrations/stripe";
import FollowButton from "@/components/follow-button";
import SubscribeButton from "@/components/subscribe-button";
import SubscribeCheckoutForm from "@/components/subscribe-checkout-form";
import UnsubscribeButton from "@/components/unsubscribe-button";
import TipForm from "@/components/tip-form";
import LiveBadge from "@/components/live-badge";
import AskTheShow from "@/components/ask-the-show";
import PaidQuestionForm from "@/components/paid-question-form";
import PodcastFeedLink from "@/components/podcast-feed-link";
import { getAppUrl } from "@/lib/app-url";

export default async function CreatorPage(props: PageProps<"/creators/[handle]">) {
  const { handle } = await props.params;
  const searchParams = await props.searchParams;

  const [creator, user] = await Promise.all([
    prisma.creatorProfile.findUnique({
      where: { handle },
      include: {
        videos: { orderBy: { createdAt: "desc" } },
        _count: { select: { followers: true } },
        liveStream: true,
      },
    }),
    getCurrentUser(),
  ]);

  if (!creator) notFound();

  const isOwner = user?.creatorProfile?.id === creator.id;
  const stripeConfigured = isStripeConfigured();

  const recentQuestions =
    creator.videos.length > 0
      ? await prisma.askedQuestion.findMany({
          where: { creatorId: creator.id },
          orderBy: { createdAt: "desc" },
          take: 5,
        })
      : [];

  const [isFollowing, isSubscribed] = user
    ? await Promise.all([
        prisma.follow
          .findUnique({
            where: { followerId_creatorId: { followerId: user.id, creatorId: creator.id } },
          })
          .then(Boolean),
        prisma.subscription
          .findUnique({
            where: { subscriberId_creatorId: { subscriberId: user.id, creatorId: creator.id } },
          })
          .then(Boolean),
      ])
    : [false, false];

  const subscriptionRow =
    user && isSubscribed
      ? await prisma.subscription.findUnique({
          where: { subscriberId_creatorId: { subscriberId: user.id, creatorId: creator.id } },
        })
      : null;
  const appUrl = await getAppUrl();

  // A distributor's share link points at a moment page, but the plan's
  // growth loop expects a viewer to wander back to the creator's own page
  // later and tip from there — the same 30-day attribution cookie set on
  // the moment page (see DistributorAttributionCookie) covers that.
  const cookieStore = await cookies();
  const distributorLinkId = cookieStore.get(`dlink_${creator.id}`)?.value;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      {searchParams.tipped && (
        <p className="mb-4 rounded bg-green-50 px-3 py-2 text-sm text-green-800 dark:bg-green-950 dark:text-green-400">
          Thanks for the tip! It may take a few seconds to appear below.
        </p>
      )}
      {searchParams.subscribed && (
        <p className="mb-4 rounded bg-green-50 px-3 py-2 text-sm text-green-800 dark:bg-green-950 dark:text-green-400">
          Subscribed! It may take a few seconds to unlock subscriber-only videos.
        </p>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">{creator.displayName}</h1>
            {creator.liveStream?.status === "ACTIVE" && <LiveBadge />}
          </div>
          <p className="text-sm text-zinc-500">
            @{creator.handle} · {creator._count.followers}{" "}
            {creator._count.followers === 1 ? "follower" : "followers"}
          </p>
        </div>
        <div className="flex gap-2">
          {user && !isOwner && (
            <FollowButton creatorId={creator.id} handle={creator.handle} initialFollowing={isFollowing} />
          )}
          {user && !isOwner && creator.subscriptionPriceCents !== null && (
            <>
              {isSubscribed ? (
                <UnsubscribeButton creatorId={creator.id} handle={creator.handle} />
              ) : stripeConfigured ? (
                <SubscribeCheckoutForm
                  creatorId={creator.id}
                  handle={creator.handle}
                  priceCents={creator.subscriptionPriceCents}
                />
              ) : (
                <SubscribeButton
                  creatorId={creator.id}
                  handle={creator.handle}
                  priceCents={creator.subscriptionPriceCents}
                  initialSubscribed={false}
                />
              )}
            </>
          )}
        </div>
      </div>

      {creator.bio && <p className="mt-4">{creator.bio}</p>}

      {subscriptionRow && (
        <PodcastFeedLink
          feedUrl={`${appUrl}/api/feed/${subscriptionRow.feedToken}`}
          creatorId={creator.id}
          handle={creator.handle}
        />
      )}

      {creator.liveStream?.status === "ACTIVE" && (
        <div className="mt-4">
          <Link href={`/creators/${creator.handle}/live`} className="font-medium underline">
            Watch the live stream
          </Link>
        </div>
      )}

      {user && !isOwner && (
        <TipForm creatorId={creator.id} handle={creator.handle} distributorLinkId={distributorLinkId} />
      )}

      {user && !isOwner && creator.questionPriceCents !== null && (
        <PaidQuestionForm creatorId={creator.id} handle={creator.handle} priceCents={creator.questionPriceCents} />
      )}

      {creator.videos.length > 0 && <AskTheShow creatorId={creator.id} />}

      {recentQuestions.length > 0 && (
        <div className="mt-2">
          <h3 className="text-sm font-medium text-zinc-500">Recently asked</h3>
          <ul className="mt-1 flex flex-col gap-1 text-sm">
            {recentQuestions.map((q) => (
              <li key={q.id}>
                <Link href={`/ask/${q.id}`} className="underline">
                  {q.question}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h2 className="mt-8 text-lg font-medium">Videos</h2>
      {creator.videos.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">No videos yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {creator.videos.map((video) => (
            <li key={video.id}>
              <Link href={`/videos/${video.id}`} className="font-medium underline">
                {video.title}
              </Link>
              {video.status === "PROCESSING" && (
                <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-400">
                  Processing
                </span>
              )}
              {video.subscriberOnly && (
                <span className="ml-2 rounded bg-zinc-200 px-1.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Subscribers only
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
