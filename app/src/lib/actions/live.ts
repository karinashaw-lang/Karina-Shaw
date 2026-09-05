"use server";

import { revalidatePath } from "next/cache";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getMux } from "@/lib/integrations/mux";

/**
 * Gets (or creates on first use) a creator's persistent Mux live stream —
 * the RTMP target they plug into OBS/etc. One per creator, reused across
 * broadcasts (Mux live streams don't expire after a single stream ends).
 */
export async function ensureLiveStream() {
  const user = await getCurrentUser();
  if (!user?.creatorProfile) {
    throw new Error("You need a creator profile to go live.");
  }

  const existing = await prisma.liveStream.findUnique({
    where: { creatorId: user.creatorProfile.id },
  });
  if (existing) return existing;

  const mux = getMux();
  const liveStream = await mux.video.liveStreams.create({
    playback_policies: ["public"],
    new_asset_settings: { playback_policies: ["public"] },
    passthrough: user.creatorProfile.id,
  });

  const playbackId = liveStream.playback_ids?.[0]?.id;
  if (!playbackId) throw new Error("Mux did not return a playback ID for the live stream.");

  const created = await prisma.liveStream.create({
    data: {
      creatorId: user.creatorProfile.id,
      muxLiveStreamId: liveStream.id,
      muxStreamKey: liveStream.stream_key,
      muxPlaybackId: playbackId,
    },
  });

  revalidatePath("/creator/live");
  return created;
}
