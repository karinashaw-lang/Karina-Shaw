import { ladder } from '../domain/stats';
import { useStore } from '../store';
import { Button, Card, Pts } from '../ui/kit';

/** Invite landing: viewing a crew requires no account. */
export function Join({ code, go }: { code: string; go: (r: string) => void }) {
  const { ledger, now } = useStore();
  const group = ledger.groups.find((g) => g.inviteCode.toUpperCase() === code.toUpperCase());
  if (!group) {
    return <Card className="mt-6"><p>That invite code doesn't match a crew.</p></Card>;
  }
  const comm = ledger.members.find((m) => m.id === group.commissionerId)!;
  const rows = ladder(ledger, group.id, now).slice(0, 5);
  return (
    <div className="space-y-3 pt-6">
      <div className="meta">You're invited by {comm.name}</div>
      <div className="text-3xl leading-tight font-bold">{group.name}</div>
      <p className="text-mute">One market question a day at 3:45 PM ET. Lock your call before the bell. Every result goes on the permanent record.</p>
      <Card className="p-0">
        <div className="meta px-4 pt-4 pb-2">Top of the ladder</div>
        <ol className="divide-y divide-line border-t border-line">
          {rows.map((r, i) => (
            <li key={r.memberId} className="flex items-center gap-3 px-4 py-2.5">
              <span className="num w-5 text-sm text-mute">{i + 1}</span>
              <span className="flex-1">{r.name}</span>
              <span className="num text-xs text-mute">{r.w}–{r.l}</span>
              <Pts n={r.pts} className="w-14 text-right text-sm font-bold" />
            </li>
          ))}
        </ol>
      </Card>
      <Button className="w-full" onClick={() => go('/')}>See today's question</Button>
      <p className="meta text-center normal-case">No account needed to watch. You'll claim a seat when you lock.</p>
    </div>
  );
}
