/* Attested source text store.

   The requirement is source texts that are 100% trusted. Fetching them is the easy
   half; the hard half is being able to prove later that what you hold is what the
   source said. This store exists to make that provable.

   Three properties it enforces:

   1. VERBATIM ONLY. What is stored is bytes as received. There is no code path in this
      file that summarizes, paraphrases, extracts, or otherwise passes text through a
      model. A model artifact is not a source text, and the way to guarantee that is to
      make it structurally impossible rather than a matter of discipline.

   2. CONTENT-ADDRESSED. Every text is keyed by SHA-256 over its exact bytes. Two people
      holding the same textId hold identical bytes or one of them has been tampered with.

   3. PROVENANCE OR NOTHING. A text without a recorded origin, timestamp, and supplier
      is refused at the door. There is no "trust me" mode.

   Statutes are amended. A text is therefore pinned as of a date, and re-attestation
   compares the live source against the stored hash — a mismatch means the law moved and
   every clause pinned to it is stale, which is a finding, not an error.

   4. NO DEFECTIVE SOURCE DOCUMENTS. Provenance says where a text came from; it says
      nothing about whether the text is any good. A 404 page hashes as cleanly as a
      statute. A copy truncated mid-subdivision pins perfectly and then authorises a
      clause that omits whatever was cut off. So every text is inspected for structural
      defects before it is written, by docdefects.mjs, and a defective one is refused
      rather than stored with a warning. Fatal defects can never be stored. Lesser ones
      require a named person to waive them for a stated reason, and that waiver is kept
      in the record for as long as the text exists.
*/
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {ROOT} from './corpus.mjs';
import {inspect, admissible, renderReport} from './docdefects.mjs';

export const TEXT_DIR  = path.join(ROOT,'sources','texts');
export const INDEX     = path.join(TEXT_DIR,'index.json');

/* Normalisation is limited to line endings and trailing whitespace. Anything more
   would mean the stored hash no longer identifies the bytes the source served. */
export function normalize(buf){
  return Buffer.from(String(buf).replace(/\r\n/g,'\n').replace(/[ \t]+$/gm,''),'utf8');
}
export function digest(buf){ return crypto.createHash('sha256').update(normalize(buf)).digest('hex'); }

export function loadIndex(){
  if(!fs.existsSync(INDEX)) return {version:'1.0.0', texts:{}};
  return JSON.parse(fs.readFileSync(INDEX,'utf8'));
}
export function saveIndex(ix){
  fs.mkdirSync(TEXT_DIR,{recursive:true});
  fs.writeFileSync(INDEX, JSON.stringify(ix,null,2)+'\n');
}

/* ---- what a record must carry before it is admitted ---- */
export const REQUIRED = ['citation','origin','originKind','suppliedBy','suppliedAt','sha256','bytes'];

export function validateRecord(rec){
  const problems=[];
  for(const k of REQUIRED) if(!rec[k] && rec[k]!==0) problems.push(`missing ${k}`);
  if(rec.originKind && !['primary-fetch','operator-supplied'].includes(rec.originKind))
    problems.push(`originKind must be primary-fetch or operator-supplied, got "${rec.originKind}"`);
  if(rec.originKind==='operator-supplied' && !rec.attestation)
    problems.push('operator-supplied text requires an attestation block naming who obtained it and from where');
  if(rec.sha256 && !/^[0-9a-f]{64}$/.test(rec.sha256)) problems.push('sha256 is not a sha-256 hex digest');
  if(rec.bytes!==undefined && rec.bytes < 200)
    problems.push(`stored text is ${rec.bytes} bytes — too short to be a statutory section, likely an error page`);
  if(rec.derivedFromModel) problems.push('text is marked as model-derived and can never be a source text');
  return problems;
}

export function put(textBuf, meta){
  const buf = normalize(textBuf);
  const sha = digest(buf);
  const {waivers = {}, ...rest} = meta;
  const rec = {...rest, sha256:sha, bytes:buf.length, storedAt:new Date().toISOString()};
  const problems = validateRecord(rec);
  if(problems.length) return {ok:false, problems};

  /* the document itself, not just its paperwork */
  const report  = inspect(buf.toString('utf8'), {citation: rec.citation});
  const verdict = admissible(report, waivers);
  if(!verdict.ok) return {ok:false, report, verdict,
    problems: verdict.blocking.map(f=>`${f.severity}: ${f.title} — ${f.detail}`)
      .concat(verdict.badWaivers.map(b=>`waiver for ${b.id} refused: ${b.problems.join('; ')}`))};

  rec.integrity = {
    checkedAt: new Date().toISOString(),
    checksRun: report.checked,
    passed: report.passed,
    inapplicable: report.inapplicable,
    waived: verdict.waived.map(f=>({id:f.id, detail:f.detail, waiver:f.waiver}))
  };

  fs.mkdirSync(TEXT_DIR,{recursive:true});
  fs.writeFileSync(path.join(TEXT_DIR, sha + '.txt'), buf);   // verbatim bytes, nothing else
  const ix = loadIndex();
  ix.texts[sha] = rec;
  saveIndex(ix);
  return {ok:true, textId:sha, record:rec};
}

export function get(textId){
  const p = path.join(TEXT_DIR, textId + '.txt');
  if(!fs.existsSync(p)) return null;
  const buf = fs.readFileSync(p);
  /* the stored bytes must still hash to their own id, or the store has been tampered with */
  if(digest(buf) !== textId) return {tampered:true, textId};
  return {textId, buf, text:buf.toString('utf8'), record:loadIndex().texts[textId]};
}

/* Re-inspect what is already stored. The checks will get better over time, and a text
   admitted under an older set is not thereby clean — an audit re-runs the current checks
   against the current bytes, so a defect found later surfaces on the stored copy rather
   than being frozen in at ingestion. */
export function auditStore(){
  const ix = loadIndex();
  return Object.entries(ix.texts).map(([sha,rec])=>{
    const live = get(sha);
    if(!live) return {textId:sha, citation:rec.citation, state:'missing'};
    if(live.tampered) return {textId:sha, citation:rec.citation, state:'tampered'};
    const report = inspect(live.text, {citation:rec.citation});
    const waivers = Object.fromEntries((rec.integrity?.waived||[]).map(w=>[w.id, w.waiver]));
    const verdict = admissible(report, waivers);
    return {textId:sha, citation:rec.citation,
            state: verdict.ok ? (verdict.waived.length ? 'ok-with-waivers' : 'ok') : 'defective',
            report, verdict, rendered: renderReport(report)};
  });
}

/* ---- re-attestation: has the source moved since we stored it? ---- */
export function compare(storedId, liveBuf){
  const live = digest(liveBuf);
  if(live === storedId) return {status:'unchanged', liveId:live};
  return {status:'drifted', storedId, liveId:live,
          note:'the source no longer matches the stored bytes — the provision may have been amended, and every assertion pinned to it is stale until re-checked'};
}
