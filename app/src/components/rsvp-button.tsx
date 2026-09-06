"use client";

import { useState, useTransition } from "react";

import { toggleRsvp } from "@/lib/actions/party";

export default function RsvpButton({
  partyId,
  initialGoing,
  initialCount,
}: {
  partyId: string;
  initialGoing: boolean;
  initialCount: number;
}) {
  const [going, setGoing] = useState(initialGoing);
  const [count, setCount] = useState(initialCount);
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        const next = !going;
        setGoing(next);
        setCount((c) => c + (next ? 1 : -1));
        startTransition(async () => {
          try {
            await toggleRsvp(partyId);
          } catch {
            setGoing(!next);
            setCount((c) => c + (next ? -1 : 1));
          }
        });
      }}
      className="rounded border border-black/20 px-3 py-1.5 text-sm disabled:opacity-50 dark:border-white/20"
    >
      {going ? "You're going" : "I'm going"} · {count}
    </button>
  );
}
