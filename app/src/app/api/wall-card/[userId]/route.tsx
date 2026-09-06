import { ImageResponse } from "next/og";

import prisma from "@/lib/prisma";
import { getWallCardStats } from "@/lib/wall-card";
import { currentMonthKey } from "@/lib/time";

export const runtime = "nodejs";

function monthLabel(month: string) {
  const [year, monthNum] = month.split("-").map(Number);
  return new Date(year, monthNum - 1, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Renders a viewer's shareable Wall Card as a PNG — the platform's primary
 * viral loop (see the business plan). Built entirely on next/og's
 * ImageResponse (Satori + resvg, bundled with Next.js), so no new
 * dependency, service, or API key is needed.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  const url = new URL(request.url);
  const month = url.searchParams.get("month") ?? currentMonthKey();

  const [stats, user] = await Promise.all([
    getWallCardStats(userId),
    prisma.user.findUnique({ where: { id: userId } }),
  ]);

  if (!stats || !user) {
    return new Response("Not found", { status: 404 });
  }

  await prisma.wallCard.upsert({
    where: { userId_month: { userId, month } },
    create: { userId, month },
    update: {},
  });

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #18181b 0%, #3f3f46 100%)",
          padding: "64px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#a1a1aa", display: "flex" }}>
            {monthLabel(month)} Wall
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, marginTop: 8, display: "flex" }}>
            {stats.displayName}&apos;s Wall
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 48, gap: 28, flex: 1 }}>
          {stats.topMoments.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 22, color: "#a1a1aa", display: "flex" }}>Top saved moments</div>
              {stats.topMoments.map((moment, i) => (
                <div key={i} style={{ fontSize: 30, marginTop: 6, display: "flex" }}>
                  {moment.title}{" "}
                  <span style={{ color: "#a1a1aa", marginLeft: 8 }}>— {moment.creatorName}</span>
                </div>
              ))}
            </div>
          )}

          {stats.mostRewatched && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 22, color: "#a1a1aa", display: "flex" }}>Most rewatched</div>
              <div style={{ fontSize: 34, fontWeight: 600, marginTop: 6, display: "flex" }}>
                {stats.mostRewatched.title}{" "}
                <span style={{ color: "#a1a1aa", marginLeft: 8, fontWeight: 400 }}>
                  ({stats.mostRewatched.viewCount}x)
                </span>
              </div>
            </div>
          )}

          {stats.tasteTwin && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 22, color: "#a1a1aa", display: "flex" }}>Taste twin</div>
              <div style={{ fontSize: 34, fontWeight: 600, marginTop: 6, display: "flex" }}>
                {stats.tasteTwin.name}{" "}
                <span style={{ color: "#a1a1aa", marginLeft: 8, fontWeight: 400 }}>
                  {stats.tasteTwin.overlapCount} shared saves
                </span>
              </div>
            </div>
          )}

          {stats.topMoments.length === 0 && (
            <div style={{ fontSize: 30, color: "#a1a1aa", display: "flex" }}>
              Nothing saved yet — start building your wall.
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#a1a1aa",
            borderTop: "1px solid #52525b",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>{stats.totalSaved} saved on the wall</div>
          <div style={{ display: "flex" }}>Creator Platform</div>
        </div>
      </div>
    ),
    { width: 1080, height: 1080 }
  );
}
