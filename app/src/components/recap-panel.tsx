import { currentWeekStartKey } from "@/lib/time";

function weekLabel(weekStart: string): string {
  const start = new Date(`${weekStart}T00:00:00Z`);
  const end = new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000);
  return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${end.toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric" }
  )}`;
}

export default function RecapPanel({ userId, pastWeeks }: { userId: string; pastWeeks: string[] }) {
  const weekStart = currentWeekStartKey();
  const cardUrl = `/api/recap/${userId}?week=${weekStart}`;

  return (
    <div className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-lg font-medium">Your Recap Reel — {weekLabel(weekStart)}</h2>
      <p className="text-sm text-zinc-500">Your week in review — streak, activity, and who you engaged with.</p>

      {/* eslint-disable-next-line @next/next/no-img-element -- dynamically generated, not a static asset */}
      <img src={cardUrl} alt="Your Recap Reel" className="mt-3 w-full max-w-sm rounded-lg" />

      <a
        href={cardUrl}
        download={`recap-${weekStart}.png`}
        className="mt-3 inline-block rounded bg-black px-3 py-1.5 text-sm text-white dark:bg-white dark:text-black"
      >
        Download to share
      </a>

      {pastWeeks.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Past weeks</p>
          <ul className="mt-1 flex flex-wrap gap-2 text-sm">
            {pastWeeks.map((week) => (
              <li key={week}>
                <a href={`/api/recap/${userId}?week=${week}`} className="underline">
                  {weekLabel(week)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
