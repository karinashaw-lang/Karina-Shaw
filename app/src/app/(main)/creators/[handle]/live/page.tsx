import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { muxPlaybackUrl } from "@/lib/integrations/mux";
import HlsPlayer from "@/components/hls-player";
import LiveBadge from "@/components/live-badge";
import LiveChat from "@/components/live-chat";
import RequestLiveClipForm from "@/components/request-live-clip-form";

export default async function CreatorLiveViewPage(props: PageProps<"/creators/[handle]/live">) {
  const { handle } = await props.params;

  const [creator, user] = await Promise.all([
    prisma.creatorProfile.findUnique({
      where: { handle },
      include: { liveStream: true },
    }),
    getCurrentUser(),
  ]);

  if (!creator) notFound();

  const isLive = creator.liveStream?.status === "ACTIVE";

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">{creator.displayName}</h1>
        {isLive && <LiveBadge />}
      </div>

      {isLive && creator.liveStream ? (
        <>
          <HlsPlayer
            src={muxPlaybackUrl(creator.liveStream.muxPlaybackId)}
            className="mt-4 w-full rounded-lg bg-black"
          />

          {user ? (
            <>
              <RequestLiveClipForm liveStreamId={creator.liveStream.id} />
              <div className="mt-4">
                <LiveChat liveStreamId={creator.liveStream.id} />
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm text-zinc-500">
              <Link href="/login" className="underline">
                Log in
              </Link>{" "}
              to chat and clip moments from this stream.
            </p>
          )}
        </>
      ) : (
        <p className="mt-4 text-sm text-zinc-500">
          {creator.displayName} isn&apos;t live right now.{" "}
          <Link href={`/creators/${handle}`} className="underline">
            View their profile
          </Link>{" "}
          to see their past videos instead.
        </p>
      )}
    </div>
  );
}
