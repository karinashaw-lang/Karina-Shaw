import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import CommentForm from "@/components/comment-form";
import SaveButton from "@/components/save-button";
import ClipForm from "@/components/clip-form";
import VideoWithTranscript from "@/components/video-with-transcript";
import TranscriptEditor from "@/components/transcript-editor";

export default async function VideoPage(props: PageProps<"/videos/[id]">) {
  const { id } = await props.params;
  const searchParams = await props.searchParams;
  const seekParam = Array.isArray(searchParams.t) ? searchParams.t[0] : searchParams.t;
  const initialSeek = seekParam ? Number(seekParam) : undefined;

  const [video, user] = await Promise.all([
    prisma.video.findUnique({
      where: { id },
      include: {
        creator: true,
        comments: { orderBy: { createdAt: "asc" }, include: { user: true } },
        transcript: { orderBy: { startSeconds: "asc" } },
      },
    }),
    getCurrentUser(),
  ]);

  if (!video) notFound();

  const isOwner = user?.creatorProfile?.id === video.creatorId;

  const isSubscribed =
    user && video.subscriberOnly && !isOwner
      ? Boolean(
          await prisma.subscription.findUnique({
            where: {
              subscriberId_creatorId: { subscriberId: user.id, creatorId: video.creatorId },
            },
          })
        )
      : false;

  const isLocked = video.subscriberOnly && !isOwner && !isSubscribed;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      {isLocked ? (
        <div className="flex aspect-video items-center justify-center rounded-lg bg-black text-center text-white">
          <div>
            <p className="text-lg font-medium">Subscribers only</p>
            <p className="mt-1 text-sm text-zinc-300">
              <Link href={`/creators/${video.creator.handle}`} className="underline">
                Subscribe to {video.creator.displayName}
              </Link>{" "}
              to watch this video.
            </p>
          </div>
        </div>
      ) : video.status === "PROCESSING" || !video.videoUrl ? (
        <div className="flex aspect-video items-center justify-center rounded-lg bg-black text-center text-white">
          <p className="text-sm text-zinc-300">
            {video.status === "ERRORED"
              ? "Something went wrong processing this video."
              : "Still processing — check back in a moment."}
          </p>
        </div>
      ) : (
        <VideoWithTranscript
          src={video.videoUrl}
          initialSeek={Number.isFinite(initialSeek) ? initialSeek : undefined}
          segments={video.transcript}
        />
      )}

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{video.title}</h1>
          <p className="mt-1 text-sm text-zinc-500">
            by{" "}
            <Link href={`/creators/${video.creator.handle}`} className="underline">
              {video.creator.displayName}
            </Link>
          </p>
        </div>
        {user && !isLocked && <SaveButton kind="video" itemId={video.id} path={`/videos/${video.id}`} />}
      </div>

      {video.description && <p className="mt-4">{video.description}</p>}

      {isLocked ? null : isOwner && (
        <TranscriptEditor
          videoId={video.id}
          initialText={video.transcript.map((s) => `${s.startSeconds} ${s.text}`).join("\n")}
        />
      )}

      {user && !isLocked && <ClipForm videoId={video.id} />}

      <h2 className="mt-8 text-lg font-medium">
        Comments ({video.comments.length})
      </h2>

      <ul className="mt-4 flex flex-col gap-3">
        {video.comments.map((comment) => (
          <li key={comment.id} className="text-sm">
            <span className="font-medium">{comment.user.name}</span>{" "}
            <span className="text-zinc-600 dark:text-zinc-400">{comment.body}</span>
          </li>
        ))}
      </ul>

      {user ? (
        <CommentForm videoId={video.id} />
      ) : (
        <p className="mt-4 text-sm text-zinc-500">
          <Link href="/login" className="underline">
            Log in
          </Link>{" "}
          to leave a comment, save this video, or make a clip.
        </p>
      )}
    </div>
  );
}
