import "server-only";

import { z } from "zod";

import prisma from "@/lib/prisma";
import { getOpenAI, isOpenAIConfigured } from "@/lib/integrations/openai";

export type HighlightMoment = {
  startSeconds: number;
  endSeconds: number;
  label: string;
  source: "ai" | "crowd";
};

const MAX_HIGHLIGHTS = 3;

/** Clips within this many seconds of each other count as the same moment. */
const CLUSTER_WINDOW_SECONDS = 20;

/**
 * Non-AI fallback: viewers already vote on what's worth watching every time
 * they make a clip, so the moments multiple people independently clipped
 * near are a real highlight signal without calling a model — same
 * "rent infrastructure, build differentiation" spirit as the keyword-based
 * recommendations. Requires at least 2 clips in a cluster; a single
 * person's clip isn't a crowd signal.
 */
async function crowdSourcedHighlights(videoId: string): Promise<HighlightMoment[]> {
  const clips = await prisma.clip.findMany({
    where: { sourceVideoId: videoId },
    orderBy: { startSeconds: "asc" },
    select: { startSeconds: true, endSeconds: true },
  });

  const clusters: { startSeconds: number; endSeconds: number; count: number }[] = [];
  for (const clip of clips) {
    const last = clusters[clusters.length - 1];
    if (last && clip.startSeconds - last.startSeconds <= CLUSTER_WINDOW_SECONDS) {
      last.endSeconds = Math.max(last.endSeconds, clip.endSeconds);
      last.count += 1;
    } else {
      clusters.push({ startSeconds: clip.startSeconds, endSeconds: clip.endSeconds, count: 1 });
    }
  }

  return clusters
    .filter((c) => c.count >= 2)
    .sort((a, b) => b.count - a.count)
    .slice(0, MAX_HIGHLIGHTS)
    .map((c) => ({
      startSeconds: c.startSeconds,
      endSeconds: c.endSeconds,
      label: `Clipped by ${c.count} viewers`,
      source: "crowd" as const,
    }));
}

const aiHighlightsSchema = z.object({
  highlights: z
    .array(
      z.object({
        startSeconds: z.number().int().min(0),
        endSeconds: z.number().int().min(0),
        label: z.string().min(1).max(80),
      })
    )
    .max(10),
});

/**
 * AI-automated highlight detection layered on the transcript pipeline (see
 * the business plan's V2 roadmap) — a real GPT pass over the transcript,
 * not a heuristic, since OpenAI is already rented infrastructure here.
 */
async function aiHighlights(
  transcript: { startSeconds: number; text: string }[]
): Promise<HighlightMoment[]> {
  const openai = getOpenAI();
  const lines = transcript.map((s) => `${s.startSeconds} ${s.text}`).join("\n");

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          'You identify the most highlight-worthy moments in a video from its timestamped transcript (format: "<seconds> <text>"). Return JSON: {"highlights": [{"startSeconds": number, "endSeconds": number, "label": string}]}, up to 3 entries ordered by how compelling the moment is. Only use timestamps that appear in the transcript, with endSeconds after startSeconds. label is a short (under 10 words) description of why it stands out. If nothing stands out, return {"highlights": []}.',
      },
      { role: "user", content: lines },
    ],
  });

  const raw = response.choices[0]?.message?.content;
  if (!raw) return [];

  let parsed;
  try {
    parsed = aiHighlightsSchema.parse(JSON.parse(raw));
  } catch {
    return [];
  }

  return parsed.highlights
    .filter((h) => h.endSeconds > h.startSeconds)
    .slice(0, MAX_HIGHLIGHTS)
    .map((h) => ({ ...h, source: "ai" as const }));
}

const cachedHighlightsSchema = z.array(
  z.object({
    startSeconds: z.number(),
    endSeconds: z.number(),
    label: z.string(),
    source: z.literal("ai"),
  })
);

/**
 * Highlight moments for a video: a real GPT pass over the transcript when
 * OPENAI_API_KEY is set, otherwise a crowd-sourced fallback from what
 * viewers have already clipped — never nothing just because there's no key.
 *
 * The AI pass is cached on the Video row (unlike every other OpenAI call in
 * this app, it fires passively on every page view rather than from a user
 * action, so re-running it on each load would be a real, avoidable cost).
 * The cache is invalidated whenever the transcript is re-saved.
 */
export async function getHighlightMoments(videoId: string): Promise<HighlightMoment[]> {
  if (isOpenAIConfigured()) {
    const [video, transcript] = await Promise.all([
      prisma.video.findUnique({
        where: { id: videoId },
        select: { highlightsJson: true, highlightsComputedAt: true },
      }),
      prisma.transcriptSegment.findMany({
        where: { videoId },
        orderBy: { startSeconds: "asc" },
        select: { startSeconds: true, text: true, createdAt: true },
      }),
    ]);

    if (transcript.length > 0) {
      const latestTranscriptEdit = transcript.reduce(
        (max, s) => (s.createdAt > max ? s.createdAt : max),
        transcript[0].createdAt
      );

      if (video?.highlightsComputedAt && video.highlightsComputedAt >= latestTranscriptEdit) {
        const cached = cachedHighlightsSchema.safeParse(video.highlightsJson);
        if (cached.success) {
          if (cached.data.length > 0) return cached.data;
        }
      } else {
        try {
          const highlights = await aiHighlights(transcript);
          await prisma.video.update({
            where: { id: videoId },
            data: { highlightsJson: highlights, highlightsComputedAt: new Date() },
          });
          if (highlights.length > 0) return highlights;
        } catch {
          // Fall through to the crowd-sourced signal below, and leave the
          // cache alone so a transient failure gets retried next time.
        }
      }
    }
  }

  return crowdSourcedHighlights(videoId);
}
