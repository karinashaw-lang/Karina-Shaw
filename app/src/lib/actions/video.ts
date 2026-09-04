"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { saveVideoFile } from "@/lib/video-storage";

const uploadSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().max(2000).optional(),
  videoUrl: z.string().url().optional(),
  subscriberOnly: z.coerce.boolean().optional(),
});

export type UploadActionState = { error: string } | null;

export async function uploadVideo(
  _prevState: UploadActionState,
  formData: FormData
): Promise<UploadActionState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You need a creator profile before you can post a video." };
  }

  const parsed = uploadSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description") || undefined,
    videoUrl: formData.get("videoUrl") || undefined,
    subscriberOnly: formData.get("subscriberOnly") === "on" ? true : undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid video details." };
  }

  const { title, description, videoUrl, subscriberOnly } = parsed.data;

  const file = formData.get("videoFile");
  const hasFile = file instanceof File && file.size > 0;

  if (!hasFile && !videoUrl) {
    return { error: "Record or upload a video file, or paste a video URL." };
  }

  let resolvedUrl: string;
  try {
    resolvedUrl = hasFile ? await saveVideoFile(file as File) : videoUrl!;
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Could not save that video file." };
  }

  const video = await prisma.video.create({
    data: {
      creatorId: user.creatorProfile.id,
      title,
      description,
      videoUrl: resolvedUrl,
      subscriberOnly: subscriberOnly ?? false,
    },
  });

  redirect(`/videos/${video.id}`);
}

const commentSchema = z.object({
  videoId: z.string().min(1),
  body: z.string().min(1).max(1000),
});

export type CommentActionState = { error: string } | null;

export async function postComment(
  _prevState: CommentActionState,
  formData: FormData
): Promise<CommentActionState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "You must be signed in to comment." };
  }

  const parsed = commentSchema.safeParse({
    videoId: formData.get("videoId"),
    body: formData.get("body"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid comment." };
  }

  const { videoId, body } = parsed.data;

  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video) {
    return { error: "That video no longer exists." };
  }

  await prisma.comment.create({
    data: { videoId, userId: user.id, body },
  });

  revalidatePath(`/videos/${videoId}`);
  return null;
}
