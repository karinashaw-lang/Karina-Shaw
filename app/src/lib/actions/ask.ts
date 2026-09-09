"use server";

import { z } from "zod";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { extractKeywords } from "@/lib/recommendations";
import { getOpenAI, isOpenAIConfigured } from "@/lib/integrations/openai";

export type AskSource = {
  segmentId: string;
  videoId: string;
  videoTitle: string;
  startSeconds: number;
  text: string;
};

export type AskTheShowState =
  | { error: string }
  | { id: string | null; answer: string | null; sources: AskSource[] }
  | null;

const questionSchema = z.object({
  creatorId: z.string().min(1),
  question: z.string().min(3).max(300),
});

/**
 * "Ask the show" — a question-answering layer over a creator's whole
 * catalog, built on the transcript search infrastructure that already
 * exists (keyword match, not a vector DB — see the build philosophy).
 * Without OPENAI_API_KEY this still returns the matching moments (a scoped
 * search), just without a synthesized answer.
 */
export async function askTheShow(
  _prevState: AskTheShowState,
  formData: FormData
): Promise<AskTheShowState> {
  const parsed = questionSchema.safeParse({
    creatorId: formData.get("creatorId"),
    question: formData.get("question"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Ask a real question." };
  }
  const { creatorId, question } = parsed.data;

  const keywords = extractKeywords(question, 10);
  if (keywords.length === 0) {
    return { error: "Try a more specific question." };
  }

  const candidates = await prisma.transcriptSegment.findMany({
    where: {
      video: { creatorId },
      OR: keywords.map((keyword) => ({ text: { contains: keyword, mode: "insensitive" as const } })),
    },
    include: { video: true },
    take: 100,
  });

  const scored = candidates
    .map((segment) => {
      const lowerText = segment.text.toLowerCase();
      const score = keywords.reduce((sum, k) => sum + (lowerText.includes(k) ? 1 : 0), 0);
      return { segment, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const sources: AskSource[] = scored.map(({ segment }) => ({
    segmentId: segment.id,
    videoId: segment.videoId,
    videoTitle: segment.video.title,
    startSeconds: segment.startSeconds,
    text: segment.text,
  }));

  if (sources.length === 0) {
    return { id: null, answer: null, sources: [] };
  }

  let answer: string | null = null;

  if (isOpenAIConfigured()) {
    const openai = getOpenAI();
    const excerpts = sources
      .map((s, i) => `[${i + 1}] (from "${s.videoTitle}") ${s.text}`)
      .join("\n");

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You answer questions about a creator's video catalog using ONLY the numbered excerpts provided. Cite excerpts inline like [1]. If the excerpts don't actually answer the question, say so plainly rather than guessing. Keep it to 2-4 sentences.",
        },
        { role: "user", content: `Question: ${question}\n\nExcerpts:\n${excerpts}` },
      ],
    });

    answer = response.choices[0]?.message?.content?.trim() ?? null;
  }

  // Persisted automatically, with no creator approval step — this is just
  // a computed answer over the creator's own already-public transcript,
  // not a viewer editorial decision the way a Curated Moment is. See the
  // plan's growth loop: every answered question becomes a public,
  // indexable page.
  const user = await getCurrentUser();
  const asked = await prisma.askedQuestion.create({
    data: {
      creatorId,
      askedById: user?.id,
      question,
      answer,
      sourcesJson: sources,
    },
  });

  return { id: asked.id, answer, sources };
}
