"use client";

import { useActionState } from "react";

import { submitTakedownRequest } from "@/lib/actions/takedown";

export default function ReportContentForm({ prefillUrl }: { prefillUrl?: string }) {
  const [state, formAction, pending] = useActionState(submitTakedownRequest, null);

  if (state && "success" in state) {
    return (
      <p className="rounded bg-green-50 px-4 py-3 text-sm text-green-800 dark:bg-green-950 dark:text-green-400">
        Report submitted. It&apos;s been sent to the creator whose content this is — they can take it
        down or explain why it&apos;s not infringing.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        Link to the content you&apos;re reporting
        <input
          name="infringingUrl"
          type="text"
          required
          defaultValue={prefillUrl}
          placeholder="https://.../moments/... or /videos/..."
          className="rounded border border-black/20 px-2 py-1.5 dark:border-white/20"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Your name
        <input
          name="reporterName"
          type="text"
          required
          maxLength={200}
          className="rounded border border-black/20 px-2 py-1.5 dark:border-white/20"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Your email
        <input
          name="reporterEmail"
          type="email"
          required
          className="rounded border border-black/20 px-2 py-1.5 dark:border-white/20"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        Describe the copyrighted work and how this content infringes it
        <textarea
          name="workDescription"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="rounded border border-black/20 px-2 py-1.5 dark:border-white/20"
        />
      </label>

      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="goodFaithStatement" required className="mt-0.5" />
        <span>
          I have a good-faith belief that use of the material in the manner complained of is not
          authorized by the copyright owner, its agent, or the law.
        </span>
      </label>

      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="accuracyStatement" required className="mt-0.5" />
        <span>
          The information in this notice is accurate, and, under penalty of perjury, I am the
          copyright owner or authorized to act on the owner&apos;s behalf.
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded bg-black px-4 py-2 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Submitting…" : "Submit report"}
      </button>

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
