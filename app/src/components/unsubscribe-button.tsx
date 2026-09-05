"use client";

import { useState, useTransition } from "react";

import { unsubscribeFromCreator } from "@/lib/actions/subscription";

export default function UnsubscribeButton({
  creatorId,
  handle,
}: {
  creatorId: string;
  handle: string;
}) {
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();

  if (done) {
    return <span className="rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20">Unsubscribed</span>;
  }

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          await unsubscribeFromCreator(creatorId, handle);
          setDone(true);
        })
      }
      className="rounded border border-black/20 px-3 py-1.5 text-sm disabled:opacity-50 dark:border-white/20"
    >
      {pending ? "Unsubscribing…" : "Subscribed – cancel"}
    </button>
  );
}
