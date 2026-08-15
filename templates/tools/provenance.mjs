/* Authorship provenance — "nothing from memory" as a build constraint.

   The corpus contains 360 clauses written from model memory. Sampling says 89% of them
   are defective, and the dominant failure is omission: the qualifier that decides whether
   a rule applies is the thing memory drops. No review process fixes that at the source,
   because the next clause written the same way fails the same way.

   This makes the rule structural. Every clause body is hashed into a manifest. A clause
   whose body is not in the manifest is NEW or MODIFIED, and it may only enter the corpus
   if it is pinned to an attested source text. Writing one from memory fails the build.

   The existing 360 are recorded as `memory-legacy` — grandfathered so the repo builds,
   permanently marked so nobody mistakes them for sourced, and blocked from shipping by
   the release gate regardless.

   Usage:
     node templates/tools/provenance.mjs --check     fail if anything was authored from memory
     node templates/tools/provenance.mjs --seed      record the current corpus as legacy (once)
     node templates/tools/provenance.mjs --accept <id>  record a clause as sourced after pinning
*/
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {loadCorpus, ROOT} from './corpus.mjs';

export const MANIFEST = path.join(ROOT,'sources','authored.json');
export const bodyHash = b => crypto.createHash('sha256').update(b).digest('hex').slice(0,16);

export function loadManifest(){
  return fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST,'utf8'))
    : {version:'1.0.0', note:'clause id → body hash and how that body came to exist', entries:{}};
}

/* The whole rule, as a pure function. */
export function classify(clause, manifest, pins){
  const h = bodyHash(clause.body);
  const rec = manifest.entries[clause.id];
  const pinned = pins.some(p => p.clause === clause.id);
  if(!rec)              return {state:'unrecorded', h, ok:pinned,
    why: pinned ? 'new clause, pinned to an attested source'
                : 'new clause with no pin — it can only have come from memory'};
  if(rec.bodyHash !== h) return {state:'modified', h, ok:pinned,
    why: pinned ? 'body changed and is pinned to an attested source'
                : 'body changed with no pin — the change can only have come from memory'};
  return {state:'unchanged', h, ok:true, provenance:rec.provenance,
    why:`unchanged since it was recorded as ${rec.provenance}`};
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('provenance.mjs');
if(INVOKED){
  const C = loadCorpus();
  const manifest = loadManifest();
  const pins = (()=>{ try{ return JSON.parse(fs.readFileSync(path.join(ROOT,'sources','pins.json'),'utf8')).pins; }catch{ return []; } })();

  if(process.argv.includes('--seed')){
    if(Object.keys(manifest.entries).length){
      console.error('manifest already seeded. Seeding again would relabel modified clauses as legacy,');
      console.error('which is exactly the bypass this file exists to prevent. Use --accept after pinning.');
      process.exit(1);
    }
    for(const c of C.clauses)
      manifest.entries[c.id] = {bodyHash: bodyHash(c.body), provenance:'memory-legacy', recordedAt:new Date().toISOString()};
    manifest.legacyNote = `${C.clauses.length} clauses written from model memory before this constraint existed. `
      + 'Sampling put the defect rate at 89%. They are grandfathered so the repo builds and permanently marked so '
      + 'nobody mistakes them for sourced; the release gate blocks them from shipping regardless.';
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest,null,2)+'\n');
    console.log(`seeded ${C.clauses.length} clauses as memory-legacy`);
    process.exit(0);
  }

  if(process.argv.includes('--accept')){
    const id = process.argv[process.argv.indexOf('--accept')+1];
    const c = C.clauses.find(x=>x.id===id);
    if(!c){ console.error(`no such clause: ${id}`); process.exit(1); }
    if(!pins.some(p=>p.clause===id)){
      console.error(`refused: ${id} has no pin to an attested source text.`);
      console.error('A clause is accepted as sourced by pinning it, not by asserting it.');
      process.exit(2);
    }
    manifest.entries[id] = {bodyHash: bodyHash(c.body), provenance:'source-composed', recordedAt:new Date().toISOString()};
    fs.writeFileSync(MANIFEST, JSON.stringify(manifest,null,2)+'\n');
    console.log(`recorded ${id} as source-composed`);
    process.exit(0);
  }

  const rows = C.clauses.map(c=>({id:c.id, ...classify(c, manifest, pins)}));
  const bad  = rows.filter(r=>!r.ok);
  const tally = rows.reduce((m,r)=>(m[r.state]=(m[r.state]||0)+1,m),{});
  const byProv = rows.filter(r=>r.provenance).reduce((m,r)=>(m[r.provenance]=(m[r.provenance]||0)+1,m),{});

  console.log(`${C.clauses.length} clauses`);
  for(const [k,n] of Object.entries(tally)) console.log(`  ${String(n).padStart(4)}  ${k}`);
  for(const [k,n] of Object.entries(byProv)) console.log(`  ${String(n).padStart(4)}  ${k}`);
  if(bad.length){
    console.log(`\n${bad.length} clause(s) authored without a source:`);
    bad.slice(0,20).forEach(r=>console.log(`  ${r.id.padEnd(28)} ${r.state} — ${r.why}`));
    console.log('\nA clause may only enter or change if it is pinned to an attested source text.');
    console.log('See tools/ingest.mjs to supply the text and tools/pin.mjs to pin the assertion.');
    process.exit(1);
  }
  console.log('\nno clause has been authored or modified from memory since the manifest was sealed.');
}
