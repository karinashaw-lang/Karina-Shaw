"use client";

import { useActionState } from "react";

import { setEarlyAccess } from "@/lib/actions/video";

export default function EarlyAccessEditor({
  videoId,
  daysRemaining,
}: {
  videoId: string;
  daysRemaining: number;
}) {
  const [state, formAction, pending] = useActionState(setEarlyAccess, null);

  return (
    <form action={formAction} className="mt-2 flex flex-wrap items-end gap-2">
      <input type="hidden" name="videoId" value={videoId} />
      <label className="flex flex-col gap-1 text-xs text-zinc-500">
        Early access for subscribers (days)
        <input
          name="earlyAccessDays"
          type="number"
          min="0"
          max="365"
          defaultValue={daysRemaining || ""}
          placeholder="0"
          className="w-24 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded border border-black/20 px-3 py-1.5 text-xs disabled:opacity-50 dark:border-white/20"
      >
        {pending ? "Saving…" : "Save"}
      </button>
      {daysRemaining > 0 && (
        <span className="text-xs text-zinc-500">
          Currently subscriber-only for {daysRemaining} more day{daysRemaining === 1 ? "" : "s"}.
        </span>
      )}
      {state && "error" in state && <p className="w-full text-xs text-red-600">{state.error}</p>}
    </form>
  );
}
