import "server-only";

import prisma from "@/lib/prisma";
import { getHighlightMoments } from "@/lib/highlights";

/**
 * Seeds a video's AI-suggested Curated Moments the first time anyone looks
 * — reusing the same highlight-detection pass (GPT when configured, a
 * crowd-sourced fallback otherwise) that already exists for the
 * "Highlights" section, rather than a second AI pipeline. Suggestions are
 * invisible to everyone but the creator until published. Dismissed rows
 * are kept (status DISMISSED, not deleted) specifically so this check
 * stays true forever once suggestions have run once — a creator who
 * passes on every suggestion won't see them regenerate on the next visit.
 */
export async function ensureSuggestedMoments(videoId: string): Promise<void> {
  const existingCount = await prisma.curatedMoment.count({ where: { videoId } });
  if (existingCount > 0) return;

  const highlights = await getHighlightMoments(videoId);
  if (highlights.length === 0) return;

  await prisma.curatedMoment.createMany({
    data: highlights.map((h) => ({
      videoId,
      title: h.label,
      startSeconds: h.startSeconds,
      endSeconds: h.endSeconds,
      // Preserve which signal actually produced this — a crowd-sourced
      // suggestion (no OpenAI key) must never be labeled "AI" in the UI.
      source: h.source === "ai" ? ("AI" as const) : ("CROWD" as const),
      status: "SUGGESTED" as const,
    })),
  });
}

/**
 * A published moment plus enough of its video/creator to render the public
 * moment page and the embeddable card — shared so the two don't drift.
 * Returns null for anything not PUBLISHED (suggested/dismissed moments are
 * never public, see the plan's "nothing spreads unless the creator says
 * so").
 */
export async function getPublicMoment(momentId: string) {
  const moment = await prisma.curatedMoment.findUnique({
    where: { id: momentId },
    include: { video: { include: { creator: true } } },
  });
  if (!moment || moment.status !== "PUBLISHED") return null;
  return moment;
}
