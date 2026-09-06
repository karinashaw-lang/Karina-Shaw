import "server-only";

import prisma from "@/lib/prisma";

const STOPWORDS = new Set([
  "the", "and", "that", "this", "with", "from", "have", "just", "like", "what",
  "when", "were", "your", "you", "about", "there", "their", "they", "them",
  "then", "than", "into", "over", "some", "been", "being", "would", "could",
  "should", "really", "actually", "know", "think", "going", "here", "these",
  "those", "because", "which", "will", "well", "much", "very", "also",
]);

export function extractKeywords(text: string, max = 8): string[] {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w));

  return Array.from(new Set(words)).slice(0, max);
}

export type RelatedSegment = {
  id: string;
  startSeconds: number;
  text: string;
  video: { id: string; title: string };
  creator: { handle: string; displayName: string };
};

/**
 * Cheap, off-the-shelf "moment-level recommendations": keyword overlap
 * against other videos' transcripts, not embeddings/vector search. Matches
 * the business plan's build philosophy — this is the standard-tooling
 * version, not the custom-built one.
 */
export async function findRelatedSegments({
  excludeVideoId,
  seedText,
  limit = 5,
}: {
  excludeVideoId: string;
  seedText: string;
  limit?: number;
}): Promise<RelatedSegment[]> {
  const keywords = extractKeywords(seedText);
  if (keywords.length === 0) return [];

  const candidates = await prisma.transcriptSegment.findMany({
    where: {
      videoId: { not: excludeVideoId },
      OR: keywords.map((keyword) => ({ text: { contains: keyword, mode: "insensitive" as const } })),
    },
    include: { video: { include: { creator: true } } },
    take: 200,
  });

  const scored = candidates.map((segment) => {
    const lowerText = segment.text.toLowerCase();
    const score = keywords.reduce((sum, k) => sum + (lowerText.includes(k) ? 1 : 0), 0);
    return { segment, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const seenVideos = new Set<string>();
  const results: RelatedSegment[] = [];

  for (const { segment, score } of scored) {
    if (score === 0) continue;
    if (seenVideos.has(segment.videoId)) continue;
    seenVideos.add(segment.videoId);

    results.push({
      id: segment.id,
      startSeconds: segment.startSeconds,
      text: segment.text,
      video: { id: segment.video.id, title: segment.video.title },
      creator: { handle: segment.video.creator.handle, displayName: segment.video.creator.displayName },
    });

    if (results.length >= limit) break;
  }

  return results;
}
