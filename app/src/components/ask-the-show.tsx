"use client";

import { useActionState } from "react";
import Link from "next/link";

import { askTheShow } from "@/lib/actions/ask";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function AskTheShow({ creatorId }: { creatorId: string }) {
  const [state, formAction, pending] = useActionState(askTheShow, null);

  return (
    <div className="mt-8 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-lg font-medium">Ask the show</h2>
      <p className="text-sm text-zinc-500">
        Ask a question — the answer is pulled from this creator&apos;s full catalog.
      </p>

      <form action={formAction} className="mt-3 flex gap-2">
        <input type="hidden" name="creatorId" value={creatorId} />
        <input
          name="question"
          type="text"
          required
          placeholder="What have they said about…?"
          className="flex-1 rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-black px-3 py-2 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Asking…" : "Ask"}
        </button>
      </form>

      {state && "error" in state && <p className="mt-2 text-sm text-red-600">{state.error}</p>}

      {state && "sources" in state && (
        <div className="mt-4">
          {state.answer ? (
            <p className="text-sm">{state.answer}</p>
          ) : state.sources.length === 0 ? (
            <p className="text-sm text-zinc-500">Nothing in the catalog matches that.</p>
          ) : (
            <p className="text-xs text-zinc-500">
              No OPENAI_API_KEY configured, so here are the matching moments instead of a
              synthesized answer:
            </p>
          )}

          {state.sources.length > 0 && (
            <ul className="mt-2 flex flex-col gap-2 text-sm">
              {state.sources.map((source, i) => (
                <li key={source.segmentId}>
                  <Link href={`/videos/${source.videoId}?t=${source.startSeconds}`} className="hover:underline">
                    {state.answer && <span className="mr-1 text-zinc-500">[{i + 1}]</span>}
                    <span className="mr-2 text-zinc-500 tabular-nums">
                      {formatTime(source.startSeconds)}
                    </span>
                    &ldquo;{source.text}&rdquo;
                  </Link>
                  <span className="ml-2 text-xs text-zinc-500">— {source.videoTitle}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
