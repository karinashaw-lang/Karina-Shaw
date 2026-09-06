import Link from "next/link";

import type { HighlightMoment } from "@/lib/highlights";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function HighlightMoments({
  videoId,
  highlights,
}: {
  videoId: string;
  highlights: HighlightMoment[];
}) {
  if (highlights.length === 0) return null;

  const aiGenerated = highlights[0]?.source === "ai";

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium">Highlights</h2>
      <p className="text-sm text-zinc-500">
        {aiGenerated ? "AI-detected from the transcript." : "The moments viewers clipped the most."}
      </p>
      <ul className="mt-4 flex flex-col gap-3">
        {highlights.map((highlight, i) => (
          <li key={i} className="rounded border border-black/10 p-3 text-sm dark:border-white/10">
            <Link href={`/videos/${videoId}?t=${highlight.startSeconds}`} className="hover:underline">
              <span className="mr-2 text-zinc-500 tabular-nums">{formatTime(highlight.startSeconds)}</span>
              {highlight.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
