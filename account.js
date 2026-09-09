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
    originalAdd(documentId, title, answers);
    if (!accountState.session) return;
    const entries = loadLibrary();
    const entry = entries[entries.length - 1];
    accountState.client.from('agreements').upsert({
      id: entry.id,
      user_id: accountState.session.user.id,
      document_id: entry.documentId,
      title: entry.title,
      answers: entry.answers,
      generated_at: entry.generatedAt,
    }).then(({ error }) => { if (error) console.error('Groundtruth: cloud save failed', error); });
  };

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
    return;
  }

  const p = document.createElement('p');
  p.className = 'lede';
  p.textContent = 'Sign in to sync your saved documents across devices. No password — we’ll email you a one-time link.';
  el.appendChild(p);

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
}

document.getElementById('account-link').addEventListener('click', () => {
  renderAccountScreen();
  showScreen('screen-account');
});
document.getElementById('account-back').addEventListener('click', () => showScreen('screen-picker'));

initAccount();
