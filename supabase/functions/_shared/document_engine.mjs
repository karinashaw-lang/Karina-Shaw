// Shared, pure document-assembly engine -- MVP_BUILD_INSTRUCTIONS.md
// item 2.3's "render ... from the same clause set as the client."
//
// This is not a reimplementation of app.js's clause-assembly logic; it
// is an exact-parity extraction of it. Every function below is a
// line-for-line port of the corresponding function in app.js
// (substitute, conditionMatches, clauseEntryId, clauseIncludeIf,
// assembleDocument, preparedForLine, clauseLevel,
// clauseVerificationNoteText, hashString), made parameter-driven
// instead of reading a global `state` object, so the exact same
// algorithm runs in the browser (app.js keeps its own copies, unchanged,
// to avoid any risk to already-tested client behavior) and in the
// release-document edge function (which imports this file directly,
// so there is only one place this logic can drift).
//
// tests/release_document/test_document_engine_parity.js is the thing
// that actually proves these stay in sync with app.js, rather than
// this comment being the only thing claiming it -- it loads both and
// diffs their output on the same fixed inputs.
//
// Plain ESM, zero DOM/Node/Deno-specific APIs anywhere in this file --
// that's what makes it importable unmodified by both a browser context
// (if app.js is ever refactored to import it) and `Deno.serve` edge
// functions, and runnable under plain Node for the parity test.

export function substitute(text, answers) {
  return text.replace(/\{\{(\w+)\}\}(\.?)/g, (match, key, trailingDot) => {
    const val = answers[key];
    if (!val) return match;
    return trailingDot && val.endsWith('.') ? val : val + trailingDot;
  });
}

export function clauseEntryId(entry) {
  return typeof entry === 'string' ? entry : entry.id;
}

export function clauseIncludeIf(entry) {
  return typeof entry === 'string' ? null : entry.includeIf || null;
}

export function conditionMatches(cond, answers) {
  const val = answers[cond.field] || '';
  if (cond.equals !== undefined) return val === cond.equals;
  if (cond.notEquals !== undefined) return val !== cond.notEquals;
  return true;
}

export function describeConditionalClauses(document, clauses, answers) {
  return document.clauseOrder
    .filter(entry => clauseIncludeIf(entry))
    .map(entry => {
      const id = clauseEntryId(entry);
      const cond = clauseIncludeIf(entry);
      const clause = clauses.find(c => c.id === id);
      const fieldDef = (document.fields || []).find(f => f.id === cond.field);
      const fieldLabel = fieldDef ? fieldDef.label : cond.field;
      const expected = cond.equals !== undefined ? cond.equals : cond.notEquals;
      const relation = cond.equals !== undefined ? 'is' : 'is not';
      return {
        id,
        title: clause ? clause.title : id,
        included: conditionMatches(cond, answers),
        reason: `"${fieldLabel}" ${relation} "${expected}"`,
      };
    });
}

export function assembleDocument(document, clauses, answers) {
  return document.clauseOrder
    .filter(entry => {
      const cond = clauseIncludeIf(entry);
      return !cond || conditionMatches(cond, answers);
    })
    .map(entry => clauses.find(c => c.id === clauseEntryId(entry)))
    .filter(Boolean)
    .map(clause => ({
      ...clause,
      renderedBody: substitute(clause.body, answers),
      gap: clause.gap ? substitute(clause.gap, answers) : clause.gap,
    }));
}

export function preparedForLine(document, answers) {
  const person = answers.employeeName || answers.memberName || '';
  const company = answers.companyName || '';
  if (person && company) return `Prepared for ${person} · ${company}`;
  if (person) return `Prepared for ${person}`;
  if (company) return `Prepared for ${company}`;

  const values = (document.fields || [])
    .map(f => answers[f.id])
    .filter(Boolean);
  if (values.length >= 2) return `Prepared for ${values[0]} · ${values[1]}`;
  if (values.length === 1) return `Prepared for ${values[0]}`;
  return 'Prepared for —';
}

// Exact port of app.js's JURISDICTION_CA_RE/JURISDICTION_FED_RE/
// JURISDICTION_CA_URL_RE/JURISDICTION_FED_URL_RE and
// classifyCitationJurisdiction()/classifyDocumentJurisdiction() --
// MVP_FINISH_VERIFY_SHARPEN.md item 1.1's PDF/DOCX comparison against
// the on-screen preview found that this whole jurisdiction-notice
// concept was simply absent from buildDocumentContent() below (unlike
// `signature`/`nextSteps`, never disclosed anywhere as an intentional
// scope cut): a paying customer's actual released PDF/DOCX carried no
// "this document's clauses are sourced to California/federal/mixed law"
// notice at all, while the on-screen preview and client-side export of
// the exact same document did. Ported rather than re-derived so a
// future change to the classification rule can't silently drift
// between the two the way nothing here enforced until now --
// tests/release_document/test_document_engine_parity.js's jurisdiction
// section is what actually proves that.
const JURISDICTION_CA_RE = /\bCal\.|\bCalifornia\b/i;
const JURISDICTION_CA_URL_RE = /leginfo\.legislature\.ca\.gov|courts\.ca\.gov/i;
const JURISDICTION_FED_RE = /\bU\.S\.C\.|\bC\.F\.R\.|\bF\.\s*(?:2d|3d|4th|Supp)|\b\d+\s+U\.S\.\s+\d|\bCir\.\)|\bS\.\s*Ct\.|U\.S\. Const|\bFed\.\s*R\.|\bPub\.\s*L\.\s*No/i;
const JURISDICTION_FED_URL_RE = /law\.cornell\.edu|ecfr\.gov|govinfo\.gov|uscode\.house\.gov|supremecourt\.gov/i;

export function classifyCitationJurisdiction(cit) {
  const text = `${cit.case || ''} ${cit.cite || ''}`;
  const url = cit.url || '';
  const isCA = JURISDICTION_CA_RE.test(text) || JURISDICTION_CA_URL_RE.test(url);
  const isFed = JURISDICTION_FED_RE.test(text) || JURISDICTION_FED_URL_RE.test(url);
  if (isCA && !isFed) return 'CA';
  if (isFed && !isCA) return 'FED';
  if (isCA && isFed) return 'BOTH';
  return 'OTHER';
}

export function classifyDocumentJurisdiction(document, clauses) {
  const byId = new Map(clauses.map(c => [c.id, c]));
  let hasAuthority = false, hasCA = false, hasFed = false, hasOther = false;
  document.clauseOrder.forEach(entry => {
    const clause = byId.get(clauseEntryId(entry));
    if (!clause || clause.kind !== 'authority') return;
    hasAuthority = true;
    (clause.citations || []).forEach(cit => {
      const k = classifyCitationJurisdiction(cit);
      if (k === 'CA') hasCA = true;
      else if (k === 'FED') hasFed = true;
      else if (k === 'BOTH') { hasCA = true; hasFed = true; }
      else hasOther = true;
    });
  });
  if (!hasAuthority) return 'NONE';
  if (hasCA && hasFed) return 'MIXED';
  if (hasCA) return 'CA';
  if (hasFed) return 'FED';
  return hasOther ? 'OTHER' : 'NONE';
}

export const JURISDICTION_NOTICE = {
  CA: "This document's legal clauses are sourced primarily to California law. Outside California, some of what it cites may not apply.",
  FED: "This document's legal clauses are sourced to federal law, which applies the same way in every state.",
  MIXED: "This document's legal clauses are sourced to a mix of California and federal law. Outside California, the California-specific parts may not apply.",
  OTHER: "This document's legal clauses illustrate a general doctrine using out-of-state case law as examples, not a California-specific rule.",
};

// Parameter-driven port of app.js's verifyPageUrl(doc), which reads
// state.seoBaseUrl -- release-document has no `state`, so the caller
// passes the same baseUrl (bundled from config/seo.json by
// tools/build_release_bundle.py, same source app.js's own
// state.seoBaseUrl is loaded from) explicitly instead.
export function verifyPageUrl(baseUrl, docId) {
  const base = (baseUrl || '').replace(/\/$/, '');
  return base ? `${base}/verify/${docId}.html` : `verify/${docId}.html`;
}

// Builds the same content-model shape app.js's buildDocumentContent()
// does, minus the two pieces that depend on purely client-side state
// with no server equivalent today: `signature` (drawn/typed, kept in
// the browser's own library entry, never synced to `agreements`) and
// `nextSteps` (filing/next_steps.json lookups keyed off live wizard
// state). Both are left null/empty here, explicitly, rather than
// guessed at -- release-document's own file says so.
export function buildDocumentContent(document, clauses, answers, verificationLevels) {
  const assembled = assembleDocument(document, clauses, answers);
  const jKey = classifyDocumentJurisdiction(document, clauses);
  return {
    title: document.title,
    documentId: document.id,
    preparedFor: preparedForLine(document, answers),
    jurisdictionNotice: jKey && jKey !== 'NONE' ? JURISDICTION_NOTICE[jKey] : null,
    conditional: describeConditionalClauses(document, clauses, answers),
    clauses: assembled.map(clause => ({
      id: clause.id,
      title: clause.title,
      body: clause.renderedBody,
      kind: clause.kind,
      status: clause.status,
      edited: false,
      checkedDate: clause.checkedDate,
      citations: clause.citations || [],
      gap: clause.gap || null,
      level: clauseLevel(clause, verificationLevels),
    })),
    signature: null,
    nextSteps: [],
  };
}

export const LEVEL_LABEL = {
  adversarially_checked: 'Adversarially checked',
  verified: 'Verified',
  cited: 'Cited',
};

export const LEVEL_NOTE = {
  adversarially_checked: "This clause's citation has been checked directly against the government's own primary " +
    'text, and has also been through a separate review built to look for mistakes, with no unresolved finding ' +
    'left open.',
  verified: "This clause's citation has been checked directly against the government's own primary text and the " +
    "quote matches. It has not yet been through the separate review the level above requires.",
  cited: "This clause's source hasn't been independently confirmed against the government's own primary text yet " +
    "(it's sourced to a secondary copy, or hasn't been checked at all). Treat the quote below as a starting point, " +
    'not a confirmed fact, until it is.',
};

export function clauseLevel(clause, verificationLevels) {
  return (verificationLevels && verificationLevels[clause.id]) || 'cited';
}

export function clauseVerificationNoteText(clause, verificationLevels) {
  const level = clauseLevel(clause, verificationLevels);
  if (level === 'cited') return LEVEL_NOTE.cited;
  if (clause.edited) {
    return `Edited since ${LEVEL_LABEL[level].toLowerCase()} on ${clause.checkedDate} — ` +
      'check the citation below still fits this wording';
  }
  return `${LEVEL_LABEL[level]} — checked ${clause.checkedDate}`;
}

// Exact port of app.js's hashString() -- used identically here so a
// released document's audit_log.output_hash is computed the same way
// the client's own writeAuditLogEntry() computes it for a browser-
// generated document, not a second, different hashing scheme.
export function hashString(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

// content.clauses entries (from buildDocumentContent above) already
// carry a resolved `level`, so this note is built straight from that
// rather than re-deriving it through clauseVerificationNoteText()'s
// own (clause, verificationLevels) signature, which would need the
// full verificationLevels map again for no benefit -- same wording as
// clauseVerificationNoteText() in app.js, applied to a clause shape
// that already has its level resolved.
function noteTextForResolvedClause(clause) {
  if (clause.level === 'cited') return LEVEL_NOTE.cited;
  if (clause.edited) {
    return `Edited since ${LEVEL_LABEL[clause.level].toLowerCase()} on ${clause.checkedDate} — ` +
      'check the citation below still fits this wording';
  }
  return `${LEVEL_LABEL[clause.level]} — checked ${clause.checkedDate}`;
}

// A plain-text rendering, used only to compute output_hash and as the
// server's own .txt export -- same structure as app.js's
// buildPlainText() for the parts both sides actually have in common
// (title, preparedFor, clause bodies + citations + gaps). Signature
// and next-steps sections are omitted for the reason buildDocumentContent
// above gives.
export function buildPlainText(content) {
  const lines = [];
  lines.push(content.title.toUpperCase());
  lines.push(content.preparedFor);
  if (content.conditional.length) {
    lines.push('');
    lines.push('OPTIONAL CLAUSES IN THIS DOCUMENT:');
    content.conditional.forEach(c => {
      lines.push(`  ${c.included ? 'Included' : 'Not included'}: ${c.title} — because ${c.reason}`);
    });
  }
  lines.push('');
  content.clauses.forEach(clause => {
    lines.push(clause.title.toUpperCase());
    lines.push(clause.body);
    if (clause.kind !== 'drafting') {
      lines.push('');
      lines.push(`[${noteTextForResolvedClause(clause)}]`);
      clause.citations.forEach(c => {
        lines.push(`  "${c.quote}"`);
        lines.push(`  — ${c.case}, ${c.cite} (${c.url})`);
      });
      if (clause.gap) lines.push(`  Known gap: ${clause.gap}`);
    }
    lines.push('');
  });
  // MVP_FINISH_VERIFY_SHARPEN.md item 1.6: every export -- client or
  // server-rendered -- carries its documentId and a generated-on date,
  // the same shape app.js's buildPlainText()/buildPdfDocDefinition()/
  // buildDocxDocument() all use, so a buyer can tell which run of
  // which document any given file came from.
  lines.push('—');
  lines.push(`${content.documentId} · generated ${new Date().toISOString().slice(0, 10)}`);
  return lines.join('\n');
}
