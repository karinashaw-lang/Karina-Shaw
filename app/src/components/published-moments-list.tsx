import Link from "next/link";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function PublishedMomentsList({
  moments,
}: {
  moments: { id: string; title: string; startSeconds: number; endSeconds: number }[];
}) {
  if (moments.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium">Moments from this episode</h2>
      <ul className="mt-2 flex flex-col gap-2">
        {moments.map((moment) => (
          <li key={moment.id} className="rounded border border-black/10 p-3 text-sm dark:border-white/10">
            <Link href={`/moments/${moment.id}`} className="font-medium hover:underline">
              {moment.title}
            </Link>{" "}
            <span className="text-zinc-500 tabular-nums">
              ({formatTime(moment.startSeconds)}–{formatTime(moment.endSeconds)})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
