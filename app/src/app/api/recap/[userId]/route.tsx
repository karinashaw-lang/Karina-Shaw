import { ImageResponse } from "next/og";

import prisma from "@/lib/prisma";
import { getRecapStats } from "@/lib/recap";
import { currentWeekStartKey } from "@/lib/time";

export const runtime = "nodejs";

/**
 * Renders a viewer's weekly Recap Reel as a PNG — a habit/identity image
 * (see the business plan) distinct from the Wall Card: it's about how
 * active the viewer was this week, not what they chose to save. Built on
 * next/og's ImageResponse, same as the Wall Card — no new dependency.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  const url = new URL(request.url);
  const weekStart = url.searchParams.get("week") ?? currentWeekStartKey();

  const [stats, user] = await Promise.all([
    getRecapStats(userId, weekStart),
    prisma.user.findUnique({ where: { id: userId } }),
  ]);

  if (!stats || !user) {
    return new Response("Not found", { status: 404 });
  }

  await prisma.recapReel.upsert({
    where: { userId_weekStart: { userId, weekStart } },
    create: { userId, weekStart },
    update: {},
  });

  const stat = (label: string, value: string | number) => (
    <div style={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
      <div style={{ fontSize: 48, fontWeight: 700, display: "flex" }}>{value}</div>
      <div style={{ fontSize: 20, color: "#78716c", display: "flex" }}>{label}</div>
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #431407 0%, #7c2d12 100%)",
          padding: "64px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#fdba74", display: "flex" }}>
            {stats.weekLabel} Recap
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, marginTop: 8, display: "flex" }}>
            {stats.displayName}&apos;s week
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 48, gap: 28, flex: 1 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            {stat("🔥 day streak", stats.streak)}
            {stat("active days", stats.activeDays)}
            {stat("saved", stats.itemsSaved)}
            {stat("comments", stats.commentsPosted)}
            {stat("new follows", stats.creatorsFollowed + stats.guestsFollowed)}
          </div>

          {stats.topCreator && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 22, color: "#fdba74", display: "flex" }}>Most engaged with</div>
              <div style={{ fontSize: 34, fontWeight: 600, marginTop: 6, display: "flex" }}>
                {stats.topCreator.name}
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#fdba74",
            borderTop: "1px solid #9a3412",
            paddingTop: 24,
            marginTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>Your week in review</div>
          <div style={{ display: "flex" }}>Creator Platform</div>
        </div>
      </div>
    ),
    { width: 1080, height: 1080 }
  );
}
