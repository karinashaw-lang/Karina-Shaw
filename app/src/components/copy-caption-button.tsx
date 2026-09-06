"use client";

import { useState } from "react";

export default function CopyCaptionButton({ caption }: { caption: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-3 rounded border border-black/10 p-3 dark:border-white/10">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        Caption for sharing
      </p>
      <p className="mt-1 text-sm">{caption}</p>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(caption);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="mt-2 text-sm underline"
      >
        {copied ? "Copied!" : "Copy caption"}
      </button>
    </div>
  );
}
