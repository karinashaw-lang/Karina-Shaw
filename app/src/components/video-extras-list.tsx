"use client";

import { useActionState } from "react";

import { unlockVideoExtra } from "@/lib/actions/video-extra";

type Extra = {
  id: string;
  type: "RESOURCE_SHEET" | "OUTTAKES" | "ATTACHMENT";
  title: string;
  text: string | null;
  fileUrl: string | null;
  priceCents: number;
};

const LABEL: Record<Extra["type"], string> = {
  RESOURCE_SHEET: "Resource sheet",
  OUTTAKES: "Outtakes",
  ATTACHMENT: "Attachment",
};

function UnlockForm({ videoExtraId, priceCents }: { videoExtraId: string; priceCents: number }) {
  const [state, formAction, pending] = useActionState(unlockVideoExtra, null);

  return (
    <form action={formAction} className="mt-1">
      <input type="hidden" name="videoExtraId" value={videoExtraId} />
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-black px-3 py-1.5 text-xs text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Unlocking…" : `Unlock for $${(priceCents / 100).toFixed(2)}`}
      </button>
      {state && "error" in state && <p className="mt-1 text-xs text-red-600">{state.error}</p>}
    </form>
  );
}

export default function VideoExtrasList({
  extras,
  unlockedIds,
  isSubscribedIncluded,
}: {
  extras: Extra[];
  unlockedIds: Set<string>;
  isSubscribedIncluded: boolean;
}) {
  if (extras.length === 0) return null;

  return (
    <div className="mt-8 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-lg font-medium">Extras</h2>
      <ul className="mt-3 flex flex-col gap-4 text-sm">
        {extras.map((extra) => {
          const hasAccess = unlockedIds.has(extra.id);
          return (
            <li key={extra.id}>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {LABEL[extra.type]}
              </p>
              <p className="font-medium">{extra.title}</p>

              {hasAccess ? (
                extra.type === "RESOURCE_SHEET" ? (
                  <p className="mt-1 whitespace-pre-wrap">{extra.text}</p>
                ) : extra.type === "OUTTAKES" ? (
                  <video controls className="mt-1 w-full rounded bg-black" src={extra.fileUrl ?? undefined} />
                ) : (
                  <a href={extra.fileUrl ?? undefined} className="mt-1 inline-block underline">
                    Download attachment
                  </a>
                )
              ) : (
                <>
                  <UnlockForm videoExtraId={extra.id} priceCents={extra.priceCents} />
                  {isSubscribedIncluded && (
                    <p className="mt-1 text-xs text-zinc-500">Included free with a subscription.</p>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
