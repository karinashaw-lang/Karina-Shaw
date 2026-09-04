"use client";

import { useEffect, useRef, useState } from "react";

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
  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [status, setStatus] = useState<"idle" | "recording" | "recorded">("idle");
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function startRecording() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (liveVideoRef.current) {
        liveVideoRef.current.srcObject = stream;
      }

      chunksRef.current = [];
      const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        const file = new File([blob], `recording-${Date.now()}.webm`, { type: "video/webm" });

        setPreviewUrl(URL.createObjectURL(blob));
        setStatus("recorded");
        stream.getTracks().forEach((track) => track.stop());
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

      {status !== "recorded" && (
        <video ref={liveVideoRef} autoPlay muted playsInline className="w-full rounded bg-black" />
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
