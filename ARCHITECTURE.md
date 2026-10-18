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
schema/               field.schema.json, shared_field.schema.json, and
                     fields/*.json (the shared field library, Phase 2.2).
lint/advisory_phrases.json  Banned-phrase list for the Phase 2.2b lint.
tiers.json           Every document's quality tier (Phase 3.1), computed
                     by tools/tiering.py, committed, fetched by app.js
                     at init() like documents.json/clauses.json.
tiers_history.jsonl  One JSON line per day tiers.json was snapshotted
                     (Phase 3.3), for promotion_report.py's
                     week-over-week comparison. Developer-written via
                     `tiering.py --write-history`; CI only reads it.
supabase/schema.sql  One table (public.agreements) + 4 RLS policies + 1
                     updated_at trigger. Run manually in the Supabase SQL
                     editor; nothing in this repo applies it automatically.
verification/*.md    744 free-form build notes. NOT 1:1 with documents.json
                     — see tools/README.md. 683/740 documents have a note
                     matching by id as of this writing.
tools/               Maintenance scripts — see "Tooling" below.
tests/               golden/, wizard/, merge_guard/, validate_corpus/,
                     tiering/ — browser and unit tests for the gate
                     scripts and the rendered app, run in CI.
```

`tools/*.py` run directly with system Python 3; `tools/regression.js`
and the other browser-driven scripts run with Node + Playwright
(`.github/workflows/ci.yml` installs it; this sandbox pre-installs
Chromium at a fixed path each script checks for before falling back to
Playwright's own managed install).

## Data flow

```
data/documents.json ─┐
data/clauses.json  ──┼─► app.js init() ─► state.documents, state.clauses
schema/fields/*.json ─┤                 ─► state.sharedFields
tiers.json         ───┘                 ─► state.tiers
                      │                 ─► buildJurisdictionIndex()
                      │                 ─► buildClauseIndex() (TF-IDF, for
                      │                    the contract reader)
                      │
                      ▼
      renderPicker() / renderCategoryFilter() / renderTierFilter()
                      │ click a doc-card
                      ▼
            renderWizard() ──► renderWizardStep() (sectioned, one step
                      │          at a time; Next/Previous re-render it,
                      │          Review lists every visible answer)
                      │                    │ submit (review stage only)
                      │                    ▼
                      │              assembleDocument()
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
of entries resolved against `state.clauses` at render time
(`assembleDocument()` in app.js). A clause used by zero documents, or a
`clauseOrder` id that resolves to nothing, is a validate_corpus.py failure
(orphan / dangling reference checks).

An entry is either a bare clause id (always included — still what almost
every clauseOrder in the corpus uses) or, as of Phase 2.4,
`{id, includeIf}` — a clause included only when `includeIf` (the same
`{field, equals?, notEquals?}` shape as a field's `showIf`) matches the
current answers. No document uses this yet (see "What Phase 2+ will
still change here" below); the renderer and `validate_corpus.py` are
both already correct against it, exercised by
`tests/validate_corpus/test_include_if.py` and
`tests/wizard/wizard_unit.js` against synthetic data, the same position
field-level `showIf` was in after Phase 2.1/2.3.

## State: where things actually live

| What | Where | Key | Notes |
|---|---|---|---|
| In-progress wizard answers | localStorage | `groundtruth-draft` | One slot: `{documentId, answers, step, savedAt}`. `step` (added Phase 2.3) is the wizard step index, so resuming a draft reopens on the step the person was on, not always step 0. Wrapped in try/catch everywhere — a convenience, not a dependency. |
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
`helpText`, `default`, and `validation` (the regex/min/max shape) are real,
schema-supported properties nothing has populated yet — each is left for
hand-curation after Phase 2.3's renderer can actually enforce them,
deliberately rather than guessed at here. `showIf` likewise has no real
data until Phase 2.4, though the renderer built in 2.3 already acts on it
correctly where it's set (see below). As of Phase 2.3, `app.js`'s wizard
renderer does read `type` (picks the input control and the per-type
validator), `example` (nothing live reads this one yet outside
`tests/golden/golden.js`'s fixture generation), and `sharedFieldId`
(resolves to the field library for `whyWeAsk` help text shown under the
label).

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

## The wizard renderer (Phase 2.3)

`renderWizard()` no longer puts every field on one screen. It chunks
`state.document.fields` into fixed-size steps (`WIZARD_STEP_SIZE = 4`,
by existing field order — there's no per-document section metadata to
group by more meaningfully, and curating one by hand for 740 documents
isn't what this phase is for) and `renderWizardStep()` renders one step
at a time: a progress bar, a `Step N of M` heading (`tabindex="-1"`,
focused on every step change — the same pattern `showScreen()` already
uses for whole-screen transitions, just applied one level down), the
step's visible fields, and Next/Previous controls. The last stage is a
review screen (`renderReview()`) listing every visible answer with an
Edit button that jumps back to the owning step and focuses that field;
only the review stage shows the real "Generate document" submit button.

Per-field behavior:
- **Visibility** (`fieldIsVisible()`): a field with `showIf` is shown
  only when the named field's answer matches `equals`/`notEquals`. A
  step whose fields are all hidden is skipped in both directions
  (`nextVisibleStepIndex()`/`prevVisibleStepIndex()`). No field in the
  corpus sets `showIf` yet (Phase 2.4), so this path is exercised by
  `tests/wizard/wizard_unit.js` against a synthetic document, not live
  data.
- **Input control**: `type: "longtext"` gets a `<textarea>`; `email`/
  `phone` get the matching `<input type>`; everything else (including
  `select`/`multiselect`/`boolean`/`signature`, which nothing uses yet)
  falls back to plain text rather than failing to render.
- **Validation** (`validateField()`/`FIELD_VALIDATORS`): required-ness
  plus a per-type check. `email`/`phone` check a real, narrow shape.
  `money`/`integer`/`percent` only check that a digit is present — a
  stricter format check was tried first and rejected real corpus
  examples like `"$25,000 cash"` and `"10,000,000 shares of common
  stock"` (caught by running `tools/wizard_regression.js` against the
  real corpus before trusting the stricter version), so a validator a
  real document's own example can fail isn't one a real person's answer
  should have to pass either. Errors render as a `role="alert"` message
  tied to the input via `aria-describedby`, and focus moves to the first
  invalid field.
- **Help text**: `fieldWhyWeAsk()` resolves a field's own `whyWeAsk` if
  ever set directly, otherwise its `sharedFieldId` into `state.sharedFields`
  (the field library, fetched at `init()` from `schema/fields/*.json`
  alongside `data/documents.json`/`clauses.json`) — this is the first
  place Phase 2.2b's library text actually reaches the UI. Shown under
  the label, also wired into `aria-describedby`.
- **Sensitive fields**: get `data-sensitive="true"` on the field wrapper
  and a plain-language note under the input. This is marking only, per
  this phase's own acceptance line — it deliberately does *not* exclude
  sensitive answers from `localStorage` draft/library persistence the
  way "excluded from analytics and optionally never synced" might
  suggest, because today's local draft/library has no analytics or
  remote-sync consumer at all; stripping it there would only break
  reopening a saved document from "My Documents" (which reads the
  answer straight back out of that same storage) for no present benefit.
  Real exclusion belongs with Phase 8.1 (analytics) and Phase 7.4
  ("never synced"), once something actually consumes this flag — see
  `DECISIONS.md`.

As of Phase 2.4, `renderOutput()`/`buildPlainText()` both also show a
plain-language record of every conditional clause's inclusion decision
(`describeConditionalClauses()`) — "Included: X — because ..." or "Not
included: X — because ..." — on screen in a notice above the clause list
(`#output-conditional-notes`, hidden when a document has no conditional
clauses, which is every document today) and as an "OPTIONAL CLAUSES IN
THIS DOCUMENT" section in the plain-text export. States what was
assembled and why, never whether that was the right call — the same
register as everything else this app says about its own output.

`tools/wizard_regression.js` drives every one of the 740 documents
through the real renderer end to end (fill each visible field with its
own `example`, Next through every step, reach review, submit, check for
leaked `{{field}}` braces) — the Phase 2.3 acceptance line this is
checking. `tests/wizard/wizard_unit.js` checks the specific behaviors
above individually (showIf visibility and step-skipping, validation
actually blocking, sensitive marking, review Edit-and-focus, draft
resume restoring the step).

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
- Staleness (per-category since Phase 4.3): `config/staleness.json`
  gives each of the eight categories its own fatal/warn month pair
  (Hiring, During employment, Ending employment, Real Estate: 12/9 —
  faster-moving law; Business Formation, Family Law: 18/12; Confidentiality
  & IP, Estate Planning: 24/18, the original window). A verified clause
  past its fatal threshold fails the build; inside its warn window prints
  a non-fatal heads-up. A clause shared by documents in more than one
  category (12 clauses) is held to the strictest — lowest — fatal/warn
  pair of every category any of those documents carries, never the most
  lenient. The build also prints how many clauses the new thresholds
  newly flag that the old single 24/18-month window would not have (0
  today). Covered by `tests/validate_corpus/test_staleness.py` against a
  synthetic corpus with its own fixture config.
- Annual CA-statute recheck (Phase 4.3): every verified authority clause
  citing a California statute (a citation whose `url` is
  `leginfo.legislature.ca.gov` — never used for case law, which cites
  `courtlistener.com`/`courts.ca.gov` instead) must carry
  `effectiveCycleChecked >=` the current year — an optional, when-present
  trailing key confirming the clause has been reconfirmed current as of
  that year's January 1 cycle, a cadence the month-based thresholds above
  don't track on their own. Backfilled once by
  `tools/add_effective_cycle_checked.py` (3,568 clauses). Covered by the
  same `tests/validate_corpus/test_staleness.py`.
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
- Clause-level `includeIf` (Phase 2.4): every `includeIf.field` names a
  field the document actually declares, and sets exactly one of
  `equals`/`notEquals` (a condition with both or neither can never
  resolve). Beyond per-entry shape, every document's conditional fields
  are enumerated across every real branch (every field's condition
  holding or not — enumerated exactly up to 64 combinations, sampled
  beyond that rather than skipped) and each branch must still include at
  least one clause; a document whose conditionals can combine to render
  nothing fails the build. Also extends the existing "declared field
  must be used" check: a field referenced only by a `showIf` or
  `includeIf` condition, never substituted into clause text, still
  counts as used — it has a real effect on the assembled document even
  with no literal `{{field}}` anywhere. Covered by
  `tests/validate_corpus/test_include_if.py`.

## Quality tiers (Phase 3)

`tools/tiering.py` computes every document's tier — never hand-assigned
— and writes `tiers.json` (committed, read statically by the picker UI,
the same no-backend pattern as everything else in this app):

- **Tier B** requires all three of: a complete field schema (every
  field has `type` — all 3,975 do, Phase 2.1 — and a resolvable
  `whyWeAsk`, either directly or via `sharedFieldId` into the Phase 2.2
  library); every authority clause it uses is `verified` and within the
  same 24-month staleness window `validate_corpus.py` already enforces;
  and at least one golden fixture exists. As of this writing: 382/740
  documents (every document already passes the clause-freshness and
  golden-fixture gates — the real differentiator is field-schema
  completeness, i.e. whether every one of a document's fields is covered
  by the 172-id shared library or has its own `whyWeAsk`).
- **Tier A** requires everything Tier B does, plus a clean
  adversarial-verifier run (master plan Phase 4.1) and a passed
  per-document accessibility check (Phase 9.1). **Neither system
  exists yet**, and `tiering.py` treats an absent signal as *not met*,
  never as assumed passing — so Tier A is honestly, deliberately empty
  today (0/740). This is the direct consequence of "computed, never
  hand-assigned": no document gets credit for a check nothing has run.
  `ADVERSARIAL_VERIFIER_EXISTS`/`ACCESSIBILITY_CHECK_EXISTS` in
  `tools/tiering.py` are where those real per-document results plug in
  once Phase 4.1/9.1 exist.
- **Tier C** is everything else that passes `validate_corpus.py` (true
  for the whole corpus, since CI runs that gate first).

`python3 tools/tiering.py --check` (wired into CI) fails if `tiers.json`
on disk doesn't match a fresh computation — the same staleness-gate
pattern as everything else that's computed once and committed rather
than derived live in the browser.

**In the UI** (Phase 3.2): `tierBadgeHTML()` adds a pill next to the
jurisdiction badge on every picker card, reading `state.tiers` (fetched
from `tiers.json` at `init()`, alongside `documents.json`/`clauses.json`
and the field library). Every explanation (`TIER_EXPLANATION`) states
what was checked, never whether it's enough for any reader's situation —
the same discipline as every other piece of copy in this app. The
explanation is real text (`.visually-hidden`), not just a `title`
tooltip, so it's available to more than mouse-hover sighted users. A
tier filter (`#tier-filter`, mirroring the category filter) and a
`#tier-sort-toggle` button (stable sort by tier rank, ties keep their
existing order) both live in `renderPicker()`. Covered by
`tools/regression.js`'s `tiers` check (pill count, filter narrows to
exactly that tier's documents, sort groups A before B before C).

**Promotion report** (Phase 3.3): `tools/promotion_report.py` reads
`tiers.json` (doesn't recompute) and prints per-category tier counts,
the 20 Tier C documents closest to Tier B ranked by fewest blocking
gates (never Tier B→A, which has no actionable ranking yet — every
Tier B document is blocked by the exact same two missing systems), and
week-over-week change against `tiers_history.jsonl`, a baseline only
used once it's 7+ real days old. `--write-history` appends today's
snapshot (idempotent — once per calendar day); CI never writes it,
only reads it with the default (no-flag) invocation and posts the
`--markdown` form as the job summary. Covered by
`tests/tiering/test_promotion_report.py`.

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
| `wizard_regression.js` | Phase 2.3's full-corpus acceptance check: drives all 740 documents through the real `renderWizard()`/`renderWizardStep()` path (fill every visible field with its own `example`, Next through every step, review, submit) and fails on a stuck step, a step never reached, or leaked `{{field}}` braces. Same local-server requirement as `regression.js`. Caught the first version of the money/integer/percent validators being too strict for real corpus examples before it shipped. |
| `tests/golden/golden.js` | Covered in GOLDEN_REVIEW.md — not a `tools/` script, but the other headless-browser gate alongside `regression.js`, checking one fixture per document's exact rendered output rather than just structural counts. |
| `tests/wizard/wizard_unit.js` | Phase 2.3/2.4 behavioral checks: showIf visibility/step-skipping, per-field validation actually blocking (and not over-blocking), sensitive-field marking, review-screen Edit-and-focus, draft resume restoring the step, and includeIf actually including/excluding a clause and being described correctly on the output screen and in the plain-text export — against synthetic documents and `ein_info_sheet` (the one document with a `sensitive` field), not the full corpus walk `wizard_regression.js` already covers. |
| `tests/merge_guard/`, `tests/validate_corpus/` | Unit tests for the gate scripts themselves, run as a CI step (`Test the tooling itself`) in the `validate-corpus` job — not fixtures *in* the corpus, tests *of* the checker. `tests/validate_corpus/test_showif.py` exists because `showIf`'s cycle detector (Phase 2.1) has no real corpus data to exercise it yet, so it gets a throwaway-corpus unit test instead of relying on live data to prove it works. `test_shared_fields.py` does the same for the Phase 2.2 library checks (duplicate/invalid library entries, unresolved or type-mismatched `sharedFieldId`), and `test_advisory_lint.py` for the Phase 2.2b lint rule — both currently too clean to exercise on the real corpus. `test_include_if.py` does the same for the Phase 2.4 `includeIf` checks (bad condition shape, undeclared target field, a branch across conditional fields that renders zero clauses) — no clause in the corpus uses `includeIf` yet either. |
| `tiering.py [--check]` | Phase 3.1: computes every document's quality tier (never by hand) and writes `tiers.json`. `--check` (wired into CI) recomputes in memory and fails if it doesn't match what's on disk, so `tiers.json` can't silently go stale against a changed corpus. Tier A is always empty today — see "Quality tiers" above for why that's a deliberate, honest result rather than a bug. Tested by `tests/tiering/test_tiering.py` (each of Tier B's three gates individually blocking, a drafting clause needing no verification, Tier A never assigned, `--check` catching staleness). |
| `promotion_report.py [--markdown] [--write-history]` | Phase 3.3: reads `tiers.json` (doesn't recompute) and prints per-category tier counts, the 20 Tier C documents closest to Tier B by fewest blocking gates, and week-over-week change against `tiers_history.jsonl` once a baseline is 7+ days old. `--markdown` produces the GFM table CI posts as the job summary; `--write-history` is a developer action (idempotent per day) — CI never writes history, only reads it. Tested by `tests/tiering/test_promotion_report.py`. |

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

## Adversarial verifier (Phase 4.1)

`verifier/` is the infrastructure for an independent, after-the-fact
review of clauses already marked `status: "verified"` — looking for
citation mismatch, quote drift against the live source, silent
overclaiming, wrong/undisclosed jurisdiction, advisory language,
superseded law, and internal contradiction with a sibling clause in the
same document. Full pipeline and rationale in `verifier/README.md`;
the rubric a review worker follows is `verifier/prompt.md`.

The split mirrors `tools/wave_agent_prompt.md`'s existing pattern for
corpus-expansion work: the actual judgment (does this citation really
say that; is this quote still live) requires real research against
external legal sources and has to be done by an `Agent`-tool worker
following the versioned prompt, while `verifier/sample.py` (draws and
reuses a random sample of authority clauses, builds each one's review
packet), `record_result.py` (validates a worker's output, appends to
`checked.jsonl`/`findings.jsonl`, refuses to re-record an already-done
clause), and `report.py` (finding rate, severity breakdown, examples —
the master plan's "sample report" deliverable) are plain, deterministic
Python around that judgment, not a replacement for it.

A review packet deliberately omits `verification/<doc-id>.md` — the
point of an adversarial pass is reaching an independent conclusion, not
confirming the original justification — and `prompt.md` tells the
worker not to go looking for it either. Nothing in this directory ever
edits `data/clauses.json`/`documents.json`: a `suggestedFix` is a
proposed string for Phase 4.2's triage workflow to apply by hand later,
never applied automatically.

As of this writing the first real sample is complete: 100/100 authority
clauses checked (10 parallel `Agent`-tool workers, 10 clauses each),
18 findings on 18 distinct clauses (1 major, 17 minor, 0 blockers) —
full breakdown and the one major finding's detail in `DECISIONS.md`.
Roughly half the findings are sourcing-access gaps caused by
`leginfo.legislature.ca.gov` being Cloudflare-blocked for the entire
run rather than content errors; the rest are genuine small defects
(a spliced quote dropping an intervening sentence, a citation that
doesn't itself support an independently-true claim, a stale pin cite,
one real overclaiming gap).

As of Phase 4.2, all 18 findings are triaged (`verifier/triage.py`;
`verifier/triage.jsonl`): **8 fixed, 10 accepted, 0 rejected.** The 8
real defects (including the one major finding) were corrected directly
in `data/clauses.json`, each with its own `changelog.html` entry in the
project's existing format; the 10 "unverifiable" sourcing-access
findings were accepted with no clause edit — they're accurate
statements of what this session couldn't confirm, not false positives,
so nothing was rejected and `verifier/prompt.md`'s "Known false
positives" section (fed by a rejected decision's reason) doesn't exist
yet. Full breakdown of every decision in `DECISIONS.md`.

Whether to run the verifier against the full corpus (thousands of
authority clauses, not 100) is a separate decision this sample and its
triage don't make on their own — the master plan reserves it for after
the sample is reviewed.

## Law-change watcher (Phase 4.4)

`watcher/` is the infrastructure for periodically checking whether a
source already cited in the corpus has *changed* — a statute amended,
a case limited or overruled — as opposed to `verifier/`'s "was this
ever right?" Full pipeline and rationale in `watcher/README.md`; the
rubric a scan worker follows is `watcher/prompt.md`.

The reverse index it depends on, `index/citation_to_clauses.json`
(built by `tools/build_citation_index.py`, `--check`-gated in CI right
after `tiers.json`), maps every citation's `url` to the authority
clause id(s) that cite it — grouped by `url`, kept distinct by each
citation's own `(case, cite)` pair underneath, since one statute page
is routinely pin-cited at several different, independently-affected
subsections across different clauses. 11,665 citations, 3,897 unique
urls as of this writing; 100% coverage holds by construction, not by
assertion — every citation in `data/clauses.json` produces exactly one
entry.

Same split as the verifier, for the same reason: the real research
(querying Lawstronaut's `horizon_scan` and CourtListener for actual
changes in a date window) only exists as MCP tools inside an agent
session — nothing a GitHub Actions runner can reach, the same
CourtListener-WAF constraint `tools/README.md`'s `recheck_all.py`
section already documents. So "a scheduled task" here means an
`Agent`-tool worker run periodically (by a human, or a Claude Code
scheduled task a human sets up), following `watcher/prompt.md`, not a
`ci.yml` cron step — only the deterministic pieces
(`scan_batch.py`/`record_changes.py`/`report.py`/`flag_for_review.py`,
and the citation-index staleness check) are things CI, or anything
else, can run unattended.

`flag_for_review.py` is the one place this differs on purpose from the
master plan's literal wording ("open a draft branch or PR"): it
creates a **local-only** git branch with one new file (the evidence,
never a clause edit) and returns to the starting branch — it never
pushes or opens a PR. This project's standing rule, independent of this
phase, is never to create a pull request unless a human explicitly
asks; an unattended scheduled job is exactly the case that rule exists
for. See `watcher/README.md` and `DECISIONS.md` for the reasoning.

As of this writing the infrastructure is built and tested but no real
scan has been run — like Phase 4.1's 100-clause sample, spending the
real external-research budget needed for an actual dry run is held as
its own checkpoint rather than folded into building the pipeline.

## Where Phase 2/3 (and beyond) will change this next

Phase 2 (2.1 field schema, 2.2 shared field library, 2.2b `whyWeAsk` text
+ advisory lint, 2.3 the sectioned/validating wizard renderer, 2.4
clause-level `includeIf`) and Phase 3 (3.1 tiering, 3.2 tiers in the UI,
3.3 the promotion report) are both done, end to end. Everything
describing `showIf`/`includeIf` above — the visibility logic, the
renderer, the validate_corpus.py checks — is real and tested, but
against synthetic data only: no field or clause in the real corpus sets
either one yet. The day a real one is added is the day that live data
starts exercising this instead of `tests/validate_corpus/test_showif.py`,
`test_include_if.py`, and `tests/wizard/wizard_unit.js`'s synthetic
documents — worth re-reading this file at that point, since a gap
between "tested against a hand-built example" and "tested against the
real thing" tends to be exactly where a real document's actual shape
turns out to need something the synthetic case didn't.

Tier A is empty for a similar reason, but a bigger one: it isn't
waiting on real data, it's waiting on two entire systems (Phase 4.1's
adversarial verifier, Phase 9.1's accessibility checks) that don't exist
yet at all. The day either one ships is the day `tools/tiering.py`'s
`ADVERSARIAL_VERIFIER_EXISTS`/`ACCESSIBILITY_CHECK_EXISTS` constants
stop being `False`, and this file's "0/740 in Tier A" claim goes stale —
along with `promotion_report.py`'s "Tier B→A has no actionable path
yet" framing, which will need its own ranking logic once there's a real
per-document signal to rank by.

Phase 4.3 (per-category staleness thresholds + the annual CA-statute
recheck rule) is also done, end to end — see "Verification & staleness
gate" above. Phase 4.4's law-change watcher is built and tested (see
"Law-change watcher (Phase 4.4)" above) but has not yet run a real
scan — that's a deliberate, separate checkpoint, the same reasoning as
Phase 4.1's 100-clause sample. One phase in this part of the plan is
still fully open: 4.5 (putting `recheck_all.py` on a schedule and
surfacing dead-link/quote-drift counts in the promotion report).

What's left that Phase 2/3 deliberately didn't do: `whyWeAsk` for the
~650 field ids outside the shared library (out of scope for 2.2b — see
`DECISIONS.md`); hand-curated `validation`/`default`/`helpText` now that
the renderer can actually act on them; real exclusion of `sensitive`
answers from local storage once Phase 7.4/8.1 gives that flag an actual
consumer (also `DECISIONS.md`); and, per-category staleness thresholds
instead of the single global one `tiering.py` currently mirrors from
`validate_corpus.py` (Phase 4.3's job). Any task touching `fields[]`,
`schema/fields/`, `clauseOrder`, `renderWizard()`, `assembleDocument()`,
or `tiers.json`/`tiering.py` should re-read this file first — it will be
stale the moment that work starts.
