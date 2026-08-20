/* The one place invoice arithmetic happens.

   Kept as its own small module, inlined into the compiled prototype the same way
   evaluator.mjs and sources.mjs are, rather than written once in the wizard UI and once
   wherever else needed — that duplication is exactly the shape of the two bugs found and
   fixed earlier today (Client/Customer, hostKind==='primary'): two copies of the same fact,
   never cross-checked, until one of them was wrong. There must be only one copy of "what a
   line item costs" in this codebase.

   Money is handled in integer cents throughout and only formatted to a string at the very
   end, so floating-point rounding never has a chance to make an invoice not add up. */

export function parseMoney(input) {
  const s = String(input ?? '').replace(/[^0-9.\-]/g, '');
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

export function parseQty(input) {
  const n = parseFloat(String(input ?? '').replace(/[^0-9.\-]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

/* Cents, always. Math on floating dollars is how invoices stop adding up. */
const toCents = n => Math.round(n * 100);

export function lineAmountCents(item) {
  return toCents(parseQty(item && item.qty) * parseMoney(item && item.rate));
}

export function formatCents(cents) {
  const neg = cents < 0;
  const abs = Math.abs(Math.round(cents));
  const s = (abs / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '-$' : '$') + s;
}

/* The only function permitted to compute an invoice total — everything else calls this.
   taxRatePct is a percentage (8.5 means 8.5%), tolerant of a trailing "%" or blank input.
   Rows with no description and no usable quantity/rate are dropped rather than billed as
   $0.00 — an empty row the wizard's own "add row" button always leaves behind should never
   turn into a line on a real invoice. */
export function computeInvoiceTotals(lineItems, taxRatePct) {
  const rows = (Array.isArray(lineItems) ? lineItems : [])
    .filter(it => it && (String(it.description || '').trim() || parseQty(it.qty) || parseMoney(it.rate)))
    .map(it => ({
      description: String(it.description || '').trim() || '(no description)',
      qty: parseQty(it.qty),
      rate: parseMoney(it.rate),
      amountCents: lineAmountCents(it),
    }));

  const subtotalCents = rows.reduce((s, r) => s + r.amountCents, 0);
  const rate = Math.max(0, parseMoney(taxRatePct));
  const taxCents = Math.round(subtotalCents * (rate / 100));
  const totalCents = subtotalCents + taxCents;

  return {
    rows,
    taxRatePct: rate,
    subtotalCents, taxCents, totalCents,
    subtotal: formatCents(subtotalCents),
    tax: formatCents(taxCents),
    total: formatCents(totalCents),
  };
}
