/* Source-document integrity — defects in the source text itself.

   The store already proves a text is verbatim, content-addressed, and attributed.
   None of that says the text is any good. A hash over a 404 page is a perfectly
   sound hash over a 404 page. A text that stops mid-subdivision hashes fine, pins
   fine, and quietly authorises a clause that omits the half that was cut off —
   which is exactly the failure mode the corpus review found dominates: omission.

   So this file asks a different question from textstore.mjs. Not "where did this
   come from" but "is this a whole, clean, correct copy of the provision it claims
   to be". A source document with a defect in it is worse than no source document,
   because it looks like verification.

   Two severities:

     fatal    — the file is not a statutory text at all (error page, markup dump,
                mangled encoding). Never storable, never waivable. There is no
                circumstance in which storing one is right.

     serious  — the file may be a real text but shows a defect that would make a
                pin unsafe (truncation, a skipped subdivision, the cited section
                absent, no version marker). Blocks by default. May be waived only
                by a named person with a stated reason, which is recorded in the
                text's record and travels with it forever.

   Every check is a pure function of (text, context). No network, no model, no
   heuristic that depends on knowing what the law says — these are all structural
   properties of the document, checkable by anyone, reproducible by anyone.

   What this cannot do: it cannot tell you the text is the *current* version, or
   that the copy is faithful to the official one. Those need the source itself.
   compare() in textstore.mjs covers drift once you hold both.
*/

/* ---------- citation parsing ---------- */

/* Pull the section identifiers out of a citation string. Used to check that the
   document actually contains the provision it is filed under. Returns [] when the
   citation has no section number (wage orders, regulations cited by title), in
   which case the citation check is recorded as inapplicable rather than passed. */
export function citedSections(citation=''){
  const out=[];
  /* §925, §§1400-1408, § 17701.13, Section 2870 */
  const re=/(?:§§?\s*|[Ss]ections?\s+)([0-9]+(?:\.[0-9]+)*(?:\([a-z0-9]+\))*)(?:\s*[-–—]\s*([0-9]+(?:\.[0-9]+)*))?/g;
  let m;
  while((m=re.exec(citation))){
    out.push(m[1].replace(/\(.*$/,''));
    if(m[2]) out.push(m[2]);
  }
  /* "26 U.S.C. 83" style, where the section symbol was dropped */
  if(!out.length){
    const m2=/\b\d+\s+[A-Z][^\d]*?\s(\d+(?:\.\d+)*)\b/.exec(citation);
    if(m2) out.push(m2[1]);
  }
  return [...new Set(out)];
}

/* ---------- structural helpers ---------- */

const NL = t => String(t).replace(/\r\n/g,'\n');

export function lines(text){ return NL(text).split('\n'); }

/* Top-level lettered subdivision markers, in document order. Only line-initial
   markers count — nested markers appear inline or indented, and an inline "(s)"
   inside prose would otherwise read as a subdivision. */
export function subdivisionMarkers(text){
  const out=[];
  for(const l of lines(text)){
    const m=/^\s{0,4}\(([a-z])\)/.exec(l);
    if(m) out.push(m[1]);
  }
  return out;
}

/* A gap is a letter that is skipped and appears nowhere else in the sequence.
   A decrease back to (a) is a nested block restarting and is not a defect; a
   decrease to anything else is disorder. This deliberately under-reports gaps
   inside nested blocks rather than over-report on legitimate nesting. */
export function subdivisionGaps(markers){
  const seen=new Set(markers);
  const gaps=[], disorder=[];
  for(let i=1;i<markers.length;i++){
    const prev=markers[i-1].charCodeAt(0), cur=markers[i].charCodeAt(0);
    if(cur===prev+1) continue;
    if(cur<=prev){ if(markers[i]!=='a') disorder.push(`(${markers[i-1]}) is followed by (${markers[i]})`); continue; }
    for(let c=prev+1;c<cur;c++){
      const ch=String.fromCharCode(c);
      if(!seen.has(ch)) gaps.push(ch);
    }
  }
  return {gaps:[...new Set(gaps)], disorder};
}

export function paragraphs(text){
  return NL(text).split(/\n\s*\n/).map(p=>p.replace(/\s+/g,' ').trim()).filter(Boolean);
}

const TERMINAL = /[.;:!?)"'”’\]]$/;

export function lastSubstantiveLine(text){
  const ls=lines(text).map(l=>l.trim()).filter(Boolean);
  return ls.length ? ls[ls.length-1] : '';
}

/* Section headings inside the body: "1400." or "§ 1401." at line start. Used to
   tell a single provision from a whole-chapter dump, where a pin is ambiguous
   because the quoted span may sit under a section other than the one cited. */
export function headingSections(text){
  const out=[];
  for(const l of lines(text)){
    const m=/^\s{0,4}(?:§\s*)?(\d+(?:\.\d+)*)\s*[.—-]/.exec(l);
    if(m) out.push(m[1]);
  }
  return [...new Set(out)];
}

/* ---------- the checks ---------- */

const excerpt = (s,n=120) => { const t=String(s).replace(/\s+/g,' ').trim(); return t.length>n ? t.slice(0,n)+'…' : t; };

export const CHECKS = [
  {
    id:'empty', severity:'fatal',
    title:'document is empty',
    why:'there is nothing to verify against',
    run(text){
      if(NL(text).trim().length) return null;
      return {detail:'the document contains no non-whitespace characters'};
    }
  },
  {
    id:'too-short', severity:'fatal',
    title:'document is too short to be a provision',
    why:'a statutory section that fits in a tweet is almost always a stub, a redirect, or an error',
    run(text){
      const n=NL(text).trim().length;
      if(n===0 || n>=200) return null;
      return {detail:`${n} characters`, evidence:excerpt(text)};
    }
  },
  {
    id:'error-page', severity:'fatal',
    title:'document is an error, paywall, or interstitial page',
    why:'these hash and store exactly as cleanly as real law does, and read as verification',
    run(text){
      const head=NL(text).slice(0,4000);
      const markers=[
        [/\b(404|403|500)\b[^\n]{0,40}\b(not found|forbidden|error)\b/i,'HTTP error banner'],
        [/\bpage (could ?not be|cannot be|was not|is not) found\b/i,'page-not-found text'],
        [/\baccess (denied|to this page is restricted)\b/i,'access denied'],
        [/\b(please )?enable javascript\b/i,'JavaScript-required interstitial'],
        [/\bare you a robot\b|\bcaptcha\b|\bchecking your browser\b/i,'bot interstitial'],
        [/\b(sign in|subscribe|log ?in) to (continue|view|read)\b/i,'paywall'],
        [/\byour session has (expired|timed out)\b/i,'expired session page'],
        [/\bunder (construction|maintenance)\b/i,'maintenance page']
      ];
      for(const [re,what] of markers){
        const m=re.exec(head);
        if(m) return {detail:what, evidence:excerpt(head.slice(Math.max(0,m.index-40), m.index+120))};
      }
      return null;
    }
  },
  {
    id:'markup', severity:'fatal',
    title:'document is markup, not text',
    why:'a stored web page is a copy of a rendering, and pinned offsets would address tags rather than law',
    run(text){
      const head=NL(text).slice(0,20000);
      if(/<!DOCTYPE\s+html/i.test(head)) return {detail:'HTML doctype declaration'};
      const tags=(head.match(/<\/?(?:div|span|script|style|body|html|head|table|tr|td|p|a|li|ul)\b[^>]*>/gi)||[]).length;
      if(tags>=5) return {detail:`${tags} HTML tags in the first 20 000 characters`,
                          evidence:excerpt((head.match(/<[^>]{1,80}>/g)||[]).slice(0,4).join(' '))};
      const ents=(head.match(/&(?:nbsp|amp|lt|gt|quot|#\d+);/g)||[]).length;
      if(ents>=10) return {detail:`${ents} unresolved HTML entities — the text was extracted without decoding`};
      return null;
    }
  },
  {
    id:'encoding', severity:'fatal',
    title:'document encoding is damaged',
    why:'mangled characters mean the bytes are already not what the source served, so quoting from them misquotes',
    run(text){
      const s=NL(text);
      const repl=(s.match(/\ufffd/g)||[]).length;
      if(repl) return {detail:`${repl} Unicode replacement character(s) — bytes were lost in decoding`};
      if(/\u0000/.test(s)) return {detail:'NUL byte in the text'};
      /* UTF-8 read as Latin-1 leaves these signatures: Ã-prefixed pairs, curly quotes as
         â\u0080-sequences, and stray Â before punctuation. Three or more is not chance. */
      const MOJI=/\u00c3[\u0080-\u00bf]|\u00e2\u0080[\u0080-\u00bf]|\u00c2[\u00a0-\u00bf]/g;
      const moji=(s.match(MOJI)||[]).length;
      if(moji>=3) return {detail:`${moji} mojibake sequence(s) — UTF-8 was decoded as Latin-1`,
                          evidence:excerpt((s.match(/[\s\S]{0,30}(?:\u00c3[\u0080-\u00bf]|\u00e2\u0080[\u0080-\u00bf])[\s\S]{0,30}/)||[''])[0])};
      const ctrl=(s.match(/[\u0001-\u0008\u000b\u000c\u000e-\u001f]/g)||[]).length;
      if(ctrl) return {detail:`${ctrl} control character(s) outside tab and newline`};
      return null;
    }
  },
  {
    id:'character-noise', severity:'serious',
    title:'document contains a high proportion of unexpected characters',
    why:'PDF and OCR extraction failures leave junk that reads as text but quotes wrongly',
    run(text){
      const s=NL(text);
      if(s.length<200) return {inapplicable:'too short to measure a character distribution'};
      const bad=(s.match(/[^\p{L}\p{N}\p{P}\p{Zs}\n\t§–—‘’“”]/gu)||[]).length;
      const ratio=bad/s.length;
      if(ratio<=0.005) return null;
      return {detail:`${(ratio*100).toFixed(2)}% of characters are outside the expected set (${bad} of ${s.length})`};
    }
  },
  {
    id:'citation-absent', severity:'serious',
    title:'the cited section number does not appear in the document',
    why:'the commonest silent failure is fetching a neighbouring section and filing it under the one you wanted',
    run(text, ctx){
      const secs=citedSections(ctx.citation||'');
      if(!secs.length) return {inapplicable:'the citation carries no section number to look for'};
      const s=NL(text);
      const missing=secs.filter(n=>!new RegExp(`(?:§\\s*|\\b)${n.replace(/\./g,'\\.')}\\b`).test(s));
      if(!missing.length) return null;
      if(missing.length===secs.length)
        return {detail:`none of ${secs.map(n=>'§'+n).join(', ')} appears anywhere in the text`, evidence:excerpt(s)};
      return {detail:`${missing.map(n=>'§'+n).join(', ')} of the cited range is absent`};
    }
  },
  {
    id:'truncated', severity:'serious',
    title:'document appears to stop mid-provision',
    why:'a truncated source authorises a clause that omits whatever was cut off, and omission is the dominant defect in this corpus',
    run(text){
      const last=lastSubstantiveLine(text);
      if(!last) return {inapplicable:'the document is empty'};
      if(/[-–—]$/.test(last)) return {detail:'the final line ends on a hyphen or dash', evidence:excerpt(last)};
      if(/\b(and|or|of|the|to|in|that|which|shall|by|for|with|a|an)$/i.test(last))
        return {detail:'the final line ends on a function word', evidence:excerpt(last)};
      if(!TERMINAL.test(last)) return {detail:'the final line ends without terminal punctuation', evidence:excerpt(last)};
      const open=(NL(text).match(/\(/g)||[]).length, close=(NL(text).match(/\)/g)||[]).length;
      if(open-close>=3) return {detail:`${open} opening and ${close} closing parentheses — ${open-close} unclosed`};
      return null;
    }
  },
  {
    id:'subdivision-gap', severity:'serious',
    title:'a subdivision is missing from the sequence',
    why:'a clause pinned to (b) while (c) is missing asserts a rule the document cannot support',
    run(text){
      const m=subdivisionMarkers(text);
      if(m.length<2) return {inapplicable:'the document has fewer than two lettered subdivisions'};
      const {gaps}=subdivisionGaps(m);
      if(!gaps.length) return null;
      return {detail:`subdivision${gaps.length>1?'s':''} ${gaps.map(g=>`(${g})`).join(', ')} ${gaps.length>1?'are':'is'} absent from the sequence ${m.map(x=>`(${x})`).join('')}`};
    }
  },
  {
    id:'subdivision-disorder', severity:'serious',
    title:'subdivisions are out of order',
    why:'reordered subdivisions mean the document was assembled rather than copied, so offsets cannot be trusted',
    run(text){
      const m=subdivisionMarkers(text);
      if(m.length<2) return {inapplicable:'the document has fewer than two lettered subdivisions'};
      const {disorder}=subdivisionGaps(m);
      if(!disorder.length) return null;
      return {detail:disorder.join('; ')};
    }
  },
  {
    id:'duplicated-block', severity:'serious',
    title:'a substantial passage appears more than once',
    why:'duplication is a scrape artefact, and a quote that matches twice cannot be pinned to one offset',
    run(text){
      const ps=paragraphs(text).filter(p=>p.length>=120);
      const seen=new Map();
      for(const p of ps) seen.set(p,(seen.get(p)||0)+1);
      const dupes=[...seen.entries()].filter(([,n])=>n>1);
      if(!dupes.length) return null;
      return {detail:`${dupes.length} passage(s) repeated`, evidence:excerpt(dupes[0][0])};
    }
  },
  {
    id:'scope-overrun', severity:'serious',
    title:'the document contains several sections, not the one cited',
    why:'a quoted span in a chapter dump may sit under a different section than the clause claims',
    run(text, ctx){
      const cited=new Set(citedSections(ctx.citation||''));
      const heads=headingSections(text).filter(h=>!cited.has(h));
      if(heads.length<=3) return null;
      return {detail:`${heads.length} section headings other than the cited provision: ${heads.slice(0,6).join(', ')}${heads.length>6?'…':''}`};
    }
  },
  {
    id:'no-version-marker', severity:'serious',
    title:'the document carries no indication of which version it is',
    why:'statutes are amended; a text with no enactment, amendment, or as-of marker cannot be pinned in time, so drift is undetectable',
    run(text){
      const s=NL(text);
      const markers=[
        /\((?:Amended|Added|Repealed|Enacted|Renumbered)\b[^)]{0,200}\)/i,
        /\bStats\.\s*\d{4}\b/i,
        /\b(?:effective|operative)\s+(?:on\s+)?(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s*\d{4}/i,
        /\bas\s+(?:of|amended\s+through)\s+\w+\s+\d{1,2},?\s*\d{4}/i,
        /\b(?:Pub\.\s*L\.|Ch\.)\s*\d+/,
        /\b(?:last\s+(?:amended|updated|revised))\b[^\n]{0,40}\d{4}/i
      ];
      if(markers.some(re=>re.test(s))) return null;
      return {detail:'no enactment note, session-law reference, effective date, or as-of date found'};
    }
  }
];

/* ---------- running them ---------- */

export function inspect(text, ctx={}){
  const fatal=[], serious=[], passed=[], inapplicable=[];
  for(const c of CHECKS){
    let r;
    try{ r=c.run(String(text??''), ctx); }
    catch(e){ r={detail:`check threw: ${e.message}`}; }
    if(!r){ passed.push(c.id); continue; }
    if(r.inapplicable){ inapplicable.push({id:c.id, why:r.inapplicable}); continue; }
    const finding={id:c.id, severity:c.severity, title:c.title, why:c.why, detail:r.detail, evidence:r.evidence};
    (c.severity==='fatal' ? fatal : serious).push(finding);
  }
  return {ok: !fatal.length && !serious.length, fatal, serious, passed, inapplicable, checked: CHECKS.length};
}

/* A waiver is a named person taking responsibility for a specific defect on a
   specific document. It is not a flag and not a config setting: it needs a person
   and a reason, and it cannot touch a fatal finding. */
export function validateWaiver(w){
  const p=[];
  if(!w || typeof w!=='object') return ['waiver must be an object naming who is waiving it and why'];
  if(!w.by) p.push('waiver must name who is waiving it');
  if(!w.because || String(w.because).trim().length<12)
    p.push('waiver must state a reason, in more than a few characters');
  return p;
}

export function admissible(report, waivers={}){
  const blocking=[], waived=[], badWaivers=[];
  for(const f of report.fatal) blocking.push({...f, note:'fatal findings cannot be waived'});
  for(const f of report.serious){
    const w=waivers[f.id];
    if(!w){ blocking.push(f); continue; }
    const problems=validateWaiver(w);
    if(problems.length){ badWaivers.push({id:f.id, problems}); blocking.push(f); continue; }
    waived.push({...f, waiver:{by:w.by, because:w.because}});
  }
  for(const id of Object.keys(waivers)){
    const check=CHECKS.find(c=>c.id===id);
    if(!check) badWaivers.push({id, problems:['no such check']});
    else if(check.severity==='fatal') badWaivers.push({id, problems:['this finding is fatal and cannot be waived']});
  }
  return {ok: blocking.length===0 && badWaivers.length===0, blocking, waived, badWaivers};
}

/* One line per finding, used by the CLI and by ingest refusals. */
export function renderReport(report){
  const out=[];
  for(const f of [...report.fatal, ...report.serious]){
    out.push(`  ${f.severity.toUpperCase().padEnd(7)} ${f.id.padEnd(20)} ${f.detail}`);
    if(f.evidence) out.push(`  ${''.padEnd(28)}“${f.evidence}”`);
  }
  return out.join('\n');
}
