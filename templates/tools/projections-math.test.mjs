import {computeProjections, netCentsForRow} from './projections-math.mjs';

let pass = 0, fail = 0;
const t = (n, c) => { if (c) pass++; else { fail++; console.log('  FAIL  ' + n); } };

console.log('netCentsForRow — the one function both the live wizard preview and the table call');
{
  t('a profitable row', netCentsForRow({revenue: '1000', expenses: '400'}) === 60000);
  t('a loss row', netCentsForRow({revenue: '400', expenses: '1000'}) === -60000);
  t('missing/blank fields treated as zero, not a crash', netCentsForRow({}) === 0 && netCentsForRow(undefined) === 0);
  t('matches the per-row net inside computeProjections for the same row',
    netCentsForRow({revenue: '2500', expenses: '900'}) === computeProjections([{year: 'Y', revenue: '2500', expenses: '900'}]).rows[0].netCents);
}

console.log('computeProjections — a year nets revenue minus expenses, in cents');
{
  const one = computeProjections([{year: 'Year 1', revenue: '100000', expenses: '60000'}]);
  t('one year: revenue, expenses and net all present', one.rows.length === 1 &&
    one.rows[0].revenue === '$100,000.00' && one.rows[0].expenses === '$60,000.00' && one.rows[0].net === '$40,000.00');

  const loss = computeProjections([{year: 'Year 1', revenue: '10000', expenses: '25000'}]);
  t('a loss year shows a negative net, not a clamped zero', loss.rows[0].net === '-$15,000.00' && loss.rows[0].netCents === -1500000);

  const multi = computeProjections([
    {year: 'Year 1', revenue: '100000', expenses: '80000'},
    {year: 'Year 2', revenue: '150000', expenses: '90000'},
    {year: 'Year 3', revenue: '220000', expenses: '110000'},
  ]);
  t('totals sum across years, not just carry the last row',
    multi.totalRevenueCents === (100000 + 150000 + 220000) * 100 &&
    multi.totalExpensesCents === (80000 + 90000 + 110000) * 100);
  t('total net is total revenue minus total expenses', multi.totalNetCents === multi.totalRevenueCents - multi.totalExpensesCents);
  t('formatted totals match the computed cents', multi.totalNet === '$190,000.00');
}

console.log('rows the wizard leaves blank are dropped, not billed as a zero year');
{
  const withBlank = computeProjections([
    {year: '', revenue: '', expenses: ''},
    {year: 'Year 1', revenue: '50000', expenses: '20000'},
  ]);
  t('an all-blank row is dropped', withBlank.rows.length === 1 && withBlank.rows[0].year === 'Year 1');

  t('empty/undefined/null input produces a zeroed, well-formed result, not a crash',
    computeProjections([]).totalNet === '$0.00' &&
    computeProjections(undefined).totalNet === '$0.00' &&
    computeProjections(null).totalNet === '$0.00');

  const unlabeled = computeProjections([{year: '', revenue: '1000', expenses: '0'}]);
  t('a row with real numbers but no year label is kept and labeled, not silently dropped',
    unlabeled.rows.length === 1 && unlabeled.rows[0].year === '(unlabeled year)');

  const labelOnly = computeProjections([{year: 'Year 1', revenue: '', expenses: ''}]);
  t('a wizard default row with only a pre-filled year label and no numbers is dropped, not shown as a fake $0.00 year',
    labelOnly.rows.length === 0);
}

console.log('money parsing and formatting are reused from invoice-math, not redefined');
{
  const tolerant = computeProjections([{year: 'Year 1', revenue: '$45,000.50', expenses: 'lots'}]);
  t('a dollar sign and commas parse, garbage parses to 0', tolerant.rows[0].revenueCents === 4500050 && tolerant.rows[0].expensesCents === 0);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
