import Link from "next/link";

import type { RelatedSegment } from "@/lib/recommendations";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function RelatedMoments({ segments }: { segments: RelatedSegment[] }) {
  if (segments.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium">Related moments</h2>
      <p className="text-sm text-zinc-500">Based on what was actually said, from other creators too.</p>
      <ul className="mt-4 flex flex-col gap-3">
        {segments.map((segment) => (
          <li key={segment.id} className="rounded border border-black/10 p-3 text-sm dark:border-white/10">
            <Link href={`/videos/${segment.video.id}?t=${segment.startSeconds}`} className="hover:underline">
              <span className="mr-2 text-zinc-500 tabular-nums">{formatTime(segment.startSeconds)}</span>
              &ldquo;{segment.text}&rdquo;
            </Link>
            <p className="mt-1 text-xs text-zinc-500">
              {segment.video.title} by{" "}
              <Link href={`/creators/${segment.creator.handle}`} className="underline">
                {segment.creator.displayName}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
