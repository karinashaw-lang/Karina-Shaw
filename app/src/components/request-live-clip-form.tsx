"use client";

import { useActionState } from "react";

import { requestLiveClip } from "@/lib/actions/live-clip";

export default function RequestLiveClipForm({ liveStreamId }: { liveStreamId: string }) {
  const [state, formAction, pending] = useActionState(requestLiveClip, null);

  return (
    <form
      action={formAction}
      className="mt-4 flex flex-col gap-2 rounded border border-black/10 p-4 dark:border-white/10"
    >
      <input type="hidden" name="liveStreamId" value={liveStreamId} />
      <p className="text-sm font-medium">Clip this moment</p>
      <p className="text-xs text-zinc-500">
        Grabs the last 30 seconds — it&apos;ll show up as a regular clip once the stream ends.
      </p>
      <div className="flex gap-2">
        <input
          name="title"
          type="text"
          required
          placeholder="Clip title"
          className="flex-1 rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Clipping…" : "Clip"}
        </button>
      </div>
      {state && "error" in state && <p className="text-sm text-red-600">{state.error}</p>}
      {state && "success" in state && (
        <p className="text-sm text-green-700 dark:text-green-500">
          Clipped! Find it on your wall once the stream ends.
        </p>
      )}
    </form>
  );
}
