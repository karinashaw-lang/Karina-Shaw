import { describe, expect, it } from 'vitest';
import {
  autoResolve, correctResolution, fileAppeal, LedgerError, lockEntry, phaseOf, resolveManual, setQuestion, track,
} from './ledger';
import { MockFeed } from './market';
import { evaluate } from './resolution';
import { emptyState, seedState, YOU_ID, CREW_ID } from './seed';
import { simulateCrew } from './sim';
import { ladder, receiptsFor, statsFor } from './stats';
import { etInstant, etDate, windowFor } from './time';
import { dayView } from './view';
import { computeMetrics } from './metrics';
import type { LedgerState } from './types';

const DATE = '2026-11-24'; // Tuesday
const at = (h: number, m: number, s = 0) => new Date(etInstant(DATE, h, m).getTime() + s * 1000);

function withQuestion(): LedgerState {
  return setQuestion(
    emptyState(),
    { date: DATE, question: 'Will SPY close green today?', sourceSpec: { ticker: 'SPY', condition: 'close>open' } },
    'admin',
    at(9, 0),
  );
}
const dayId = `day_${DATE}`;

describe('time', () => {
  it('window is 3:45–4:00 PM ET across DST', () => {
    expect(windowFor('2026-11-24')).toEqual({ opensAt: '2026-11-24T20:45:00.000Z', resolvesAt: '2026-11-24T21:00:00.000Z' });
    expect(windowFor('2026-07-14')).toEqual({ opensAt: '2026-07-14T19:45:00.000Z', resolvesAt: '2026-07-14T20:00:00.000Z' });
    expect(etDate(new Date('2026-11-25T03:00:00Z'))).toBe('2026-11-24');
  });
});

describe('the lock', () => {
  it('rejects locks before the window and after it closes', () => {
    const s = withQuestion();
    const input = { memberId: YOU_ID, side: 'yes' as const, conf: 70 };
    expect(() => lockEntry(s, dayId, input, at(15, 44, 59))).toThrow(/not opened/);
    expect(() => lockEntry(s, dayId, input, at(16, 0))).toThrow(/closed/);
    expect(() => lockEntry(s, dayId, input, at(15, 45))).not.toThrow();
    expect(() => lockEntry(s, dayId, input, at(15, 59, 59))).not.toThrow();
  });

  it('can never be edited: a second lock is rejected', () => {
    let s = withQuestion();
    s = lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 70 }, at(15, 50));
    expect(() => lockEntry(s, dayId, { memberId: YOU_ID, side: 'no', conf: 99 }, at(15, 51))).toThrow(/never be edited/);
    expect(Object.isFrozen(s.days[0].entries[0])).toBe(true);
  });

  it('validates confidence and reading length', () => {
    const s = withQuestion();
    const t = at(15, 50);
    expect(() => lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 49 }, t)).toThrow(LedgerError);
    expect(() => lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 100 }, t)).toThrow(LedgerError);
    expect(() => lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 70.5 }, t)).toThrow(LedgerError);
    expect(() => lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 70, reading: 'x'.repeat(141) }, t)).toThrow(/140/);
    expect(() => lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 70, reading: 'x'.repeat(140) }, t)).not.toThrow();
  });
});

describe('questions', () => {
  it('are frozen once the window opens', () => {
    const s = withQuestion();
    const q = { date: DATE, question: 'Will QQQ close green?', sourceSpec: { ticker: 'QQQ', condition: 'close>open' as const } };
    expect(() => setQuestion(s, q, 'admin', at(15, 45))).toThrow(/frozen/);
    const replaced = setQuestion(s, q, 'admin', at(15, 0));
    expect(replaced.days[0].sourceSpec.ticker).toBe('QQQ');
    expect(replaced.audit.map((a) => a.action)).toEqual(['question.set', 'question.replaced']);
  });
});

describe('reveal lock', () => {
  it('hides picks until you lock and readings until the window closes', () => {
    let s = withQuestion();
    s = lockEntry(s, dayId, { memberId: 'm_bot1', side: 'no', conf: 80, reading: 'fade it' }, at(15, 46));
    let v = dayView(s, s.days[0], YOU_ID, CREW_ID, at(15, 47));
    const bot = v.crew.find((c) => c.member.id === 'm_bot1')!;
    expect(bot.status).toBe('locked');
    expect(bot.side).toBeUndefined();
    expect(bot.reading).toBeUndefined();
    expect(v.split).toBeUndefined();

    s = lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 60 }, at(15, 48));
    v = dayView(s, s.days[0], YOU_ID, CREW_ID, at(15, 49));
    const bot2 = v.crew.find((c) => c.member.id === 'm_bot1')!;
    expect(bot2.side).toBe('no');
    expect(bot2.conf).toBe(80);
    expect(bot2.reading).toBeUndefined();
    expect(v.split).toEqual({ yes: 1, no: 1 });

    v = dayView(s, s.days[0], YOU_ID, CREW_ID, at(16, 0));
    expect(v.crew.find((c) => c.member.id === 'm_bot1')!.reading).toBe('fade it');
  });
});

describe('resolution engine', () => {
  const feed = new MockFeed();
  it('evaluates each condition deterministically', () => {
    const a = evaluate({ ticker: 'SPY', condition: 'close>open', date: DATE }, feed);
    const b = evaluate({ ticker: 'SPY', condition: 'close>open', date: DATE }, feed);
    expect(a).toEqual(b);
    const bar = feed.getBar('SPY', DATE)!;
    expect(a.ok && a.outcome).toBe(bar.close > bar.open ? 'yes' : 'no');
    const o = evaluate({ ticker: 'NVDA', condition: 'outperform', benchmark: 'SPY', date: DATE }, feed);
    expect(o.ok).toBe(true);
  });

  it('auto-resolves only after the close, and records evidence + audit', () => {
    let s = withQuestion();
    s = lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 70 }, at(15, 50));
    expect(autoResolve(s, feed, at(15, 59)).days[0].resolution).toBeUndefined();
    s = autoResolve(s, feed, at(16, 0));
    const r = s.days[0].resolution!;
    expect(r.source).toBe('auto');
    expect(r.evidence).toMatch(/SPY open/);
    expect(s.audit.at(-1)!.action).toBe('resolve.auto');
    expect(phaseOf(s.days[0], at(16, 1))).toBe('resolved');
  });

  it('falls back to the admin console when the feed fails', () => {
    const broken = new MockFeed();
    broken.failing.add('SPY');
    let s = autoResolve(withQuestion(), broken, at(16, 0));
    expect(s.days[0].resolution).toBeUndefined();
    expect(s.days[0].feedFailure).toMatch(/No SPY bar/);
    expect(() => resolveManual(s, dayId, 'yes', 'x', 'admin', at(16, 5))).toThrow(/Evidence/);
    s = resolveManual(s, dayId, 'yes', 'Bloomberg terminal close 591.20 > open 588.00', 'admin', at(16, 5));
    expect(s.days[0].resolution!.source).toBe('admin');
    expect(s.audit.map((a) => a.action)).toContain('resolve.manual');
  });

  it('corrections keep history and re-score everyone', () => {
    let s = withQuestion();
    s = lockEntry(s, dayId, { memberId: YOU_ID, side: 'yes', conf: 70 }, at(15, 50));
    s = autoResolve(s, feed, at(16, 0));
    const first = s.days[0].resolution!.outcome;
    const before = statsFor(s, YOU_ID, at(17, 0)).pts;
    expect(Math.abs(before)).toBe(70);
    s = fileAppeal(s, dayId, YOU_ID, 'Feed used the wrong close print', at(16, 10));
    const flipped = first === 'yes' ? 'no' : 'yes';
    expect(() => correctResolution(s, dayId, flipped, 'official close', '', 'admin', at(16, 20))).toThrow(/reason/);
    s = correctResolution(s, dayId, flipped, 'Official NYSE closing print', 'Feed used pre-auction print', 'admin', at(16, 20));
    expect(s.days[0].resolutionHistory).toHaveLength(2);
    expect(s.days[0].appeals[0].status).toBe('overturned');
    expect(statsFor(s, YOU_ID, at(17, 0)).pts).toBe(-before);
  });
});

describe('scoring and streaks', () => {
  it('win +conf, lose −conf; streak counts days played', () => {
    const feed = new MockFeed();
    const now = new Date('2026-11-27T22:00:00Z'); // Fri after close
    const s = seedState(feed, now);
    const receipts = receiptsFor(s, YOU_ID);
    const st = statsFor(s, YOU_ID, now);
    expect(st.pts).toBe(receipts.reduce((a, r) => a + r.delta, 0));
    expect(st.w + st.l).toBe(receipts.length);
    for (const r of receipts) expect(r.delta).toBe(r.verdict === 'called' ? r.conf : -r.conf);
    // Seed guarantees 6 recent played days, but today (Fri) was not played.
    expect(st.streak).toBe(0);
    expect(st.best).toBeGreaterThanOrEqual(6);
    expect(st.grid).toHaveLength(35);
  });

  it('an open window you have not locked puts the streak at risk but does not break it', () => {
    const feed = new MockFeed();
    const now = etInstant('2026-11-27', 15, 50);
    const s = seedState(feed, now);
    const st = statsFor(s, YOU_ID, now);
    expect(st.streak).toBeGreaterThanOrEqual(6);
    expect(st.streakAtRisk).toBe(true);
    const l = ladder(s, CREW_ID, now);
    expect(l).toHaveLength(10);
    expect(l[0].pts).toBeGreaterThanOrEqual(l[1].pts);
  });
});

describe('crew simulation + nudges', () => {
  it('bots lock through the real path, and nudges are tracked', () => {
    let s = withQuestion();
    s = track(s, 'nudge', YOU_ID, at(15, 46), { dayCallId: dayId, targetId: 'm_bot3' });
    s = simulateCrew(s, at(15, 59, 59));
    expect(s.days[0].entries.length).toBeGreaterThan(3);
    for (const e of s.days[0].entries) {
      const t = Date.parse(e.lockedAt);
      expect(t).toBeGreaterThanOrEqual(at(15, 45).getTime());
      expect(t).toBeLessThan(at(16, 0).getTime());
    }
    const m = computeMetrics(s);
    expect(m.find((x) => x.key === 'nudge')!.detail).toMatch(/\/1 nudged/);
  });
});
