"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const mm = hours > 0 ? String(minutes).padStart(2, "0") : String(minutes);
  const ss = String(seconds).padStart(2, "0");
  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}

export default function VideoWithTranscript({
  src,
  audioSrc,
  initialSeek,
  segments,
}: {
  src: string;
  /** Audio-only stream — "audio-optional by default" from the business plan. */
  audioSrc?: string | null;
  initialSeek?: number;
  segments: { id: string; startSeconds: number; text: string }[];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mode, setMode] = useState<"video" | "audio">("video");

  // Mux-hosted videos are HLS (.m3u8); local/pasted-URL videos are plain
  // files. Only Safari plays HLS natively, so route .m3u8 through hls.js.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!src.endsWith(".m3u8")) {
      video.src = src;
      return;
    }
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  useEffect(() => {
    if (initialSeek === undefined) return;
    const el = mode === "audio" ? audioRef.current : videoRef.current;
    if (!el) return;
    el.currentTime = initialSeek;
    el.play().catch(() => {});
    // Only meant to run once when a deep-link/sync seek arrives, not on
    // every mode switch — deliberately excluding `mode` from deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSeek]);

  function seekTo(seconds: number) {
    const el = mode === "audio" ? audioRef.current : videoRef.current;
    if (!el) return;
    el.currentTime = seconds;
    el.play().catch(() => {});
  }

  function switchMode(next: "video" | "audio") {
    const current = mode === "audio" ? audioRef.current : videoRef.current;
    const time = current?.currentTime ?? 0;
    const wasPlaying = current ? !current.paused : false;
    setMode(next);
    requestAnimationFrame(() => {
      const target = next === "audio" ? audioRef.current : videoRef.current;
      if (target) {
        target.currentTime = time;
        if (wasPlaying) target.play().catch(() => {});
      }
    });
  }

  return (
    <div>
      <video
        ref={videoRef}
        controls
        className={`w-full rounded-lg bg-black ${mode === "video" ? "block" : "hidden"}`}
      />
      {audioSrc && (
        <audio
          ref={audioRef}
          controls
          src={audioSrc}
          className={`w-full ${mode === "audio" ? "block" : "hidden"}`}
        />
      )}

      {audioSrc && (
        <div className="mt-2 flex gap-2 text-sm">
          <button
            type="button"
            onClick={() => switchMode("video")}
            className={mode === "video" ? "font-medium underline" : "text-zinc-500"}
          >
            Watch
          </button>
          <button
            type="button"
            onClick={() => switchMode("audio")}
            className={mode === "audio" ? "font-medium underline" : "text-zinc-500"}
          >
            Listen only
          </button>
        </div>
      )}

      {segments.length > 0 && (
        <div className="mt-3 max-h-48 overflow-y-auto rounded border border-black/10 p-3 text-sm dark:border-white/10">
          <p className="mb-2 font-medium">Transcript</p>
          <ul className="flex flex-col gap-1">
            {segments.map((segment) => (
              <li key={segment.id}>
                <button
                  type="button"
                  onClick={() => seekTo(segment.startSeconds)}
                  className="text-left hover:underline"
                >
                  <span className="mr-2 text-zinc-500 tabular-nums">
                    {formatTime(segment.startSeconds)}
                  </span>
                  {segment.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
