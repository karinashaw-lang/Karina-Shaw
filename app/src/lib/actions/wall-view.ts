"use server";

import prisma from "@/lib/prisma";

/**
 * Increments a wall item's view count when its owner revisits it — the only
 * signal behind the Wall Card's "most-rewatched" stat. Called via
 * `after()` from the video/clip pages so it never blocks or affects render.
 * A no-op if the viewer hasn't actually saved this item.
 */
export async function recordWallItemView(userId: string, target: { videoId?: string; clipId?: string }) {
  await prisma.wallItem.updateMany({
    where: {
      userId,
      ...(target.videoId ? { videoId: target.videoId } : {}),
      ...(target.clipId ? { clipId: target.clipId } : {}),
    },
    data: { viewCount: { increment: 1 } },
  });
}
