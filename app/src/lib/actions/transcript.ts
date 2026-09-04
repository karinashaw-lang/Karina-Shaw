"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { parseTranscript } from "@/lib/transcript";

const schema = z.object({
  videoId: z.string().min(1),
  transcript: z.string().max(50_000),
});

export type TranscriptActionState = { error: string } | null;

export async function saveTranscript(
  _prevState: TranscriptActionState,
  formData: FormData
): Promise<TranscriptActionState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to edit a transcript." };
  }

  const parsed = schema.safeParse({
    videoId: formData.get("videoId"),
    transcript: formData.get("transcript"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid transcript." };
  }

  const { videoId, transcript } = parsed.data;

  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only edit the transcript for your own videos." };
  }

  const segments = parseTranscript(transcript);
  if (segments.length === 0) {
    return {
      error:
        "Couldn't find any timestamped lines. Start each line with a time like 0:00 or 1:23:45.",
    };
  }

  await prisma.$transaction([
    prisma.transcriptSegment.deleteMany({ where: { videoId } }),
    prisma.transcriptSegment.createMany({
      data: segments.map((s) => ({ videoId, startSeconds: s.startSeconds, text: s.text })),
    }),
  ]);

  revalidatePath(`/videos/${videoId}`);
  return null;
}
