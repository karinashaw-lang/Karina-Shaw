"use client";

import { useActionState } from "react";

import { submitPaidQuestion } from "@/lib/actions/paid-question";

export default function PaidQuestionForm({
  creatorId,
  handle,
  priceCents,
}: {
  creatorId: string;
  handle: string;
  priceCents: number;
}) {
  const [state, formAction, pending] = useActionState(submitPaidQuestion, null);

  if (state && "success" in state) {
    return (
      <p className="mt-4 text-sm text-green-700 dark:text-green-500">
        Question sent — thanks for the support!
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-2">
      <input type="hidden" name="creatorId" value={creatorId} />
      <input type="hidden" name="handle" value={handle} />
      <label className="flex flex-col gap-1 text-sm">
        Ask a paid question for the next episode (${(priceCents / 100).toFixed(2)})
        <textarea
          name="question"
          rows={2}
          required
          minLength={3}
          maxLength={500}
          className="rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="w-fit rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Sending…" : `Send for $${(priceCents / 100).toFixed(2)}`}
      </button>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
