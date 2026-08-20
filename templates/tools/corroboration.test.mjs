/* corroboration.mjs is the evidence standard for the practice-corroborated rung — the one
   added between self-reviewed and counsel-reviewed so there is something between "the
   author looked at it" and "a lawyer looked at it" that is still honest about being neither.
   These checks prove the standard actually rejects the ways it could be faked. */
import {validateCorroboration} from './corroboration.mjs';
import {isReferenceHost, referenceTierOf, REFERENCE_HOSTS} from './reference-sources.mjs';

let pass = 0, fail = 0;
const t = (n, c) => { if (c) pass++; else { fail++; console.log('  FAIL  ' + n); } };

const GOOD = {
  referenceSources: [
    {url: 'https://commonpaper.com/standards/mutual-nda/', fetchedAt: '2026-08-20', note: 'compared confidentiality and exclusions sections'},
    {url: 'https://www.ycombinator.com/documents', fetchedAt: '2026-08-20', note: 'compared standard-form structure and defined terms'},
  ],
  consistencyChecks: ['terminology'],
};

console.log('a well-formed record passes');
{
  t('two sources on distinct listed hosts, both fetched, both noted, terminology run',
    validateCorroboration(GOOD).length === 0);
}

console.log('each way of faking it is rejected');
{
  t('no record at all', validateCorroboration(null).length > 0);
  t('empty object', validateCorroboration({}).length > 0);
  t('one source is not two', validateCorroboration({...GOOD, referenceSources: GOOD.referenceSources.slice(0, 1)}).length > 0);
  t('a url with no fetchedAt is a citation, not a source',
    validateCorroboration({...GOOD, referenceSources: [{url: GOOD.referenceSources[0].url, note: 'looked fine, trust me on the date'}, GOOD.referenceSources[1]]}).length > 0);
  t('a non-ISO date is rejected',
    validateCorroboration({...GOOD, referenceSources: [{...GOOD.referenceSources[0], fetchedAt: 'August 20 2026'}, GOOD.referenceSources[1]]}).length > 0);
  t('a source with no note is rejected — a url alone says nothing about what it showed',
    validateCorroboration({...GOOD, referenceSources: [{url: GOOD.referenceSources[0].url, fetchedAt: '2026-08-20'}, GOOD.referenceSources[1]]}).length > 0);
  t('an unlisted host is not evidence of market practice',
    validateCorroboration({...GOOD, referenceSources: [{url: 'https://some-random-blog.example/nda-tips', fetchedAt: '2026-08-20', note: 'a blog post about NDAs, seemed reasonable'}, GOOD.referenceSources[1]]}).length > 0);
  t('two sources on the SAME host is one source wearing a trench coat',
    validateCorroboration({...GOOD, referenceSources: [GOOD.referenceSources[0], {url: 'https://commonpaper.com/standards/mnda-v2/', fetchedAt: '2026-08-20', note: 'a second page on the same site'}]}).length > 0);
  t('missing the terminology check entirely',
    validateCorroboration({...GOOD, consistencyChecks: []}).length > 0);
  t('consistencyChecks present but not naming terminology',
    validateCorroboration({...GOOD, consistencyChecks: ['spellcheck']}).length > 0);
}

console.log('the reference-host registry does what it says');
{
  t('a listed host is recognized', isReferenceHost('https://commonpaper.com/standards/mutual-nda/'));
  t('a subdomain of a listed host is recognized', isReferenceHost('https://www.sba.gov/some/page'));
  t('an unlisted host is not', !isReferenceHost('https://example.com/'));
  t('a law-firm-style host is not on the list', !isReferenceHost('https://somebiglawfirm.example/insights/nda-guide'));
  t('every registered host reports a tier', Object.keys(REFERENCE_HOSTS).every(h => referenceTierOf(`https://${h}/`)));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
