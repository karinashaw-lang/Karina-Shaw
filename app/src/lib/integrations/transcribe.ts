import "server-only";

import prisma from "@/lib/prisma";
import { getOpenAI, isOpenAIConfigured } from "@/lib/integrations/openai";

/**
 * Auto-transcribes a locally-uploaded video file with OpenAI Whisper and
 * saves the result as TranscriptSegment rows — the same shape a creator's
 * manual paste produces, so search and the transcript viewer don't need to
 * know which path filled them in. No-ops (and never throws) when
 * OPENAI_API_KEY isn't set, or if the API call fails, since transcription
 * failing shouldn't fail the upload.
 */
export async function autoTranscribeVideo(videoId: string, file: File): Promise<void> {
  if (!isOpenAIConfigured()) return;

  try {
    const openai = getOpenAI();
    const result = await openai.audio.transcriptions.create({
      file,
      model: "whisper-1",
      response_format: "verbose_json",
    });

    const segments = (result.segments ?? [])
      .map((segment) => ({
        videoId,
        startSeconds: Math.round(segment.start),
        text: segment.text.trim(),
      }))
      .filter((segment) => segment.text.length > 0);

    if (segments.length > 0) {
      await prisma.transcriptSegment.createMany({ data: segments });
    }
  } catch (err) {
    console.error(`Auto-transcription failed for video ${videoId}:`, err);
  }
}
