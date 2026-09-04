"use client";

import { useActionState } from "react";

import { uploadVideo } from "@/lib/actions/video";

export default function UploadPage() {
  const [state, formAction, pending] = useActionState(uploadVideo, null);

  return (
    <div className="mx-auto max-w-sm px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Upload a video</h1>
      <p className="mt-2 text-sm text-zinc-500">
        Real video hosting isn&apos;t wired up yet — paste a URL to an existing video
        file for now.
      </p>

      <form action={formAction} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          Title
          <input
            name="title"
            type="text"
            required
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Description
          <textarea
            name="description"
            rows={3}
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Video URL
          <input
            name="videoUrl"
            type="url"
            required
            placeholder="https://…"
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>

        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {pending ? "Posting…" : "Post video"}
        </button>
      </form>
    </div>
  );
}
