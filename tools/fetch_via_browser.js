// Fetch a single URL through headless Chromium and print its rendered HTML.
//
// Exists because CourtListener sits behind an AWS WAF JavaScript challenge
// that curl cannot pass — it needs a token computed by client-side JS, then
// reloads. recheck_all.py uses curl for everything (fast, no browser needed)
// and falls back to this only when it detects the WAF stub page, so the
// slow path is paid only when actually challenged.
//
// Usage: node tools/fetch_via_browser.js <url>
// Prints the page's rendered HTML to stdout. Prints nothing on failure.

const { chromium } = require('playwright');

async function main() {
  const url = process.argv[2];
  if (!url) { process.exit(1); }

  // The sandbox's egress proxy re-terminates TLS with its own CA
  // (/root/.ccr/ca-bundle.crt), which curl is configured to trust but a
  // fresh Chromium is not — Chromium ships its own root store and ignores
  // both the system trust store and NSS on this build. Pinning the SPKI
  // hash of exactly that one CA (computed via openssl from the bundle)
  // trusts that specific certificate without disabling verification for
  // anything else — unlike --ignore-certificate-errors, an unknown or
  // different certificate is still rejected.
  const PROXY_CA_SPKI = 'PS48cX347wDVcRynzq+DFqswl2PLNE1sG6uQvxMCOS0=';
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium',
    args: [`--ignore-certificate-errors-spki-list=${PROXY_CA_SPKI}`],
  });
  const page = await browser.newPage({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36',
  });

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000, referer: 'https://www.courtlistener.com/' });

    // The WAF challenge page runs its own JS, gets a token, and reloads
    // itself (window.location.reload(true)). Wait for that reload to land
    // on real content rather than assuming one navigation was enough.
    for (let i = 0; i < 3; i++) {
      const isChallenge = await page.evaluate(() =>
        document.getElementById('challenge-container') !== null ||
        (document.title === '' && document.body.innerText.includes('robot'))
      );
      if (!isChallenge) break;
      await page.waitForTimeout(3000);
      await page.waitForLoadState('domcontentloaded').catch(() => {});
    }

    await page.waitForTimeout(500);
    const html = await page.content();
    process.stdout.write(html);
  } catch (e) {
    console.error('ERROR:', e.message);
  } finally {
    await browser.close();
  }
}

main();
