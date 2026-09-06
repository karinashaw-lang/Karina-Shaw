import "server-only";

import prisma from "@/lib/prisma";
import { getCurrentStreak } from "@/lib/streaks";

export type RecapStats = {
  displayName: string;
  weekLabel: string;
  activeDays: number;
  streak: number;
  commentsPosted: number;
  itemsSaved: number;
  creatorsFollowed: number;
  guestsFollowed: number;
  topCreator: { name: string; count: number } | null;
};

const DAY_MS = 24 * 60 * 60 * 1000;

function weekRange(weekStart: string): { start: Date; end: Date; endDateStr: string } {
  const start = new Date(`${weekStart}T00:00:00Z`);
  const end = new Date(start.getTime() + 7 * DAY_MS);
  return { start, end, endDateStr: end.toISOString().slice(0, 10) };
}

/**
 * Aggregates the stats behind a viewer's Recap Reel — a weekly "habit"
 * summary distinct from the Wall Card: it's about how active they were
 * (streak, active days, comments, follows, saves), not what they chose to
 * save and share. Built entirely from tables that already exist for other
 * features (DailyActivity, Comment, Follow, GuestFollow, WallItem), so no
 * new tracking was added just for this.
 */
export async function getRecapStats(userId: string, weekStart: string): Promise<RecapStats | null> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return null;

  const { start, end, endDateStr } = weekRange(weekStart);

  const [activeDays, streak, commentsPosted, savedItems, creatorsFollowed, guestsFollowed] =
    await Promise.all([
      prisma.dailyActivity.count({ where: { userId, date: { gte: weekStart, lt: endDateStr } } }),
      getCurrentStreak(userId),
      prisma.comment.count({ where: { userId, createdAt: { gte: start, lt: end } } }),
      prisma.wallItem.findMany({
        where: { userId, createdAt: { gte: start, lt: end } },
        include: {
          video: { include: { creator: true } },
          clip: { include: { sourceVideo: { include: { creator: true } } } },
        },
      }),
      prisma.follow.count({ where: { followerId: userId, createdAt: { gte: start, lt: end } } }),
      prisma.guestFollow.count({ where: { followerId: userId, createdAt: { gte: start, lt: end } } }),
    ]);

  const counts = new Map<string, number>();
  for (const item of savedItems) {
    const creator = item.video?.creator ?? item.clip?.sourceVideo.creator;
    if (creator) counts.set(creator.displayName, (counts.get(creator.displayName) ?? 0) + 1);
  }
  let topCreator: RecapStats["topCreator"] = null;
  for (const [name, count] of counts) {
    if (!topCreator || count > topCreator.count) topCreator = { name, count };
  }

  const weekLabel = `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${new Date(
    end.getTime() - DAY_MS
  ).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;

  return {
    displayName: user.name,
    weekLabel,
    activeDays,
    streak,
    commentsPosted,
    itemsSaved: savedItems.length,
    creatorsFollowed,
    guestsFollowed,
    topCreator,
  };
}
