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

function renderOutputStub() {
  const { companyName, state: st, employeeName } = state.answers;
  document.getElementById('output-meta').textContent =
    `Prepared for ${employeeName || '—'} · ${companyName || '—'} · ${st || '—'}`;
  document.getElementById('output-clauses').innerHTML =
    '<p style="color:var(--ink-soft)">Clause assembly lands in step 6 — this screen currently just proves the form data made it through.</p>';
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
  renderOutputStub();
  showScreen('screen-output');
});

init();
