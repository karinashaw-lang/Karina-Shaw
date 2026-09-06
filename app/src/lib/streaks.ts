import "server-only";

import prisma from "@/lib/prisma";

function toUtcDate(dateStr: string): number {
  return Date.parse(`${dateStr}T00:00:00Z`);
}

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Current consecutive-day streak, counting back from today (or yesterday,
 * so a streak isn't broken just because today hasn't happened yet). Pure
 * date-gap arithmetic over DailyActivity rows, no scheduled job needed.
 */
export async function getCurrentStreak(userId: string): Promise<number> {
  const rows = await prisma.dailyActivity.findMany({
    where: { userId },
    orderBy: { date: "desc" },
    take: 400,
    select: { date: true },
  });
  if (rows.length === 0) return 0;

  const todayMs = toUtcDate(new Date().toISOString().slice(0, 10));
  const mostRecentMs = toUtcDate(rows[0].date);

  // If the most recent activity isn't today or yesterday, the streak is over.
  if (todayMs - mostRecentMs > DAY_MS) return 0;

  let streak = 1;
  let expectedMs = mostRecentMs - DAY_MS;

  for (let i = 1; i < rows.length; i++) {
    const rowMs = toUtcDate(rows[i].date);
    if (rowMs === expectedMs) {
      streak++;
      expectedMs -= DAY_MS;
    } else if (rowMs < expectedMs) {
      break;
    }
  }

  return streak;
}
