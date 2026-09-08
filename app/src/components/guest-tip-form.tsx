"use client";

import { useActionState } from "react";

import { sendGuestTip } from "@/lib/actions/guest-tip";

export default function GuestTipForm({
  creatorId,
  returnPath,
}: {
  creatorId: string;
  returnPath: string;
}) {
  const [state, formAction, pending] = useActionState(sendGuestTip, null);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <input type="hidden" name="creatorId" value={creatorId} />
      <input type="hidden" name="returnPath" value={returnPath} />
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
          {pending ? "Redirecting…" : "Tip without an account"}
        </button>
      </div>
      <p className="text-xs text-zinc-500">
        Pays by card via Stripe — no sign-up needed. You&apos;ll enter your email at checkout.
      </p>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
