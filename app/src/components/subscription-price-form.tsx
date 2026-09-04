"use client";

import { useActionState } from "react";

import { setSubscriptionPrice } from "@/lib/actions/subscription";

export default function SubscriptionPriceForm({
  currentPriceCents,
}: {
  currentPriceCents: number | null;
}) {
  const [state, formAction, pending] = useActionState(setSubscriptionPrice, null);

  return (
    <form action={formAction} className="mt-2 flex items-end gap-2">
      <label className="flex flex-col gap-1 text-sm">
        Monthly subscription price (USD, blank to disable)
        <input
          name="subscriptionPriceDollars"
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
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
