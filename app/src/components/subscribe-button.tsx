"use client";

import { useState, useTransition } from "react";

import { subscribeToCreator, unsubscribeFromCreator } from "@/lib/actions/subscription";

export default function SubscribeButton({
  creatorId,
  handle,
  priceCents,
  initialSubscribed,
}: {
  creatorId: string;
  handle: string;
  priceCents: number;
  initialSubscribed: boolean;
}) {
  const [subscribed, setSubscribed] = useState(initialSubscribed);
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        const next = !subscribed;
        setSubscribed(next);
        startTransition(async () => {
          try {
            if (next) {
              await subscribeToCreator(creatorId, handle);
            } else {
              await unsubscribeFromCreator(creatorId, handle);
            }
          } catch {
            setSubscribed(!next);
          }
        });
      }}
      className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
    >
      {subscribed ? "Subscribed" : `Subscribe – $${(priceCents / 100).toFixed(2)}/mo`}
    </button>
  );
}
