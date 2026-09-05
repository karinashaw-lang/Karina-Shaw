import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getMux, isMuxConfigured, muxPlaybackUrl } from "@/lib/integrations/mux";

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
      if (!asset.upload_id) break;

      const playbackId = asset.playback_ids?.[0]?.id;
      await prisma.video.updateMany({
        where: { muxUploadId: asset.upload_id },
        data: {
          status: "READY",
          muxAssetId: asset.id,
          muxPlaybackId: playbackId,
          videoUrl: playbackId ? muxPlaybackUrl(playbackId) : undefined,
        },
      });
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
        data: { status: "ACTIVE" },
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
