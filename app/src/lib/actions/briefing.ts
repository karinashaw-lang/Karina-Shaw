"use server";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getOpenAI } from "@/lib/integrations/openai";

const BRIEFING_DIR = path.join(process.cwd(), "public", "uploads", "briefings");

/**
 * Builds a short spoken-style script summarizing what's on the viewer's
 * wall, then synthesizes it to audio — the "commute briefing" feature.
 * Requires OPENAI_API_KEY; callers should check `isOpenAIConfigured()`
 * before showing the button that triggers this.
 */
export async function generateBriefing(): Promise<{ id: string; audioUrl: string }> {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to generate a briefing.");

  const wallItems = await prisma.wallItem.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 10,
    include: {
      video: { include: { creator: true, transcript: { orderBy: { startSeconds: "asc" }, take: 20 } } },
      clip: {
        include: {
          sourceVideo: {
            include: { creator: true, transcript: { orderBy: { startSeconds: "asc" }, take: 20 } },
          },
        },
      },
    },
  });

  if (wallItems.length === 0) {
    throw new Error("Save some videos or clips to your wall first.");
  }

  const digest = wallItems
    .map((item) => {
      const video = item.video ?? item.clip?.sourceVideo;
      if (!video) return null;
      const transcriptExcerpt = video.transcript.map((s) => s.text).join(" ").slice(0, 800);
      return [
        `Title: ${video.title}`,
        `Creator: ${video.creator.displayName}`,
        video.description ? `Description: ${video.description}` : null,
        transcriptExcerpt ? `Transcript excerpt: ${transcriptExcerpt}` : null,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .filter(Boolean)
    .join("\n\n---\n\n");

  const openai = getOpenAI();

  const scriptResponse = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You write short, warm, spoken-word audio briefings summarizing a list of videos someone saved to watch later. Write it as if a friend is catching them up during a commute — conversational, 2-3 sentences per video, under 300 words total. Do not use markdown formatting.",
      },
      { role: "user", content: digest },
    ],
  });

  const script = scriptResponse.choices[0]?.message?.content?.trim();
  if (!script) throw new Error("Could not generate a briefing script.");

  const speechResponse = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: script,
  });

  await mkdir(BRIEFING_DIR, { recursive: true });
  const filename = `${randomUUID()}.mp3`;
  const bytes = Buffer.from(await speechResponse.arrayBuffer());
  await writeFile(path.join(BRIEFING_DIR, filename), bytes);

  const briefing = await prisma.briefing.create({
    data: {
      userId: user.id,
      script,
      audioUrl: `/uploads/briefings/${filename}`,
    },
  });

  revalidatePath("/wall");
  return briefing;
}
