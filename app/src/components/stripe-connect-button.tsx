"use client";

import { useActionState } from "react";

import { startStripeConnectOnboarding } from "@/lib/actions/connect";

export default function StripeConnectButton({ label }: { label: string }) {
  const [state, formAction, pending] = useActionState(startStripeConnectOnboarding, null);

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Redirecting…" : label}
      </button>
      {state?.error && <p className="mt-1 text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
