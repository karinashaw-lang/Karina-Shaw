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

   Usage:
     node templates/tools/ingest.mjs --file <path> --citation "Cal. Lab. Code §925" \
       --by "K. Shaw" --from "Westlaw" --on 2026-08-15
     node templates/tools/ingest.mjs --url <url> --citation "..."
     node templates/tools/ingest.mjs --list
*/
import fs from 'node:fs';
import path from 'node:path';
import {put, get, loadIndex, digest, compare, TEXT_DIR} from './textstore.mjs';
import {ROOT} from './corpus.mjs';

const reg = JSON.parse(fs.readFileSync(path.join(ROOT,'sources','registry.json'),'utf8'));
const arg = n => { const i=process.argv.indexOf('--'+n); return i>0 ? process.argv[i+1] : null; };

export function hostKindOf(url){
  try{ return reg.hostKinds[new URL(url).host] || 'unknown'; }catch{ return 'unknown'; }
}
/* Only a primary host may be ingested by fetch. A mirror is fine for corroboration but
   is not a source text — it is somebody else's copy, with their transcription errors. */
export function mayFetch(url){
  const kind = hostKindOf(url);
  return {allowed: kind==='primary', kind,
          why: kind==='primary' ? 'approved primary source'
             : `host is "${kind}"; only primary hosts may be ingested as source text`};
}

async function fetchPath(url, citation){
  const check = mayFetch(url);
  if(!check.allowed) return {ok:false, problems:[check.why]};
  let res;
  try{ res = await fetch(url, {signal:AbortSignal.timeout(20000)}); }
  catch(e){ return {ok:false, problems:[`fetch failed: ${e.cause?.code||e.name}`]}; }
  if(!res.ok) return {ok:false, problems:[`fetch returned HTTP ${res.status} — nothing was stored`]};
  const body = await res.text();
  return put(body, {citation, origin:url, originKind:'primary-fetch',
                    suppliedBy:'ingest.mjs', suppliedAt:new Date().toISOString(),
                    httpStatus:res.status, contentType:res.headers.get('content-type')||''});
}

function filePath(file, citation, by, from, on){
  if(!fs.existsSync(file)) return {ok:false, problems:[`no such file: ${file}`]};
  if(!by || !from) return {ok:false, problems:['operator-supplied text requires --by and --from naming who obtained it and from where']};
  const body = fs.readFileSync(file);
  return put(body, {citation, origin:path.resolve(file), originKind:'operator-supplied',
                    suppliedBy:by, suppliedAt:new Date().toISOString(),
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
    }
    if(!rows.length) console.log('  (none — no source text has been ingested)');
    process.exit(0);
  }

  const citation = arg('citation');
  if(!citation){ console.error('--citation is required: the store refuses text it cannot attribute'); process.exit(1); }

  const r = arg('url') ? await fetchPath(arg('url'), citation)
          : arg('file') ? filePath(arg('file'), citation, arg('by'), arg('from'), arg('on'))
          : {ok:false, problems:['supply either --url (approved primary host) or --file (operator-supplied)']};

  if(!r.ok){ console.error('refused:'); r.problems.forEach(p=>console.error('  - '+p)); process.exit(2); }
  console.log(`stored ${r.textId.slice(0,12)}  ${r.record.bytes} bytes  ${r.record.originKind}`);
  console.log(`  citation: ${r.record.citation}`);
  if(r.record.attestation) console.log(`  attestation: ${r.record.attestation.statement}`);
}
