import "server-only";

import { spawn } from "node:child_process";

/**
 * Extracts an audio-only track from a video file with ffmpeg, so the
 * platform works whether someone is watching or just listening — the
 * business plan's "audio-optional by default". ffmpeg is a system
 * dependency (not an npm package); this resolves to `false` rather than
 * throwing if it isn't installed, so a missing binary degrades to
 * "no audio-only stream" instead of failing the upload.
 */
export function extractAudioTrack(videoPath: string, audioPath: string): Promise<boolean> {
  return new Promise((resolve) => {
    const proc = spawn("ffmpeg", [
      "-y",
      "-i", videoPath,
      "-vn",
      "-acodec", "libmp3lame",
      "-q:a", "4",
      audioPath,
    ]);

    proc.on("error", () => resolve(false));
    proc.on("exit", (code) => resolve(code === 0));
  });
}
