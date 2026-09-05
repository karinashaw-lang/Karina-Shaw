import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { isStripeConfigured } from "@/lib/integrations/stripe";
import FollowButton from "@/components/follow-button";
import SubscribeButton from "@/components/subscribe-button";
import SubscribeCheckoutForm from "@/components/subscribe-checkout-form";
import UnsubscribeButton from "@/components/unsubscribe-button";
import TipForm from "@/components/tip-form";
import LiveBadge from "@/components/live-badge";

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

      {creator.liveStream?.status === "ACTIVE" && (
        <div className="mt-4">
          <Link href={`/creators/${creator.handle}/live`} className="font-medium underline">
            Watch the live stream
          </Link>
        </div>
      )}

      {user && !isOwner && <TipForm creatorId={creator.id} handle={creator.handle} />}

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
