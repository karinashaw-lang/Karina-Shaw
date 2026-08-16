import {mayFetch, hostKindOf} from './ingest.mjs';
import {isPrimary} from './sources.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

console.log('mayFetch — a mirror is not a source text');
t('the publisher of the text is allowed', mayFetch('https://leginfo.legislature.ca.gov/x').allowed===true);
t('a statute mirror is refused',     mayFetch('https://law.justia.com/x').allowed===false);
t('findlaw is refused',              mayFetch('https://codes.findlaw.com/x').allowed===false);
t('an agency page is refused as source text', mayFetch('https://www.dir.ca.gov/x').allowed===false);
t('an unknown host is refused',      mayFetch('https://random.example/x').allowed===false);
t('github is refused',               mayFetch('https://raw.githubusercontent.com/x/y').allowed===false);
t('a malformed url is refused',      mayFetch('not a url').allowed===false);
t('refusal explains the host kind',  mayFetch('https://law.justia.com/x').why.includes('mirror'));
t('hostKindOf resolves a known host', hostKindOf('https://www.ecfr.gov/a')==='publisher');
/* An agency is primary for corroboration and still not a source TEXT — the two questions
   are different and the code must not collapse them. */
t('an agency counts as primary for corroboration', isPrimary('https://edd.ca.gov/x')===true);
t('but is refused as a source text',               mayFetch('https://edd.ca.gov/x').allowed===false);
/* A stranger is classified secondary, not "unknown": an unclassified host is one nobody
   has vouched for, and the safe reading of that is the lowest tier, never a special case
   that some later branch might treat as permissive. */
t('hostKindOf calls a stranger secondary', hostKindOf('https://random.example/a')==='secondary');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
