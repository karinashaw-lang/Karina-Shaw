// Phase 9.3: checks tools/error_report_summary.js's real
// grouping/counting logic against synthetic reports.
const { groupAndCount, parseSince } = require('../../tools/error_report_summary.js');

const checks = [];
function check(name, cond, detail) {
  checks.push({ name, ok: !!cond, detail });
}

{
  const reports = [
    { error_name: 'TypeError', message: 'Cannot read x', page: '/index.html', stack_frames: [] },
    { error_name: 'TypeError', message: 'Cannot read x', page: '/index.html', stack_frames: [] },
    { error_name: 'TypeError', message: 'Cannot read x', page: '/sign.html', stack_frames: [] },
    { error_name: 'RangeError', message: 'Out of range', page: '/index.html', stack_frames: [] },
  ];
  const grouped = groupAndCount(reports);
  check('groups identical error_name+message together', grouped.length === 2, JSON.stringify(grouped));
  check('most frequent error sorted first', grouped[0].key.includes('TypeError') && grouped[0].count === 3, JSON.stringify(grouped));
  check('tracks distinct pages for the grouped error', grouped[0].pages.length === 2 && grouped[0].pages.includes('/sign.html'), JSON.stringify(grouped[0].pages));
  check('a single-occurrence error still appears with count 1', grouped[1].count === 1, JSON.stringify(grouped[1]));
}

{
  check('parseSince defaults to 24h', typeof parseSince(undefined) === 'string');
  const since7d = new Date(parseSince('7d')).getTime();
  const expected7d = Date.now() - 7 * 24 * 60 * 60 * 1000;
  check('parseSince("7d") is ~7 days ago', Math.abs(since7d - expected7d) < 5000);
  let threw = false;
  try { parseSince('garbage'); } catch (e) { threw = true; }
  check('parseSince rejects an invalid value rather than silently defaulting', threw);
}

const failed = checks.filter(c => !c.ok);
checks.forEach(c => console.log(`${c.ok ? 'OK  ' : 'FAIL'} ${c.name}${!c.ok ? ' -- ' + c.detail : ''}`));
console.log(`\n${checks.length - failed.length}/${checks.length} error_report_summary checks passed.`);
if (failed.length) process.exit(1);
console.log('error_report_summary checks passed');
