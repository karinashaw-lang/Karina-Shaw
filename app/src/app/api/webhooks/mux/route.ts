import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getMux, isMuxConfigured, muxPlaybackUrl } from "@/lib/integrations/mux";
import { clipWindow } from "@/lib/live-clip";

/**
 * Once a live broadcast's recording asset is ready, save it as a regular
 * (rewatchable) Video and turn any pending viewer "clip this moment"
 * requests from that broadcast into real Clips against it — see
 * LiveClipRequest. Idempotent: a retried webhook finds the Video it
 * already created via muxAssetId instead of creating a duplicate.
 */
async function materializeLiveRecording(
  muxLiveStreamId: string,
  assetId: string,
  playbackId: string | undefined
) {
  const liveStream = await prisma.liveStream.findUnique({ where: { muxLiveStreamId } });
  if (!liveStream) return;

  const existingVideo = await prisma.video.findFirst({ where: { muxAssetId: assetId } });
  const video =
    existingVideo ??
    (await prisma.video.create({
      data: {
        creatorId: liveStream.creatorId,
        title: `Live stream — ${(liveStream.wentLiveAt ?? new Date()).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}`,
        status: "READY",
        muxAssetId: assetId,
        muxPlaybackId: playbackId,
        videoUrl: playbackId ? muxPlaybackUrl(playbackId) : undefined,
      },
    }));

  const pendingRequests = await prisma.liveClipRequest.findMany({
    where: { liveStreamId: liveStream.id, resultClipId: null },
  });

  for (const request of pendingRequests) {
    const { startSeconds, endSeconds } = clipWindow(request.markedAtSeconds);
    const clip = await prisma.clip.create({
      data: {
        sourceVideoId: video.id,
        ownerId: request.ownerId,
        title: request.title,
        startSeconds,
        endSeconds,
      },
    });
    await prisma.liveClipRequest.update({ where: { id: request.id }, data: { resultClipId: clip.id } });
  }
}

/**
 * Mux only calls this once MUX_WEBHOOK_SECRET is set and the endpoint is
 * registered in the Mux dashboard (or via `mux webhook` for local
 * tunneling). This is what actually flips a Video from PROCESSING to READY
 * (or ERRORED), and flips a creator's LiveStream between IDLE/ACTIVE.
 */
export async function POST(request: Request) {
  if (!isMuxConfigured() || !process.env.MUX_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Mux is not configured" }, { status: 404 });
  }

  const body = await request.text();
  const mux = getMux();

  let event;
  try {
    event = await mux.webhooks.unwrap(body, request.headers, process.env.MUX_WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "video.asset.ready": {
      const asset = event.data;
      const playbackId = asset.playback_ids?.[0]?.id;

      if (asset.upload_id) {
        await prisma.video.updateMany({
          where: { muxUploadId: asset.upload_id },
          data: {
            status: "READY",
            muxAssetId: asset.id,
            muxPlaybackId: playbackId,
            videoUrl: playbackId ? muxPlaybackUrl(playbackId) : undefined,
          },
        });
      } else if (asset.live_stream_id) {
        await materializeLiveRecording(asset.live_stream_id, asset.id, playbackId);
      }
      break;
    }

    case "video.asset.errored": {
      const asset = event.data;
      if (!asset.upload_id) break;

      await prisma.video.updateMany({
        where: { muxUploadId: asset.upload_id },
        data: { status: "ERRORED" },
      });
      break;
    }

    case "video.live_stream.active": {
      await prisma.liveStream.updateMany({
        where: { muxLiveStreamId: event.data.id },
        data: { status: "ACTIVE", wentLiveAt: new Date() },
      });
      break;
    }

    case "video.live_stream.idle": {
      await prisma.liveStream.updateMany({
        where: { muxLiveStreamId: event.data.id },
        data: { status: "IDLE" },
      });
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
