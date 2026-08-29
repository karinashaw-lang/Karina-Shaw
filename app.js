const state = { documents: null, document: null, clauses: null, answers: {} };

async function init() {
  const [docs, clauseData] = await Promise.all([
    fetch('data/documents.json').then(r => r.json()),
    fetch('data/clauses.json').then(r => r.json()),
  ]);
  state.documents = docs;
  state.clauses = clauseData.clauses;
  renderPicker();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderPicker() {
  const list = document.getElementById('doc-list');
  list.innerHTML = '';
  state.documents.forEach(doc => {
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

  const { companyName, employeeName } = state.answers;
  document.getElementById('output-meta').textContent =
    `Prepared for ${employeeName || '—'} · ${companyName || '—'}`;

  const container = document.getElementById('output-clauses');
  container.innerHTML = '';
  assembled.forEach(clause => {
    const block = document.createElement('div');
    block.className = 'clause';

    const h3 = document.createElement('h3');
    h3.textContent = clause.title;
    block.appendChild(h3);

    const body = document.createElement('p');
    body.className = 'body-text';
    body.textContent = clause.renderedBody;
    block.appendChild(body);

    const badge = renderBadge(clause);
    if (badge) block.appendChild(badge);

    container.appendChild(block);
  });
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
  showScreen('screen-picker');
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
    lines.push(clause.title.toUpperCase());
    lines.push(clause.renderedBody);
    if (clause.kind !== 'drafting') {
      lines.push('');
      if (clause.status === 'verified') {
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
});

init();
