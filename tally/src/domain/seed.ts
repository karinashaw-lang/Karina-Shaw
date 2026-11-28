// Demo crew + 30 market days of history, generated through the real ledger
// functions so the seeded record obeys every rule the live one does.
import { QUESTION_BANK, READINGS } from './bank';
import { autoResolve, dayByDate, lockEntry, setQuestion } from './ledger';
import { rand, type MarketFeed } from './market';
import { simulateCrew } from './sim';
import { addDays, etDate, isMarketDay, nextMarketDay, prevMarketDay } from './time';
import type { LedgerState, Member } from './types';

export const YOU_ID = 'm_you';
export const CREW_ID = 'g_tape';

const BOTS: Array<[string, string]> = [
  ['Dana R.', 'danar'], ['Marcus', 'thetaburn'], ['Priya', 'priyacalls'], ['Kev', 'kev_bagz'],
  ['Sofia', 'sofiaflows'], ['J. Okafor', 'okafor'], ['Lena', 'lenalongs'], ['Big Tom', 'bigtom'],
  ['Ravi', 'ravi_iv'],
];

export function questionFor(date: string) {
  // Stable rotation keyed on the date.
  const idx = Math.floor(rand(`q:${date}`) * QUESTION_BANK.length);
  return QUESTION_BANK[idx];
}

/** Keep the next few market days scheduled from the rotation (admin can override before 3:45). */
export function ensureSchedule(state: LedgerState, now: Date, ahead = 5): LedgerState {
  let next = state;
  let date = nextMarketDay(etDate(now), true);
  for (let i = 0; i < ahead; i++) {
    if (!dayByDate(next, date)) {
      const q = questionFor(date);
      next = setQuestion(
        next,
        { date, question: q.question, sourceSpec: { ticker: q.ticker, condition: q.condition, benchmark: q.benchmark } },
        'rotation',
        now,
        { system: true },
      );
    }
    date = nextMarketDay(date);
  }
  return next;
}

export function emptyState(youName = 'You'): LedgerState {
  const members: Member[] = [
    { id: YOU_ID, name: youName, handle: 'you' },
    ...BOTS.map(([name, handle], i) => ({ id: `m_bot${i}`, name, handle, bot: true })),
  ];
  return {
    version: 1,
    youId: YOU_ID,
    members,
    groups: [
      {
        id: CREW_ID,
        name: 'The Tape Readers',
        memberIds: members.map((m) => m.id),
        inviteCode: 'TAPE-7Q2K',
        commissionerId: 'm_bot0',
      },
    ],
    days: [],
    audit: [],
    metrics: [],
  };
}

export function seedState(feed: MarketFeed, now: Date, youName = 'You', historyDays = 30): LedgerState {
  let state = emptyState(youName);
  const today = etDate(now);
  const dates: string[] = [];
  let d = prevMarketDay(today);
  while (dates.length < historyDays) {
    if (isMarketDay(d)) dates.unshift(d);
    d = addDays(d, -1);
  }
  const before = new Date(Date.parse(`${dates[0]}T00:00:00Z`) - 86_400_000);
  for (const date of dates) {
    const q = questionFor(date);
    state = setQuestion(
      state,
      { date, question: q.question, sourceSpec: { ticker: q.ticker, condition: q.condition, benchmark: q.benchmark } },
      'rotation',
      before,
    );
  }
  // Your history: show up most days, with an unbroken recent run.
  state.days.forEach((day, i) => {
    const recent = i >= state.days.length - 6;
    if (!recent && rand(`you:${day.date}:show`) > 0.8) return;
    const lockAt = new Date(Date.parse(day.opensAt) + 60_000 + rand(`you:${day.date}:t`) * 600_000);
    state = lockEntry(
      state,
      day.id,
      {
        memberId: YOU_ID,
        side: rand(`you:${day.date}:side`) < 0.55 ? 'yes' : 'no',
        conf: 55 + Math.floor(rand(`you:${day.date}:conf`) * 40),
        reading: rand(`you:${day.date}:r`) < 0.4 ? READINGS[Math.floor(rand(`you:${day.date}:ri`) * READINGS.length)] : undefined,
      },
      lockAt,
    );
  });
  const endOfHistory = new Date(Date.parse(state.days[state.days.length - 1].resolvesAt) + 60_000);
  state = simulateCrew(state, endOfHistory);
  state = autoResolve(state, feed, endOfHistory);
  // History metrics are not real behaviour — start instrumentation clean.
  state = { ...state, metrics: [] };
  return ensureSchedule(state, now);
}
