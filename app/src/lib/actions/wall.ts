"use server";

import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

async function requireUser() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to use the wall.");
  return user;
}

export async function saveVideoToWall(videoId: string, path: string) {
  const user = await requireUser();

  const existing = await prisma.wallItem.findFirst({
    where: { userId: user.id, videoId },
  });
  if (!existing) {
    await prisma.wallItem.create({ data: { userId: user.id, videoId } });
  }

  revalidatePath(path);
  revalidatePath("/wall");
}

export async function saveClipToWall(clipId: string, path: string) {
  const user = await requireUser();

  const existing = await prisma.wallItem.findFirst({
    where: { userId: user.id, clipId },
  });
  if (!existing) {
    await prisma.wallItem.create({ data: { userId: user.id, clipId } });
  }

  revalidatePath(path);
  revalidatePath("/wall");
}

export async function saveMomentToWall(momentId: string, path: string) {
  const user = await requireUser();

  const existing = await prisma.wallItem.findFirst({
    where: { userId: user.id, momentId },
  });
  if (!existing) {
    await prisma.wallItem.create({ data: { userId: user.id, momentId } });
  }

  revalidatePath(path);
  revalidatePath("/wall");
}

export async function removeFromWall(wallItemId: string) {
  const user = await requireUser();

  await prisma.wallItem.deleteMany({
    where: { id: wallItemId, userId: user.id },
  });

  revalidatePath("/wall");
}

const MAX_NOTE_LENGTH = 280;

/** The wall's "why I saved this" note — a one-liner, not a comment thread. */
export async function setWallItemNote(wallItemId: string, note: string) {
  const user = await requireUser();

  const trimmed = note.trim().slice(0, MAX_NOTE_LENGTH);

  await prisma.wallItem.updateMany({
    where: { id: wallItemId, userId: user.id },
    data: { note: trimmed || null },
  });

  revalidatePath("/wall");
}
