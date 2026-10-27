const state = { documents: null, document: null, clauses: null, answers: {}, categoryFilter: null, edits: {}, editedClauseIds: new Set(), currentEntryId: null, jurisdictionByDoc: null, sharedFields: null, wizardSteps: [], wizardStepIndex: 0, wizardReviewing: false, tiers: null, tierFilter: null, tierSortEnabled: false, layTerms: null, searchQuery: '', searchResults: null, intakeFlow: null, intakeCategory: null, intakeStep: 0, intakeAnswers: [], pickerVisibleCount: 0, includeSourcesAppendix: false, nextSteps: null };

// Draft persistence. Local-only, one slot at a time — closing the tab
// mid-wizard shouldn't lose someone's answers. localStorage can throw
// (private browsing, quota, disabled) so every call is wrapped; this
// is a convenience, not something the app depends on to function.
const DRAFT_KEY = 'groundtruth-draft';

function saveDraft() {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify({
      documentId: state.document.id,
      answers: state.answers,
      step: state.wizardStepIndex,
      savedAt: new Date().toISOString(),
    }));
  } catch (e) { /* not fatal — drafting is a convenience, not a requirement */ }
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch (e) { /* ignore */ }
}

function checkForDraft() {
  const draft = loadDraft();
  if (!draft) return;
  const doc = state.documents.find(d => d.id === draft.documentId);
  if (!doc) { clearDraft(); return; }

  const banner = document.getElementById('draft-banner');
  document.getElementById('draft-banner-text').textContent =
    `You have an unfinished "${doc.title}" saved.`;
  banner.hidden = false;

  document.getElementById('draft-resume').onclick = () => {
    state.document = doc;
    state.answers = { ...draft.answers };
    renderWizard(draft.step || 0);
    showScreen('screen-wizard');
    banner.hidden = true;
  };
  document.getElementById('draft-discard').onclick = () => {
    clearDraft();
    banner.hidden = true;
  };
}

// Document library. Every generated document's field values are saved
// here automatically, browser-local only — this is content the user
// already typed and already saw rendered on screen, just kept around
// under a second key so it can be checked against other documents
// later. Same wrap-every-call-in-try/catch discipline as draft
// persistence above, for the same reason: a convenience, not a
// requirement the app depends on.
const LIBRARY_KEY = 'groundtruth-library';

// The shape of a saved library entry itself (Phase 6.3) — bumped only
// when that shape changes, so a future migration can tell an old
// entry (no schemaVersion at all, or a lower number) from a current
// one. Unrelated to the corpus or to any document's own field schema.
const SCHEMA_VERSION = 1;

function loadLibrary() {
  try {
    const raw = localStorage.getItem(LIBRARY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveLibraryEntries(entries) {
  try { localStorage.setItem(LIBRARY_KEY, JSON.stringify(entries)); } catch (e) { /* not fatal */ }
}

// A plain, non-cryptographic content fingerprint (FNV-1a) -- all this
// needs to do is change when the input changes and stay stable when it
// doesn't, not resist tampering, so there's no reason to pull in a
// crypto library for it.
function hashString(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

// What a saved document actually used, frozen at generation time (or
// at regenerateLibraryEntry()'s refresh): every clause this document's
// clauseOrder resolves to for these particular answers (respecting
// Phase 2.4's includeIf), with enough of each clause's own content
// (not just its id and checkedDate) to later show a real diff of what
// changed -- a checkedDate or a hash alone would say THAT something
// changed, not what. corpusVersion is a single rolled-up fingerprint
// over the same snapshot, for the master plan's own literal field;
// detectDrift() below compares the richer per-clause fields directly,
// since that's what can actually describe a change.
function buildClauseSnapshot(doc, answers) {
  const clauseSnapshots = doc.clauseOrder
    .filter(entry => {
      const cond = clauseIncludeIf(entry);
      return !cond || conditionMatches(cond, answers);
    })
    .map(entry => state.clauses.find(c => c.id === clauseEntryId(entry)))
    .filter(Boolean)
    .map(c => ({
      id: c.id,
      title: c.title,
      kind: c.kind,
      status: c.status || null,
      checkedDate: c.checkedDate || null,
      body: c.body,
      gap: c.gap || null,
      citations: c.citations || [],
    }))
    .sort((a, b) => a.id.localeCompare(b.id));
  return { clauseSnapshots, corpusVersion: hashString(JSON.stringify(clauseSnapshots)) };
}

function addToLibrary(documentId, title, answers) {
  const entries = loadLibrary();
  const doc = state.documents.find(d => d.id === documentId);
  const { clauseSnapshots, corpusVersion } = doc
    ? buildClauseSnapshot(doc, answers)
    : { clauseSnapshots: [], corpusVersion: null };
  const entry = {
    id: `${documentId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    documentId,
    title,
    answers: { ...answers },
    generatedAt: new Date().toISOString(),
    schemaVersion: SCHEMA_VERSION,
    corpusVersion,
    clauseSnapshots,
    versions: [],
  };
  entries.push(entry);
  saveLibraryEntries(entries);
  updateLibraryCount();
  return entry;
}

function removeFromLibrary(entryId) {
  saveLibraryEntries(loadLibrary().filter(e => e.id !== entryId));
  updateLibraryCount();
}

// Patches one saved entry in place — used to attach a signature after
// the document (and its library entry) already exist, without
// disturbing anything else stored on it.
function updateLibraryEntry(entryId, patch) {
  const entries = loadLibrary();
  const idx = entries.findIndex(e => e.id === entryId);
  if (idx === -1) return null;
  entries[idx] = { ...entries[idx], ...patch };
  saveLibraryEntries(entries);
  return entries[idx];
}

function clearLibrary() {
  saveLibraryEntries([]);
  updateLibraryCount();
}

function updateLibraryCount() {
  const el = document.getElementById('library-count');
  if (!el) return;
  const count = loadLibrary().length;
  el.textContent = count ? ` (${count})` : '';
}

// ---------- document lifecycle & versioning (Phase 6.3) ----------
// Compares a saved entry's frozen clauseSnapshots against the live
// corpus (state.clauses) and reports, per clause, exactly which fields
// differ now -- not just that something does. An entry saved before
// this phase existed has no clauseSnapshots at all; there is nothing
// true to say about whether its clauses have changed (the information
// needed to say so was never captured), so it reports no drift rather
// than guessing.
function detectDrift(entry) {
  if (!entry.clauseSnapshots || entry.clauseSnapshots.length === 0) return [];
  return entry.clauseSnapshots
    .map(snap => {
      const current = state.clauses.find(c => c.id === snap.id);
      if (!current) return { id: snap.id, title: snap.title, removed: true, old: snap, current: null, changedFields: [] };
      const changedFields = ['checkedDate', 'status', 'body', 'gap']
        .filter(f => (current[f] || null) !== (snap[f] || null));
      if (JSON.stringify(current.citations || []) !== JSON.stringify(snap.citations || [])) {
        changedFields.push('citations');
      }
      if (changedFields.length === 0) return null;
      return { id: snap.id, title: current.title, removed: false, old: snap, current, changedFields };
    })
    .filter(Boolean);
}

// A plain word-level diff (classic LCS, splitting on whitespace so
// whitespace itself survives as its own token) -- enough to show
// *what* changed in a clause's wording, not just *that* it changed.
// Clause bodies are at most a few hundred words, so the O(n*m) table
// this builds is cheap even for the corpus's longest clauses.
function diffWords(oldText, newText) {
  const a = (oldText || '').split(/(\s+)/).filter(Boolean);
  const b = (newText || '').split(/(\s+)/).filter(Boolean);
  const n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const spans = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { spans.push({ type: 'same', text: a[i] }); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { spans.push({ type: 'removed', text: a[i] }); i++; }
    else { spans.push({ type: 'added', text: b[j] }); j++; }
  }
  while (i < n) { spans.push({ type: 'removed', text: a[i] }); i++; }
  while (j < m) { spans.push({ type: 'added', text: b[j] }); j++; }
  const merged = [];
  spans.forEach(span => {
    const last = merged[merged.length - 1];
    if (last && last.type === span.type) last.text += span.text;
    else merged.push({ ...span });
  });
  return merged;
}

// The one-click regenerate the master plan asks for: refreshes a
// saved entry's clauseSnapshots/corpusVersion to match the live
// corpus, leaving documentId/title/answers/signature untouched -- this
// is what "preserves inputs" means here, since the rendered document
// itself (renderOutput()/buildPlainText()/etc.) already always
// recomputes from the live corpus plus the stored answers; nothing
// about what a reader sees was ever frozen except this comparison
// baseline. The snapshot being replaced is pushed onto `versions`
// first, so regenerating doesn't lose it.
function regenerateLibraryEntry(entryId) {
  const entries = loadLibrary();
  const idx = entries.findIndex(e => e.id === entryId);
  if (idx === -1) return;
  const entry = entries[idx];
  const doc = state.documents.find(d => d.id === entry.documentId);
  if (!doc) return;
  const { clauseSnapshots, corpusVersion } = buildClauseSnapshot(doc, entry.answers);
  const versions = (entry.versions || []).concat([{
    schemaVersion: entry.schemaVersion,
    corpusVersion: entry.corpusVersion,
    clauseSnapshots: entry.clauseSnapshots,
    generatedAt: entry.generatedAt,
    replacedAt: new Date().toISOString(),
  }]);
  entries[idx] = {
    ...entry,
    schemaVersion: SCHEMA_VERSION,
    corpusVersion,
    clauseSnapshots,
    generatedAt: new Date().toISOString(),
    versions,
  };
  saveLibraryEntries(entries);
}

// Makes a prior version current again. Whatever was current before
// the restore is itself kept in `versions` (not discarded), so
// restoring never loses information -- it only changes which snapshot
// is the one detectDrift() compares against.
function restoreLibraryVersion(entryId, versionIndex) {
  const entries = loadLibrary();
  const idx = entries.findIndex(e => e.id === entryId);
  if (idx === -1) return;
  const entry = entries[idx];
  const versions = entry.versions || [];
  const target = versions[versionIndex];
  if (!target) return;
  const currentAsVersion = {
    schemaVersion: entry.schemaVersion,
    corpusVersion: entry.corpusVersion,
    clauseSnapshots: entry.clauseSnapshots,
    generatedAt: entry.generatedAt,
    replacedAt: new Date().toISOString(),
  };
  const remainingVersions = versions.filter((_, i) => i !== versionIndex).concat([currentAsVersion]);
  entries[idx] = {
    ...entry,
    schemaVersion: target.schemaVersion,
    corpusVersion: target.corpusVersion,
    clauseSnapshots: target.clauseSnapshots,
    generatedAt: target.generatedAt,
    versions: remainingVersions,
  };
  saveLibraryEntries(entries);
}

// Compares the same field id across every saved document. A field id
// carrying two different values isn't necessarily a mistake — the
// same field can legitimately hold a different real value in a
// different document — but it's exactly the kind of quiet mismatch (a
// typo'd company name, a restriction period that drifted between two
// related agreements) that's easy to miss when each document was
// filled out on its own, and invisible to a document generator that
// only ever sees one form at a time. This only flags a difference; it
// never says which value is right, since that's not something the
// values alone can tell you.
function computeConsistency(entries) {
  const byField = {};
  entries.forEach(entry => {
    const doc = state.documents.find(d => d.id === entry.documentId);
    if (!doc) return;
    doc.fields.forEach(f => {
      const val = (entry.answers[f.id] || '').trim();
      if (!val) return;
      (byField[f.id] = byField[f.id] || []).push({
        docTitle: entry.title,
        label: f.label,
        value: val,
      });
    });
  });

  return Object.entries(byField)
    .map(([fieldId, occurrences]) => ({ fieldId, occurrences }))
    .filter(({ occurrences }) => new Set(occurrences.map(o => o.value)).size > 1);
}

function formatDriftValue(v) {
  return v === null || v === undefined || v === '' ? 'none' : v;
}

// Renders one changed-clause's detail: which fields differ, and for
// the body specifically, a word-level diff rather than just "the body
// changed" -- states what changed, nothing about whether it matters.
function renderDriftClauseDetail(change) {
  const block = document.createElement('div');
  block.className = 'drift-clause';

  const title = document.createElement('div');
  title.className = 'drift-clause-title';
  title.textContent = change.title;
  block.appendChild(title);

  if (change.removed) {
    const p = document.createElement('p');
    p.className = 'drift-field';
    p.textContent = "This clause is no longer in Groundtruth's library.";
    block.appendChild(p);
    return block;
  }

  change.changedFields.forEach(field => {
    if (field === 'body') {
      const p = document.createElement('p');
      p.className = 'drift-diff';
      diffWords(change.old.body, change.current.body).forEach(span => {
        if (span.type === 'same') {
          p.appendChild(document.createTextNode(span.text));
        } else {
          const el = document.createElement(span.type === 'removed' ? 'del' : 'ins');
          el.textContent = span.text;
          p.appendChild(el);
        }
      });
      block.appendChild(p);
      return;
    }
    if (field === 'citations') {
      const oldNames = (change.old.citations || []).map(c => c.case).join('; ') || 'none';
      const newNames = (change.current.citations || []).map(c => c.case).join('; ') || 'none';
      const p = document.createElement('p');
      p.className = 'drift-field';
      p.textContent = `Citations: ${oldNames} → ${newNames}`;
      block.appendChild(p);
      return;
    }
    const label = { checkedDate: 'Checked date', status: 'Status', gap: 'Known gap' }[field] || field;
    const p = document.createElement('p');
    p.className = 'drift-field';
    p.textContent = `${label}: ${formatDriftValue(change.old[field])} → ${formatDriftValue(change.current[field])}`;
    block.appendChild(p);
  });

  return block;
}

// The master plan's own required framing: state what changed, never
// whether the reader needs to do anything about it. "Regenerate"
// updates this entry's comparison baseline to the current corpus,
// keeping the answers exactly as they were -- see
// regenerateLibraryEntry()'s own comment for why that's enough.
function renderDriftBanner(entry) {
  const changes = detectDrift(entry);
  if (changes.length === 0) return null;

  const banner = document.createElement('div');
  banner.className = 'drift-banner';

  const summary = document.createElement('p');
  summary.className = 'drift-summary';
  summary.textContent = changes.length === 1
    ? 'A clause used in this document has changed since you created it.'
    : `${changes.length} clauses used in this document have changed since you created it.`;
  banner.appendChild(summary);

  const details = document.createElement('details');
  details.className = 'drift-detail';
  const detailsSummary = document.createElement('summary');
  detailsSummary.textContent = 'Show what changed';
  details.appendChild(detailsSummary);
  changes.forEach(change => details.appendChild(renderDriftClauseDetail(change)));
  banner.appendChild(details);

  const regenBtn = document.createElement('button');
  regenBtn.type = 'button';
  regenBtn.className = 'secondary';
  regenBtn.textContent = 'Regenerate (keeps your answers)';
  regenBtn.addEventListener('click', () => {
    regenerateLibraryEntry(entry.id);
    renderLibrary();
  });
  banner.appendChild(regenBtn);

  return banner;
}

// Prior snapshots, each with the timestamp it was generated and the
// timestamp it was replaced -- restoring one makes it current again
// without discarding whatever was current before (see
// restoreLibraryVersion()).
function renderVersionHistory(entry) {
  const versions = entry.versions || [];
  if (versions.length === 0) return null;

  const details = document.createElement('details');
  details.className = 'version-history';
  const summary = document.createElement('summary');
  summary.textContent = `Version history (${versions.length})`;
  details.appendChild(summary);

  versions
    .map((v, i) => ({ v, i }))
    .sort((a, b) => new Date(b.v.replacedAt) - new Date(a.v.replacedAt))
    .forEach(({ v, i }) => {
      const row = document.createElement('div');
      row.className = 'version-row';
      const label = document.createElement('span');
      label.textContent = `Generated ${new Date(v.generatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} — replaced ${new Date(v.replacedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
      row.appendChild(label);
      const restoreBtn = document.createElement('button');
      restoreBtn.type = 'button';
      restoreBtn.className = 'secondary';
      restoreBtn.textContent = 'Restore this version';
      restoreBtn.addEventListener('click', () => {
        restoreLibraryVersion(entry.id, i);
        renderLibrary();
      });
      row.appendChild(restoreBtn);
      details.appendChild(row);
    });

  return details;
}

function renderLibrary() {
  const entries = loadLibrary();
  const consistencyEl = document.getElementById('library-consistency');
  const listEl = document.getElementById('library-list');
  consistencyEl.innerHTML = '';
  listEl.innerHTML = '';

  if (entries.length === 0) {
    listEl.innerHTML = '<p class="library-empty">Nothing saved yet — generate a document and it will show up here.</p>';
    return;
  }

  const mismatches = computeConsistency(entries);
  if (mismatches.length === 0) {
    const ok = document.createElement('p');
    ok.className = 'consistency-ok';
    ok.textContent = `Checked ${entries.length} saved document${entries.length === 1 ? '' : 's'} — no field carries two different values.`;
    consistencyEl.appendChild(ok);
  } else {
    const heading = document.createElement('p');
    heading.className = 'consistency-heading';
    heading.textContent = `${mismatches.length} field${mismatches.length === 1 ? '' : 's'} carry different values across your saved documents`;
    consistencyEl.appendChild(heading);

    mismatches.forEach(({ occurrences }) => {
      const block = document.createElement('div');
      block.className = 'consistency-block';

      const title = document.createElement('div');
      title.className = 'consistency-field';
      title.textContent = occurrences[0].label;
      block.appendChild(title);

      const ul = document.createElement('ul');
      occurrences.forEach(o => {
        const li = document.createElement('li');
        li.textContent = `${o.docTitle}: "${o.value}"`;
        ul.appendChild(li);
      });
      block.appendChild(ul);

      const note = document.createElement('p');
      note.className = 'consistency-note';
      note.textContent = 'This might be intentional — the same field can reasonably hold different values in different documents. Worth a second look if it was meant to be the same.';
      block.appendChild(note);

      consistencyEl.appendChild(block);
    });
  }

  entries
    .slice()
    .sort((a, b) => new Date(b.generatedAt) - new Date(a.generatedAt))
    .forEach(entry => {
      const row = document.createElement('div');
      row.className = 'library-row';

      const info = document.createElement('div');
      const titleEl = document.createElement('div');
      titleEl.className = 'library-row-title';
      titleEl.textContent = entry.title;
      const dateEl = document.createElement('div');
      dateEl.className = 'library-row-date';
      dateEl.textContent = `Saved ${new Date(entry.generatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
      info.appendChild(titleEl);
      info.appendChild(dateEl);
      row.appendChild(info);

      const btnGroup = document.createElement('div');
      btnGroup.style.display = 'flex';
      btnGroup.style.gap = '8px';
      btnGroup.style.flex = 'none';

      const viewBtn = document.createElement('button');
      viewBtn.type = 'button';
      viewBtn.className = 'secondary';
      viewBtn.textContent = 'View';
      viewBtn.setAttribute('aria-label', `View ${entry.title}`);
      viewBtn.addEventListener('click', () => viewLibraryEntry(entry));
      btnGroup.appendChild(viewBtn);

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'secondary';
      removeBtn.textContent = 'Remove';
      removeBtn.setAttribute('aria-label', `Remove ${entry.title}`);
      removeBtn.addEventListener('click', () => {
        removeFromLibrary(entry.id);
        renderLibrary();
      });
      btnGroup.appendChild(removeBtn);

      row.appendChild(btnGroup);

      const wrap = document.createElement('div');
      wrap.className = 'library-entry';
      wrap.appendChild(row);
      const driftBanner = renderDriftBanner(entry);
      if (driftBanner) wrap.appendChild(driftBanner);
      const versionHistory = renderVersionHistory(entry);
      if (versionHistory) wrap.appendChild(versionHistory);
      listEl.appendChild(wrap);
    });
}

// Reopens a saved document exactly as it was filled in, using the
// same render path the wizard's own submit handler uses — this does
// not call addToLibrary again, so viewing a saved document never
// duplicates it in the library.
function viewLibraryEntry(entry) {
  const doc = state.documents.find(d => d.id === entry.documentId);
  if (!doc) return;
  state.document = doc;
  state.answers = { ...entry.answers };
  state.currentEntryId = entry.id;
  renderOutput();
  showScreen('screen-output');
}

// ---------- signature ----------
// A plain, honest capture — draw with a mouse or finger (Pointer
// Events cover both without separate code paths) or just type a name
// — kept with the library entry it belongs to. This makes no claim
// about legal enforceability in either direction; it only records
// that this mark was added, by whom it says, and when.
const sigState = { ctx: null, hasStrokes: false, drawing: false };

function initSignaturePad() {
  const canvas = document.getElementById('signature-pad');
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--ink').trim() || '#191D16';
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  sigState.ctx = ctx;
  sigState.hasStrokes = false;
  sigState.drawing = false;

  const pointerPos = e => {
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  canvas.onpointerdown = e => {
    sigState.drawing = true;
    sigState.hasStrokes = true;
    const p = pointerPos(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    canvas.setPointerCapture(e.pointerId);
  };
  canvas.onpointermove = e => {
    if (!sigState.drawing) return;
    const p = pointerPos(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  };
  const stopDrawing = () => { sigState.drawing = false; };
  canvas.onpointerup = stopDrawing;
  canvas.onpointerleave = stopDrawing;
  canvas.onpointercancel = stopDrawing;
}

function clearSignaturePad() {
  const canvas = document.getElementById('signature-pad');
  if (sigState.ctx) sigState.ctx.clearRect(0, 0, canvas.width, canvas.height);
  sigState.hasStrokes = false;
}

function currentLibraryEntry() {
  if (!state.currentEntryId) return null;
  return loadLibrary().find(e => e.id === state.currentEntryId) || null;
}

function renderSignatureSection() {
  const displayEl = document.getElementById('signature-display');
  const inputArea = document.getElementById('signature-input-area');
  const entry = currentLibraryEntry();

  if (entry && entry.signature) {
    displayEl.innerHTML = '';
    if (entry.signature.type === 'drawn') {
      const img = document.createElement('img');
      img.src = entry.signature.dataUrl;
      img.alt = 'Signature';
      displayEl.appendChild(img);
    } else {
      const typed = document.createElement('div');
      typed.className = 'signature-typed';
      typed.textContent = entry.signature.name;
      displayEl.appendChild(typed);
    }
    const meta = document.createElement('div');
    meta.className = 'signature-meta';
    meta.textContent = `Signed ${new Date(entry.signature.signedAt).toLocaleString()}`;
    displayEl.appendChild(meta);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'secondary';
    removeBtn.textContent = 'Remove signature';
    removeBtn.addEventListener('click', () => {
      updateLibraryEntry(state.currentEntryId, { signature: null });
      renderSignatureSection();
    });
    displayEl.appendChild(removeBtn);

    displayEl.hidden = false;
    inputArea.hidden = true;
  } else {
    displayEl.hidden = true;
    inputArea.hidden = false;
    document.getElementById('signature-name').value = '';
    initSignaturePad();
  }
}

document.getElementById('signature-clear').addEventListener('click', () => {
  clearSignaturePad();
  document.getElementById('signature-name').value = '';
});

document.getElementById('signature-save').addEventListener('click', () => {
  if (!state.currentEntryId) return;
  const name = document.getElementById('signature-name').value.trim();
  const canvas = document.getElementById('signature-pad');
  let signature;
  if (name) {
    signature = { type: 'typed', name, signedAt: new Date().toISOString() };
  } else if (sigState.hasStrokes) {
    signature = { type: 'drawn', dataUrl: canvas.toDataURL('image/png'), signedAt: new Date().toISOString() };
  } else {
    return;
  }
  updateLibraryEntry(state.currentEntryId, { signature });
  renderSignatureSection();
});

// ---------- inbox: cross-document dates ----------
// A purely descriptive surface over dates already typed into saved
// documents — no new data entry, no schema change. Field ids already
// follow a consistent *Date naming convention across the corpus
// (dateSigned, noticeDate, leaseEndDate, ...), so this needs no
// per-document configuration to work. Every date is reported the same
// way regardless of what it is — "in 5 days" / "3 days ago" — the
// same mirror-not-advisor stance as the rest of the app: it says what
// was typed and how far away it is, never what that means or what to
// do about it.

function parseTypedDate(value) {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  const looksDateLike = /\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4}/.test(trimmed)
    || /^\d{4}-\d{2}-\d{2}/.test(trimmed)
    || /[a-zA-Z]{3,}.*\d{1,4}/.test(trimmed);
  if (!looksDateLike) return null;
  const parsed = new Date(trimmed);
  if (isNaN(parsed.getTime())) return null;
  if (parsed.getFullYear() < 1900 || parsed.getFullYear() > 2200) return null;
  return parsed;
}

function daysFromToday(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.round((target - today) / 86400000);
}

function collectDateEntries() {
  const rows = [];
  loadLibrary().forEach(entry => {
    const doc = state.documents.find(d => d.id === entry.documentId);
    if (!doc) return;
    doc.fields.forEach(f => {
      if (!/date/i.test(f.id)) return;
      const raw = entry.answers[f.id];
      const parsed = parseTypedDate(raw);
      if (!parsed) return;
      rows.push({ label: f.label, rawValue: raw.trim(), date: parsed, docTitle: entry.title, entry });
    });
  });
  return rows;
}

function renderInbox() {
  const container = document.getElementById('inbox-content');
  container.innerHTML = '';
  const rows = collectDateEntries();

  if (rows.length === 0) {
    container.innerHTML = '<p class="library-empty">No dates found yet. Dates typed into a saved document\'s fields — a start date, a notice date, an expiration date — show up here automatically.</p>';
    return;
  }

  const upcoming = rows.filter(r => daysFromToday(r.date) >= 0).sort((a, b) => a.date - b.date);
  const past = rows.filter(r => daysFromToday(r.date) < 0).sort((a, b) => b.date - a.date);

  const renderSection = (title, list, describe) => {
    if (list.length === 0) return;
    const heading = document.createElement('p');
    heading.className = 'consistency-heading';
    heading.textContent = title;
    container.appendChild(heading);

    list.forEach(r => {
      const row = document.createElement('div');
      row.className = 'inbox-row';

      const info = document.createElement('div');
      const labelEl = document.createElement('div');
      labelEl.className = 'library-row-title';
      labelEl.textContent = `${r.label}: ${r.rawValue}`;
      const metaEl = document.createElement('div');
      metaEl.className = 'library-row-date';
      metaEl.textContent = `${r.docTitle} · ${describe(r.date)}`;
      info.appendChild(labelEl);
      info.appendChild(metaEl);
      row.appendChild(info);

      const viewBtn = document.createElement('button');
      viewBtn.type = 'button';
      viewBtn.className = 'secondary';
      viewBtn.textContent = 'View';
      viewBtn.setAttribute('aria-label', `View ${r.docTitle}`);
      viewBtn.addEventListener('click', () => viewLibraryEntry(r.entry));
      row.appendChild(viewBtn);

      container.appendChild(row);
    });
  };

  renderSection('Upcoming', upcoming, d => {
    const n = daysFromToday(d);
    if (n === 0) return 'Today';
    if (n === 1) return 'In 1 day';
    if (n <= 30) return `In ${n} days`;
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  });
  renderSection('Past', past, d => {
    const n = -daysFromToday(d);
    if (n === 1) return '1 day ago';
    if (n <= 30) return `${n} days ago`;
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  });
}

// ---------- lightweight promises ----------
// The other half of Layer 6: not every commitment becomes a document.
// This is deliberately just a flat, typed-in list — no parsing, no
// inferred due dates, no reminders (that would need something to
// deliver them outside the browser). It exists so a promise made in
// passing isn't only as durable as memory.
const PROMISES_KEY = 'groundtruth-promises';

function loadPromises() {
  try {
    const raw = localStorage.getItem(PROMISES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function savePromises(list) {
  try { localStorage.setItem(PROMISES_KEY, JSON.stringify(list)); } catch (e) { /* not fatal */ }
}

function addPromise(text) {
  const list = loadPromises();
  list.push({
    id: `p-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    text,
    createdAt: new Date().toISOString(),
    done: false,
  });
  savePromises(list);
}

function togglePromise(id) {
  const list = loadPromises();
  const item = list.find(p => p.id === id);
  if (item) item.done = !item.done;
  savePromises(list);
}

function removePromise(id) {
  savePromises(loadPromises().filter(p => p.id !== id));
}

function renderPromises() {
  const container = document.getElementById('promise-list');
  container.innerHTML = '';
  const list = loadPromises().slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (list.length === 0) {
    container.innerHTML = '<p class="library-empty">Nothing captured yet — a quick promise made or received, typed in above, shows up here.</p>';
    return;
  }

  const renderRow = p => {
    const row = document.createElement('div');
    row.className = 'inbox-row' + (p.done ? ' promise-done' : '');

    const info = document.createElement('div');
    const textEl = document.createElement('div');
    textEl.className = 'library-row-title';
    textEl.textContent = p.text;
    const metaEl = document.createElement('div');
    metaEl.className = 'library-row-date';
    metaEl.textContent = new Date(p.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    info.appendChild(textEl);
    info.appendChild(metaEl);
    row.appendChild(info);

    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '8px';
    btnGroup.style.flex = 'none';

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'secondary';
    toggleBtn.textContent = p.done ? 'Mark open' : 'Mark done';
    toggleBtn.setAttribute('aria-label', `${p.done ? 'Mark open' : 'Mark done'}: ${p.text}`);
    toggleBtn.addEventListener('click', () => { togglePromise(p.id); renderPromises(); });
    btnGroup.appendChild(toggleBtn);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'secondary';
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('aria-label', `Remove: ${p.text}`);
    removeBtn.addEventListener('click', () => { removePromise(p.id); renderPromises(); });
    btnGroup.appendChild(removeBtn);

    row.appendChild(btnGroup);
    container.appendChild(row);
  };

  const open = list.filter(p => !p.done);
  const done = list.filter(p => p.done);
  open.forEach(renderRow);
  if (done.length) {
    const heading = document.createElement('p');
    heading.className = 'consistency-heading';
    heading.textContent = 'Done';
    container.appendChild(heading);
    done.forEach(renderRow);
  }
}

// ---------- relationships: per-counterparty history ----------
// Groups saved documents by the value of every *Name field, the same
// reliable naming convention the Inbox's date detection relies on
// (companyName, landlordName, tenantName, ...). This can't know which
// name is "you" versus a counterparty — there's no account layer to
// tell it that yet — so it just shows every name and where it
// appears, exactly as typed, and lets whoever's looking make sense of
// it. A name spelled two different ways across documents shows up as
// two separate entries here, same as the consistency checker already
// treats that as worth a second look rather than something to guess
// about.
function collectRelationships() {
  const byName = new Map();
  loadLibrary().forEach(entry => {
    const doc = state.documents.find(d => d.id === entry.documentId);
    if (!doc) return;
    const rolesByName = new Map();
    doc.fields.forEach(f => {
      if (!/name$/i.test(f.id)) return;
      const val = (entry.answers[f.id] || '').trim();
      if (!val) return;
      if (!rolesByName.has(val)) rolesByName.set(val, []);
      rolesByName.get(val).push(f.label);
    });
    rolesByName.forEach((roles, val) => {
      if (!byName.has(val)) byName.set(val, []);
      byName.get(val).push({ entry, docTitle: entry.title, roles, generatedAt: entry.generatedAt });
    });
  });
  return byName;
}

function renderRelationships() {
  const container = document.getElementById('relationships-content');
  container.innerHTML = '';
  const byName = collectRelationships();

  if (byName.size === 0) {
    container.innerHTML = '<p class="library-empty">No names found yet. A company, landlord, tenant, or other name typed into a saved document shows up here automatically.</p>';
    return;
  }

  [...byName.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .forEach(([name, appearances]) => {
      const block = document.createElement('div');
      block.className = 'relationship-block';

      const nameEl = document.createElement('div');
      nameEl.className = 'relationship-name';
      nameEl.textContent = `${name} — ${appearances.length} document${appearances.length === 1 ? '' : 's'}`;
      block.appendChild(nameEl);

      appearances
        .slice()
        .sort((a, b) => new Date(b.generatedAt) - new Date(a.generatedAt))
        .forEach(a => {
          const row = document.createElement('div');
          row.className = 'relationship-doc-row';

          const info = document.createElement('div');
          info.className = 'relationship-doc-info';
          info.textContent = a.docTitle;
          const role = document.createElement('div');
          role.className = 'relationship-doc-role';
          role.textContent = `${a.roles.join(', ')} · ${new Date(a.generatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
          info.appendChild(role);
          row.appendChild(info);

          const viewBtn = document.createElement('button');
          viewBtn.type = 'button';
          viewBtn.className = 'secondary';
          viewBtn.textContent = 'View';
          viewBtn.setAttribute('aria-label', `View ${a.docTitle}`);
          viewBtn.addEventListener('click', () => viewLibraryEntry(a.entry));
          row.appendChild(viewBtn);

          block.appendChild(row);
        });

      container.appendChild(block);
    });
}

// The shared field library (schema/fields/*.json, Phase 2.2) — one file
// per type bucket, listed explicitly rather than discovered, since
// adding a new bucket is a deliberate code change (build_field_library.py
// would need updating too) not something that should silently expand
// what the client fetches.
const SHARED_FIELD_FILES = [
  'people.json', 'entities.json', 'dates.json', 'money.json',
  'addresses.json', 'locations.json', 'text.json',
];

async function loadSharedFields() {
  const files = await Promise.all(
    SHARED_FIELD_FILES.map(f => fetch(`schema/fields/${f}`).then(r => r.json()))
  );
  const byId = {};
  files.flat().forEach(entry => { byId[entry.id] = entry; });
  return byId;
}

async function init() {
  const [docs, clauseData, sharedFields, tiers, layTerms, intakeFlow, nextSteps] = await Promise.all([
    fetch('data/documents.json').then(r => r.json()),
    fetch('data/clauses.json').then(r => r.json()),
    loadSharedFields(),
    fetch('tiers.json').then(r => r.json()),
    // search/lay_terms.json, intake_flow.json, and filing/next_steps.json
    // are all additive, not load-bearing -- search, the intake flow, and
    // the output screen's "what happens after this document" section
    // still work without any of them (the last one just never has
    // anything to show), so a fetch failure degrades one feature rather
    // than the whole app.
    fetch('search/lay_terms.json').then(r => r.json()).catch(() => ({})),
    fetch('search/intake_flow.json').then(r => r.json()).catch(() => ({})),
    fetch('filing/next_steps.json').then(r => r.json()).catch(() => ({})),
  ]);
  state.documents = docs;
  state.clauses = clauseData.clauses;
  state.sharedFields = sharedFields;
  state.tiers = tiers.documents;
  state.layTerms = layTerms;
  state.intakeFlow = intakeFlow;
  state.nextSteps = nextSteps;
  buildJurisdictionIndex();
  renderCategoryFilter();
  renderTierFilter();
  renderPicker();
  renderDocSearch();
  checkForDraft();
  updateLibraryCount();
  initContractWorker();
  buildDocumentIndex();
  buildRelatedDocsIndex();
}

// ---------- read a contract: clause-matching engine ----------
// Everything below runs entirely in the browser against the clause
// library already loaded into state.clauses — no server, no upload.
// This only ever reports what a pasted passage textually resembles in
// the library and, for a matched authority clause, the law it cites.
// It never characterizes the passage as good, bad, enforceable, or
// anything else that would require assessing the reader's situation —
// that line matters here more than anywhere else in the app, because
// reading someone else's contract back to them is exactly where an
// "assessment" is most tempting to slip in.

const STOPWORDS = new Set([
  'the','and','for','that','this','with','from','shall','will','are','was',
  'were','been','being','have','has','had','not','but','can','may','must',
  'any','all','each','such','other','than','then','also','into','onto',
  'upon','under','over','between','within','without','about','above',
  'below','after','before','during','while','when','where','which','who',
  'whom','whose','what','their','they','them','its','his','her','you',
  'your','our','out','both','either','neither','more','most','some',
  'these','those','there','here','only','same','own','per','pursuant',
  'section','subsection','paragraph','article','agreement','party',
  'parties','clause','provision','provisions','including','include',
  'includes','provided','otherwise','herein','hereof','hereto',
  'hereunder','thereof','thereto','whether','means','shall','would',
  'could','should','does','did','doing','done','made','make','makes',
  // The clause corpus below is third-person contract text, where none of
  // these come up meaningfully — but Phase 5.1's document search indexes
  // first-person, casual lay phrasings ("i got fired"), where a filler
  // verb like "got" is common enough in everyday speech to be
  // meaningless, yet rare enough in this specific corpus to earn an
  // inflated idf weight that outweighs the actually distinctive word in
  // the same query (confirmed: "got" out-weighted "fired" itself,
  // because "got" happens to appear in fewer lay-term entries here).
  'got','get','gets','getting','im','my','mine','myself',
]);

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || [])
    .filter(w => !STOPWORDS.has(w));
}

// Phase 9.2: the actual TF-IDF indexing and per-passage scoring moved
// to contract_worker.js (a real, measured ~1.9s of synchronous
// main-thread work for a realistic 20-page paste, profiled in
// tests/performance/performance_budget.js, not assumed) — this is now
// just the main thread's side of that handoff: start the worker once
// at load time, hand it the clause data, and keep a ready-promise so
// a passage match request issued before the worker finishes indexing
// waits for it instead of racing it.
let contractWorker = null;
let contractWorkerReady = null;
let contractWorkerRequestId = 0;
const contractWorkerPending = new Map();

function initContractWorker() {
  contractWorker = new Worker('contract_worker.js');
  contractWorkerReady = new Promise(resolve => {
    contractWorker.onmessage = e => {
      if (e.data.type === 'ready') { resolve(); return; }
      if (e.data.type === 'matches') {
        const pending = contractWorkerPending.get(e.data.id);
        if (pending) { contractWorkerPending.delete(e.data.id); pending(e.data.results); }
      }
    };
    contractWorker.postMessage({ type: 'init', clauses: state.clauses });
  });
}

// Scores every passage against the clause corpus off the main thread
// and resolves clauseIndex back to the real clause object — the one
// thing the worker can't do itself, since it only has a scoring-sized
// copy of the clause data, not app.js's own state.
async function matchPassages(passages) {
  await contractWorkerReady;
  const id = ++contractWorkerRequestId;
  const resultsPromise = new Promise(resolve => contractWorkerPending.set(id, resolve));
  contractWorker.postMessage({ type: 'match', id, passages });
  const results = await resultsPromise;
  return results.map(r => r && { clause: state.clauses[r.clauseIndex], confidence: r.confidence });
}

// Splits pasted contract text into passages to match one at a time.
// Contracts are usually already paragraph-separated by blank lines;
// where they're not (a single unbroken block), falls back to
// splitting before numbered or lettered clause markers, and if that
// still yields one giant block, splits on sentence boundaries so a
// 3,000-word paste doesn't get compared to the library as one unit.
function splitPassages(text) {
  let chunks = text.split(/\n\s*\n+/).map(s => s.trim()).filter(Boolean);

  if (chunks.length <= 1) {
    const bySingleNewline = text
      .split(/\n(?=\s*(?:\(?[0-9]{1,3}[\.\)]|\(?[a-z]\)|[A-Z][A-Z \-]{4,}:|ARTICLE\b|SECTION\b))/)
      .map(s => s.trim())
      .filter(Boolean);
    if (bySingleNewline.length > 1) chunks = bySingleNewline;
  }

  if (chunks.length === 1 && chunks[0].length > 900) {
    chunks = chunks[0]
      .split(/(?<=[.;])\s+(?=[A-Z])/)
      .reduce((acc, sentence) => {
        const last = acc[acc.length - 1];
        if (last && last.length < 400) acc[acc.length - 1] = `${last} ${sentence}`;
        else acc.push(sentence);
        return acc;
      }, [])
      .map(s => s.trim())
      .filter(Boolean);
  }

  return chunks.filter(c => c.length >= 20);
}

async function renderIncomingResults(passages) {
  const results = document.getElementById('incoming-results');
  results.innerHTML = '';

  if (passages.length === 0) {
    results.innerHTML = '<p class="library-empty">Paste in some contract text above, then click "Read this contract."</p>';
    return;
  }

  // The actual scoring now happens off the main thread (Phase 9.2) —
  // this message round trip is the one part of reading a long paste
  // that still takes real wall-clock time, so it gets a visible state
  // instead of the screen looking frozen while nothing changes.
  results.innerHTML = '<p class="library-empty">Reading…</p>';
  const matchResults = await matchPassages(passages);
  const matches = passages.map((p, i) => ({ passage: p, match: matchResults[i] }));
  results.innerHTML = '';
  const matchedCount = matches.filter(m => m.match).length;

  const summary = document.createElement('p');
  summary.className = 'incoming-summary';
  summary.textContent = `${matchedCount} of ${matches.length} passage${matches.length === 1 ? '' : 's'} resemble${matchedCount === 1 ? 's' : ''} something in Groundtruth's library.`;
  results.appendChild(summary);

  matches.forEach(({ passage, match }) => {
    const item = document.createElement('div');
    item.className = 'incoming-item';

    const p = document.createElement('p');
    p.className = 'incoming-passage';
    p.textContent = passage;
    item.appendChild(p);

    if (!match) {
      const note = document.createElement('p');
      note.className = 'incoming-unmatched';
      note.textContent = 'Not recognized in Groundtruth’s library yet.';
      item.appendChild(note);
      results.appendChild(item);
      return;
    }

    const label = document.createElement('p');
    label.className = 'incoming-match-label' + (match.confidence === 'weak' ? ' weak' : '');
    label.textContent = match.confidence === 'strong' ? 'Resembles' : 'May resemble';
    item.appendChild(label);

    const h4 = document.createElement('h4');
    h4.textContent = match.clause.title;
    item.appendChild(h4);

    const badge = renderBadge(match.clause);
    if (badge) {
      item.appendChild(badge);
    } else {
      const note = document.createElement('p');
      note.className = 'incoming-unmatched';
      note.textContent = 'This resembles standard structural language in our library — it doesn’t carry a legal citation of its own.';
      item.appendChild(note);
    }

    results.appendChild(item);
  });
}

// Moves focus to the new screen's heading on every navigation — without
// this, a screen reader keeps announcing whatever was focused on the
// screen that just disappeared, and a keyboard user's next Tab resumes
// from that same stale spot instead of the top of what's now visible.
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  screen.classList.add('active');
  const heading = screen.querySelector('h1');
  if (heading) heading.focus();
}

// Filter chips let someone narrow the list by category — a self-select
// browse, same as any storefront's category nav. They never interpret
// a reader's specific situation or suggest which document fits it;
// every chip just shows or hides documents whose own, already-written
// description already puts them in that category.
// Most of this corpus is California law with federal law woven in where
// the subject is federal (copyright, FLSA, I-9, CFAA, and the like) —
// true of the library as a whole, but a reader looking at one document
// has no way to tell which this one is. This derives it, per document,
// from the same citations already shown on each clause's badge — never a
// separate claim that could drift from what's actually cited.
//
// Classification rule, applied per citation on a document's authority
// clauses: a citation counts as California if its case or cite text names
// "Cal." or "California", or its url is a californa.gov legislative/court
// host; it counts as federal if its text names a federal reporter (U.S.C.,
// C.F.R., a federal circuit's "F.2d/3d/4th", a Supreme Court "U.S." cite,
// "S. Ct.") or its url is a federal statutory/regulatory host (Cornell
// LII, eCFR, govinfo, uscode.house.gov, supremecourt.gov). A citation
// hosted on courtlistener.com is deliberately NOT treated as a federal
// signal by itself — CourtListener hosts state and federal case law
// alike, so the host says nothing about jurisdiction on its own; only the
// reporter named in the citation text does. A document's overall label is
// then: "CA" if every classified citation is California, "FED" if every
// one is federal, "MIXED" if both appear, "OTHER" if none of its
// citations matched either pattern (a document built entirely from
// out-of-state case law used to illustrate a general doctrine — true
// today only of the At-Will Employment clause's Toussaint/Lincoln
// citations), or "NONE" if the document has no authority clauses to
// classify at all (a plain form with no legal claim in it, like an
// interview scorecard).
const JURISDICTION_CA_RE = /\bCal\.|\bCalifornia\b/i;
const JURISDICTION_CA_URL_RE = /leginfo\.legislature\.ca\.gov|courts\.ca\.gov/i;
const JURISDICTION_FED_RE = /\bU\.S\.C\.|\bC\.F\.R\.|\bF\.\s*(?:2d|3d|4th|Supp)|\b\d+\s+U\.S\.\s+\d|\bCir\.\)|\bS\.\s*Ct\.|U\.S\. Const|\bFed\.\s*R\.|\bPub\.\s*L\.\s*No/i;
const JURISDICTION_FED_URL_RE = /law\.cornell\.edu|ecfr\.gov|govinfo\.gov|uscode\.house\.gov|supremecourt\.gov/i;

function classifyCitationJurisdiction(cit) {
  const text = `${cit.case || ''} ${cit.cite || ''}`;
  const url = cit.url || '';
  const isCA = JURISDICTION_CA_RE.test(text) || JURISDICTION_CA_URL_RE.test(url);
  const isFed = JURISDICTION_FED_RE.test(text) || JURISDICTION_FED_URL_RE.test(url);
  if (isCA && !isFed) return 'CA';
  if (isFed && !isCA) return 'FED';
  if (isCA && isFed) return 'BOTH';
  return 'OTHER';
}

function classifyDocumentJurisdiction(doc) {
  const byId = new Map(state.clauses.map(c => [c.id, c]));
  let hasAuthority = false, hasCA = false, hasFed = false, hasOther = false;
  doc.clauseOrder.forEach(id => {
    const clause = byId.get(id);
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

const JURISDICTION_LABEL = {
  CA: 'California',
  FED: 'Federal',
  MIXED: 'California & federal',
  OTHER: 'General — not state-specific',
};

const JURISDICTION_NOTICE = {
  CA: "This document's legal clauses are sourced primarily to California law. Outside California, some of what it cites may not apply.",
  FED: "This document's legal clauses are sourced to federal law, which applies the same way in every state.",
  MIXED: "This document's legal clauses are sourced to a mix of California and federal law. Outside California, the California-specific parts may not apply.",
  OTHER: "This document's legal clauses illustrate a general doctrine using out-of-state case law as examples, not a California-specific rule.",
};

function buildJurisdictionIndex() {
  state.jurisdictionByDoc = new Map(
    state.documents.map(d => [d.id, classifyDocumentJurisdiction(d)])
  );
}

function jurisdictionBadgeHTML(doc) {
  const key = state.jurisdictionByDoc.get(doc.id);
  if (!key || key === 'NONE') return '';
  return `<span class="jurisdiction-pill" title="${JURISDICTION_NOTICE[key]}">${JURISDICTION_LABEL[key]}</span>`;
}

// Quality tier (Phase 3.1 — tools/tiering.py computes tiers.json offline;
// nothing here re-derives a tier, only displays one). Every explanation
// states what was checked, never whether the result is enough for any
// particular reader's situation — the same "inform, never advise" line
// every other piece of UI copy in this app holds to. Tier A is included
// for when a document eventually reaches it (tools/tiering.py's own
// comments explain why none does yet); showing copy for a tier that's
// currently empty isn't a bug, it's the tier scale being honestly
// visible before anything has earned the top of it.
const TIER_LABEL = { A: 'Tier A', B: 'Tier B', C: 'Tier C' };
const TIER_EXPLANATION = {
  A: 'Meets every Tier B check, plus an independent adversarial review and an automated accessibility check, both with no open issues.',
  B: 'Every field explains why it is asked, every citation has been checked and is still current, and a sample has been generated and reviewed.',
  C: 'Passed the corpus’s structural and citation checks. Some fields may not yet explain why they are asked, or a citation check may be incomplete.',
};

function tierBadgeHTML(doc) {
  const info = state.tiers && state.tiers[doc.id];
  if (!info) return '';
  const tier = info.tier;
  return `<span class="tier-pill tier-${tier}" title="${TIER_EXPLANATION[tier]}">` +
    `${TIER_LABEL[tier]}<span class="visually-hidden">: ${TIER_EXPLANATION[tier]}</span></span>`;
}

function renderTierFilter() {
  const el = document.getElementById('tier-filter');
  if (!el) return;
  el.innerHTML = '';

  const makeChip = (label, value) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.tierFilter === value ? ' active' : '');
    chip.setAttribute('aria-pressed', state.tierFilter === value ? 'true' : 'false');
    chip.textContent = label;
    chip.addEventListener('click', () => {
      state.tierFilter = value;
      renderTierFilter();
      renderPicker();
    });
    el.appendChild(chip);
  };

  makeChip('All tiers', null);
  ['A', 'B', 'C'].forEach(t => makeChip(TIER_LABEL[t], t));
}

// ---------- document search (Phase 5.1) ----------
// A second idf-weighted inverted index, the same technique
// contract_worker.js now uses over clauses (Phase 9.2 moved that one
// off the main thread) but over DOCUMENTS instead: each document's
// title +
// description + category names + its lay-term phrasings
// (search/lay_terms.json, loaded at init) are tokenized and indexed the
// same way clause text is. The lay terms ARE the synonym/lay-term
// mapping the master plan asks for -- a search for "deposit back" finds
// the security-deposit document because that phrase is literally
// indexed against it, not because of a separate synonym-substitution
// pass at query time.
function buildDocumentIndex() {
  const df = new Map();
  const docTokenSets = state.documents.map(d => {
    const layTerms = (state.layTerms && state.layTerms[d.id]) || [];
    const text = [d.title, d.description, ...(d.categories || []), ...layTerms].join(' ');
    const set = new Set(tokenize(text));
    set.forEach(t => df.set(t, (df.get(t) || 0) + 1));
    return set;
  });

  const N = state.documents.length;
  const idf = new Map();
  df.forEach((count, token) => idf.set(token, Math.log(1 + N / count)));

  const invertedIndex = new Map();
  docTokenSets.forEach((set, idx) => {
    set.forEach(t => {
      if (!invertedIndex.has(t)) invertedIndex.set(t, []);
      invertedIndex.get(t).push(idx);
    });
  });

  state.docTokenSets = docTokenSets;
  state.docIdf = idf;
  state.docInvertedIndex = invertedIndex;
  state.docVocabulary = [...idf.keys()];
}

// Plain Levenshtein edit distance. `max` is a short-circuit budget, not
// a precision loss -- callers only care whether a candidate is within
// a small typo-sized threshold, never the exact distance to a
// completely unrelated word, so bailing out once both strings' lengths
// already rule out a match within budget is always safe.
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const dp = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) dp[j] = j;
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const temp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = temp;
    }
  }
  return dp[b.length];
}

// A query token with no exact match in the index might just be a typo
// -- find the closest real vocabulary token within a small edit-distance
// budget (tighter for short words, where a 2-character change is really
// a different word, not a typo of the same one) and search for that
// instead. Returns the original token unchanged if nothing close enough
// exists, so an unresolvable token simply contributes no match rather
// than a wrong one.
function resolveTypo(token) {
  if (state.docIdf.has(token)) return token;
  const maxDist = token.length <= 4 ? 1 : 2;
  let best = token;
  let bestDist = maxDist + 1;
  for (const candidate of state.docVocabulary) {
    if (Math.abs(candidate.length - token.length) > maxDist) continue;
    const dist = editDistance(token, candidate, maxDist);
    if (dist < bestDist) { bestDist = dist; best = candidate; }
  }
  return bestDist <= maxDist ? best : token;
}

const DOC_SEARCH_LIMIT = 24;

// Ranks every document against a free-text query by cosine similarity
// over the tf-idf vectors buildDocumentIndex() built, after resolving
// each query token against the vocabulary for typo tolerance. Returns
// [] for a query with no recognizable terms at all, rather than every
// document in an arbitrary order -- the caller (renderPicker) is what
// decides how to render "no results" versus "no search active."
// The scoring core behind searchDocuments(), factored out so Phase
// 5.2's intake flow can rank within one category's documents only
// (`allowedIndices`) rather than the whole corpus -- the same
// cosine-similarity math either way, just over a restricted candidate
// pool instead of every document's inverted-index entry.
function scoreDocuments(query, allowedIndices) {
  const rawTokens = tokenize(query);
  if (rawTokens.length === 0) return [];
  const resolvedTokens = rawTokens.map(resolveTypo);
  const allowed = allowedIndices ? new Set(allowedIndices) : null;

  const scores = new Map();
  const matchedTermsByDoc = new Map();
  resolvedTokens.forEach(t => {
    const idf = state.docIdf.get(t);
    if (!idf) return;
    const docList = state.docInvertedIndex.get(t) || [];
    docList.forEach(idx => {
      if (allowed && !allowed.has(idx)) return;
      scores.set(idx, (scores.get(idx) || 0) + idf * idf);
      if (!matchedTermsByDoc.has(idx)) matchedTermsByDoc.set(idx, new Set());
      matchedTermsByDoc.get(idx).add(t);
    });
  });

  let queryWeight = 0;
  resolvedTokens.forEach(t => { const idf = state.docIdf.get(t); if (idf) queryWeight += idf * idf; });
  if (queryWeight === 0) return [];

  const results = [];
  scores.forEach((rawScore, idx) => {
    let docWeight = 0;
    state.docTokenSets[idx].forEach(t => { docWeight += (state.docIdf.get(t) || 0) ** 2; });
    if (docWeight === 0) return;
    const cosine = rawScore / (Math.sqrt(queryWeight) * Math.sqrt(docWeight));
    results.push({ document: state.documents[idx], score: cosine, matchedTerms: [...matchedTermsByDoc.get(idx)] });
  });

  results.sort((a, b) => b.score - a.score);
  return results;
}

function searchDocuments(query) {
  return scoreDocuments(query, null).slice(0, DOC_SEARCH_LIMIT);
}

function renderCategoryFilter() {
  const el = document.getElementById('category-filter');
  el.innerHTML = '';
  const categories = [...new Set(state.documents.flatMap(d => d.categories || []))];

  const makeChip = (label, value) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.categoryFilter === value ? ' active' : '');
    chip.setAttribute('aria-pressed', state.categoryFilter === value ? 'true' : 'false');
    chip.textContent = label;
    chip.addEventListener('click', () => {
      state.categoryFilter = value;
      renderCategoryFilter();
      renderPicker();
    });
    el.appendChild(chip);
  };

  makeChip('All', null);
  categories.forEach(c => makeChip(c, c));
}

const TIER_SORT_RANK = { A: 0, B: 1, C: 2 };

// ---------- picker pagination (Phase 5.4) ----------
// Rendering all 740 cards at once is the slow part on a mid-range
// phone, not computing which 740 cards to show -- filtering/sorting
// 740 plain objects is cheap, building and attaching 740 DOM nodes
// with listeners is not. So the full filtered/sorted list is still
// computed every time (getPickerDocs()), but only a page of it is
// ever turned into DOM nodes; "Show more" appends another page to the
// same list rather than re-rendering everything already shown.
const PICKER_PAGE_SIZE = 60;

function getPickerDocs() {
  const searchActive = state.searchQuery.trim().length >= 2;
  let docs;
  let matchedTermsById = null;
  if (searchActive) {
    // A real, active search always replaces the full document list
    // with its ranked results -- including an empty list when nothing
    // matches, so "no results" reads as no results, not as search
    // being silently ignored in favor of everything.
    docs = (state.searchResults || []).map(r => r.document);
    matchedTermsById = new Map((state.searchResults || []).map(r => [r.document.id, r.matchedTerms]));
  } else {
    docs = state.documents;
  }
  docs = state.categoryFilter
    ? docs.filter(d => (d.categories || []).includes(state.categoryFilter))
    : docs;
  if (state.tierFilter) {
    docs = docs.filter(d => state.tiers && state.tiers[d.id] && state.tiers[d.id].tier === state.tierFilter);
  }
  if (state.tierSortEnabled) {
    // A stable sort by tier rank only — ties keep their existing
    // relative order rather than being re-shuffled, so toggling this on
    // and off doesn't scramble the list beyond what the tier itself
    // explains.
    docs = docs
      .map((d, i) => ({ d, i }))
      .sort((a, b) => {
        const ra = TIER_SORT_RANK[(state.tiers && state.tiers[a.d.id] && state.tiers[a.d.id].tier) || 'C'];
        const rb = TIER_SORT_RANK[(state.tiers && state.tiers[b.d.id] && state.tiers[b.d.id].tier) || 'C'];
        return ra - rb || a.i - b.i;
      })
      .map(x => x.d);
  }
  return { docs, matchedTermsById, searchActive };
}

function makeDocCard(doc, matchedTermsById) {
  const card = document.createElement('button');
  card.className = 'doc-card';
  card.type = 'button';
  const matched = matchedTermsById && matchedTermsById.get(doc.id);
  const matchedHTML = matched && matched.length
    ? `<p class="search-matched">Matched: ${matched.join(', ')}</p>`
    : '';
  card.innerHTML = `
    <div>
      <h3>${doc.title}${jurisdictionBadgeHTML(doc)}${tierBadgeHTML(doc)}</h3>
      <p>${doc.description}</p>
      ${matchedHTML}
    </div>
    <span class="go">START <span aria-hidden="true">&rarr;</span></span>
  `;
  card.addEventListener('click', () => {
    state.document = doc;
    state.answers = {};
    renderWizard();
    showScreen('screen-wizard');
    document.getElementById('draft-banner').hidden = true;
  });
  return card;
}

// The only part of the picker that touches the DOM. Renders exactly
// one page (docs[0..visibleCount)) plus a "Show more" button appending
// the next page, rather than ever building nodes for documents that
// aren't shown yet.
function renderPickerPage(docs, matchedTermsById, visibleCount) {
  const list = document.getElementById('doc-list');
  list.innerHTML = '';
  docs.slice(0, visibleCount).forEach(doc => {
    list.appendChild(makeDocCard(doc, matchedTermsById));
  });
  const remaining = docs.length - visibleCount;
  if (remaining > 0) {
    const more = document.createElement('button');
    more.type = 'button';
    more.id = 'picker-show-more';
    more.className = 'secondary picker-show-more';
    more.textContent = `Show ${Math.min(PICKER_PAGE_SIZE, remaining)} more (${remaining} left)`;
    more.addEventListener('click', () => {
      state.pickerVisibleCount = visibleCount + PICKER_PAGE_SIZE;
      renderPickerPage(docs, matchedTermsById, state.pickerVisibleCount);
    });
    list.appendChild(more);
  }
}

// The entry point used whenever the underlying document list itself
// changes (search, category/tier filter, tier sort, initial load) --
// always resets back to the first page, since "page 3 of the old
// filter" has no meaning against a new one.
function renderPicker() {
  const list = document.getElementById('doc-list');
  const { docs, matchedTermsById, searchActive } = getPickerDocs();
  if (searchActive && docs.length === 0) {
    list.innerHTML = '';
    const empty = document.createElement('p');
    empty.className = 'search-empty';
    empty.textContent = 'No documents match that search.';
    list.appendChild(empty);
    return;
  }
  state.pickerVisibleCount = Math.min(PICKER_PAGE_SIZE, docs.length);
  renderPickerPage(docs, matchedTermsById, state.pickerVisibleCount);
}

function renderDocSearch() {
  const input = document.getElementById('doc-search');
  if (!input) return;
  let debounceTimer = null;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.searchQuery = input.value;
      state.searchResults = state.searchQuery.trim().length >= 2
        ? searchDocuments(state.searchQuery)
        : null;
      renderPicker();
    }, 150);
  });
}

// ---------- "which document do I need?" intake (Phase 5.2) ----------
// A short, guided alternative to search/browse: pick a situation
// category, answer 2 narrowing questions built from
// search/intake_flow.json, and get a ranked list scored by the same
// document search engine above -- restricted to that category's
// documents, with each narrowing answer's keywords folded into the
// query alongside the category name itself. This never tells anyone
// which document is "the" answer: every result is presented with its
// own real title and description, headed by "Documents that match
// what you described" -- a description of the match, not a
// recommendation. intakeStep 0 is the category picker; 1..N are that
// category's narrowing questions; N+1 is the results screen.
function startIntake() {
  state.intakeCategory = null;
  state.intakeStep = 0;
  state.intakeAnswers = [];
  renderIntakeStep();
  showScreen('screen-intake');
}

function chooseIntakeCategory(category) {
  state.intakeCategory = category;
  state.intakeStep = 1;
  state.intakeAnswers = [];
  renderIntakeStep();
}

function answerIntakeQuestion(option) {
  state.intakeAnswers.push(option);
  state.intakeStep += 1;
  renderIntakeStep();
}

function intakeBack() {
  if (state.intakeStep === 0) {
    showScreen('screen-picker');
    return;
  }
  if (state.intakeStep === 1) {
    state.intakeCategory = null;
    state.intakeStep = 0;
  } else {
    state.intakeAnswers.pop();
    state.intakeStep -= 1;
  }
  renderIntakeStep();
}

function intakeQuestionsForCategory(category) {
  return (state.intakeFlow && state.intakeFlow[category]) || [];
}

function renderIntakeResults() {
  const container = document.getElementById('intake-results');
  const category = state.intakeCategory;
  const categoryIndices = state.documents
    .map((d, idx) => ((d.categories || []).includes(category) ? idx : -1))
    .filter(idx => idx !== -1);

  const keywordParts = [category, ...state.intakeAnswers.map(a => a.keywords).filter(Boolean)];
  let scored = scoreDocuments(keywordParts.join(' '), categoryIndices);
  if (scored.length === 0) {
    // Every narrowing answer's keywords came up empty (e.g. "not sure
    // / none of these"), or matched nothing -- fall back to the whole
    // category rather than showing nothing after a real conversation.
    scored = categoryIndices.map(idx => ({ document: state.documents[idx], matchedTerms: [] }));
  }
  const top = scored.slice(0, 10);

  container.innerHTML = '';
  const heading = document.createElement('p');
  heading.className = 'intake-results-heading';
  heading.textContent = 'Documents that match what you described';
  container.appendChild(heading);

  if (top.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'search-empty';
    empty.textContent = 'No documents matched. Try browsing by category instead.';
    container.appendChild(empty);
    return;
  }

  top.forEach(({ document: doc }) => {
    const card = document.createElement('button');
    card.className = 'doc-card';
    card.type = 'button';
    card.innerHTML = `
      <div>
        <h3>${doc.title}${jurisdictionBadgeHTML(doc)}${tierBadgeHTML(doc)}</h3>
        <p>${doc.description}</p>
      </div>
      <span class="go">START <span aria-hidden="true">&rarr;</span></span>
    `;
    card.addEventListener('click', () => {
      state.document = doc;
      state.answers = {};
      renderWizard();
      showScreen('screen-wizard');
      document.getElementById('draft-banner').hidden = true;
    });
    container.appendChild(card);
  });
}

function renderIntakeStep() {
  const prompt = document.getElementById('intake-prompt');
  const options = document.getElementById('intake-options');
  const results = document.getElementById('intake-results');
  options.innerHTML = '';
  results.innerHTML = '';

  if (state.intakeStep === 0) {
    prompt.textContent = "What's this about?";
    options.hidden = false;
    results.hidden = true;
    // Derived live from the documents themselves, same as
    // renderCategoryFilter() -- this app has no other declaration of
    // the category list.
    const categories = [...new Set(state.documents.flatMap(d => d.categories || []))];
    categories.forEach(category => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'intake-option';
      btn.textContent = category;
      btn.addEventListener('click', () => chooseIntakeCategory(category));
      options.appendChild(btn);
    });
    return;
  }

  const questions = intakeQuestionsForCategory(state.intakeCategory);
  const questionIndex = state.intakeStep - 1;
  if (questionIndex < questions.length) {
    const q = questions[questionIndex];
    prompt.textContent = q.prompt;
    options.hidden = false;
    results.hidden = true;
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'intake-option';
      btn.textContent = option.label;
      btn.addEventListener('click', () => answerIntakeQuestion(option));
      options.appendChild(btn);
    });
    return;
  }

  // Past the last narrowing question: show the ranked results.
  prompt.textContent = '';
  options.hidden = true;
  results.hidden = false;
  renderIntakeResults();
}

// ---------- schema-driven wizard (Phase 2.3) ----------
// Replaces one flat screen of every field at once with sectioned steps,
// a review screen, and per-field validation specific to each field's
// `type` — reading the document's own field schema instead of assuming
// every field is a plain text input. Grouping fields into fixed-size
// steps by their existing order (rather than any hand-picked per-document
// sectioning, which isn't data this corpus has) is a deliberate
// simplification: it's objective, needs no per-document curation across
// 740 documents, and still delivers the real win — a long document no
// longer dumps 15+ inputs on one screen.
const WIZARD_STEP_SIZE = 4;

function computeWizardSteps(fields) {
  const steps = [];
  for (let i = 0; i < fields.length; i += WIZARD_STEP_SIZE) {
    steps.push(fields.slice(i, i + WIZARD_STEP_SIZE));
  }
  return steps.length ? steps : [[]];
}

// showIf support (Phase 2.4 is what gives this real data to act on — no
// field in the corpus sets one yet — but the renderer has to be correct
// the day one exists, not patched in under pressure alongside it).
function fieldIsVisible(field, answers) {
  const cond = field.showIf;
  if (!cond) return true;
  const val = answers[cond.field] || '';
  if (cond.equals !== undefined) return val === cond.equals;
  if (cond.notEquals !== undefined) return val !== cond.notEquals;
  return true;
}

function visibleFieldsInStep(step) {
  return step.filter(f => fieldIsVisible(f, state.answers));
}

function nextVisibleStepIndex(from) {
  for (let i = from + 1; i < state.wizardSteps.length; i++) {
    if (visibleFieldsInStep(state.wizardSteps[i]).length) return i;
  }
  return state.wizardSteps.length; // sentinel: past the last step is the review screen
}

function prevVisibleStepIndex(from) {
  for (let i = from - 1; i >= 0; i--) {
    if (visibleFieldsInStep(state.wizardSteps[i]).length) return i;
  }
  return -1; // sentinel: no earlier step has anything visible
}

// whyWeAsk lives on the field itself if a document ever sets one
// directly, otherwise resolved through sharedFieldId into the library
// loaded at init() — most fields get it this way today (Phase 2.2b
// wrote whyWeAsk for the 172 library entries, not per document).
function fieldWhyWeAsk(f) {
  if (f.whyWeAsk) return f.whyWeAsk;
  const shared = f.sharedFieldId && state.sharedFields && state.sharedFields[f.sharedFieldId];
  return (shared && shared.whyWeAsk) || null;
}

function inputTypeFor(field) {
  if (field.type === 'email') return 'email';
  if (field.type === 'phone') return 'tel';
  return 'text'; // every other type (including select/multiselect/boolean/
                 // signature, none of which any field uses yet) falls back
                 // to a plain text input rather than failing to render.
}

// Validators beyond "is it present" — the schema's own `validation`
// property (regex/min/max) isn't populated yet (left for hand-curation,
// see field.schema.json), so these are sane per-type defaults. email and
// phone have one real, narrow shape, so those are checked structurally.
// money/integer/percent turned out NOT to: the corpus's own real
// examples legitimately mix formats no single strict pattern accepts —
// "$25,000 cash", "$2.50 per unit", "10,000,000 shares of common
// stock" — found by running this corpus's own example values through
// the first, stricter version of this check (tools/wizard_regression.js)
// before trusting it, which is exactly what caught these. A validator
// that rejects a document's own real example would reject a real
// person's real answer just as easily, so these three just confirm a
// number is present at all, not any particular format around it.
const HAS_DIGIT = { test: v => /\d/.test(v), message: 'This field should include a number.' };
const FIELD_VALIDATORS = {
  email: { test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: 'This doesn’t look like a complete email address.' },
  phone: { test: v => v.replace(/\D/g, '').length >= 7, message: 'This doesn’t look like a complete phone number.' },
  integer: HAS_DIGIT,
  percent: HAS_DIGIT,
  money: HAS_DIGIT,
};

function validateField(f, rawValue) {
  const value = (rawValue || '').trim();
  if (f.required && !value) return 'This field is required.';
  if (!value) return null;
  const validator = FIELD_VALIDATORS[f.type];
  if (validator && !validator.test(value)) return validator.message;
  return null;
}

function renderStepFields(step) {
  const fieldsEl = document.getElementById('wizard-fields');
  fieldsEl.innerHTML = '';
  visibleFieldsInStep(step).forEach(f => {
    const wrap = document.createElement('div');
    wrap.className = 'field';
    if (f.sensitive) wrap.dataset.sensitive = 'true';

    const label = document.createElement('label');
    label.setAttribute('for', `field-${f.id}`);
    label.textContent = f.label;
    wrap.appendChild(label);

    const describedBy = [];
    const why = fieldWhyWeAsk(f);
    if (why) {
      const helpEl = document.createElement('p');
      helpEl.className = 'field-help';
      helpEl.id = `field-${f.id}-help`;
      helpEl.textContent = why;
      wrap.appendChild(helpEl);
      describedBy.push(helpEl.id);
    }

    let sensitiveNoteEl = null;
    if (f.sensitive) {
      sensitiveNoteEl = document.createElement('p');
      sensitiveNoteEl.className = 'field-sensitive-note';
      sensitiveNoteEl.id = `field-${f.id}-sensitive`;
      sensitiveNoteEl.textContent = 'This is used to fill in your document on this screen.';
      describedBy.push(sensitiveNoteEl.id);
    }

    const existing = state.answers[f.id] || '';
    const input = f.type === 'longtext' ? document.createElement('textarea') : document.createElement('input');
    if (f.type === 'longtext') {
      input.rows = 4;
    } else {
      input.type = inputTypeFor(f);
    }
    input.id = `field-${f.id}`;
    input.name = f.id;
    if (f.placeholder) input.placeholder = f.placeholder;
    input.value = existing;
    if (f.required) {
      input.required = true;
      input.setAttribute('aria-required', 'true');
    }
    const errorId = `field-${f.id}-error`;
    describedBy.push(errorId);
    input.setAttribute('aria-describedby', describedBy.join(' '));
    wrap.appendChild(input);

    const errorEl = document.createElement('p');
    errorEl.className = 'field-error';
    errorEl.id = errorId;
    errorEl.setAttribute('role', 'alert');
    errorEl.hidden = true;
    wrap.appendChild(errorEl);

    if (sensitiveNoteEl) wrap.appendChild(sensitiveNoteEl);

    fieldsEl.appendChild(wrap);
  });
}

function validateStep(step) {
  let firstInvalid = null;
  visibleFieldsInStep(step).forEach(f => {
    const input = document.getElementById(`field-${f.id}`);
    const errorEl = document.getElementById(`field-${f.id}-error`);
    const message = validateField(f, input.value);
    if (message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
      input.setAttribute('aria-invalid', 'true');
      if (!firstInvalid) firstInvalid = input;
    } else {
      errorEl.hidden = true;
      errorEl.textContent = '';
      input.removeAttribute('aria-invalid');
    }
  });
  if (firstInvalid) firstInvalid.focus();
  return !firstInvalid;
}

// Lists every currently-visible answer with a jump-back-and-focus Edit
// link, grouped by nothing in particular — one flat list in field
// order, since there's no section metadata to group it by any more
// meaningfully than the steps already impose.
function renderReview() {
  const reviewEl = document.getElementById('wizard-review');
  reviewEl.innerHTML = '';
  const list = document.createElement('dl');
  list.className = 'review-list';
  state.wizardSteps.forEach((step, stepIdx) => {
    visibleFieldsInStep(step).forEach(f => {
      const item = document.createElement('div');
      item.className = 'review-item';
      const dt = document.createElement('dt');
      dt.textContent = f.label;
      const dd = document.createElement('dd');
      dd.textContent = state.answers[f.id] || '(left blank)';
      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'secondary review-edit';
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => {
        state.wizardStepIndex = stepIdx;
        renderWizardStep();
        const target = document.getElementById(`field-${f.id}`);
        if (target) target.focus();
      });
      item.appendChild(dt);
      item.appendChild(dd);
      item.appendChild(editBtn);
      list.appendChild(item);
    });
  });
  reviewEl.appendChild(list);
}

function renderWizardStep() {
  const total = state.wizardSteps.length;
  const idx = state.wizardStepIndex;
  const reviewing = idx >= total;
  state.wizardReviewing = reviewing;

  const totalStages = total + 1; // the review screen is its own stage
  const stage = reviewing ? totalStages : idx + 1;
  document.getElementById('wizard-progress-fill').style.width = `${Math.round((stage / totalStages) * 100)}%`;

  const headingEl = document.getElementById('wizard-step-heading');
  const fieldsEl = document.getElementById('wizard-fields');
  const reviewEl = document.getElementById('wizard-review');
  const prevBtn = document.getElementById('wizard-prev');
  const nextBtn = document.getElementById('wizard-next');
  const submitBtn = document.getElementById('wizard-submit');

  if (reviewing) {
    headingEl.textContent = 'Review your answers';
    fieldsEl.hidden = true;
    fieldsEl.innerHTML = '';
    reviewEl.hidden = false;
    renderReview();
    nextBtn.hidden = true;
    submitBtn.hidden = false;
    prevBtn.hidden = prevVisibleStepIndex(total) === -1;
  } else {
    headingEl.textContent = `Step ${idx + 1} of ${total}`;
    reviewEl.hidden = true;
    reviewEl.innerHTML = '';
    fieldsEl.hidden = false;
    renderStepFields(state.wizardSteps[idx]);
    nextBtn.hidden = false;
    submitBtn.hidden = true;
    prevBtn.hidden = prevVisibleStepIndex(idx) === -1;
  }
  headingEl.focus();
  saveDraft();
}

function renderWizard(resumeStep) {
  document.getElementById('wizard-title').textContent = state.document.title;
  document.getElementById('wizard-lede').textContent =
    "Fill in a few details — nothing here is legal advice, just fields the document needs.";

  const jKey = state.jurisdictionByDoc.get(state.document.id);
  const noticeEl = document.getElementById('wizard-jurisdiction');
  if (jKey && jKey !== 'NONE') {
    noticeEl.textContent = JURISDICTION_NOTICE[jKey];
    noticeEl.hidden = false;
  } else {
    noticeEl.hidden = true;
  }

  state.wizardSteps = computeWizardSteps(state.document.fields || []);
  state.wizardStepIndex = Math.min(resumeStep || 0, state.wizardSteps.length);
  renderWizardStep();
}

// Builds the "Prepared for X · Y" line without assuming every document
// has an employeeName field — a formation document like the LLC
// Operating Agreement has a memberName instead. Falls back gracefully
// when only one of the two names is present, rather than showing a
// bare em dash for a field that document never collects.
function preparedForLine(answers) {
  const person = answers.employeeName || answers.memberName || '';
  const company = answers.companyName || '';
  if (person && company) return `Prepared for ${person} · ${company}`;
  if (person) return `Prepared for ${person}`;
  if (company) return `Prepared for ${company}`;

  // Neither of the two common id pairs above applies to this document's
  // fields (e.g. a lease's landlordName/tenantName) — fall back to the
  // document's own field order rather than hardcoding every future
  // document family's field ids here too.
  const values = (state.document.fields || [])
    .map(f => answers[f.id])
    .filter(Boolean);
  if (values.length >= 2) return `Prepared for ${values[0]} · ${values[1]}`;
  if (values.length === 1) return `Prepared for ${values[0]}`;
  return 'Prepared for —';
}

// Replace {{fieldId}} with the matching answer. Leaves the placeholder
// untouched if a field was somehow left blank, rather than silently
// dropping it — a half-filled document should look half-filled, not
// wrong. Also swallows a template's own trailing period when the
// inserted value already ends in one ("Acme, Inc." + ".") so real
// company names like "Acme, Inc." don't render as "Acme, Inc..".
function substitute(text, answers) {
  return text.replace(/\{\{(\w+)\}\}(\.?)/g, (match, key, trailingDot) => {
    const val = answers[key];
    if (!val) return match;
    return trailingDot && val.endsWith('.') ? val : val + trailingDot;
  });
}

// Walk the document's clauseOrder, look each id up in the clause set,
// and substitute this run's answers into its body. Clauses with no
// match are dropped rather than throwing, so a typo in clauseOrder
// fails quietly instead of breaking the whole render.
// Clause-level conditionals (Phase 2.4). A clauseOrder entry is either a
// bare clause id (always included, the only shape that existed before
// this phase and still what almost every document uses) or
// {id, includeIf} — includeIf has the same {field, equals?, notEquals?}
// shape as a field's own showIf (field.schema.json), evaluated against
// the current answers. No document in the corpus uses this yet; the
// real case is a document family sharing one clauseOrder that genuinely
// differs by an answer (an optional arbitration clause, a
// jurisdiction-specific one), which doesn't exist here today, so this
// is exercised by tests/wizard/wizard_unit.js against a synthetic
// document rather than live data — same situation field-level showIf
// was in after Phase 2.1/2.3.
function clauseEntryId(entry) {
  return typeof entry === 'string' ? entry : entry.id;
}

function clauseIncludeIf(entry) {
  return typeof entry === 'string' ? null : entry.includeIf || null;
}

function conditionMatches(cond, answers) {
  const val = answers[cond.field] || '';
  if (cond.equals !== undefined) return val === cond.equals;
  if (cond.notEquals !== undefined) return val !== cond.notEquals;
  return true;
}

// Plain-language record of every conditional clause's inclusion
// decision, for the output screen's transparency note — states what was
// assembled and why, never whether that was the right call. Clauses
// with no includeIf at all aren't conditional and never appear here.
function describeConditionalClauses() {
  return state.document.clauseOrder
    .filter(entry => clauseIncludeIf(entry))
    .map(entry => {
      const id = clauseEntryId(entry);
      const cond = clauseIncludeIf(entry);
      const clause = state.clauses.find(c => c.id === id);
      const fieldDef = (state.document.fields || []).find(f => f.id === cond.field);
      const fieldLabel = fieldDef ? fieldDef.label : cond.field;
      const expected = cond.equals !== undefined ? cond.equals : cond.notEquals;
      const relation = cond.equals !== undefined ? 'is' : 'is not';
      return {
        id,
        title: clause ? clause.title : id,
        included: conditionMatches(cond, state.answers),
        reason: `"${fieldLabel}" ${relation} "${expected}"`,
      };
    });
}

function assembleDocument() {
  return state.document.clauseOrder
    .filter(entry => {
      const cond = clauseIncludeIf(entry);
      return !cond || conditionMatches(cond, state.answers);
    })
    .map(entry => state.clauses.find(c => c.id === clauseEntryId(entry)))
    .filter(Boolean)
    .map(clause => ({
      ...clause,
      renderedBody: substitute(clause.body, state.answers),
      // Gap notes may refer to the same fields as the body (e.g. "{{companyName}}'s
      // board"), so they get the same substitution instead of showing raw braces.
      gap: clause.gap ? substitute(clause.gap, state.answers) : clause.gap,
    }));
}

// ---------- related-document suggestions (Phase 5.3) ----------
// Computed entirely from structural overlap already in the corpus --
// shared clauses, shared fields (via sharedFieldId), and category
// adjacency -- never from usage telemetry, since this static,
// no-backend app has none to collect. Both shared-clause and
// shared-field overlap are weighted by rarity (the same idf idea
// Phase 5.1's search engine uses): companyName is shared by 409 of
// 740 documents and says almost nothing about two specific documents
// being related, where a field or clause shared by only 2-3 documents
// says a great deal. Raw, unweighted counting would treat those the
// same.
function buildRelatedDocsIndex() {
  const clauseDocCount = new Map();
  const sharedFieldDocCount = new Map();
  state.documents.forEach(d => {
    new Set(d.clauseOrder.map(clauseEntryId)).forEach(id => {
      clauseDocCount.set(id, (clauseDocCount.get(id) || 0) + 1);
    });
    new Set((d.fields || []).map(f => f.sharedFieldId).filter(Boolean)).forEach(id => {
      sharedFieldDocCount.set(id, (sharedFieldDocCount.get(id) || 0) + 1);
    });
  });
  state.clauseDocCount = clauseDocCount;
  state.sharedFieldDocCount = sharedFieldDocCount;
}

const RELATED_DOC_LIMIT = 5;
const RELATED_CLAUSE_WEIGHT = 5;
const RELATED_FIELD_WEIGHT = 2;
const RELATED_CATEGORY_WEIGHT = 1;
// A shared field used by more than this many documents (companyName,
// employeeName, dateSigned...) is common enough that sharing it says
// nothing specific about these two documents being related -- it
// still counts (weighted low by idf below), but never on its own
// earns the stronger "often used alongside" label.
const RARE_FIELD_DOC_LIMIT = 10;

function idfWeight(docCount) {
  const n = state.documents.length;
  return Math.log(1 + n / docCount);
}

// For one candidate document against the one being viewed: an idf-
// weighted relatedness score plus the raw signal counts the label
// decision in renderRelatedDocuments() needs (a real shared clause, or
// a genuinely rare shared field, is what justifies "often used
// alongside" over the plainer "related documents").
function scoreRelatedCandidate(doc, candidate, docClauseIds, docSharedFieldIds, docCategories) {
  const candidateClauseIds = new Set(candidate.clauseOrder.map(clauseEntryId));
  let sharedClauses = 0;
  let clauseScore = 0;
  candidateClauseIds.forEach(id => {
    if (docClauseIds.has(id)) {
      sharedClauses++;
      clauseScore += idfWeight(state.clauseDocCount.get(id) || 1);
    }
  });

  const candidateSharedFieldIds = new Set((candidate.fields || []).map(f => f.sharedFieldId).filter(Boolean));
  let rareSharedFields = 0;
  let fieldScore = 0;
  candidateSharedFieldIds.forEach(id => {
    if (docSharedFieldIds.has(id)) {
      const count = state.sharedFieldDocCount.get(id) || 1;
      if (count <= RARE_FIELD_DOC_LIMIT) rareSharedFields++;
      fieldScore += idfWeight(count);
    }
  });

  const sharedCategories = (candidate.categories || []).filter(c => docCategories.has(c)).length;

  const score = clauseScore * RELATED_CLAUSE_WEIGHT
              + fieldScore * RELATED_FIELD_WEIGHT
              + sharedCategories * RELATED_CATEGORY_WEIGHT;
  return { document: candidate, score, sharedClauses, rareSharedFields };
}

function relatedDocuments(doc) {
  const docClauseIds = new Set(doc.clauseOrder.map(clauseEntryId));
  const docSharedFieldIds = new Set((doc.fields || []).map(f => f.sharedFieldId).filter(Boolean));
  const docCategories = new Set(doc.categories || []);

  const scored = state.documents
    .filter(d => d.id !== doc.id)
    .map(d => scoreRelatedCandidate(doc, d, docClauseIds, docSharedFieldIds, docCategories))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, RELATED_DOC_LIMIT);

  // "Often used alongside" is only used when at least one shown result
  // is backed by a real shared clause or a genuinely rare shared
  // field -- never earned by category adjacency or a handful of
  // near-universal fields alone, which "related documents" (the
  // master plan's own fallback) already covers honestly.
  const strong = scored.some(r => r.sharedClauses > 0 || r.rareSharedFields > 0);
  return { items: scored, label: strong ? 'Documents often used alongside' : 'Related documents' };
}

function renderRelatedDocuments() {
  const section = document.getElementById('output-related');
  const heading = document.getElementById('output-related-heading');
  const list = document.getElementById('output-related-list');
  const { items, label } = relatedDocuments(state.document);

  if (items.length === 0) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  heading.textContent = label;
  list.innerHTML = '';
  items.forEach(({ document: d }) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'related-doc-card';
    card.innerHTML = `<h4>${d.title}</h4><p>${d.description}</p>`;
    card.addEventListener('click', () => {
      state.document = d;
      state.answers = {};
      renderWizard();
      showScreen('screen-wizard');
    });
    list.appendChild(card);
  });
}

// ---------- filing & next-steps packets, on-screen (Phase 6.4) ----------
// Mirrors the signature/related-documents sections' render-once
// pattern: every field answer, including the date a reminder is
// computed from, is already fixed by the time the output screen
// renders (only clause body text stays contenteditable here), so this
// never needs to re-run except alongside the rest of renderOutput().
function renderNextSteps() {
  const section = document.getElementById('output-next-steps');
  const list = document.getElementById('output-next-steps-list');
  const steps = buildDocumentContent().nextSteps;

  if (steps.length === 0) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  list.innerHTML = '';

  steps.forEach(step => {
    const block = document.createElement('div');
    block.className = 'next-step';

    const title = document.createElement('h4');
    title.textContent = step.title;
    block.appendChild(title);

    const body = document.createElement('p');
    body.textContent = step.body;
    block.appendChild(body);

    const details = document.createElement('details');
    details.className = 'badge verified';
    const summary = document.createElement('summary');
    const label = document.createElement('span');
    label.className = 'badge-label';
    label.textContent = `Sourced · checked ${step.checkedDate}`;
    summary.appendChild(label);
    const chev = document.createElement('span');
    chev.className = 'chev';
    chev.textContent = '▸';
    chev.setAttribute('aria-hidden', 'true');
    summary.appendChild(chev);
    details.appendChild(summary);
    const detail = document.createElement('div');
    detail.className = 'detail';
    step.citations.forEach(c => {
      const srcLine = document.createElement('p');
      srcLine.className = 'src-line';
      const link = document.createElement('a');
      link.href = c.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `${c.case} — ${c.cite}`;
      srcLine.appendChild(link);
      detail.appendChild(srcLine);
    });
    details.appendChild(detail);
    block.appendChild(details);

    if (step.reminder) {
      const reminderEl = document.createElement('p');
      reminderEl.className = 'next-step-reminder';
      if (step.reminder.dueDate) {
        reminderEl.textContent = `${step.reminder.label}: ${step.reminder.dueDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
        block.appendChild(reminderEl);
        const icsBtn = document.createElement('button');
        icsBtn.type = 'button';
        icsBtn.className = 'secondary';
        icsBtn.textContent = 'Add to calendar (.ics)';
        icsBtn.addEventListener('click', () => {
          const icsText = buildIcsForStep(step, state.document.title);
          const blob = new Blob([icsText], { type: 'text/calendar' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${documentSlug()}-${step.id}.ics`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        });
        block.appendChild(icsBtn);
      } else if (step.reminder.dateInvalid) {
        reminderEl.textContent = `${step.reminder.label}: not shown — "${step.reminder.enteredDate}" couldn't be read as a calendar date.`;
        block.appendChild(reminderEl);
      } else {
        reminderEl.textContent = `${step.reminder.label}: not shown — "${step.reminder.fieldLabel}" wasn't entered above.`;
        block.appendChild(reminderEl);
      }
    }

    list.appendChild(block);
  });
}

function renderOutput() {
  const assembled = assembleDocument();
  state.edits = {};
  state.editedClauseIds = new Set();

  document.getElementById('output-meta').textContent = preparedForLine(state.answers);
  document.getElementById('include-sources-appendix').checked = state.includeSourcesAppendix;

  const jKey = state.jurisdictionByDoc.get(state.document.id);
  const jEl = document.getElementById('output-jurisdiction');
  if (jKey && jKey !== 'NONE') {
    jEl.textContent = JURISDICTION_NOTICE[jKey];
    jEl.hidden = false;
  } else {
    jEl.hidden = true;
  }

  const conditional = describeConditionalClauses();
  const condEl = document.getElementById('output-conditional-notes');
  const condList = document.getElementById('output-conditional-list');
  condList.innerHTML = '';
  if (conditional.length) {
    conditional.forEach(c => {
      const li = document.createElement('li');
      li.className = c.included ? 'included' : 'excluded';
      li.textContent = `${c.included ? 'Included' : 'Not included'}: ${c.title} — because ${c.reason}`;
      condList.appendChild(li);
    });
    condEl.hidden = false;
  } else {
    condEl.hidden = true;
  }

  const container = document.getElementById('output-clauses');
  container.innerHTML = '';
  assembled.forEach(clause => {
    const block = document.createElement('div');
    block.className = 'clause';
    block.dataset.clauseId = clause.id;

    const h3 = document.createElement('h3');
    h3.textContent = clause.title;
    block.appendChild(h3);

    // contenteditable rather than a separate edit-mode toggle — a
    // reader can just click into the text and change it, the same as
    // any document. Every keystroke is tracked so an edited authority
    // clause's badge can stop claiming an unqualified "Verified" —
    // the citation below was checked against the original wording,
    // not whatever this becomes.
    const body = document.createElement('p');
    body.className = 'body-text';
    body.contentEditable = 'true';
    body.spellcheck = false;
    body.setAttribute('role', 'textbox');
    body.setAttribute('aria-multiline', 'true');
    body.setAttribute('aria-label', `Edit text of ${clause.title}`);
    body.textContent = clause.renderedBody;
    body.addEventListener('input', () => {
      state.edits[clause.id] = body.textContent;
      state.editedClauseIds.add(clause.id);
      markClauseEdited(clause, block);
    });
    block.appendChild(body);

    const badge = renderBadge(clause);
    if (badge) block.appendChild(badge);

    container.appendChild(block);
  });

  renderSignatureSection();
  renderNextSteps();
  renderRelatedDocuments();
}

// Flips a verified clause's badge to an "edited" state the first time
// its text changes. Citations and quotes stay visible underneath —
// they're still real — but the label stops implying this exact
// wording was the wording that got checked.
function markClauseEdited(clause, block) {
  if (clause.status !== 'verified') return;
  const badge = block.querySelector('details.badge');
  if (!badge || badge.classList.contains('edited')) return;
  badge.classList.remove('verified');
  badge.classList.add('edited');
  const label = badge.querySelector('.badge-label');
  if (label) label.textContent = 'Edited since verified — check the citation below still fits';
}

// The centerpiece: builds the sourcing badge for one clause. Returns
// null for drafting content (no legal claim, nothing to source), an
// expandable green badge for verified content (case, date, quote,
// link — and a visible gap if one was found), or a plain, honest
// "not yet verified" badge otherwise. This is what makes the
// difference between checked and unchecked content visible to the
// person reading the document, instead of it only living in the data
// file where nobody sees it.
function renderBadge(clause) {
  if (clause.kind === 'drafting') return null;

  const el = document.createElement('details');
  el.className = 'badge ' + (clause.status === 'verified' ? 'verified' : 'unverified');

  const summary = document.createElement('summary');
  const label = document.createElement('span');
  label.className = 'badge-label';
  label.textContent =
    clause.status === 'verified'
      ? `Verified · checked ${clause.checkedDate}`
      : 'Not yet verified';
  summary.appendChild(label);
  const chev = document.createElement('span');
  chev.className = 'chev';
  chev.textContent = '▸';
  chev.setAttribute('aria-hidden', 'true');
  summary.appendChild(chev);
  el.appendChild(summary);

  const detail = document.createElement('div');
  detail.className = 'detail';

  if (clause.status === 'verified') {
    (clause.citations || []).forEach(c => {
      const quote = document.createElement('p');
      quote.className = 'quote';
      quote.textContent = `"${c.quote}"`;
      detail.appendChild(quote);

      const srcLine = document.createElement('p');
      srcLine.className = 'src-line';
      const link = document.createElement('a');
      link.href = c.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `${c.case} — ${c.cite}`;
      srcLine.appendChild(link);
      detail.appendChild(srcLine);
    });

    if (clause.gap) {
      const gap = document.createElement('p');
      gap.className = 'gap';
      const b = document.createElement('b');
      b.textContent = 'Known gap: ';
      gap.appendChild(b);
      gap.appendChild(document.createTextNode(clause.gap));
      detail.appendChild(gap);
    }
  } else {
    const note = document.createElement('p');
    note.className = 'src-line';
    note.textContent =
      "This clause hasn't been checked against a primary source or case law yet. " +
      'Treat it as a starting point, not a confirmed fact, until it is.';
    detail.appendChild(note);
  }

  el.appendChild(detail);
  return el;
}

document.getElementById('wizard-back').addEventListener('click', () => showScreen('screen-picker'));
document.getElementById('wizard-next').addEventListener('click', () => {
  const idx = state.wizardStepIndex;
  if (!validateStep(state.wizardSteps[idx])) return;
  state.wizardStepIndex = nextVisibleStepIndex(idx);
  renderWizardStep();
});
document.getElementById('wizard-prev').addEventListener('click', () => {
  const idx = prevVisibleStepIndex(state.wizardStepIndex);
  if (idx === -1) return;
  state.wizardStepIndex = idx;
  renderWizardStep();
});
document.getElementById('output-back').addEventListener('click', () => {
  state.answers = {};
  clearDraft();
  showScreen('screen-picker');
});

// Off by default (set in state's initial value) so every export keeps
// its existing shape unless a reader deliberately opts into the extra
// section -- checked here at download time by buildPlainText(),
// buildPdfDocDefinition(), buildDocxDocument(), and the JSON export
// handler, not re-rendered into the page itself.
document.getElementById('include-sources-appendix').addEventListener('change', e => {
  state.includeSourcesAppendix = e.target.checked;
});

// Save on every keystroke rather than on blur/submit — a tab closed
// mid-field shouldn't lose more than the current character.
document.getElementById('wizard-form').addEventListener('input', e => {
  if (!e.target.id.startsWith('field-')) return;
  const fieldId = e.target.id.slice('field-'.length);
  state.answers[fieldId] = e.target.value;
  saveDraft();
});

// ---------- shared document content model (Phase 6.1) ----------
// What's actually in the assembled document, independent of how it's
// formatted for display. buildPlainText() and the PDF exporter
// (buildPdfDocDefinition()) both render from this single model rather
// than each re-deriving it from assembleDocument()/describeConditional
// Clauses()/currentLibraryEntry() independently -- so the two export
// formats can never silently drift into describing two different
// documents, and a golden test comparing PDF-extracted text against
// buildPlainText()'s output is actually comparing two renderings of
// one source, not two separately hand-maintained ones.
// ---------- filing & next-steps packets (Phase 6.4) ----------
// filing/next_steps.json is keyed by document id, sparse by design --
// only a document with a real filing or follow-on step has an entry
// at all (see filing/README.md for how small a pilot this is today).
// Each step is sourced exactly like a clause (citations + checkedDate),
// but lives outside data/clauses.json since it's a fact about what
// happens after the document, not part of the document's own prose.
function resolveNextSteps(doc, answers) {
  const steps = (state.nextSteps && state.nextSteps[doc.id]) || [];
  return steps.map(step => {
    let reminder = null;
    if (step.reminder) {
      const field = (doc.fields || []).find(f => f.id === step.reminder.dateFieldId);
      const raw = (answers[step.reminder.dateFieldId] || '').trim();
      let dueDate = null;
      let dateInvalid = false;
      if (raw) {
        const parsed = new Date(raw);
        if (isNaN(parsed.getTime())) {
          dateInvalid = true;
        } else {
          dueDate = new Date(parsed.getTime());
          dueDate.setDate(dueDate.getDate() + step.reminder.offsetDays);
        }
      }
      reminder = {
        label: step.reminder.label,
        fieldLabel: field ? field.label : step.reminder.dateFieldId,
        enteredDate: raw,
        dueDate,
        dateInvalid,
      };
    }
    return {
      id: step.id,
      title: step.title,
      body: step.body,
      checkedDate: step.checkedDate,
      citations: step.citations || [],
      reminder,
    };
  });
}

function formatIcsDate(d) {
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
}

function escapeIcsText(text) {
  return String(text).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

// A minimal, valid VCALENDAR/VEVENT -- an all-day reminder on the
// computed due date, with the rule's own citation folded into the
// description (the master plan's own "with the rule's citation
// shown" requirement), not just a bare date with no source attached.
function buildIcsForStep(step, documentTitle) {
  const citation = step.citations[0];
  const descriptionParts = [
    step.body,
    citation ? `Rule: ${citation.case}, ${citation.cite} (${citation.url})` : null,
  ].filter(Boolean);
  const uid = `${hashString(step.id + documentTitle + step.reminder.dueDate.toISOString())}@groundtruth.v1`;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Groundtruth//Next Steps//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcsDate(new Date())}T000000Z`,
    `DTSTART;VALUE=DATE:${formatIcsDate(step.reminder.dueDate)}`,
    `SUMMARY:${escapeIcsText(`${step.reminder.label} \u2014 ${documentTitle}`)}`,
    `DESCRIPTION:${escapeIcsText(descriptionParts.join('\n\n'))}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return lines.join('\r\n') + '\r\n';
}

function buildDocumentContent() {
  const assembled = assembleDocument();
  const jKey = state.jurisdictionByDoc.get(state.document.id);
  const signedEntry = currentLibraryEntry();
  return {
    title: state.document.title,
    documentId: state.document.id,
    preparedFor: preparedForLine(state.answers),
    jurisdictionNotice: jKey && jKey !== 'NONE' ? JURISDICTION_NOTICE[jKey] : null,
    conditional: describeConditionalClauses(),
    clauses: assembled.map(clause => {
      const edited = state.editedClauseIds.has(clause.id);
      return {
        id: clause.id,
        title: clause.title,
        body: edited ? state.edits[clause.id] : clause.renderedBody,
        kind: clause.kind,
        status: clause.status,
        edited,
        checkedDate: clause.checkedDate,
        citations: clause.citations || [],
        gap: clause.gap || null,
      };
    }),
    signature: signedEntry ? signedEntry.signature || null : null,
    nextSteps: resolveNextSteps(state.document, state.answers),
  };
}

// Phase 7.5: the same buildDocumentContent() shape, built from a
// frozen share snapshot (clauseSnapshots + answers, exactly what Phase
// 6.3 already freezes onto a library entry) instead of live state --
// so the sealed-PDF path below can reuse buildPdfDocDefinition() as-is
// rather than a second, parallel PDF builder. jurisdictionNotice,
// conditional, and nextSteps are empty/null here: recomputing them
// needs the live document's clauseOrder/fields, which a frozen share
// doesn't carry, and guessing at them from a snapshot would be exactly
// the kind of invented content this project doesn't do. The signed
// document's actual clause text and citations -- the part that
// matters for a certificate -- are complete either way.
function buildDocumentContentFromSnapshot(snapshot) {
  return {
    title: snapshot.title,
    documentId: snapshot.documentId,
    preparedFor: '',
    jurisdictionNotice: null,
    conditional: [],
    clauses: (snapshot.clauseSnapshots || []).map(snap => ({
      id: snap.id,
      title: snap.title,
      body: substitute(snap.body, snapshot.answers || {}),
      kind: snap.kind,
      status: snap.status,
      edited: false,
      checkedDate: snap.checkedDate,
      citations: snap.citations || [],
      gap: snap.gap || null,
    })),
    signature: null,
    nextSteps: [],
  };
}

// ---------- sources & checked-dates appendix (Phase 6.2) ----------
// A consolidated reference list of every citation already shown
// inline, per clause, throughout the document -- gathered into one
// place at the end for a reader who wants a quick source list without
// reading the whole document. Off by default (state.includeSourcesAppendix)
// in every export, so turning it on is a deliberate choice rather than
// a surprise addition to a file whose shape someone already relies on.
function buildSourcesAppendix(content) {
  return content.clauses
    .filter(c => c.status === 'verified' && c.citations.length > 0)
    .map(c => ({ clauseTitle: c.title, checkedDate: c.checkedDate, citations: c.citations }));
}

// Builds a readable plain-text export of the assembled document,
// including the same citations and gaps the on-screen badges show —
// the text file should carry the same receipts the page does, not
// just the fill-in-the-blank prose.
function buildPlainText() {
  const content = buildDocumentContent();
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
      if (clause.status === 'verified' && clause.edited) {
        lines.push(`[Edited since verified on ${clause.checkedDate} — check the citation below still fits this wording]`);
        clause.citations.forEach(c => {
          lines.push(`  "${c.quote}"`);
          lines.push(`  — ${c.case}, ${c.cite} (${c.url})`);
        });
        if (clause.gap) lines.push(`  Known gap: ${clause.gap}`);
      } else if (clause.status === 'verified') {
        lines.push(`[Verified — checked ${clause.checkedDate}]`);
        clause.citations.forEach(c => {
          lines.push(`  "${c.quote}"`);
          lines.push(`  — ${c.case}, ${c.cite} (${c.url})`);
        });
        if (clause.gap) lines.push(`  Known gap: ${clause.gap}`);
      } else {
        lines.push("[Not yet verified against a primary source or case law. Treat as a starting point, not a confirmed fact.]");
      }
    }
    lines.push('');
  });

  if (content.signature) {
    lines.push('SIGNATURE');
    lines.push(
      content.signature.type === 'typed'
        ? `Signed: ${content.signature.name}`
        : 'Signed: [drawn signature — see the on-screen or downloaded version to view it]'
    );
    lines.push(`Date: ${new Date(content.signature.signedAt).toLocaleString()}`);
    lines.push('');
  }

  if (content.nextSteps.length) {
    lines.push('WHAT HAPPENS AFTER THIS DOCUMENT');
    content.nextSteps.forEach(step => {
      lines.push(step.title);
      lines.push(step.body);
      lines.push(`[checked ${step.checkedDate}]`);
      step.citations.forEach(c => {
        lines.push(`  ${c.case}, ${c.cite} (${c.url})`);
      });
      if (step.reminder) {
        if (step.reminder.dueDate) {
          lines.push(`${step.reminder.label}: ${step.reminder.dueDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`);
        } else if (step.reminder.dateInvalid) {
          lines.push(`${step.reminder.label}: not shown — "${step.reminder.enteredDate}" couldn't be read as a calendar date.`);
        } else {
          lines.push(`${step.reminder.label}: not shown — "${step.reminder.fieldLabel}" wasn't entered above.`);
        }
      }
      lines.push('');
    });
  }

  if (state.includeSourcesAppendix) {
    const appendix = buildSourcesAppendix(content);
    if (appendix.length) {
      lines.push('SOURCES AND CHECKED DATES');
      appendix.forEach(entry => {
        lines.push(`${entry.clauseTitle} — checked ${entry.checkedDate}`);
        entry.citations.forEach(c => {
          lines.push(`  ${c.case}, ${c.cite} (${c.url})`);
        });
      });
      lines.push('');
    }
  }

  lines.push('—');
  lines.push('Groundtruth v1 demo · every "Verified" citation links to a real, checked source.');
  return lines.join('\n');
}

// ---------- native PDF export (Phase 6.1) ----------
// pdfmake (vendored in lib/, see lib/README.md) is given a declarative
// "document definition" built from the exact same buildDocumentContent()
// model buildPlainText() uses -- same title, body text, citations, gap
// notes, and signature data, just laid out as styled blocks instead of
// joined lines. pdfmake renders real selectable text with an embedded
// font (Roboto, bundled via lib/vfs_fonts.js), not a rasterized image of
// the page -- unlike the existing #output-print button, which hands the
// browser's own print-to-PDF whatever the on-screen CSS happens to
// produce. This library doesn't expose a documented tagged-PDF/
// structure-tree option (checked before building this), so real,
// embedded-font, selectable text is what's delivered; full PDF/UA
// tagging falls under the master plan's own "if the library supports
// it" allowance.
const PDF_STYLES = {
  docTitle: { fontSize: 16, bold: true },
  preparedFor: { fontSize: 10, color: '#4B5245' },
  jurisdictionNotice: { fontSize: 9.5, italics: true, color: '#4B5245' },
  sectionLabel: { fontSize: 10.5, bold: true },
  conditionalLine: { fontSize: 9.5, margin: [0, 2, 0, 0] },
  clauseTitle: { fontSize: 12, bold: true },
  clauseBody: { fontSize: 10.5, lineHeight: 1.3 },
  verificationNote: { fontSize: 9, italics: true, color: '#2B6E4F' },
  quote: { fontSize: 9, italics: true, margin: [10, 3, 0, 0] },
  citeLine: { fontSize: 9, margin: [10, 0, 0, 0] },
  gapLine: { fontSize: 9, margin: [10, 2, 0, 0] },
  signatureName: { fontSize: 14, bold: true },
  appendixClauseLabel: { fontSize: 10, bold: true },
  signatureMeta: { fontSize: 9, color: '#4B5245' },
  closingNote: { fontSize: 8.5, color: '#4B5245', margin: [0, 16, 0, 0] },
  footerText: { fontSize: 8, color: '#4B5245' },
};

// pdfmake's embedded default font (Roboto, via lib/vfs_fonts.js) turned
// out not to cover every character this corpus actually uses --
// confirmed by generating a test PDF with each special character this
// corpus contains and extracting it back: these seven came back as a
// literal \u0000 (pdf.js's signature for "no glyph"), not themselves,
// while every accented letter, curly quote/apostrophe, dash, and the
// section/paragraph/registered-mark symbols this corpus also uses all
// came back correctly and needed no fallback. Swapped for plain-ASCII
// equivalents in the PDF only -- the on-screen, plain-text, and JSON
// exports keep the real character unchanged.
const PDF_GLYPH_FALLBACKS = {
  '☐': '[ ]', '◻': '[ ]', '‖': '||', '‟': '"', '℠': '(SM)', '⅓': '1/3', 'Ⓜ': '(M)',
};
function sanitizeForPdf(text) {
  if (!text) return text;
  return text.replace(/[☐◻‖‟℠⅓Ⓜ]/g, ch => PDF_GLYPH_FALLBACKS[ch]);
}

// content/certificate are optional so every existing call site
// (buildPdfDocDefinition() with no args, from the live wizard output
// screen) is unaffected -- only Phase 7.5's sealed-PDF download passes
// both, built from a frozen share snapshot instead of live state.
function buildPdfDocDefinition(content = buildDocumentContent(), certificate = null) {
  const generatedOn = new Date().toISOString().slice(0, 10);
  const body = [];

  body.push({ text: sanitizeForPdf(content.title.toUpperCase()), style: 'docTitle' });
  body.push({ text: sanitizeForPdf(content.preparedFor), style: 'preparedFor', margin: [0, 2, 0, 0] });

  if (content.jurisdictionNotice) {
    body.push({ text: sanitizeForPdf(content.jurisdictionNotice), style: 'jurisdictionNotice', margin: [0, 10, 0, 0] });
  }

  if (content.conditional.length) {
    body.push({ text: 'OPTIONAL CLAUSES IN THIS DOCUMENT', style: 'sectionLabel', margin: [0, 16, 0, 2] });
    content.conditional.forEach(c => {
      body.push({ text: sanitizeForPdf(`${c.included ? 'Included' : 'Not included'}: ${c.title} — because ${c.reason}`), style: 'conditionalLine' });
    });
  }

  content.clauses.forEach(clause => {
    body.push({ text: sanitizeForPdf(clause.title.toUpperCase()), style: 'clauseTitle', margin: [0, 16, 0, 4] });
    body.push({ text: sanitizeForPdf(clause.body), style: 'clauseBody' });
    if (clause.kind !== 'drafting') {
      if (clause.status === 'verified' && clause.edited) {
        body.push({ text: `Edited since verified on ${clause.checkedDate} — check the citation below still fits this wording`, style: 'verificationNote', margin: [0, 5, 0, 0] });
        clause.citations.forEach(c => {
          body.push({ text: sanitizeForPdf(`"${c.quote}"`), style: 'quote' });
          body.push({ text: sanitizeForPdf(`— ${c.case}, ${c.cite} (${c.url})`), style: 'citeLine' });
        });
        if (clause.gap) body.push({ text: sanitizeForPdf(`Known gap: ${clause.gap}`), style: 'gapLine' });
      } else if (clause.status === 'verified') {
        body.push({ text: `Verified — checked ${clause.checkedDate}`, style: 'verificationNote', margin: [0, 5, 0, 0] });
        clause.citations.forEach(c => {
          body.push({ text: sanitizeForPdf(`"${c.quote}"`), style: 'quote' });
          body.push({ text: sanitizeForPdf(`— ${c.case}, ${c.cite} (${c.url})`), style: 'citeLine' });
        });
        if (clause.gap) body.push({ text: sanitizeForPdf(`Known gap: ${clause.gap}`), style: 'gapLine' });
      } else {
        body.push({ text: 'Not yet verified against a primary source or case law. Treat as a starting point, not a confirmed fact.', style: 'verificationNote', margin: [0, 5, 0, 0] });
      }
    }
  });

  if (content.signature) {
    body.push({ text: 'SIGNATURE', style: 'sectionLabel', margin: [0, 22, 0, 8] });
    if (content.signature.type === 'drawn') {
      body.push({ text: 'Signed:', style: 'signatureMeta', margin: [0, 0, 0, 2] });
      body.push({ image: content.signature.dataUrl, width: 180, margin: [0, 0, 0, 4] });
    } else {
      body.push({ text: `Signed: ${sanitizeForPdf(content.signature.name)}`, style: 'signatureName', margin: [0, 0, 0, 4] });
    }
    body.push({ text: `Date: ${new Date(content.signature.signedAt).toLocaleString()}`, style: 'signatureMeta' });
  }

  if (content.nextSteps.length) {
    body.push({ text: 'WHAT HAPPENS AFTER THIS DOCUMENT', style: 'sectionLabel', margin: [0, 22, 0, 8] });
    content.nextSteps.forEach(step => {
      body.push({ text: sanitizeForPdf(step.title), style: 'appendixClauseLabel', margin: [0, 8, 0, 2] });
      body.push({ text: sanitizeForPdf(step.body), style: 'clauseBody' });
      body.push({ text: `Checked ${step.checkedDate}`, style: 'verificationNote', margin: [0, 3, 0, 0] });
      step.citations.forEach(c => {
        body.push({ text: sanitizeForPdf(`${c.case}, ${c.cite} (${c.url})`), style: 'citeLine' });
      });
      if (step.reminder) {
        let reminderText;
        if (step.reminder.dueDate) {
          reminderText = `${step.reminder.label}: ${step.reminder.dueDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
        } else if (step.reminder.dateInvalid) {
          reminderText = `${step.reminder.label}: not shown — "${step.reminder.enteredDate}" couldn't be read as a calendar date.`;
        } else {
          reminderText = `${step.reminder.label}: not shown — "${step.reminder.fieldLabel}" wasn't entered above.`;
        }
        body.push({ text: sanitizeForPdf(reminderText), style: 'signatureMeta', margin: [0, 3, 0, 0] });
      }
    });
  }

  if (state.includeSourcesAppendix) {
    const appendix = buildSourcesAppendix(content);
    if (appendix.length) {
      body.push({ text: 'SOURCES AND CHECKED DATES', style: 'sectionLabel', margin: [0, 22, 0, 8], pageBreak: 'before' });
      appendix.forEach(entry => {
        body.push({ text: sanitizeForPdf(`${entry.clauseTitle} — checked ${entry.checkedDate}`), style: 'appendixClauseLabel', margin: [0, 8, 0, 2] });
        entry.citations.forEach(c => {
          body.push({ text: sanitizeForPdf(`${c.case}, ${c.cite} (${c.url})`), style: 'citeLine' });
        });
      });
    }
  }

  body.push({ text: 'Groundtruth v1 demo · every "Verified" citation links to a real, checked source.', style: 'closingNote' });

  // Phase 7.5: "a final sealed PDF with a certificate page (signer,
  // timestamps, document hash)." Only present for a signed share's
  // sealed download -- the regular wizard output screen never passes
  // a certificate, so every other PDF this function has ever produced
  // is byte-for-byte unaffected by this block existing at all.
  if (certificate) {
    body.push({ text: 'CERTIFICATE OF SIGNING', style: 'sectionLabel', margin: [0, 24, 0, 8], pageBreak: 'before' });
    body.push({ text: sanitizeForPdf(content.title), style: 'docTitle' });
    body.push({ text: `Document id: ${certificate.documentId}`, style: 'signatureMeta', margin: [0, 8, 0, 0] });
    body.push({ text: `Document fingerprint: ${certificate.documentHash}`, style: 'signatureMeta' });
    body.push({ text: `Link created: ${new Date(certificate.createdAt).toLocaleString()}`, style: 'signatureMeta' });
    body.push({ text: `Link expires: ${new Date(certificate.expiresAt).toLocaleString()}`, style: 'signatureMeta' });
    body.push({ text: 'Signer', style: 'sectionLabel', margin: [0, 16, 0, 4] });
    if (certificate.signature.signature_type === 'drawn') {
      body.push({ image: certificate.signature.signature_data, width: 180, margin: [0, 0, 0, 4] });
    } else {
      body.push({ text: sanitizeForPdf(certificate.signature.signature_data), style: 'signatureName', margin: [0, 0, 0, 4] });
    }
    body.push({ text: `Signed as: ${sanitizeForPdf(certificate.signature.signer_name)}`, style: 'signatureMeta' });
    body.push({ text: `Signed at: ${new Date(certificate.signature.signed_at).toLocaleString()}`, style: 'signatureMeta' });
    body.push({
      text: 'This isn’t a certified e-signature service, and this certificate doesn’t determine whether or how the signature above is legally binding.',
      style: 'verificationNote',
      margin: [0, 16, 0, 0],
    });
  }

  return {
    pageSize: 'LETTER',
    pageMargins: [56, 56, 56, 64],
    info: { title: content.title, subject: 'Generated by Groundtruth' },
    content: body,
    styles: PDF_STYLES,
    defaultStyle: { font: 'Roboto', fontSize: 10.5, lineHeight: 1.3 },
    footer: (currentPage, pageCount) => ({
      margin: [56, 0, 56, 26],
      columns: [
        { text: `${content.documentId} · generated ${generatedOn}`, style: 'footerText' },
        { text: `Page ${currentPage} of ${pageCount}`, style: 'footerText', alignment: 'right' },
      ],
    }),
  };
}

// ---------- native DOCX export (Phase 6.2) ----------
// docx (vendored in lib/, see lib/README.md) builds a real .docx file
// from the same buildDocumentContent() model the plain-text and PDF
// exports use -- "so users can edit in Word" means handing Word actual
// editable paragraphs and headings, not a converted PDF or an HTML
// file renamed .doc. Unlike the PDF path, plain Unicode text needs no
// font-glyph sanitizing here: a .docx's body text is XML, and Word
// supplies whatever font covers a given character at open time, so
// there's no embedded-glyph-subset to come up short the way pdfmake's
// bundled Roboto did.
function buildDocxDocument(content = buildDocumentContent()) {
  const generatedOn = new Date().toISOString().slice(0, 10);
  const { Document, Paragraph, TextRun, ImageRun, Footer, HeadingLevel } = docx;
  const GRAY = '4B5245';
  const children = [];

  children.push(new Paragraph({ text: content.title.toUpperCase(), heading: HeadingLevel.TITLE }));
  children.push(new Paragraph({ children: [new TextRun({ text: content.preparedFor, color: GRAY })] }));

  if (content.jurisdictionNotice) {
    children.push(new Paragraph({ children: [new TextRun({ text: content.jurisdictionNotice, italics: true, color: GRAY })] }));
  }

  if (content.conditional.length) {
    children.push(new Paragraph({ text: 'OPTIONAL CLAUSES IN THIS DOCUMENT', heading: HeadingLevel.HEADING_3 }));
    content.conditional.forEach(c => {
      children.push(new Paragraph({ children: [new TextRun(`${c.included ? 'Included' : 'Not included'}: ${c.title} — because ${c.reason}`)] }));
    });
  }

  function pushCitations(citations) {
    citations.forEach(c => {
      children.push(new Paragraph({ children: [new TextRun({ text: `"${c.quote}"`, italics: true })] }));
      children.push(new Paragraph({ children: [new TextRun(`— ${c.case}, ${c.cite} (${c.url})`)] }));
    });
  }

  content.clauses.forEach(clause => {
    children.push(new Paragraph({ text: clause.title.toUpperCase(), heading: HeadingLevel.HEADING_2 }));
    children.push(new Paragraph({ children: [new TextRun(clause.body)] }));
    if (clause.kind !== 'drafting') {
      if (clause.status === 'verified' && clause.edited) {
        children.push(new Paragraph({ children: [new TextRun({ text: `Edited since verified on ${clause.checkedDate} — check the citation below still fits this wording`, italics: true, color: '2B6E4F' })] }));
        pushCitations(clause.citations);
        if (clause.gap) children.push(new Paragraph({ children: [new TextRun(`Known gap: ${clause.gap}`)] }));
      } else if (clause.status === 'verified') {
        children.push(new Paragraph({ children: [new TextRun({ text: `Verified — checked ${clause.checkedDate}`, italics: true, color: '2B6E4F' })] }));
        pushCitations(clause.citations);
        if (clause.gap) children.push(new Paragraph({ children: [new TextRun(`Known gap: ${clause.gap}`)] }));
      } else {
        children.push(new Paragraph({ children: [new TextRun({ text: 'Not yet verified against a primary source or case law. Treat as a starting point, not a confirmed fact.', italics: true, color: '2B6E4F' })] }));
      }
    }
  });

  if (content.signature) {
    children.push(new Paragraph({ text: 'SIGNATURE', heading: HeadingLevel.HEADING_3 }));
    if (content.signature.type === 'drawn') {
      children.push(new Paragraph({ children: [new TextRun({ text: 'Signed:', color: GRAY })] }));
      // The canvas is 420x130; keep that aspect ratio at a smaller size
      // rather than a fixed box that would stretch a drawn signature.
      children.push(new Paragraph({ children: [new ImageRun({ type: 'png', data: content.signature.dataUrl, transformation: { width: 240, height: 74 } })] }));
    } else {
      children.push(new Paragraph({ children: [new TextRun({ text: `Signed: ${content.signature.name}`, bold: true })] }));
    }
    children.push(new Paragraph({ children: [new TextRun({ text: `Date: ${new Date(content.signature.signedAt).toLocaleString()}`, color: GRAY })] }));
  }

  if (content.nextSteps.length) {
    children.push(new Paragraph({ text: 'WHAT HAPPENS AFTER THIS DOCUMENT', heading: HeadingLevel.HEADING_2 }));
    content.nextSteps.forEach(step => {
      children.push(new Paragraph({ children: [new TextRun({ text: step.title, bold: true })] }));
      children.push(new Paragraph({ children: [new TextRun(step.body)] }));
      children.push(new Paragraph({ children: [new TextRun({ text: `Checked ${step.checkedDate}`, italics: true, color: '2B6E4F' })] }));
      pushCitations(step.citations);
      if (step.reminder) {
        let reminderText;
        if (step.reminder.dueDate) {
          reminderText = `${step.reminder.label}: ${step.reminder.dueDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
        } else if (step.reminder.dateInvalid) {
          reminderText = `${step.reminder.label}: not shown — "${step.reminder.enteredDate}" couldn't be read as a calendar date.`;
        } else {
          reminderText = `${step.reminder.label}: not shown — "${step.reminder.fieldLabel}" wasn't entered above.`;
        }
        children.push(new Paragraph({ children: [new TextRun({ text: reminderText, color: GRAY })] }));
      }
    });
  }

  if (state.includeSourcesAppendix) {
    const appendix = buildSourcesAppendix(content);
    if (appendix.length) {
      children.push(new Paragraph({ text: 'SOURCES AND CHECKED DATES', heading: HeadingLevel.HEADING_2, pageBreakBefore: true }));
      appendix.forEach(entry => {
        children.push(new Paragraph({ children: [new TextRun({ text: `${entry.clauseTitle} — checked ${entry.checkedDate}`, bold: true })] }));
        entry.citations.forEach(c => {
          children.push(new Paragraph({ children: [new TextRun(`${c.case}, ${c.cite} (${c.url})`)] }));
        });
      });
    }
  }

  children.push(new Paragraph({ children: [new TextRun({ text: 'Groundtruth v1 demo · every "Verified" citation links to a real, checked source.', size: 16, color: GRAY })] }));

  return new Document({
    sections: [{
      children,
      footers: {
        default: new Footer({
          children: [new Paragraph({ children: [new TextRun({ text: `${content.documentId} · generated ${generatedOn}`, size: 16, color: GRAY })] })],
        }),
      },
    }],
  });
}

document.getElementById('output-print').addEventListener('click', () => {
  const badges = document.querySelectorAll('#output-clauses details.badge');
  const wasOpen = new Set([...badges].filter(d => d.open));
  badges.forEach(d => { d.open = true; });
  const restore = () => {
    badges.forEach(d => { d.open = wasOpen.has(d); });
    window.removeEventListener('afterprint', restore);
  };
  window.addEventListener('afterprint', restore);
  window.print();
});

document.getElementById('output-copy').addEventListener('click', async () => {
  const btn = document.getElementById('output-copy');
  const text = buildPlainText();
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // Fallback for browsers/contexts without Clipboard API permission.
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
  const original = btn.textContent;
  btn.textContent = 'Copied!';
  btn.classList.add('copied');
  clearTimeout(btn._copyResetTimer);
  btn._copyResetTimer = setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove('copied');
  }, 1800);
});

function documentSlug() {
  return state.document.title.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-');
}

document.getElementById('output-download').addEventListener('click', () => {
  const text = buildPlainText();
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${documentSlug()}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById('output-download-pdf').addEventListener('click', () => {
  const btn = document.getElementById('output-download-pdf');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Generating…';
  pdfMake.createPdf(buildPdfDocDefinition()).download(`${documentSlug()}.pdf`)
    .then(() => { btn.textContent = original; })
    .catch(err => {
      console.error('PDF generation failed:', err);
      btn.textContent = "Couldn't generate PDF — try Print instead";
      setTimeout(() => { btn.textContent = original; }, 2500);
    })
    .finally(() => { btn.disabled = false; });
});

document.getElementById('output-download-docx').addEventListener('click', () => {
  const btn = document.getElementById('output-download-docx');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Generating…';
  docx.Packer.toBlob(buildDocxDocument())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${documentSlug()}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      btn.textContent = original;
    })
    .catch(err => {
      console.error('DOCX generation failed:', err);
      btn.textContent = "Couldn't generate the Word file — try Download as text instead";
      setTimeout(() => { btn.textContent = original; }, 2500);
    })
    .finally(() => { btn.disabled = false; });
});

document.getElementById('wizard-form').addEventListener('submit', e => {
  e.preventDefault();
  // Only the review stage shows the submit button, but guard anyway —
  // a stray Enter keypress on an earlier step's input submits the form
  // natively unless something stops it.
  if (!state.wizardReviewing) return;
  // Answers already live in state.answers from every step's own input
  // listener (the fields themselves aren't all in the DOM at once
  // anymore to collect via FormData, the way the old one-screen wizard
  // did). Trim once here, not on every keystroke, so a trailing space
  // typed mid-word doesn't vanish while the field still has focus.
  state.document.fields.forEach(f => {
    if (typeof state.answers[f.id] === 'string') state.answers[f.id] = state.answers[f.id].trim();
  });
  const entry = addToLibrary(state.document.id, state.document.title, state.answers);
  state.currentEntryId = entry.id;
  renderOutput();
  showScreen('screen-output');
  clearDraft();
});

document.getElementById('inbox-link').addEventListener('click', () => {
  renderInbox();
  renderPromises();
  showScreen('screen-inbox');
});
document.getElementById('inbox-back').addEventListener('click', () => showScreen('screen-picker'));

document.getElementById('relationships-link').addEventListener('click', () => {
  renderRelationships();
  showScreen('screen-relationships');
});
document.getElementById('relationships-back').addEventListener('click', () => showScreen('screen-picker'));

document.getElementById('promise-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('promise-text');
  const text = input.value.trim();
  if (!text) return;
  addPromise(text);
  input.value = '';
  renderPromises();
});

document.getElementById('tier-sort-toggle').addEventListener('click', () => {
  state.tierSortEnabled = !state.tierSortEnabled;
  document.getElementById('tier-sort-toggle').setAttribute('aria-pressed', state.tierSortEnabled ? 'true' : 'false');
  renderPicker();
});

document.getElementById('library-link').addEventListener('click', () => {
  renderLibrary();
  showScreen('screen-library');
});
document.getElementById('library-back').addEventListener('click', () => showScreen('screen-picker'));
document.getElementById('library-clear').addEventListener('click', () => {
  clearLibrary();
  renderLibrary();
});

document.getElementById('incoming-link').addEventListener('click', () => {
  showScreen('screen-incoming');
});
document.getElementById('intake-link').addEventListener('click', () => {
  startIntake();
});
document.getElementById('intake-back').addEventListener('click', () => intakeBack());
document.getElementById('incoming-back').addEventListener('click', () => showScreen('screen-picker'));
document.getElementById('incoming-form').addEventListener('submit', e => {
  e.preventDefault();
  const text = document.getElementById('incoming-text').value;
  renderIncomingResults(splitPassages(text));
});

// Thrown rather than silently started over if the worker itself never
// loads (CSP blocking Workers, an ancient browser) -- the console
// error at least gives a real diagnosis instead of a feature that
// just quietly never finishes "Reading…".
window.addEventListener('error', e => {
  if (e.filename && e.filename.includes('contract_worker.js')) {
    console.error('Groundtruth: contract reader worker failed to load', e.message);
  }
});

// Layer-2 "agreements as data" export: the same clause IDs, answers,
// and structure the app assembled into prose — not the prose itself.
// This is what a future consumer of the format (another tool, a
// diff, a re-verification pass) would read; the plain-text download
// next to it is for a human, this is for a machine.
document.getElementById('output-export').addEventListener('click', () => {
  const assembled = assembleDocument();
  const signedEntry = currentLibraryEntry();
  const data = {
    documentId: state.document.id,
    title: state.document.title,
    generatedAt: new Date().toISOString(),
    answers: { ...state.answers },
    signature: signedEntry ? signedEntry.signature || null : null,
    clauses: assembled.map(clause => ({
      id: clause.id,
      kind: clause.kind,
      status: clause.status || null,
      edited: state.editedClauseIds.has(clause.id),
      body: state.editedClauseIds.has(clause.id) ? state.edits[clause.id] : clause.renderedBody,
      citations: clause.kind === 'authority' ? (clause.citations || []) : undefined,
      checkedDate: clause.checkedDate || undefined,
      gap: clause.gap || undefined,
    })),
    sourcesAppendix: state.includeSourcesAppendix ? buildSourcesAppendix(buildDocumentContent()) : undefined,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${documentSlug()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

init();
