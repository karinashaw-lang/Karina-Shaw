"use client";

import { useState, useTransition } from "react";

import { saveVideoToWall, saveClipToWall, saveMomentToWall } from "@/lib/actions/wall";

export default function SaveButton({
  kind,
  itemId,
  path,
}: {
  kind: "video" | "clip" | "moment";
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
          } else if (kind === "clip") {
            await saveClipToWall(itemId, path);
          } else {
            await saveMomentToWall(itemId, path);
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
