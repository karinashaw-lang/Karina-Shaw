"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const handleSchema = z
  .string()
  .min(3)
  .max(30)
  .regex(/^[a-z0-9_]+$/, "Handle can only contain lowercase letters, numbers, and underscores.");

const createProfileSchema = z.object({
  handle: handleSchema,
  displayName: z.string().min(1).max(80),
  bio: z.string().max(500).optional(),
});

export type CreatorActionState = { error: string } | null;

export async function createCreatorProfile(
  _prevState: CreatorActionState,
  formData: FormData
): Promise<CreatorActionState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "You must be signed in to create a creator profile." };
  }
  if (user.creatorProfile) {
    redirect(`/creators/${user.creatorProfile.handle}`);
  }

  const parsed = createProfileSchema.safeParse({
    handle: (formData.get("handle") as string | null)?.toLowerCase(),
    displayName: formData.get("displayName"),
    bio: formData.get("bio") || undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid profile details." };
  }

  const { handle, displayName, bio } = parsed.data;

  const existing = await prisma.creatorProfile.findUnique({ where: { handle } });
  if (existing) {
    return { error: "That handle is already taken." };
  }

  await prisma.creatorProfile.create({
    data: { userId: user.id, handle, displayName, bio },
  });

  revalidatePath("/", "layout");
  redirect(`/creators/${handle}`);
}
