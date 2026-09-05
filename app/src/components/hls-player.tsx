"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

/**
 * Plays an HLS stream (Mux VOD or live playback URL). Safari plays `.m3u8`
 * natively; everywhere else needs hls.js, since only Safari supports HLS in
 * `<video>` directly.
 */
export default function HlsPlayer({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

  return <video ref={videoRef} controls autoPlay playsInline className={className} />;
}
