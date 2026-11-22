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

// Builds the same content-model shape app.js's buildDocumentContent()
// does, minus the two pieces that depend on purely client-side state
// with no server equivalent today: `signature` (drawn/typed, kept in
// the browser's own library entry, never synced to `agreements`) and
// `nextSteps` (filing/next_steps.json lookups keyed off live wizard
// state). Both are left null/empty here, explicitly, rather than
// guessed at -- release-document's own file says so.
export function buildDocumentContent(document, clauses, answers, verificationLevels) {
  const assembled = assembleDocument(document, clauses, answers);
  return {
    title: document.title,
    documentId: document.id,
    preparedFor: preparedForLine(document, answers),
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
