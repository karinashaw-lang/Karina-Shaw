// Market data feed. The resolution engine depends only on this interface,
// so the mock can be swapped for a real EOD provider server-side.

export interface Bar {
  ticker: string;
  date: string;
  open: number;
  close: number; // price at 4:00 PM ET
  prevClose: number;
}

export interface MarketFeed {
  name: string;
  getBar(ticker: string, date: string): Bar | null;
}

const BASE: Record<string, number> = {
  SPY: 590, QQQ: 515, IWM: 228, DIA: 440, NVDA: 182, AAPL: 236, MSFT: 468,
  AMZN: 221, META: 712, TSLA: 338, GOOGL: 196, BTC: 96500, ETH: 3420,
};

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic pseudo-random in [0,1) from a string seed. */
export function rand(seed: string): number {
  return (hash(seed) % 1_000_000) / 1_000_000;
}

/**
 * Deterministic synthetic EOD feed for demo and tests. Same ticker+date always
 * yields the same bar, so resolutions are reproducible.
 */
export class MockFeed implements MarketFeed {
  name = 'mock-eod';
  /** Tickers that "fail" — used to exercise the admin backstop. */
  failing = new Set<string>();

  getBar(ticker: string, date: string): Bar | null {
    if (this.failing.has(ticker)) return null;
    const base = BASE[ticker] ?? 100;
    const vol = ticker === 'BTC' || ticker === 'ETH' ? 0.03 : ticker === 'TSLA' || ticker === 'NVDA' ? 0.025 : 0.012;
    const drift = (rand(`${ticker}:${date}:drift`) - 0.5) * 0.2;
    const prevClose = round(base * (1 + drift));
    const gap = (rand(`${ticker}:${date}:gap`) - 0.5) * vol;
    const open = round(prevClose * (1 + gap));
    const move = (rand(`${ticker}:${date}:move`) - 0.5) * vol * 2;
    const close = round(open * (1 + move));
    return { ticker, date, open, close, prevClose };
  }
}

function round(n: number) {
  return Math.round(n * 100) / 100;
}
