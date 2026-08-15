import {mayFetch, hostKindOf} from './ingest.mjs';
let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

console.log('mayFetch — a mirror is not a source text');
t('a primary host is allowed',       mayFetch('https://leginfo.legislature.ca.gov/x').allowed===true);
t('a statute mirror is refused',     mayFetch('https://law.justia.com/x').allowed===false);
t('findlaw is refused',              mayFetch('https://codes.findlaw.com/x').allowed===false);
t('an agency page is refused as source text', mayFetch('https://www.dir.ca.gov/x').allowed===false);
t('an unknown host is refused',      mayFetch('https://random.example/x').allowed===false);
t('github is refused',               mayFetch('https://raw.githubusercontent.com/x/y').allowed===false);
t('a malformed url is refused',      mayFetch('not a url').allowed===false);
t('refusal explains the host kind',  mayFetch('https://law.justia.com/x').why.includes('statute-mirror'));
t('hostKindOf resolves a known host', hostKindOf('https://www.ecfr.gov/a')==='primary');
t('hostKindOf is unknown for a stranger', hostKindOf('https://nowhere.example/a')==='unknown');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
