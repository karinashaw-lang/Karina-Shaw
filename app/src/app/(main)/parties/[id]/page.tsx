import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import PartyPlayer from "@/components/party-player";
import PartyChat from "@/components/party-chat";
import RsvpButton from "@/components/rsvp-button";

export default async function PartyPage(props: PageProps<"/parties/[id]">) {
  const { id } = await props.params;

  const [party, user] = await Promise.all([
    prisma.listeningParty.findUnique({
      where: { id },
      include: {
        video: { include: { creator: true, transcript: { orderBy: { startSeconds: "asc" } } } },
        _count: { select: { rsvps: true } },
      },
    }),
    getCurrentUser(),
  ]);

  if (!party) notFound();

  const isGoing = user
    ? Boolean(
        await prisma.partyRsvp.findUnique({
          where: { partyId_userId: { partyId: party.id, userId: user.id } },
        })
      )
    : false;

  if (!party.video.videoUrl) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-sm text-zinc-500">This episode is still processing — check back soon.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-sm text-zinc-500">
        Listening party for{" "}
        <Link href={`/videos/${party.video.id}`} className="underline">
          {party.video.title}
        </Link>{" "}
        by{" "}
        <Link href={`/creators/${party.video.creator.handle}`} className="underline">
          {party.video.creator.displayName}
        </Link>
      </p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">
        {new Date(party.scheduledAt).toLocaleString()}
      </h1>

      {user && (
        <div className="mt-3">
          <RsvpButton partyId={party.id} initialGoing={isGoing} initialCount={party._count.rsvps} />
        </div>
      )}

      <div className="mt-4">
        <PartyPlayer
          src={party.video.videoUrl}
          scheduledAt={party.scheduledAt.toISOString()}
          segments={party.video.transcript}
        />
      </div>

      <h2 className="mt-6 text-lg font-medium">Chat</h2>
      {user ? (
        <div className="mt-2">
          <PartyChat partyId={party.id} />
        </div>
      ) : (
        <p className="mt-2 text-sm text-zinc-500">
          <Link href="/login" className="underline">
            Log in
          </Link>{" "}
          to join the chat.
        </p>
      )}
    </div>
  );
}
