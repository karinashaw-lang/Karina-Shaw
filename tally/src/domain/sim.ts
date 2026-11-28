// Demo-only crew simulation: bot members lock during the window at
// deterministic times, and respond to nudges. Uses the real lockEntry path,
// so every rule (window, immutability) applies to them too.
import { lockEntry, phaseOf } from './ledger';
import { rand } from './market';
import { READINGS } from './bank';
import type { DayCall, LedgerState, Side } from './types';

interface Plan {
  at: number;
  side: Side;
  conf: number;
  reading?: string;
}

function planFor(state: LedgerState, day: DayCall, memberId: string): Plan | null {
  const k = `${memberId}:${day.date}`;
  const reliability = 0.7 + rand(`${memberId}:rel`) * 0.25;
  const open = Date.parse(day.opensAt);
  const close = Date.parse(day.resolvesAt);
  let at: number | null = rand(`${k}:show`) < reliability ? open + rand(`${k}:t`) * (close - open - 15_000) : null;
  const nudge = state.metrics.find((m) => m.kind === 'nudge' && m.dayCallId === day.id && m.targetId === memberId);
  if (nudge && (at === null || at > Date.parse(nudge.at)) && rand(`${k}:nudge`) < 0.7) {
    at = Date.parse(nudge.at) + 8_000 + rand(`${k}:nt`) * 40_000;
  }
  if (at === null || at >= close) return null;
  const bias = rand(`${memberId}:bias`) - 0.5; // some bots are perma-bulls
  return {
    at,
    side: rand(`${k}:side`) + bias * 0.4 < 0.5 ? 'no' : 'yes',
    conf: 50 + Math.floor(rand(`${k}:conf`) * 50),
    reading: rand(`${k}:r`) < 0.6 ? READINGS[Math.floor(rand(`${k}:ri`) * READINGS.length)] : undefined,
  };
}

export function simulateCrew(state: LedgerState, now: Date): LedgerState {
  let next = state;
  const bots = state.members.filter((m) => m.bot);
  for (const day of state.days) {
    const phase = phaseOf(day, now);
    if (phase === 'upcoming' || phase === 'resolved') continue;
    for (const bot of bots) {
      if (day.entries.some((e) => e.memberId === bot.id)) continue;
      const plan = planFor(next, day, bot.id);
      if (!plan || plan.at > now.getTime()) continue;
      next = lockEntry(next, day.id, { memberId: bot.id, ...plan }, new Date(plan.at));
    }
  }
  return next;
}
