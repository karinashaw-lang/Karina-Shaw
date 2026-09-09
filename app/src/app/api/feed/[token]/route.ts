import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getAppUrl } from "@/lib/app-url";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function enclosureTypeFor(url: string): string {
  if (url.endsWith(".mp3")) return "audio/mpeg";
  if (url.endsWith(".m3u8")) return "application/x-mpegURL";
  if (url.endsWith(".webm")) return "video/webm";
  if (url.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

/**
 * A subscriber's private podcast feed — the plan's "private podcast feed
 * for subscribers." Gated entirely by the unguessable token in the URL
 * (Subscription.feedToken), since a podcast app has no session cookie to
 * check against. Audio-first (uses the extracted audioUrl where one
 * exists, per the "audio-optional by default" philosophy) but falls back
 * to the video file itself so every episode can appear, even ones without
 * an extracted audio track.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  const subscription = await prisma.subscription.findUnique({
    where: { feedToken: token },
    include: { creator: true },
  });
  if (!subscription) {
    return NextResponse.json({ error: "Feed not found" }, { status: 404 });
  }

  const videos = await prisma.video.findMany({
    where: { creatorId: subscription.creatorId, status: "READY" },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  const appUrl = await getAppUrl();
  const creator = subscription.creator;
  const feedUrl = `${appUrl}/api/feed/${token}`;
  const creatorPageUrl = `${appUrl}/creators/${creator.handle}`;

  const items = videos
    .filter((v) => v.audioUrl || v.videoUrl)
    .map((v) => {
      const enclosureUrl = v.audioUrl ?? v.videoUrl!;
      const absoluteEnclosureUrl = enclosureUrl.startsWith("http") ? enclosureUrl : `${appUrl}${enclosureUrl}`;
      const pageUrl = `${appUrl}/videos/${v.id}`;
      return `
    <item>
      <title>${escapeXml(v.title)}</title>
      <link>${escapeXml(pageUrl)}</link>
      <guid isPermaLink="false">${v.id}</guid>
      <pubDate>${v.createdAt.toUTCString()}</pubDate>
      ${v.description ? `<description>${escapeXml(v.description)}</description>` : ""}
      <enclosure url="${escapeXml(absoluteEnclosureUrl)}" type="${enclosureTypeFor(absoluteEnclosureUrl)}" />
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(creator.displayName)} (private feed)</title>
    <link>${escapeXml(creatorPageUrl)}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(
      `Private subscriber feed for ${creator.displayName}. Keep this URL to yourself — anyone with it can access this feed.`
    )}</description>
    <itunes:author>${escapeXml(creator.displayName)}</itunes:author>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
