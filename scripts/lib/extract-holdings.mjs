import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_PATH = path.join(__dirname, '..', '..', 'buffett-portfolio.html');

// Pulls the `const HOLDINGS = [...]` literal straight out of the HTML so the
// probes never drift from the data actually shipped in the page.
export function extractHoldings() {
  const html = readFileSync(HTML_PATH, 'utf8');
  const match = html.match(/const HOLDINGS = (\[[\s\S]*?\]);/);
  if (!match) {
    throw new Error(`Could not find HOLDINGS array in ${HTML_PATH}`);
  }
  // The literal is plain JS object syntax (unquoted keys), not JSON, so
  // evaluate it directly rather than trying to JSON.parse it.
  return new Function(`return ${match[1]};`)();
}
