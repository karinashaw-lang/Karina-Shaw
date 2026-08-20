/* Template metadata, half computed and half authored.

   The Additional Template Details spec asks every template to carry a complexity level, an
   estimated completion time, field and section counts, industry tags, related templates, a
   default export format and a review date. Those are not the same kind of fact and storing
   them the same way is how they go wrong.

   COUNTED FROM THE CORPUS. Field count, section count, optional section count, complexity.
   These describe the data, so the data should produce them. This project has twice caught a
   hand-maintained number that had drifted from what it described — a paragraph claiming three
   clauses were search-corroborated long after the true figure was zero, and a dashboard
   reading "Withheld 79" after nothing was withheld any more. A stored form_fields_count is the
   same bug with a longer fuse.

   AUTHORED. Estimated time, related templates, export format, review frequency, industry tags.
   These are judgements, and one of them is provably not derivable: the spec's own table gives
   the Invoice and the LLC Operating Agreement fifteen fields each, then three-to-five minutes
   and fifteen-to-twenty-five. A five-fold difference at identical field counts means time
   measures how hard the questions are to answer, not how many there are.

   Usage: node templates/tools/metadata.mjs [--json]
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {writeIfChanged, VOLATILE_LINES} from './artifact.mjs';

/* Complexity, calibrated against the documents the spec names rather than the numbers it
   gives.

   The spec offers both: thresholds ("6-10 sections" is Standard) and worked examples ("NDA,
   Independent Contractor, Service Agreement" are Standard). Applied literally the thresholds
   put eleven of seventeen templates in Advanced, including the NDA the spec itself calls
   Standard — because a "section" in the spec is coarser than a clause here. Our NDA is
   thirteen clauses; the spec's is eight sections.

   So the examples are the ground truth and the thresholds are recalibrated to reproduce them.
   metadata.test.mjs asserts that against every document the spec names by complexity, which is
   what stops this quietly drifting back.

   Shared General Provisions blocks are excluded. They are the same eight for every template
   and the user chooses whether to take any of them, so counting them would add a constant to
   every document and tell the reader nothing. */
export function complexityOf({fields, sections}){
  const byField   = fields   >= 14 ? 3 : fields   >= 8 ? 2 : 1;
  const bySection = sections >= 20 ? 3 : sections >= 9 ? 2 : 1;
  return ['simple','standard','advanced'][Math.max(byField,bySection)-1];
}

export function describe(C, meta){
  const fieldsIn = body => [...new Set([...String(body).matchAll(/\{\{([a-zA-Z0-9_.]+)\}\}/g)].map(m=>m[1]))];
  return C.documents.map(d=>{
    const own    = C.clauses.filter(c=>c.doc===d.id);
    const shared = C.clauses.filter(c=>c.doc==='*');
    const all    = [...own, ...shared];
    const fields = new Set();
    for(const c of all) for(const f of fieldsIn(c.body)) if(f!=='thisDocument') fields.add(f);
    const a = (meta.documents||{})[d.id] || {};
    const freq = (meta.reviewFrequencyByPackage||{})[d.package] || {};
    return {
      template_id: d.id,
      name: d.label,
      category: d.package,
      /* --- counted --- */
      form_fields_count: fields.size,
      sections_count: own.length + shared.length,
      optional_sections_count: all.filter(c=>c.insertion!=='auto').length,
      shared_sections_count: shared.length,
      complexity: complexityOf({fields: fields.size, sections: own.length}),
      /* --- authored --- */
      estimated_minutes: a.estimatedMinutes || null,
      default_export_format: a.export || null,
      industry_tags: a.industries || [],
      related_templates: a.next || [],
      review_every_months: freq.months ?? null,
      /* --- state --- */
      is_active: true,
      premium_only: false,
      last_reviewed_date: null,
      version: '1.0.0'
    };
  });
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('metadata.mjs');
if(INVOKED){
  const C = loadCorpus();
  const meta = JSON.parse(fs.readFileSync(path.join(ROOT,'schemas','template-meta.json'),'utf8'));
  const rows = describe(C, meta);

  const missing = rows.filter(r=>!r.estimated_minutes || !r.default_export_format);
  const V = path.join(ROOT,'..','verification');
  fs.mkdirSync(V,{recursive:true});
  writeIfChanged(path.join(V,'template-metadata.json'), JSON.stringify(rows,null,1)+'\n',
                 {linePatterns:VOLATILE_LINES, fsImpl:fs});

  if(process.argv.includes('--json')){ console.log(JSON.stringify(rows,null,1)); process.exit(0); }

  console.log('template                fields  sections  optional  shared  complexity  est.min   export');
  for(const r of rows)
    console.log(
      r.template_id.padEnd(23),
      String(r.form_fields_count).padStart(5),
      String(r.sections_count).padStart(9),
      String(r.optional_sections_count).padStart(9),
      String(r.shared_sections_count).padStart(7),
      String(r.complexity).padStart(11),
      String(r.estimated_minutes? r.estimated_minutes.join('-') : '—').padStart(8),
      String(r.default_export_format||'—').padStart(7));
  const byC = rows.reduce((m,r)=>{m[r.complexity]=(m[r.complexity]||0)+1; return m;},{});
  console.log('\nby complexity:', JSON.stringify(byC));
  if(missing.length) console.log(`${missing.length} template(s) missing authored metadata: ${missing.map(r=>r.template_id).join(', ')}`);
  else console.log('every template has its authored metadata');
  console.log('written to verification/template-metadata.json');
}
