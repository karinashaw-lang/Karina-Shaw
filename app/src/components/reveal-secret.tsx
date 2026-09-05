"use client";

import { useState } from "react";

export default function RevealSecret({ value }: { value: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-sm">
      {revealed ? value : "•".repeat(Math.min(value.length, 24))}
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="text-xs underline"
      >
        {revealed ? "Hide" : "Reveal"}
      </button>
    </span>
  );
}
