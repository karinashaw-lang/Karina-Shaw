import Link from "next/link";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { isOpenAIConfigured } from "@/lib/integrations/openai";
import RemoveFromWallButton from "@/components/remove-from-wall-button";
import GenerateBriefingButton from "@/components/generate-briefing-button";
import WallItemNote from "@/components/wall-item-note";
import WallCardPanel from "@/components/wall-card-panel";
import RecapPanel from "@/components/recap-panel";
import { currentMonthKey, currentWeekStartKey } from "@/lib/time";

export default async function WallPage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-sm text-zinc-500">
          <Link href="/login" className="underline">
            Log in
          </Link>{" "}
          to see your wall.
        </p>
      </div>
    );
  }

  const [items, briefings, wallCards, recapReels, liveClipRequests] = await Promise.all([
    prisma.wallItem.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: {
        video: { include: { creator: true } },
        clip: { include: { sourceVideo: { include: { creator: true } } } },
        moment: { include: { video: { include: { creator: true } } } },
      },
    }),
    prisma.briefing.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    prisma.wallCard.findMany({
      where: { userId: user.id },
      orderBy: { month: "desc" },
      select: { month: true },
    }),
    prisma.recapReel.findMany({
      where: { userId: user.id },
      orderBy: { weekStart: "desc" },
      select: { weekStart: true },
    }),
    prisma.liveClipRequest.findMany({
      where: { ownerId: user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
      include: { resultClip: true },
    }),
  ]);

  const currentMonth = currentMonthKey();
  const pastMonths = wallCards.map((c) => c.month).filter((m) => m !== currentMonth);

  const currentWeek = currentWeekStartKey();
  const pastWeeks = recapReels.map((r) => r.weekStart).filter((w) => w !== currentWeek);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Your wall</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Videos and clips you&apos;ve saved from across creators.
      </p>

      <WallCardPanel userId={user.id} pastMonths={pastMonths} />
      <RecapPanel userId={user.id} pastWeeks={pastWeeks} />

      <div className="mt-4">
        {isOpenAIConfigured() ? (
          <GenerateBriefingButton />
        ) : (
          <p className="text-xs text-zinc-500">
            Commute briefings need OPENAI_API_KEY configured.
          </p>
        )}
      </div>

      {briefings.length > 0 && (
        <div className="mt-4 flex flex-col gap-3">
          {briefings.map((briefing) => (
            <div key={briefing.id} className="rounded border border-black/10 p-3 dark:border-white/10">
              <audio controls src={briefing.audioUrl} className="w-full" />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{briefing.script}</p>
            </div>
          ))}
        </div>
      )}

      {liveClipRequests.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-medium">Live clips</h2>
          <ul className="mt-2 flex flex-col gap-2 text-sm">
            {liveClipRequests.map((request) => (
              <li key={request.id}>
                {request.resultClip ? (
                  <Link href={`/clips/${request.resultClip.id}`} className="underline">
                    {request.title}
                  </Link>
                ) : (
                  <span className="text-zinc-500">
                    {request.title} — clipped, will be ready once the stream ends
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {items.length === 0 ? (
        <p className="mt-6 text-zinc-500">Nothing saved yet.</p>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {items.map((item) => {
            const kind = item.clip ? "Clip" : item.moment ? "Moment" : "Video";
            const href = item.clip
              ? `/clips/${item.clipId}`
              : item.moment
                ? `/moments/${item.momentId}`
                : `/videos/${item.videoId}`;
            const title = item.clip ? item.clip.title : item.moment ? item.moment.title : item.video!.title;
            const creator = item.clip
              ? item.clip.sourceVideo.creator
              : item.moment
                ? item.moment.video.creator
                : item.video!.creator;

            return (
              <li
                key={item.id}
                className="flex items-start justify-between gap-4 rounded-lg border border-black/10 p-4 dark:border-white/10"
              >
                <div>
                  <span className="text-xs uppercase tracking-wide text-zinc-500">{kind}</span>
                  <Link href={href} className="block text-lg font-medium">
                    {title}
                  </Link>
                  <p className="mt-1 text-sm text-zinc-500">
                    by{" "}
                    <Link href={`/creators/${creator.handle}`} className="underline">
                      {creator.displayName}
                    </Link>
                  </p>
                  <WallItemNote wallItemId={item.id} initialNote={item.note} />
                </div>
                <RemoveFromWallButton wallItemId={item.id} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
