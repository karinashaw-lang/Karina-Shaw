import { useState } from 'react';
import { QUESTION_BANK } from '../domain/bank';
import { phaseOf } from '../domain/ledger';
import { computeMetrics } from '../domain/metrics';
import { describeSpec } from '../domain/resolution';
import { etDate, nextMarketDay } from '../domain/time';
import type { Condition, DayCall, Side } from '../domain/types';
import { useStore } from '../store';
import { Br, Button, Card, fmtDate } from '../ui/kit';

const input = 'w-full rounded-lg border border-line bg-ink px-3 py-2 text-sm outline-none focus:border-teal/60';

export function Admin() {
  const { ledger, now } = useStore();
  const queue = ledger.days.filter((d) => phaseOf(d, now) === 'closed');
  const upcoming = ledger.days.filter((d) => phaseOf(d, now) === 'upcoming');
  const live = ledger.days.filter((d) => phaseOf(d, now) === 'open');
  const resolved = ledger.days.filter((d) => d.resolution).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
  const openAppeals = ledger.days.filter((d) => d.appeals.some((a) => a.status === 'open'));

  return (
    <div className="space-y-4 pb-10">
      <header className="flex items-end justify-between pt-2">
        <div>
          <div className="text-[28px] leading-none font-bold">Admin console</div>
          <div className="meta mt-1">Resolution engine · backstop · audit</div>
        </div>
        <a href="#/" className="meta text-teal">← App</a>
      </header>

      <Metrics />

      <Section title={`Resolution queue (${queue.length})`}>
        {queue.length === 0 && <p className="text-sm text-mute">Nothing waiting. Closed windows auto-resolve against the feed.</p>}
        {queue.map((d) => <ManualResolve key={d.id} day={d} />)}
      </Section>

      {openAppeals.length > 0 && (
        <Section title={`Open appeals (${openAppeals.length})`}>
          {openAppeals.map((d) => <ResolvedRow key={d.id} day={d} />)}
        </Section>
      )}

      {live.length > 0 && (
        <Section title="Live now">
          {live.map((d) => (
            <div key={d.id} className="text-sm"><Br className="text-acid">OPEN</Br> {d.question} · <span className="num">{d.entries.length}</span> locked</div>
          ))}
        </Section>
      )}

      <Section title="Schedule">
        <SetQuestion />
        <ul className="mt-4 space-y-2">
          {upcoming.map((d) => (
            <li key={d.id} className="rounded-lg border border-line p-3 text-sm">
              <div className="meta">{fmtDate(d.date)}</div>
              <div>{d.question}</div>
              <div className="meta mt-1 normal-case">{describeSpec(d.sourceSpec)}</div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Recent resolutions">
        {resolved.map((d) => <ResolvedRow key={d.id} day={d} />)}
      </Section>

      <FeedControl />

      <Section title="Audit log">
        <ul className="max-h-96 space-y-2 overflow-auto">
          {[...ledger.audit].reverse().slice(0, 80).map((a) => (
            <li key={a.id} className="border-b border-line pb-2 text-xs">
              <div className="num flex justify-between text-mute">
                <span>{a.action}</span>
                <span>{new Date(a.at).toLocaleString('en-US', { timeZone: 'America/New_York', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })} · {a.actor}</span>
              </div>
              <div className="mt-0.5 text-fg/80">{a.detail}</div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <div className="meta mb-3">{title}</div>
      {children}
    </Card>
  );
}

function Metrics() {
  const { ledger } = useStore();
  return (
    <Section title="Metrics that decide everything">
      <ul className="space-y-3">
        {computeMetrics(ledger).map((m) => (
          <li key={m.key} className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-medium">{m.label}</div>
              <div className="meta normal-case">{m.detail}</div>
            </div>
            <div className={`num text-xl font-bold ${m.pass === true ? 'text-acid' : m.pass === false ? 'text-loss' : 'text-fg'}`}>{m.value}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function SidePicker({ value, onChange }: { value: Side; onChange: (s: Side) => void }) {
  return (
    <div className="flex gap-2">
      {(['yes', 'no'] as const).map((s) => (
        <button
          key={s} onClick={() => onChange(s)}
          className={`num flex-1 rounded-md border py-2 text-sm font-bold ${value === s ? (s === 'yes' ? 'border-teal bg-teal/15 text-teal' : 'border-loss bg-loss/15 text-loss') : 'border-line text-mute'}`}
        >
          {s.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function ManualResolve({ day }: { day: DayCall }) {
  const { actions } = useStore();
  const [outcome, setOutcome] = useState<Side>('yes');
  const [evidence, setEvidence] = useState('');
  return (
    <div className="space-y-2 rounded-lg border border-loss/40 p-3">
      <div className="meta">{fmtDate(day.date)} · {day.entries.length} calls</div>
      <div className="text-sm">{day.question}</div>
      <div className="meta normal-case">{describeSpec(day.sourceSpec)}</div>
      {day.feedFailure && <div className="num text-xs text-loss">Feed failure: {day.feedFailure}</div>}
      <SidePicker value={outcome} onChange={setOutcome} />
      <input className={input} value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="Evidence (source, prints, link)" />
      <div className="flex gap-2">
        <Button className="flex-1 py-2 text-sm" onClick={() => actions.resolveManual(day.id, outcome, evidence)}>Resolve {outcome.toUpperCase()}</Button>
        {day.feedFailure && <Button tone="ghost" className="py-2 text-sm" onClick={() => actions.retryFeed(day.id)}>Retry feed</Button>}
      </div>
    </div>
  );
}

function ResolvedRow({ day }: { day: DayCall }) {
  const { actions, ledger } = useStore();
  const [open, setOpen] = useState(false);
  const r = day.resolution!;
  const [outcome, setOutcome] = useState<Side>(r.outcome === 'yes' ? 'no' : 'yes');
  const [evidence, setEvidence] = useState('');
  const [reason, setReason] = useState('');
  const appeals = day.appeals.filter((a) => a.status === 'open');
  return (
    <div className="mb-2 rounded-lg border border-line p-3 text-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="meta">{fmtDate(day.date)} · {day.entries.length} calls</div>
          <div>{day.question}</div>
        </div>
        <span className={`num font-bold ${r.outcome === 'yes' ? 'text-teal' : 'text-loss'}`}>{r.outcome.toUpperCase()}</span>
      </div>
      <div className="num mt-1 text-xs text-mute">{r.evidence} · {r.source}{r.feed ? `/${r.feed}` : ''}</div>
      {day.resolutionHistory.length > 1 && (
        <div className="meta mt-1 normal-case text-acid">
          History: {day.resolutionHistory.map((h) => `${h.outcome.toUpperCase()} (${h.source})`).join(' → ')}
        </div>
      )}
      {appeals.map((a, i) => (
        <div key={i} className="mt-2 rounded border border-acid/30 p-2 text-xs">
          <span className="text-acid">Appeal</span> from {ledger.members.find((m) => m.id === a.memberId)?.name}: “{a.note}”
        </div>
      ))}
      <div className="mt-2 flex gap-3">
        <button className="meta text-teal" onClick={() => setOpen(!open)}>{open ? 'Cancel' : 'Correct…'}</button>
        {appeals.length > 0 && <button className="meta text-acid" onClick={() => actions.closeAppeals(day.id)}>Uphold & close appeals</button>}
      </div>
      {open && (
        <div className="mt-2 space-y-2">
          <SidePicker value={outcome} onChange={setOutcome} />
          <input className={input} value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="Evidence for the corrected outcome" />
          <input className={input} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason (goes on the public audit log)" />
          <Button tone="loss" className="w-full py-2 text-sm" onClick={() => actions.correct(day.id, outcome, evidence, reason) && setOpen(false)}>
            Record correction
          </Button>
        </div>
      )}
    </div>
  );
}

function SetQuestion() {
  const { actions, now } = useStore();
  const [date, setDate] = useState(() => nextMarketDay(etDate(now)));
  const [question, setQuestion] = useState('');
  const [ticker, setTicker] = useState('SPY');
  const [condition, setCondition] = useState<Condition>('close>open');
  const [benchmark, setBenchmark] = useState('SPY');
  const fromBank = (i: number) => {
    const q = QUESTION_BANK[i];
    setQuestion(q.question);
    setTicker(q.ticker);
    setCondition(q.condition);
    if (q.benchmark) setBenchmark(q.benchmark);
  };
  const spec = { ticker, condition, ...(condition === 'outperform' ? { benchmark } : {}) };
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <input type="date" className={input} value={date} onChange={(e) => setDate(e.target.value)} />
        <select className={input} defaultValue="" onChange={(e) => e.target.value !== '' && fromBank(Number(e.target.value))}>
          <option value="" disabled>From bank…</option>
          {QUESTION_BANK.map((q, i) => <option key={i} value={i}>{q.question}</option>)}
        </select>
      </div>
      <input className={input} value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question (no advice — a yes/no about reality)" />
      <div className="grid grid-cols-3 gap-2">
        <input className={input} value={ticker} onChange={(e) => setTicker(e.target.value.toUpperCase())} placeholder="Ticker" />
        <select className={input} value={condition} onChange={(e) => setCondition(e.target.value as Condition)}>
          <option value="close>open">close &gt; open</option>
          <option value="close>prevClose">close &gt; prev</option>
          <option value="outperform">outperform</option>
        </select>
        <input className={input} disabled={condition !== 'outperform'} value={benchmark} onChange={(e) => setBenchmark(e.target.value.toUpperCase())} placeholder="Bench" />
      </div>
      <div className="meta normal-case">sourceSpec: {describeSpec({ ...spec, date })}</div>
      <Button className="w-full py-2 text-sm" onClick={() => actions.setQuestion(date, question, spec)}>Set question</Button>
      <p className="meta normal-case">Questions freeze at 3:45 PM ET on their date. The rotation pre-fills the next 5 market days.</p>
    </div>
  );
}

function FeedControl() {
  const { feedName, failing, actions } = useStore();
  const [val, setVal] = useState(failing.join(','));
  return (
    <Section title={`Market feed · ${feedName}`}>
      <p className="text-sm text-mute">Demo: list tickers the feed should fail on, to exercise the manual backstop.</p>
      <div className="mt-2 flex gap-2">
        <input className={input} value={val} onChange={(e) => setVal(e.target.value.toUpperCase())} placeholder="e.g. SPY,BTC" />
        <Button tone="ghost" className="py-2 text-sm" onClick={() => actions.setFailing(val.split(',').map((s) => s.trim()).filter(Boolean))}>Apply</Button>
      </div>
    </Section>
  );
}
