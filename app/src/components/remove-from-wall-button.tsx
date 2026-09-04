"use client";

import { useTransition } from "react";

import { removeFromWall } from "@/lib/actions/wall";

export default function RemoveFromWallButton({ wallItemId }: { wallItemId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => removeFromWall(wallItemId))}
      className="shrink-0 text-sm text-zinc-500 underline disabled:opacity-50"
    >
      Remove
    </button>
  );
}
