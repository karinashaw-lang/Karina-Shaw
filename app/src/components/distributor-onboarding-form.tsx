"use client";

import { useActionState } from "react";

import { startDistributorOnboarding } from "@/lib/actions/distributor";

export default function DistributorOnboardingForm({
  returnPath,
  label = "Set up payouts to earn from sharing",
}: {
  returnPath: string;
  label?: string;
}) {
  const [state, formAction, pending] = useActionState(startDistributorOnboarding, null);

  return (
    <form action={formAction}>
      <input type="hidden" name="returnPath" value={returnPath} />
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Redirecting…" : label}
      </button>
      {state?.error && <p className="mt-1 text-xs text-red-600">{state.error}</p>}
    </form>
  );
}
