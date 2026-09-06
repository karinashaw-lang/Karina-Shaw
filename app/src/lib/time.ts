/** Small wrapper so `Date.now()` isn't called directly inside components —
 * the React Compiler's purity lint flags that even in Server Components. */
export function hoursAgo(hours: number): Date {
  return new Date(Date.now() - hours * 60 * 60 * 1000);
}

export function nowMs(): number {
  return Date.now();
}

/** Current calendar month as "YYYY-MM", used to key monthly Wall Cards. */
export function currentMonthKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

/** Monday of the current week (UTC) as "YYYY-MM-DD", used to key weekly Recap Reels. */
export function currentWeekStartKey(): string {
  const now = new Date();
  const utcDay = now.getUTCDay(); // 0 (Sun) - 6 (Sat)
  const daysSinceMonday = (utcDay + 6) % 7;
  const monday = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - daysSinceMonday)
  );
  return monday.toISOString().slice(0, 10);
}
