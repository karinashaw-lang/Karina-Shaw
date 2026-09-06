"use server";

import prisma from "@/lib/prisma";

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

/**
 * Marks that a user engaged with content today — the whole signal behind
 * streaks (see src/lib/streaks.ts). Called via `after()` from video/clip
 * pages so it never blocks or affects render. Idempotent per day.
 */
export async function recordDailyActivity(userId: string) {
  const date = todayUtc();
  await prisma.dailyActivity.upsert({
    where: { userId_date: { userId, date } },
    create: { userId, date },
    update: {},
  });
}
