import "server-only";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_BYTES = 300 * 1024 * 1024; // 300MB

const EXTENSION_BY_MIME: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/ogg": "ogv",
  "video/quicktime": "mov",
};

/**
 * Saves an uploaded video file to local disk and returns its public URL.
 *
 * This is a stand-in for real blob/video storage (e.g. Mux, Cloudflare
 * Stream, S3) — good enough to build and test the product loop, but it
 * won't survive a serverless deploy's ephemeral filesystem.
 */
export async function saveVideoFile(file: File): Promise<string> {
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
  const filename = `${randomUUID()}.${extension}`;

  await mkdir(UPLOAD_DIR, { recursive: true });
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, filename), bytes);

  return `/uploads/${filename}`;
}
