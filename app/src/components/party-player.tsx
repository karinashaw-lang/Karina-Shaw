"use client";

import { useEffect, useState } from "react";

import VideoWithTranscript from "@/components/video-with-transcript";

function formatCountdown(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function elapsedSeconds(scheduledMs: number, nowMs: number) {
  return Math.max(0, Math.floor((nowMs - scheduledMs) / 1000));
}

/**
 * Synchronized playback for a listening party: seeks once to the elapsed
 * position when the scheduled time arrives (not continuously — a
 * continuously-updating seek target would fight the viewer's own
 * play/pause/scrub). "Jump to live position" lets them manually re-sync if
 * they've drifted (paused, scrubbed, etc).
 */
export default function PartyPlayer({
  src,
  scheduledAt,
  segments,
}: {
  src: string;
  scheduledAt: string;
  segments: { id: string; startSeconds: number; text: string }[];
}) {
  const scheduledMs = new Date(scheduledAt).getTime();
  // Deferred to a timer callback (not read directly during render/effect
  // body) so the clock never causes an SSR/client render mismatch and never
  // trips the "no synchronous setState in an effect" rule.
  const [nowMs, setNowMs] = useState<number | null>(null);
  const [initialSeek, setInitialSeek] = useState(0);
  const [syncKey, setSyncKey] = useState(0);
  const [hasSynced, setHasSynced] = useState(false);

  useEffect(() => {
    const tick = () => setNowMs(Date.now());
    const timeout = setTimeout(tick, 0);
    const interval = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const started = nowMs !== null && nowMs >= scheduledMs;

  useEffect(() => {
    if (!started || hasSynced) return;
    const timeout = setTimeout(() => {
      setInitialSeek(elapsedSeconds(scheduledMs, Date.now()));
      setHasSynced(true);
    }, 0);
    return () => clearTimeout(timeout);
  }, [started, hasSynced, scheduledMs]);

  function jumpToLive() {
    setInitialSeek(elapsedSeconds(scheduledMs, Date.now()));
    setSyncKey((k) => k + 1);
  }

  if (nowMs === null) return null; // one tick while the clock initializes client-side

  if (!started) {
    const remaining = Math.max(0, Math.ceil((scheduledMs - nowMs) / 1000));
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg bg-black text-center text-white">
        <div>
          <p className="text-lg font-medium">Starts in {formatCountdown(remaining)}</p>
          <p className="mt-1 text-sm text-zinc-300">{new Date(scheduledMs).toLocaleString()}</p>
        </div>
      </div>
    );
  }

  if (!hasSynced) return null; // one tick while the initial seek position is computed

  return (
    <div>
      <VideoWithTranscript key={syncKey} src={src} initialSeek={initialSeek} segments={segments} />
      <button type="button" onClick={jumpToLive} className="mt-2 text-sm underline">
        Jump to live position
      </button>
    </div>
  );
}
