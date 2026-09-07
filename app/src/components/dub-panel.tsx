import { dubLanguageLabel } from "@/lib/dub-languages";
import DubRequestForm from "@/components/dub-request-form";
import CheckDubStatusButton from "@/components/check-dub-status-button";

type DubRow = {
  id: string;
  targetLanguage: string;
  status: "PROCESSING" | "READY" | "ERRORED";
  audioUrl: string | null;
  error: string | null;
};

export default function DubPanel({
  videoId,
  dubs,
  elevenLabsConfigured,
}: {
  videoId: string;
  dubs: DubRow[];
  elevenLabsConfigured: boolean;
}) {
  if (!elevenLabsConfigured && dubs.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium">Dubbed audio</h2>
      {!elevenLabsConfigured ? (
        <p className="text-sm text-zinc-500">Dubbing needs ELEVENLABS_API_KEY configured.</p>
      ) : (
        <>
          <p className="text-sm text-zinc-500">
            Watch or listen in another language — dubbed with the original speaker&apos;s voice
            preserved.
          </p>
          {dubs.length > 0 && (
            <ul className="mt-3 flex flex-col gap-2">
              {dubs.map((dub) => (
                <li key={dub.id} className="rounded border border-black/10 p-3 text-sm dark:border-white/10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{dubLanguageLabel(dub.targetLanguage)}</span>
                    {dub.status === "PROCESSING" && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-500">Dubbing…</span>
                        <CheckDubStatusButton dubId={dub.id} />
                      </div>
                    )}
                    {dub.status === "ERRORED" && (
                      <span className="text-xs text-red-600">{dub.error ?? "Dubbing failed."}</span>
                    )}
                  </div>
                  {dub.status === "READY" && dub.audioUrl && (
                    <audio controls src={dub.audioUrl} className="mt-2 w-full" />
                  )}
                </li>
              ))}
            </ul>
          )}
          <DubRequestForm videoId={videoId} alreadyRequested={dubs.map((d) => d.targetLanguage)} />
        </>
      )}
    </div>
  );
}
