// Scoring (spec §3.10): win +confidence, lose −confidence.
// Streaks count days PLAYED (showing up), not days won.
import { phaseOf } from './ledger';
import { addDays, etDate } from './time';
import type { DayCall, Entry, LedgerState, Receipt } from './types';

export function scoreEntry(entry: Entry, outcome: 'yes' | 'no') {
  const won = entry.side === outcome;
  return { verdict: won ? ('called' as const) : ('ate' as const), delta: won ? entry.conf : -entry.conf };
}

const sorted = (days: DayCall[]) => [...days].sort((a, b) => a.date.localeCompare(b.date));

export function receiptsFor(state: LedgerState, memberId: string): Receipt[] {
  const out: Receipt[] = [];
  for (const day of sorted(state.days)) {
    const e = day.entries.find((x) => x.memberId === memberId);
    if (!e || !day.resolution) continue;
    const s = scoreEntry(e, day.resolution.outcome);
    out.push({
      dayCallId: day.id, date: day.date, question: day.question, memberId,
      side: e.side, conf: e.conf, reading: e.reading, outcome: day.resolution.outcome,
      verdict: s.verdict, delta: s.delta, at: day.resolution.at,
    });
  }
  return out.reverse(); // newest first
}

export type GridCell = { date: string; status: 'won' | 'lost' | 'pending' | 'out' | 'off' | 'future' };

export interface Stats {
  pts: number;
  w: number;
  l: number;
  hitRate: number | null;
  streak: number;
  best: number;
  /** True when today's window is open and you haven't locked yet. */
  streakAtRisk: boolean;
  grid: GridCell[];
}

export function statsFor(state: LedgerState, memberId: string, now: Date): Stats {
  let pts = 0, w = 0, l = 0, run = 0, best = 0, atRisk = false;
  const byDate = new Map<string, GridCell['status']>();
  for (const day of sorted(state.days)) {
    const phase = phaseOf(day, now);
    if (phase === 'upcoming') continue;
    const e = day.entries.find((x) => x.memberId === memberId);
    if (phase === 'open' && !e) {
      atRisk = run > 0;
      byDate.set(day.date, 'pending');
      continue;
    }
    if (e) {
      run += 1;
      best = Math.max(best, run);
      if (day.resolution) {
        const s = scoreEntry(e, day.resolution.outcome);
        pts += s.delta;
        if (s.verdict === 'called') w++;
        else l++;
        byDate.set(day.date, s.verdict === 'called' ? 'won' : 'lost');
      } else byDate.set(day.date, 'pending');
    } else {
      run = 0;
      byDate.set(day.date, 'out');
    }
  }
  const today = etDate(now);
  const grid: GridCell[] = [];
  for (let i = 34; i >= 0; i--) {
    const date = addDays(today, -i);
    grid.push({ date, status: byDate.get(date) ?? 'off' });
  }
  return { pts, w, l, hitRate: w + l ? w / (w + l) : null, streak: run, best, streakAtRisk: atRisk, grid };
}

export interface LadderRow {
  memberId: string;
  name: string;
  handle: string;
  pts: number;
  w: number;
  l: number;
  streak: number;
}

export function ladder(state: LedgerState, groupId: string, now: Date): LadderRow[] {
  const g = state.groups.find((x) => x.id === groupId);
  if (!g) return [];
  return g.memberIds
    .map((id) => {
      const m = state.members.find((x) => x.id === id)!;
      const s = statsFor(state, id, now);
      return { memberId: id, name: m.name, handle: m.handle, pts: s.pts, w: s.w, l: s.l, streak: s.streak };
    })
    .sort((a, b) => b.pts - a.pts || b.w - a.w || a.name.localeCompare(b.name));
}
