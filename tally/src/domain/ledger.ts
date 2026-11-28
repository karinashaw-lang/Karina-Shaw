// The ledger. One law: calls can never be edited or deleted.
// There is deliberately no updateEntry / deleteEntry anywhere in this module.
import type { MarketFeed } from './market';
import { evaluate, describeSpec } from './resolution';
import { windowFor } from './time';
import type {
  AuditEvent, DayCall, Entry, LedgerState, MetricEvent, MetricKind, Resolution, Side, SourceSpec,
} from './types';

export class LedgerError extends Error {}

export const MAX_READING = 140;
export const MIN_CONF = 50;
export const MAX_CONF = 99;

let seq = 0;
const uid = (p: string) => `${p}_${Date.now().toString(36)}${(seq++).toString(36)}`;

export type Phase = 'upcoming' | 'open' | 'closed' | 'resolved';

export function phaseOf(day: DayCall, now: Date): Phase {
  if (day.resolution) return 'resolved';
  const t = now.getTime();
  if (t < Date.parse(day.opensAt)) return 'upcoming';
  if (t < Date.parse(day.resolvesAt)) return 'open';
  return 'closed';
}

export function findDay(state: LedgerState, id: string): DayCall {
  const d = state.days.find((x) => x.id === id);
  if (!d) throw new LedgerError(`Unknown day call ${id}`);
  return d;
}

export function dayByDate(state: LedgerState, date: string): DayCall | undefined {
  return state.days.find((d) => d.date === date);
}

function replaceDay(state: LedgerState, day: DayCall): LedgerState {
  return { ...state, days: state.days.map((d) => (d.id === day.id ? day : d)) };
}

function audit(state: LedgerState, e: Omit<AuditEvent, 'id'>): LedgerState {
  return { ...state, audit: [...state.audit, { id: uid('aud'), ...e }] };
}

export function track(
  state: LedgerState, kind: MetricKind, memberId: string, now: Date, extra: Partial<MetricEvent> = {},
): LedgerState {
  return { ...state, metrics: [...state.metrics, { kind, memberId, at: now.toISOString(), ...extra }] };
}

// ─── Questions (admin) ─────────────────────────────────────────────────────

export function validateSpec(spec: SourceSpec) {
  if (!/^[A-Z.]{1,10}$/.test(spec.ticker)) throw new LedgerError('Ticker must be uppercase letters');
  if (spec.condition === 'outperform' && !spec.benchmark) throw new LedgerError('Outperform needs a benchmark');
  if (spec.benchmark && spec.benchmark === spec.ticker) throw new LedgerError('Benchmark must differ from ticker');
}

/**
 * Set (or replace) the question for a date. Only allowed before the window
 * opens — once anyone can lock against a question, it is frozen.
 */
export function setQuestion(
  state: LedgerState,
  input: { date: string; question: string; sourceSpec: Omit<SourceSpec, 'date'> },
  actor: string,
  now: Date,
  opts: { system?: boolean } = {},
): LedgerState {
  const question = input.question.trim();
  if (question.length < 8) throw new LedgerError('Question is too short');
  const sourceSpec: SourceSpec = { ...input.sourceSpec, date: input.date };
  validateSpec(sourceSpec);
  const { opensAt, resolvesAt } = windowFor(input.date);
  const existing = dayByDate(state, input.date);
  // The rotation may fill an empty, never-scheduled day late; nobody can have locked against it.
  const lateFillOk = opts.system && !existing;
  if (now.getTime() >= Date.parse(opensAt) && !lateFillOk) {
    throw new LedgerError('The window for that date has opened — the question is frozen');
  }
  if (existing && existing.entries.length > 0) throw new LedgerError('Question already has calls');
  const day: DayCall = {
    id: existing?.id ?? `day_${input.date}`,
    date: input.date,
    question,
    opensAt,
    resolvesAt,
    sourceSpec,
    entries: [],
    resolutionHistory: [],
    appeals: [],
  };
  const next = existing
    ? replaceDay(state, day)
    : { ...state, days: [...state.days, day].sort((a, b) => a.date.localeCompare(b.date)) };
  return audit(next, {
    at: now.toISOString(),
    actor,
    action: existing ? 'question.replaced' : 'question.set',
    dayCallId: day.id,
    detail: `${question} — rule: ${describeSpec(sourceSpec)}`,
  });
}

// ─── The lock ──────────────────────────────────────────────────────────────

export function lockEntry(
  state: LedgerState,
  dayId: string,
  input: { memberId: string; side: Side; conf: number; reading?: string },
  now: Date,
): LedgerState {
  const day = findDay(state, dayId);
  const phase = phaseOf(day, now);
  if (phase === 'upcoming') throw new LedgerError('The window has not opened yet');
  if (phase !== 'open') throw new LedgerError('The window is closed');
  if (!state.members.some((m) => m.id === input.memberId)) throw new LedgerError('Unknown member');
  if (day.entries.some((e) => e.memberId === input.memberId)) {
    throw new LedgerError('Already locked. Calls can never be edited.');
  }
  if (input.side !== 'yes' && input.side !== 'no') throw new LedgerError('Pick YES or NO');
  if (!Number.isInteger(input.conf) || input.conf < MIN_CONF || input.conf > MAX_CONF) {
    throw new LedgerError(`Confidence must be ${MIN_CONF}–${MAX_CONF}%`);
  }
  const reading = input.reading?.trim() || undefined;
  if (reading && [...reading].length > MAX_READING) throw new LedgerError(`Reading is over ${MAX_READING} characters`);
  const entry: Entry = Object.freeze({
    memberId: input.memberId,
    side: input.side,
    conf: input.conf,
    reading,
    lockedAt: now.toISOString(),
  });
  let next = replaceDay(state, { ...day, entries: [...day.entries, entry] });
  next = track(next, 'lock', input.memberId, now, { dayCallId: dayId });
  // Nudge response: locked after being nudged today.
  const nudged = state.metrics.some(
    (m) => m.kind === 'nudge' && m.dayCallId === dayId && m.targetId === input.memberId,
  );
  if (nudged) next = track(next, 'nudge_response', input.memberId, now, { dayCallId: dayId });
  return next;
}

// ─── Resolution ────────────────────────────────────────────────────────────

/** Auto-resolve every closed, unresolved day against the feed. */
export function autoResolve(state: LedgerState, feed: MarketFeed, now: Date): LedgerState {
  let next = state;
  for (const day of state.days) {
    if (phaseOf(day, now) !== 'closed' || day.feedFailure) continue;
    const r = evaluate(day.sourceSpec, feed);
    if (!r.ok) {
      next = replaceDay(next, { ...day, feedFailure: r.error });
      next = audit(next, {
        at: now.toISOString(), actor: 'system', action: 'resolve.feed_failure', dayCallId: day.id, detail: r.error,
      });
      continue;
    }
    const resolution: Resolution = {
      outcome: r.outcome, source: 'auto', feed: r.feed, evidence: r.evidence, at: now.toISOString(), actor: 'system',
    };
    next = replaceDay(next, { ...day, resolution, resolutionHistory: [resolution] });
    next = audit(next, {
      at: now.toISOString(), actor: 'system', action: 'resolve.auto', dayCallId: day.id,
      detail: `${r.outcome.toUpperCase()} — ${r.evidence} [${r.feed}]`,
    });
  }
  return next;
}

/** Admin backstop: resolve a closed day by hand (e.g. the feed failed). */
export function resolveManual(
  state: LedgerState, dayId: string, outcome: Side, evidence: string, actor: string, now: Date,
): LedgerState {
  const day = findDay(state, dayId);
  const phase = phaseOf(day, now);
  if (phase === 'resolved') throw new LedgerError('Already resolved — use a correction');
  if (phase !== 'closed') throw new LedgerError('Cannot resolve before the window closes');
  if (evidence.trim().length < 5) throw new LedgerError('Evidence is required');
  const resolution: Resolution = {
    outcome, source: 'admin', evidence: evidence.trim(), at: now.toISOString(), actor,
  };
  const next = replaceDay(state, { ...day, resolution, resolutionHistory: [...day.resolutionHistory, resolution] });
  return audit(next, {
    at: now.toISOString(), actor, action: 'resolve.manual', dayCallId: dayId,
    detail: `${outcome.toUpperCase()} — ${resolution.evidence}`,
  });
}

/**
 * Correct a botched resolution. The original stays in resolutionHistory and
 * the audit log; scores re-derive from the ledger automatically.
 */
export function correctResolution(
  state: LedgerState, dayId: string, outcome: Side, evidence: string, reason: string, actor: string, now: Date,
): LedgerState {
  const day = findDay(state, dayId);
  if (!day.resolution) throw new LedgerError('Not resolved yet');
  if (reason.trim().length < 5) throw new LedgerError('A correction needs a written reason');
  if (evidence.trim().length < 5) throw new LedgerError('Evidence is required');
  const prev = day.resolution;
  const resolution: Resolution = {
    outcome, source: 'admin', evidence: evidence.trim(), reason: reason.trim(), at: now.toISOString(), actor,
  };
  let next = replaceDay(state, {
    ...day,
    resolution,
    resolutionHistory: [...day.resolutionHistory, resolution],
    appeals: day.appeals.map((a) =>
      a.status === 'open' ? { ...a, status: prev.outcome === outcome ? 'upheld' : 'overturned' } : a,
    ),
  });
  next = audit(next, {
    at: now.toISOString(), actor, action: 'resolve.correct', dayCallId: dayId,
    detail: `${prev.outcome.toUpperCase()} → ${outcome.toUpperCase()}: ${resolution.reason} (evidence: ${resolution.evidence})`,
  });
  return next;
}

export function fileAppeal(state: LedgerState, dayId: string, memberId: string, note: string, now: Date): LedgerState {
  const day = findDay(state, dayId);
  if (!day.resolution) throw new LedgerError('Only resolved calls can be appealed');
  if (day.appeals.some((a) => a.memberId === memberId && a.status === 'open')) {
    throw new LedgerError('You already have an open appeal on this call');
  }
  if (note.trim().length < 5) throw new LedgerError('Say what looks wrong');
  const next = replaceDay(state, {
    ...day, appeals: [...day.appeals, { memberId, note: note.trim(), at: now.toISOString(), status: 'open' }],
  });
  return audit(next, { at: now.toISOString(), actor: memberId, action: 'appeal.open', dayCallId: dayId, detail: note.trim() });
}

export function closeAppeals(state: LedgerState, dayId: string, actor: string, now: Date): LedgerState {
  const day = findDay(state, dayId);
  const next = replaceDay(state, {
    ...day, appeals: day.appeals.map((a) => (a.status === 'open' ? { ...a, status: 'upheld' } : a)),
  });
  return audit(next, {
    at: now.toISOString(), actor, action: 'appeal.close', dayCallId: dayId,
    detail: `Resolution upheld (${day.resolution?.outcome.toUpperCase()})`,
  });
}

/** Clear a feed failure so autoResolve retries (e.g. after the feed recovers). */
export function retryFeed(state: LedgerState, dayId: string): LedgerState {
  const day = findDay(state, dayId);
  return replaceDay(state, { ...day, feedFailure: undefined });
}
