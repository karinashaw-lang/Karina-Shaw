"use client";

import { useActionState } from "react";

import { saveBehindTheCut } from "@/lib/actions/behind-the-cut";

type Existing = {
  planText: string | null;
  rawFootageUrl: string | null;
  cutScenesUrl: string | null;
  kitText: string | null;
  hardPartText: string | null;
  priceCents: number;
} | null;

export default function BehindTheCutEditor({ videoId, existing }: { videoId: string; existing: Existing }) {
  const [state, formAction, pending] = useActionState(saveBehindTheCut, null);

  return (
    <form action={formAction} className="mt-3 flex flex-col gap-3">
      <input type="hidden" name="videoId" value={videoId} />

      <label className="flex flex-col gap-1 text-sm">
        The plan
        <textarea
          name="planText"
          rows={2}
          defaultValue={existing?.planText ?? ""}
          placeholder="What you set out to make before shooting"
          className="rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        The raw footage {existing?.rawFootageUrl && <span className="text-xs text-zinc-500">(file on record — pick a new one to replace it)</span>}
        <input name="rawFootageFile" type="file" accept="video/*" className="text-sm" />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        The cut scenes {existing?.cutScenesUrl && <span className="text-xs text-zinc-500">(file on record — pick a new one to replace it)</span>}
        <input name="cutScenesFile" type="file" accept="video/*" className="text-sm" />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        The kit
        <textarea
          name="kitText"
          rows={2}
          defaultValue={existing?.kitText ?? ""}
          placeholder="Gear, software, or setup you used"
          className="rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        The hard part
        <textarea
          name="hardPartText"
          rows={2}
          defaultValue={existing?.hardPartText ?? ""}
          placeholder="What was actually difficult about this one"
          className="rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Price (USD) — or free for subscribers
        <input
          name="priceDollars"
          type="number"
          min="1"
          step="1"
          defaultValue={(existing?.priceCents ?? 300) / 100}
          className="w-24 rounded border border-black/20 px-2 py-1 dark:border-white/20"
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="w-fit rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Saving…" : "Save Behind the Cut"}
      </button>
      {state && "error" in state && <p className="text-sm text-red-600">{state.error}</p>}
      {state && "success" in state && (
        <p className="text-sm text-green-700 dark:text-green-500">Saved.</p>
      )}
    </form>
  );
}
