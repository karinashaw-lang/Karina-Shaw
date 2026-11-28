import { receiptsFor, statsFor } from '../domain/stats';
import { nextMarketDay, etDate } from '../domain/time';
import { useStore } from '../store';
import { Br, Button, fmtDate } from './kit';
import { useShare } from './useShare';

/** The Verdict Moment: full-screen, the first time you see a resolved call. */
export function VerdictOverlay() {
  const { ledger, now, seen, actions } = useStore();
  const share = useShare();
  const pending = receiptsFor(ledger, ledger.youId).filter((r) => !seen.includes(r.dayCallId));
  // Only surface the newest unseen verdict; older ones are already in Receipts.
  const r = pending[0];
  if (!r) return null;
  const won = r.verdict === 'called';
  const s = statsFor(ledger, ledger.youId, now);
  const next = nextMarketDay(etDate(now));
  const dismiss = () => pending.forEach((p) => actions.markSeen(p.dayCallId));
  const accent = won ? 'var(--color-acid)' : 'var(--color-loss)';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm">
      <div
        className="pop w-full max-w-md rounded-2xl p-[3px]"
        style={{ background: `linear-gradient(140deg, ${accent}, var(--color-teal) 70%)` }}
      >
        <div className="rounded-[14px] bg-ink px-6 pt-6 pb-5 text-center">
          <div className="meta">{fmtDate(r.date)} · Reality votes</div>
          <p className="mt-3 text-lg leading-snug text-fg/90">{r.question}</p>
          <div className="mt-5 meta">Reality says</div>
          <div className={`num text-5xl font-bold ${r.outcome === 'yes' ? 'text-teal' : 'text-loss'}`}>{r.outcome.toUpperCase()}</div>
          <div className="mt-5 text-[44px] leading-none font-bold tracking-tight" style={{ color: accent }}>
            {won ? 'CALLED IT' : 'YOU ATE IT'}
          </div>
          <div className="num mt-3 text-4xl font-bold" style={{ color: accent }}>
            {r.delta > 0 ? '+' : '−'}{Math.abs(r.delta)} <span className="text-xl">PTS</span>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <Br>YOU {r.side.toUpperCase()}</Br>
            <Br>CONF {r.conf}%</Br>
            <Br>REC {s.w}–{s.l}</Br>
          </div>
          <div className="mt-5 rounded-lg border border-line bg-panel py-3">
            <div className="num text-2xl font-bold text-teal">{s.streak}-DAY STREAK</div>
            <div className="meta mt-1">Streak lives — you showed up</div>
          </div>
          <div className="mt-5 grid gap-2">
            <Button onClick={() => share(r)}>Share receipt</Button>
            <Button tone="ghost" onClick={dismiss}>See you tomorrow</Button>
          </div>
          <div className="meta mt-3">Next call {fmtDate(next)} · 3:45 PM ET</div>
        </div>
      </div>
    </div>
  );
}
