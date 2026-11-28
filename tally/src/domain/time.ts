// All Tally scheduling is in US/Eastern market time.
export const ET = 'America/New_York';
export const WINDOW_OPEN = { h: 15, m: 45 };
export const WINDOW_CLOSE = { h: 16, m: 0 };

const fmt = new Intl.DateTimeFormat('en-US', {
  timeZone: ET,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
});

export function etParts(d: Date) {
  const p: Record<string, string> = {};
  for (const part of fmt.formatToParts(d)) p[part.type] = part.value;
  return {
    y: Number(p.year),
    mo: Number(p.month),
    d: Number(p.day),
    h: Number(p.hour),
    m: Number(p.minute),
    s: Number(p.second),
    date: `${p.year}-${p.month}-${p.day}`,
  };
}

/** ET calendar date (YYYY-MM-DD) for an instant. */
export function etDate(d: Date): string {
  return etParts(d).date;
}

/** The instant at which the ET wall clock reads `date hh:mm`. DST-safe. */
export function etInstant(date: string, h: number, m: number): Date {
  const [y, mo, d] = date.split('-').map(Number);
  const target = Date.UTC(y, mo - 1, d, h, m);
  let guess = target;
  for (let i = 0; i < 3; i++) {
    const p = etParts(new Date(guess));
    const wall = Date.UTC(p.y, p.mo - 1, p.d, p.h, p.m);
    const diff = wall - target;
    if (diff === 0) break;
    guess -= diff;
  }
  return new Date(guess);
}

export function addDays(date: string, n: number): string {
  const [y, mo, d] = date.split('-').map(Number);
  const t = new Date(Date.UTC(y, mo - 1, d + n));
  return t.toISOString().slice(0, 10);
}

export function weekday(date: string): number {
  const [y, mo, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, mo - 1, d)).getUTCDay();
}

/** Weekdays only. NYSE holidays are an admin concern for the MVP (skip the day in the console). */
export function isMarketDay(date: string): boolean {
  const w = weekday(date);
  return w !== 0 && w !== 6;
}

export function nextMarketDay(date: string, inclusive = false): string {
  let d = inclusive ? date : addDays(date, 1);
  while (!isMarketDay(d)) d = addDays(d, 1);
  return d;
}

export function prevMarketDay(date: string, inclusive = false): string {
  let d = inclusive ? date : addDays(date, -1);
  while (!isMarketDay(d)) d = addDays(d, -1);
  return d;
}

export function windowFor(date: string) {
  return {
    opensAt: etInstant(date, WINDOW_OPEN.h, WINDOW_OPEN.m).toISOString(),
    resolvesAt: etInstant(date, WINDOW_CLOSE.h, WINDOW_CLOSE.m).toISOString(),
  };
}

export function fmtCountdown(ms: number): string {
  if (ms < 0) ms = 0;
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}
