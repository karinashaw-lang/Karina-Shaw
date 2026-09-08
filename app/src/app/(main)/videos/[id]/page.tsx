import Link from "next/link";
import { notFound } from "next/navigation";
import { after } from "next/server";

import prisma from "@/lib/prisma";
import { recordWallItemView } from "@/lib/actions/wall-view";
import { recordDailyActivity } from "@/lib/actions/activity";
import { getCurrentUser } from "@/lib/auth";
import CommentForm from "@/components/comment-form";
import SaveButton from "@/components/save-button";
import ClipForm from "@/components/clip-form";
import VideoWithTranscript from "@/components/video-with-transcript";
import TranscriptEditor from "@/components/transcript-editor";
import RelatedMoments from "@/components/related-moments";
import { findRelatedSegments } from "@/lib/recommendations";
import HighlightMoments from "@/components/highlight-moments";
import { getHighlightMoments } from "@/lib/highlights";
import SchedulePartyForm from "@/components/schedule-party-form";
import GuestEditor from "@/components/guest-editor";
import DubPanel from "@/components/dub-panel";
import { isElevenLabsConfigured } from "@/lib/integrations/elevenlabs";
import CuratedMomentsCurator from "@/components/curated-moments-curator";
import PublishedMomentsList from "@/components/published-moments-list";
import { ensureSuggestedMoments } from "@/lib/curated-moments";
import { getAppUrl } from "@/lib/app-url";
import { hoursAgo } from "@/lib/time";

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
        listeningParties: {
          where: { scheduledAt: { gte: hoursAgo(6) } },
          orderBy: { scheduledAt: "asc" },
        },
        guests: { include: { guest: true } },
        dubs: { orderBy: { createdAt: "asc" } },
      },
    }),
    getCurrentUser(),
  ]);

  if (!video) notFound();

  if (user) {
    after(() => recordWallItemView(user.id, { videoId: video.id }));
    after(() => recordDailyActivity(user.id));
  }

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

  const relatedSegments =
    !isLocked && video.transcript.length > 0
      ? await findRelatedSegments({
          excludeVideoId: video.id,
          seedText: video.transcript.map((s) => s.text).join(" "),
        })
      : [];

  const highlights = isLocked ? [] : await getHighlightMoments(video.id);

  if (isOwner && !isLocked) {
    await ensureSuggestedMoments(video.id);
  }
  const curatedMoments = isLocked
    ? []
    : await prisma.curatedMoment.findMany({
        where: { videoId: video.id, status: isOwner ? { in: ["SUGGESTED", "PUBLISHED"] } : "PUBLISHED" },
        orderBy: { createdAt: "asc" },
      });
  const appUrl = await getAppUrl();

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
          audioSrc={video.audioUrl}
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

      {video.guests.length > 0 && (
        <p className="mt-2 text-sm text-zinc-500">
          Featuring{" "}
          {video.guests.map(({ guest }, i) => (
            <span key={guest.id}>
              <Link href={`/guests/${guest.id}`} className="underline">
                {guest.name}
              </Link>
              {i < video.guests.length - 1 && ", "}
            </span>
          ))}
        </p>
      )}

      {isOwner && (
        <GuestEditor videoId={video.id} initialNames={video.guests.map(({ guest }) => guest.name)} />
      )}

      {isLocked ? null : isOwner && (
        <TranscriptEditor
          videoId={video.id}
          initialText={video.transcript.map((s) => `${s.startSeconds} ${s.text}`).join("\n")}
        />
      )}

      {user && !isLocked && <ClipForm videoId={video.id} />}

      <HighlightMoments videoId={video.id} highlights={highlights} />

      {!isLocked && user && video.videoUrl && (
        <DubPanel videoId={video.id} dubs={video.dubs} elevenLabsConfigured={isElevenLabsConfigured()} />
      )}

      {!isLocked && isOwner && (
        <CuratedMomentsCurator videoId={video.id} moments={curatedMoments} appUrl={appUrl} />
      )}
      {!isLocked && !isOwner && <PublishedMomentsList moments={curatedMoments} />}

      {!isLocked && video.listeningParties.length > 0 && (
        <div className="mt-4">
          <h2 className="text-sm font-medium">Listening parties</h2>
          <ul className="mt-1 flex flex-col gap-1 text-sm">
            {video.listeningParties.map((party) => (
              <li key={party.id}>
                <Link href={`/parties/${party.id}`} className="underline">
                  {new Date(party.scheduledAt).toLocaleString()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isLocked && isOwner && <SchedulePartyForm videoId={video.id} />}

      <RelatedMoments segments={relatedSegments} />

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
