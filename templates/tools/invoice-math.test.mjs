import {computeInvoiceTotals, lineAmountCents, formatCents, parseMoney, parseQty} from './invoice-math.mjs';

let pass = 0, fail = 0;
const t = (n, c) => { if (c) pass++; else { fail++; console.log('  FAIL  ' + n); } };

console.log('parsing is tolerant of how a person actually types money and quantities');
{
  t('a bare number parses', parseMoney('42.50') === 42.5);
  t('a dollar sign and commas are stripped', parseMoney('$1,250.00') === 1250);
  t('garbage parses to 0, not NaN', parseMoney('lots') === 0);
  t('blank parses to 0', parseMoney('') === 0 && parseMoney(undefined) === 0);
  t('quantity accepts fractional units (hours)', parseQty('2.5') === 2.5);
  t('zero or negative quantity is treated as unset', parseQty('0') === 0 && parseQty('-3') === 0);
}

console.log('line amounts are computed in integer cents, so floats cannot misround');
{
  t('2 x $50 is exactly $100.00', lineAmountCents({qty: 2, rate: 50}) === 10000);
  t('the classic float trap (0.1 + 0.2) does not appear: 3 x $0.10',
    lineAmountCents({qty: 3, rate: '0.10'}) === 30);
  t('fractional hourly billing rounds to the nearest cent',
    lineAmountCents({qty: '1.5', rate: '95.33'}) === Math.round(1.5 * 95.33 * 100));
}

console.log('formatCents renders what a reader expects on an invoice');
{
  t('whole dollars still show cents', formatCents(10000) === '$100.00');
  t('thousands get a comma', formatCents(123456700) === '$1,234,567.00');
  t('a refund/credit shows as negative', formatCents(-500) === '-$5.00');
  t('zero is a plain $0.00, not -$0.00', formatCents(0) === '$0.00');
}

console.log('computeInvoiceTotals — the one function that decides what is owed');
{
  const basic = computeInvoiceTotals([{description: 'Design work', qty: 10, rate: 150}], '');
  t('one row, no tax: subtotal, tax, and total all match', basic.subtotal === '$1,500.00' && basic.tax === '$0.00' && basic.total === '$1,500.00');

  const taxed = computeInvoiceTotals([{description: 'Consulting', qty: 4, rate: 200}], '8.5');
  t('8.5% tax on $800 is $68.00, total $868.00', taxed.tax === '$68.00' && taxed.total === '$868.00');

  const multi = computeInvoiceTotals([
    {description: 'Widgets', qty: 3, rate: 25},
    {description: 'Shipping', qty: 1, rate: 40},
  ], '0');
  t('multiple rows sum correctly', multi.subtotal === '$115.00' && multi.rows.length === 2);

  t('empty line items produce a zeroed, well-formed invoice, not a crash',
    computeInvoiceTotals([], '').total === '$0.00');
  t('null/undefined line items are treated as empty, not a crash',
    computeInvoiceTotals(undefined, undefined).total === '$0.00' && computeInvoiceTotals(null, null).total === '$0.00');

  const blankRow = computeInvoiceTotals([{description: '', qty: '', rate: ''}, {description: 'Real item', qty: 1, rate: 10}], '0');
  t('a wizard "add row" leftover with nothing filled in is dropped, not billed as $0.00',
    blankRow.rows.length === 1 && blankRow.rows[0].description === 'Real item');

  const noDesc = computeInvoiceTotals([{description: '', qty: 2, rate: 5}], '0');
  t('a row with real qty/rate but no description is kept and labeled, not silently dropped',
    noDesc.rows.length === 1 && noDesc.rows[0].description === '(no description)');

  t('a negative or missing tax rate never produces a negative tax line',
    computeInvoiceTotals([{description: 'x', qty: 1, rate: 100}], '-5').taxCents === 0);

  t('taxRatePct on the result reflects what was actually applied',
    computeInvoiceTotals([], '7.25').taxRatePct === 7.25);

  t('subtotal + tax always exactly equals total (integer cents, no drift)', (() => {
    const r = computeInvoiceTotals([{description:'a',qty:'3.33',rate:'19.99'},{description:'b',qty:'1',rate:'0.01'}], '6.25');
    return r.subtotalCents + r.taxCents === r.totalCents;
  })());
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
