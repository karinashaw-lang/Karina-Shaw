"use client";

import { useActionState, useRef } from "react";

import { scheduleParty } from "@/lib/actions/party";

export default function SchedulePartyForm({ videoId }: { videoId: string }) {
  const [state, formAction, pending] = useActionState(scheduleParty, null);
  const isoInputRef = useRef<HTMLInputElement>(null);

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-2 rounded border border-black/10 p-4 dark:border-white/10">
      <input type="hidden" name="videoId" value={videoId} />
      {/* datetime-local has no timezone; convert to ISO using the browser's
          own interpretation before submitting, so the server (which may be
          in a different timezone) parses an unambiguous instant. */}
      <input ref={isoInputRef} type="hidden" name="scheduledAt" />
      <p className="text-sm font-medium">Schedule a listening party</p>
      <label className="flex flex-col gap-1 text-sm">
        When (your local time)
        <input
          type="datetime-local"
          required
          onChange={(e) => {
            if (isoInputRef.current) {
              isoInputRef.current.value = e.target.value ? new Date(e.target.value).toISOString() : "";
            }
          }}
          className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
        />
      </label>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Scheduling…" : "Schedule"}
      </button>
    </form>
  );
}
