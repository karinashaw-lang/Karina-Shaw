"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const clipSchema = z
  .object({
    videoId: z.string().min(1),
    title: z.string().min(1).max(120),
    startSeconds: z.coerce.number().int().min(0),
    endSeconds: z.coerce.number().int().min(0),
  })
  .refine((data) => data.endSeconds > data.startSeconds, {
    message: "The clip's end time must be after its start time.",
    path: ["endSeconds"],
  });

export type ClipActionState = { error: string } | null;

export async function createClip(
  _prevState: ClipActionState,
  formData: FormData
): Promise<ClipActionState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "You must be signed in to make a clip." };
  }

  const parsed = clipSchema.safeParse({
    videoId: formData.get("videoId"),
    title: formData.get("title"),
    startSeconds: formData.get("startSeconds"),
    endSeconds: formData.get("endSeconds"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid clip details." };
  }

  const { videoId, title, startSeconds, endSeconds } = parsed.data;

  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video) {
    return { error: "That video no longer exists." };
  }

  const clip = await prisma.clip.create({
    data: { sourceVideoId: videoId, ownerId: user.id, title, startSeconds, endSeconds },
  });

  redirect(`/clips/${clip.id}`);
}
