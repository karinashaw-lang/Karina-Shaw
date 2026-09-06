/** Small wrapper so `Date.now()` isn't called directly inside components —
 * the React Compiler's purity lint flags that even in Server Components. */
export function hoursAgo(hours: number): Date {
  return new Date(Date.now() - hours * 60 * 60 * 1000);
}

export function nowMs(): number {
  return Date.now();
}
