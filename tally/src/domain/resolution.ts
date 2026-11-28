// The resolution engine (spec §6) — the real product. Pure and deterministic:
// given a sourceSpec and the feed, the outcome is never ambiguous.
import type { Bar, MarketFeed } from './market';
import type { Side, SourceSpec } from './types';

export type EvalResult =
  | { ok: true; outcome: Side; evidence: string; feed: string }
  | { ok: false; error: string };

const pct = (a: number, b: number) => (a / b - 1) * 100;
const fmtPct = (n: number) => `${n >= 0 ? '+' : ''}${n.toFixed(2)}%`;
const fmtPx = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function evaluate(spec: SourceSpec, feed: MarketFeed): EvalResult {
  const bar = feed.getBar(spec.ticker, spec.date);
  if (!bar) return { ok: false, error: `No ${spec.ticker} bar for ${spec.date} from ${feed.name}` };
  switch (spec.condition) {
    case 'close>open': {
      const yes = bar.close > bar.open;
      return {
        ok: true,
        outcome: yes ? 'yes' : 'no',
        feed: feed.name,
        evidence: `${spec.ticker} open ${fmtPx(bar.open)} → close ${fmtPx(bar.close)} (${fmtPct(pct(bar.close, bar.open))})`,
      };
    }
    case 'close>prevClose': {
      const yes = bar.close > bar.prevClose;
      return {
        ok: true,
        outcome: yes ? 'yes' : 'no',
        feed: feed.name,
        evidence: `${spec.ticker} prev ${fmtPx(bar.prevClose)} → 4:00 PM ${fmtPx(bar.close)} (${fmtPct(pct(bar.close, bar.prevClose))})`,
      };
    }
    case 'outperform': {
      if (!spec.benchmark) return { ok: false, error: 'outperform requires a benchmark' };
      const b: Bar | null = feed.getBar(spec.benchmark, spec.date);
      if (!b) return { ok: false, error: `No ${spec.benchmark} bar for ${spec.date} from ${feed.name}` };
      const r = pct(bar.close, bar.prevClose);
      const rb = pct(b.close, b.prevClose);
      return {
        ok: true,
        outcome: r > rb ? 'yes' : 'no',
        feed: feed.name,
        evidence: `${spec.ticker} ${fmtPct(r)} vs ${spec.benchmark} ${fmtPct(rb)} (close vs prev close)`,
      };
    }
  }
}

export function describeSpec(spec: SourceSpec): string {
  switch (spec.condition) {
    case 'close>open':
      return `${spec.ticker} close > open on ${spec.date}`;
    case 'close>prevClose':
      return `${spec.ticker} 4:00 PM ET price > previous 4:00 PM price on ${spec.date}`;
    case 'outperform':
      return `${spec.ticker} daily return > ${spec.benchmark} daily return on ${spec.date}`;
  }
}
