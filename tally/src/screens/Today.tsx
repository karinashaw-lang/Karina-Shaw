import { useEffect, useState } from 'react';
import { MAX_READING } from '../domain/ledger';
import { describeSpec } from '../domain/resolution';
import { statsFor } from '../domain/stats';
import { etDate, fmtCountdown, nextMarketDay, windowFor } from '../domain/time';
import type { Side } from '../domain/types';
import { dayView, type CrewRow, type DayView } from '../domain/view';
import { currentDay, useStore } from '../store';
import { DemoLever } from '../ui/DemoLever';
import { Br, Button, Card, fmtDate, SideTag } from '../ui/kit';

export function Today() {
  const { ledger, now, groupId, actions } = useStore();
  const day = currentDay(ledger, now);
  const group = ledger.groups.find((g) => g.id === groupId)!;

  const v = day ? dayView(ledger, day, ledger.youId, groupId, now) : undefined;
  const phase = v?.phase;
  useEffect(() => {
    if (day && phase === 'open') actions.trackOpen(day.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day?.id, phase]);

  const dayNo = day ? [...ledger.days].sort((a, b) => a.date.localeCompare(b.date)).findIndex((d) => d.id === day.id) + 1 : 0;

  return (
    <div className="space-y-3">
      <header className="flex items-end justify-between pt-2 pb-1">
        <div>
          <div className="text-[28px] leading-none font-bold tracking-tight">TALLY<span className="text-acid">.</span></div>
          <div className="meta mt-1">{group.name}</div>
        </div>
        <div className="text-right">
          <div className="num text-lg font-bold text-teal">DAY {String(dayNo).padStart(3, '0')}</div>
          <div className="meta">{day ? fmtDate(day.date) : ''}</div>
        </div>
      </header>

      {!v ? (
        <Card><p className="text-mute">No question scheduled. The admin console sets it.</p></Card>
      ) : (
        <>
          <Countdown v={v} />
          <QuestionCard v={v} />
          {v.phase === 'open' && !v.you && <LockPanel dayId={v.day.id} />}
          {v.phase === 'upcoming' && <UpcomingLock opensAt={v.day.opensAt} />}
          {v.you && <LockedBanner v={v} />}
          {!v.you && (v.phase === 'closed' || v.phase === 'resolved') && <SatOut />}
          {v.phase === 'resolved' && <Resolved v={v} />}
          {v.phase === 'closed' && <Voting />}
          {v.phase !== 'upcoming' && <Crew v={v} />}
        </>
      )}
      <p className="meta pt-2 text-center normal-case">Tally scores picks. It never gives advice.</p>
      <DemoLever />
    </div>
  );
}

function Countdown({ v }: { v: DayView }) {
  const { now } = useStore();
  const t = now.getTime();
  let label: string, target: number, tone = 'text-fg', urgent = false;
  if (v.phase === 'upcoming') {
    label = 'Window opens in';
    target = Date.parse(v.day.opensAt);
  } else if (v.phase === 'open') {
    label = v.you ? 'Window closes in' : 'Lock before the bell';
    target = Date.parse(v.day.resolvesAt);
    tone = 'text-acid';
    urgent = target - t < 60_000;
  } else if (v.phase === 'closed') {
    label = 'Window closed · reality is voting';
    target = t;
  } else {
    label = 'Next call in';
    target = Date.parse(windowFor(nextMarketDay(etDate(now))).opensAt);
    tone = 'text-teal';
  }
  return (
    <Card className="flex items-center justify-between py-3">
      <div>
        <div className="meta">{label}</div>
        <div className="meta mt-0.5 normal-case">3:45–4:00 PM ET · 15-minute window</div>
      </div>
      <div className={`num text-3xl font-bold ${tone} ${urgent ? 'urgent' : ''}`}>
        {v.phase === 'closed' ? '··:··' : fmtCountdown(target - t)}
      </div>
    </Card>
  );
}

function QuestionCard({ v }: { v: DayView }) {
  const s = v.day.sourceSpec;
  return (
    <Card className="border-teal/30 bg-gradient-to-b from-[#0f1f1d] to-panel">
      <div className="flex flex-wrap gap-2">
        <Br className="text-teal">{s.ticker}</Br>
        <Br>{s.condition === 'outperform' ? `VS ${s.benchmark}` : s.condition.toUpperCase()}</Br>
        <Br>RESOLVES 4:00 PM ET</Br>
      </div>
      <h1 className="mt-3 text-[26px] leading-tight font-bold">{v.day.question}</h1>
      <p className="meta mt-3 normal-case">Rule: {describeSpec(s)}</p>
    </Card>
  );
}

function UpcomingLock({ opensAt }: { opensAt: string }) {
  return (
    <Card className="text-center">
      <div className="meta">Lock opens at 3:45 PM ET</div>
      <p className="mt-2 text-sm text-mute">
        One question. Fifteen minutes. The crew's calls stay hidden until you make yours.
      </p>
      <div className="meta mt-2">{new Date(opensAt).toLocaleString('en-US', { timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: '2-digit' })} ET</div>
    </Card>
  );
}

function LockPanel({ dayId }: { dayId: string }) {
  const { actions, joined } = useStore();
  const [side, setSide] = useState<Side | null>(null);
  const [conf, setConf] = useState(70);
  const [reading, setReading] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [needsJoin, setNeedsJoin] = useState(false);
  const len = [...reading].length;

  const lock = () => {
    if (!side) return;
    if (!joined) return setNeedsJoin(true);
    if (!confirming) return setConfirming(true);
    actions.lock(dayId, side, conf, reading || undefined);
  };

  return (
    <Card>
      <div className="grid grid-cols-2 gap-2">
        {(['yes', 'no'] as const).map((s) => (
          <button
            key={s}
            onClick={() => { setSide(s); setConfirming(false); }}
            className={`btn rounded-lg py-5 text-2xl font-bold tracking-widest ${
              side === s ? (s === 'yes' ? 'bg-teal text-ink' : 'bg-loss text-ink') : 'border border-line bg-panel2 text-fg'
            }`}
          >
            {s.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <span className="meta">Confidence</span>
          <span className="num text-2xl font-bold text-acid">{conf}%</span>
        </div>
        <input
          className="conf mt-2" type="range" min={50} max={99} value={conf}
          onChange={(e) => { setConf(Number(e.target.value)); setConfirming(false); }}
          aria-label="Confidence"
        />
        <div className="meta mt-1 flex justify-between normal-case">
          <span>50 coin flip</span>
          <span>win +{conf} / lose −{conf}</span>
          <span>99 lock it</span>
        </div>
      </div>
      <div className="mt-4">
        <label className="meta" htmlFor="reading">Your reading (optional)</label>
        <textarea
          id="reading" rows={2} maxLength={MAX_READING} value={reading}
          onChange={(e) => setReading(e.target.value)}
          placeholder="The thesis, in 140 characters. Hidden until the window closes."
          className="mt-1 w-full resize-none rounded-lg border border-line bg-ink p-3 text-sm outline-none focus:border-teal/60"
        />
        <div className={`num text-right text-xs ${len > 130 ? 'text-acid' : 'text-mute'}`}>{len}/{MAX_READING}</div>
      </div>
      <Button className="mt-2 w-full py-4 text-lg" disabled={!side} onClick={lock}>
        {!side ? 'Pick a side' : confirming ? `Confirm ${side.toUpperCase()} · ${conf}% — permanent` : `Lock ${side.toUpperCase()} [${conf}%]`}
      </Button>
      <p className="meta mt-2 text-center normal-case">
        {confirming ? 'Calls can never be edited or deleted. Tap again to lock.' : 'No lock, no peeking.'}
      </p>
      {needsJoin && <JoinSheet onDone={() => { setNeedsJoin(false); setConfirming(true); }} onCancel={() => setNeedsJoin(false)} />}
    </Card>
  );
}

function JoinSheet({ onDone, onCancel }: { onDone: () => void; onCancel: () => void }) {
  const { actions } = useStore();
  const [name, setName] = useState('');
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 backdrop-blur-sm" onClick={onCancel}>
      <div className="rise w-full max-w-md rounded-t-2xl border-t border-line bg-panel p-5 pb-8" onClick={(e) => e.stopPropagation()}>
        <div className="text-xl font-bold">Claim your seat</div>
        <p className="mt-1 text-sm text-mute">Watching is free. To lock a call, put your name on it — it goes on the permanent record.</p>
        <input
          autoFocus value={name} onChange={(e) => setName(e.target.value.slice(0, 24))}
          placeholder="Your name"
          className="mt-4 w-full rounded-lg border border-line bg-ink p-3 outline-none focus:border-teal/60"
        />
        <p className="meta mt-2 normal-case">Phone verification ships with the backend (W1). This demo keeps your record on this device.</p>
        <Button className="mt-4 w-full" disabled={name.trim().length < 2} onClick={() => { actions.join(name.trim()); onDone(); }}>
          Join the crew
        </Button>
      </div>
    </div>
  );
}

function LockedBanner({ v }: { v: DayView }) {
  const you = v.you!;
  return (
    <Card className="border-acid/40">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold tracking-wider text-acid">LOCKED</div>
        <span className="meta">{new Date(you.lockedAt).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', second: '2-digit' })} ET</span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <SideTag side={you.side} />
        <Br>CONF {you.conf}%</Br>
        <Br>±{you.conf} PTS</Br>
      </div>
      {you.reading && <p className="mt-2 border-l-2 border-line pl-3 text-sm text-fg/80">“{you.reading}”</p>}
    </Card>
  );
}

function SatOut() {
  return (
    <Card className="border-loss/30 text-center">
      <div className="text-lg font-bold text-loss">You sat this one out</div>
      <p className="mt-1 text-sm text-mute">Miss the window, miss the day. Streak resets. Same time tomorrow.</p>
    </Card>
  );
}

function Voting() {
  return (
    <Card className="text-center">
      <div className="meta">Reality votes at the close</div>
      <p className="mt-1 text-sm text-mute">Resolving against the 4:00 PM print. Everyone resolves together.</p>
    </Card>
  );
}

function Resolved({ v }: { v: DayView }) {
  const { actions, ledger, now } = useStore();
  const [appealing, setAppealing] = useState(false);
  const [note, setNote] = useState('');
  const r = v.day.resolution!;
  const st = statsFor(ledger, ledger.youId, now);
  const won = v.you && v.you.side === r.outcome;
  const appealed = v.day.appeals.some((a) => a.memberId === ledger.youId);
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <div className="meta">Reality said</div>
          <div className={`num text-3xl font-bold ${r.outcome === 'yes' ? 'text-teal' : 'text-loss'}`}>{r.outcome.toUpperCase()}</div>
        </div>
        {v.you && (
          <div className="text-right">
            <div className={`text-lg font-bold ${won ? 'text-acid' : 'text-loss'}`}>{won ? 'CALLED IT' : 'YOU ATE IT'}</div>
            <div className={`num text-2xl font-bold ${won ? 'text-acid' : 'text-loss'}`}>{won ? '+' : '−'}{v.you.conf}</div>
          </div>
        )}
      </div>
      <p className="num mt-3 text-xs text-mute">{r.evidence}</p>
      <div className="meta mt-1">
        source {r.source === 'auto' ? r.feed : `admin`} · {new Date(r.at).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' })} ET
        {v.day.resolutionHistory.length > 1 && <span className="text-acid"> · corrected</span>}
      </div>
      {v.you && <div className="meta mt-2">Streak {st.streak}d · best {st.best}d</div>}
      {!appealed && !appealing && (
        <button className="meta mt-3 underline decoration-dotted" onClick={() => setAppealing(true)}>Flag for appeal</button>
      )}
      {appealed && <div className="meta mt-3 text-teal">Appeal filed · human review</div>}
      {appealing && (
        <div className="mt-3 flex gap-2">
          <input
            value={note} onChange={(e) => setNote(e.target.value)} placeholder="What looks wrong?"
            className="min-w-0 flex-1 rounded-lg border border-line bg-ink px-3 text-sm outline-none"
          />
          <Button tone="ghost" className="px-3 py-2 text-xs" onClick={() => actions.appeal(v.day.id, note) && setAppealing(false)}>Send</Button>
        </div>
      )}
    </Card>
  );
}

function Crew({ v }: { v: DayView }) {
  const total = v.crew.length + 1;
  return (
    <Card className="p-0">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="meta">The crew</div>
        <div className="meta">{v.lockedCount}/{total} locked</div>
      </div>
      {v.split ? (
        <SplitBar yes={v.split.yes} no={v.split.no} />
      ) : (
        <div className="mx-4 mt-3 rounded-md border border-dashed border-line py-3 text-center">
          <div className="meta text-acid">Lock to reveal</div>
          <div className="meta mt-0.5 normal-case">{v.lockedCount} call{v.lockedCount === 1 ? '' : 's'} hidden. Curiosity is the toll.</div>
        </div>
      )}
      {v.picksRevealed && !v.readingsRevealed && (
        <div className="meta px-4 pt-2 normal-case">Readings unlock when the window closes.</div>
      )}
      <ul className="mt-3 divide-y divide-line border-t border-line">
        {v.crew.map((c) => <CrewItem key={c.member.id} c={c} v={v} />)}
      </ul>
    </Card>
  );
}

function SplitBar({ yes, no }: { yes: number; no: number }) {
  const total = Math.max(1, yes + no);
  return (
    <div className="px-4 pt-3">
      <div className="flex h-3 overflow-hidden rounded-full bg-line">
        <div className="bg-teal transition-all" style={{ width: `${(yes / total) * 100}%` }} />
        <div className="bg-loss transition-all" style={{ width: `${(no / total) * 100}%` }} />
      </div>
      <div className="num mt-1 flex justify-between text-xs">
        <span className="text-teal">YES {yes}</span>
        <span className="text-loss">NO {no}</span>
      </div>
    </div>
  );
}

function CrewItem({ c, v }: { c: CrewRow; v: DayView }) {
  const { actions } = useStore();
  const initials = c.member.name.split(/\s+/).map((x) => x[0]).join('').slice(0, 2).toUpperCase();
  const won = v.day.resolution && c.side ? c.side === v.day.resolution.outcome : undefined;
  return (
    <li className="flex items-start gap-3 px-4 py-3">
      <div className="num flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-panel2 text-xs font-bold text-mute">{initials}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="truncate font-medium">{c.member.name} <span className="meta normal-case">@{c.member.handle}</span></div>
          {c.status === 'pending' ? (
            v.phase === 'open' ? (
              <button
                disabled={c.nudged}
                onClick={() => actions.nudge(v.day.id, c.member.id, c.member.name)}
                className="btn rounded-md bg-panel2 px-2.5 py-1 text-[11px] font-bold tracking-wider text-acid uppercase disabled:text-mute"
              >
                {c.nudged ? 'Nudged' : 'Nudge'}
              </button>
            ) : (
              <span className="meta">Sat out</span>
            )
          ) : c.side ? (
            <span className="flex items-center gap-2">
              <SideTag side={c.side} conf={c.conf} />
              {won !== undefined && <span className={`num text-xs ${won ? 'text-acid' : 'text-loss'}`}>{won ? '+' : '−'}{c.conf}</span>}
            </span>
          ) : (
            <span className="num blurred text-sm">YES 77%</span>
          )}
        </div>
        {c.status === 'pending' && v.phase === 'open' && <div className="meta normal-case">Not in yet</div>}
        {c.reading && <p className="mt-1 text-sm text-fg/75">“{c.reading}”</p>}
        {c.status === 'locked' && !c.side && <p className="blurred mt-1 text-sm text-fg/60">hidden reading until you lock</p>}
      </div>
    </li>
  );
}
