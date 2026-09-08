"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

async function requireOwnedMoment(momentId: string) {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) throw new Error("You must be a creator to manage moments.");

  const moment = await prisma.curatedMoment.findUnique({
    where: { id: momentId },
    include: { video: true },
  });
  if (!moment || moment.video.creatorId !== user.creatorProfile.id) {
    throw new Error("You can only manage moments on your own videos.");
  }
  return moment;
}

/**
 * Makes a moment public — the one action that turns an AI suggestion (or a
 * manually-added moment already sitting as PUBLISHED, a no-op here) into
 * something with a live, shareable page. Nothing else in this feature can
 * do that; see the plan's "nothing spreads unless the creator says so."
 */
export async function publishMoment(momentId: string) {
  const moment = await requireOwnedMoment(momentId);

  await prisma.curatedMoment.update({
    where: { id: moment.id },
    data: { status: "PUBLISHED", publishedAt: new Date() },
  });

  revalidatePath(`/videos/${moment.videoId}`);
  revalidatePath(`/moments/${moment.id}`);
}

/**
 * Rejects a suggestion or retracts a published moment. Kept as a row
 * (status DISMISSED) rather than deleted, so an AI suggestion the creator
 * already passed on never comes back — see ensureSuggestedMoments.
 */
export async function dismissMoment(momentId: string) {
  const moment = await requireOwnedMoment(momentId);

  await prisma.curatedMoment.update({
    where: { id: moment.id },
    data: { status: "DISMISSED" },
  });

  revalidatePath(`/videos/${moment.videoId}`);
  revalidatePath(`/moments/${moment.id}`);
}

const addMomentSchema = z
  .object({
    videoId: z.string().min(1),
    title: z.string().min(1).max(120),
    startSeconds: z.coerce.number().int().min(0),
    endSeconds: z.coerce.number().int().min(0),
  })
  .refine((data) => data.endSeconds > data.startSeconds, {
    message: "The moment's end time must be after its start time.",
    path: ["endSeconds"],
  });

export type AddMomentState = { error: string } | { success: true } | null;

/**
 * A creator manually marking a moment — published immediately, since
 * deliberately typing in the times is itself the approval (unlike an AI
 * suggestion, which always starts as SUGGESTED).
 */
export async function addManualMoment(
  _prevState: AddMomentState,
  formData: FormData
): Promise<AddMomentState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to add a moment." };
  }

  const parsed = addMomentSchema.safeParse({
    videoId: formData.get("videoId"),
    title: formData.get("title"),
    startSeconds: formData.get("startSeconds"),
    endSeconds: formData.get("endSeconds"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid moment details." };
  }
  const { videoId, title, startSeconds, endSeconds } = parsed.data;

  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only add moments to your own videos." };
  }

  await prisma.curatedMoment.create({
    data: {
      videoId,
      title,
      startSeconds,
      endSeconds,
      source: "MANUAL",
      status: "PUBLISHED",
      publishedAt: new Date(),
    },
  });

  revalidatePath(`/videos/${videoId}`);
  return { success: true };
}
