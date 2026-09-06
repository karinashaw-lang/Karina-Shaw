"use client";

import { useEffect, useRef, useState } from "react";

import { getRecentPartyMessages, postPartyMessage, type PartyMessageDto } from "@/lib/actions/party";

const POLL_INTERVAL_MS = 3000;

export default function PartyChat({ partyId }: { partyId: string }) {
  const [messages, setMessages] = useState<PartyMessageDto[]>([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      const latest = await getRecentPartyMessages(partyId);
      if (!cancelled) setMessages(latest);
    }

    poll();
    const interval = setInterval(poll, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [partyId]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if (!body) return;
    setDraft("");
    setSending(true);
    await postPartyMessage(partyId, body);
    const latest = await getRecentPartyMessages(partyId);
    setMessages(latest);
    setSending(false);
  }

  return (
    <div className="flex h-80 flex-col rounded border border-black/10 dark:border-white/10">
      <ul ref={listRef} className="flex-1 overflow-y-auto p-3 text-sm">
        {messages.length === 0 && <li className="text-zinc-500">No messages yet — say hi.</li>}
        {messages.map((m) => (
          <li key={m.id} className="mb-1">
            <span className="font-medium">{m.userName}:</span> {m.body}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex gap-2 border-t border-black/10 p-2 dark:border-white/10">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Say something…"
          className="flex-1 rounded border border-black/20 px-2 py-1 text-sm dark:border-white/20"
        />
        <button
          type="submit"
          disabled={sending}
          className="rounded bg-black px-3 py-1 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          Send
        </button>
      </form>
    </div>
  );
}
