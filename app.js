const state = { documents: null, document: null, clauses: null, answers: {}, categoryFilter: null, edits: {}, editedClauseIds: new Set(), currentEntryId: null };

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
    renderWizard();
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

function addToLibrary(documentId, title, answers) {
  const entries = loadLibrary();
  const entry = {
    id: `${documentId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    documentId,
    title,
    answers: { ...answers },
    generatedAt: new Date().toISOString(),
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
      viewBtn.addEventListener('click', () => viewLibraryEntry(entry));
      btnGroup.appendChild(viewBtn);

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'secondary';
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        removeFromLibrary(entry.id);
        renderLibrary();
      });
      btnGroup.appendChild(removeBtn);

      row.appendChild(btnGroup);
      listEl.appendChild(row);
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
    toggleBtn.addEventListener('click', () => { togglePromise(p.id); renderPromises(); });
    btnGroup.appendChild(toggleBtn);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'secondary';
    removeBtn.textContent = 'Remove';
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

async function init() {
  const [docs, clauseData] = await Promise.all([
    fetch('data/documents.json').then(r => r.json()),
    fetch('data/clauses.json').then(r => r.json()),
  ]);
  state.documents = docs;
  state.clauses = clauseData.clauses;
  renderCategoryFilter();
  renderPicker();
  checkForDraft();
  updateLibraryCount();
  buildClauseIndex();
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
]);

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || [])
    .filter(w => !STOPWORDS.has(w));
}

// Builds an idf-weighted inverted index over every clause's title+body
// once, at load time, so matching a pasted passage against 4,800+
// clauses is a lookup over shared words rather than a full scan.
// Common words (shared by hundreds of clauses, e.g. "employee",
// "employer") get a low weight; distinctive words (shared by only a
// handful of clauses) get a high weight — the same idea as search
// engine relevance scoring, applied to a small, fixed corpus instead
// of the web.
function buildClauseIndex() {
  const df = new Map();
  const clauseTokenSets = state.clauses.map(c => {
    const set = new Set(tokenize(`${c.title} ${c.body}`));
    set.forEach(t => df.set(t, (df.get(t) || 0) + 1));
    return set;
  });

  const N = state.clauses.length;
  const idf = new Map();
  df.forEach((count, token) => idf.set(token, Math.log(1 + N / count)));

  const invertedIndex = new Map();
  clauseTokenSets.forEach((set, idx) => {
    set.forEach(t => {
      if (!invertedIndex.has(t)) invertedIndex.set(t, []);
      invertedIndex.get(t).push(idx);
    });
  });

  state.clauseTokenSets = clauseTokenSets;
  state.clauseIdf = idf;
  state.clauseInvertedIndex = invertedIndex;
}

const MATCH_THRESHOLD = 0.22;
const STRONG_MATCH_THRESHOLD = 0.4;

// Scores one pasted passage against every clause that shares at least
// one distinctive word with it, and returns the best match if it
// clears a minimum confidence bar — otherwise null, which the caller
// renders as "not recognized" rather than guessing.
function matchPassage(passage) {
  const tokens = tokenize(passage);
  const tokenSet = new Set(tokens);
  if (tokenSet.size < 5) return null;

  let selfWeight = 0;
  tokenSet.forEach(t => { selfWeight += (state.clauseIdf.get(t) || 0) ** 2; });
  if (selfWeight === 0) return null;

  const candidateScores = new Map();
  tokenSet.forEach(t => {
    const idf = state.clauseIdf.get(t);
    if (!idf) return;
    const clauseList = state.clauseInvertedIndex.get(t) || [];
    clauseList.forEach(idx => {
      candidateScores.set(idx, (candidateScores.get(idx) || 0) + idf * idf);
    });
  });

  let best = null;
  candidateScores.forEach((rawScore, idx) => {
    let clauseWeight = 0;
    state.clauseTokenSets[idx].forEach(t => { clauseWeight += (state.clauseIdf.get(t) || 0) ** 2; });
    if (clauseWeight === 0) return;
    const cosine = rawScore / (Math.sqrt(selfWeight) * Math.sqrt(clauseWeight));
    if (!best || cosine > best.cosine) best = { idx, cosine };
  });

  if (!best || best.cosine < MATCH_THRESHOLD) return null;
  return {
    clause: state.clauses[best.idx],
    confidence: best.cosine >= STRONG_MATCH_THRESHOLD ? 'strong' : 'weak',
  };
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

function renderIncomingResults(passages) {
  const results = document.getElementById('incoming-results');
  results.innerHTML = '';

  if (passages.length === 0) {
    results.innerHTML = '<p class="library-empty">Paste in some contract text above, then click "Read this contract."</p>';
    return;
  }

  const matches = passages.map(p => ({ passage: p, match: matchPassage(p) }));
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

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Filter chips let someone narrow the list by category — a self-select
// browse, same as any storefront's category nav. They never interpret
// a reader's specific situation or suggest which document fits it;
// every chip just shows or hides documents whose own, already-written
// description already puts them in that category.
function renderCategoryFilter() {
  const el = document.getElementById('category-filter');
  el.innerHTML = '';
  const categories = [...new Set(state.documents.flatMap(d => d.categories || []))];

  const makeChip = (label, value) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (state.categoryFilter === value ? ' active' : '');
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

function renderPicker() {
  const list = document.getElementById('doc-list');
  list.innerHTML = '';
  const docs = state.categoryFilter
    ? state.documents.filter(d => (d.categories || []).includes(state.categoryFilter))
    : state.documents;
  docs.forEach(doc => {
    const card = document.createElement('button');
    card.className = 'doc-card';
    card.type = 'button';
    card.innerHTML = `
      <div>
        <h3>${doc.title}</h3>
        <p>${doc.description}</p>
      </div>
      <span class="go">START &rarr;</span>
    `;
    card.addEventListener('click', () => {
      state.document = doc;
      state.answers = {};
      renderWizard();
      showScreen('screen-wizard');
      document.getElementById('draft-banner').hidden = true;
    });
    list.appendChild(card);
  });
}

function renderWizard() {
  document.getElementById('wizard-title').textContent = state.document.title;
  document.getElementById('wizard-lede').textContent =
    "Fill in a few details — nothing here is legal advice, just fields the document needs.";

  const fieldsEl = document.getElementById('wizard-fields');
  fieldsEl.innerHTML = '';
  state.document.fields.forEach(f => {
    const wrap = document.createElement('div');
    wrap.className = 'field';
    const existing = state.answers[f.id] || '';
    wrap.innerHTML = `
      <label for="field-${f.id}">${f.label}</label>
      <input id="field-${f.id}" name="${f.id}" placeholder="${f.placeholder || ''}"
             ${f.required ? 'required' : ''} value="${existing}" />
    `;
    fieldsEl.appendChild(wrap);
  });
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
function assembleDocument() {
  return state.document.clauseOrder
    .map(id => state.clauses.find(c => c.id === id))
    .filter(Boolean)
    .map(clause => ({ ...clause, renderedBody: substitute(clause.body, state.answers) }));
}

function renderOutput() {
  const assembled = assembleDocument();
  state.edits = {};
  state.editedClauseIds = new Set();

  document.getElementById('output-meta').textContent = preparedForLine(state.answers);

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
document.getElementById('output-back').addEventListener('click', () => {
  state.answers = {};
  clearDraft();
  showScreen('screen-picker');
});

// Save on every keystroke rather than on blur/submit — a tab closed
// mid-field shouldn't lose more than the current character.
document.getElementById('wizard-form').addEventListener('input', e => {
  if (!e.target.id.startsWith('field-')) return;
  const fieldId = e.target.id.slice('field-'.length);
  state.answers[fieldId] = e.target.value;
  saveDraft();
});

// Builds a readable plain-text export of the assembled document,
// including the same citations and gaps the on-screen badges show —
// the text file should carry the same receipts the page does, not
// just the fill-in-the-blank prose.
function buildPlainText() {
  const assembled = assembleDocument();
  const lines = [];
  lines.push(state.document.title.toUpperCase());
  lines.push(preparedForLine(state.answers));
  lines.push('');
  assembled.forEach(clause => {
    const edited = state.editedClauseIds.has(clause.id);
    lines.push(clause.title.toUpperCase());
    lines.push(edited ? state.edits[clause.id] : clause.renderedBody);
    if (clause.kind !== 'drafting') {
      lines.push('');
      if (clause.status === 'verified' && edited) {
        lines.push(`[Edited since verified on ${clause.checkedDate} — check the citation below still fits this wording]`);
        (clause.citations || []).forEach(c => {
          lines.push(`  "${c.quote}"`);
          lines.push(`  — ${c.case}, ${c.cite} (${c.url})`);
        });
        if (clause.gap) lines.push(`  Known gap: ${clause.gap}`);
      } else if (clause.status === 'verified') {
        lines.push(`[Verified — checked ${clause.checkedDate}]`);
        (clause.citations || []).forEach(c => {
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

  const signedEntry = currentLibraryEntry();
  if (signedEntry && signedEntry.signature) {
    lines.push('SIGNATURE');
    lines.push(
      signedEntry.signature.type === 'typed'
        ? `Signed: ${signedEntry.signature.name}`
        : 'Signed: [drawn signature — see the on-screen or downloaded version to view it]'
    );
    lines.push(`Date: ${new Date(signedEntry.signature.signedAt).toLocaleString()}`);
    lines.push('');
  }

  lines.push('—');
  lines.push('Groundtruth v1 demo · every "Verified" citation links to a real, checked source.');
  return lines.join('\n');
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

document.getElementById('output-download').addEventListener('click', () => {
  const text = buildPlainText();
  const slug = state.document.title.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-');
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slug}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById('wizard-form').addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  state.document.fields.forEach(f => {
    state.answers[f.id] = (formData.get(f.id) || '').trim();
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

document.getElementById('promise-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('promise-text');
  const text = input.value.trim();
  if (!text) return;
  addPromise(text);
  input.value = '';
  renderPromises();
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
document.getElementById('incoming-back').addEventListener('click', () => showScreen('screen-picker'));
document.getElementById('incoming-form').addEventListener('submit', e => {
  e.preventDefault();
  const text = document.getElementById('incoming-text').value;
  renderIncomingResults(splitPassages(text));
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
  };
  const slug = state.document.title.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-');
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slug}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

init();
