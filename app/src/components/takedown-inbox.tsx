"use client";

import { useActionState } from "react";

import { resolveTakedownRequest } from "@/lib/actions/takedown";

type TakedownRequestRow = {
  id: string;
  targetType: "VIDEO" | "MOMENT";
  targetId: string;
  reporterName: string;
  reporterEmail: string;
  workDescription: string;
  infringingUrl: string;
  createdAt: string;
};

function ResolveForm({ requestId }: { requestId: string }) {
  const [state, formAction, pending] = useActionState(resolveTakedownRequest, null);

  return (
    <form action={formAction} className="mt-2 flex flex-col gap-2">
      <input type="hidden" name="takedownRequestId" value={requestId} />
      <input
        type="text"
        name="note"
        placeholder="Optional note (shown nowhere yet, kept for your own record)"
        maxLength={1000}
        className="rounded border border-black/20 px-2 py-1 text-xs dark:border-white/20"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          name="action"
          value="remove"
          disabled={pending}
          className="rounded border border-red-600 px-2.5 py-1 text-xs text-red-600 disabled:opacity-50"
        >
          {pending ? "Working…" : "Take down"}
        </button>
        <button
          type="submit"
          name="action"
          value="dismiss"
          disabled={pending}
          className="rounded border border-black/20 px-2.5 py-1 text-xs disabled:opacity-50 dark:border-white/20"
        >
          {pending ? "Working…" : "Dismiss"}
        </button>
      </div>
      {state && "error" in state && <span className="text-xs text-red-600">{state.error}</span>}
    </form>
  );
}

export default function TakedownInbox({ requests }: { requests: TakedownRequestRow[] }) {
  if (requests.length === 0) {
    return <p className="mt-2 text-sm text-zinc-500">No open reports.</p>;
  }

  return (
    <ul className="mt-2 flex flex-col gap-3 text-sm">
      {requests.map((r) => (
        <li key={r.id} className="rounded border border-black/10 p-3 dark:border-white/10">
          <p>
            <span className="font-medium">{r.reporterName}</span>{" "}
            <span className="text-zinc-500">({r.reporterEmail})</span> reported your{" "}
            {r.targetType === "VIDEO" ? "video" : "moment"}:
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">&ldquo;{r.workDescription}&rdquo;</p>
          <a href={r.infringingUrl} className="mt-1 inline-block text-xs underline">
            {r.infringingUrl}
          </a>
          <ResolveForm requestId={r.id} />
        </li>
      ))}
    </ul>
  );
}
