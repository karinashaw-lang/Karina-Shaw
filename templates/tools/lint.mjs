/* Defect pattern detector.

   Sampling nine clauses produced a taxonomy, and the dominant entry was omission: the
   clause states the headline number correctly and drops the qualifier that decides
   whether it applies. That is a structural signature, not a fact about any one clause,
   so it can be looked for across the whole corpus without checking each against a source.

   These are HEURISTICS. Each one predicts "a reviewer should look here", never "this is
   wrong". Their value depends entirely on their measured error rate, which is why
   lint.test.mjs scores them against the nine clauses whose defects are already
   established rather than asserting they work.

   Usage:
     node templates/tools/lint.mjs             lint the whole corpus
     node templates/tools/lint.mjs --validate  score against known findings
     node templates/tools/lint.mjs --clause <id>
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';

const strip = b => b.replace(/\{\{(\w+)\}\}/g,'').replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g,'$1').replace(/<<xr:@?\w+>>/g,'');

export const DETECTORS = [
  {
    id:'threshold-without-lookback', predicts:'omitted-qualifier',
    why:'A headcount or dollar threshold is stated with no window over which it is measured. Statutory thresholds are commonly measured over a lookback or aggregation period, and a clause that omits it lets a user conclude they are under the threshold when they are not.',
    test(b){
      const hasThreshold = /\b(?:or more employees|or more|at least)\s|\bthreshold\b|\$\s?[\d,]+\s?(?:or more|or greater)/i.test(b)
        || /\b(?:five|ten|fifteen|twenty|fifty|seventy-five|one hundred)\s*\(\d+\)\s*or more\b/i.test(b);
      const hasWindow = /\b(?:preceding|prior|lookback|look-back|at any time during|in the (?:past|previous|preceding)|aggregat|calendar year|twelve \(12\) months|rolling)\b/i.test(b);
      return hasThreshold && !hasWindow;
    }
  },
  {
    id:'penalty-without-cap', predicts:'overstated-consequence',
    why:'A penalty, damages, or back-pay exposure is described with no ceiling. Statutory penalties are usually capped, and stating exposure without the cap overstates it — which is a defect even though it errs toward caution.',
    test(b){
      const hasPenalty = /\b(?:penalt|damages|back pay|liable to|one additional hour of pay|per day|per employee per pay period)\b/i.test(b);
      const hasCap = /\b(?:up to|not to exceed|maximum of|capped|whichever is (?:smaller|less|lower)|no more than|limited to)\b/i.test(b);
      return hasPenalty && !hasCap;
    }
  },
  {
    id:'scope-test-single-conjunct', predicts:'overstated-scope',
    why:'A scope test of the form "who primarily X" appears without a conjunct. Several statutes require two conditions together (works AND resides); stating one broadens the apparent reach of the provision.',
    test(b){ return /\bprimarily\s+(?:works|resides|performs|located)\b/i.test(b)
                 && !/\bprimarily\s+\w+\s+and\s+\w+/i.test(b); }
  },
  {
    id:'form-not-named', predicts:'omitted-requirement',
    why:'The clause directs a filing or election without naming the form. Agencies publish forms and change them; a clause that describes a filing generically leaves the user to hand-draft something that may already exist as a form.',
    test(b){
      const directsFiling = /\b(?:file|filing|submit|election must be|apply for|application)\b/i.test(b);
      const namesForm = /\bForm\s+[A-Z0-9][\w-]*/.test(b);
      return directsFiling && !namesForm;
    }
  },
  {
    id:'deadline-without-trigger', predicts:'omitted-qualifier',
    why:'A period is stated without the event it runs from. A deadline with no trigger cannot be calendared, and the trigger is frequently the contested part.',
    test(b){
      const m = b.match(/\bwithin\s+[a-z-]+\s*\(\d+\)\s*(?:calendar |business )?(?:days?|months?|hours?)\b(?!\s+(?:of|after|from|following|preceding))/i);
      return !!m;
    }
  },
  {
    id:'notice-duty-single-citation', predicts:'miscitation',
    why:'The clause performs a notice or disclosure duty and cites a single provision. Substantive rules and the duty to give notice of them are frequently in different sections, and citing the substantive one for the notice duty is a miscitation a reviewer would rely on.',
    test(b, c){
      const isNoticeDuty = /\b(?:notice|notify|disclose|inform|written statement)\b/i.test(b);
      return isNoticeDuty && (c.sources||[]).filter(s=>s.citation).length===1;
    }
  },
  {
    id:'absolute-without-exception', predicts:'omitted-qualifier',
    why:'An absolute obligation or prohibition is stated with no exception. Statutory duties nearly always carry carve-outs, and a clause without one reads as stricter than the law.',
    test(b){
      const absolute = /\b(?:shall not|must not|may not|is prohibited|in no event)\b/i.test(b);
      const exception = /\b(?:except|unless|other than|provided that|save (?:for|that)|does not apply)\b/i.test(b);
      return absolute && !exception;
    }
  }
];

export function lintClause(c){
  const b = strip(c.body);
  return DETECTORS.filter(d=>{ try{ return d.test(b,c); }catch{ return false; } }).map(d=>({id:d.id, predicts:d.predicts}));
}

/* precision/recall against clauses whose defects are already established */
export function score(clauses, findings){
  const truth = new Map(findings.map(f=>[f.clauseId,
    ((f.gaps||[]).length || (f.assertions||[]).some(a=>a.status==='contradicted'))]));
  let tp=0, fp=0, fn=0, tn=0;
  const detail=[];
  for(const c of clauses){
    if(!truth.has(c.id)) continue;
    const flagged = lintClause(c).length>0;
    const defective = truth.get(c.id);
    if(flagged && defective) tp++; else if(flagged && !defective) fp++;
    else if(!flagged && defective) fn++; else tn++;
    detail.push({id:c.id, flagged, defective, hits:lintClause(c).map(h=>h.id)});
  }
  return {tp,fp,fn,tn,
          recall: tp+fn ? tp/(tp+fn) : null,
          precision: tp+fp ? tp/(tp+fp) : null,
          detail};
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('lint.mjs');
if(INVOKED){
  const C = loadCorpus();
  const FDIR = path.join(ROOT,'..','verification','findings');
  const findings = fs.existsSync(FDIR)
    ? fs.readdirSync(FDIR).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join(FDIR,f),'utf8'))) : [];

  if(process.argv.includes('--validate')){
    const s = score(C.clauses, findings);
    console.log('scored against clauses whose defects are established');
    console.log(`  true positives  ${s.tp}   flagged and defective`);
    console.log(`  false negatives ${s.fn}   defective and missed`);
    console.log(`  false positives ${s.fp}   flagged but not known defective`);
    console.log(`  true negatives  ${s.tn}`);
    console.log(`  recall    ${s.recall===null?'n/a':(s.recall*100).toFixed(0)+'%'}   of known-defective clauses flagged`);
    console.log(`  precision ${s.precision===null?'n/a':(s.precision*100).toFixed(0)+'%'}   of flagged clauses known defective`);
    console.log();
    for(const d of s.detail)
      console.log(`  ${d.defective?'defective':'clean    '}  ${d.flagged?'FLAGGED':'missed '}  ${d.id.padEnd(26)} ${d.hits.join(', ')}`);
    process.exit(0);
  }

  const only = process.argv.includes('--clause') ? process.argv[process.argv.indexOf('--clause')+1] : null;
  const rows = C.clauses.filter(c=>!only||c.id===only).map(c=>({c, hits:lintClause(c)})).filter(r=>r.hits.length);
  const byDet={}; rows.forEach(r=>r.hits.forEach(h=>byDet[h.id]=(byDet[h.id]||0)+1));
  console.log(`${rows.length} of ${C.clauses.length} clauses flagged by at least one detector`);
  console.log();
  for(const [id,n] of Object.entries(byDet).sort((a,b)=>b[1]-a[1])){
    const d=DETECTORS.find(x=>x.id===id);
    console.log(`${String(n).padStart(4)}  ${id}  → predicts ${d.predicts}`);
  }
  const out = path.join(ROOT,'..','verification','lint.json');
  fs.writeFileSync(out, JSON.stringify({lintedAt:new Date().toISOString(), flagged:rows.length, total:C.clauses.length,
    byDetector:byDet, rows:rows.map(r=>({id:r.c.id, title:r.c.title, doc:r.c.doc, severity:r.c.severity, hits:r.hits}))},null,2)+'\n');
  console.log(`\nwritten to verification/lint.json`);
}
