import { receiptsFor } from '../domain/stats';
import { addDays, etDate } from '../domain/time';
import { useStore } from '../store';
import { Br, Card, fmtDate, Pts, SideTag } from '../ui/kit';
import { useShare } from '../ui/useShare';

export function Receipts() {
  const { ledger, now } = useStore();
  const share = useShare();
  const all = receiptsFor(ledger, ledger.youId);
  const since = addDays(etDate(now), -30);
  const period = all.filter((r) => r.date > since);
  const w = period.filter((r) => r.verdict === 'called').length;
  const net = period.reduce((a, r) => a + r.delta, 0);
  return (
    <div className="space-y-3">
      <header className="pt-2">
        <div className="text-[28px] leading-none font-bold">Receipts</div>
        <div className="meta mt-1">Permanent. Never edited. Never deleted.</div>
      </header>
      <Card className="flex items-center justify-between">
        <div>
          <div className="meta">Last 30 days</div>
          <div className="num text-2xl font-bold">{w}–{period.length - w}</div>
        </div>
        <div className="text-right">
          <div className="meta">Net</div>
          <Pts n={net} className="text-2xl font-bold" />
        </div>
      </Card>
      {all.length === 0 && <Card><p className="text-mute">No verdicts yet. Lock today's call.</p></Card>}
      {all.map((r) => {
        const won = r.verdict === 'called';
        return (
          <Card key={r.dayCallId} className={`relative overflow-hidden ${won ? 'border-acid/25' : 'border-loss/25'}`}>
            <div className={`absolute inset-y-0 left-0 w-1 ${won ? 'bg-acid' : 'bg-loss'}`} />
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="meta">{fmtDate(r.date)}</div>
                <div className="mt-1 leading-snug font-medium">{r.question}</div>
              </div>
              <Pts n={r.delta} className="text-xl font-bold" />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <SideTag side={r.side} />
              <Br>CONF {r.conf}%</Br>
              <Br>REALITY {r.outcome.toUpperCase()}</Br>
              <span className={`text-xs font-bold ${won ? 'text-acid' : 'text-loss'}`}>{won ? 'CALLED IT' : 'ATE IT'}</span>
            </div>
            {r.reading && <p className="mt-2 border-l-2 border-line pl-3 text-sm text-fg/75">“{r.reading}”</p>}
            <button onClick={() => share(r)} className="meta mt-3 text-teal">Share receipt →</button>
          </Card>
        );
      })}
    </div>
  );
}
