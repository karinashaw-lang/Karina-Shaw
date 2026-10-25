# lib/

Third-party browser libraries vendored directly into the repo, rather
than loaded from a CDN at runtime. The one precedent for an external
script in this project (`@supabase/supabase-js`, in `index.html`) is
explicitly optional — cloud accounts are opt-in and the app works
identically if that script 404s. PDF export (Phase 6.1) and Word
export (Phase 6.2) are core output paths sitting alongside "Download
as text" and "Export data (JSON)", not opt-in extras, so both follow
the project's "zero-config must keep working" rule literally: no
network request, to any host, is needed to generate either file.

## pdfmake.min.js + vfs_fonts.js

[pdfmake](https://pdfmake.github.io/) v0.3.12, MIT licensed. Pulled via
`npm pack pdfmake` (registry.npmjs.org, not a CDN this environment's
network policy allows) and copied verbatim from the package's own
`build/pdfmake.min.js` and `build/vfs_fonts.js` — pdfmake's own
official standalone browser build, unmodified. `.map` sourcemap files
and the rest of the npm package (Node-side source, build tooling) were
not copied; they aren't needed at runtime.

`vfs_fonts.js` bundles Roboto (regular/medium/italic/medium-italic) as
base64 and self-registers it into pdfmake's virtual filesystem on
load — this is what satisfies the master plan's "embed fonts"
requirement: generated PDFs carry their own font data rather than
depending on whatever faces happen to be installed on the device
opening them. Loaded after `pdfmake.min.js` and before `app.js` in
`index.html`.

Checked before choosing this library: pdfmake does not expose a
documented tagged-PDF / PDF/UA structure-tree option, so the master
plan's "tagged PDF if the library supports it" allowance applies as
written — selectable, embedded-font text is what generated PDFs carry
(confirmed by extracting real text back out with `pdf-parse` in
`tests/pdf/`), full accessibility tagging was not available in this
library and is not implemented. Full writeup in `DECISIONS.md`'s
Phase 6.1 entry.

To update: `npm pack pdfmake` in a scratch directory, extract, copy
`build/pdfmake.min.js` and `build/vfs_fonts.js` here, re-run
`tests/pdf/pdf_golden.js` before committing.

## docx.iife.js

[docx](https://docx.js.org/) v9.14.0, MIT licensed. Pulled the same
way (`npm pack docx`) and copied verbatim from the package's own
`dist/index.iife.js` — its official self-contained browser build
(attaches a single global, `docx`, with `Document`, `Paragraph`,
`TextRun`, `ImageRun`, `Packer`, etc. on it). The rest of `dist/`
(separate `.cjs`/`.umd.cjs` bundles for Node and for optional add-on
modules — charts, math, shapes, watermarks — that this app doesn't
use) wasn't copied.

Unlike the PDF path, generating a `.docx` needed no font-glyph
sanitizing: a Word document's body is XML text, and Word supplies
whatever installed font covers a given character when the file is
opened, so there's no embedded-glyph-subset for a character to fall
outside of the way pdfmake's bundled Roboto did (confirmed in
Phase 6.1's `DECISIONS.md` entry). `tests/docx/docx_golden.js` extracts
real text back out of generated `.docx` files with `mammoth` to verify
this directly rather than assuming it.

To update: `npm pack docx` in a scratch directory, extract, copy
`dist/index.iife.js` here as `docx.iife.js`, re-run
`tests/docx/docx_golden.js` before committing.
