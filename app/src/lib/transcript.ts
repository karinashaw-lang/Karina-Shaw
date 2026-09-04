/**
 * Parses pasted transcript text into timestamped segments. Each line looks
 * like `MM:SS some text` (or `H:MM:SS`, or a bare seconds count). Blank
 * lines and lines without a leading timestamp are skipped.
 */
export function parseTranscript(raw: string): { startSeconds: number; text: string }[] {
  const lineRegex = /^\s*(\d{1,2}:)?(\d{1,2}):(\d{2})\s+(.+)$|^\s*(\d+)\s+(.+)$/;

  const segments: { startSeconds: number; text: string }[] = [];

  // Browsers normalize textarea line breaks to CRLF on submission; split on
  // any line-ending style so every line (not just the last) gets parsed.
  for (const line of raw.split(/\r\n|\r|\n/)) {
    const match = line.match(lineRegex);
    if (!match) continue;

    let startSeconds: number;
    let text: string;

    if (match[6] !== undefined) {
      // Bare seconds form: "42 some text"
      startSeconds = Number(match[5]);
      text = match[6];
    } else {
      const hours = match[1] ? Number(match[1].replace(":", "")) : 0;
      const minutes = Number(match[2]);
      const seconds = Number(match[3]);
      startSeconds = hours * 3600 + minutes * 60 + seconds;
      text = match[4];
    }

    text = text.trim();
    if (text) segments.push({ startSeconds, text });
  }

  return segments;
}
