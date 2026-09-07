"use server";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import { getAppUrl } from "@/lib/app-url";
import prisma from "@/lib/prisma";
import { getElevenLabs, isElevenLabsConfigured } from "@/lib/integrations/elevenlabs";
import { DUB_LANGUAGES, type DubLanguageCode } from "@/lib/dub-languages";

const DUB_DIR = path.join(process.cwd(), "public", "uploads", "dubs");

const requestSchema = z.object({
  videoId: z.string().min(1),
  targetLanguage: z.enum(DUB_LANGUAGES.map((l) => l.code) as [DubLanguageCode, ...DubLanguageCode[]]),
});

export type DubActionState = { error: string } | { success: true } | null;

/**
 * Kicks off an ElevenLabs dubbing job for a video into another language —
 * V3's AI dubbing, "via third-party providers, not built in-house" per the
 * business plan. Shared per video+language: if this combination has
 * already been requested, this just reports its existing status instead of
 * paying for a duplicate dub.
 */
export async function requestDub(
  _prevState: DubActionState,
  formData: FormData
): Promise<DubActionState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "You must be signed in to request a dub." };
  }

  if (!isElevenLabsConfigured()) {
    return { error: "Dubbing needs ELEVENLABS_API_KEY configured." };
  }

  const parsed = requestSchema.safeParse({
    videoId: formData.get("videoId"),
    targetLanguage: formData.get("targetLanguage"),
  });
  if (!parsed.success) {
    return { error: "Pick a valid language." };
  }
  const { videoId, targetLanguage } = parsed.data;

  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video || !video.videoUrl) {
    return { error: "This video isn't ready to dub yet." };
  }

  const existing = await prisma.dub.findUnique({
    where: { videoId_targetLanguage: { videoId, targetLanguage } },
  });
  if (existing) {
    // Already requested (by anyone) — nothing new to do, just let the UI
    // show its current status rather than starting a second, billable dub.
    revalidatePath(`/videos/${videoId}`);
    return { success: true };
  }

  const sourceUrl = video.videoUrl.startsWith("http")
    ? video.videoUrl
    : `${await getAppUrl()}${video.videoUrl}`;

  const elevenlabs = getElevenLabs();
  let dubbingId: string;
  try {
    const response = await elevenlabs.dubbing.create({
      sourceUrl,
      targetLang: targetLanguage,
      name: video.title,
    });
    dubbingId = response.dubbingId;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not start the dub." };
  }

  await prisma.dub.create({
    data: {
      videoId,
      requestedById: user.id,
      targetLanguage,
      elevenLabsDubbingId: dubbingId,
    },
  });

  revalidatePath(`/videos/${videoId}`);
  return { success: true };
}

/**
 * Checks an in-progress dub's status and, once ElevenLabs reports it done,
 * downloads the dubbed audio and saves it locally (same local-disk stand-in
 * as every other media file in this app — see src/lib/video-storage.ts).
 * Manually triggered from the UI rather than polled on an interval: unlike
 * the DB-backed chat polling elsewhere, this is a real billable API call.
 */
export async function checkDubStatus(dubId: string): Promise<void> {
  const dub = await prisma.dub.findUnique({ where: { id: dubId } });
  if (!dub || dub.status !== "PROCESSING" || !dub.elevenLabsDubbingId || !isElevenLabsConfigured()) {
    return;
  }

  const elevenlabs = getElevenLabs();

  let metadata;
  try {
    metadata = await elevenlabs.dubbing.get(dub.elevenLabsDubbingId);
  } catch (err) {
    await prisma.dub.update({
      where: { id: dub.id },
      data: { status: "ERRORED", error: err instanceof Error ? err.message : "Status check failed." },
    });
    revalidatePath(`/videos/${dub.videoId}`);
    return;
  }

  if (metadata.status === "dubbed") {
    try {
      const stream = await elevenlabs.dubbing.audio.get(dub.elevenLabsDubbingId, dub.targetLanguage);
      const bytes = Buffer.from(await new Response(stream).arrayBuffer());

      await mkdir(DUB_DIR, { recursive: true });
      const filename = `${randomUUID()}.mp4`;
      await writeFile(path.join(DUB_DIR, filename), bytes);

      await prisma.dub.update({
        where: { id: dub.id },
        data: { status: "READY", audioUrl: `/uploads/dubs/${filename}` },
      });
    } catch (err) {
      await prisma.dub.update({
        where: { id: dub.id },
        data: { status: "ERRORED", error: err instanceof Error ? err.message : "Could not fetch the dubbed file." },
      });
    }
  } else if (metadata.status === "dubbing_failed" || metadata.error) {
    await prisma.dub.update({
      where: { id: dub.id },
      data: { status: "ERRORED", error: metadata.error ?? "Dubbing failed." },
    });
  }
  // Otherwise still in progress ("dubbing") — leave it as PROCESSING.

  revalidatePath(`/videos/${dub.videoId}`);
}
