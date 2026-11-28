// The five metrics that decide everything (spec §9).
import type { LedgerState } from './types';

export interface MetricRow {
  key: string;
  label: string;
  value: string;
  detail: string;
  pass?: boolean;
}

const pct = (n: number) => `${Math.round(n * 100)}%`;

export function computeMetrics(state: LedgerState): MetricRow[] {
  const humans = new Set(state.members.filter((m) => !m.bot).map((m) => m.id));
  const played = [...state.days].filter((d) => d.entries.length > 0).sort((a, b) => a.date.localeCompare(b.date));

  // Day-30 lock retention: of first-day lockers, share who locked on the 30th question day.
  let retention: MetricRow;
  if (played.length >= 30) {
    const cohort = played[0].entries.map((e) => e.memberId);
    const day30 = new Set(played[29].entries.map((e) => e.memberId));
    const r = cohort.filter((id) => day30.has(id)).length / cohort.length;
    retention = {
      key: 'retention', label: 'Day-30 lock retention', value: pct(r), pass: r > 0.4,
      detail: `${cohort.length} first-day lockers (${played[0].date}); pass > 40%. Below this, stop.`,
    };
  } else {
    retention = {
      key: 'retention', label: 'Day-30 lock retention', value: '—',
      detail: `${played.length}/30 question days so far`,
    };
  }

  const opens = new Set(state.metrics.filter((m) => m.kind === 'open').map((m) => `${m.memberId}|${m.dayCallId}`));
  const lockedAfterOpen = new Set(
    state.metrics.filter((m) => m.kind === 'lock' && opens.has(`${m.memberId}|${m.dayCallId}`)).map((m) => `${m.memberId}|${m.dayCallId}`),
  );
  const conversion = opens.size ? lockedAfterOpen.size / opens.size : null;

  const verdicts = state.days.filter((d) => d.resolution).flatMap((d) => d.entries.filter((e) => humans.has(e.memberId)));
  const shares = new Set(state.metrics.filter((m) => m.kind === 'share').map((m) => `${m.memberId}|${m.dayCallId}`)).size;

  const invites = state.metrics.filter((m) => m.kind === 'invite').length;
  const nudges = state.metrics.filter((m) => m.kind === 'nudge').length;
  const responses = state.metrics.filter((m) => m.kind === 'nudge_response').length;

  return [
    retention,
    {
      key: 'conversion', label: 'Lock conversion',
      value: conversion === null ? '—' : pct(conversion), pass: conversion === null ? undefined : conversion > 0.9,
      detail: `${lockedAfterOpen.size}/${opens.size} window opens ended in a lock. Should approach 100%.`,
    },
    {
      key: 'share', label: 'Receipt share rate',
      value: verdicts.length ? pct(shares / verdicts.length) : '—',
      detail: `${shares} receipts shared / ${verdicts.length} verdicts delivered`,
    },
    {
      key: 'invites', label: 'Invites per user',
      value: humans.size ? (invites / humans.size).toFixed(2) : '—', pass: humans.size ? invites / humans.size > 1 : undefined,
      detail: `${invites} invite links shared by ${humans.size} user(s); > 1.0 = self-spreading`,
    },
    {
      key: 'nudge', label: 'Nudge response rate',
      value: nudges ? pct(responses / nudges) : '—',
      detail: `${responses}/${nudges} nudged members locked after the nudge`,
    },
  ];
}
