"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

const scheduleSchema = z.object({
  videoId: z.string().min(1),
  scheduledAt: z.string().min(1),
});

export type ScheduleState = { error: string } | null;

/**
 * Schedules a listening party for one of the creator's own episodes — V2
 * Tier 1 togetherness. No live infrastructure: the episode already exists,
 * this just coordinates a shared watch time plus chat.
 */
export async function scheduleParty(
  _prevState: ScheduleState,
  formData: FormData
): Promise<ScheduleState> {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return { error: "You must be a creator to schedule a listening party." };
  }

  const parsed = scheduleSchema.safeParse({
    videoId: formData.get("videoId"),
    scheduledAt: formData.get("scheduledAt"),
  });
  if (!parsed.success) {
    return { error: "Pick a video and a time." };
  }

  const scheduledAt = new Date(parsed.data.scheduledAt);
  if (Number.isNaN(scheduledAt.getTime())) {
    return { error: "That doesn't look like a valid date/time." };
  }

  const video = await prisma.video.findUnique({ where: { id: parsed.data.videoId } });
  if (!video || video.creatorId !== user.creatorProfile.id) {
    return { error: "You can only schedule a party for your own videos." };
  }

  const party = await prisma.listeningParty.create({
    data: { videoId: video.id, scheduledAt },
  });

  revalidatePath(`/videos/${video.id}`);
  redirect(`/parties/${party.id}`);
}

async function requireUser() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in.");
  return user;
}

export async function toggleRsvp(partyId: string) {
  const user = await requireUser();

  const existing = await prisma.partyRsvp.findUnique({
    where: { partyId_userId: { partyId, userId: user.id } },
  });

  if (existing) {
    await prisma.partyRsvp.delete({ where: { id: existing.id } });
  } else {
    await prisma.partyRsvp.create({ data: { partyId, userId: user.id } });
  }

  revalidatePath(`/parties/${partyId}`);
}

const MAX_MESSAGE_LENGTH = 500;

export async function postPartyMessage(partyId: string, body: string) {
  const user = await requireUser();

  const trimmed = body.trim().slice(0, MAX_MESSAGE_LENGTH);
  if (!trimmed) return;

  await prisma.partyMessage.create({
    data: { partyId, userId: user.id, body: trimmed },
  });
}

export type PartyMessageDto = {
  id: string;
  body: string;
  createdAt: string;
  userName: string;
};

/** Polled from the client — see src/components/party-chat.tsx. */
export async function getRecentPartyMessages(partyId: string): Promise<PartyMessageDto[]> {
  const messages = await prisma.partyMessage.findMany({
    where: { partyId },
    orderBy: { createdAt: "asc" },
    take: 100,
    include: { user: true },
  });

  return messages.map((m) => ({
    id: m.id,
    body: m.body,
    createdAt: m.createdAt.toISOString(),
    userName: m.user.name,
  }));
}
