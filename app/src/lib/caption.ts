type Segment = { startSeconds: number; text: string };

/**
 * Builds a shareable caption for a clip from whatever transcript text falls
 * inside its time range — the "auto-captioned clips" feature, built
 * entirely on transcript data search already needs (no extra AI call).
 */
export function buildClipCaption(
  clip: { title: string; startSeconds: number; endSeconds: number },
  creatorDisplayName: string,
  transcript: Segment[]
): string {
  const overlapping = transcript
    .filter((s) => s.startSeconds >= clip.startSeconds && s.startSeconds < clip.endSeconds)
    .map((s) => s.text.trim())
    .filter(Boolean);

  const quote = overlapping.join(" ").trim();
  const attribution = `— ${creatorDisplayName}`;

  if (!quote) return `"${clip.title}" ${attribution}`;

  return `"${quote}" ${attribution}`;
}
