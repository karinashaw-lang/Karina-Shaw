import "server-only";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { extractAudioTrack } from "@/lib/audio-extraction";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_BYTES = 300 * 1024 * 1024; // 300MB

const EXTENSION_BY_MIME: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/ogg": "ogv",
  "video/quicktime": "mov",
};

export type SavedVideo = {
  videoUrl: string;
  /** Null if ffmpeg isn't installed on the host — see extractAudioTrack. */
  audioUrl: string | null;
};

/**
 * Saves an uploaded video file to local disk and returns its public URL,
 * plus an audio-only URL extracted with ffmpeg.
 *
 * Local-disk storage is a stand-in for real blob/video storage (e.g. Mux,
 * Cloudflare Stream, S3) — good enough to build and test the product loop,
 * but it won't survive a serverless deploy's ephemeral filesystem.
 */
export async function saveVideoFile(file: File): Promise<SavedVideo> {
  if (!file.type.startsWith("video/")) {
    throw new Error("That file doesn't look like a video.");
  }
  if (file.size === 0) {
    throw new Error("The uploaded file is empty.");
  }
  if (file.size > MAX_BYTES) {
    throw new Error("Videos must be under 300MB for now.");
  }

  const extension = EXTENSION_BY_MIME[file.type] ?? "mp4";
  const id = randomUUID();
  const filename = `${id}.${extension}`;

  await mkdir(UPLOAD_DIR, { recursive: true });
  const videoPath = path.join(UPLOAD_DIR, filename);
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(videoPath, bytes);

  const audioFilename = `${id}.mp3`;
  const audioPath = path.join(UPLOAD_DIR, audioFilename);
  const extracted = await extractAudioTrack(videoPath, audioPath);

  return {
    videoUrl: `/uploads/${filename}`,
    audioUrl: extracted ? `/uploads/${audioFilename}` : null,
  };
}
