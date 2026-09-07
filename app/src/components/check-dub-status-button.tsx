"use client";

import { useTransition } from "react";

import { checkDubStatus } from "@/lib/actions/dub";

export default function CheckDubStatusButton({ dubId }: { dubId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => checkDubStatus(dubId))}
      className="rounded border border-black/20 px-2 py-1 text-xs disabled:opacity-50 dark:border-white/20"
    >
      {pending ? "Checking…" : "Check status"}
    </button>
  );
}
