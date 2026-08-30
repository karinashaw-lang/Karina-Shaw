const state = { documents: null, document: null, clauses: null, answers: {}, categoryFilter: null, edits: {}, editedClauseIds: new Set() };

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
  entries.push({
    id: `${documentId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    documentId,
    title,
    answers: { ...answers },
    generatedAt: new Date().toISOString(),
  });
  saveLibraryEntries(entries);
  updateLibraryCount();
}

function removeFromLibrary(entryId) {
  saveLibraryEntries(loadLibrary().filter(e => e.id !== entryId));
  updateLibraryCount();
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

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'secondary';
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        removeFromLibrary(entry.id);
        renderLibrary();
      });
      row.appendChild(removeBtn);

      listEl.appendChild(row);
    });
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

  const { companyName, employeeName } = state.answers;
  document.getElementById('output-meta').textContent =
    `Prepared for ${employeeName || '—'} · ${companyName || '—'}`;

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
  const { companyName, employeeName } = state.answers;
  const lines = [];
  lines.push(state.document.title.toUpperCase());
  lines.push(`Prepared for ${employeeName || '—'} · ${companyName || '—'}`);
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
  renderOutput();
  showScreen('screen-output');
  clearDraft();
  addToLibrary(state.document.id, state.document.title, state.answers);
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

init();
