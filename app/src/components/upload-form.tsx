"use client";

import { useActionState, useRef, useState, useTransition, type FormEvent } from "react";
import Link from "next/link";

import { createMuxUpload, uploadVideo } from "@/lib/actions/video";
import CameraRecorder from "@/components/camera-recorder";

export default function UploadForm({
  hasSubscriptionPrice,
  muxConfigured,
}: {
  hasSubscriptionPrice: boolean;
  muxConfigured: boolean;
}) {
  const [state, formAction, pending] = useActionState(uploadVideo, null);
  const [mode, setMode] = useState<"file" | "record" | "url">("file");
  const [pickedFileName, setPickedFileName] = useState<string | null>(null);
  const [muxUploading, startMuxTransition] = useTransition();
  const [muxError, setMuxError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  function switchMode(next: "file" | "record" | "url") {
    if (next === "url") {
      if (fileInputRef.current) fileInputRef.current.value = "";
      setPickedFileName(null);
    } else if (urlInputRef.current) {
      urlInputRef.current.value = "";
    }
    setMode(next);
  }

  function handleRecorded(file: File) {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    if (fileInputRef.current) {
      fileInputRef.current.files = dataTransfer.files;
    }
    setPickedFileName(file.name);
  }

  function handleRetake() {
    if (fileInputRef.current) fileInputRef.current.value = "";
    setPickedFileName(null);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!muxConfigured) return; // native form submission handles this case

    const file = fileInputRef.current?.files?.[0];
    if (!file) return; // URL mode (or nothing picked yet) — submit as-is

    e.preventDefault();
    setMuxError(null);
    const formEl = e.currentTarget;

    startMuxTransition(async () => {
      try {
        const { uploadUrl, uploadId } = await createMuxUpload();
        const putResponse = await fetch(uploadUrl, { method: "PUT", body: file });
        if (!putResponse.ok) throw new Error("Upload to Mux failed.");

        const formData = new FormData(formEl);
        formData.delete("videoFile");
        formData.set("muxUploadId", uploadId);
        formAction(formData);
      } catch (err) {
        setMuxError(err instanceof Error ? err.message : "Could not upload to Mux.");
      }
    });
  }

  const isPending = pending || muxUploading;

  return (
    <form action={formAction} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
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

      <div className="flex gap-2 text-sm">
        {(["file", "record", "url"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => switchMode(m)}
            className={`rounded px-3 py-1.5 ${
              mode === m
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-black/20 dark:border-white/20"
            }`}
          >
            {m === "file" ? "Upload a file" : m === "record" ? "Record" : "Paste a URL"}
          </button>
        ))}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        name="videoFile"
        accept="video/*"
        onChange={(e) => setPickedFileName(e.target.files?.[0]?.name ?? null)}
        className={`text-sm ${mode === "file" ? "block" : "hidden"}`}
      />

      <div className={mode === "record" ? "block" : "hidden"}>
        <CameraRecorder onRecorded={handleRecorded} onRetake={handleRetake} />
      </div>

      <div className={mode === "url" ? "block" : "hidden"}>
        <label className="flex flex-col gap-1 text-sm">
          Video URL
          <input
            ref={urlInputRef}
            name="videoUrl"
            type="url"
            placeholder="https://…"
            className="rounded border border-black/20 px-3 py-2 dark:border-white/20"
          />
        </label>
      </div>

      {pickedFileName && mode !== "url" && (
        <p className="text-xs text-zinc-500">Ready: {pickedFileName}</p>
      )}

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="subscriberOnly" disabled={!hasSubscriptionPrice} />
        Subscribers only
      </label>
      {!hasSubscriptionPrice && (
        <p className="-mt-2 text-xs text-zinc-500">
          Set a{" "}
          <Link href="/creator/dashboard" className="underline">
            subscription price
          </Link>{" "}
          first to post subscriber-only videos.
        </p>
      )}

      {(state?.error || muxError) && <p className="text-sm text-red-600">{state?.error ?? muxError}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {muxUploading ? "Uploading…" : pending ? "Posting…" : "Post video"}
      </button>
    </form>
  );
}
