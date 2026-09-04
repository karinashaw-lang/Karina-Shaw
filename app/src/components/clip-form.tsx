"use client";

import { useActionState } from "react";

import { createClip } from "@/lib/actions/clip";

export default function ClipForm({ videoId }: { videoId: string }) {
  const [state, formAction, pending] = useActionState(createClip, null);

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-2 rounded border border-black/10 p-4 dark:border-white/10">
      <input type="hidden" name="videoId" value={videoId} />
      <p className="text-sm font-medium">Make a clip</p>
      <input
        name="title"
        type="text"
        required
        placeholder="Clip title"
        className="rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
      />
      <div className="flex gap-2">
        <label className="flex flex-1 flex-col gap-1 text-sm">
          Start (seconds)
          <input
            name="startSeconds"
            type="number"
            min="0"
            required
            className="rounded border border-black/20 px-2 py-1 dark:border-white/20"
          />
        </label>
        <label className="flex flex-1 flex-col gap-1 text-sm">
          End (seconds)
          <input
            name="endSeconds"
            type="number"
            min="0"
            required
            className="rounded border border-black/20 px-2 py-1 dark:border-white/20"
          />
        </label>
      </div>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Creating…" : "Create clip"}
      </button>
    </form>
  );
}
