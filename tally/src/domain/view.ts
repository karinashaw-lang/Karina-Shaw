// The reveal (reciprocity lock, spec §3.4). The UI only ever renders this
// projection, never raw entries — in production this runs server-side so the
// picks of a not-yet-locked viewer never leave the server.
import { phaseOf, type Phase } from './ledger';
import type { DayCall, Entry, LedgerState, Member, MetricEvent } from './types';

export interface CrewRow {
  member: Member;
  status: 'locked' | 'pending';
  /** Present only when the viewer is allowed to see it. */
  side?: Entry['side'];
  conf?: number;
  reading?: string;
  lockedAt?: string;
  nudged: boolean;
}

export interface DayView {
  day: DayCall;
  phase: Phase;
  you?: Entry;
  /** Picks visible: you locked, or the window is closed. */
  picksRevealed: boolean;
  /** Readings visible: window closed (no copying anyone's reasoning). */
  readingsRevealed: boolean;
  split?: { yes: number; no: number };
  crew: CrewRow[];
  lockedCount: number;
}

export function dayView(
  state: LedgerState, day: DayCall, viewerId: string, groupId: string, now: Date,
): DayView {
  const phase = phaseOf(day, now);
  const you = day.entries.find((e) => e.memberId === viewerId);
  const closed = phase === 'closed' || phase === 'resolved';
  const picksRevealed = !!you || closed;
  const readingsRevealed = closed;
  const group = state.groups.find((g) => g.id === groupId);
  const ids = group ? group.memberIds : state.members.map((m) => m.id);
  const nudges = new Set(
    state.metrics
      .filter((m: MetricEvent) => m.kind === 'nudge' && m.dayCallId === day.id && m.memberId === viewerId)
      .map((m) => m.targetId),
  );
  const crewEntries = day.entries.filter((e) => ids.includes(e.memberId));
  const crew = ids
    .filter((id) => id !== viewerId)
    .map((id): CrewRow => {
      const member = state.members.find((m) => m.id === id)!;
      const e = day.entries.find((x) => x.memberId === id);
      if (!e) return { member, status: 'pending' as const, nudged: nudges.has(id) };
      return {
        member,
        status: 'locked' as const,
        nudged: nudges.has(id),
        lockedAt: e.lockedAt,
        ...(picksRevealed ? { side: e.side, conf: e.conf } : {}),
        ...(readingsRevealed ? { reading: e.reading } : {}),
      };
    })
    .sort((a, b) => {
      if (a.status !== b.status) return a.status === 'locked' ? -1 : 1;
      return (a.lockedAt ?? '').localeCompare(b.lockedAt ?? '') || a.member.name.localeCompare(b.member.name);
    });
  return {
    day,
    phase,
    you,
    picksRevealed,
    readingsRevealed,
    split: picksRevealed
      ? {
          yes: crewEntries.filter((e) => e.side === 'yes').length,
          no: crewEntries.filter((e) => e.side === 'no').length,
        }
      : undefined,
    crew,
    lockedCount: crewEntries.length,
  };
}
