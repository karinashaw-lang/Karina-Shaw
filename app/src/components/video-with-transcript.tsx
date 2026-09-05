"use client";

import { useEffect, useRef } from "react";
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
  initialSeek,
  segments,
}: {
  src: string;
  initialSeek?: number;
  segments: { id: string; startSeconds: number; text: string }[];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    if (initialSeek !== undefined && videoRef.current) {
      videoRef.current.currentTime = initialSeek;
      videoRef.current.play().catch(() => {});
    }
  }, [initialSeek]);

  function seekTo(seconds: number) {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    videoRef.current.play().catch(() => {});
  }

  return (
    <div>
      <video ref={videoRef} controls className="w-full rounded-lg bg-black" />

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
