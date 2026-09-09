"use client";

import { useState } from "react";

export default function PodcastFeedLink({ feedUrl }: { feedUrl: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-2 flex items-center gap-2 text-sm">
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(feedUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          });
        }}
        className="rounded border border-black/20 px-3 py-1.5 text-xs dark:border-white/20"
      >
        {copied ? "Feed URL copied" : "Copy your private podcast feed URL"}
      </button>
      <span className="text-xs text-zinc-500">Paste it into any podcast app. Keep it private.</span>
    </div>
  );
}
