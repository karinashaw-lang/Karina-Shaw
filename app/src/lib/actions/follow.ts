"use server";

import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function followCreator(creatorId: string, handle: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to follow a creator.");
  if (user.creatorProfile?.id === creatorId) {
    throw new Error("You can't follow yourself.");
  }

  await prisma.follow.upsert({
    where: { followerId_creatorId: { followerId: user.id, creatorId } },
    create: { followerId: user.id, creatorId },
    update: {},
  });

  revalidatePath(`/creators/${handle}`);
}

export async function unfollowCreator(creatorId: string, handle: string) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in to unfollow a creator.");

  await prisma.follow.deleteMany({
    where: { followerId: user.id, creatorId },
  });

  revalidatePath(`/creators/${handle}`);
}
