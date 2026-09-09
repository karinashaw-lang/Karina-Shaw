"use client";

import { useActionState } from "react";

import { setQuestionPrice } from "@/lib/actions/paid-question";

export default function QuestionPriceForm({ currentPriceCents }: { currentPriceCents: number | null }) {
  const [state, formAction, pending] = useActionState(setQuestionPrice, null);

  return (
    <form action={formAction} className="mt-2 flex items-end gap-2">
      <label className="flex flex-col gap-1 text-sm">
        Price to submit a paid question (USD, blank to disable)
        <input
          name="questionPriceDollars"
          type="number"
          min="0"
          step="1"
          defaultValue={currentPriceCents !== null ? currentPriceCents / 100 : ""}
          className="w-40 rounded border border-black/20 px-2 py-1 dark:border-white/20"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="rounded border border-black/20 px-3 py-1.5 text-sm disabled:opacity-50 dark:border-white/20"
      >
        {pending ? "Saving…" : "Save"}
      </button>
      {state && "error" in state && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
