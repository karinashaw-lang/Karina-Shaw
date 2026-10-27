// Phase 7.5: real browser checks of sign.html/sign.js -- the one piece
// of this phase's client-side code that's genuinely testable without a
// live Supabase project, since it's plain fetch() to two URLs rather
// than the supabase-js client account.js uses elsewhere (which is why
// *this* file isn't in the same "needs tests/auth_roundtrip.js run
// manually" bucket as the rest of Phase 7.1/7.3/7.4/7.5's Supabase
// code -- see DECISIONS.md). page.route() stands in for the live edge
// functions, so every check below exercises sign.js's real code paths
// (parsing the token, calling the right URL, substituting {{field}}
// placeholders, switching between the signing-form and already-signed
// views) against a scripted response, not a reimplementation of them.
//
// Needs a local static server, same as regression.js/golden.js:
//   python3 -m http.server 8933 &
//   node tests/share/sign_page.js
const fs = require('fs');
const { chromium } = require('playwright');

const checks = [];
function check(name, cond, detail) {
  checks.push({ name, ok: !!cond, detail });
  console.log(`${cond ? 'OK  ' : 'FAIL'} ${name}${!cond && detail ? ' -- ' + detail : ''}`);
}

const FAKE_CONFIG = `window.GROUNDTRUTH_CONFIG = { supabaseUrl: 'https://fake.supabase.co', supabaseAnonKey: 'fake-anon-key' };`;

async function newPage(browser) {
  const page = await browser.newPage();
  // Every test below supplies its own config.js and share-view/share-sign
  // responses, regardless of what (if anything) actually exists on disk
  // or network in whatever environment this runs in.
  await page.route('**/config.js', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: FAKE_CONFIG }));
  return page;
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);

  // ---- no token in the URL ----
  {
    const page = await newPage(browser);
    await page.goto('http://localhost:8933/sign.html', { waitUntil: 'networkidle' });
    const text = await page.textContent('#sign-content');
    check('no token: shows the missing-token message', /missing its token/i.test(text), text);
    await page.close();
  }

  // ---- not configured (config.js present but empty) ----
  {
    const page = await browser.newPage();
    await page.route('**/config.js', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
    await page.goto('http://localhost:8933/sign.html?token=abc', { waitUntil: 'networkidle' });
    const text = await page.textContent('#sign-content');
    check('not configured: says sharing isn’t turned on', /isn.t turned on/i.test(text), text);
    await page.close();
  }

  // ---- invalid token (share-view 404s) ----
  {
    const page = await newPage(browser);
    await page.route('**/functions/v1/share-view*', route => route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'This link is invalid.' }) }));
    await page.goto('http://localhost:8933/sign.html?token=bad', { waitUntil: 'networkidle' });
    const text = await page.textContent('#sign-content');
    check('invalid token: shows the invalid-link message', /invalid/i.test(text), text);
    await page.close();
  }

  // ---- unsigned document: renders content with real substitution, offers a signing form ----
  const SHARE_RESPONSE = {
    documentId: 'test_doc',
    title: 'Test Share Document',
    answers: { party_name: 'Acme Co' },
    clauseSnapshots: [{ id: 'c1', title: 'Clause One', body: 'This is between the parties and {{party_name}}.', kind: 'drafting' }],
    expiresAt: new Date(Date.now() + 86400000).toISOString(),
    expired: false,
    signature: null,
  };
  {
    const page = await newPage(browser);
    await page.route('**/functions/v1/share-view*', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(SHARE_RESPONSE) }));
    await page.goto('http://localhost:8933/sign.html?token=good', { waitUntil: 'networkidle' });
    const text = await page.textContent('#sign-content');
    check('unsigned: shows the document title', text.includes('Test Share Document'), text);
    check('unsigned: substitutes {{party_name}} with the real answer', text.includes('Acme Co') && !text.includes('{{party_name}}'), text);
    check('unsigned: shows the no-enforceability-claim note', /doesn.t determine whether or how/i.test(text), text);
    const padVisible = await page.isVisible('#signature-pad');
    check('unsigned: shows the signature pad', padVisible);
    await page.close();
  }

  // ---- already signed: shows the signature, not a form ----
  {
    const page = await newPage(browser);
    const signedResponse = { ...SHARE_RESPONSE, signature: { signer_name: 'Jane Signer', signature_type: 'typed', signature_data: 'Jane Signer', signed_at: new Date().toISOString() } };
    await page.route('**/functions/v1/share-view*', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(signedResponse) }));
    await page.goto('http://localhost:8933/sign.html?token=good', { waitUntil: 'networkidle' });
    const text = await page.textContent('#sign-content');
    check('already signed: shows who signed it', text.includes('Signed by Jane Signer'), text);
    const padVisible = await page.isVisible('#signature-pad').catch(() => false);
    check('already signed: does not show a signing form', !padVisible);
    await page.close();
  }

  // ---- expired: no signing form, says so ----
  {
    const page = await newPage(browser);
    const expiredResponse = { ...SHARE_RESPONSE, expired: true };
    await page.route('**/functions/v1/share-view*', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(expiredResponse) }));
    await page.goto('http://localhost:8933/sign.html?token=good', { waitUntil: 'networkidle' });
    const text = await page.textContent('#sign-content');
    check('expired: says the link expired', /expired/i.test(text), text);
    const padVisible = await page.isVisible('#signature-pad').catch(() => false);
    check('expired: does not show a signing form', !padVisible);
    await page.close();
  }

  // ---- typed signature round trip through the real submit handler ----
  {
    const page = await newPage(browser);
    await page.route('**/functions/v1/share-view*', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(SHARE_RESPONSE) }));
    let signBody = null;
    await page.route('**/functions/v1/share-sign', async route => {
      signBody = JSON.parse(route.request().postData());
      await route.fulfill({
        status: 200, contentType: 'application/json',
        body: JSON.stringify({ signature: { signer_name: signBody.signerName, signature_type: signBody.signatureType, signature_data: signBody.signatureData, signed_at: new Date().toISOString() } }),
      });
    });
    await page.goto('http://localhost:8933/sign.html?token=good', { waitUntil: 'networkidle' });
    await page.fill('#sign-content input[type="text"]', 'Jane Q. Signer');
    await page.click('#sign-content button.primary');
    await page.waitForFunction(() => document.querySelector('#sign-content .signature-display'));
    const text = await page.textContent('#sign-content');
    check('typed signature: share-sign was called with the typed name', signBody && signBody.signerName === 'Jane Q. Signer' && signBody.signatureType === 'typed', JSON.stringify(signBody));
    check('typed signature: page now shows the signed state', text.includes('Signed by Jane Q. Signer'), text);
    await page.close();
  }

  // ---- already-signed link rejects a second signature attempt (409) ----
  {
    const page = await newPage(browser);
    await page.route('**/functions/v1/share-view*', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(SHARE_RESPONSE) }));
    await page.route('**/functions/v1/share-sign', route => route.fulfill({ status: 409, contentType: 'application/json', body: JSON.stringify({ error: 'This document has already been signed.' }) }));
    await page.goto('http://localhost:8933/sign.html?token=good', { waitUntil: 'networkidle' });
    await page.fill('#sign-content input[type="text"]', 'Someone');
    await page.click('#sign-content button.primary');
    await page.waitForFunction(() => /already been signed/i.test(document.getElementById('sign-content').textContent));
    check('409 from share-sign: shows the server’s own error message, not a generic one', true);
    await page.close();
  }

  await browser.close();

  const failed = checks.filter(c => !c.ok);
  console.log(`\n${checks.length - failed.length}/${checks.length} sign-page checks passed.`);
  if (failed.length) process.exit(1);
  console.log('sign-page checks passed');
})();
