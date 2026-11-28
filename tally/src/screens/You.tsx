import { ladder, statsFor, type GridCell } from '../domain/stats';
import { useStore } from '../store';
import { Card, fmtDate, Pts } from '../ui/kit';

const cellColor: Record<GridCell['status'], string> = {
  won: 'bg-acid',
  lost: 'bg-loss',
  pending: 'bg-teal/60',
  out: 'bg-panel2 border border-loss/40',
  off: 'bg-panel2/40',
  future: 'bg-transparent',
};

export function You() {
  const { ledger, now, groupId, actions } = useStore();
  const me = ledger.members.find((m) => m.id === ledger.youId)!;
  const s = statsFor(ledger, me.id, now);
  const rows = ladder(ledger, groupId, now);
  const group = ledger.groups.find((g) => g.id === groupId)!;
  const invite = `${location.origin}${location.pathname}#/join/${group.inviteCode}`;
  const rank = rows.findIndex((r) => r.memberId === me.id) + 1;

  const copyInvite = async () => {
    try { await navigator.clipboard.writeText(invite); } catch { /* ignore */ }
    actions.trackInvite();
  };

  return (
    <div className="space-y-3">
      <header className="flex items-end justify-between pt-2">
        <div>
          <div className="text-[28px] leading-none font-bold">{me.name}</div>
          <div className="meta mt-1 normal-case">@{me.handle} · public record</div>
        </div>
        <div className="num text-right text-sm text-mute">#{rank} of {rows.length}</div>
      </header>

      <Card className="text-center">
        <div className="meta">Career points</div>
        <Pts n={s.pts} className="block text-6xl font-bold" />
        <div className="mt-4 grid grid-cols-3 divide-x divide-line">
          <Stat label="Record" value={`${s.w}–${s.l}`} />
          <Stat label="Hit rate" value={s.hitRate === null ? '—' : `${Math.round(s.hitRate * 100)}%`} />
          <Stat label="Streak / best" value={`${s.streak}/${s.best}`} accent={s.streakAtRisk ? 'text-acid urgent' : 'text-teal'} />
        </div>
        {s.streakAtRisk && <div className="meta mt-3 text-acid">Streak on the line — window is open</div>}
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="meta">Last 35 days</div>
          <div className="meta flex gap-3">
            <span><i className="mr-1 inline-block h-2 w-2 rounded-sm bg-acid" />won</span>
            <span><i className="mr-1 inline-block h-2 w-2 rounded-sm bg-loss" />lost</span>
            <span><i className="mr-1 inline-block h-2 w-2 rounded-sm border border-loss/40" />sat out</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {s.grid.map((c) => (
            <div key={c.date} title={`${fmtDate(c.date)} · ${c.status}`} className={`aspect-square rounded-[4px] ${cellColor[c.status]}`} />
          ))}
        </div>
      </Card>

      <Card className="p-0">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div className="meta">{group.name} · ladder</div>
          <button onClick={copyInvite} className="meta text-teal">Copy invite link</button>
        </div>
        <ol className="divide-y divide-line border-t border-line">
          {rows.map((r, i) => (
            <li key={r.memberId} className={`flex items-center gap-3 px-4 py-2.5 ${r.memberId === me.id ? 'bg-acid/5' : ''}`}>
              <span className="num w-6 text-sm text-mute">{i + 1}</span>
              <span className="min-w-0 flex-1 truncate">
                {r.name}
                {group.commissionerId === r.memberId && <span className="meta ml-2">[COMM]</span>}
              </span>
              <span className="num w-14 text-right text-xs text-mute">{r.w}–{r.l}</span>
              <span className="num w-10 text-right text-xs text-teal">{r.streak}d</span>
              <Pts n={r.pts} className="w-14 text-right text-sm font-bold" />
            </li>
          ))}
        </ol>
      </Card>
      <p className="meta pt-2 text-center normal-case">The record is the only status. Tally scores picks — it never gives advice.</p>
    </div>
  );
}

function Stat({ label, value, accent = 'text-fg' }: { label: string; value: string; accent?: string }) {
  return (
    <div className="px-2">
      <div className={`num text-xl font-bold ${accent}`}>{value}</div>
      <div className="meta mt-0.5">{label}</div>
    </div>
  );
}
