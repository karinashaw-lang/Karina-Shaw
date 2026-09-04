import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import FollowButton from "@/components/follow-button";
import SubscribeButton from "@/components/subscribe-button";
import TipForm from "@/components/tip-form";

export default async function CreatorPage(props: PageProps<"/creators/[handle]">) {
  const { handle } = await props.params;

  const [creator, user] = await Promise.all([
    prisma.creatorProfile.findUnique({
      where: { handle },
      include: {
        videos: { orderBy: { createdAt: "desc" } },
        _count: { select: { followers: true } },
      },
    }),
    getCurrentUser(),
  ]);

  if (!creator) notFound();

  const isOwner = user?.creatorProfile?.id === creator.id;

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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{creator.displayName}</h1>
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
            <SubscribeButton
              creatorId={creator.id}
              handle={creator.handle}
              priceCents={creator.subscriptionPriceCents}
              initialSubscribed={isSubscribed}
            />
          )}
        </div>
      </div>

      {creator.bio && <p className="mt-4">{creator.bio}</p>}

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
