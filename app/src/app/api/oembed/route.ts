import { NextResponse } from "next/server";

import { getPublicMoment } from "@/lib/curated-moments";
import { getAppUrl } from "@/lib/app-url";

const DEFAULT_WIDTH = 480;
const DEFAULT_HEIGHT = 270;

function extractMomentId(rawUrl: string): string | null {
  try {
    const parsed = new URL(rawUrl);
    const match = parsed.pathname.match(/\/moments\/([^/?#]+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

/**
 * A minimal oEmbed provider (see oembed.com) for Curated Moments, so
 * pasting a moment link into an oEmbed-aware consumer (Discord, Notion,
 * WordPress) renders the existing /embed/moments/[id] iframe instead of a
 * bare link. Only the required `json` format is implemented — oEmbed's XML
 * format is optional per spec and nothing in this app's audience needs it.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const format = searchParams.get("format") ?? "json";

  if (format !== "json") {
    return NextResponse.json({ error: "Only format=json is supported" }, { status: 501 });
  }
  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  const momentId = extractMomentId(url);
  if (!momentId) {
    return NextResponse.json({ error: "Unrecognized url — expected a /moments/[id] link" }, { status: 404 });
  }

  const moment = await getPublicMoment(momentId);
  if (!moment) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const appUrl = await getAppUrl();
  const creator = moment.video.creator;

  const requestedWidth = Number(searchParams.get("maxwidth"));
  const width =
    Number.isFinite(requestedWidth) && requestedWidth > 0
      ? Math.min(requestedWidth, DEFAULT_WIDTH)
      : DEFAULT_WIDTH;
  const height = Math.round((width / DEFAULT_WIDTH) * DEFAULT_HEIGHT);

  const embedUrl = `${appUrl}/embed/moments/${moment.id}`;
  const safeTitle = moment.title.replace(/"/g, "&quot;");

  return NextResponse.json({
    version: "1.0",
    type: "video",
    provider_name: "Creator Platform",
    provider_url: appUrl,
    title: moment.title,
    author_name: creator.displayName,
    author_url: `${appUrl}/creators/${creator.handle}`,
    html: `<iframe src="${embedUrl}" width="${width}" height="${height}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="${safeTitle}"></iframe>`,
    width,
    height,
    thumbnail_url: `${appUrl}/api/og/moment/${moment.id}`,
    thumbnail_width: 1200,
    thumbnail_height: 630,
  });
}
