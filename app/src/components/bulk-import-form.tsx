"use client";

import { useActionState } from "react";

import { bulkImportVideos } from "@/lib/actions/bulk-import";

export default function BulkImportForm() {
  const [state, formAction, pending] = useActionState(bulkImportVideos, null);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <label className="flex flex-col gap-1 text-sm">
        One video per line: title, video URL, and an optional description
        <textarea
          name="rows"
          required
          rows={10}
          placeholder={"My First Episode\thttps://cdn.example.com/ep1.mp4\tWhat we talked about\nEpisode Two\thttps://cdn.example.com/ep2.mp4"}
          className="rounded border border-black/20 px-3 py-2 font-mono text-xs dark:border-white/20"
        />
      </label>
      <p className="text-xs text-zinc-500">
        Paste directly from a spreadsheet (tab-separated), or use commas. A header row is fine — it
        gets skipped automatically. Videos are posted exactly like pasting a URL in the regular
        upload form: no re-encoding, no Mux, just linked as-is. Up to 200 rows at a time.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded bg-black px-4 py-2 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Importing…" : "Import videos"}
      </button>

      {state && "error" in state && <p className="text-sm text-red-600">{state.error}</p>}

      {state && "success" in state && (
        <div className="rounded border border-black/10 p-3 text-sm dark:border-white/10">
          <p className="text-green-700 dark:text-green-500">
            Imported {state.imported} {state.imported === 1 ? "video" : "videos"}.
          </p>
          {state.skipped.length > 0 && (
            <>
              <p className="mt-2 font-medium">Skipped {state.skipped.length}:</p>
              <ul className="mt-1 flex flex-col gap-0.5 text-xs text-zinc-500">
                {state.skipped.map((s, i) => (
                  <li key={i}>
                    Line {s.line}: {s.reason}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </form>
  );
}
