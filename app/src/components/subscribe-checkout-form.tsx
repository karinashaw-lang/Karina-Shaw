"use client";

import { useActionState } from "react";

import { startSubscriptionCheckout } from "@/lib/actions/subscription";

export default function SubscribeCheckoutForm({
  creatorId,
  handle,
  priceCents,
}: {
  creatorId: string;
  handle: string;
  priceCents: number;
}) {
  const [state, formAction, pending] = useActionState(startSubscriptionCheckout, null);

  return (
    <form action={formAction}>
      <input type="hidden" name="creatorId" value={creatorId} />
      <input type="hidden" name="handle" value={handle} />
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Redirecting…" : `Subscribe – $${(priceCents / 100).toFixed(2)}/mo`}
      </button>
      {state?.error && <p className="mt-1 text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
