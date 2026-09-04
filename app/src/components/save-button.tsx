"use client";

import { useState, useTransition } from "react";

import { saveVideoToWall, saveClipToWall } from "@/lib/actions/wall";

export default function SaveButton({
  kind,
  itemId,
  path,
}: {
  kind: "video" | "clip";
  itemId: string;
  path: string;
}) {
  const [saved, setSaved] = useState(false);
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending || saved}
      onClick={() => {
        startTransition(async () => {
          if (kind === "video") {
            await saveVideoToWall(itemId, path);
          } else {
            await saveClipToWall(itemId, path);
          }
          setSaved(true);
        });
      }}
      className="rounded border border-black/20 px-3 py-1.5 text-sm disabled:opacity-50 dark:border-white/20"
    >
      {saved ? "Saved to wall" : "Save to wall"}
    </button>
  );
}
