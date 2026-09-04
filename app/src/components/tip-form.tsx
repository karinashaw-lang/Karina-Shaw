"use client";

import { useActionState } from "react";

import { sendTip } from "@/lib/actions/tip";

export default function TipForm({
  creatorId,
  handle,
}: {
  creatorId: string;
  handle: string;
}) {
  const [state, formAction, pending] = useActionState(sendTip, null);

  if (state && "success" in state) {
    return <p className="mt-4 text-sm text-green-700 dark:text-green-500">Tip sent — thank you!</p>;
  }

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-2">
      <input type="hidden" name="creatorId" value={creatorId} />
      <input type="hidden" name="handle" value={handle} />
      <div className="flex items-end gap-2">
        <label className="flex flex-col gap-1 text-sm">
          Tip amount (USD)
          <input
            name="amountDollars"
            type="number"
            min="1"
            step="1"
            defaultValue={5}
            required
            className="w-24 rounded border border-black/20 px-2 py-1 dark:border-white/20"
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Sending…" : "Send tip"}
        </button>
      </div>
      <p className="text-xs text-zinc-500">
        Simulated for now — no payment processor is connected yet.
      </p>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
