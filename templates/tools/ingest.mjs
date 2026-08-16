/* Source text ingestion — two supply paths, one standard.

   PATH A — fetch from an approved primary host. Blocked in this environment; the code
   is here so that granting egress is the only change required.

   PATH B — operator-supplied. You obtain the text (Westlaw, Lexis, a court library, a
   printed volume, the Secretary of State) and hand over the file. It is stored verbatim
   and hashed, with an attestation naming who obtained it, from where, and when.

   Path B is the one that works today, and it is not a downgrade: a text you obtained
   from Westlaw and attested is more trustworthy than one I scraped. What the store adds
   is that nobody afterwards has to take either of us on trust — the hash proves the
   bytes, and the attestation names the human.

   Whichever path supplies it, the document is inspected before it is stored. A file
   that is an error page, a rendered web page, or a mangled decode is refused outright.
   A file that looks like a real text but is truncated, is missing a subdivision, does
   not contain the section it is filed under, or carries no version marker is also
   refused — unless a named person waives that specific finding for a stated reason,
   which is then kept in the record. The point is that "we have a source for it" should
   mean the source is whole, not merely that a file exists.

   Usage:
     node templates/tools/ingest.mjs --file <path> --citation "Cal. Lab. Code §925" \
       --by "K. Shaw" --from "Westlaw" --on 2026-08-15
     node templates/tools/ingest.mjs --url <url> --citation "..."
     node templates/tools/ingest.mjs --inspect <path> --citation "..."   # dry run, stores nothing
     node templates/tools/ingest.mjs --list
     node templates/tools/ingest.mjs --audit                             # re-check what is stored

   To waive a serious finding, name it and say why:
     ... --waive no-version-marker --because "printed volume; currency attested separately"
*/
import fs from 'node:fs';
import path from 'node:path';
import {put, get, loadIndex, digest, compare, auditStore, TEXT_DIR} from './textstore.mjs';
import {inspect, renderReport, admissible} from './docdefects.mjs';
import {tierOf} from './sources.mjs';
import {ROOT} from './corpus.mjs';

const reg = JSON.parse(fs.readFileSync(path.join(ROOT,'sources','registry.json'),'utf8'));
const arg = n => { const i=process.argv.indexOf('--'+n); return i>0 ? process.argv[i+1] : null; };

/* sources.mjs is authoritative on who publishes what; the registry keeps a copy for
   routing and is validated against it. Reading both would let them drift. */
export function hostKindOf(url){ return tierOf(url); }
/* Only the publisher of the text may be ingested by fetch. An agency site is primary about
   the agency's own forms and procedures, but a source TEXT is the sovereign's words, and an
   agency page paraphrasing a statute is not those words. A mirror is fine for corroboration
   and is still somebody else's copy, with their transcription errors. */
export function mayFetch(url){
  const kind = hostKindOf(url);
  return {allowed: kind==='publisher', kind,
          why: kind==='publisher' ? 'the publisher of the text'
             : `host is "${kind}"; only the publisher of the text may be ingested as source text`};
}

/* Waivers are deliberately awkward to supply: one finding at a time, each needing a
   reason on the command line. A single --force would be used by reflex. */
function waiversFromArgs(by){
  const out={};
  const argv=process.argv;
  for(let i=0;i<argv.length;i++){
    if(argv[i]!=='--waive') continue;
    const id=argv[i+1];
    const bi=argv.indexOf('--because', i);
    const because = bi>0 ? argv[bi+1] : null;
    out[id]={by: by||null, because};
  }
  return out;
}

async function fetchPath(url, citation, waivers){
  const check = mayFetch(url);
  if(!check.allowed) return {ok:false, problems:[check.why]};
  let res;
  try{ res = await fetch(url, {signal:AbortSignal.timeout(20000)}); }
  catch(e){ return {ok:false, problems:[`fetch failed: ${e.cause?.code||e.name}`]}; }
  if(!res.ok) return {ok:false, problems:[`fetch returned HTTP ${res.status} — nothing was stored`]};
  const body = await res.text();
  return put(body, {citation, origin:url, originKind:'primary-fetch',
                    suppliedBy:'ingest.mjs', suppliedAt:new Date().toISOString(),
                    httpStatus:res.status, contentType:res.headers.get('content-type')||'', waivers});
}

function filePath(file, citation, by, from, on, waivers){
  if(!fs.existsSync(file)) return {ok:false, problems:[`no such file: ${file}`]};
  if(!by || !from) return {ok:false, problems:['operator-supplied text requires --by and --from naming who obtained it and from where']};
  const body = fs.readFileSync(file);
  return put(body, {citation, origin:path.resolve(file), originKind:'operator-supplied',
                    suppliedBy:by, suppliedAt:new Date().toISOString(),
                    waivers,
                    attestation:{by, from, on: on||new Date().toISOString().slice(0,10),
                                 statement:`${by} obtained this text from ${from} and attests it is the unmodified text of ${citation} as published there.`}});
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('ingest.mjs');
if(INVOKED){
  if(process.argv.includes('--list')){
    const ix = loadIndex();
    const rows = Object.entries(ix.texts);
    console.log(`${rows.length} attested text(s) in ${path.relative(process.cwd(),TEXT_DIR)}`);
    for(const [sha,r] of rows){
      const live = get(sha);
      const state = !live ? 'MISSING' : live.tampered ? 'TAMPERED' : 'ok';
      console.log(`  ${state.padEnd(9)} ${sha.slice(0,12)}  ${r.citation}`);
      console.log(`  ${''.padEnd(9)} ${r.originKind}  ${r.bytes} bytes  ${r.suppliedAt?.slice(0,10)}  ${r.attestation?`attested by ${r.attestation.by} from ${r.attestation.from}`:r.origin}`);
      for(const w of r.integrity?.waived||[])
        console.log(`  ${''.padEnd(9)} waived ${w.id} — ${w.waiver.by}: ${w.waiver.because}`);
    }
    if(!rows.length) console.log('  (none — no source text has been ingested)');
    process.exit(0);
  }

  if(process.argv.includes('--audit')){
    const rows = auditStore();
    if(!rows.length){ console.log('no stored texts to audit'); process.exit(0); }
    let bad=0;
    for(const r of rows){
      console.log(`${r.state.toUpperCase().padEnd(16)} ${r.textId.slice(0,12)}  ${r.citation}`);
      if(r.rendered) console.log(r.rendered);
      if(r.state==='defective'||r.state==='tampered'||r.state==='missing') bad++;
    }
    console.log(`\n${rows.length} text(s), ${bad} needing attention`);
    process.exit(bad?3:0);
  }

  if(process.argv.includes('--inspect')){
    const f = arg('inspect'), citation = arg('citation')||'';
    if(!fs.existsSync(f)){ console.error(`no such file: ${f}`); process.exit(1); }
    const report = inspect(fs.readFileSync(f,'utf8'), {citation});
    const verdict = admissible(report, waiversFromArgs(arg('by')));
    console.log(`${f}\n  citation: ${citation||'(none given — the citation check cannot run)'}`);
    console.log(`  ${report.passed.length} check(s) passed, ${report.inapplicable.length} inapplicable, ${report.fatal.length} fatal, ${report.serious.length} serious`);
    if(verdict.blocking.length) console.log(renderReport({fatal:verdict.blocking.filter(f=>f.severity==='fatal'),
                                                          serious:verdict.blocking.filter(f=>f.severity==='serious')}));
    for(const w of verdict.waived) console.log(`  WAIVED  ${w.id.padEnd(20)} ${w.detail}\n  ${''.padEnd(28)}waived by ${w.waiver.by}: ${w.waiver.because}`);
    for(const b of verdict.badWaivers) console.log(`  BAD WAIVER ${b.id} — ${b.problems.join('; ')}`);
    console.log(verdict.ok ? '\nthis document would be stored' : '\nthis document would be REFUSED');
    process.exit(verdict.ok?0:3);
  }

  const citation = arg('citation');
  if(!citation){ console.error('--citation is required: the store refuses text it cannot attribute'); process.exit(1); }

  const waivers = waiversFromArgs(arg('by'));
  const r = arg('url') ? await fetchPath(arg('url'), citation, waivers)
          : arg('file') ? filePath(arg('file'), citation, arg('by'), arg('from'), arg('on'), waivers)
          : {ok:false, problems:['supply either --url (approved primary host) or --file (operator-supplied)']};

  if(!r.ok){
    console.error('refused:');
    r.problems.forEach(p=>console.error('  - '+p));
    if(r.report) console.error('\nfull report:\n'+renderReport(r.report));
    process.exit(2);
  }
  console.log(`stored ${r.textId.slice(0,12)}  ${r.record.bytes} bytes  ${r.record.originKind}`);
  console.log(`  citation: ${r.record.citation}`);
  if(r.record.attestation) console.log(`  attestation: ${r.record.attestation.statement}`);
  console.log(`  integrity: ${r.record.integrity.passed.length} check(s) passed, ${r.record.integrity.waived.length} waived`);
  for(const w of r.record.integrity.waived) console.log(`    waived ${w.id} — ${w.waiver.by}: ${w.waiver.because}`);
}
