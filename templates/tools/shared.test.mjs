/* The shared clause library.

   A clause used to belong to exactly one document. That produced three separately-worded
   governing-law clauses, two notices clauses and two entire-agreement clauses, with nothing
   keeping any of them in agreement — the failure mode is not that one is wrong, it is that
   fixing one leaves the others untouched and nobody finds out.

   doc "*" means the block is drawn into every document instead. The mechanism that makes one
   body serve fifteen documents is {{thisDocument}}, which resolves from the document being
   rendered rather than from the answer set, so "This Agreement" becomes "This Operating
   Agreement" or "This Mutual Nondisclosure Agreement" as appropriate.

   What is tested here is the wiring, because it broke in a specific and quiet way while being
   built: findGaps() filtered on openDocs.has(c.doc), and "*" is in no document's id set, so
   all eight shared blocks vanished from the one place the spec requires them to appear. The
   validator was green and the page threw no errors. Only searching for a clause by name and
   not finding it surfaced it.
*/
import fs from 'node:fs';
import {loadCorpus} from './corpus.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

const C = loadCorpus();
const shared = C.clauses.filter(c=>c.doc==='*');

console.log('the shared blocks exist and are shaped correctly');
{
  t('there are shared blocks at all', shared.length>0);
  t('every one sits in a group every document carries',
     shared.every(s=>C.documents.every(d=>d.groupOrder.includes(s.group))));
  t('none of them is auto-inserted — the user picks from the library',
     shared.every(s=>s.insertion!=='auto'));
  t('none asserts law; these are negotiated boilerplate',
     shared.every(s=>s.assertsLaw===false));
  console.log(`        ${shared.length} shared block(s): ${shared.map(s=>s.id).join(', ')}`);
}

console.log('the duplicates they replaced are gone');
{
  const SUPERSEDED=['msa_govlaw','nda_govlaw','gov_govlaw','msa_entire','gov_entire',
                    'msa_notices','gov_notices','gov_sever','gov_waiver',
                    'msa_force_majeure','msa_assignment','gov_amend'];
  const still=SUPERSEDED.filter(id=>C.clauses.some(c=>c.id===id));
  t(`no document keeps a private copy (${still.join(', ')||'none do'})`, still.length===0);
  /* The point of the exercise: one concept, one clause. */
  const titles={};
  for(const c of C.clauses) (titles[c.title.toLowerCase()] ||= []).push(c.id);
  for(const name of ['governing law','entire agreement','notices','severability','waiver',
                     'force majeure','assignment','amendment']){
    const n=(titles[name]||[]).length;
    t(`"${name}" is written once, not ${n} times`, n<=1);
  }
}

console.log('nothing references a superseded clause');
{
  const ids=new Set(C.clauses.map(c=>c.id));
  const dangling=[];
  for(const c of C.clauses)
    for(const m of String(c.body).matchAll(/<<xr:(@?\w+)>>/g)){
      const target=m[1].replace('@','');
      if(!ids.has(target) && !C.aliases[target]) dangling.push(`${c.id} -> ${target}`);
    }
  t(`no dangling cross-reference (${dangling.join(', ')||'none'})`, dangling.length===0);
  const risks=C.risks.flatMap(r=>r.absent||[]).filter(id=>!ids.has(id));
  t(`no risk points at a removed clause (${risks.join(', ')||'none'})`, risks.length===0);
}

console.log('a document with its own version is not offered the generic one');
{
  /* The NDA's confidentiality obligations ARE the NDA. Offering the shared Confidentiality
     block on top would put two overlapping provisions in one document and leave which governs
     as a question nobody wanted. A specialisation declares what it stands in for and the
     shared block is withheld from that document. */
  const spec = C.clauses.filter(c=>c.replaces);
  t('some clauses declare a specialisation', spec.length>0);
  t('every replaces target exists',
     spec.every(c=>C.clauses.some(x=>x.id===c.replaces)));
  t('and every target is a shared block, not another document-specific clause',
     spec.every(c=>C.clauses.find(x=>x.id===c.replaces)?.doc==='*'));
  t('nothing declares it replaces itself', spec.every(c=>c.replaces!==c.id));
  /* Why msa_liability_cap was NOT collapsed into the library: four clauses reference it as part
     of a coupled cap-and-carve-out structure, so flattening it would have broken them. It stays
     and declares the specialisation instead. */
  const cap = C.clauses.find(c=>c.id==='msa_liability_cap');
  t('msa_liability_cap survived as a specialisation rather than being flattened',
     cap && cap.replaces==='sh_liability');
  console.log(`        ${spec.length} specialisation(s): ${spec.map(c=>c.id+'→'+c.replaces).join(', ')}`);
}

console.log('the engine draws them into every document');
{
  const html=fs.readFileSync('draft-ai-engine.html','utf8');
  const a=html.indexOf('/* BUILD:CORPUS-START'), b=html.indexOf('BUILD:CORPUS-END */');
  const code=(html.slice(0,a)+html.slice(b)).replace(/\/\*[\s\S]*?\*\//g,'');
  t('there is a single predicate for clause-to-document membership', /const inDoc\s*=/.test(code));
  t('and it accepts the shared wildcard', /c\.doc===docId\s*\|\|\s*c\.doc==='\*'/.test(code));
  /* The bug. findGaps is the clause picker; filtering it on document membership alone hid
     every shared block from the only surface that is required to show them. */
  t('the clause picker considers shared blocks against every open document',
     /\[\.\.\.openDocs\]\.some\(id=>offerable\(c,id\)\)/.test(code));
  t('and suppression is applied through one predicate',
     /const offerable\s*=/.test(code) && /supersededIn/.test(code));
  /* Matched loosely on purpose. In the source this token appears inside a regex literal as
     \{\{thisDocument\}\}, so searching for the literal braces finds nothing — which is how
     this assertion failed while the feature worked. What matters is that the substitution
     reads the document currently being rendered. */
  t('thisDocument is substituted at render time',
     /thisDocument/.test(code) && /pkg\.docs\.find\(\s*x\s*=>\s*x\.id\s*===\s*curDoc\s*\)/.test(code));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
