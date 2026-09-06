import "server-only";

import prisma from "@/lib/prisma";

export type WallCardStats = {
  displayName: string;
  totalSaved: number;
  topMoments: { title: string; creatorName: string; note: string | null }[];
  mostRewatched: { title: string; creatorName: string; viewCount: number } | null;
  tasteTwin: { name: string; overlapCount: number } | null;
};

type WallItemWithRelations = Awaited<ReturnType<typeof loadWallItems>>[number];

async function loadWallItems(userId: string) {
  return prisma.wallItem.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      video: { include: { creator: true } },
      clip: { include: { sourceVideo: { include: { creator: true } } } },
    },
  });
}

function itemVideo(item: WallItemWithRelations) {
  return item.video ?? item.clip?.sourceVideo ?? null;
}

function itemTitle(item: WallItemWithRelations) {
  return item.clip ? item.clip.title : (item.video?.title ?? "Untitled");
}

/**
 * Aggregates the stats behind a viewer's Wall Card: their top saved
 * moments, most-rewatched item (see viewCount on WallItem), and a "taste
 * twin" — the other viewer whose saved videos overlap theirs the most.
 * Pure keyword/SQL aggregation, no ML — matches the build philosophy.
 */
export async function getWallCardStats(userId: string): Promise<WallCardStats | null> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return null;

  const items = await loadWallItems(userId);

  const topMoments = [...items]
    .sort((a, b) => {
      const score = (item: WallItemWithRelations) => (item.note ? 2 : 0) + (item.viewCount > 0 ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, 3)
    .map((item) => ({
      title: itemTitle(item),
      creatorName: itemVideo(item)?.creator.displayName ?? "Unknown",
      note: item.note,
    }));

  const mostRewatchedItem = items
    .filter((item) => item.viewCount > 0)
    .sort((a, b) => b.viewCount - a.viewCount)[0];

  const mostRewatched = mostRewatchedItem
    ? {
        title: itemTitle(mostRewatchedItem),
        creatorName: itemVideo(mostRewatchedItem)?.creator.displayName ?? "Unknown",
        viewCount: mostRewatchedItem.viewCount,
      }
    : null;

  const videoIds = Array.from(
    new Set(items.map((item) => item.videoId ?? item.clip?.sourceVideoId).filter((v): v is string => Boolean(v)))
  );

  let tasteTwin: WallCardStats["tasteTwin"] = null;
  if (videoIds.length > 0) {
    const overlapping = await prisma.wallItem.findMany({
      where: {
        userId: { not: userId },
        OR: [{ videoId: { in: videoIds } }, { clip: { sourceVideoId: { in: videoIds } } }],
      },
      include: { user: true },
    });

    const counts = new Map<string, { name: string; count: number }>();
    for (const item of overlapping) {
      const existing = counts.get(item.userId) ?? { name: item.user.name, count: 0 };
      existing.count += 1;
      counts.set(item.userId, existing);
    }

    const best = Array.from(counts.values()).sort((a, b) => b.count - a.count)[0];
    if (best) tasteTwin = { name: best.name, overlapCount: best.count };
  }

  return {
    displayName: user.name,
    totalSaved: items.length,
    topMoments,
    mostRewatched,
    tasteTwin,
  };
}
