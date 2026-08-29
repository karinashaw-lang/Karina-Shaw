const state = { document: null, clauses: null, answers: {} };

async function init() {
  const [doc, clauseData] = await Promise.all([
    fetch('data/document.json').then(r => r.json()),
    fetch('data/clauses.json').then(r => r.json()),
  ]);
  state.document = doc;
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
  const card = document.createElement('button');
  card.className = 'doc-card';
  card.type = 'button';
  card.innerHTML = `
    <div>
      <h3>${state.document.title}</h3>
      <p>${state.document.description}</p>
    </div>
    <span class="go">START &rarr;</span>
  `;
  card.addEventListener('click', () => {
    renderWizard();
    showScreen('screen-wizard');
  });
  list.appendChild(card);
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

    // Sourcing badge attaches here in step 7/8.

    container.appendChild(block);
  });
}

document.getElementById('wizard-back').addEventListener('click', () => showScreen('screen-picker'));
document.getElementById('output-back').addEventListener('click', () => {
  state.answers = {};
  showScreen('screen-picker');
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
