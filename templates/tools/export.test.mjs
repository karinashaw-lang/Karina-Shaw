/* Export: the document leaving the building.

   Until this existed the engine assembled text into a web page and the user had no way to take
   it anywhere, which made every other feature inert — a template library nobody can get a
   document out of is not a product.

   Two formats, both offline: PDF through the browser's own print-to-PDF, Word as an HTML
   document with the Office namespace declared. Neither needs a dependency, which matters
   because this prototype is one file that runs from file://.

   What is actually asserted here is the pair of properties that matter and are easy to lose:

   THE DISCLAIMER SURVIVES. It lives inside .paper rather than in the page chrome precisely so
   it travels. A print rule or a Word stylesheet that dropped it would silently strip the one
   thing the legal posture rests on, and the user would never see it go.

   THE CHROME DOES NOT. Unverified badges and the withheld banner are the application talking
   to the user, not part of the document. The first version hid them with `display:none` in the
   Word stylesheet — Word honours very little CSS, so the text shipped anyway, sitting in a file
   someone would send to a counterparty. They are now removed from the markup. Do not ask a
   renderer you do not control to keep a secret.
*/
import fs from 'node:fs';

let pass=0, fail=0;
const t=(n,c)=>{ if(c) pass++; else {fail++; console.log('  FAIL  '+n);} };
const html = fs.readFileSync('draft-ai-engine.html','utf8');
const a=html.indexOf('/* BUILD:CORPUS-START'), b=html.indexOf('BUILD:CORPUS-END */');
const code=(html.slice(0,a)+html.slice(b));
/* Comments are stripped for the checks that scan for a symbol's ABSENCE. A comment explaining
   the bug that a check guards against mentions the thing by name, so scanning raw source makes
   the documentation trip the check — which teaches people to delete the documentation. */
const noComments=code.replace(/\/\*[\s\S]*?\*\//g,'').replace(/^\s*\/\/.*$/gm,'');

console.log('both formats exist and are dependency-free');
{
  t('a Word blob is built', /function wordBlob\(/.test(code));
  t('it declares the Office namespace so Word opens it as a document',
     /schemas-microsoft-com:office:word/.test(code));
  t('PDF goes through the browser print path, needing nothing installed',
     /window\.print\(\)/.test(code));
  t('no external library is fetched for either', !/cdn\.|unpkg|jsdelivr|require\(/.test(noComments));
  t('the file is named after the document, not "download"', /function docFilename\(/.test(code));
}

console.log('the disclaimer travels with the document');
{
  t('the footer is inside .paper, so it is part of what gets exported',
     /genfoot/.test(code) && /h\+=`<div class="genfoot">/.test(code));
  t('print keeps it explicitly rather than by accident',
     /#paper \.genfoot\{visibility:visible/.test(code));
  t('the Word stylesheet gives it a rule too', /\.genfoot\{margin-top:22pt/.test(code));
}

console.log('application chrome is removed, not hidden');
{
  t('markup is cloned and stripped before export', /function documentMarkup\(/.test(code));
  t('and the badges are removed from the DOM',
     /querySelectorAll\('\.unver, \.withheld, \.cond, \.wc'\)\.forEach\(n=>n\.remove\(\)\)/.test(code));
  /* The regression this guards: relying on CSS to hide them shipped the text anyway. */
  t('the Word stylesheet no longer pretends to hide them with a rule',
     !/\.cond,\.unver,\.wc,\.withheld\{display:none\}/.test(noComments));
}

console.log('print reveals the document rather than enumerating what to hide');
{
  /* The first attempt listed selectors to hide and named a class no element had, hiding the
     card that contains the document and producing an empty PDF. */
  t('everything is hidden then the document subtree revealed',
     /body \* \{visibility:hidden\}/.test(code) && /#paper, #paper \* \{visibility:visible\}/.test(code));
  t('it does not depend on a class that may not exist', !/paperwrap/.test(noComments));
}

console.log('the recommended format comes from the authored metadata');
{
  t('the export bar reads templateMeta rather than guessing',
     /CORPUS\.templateMeta/.test(code));
  t('and both formats are always offered', /EXPORT_LABEL/.test(code));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
