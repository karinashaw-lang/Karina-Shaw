"use client";

import { useActionState } from "react";

import { setVideoGuests } from "@/lib/actions/guest";

export default function GuestEditor({
  videoId,
  initialNames,
}: {
  videoId: string;
  initialNames: string[];
}) {
  const [state, formAction, pending] = useActionState(setVideoGuests, null);

  return (
    <form action={formAction} className="mt-2 flex flex-col gap-1">
      <input type="hidden" name="videoId" value={videoId} />
      <label className="flex flex-col gap-1 text-xs text-zinc-500">
        Featuring (comma-separated names)
        <input
          name="names"
          type="text"
          defaultValue={initialNames.join(", ")}
          placeholder="e.g. Jordan Lee, Sam Rivera"
          className="rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="mt-1 w-fit rounded border border-black/20 px-3 py-1 text-xs disabled:opacity-50 dark:border-white/20"
      >
        {pending ? "Saving…" : "Save guests"}
      </button>
      {state?.error && <p className="text-xs text-red-600">{state.error}</p>}
    </form>
  );
}
