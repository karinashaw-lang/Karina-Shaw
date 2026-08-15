import {normalize, digest, validateRecord, compare, REQUIRED} from './textstore.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const base=()=>({citation:'Cal. Lab. Code §925', origin:'https://leginfo.legislature.ca.gov/x',
  originKind:'primary-fetch', suppliedBy:'probe', suppliedAt:'2026-08-15',
  sha256:'a'.repeat(64), bytes:5000});

console.log('digest — content addressing');
t('identical bytes hash identically', digest('abc')===digest('abc'));
t('one changed character changes the hash', digest('abc')!==digest('abd'));
t('line endings are normalised', digest('a\r\nb')===digest('a\nb'));
t('trailing whitespace is normalised', digest('a  \nb')===digest('a\nb'));
t('leading whitespace is NOT normalised away', digest('  a')!==digest('a'));
t('digest is 64 hex chars', /^[0-9a-f]{64}$/.test(digest('x')));

console.log('validateRecord — provenance or nothing');
t('a complete record is admitted', validateRecord(base()).length===0);
for(const k of REQUIRED)
  t(`missing ${k} is refused`, validateRecord({...base(), [k]:undefined}).length>0);
t('an unknown originKind is refused', validateRecord({...base(), originKind:'scraped'}).length>0);
t('operator-supplied without attestation is refused',
   validateRecord({...base(), originKind:'operator-supplied'}).some(p=>p.includes('attestation')));
t('operator-supplied with attestation is admitted',
   validateRecord({...base(), originKind:'operator-supplied', attestation:{by:'K. Shaw', from:'Westlaw', on:'2026-08-15'}}).length===0);
t('a short body is refused as an error page', validateRecord({...base(), bytes:80}).some(p=>p.includes('too short')));
t('a bad digest is refused', validateRecord({...base(), sha256:'nope'}).length>0);
t('model-derived text can never be a source text',
   validateRecord({...base(), derivedFromModel:true}).some(p=>p.includes('model-derived')));

console.log('compare — drift detection');
t('same bytes report unchanged', compare(digest('law text'),'law text').status==='unchanged');
t('amended text reports drifted', compare(digest('law text'),'law text amended').status==='drifted');
t('drift explains that pinned assertions are stale', compare(digest('a'),'b').note.includes('stale'));

console.log('no summarisation path exists in the code itself');
const raw = await import('node:fs').then(fs=>fs.readFileSync('templates/tools/textstore.mjs','utf8'));
/* strip comments — the property is that no CODE path summarises, not that the word
   never appears. The prose explaining the property would otherwise fail the test. */
const code = raw.replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
t('code contains no model client',        !/openai|anthropic|claude|gpt/i.test(code));
t('code contains no network call',        !/\bfetch\s*\(|https?:\/\/|axios|request\(/i.test(code));
t('code contains no summarise call',      !/summar|paraphras|paraphrase|paraphrasing/i.test(code));
t('code writes the normalised buffer verbatim',
   /writeFileSync\(path\.join\(TEXT_DIR, sha \+ '\.txt'\), buf\)/.test(code));
/* naive paren matching breaks on nested calls — check whole statements instead */
const writes = code.split('\n').filter(l=>l.includes('writeFileSync'));
t('every write targets either the verbatim buffer or the index',
   writes.length>0 && writes.every(l=>/,\s*buf\s*\)/.test(l) || /INDEX/.test(l)));
t('no write serialises a transformed copy of the text',
   !writes.some(l=>/JSON\.stringify\(\s*buf|toString\(\)/.test(l)));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
