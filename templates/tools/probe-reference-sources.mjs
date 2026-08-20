/* Measures which reference-corroboration hosts (templates/tools/reference-sources.mjs) this
   environment can actually reach, and writes the result into
   templates/sources/reference-registry.json. Same discipline as probe-sources.mjs, kept as a
   separate script because these hosts answer a different question and should never be
   silently merged into the statutory registry.

   Usage: node templates/tools/probe-reference-sources.mjs [--json] */
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from './corpus.mjs';
import {REFERENCE_HOSTS} from './reference-sources.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

const REG = path.join(ROOT, 'sources', 'reference-registry.json');
const reg = JSON.parse(fs.readFileSync(REG, 'utf8'));
const hosts = Object.keys(REFERENCE_HOSTS);

async function probe(host) {
  const started = Date.now();
  try {
    const r = await fetch(`https://${host}/`, {method: 'GET', signal: AbortSignal.timeout(10000)});
    return {status: r.ok ? 'reachable' : `http-${r.status}`, ms: Date.now() - started};
  } catch (e) {
    return {status: 'unreachable', error: (e.cause?.code || e.name || String(e)).slice(0, 60), ms: Date.now() - started};
  }
}

const results = {};
for (const h of hosts) results[h] = {kind: REFERENCE_HOSTS[h], ...await probe(h)};

const now = new Date().toISOString();
reg.reachability = {probedAt: now, hosts: results};
const wrote = writeIfChanged(REG, JSON.stringify(reg, null, 2) + '\n',
  {volatile: VOLATILE_FIELDS, parse: JSON.parse, fsImpl: fs});
console.log(wrote.written
  ? `reference registry updated — ${wrote.reason}`
  : `reference registry unchanged — ${wrote.reason}`);

const reachable = Object.entries(results).filter(([, v]) => v.status === 'reachable');
if (process.argv.includes('--json')) { console.log(JSON.stringify(results, null, 1)); }
else {
  console.log(`probed ${hosts.length} reference hosts at ${now}`);
  console.log(`  reachable: ${reachable.length}  ${reachable.map(([h]) => h).join(', ') || '(none)'}`);
  for (const [h, v] of Object.entries(results)) if (v.status !== 'reachable') console.log(`    ${v.status.padEnd(12)} ${h}`);
  console.log(reachable.length
    ? '\nAt least one reference host is reachable — corroboration can proceed.'
    : '\nNo reference host is reachable. Corroboration cannot proceed in this environment;\ncorroborate.mjs will fail closed and upgrade nothing. See verification/EGRESS.md.');
}
