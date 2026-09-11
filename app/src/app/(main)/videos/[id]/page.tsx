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
import EffortBadge from "@/components/effort-badge";
import EffortBadgeEditor from "@/components/effort-badge-editor";
import BehindTheCutEditor from "@/components/behind-the-cut-editor";
import BehindTheCutPanel from "@/components/behind-the-cut-panel";
import EarlyAccessEditor from "@/components/early-access-editor";
import VideoExtraEditor from "@/components/video-extra-editor";
import VideoExtrasList from "@/components/video-extras-list";
import { signFileUrl } from "@/lib/file-signing";
import { hoursAgo, nowMs } from "@/lib/time";

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
        behindTheCut: true,
        extras: { orderBy: { createdAt: "asc" } },
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
    user && !isOwner
      ? Boolean(
          await prisma.subscription.findUnique({
            where: {
              subscriberId_creatorId: { subscriberId: user.id, creatorId: video.creatorId },
            },
          })
        )
      : false;

  const inEarlyAccessWindow = Boolean(video.earlyAccessUntil && video.earlyAccessUntil > new Date());
  const isLocked = (video.subscriberOnly || inEarlyAccessWindow) && !isOwner && !isSubscribed;

  const behindTheCutUnlock =
    user && video.behindTheCut && !isOwner
      ? await prisma.behindTheCutUnlock.findUnique({
          where: {
            behindTheCutId_userId: { behindTheCutId: video.behindTheCut.id, userId: user.id },
          },
        })
      : null;

  const hasBehindTheCutAccess = isOwner || isSubscribed || Boolean(behindTheCutUnlock);

  const behindTheCutHasContent = Boolean(
    video.behindTheCut &&
      (video.behindTheCut.planText ||
        video.behindTheCut.rawFootageUrl ||
        video.behindTheCut.cutScenesUrl ||
        video.behindTheCut.kitText ||
        video.behindTheCut.hardPartText)
  );

  const extraUnlocks =
    user && video.extras.length > 0 && !isOwner
      ? await prisma.videoExtraUnlock.findMany({
          where: { userId: user.id, videoExtraId: { in: video.extras.map((e) => e.id) } },
        })
      : [];
  const unlockedExtraIds = new Set(
    isOwner || isSubscribed ? video.extras.map((e) => e.id) : extraUnlocks.map((u) => u.videoExtraId)
  );

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
            <p className="text-lg font-medium">
              {!video.subscriberOnly && inEarlyAccessWindow ? "Early access for subscribers" : "Subscribers only"}
            </p>
            <p className="mt-1 text-sm text-zinc-300">
              <Link href={`/creators/${video.creator.handle}`} className="underline">
                Subscribe to {video.creator.displayName}
              </Link>{" "}
              {!video.subscriberOnly && inEarlyAccessWindow
                ? "to watch it now — everyone else can watch once early access ends."
                : "to watch this video."}
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
          <EffortBadge
            hours={video.effortHours}
            reshoots={video.effortReshoots}
            minutesCut={video.effortMinutesCut}
          />
        </div>
        {user && !isLocked && <SaveButton kind="video" itemId={video.id} path={`/videos/${video.id}`} />}
      </div>

      {video.description && <p className="mt-4">{video.description}</p>}

      {isOwner && (
        <EffortBadgeEditor
          videoId={video.id}
          hours={video.effortHours}
          reshoots={video.effortReshoots}
          minutesCut={video.effortMinutesCut}
        />
      )}

      {isOwner && video.creator.subscriptionPriceCents !== null && (
        <EarlyAccessEditor
          videoId={video.id}
          daysRemaining={
            video.earlyAccessUntil
              ? Math.max(0, Math.ceil((video.earlyAccessUntil.getTime() - nowMs()) / (24 * 60 * 60 * 1000)))
              : 0
          }
        />
      )}

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

      {!isLocked && isOwner && (
        <div className="mt-8 rounded-lg border border-black/10 p-4 dark:border-white/10">
          <h2 className="text-lg font-medium">Behind the Cut</h2>
          <p className="mt-1 text-sm text-zinc-500">
            The plan, the raw footage, the cut scenes, the kit, the hard part — share as much or as
            little as you want. Viewers pay to unlock it, or get it free with a subscription.
          </p>
          <BehindTheCutEditor
            videoId={video.id}
            existing={
              video.behindTheCut
                ? {
                    planText: video.behindTheCut.planText,
                    rawFootageUrl: video.behindTheCut.rawFootageUrl,
                    cutScenesUrl: video.behindTheCut.cutScenesUrl,
                    kitText: video.behindTheCut.kitText,
                    hardPartText: video.behindTheCut.hardPartText,
                    priceCents: video.behindTheCut.priceCents,
                  }
                : null
            }
          />
        </div>
      )}
      {!isLocked && !isOwner && behindTheCutHasContent && video.behindTheCut && (
        <BehindTheCutPanel
          videoId={video.id}
          content={
            hasBehindTheCutAccess
              ? {
                  planText: video.behindTheCut.planText,
                  rawFootageUrl: video.behindTheCut.rawFootageUrl
                    ? signFileUrl(video.behindTheCut.rawFootageUrl)
                    : null,
                  cutScenesUrl: video.behindTheCut.cutScenesUrl
                    ? signFileUrl(video.behindTheCut.cutScenesUrl)
                    : null,
                  kitText: video.behindTheCut.kitText,
                  hardPartText: video.behindTheCut.hardPartText,
                  priceCents: video.behindTheCut.priceCents,
                }
              : {
                  planText: null,
                  rawFootageUrl: null,
                  cutScenesUrl: null,
                  kitText: null,
                  hardPartText: null,
                  priceCents: video.behindTheCut.priceCents,
                }
          }
          hasAccess={hasBehindTheCutAccess}
          isSubscribedIncluded={true}
        />
      )}

      {!isLocked && isOwner && (
        <VideoExtraEditor
          videoId={video.id}
          path={`/videos/${video.id}`}
          extras={video.extras.map((e) => ({
            id: e.id,
            type: e.type,
            title: e.title,
            priceCents: e.priceCents,
          }))}
        />
      )}
      {!isLocked && !isOwner && (
        <VideoExtrasList
          extras={video.extras.map((e) => ({
            id: e.id,
            type: e.type,
            title: e.title,
            priceCents: e.priceCents,
            text: unlockedExtraIds.has(e.id) ? e.text : null,
            fileUrl: unlockedExtraIds.has(e.id) && e.fileUrl ? signFileUrl(e.fileUrl) : null,
          }))}
          unlockedIds={unlockedExtraIds}
          isSubscribedIncluded={true}
        />
      )}

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
