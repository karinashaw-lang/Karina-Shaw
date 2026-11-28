// Tally domain model (spec §5). Stats (pts, W–L, streaks) are NOT stored —
// they are a pure fold over the ledger, so an admin correction re-scores
// everyone automatically and nothing can drift from the record.

export type Side = 'yes' | 'no';

export interface Member {
  id: string;
  name: string;
  handle: string;
  /** Simulated crew member (demo only). */
  bot?: boolean;
}

export interface Group {
  id: string;
  name: string;
  memberIds: string[];
  inviteCode: string;
  commissionerId: string;
}

export type Condition =
  /** Ticker closes above its open (e.g. "SPY green today?"). */
  | 'close>open'
  /** Ticker's 4:00 PM ET price is above the previous 4:00 PM price. */
  | 'close>prevClose'
  /** Ticker's daily return beats the benchmark's daily return. */
  | 'outperform';

/** Machine-checkable resolution rule, written when the question is set. */
export interface SourceSpec {
  ticker: string;
  condition: Condition;
  benchmark?: string;
  date: string; // YYYY-MM-DD (ET trading date)
}

export interface Entry {
  memberId: string;
  side: Side;
  conf: number; // 50–99
  reading?: string; // ≤140 chars
  lockedAt: string; // ISO
}

export interface Resolution {
  outcome: Side;
  source: 'auto' | 'admin';
  feed?: string;
  evidence: string;
  at: string; // ISO
  actor: string;
  reason?: string; // required for corrections
}

export interface Appeal {
  memberId: string;
  note: string;
  at: string;
  status: 'open' | 'upheld' | 'overturned';
}

export interface DayCall {
  id: string;
  date: string; // YYYY-MM-DD ET
  question: string;
  opensAt: string; // ISO — 3:45 PM ET
  resolvesAt: string; // ISO — 4:00 PM ET
  sourceSpec: SourceSpec;
  entries: Entry[];
  resolution?: Resolution;
  /** Every prior resolution, oldest first. Nothing is ever overwritten silently. */
  resolutionHistory: Resolution[];
  appeals: Appeal[];
  /** Set when auto-resolution could not get data; admin must resolve. */
  feedFailure?: string;
}

export interface AuditEvent {
  id: string;
  at: string;
  actor: string;
  action:
    | 'question.set'
    | 'question.replaced'
    | 'resolve.auto'
    | 'resolve.manual'
    | 'resolve.correct'
    | 'resolve.feed_failure'
    | 'appeal.open'
    | 'appeal.close';
  dayCallId: string;
  detail: string;
}

export type MetricKind = 'open' | 'lock' | 'share' | 'invite' | 'nudge' | 'nudge_response';

export interface MetricEvent {
  kind: MetricKind;
  memberId: string;
  dayCallId?: string;
  targetId?: string;
  at: string;
}

export interface LedgerState {
  version: 1;
  youId: string;
  members: Member[];
  groups: Group[];
  days: DayCall[];
  audit: AuditEvent[];
  metrics: MetricEvent[];
}

export interface Receipt {
  dayCallId: string;
  date: string;
  question: string;
  memberId: string;
  side: Side;
  conf: number;
  reading?: string;
  outcome: Side;
  verdict: 'called' | 'ate';
  delta: number;
  at: string;
}
