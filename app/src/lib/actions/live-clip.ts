"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const requestSchema = z.object({
  liveStreamId: z.string().min(1),
  title: z.string().min(1).max(120),
});

export type LiveClipActionState = { error: string } | { success: true } | null;

/**
 * Marks the last ~30 seconds of a live broadcast as a clip the viewer wants
 * — V2 Tier 2's real-time viewer clipping. There's no Video to attach a
 * real Clip to yet while the stream is still live, so this just records
 * *when* (seconds since the stream went active) and turns into a real Clip
 * once the broadcast ends and Mux's recording is ready (see the mux
 * webhook's materializeLiveRecording).
 */
export async function requestLiveClip(
  _prevState: LiveClipActionState,
  formData: FormData
): Promise<LiveClipActionState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "You must be signed in to clip a moment." };
  }

  const parsed = requestSchema.safeParse({
    liveStreamId: formData.get("liveStreamId"),
    title: formData.get("title"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid clip request." };
  }

  const liveStream = await prisma.liveStream.findUnique({ where: { id: parsed.data.liveStreamId } });
  if (!liveStream || liveStream.status !== "ACTIVE" || !liveStream.wentLiveAt) {
    return { error: "This stream isn't live right now." };
  }

  const markedAtSeconds = Math.max(
    0,
    Math.round((Date.now() - liveStream.wentLiveAt.getTime()) / 1000)
  );

  await prisma.liveClipRequest.create({
    data: {
      liveStreamId: liveStream.id,
      ownerId: user.id,
      title: parsed.data.title,
      markedAtSeconds,
    },
  });

  revalidatePath("/wall");
  return { success: true };
}
