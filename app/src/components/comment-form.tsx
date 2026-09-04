"use client";

import { useActionState } from "react";

import { postComment } from "@/lib/actions/video";

export default function CommentForm({ videoId }: { videoId: string }) {
  const [state, formAction, pending] = useActionState(postComment, null);

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-2">
      <input type="hidden" name="videoId" value={videoId} />
      <textarea
        name="body"
        required
        rows={2}
        placeholder="Add a comment…"
        className="rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
      />
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Posting…" : "Comment"}
      </button>
    </form>
  );
}
