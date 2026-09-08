/**
 * The cut a distributor earns from a tip made through their share link —
 * see the business plan's "Distributor Payouts." Not configurable per
 * link; a single, clearly-documented default keeps the split predictable
 * for creators and distributors alike. The remainder (80%) goes to the
 * creator, same as an un-attributed tip — no platform fee is taken on
 * tips at all yet (see README), so this is the whole amount, just split
 * two ways instead of one.
 */
export const DISTRIBUTOR_SHARE = 0.2;

export function distributorCutCents(amountCents: number): number {
  return Math.round(amountCents * DISTRIBUTOR_SHARE);
}
