"use server";

import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const MAX_GUESTS_PER_VIDEO = 8;

export type GuestEditorState = { error: string } | null;

/**
 * Replaces the full set of guests tagged on a video with the given
 * comma-separated names — creators re-tag a whole episode at once rather
 * than adding names one by one, which keeps this to a single upsert-and-diff
 * instead of separate add/remove actions. Guests are matched by exact name
 * (case-insensitive) and created on first mention; they're not tied to a
 * User account, so anyone can be tagged without needing their own login.
 */
export async function setVideoGuests(
  _prevState: GuestEditorState,
  formData: FormData
): Promise<GuestEditorState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to tag guests." };
  }

  const videoId = String(formData.get("videoId") ?? "");
  const video = await prisma.video.findUnique({ where: { id: videoId } });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only tag guests on your own videos." };
  }

  const names = Array.from(
    new Set(
      String(formData.get("names") ?? "")
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean)
    )
  ).slice(0, MAX_GUESTS_PER_VIDEO);

  await prisma.$transaction(async (tx) => {
    await tx.videoGuest.deleteMany({ where: { videoId } });
    for (const name of names) {
      const guest = await tx.guest.upsert({
        where: { name },
        create: { name },
        update: {},
      });
      await tx.videoGuest.create({ data: { videoId, guestId: guest.id } });
    }
  });

  revalidatePath(`/videos/${videoId}`);
  return null;
}

export async function followGuest(guestId: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to follow a guest.");

  await prisma.guestFollow.upsert({
    where: { followerId_guestId: { followerId: user.id, guestId } },
    create: { followerId: user.id, guestId },
    update: {},
  });

  revalidatePath(`/guests/${guestId}`);
}

export async function unfollowGuest(guestId: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to unfollow a guest.");

  await prisma.guestFollow.deleteMany({
    where: { followerId: user.id, guestId },
  });

  revalidatePath(`/guests/${guestId}`);
}
