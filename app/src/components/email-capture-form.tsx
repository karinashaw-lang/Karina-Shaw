"use client";

import { useActionState } from "react";

import { subscribeEmail } from "@/lib/actions/email-capture";

export default function EmailCaptureForm({
  creatorId,
  displayName,
}: {
  creatorId: string;
  displayName: string;
}) {
  const [state, formAction, pending] = useActionState(subscribeEmail, null);

  if (state && "success" in state) {
    return <p className="text-sm text-green-700 dark:text-green-500">You&apos;re on the list.</p>;
  }

  return (
    <form action={formAction} className="flex flex-wrap items-center gap-2">
      <input type="hidden" name="creatorId" value={creatorId} />
      <input
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        aria-label="Email address"
        className="rounded border border-black/20 px-2 py-1.5 text-sm dark:border-white/20"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded border border-black/20 px-3 py-1.5 text-sm disabled:opacity-50 dark:border-white/20"
      >
        {pending ? "Adding…" : `Get notified about new videos from ${displayName}`}
      </button>
      {state?.error && <p className="w-full text-xs text-red-600">{state.error}</p>}
    </form>
  );
}
