// Phase 9.3: "client error reporting... and alerting." This is the
// manual review side -- error_reports has no SELECT policy for
// anyone via the anon key (by design, same as analytics_events), so
// reading it back needs the service role key, same no-op-without-
// credentials shape as tools/analytics_report.js.
//
// Real-time alerting (an email/Slack ping the moment a new error
// lands) is a Supabase Database Webhook pointed at an endpoint the
// project owner controls -- not something this script, or any tool in
// this session, can wire up: it needs a real destination (an email
// service, a Slack incoming webhook) this project has no credentials
// for, the same category of gap as Stripe in Phase 7.2. The exact
// recipe is in DECISIONS.md/ARCHITECTURE.md's Phase 9.3 entry so the
// owner can turn it on in a few minutes once they have a destination;
// this script is the thing to run until then (or alongside it).
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_SERVICE_ROLE_KEY=... \
//   node tools/error_report_summary.js [--since 24h]
//
// Requires Node 18+ (built-in fetch, no dependencies).

function parseSince(arg) {
  const m = /^(\d+)([hd])$/.exec(arg || '24h');
  if (!m) throw new Error(`Invalid --since value: ${arg}`);
  const n = Number(m[1]);
  const ms = m[2] === 'h' ? n * 60 * 60 * 1000 : n * 24 * 60 * 60 * 1000;
  return new Date(Date.now() - ms).toISOString();
}

function groupAndCount(reports) {
  const byName = new Map();
  reports.forEach(r => {
    const key = `${r.error_name}: ${r.message}`;
    if (!byName.has(key)) byName.set(key, { count: 0, pages: new Set(), example: r });
    const entry = byName.get(key);
    entry.count += 1;
    entry.pages.add(r.page || '(unknown page)');
  });
  return [...byName.entries()]
    .map(([key, v]) => ({ key, count: v.count, pages: [...v.pages], example: v.example }))
    .sort((a, b) => b.count - a.count);
}

async function fetchReports(supabaseUrl, serviceKey, since) {
  const res = await fetch(
    `${supabaseUrl}/rest/v1/error_reports?select=*&created_at=gte.${encodeURIComponent(since)}&order=created_at.desc&limit=10000`,
    { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } }
  );
  if (!res.ok) throw new Error(`Failed to fetch error_reports: ${res.status} ${await res.text()}`);
  return res.json();
}

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.log('SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY not set — skipping.');
    console.log('This needs the service role key, which must never live in this');
    console.log('sandbox or in config.js. Run it from the project owner\'s own');
    console.log('machine — see this file\'s header.');
    return;
  }

  const sinceArgIdx = process.argv.indexOf('--since');
  const since = parseSince(sinceArgIdx >= 0 ? process.argv[sinceArgIdx + 1] : undefined);

  const reports = await fetchReports(supabaseUrl, serviceKey, since);
  console.log(`${reports.length} error report(s) since ${since}.`);
  if (reports.length === 0) return;

  const grouped = groupAndCount(reports);
  console.log(`\n${grouped.length} distinct error(s), most frequent first:`);
  grouped.forEach(g => {
    console.log(`\n  [${g.count}x, ${g.pages.length} page(s): ${g.pages.join(', ')}] ${g.key}`);
    (g.example.stack_frames || []).slice(0, 3).forEach(f => {
      console.log(`      at ${f.fn} (${f.file}:${f.line}:${f.col})`);
    });
  });
}

if (require.main === module) {
  main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
}

module.exports = { groupAndCount, parseSince };
