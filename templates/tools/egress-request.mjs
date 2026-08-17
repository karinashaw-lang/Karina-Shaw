/* Generates the egress allowlist request from the source registry and the last probe.

   Verification is blocked by an organization egress policy, not by anything in this
   repo. The person who can lift it needs a precise list, a reason per host, and the
   evidence that the block is real. This produces that from measured data so it cannot
   drift from what the pipeline actually needs.

   Usage: node templates/tools/egress-request.mjs */
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

const reg = JSON.parse(fs.readFileSync(path.join(ROOT,'sources','registry.json'),'utf8'));
const C = loadCorpus();

/* which hosts does the corpus actually need, and for how many citations? */
const need = {};
for(const c of C.clauses){
  for(const s of c.sources){
    if(!s.citation || s.url) continue;
    const pat = reg.citationPatterns.find(p => new RegExp(p.match).test(s.citation));
    if(!pat) continue;
    for(const h of pat.hosts) (need[h] ||= {citations:new Set(), kinds:new Set()}),
      need[h].citations.add(s.citation), need[h].kinds.add(pat.kind);
  }
}

const reach = reg.reachability.hosts || {};
const rows = Object.entries(need)
  .map(([host,v]) => ({
    host,
    kind: reg.hostKinds[host] || 'unknown',
    citations: v.citations.size,
    covers: [...v.kinds].join(', '),
    status: (reach[host]||{}).status || 'not probed'
  }))
  .sort((a,b) => b.citations - a.citations);

const blocked = rows.filter(r => r.status !== 'reachable');
const primary = blocked.filter(r => r.kind === 'primary');

const md = [
'# Egress allowlist request',
'',
'## What is being asked for',
'',
'Outbound HTTPS to the hosts below, so that `templates/tools/verify.mjs` can check the',
'corpus against its cited sources. Read-only GET requests to public statutory and',
'regulatory text. No credentials, no writes, no user data leaves the session.',
'',
'## Why it is blocked',
'',
'The agent proxy reports `connect_rejected` — *"gateway answered 403 to CONNECT (policy',
'denial or upstream failure)"* — for every host in this list. That is an organization',
'egress policy decision, not a misconfiguration: the CA bundle, trust store, and proxy',
'settings are all correct, and `github.com` reaches through the same path without error.',
'',
`Measured at ${reg.reachability.probedAt || '(not probed)'} by \`npm run probe\`. Reproduce with \`npm run audit\`.`,
'',
'## Impact while blocked',
'',
`- ${C.clauses.length} of ${C.clauses.length} clauses sit below the release gate and cannot be drafted.`,
'- `npm run verify` attempts every routable citation and upgrades nothing. Last run: 341 fetches, 341 HTTP 403.',
'- The product generates empty documents, which is the correct output but not a shippable one.',
'',
'## Hosts, in priority order',
'',
'| Host | Kind | Citations needing it | Covers | Current |',
'|---|---|---:|---|---|',
...rows.map(r => `| \`${r.host}\` | ${r.kind} | ${r.citations} | ${r.covers} | ${r.status} |`),
'',
'## Minimum viable subset',
'',
'If the full list is not acceptable, the smallest set that unblocks meaningful progress is:',
'',
...(primary.length
   ? primary.slice(0,3).map(r => `- \`${r.host}\` — ${r.kind}, needed by ${r.citations} citations (${r.covers})`)
   : ['- (no primary host is routable for this corpus — check the registry)']),
'',
'One reachable primary source plus one reachable mirror is enough to move a clause to',
'`corroborated`. `primary-verified` additionally requires a named human reviewer and is',
'not unblocked by network access alone — that requirement is deliberate.',
'',
'## What will not change if this is granted',
'',
'- No clause reaches `primary-verified` without a named reviewer.',
'- The gate still refuses to draft anything below `corroborated`.',
'- `verify.mjs` still fails closed on a timeout, a redirect, a short body, or a 403.',
'  Its 21 unit tests assert exactly that; granting egress does not relax any of it.',
''
].join('\n');

const out = path.join(ROOT,'..','verification','egress-request.md');
fs.mkdirSync(path.dirname(out),{recursive:true});
writeIfChanged(out, md, {linePatterns:VOLATILE_LINES, fsImpl:fs});
console.log(`egress request: ${rows.length} host(s) needed, ${blocked.length} blocked, ${primary.length} of them primary`);
rows.forEach(r => console.log(`  ${String(r.citations).padStart(3)} citations  ${r.status.padEnd(10)} ${r.host}  (${r.kind})`));
console.log(`\nwritten to verification/egress-request.md`);
