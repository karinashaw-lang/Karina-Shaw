"use server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

const MAX_MESSAGE_LENGTH = 500;

async function requireUser() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be signed in.");
  return user;
}

/** Polling-based chat during a live broadcast — see src/components/live-chat.tsx. */
export async function postLiveChatMessage(liveStreamId: string, body: string) {
  const user = await requireUser();

  const trimmed = body.trim().slice(0, MAX_MESSAGE_LENGTH);
  if (!trimmed) return;

  await prisma.liveChatMessage.create({
    data: { liveStreamId, userId: user.id, body: trimmed },
  });
}

export type LiveChatMessageDto = {
  id: string;
  body: string;
  createdAt: string;
  userName: string;
};

export async function getRecentLiveChatMessages(liveStreamId: string): Promise<LiveChatMessageDto[]> {
  const messages = await prisma.liveChatMessage.findMany({
    where: { liveStreamId },
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
