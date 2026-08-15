/* Shared evaluation core for the DRAFT template corpus.
   Used by tools/validate.mjs and tools/build.mjs under Node, and inlined
   verbatim into the prototype by the build step (the `export ` keywords are
   stripped on the way in). Keep it dependency-free and side-effect-free. */

export const ANSWER_FIELDS = ['company','entity','formState','opState','founders','founderNames','industry','funding','employees'];

/* ---- condition expression language (see templates/rules.json) ---- */
export function evalExpr(expr, a, tax, ruleOf){
  if(expr===null||expr===undefined) return true;
  if(expr.always!==undefined) return !!expr.always;
  if(expr.all) return expr.all.every(e=>evalExpr(e,a,tax,ruleOf));
  if(expr.any) return expr.any.some(e=>evalExpr(e,a,tax,ruleOf));
  if(expr.not!==undefined) return !evalExpr(expr.not,a,tax,ruleOf);
  if(expr.rule!==undefined) return !!ruleOf(expr.rule);
  if(expr.eq) return a[expr.eq[0]]===expr.eq[1];
  if(expr.ne) return a[expr.ne[0]]!==expr.ne[1];
  if(expr.gte) return a[expr.gte[0]]>=expr.gte[1];
  if(expr.lte) return a[expr.lte[0]]<=expr.lte[1];
  if(expr.in) return expr.in[1].includes(a[expr.in[0]]);
  if(expr.truthy!==undefined) return !!a[expr.truthy];
  if(expr.sameField) return a[expr.sameField[0]]===a[expr.sameField[1]];
  if(expr.diffField) return a[expr.diffField[0]]!==a[expr.diffField[1]];
  if(expr.taxonomy){
    const [field,coll,prop]=expr.taxonomy;
    const row=(tax[coll]||{})[a[field]];
    return !!(row && row[prop]);
  }
  throw new Error('unknown expression: '+JSON.stringify(expr));
}

/* Returns a Set of rule ids that fire, resolving rule-to-rule references. */
export function fireRules(rules, a, tax){
  const byId=new Map(rules.map(r=>[r.id,r]));
  const memo=new Map(), visiting=new Set();
  const ruleOf=id=>{
    if(memo.has(id)) return memo.get(id);
    if(visiting.has(id)) throw new Error('cyclic rule reference at '+id);
    const r=byId.get(id);
    if(!r) throw new Error('unknown rule referenced: '+id);
    visiting.add(id);
    const v=evalExpr(r.when,a,tax,ruleOf);
    visiting.delete(id); memo.set(id,v);
    return v;
  };
  const fired=new Set();
  rules.forEach(r=>{ if(ruleOf(r.id)) fired.add(r.id); });
  return fired;
}

/* ---- field auto-population (templates/schemas/fields.json) ---- */
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
function longDate(d){ return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`; }
function plusDays(d,n){ const x=new Date(d.getTime()); x.setDate(x.getDate()+n); return x; }
const NUMWORDS=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];

export function builtins(a,tax){
  const names=(a.founderNames||[]).filter(Boolean);
  const ent=tax.entities[a.entity];
  return {
    founderList: names.length>1 ? names.slice(0,-1).join(', ')+' and '+names[names.length-1] : (names[0]||'the founder'),
    firstFounder: names[0]||'[Founder 1]',
    founderCountWords: NUMWORDS[a.founders]||String(a.founders),
    ownerSplitNote: a.founders===1
      ? 'The sole owner holds one hundred percent (100%).'
      : a.founders===2
        ? 'Absent a contrary schedule, ownership is presumed split evenly between the two founders.'
        : `Absent a contrary schedule, ownership is presumed split evenly among the ${NUMWORDS[a.founders]||a.founders} founders.`,
    consentName: `Initial ${a.entity==='llc'?'Member':'Board'} Consent`
  };
}

export function resolveFields(fieldDefs, a, tax, now=new Date()){
  const B=builtins(a,tax), F={}, P={};
  const pending=new Map(fieldDefs.map(f=>[f.id,f]));
  const resolveOne=f=>{
    const from=f.from;
    if(from.answer!==undefined) return String(a[from.answer]??'');
    if(from.const!==undefined) return from.const;
    if(from.builtin!==undefined) return B[from.builtin];
    if(from.today!==undefined) return longDate(now);
    if(from.todayPlusDays!==undefined) return longDate(plusDays(now,from.todayPlusDays));
    if(from.taxonomy!==undefined){
      const [field,coll,prop]=from.taxonomy;
      const row=(tax[coll]||{})[a[field]];
      return row?String(row[prop]):'';
    }
    if(from.choose!==undefined){
      const c=from.choose;
      const branch = evalExpr(c.if,a,tax,()=>false) ? c.then : c.else;
      return resolveOne({from:branch});
    }
    if(from.template!==undefined){
      if(/\{\{(\w+)\}\}/.test(from.template) && [...from.template.matchAll(/\{\{(\w+)\}\}/g)].some(m=>F[m[1]]===undefined)) return undefined;
      return from.template.replace(/\{\{(\w+)\}\}/g,(m,k)=>F[k]);
    }
    throw new Error('unknown resolver on field '+f.id+': '+JSON.stringify(from));
  };
  /* iterate so template fields can depend on other fields regardless of order */
  for(let pass=0; pass<6 && pending.size; pass++){
    for(const [id,f] of [...pending]){
      const v=resolveOne(f);
      if(v!==undefined){ F[id]=v; P[id]=f.provenance; pending.delete(id); }
    }
  }
  if(pending.size) throw new Error('unresolvable field(s): '+[...pending.keys()].join(', '));
  return {F,P};
}

/* ---- cross-reference aliases (templates/schemas/aliases.json) ---- */
export function resolveXref(target, a, aliases){
  if(!target.startsWith('@')) return target;
  const al=aliases[target.slice(1)];
  if(!al) return null;
  return al.targets[a[al.by]] ?? null;
}

/* ---- clause eligibility ---- */
export function tagOk(list, value){ return list.includes('*')||list.includes(value); }
export function clauseEligible(c, a, tax, ruleOf){
  if(!tagOk(c.entities, a.entity)) return false;
  if(!tagOk(c.industries, a.industry)) return false;
  if(!(c.jurisdictions.includes('*')||c.jurisdictions.includes(a.formState)||c.jurisdictions.includes(a.opState))) return false;
  return evalExpr(c.condition, a, tax, ruleOf);
}
export function docIncluded(d, a, tax, ruleOf){ return evalExpr(d.include, a, tax, ruleOf); }

/* ---- exhaustive configuration space, used by the validator ---- */
export function allConfigs(tax, founderCounts=[1,2,3,4]){
  const out=[];
  for(const entity of Object.keys(tax.entities))
  for(const formState of Object.keys(tax.jurisdictions))
  for(const opState of Object.keys(tax.jurisdictions))
  for(const industry of Object.keys(tax.industries))
  for(const funding of Object.keys(tax.fundingStages))
  for(const founders of founderCounts)
  for(const employees of [true,false])
    out.push({company:'Test Co',entity,formState,opState,founders,
      founderNames:Array.from({length:founders},(_,i)=>`First${i} Last${i}`),
      industry,funding,employees});
  return out;
}
