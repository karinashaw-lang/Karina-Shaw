"use client";

import { useActionState } from "react";

import { saveEffortBadge } from "@/lib/actions/behind-the-cut";

export default function EffortBadgeEditor({
  videoId,
  hours,
  reshoots,
  minutesCut,
}: {
  videoId: string;
  hours: number | null;
  reshoots: number | null;
  minutesCut: number | null;
}) {
  const [state, formAction, pending] = useActionState(saveEffortBadge, null);

  return (
    <form action={formAction} className="mt-2 flex flex-wrap items-end gap-2">
      <input type="hidden" name="videoId" value={videoId} />
      <label className="flex flex-col gap-1 text-xs text-zinc-500">
        Hours to make
        <input
          name="effortHours"
          type="number"
          min="0"
          step="0.5"
          defaultValue={hours ?? ""}
          className="w-24 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
        />
      </label>
      <label className="flex flex-col gap-1 text-xs text-zinc-500">
        Reshoots
        <input
          name="effortReshoots"
          type="number"
          min="0"
          defaultValue={reshoots ?? ""}
          className="w-20 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
        />
      </label>
      <label className="flex flex-col gap-1 text-xs text-zinc-500">
        Minutes cut
        <input
          name="effortMinutesCut"
          type="number"
          min="0"
          defaultValue={minutesCut ?? ""}
          className="w-24 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded border border-black/20 px-3 py-1.5 text-xs disabled:opacity-50 dark:border-white/20"
      >
        {pending ? "Saving…" : "Save effort badge"}
      </button>
      {state && "error" in state && <p className="w-full text-xs text-red-600">{state.error}</p>}
    </form>
  );
}
