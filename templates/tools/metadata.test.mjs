/* Template metadata: what is counted, what is judged, and the line between them.

   The spec asks each template to carry a complexity level, an estimated time, field and
   section counts, industry tags, related templates, an export format and a review cadence.
   Those are two different kinds of fact and the whole point of this module is not to store
   them the same way.

   Counts describe the corpus, so the corpus produces them. This project has twice caught a
   hand-maintained number that had drifted from the thing it described — prose claiming three
   clauses were search-corroborated when the figure was zero, and a dashboard reading
   "Withheld 79" after nothing was withheld. A stored form_fields_count is that bug with a
   longer fuse, so the test below asserts those fields are absent from the authored file.

   Judgement cannot be counted, and one case proves it rather than asserting it: the spec gives
   the Invoice and the LLC Operating Agreement fifteen form fields each, then three-to-five
   minutes and fifteen-to-twenty-five. No function of field count produces a five-fold gap.
*/
import fs from 'node:fs';
import {loadCorpus} from './corpus.mjs';
import {describe, complexityOf} from './metadata.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

const C = loadCorpus();
const meta = JSON.parse(fs.readFileSync('templates/schemas/template-meta.json','utf8'));
const rows = describe(C, meta);
const by = Object.fromEntries(rows.map(r=>[r.template_id,r]));

console.log('complexity reproduces the documents the spec names');
{
  /* The spec gives thresholds AND examples. Applied literally the thresholds put eleven of
     seventeen templates in Advanced including the NDA, which the spec itself lists as
     Standard — a "section" there is coarser than a clause here. The examples win, and these
     are the ones naming a document this corpus actually has. */
  const SPEC = {
    nda:                  'standard',   // spec: Standard — "NDA"
    'contractor-agreement':'standard',  // spec: Standard — "Independent Contractor"
    msa:                  'advanced',   // spec: Advanced — "Master Service Agreement"
    governance:           'advanced',   // spec: Advanced — "LLC Operating Agreement"
  };
  for(const [id,want] of Object.entries(SPEC))
    t(`${id} is ${want} as the spec lists it (got ${by[id]?.complexity})`, by[id]?.complexity===want);
  t('the thresholds do not collapse everything into one band',
     new Set(rows.map(r=>r.complexity)).size >= 3);
}

console.log('counts come from the corpus, not from the authored file');
{
  const DERIVED=['form_fields_count','sections_count','optional_sections_count','complexity'];
  const authored=JSON.stringify(meta.documents);
  for(const k of DERIVED)
    t(`${k} is not stored in template-meta.json`, !authored.includes(k));
  t('every template gets a field count', rows.every(r=>Number.isInteger(r.form_fields_count)));
  t('every template gets a section count', rows.every(r=>r.sections_count>0));
  /* Shared blocks are the same eight everywhere; if they were counted into complexity they
     would add a constant to every row and distinguish nothing. */
  t('shared blocks are counted separately',
     rows.every(r=>r.shared_sections_count===C.clauses.filter(c=>c.doc==='*').length));
}

console.log('judgement is authored, and is present for every template');
{
  t('every template has an estimated time', rows.every(r=>Array.isArray(r.estimated_minutes)));
  t('every template has an export format', rows.every(r=>r.default_export_format));
  t('every template has a review cadence', rows.every(r=>Number.isInteger(r.review_every_months)));
  t('related templates all name a real document',
     rows.every(r=>r.related_templates.every(id=>by[id])));
  t('nothing suggests itself as a related template',
     rows.every(r=>!r.related_templates.includes(r.template_id)));
}

console.log('the spec is right that time is not a function of field count');
{
  /* Not a check on our data — a check that the reasoning behind authoring it still holds. */
  const invoice = {fields:15, minutes:[3,5]}, llc = {fields:15, minutes:[15,25]};
  t('identical field counts, five-fold difference in stated time',
     invoice.fields===llc.fields && llc.minutes[0] >= invoice.minutes[1]*3);
  t('complexityOf is a pure function of its inputs',
     complexityOf({fields:6,sections:13})===complexityOf({fields:6,sections:13}));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
