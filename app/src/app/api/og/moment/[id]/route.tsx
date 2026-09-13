import { ImageResponse } from "next/og";

import { getPublicMoment } from "@/lib/curated-moments";

export const runtime = "nodejs";

function formatDuration(startSeconds: number, endSeconds: number) {
  const total = Math.max(0, endSeconds - startSeconds);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

/**
 * The link-preview image for a published Curated Moment — what actually
 * shows up when a share link is pasted into Slack/iMessage/Discord/Twitter.
 * Same next/og ImageResponse approach as Wall Cards/Recap Reels (Satori +
 * resvg, bundled with Next.js, no new dependency), just at the 1200x630
 * aspect ratio Open Graph/Twitter card previews actually render at.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const moment = await getPublicMoment(id);

  if (!moment) {
    return new Response("Not found", { status: 404 });
  }

  const { video } = moment;
  const creator = video.creator;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #18181b 0%, #3f3f46 100%)",
          padding: "56px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: "#a1a1aa" }}>
          {creator.displayName}
          <span
            style={{
              display: "flex",
              marginLeft: 16,
              padding: "4px 14px",
              borderRadius: 999,
              border: "1px solid #52525b",
              fontSize: 20,
            }}
          >
            {formatDuration(moment.startSeconds, moment.endSeconds)}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "1000px",
          }}
        >
          {moment.title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#a1a1aa",
            borderTop: "1px solid #52525b",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>A Curated Moment from {video.title}</div>
          <div style={{ display: "flex" }}>Creator Platform</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
