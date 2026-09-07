import "server-only";

import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

export function isElevenLabsConfigured(): boolean {
  return Boolean(process.env.ELEVENLABS_API_KEY);
}

let client: ElevenLabsClient | null = null;

/** Throws if ELEVENLABS_API_KEY isn't set — check `isElevenLabsConfigured()` first. */
export function getElevenLabs(): ElevenLabsClient {
  if (!process.env.ELEVENLABS_API_KEY) {
    throw new Error("ELEVENLABS_API_KEY is not set");
  }
  if (!client) {
    client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
  }
  return client;
}
