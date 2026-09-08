"use client";

import { useActionState, useTransition } from "react";

import { publishMoment, dismissMoment, addManualMoment } from "@/lib/actions/curated-moment";
import CopyMomentLinks from "@/components/copy-moment-links";

type Moment = {
  id: string;
  title: string;
  startSeconds: number;
  endSeconds: number;
  source: "AI" | "CROWD" | "MANUAL";
  status: "SUGGESTED" | "PUBLISHED" | "DISMISSED";
};

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function MomentRow({
  moment,
  appUrl,
}: {
  moment: Moment;
  appUrl: string;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <li className="rounded border border-black/10 p-3 text-sm dark:border-white/10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <span className="font-medium">{moment.title}</span>{" "}
          <span className="text-zinc-500 tabular-nums">
            ({formatTime(moment.startSeconds)}–{formatTime(moment.endSeconds)})
          </span>
          {moment.status === "SUGGESTED" && (
            <span className="ml-2 rounded bg-zinc-200 px-1.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {moment.source === "AI" ? "AI suggestion" : "Crowd suggestion"}
            </span>
          )}
        </div>
        <div className="flex shrink-0 gap-2">
          {moment.status === "SUGGESTED" && (
            <>
              <button
                type="button"
                disabled={pending}
                onClick={() => startTransition(() => publishMoment(moment.id))}
                className="rounded bg-black px-2.5 py-1 text-xs text-white disabled:opacity-50 dark:bg-white dark:text-black"
              >
                Publish
              </button>
              <button
                type="button"
                disabled={pending}
                onClick={() => startTransition(() => dismissMoment(moment.id))}
                className="rounded border border-black/20 px-2.5 py-1 text-xs disabled:opacity-50 dark:border-white/20"
              >
                Dismiss
              </button>
            </>
          )}
          {moment.status === "PUBLISHED" && (
            <button
              type="button"
              disabled={pending}
              onClick={() => startTransition(() => dismissMoment(moment.id))}
              className="rounded border border-black/20 px-2.5 py-1 text-xs disabled:opacity-50 dark:border-white/20"
            >
              Unpublish
            </button>
          )}
        </div>
      </div>
      {moment.status === "PUBLISHED" && (
        <div className="mt-2">
          <CopyMomentLinks
            momentUrl={`${appUrl}/moments/${moment.id}`}
            embedUrl={`${appUrl}/embed/moments/${moment.id}`}
          />
        </div>
      )}
    </li>
  );
}

function AddMomentForm({ videoId }: { videoId: string }) {
  const [state, formAction, pending] = useActionState(addManualMoment, null);

  return (
    <form action={formAction} className="mt-4 flex flex-col gap-2 rounded border border-black/10 p-3 dark:border-white/10">
      <input type="hidden" name="videoId" value={videoId} />
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Add a moment</p>
      <input
        name="title"
        type="text"
        required
        placeholder="Moment title"
        className="rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20"
      />
      <div className="flex gap-2">
        <input
          name="startSeconds"
          type="number"
          min="0"
          required
          placeholder="Start (s)"
          className="w-28 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
        />
        <input
          name="endSeconds"
          type="number"
          min="0"
          required
          placeholder="End (s)"
          className="w-28 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Publishing…" : "Publish moment"}
        </button>
      </div>
      {state && "error" in state && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}

export default function CuratedMomentsCurator({
  videoId,
  moments,
  appUrl,
}: {
  videoId: string;
  moments: Moment[];
  appUrl: string;
}) {
  const suggested = moments.filter((m) => m.status === "SUGGESTED");
  const published = moments.filter((m) => m.status === "PUBLISHED");

  return (
    <div className="mt-8 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-lg font-medium">Curated Moments</h2>
      <p className="text-sm text-zinc-500">
        Mark which moments are allowed to spread. Nothing here goes public until you publish it.
      </p>

      {suggested.length > 0 && (
        <>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
            AI suggestions — {suggested.length} pending
          </p>
          <ul className="mt-2 flex flex-col gap-2">
            {suggested.map((m) => (
              <MomentRow key={m.id} moment={m} appUrl={appUrl} />
            ))}
          </ul>
        </>
      )}

      {published.length > 0 && (
        <>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
            Published — {published.length} live
          </p>
          <ul className="mt-2 flex flex-col gap-2">
            {published.map((m) => (
              <MomentRow key={m.id} moment={m} appUrl={appUrl} />
            ))}
          </ul>
        </>
      )}

      {suggested.length === 0 && published.length === 0 && (
        <p className="mt-4 text-sm text-zinc-500">
          No moments yet — add one below, or check back once this video has a transcript.
        </p>
      )}

      <AddMomentForm videoId={videoId} />
    </div>
  );
}
