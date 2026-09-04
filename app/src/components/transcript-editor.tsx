"use client";

import { useActionState, useState } from "react";

import { saveTranscript } from "@/lib/actions/transcript";

export default function TranscriptEditor({
  videoId,
  initialText,
}: {
  videoId: string;
  initialText: string;
}) {
  const [state, formAction, pending] = useActionState(saveTranscript, null);
  const [open, setOpen] = useState(initialText.length === 0);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="mt-4 text-sm underline">
        Edit transcript
      </button>
    );
  }

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-2">
      <input type="hidden" name="videoId" value={videoId} />
      <label className="flex flex-col gap-1 text-sm">
        Transcript (one line per moment, starting with a timestamp)
        <textarea
          name="transcript"
          rows={6}
          defaultValue={initialText}
          placeholder={"0:00 Welcome to the show\n0:15 Today we're talking about...\n1:30 Let's get into it"}
          className="rounded border border-black/20 px-3 py-2 font-mono text-xs dark:border-white/20"
        />
      </label>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={pending}
          className="self-start rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Saving…" : "Save transcript"}
        </button>
        {initialText.length > 0 && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="self-start rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20"
          >
            Cancel
          </button>
        )}
      </div>
      <p className="text-xs text-zinc-500">
        This makes the video searchable and lets viewers jump straight to a moment. There&apos;s
        no automatic transcription yet, so paste it in manually for now.
      </p>
    </form>
  );
}
