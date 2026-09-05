"use client";

import { useEffect, useRef, useState } from "react";

const STUDIO_LOOK_FILTER = "contrast(1.1) saturate(1.3) brightness(1.05) sepia(0.08)";

/**
 * Draws each frame of `sourceVideo` onto `canvas` with a cinematic color
 * grade + vignette, so the effect is baked into the recording rather than
 * just a CSS preview filter. This is the whole "Studio Look" implementation
 * — no ML model or third-party API, just canvas compositing.
 */
function drawStudioLookFrame(
  sourceVideo: HTMLVideoElement,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  const { videoWidth: w, videoHeight: h } = sourceVideo;
  if (w === 0 || h === 0) return;
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }

  ctx.filter = STUDIO_LOOK_FILTER;
  ctx.drawImage(sourceVideo, 0, 0, w, h);
  ctx.filter = "none";

  const vignette = ctx.createRadialGradient(
    w / 2,
    h / 2,
    h * 0.35,
    w / 2,
    h / 2,
    h * 0.85
  );
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(0,0,0,0.35)");
  ctx.fillStyle = vignette;
  ctx.globalCompositeOperation = "multiply";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "source-over";
}

/**
 * Records a clip from the browser's camera/mic. The resulting file is
 * handed back via `onRecorded` so the parent form can drop it into its own
 * file input, the same way it would handle a file picked from disk.
 */
export default function CameraRecorder({
  onRecorded,
  onRetake,
}: {
  onRecorded: (file: File) => void;
  onRetake: () => void;
}) {
  const liveVideoRef = useRef<HTMLVideoElement>(null);
  const sourceVideoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasStreamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const rafRef = useRef<number | null>(null);

  const [status, setStatus] = useState<"idle" | "recording" | "recorded">("idle");
  const [studioLook, setStudioLook] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      streamRef.current?.getTracks().forEach((track) => track.stop());
      canvasStreamRef.current?.getTracks().forEach((track) => track.stop());
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function startRecording() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;

      let recordedStream = stream;

      if (studioLook && canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not supported");

        const sourceVideo = document.createElement("video");
        sourceVideo.muted = true;
        sourceVideo.playsInline = true;
        sourceVideo.srcObject = stream;
        await sourceVideo.play();
        sourceVideoRef.current = sourceVideo;

        const draw = () => {
          drawStudioLookFrame(sourceVideo, canvas, ctx);
          rafRef.current = requestAnimationFrame(draw);
        };
        draw();

        const canvasStream = canvas.captureStream(30);
        stream.getAudioTracks().forEach((track) => canvasStream.addTrack(track));
        canvasStreamRef.current = canvasStream;
        recordedStream = canvasStream;
      } else if (liveVideoRef.current) {
        liveVideoRef.current.srcObject = stream;
      }

      chunksRef.current = [];
      const recorder = new MediaRecorder(recordedStream, { mimeType: "video/webm" });
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        const file = new File([blob], `recording-${Date.now()}.webm`, { type: "video/webm" });

        setPreviewUrl(URL.createObjectURL(blob));
        setStatus("recorded");

        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        stream.getTracks().forEach((track) => track.stop());
        canvasStreamRef.current?.getTracks().forEach((track) => track.stop());
        onRecorded(file);
      };

      recorder.start();
      recorderRef.current = recorder;
      setStatus("recording");
    } catch {
      setError("Couldn't access your camera or microphone.");
    }
  }

  function stopRecording() {
    recorderRef.current?.stop();
  }

  function retake() {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setStatus("idle");
    onRetake();
  }

  return (
    <div className="flex flex-col gap-2 rounded border border-dashed border-black/20 p-4 dark:border-white/20">
      <p className="text-sm font-medium">Record from your camera</p>

      {status === "idle" && (
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={studioLook}
            onChange={(e) => setStudioLook(e.target.checked)}
          />
          Studio Look (cinematic color grade + vignette)
        </label>
      )}

      {status !== "recorded" && (
        <>
          <video
            ref={liveVideoRef}
            autoPlay
            muted
            playsInline
            className={`w-full rounded bg-black ${
              status === "recording" && studioLook ? "hidden" : "block"
            }`}
          />
          <canvas
            ref={canvasRef}
            className={`w-full rounded bg-black ${
              status === "recording" && studioLook ? "block" : "hidden"
            }`}
          />
        </>
      )}
      {status === "recorded" && previewUrl && (
        <video src={previewUrl} controls className="w-full rounded bg-black" />
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-2">
        {status === "idle" && (
          <button
            type="button"
            onClick={startRecording}
            className="rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20"
          >
            Start recording
          </button>
        )}
        {status === "recording" && (
          <button
            type="button"
            onClick={stopRecording}
            className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
          >
            Stop recording
          </button>
        )}
        {status === "recorded" && (
          <button
            type="button"
            onClick={retake}
            className="rounded border border-black/20 px-3 py-1.5 text-sm dark:border-white/20"
          >
            Retake
          </button>
        )}
      </div>
    </div>
  );
}
