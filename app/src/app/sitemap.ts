import type { MetadataRoute } from "next";

import prisma from "@/lib/prisma";

/**
 * Same fallback used for Stripe/Mux/ElevenLabs callback URLs (see
 * src/lib/app-url.ts) — sitemap.ts has no incoming request to derive an
 * origin from, so APP_URL needs to be set in production for this to emit
 * real URLs rather than localhost ones.
 */
function siteUrl() {
  return (process.env.APP_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

/**
 * Lists every public, indexable page — the plan's "every catalog produces
 * hundreds of shareable, indexable pages" growth bet only pays off if
 * search engines can actually find them without a viewer linking in first.
 * Deliberately excludes anything gated: a locked (subscriber-only or
 * currently-early-access) video's page is thin/paywalled content, not
 * worth indexing until it opens up.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();
  const now = new Date();

  const [creators, moments, videos, askedQuestions] = await Promise.all([
    prisma.creatorProfile.findMany({ select: { handle: true, createdAt: true } }),
    prisma.curatedMoment.findMany({
      where: { status: "PUBLISHED" },
      select: { id: true, publishedAt: true, createdAt: true },
    }),
    prisma.video.findMany({
      where: {
        status: "READY",
        subscriberOnly: false,
        removedAt: null,
        OR: [{ earlyAccessUntil: null }, { earlyAccessUntil: { lte: now } }],
      },
      select: { id: true, createdAt: true },
    }),
    prisma.askedQuestion.findMany({ select: { id: true, createdAt: true } }),
  ]);

  return [
    { url: `${base}/`, changeFrequency: "daily", priority: 1 },
    ...creators.map((c) => ({
      url: `${base}/creators/${c.handle}`,
      lastModified: c.createdAt,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...moments.map((m) => ({
      url: `${base}/moments/${m.id}`,
      lastModified: m.publishedAt ?? m.createdAt,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...videos.map((v) => ({
      url: `${base}/videos/${v.id}`,
      lastModified: v.createdAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...askedQuestions.map((a) => ({
      url: `${base}/ask/${a.id}`,
      lastModified: a.createdAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
