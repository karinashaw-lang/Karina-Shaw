import { extractHoldings } from './lib/extract-holdings.mjs';

// Mirrors fetchLive() in buffett-portfolio.html: hits Stooq's CORS-friendly
// CSV quote endpoint and confirms live prices actually resolve for the
// portfolio's tickers.
async function main() {
  const holdings = extractHoldings();
  const syms = holdings.map((h) => h.t.toLowerCase() + '.us').join(',');
  const url = `https://stooq.com/q/l/?s=${syms}&f=sc&h&e=csv`;

  console.log(`Probing live prices for ${holdings.length} tickers via Stooq...`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAIL: HTTP ${res.status} from Stooq`);
    process.exit(1);
  }

  const text = await res.text();
  const lines = text.trim().split(/\r?\n/);
  const bySymbol = new Map(holdings.map((h) => [h.t, h]));
  const missing = new Set(bySymbol.keys());
  let hit = 0;

  for (const line of lines.slice(1)) {
    const [sym, close] = line.split(',');
    if (!sym) continue;
    const t = sym.replace(/\.us/i, '').toUpperCase();
    const px = parseFloat(close);
    if (bySymbol.has(t) && !Number.isNaN(px) && px > 0) {
      hit++;
      missing.delete(t);
    }
  }

  console.log(`Got ${hit}/${holdings.length} live quotes.`);
  if (missing.size > 0) {
    console.log(`Missing quotes: ${[...missing].join(', ')}`);
  }

  if (hit === 0) {
    console.error('FAIL: no quotes parsed — live price source is unavailable or unreachable.');
    process.exit(1);
  }

  console.log('OK: live price source is reachable and returning quotes.');
}

main().catch((err) => {
  console.error('FAIL:', err.message);
  process.exit(1);
});
