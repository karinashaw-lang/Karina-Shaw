// Groundtruth — signer view (Phase 7.5).
//
// Deliberately standalone: a signer clicking a link they were sent has
// no Groundtruth account and no reason to download the full app
// (data/documents.json, data/clauses.json, app.js) just to see one
// document someone shared with them. Everything this page needs comes
// from one edge function call, token-authenticated, no session.
//
// substitute() is duplicated from app.js rather than shared through a
// loaded module — it's six lines, pure, and pulling in app.js here
// would defeat the point of keeping this page light.
function substitute(text, answers) {
  return text.replace(/\{\{(\w+)\}\}(\.?)/g, (match, key, trailingDot) => {
    const val = answers[key];
    if (!val) return match;
    return trailingDot && val.endsWith('.') ? val : val + trailingDot;
  });
}

function getToken() {
  return new URLSearchParams(window.location.search).get('token');
}

function configured() {
  return !!(window.GROUNDTRUTH_CONFIG && window.GROUNDTRUTH_CONFIG.supabaseUrl && window.GROUNDTRUTH_CONFIG.supabaseAnonKey);
}

async function fetchShare(token) {
  const cfg = window.GROUNDTRUTH_CONFIG;
  try {
    const res = await fetch(`${cfg.supabaseUrl}/functions/v1/share-view?token=${encodeURIComponent(token)}`, {
      headers: { apikey: cfg.supabaseAnonKey },
    });
    const json = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, data: json };
  } catch (e) {
    return { ok: false, status: 0, data: { error: 'Couldn’t reach the server — check your connection and try again.' } };
  }
}

async function submitSignature(token, signerName, signatureType, signatureData) {
  const cfg = window.GROUNDTRUTH_CONFIG;
  try {
    const res = await fetch(`${cfg.supabaseUrl}/functions/v1/share-sign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: cfg.supabaseAnonKey },
      body: JSON.stringify({ token, signerName, signatureType, signatureData }),
    });
    const json = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, data: json };
  } catch (e) {
    return { ok: false, status: 0, data: { error: 'Couldn’t reach the server — check your connection and try again.' } };
  }
}

function renderMessage(container, text) {
  container.innerHTML = '';
  const p = document.createElement('p');
  p.className = 'lede';
  p.textContent = text;
  container.appendChild(p);
}

function renderDocument(container, share) {
  const wrap = document.createElement('div');

  const titleEl = document.createElement('h2');
  titleEl.textContent = share.title;
  wrap.appendChild(titleEl);

  (share.clauseSnapshots || []).forEach(snap => {
    const h3 = document.createElement('h3');
    h3.textContent = snap.title;
    wrap.appendChild(h3);
    const p = document.createElement('p');
    p.className = 'body-text';
    p.textContent = substitute(snap.body, share.answers || {});
    wrap.appendChild(p);
  });

  container.appendChild(wrap);
}

function renderSignatureNote(container) {
  const note = document.createElement('p');
  note.className = 'signature-note';
  note.textContent = 'A plain visual signature kept with this document. This isn’t a certified e-signature service, and doesn’t determine whether or how a signature here is legally binding.';
  container.appendChild(note);
}

function renderAlreadySigned(container, signature) {
  const box = document.createElement('div');
  box.className = 'signature-display';
  if (signature.signature_type === 'drawn') {
    const img = document.createElement('img');
    img.src = signature.signature_data;
    img.alt = 'Signature';
    box.appendChild(img);
  } else {
    const typed = document.createElement('div');
    typed.className = 'signature-typed';
    typed.textContent = signature.signature_data;
    box.appendChild(typed);
  }
  const meta = document.createElement('p');
  meta.className = 'signature-meta';
  meta.textContent = `Signed by ${signature.signer_name} on ${new Date(signature.signed_at).toLocaleString()}`;
  box.appendChild(meta);
  container.appendChild(box);
}

function initSigningForm(container, token, onSigned) {
  renderSignatureNote(container);

  const padWrap = document.createElement('div');
  padWrap.className = 'signature-pad-wrap';
  const canvas = document.createElement('canvas');
  canvas.id = 'signature-pad';
  canvas.width = 420;
  canvas.height = 130;
  canvas.setAttribute('aria-label', 'Draw your signature');
  padWrap.appendChild(canvas);
  container.appendChild(padWrap);

  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  let drawing = false;
  let hasDrawn = false;

  function pos(e) {
    const rect = canvas.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    return { x: point.clientX - rect.left, y: point.clientY - rect.top };
  }
  function start(e) { drawing = true; hasDrawn = true; const p = pos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); e.preventDefault(); }
  function move(e) { if (!drawing) return; const p = pos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); e.preventDefault(); }
  function end() { drawing = false; }
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup', end);
  canvas.addEventListener('touchstart', start);
  canvas.addEventListener('touchmove', move);
  canvas.addEventListener('touchend', end);

  const controls = document.createElement('div');
  controls.className = 'signature-controls';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Or type your name instead';
  controls.appendChild(nameInput);

  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.className = 'secondary';
  clearBtn.textContent = 'Clear';
  clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasDrawn = false;
  });
  controls.appendChild(clearBtn);

  const signBtn = document.createElement('button');
  signBtn.type = 'button';
  signBtn.className = 'primary';
  signBtn.textContent = 'Sign';
  controls.appendChild(signBtn);
  container.appendChild(controls);

  const statusEl = document.createElement('p');
  statusEl.className = 'library-row-date';
  container.appendChild(statusEl);

  signBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    let signatureType, signatureData, signerName;
    if (name) {
      signatureType = 'typed';
      signatureData = name;
      signerName = name;
    } else if (hasDrawn) {
      signatureType = 'drawn';
      signatureData = canvas.toDataURL('image/png');
      signerName = 'Signed (drawn signature)';
    } else {
      statusEl.textContent = 'Draw a signature or type your name first.';
      return;
    }
    signBtn.disabled = true;
    statusEl.textContent = 'Signing…';
    const { ok, data } = await submitSignature(token, signerName, signatureType, signatureData);
    if (!ok) {
      statusEl.textContent = (data && data.error) || 'Something went wrong — try again.';
      signBtn.disabled = false;
      return;
    }
    onSigned(data.signature);
  });
}

async function init() {
  const container = document.getElementById('sign-content');
  const token = getToken();

  if (!configured()) {
    renderMessage(container, 'Document sharing isn’t turned on for this deployment.');
    return;
  }
  if (!token) {
    renderMessage(container, 'This link is missing its token and can’t be opened.');
    return;
  }

  const { ok, status, data } = await fetchShare(token);
  if (!ok) {
    if (status === 404) renderMessage(container, 'This link is invalid — it may have been revoked.');
    else renderMessage(container, (data && data.error) || 'Couldn’t open this document.');
    return;
  }

  container.innerHTML = '';
  renderDocument(container, data);

  if (data.signature) {
    renderAlreadySigned(container, data.signature);
    return;
  }

  if (data.expired) {
    const p = document.createElement('p');
    p.className = 'incoming-unmatched';
    p.textContent = `This link expired on ${new Date(data.expiresAt).toLocaleDateString()} and can no longer be signed.`;
    container.appendChild(p);
    return;
  }

  const expiryNote = document.createElement('p');
  expiryNote.className = 'library-row-date';
  expiryNote.textContent = `This link expires on ${new Date(data.expiresAt).toLocaleDateString()}.`;
  container.appendChild(expiryNote);

  initSigningForm(container, token, signature => {
    container.innerHTML = '';
    renderDocument(container, data);
    renderAlreadySigned(container, signature);
  });
}

init().catch(() => {
  renderMessage(document.getElementById('sign-content'), 'Something went wrong loading this page.');
});
