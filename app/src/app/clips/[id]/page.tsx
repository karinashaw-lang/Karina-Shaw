import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { buildClipCaption } from "@/lib/caption";
import { findRelatedSegments } from "@/lib/recommendations";
import SaveButton from "@/components/save-button";
import HlsPlayer from "@/components/hls-player";
import CopyCaptionButton from "@/components/copy-caption-button";
import RelatedMoments from "@/components/related-moments";

export default async function ClipPage(props: PageProps<"/clips/[id]">) {
  const { id } = await props.params;

  const [clip, user] = await Promise.all([
    prisma.clip.findUnique({
      where: { id },
      include: {
        sourceVideo: {
          include: {
            creator: true,
            transcript: {
              where: { startSeconds: { gte: 0 } },
              orderBy: { startSeconds: "asc" },
            },
          },
        },
        owner: true,
      },
    }),
    getCurrentUser(),
  ]);

  if (!clip) notFound();

  const isHls = Boolean(clip.sourceVideo.videoUrl?.endsWith(".m3u8"));
  const caption = buildClipCaption(clip, clip.sourceVideo.creator.displayName, clip.sourceVideo.transcript);
  const related = await findRelatedSegments({
    excludeVideoId: clip.sourceVideoId,
    seedText: caption,
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      {clip.sourceVideo.videoUrl ? (
        isHls ? (
          <>
            <HlsPlayer src={clip.sourceVideo.videoUrl} className="w-full rounded-lg bg-black" />
            <p className="mt-1 text-xs text-zinc-500">
              Live/Mux-hosted clips currently play the full source video — precise trimming for
              HLS sources isn&apos;t implemented yet.
            </p>
          </>
        ) : (
          <video
            controls
            className="w-full rounded-lg bg-black"
            src={`${clip.sourceVideo.videoUrl}#t=${clip.startSeconds},${clip.endSeconds}`}
          />
        )
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-lg bg-black text-sm text-zinc-300">
          Source video still processing.
        </div>
      )}

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{clip.title}</h1>
          <p className="mt-1 text-sm text-zinc-500">
            clipped by {clip.owner.name} from{" "}
            <Link href={`/videos/${clip.sourceVideo.id}`} className="underline">
              {clip.sourceVideo.title}
            </Link>{" "}
            by{" "}
            <Link href={`/creators/${clip.sourceVideo.creator.handle}`} className="underline">
              {clip.sourceVideo.creator.displayName}
            </Link>
          </p>
        </div>
        {user && <SaveButton kind="clip" itemId={clip.id} path={`/clips/${clip.id}`} />}
      </div>

      <p className="mt-2 text-sm text-zinc-500">
        {clip.startSeconds}s – {clip.endSeconds}s
      </p>

      <CopyCaptionButton caption={caption} />

      <RelatedMoments segments={related} />
    </div>
  );
}
