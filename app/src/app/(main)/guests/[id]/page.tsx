import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import GuestFollowButton from "@/components/guest-follow-button";

export default async function GuestPage(props: PageProps<"/guests/[id]">) {
  const { id } = await props.params;

  const [guest, user] = await Promise.all([
    prisma.guest.findUnique({
      where: { id },
      include: {
        _count: { select: { followers: true } },
        videos: {
          include: { video: { include: { creator: true } } },
          orderBy: { video: { createdAt: "desc" } },
        },
      },
    }),
    getCurrentUser(),
  ]);

  if (!guest) notFound();

  const isFollowing = user
    ? Boolean(
        await prisma.guestFollow.findUnique({
          where: { followerId_guestId: { followerId: user.id, guestId: guest.id } },
        })
      )
    : false;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{guest.name}</h1>
          <p className="text-sm text-zinc-500">
            {guest._count.followers} {guest._count.followers === 1 ? "follower" : "followers"}
          </p>
        </div>
        {user && <GuestFollowButton guestId={guest.id} initialFollowing={isFollowing} />}
      </div>

      {guest.bio && <p className="mt-4">{guest.bio}</p>}

      <h2 className="mt-8 text-lg font-medium">Appears in</h2>
      {guest.videos.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">Not tagged on any episodes yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {guest.videos.map(({ video }) => (
            <li key={video.id}>
              <Link href={`/videos/${video.id}`} className="font-medium underline">
                {video.title}
              </Link>
              <p className="text-sm text-zinc-500">
                by{" "}
                <Link href={`/creators/${video.creator.handle}`} className="underline">
                  {video.creator.displayName}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      )}

      {!user && (
        <p className="mt-4 text-sm text-zinc-500">
          <Link href="/login" className="underline">
            Log in
          </Link>{" "}
          to follow {guest.name}.
        </p>
      )}
    </div>
  );
}
