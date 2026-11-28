import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import * as L from './domain/ledger';
import { MockFeed } from './domain/market';
import { ensureSchedule, seedState, CREW_ID } from './domain/seed';
import { simulateCrew } from './domain/sim';
import { etDate, etInstant, nextMarketDay } from './domain/time';
import type { DayCall, LedgerState, Side, SourceSpec } from './domain/types';

const KEY = 'tally.v1';
export const ADMIN = 'admin';

interface Persisted {
  ledger: LedgerState;
  offsetMs: number;
  seen: string[]; // day ids whose verdict you've seen
  joined: boolean; // claimed a seat (accounts-lite)
  failing: string[]; // demo: tickers the feed refuses
}

export interface Toast { id: number; text: string; tone: 'ok' | 'err' | 'info' }

const feed = new MockFeed();

function load(): Persisted {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw) as Persisted;
      if (p.ledger?.version === 1) return p;
    }
  } catch { /* fresh start */ }
  return fresh();
}

function fresh(): Persisted {
  return { ledger: seedState(feed, new Date()), offsetMs: 0, seen: [], joined: false, failing: [] };
}

/** The day the Today screen is about: today if it's a market day with a call, else the next one. */
export function currentDay(state: LedgerState, now: Date): DayCall | undefined {
  const today = etDate(now);
  return state.days.find((d) => d.date === today) ?? state.days.find((d) => d.date === nextMarketDay(today, true));
}

function useStoreValue() {
  const [p, setP] = useState<Persisted>(load);
  const [nowMs, setNowMs] = useState(() => Date.now() + p.offsetMs);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const offsetRef = useRef(p.offsetMs);
  offsetRef.current = p.offsetMs;
  feed.failing = new Set(p.failing);

  const now = useMemo(() => new Date(nowMs), [nowMs]);

  useEffect(() => {
    const t = setInterval(() => setNowMs(Date.now() + offsetRef.current), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(p));
  }, [p]);

  // The clock drives the ledger: schedule, crew, resolution.
  useEffect(() => {
    setP((cur) => {
      let l = ensureSchedule(cur.ledger, now);
      l = simulateCrew(l, now);
      l = L.autoResolve(l, feed, now);
      return l === cur.ledger ? cur : { ...cur, ledger: l };
    });
  }, [now]);

  const toast = useCallback((text: string, tone: Toast['tone'] = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, text, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800);
  }, []);

  const pRef = useRef(p);
  pRef.current = p;
  /**
   * Apply a ledger op. Validate against the latest snapshot first so rule
   * violations surface as toasts; the updater itself never throws.
   */
  const exec = useCallback(
    (fn: (l: LedgerState, now: Date) => LedgerState, ok?: string) => {
      const t = new Date(Date.now() + offsetRef.current);
      try {
        fn(pRef.current.ledger, t);
      } catch (e) {
        toast(e instanceof Error ? e.message : String(e), 'err');
        return false;
      }
      setP((cur) => {
        try {
          return { ...cur, ledger: fn(cur.ledger, t) };
        } catch {
          return cur;
        }
      });
      if (ok) toast(ok, 'ok');
      return true;
    },
    [toast],
  );

  const you = p.ledger.youId;

  const actions = {
    lock: (dayId: string, side: Side, conf: number, reading?: string) =>
      exec((l, t) => L.lockEntry(l, dayId, { memberId: you, side, conf, reading }, t)),
    nudge: (dayId: string, targetId: string, name: string) =>
      exec((l, t) => L.track(l, 'nudge', you, t, { dayCallId: dayId, targetId }), `Nudged ${name}`),
    trackOpen: (dayId: string) =>
      setP((cur) =>
        cur.ledger.metrics.some((m) => m.kind === 'open' && m.dayCallId === dayId && m.memberId === you)
          ? cur
          : { ...cur, ledger: L.track(cur.ledger, 'open', you, new Date(Date.now() + offsetRef.current), { dayCallId: dayId }) },
      ),
    trackShare: (dayId: string) => exec((l, t) => L.track(l, 'share', you, t, { dayCallId: dayId })),
    trackInvite: () => exec((l, t) => L.track(l, 'invite', you, t), 'Invite link copied'),
    appeal: (dayId: string, note: string) => exec((l, t) => L.fileAppeal(l, dayId, you, note, t), 'Appeal filed — a human will review it'),
    join: (name: string) =>
      setP((cur) => ({
        ...cur,
        joined: true,
        ledger: { ...cur.ledger, members: cur.ledger.members.map((m) => (m.id === you ? { ...m, name, handle: name.toLowerCase().replace(/[^a-z0-9_]/g, '') || 'you' } : m)) },
      })),
    markSeen: (dayId: string) => setP((cur) => ({ ...cur, seen: [...cur.seen, dayId] })),

    // Admin console
    setQuestion: (date: string, question: string, spec: Omit<SourceSpec, 'date'>) =>
      exec((l, t) => L.setQuestion(l, { date, question, sourceSpec: spec }, ADMIN, t), `Question set for ${date}`),
    resolveManual: (dayId: string, outcome: Side, evidence: string) =>
      exec((l, t) => L.resolveManual(l, dayId, outcome, evidence, ADMIN, t), 'Resolved'),
    correct: (dayId: string, outcome: Side, evidence: string, reason: string) =>
      exec((l, t) => L.correctResolution(l, dayId, outcome, evidence, reason, ADMIN, t), 'Correction recorded — scores re-derived'),
    closeAppeals: (dayId: string) => exec((l, t) => L.closeAppeals(l, dayId, ADMIN, t), 'Appeals closed — resolution upheld'),
    retryFeed: (dayId: string) => exec((l) => L.retryFeed(l, dayId), 'Retrying feed'),
    setFailing: (tickers: string[]) => setP((cur) => ({ ...cur, failing: tickers })),

    // Demo lever: move the simulated clock.
    jumpTo: (date: string, h: number, m: number, s = 0) => {
      const target = etInstant(date, h, m).getTime() + s * 1000;
      const offsetMs = target - Date.now();
      offsetRef.current = offsetMs;
      setP((cur) => ({ ...cur, offsetMs }));
      setNowMs(target);
    },
    realTime: () => {
      offsetRef.current = 0;
      setP((cur) => ({ ...cur, offsetMs: 0 }));
      setNowMs(Date.now());
    },
    reset: () => {
      const f = fresh();
      offsetRef.current = 0;
      setP(f);
      setNowMs(Date.now());
      toast('Demo reset', 'info');
    },
  };

  return { ...p, now, toasts, toast, actions, groupId: CREW_ID, feedName: feed.name };
}

type Store = ReturnType<typeof useStoreValue>;
const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const value = useStoreValue();
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error('StoreProvider missing');
  return s;
}

export function useRoute(): [string, (r: string) => void] {
  const [r, setR] = useState(() => location.hash.slice(1) || '/');
  useEffect(() => {
    const on = () => setR(location.hash.slice(1) || '/');
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  return [r, (to: string) => { location.hash = to; }];
}
