"use client";

import { useActionState } from "react";

import { requestDub } from "@/lib/actions/dub";
import { DUB_LANGUAGES } from "@/lib/dub-languages";

export default function DubRequestForm({
  videoId,
  alreadyRequested,
}: {
  videoId: string;
  alreadyRequested: string[];
}) {
  const [state, formAction, pending] = useActionState(requestDub, null);
  const available = DUB_LANGUAGES.filter((l) => !alreadyRequested.includes(l.code));

  if (available.length === 0) return null;

  return (
    <form action={formAction} className="mt-2 flex items-center gap-2">
      <input type="hidden" name="videoId" value={videoId} />
      <select
        name="targetLanguage"
        required
        className="rounded border border-black/20 px-2 py-1.5 text-sm dark:border-white/20"
      >
        {available.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Requesting…" : "Dub it"}
      </button>
      {state && "error" in state && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
