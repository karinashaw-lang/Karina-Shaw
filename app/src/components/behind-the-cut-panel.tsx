"use client";

import { useActionState } from "react";

import { unlockBehindTheCut } from "@/lib/actions/behind-the-cut";

type Content = {
  planText: string | null;
  rawFootageUrl: string | null;
  cutScenesUrl: string | null;
  kitText: string | null;
  hardPartText: string | null;
  priceCents: number;
};

function UnlockForm({ videoId, priceCents }: { videoId: string; priceCents: number }) {
  const [state, formAction, pending] = useActionState(unlockBehindTheCut, null);

  return (
    <form action={formAction} className="mt-2">
      <input type="hidden" name="videoId" value={videoId} />
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Unlocking…" : `Unlock for $${(priceCents / 100).toFixed(2)}`}
      </button>
      {state && "error" in state && <p className="mt-1 text-sm text-red-600">{state.error}</p>}
    </form>
  );
}

export default function BehindTheCutPanel({
  videoId,
  content,
  hasAccess,
  isSubscribedIncluded,
}: {
  videoId: string;
  content: Content;
  hasAccess: boolean;
  isSubscribedIncluded: boolean;
}) {
  return (
    <div className="mt-8 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-lg font-medium">Behind the Cut</h2>

      {!hasAccess ? (
        <>
          <p className="mt-1 text-sm text-zinc-500">
            The plan, the raw footage, the cut scenes, the kit, the hard part — however much of it
            the creator shared.
          </p>
          <UnlockForm videoId={videoId} priceCents={content.priceCents} />
          {isSubscribedIncluded && (
            <p className="mt-1 text-xs text-zinc-500">Included free with a subscription.</p>
          )}
        </>
      ) : (
        <div className="mt-3 flex flex-col gap-4 text-sm">
          {content.planText && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">The plan</p>
              <p className="mt-1 whitespace-pre-wrap">{content.planText}</p>
            </div>
          )}
          {content.rawFootageUrl && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">The raw footage</p>
              <video controls className="mt-1 w-full rounded bg-black" src={content.rawFootageUrl} />
            </div>
          )}
          {content.cutScenesUrl && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">The cut scenes</p>
              <video controls className="mt-1 w-full rounded bg-black" src={content.cutScenesUrl} />
            </div>
          )}
          {content.kitText && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">The kit</p>
              <p className="mt-1 whitespace-pre-wrap">{content.kitText}</p>
            </div>
          )}
          {content.hardPartText && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">The hard part</p>
              <p className="mt-1 whitespace-pre-wrap">{content.hardPartText}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
