"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { ensureLiveStream } from "@/lib/actions/live";

export default function GoLiveSetup() {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          setError(null);
          startTransition(async () => {
            try {
              await ensureLiveStream();
              router.refresh();
            } catch (err) {
              setError(err instanceof Error ? err.message : "Could not set up live streaming.");
            }
          });
        }}
        className="rounded bg-black px-4 py-2 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Setting up…" : "Set up live streaming"}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
