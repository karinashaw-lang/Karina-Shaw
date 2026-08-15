/* Tests for source-document integrity.

   Every fixture here is synthetic. None of it is law, none of it is quoted from a
   source, and none of it is a paraphrase of one — the checks are structural, so a
   document with the *shape* of a statutory section exercises them exactly as a real
   one would, and inventing statutory prose to test with would be the very thing the
   rest of this project refuses to do.

   Each defective fixture is CLEAN with exactly one property broken, so a failing
   test names the property and nothing else. The most important assertion in the file
   is the first one: CLEAN passes every check. A detector that fires on a good
   document is worse than no detector, because it teaches people to waive.
*/
import {inspect, admissible, validateWaiver, citedSections, subdivisionMarkers,
        subdivisionGaps, headingSections, lastSubstantiveLine, renderReport, CHECKS}
  from './docdefects.mjs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };

const CITE='Test Code §4200';
const CLEAN=`4200. Synthetic provision used only to exercise the integrity checks.

(a) This document is not law. It exists so that the checks in the integrity module can
be run against a document that has the structure of a statutory section, without any
invented statutory language being written down anywhere.

(b) Each defective fixture in the test file is this document with exactly one property
broken, so that a failing check names the property and nothing else about it.

(c) Structure is all these checks look at, so a document with the shape of a provision
is enough to exercise every one of them end to end.

(Added by Stats. 2026, Ch. 1, Sec. 1.)
`;

/* helper: which check ids fired, at any severity */
const fired = (text, cite=CITE) => {
  const r=inspect(text,{citation:cite});
  return [...r.fatal, ...r.serious].map(f=>f.id);
};
const firedOnly = (id, text, cite=CITE) => {
  const f=fired(text,cite);
  return f.length===1 && f[0]===id;
};

console.log('the clean fixture is clean');
{
  const r=inspect(CLEAN,{citation:CITE});
  t('a well-formed document raises no findings at all', r.ok);
  if(!r.ok) console.log('        unexpected: '+JSON.stringify([...r.fatal,...r.serious].map(f=>[f.id,f.detail])));
  t('and it is admissible with no waivers', admissible(r,{}).ok);
  t('every check either passed or was recorded inapplicable',
     r.passed.length + r.inapplicable.length === CHECKS.length);
}

console.log('check catalogue');
{
  const ids=CHECKS.map(c=>c.id);
  t('check ids are unique', new Set(ids).size===ids.length);
  t('every check declares a severity of fatal or serious',
     CHECKS.every(c=>['fatal','serious'].includes(c.severity)));
  t('every check explains why it matters', CHECKS.every(c=>c.why && c.why.length>20));
  t('every check has a title', CHECKS.every(c=>c.title));
}

console.log('citedSections — what provision does this claim to be');
t('a single section is found', citedSections('Cal. Lab. Code §925').join()==='925');
t('a range yields both ends', citedSections('Cal. Lab. Code §§1400–1408').join()==='1400,1408');
t('a decimal section survives', citedSections('Cal. Corp. Code §17701.13').join()==='17701.13');
t('a subdivision is stripped from the section number', citedSections('26 U.S.C. §83(b)').join()==='83');
t('the word Section is understood', citedSections('Labor Code Section 2870').join()==='2870');
t('a citation with no section number yields none', citedSections('IWC Wage Order 4-2001').length===0);

console.log('fatal — the document is not a statutory text');
{
  t('an empty document is fatal', inspect('',{citation:CITE}).fatal.some(f=>f.id==='empty'));
  t('a stub is fatal', fired('4200. See section 4201.').includes('too-short'));
  const err='Error 404 — Page Not Found\n\nThe page you requested could not be found on this server. '+
            'Please check the address and try again, or return to the home page for more options here.\n';
  t('a 404 page is fatal', inspect(err,{citation:CITE}).fatal.some(f=>f.id==='error-page'));
  t('a paywall is fatal',
     inspect(CLEAN.replace('(a) This','Sign in to continue reading this document. (a) This'),{citation:CITE})
       .fatal.some(f=>f.id==='error-page'));
  t('a JavaScript interstitial is fatal',
     inspect(CLEAN+'\nPlease enable JavaScript to view this content.\n',{citation:CITE})
       .fatal.some(f=>f.id==='error-page'));
  t('an HTML page is fatal',
     inspect('<!DOCTYPE html>\n'+CLEAN,{citation:CITE}).fatal.some(f=>f.id==='markup'));
  t('a tag soup body is fatal',
     inspect(CLEAN.replace(/\n\n/g,'</p>\n<p>'),{citation:CITE}).fatal.some(f=>f.id==='markup'));
  t('undecoded entities are fatal',
     inspect(CLEAN+'\n'+'&nbsp;'.repeat(12)+'\n',{citation:CITE}).fatal.some(f=>f.id==='markup'));
  t('replacement characters are fatal',
     inspect(CLEAN.replace('Structure','Str\ufffdcture'),{citation:CITE}).fatal.some(f=>f.id==='encoding'));
  t('a NUL byte is fatal',
     inspect(CLEAN+'\u0000',{citation:CITE}).fatal.some(f=>f.id==='encoding'));
  t('mojibake is fatal',
     inspect(CLEAN+'\u00c3\u00a9 \u00c3\u00a8 \u00e2\u0080\u0099',{citation:CITE})
       .fatal.some(f=>f.id==='encoding'));
  t('control characters are fatal',
     inspect(CLEAN+'\u0007\u0007',{citation:CITE}).fatal.some(f=>f.id==='encoding'));
}

console.log('serious — the document may be real but the pin would be unsafe');
{
  t('the cited section being absent is caught, and nothing else fires',
     firedOnly('citation-absent', CLEAN, 'Test Code §9999'));
  t('half a cited range being absent is caught',
     fired(CLEAN,'Test Code §§4200–4208').includes('citation-absent'));

  const cut=CLEAN.replace(/\(c\)[\s\S]*$/,'(c) Structure is all these checks look at, so a document that\n');
  t('a document that stops mid-sentence is caught', fired(cut).includes('truncated'));
  t('a document ending on a dash is caught',
     fired(CLEAN.trimEnd()+'\nand the remainder is —\n').includes('truncated'));
  t('unbalanced parentheses are caught',
     fired(CLEAN.replace('(Added','((((Added')).includes('truncated'));

  t('a skipped subdivision is caught, and nothing else fires',
     firedOnly('subdivision-gap', CLEAN.replace('(c) Structure','(d) Structure')));
  t('the gap names the missing letter',
     inspect(CLEAN.replace('(c) Structure','(d) Structure'),{citation:CITE})
       .serious.find(f=>f.id==='subdivision-gap').detail.includes('(c)'));
  t('out-of-order subdivisions are caught, and nothing else fires',
     firedOnly('subdivision-disorder', CLEAN.replace('(c) Structure','(b) Structure')));

  const dupPara='(b) Each defective fixture in the test file is this document with exactly one property\nbroken, so that a failing check names the property and nothing else about it.';
  t('a repeated passage is caught',
     fired(CLEAN.replace(dupPara, dupPara+'\n\n'+dupPara)).includes('duplicated-block'));

  const chapter=CLEAN+'\n4201. Another heading.\n\n4202. Another heading.\n\n4203. Another heading.\n\n4204. Another heading.\n';
  t('a chapter dump is caught', fired(chapter).includes('scope-overrun'));
  t('a couple of stray headings are tolerated',
     !fired(CLEAN+'\n4201. Another heading.\n\n4202. Another heading.\n').includes('scope-overrun'));

  t('a document with no version marker is caught, and nothing else fires',
     firedOnly('no-version-marker', CLEAN.replace('(Added by Stats. 2026, Ch. 1, Sec. 1.)','End of provision.')));
  t('an effective date counts as a version marker',
     !fired(CLEAN.replace('(Added by Stats. 2026, Ch. 1, Sec. 1.)','Effective January 1, 2026.')).includes('no-version-marker'));
  t('an as-of date counts as a version marker',
     !fired(CLEAN.replace('(Added by Stats. 2026, Ch. 1, Sec. 1.)','Current as of March 3, 2026.')).includes('no-version-marker'));

  t('extraction junk is caught',
     fired(CLEAN+'\n'+'░▒▓■□'.repeat(40)+'\n').includes('character-noise'));
}

console.log('helpers');
t('subdivision markers are read in order', subdivisionMarkers(CLEAN).join('')==='abc');
t('an inline (s) in prose is not a subdivision',
   subdivisionMarkers('the employer(s) shall\n(a) do a thing\n').join('')==='a');
t('a nested restart at (a) is not disorder', subdivisionGaps(['a','b','a','b','c']).disorder.length===0);
t('a nested restart at (a) is not a gap', subdivisionGaps(['a','b','a','b','c']).gaps.length===0);
t('a genuine skip is a gap', subdivisionGaps(['a','b','d']).gaps.join('')==='c');
t('a letter used later is not a gap', subdivisionGaps(['a','c','b']).gaps.length===0);
t('but going backwards to a non-a letter is disorder', subdivisionGaps(['a','c','b']).disorder.length===1);
t('headings are read from line starts only', headingSections(CLEAN).join()==='4200');
t('a cross-reference in prose is not a heading',
   headingSections('as provided in 4201. and elsewhere\n').length===0);
t('the last substantive line ignores trailing blank lines',
   lastSubstantiveLine('a\nb\n\n\n')==='b');

console.log('waivers — a person, not a flag');
{
  const r=inspect(CLEAN,{citation:'Test Code §9999'});   // one serious finding
  t('an unwaived serious finding blocks', !admissible(r,{}).ok);
  t('a waiver naming a person and a reason admits it',
     admissible(r,{'citation-absent':{by:'K. Shaw', because:'section number appears only in the running header of the printed volume'}}).ok);
  t('a waiver with no name is refused',
     !admissible(r,{'citation-absent':{because:'because I said so, at some length'}}).ok);
  t('a waiver with a token reason is refused',
     !admissible(r,{'citation-absent':{by:'K. Shaw', because:'fine'}}).ok);
  t('the refusal says what was wrong with the waiver',
     admissible(r,{'citation-absent':{by:'K. Shaw', because:'fine'}}).badWaivers.length===1);
  t('an admitted waiver is recorded against the finding',
     admissible(r,{'citation-absent':{by:'K. Shaw', because:'section number appears only in the running header'}})
       .waived[0].waiver.by==='K. Shaw');

  const bad=inspect('<!DOCTYPE html>\n'+CLEAN,{citation:CITE});
  t('a fatal finding cannot be waived',
     !admissible(bad,{markup:{by:'K. Shaw', because:'I am confident this one is fine really'}}).ok);
  t('and the attempt is reported as a bad waiver',
     admissible(bad,{markup:{by:'K. Shaw', because:'I am confident this one is fine really'}})
       .badWaivers.some(b=>b.id==='markup'));
  t('waiving a check that does not exist is refused',
     !admissible(r,{'no-such-check':{by:'K. Shaw', because:'a reason of sufficient length'}}).ok);
  t('validateWaiver rejects a non-object', validateWaiver(null).length>0);
}

console.log('reporting');
{
  const r=inspect('<!DOCTYPE html>\n'+CLEAN,{citation:'Test Code §9999'});
  const s=renderReport(r);
  t('the report names each finding', s.includes('markup') && s.includes('citation-absent'));
  t('the report shows severity', s.includes('FATAL'));
}

console.log('no network or model path exists in the checks');
{
  const raw=await import('node:fs').then(fs=>fs.readFileSync('templates/tools/docdefects.mjs','utf8'));
  const code=raw.replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');
  t('no fetch', !/\bfetch\s*\(/.test(code));
  t('no model client', !/openai|anthropic|claude|gpt/i.test(code));
  t('no filesystem access', !/require\(|from\s*'node:fs'|readFileSync|writeFileSync/.test(code));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
