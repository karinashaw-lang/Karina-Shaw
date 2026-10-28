// Phase 9.3: real browser checks of account.js's error-scrubbing and
// reporting pipeline. scrubErrorText()/parseStackFrames() are checked
// directly (they're plain, always-defined functions, not gated behind
// configuration); the full capture-to-insert pipeline is checked by
// stubbing config.js and the Supabase CDN script (the same
// page.route() technique tests/share/sign_page.js already uses) so a
// fake Supabase client can record exactly what account.js would have
// sent, with no live network and no real credentials.
//
//   python3 -m http.server 8933 &
//   node tests/error_reporting/error_reporting.js
const fs = require('fs');
const { chromium } = require('playwright');

const checks = [];
function check(name, cond, detail) {
  checks.push({ name, ok: !!cond, detail });
  console.log(`${cond ? 'OK  ' : 'FAIL'} ${name}${!cond && detail ? ' -- ' + detail : ''}`);
}

const FAKE_CONFIG = `window.GROUNDTRUTH_CONFIG = { supabaseUrl: 'https://fake.supabase.co', supabaseAnonKey: 'fake-anon-key' };`;
// A minimal stand-in for the real supabase-js client, just enough for
// account.js's init path (auth.getSession/onAuthStateChange, and the
// one method under test, .from('error_reports').insert()) to run
// without throwing, recording every insert call onto a global array
// the test can read back.
const FAKE_SUPABASE_SDK = `
window.__inserts = [];
window.supabase = {
  createClient: () => ({
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => {},
    },
    from: (table) => ({
      insert: (row) => { window.__inserts.push({ table, row }); return Promise.resolve({ error: null }); },
    }),
  }),
};
`;

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.route('**/config.js', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: FAKE_CONFIG }));
  await page.route('**/@supabase/supabase-js@2', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: FAKE_SUPABASE_SDK }));
  await page.goto('http://localhost:8933/index.html', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses);

  // ---- scrubErrorText: always defined, testable directly ----
  const scrubResults = await page.evaluate(() => ({
    email: scrubErrorText('contact me at jane.doe@example.com please'),
    longQuoted: scrubErrorText('got value "this is a pretty long quoted string that could be a field value" here'),
    shortQuoted: scrubErrorText('x is "ok" today'),
    truncated: scrubErrorText('a'.repeat(1000)),
    empty: scrubErrorText(''),
    nullish: scrubErrorText(null),
  }));
  check('scrubErrorText: redacts an email address', scrubResults.email.includes('[redacted-email]') && !scrubResults.email.includes('jane.doe@example.com'), scrubResults.email);
  check('scrubErrorText: redacts a long quoted string', scrubResults.longQuoted.includes('[redacted]') && !scrubResults.longQuoted.includes('pretty long quoted string'), scrubResults.longQuoted);
  check('scrubErrorText: leaves a short quoted string alone', scrubResults.shortQuoted.includes('"ok"'), scrubResults.shortQuoted);
  check('scrubErrorText: truncates to 500 chars', scrubResults.truncated.length === 500, String(scrubResults.truncated.length));
  check('scrubErrorText: passes through empty/null unchanged', scrubResults.empty === '' && scrubResults.nullish === null);

  // ---- parseStackFrames: structural info only ----
  const SAMPLE_STACK = 'TypeError: something went wrong with "a secret field value here"\n'
    + '    at renderOutput (http://localhost:8933/app.js:2500:10)\n'
    + '    at HTMLButtonElement.<anonymous> (http://localhost:8933/app.js:3300:5)';
  const frames = await page.evaluate(stack => parseStackFrames(stack), SAMPLE_STACK);
  check('parseStackFrames: extracts 2 frames, not the message line', frames.length === 2, JSON.stringify(frames));
  check('parseStackFrames: never includes the original message text', !JSON.stringify(frames).includes('secret field value'), JSON.stringify(frames));
  check('parseStackFrames: keeps structural file/line/col', frames[0] && frames[0].file === 'app.js' && frames[0].line === 2500 && frames[0].col === 10, JSON.stringify(frames));
  check('parseStackFrames: keeps the function name', frames[0] && frames[0].fn === 'renderOutput', JSON.stringify(frames));
  check('parseStackFrames: empty/missing stack returns []', (await page.evaluate(() => parseStackFrames(null))).length === 0);

  // ---- full pipeline: a real uncaught error reaches error_reports with scrubbed content ----
  await page.evaluate(() => { window.__inserts.length = 0; });
  await page.evaluate(() => {
    window.dispatchEvent(new ErrorEvent('error', {
      message: 'Reference error near "this looks like a long field value right here"',
      filename: 'http://localhost:8933/app.js',
      lineno: 42,
      colno: 7,
      error: new Error('Reference error near "this looks like a long field value right here"'),
    }));
  });
  const insertsAfterError = await page.evaluate(() => window.__inserts);
  check('uncaught error: reaches error_reports exactly once', insertsAfterError.length === 1, JSON.stringify(insertsAfterError));
  if (insertsAfterError.length === 1) {
    const row = insertsAfterError[0].row;
    check('uncaught error: table is error_reports', insertsAfterError[0].table === 'error_reports');
    check('uncaught error: message is scrubbed before sending', row.message.includes('[redacted]') && !row.message.includes('long field value right here'), row.message);
    check('uncaught error: source_file is a bare filename, not a full URL', row.source_file === 'app.js', row.source_file);
    check('uncaught error: carries no user_id field at all', !('user_id' in row), JSON.stringify(row));
  }

  // ---- unhandled promise rejection also reaches error_reports ----
  await page.evaluate(() => { window.__inserts.length = 0; });
  await page.evaluate(() => {
    const err = new Error('rejected for a reason');
    const event = new Event('unhandledrejection', { cancelable: true });
    Object.defineProperty(event, 'reason', { value: err });
    window.dispatchEvent(event);
  });
  const insertsAfterRejection = await page.evaluate(() => window.__inserts);
  check('unhandled rejection: reaches error_reports too', insertsAfterRejection.length === 1, JSON.stringify(insertsAfterRejection));

  await browser.close();

  const failed = checks.filter(c => !c.ok);
  console.log(`\n${checks.length - failed.length}/${checks.length} error-reporting checks passed.`);
  if (failed.length) process.exit(1);
  console.log('error reporting checks passed');
})();
