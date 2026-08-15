/* Integrity checks over the template corpus.
   Exits non-zero on any error so the build cannot ship a broken corpus.

   The check that matters most is CONDITIONAL REFERENCE INTEGRITY: it walks the
   full configuration space and proves that whenever a clause is included, every
   clause it cross-references is also included. That is the defect class that
   produced a dangling "Section 4.2" in the first version of the prototype. */
import {loadCorpus} from './corpus.mjs';
import {evalExpr, fireRules, resolveFields, clauseEligible, docIncluded, allConfigs, resolveXref, ANSWER_FIELDS} from './evaluator.mjs';

const C = loadCorpus();
const errors=[], warnings=[], notes=[];
const err=(code,msg)=>errors.push(`${code}: ${msg}`);
const warn=(code,msg)=>warnings.push(`${code}: ${msg}`);

const clauseById = new Map(C.clauses.map(c=>[c.id,c]));
const docById    = new Map(C.documents.map(d=>[d.id,d]));
const ruleIds    = new Set(C.rules.map(r=>r.id));
const fieldIds   = new Set(C.fields.map(f=>f.id));

/* ---- 1. structural ---- */
{
  const seen=new Set();
  for(const c of C.clauses){
    if(seen.has(c.id)) err('DUP_ID',`clause id "${c.id}" defined twice (${C.sources[c.id]})`);
    seen.add(c.id);
    for(const k of ['doc','group','title','severity','insertion','jurisdictions','industries','entities','version','updated','source','rationale','body'])
      if(c[k]===undefined) err('MISSING_KEY',`clause "${c.id}" is missing required key "${k}"`);
    if(!docById.has(c.doc)) err('BAD_DOC',`clause "${c.id}" targets unknown document "${c.doc}"`);
    else if(!docById.get(c.doc).groupOrder.includes(c.group))
      err('BAD_GROUP',`clause "${c.id}" declares group "${c.group}", not in ${c.doc} groupOrder [${docById.get(c.doc).groupOrder.join(', ')}]`);
    if(!C.taxonomy.severities[c.severity]) err('BAD_SEVERITY',`clause "${c.id}" has severity "${c.severity}"`);
    if(!C.taxonomy.insertion[c.insertion]) err('BAD_INSERTION',`clause "${c.id}" has insertion "${c.insertion}"`);
    for(const j of c.jurisdictions) if(j!=='*'&&!C.taxonomy.jurisdictions[j]) err('BAD_TAG',`clause "${c.id}" jurisdiction "${j}"`);
    for(const i of c.industries)    if(i!=='*'&&!C.taxonomy.industries[i])    err('BAD_TAG',`clause "${c.id}" industry "${i}"`);
    for(const e of c.entities)      if(e!=='*'&&!C.taxonomy.entities[e])      err('BAD_TAG',`clause "${c.id}" entity "${e}"`);
    if(!/^\d+\.\d+\.\d+$/.test(c.version)) err('BAD_VERSION',`clause "${c.id}" version "${c.version}" is not semver`);
    if(!/^\d{4}-\d{2}$/.test(c.updated))   err('BAD_DATE',`clause "${c.id}" updated "${c.updated}" is not YYYY-MM`);
  }
}

/* ---- 2. expression references ---- */
{
  const walk=(expr,where)=>{
    if(!expr||typeof expr!=='object') return;
    if(expr.rule!==undefined && !ruleIds.has(expr.rule)) err('BAD_RULE_REF',`${where} references unknown rule "${expr.rule}"`);
    for(const key of ['all','any']) if(expr[key]) expr[key].forEach(e=>walk(e,where));
    if(expr.not) walk(expr.not,where);
    for(const key of ['eq','ne','gte','lte','in','sameField','diffField'])
      if(expr[key]) [expr[key][0], ...(key==='sameField'||key==='diffField'?[expr[key][1]]:[])]
        .forEach(f=>{ if(!ANSWER_FIELDS.includes(f)) err('BAD_FIELD_REF',`${where} references unknown answer field "${f}"`); });
    if(expr.truthy!==undefined && !ANSWER_FIELDS.includes(expr.truthy)) err('BAD_FIELD_REF',`${where} references unknown answer field "${expr.truthy}"`);
    if(expr.taxonomy && !C.taxonomy[expr.taxonomy[1]]) err('BAD_TAXONOMY_REF',`${where} references unknown collection "${expr.taxonomy[1]}"`);
  };
  C.rules.forEach(r=>walk(r.when,`rule "${r.id}"`));
  C.clauses.forEach(c=>walk(c.condition,`clause "${c.id}" condition`));
  C.documents.forEach(d=>walk(d.include,`document "${d.id}" include`));
}

/* ---- 3. body tokens ---- */
{
  for(const c of C.clauses){
    for(const m of c.body.matchAll(/\{\{(\w+)\}\}/g))
      if(!fieldIds.has(m[1])) err('BAD_FIELD_TOKEN',`clause "${c.id}" uses undefined field {{${m[1]}}}`);
    for(const m of c.body.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)){
      const key=(m[2]||m[1]).toLowerCase();
      if(!C.glossary[key]) err('BAD_GLOSSARY_TERM',`clause "${c.id}" references glossary term "${key}" which is not defined`);
    }
    for(const m of c.body.matchAll(/<<xr:(@?\w+)>>/g)){
      const t=m[1];
      if(t.startsWith('@')){
        const al=C.aliases[t.slice(1)];
        if(!al) err('BAD_ALIAS',`clause "${c.id}" uses undefined alias "${t}"`);
        else Object.values(al.targets).forEach(id=>{
          if(!clauseById.has(id)) err('BAD_ALIAS_TARGET',`alias "${t}" points at unknown clause "${id}"`);
        });
      } else if(!clauseById.has(t)) err('BAD_XREF',`clause "${c.id}" cross-references unknown clause "${t}"`);
    }
  }
  for(const f of C.fields)
    if(f.from.template) for(const m of f.from.template.matchAll(/\{\{(\w+)\}\}/g))
      if(!fieldIds.has(m[1])) err('BAD_FIELD_TOKEN',`field "${f.id}" template uses undefined field {{${m[1]}}}`);
}

if(errors.length){ report(); process.exit(1); }   // semantic checks below assume structure is sound

/* ---- 4. semantic: walk the whole configuration space ---- */
const configs = allConfigs(C.taxonomy);
const reachableClause=new Set(), reachableDoc=new Set();
const xrefViolations=new Map();   // "A->B" -> example config
const softXrefs=new Map();        // auto clause pointing at a suggest clause
const coPresent=new Map();        // proof that same-titled variants never both appear
const missingAttach=new Map();    // "Schedule A" referenced with nothing providing it
let resolvedFieldSets=0;

for(const a of configs){
  const fired = fireRules(C.rules, a, C.taxonomy);
  const ruleOf = id=>fired.has(id);
  const docsIn = C.documents.filter(d=>docIncluded(d,a,C.taxonomy,ruleOf));
  docsIn.forEach(d=>reachableDoc.add(d.id));
  const openDocs = new Set(docsIn.map(d=>d.id));

  const present = new Set();
  for(const c of C.clauses){
    if(!openDocs.has(c.doc)) continue;
    if(!clauseEligible(c,a,C.taxonomy,ruleOf)) continue;
    reachableClause.add(c.id);
    if(c.insertion==='auto') present.add(c.id);
  }
  /* same-title variants must be mutually exclusive — proved, not assumed */
  {
    const seenTitle=new Map();
    for(const id of present){
      const c=clauseById.get(id), k=c.doc+'|'+c.group+'|'+c.title.toLowerCase();
      if(seenTitle.has(k)){
        const key=`${seenTitle.get(k)} + ${id}`;
        if(!coPresent.has(key)) coPresent.set(key,a);
      } else seenTitle.set(k,id);
    }
  }
  /* attachment integrity: a referenced Schedule/Exhibit must be provided by something present */
  {
    const provided=new Set();
    for(const id of present) (clauseById.get(id).provides||[]).forEach(x=>provided.add(x));
    const offerable=new Set();
    for(const c of C.clauses) if(c.insertion==='suggest') (c.provides||[]).forEach(x=>offerable.add(x));
    for(const id of present){
      for(const m of clauseById.get(id).body.matchAll(/(?:Schedule|Exhibit) [A-Z]\b/g)){
        if(provided.has(m[0])||offerable.has(m[0])) continue;
        const key=`${id} references "${m[0]}"`;
        if(!missingAttach.has(key)) missingAttach.set(key,a);
      }
    }
  }
  /* conditional reference integrity: an auto clause must never point at a clause that is absent */
  for(const id of present){
    const c=clauseById.get(id);
    for(const m of c.body.matchAll(/<<xr:(@?\w+)>>/g)){
      const target=resolveXref(m[1],a,C.aliases);
      if(target && present.has(target)) continue;
      const t=target?clauseById.get(target):null;
      const key=`${id} -> ${m[1]}${m[1]!==target&&target?' ('+target+')':''}`;
      if(t && t.insertion==='suggest'){ if(!softXrefs.has(key)) softXrefs.set(key,a); continue; }
      if(!xrefViolations.has(key)) xrefViolations.set(key,a);
    }
  }
  if(resolvedFieldSets<40){ resolveFields(C.fields,a,C.taxonomy); resolvedFieldSets++; }
}

for(const [key,a] of xrefViolations)
  err('DANGLING_XREF',`${key} — reference is emitted but the target is absent (e.g. ${a.entity}/${a.formState}/${a.opState}/${a.industry}/${a.funding}/${a.founders} founders/hiring=${a.employees})`);

for(const [key,a] of softXrefs)
  err('SOFT_XREF',`${key} — an auto-inserted clause references a suggest-only clause, so the reference renders unresolved until the user accepts the suggestion (e.g. ${a.entity}/${a.formState}/${a.opState}/${a.industry}/${a.funding}/${a.founders} founders)`);

for(const [key,a] of missingAttach)
  err('MISSING_ATTACHMENT',`${key} — no clause provides that attachment in this configuration (e.g. ${a.entity}/${a.formState}/${a.opState}/${a.industry}/${a.funding}/${a.founders} founders)`);

for(const [key,a] of coPresent)
  err('VARIANT_COLLISION',`${key} — clauses sharing a document, group, and title both appear in the same package (e.g. ${a.entity}/${a.formState}/${a.opState}/${a.industry}/${a.funding}/${a.founders} founders); their conditions are not mutually exclusive`);

for(const c of C.clauses) if(!reachableClause.has(c.id))
  warn('UNREACHABLE',`clause "${c.id}" (${C.sources[c.id]}) never becomes eligible in any configuration — its condition and tags may conflict`);
for(const d of C.documents) if(!reachableDoc.has(d.id))
  err('UNREACHABLE_DOC',`document "${d.id}" is never included in any configuration`);

/* ---- 5. hygiene ---- */
{
  const byDocGroup={};
  C.clauses.forEach(c=>{ const k=c.doc+'|'+c.group+'|'+c.title.toLowerCase(); (byDocGroup[k] ||= []).push(c.id); });
  Object.entries(byDocGroup).forEach(([k,ids])=>{
    if(ids.length>1){
      const [doc,,title]=k.split('|');
      const mutuallyExclusive = ids.every(id=>clauseById.get(id).condition);
      if(!mutuallyExclusive) err('DUP_TITLE',`${ids.length} clauses share the title "${title}" in ${doc} (${ids.join(', ')}) and at least one is unconditional`);
      else notes.push(`variant pair: ${ids.join(' / ')} — mutual exclusivity proved across all configurations`);
    }
  });
  const unused=Object.keys(C.glossary).filter(k=>!C.clauses.some(c=>c.body.toLowerCase().includes('[['+k)||c.body.includes('|'+k+']]')));
  if(unused.length) warn('UNUSED_GLOSSARY',`${unused.length} glossary terms are never referenced: ${unused.join(', ')}`);
  const usedFields=new Set(C.clauses.flatMap(c=>[...c.body.matchAll(/\{\{(\w+)\}\}/g)].map(m=>m[1])));
  C.fields.forEach(f=>{ if(f.from.template) [...f.from.template.matchAll(/\{\{(\w+)\}\}/g)].forEach(m=>usedFields.add(m[1])); });
  const unusedFields=[...fieldIds].filter(f=>!usedFields.has(f));
  if(unusedFields.length) warn('UNUSED_FIELD',`${unusedFields.length} fields are defined but never used: ${unusedFields.join(', ')}`);
}

function report(){
  const bySeverity=C.clauses.reduce((m,c)=>(m[c.severity]=(m[c.severity]||0)+1,m),{});
  const byInsertion=C.clauses.reduce((m,c)=>(m[c.insertion]=(m[c.insertion]||0)+1,m),{});
  console.log(`corpus: ${C.clauses.length} clauses · ${C.documents.length} documents · ${C.rules.length} rules · ${C.fields.length} fields · ${Object.keys(C.glossary).length} glossary terms`);
  console.log(`        severity ${JSON.stringify(bySeverity)} · insertion ${JSON.stringify(byInsertion)}`);
  if(configs) console.log(`checked ${configs.length} configurations`);
  notes.forEach(n=>console.log('  note  '+n));
  warnings.forEach(w=>console.log('  WARN  '+w));
  errors.forEach(e=>console.log('  ERROR '+e));
  console.log(errors.length ? `\nFAILED — ${errors.length} error(s), ${warnings.length} warning(s)` : `\nOK — 0 errors, ${warnings.length} warning(s)`);
}
report();
process.exit(errors.length?1:0);
