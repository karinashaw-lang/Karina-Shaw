// Groundtruth — accounts & cloud sync.
//
// Loaded after app.js, and additive to it: with no config.js present
// (the default — see config.example.js), this file renders a plain
// "not turned on for this deployment" state and touches nothing else.
// The browser-only library in app.js keeps working exactly as before
// either way; this layer only adds an optional cloud mirror of it.
//
// When configured, it wraps app.js's addToLibrary/removeFromLibrary/
// clearLibrary so every local change also syncs to Supabase for the
// signed-in user — Postgres row-level security (supabase/schema.sql)
// is what actually enforces that a user can only ever read or write
// their own rows; the anon key here carries no elevated access.

const accountState = { client: null, session: null, configured: false };

function supabaseConfigured() {
  const cfg = window.GROUNDTRUTH_CONFIG;
  return !!(cfg && cfg.supabaseUrl && cfg.supabaseAnonKey && typeof window.supabase !== 'undefined');
}

function initAccount() {
  accountState.configured = supabaseConfigured();

  // Wrapped unconditionally: this just keeps the "My Documents" status
  // line honest (including the plain "not turned on" state), and is a
  // no-op beyond that when there's no cloud client to talk to.
  const originalRenderLibrary = renderLibrary;
  renderLibrary = function () {
    originalRenderLibrary();
    renderLibrarySyncStatus();
  };

  if (!accountState.configured) return;

  accountState.client = window.supabase.createClient(
    window.GROUNDTRUTH_CONFIG.supabaseUrl,
    window.GROUNDTRUTH_CONFIG.supabaseAnonKey
  );

  wrapLibraryFunctions();
  wrapAnalyticsHooks();
  wrapFeedbackHooks();

  accountState.client.auth.getSession().then(({ data }) => {
    accountState.session = data.session;
    updateAccountNav();
    if (accountState.session) mergeOnSignIn();
  });

  accountState.client.auth.onAuthStateChange((event, session) => {
    accountState.session = session;
    updateAccountNav();
    if (event === 'SIGNED_IN') mergeOnSignIn();
    if (document.getElementById('screen-account').classList.contains('active')) renderAccountScreen();
  });
}

function updateAccountNav() {
  renderLibrarySyncStatus();
}

// ---------- analytics (Phase 8.1) ----------
// "First-party, cookieless event tracking... opt-out honored, no IP
// storage. Never record any field values or sensitive fields." Fires
// regardless of sign-in state -- most usage of this app has no
// account at all, and analytics_events carries no user_id (see its
// migration) for exactly that reason. A no-op whenever cloud accounts
// aren't configured (nowhere to send an event to) or the visitor has
// opted out -- fails closed on a localStorage read error too, since
// "can't tell if they opted out" should mean "don't track," not the
// opposite.
const ANALYTICS_OPT_OUT_KEY = 'groundtruth-analytics-opt-out';

function analyticsOptedOut() {
  try { return localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === 'true'; } catch (e) { return true; }
}

function setAnalyticsOptOut(optOut) {
  try {
    if (optOut) localStorage.setItem(ANALYTICS_OPT_OUT_KEY, 'true');
    else localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
  } catch (e) { /* best-effort only */ }
}

// A random id scoped to sessionStorage, not localStorage -- gone the
// moment the tab closes, generated fresh on the next visit, never sent
// anywhere but this table. It groups one visit's own events together
// (so "slowest screens"/abandonment can be computed from real step
// sequences, not just aggregate counts) without identifying who made
// the visit, which is the whole point of keeping it tab-scoped rather
// than persistent.
function clientSessionId() {
  try {
    let id = sessionStorage.getItem('groundtruth-analytics-session');
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem('groundtruth-analytics-session', id);
    }
    return id;
  } catch (e) {
    return null;
  }
}

// Deliberately no .select() chained onto this insert: analytics_events
// has no SELECT policy for anyone via the anon-key client (by design —
// its migration's own comment explains why), and Postgres requires a
// readable row for a RETURNING-equivalent request even when the
// INSERT's own WITH CHECK passes. Confirmed directly against the live
// project before writing this, not assumed — see DECISIONS.md.
function trackEvent(eventType, fields) {
  if (!accountState.configured || analyticsOptedOut()) return;
  accountState.client.from('analytics_events').insert({ event_type: eventType, client_session_id: clientSessionId(), ...fields })
    .then(({ error }) => { if (error) console.error('Groundtruth: analytics event failed', error); });
}

// Phase 8.1's funnel events, wrapped onto the exact app.js functions
// that are each event's one real trigger point -- renderWizard() is
// the single function every "open a document" path (picker card,
// search result, related-document card) already calls; renderWizardStep()
// is the single function every step transition (first step, Next,
// Back) already calls; renderOutput() is what actually assembles a
// finished document. The 4 export buttons have no named function to
// wrap (each is an anonymous click listener in app.js) -- adding a
// second listener to the same button is simpler and less invasive
// than refactoring four export paths just to make them wrappable.
function wrapAnalyticsHooks() {
  const originalRenderWizard = renderWizard;
  renderWizard = function (resumeStep) {
    originalRenderWizard(resumeStep);
    trackEvent('opened', { document_id: state.document.id });
  };

  const originalRenderWizardStep = renderWizardStep;
  renderWizardStep = function () {
    originalRenderWizardStep();
    trackEvent('step_reached', {
      document_id: state.document.id,
      step_id: state.wizardReviewing ? 'review' : String(state.wizardStepIndex),
    });
  };

  const originalRenderOutput = renderOutput;
  renderOutput = function () {
    originalRenderOutput();
    trackEvent('completed', { document_id: state.document.id });
  };

  // search_query is the one exception to "never record field values" --
  // it's what someone typed into the document search box, never a
  // wizard field's answer, which is exactly the master plan's own
  // "search query text with no field values" wording.
  const originalSearchDocuments = searchDocuments;
  searchDocuments = function (query) {
    const results = originalSearchDocuments(query);
    trackEvent('search', { search_query: query, search_result_count: results.length });
    return results;
  };

  const EXPORT_FORMATS = { 'output-download': 'txt', 'output-download-pdf': 'pdf', 'output-download-docx': 'docx', 'output-export': 'json' };
  Object.keys(EXPORT_FORMATS).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => trackEvent('exported', { document_id: state.document.id, export_format: EXPORT_FORMATS[id] }));
  });
}

// Shown on the Account screen whenever cloud accounts are configured,
// signed in or not -- analytics isn't tied to an account, so the
// opt-out shouldn't be either.
function renderAnalyticsOptOut(container) {
  const section = document.createElement('div');
  section.style.marginTop = '32px';

  const heading = document.createElement('h2');
  heading.textContent = 'Usage analytics';
  heading.style.fontSize = '1.1rem';
  section.appendChild(heading);

  const desc = document.createElement('p');
  desc.className = 'lede';
  desc.textContent = 'This deployment records which documents and steps get used, so the project can see what’s confusing or missing — never your answers to any field. Opt out any time; it takes effect immediately, on this device.';
  section.appendChild(desc);

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = analyticsOptedOut();
  checkbox.addEventListener('change', () => setAnalyticsOptOut(checkbox.checked));
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(' Don’t record my usage'));
  section.appendChild(label);

  container.appendChild(section);
}

// A one-line status at the top of "My Documents" — the same three
// states as the Account screen itself, so someone never has to visit
// Account just to find out whether what they're looking at is synced.
function renderLibrarySyncStatus() {
  const el = document.getElementById('library-sync-status');
  if (!el) return;
  el.innerHTML = '';
  const p = document.createElement('p');
  p.className = 'library-row-date';
  p.style.margin = '0 0 20px';
  if (!accountState.configured) {
    p.textContent = 'Saved to this browser only.';
  } else if (accountState.session) {
    p.textContent = `Synced to ${accountState.session.user.email}.`;
  } else {
    p.textContent = 'Saved to this browser only — sign in under Account to sync across devices.';
  }
  el.appendChild(p);
}

// One-time reconciliation the moment a session appears (page load with
// an existing session, or a fresh sign-in): local-only entries get
// pushed up, cloud-only entries get pulled down. Entries that exist in
// both places are left as-is — this is a merge, not an overwrite, so a
// document made before signing in is never silently dropped.
async function mergeOnSignIn() {
  if (!accountState.session) return;
  const userId = accountState.session.user.id;
  const local = loadLibrary();

  const { data: cloudRows, error } = await accountState.client
    .from('agreements')
    .select('*')
    .eq('user_id', userId);
  if (error) { console.error('Groundtruth: could not load cloud documents', error); return; }

  const localIds = new Set(local.map(e => e.id));
  const cloudIds = new Set((cloudRows || []).map(r => r.id));

  const toPush = local.filter(e => !cloudIds.has(e.id));
  if (toPush.length) {
    await accountState.client.from('agreements').upsert(toPush.map(e => ({
      id: e.id,
      user_id: userId,
      document_id: e.documentId,
      title: e.title,
      answers: e.answers,
      generated_at: e.generatedAt,
    })));
  }

  const toPull = (cloudRows || [])
    .filter(r => !localIds.has(r.id))
    .map(r => ({ id: r.id, documentId: r.document_id, title: r.title, answers: r.answers, generatedAt: r.generated_at }));
  if (toPull.length) {
    saveLibraryEntries([...local, ...toPull]);
  }

  updateLibraryCount();
  if (document.getElementById('screen-library').classList.contains('active')) renderLibrary();
}

// Wraps (doesn't replace) the plain localStorage functions app.js
// already defines, so every existing call site — the wizard submit
// handler, the library screen's Remove/Clear buttons — keeps working
// unchanged, and just gains a cloud write alongside the local one
// whenever someone is signed in.
function wrapLibraryFunctions() {
  const originalAdd = addToLibrary;
  addToLibrary = function (documentId, title, answers) {
    const entry = originalAdd(documentId, title, answers);
    if (accountState.session) {
      syncEntryToCloud(entry);
      writeAuditLogEntry(entry);
    }
    return entry;
  };

  function syncEntryToCloud(entry) {
    accountState.client.from('agreements').upsert({
      id: entry.id,
      user_id: accountState.session.user.id,
      document_id: entry.documentId,
      title: entry.title,
      answers: entry.answers,
      generated_at: entry.generatedAt,
    }).then(({ error }) => { if (error) console.error('Groundtruth: cloud save failed', error); });
  };

  // Phase 7.3: one append-only audit_log row per generated document —
  // never the field answers themselves (the schema has no column for
  // them), only what the master plan's 7.3 asks for: which document,
  // which corpus snapshot it used, and a fingerprint of the rendered
  // output. Logged once, at the moment a document is first generated
  // (addToLibrary) — not again on regenerateLibraryEntry()'s snapshot
  // refresh, which updates the same saved document rather than
  // generating a new one.
  function writeAuditLogEntry(entry) {
    let outputHash = 'unavailable';
    try { outputHash = hashString(buildPlainText()); } catch (e) { /* best-effort only */ }
    accountState.client.from('audit_log').insert({
      user_id: accountState.session.user.id,
      document_id: entry.documentId,
      corpus_version: entry.corpusVersion || null,
      clause_ids: (entry.clauseSnapshots || []).map(c => c.id),
      clause_checked_dates: Object.fromEntries(
        (entry.clauseSnapshots || []).map(c => [c.id, c.checkedDate || null])
      ),
      output_hash: outputHash,
    }).then(({ error }) => { if (error) console.error('Groundtruth: audit log write failed', error); });
  }

  const originalRemove = removeFromLibrary;
  removeFromLibrary = function (entryId) {
    originalRemove(entryId);
    if (!accountState.session) return;
    accountState.client.from('agreements').delete().eq('id', entryId).eq('user_id', accountState.session.user.id)
      .then(({ error }) => { if (error) console.error('Groundtruth: cloud delete failed', error); });
  };

  const originalClear = clearLibrary;
  clearLibrary = function () {
    originalClear();
    if (!accountState.session) return;
    accountState.client.from('agreements').delete().eq('user_id', accountState.session.user.id)
      .then(({ error }) => { if (error) console.error('Groundtruth: cloud clear failed', error); });
  };

  const originalRenderLibrary = renderLibrary;
  renderLibrary = function () {
    originalRenderLibrary();
    renderLibrarySyncStatus();
  };

  // Phase 7.5: the "share for signature" controls live on the output
  // screen, next to the existing local signature section -- wrapped
  // the same way renderLibrary already is, rather than app.js knowing
  // anything about Supabase.
  const originalRenderSignatureSection = renderSignatureSection;
  renderSignatureSection = function () {
    originalRenderSignatureSection();
    renderShareSection();
  };
}

// ---------- feedback (Phase 8.2) ----------
// "A feedback control on every output screen" means every visitor,
// signed in or not — feedback.user_id is nullable for exactly this
// reason (see its migration). Wrapped onto renderOutput() the same
// way Phase 8.1's "completed" event is, in its own function so the
// two phases' hooks stay easy to tell apart in the diff/history even
// though both end up chained onto the same call.
function wrapFeedbackHooks() {
  const originalRenderOutput = renderOutput;
  renderOutput = function () {
    originalRenderOutput();
    const container = document.getElementById('feedback-section');
    if (container) renderFeedbackSection(container);
  };
}

const FEEDBACK_CATEGORIES = [
  ['confusing_question', 'A question was confusing'],
  ['wrong_or_outdated', 'Something looks wrong or outdated'],
  ['missing_document', 'I was looking for a different document'],
];

function renderFeedbackSection(container) {
  container.innerHTML = '';
  if (!accountState.configured) return;

  const section = document.createElement('div');
  section.className = 'signature-section';

  const heading = document.createElement('h3');
  heading.textContent = 'Was anything unclear?';
  section.appendChild(heading);

  const categorySelect = document.createElement('select');
  FEEDBACK_CATEGORIES.forEach(([value, label]) => {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = label;
    categorySelect.appendChild(opt);
  });
  section.appendChild(categorySelect);

  // Only shown for "wrong or outdated" — the master plan's own "route
  // ... as a minor finding with the clause id" needs a real clause id
  // to route to, which the database itself now enforces (see the
  // migration's feedback_clause_id_required_for_wrong_or_outdated
  // check) rather than trusting this UI alone to get it right.
  const clauseSelect = document.createElement('select');
  const placeholderOpt = document.createElement('option');
  placeholderOpt.value = '';
  placeholderOpt.textContent = 'Which clause?';
  clauseSelect.appendChild(placeholderOpt);
  (state.document.clauseOrder || []).forEach(entry => {
    const id = clauseEntryId(entry);
    const clause = state.clauses.find(c => c.id === id);
    if (!clause) return;
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = clause.title;
    clauseSelect.appendChild(opt);
  });
  clauseSelect.hidden = categorySelect.value !== 'wrong_or_outdated';
  section.appendChild(clauseSelect);

  categorySelect.addEventListener('change', () => {
    clauseSelect.hidden = categorySelect.value !== 'wrong_or_outdated';
  });

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Say more (optional)';
  textarea.rows = 3;
  textarea.style.display = 'block';
  textarea.style.width = '100%';
  textarea.style.margin = '10px 0';
  section.appendChild(textarea);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'button';
  submitBtn.className = 'secondary';
  submitBtn.textContent = 'Send feedback';
  section.appendChild(submitBtn);

  const statusEl = document.createElement('p');
  statusEl.className = 'library-row-date';
  section.appendChild(statusEl);

  submitBtn.addEventListener('click', async () => {
    if (categorySelect.value === 'wrong_or_outdated' && !clauseSelect.value) {
      statusEl.textContent = 'Pick which clause first.';
      return;
    }
    submitBtn.disabled = true;
    statusEl.textContent = 'Sending…';
    const { error } = await accountState.client.from('feedback').insert({
      user_id: accountState.session ? accountState.session.user.id : null,
      category: categorySelect.value,
      message: textarea.value.trim() || null,
      document_id: state.document.id,
      clause_id: categorySelect.value === 'wrong_or_outdated' ? clauseSelect.value : null,
    });
    submitBtn.disabled = false;
    if (error) {
      statusEl.textContent = `Couldn’t send that: ${error.message}`;
      return;
    }
    statusEl.textContent = 'Thanks — sent.';
    textarea.value = '';
  });

  container.appendChild(section);
}

// ---------- client error reporting (Phase 9.3) ----------
// "A lightweight self-hosted or privacy-respecting service, scrubbing
// field values" -- self-hosted means this project's own Supabase, not
// a third-party SaaS; scrubbing happens here, before anything leaves
// the browser, not trusted to the server side. app.js's
// groundtruthReportError() calls window.groundtruthReportErrorImpl,
// which this file defines -- the same "app.js stays Supabase-unaware,
// account.js is the only thing that talks to it" split as everywhere
// else, and a no-op whenever cloud accounts aren't configured, same as
// analytics/feedback.
//
// A real wizard field value could, in principle, end up inside a JS
// error's message (a thrown validation message that happened to
// interpolate user input, for instance) -- this can't prove a given
// message never does, so it redacts anything shaped like one rather
// than trusting every call site upstream to never pass one through:
// quoted strings over 15 characters and anything email-shaped.
function scrubErrorText(text) {
  if (!text) return text;
  return String(text)
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, '[redacted-email]')
    .replace(/"[^"]{15,}"/g, '"[redacted]"')
    .replace(/'[^']{15,}'/g, '\'[redacted]\'')
    .slice(0, 500);
}

// Keeps only structural location info (function name, file, line,
// column) from a stack trace -- never the inline source-line context
// some browsers append, and never the trace's own first line, which
// just repeats the (already separately scrubbed) error message.
function parseStackFrames(stack) {
  if (!stack) return [];
  return stack.split('\n').slice(1).map(line => {
    const m = line.match(/at\s+(?:(.+?)\s+\()?(.*?):(\d+):(\d+)\)?/);
    if (!m) return null;
    return { fn: m[1] || '(anonymous)', file: (m[2] || '').split('/').pop(), line: Number(m[3]), col: Number(m[4]) };
  }).filter(Boolean).slice(0, 10);
}

window.groundtruthReportErrorImpl = function (details) {
  if (!accountState.configured) return;
  accountState.client.from('error_reports').insert({
    error_name: details.errorName || 'Error',
    message: scrubErrorText(details.message) || '(no message)',
    source_file: details.sourceFile ? details.sourceFile.split('/').pop() : null,
    line_number: details.lineNumber || null,
    column_number: details.columnNumber || null,
    stack_frames: parseStackFrames(details.stack),
    user_agent: navigator.userAgent,
    page: window.location.pathname,
    client_session_id: clientSessionId(),
  }).then(({ error }) => { if (error) console.error('Groundtruth: error report failed to send', error); });
};

function generateShareToken() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
}

// Phase 7.5: "share a document by expiring link." Freezes exactly what
// Phase 6.3 already freezes onto a library entry (clauseSnapshots,
// corpusVersion) onto the share row too, so a later corpus change or
// edit to the saved entry never retroactively changes what a signer
// already looked at or signed.
function renderShareSection() {
  const container = document.getElementById('share-section');
  if (!container) return;
  container.innerHTML = '';
  if (!accountState.session) return;
  const entry = currentLibraryEntry();
  if (!entry) return;

  const section = document.createElement('div');
  section.className = 'signature-section';

  const heading = document.createElement('h3');
  heading.textContent = 'Share for signature';
  section.appendChild(heading);

  const desc = document.createElement('p');
  desc.className = 'signature-note';
  desc.textContent = 'Create a link someone else can open to review this document and add their own signature — no account needed on their end. Anyone with the link can sign it once, until it expires. This isn’t a certified e-signature service, and doesn’t determine whether or how a signature is legally binding.';
  section.appendChild(desc);

  const controls = document.createElement('div');
  controls.className = 'signature-controls';

  const expirySelect = document.createElement('select');
  [1, 7, 30].forEach(days => {
    const opt = document.createElement('option');
    opt.value = String(days);
    opt.textContent = `Expires in ${days} day${days === 1 ? '' : 's'}`;
    if (days === 7) opt.selected = true;
    expirySelect.appendChild(opt);
  });
  controls.appendChild(expirySelect);

  const createBtn = document.createElement('button');
  createBtn.type = 'button';
  createBtn.className = 'secondary';
  createBtn.textContent = 'Create share link';
  controls.appendChild(createBtn);
  section.appendChild(controls);

  const resultEl = document.createElement('p');
  resultEl.className = 'library-row-date';
  section.appendChild(resultEl);

  createBtn.addEventListener('click', async () => {
    createBtn.disabled = true;
    resultEl.textContent = 'Creating link…';
    const days = parseInt(expirySelect.value, 10);
    const token = generateShareToken();
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
    const { error } = await accountState.client.from('document_shares').insert({
      owner_id: accountState.session.user.id,
      token,
      document_id: entry.documentId,
      title: entry.title,
      answers: entry.answers,
      clause_snapshots: entry.clauseSnapshots || [],
      schema_version: entry.schemaVersion,
      corpus_version: entry.corpusVersion,
      expires_at: expiresAt,
    });
    createBtn.disabled = false;
    if (error) {
      resultEl.textContent = `Couldn’t create that link: ${error.message}`;
      return;
    }
    const base = window.location.pathname.replace(/index\.html$/, '');
    const link = `${window.location.origin}${base}sign.html?token=${token}`;
    resultEl.innerHTML = '';
    const linkInput = document.createElement('input');
    linkInput.type = 'text';
    linkInput.readOnly = true;
    linkInput.value = link;
    linkInput.style.width = '100%';
    linkInput.addEventListener('click', () => linkInput.select());
    resultEl.appendChild(linkInput);
  });

  container.appendChild(section);
}

// Phase 7.5: "a signing audit page." Lists every share this owner has
// created, whether it's been signed, and offers a sealed PDF download
// for the ones that have -- or a revoke (delete) for the ones that
// haven't, early-ending a link rather than waiting out its expiry.
function renderSharedDocuments(container) {
  const section = document.createElement('div');
  section.style.marginTop = '32px';

  const heading = document.createElement('h2');
  heading.textContent = 'Shared for signature';
  heading.style.fontSize = '1.1rem';
  section.appendChild(heading);

  const listEl = document.createElement('div');
  listEl.textContent = 'Loading…';
  section.appendChild(listEl);
  container.appendChild(section);

  accountState.client
    .from('document_shares')
    .select('id, document_id, title, expires_at, created_at')
    .eq('owner_id', accountState.session.user.id)
    .order('created_at', { ascending: false })
    .then(async ({ data: shares, error }) => {
      if (error) { listEl.textContent = `Couldn’t load shared documents: ${error.message}`; return; }
      if (!shares || shares.length === 0) { listEl.innerHTML = '<p class="library-empty">Nothing shared yet.</p>'; return; }

      const { data: signatures } = await accountState.client
        .from('document_signatures')
        .select('share_id, signer_name, signature_type, signature_data, signed_at')
        .eq('owner_id', accountState.session.user.id);
      const signatureByShare = new Map((signatures || []).map(s => [s.share_id, s]));

      listEl.innerHTML = '';
      shares.forEach(share => {
        const signature = signatureByShare.get(share.id);
        const expired = new Date(share.expires_at).getTime() < Date.now();
        const row = document.createElement('div');
        row.className = 'library-row';

        const info = document.createElement('div');
        const titleEl = document.createElement('div');
        titleEl.className = 'library-row-title';
        titleEl.textContent = share.title;
        const dateEl = document.createElement('div');
        dateEl.className = 'library-row-date';
        dateEl.textContent = signature
          ? `Signed by ${signature.signer_name} on ${new Date(signature.signed_at).toLocaleDateString()}`
          : expired
            ? `Expired ${new Date(share.expires_at).toLocaleDateString()}`
            : `Awaiting signature — expires ${new Date(share.expires_at).toLocaleDateString()}`;
        info.appendChild(titleEl);
        info.appendChild(dateEl);
        row.appendChild(info);

        const btnGroup = document.createElement('div');
        btnGroup.style.display = 'flex';
        btnGroup.style.gap = '8px';

        if (signature) {
          const pdfBtn = document.createElement('button');
          pdfBtn.type = 'button';
          pdfBtn.className = 'secondary';
          pdfBtn.textContent = 'Download sealed PDF';
          pdfBtn.addEventListener('click', () => downloadSealedPdf(share, signature));
          btnGroup.appendChild(pdfBtn);
        } else {
          const revokeBtn = document.createElement('button');
          revokeBtn.type = 'button';
          revokeBtn.className = 'secondary';
          revokeBtn.textContent = 'Revoke';
          revokeBtn.addEventListener('click', async () => {
            await accountState.client.from('document_shares').delete().eq('id', share.id);
            renderAccountScreen();
          });
          btnGroup.appendChild(revokeBtn);
        }
        row.appendChild(btnGroup);
        listEl.appendChild(row);
      });
    });
}

// Re-fetches the share's full row (the list above only selects enough
// to render the summary) and renders the same buildPdfDocDefinition()
// pdfmake already uses for the live output screen, just fed a snapshot-
// built content object and a certificate page instead of live state.
async function downloadSealedPdf(share, signature) {
  const { data: full, error } = await accountState.client
    .from('document_shares')
    .select('*')
    .eq('id', share.id)
    .single();
  if (error || !full) return;

  const content = buildDocumentContentFromSnapshot({
    title: full.title,
    documentId: full.document_id,
    answers: full.answers,
    clauseSnapshots: full.clause_snapshots,
  });
  const certificate = {
    documentId: full.document_id,
    documentHash: hashString(JSON.stringify(full.clause_snapshots) + JSON.stringify(full.answers)),
    createdAt: full.created_at,
    expiresAt: full.expires_at,
    signature,
  };
  pdfMake.createPdf(buildPdfDocDefinition(content, certificate)).download(`${full.document_id}-signed.pdf`);
}

// Phase 7.3: "make the log viewable and exportable by the user." A
// fresh fetch every time the Account screen is shown, rather than a
// client-side cache — this is the one place the log is read back, so
// there's no staleness to manage by keeping a second copy around.
function renderAuditLog(container) {
  const section = document.createElement('div');
  section.style.marginTop = '32px';

  const heading = document.createElement('h2');
  heading.textContent = 'Activity log';
  heading.style.fontSize = '1.1rem';
  section.appendChild(heading);

  const desc = document.createElement('p');
  desc.className = 'lede';
  desc.textContent = 'One entry per document you’ve generated while signed in: which document, which version of the corpus it used, and a fingerprint of the output. Never your answers to any field.';
  section.appendChild(desc);

  const listEl = document.createElement('div');
  listEl.textContent = 'Loading…';
  section.appendChild(listEl);
  container.appendChild(section);

  accountState.client
    .from('audit_log')
    .select('*')
    .eq('user_id', accountState.session.user.id)
    .order('created_at', { ascending: false })
    .then(({ data, error }) => {
      if (error) { listEl.textContent = `Couldn't load the activity log: ${error.message}`; return; }
      listEl.innerHTML = '';
      if (!data || data.length === 0) {
        listEl.innerHTML = '<p class="library-empty">Nothing logged yet.</p>';
        return;
      }

      const exportBtn = document.createElement('button');
      exportBtn.type = 'button';
      exportBtn.className = 'secondary';
      exportBtn.textContent = 'Export log as JSON';
      exportBtn.style.marginBottom = '12px';
      exportBtn.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'groundtruth-activity-log.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
      listEl.appendChild(exportBtn);

      data.forEach(row => {
        const doc = (state.documents || []).find(d => d.id === row.document_id);
        const rowEl = document.createElement('div');
        rowEl.className = 'library-row';
        const info = document.createElement('div');
        const titleEl = document.createElement('div');
        titleEl.className = 'library-row-title';
        titleEl.textContent = (doc && doc.title) || row.document_id;
        const dateEl = document.createElement('div');
        dateEl.className = 'library-row-date';
        dateEl.textContent = `Generated ${new Date(row.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} — corpus ${row.corpus_version || 'n/a'}, output ${row.output_hash}`;
        info.appendChild(titleEl);
        info.appendChild(dateEl);
        rowEl.appendChild(info);
        listEl.appendChild(rowEl);
      });
    });
}

// Phase 7.4: session management. "Sign out of other devices" needs no
// edge function — it's the documented signOut({scope:'others'}) call,
// made with the signed-in user's own session, no elevated privilege
// involved. Listing *which* devices needs an edge function instead:
// individual sessions (auth.sessions) aren't exposed through the
// public-schema REST API at any privilege level, only through a
// direct Postgres connection — see supabase/functions/list-sessions.
function renderSessionManagement(container) {
  const section = document.createElement('div');
  section.style.marginTop = '32px';

  const heading = document.createElement('h2');
  heading.textContent = 'Sessions';
  heading.style.fontSize = '1.1rem';
  section.appendChild(heading);

  const listEl = document.createElement('div');
  listEl.textContent = 'Loading your signed-in devices…';
  section.appendChild(listEl);

  const revokeBtn = document.createElement('button');
  revokeBtn.type = 'button';
  revokeBtn.className = 'secondary';
  revokeBtn.textContent = 'Sign out of all other devices';
  revokeBtn.style.marginTop = '12px';
  revokeBtn.addEventListener('click', async () => {
    revokeBtn.disabled = true;
    revokeBtn.textContent = 'Signing out other devices…';
    const { error } = await accountState.client.auth.signOut({ scope: 'others' });
    revokeBtn.disabled = false;
    revokeBtn.textContent = error ? `Couldn’t do that: ${error.message}` : 'Signed out of all other devices.';
  });
  section.appendChild(revokeBtn);
  container.appendChild(section);

  callEdgeFunction('list-sessions', { method: 'GET' }).then(({ data, error }) => {
    if (error) {
      listEl.textContent = `Couldn’t load your sessions: ${error}`;
      return;
    }
    const sessions = (data && data.sessions) || [];
    if (sessions.length === 0) {
      listEl.textContent = 'No other session information available yet.';
      return;
    }
    listEl.innerHTML = '';
    sessions.forEach(s => {
      const row = document.createElement('div');
      row.className = 'library-row';
      const info = document.createElement('div');
      const titleEl = document.createElement('div');
      titleEl.className = 'library-row-title';
      titleEl.textContent = (s.current ? 'This device — ' : '') + (s.user_agent || 'Unknown device');
      const dateEl = document.createElement('div');
      dateEl.className = 'library-row-date';
      const last = s.refreshed_at || s.created_at;
      dateEl.textContent = `Last active ${new Date(last).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
      info.appendChild(titleEl);
      info.appendChild(dateEl);
      row.appendChild(info);
      listEl.appendChild(row);
    });
  });
}

// Thin wrapper around calling an edge function with the signed-in
// user's own access token — every edge function this app calls checks
// that token itself (supabase.auth.getUser()), so the anon key alone
// would not be enough to prove who's asking.
async function callEdgeFunction(name, { method = 'POST', body } = {}) {
  try {
    const res = await fetch(`${window.GROUNDTRUTH_CONFIG.supabaseUrl}/functions/v1/${name}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        apikey: window.GROUNDTRUTH_CONFIG.supabaseAnonKey,
        Authorization: `Bearer ${accountState.session.access_token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const json = await res.json().catch(() => null);
    if (!res.ok) return { data: null, error: (json && json.error) || `HTTP ${res.status}` };
    return { data: json, error: null };
  } catch (e) {
    return { data: null, error: e.message };
  }
}

// Phase 7.4: "data export (all user data as JSON)." Every table a
// signed-in user can read is already readable through their own
// select policy (Phase 7.1) — no edge function needed, this is a
// plain fetch-everything-and-bundle, the same pattern the per-document
// JSON export in app.js already uses for the download itself.
const EXPORTABLE_TABLES = ['agreements', 'document_versions', 'audit_log', 'feedback', 'orders', 'order_items'];

async function fetchAllUserData() {
  const userId = accountState.session.user.id;
  const result = { exportedAt: new Date().toISOString(), email: accountState.session.user.email };
  for (const table of EXPORTABLE_TABLES) {
    const { data, error } = await accountState.client.from(table).select('*').eq('user_id', userId);
    result[table] = error ? { error: error.message } : data;
  }
  result.localLibrary = loadLibrary();
  return result;
}

function renderDataExport(container) {
  const section = document.createElement('div');
  section.style.marginTop = '32px';

  const heading = document.createElement('h2');
  heading.textContent = 'Export your data';
  heading.style.fontSize = '1.1rem';
  section.appendChild(heading);

  const desc = document.createElement('p');
  desc.className = 'lede';
  desc.textContent = 'Everything stored under your account — every synced document, activity log entry, and order — as one JSON file, plus whatever is saved only in this browser.';
  section.appendChild(desc);

  const exportBtn = document.createElement('button');
  exportBtn.type = 'button';
  exportBtn.className = 'secondary';
  exportBtn.textContent = 'Export all my data';
  exportBtn.addEventListener('click', async () => {
    exportBtn.disabled = true;
    exportBtn.textContent = 'Gathering your data…';
    const data = await fetchAllUserData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'groundtruth-account-data.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    exportBtn.disabled = false;
    exportBtn.textContent = 'Export all my data';
  });
  section.appendChild(exportBtn);
  container.appendChild(section);
}

// Phase 7.4: full account deletion. Requires an edge function
// (supabase/functions/delete-account) because deleting a row from
// auth.users is an admin-only operation — no anon-key client call can
// do it to its own account. Every other table's user_id column was
// built with `references auth.users(id) on delete cascade` (Phase
// 7.1), so deleting the auth user is genuinely sufficient to remove
// every row this account ever wrote — confirmed directly against
// pg_constraint, not assumed.
//
// The receipt is built from a count fetched *before* calling the edge
// function, since there is nothing left to query once the account (and
// the session itself) is gone. A typed confirmation, not a single
// click, is the one real check against an accidental press — the same
// bar GitHub's own "type the repo name" pattern sets for this kind of
// irreversible action.
function renderAccountDeletion(container) {
  const section = document.createElement('div');
  section.style.marginTop = '32px';

  const heading = document.createElement('h2');
  heading.textContent = 'Delete my account';
  heading.style.fontSize = '1.1rem';
  section.appendChild(heading);

  const desc = document.createElement('p');
  desc.className = 'lede';
  desc.textContent = 'Permanently deletes your account and every row synced to it (documents, versions, activity log, orders). This cannot be undone. Type DELETE below to confirm.';
  section.appendChild(desc);

  const confirmInput = document.createElement('input');
  confirmInput.type = 'text';
  confirmInput.placeholder = 'Type DELETE to confirm';
  confirmInput.id = 'account-delete-confirm';
  section.appendChild(confirmInput);

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'secondary';
  deleteBtn.style.marginTop = '12px';
  deleteBtn.style.marginLeft = '8px';
  deleteBtn.textContent = 'Permanently delete my account';
  deleteBtn.disabled = true;
  confirmInput.addEventListener('input', () => {
    deleteBtn.disabled = confirmInput.value.trim() !== 'DELETE';
  });

  const statusEl = document.createElement('p');
  statusEl.className = 'library-row-date';
  section.appendChild(deleteBtn);
  section.appendChild(statusEl);
  container.appendChild(section);

  deleteBtn.addEventListener('click', async () => {
    deleteBtn.disabled = true;
    statusEl.textContent = 'Gathering what will be deleted…';
    const summary = await fetchAllUserData();
    const receipt = {
      deletedAt: new Date().toISOString(),
      email: summary.email,
      rowsDeleted: Object.fromEntries(
        EXPORTABLE_TABLES.map(t => [t, Array.isArray(summary[t]) ? summary[t].length : 0])
      ),
    };

    statusEl.textContent = 'Deleting your account…';
    const { error } = await callEdgeFunction('delete-account', { method: 'POST' });
    if (error) {
      statusEl.textContent = `Couldn’t delete your account: ${error}`;
      deleteBtn.disabled = false;
      return;
    }

    const blob = new Blob([JSON.stringify(receipt, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'groundtruth-deletion-receipt.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    await accountState.client.auth.signOut({ scope: 'local' });
    accountState.session = null;
    statusEl.textContent = '';
    renderAccountScreen();
  });
}

function renderAccountScreen() {
  const el = document.getElementById('account-content');
  el.innerHTML = '';

  if (!accountState.configured) {
    const p = document.createElement('p');
    p.className = 'lede';
    p.textContent = 'Cloud accounts aren’t turned on for this deployment yet — every document you generate is still saved automatically, in this browser only, under "My Documents."';
    el.appendChild(p);
    return;
  }

  if (accountState.session) {
    const p = document.createElement('p');
    p.className = 'lede';
    p.textContent = `Signed in as ${accountState.session.user.email}. Documents you generate sync to your account automatically, and will show up in "My Documents" on any device you sign in from.`;
    el.appendChild(p);

    const signOutBtn = document.createElement('button');
    signOutBtn.type = 'button';
    signOutBtn.className = 'secondary';
    signOutBtn.textContent = 'Sign out';
    signOutBtn.addEventListener('click', async () => {
      await accountState.client.auth.signOut();
      renderAccountScreen();
    });
    el.appendChild(signOutBtn);

    renderSessionManagement(el);
    renderAuditLog(el);
    renderSharedDocuments(el);
    renderDataExport(el);
    renderAnalyticsOptOut(el);
    renderAccountDeletion(el);
    return;
  }

  const p = document.createElement('p');
  p.className = 'lede';
  p.textContent = 'Sign in to sync your saved documents across devices. No password — we’ll email you a one-time link.';
  el.appendChild(p);

  // Phase 7.4: "account recovery path appropriate for passwordless."
  // There's no password to reset, so the honest answer is to say what
  // actually happens rather than imply a recovery flow that doesn't
  // exist — the same inform-never-advise standard this project holds
  // for legal content, applied to its own account copy.
  const recoveryNote = document.createElement('p');
  recoveryNote.className = 'library-row-date';
  recoveryNote.textContent = 'There’s no password, so there’s nothing to reset: this email address is the only way back into your synced account. If you lose access to it, your synced documents can’t be recovered. Anything saved in this browser under "My Documents" is unaffected either way.';
  el.appendChild(recoveryNote);

  const form = document.createElement('form');
  form.className = 'field';
  form.innerHTML = `
    <label for="account-email">Email</label>
    <input id="account-email" type="email" required placeholder="you@example.com" />
  `;
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'primary';
  submitBtn.style.marginTop = '12px';
  submitBtn.textContent = 'Send sign-in link';
  form.appendChild(submitBtn);

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('account-email').value.trim();
    if (!email) return;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    const { error } = await accountState.client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + window.location.pathname },
    });
    if (error) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send sign-in link';
      const err = document.createElement('p');
      err.className = 'incoming-unmatched';
      err.textContent = `Couldn't send that: ${error.message}`;
      el.appendChild(err);
      return;
    }
    el.innerHTML = '';
    const sent = document.createElement('p');
    sent.className = 'consistency-ok';
    sent.textContent = `Check ${email} for a sign-in link.`;
    el.appendChild(sent);
  });

  el.appendChild(form);
  renderAnalyticsOptOut(el);
}

document.getElementById('account-link').addEventListener('click', () => {
  renderAccountScreen();
  showScreen('screen-account');
});
document.getElementById('account-back').addEventListener('click', () => showScreen('screen-picker'));

initAccount();
