import { currentMonthKey } from "@/lib/time";

export default function WallCardPanel({ userId, pastMonths }: { userId: string; pastMonths: string[] }) {
  const month = currentMonthKey();
  const cardUrl = `/api/wall-card/${userId}?month=${month}`;
  const monthLabel = new Date(`${month}-01T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-lg font-medium">Your Wall Card — {monthLabel}</h2>
      <p className="text-sm text-zinc-500">
        A shareable card made from your wall — post it anywhere.
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element -- dynamically generated, not a static asset */}
      <img src={cardUrl} alt="Your Wall Card" className="mt-3 w-full max-w-sm rounded-lg" />

      <a
        href={cardUrl}
        download={`wall-card-${month}.png`}
        className="mt-3 inline-block rounded bg-black px-3 py-1.5 text-sm text-white dark:bg-white dark:text-black"
      >
        Download to share
      </a>

      {pastMonths.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Past drops</p>
          <ul className="mt-1 flex flex-wrap gap-2 text-sm">
            {pastMonths.map((m) => (
              <li key={m}>
                <a href={`/api/wall-card/${userId}?month=${m}`} className="underline">
                  {new Date(`${m}-01T00:00:00`).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
