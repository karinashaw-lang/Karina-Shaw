/* Regression test for the Client/Customer defect and the checker that now guards against it.
   See terminology.mjs for the full story. */
import {loadCorpus} from './corpus.mjs';
import {checkTerminology, expectedTerms, quotedTerms, GENERIC_TERMS} from './terminology.mjs';

let pass = 0, fail = 0;
const t = (n, c) => { if (c) pass++; else { fail++; console.log('  FAIL  ' + n); } };
const C = loadCorpus();

console.log('the corpus as it stands today is internally consistent');
{
  const findings = checkTerminology(C);
  t('zero stray party-role terms across the whole corpus', findings.length === 0);
  if (findings.length) for (const f of findings)
    console.log(`    ${f.doc} / ${f.clause}: uses "${f.term}", expected one of ${f.expected.join(', ')}`);
}

console.log('quotedTerms extraction');
{
  t('pulls a single quoted term', JSON.stringify(quotedTerms('the “Customer” will pay')) === JSON.stringify(['Customer']));
  t('pulls multiple terms in order', JSON.stringify(quotedTerms('“Provider” and “Customer” agree')) === JSON.stringify(['Provider', 'Customer']));
  t('ignores lowercase-led quoted phrases', quotedTerms('a “reasonable” effort').length === 0);
  t('empty body yields nothing', quotedTerms('').length === 0 && quotedTerms(undefined).length === 0);
}

console.log('expectedTerms per package');
{
  const svc = C.documents.find(d => d.id === 'svc');
  const et = expectedTerms(svc, C.taxonomy, C.partyRoles);
  t('commercial/agreements terms come from taxonomy.contractRoles', et.has('Provider') && et.has('Customer'));

  const lease = C.documents.find(d => d.id === 'lease');
  t('lease terms come from party-roles.json', expectedTerms(lease, C.taxonomy, C.partyRoles).has('Tenant'));

  const formation = C.documents.find(d => d.package === 'formation');
  t('formation has no data to check against and is skipped, not silently passed as empty',
    expectedTerms(formation, C.taxonomy, C.partyRoles) === null);

  const hiring = C.documents.find(d => d.package === 'hiring');
  t('hiring has no data to check against either', expectedTerms(hiring, C.taxonomy, C.partyRoles) === null);
}

console.log('the ignore list cannot swallow a real bug');
{
  t('no generic term is also a real party-role term for any package',
    C.partyRoles.every(r => (r.acceptableTerms || []).every(term => !GENERIC_TERMS.has(term))));
  const commercialTerms = new Set();
  for (const r of Object.values(C.taxonomy.contractRoles)) { commercialTerms.add(r.self); commercialTerms.add(r.counter); }
  t('no generic term collides with a commercial/agreements role term',
    [...commercialTerms].every(term => !GENERIC_TERMS.has(term)));
}

console.log('the checker actually catches the defect it was built for');
{
  /* Reproduce the real bug in memory — never touch the file on disk — and confirm the
     checker flags it, then confirm the untouched corpus still passes clean. */
  const svcClause = C.clauses.find(c => c.id === 'svc_parties_provider');
  const originalBody = svcClause.body;
  svcClause.body = originalBody.replace(/\bCustomer\b/g, 'Client');
  const findings = checkTerminology(C);
  svcClause.body = originalBody;   /* restore before any other assertion runs */

  t('reintroducing "Client" is caught', findings.some(f => f.doc === 'svc' && f.term === 'Client'));
  t('the finding names what the signature block would actually call them',
    findings.find(f => f.term === 'Client')?.expected.includes('Customer'));
  t('the corpus is clean again once the in-memory mutation is reverted', checkTerminology(C).length === 0);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
