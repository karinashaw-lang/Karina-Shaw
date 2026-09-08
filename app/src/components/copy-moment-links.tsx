"use client";

import { useState } from "react";

export default function CopyMomentLinks({ momentUrl, embedUrl }: { momentUrl: string; embedUrl: string }) {
  const [copied, setCopied] = useState<"link" | "embed" | null>(null);

  function copy(kind: "link" | "embed", text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(kind);
      setTimeout(() => setCopied(null), 1600);
    });
  }

  const embedSnippet = `<iframe src="${embedUrl}" width="480" height="270" frameborder="0" allow="autoplay"></iframe>`;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => copy("link", momentUrl)}
        className="rounded border border-black/20 px-3 py-1.5 text-xs dark:border-white/20"
      >
        {copied === "link" ? "Link copied" : "Copy link"}
      </button>
      <button
        type="button"
        onClick={() => copy("embed", embedSnippet)}
        className="rounded border border-black/20 px-3 py-1.5 text-xs dark:border-white/20"
      >
        {copied === "embed" ? "Embed code copied" : "Copy embed code"}
      </button>
    </div>
  );
}
