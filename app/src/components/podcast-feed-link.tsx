"use client";

import { useState, useTransition } from "react";

import { regenerateFeedToken } from "@/lib/actions/subscription";

export default function PodcastFeedLink({
  feedUrl,
  creatorId,
  handle,
}: {
  feedUrl: string;
  creatorId: string;
  handle: string;
}) {
  const [copied, setCopied] = useState(false);
  const [pending, startTransition] = useTransition();
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
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

      {confirming ? (
        <>
          <span className="text-xs text-zinc-500">This breaks the old URL in any podcast app. Sure?</span>
          <button
            type="button"
            disabled={pending}
            onClick={() => startTransition(async () => {
              await regenerateFeedToken(creatorId, handle);
              setConfirming(false);
            })}
            className="rounded border border-red-300 px-2.5 py-1 text-xs text-red-600 disabled:opacity-50 dark:border-red-900"
          >
            {pending ? "Regenerating…" : "Yes, regenerate"}
          </button>
          <button type="button" onClick={() => setConfirming(false)} className="text-xs underline">
            Cancel
          </button>
        </>
      ) : (
        <button type="button" onClick={() => setConfirming(true)} className="text-xs text-zinc-500 underline">
          URL leaked? Regenerate it
        </button>
      )}

      <span className="w-full text-xs text-zinc-500">Paste it into any podcast app. Keep it private.</span>
    </div>
  );
}
