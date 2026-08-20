/* The one place financial-projection arithmetic happens, for the same reason
   invoice-math.mjs exists on its own: one copy of "what a year of the plan nets", never two
   independently-maintained ones. Money parsing and formatting are NOT redefined here — they
   are imported from invoice-math.mjs, which already owns that job. Redeclaring parseMoney or
   formatCents in this file would recreate the exact bug class this project spent a session
   fixing (two copies of the same fact, drifting apart unnoticed).

   A row is dropped unless it carries a real revenue or expense figure. The year label alone
   does NOT make a row usable: the wizard's default rows arrive pre-labeled "Year 1", "Year 2",
   "Year 3" so the user only has to type numbers, and if those numbers are never filled in the
   row must not turn into a fake "$0.00" line on the plan — that reads as an asserted zero,
   not an unanswered question. A row with real numbers but no year label is the mirror case of
   invoice's "no description" row: kept and labeled, not silently dropped. */

import { parseMoney, formatCents } from './invoice-math.mjs';

/* One row's net, in cents. Exported on its own so the wizard's live per-row display (a row
   still being typed, not yet "usable") and the document's computed table both call the same
   arithmetic instead of the wizard re-deriving it inline. */
export function netCentsForRow(row) {
  return Math.round(parseMoney(row && row.revenue) * 100) - Math.round(parseMoney(row && row.expenses) * 100);
}

export function computeProjections(rows) {
  const usable = (Array.isArray(rows) ? rows : [])
    .filter(r => r && (parseMoney(r.revenue) || parseMoney(r.expenses)));

  const mapped = usable.map(r => {
    const revenueCents = Math.round(parseMoney(r.revenue) * 100);
    const expensesCents = Math.round(parseMoney(r.expenses) * 100);
    const netCents = revenueCents - expensesCents;
    return {
      year: String(r.year || '').trim() || '(unlabeled year)',
      revenueCents, expensesCents, netCents,
      revenue: formatCents(revenueCents),
      expenses: formatCents(expensesCents),
      net: formatCents(netCents),
    };
  });

  const totalRevenueCents = mapped.reduce((s, r) => s + r.revenueCents, 0);
  const totalExpensesCents = mapped.reduce((s, r) => s + r.expensesCents, 0);
  const totalNetCents = totalRevenueCents - totalExpensesCents;

  return {
    rows: mapped,
    totalRevenueCents, totalExpensesCents, totalNetCents,
    totalRevenue: formatCents(totalRevenueCents),
    totalExpenses: formatCents(totalExpensesCents),
    totalNet: formatCents(totalNetCents),
  };
}
