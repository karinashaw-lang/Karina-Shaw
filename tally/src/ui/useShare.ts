import { statsFor } from '../domain/stats';
import type { Receipt } from '../domain/types';
import { useStore } from '../store';
import { shareReceipt } from './share';

export function useShare() {
  const { ledger, now, actions, toast } = useStore();
  return async (r: Receipt) => {
    const s = statsFor(ledger, r.memberId, now);
    const m = ledger.members.find((x) => x.id === r.memberId)!;
    const res = await shareReceipt(r, { w: s.w, l: s.l, pts: s.pts, streak: s.streak, name: m.name, handle: m.handle });
    if (res === 'cancelled') return;
    actions.trackShare(r.dayCallId);
    toast(res === 'shared' ? 'Receipt shared' : 'Receipt saved · caption copied', 'ok');
  };
}
