/* Platform features: the document store, home screen, onboarding, and export additions
   from the General Platform Features spec (Aug 2026) — the subset a single offline file
   can honestly deliver.

   What is asserted here is the set of properties that are easy to lose silently:

   SAVED MEANS SAVED HERE. Everything persists to this browser's localStorage and the UI
   says so. There is no server, so no copy of the page may claim or imply cloud storage,
   sync, or sharing.

   TRASH IS A PROMISE WITH A NUMBER. "Recover within 30 days" is only true if the purge
   window is 30 days and purging actually happens. Both are pinned.

   MODIFIED MEANS MODIFIED. Auto-save fires on a timer, but it must be guarded by a
   change check, or every timestamp on the home screen degrades into "10 seconds ago"
   and sorting by modified date becomes noise.

   NOTHING INVENTED. The spec's marketing section asks for "Trusted by 10,000+" social
   proof and testimonials with names and photos. There are no users and no testimonials,
   so none of that may appear anywhere in the page. Same rule as benchmarks and signoffs:
   data this project does not have does not get written down.

   These checks run on the page source, not in a browser. The behavioral half (clicks,
   reloads, downloads, key events) lives in a Playwright drive that must pass before the
   feature ships; the checks here are the regression tripwires for the properties above. */
import fs from 'node:fs';

let pass = 0, fail = 0;
const t = (n, c) => { if (c) pass++; else { fail++; console.log('  FAIL  ' + n); } };
const html = fs.readFileSync('draft-ai-engine.html', 'utf8');
const a = html.indexOf('/* BUILD:CORPUS-START'), b = html.indexOf('BUILD:CORPUS-END */');
const code = html.slice(0, a) + html.slice(b);
const noComments = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

console.log('the document store keeps its promises');
{
  t('documents persist under a versioned key', /STORE_KEY\s*=\s*'draft\.documents\.v1'/.test(code));
  t('the trash window is 30 days, matching the copy shown to the user',
    /TRASH_DAYS\s*=\s*30\b/.test(code) && /removed permanently after \$\{TRASH_DAYS\} days/.test(code));
  t('expired trash is purged on load, not merely hidden',
    /s\.docs\s*=\s*s\.docs\.filter\(d\s*=>\s*!\(d\.deletedAt\s*&&\s*d\.deletedAt\s*<\s*cutoff\)\)/.test(code));
  t('saving without a generated package is a no-op, not a crash or an empty record',
    /function saveCurrent\(\)\{\s*\n?\s*if\(!STATE\.pkg\) return null;/.test(code));
  t('a failed localStorage write cannot take the session down',
    /try\s*\{\s*localStorage\.setItem\(STORE_KEY/.test(code));
  t('renamed titles are trimmed and length-capped', /clean\.slice\(0,120\)/.test(code));
  t('a duplicate is visibly a duplicate', /\+ ' \(copy\)'/.test(code));
  t('trashing the open document detaches the working session from it',
    /if\(STATE\.saveId === id\) STATE\.saveId = null;/.test(code));
}

console.log('auto-save is honest about time');
{
  t('the interval is the spec’s 10 seconds', /AUTOSAVE_MS\s*=\s*10000\b/.test(code) &&
    /setInterval\([\s\S]{0,200}?,\s*AUTOSAVE_MS\)/.test(code));
  t('a save only happens when the snapshot changed, so "modified" stays meaningful',
    /snap && snap !== LAST_SAVED_SNAP/.test(code));
  t('Ctrl+S / Cmd+S saves and suppresses the browser dialog',
    /\(e\.ctrlKey\|\|e\.metaKey\) && e\.key\.toLowerCase\(\)==='s'/.test(code) &&
    /e\.preventDefault\(\);\s*\n?\s*if\(STATE\.pkg\) saveCurrent\(\)/.test(code));
  t('the save badge shows a time, not just a checkmark', /'Saved ' \+ new Date\(ts\)\.toLocaleTimeString/.test(code));
}

console.log('the home screen says where documents actually live');
{
  t('there is a home tab and it is the default view',
    /class="tab active" data-v="home"/.test(code) && /view active" id="view-home"/.test(code));
  t('the recents header discloses browser-only storage', /saved in this browser only/.test(code));
  t('status tags are exactly the spec’s five',
    /DOC_STATUSES\s*=\s*\['Draft','In Progress','Review','Final','Archived'\]/.test(code));
  t('empty state invites rather than scolds', /Create your first document in about 3 minutes/.test(code));
  t('home search no-results suggests retries and says what is searched',
    /We couldn’t find that\. Try/.test(code) && /searches document names and template types/.test(code));
  t('user-typed names cannot break out of an attribute — esc covers double quotes',
    /\{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'\}/.test(code));
}

console.log('onboarding is an offer, not a gate');
{
  t('the welcome question is the spec’s', /What brings you to DRAFT\?/.test(code));
  t('a skip path exists in the spec’s words', /ll browse on my own/.test(code));
  t('dismissal is remembered', /localStorage\.setItem\(WELCOME_KEY,'1'\)/.test(code));
  t('the welcome never fires over existing documents', /if\(!seen && !liveDocs\(\)\.length\) showWelcome\(\)/.test(code));
  t('it can be revisited from help', /id="reWelcome"/.test(code) && /\$\('#reWelcome'\)\.onclick/.test(code));
  t('every choice maps to a real package', (() => {
    const pkgs = [...code.matchAll(/\{ pkg:'(\w+)',/g)].map(m => m[1]);
    return pkgs.length === 3 && pkgs.every(p => ['formation', 'commercial', 'hiring'].includes(p));
  })());
}

console.log('the wizard progress counter counts what the user can see');
{
  t('progress is phrased as the spec phrases it', /of \$\{total\} questions completed/.test(code));
  t('only currently visible questions are counted',
    /function answeredCount\(\)\{\s*\n?\s*const qs=visibleQuestions\(\)/.test(code));
  t('founder names gate their question’s completion',
    /ok = ok && A\.founderNames\.slice\(0,A\.founders\)\.every/.test(code));
}

console.log('HTML export follows the same rules as Word export');
{
  t('an HTML blob is built with the right type', /function htmlBlob\(/.test(code) && /\{type:'text\/html'\}/.test(code));
  t('it goes through documentMarkup, so app chrome is stripped from the markup',
    /htmlBlob\(documentMarkup\(paper\), d\.title\)/.test(code));
  t('the disclaimer footer is styled in the export, meaning it is expected to be there',
    /htmlBlob[\s\S]{0,900}\.genfoot\{/.test(code));
  t('the file is named after the document', /docFilename\(d,'html'\)/.test(code));
}

console.log('nothing the project does not have is written down');
{
  t('no invented social proof anywhere in the page', !/Trusted by [\d,]+/i.test(noComments) && !/testimonial/i.test(noComments));
  t('no invented user counts or streak flattery shipped without data',
    !/10,000\+/.test(noComments) && !/weeks in a row/.test(noComments));
  t('no cloud language for a localStorage store', !/synced|cloud storage|backed up/i.test(noComments));
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
