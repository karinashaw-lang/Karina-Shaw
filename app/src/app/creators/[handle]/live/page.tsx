import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { muxPlaybackUrl } from "@/lib/integrations/mux";
import HlsPlayer from "@/components/hls-player";
import LiveBadge from "@/components/live-badge";

export default async function CreatorLiveViewPage(props: PageProps<"/creators/[handle]/live">) {
  const { handle } = await props.params;

  const creator = await prisma.creatorProfile.findUnique({
    where: { handle },
    include: { liveStream: true },
  });

  if (!creator) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">{creator.displayName}</h1>
        {creator.liveStream?.status === "ACTIVE" && <LiveBadge />}
      </div>

      {creator.liveStream?.status === "ACTIVE" ? (
        <HlsPlayer
          src={muxPlaybackUrl(creator.liveStream.muxPlaybackId)}
          className="mt-4 w-full rounded-lg bg-black"
        />
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
