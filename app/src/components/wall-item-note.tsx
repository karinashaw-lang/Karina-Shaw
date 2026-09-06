"use client";

import { useState, useTransition } from "react";

import { setWallItemNote } from "@/lib/actions/wall";

export default function WallItemNote({
  wallItemId,
  initialNote,
}: {
  wallItemId: string;
  initialNote: string | null;
}) {
  const [editing, setEditing] = useState(false);
  const [note, setNote] = useState(initialNote ?? "");
  const [pending, startTransition] = useTransition();

  if (!editing) {
    return note ? (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className="mt-1 block text-left text-sm italic text-zinc-600 hover:underline dark:text-zinc-400"
      >
        &ldquo;{note}&rdquo;
      </button>
    ) : (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className="mt-1 text-xs text-zinc-500 underline"
      >
        Add a note — why did you save this?
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        startTransition(async () => {
          await setWallItemNote(wallItemId, note);
          setEditing(false);
        });
      }}
      className="mt-1 flex items-center gap-2"
    >
      <input
        autoFocus
        value={note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={280}
        placeholder="Why did you save this?"
        className="w-full rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
      />
      <button type="submit" disabled={pending} className="text-sm underline disabled:opacity-50">
        {pending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
