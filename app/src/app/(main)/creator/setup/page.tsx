"use client";

import { useActionState } from "react";

import { createCreatorProfile } from "@/lib/actions/creator";

export default function CreatorSetupPage() {
  const [state, formAction, pending] = useActionState(createCreatorProfile, null);

  return (
    <div className="mx-auto max-w-sm px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Set up your creator profile</h1>

      <form action={formAction} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          Handle
          <input
            name="handle"
            type="text"
            required
            pattern="[a-z0-9_]+"
            placeholder="e.g. jane_doe"
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Display name
          <input
            name="displayName"
            type="text"
            required
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Bio
          <textarea
            name="bio"
            rows={3}
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>

        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Creating…" : "Create profile"}
        </button>
      </form>
    </div>
  );
}
