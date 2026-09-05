import "server-only";

import Mux from "@mux/mux-node";

export function isMuxConfigured(): boolean {
  return Boolean(process.env.MUX_TOKEN_ID && process.env.MUX_TOKEN_SECRET);
}

let client: Mux | null = null;

/** Throws if Mux credentials aren't set — check `isMuxConfigured()` first. */
export function getMux(): Mux {
  if (!process.env.MUX_TOKEN_ID || !process.env.MUX_TOKEN_SECRET) {
    throw new Error("MUX_TOKEN_ID / MUX_TOKEN_SECRET are not set");
  }
  if (!client) {
    client = new Mux({
      tokenId: process.env.MUX_TOKEN_ID,
      tokenSecret: process.env.MUX_TOKEN_SECRET,
    });
  }
  return client;
}

export function muxPlaybackUrl(playbackId: string): string {
  return `https://stream.mux.com/${playbackId}.m3u8`;
}

// Fixed Mux RTMPS ingest endpoint — the per-creator stream key is what
// actually routes the broadcast, not the host.
export const MUX_RTMP_INGEST_URL = "rtmps://global-live.mux.com:443/app";
