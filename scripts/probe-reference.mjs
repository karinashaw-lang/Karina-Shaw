import { extractHoldings } from './lib/extract-holdings.mjs';

// Validates the static 13F reference data embedded in buffett-portfolio.html
// (no network) — the numbers the page falls back to whenever live prices are
// unavailable, so they need to hold up on their own.
function main() {
  const holdings = extractHoldings();
  const errors = [];

  if (holdings.length === 0) {
    errors.push('HOLDINGS array is empty.');
  }

  const seen = new Set();
  for (const h of holdings) {
    const label = h.t || '(missing ticker)';

    if (!h.t) errors.push(`${label}: missing ticker`);
    else if (seen.has(h.t)) errors.push(`${label}: duplicate ticker`);
    seen.add(h.t);

    if (!h.name) errors.push(`${label}: missing name`);
    if (!h.sector) errors.push(`${label}: missing sector`);
    if (!(h.shares > 0)) errors.push(`${label}: shares must be > 0 (got ${h.shares})`);
    if (!(h.prevClose > 0)) errors.push(`${label}: prevClose must be > 0 (got ${h.prevClose})`);
    if (!(h.pct > 0)) errors.push(`${label}: pct must be > 0 (got ${h.pct})`);
    if (!['hold', 'buy', 'new', 'trim'].includes(h.activity)) {
      errors.push(`${label}: unexpected activity value "${h.activity}"`);
    }
    if (typeof h.est !== 'boolean') errors.push(`${label}: est must be boolean`);
  }

  const pctSum = holdings.reduce((s, h) => s + h.pct, 0);
  if (pctSum < 95 || pctSum > 105) {
    errors.push(`Reported % Port values sum to ${pctSum.toFixed(2)}%, expected roughly 100%`);
  }

  if (errors.length > 0) {
    console.error(`FAIL: ${errors.length} issue(s) found in reference data:`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log(`OK: ${holdings.length} holdings validated, % Port sums to ${pctSum.toFixed(2)}%.`);
}

main();
