/* Shared evaluation core for the DRAFT template corpus.
   Used by tools/validate.mjs and tools/build.mjs under Node, and inlined
   verbatim into the prototype by the build step (the `export ` keywords are
   stripped on the way in). Keep it dependency-free and side-effect-free. */

export const ANSWER_FIELDS = ['package','company','entity','formState','opState','founders','founderNames',
  'industry','funding','employees','counterparty','role','dealSize','termMonths','autoRenew',
  'engagement','roleTitle','comp','equityGrant','remote','headcount','caCity',
  'tenantName','propertyAddress','monthlyRent','securityDeposit','leaseTerm','petsAllowed','utilitiesIncluded',
  'borrowerName','principalAmount','interestText','repayment','securedLoan',
  'serviceDesc','payText','deadlineText','partnershipPurpose','offerDesc',
  'invoiceNumber','dueText','taxRatePct'];

/* Answers always carry every field, even the ones the current package does not ask
   about, so an expression can never dereference an undefined answer. */
export const BASE_ANSWERS = {
  package:'formation', company:'Test Co', entity:'llc', formState:'DE', opState:'CA',
  founders:1, founderNames:['First Last'], industry:'saas', funding:'boot', employees:false,
  counterparty:'Acme Corporation', role:'provider', dealSize:'mid', termMonths:12, autoRenew:true,
  engagement:'employee', roleTitle:'Senior Engineer', comp:'salary', equityGrant:true, remote:false,
  headcount:1, caCity:'none',
  tenantName:'Riley Chen', propertyAddress:'12 Rose Lane, Apt 4', monthlyRent:'$1,800',
  securityDeposit:'', leaseTerm:'fixed12', petsAllowed:false, utilitiesIncluded:false,
  borrowerName:'Casey Morgan', principalAmount:'$10,000', interestText:'',
  repayment:'installments', securedLoan:false,
  serviceDesc:'brand and website design', payText:'$4,000 — half up front, half on delivery',
  deadlineText:'', partnershipPurpose:'a management consulting practice', offerDesc:'',
  invoiceNumber:'INV-1001', dueText:'Net 30', taxRatePct:''
};

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
    if(from.reference!==undefined){
      const [coll,key]=from.reference;
      return String((tax[coll]||{})[key]??'');
    }
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
    /* Resolved at render time from the document being drawn, not from the answer set. A shared
       General Provisions block is inside whichever template is currently rendering it, so there
       is no single value to compute here. Returned as a sentinel so the field counts as resolved
       and the "unresolvable field(s)" check does not fire on it; the renderer substitutes the
       real title. */
    if(from.renderContext) return '\u0000renderContext:'+from.renderContext;
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

/* ---- configuration space used by the validator ----
   Enumerated in blocks rather than as one cross-product. A formation answer set does
   not vary deal size; headcount and the California locality overlay only change an
   outcome inside California; and crossing all of them at once multiplies the space
   without exercising any rule the blocks do not already reach. The UNREACHABLE checks
   are the guard: if a block under-enumerates, a clause or risk shows up as dead. */
export function allConfigs(tax){
  const out=[];
  const mk=o=>({...BASE_ANSWERS,...o,
    founderNames:Array.from({length:o.founders??BASE_ANSWERS.founders},(_,i)=>`First${i} Last${i}`)});
  const bands  = Object.values(tax.headcountBands).map(b=>b.min);
  const cities = Object.keys(tax.californiaLocalities);
  const J = Object.keys(tax.jurisdictions), I = Object.keys(tax.industries);
  const E = Object.keys(tax.entities),      F = Object.keys(tax.fundingStages);

  /* 1 — formation, full cross-product */
  for(const entity of E) for(const formState of J) for(const opState of J)
  for(const industry of I) for(const funding of F)
  for(const founders of [1,2,4]) for(const employees of [true,false])
    out.push(mk({package:'formation',entity,formState,opState,industry,funding,founders,employees,
                 headcount:5,caCity:'none'}));

  /* 2 — California formation depth: every headcount band against every locality */
  for(const entity of E) for(const formState of ['CA','DE']) for(const industry of I)
  for(const headcount of bands) for(const caCity of cities)
    out.push(mk({package:'formation',entity,formState,opState:'CA',industry,funding:'angel',
                 founders:2,employees:true,headcount,caCity}));

  /* 3 — commercial */
  for(const entity of E) for(const opState of J) for(const industry of I)
  for(const role of Object.keys(tax.contractRoles)) for(const dealSize of Object.keys(tax.dealSizes))
  for(const termMonths of [12,24,36]) for(const autoRenew of [true,false])
    out.push(mk({package:'commercial',entity,opState,formState:opState,industry,role,dealSize,
                 termMonths,autoRenew}));

  /* 4 — hiring, full cross-product */
  for(const entity of E) for(const opState of J) for(const industry of I)
  for(const engagement of ['employee','contractor']) for(const comp of Object.keys(tax.compTypes))
  for(const equityGrant of [true,false]) for(const remote of [true,false])
    out.push(mk({package:'hiring',entity,opState,formState:opState,industry,engagement,comp,
                 equityGrant,remote,headcount:5,caCity:'none'}));

  /* 5 — California hiring depth */
  for(const industry of I) for(const comp of Object.keys(tax.compTypes))
  for(const headcount of bands) for(const caCity of cities)
    out.push(mk({package:'hiring',opState:'CA',formState:'CA',industry,engagement:'employee',
                 comp,equityGrant:true,remote:false,headcount,caCity}));
  for(const industry of I) for(const caCity of cities) for(const remote of [true,false])
    out.push(mk({package:'hiring',opState:'CA',formState:'CA',industry,engagement:'contractor',
                 remote,headcount:5,caCity}));

  /* 6 — tenancy: every lease answer combination (the block is small enough to cross fully) */
  for(const leaseTerm of ['fixed12','fixed6','fixed24','m2m'])
  for(const petsAllowed of [true,false]) for(const utilitiesIncluded of [true,false])
  for(const securityDeposit of ['','$1,800'])
    out.push(mk({package:'property',leaseTerm,petsAllowed,utilitiesIncluded,securityDeposit}));

  /* 7 — loan: every repayment shape against secured/unsecured and interest/none */
  for(const repayment of ['installments','lump','demand'])
  for(const securedLoan of [true,false]) for(const interestText of ['','5% per year'])
    out.push(mk({package:'money',repayment,securedLoan,interestText}));

  /* 7b — proposal: the optional offer description, present and absent, both roles */
  for(const role of Object.keys(tax.contractRoles)) for(const offerDesc of ['','a custom analytics dashboard'])
    out.push(mk({package:'commercial',role,offerDesc}));

  /* 8 — simple agreements: both roles, deadline present and absent */
  for(const role of Object.keys(tax.contractRoles)) for(const deadlineText of ['','October 15, 2026'])
    out.push(mk({package:'agreements',role,deadlineText}));

  /* 9 — partnership: the founders answer drives only the signature block, but enumerate it
     so nothing conditioned on it can go dead unnoticed */
  for(const founders of [2,3,4])
    out.push(mk({package:'partnership',founders}));

  /* 10 — invoice: line items are pure arithmetic, not rule inputs, so the only thing that
     varies clause eligibility is whether an invoice number was given. */
  for(const invoiceNumber of ['INV-1001',''])
    out.push(mk({package:'invoice', invoiceNumber, dueText:'Net 30', taxRatePct:''}));

  return out;
}
