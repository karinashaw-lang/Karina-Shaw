"use client";

import { useActionState, useState, useTransition } from "react";

import { addVideoExtra, deleteVideoExtra, generateResourceSheetDraft } from "@/lib/actions/video-extra";

type Extra = {
  id: string;
  type: "RESOURCE_SHEET" | "OUTTAKES" | "ATTACHMENT";
  title: string;
  priceCents: number;
};

const LABEL: Record<Extra["type"], string> = {
  RESOURCE_SHEET: "Resource sheet",
  OUTTAKES: "Outtakes",
  ATTACHMENT: "Attachment",
};

function DeleteButton({ videoExtraId, path }: { videoExtraId: string; path: string }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => deleteVideoExtra(videoExtraId, path))}
      className="text-xs text-red-600 disabled:opacity-50"
    >
      {pending ? "Removing…" : "Remove"}
    </button>
  );
}

function AddForm({ videoId, type }: { videoId: string; type: Extra["type"] }) {
  const [state, formAction, pending] = useActionState(addVideoExtra, null);
  const [draftState, draftAction, draftPending] = useActionState(generateResourceSheetDraft, null);
  const [text, setText] = useState("");

  return (
    <form action={formAction} className="mt-2 flex flex-col gap-2 rounded border border-black/10 p-3 dark:border-white/10">
      <input type="hidden" name="videoId" value={videoId} />
      <input type="hidden" name="type" value={type} />
      <input
        name="title"
        type="text"
        required
        placeholder={`${LABEL[type]} title`}
        className="rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20"
      />

      {type === "RESOURCE_SHEET" && (
        <>
          <textarea
            name="text"
            rows={4}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Everything mentioned in the episode: tools, books, links, gear…"
            className="rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
          />
          <div>
            <button
              type="button"
              disabled={draftPending}
              onClick={() => {
                const fd = new FormData();
                fd.set("videoId", videoId);
                draftAction(fd);
              }}
              className="rounded border border-black/20 px-2.5 py-1 text-xs disabled:opacity-50 dark:border-white/20"
            >
              {draftPending ? "Drafting…" : "Draft with AI"}
            </button>
            {draftState && "error" in draftState && (
              <span className="ml-2 text-xs text-zinc-500">{draftState.error}</span>
            )}
            {draftState && "draft" in draftState && (
              <button
                type="button"
                onClick={() => setText(draftState.draft)}
                className="ml-2 text-xs underline"
              >
                Use draft
              </button>
            )}
          </div>
        </>
      )}

      {type === "OUTTAKES" && (
        <input name="outtakesFile" type="file" accept="video/*" required className="text-sm" />
      )}

      {type === "ATTACHMENT" && <input name="attachmentFile" type="file" required className="text-sm" />}

      <label className="flex items-center gap-2 text-sm">
        Price (USD)
        <input
          name="priceDollars"
          type="number"
          min="1"
          step="1"
          defaultValue={5}
          className="w-24 rounded border border-black/20 px-2 py-1 dark:border-white/20"
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="w-fit rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Adding…" : `Add ${LABEL[type].toLowerCase()}`}
      </button>
      {state && "error" in state && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}

export default function VideoExtraEditor({
  videoId,
  path,
  extras,
}: {
  videoId: string;
  path: string;
  extras: Extra[];
}) {
  const [activeType, setActiveType] = useState<Extra["type"]>("RESOURCE_SHEET");

  return (
    <div className="mt-8 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-lg font-medium">Extras</h2>
      <p className="mt-1 text-sm text-zinc-500">
        Resource sheets, outtakes, and paid attachments — each sold separately, per the plan.
      </p>

      {extras.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2 text-sm">
          {extras.map((extra) => (
            <li key={extra.id} className="flex items-center justify-between gap-3">
              <span>
                <span className="text-xs uppercase tracking-wide text-zinc-500">{LABEL[extra.type]}</span>{" "}
                {extra.title} — ${(extra.priceCents / 100).toFixed(2)}
              </span>
              <DeleteButton videoExtraId={extra.id} path={path} />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex gap-2 text-xs">
        {(Object.keys(LABEL) as Extra["type"][]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveType(t)}
            className={`rounded px-2.5 py-1 ${
              activeType === t
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-black/20 dark:border-white/20"
            }`}
          >
            Add {LABEL[t].toLowerCase()}
          </button>
        ))}
      </div>

      <AddForm key={activeType} videoId={videoId} type={activeType} />
    </div>
  );
}
