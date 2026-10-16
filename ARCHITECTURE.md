# Architecture

Phase 0.1 orientation. Every path and schema below was confirmed by opening
the real file, not inferred.

## Repo map

```
index.html          App shell — 8 screens (picker, wizard, output, incoming,
                     account, inbox, relationships, library), all in one
                     page, switched by app.js's showScreen().
app.js               All rendering, state, and feature logic (56.8K). No
                     framework, no build step, no modules — one script tag.
account.js           Optional cloud-sync layer, loaded after app.js. Wraps
                     (not replaces) app.js's library functions so sync is
                     purely additive. No-ops entirely when config.js absent.
config.js            Gitignored. window.GROUNDTRUTH_CONFIG = {supabaseUrl,
                     supabaseAnonKey}. Absent by default; see config.example.js.
styles.css           All styling. CSS custom properties on :root for theming
                     (light default, dark via prefers-color-scheme or
                     [data-theme]).
methodology.html     Static page documenting the 9-item verification check.
changelog.html       Static page listing real defects caught and fixed (14
                     entries as of this writing).
data/documents.json  Array of 740 document definitions (1.6 MB).
data/clauses.json    {"clauses": [...]} — 6,610 clause definitions (20.4 MB).
supabase/schema.sql  One table (public.agreements) + 4 RLS policies + 1
                     updated_at trigger. Run manually in the Supabase SQL
                     editor; nothing in this repo applies it automatically.
verification/*.md    744 free-form build notes. NOT 1:1 with documents.json
                     — see tools/README.md. 683/740 documents have a note
                     matching by id as of this writing.
tools/               Maintenance scripts — see "Tooling" below.
```

No `package.json`, no bundler, no test runner, no CI config. `tools/*.py`
run directly with system Python 3; `tools/regression.js` and
`tools/fetch_via_browser.js` run with Node + a global Playwright install
(`NODE_PATH="$(npm root -g)" node tools/regression.js`).

## Data flow

```
data/documents.json ─┐
data/clauses.json  ──┼─► app.js init() ─► state.documents, state.clauses
                      │                 ─► buildJurisdictionIndex()
                      │                 ─► buildClauseIndex() (TF-IDF, for
                      │                    the contract reader)
                      │
                      ▼
            renderPicker() / renderCategoryFilter()
                      │ click a doc-card
                      ▼
            renderWizard() ──(submit)──► assembleDocument()
                      │                    │ substitute({{field}}, answers)
                      │                    ▼
                      │              renderOutput() ──► addToLibrary()
                      │                                    │
                      │                                    ▼
                      │                          localStorage["groundtruth-library"]
                      │                                    │
                      ▼                                    ▼
            account.js wraps addToLibrary ──(if signed in)──► Supabase
                                                              public.agreements
```

Clauses are never embedded in documents — `document.clauseOrder` is a list
of clause ids resolved against `state.clauses` at render time
(`assembleDocument()` in app.js). A clause used by zero documents, or a
`clauseOrder` id that resolves to nothing, is a validate_corpus.py failure
(orphan / dangling reference checks).

## State: where things actually live

| What | Where | Key | Notes |
|---|---|---|---|
| In-progress wizard answers | localStorage | `groundtruth-draft` | One slot. Wrapped in try/catch everywhere — a convenience, not a dependency. |
| Saved/generated documents | localStorage | `groundtruth-library` | Array of `{id, documentId, title, answers, generatedAt, signature?}`. |
| Lightweight promises (Inbox) | localStorage | `groundtruth-promises` | Flat list, no parsing, no reminders. |
| Cloud mirror of the library | Supabase | `public.agreements` | Only exists when `config.js` is present and the user is signed in. RLS: `auth.uid() = user_id` on select/insert/update/delete. |
| In-memory render state | JS | `state` object (app.js:1) | `documents`, `document` (current), `clauses`, `answers`, `categoryFilter`, `edits`, `editedClauseIds`, `currentEntryId`, `jurisdictionByDoc`, `clauseTokenSets`/`clauseIdf`/`clauseInvertedIndex` (contract-reader index). |

Nothing server-side stores field *values* except the optional Supabase
`agreements.answers` jsonb column, itself gated by RLS to its owning user.

## Clause/document schema (confirmed by example)

Canonical key order is enforced by validate_corpus.py (`AUTH`, `DRAFT`,
`CIT`, `DOC` constants) — drift fails the build.

**Document** (`data/documents.json`, flat array):
```json
{
  "id": "nda",
  "title": "Non-Disclosure Agreement",
  "description": "A one-way confidentiality agreement — ...",
  "categories": ["Confidentiality & IP"],
  "clauseOrder": ["nda_definition", "nda_obligations", "nda_carveouts", "..."],
  "fields": [
    {
      "id": "companyName", "label": "Company name", "type": "entity-name",
      "required": true, "placeholder": "Acme, Inc.", "example": "Acme, Inc."
    }
  ]
}
```
`categories`: 1 or 2 entries, each one of the 8 names hardcoded in
`validate_corpus.py`'s `CATEGORIES` set (not read from anywhere else —
`renderCategoryFilter()` in app.js derives the picker's chips live from
every document's `categories[]`, so this list and that derivation must be
kept in sync by hand today). `fields`: as of Phase 2.1, every field matches
`schema/field.schema.json` — `id`, `label`, `type`, `required` always
present; `placeholder` (unchanged UI hint), `example` (a realistic literal
value, machine-derived from `placeholder` by `tools/migrate_fields.py`),
and optionally `sensitive` follow when present. As of Phase 2.2, a field
whose id is one of the 172 reused often enough to cover 80% of all field
instances also carries `sharedFieldId` — the same string as its own `id`,
linking it to a canonical definition in `schema/fields/` (see below).
`whyWeAsk`, `helpText`, `default`, and `validation` are real,
schema-supported properties nothing has populated yet — each is a later
phase's job (2.2b, hand-curation after 2.3), deliberately left for those
passes rather than guessed at here. `showIf` likewise has no real data
until Phase 2.4. Neither `app.js`'s renderer nor `assembleDocument()` reads
`type`, `example`, or `sharedFieldId` yet — they exist for Phase 2.3's
renderer and for `tests/golden/golden.js`'s fixture generation (which now
reads `example` directly instead of re-deriving it) to use, not for
anything live today.

**Shared field library** (`schema/fields/*.json`, Phase 2.2) — one JSON
array per type bucket (`people.json`, `entities.json`, `dates.json`,
`money.json`, `addresses.json`, `locations.json`, `text.json`), each entry
matching `schema/shared_field.schema.json`:
```json
{"id": "employeeName", "label": "Employee name", "type": "person-name"}
```
`tools/build_field_library.py` built these 172 entries by analyzing which
field ids are reused across the corpus and how often — not a fixed count
chosen in advance, but exactly as many, ranked by frequency, as it takes
to clear the 80%-of-all-field-instances bar (the real acceptance
criterion; "40 most frequently reused fields" in the master plan is a
starting point, not the total). This only works because a field id
already determines its meaning consistently everywhere it's used in this
corpus — verified mechanically (no reused id maps to more than one
`type`) before trusting that as the join key, rather than inventing a
second id scheme. `whyWeAsk`/`helpText` are deliberately unset on every
entry — Phase 2.2b's job, specifically so each gets real drafted text
once at the library level instead of a placeholder repeated per document.
As of Phase 2.2b, every one of the 172 entries has real `whyWeAsk` text
(`tools/add_why_we_ask.py`) — plain, factual, non-advisory by construction
and checked by a lint rule (`lint/advisory_phrases.json`,
`validate_corpus.py`) that rejects phrasing like "you should" or "we
recommend" wherever `whyWeAsk`/`helpText` can appear. The ~650 field ids
outside the library still have no `whyWeAsk` — a deliberate scoping
decision for this pass, recorded in `DECISIONS.md`, not an oversight.
`helpText` remains unset everywhere (optional, for later hand-curation).

**Authority clause** (asserts a legal claim — citation, checked-date, badge):
```json
{
  "id": "nda_definition",
  "title": "What Counts as Confidential",
  "kind": "authority",
  "status": "verified",
  "checkedDate": "2026-08-29",
  "body": "This agreement can define {{companyName}}'s confidential information broadly — ...",
  "gap": "This describes the federal Defend Trade Secrets Act's definition specifically. ...",
  "citations": [
    {
      "case": "18 U.S.C. § 1839(3) (Cornell LII text)",
      "cite": "U.S. Code, Defend Trade Secrets Act, definition of \"trade secret\"",
      "url": "https://www.law.cornell.edu/uscode/text/18/1839",
      "quote": "the term \"trade secret\" means all forms and types of financial, business ..."
    }
  ]
}
```
Every authority clause currently has `status: "verified"` — the corpus has
zero unverified authority clauses as of this writing. `status` is still a
real field in the schema (the UI renders a distinct "Not yet verified"
badge for anything else), it's just unused today.

**Drafting clause** (no legal claim, no badge):
```json
{
  "id": "nda_obligations",
  "title": "Confidentiality Obligations",
  "kind": "drafting",
  "body": "{{employeeName}} will keep {{companyName}}'s confidential information private, ..."
}
```

`{{fieldId}}` placeholders in `body` or `gap` are substituted at render time
(`substitute()` in app.js) and must be declared in every document's
`fields[]` that includes the clause — validate_corpus.py checks this per
document, not per clause, since the same clause can be reused by documents
with different field sets.

## Jurisdiction badges (derived, never stored)

`classifyCitationJurisdiction()` / `classifyDocumentJurisdiction()` in
app.js pattern-match each authority clause's citation text/url against
California vs. federal signals (see the long comment block above them in
app.js for the exact regexes and the deliberate exclusion of
`courtlistener.com` as a jurisdiction signal). Result: CA / FED / MIXED /
OTHER / NONE per document, computed once at `init()` into
`state.jurisdictionByDoc`, read by the picker badge, the wizard notice, and
the output-screen line. There is no stored jurisdiction field anywhere in
the data — this is intentional, so the label can never drift from what a
document actually cites.

## Verification & staleness gate

`validate_corpus.py` (run manually today, see Phase 1.1 for CI) is the
single source of truth for "is this corpus internally consistent and
current":
- Structural: unique clause/document ids and document titles, every
  `clauseOrder` id resolves, no orphan clauses, canonical key order,
  non-empty citation `url`/`quote`, every `{{field}}` declared.
- Content requirements: every authority clause has a non-empty `gap` and
  ≥1 citation.
- Checked-date validity: every `status: "verified"` clause's `checkedDate`
  must parse as a real ISO date and not be in the future.
- Staleness: a verified clause last checked 24+ months ago fails the build;
  18–24 months prints a non-fatal heads-up. Single global thresholds today
  (Phase 4.3 makes these per-category).
- Category reconciliation: every document has 1–2 categories, every
  category name is in the hardcoded set, and the "748 tags across 740
  docs" kind of number is asserted to reconcile, not just printed.
- `verification/*.md` coverage is reported, not enforced (that folder was
  never meant to be 1:1 with documents.json).
- Field schema (Phase 2.1): every field's keys, in order, and `type` match
  `schema/field.schema.json` (loaded, not re-typed, so the two can't drift);
  every `{{field}}` a clause body/gap uses is declared by the document, and
  — the reverse, added in this phase — every declared field is actually
  used by some clause (caught 4 real pre-existing dead fields the first
  time this ran; fixed, see tools/migrate_fields.py's commit); any `showIf`
  references a real field in the same document with no cycles (nothing
  uses `showIf` yet — Phase 2.4 — so this path has its own direct unit
  test, `tests/validate_corpus/test_showif.py`, rather than real corpus
  data to exercise it).
- Shared field library (Phase 2.2): every entry in `schema/fields/*.json`
  matches `schema/shared_field.schema.json` (required keys, valid `type`,
  unique `id` across all library files), and every document field's
  `sharedFieldId` resolves to a real entry whose `type` agrees with the
  field's own — drift here means the library and the corpus disagree
  about what a field id means. Reports (does not fail on) what percentage
  of all field instances resolve to a shared definition, against the 80%
  target; currently 80.0% (3,177/3,971), covered by
  `tests/validate_corpus/test_shared_fields.py`.
- Advisory-phrase lint (Phase 2.2b): every `whyWeAsk`/`helpText` string,
  wherever it appears (library entry or document field), is checked
  against `lint/advisory_phrases.json` — a build fails if any contains a
  phrase like "you should" or "we recommend". This is the one place
  "inform, never advise" is enforced mechanically instead of by review
  alone. Covered by `tests/validate_corpus/test_advisory_lint.py`.

## Tooling

| Script | Does |
|---|---|
| `validate_corpus.py` | The gate above. Exit 1 on any failure. |
| `regression.js` | Headless-browser (Playwright) smoke test: category counts balanced, no leaked `{{field}}` text in the newest documents, output screen actually renders clause blocks/badges, contract-reader match timing. Needs a local static server (`python3 -m http.server 8933`) and `NODE_PATH="$(npm root -g)"`. |
| `merge_guard.py <base-ref>` | Diffs `data/*.json` in the working tree against a given git ref; fails if any *pre-existing* clause/document was modified or dropped (catches union-merge silently reverting an edit — additions are fine, mutations/drops are not). Defaults `base-ref` to `HEAD`, which is a no-op unless called with the actual pre-merge ref. |
| `recheck_citations.py [N] [host...]` | Samples stored citation URLs, re-fetches, re-checks the quote is still a verbatim substring of the live page. |
| `recheck_all.py` | Same, whole-corpus, resumable JSONL output, handles PDFs, falls back to `fetch_via_browser.js` when a host (CourtListener) serves a JS bot-challenge to plain `curl`. |
| `fetch_via_browser.js <url>` | Headless-Chromium fetch that solves CourtListener's AWS WAF JS challenge; prints rendered HTML. Used only as `recheck_all.py`'s fallback. |
| `courtlistener_recheck_{results.jsonl,todo.json}` | Resumable state for a from-scratch recheck of every CourtListener-hosted citation, run through the CourtListener MCP tools (not curl — WAF-gated). `todo.json` is currently `[]` — that pass is complete. |
| `wave_agent_prompt.md` | Versioned prompt template for a corpus-expansion worker agent, one per category per wave. |
| `migrate_fields.py [--write]` | Phase 2.1's one-time migration from the old flat field shape to `schema/field.schema.json` — infers `type` from camelCase word patterns in each field id (not a lookup table) and derives `example` from `placeholder`. Dry-run by default (prints a type-assignment report); `--write` applies it. Already run once; stays in the repo as the record of how the migration worked and as a template if a bulk re-classification is ever needed. |
| `build_field_library.py [--write]` | Phase 2.2's one-time build of `schema/fields/*.json` from the corpus: ranks field ids by reuse frequency, takes as many as it takes to cover 80% of all field instances (172, as of this writing), and links each one into `data/documents.json` via `sharedFieldId`. Dry-run by default (prints the coverage report and per-file counts); `--write` applies it. Stays in the repo as the record of how the library was built and as the tool to re-run if the corpus grows enough to justify adding more shared definitions. |
| `add_why_we_ask.py [--write]` | Phase 2.2b's one-time write of `whyWeAsk` text into every entry in `schema/fields/*.json`, from a hardcoded dict covering exactly the 172 library ids (aborts if the library and the dict ever disagree on which ids exist, rather than silently skipping or guessing). Dry-run by default; `--write` applies it. Does not touch the ~650 field ids outside the library — see `DECISIONS.md` for why that's a deliberate scope decision, not a gap to quietly close later with generic text. |
| `tests/golden/golden.js` | Covered in GOLDEN_REVIEW.md — not a `tools/` script, but the other headless-browser gate alongside `regression.js`, checking one fixture per document's exact rendered output rather than just structural counts. |
| `tests/merge_guard/`, `tests/validate_corpus/` | Unit tests for the gate scripts themselves, run as a CI step (`Test the tooling itself`) in the `validate-corpus` job — not fixtures *in* the corpus, tests *of* the checker. `tests/validate_corpus/test_showif.py` exists because `showIf`'s cycle detector (Phase 2.1) has no real corpus data to exercise it yet (Phase 2.4 adds the first real `showIf`), so it gets a throwaway-corpus unit test instead of relying on the live data to prove it works. `test_shared_fields.py` does the same for the Phase 2.2 library checks (duplicate/invalid library entries, unresolved or type-mismatched `sharedFieldId`), which the real corpus is currently too clean to exercise. `test_advisory_lint.py` does the same for the Phase 2.2b lint rule. |

## Supabase

`supabase/schema.sql`: `public.agreements(id, user_id, document_id, title,
answers jsonb, generated_at, updated_at)`, RLS enabled, 4 policies
(select/insert/update/delete) each scoped to `auth.uid() = user_id`, one
`updated_at` trigger. Applied manually to the live project
(`impurvwwjdgurbjbnydu`) — no migration tooling, no `supabase/migrations/`
directory exists yet (Phase 7.1 introduces one). RLS correctness was
verified directly against Postgres via role/claim impersonation in this
session; the HTTP round trip through Supabase Auth was not (see
BASELINE.md and the open items in the Build Status doc).

## What Phase 2+ will still change here

Phase 2.1 (the field schema), 2.2 (the shared field library), and 2.2b
(`whyWeAsk` text + the advisory-phrase lint) are done for the 172
library-covered field ids. What's still ahead and will make this section
stale again: `whyWeAsk` for the ~650 field ids outside the library
(deliberately out of scope for 2.2b — see `DECISIONS.md`); a
schema-driven wizard renderer replacing `renderWizard()`'s current
one-screen-of-plain-inputs approach (2.3); and the first real
`showIf`/`includeIf` conditionals, which is also the day the cycle-check
added in 2.1 starts being exercised by live data instead of only by
`tests/validate_corpus/test_showif.py` (2.4). Any task touching
`fields[]`, `schema/fields/`, `renderWizard()`, or `assembleDocument()`
should re-read this file first — it will be stale the moment that work
starts.
