import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { signFileUrl } from "@/lib/file-signing";

/**
 * One-click export of everything a creator has on the platform — videos,
 * transcripts, moments, the buyer list, and earnings history — as a
 * single JSON file. The answer to "what happens if this shuts down": a
 * creator can always walk away with their catalog and who paid for what,
 * not just what's rendered on their own dashboard.
 *
 * Paid-file downloads (Behind the Cut raw footage/cut scenes, Video
 * Extras outtakes/attachments) are included as 24-hour signed links
 * rather than the files themselves — bundling arbitrarily large video
 * files into one JSON response isn't practical; the creator already owns
 * these outright; a longer-lived export archive is future work.
 */
export async function GET() {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    return NextResponse.json({ error: "You must be a creator to export your data." }, { status: 401 });
  }
  const creatorId = user.creatorProfile.id;

  const [videos, moments, tips, subscriptions, behindTheCutUnlocks, videoExtraUnlocks, paidQuestions] =
    await Promise.all([
      prisma.video.findMany({
        where: { creatorId },
        include: {
          transcript: { orderBy: { startSeconds: "asc" } },
          behindTheCut: true,
          extras: true,
        },
        orderBy: { createdAt: "asc" },
      }),
      prisma.curatedMoment.findMany({ where: { video: { creatorId } }, orderBy: { createdAt: "asc" } }),
      prisma.tip.findMany({
        where: { toCreatorId: creatorId },
        include: { fromUser: true },
        orderBy: { createdAt: "asc" },
      }),
      prisma.subscription.findMany({
        where: { creatorId },
        include: { subscriber: true },
        orderBy: { createdAt: "asc" },
      }),
      prisma.behindTheCutUnlock.findMany({
        where: { behindTheCut: { video: { creatorId } } },
        include: { user: true, behindTheCut: { select: { videoId: true } } },
        orderBy: { createdAt: "asc" },
      }),
      prisma.videoExtraUnlock.findMany({
        where: { videoExtra: { video: { creatorId } } },
        include: { user: true, videoExtra: { select: { videoId: true, title: true } } },
        orderBy: { createdAt: "asc" },
      }),
      prisma.paidQuestion.findMany({
        where: { creatorId },
        include: { fromUser: true },
        orderBy: { createdAt: "asc" },
      }),
    ]);

  // One row per unique buyer (by user id, or by guest email for guest
  // tips), with their total spend and transaction count across every
  // paid feature — the "buyer list" the plan asks for.
  const buyers = new Map<string, { name: string | null; email: string; totalCents: number; transactions: number }>();
  function recordBuyer(key: string, name: string | null, email: string, amountCents: number) {
    const existing = buyers.get(key);
    if (existing) {
      existing.totalCents += amountCents;
      existing.transactions += 1;
    } else {
      buyers.set(key, { name, email, totalCents: amountCents, transactions: 1 });
    }
  }
  for (const tip of tips) {
    recordBuyer(
      tip.fromUserId ?? `guest:${tip.guestEmail}`,
      tip.fromUser?.name ?? null,
      tip.fromUser?.email ?? tip.guestEmail ?? "unknown",
      tip.amountCents
    );
  }
  for (const sub of subscriptions) {
    recordBuyer(sub.subscriberId, sub.subscriber.name, sub.subscriber.email, 0);
  }
  for (const unlock of behindTheCutUnlocks) {
    recordBuyer(unlock.userId, unlock.user.name, unlock.user.email, unlock.amountCents);
  }
  for (const unlock of videoExtraUnlocks) {
    recordBuyer(unlock.userId, unlock.user.name, unlock.user.email, unlock.amountCents);
  }
  for (const question of paidQuestions) {
    recordBuyer(question.fromUserId, question.fromUser.name, question.fromUser.email, question.amountCents);
  }

  const exportData = {
    exportedAt: new Date().toISOString(),
    creator: { handle: user.creatorProfile.handle, displayName: user.creatorProfile.displayName },
    videos: videos.map((video) => ({
      id: video.id,
      title: video.title,
      description: video.description,
      status: video.status,
      subscriberOnly: video.subscriberOnly,
      earlyAccessUntil: video.earlyAccessUntil,
      effortHours: video.effortHours,
      effortReshoots: video.effortReshoots,
      effortMinutesCut: video.effortMinutesCut,
      createdAt: video.createdAt,
      videoUrl: video.videoUrl,
      audioUrl: video.audioUrl,
      transcript: video.transcript.map((segment) => ({
        startSeconds: segment.startSeconds,
        text: segment.text,
      })),
      behindTheCut: video.behindTheCut
        ? {
            planText: video.behindTheCut.planText,
            kitText: video.behindTheCut.kitText,
            hardPartText: video.behindTheCut.hardPartText,
            priceCents: video.behindTheCut.priceCents,
            rawFootageDownloadUrl: video.behindTheCut.rawFootageUrl
              ? signFileUrl(video.behindTheCut.rawFootageUrl, 60 * 60 * 24)
              : null,
            cutScenesDownloadUrl: video.behindTheCut.cutScenesUrl
              ? signFileUrl(video.behindTheCut.cutScenesUrl, 60 * 60 * 24)
              : null,
          }
        : null,
      extras: video.extras.map((extra) => ({
        type: extra.type,
        title: extra.title,
        text: extra.text,
        priceCents: extra.priceCents,
        downloadUrl: extra.fileUrl ? signFileUrl(extra.fileUrl, 60 * 60 * 24) : null,
      })),
    })),
    moments: moments.map((moment) => ({
      id: moment.id,
      videoId: moment.videoId,
      title: moment.title,
      startSeconds: moment.startSeconds,
      endSeconds: moment.endSeconds,
      status: moment.status,
      source: moment.source,
      createdAt: moment.createdAt,
    })),
    buyers: Array.from(buyers.values()).sort((a, b) => b.totalCents - a.totalCents),
    earningsHistory: {
      tips: tips.map((tip) => ({
        amountCents: tip.amountCents,
        from: tip.fromUser?.name ?? tip.guestEmail ?? "guest",
        message: tip.message,
        createdAt: tip.createdAt,
      })),
      behindTheCutUnlocks: behindTheCutUnlocks.map((unlock) => ({
        amountCents: unlock.amountCents,
        videoId: unlock.behindTheCut.videoId,
        buyer: unlock.user.name,
        createdAt: unlock.createdAt,
      })),
      videoExtraUnlocks: videoExtraUnlocks.map((unlock) => ({
        amountCents: unlock.amountCents,
        extraTitle: unlock.videoExtra.title,
        videoId: unlock.videoExtra.videoId,
        buyer: unlock.user.name,
        createdAt: unlock.createdAt,
      })),
      paidQuestions: paidQuestions.map((question) => ({
        amountCents: question.amountCents,
        question: question.question,
        from: question.fromUser.name,
        status: question.status,
        createdAt: question.createdAt,
      })),
      subscribers: subscriptions.map((sub) => ({
        name: sub.subscriber.name,
        email: sub.subscriber.email,
        since: sub.createdAt,
      })),
    },
  };

  const json = JSON.stringify(exportData, null, 2);
  const filename = `${user.creatorProfile.handle}-export-${new Date().toISOString().slice(0, 10)}.json`;

  return new NextResponse(json, {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
