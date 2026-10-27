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
search/lay_terms.json  Plain-language phrasings per document (Phase 5.1),
                     fetched by app.js at init() and indexed into the
                     document search engine; see search/README.md.
lib/                 Third-party browser libraries vendored (not
                     CDN-loaded) into the repo — pdfmake (Phase 6.1's
                     PDF export) and docx (Phase 6.2's Word export);
                     see lib/README.md.
filing/next_steps.json  "What happens after this document" packets
                     (Phase 6.4 pilot), keyed by document id and
                     deliberately sparse; see filing/README.md.
index/citation_to_clauses.json  Citation url -> affected clause ids
                     (Phase 4.4), built by tools/build_citation_index.py.
recheck/             history.jsonl (every recheck_all.py run, Phase 4.5)
                     and findings.json (the latest run's dead
                     links/mismatches) — see tools/README.md.
tools/               Maintenance scripts — see "Tooling" below.
watcher/             Law-change watcher (Phase 4.4) — see watcher/README.md.
verifier/            Adversarial verifier (Phase 4.1) — see verifier/README.md.
tests/               golden/, wizard/, merge_guard/, validate_corpus/,
                     tiering/, search/, tools/, watcher/, verifier/,
                     performance/, pdf/, docx/, library/, filing/ —
                     browser and unit tests for the gate scripts and the rendered app,
                     run in CI.
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
(`impurvwwjdgurbjbnydu`) before migration tooling existed, and kept as the
one hand-run table — see Phase 7.1 below for why it isn't folded into
migrations retroactively. RLS correctness was verified directly against
Postgres via role/claim impersonation in this session; the HTTP round
trip through Supabase Auth was not (see BASELINE.md).

## Backend foundation: orders, order_items, audit_log,
## document_versions, feedback (Phase 7.1)

5 tables added via `mcp__Supabase__apply_migration` (tracked, versioned —
confirmed via `list_migrations`), not manual SQL, per the master plan's
own instruction. None of them are in `supabase/schema.sql`, which now
documents only `agreements`; `supabase/migrations/` (as tracked on the
live project, not as local files — see DECISIONS.md) is the source of
truth for these going forward.

RLS is designed per table, not copied from `agreements`' full CRUD:

- **`orders`**, **`order_items`** — select-only for the owner, *no*
  insert/update/delete policy for anyone. A row can only be written by
  something with elevated privilege (a future Phase 7.2 service-role edge
  function); until then these tables have real RLS and zero write path
  from the anon-key client. `order_items.user_id` is denormalized from
  its parent `orders.user_id` so its own policy stays a flat equality
  check, not a cross-table `exists`.
- **`audit_log`** — select+insert for the owner, no update/delete for
  anyone (an editable audit trail isn't one). No column holds the user's
  field answers, per the Phase 7.3 instruction, applied a phase early
  since the table exists now.
- **`document_versions`** — select+insert+delete for the owner, no
  update (mirrors Phase 6.3's client-side rule that a pushed version is
  never mutated in place; owner-delete matches the client's own
  version-history pruning).
- **`feedback`** — select+insert for the owner, no update/delete for
  anyone (a submitted record is fixed).

All 5 use `id uuid primary key default gen_random_uuid()`, unlike
`agreements`' client-generated `id text` — none of these had an existing
client-side id scheme to mirror. Every new policy uses `(select
auth.uid())`, not plain `auth.uid()`, avoiding the `auth_rls_initplan`
performance issue `agreements`' original 4 policies already have and
still can't be fixed from this session (a `DROP POLICY`-based fix
migration hits the same destructive-SQL confirmation gate documented in
DECISIONS.md's first entry — handed off to the project owner there, with
exact SQL).

Adversarial RLS testing (select/insert/update denial for a second user,
per the 7.1 instruction) was run directly against Postgres via `set
local role authenticated` + `set_config('request.jwt.claim.sub', ...)`
impersonation through `execute_sql`, not through a live anon-key client —
this sandbox's egress policy blocks the project's own domain (the same
constraint BASELINE.md already records for Phase 1.3). Full
table-by-table results, the DELETE testing gap (same destructive-SQL
gate, not skipped), and cleanup SQL for the test rows left behind are in
DECISIONS.md's Phase 7.1 entry.

## Audit trail (Phase 7.3)

`account.js` writes one `audit_log` row per document, at the moment
it's generated (`addToLibrary`, wrapped the same way `agreements`
syncing already was) — only when signed in, since there's no
server-side anything otherwise. Fields: `document_id`, `corpus_version`
and `clause_ids`/`clause_checked_dates` (all already computed by Phase
6.3's `buildClauseSnapshot()`, nothing new derived), and `output_hash`
(`hashString(buildPlainText())`, reusing Phase 6.3's existing FNV-1a
hash rather than adding a second one). Never the field answers — the
table has no column for them. `regenerateLibraryEntry()` doesn't log
again; it refreshes an existing entry's drift baseline, not a new
generation event.

Viewable and exportable from the Account screen's signed-in state
(`renderAuditLog()`): fetched fresh each time, with an "Export log as
JSON" button using the same `Blob`/`createObjectURL` download the
app's other exports already use.

Not covered by the browser gate suite — same reason the rest of
`account.js`'s Supabase calls aren't (BASELINE.md, Phase 1.3): this
sandbox's egress policy blocks the live project's domain, and CI has
no `config.js` either. `tests/auth_roundtrip.js` (real HTTP, run
manually outside this sandbox) was extended instead, covering the same
per-table RLS matrix DECISIONS.md verified at the SQL level for all 5
Phase 7.1 tables, not just `agreements`.

## Account basics (Phase 7.4)

Account screen additions, all signed-in-only:
- **Sessions** — "sign out of other devices" is a plain
  `signOut({scope: 'others'})` call, no backend needed. Listing
  sessions needs `supabase/functions/list-sessions`, a real edge
  function: `auth.sessions` isn't exposed through PostgREST at any
  privilege level, so it connects directly to Postgres via
  `SUPABASE_DB_URL` (an edge function default secret) instead.
- **Export your data** — fetches the signed-in user's own rows from
  all 6 Supabase tables (already readable via their own select
  policies) plus the local-only library, bundles as one JSON download.
  No edge function needed.
- **Delete my account** — `supabase/functions/delete-account` calls
  `auth.admin.deleteUser()` with the service role key (the one
  genuinely admin-only operation in this phase). Every table's
  `user_id` is `references auth.users(id) on delete cascade` (checked
  against `pg_constraint`, not assumed), so this one call removes
  every row the account ever wrote. Gated by a typed `DELETE`
  confirmation; the deletion receipt is built from a pre-delete fetch,
  since nothing can be queried afterward.
- A plain-language note on the sign-in form that there's no password
  to reset — the email address itself is the only recovery path.

Neither edge function has been invoked from this sandbox (same egress
block as everything else Supabase-HTTP-shaped here); both deployed
successfully and passed `get_advisors` clean. `tests/auth_roundtrip.js`
was extended to call both over real HTTP, run manually. Full reasoning
and the exact verification done from this sandbox in DECISIONS.md.

**Not built this pass:** optional end-to-end encryption (the one line
in 7.4 the master plan itself marks optional) — deferred deliberately,
reasoning in DECISIONS.md.

## E-signature and sharing (Phase 7.5)

Two new tables, both owner-select-only, written only by two public
(no-session) edge functions — see DECISIONS.md for the full RLS
rationale and why these two tables have no anon-facing policy at all:
- `document_shares` — a frozen snapshot (title, answers,
  clauseSnapshots, corpusVersion — the same shape Phase 6.3 already
  freezes onto a saved library entry), a random token, and an
  `expires_at`.
- `document_signatures` — `owner_id` denormalized from the parent
  share; exactly one signature per share, inserted only by
  `share-sign`.

`supabase/functions/share-view` (GET, token in the query string) and
`supabase/functions/share-sign` (POST, rejects a second signature on
the same share with `409`) are both deployed with `verify_jwt: false`
— the only two edge functions in this project that are, since the
signer has no Supabase session to verify at all.

`sign.html`/`sign.js` is a second, deliberately standalone page — not
a screen inside the main app, since a signer has no reason to load
the full 740-document corpus. It talks to the two edge functions with
plain `fetch()`, duplicates `substitute()` from `app.js` (six pure
lines) rather than loading `app.js` for it, and renders a frozen
share's clauses the same way the output screen renders live ones.
Account.js adds "Share for signature" (next to the existing local
signature section, wrapping `renderSignatureSection()` the same way
`renderLibrary()` is already wrapped) and a "Shared for signature"
section on the Account screen — the signing audit page, listing every
share and, once signed, a "Download sealed PDF" button.

The sealed PDF reuses `buildPdfDocDefinition()` (now takes optional
`content`/`certificate` params, defaulting to the existing
zero-arg behavior — `tests/pdf/pdf_golden.js` confirms every existing
PDF is unaffected) fed `buildDocumentContentFromSnapshot()`'s output
plus a certificate page (signer, timestamps, a `hashString()`
fingerprint of the frozen content, the same "not a certified
e-signature service" line the existing local signature feature uses).

`tests/share/sign_page.js` (14 checks, in CI) is the one piece of this
phase's Supabase-shaped work that gets a real, run-right-now browser
test — `sign.js`'s plain-`fetch()` surface is small and stable enough
for `page.route()` to stand in for the live edge functions
convincingly, unlike `account.js`'s `supabase-js`-based surface (see
DECISIONS.md for why that distinction is drawn here and not
elsewhere). `tests/auth_roundtrip.js` was extended with the real HTTP
round trip for manual verification outside this sandbox, same as
Phase 7.1/7.3/7.4.

Not touched this pass: Stripe/payments (7.2 — skipped by explicit user
choice, no Stripe credentials exist).

**Phase 7 is now fully addressed** (7.2 explicitly skipped by the
user's own choice; everything else — 7.1, 7.3, 7.4, 7.5 — built,
RLS-verified at the SQL level, and documented). Continuing to Phase 8.

## Privacy-friendly analytics (Phase 8.1)

`analytics_events` has no `user_id` — most usage has no account, and
the events exist to measure the app, not a person. Columns: `event_type`
(`opened`/`step_reached`/`completed`/`exported`/`search`), `document_id`,
`step_id`, `export_format`, `search_query`, `search_result_count`, and
`client_session_id` — a random id in `sessionStorage` (gone when the
tab closes) that groups one visit's own events so the dashboard script
can compute real step-to-step timing, without identifying who made the
visit. No IP column exists at all. RLS: INSERT allowed for any role
(`anon` included — most visitors never sign in), no SELECT policy for
anyone via the client; the project owner reads it only with the
service role key, via `tools/analytics_report.js` (manual, same
pattern as `tests/auth_roundtrip.js`).

`account.js` wraps `renderWizard()` ("opened"), `renderWizardStep()`
("step_reached"), `renderOutput()` ("completed"), and `searchDocuments()`
("search" — query text and result count, the master plan's own named
exception to never recording field values), and attaches a second
click listener to each of the four export buttons ("exported"). A
plain `localStorage` opt-out flag is checked before every event (fails
closed on a storage error) and is toggleable from the Account screen
regardless of sign-in state. `trackEvent()` deliberately never chains
`.select()` onto its insert — see DECISIONS.md for the empirical
reason: `RETURNING` on a table with no SELECT policy for the calling
role raises the same RLS error a genuinely blocked insert would, even
though the row is written either way.

`tools/analytics_report.js` computes completion/abandonment per
document and step, top no-result searches, and median time-to-next-step
per `client_session_id` — its aggregation logic is unit-tested against
synthetic events (`tests/tools/test_analytics_report.js`, in CI), since
that's the part with real risk of being wrong; the live-data path
(needs the service role key) is a manual, no-op-without-credentials
script like `tests/auth_roundtrip.js`.

## In-app feedback (Phase 8.2)

The Phase 7.1 `feedback` table is widened, not replaced: `user_id` is
now nullable (every output screen needs this, signed in or not),
`document_id`/`clause_id`/`routed_at` are new columns, and a second
INSERT policy permits `user_id is null` alongside the existing
owner-scoped one. A `check` constraint
(`feedback_clause_id_required_for_wrong_or_outdated`) enforces that
the `wrong_or_outdated` category always carries a `clause_id`, in the
database, not only in the UI.

`account.js`'s `renderFeedbackSection()` (wrapped onto `renderOutput()`,
same pattern as the Phase 8.1 analytics hook) renders a category
select, a clause picker shown only for "wrong or outdated," and a
message field.

Routing a `wrong_or_outdated` report into `verifier/findings.jsonl` is
a manual pipeline, not a live write — this app has no server that
could write to a git-tracked file on a client's request.
`tools/ingest_feedback_findings.js` (run by the project owner,
no-op without the service role key) pulls unrouted reports, appends
each as a `category: 'user_reported'` finding in the exact shape
`verifier/record_result.py` itself writes (so `triage.py`/`report.py`
read it unchanged), explicitly marked as an unverified report rather
than researched findings — and marks the row routed. Its real decision
logic (which rows become findings, which are skipped for referencing a
clause id that no longer exists, which get marked routed either way)
is unit-tested against synthetic rows
(`tests/tools/test_ingest_feedback_findings.js`, in CI).

## Accessibility in CI (Phase 9.1)

`tests/accessibility/axe_check.js` (in CI) injects real `axe-core`
into the real app and scans all 9 screens plus 50 sampled documents'
output screens, under both the light and dark theme (`styles.css`'s
real `prefers-color-scheme` support). Fails only on serious/critical
violations; lower-impact findings are logged but don't fail the
build — covered instead by `A11Y_CHECKLIST.md`'s manual keyboard-only
and screen-reader pass, which this automated check structurally can't
perform. A first run's 3 moderate landmark findings were fixed
directly (`<header>`/`<nav>`/`<main>`, pure semantic tag swaps against
class-only CSS); a heading-order finding was left for a deliberate
later fix since correcting it touches tag-selector CSS with real
visual-regression risk — see DECISIONS.md.

## Programmatic SEO pages (Phase 8.3)

`tools/generate_seo_pages.py` builds one page per document (what it
is, jurisdiction, clauses with citations, fields it asks for, related
documents) and one per real question
`tests/search/golden_queries.json` (Phase 5.1's 100 verified
query-to-document mappings) already confirms the corpus can answer —
skipped outright when the matching document has no authority clause
with a real citation, so every published question page has a real,
cited answer behind it. Output (`build/seo/`, gitignored — a pure,
deterministic function of already-tracked corpus data, not new
content worth committing) includes a sitemap and per-page
`schema.org` JSON-LD (`Article` for documents, `FAQPage` for
questions).

`tools/validate_seo_pages.py` enforces the master plan's own rule —
every title/description unique, a minimum word count, no two
same-category pages too similar (word-shingle Jaccard, scoped by
category so ~840 pages stay a ~3.6s check, not an O(n²) one) — and
both scripts are wired into CI (`tests/tools/test_generate_seo_pages.py`,
12 checks including a determinism check and the real JSON-LD
HTML-escaping bug it caught, documented in DECISIONS.md).

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

As of this writing the first real dry run is complete: 100 distinct
citations scanned (5 parallel `Agent`-tool workers, 20 each) for the
2026-07-01 to 2026-10-01 window, 1 real finding (Cal. Bus. & Prof. Code
§ 22757.2, affecting clause `aitransparency_detection_tool`) — the
master plan's literal 4.4 acceptance line ("a dry run ... produces a
report"). Full report in `watcher/reports/2026-10-01.md`; full writeup
in `DECISIONS.md`. The remaining ~10,300 of the corpus's 10,431 distinct
citations haven't been scanned; running the watcher at full-corpus
scale is a separate decision, same reasoning as the verifier's.

## Citation recheck integration (Phase 4.5)

Extends `tools/recheck_all.py` (write-time verification proves a quote
was in text the author fetched; it cannot tell you whether the stored
URL still returns that text — `recheck_all.py` re-fetches every stored
citation URL and re-checks the quote against what comes back today)
into something schedulable: results go to `recheck/history.jsonl`, one
line per citation per run, tagged with that run's own `checkedAt` date.
"Already done" for resume purposes means "already done in THIS run,"
never "ever" — a container restart resuming mid-run skips what today's
run already finished, but a later scheduled run re-checks every URL
from scratch rather than skipping it forever after its first pass.
`--limit N` caps one invocation's URL count, for spreading a full sweep
across several scheduled runs.

Only `--hosts statutory` is actually schedulable unattended: the
CourtListener curl path is WAF-blocked (always a false `MISMATCH` — see
`tools/README.md`), the same constraint that keeps the Phase 4.4
watcher off a `ci.yml` schedule. `--hosts courtlistener`/`all` now
prints a loud warning; verifying CourtListener-hosted citations still
goes through the CourtListener MCP tools in an agent session (already
done once, in full, before this phase — `tools/courtlistener_recheck_results.jsonl`'s
1,656 entries, 0 remaining in its todo file).

`tools/recheck_findings.py` turns the latest run's `EMPTY`/
`UNRESOLVED_URL` (dead link) and `MISMATCH` (quote no longer matches)
statuses into `recheck/findings.json` — a single JSON object
(`runDate`, `totalChecked`, `findings[]`), not JSONL, so a fully clean
run still records that a run happened rather than looking identical to
"never run." `RATE_LIMITED` and `BLOCKED` are deliberately excluded
(both untested, not failed — see below). `tools/promotion_report.py`
reads this and surfaces a dead-link/mismatch count in both its text and
`--markdown` output — the master plan's literal 4.5 deliverable.

Validating this against the real corpus (a 150-URL `--limit` sample)
found two real defects in `recheck_all.py` itself, both fixed before
trusting any output: leginfo's `billTextClient.xhtml` bill-text pages
return a Cloudflare JS challenge page that's long enough to pass the
`EMPTY` check, which used to report a false `MISMATCH` on every quote
checked against it (131 of them) — now a distinct `BLOCKED` status; and
PDF extraction (`courts.ca.gov`) silently fails in an environment
missing `pypdf`/`pdfminer.six`, producing a false `EMPTY` — a known
environment limitation, documented in `tools/README.md`, not something
fixed in code. The 52 contaminated `EMPTY` records from that second
issue were removed before committing `recheck/history.jsonl`, rather
than kept as data that says nothing true about the citations. The
clean result: 265 citations checked, 134 `PASS`, 131 `BLOCKED`, 0
`MISMATCH`, 0 `EMPTY` — `recheck/findings.json` and the promotion
report both correctly show 0 dead links / 0 mismatches. Full writeup in
`DECISIONS.md`. A full ~3,400-URL statutory sweep is a separate, later
decision, same reasoning as the verifier's and watcher's.

## Plain-language document search (Phase 5.1)

`buildDocumentIndex()`/`searchDocuments()` in `app.js` reuse the same
tf-idf/cosine-similarity machinery the clause-matching "read a
contract" engine already built (`buildClauseIndex()`/`matchPassage()`
above) — but over documents instead of clauses, and over a different
text source per document: title + description + categories + that
document's `search/lay_terms.json` phrasings. The lay terms ARE the
master plan's "synonyms and lay-term mapping" requirement, baked
directly into the index rather than a separate query-time substitution
layer — a search for "deposit back" matches the security-deposit
document because that exact phrase is literally indexed against it.

Typo tolerance (`resolveTypo()`) is a small Levenshtein-distance
nearest-vocabulary-token lookup, applied per query token before
scoring, tight enough (1 edit for a ≤4-character word, 2 otherwise)
that it corrects a real misspelling without quietly substituting a
different word.

The UI (`index.html`'s `#doc-search`, debounced 150ms) replaces the
document list with ranked results when a query is active — including
an honest empty state rather than silently falling back to the
unfiltered list — composable with the existing category/tier filters
and sort, and shows which terms matched each result card.

`search/lay_terms.json` was generated across all 740 documents by
parallel `Agent`-tool workers, grounded only in each document's own
title/description/categories (no external research — pure
paraphrasing), validated against `lint/advisory_phrases.json` (0 hits
— "inform, never advise" applies to search phrasings too), and
backfilled where a first pass fell short of the master plan's 5-phrase
floor. See `search/README.md` for the full generation process and
`DECISIONS.md` for a real precision bug this surfaced and fixed: a
common filler word ("got") happened to be rarer than "fired" in this
specific lay-term corpus, so it was weighted *more* heavily despite
carrying no real signal — fixed by extending the shared `STOPWORDS` set
(used by both the clause and document indexes).

`tests/search/golden_queries.json` + `golden_search.js` are the master
plan's literal 5.1 acceptance line: 100 lay queries, each verified
(by `tests/search/generate_golden_queries.js`, not run by CI) against
the real engine to confirm its expected document actually lands in the
top 3 before being committed to the fixture — so a later CI failure
means the engine's behavior changed, not that the fixture was ever
aspirational.

## "Which document do I need?" intake (Phase 5.2)

A short, guided alternative to search/browse: `#screen-intake`'s flow
is category (the same 8 categories `renderCategoryFilter()` already
derives) → 2 narrowing questions from `search/intake_flow.json` → a
ranked results screen. Each answer option carries a `keywords` string
that gets folded into a query alongside the category name and scored
by `scoreDocuments()` — the same engine Phase 5.1's free-text search
uses, just restricted to that category's documents — rather than a
hand-built decision tree mapping specific answer combinations to
specific documents, which would mean hand-curating well over 100 cases
with no way to check they stayed right as the corpus changes.

Written by hand, not generated: only 8 categories exist, and getting
narrowing questions right (useful, grounded, carefully neutral) is
closer to an editorial judgment call than to `lay_terms.json`'s bulk
paraphrasing. The results screen is always headed "Documents that
match what you described" — the master plan's own required wording —
and every result still carries its own real title and description,
the same as the ordinary picker; nothing here ever characterizes one
document as the right choice.

`tests/search/intake_coverage.js` checks every real path through every
category's flow (88 combinations today) produces actual keyword-scored
matches within its own category, not a silent fallback to "show the
whole category" — a path that only ever hit the fallback would mean
its narrowing questions do nothing. All 88 currently pass for real.
Full writeup, including why this reuses the search engine instead of a
hand-authored mapping, in `search/README.md` and `DECISIONS.md`.

## Related-document suggestions (Phase 5.3)

Every output screen (`#screen-output`) now shows a "related documents"
section below the signature area, populated by `relatedDocuments(doc)`.
Relatedness is computed purely from structure already in the corpus —
shared clauses (via `clauseEntryId()`), shared fields (via
`sharedFieldId`), and category adjacency — never from usage telemetry,
since this static, no-backend app collects none. Both shared-clause and
shared-field overlap are weighted by rarity with the same idf idea
Phase 5.1's search engine uses (`idfWeight()` in `app.js`): a field like
`companyName`, shared by 409 of 740 documents, says almost nothing about
two specific documents being related, where a field or clause shared by
only a handful of documents says a great deal. `buildRelatedDocsIndex()`
(called once from `init()`, alongside `buildDocumentIndex()`) precomputes
`state.clauseDocCount`/`state.sharedFieldDocCount` so every candidate
document's score is a cheap lookup rather than a corpus-wide scan.

The heading shown is one of the two exact strings the master plan
specifies: "Documents often used alongside" only when at least one of
the top-ranked results is backed by a real shared clause or a
genuinely rare (≤10-document) shared field; "Related documents"
otherwise, covering the honest case where only category adjacency or
near-universal field sharing links two documents. Clicking a related
card starts that document's wizard directly (same as clicking it from
the picker), with a fresh answer set — it doesn't carry over the
document just finished.

`tests/search/related_coverage.js` runs `relatedDocuments()` against
every real document in the corpus and checks: suggestions are non-empty
for all but a small fraction (today, 0/740), the label is always one of
the two allowed strings, no document ever suggests itself, and both
labels are genuinely exercised above a floor (today, 343 "often used
alongside" / 397 "Related documents") rather than one being only
theoretically reachable. Full writeup in `DECISIONS.md`.

## Picker performance (Phase 5.4)

`renderPicker()` no longer puts every matching document into the DOM
at once. `getPickerDocs()` still computes the full filtered/sorted
list (search, category filter, tier filter, tier sort) exactly as
before — filtering 740 plain objects is cheap — but `renderPickerPage()`
only ever turns `PICKER_PAGE_SIZE` (60) of them into actual `.doc-card`
DOM nodes. A "Show more" button (`#picker-show-more`) appends the next
page on demand rather than re-rendering what's already shown; clicking
it repeatedly reaches every document, same as before pagination
existed. Any state change that changes which documents match
(`renderPicker()` itself, called from every filter/search/sort
listener) resets back to the first page — there's no meaning to
"page 3" of a filter that no longer applies.

`tests/performance/performance_budget.js` is the master plan's literal
5.4 deliverable ("a performance budget test: first render under a
threshold, and search response under 100 ms for the full corpus"). It
drives the real `renderPicker()`/`searchDocuments()` in a headless
browser, same approach as every other browser test in this project,
timing both against thresholds set from this sandbox's own measured
numbers (first page ~5ms, full unpaginated 740-card render ~85ms,
search under 2ms) with headroom for a slower CI runner or a real
mid-range phone. Full writeup, including why pagination rather than
true DOM virtualization, in `DECISIONS.md`.

## Native PDF export (Phase 6.1)

A new "Download as PDF" button on the output screen (`#output-download-pdf`)
generates a real PDF client-side, via [pdfmake](https://pdfmake.github.io/)
vendored into `lib/` (`lib/pdfmake.min.js` + `lib/vfs_fonts.js`, see
`lib/README.md`) rather than loaded from a CDN — PDF export sits
alongside "Download as text" and "Export data (JSON)" as a core output
path, not an opt-in extra like the Supabase cloud-account script, so
it follows "zero-config must keep working" literally: no network
request is needed to generate one. This is a different thing from the
existing `#output-print` button, which hands the browser's own
print-to-PDF whatever the on-screen CSS happens to produce; pdfmake
renders real, selectable text with an embedded font (Roboto, bundled
in `vfs_fonts.js`), satisfying the master plan's "embed fonts" and
"ensure text is selectable" requirements directly.

`buildDocumentContent()` (`app.js`) is a new shared content model —
title, prepared-for line, jurisdiction notice, the per-clause body/
verification-note/citations/gap data, and signature — that both
`buildPlainText()` and the new `buildPdfDocDefinition()` render from,
so the plain-text and PDF exports can't silently describe two
different documents. `buildPdfDocDefinition()` lays that model out as
a pdfmake document definition: a title block, the jurisdiction notice,
the optional-clauses note, each clause's title/body/verification note/
citations/gap, and a signature block (an embedded image for a drawn
signature, styled text for a typed one) — plus a `footer` callback
pdfmake calls per page with `(currentPage, pageCount)`, carrying the
document id, a generated-on date, and "Page N of M."

`sanitizeForPdf()` swaps seven characters this corpus actually uses
(☐, ◻, ‖, ‟, ℠, ⅓, Ⓜ) for plain-ASCII equivalents before they reach
pdfmake — confirmed by testing, not assumed, that pdfmake's bundled
Roboto font has no glyph for any of the seven (each came back as a
literal `\u0000`, pdf.js's signature for "no glyph," when extracted
from a test PDF), while every accented letter, curly quote/apostrophe,
dash, and the section/paragraph/registered-mark symbols this corpus
also uses needed no fallback. This only affects the PDF; the on-screen
page, plain-text export, and JSON export keep the real character.

`tests/pdf/pdf_golden.js` is the master plan's literal 6.1 deliverable:
it generates a real PDF for the corpus's shortest, median, and longest
document (by clause count — derived from the live corpus rather than
hardcoded document ids), extracts each one's text back out with
`pdf-parse` (a devDependency added for exactly this, installed the
same way Playwright already is), and checks it against that same
document's `buildPlainText()` output. Two real findings from building
this against the live engine: a per-page footer's own text sits, in
PDF reading order, between content that ends at the bottom of one page
and content that continues on the next, so naively concatenating all
pages' text literally interrupts a paragraph that spans a page break
with the footer's words (the test strips recognizable footer lines
before comparing); and the font-coverage gap `sanitizeForPdf()` fixes,
found by this same test-writing process. Full writeup in
`DECISIONS.md`.

## Export polish: DOCX + sources appendix (Phase 6.2)

A new "Download as Word (.docx)" button (`#output-download-docx`)
generates a real, editable Word document client-side via
[docx](https://docx.js.org/), vendored into `lib/` the same way
pdfmake is (`lib/docx.iife.js`, see `lib/README.md`) — no CDN, no
backend, zero-config stays offline-safe. `buildDocxDocument()` renders
the same `buildDocumentContent()` model the plain-text and PDF
exporters use into `docx.Paragraph`/`TextRun`/`ImageRun` nodes (a
title heading, prepared-for line, jurisdiction notice, each clause
with its verification note/citations/gap, a signature block, and a
footer carrying the document id and generated-on date). Unlike the PDF
path, no font-glyph sanitizing is needed: a `.docx`'s body is XML
text, and Word supplies whatever font covers a character at open time,
so there's no embedded-glyph-subset to fall outside of.

A new checkbox on the output screen (`#include-sources-appendix`,
`state.includeSourcesAppendix`, off by default) adds a consolidated
"SOURCES AND CHECKED DATES" section — every verified clause's
citations, gathered into one place — to whichever export is downloaded
next: `buildPlainText()`, `buildPdfDocDefinition()`, `buildDocxDocument()`,
and the JSON export's new `sourcesAppendix` field all check it via the
shared `buildSourcesAppendix()` helper. Off by default means every
export keeps its pre-6.2 shape unless a reader deliberately opts in —
confirmed by `tests/golden/golden.js`'s existing fixture still matching
`buildPlainText()`'s output byte-for-byte with no changes needed.

`tests/docx/docx_golden.js` mirrors `tests/pdf/pdf_golden.js`'s
approach (same corpus-derived shortest/median/longest documents,
same `buildPlainText()` comparison) but needed a different footer
check: `mammoth` (the Node-side `.docx`-to-text library used to
extract a generated file's real content back out) doesn't read
header/footer parts at all, so the footer is instead verified by
reading `word/footer1.xml` directly with `jszip` — found by checking
directly, not assuming, that mammoth's clean body-text match didn't
also mean the footer was present anywhere mammoth looks. Full writeup
in `DECISIONS.md`.

## Document lifecycle and versioning (Phase 6.3)

Every saved document (`loadLibrary()`/`addToLibrary()` in `app.js`)
now also carries `schemaVersion` (the shape of the saved-entry record
itself, not the corpus or a document's own field schema), `corpusVersion`
(a content hash over the clauses this specific document used, via
`hashString()` — a plain FNV-1a fingerprint, not a cryptographic one;
nothing here needs tamper-resistance, only "changed vs. didn't"), and
`clauseSnapshots` — enough of each used clause's own content (not just
its id and checked date) to later show a real diff, since a checked
date or a hash alone says *that* something changed, never *what*.
`buildClauseSnapshot(doc, answers)` is the one function both
`addToLibrary()` (at creation) and `regenerateLibraryEntry()` (at
refresh) call to build this, resolving `clauseOrder` against Phase
2.4's `includeIf` the same way `assembleDocument()` does.

`detectDrift(entry)` compares a saved entry's frozen `clauseSnapshots`
against the live `state.clauses` and reports, per clause, exactly
which fields differ now (`checkedDate`, `status`, `body`, `gap`,
`citations`) — or that the clause no longer exists in the corpus at
all. `renderLibrary()` (My Documents) shows a banner for any entry
with real drift, worded exactly to the master plan's own required
framing ("A clause used in this document has changed since you
created it," pluralized when more than one did) — stating only facts,
never whether the reader needs to act. An expandable detail shows
`diffWords()`'s word-level diff (a classic LCS over whitespace-split
tokens) for a changed body, and a plain before/after line for
everything else.

"Regenerate" (`regenerateLibraryEntry()`) is the one-click action the
master plan asks for, and it does less than it might sound like: the
rendered document (`renderOutput()`, `buildPlainText()`, and every
export) already always recomputes from the live corpus plus the
entry's stored `answers` — nothing about what a reader sees was ever
frozen except `detectDrift()`'s comparison baseline. Regenerating just
refreshes that baseline to the current corpus, which is what
"preserves inputs" means here: `answers`, `signature`, `title`, and
`documentId` are untouched. The snapshot being replaced is pushed onto
the entry's `versions` array first, with a `generatedAt`/`replacedAt`
pair, so nothing is lost — `restoreLibraryVersion()` makes a prior
version current again (and keeps whatever was current before the
restore in `versions` too, rather than discarding it), satisfying
"keep prior versions with timestamps and allow restore."

An entry saved before this phase existed has no `clauseSnapshots` at
all; `detectDrift()` reports no drift for it rather than guessing,
since the information needed to say anything true was never captured
— the same backward-compatibility stance as every other optional field
this app has added to localStorage-stored records before (a missing
tier falls back to `'C'`, a missing signature just doesn't render).
Full writeup, including the `schemaVersion` naming judgment call and
why the snapshot stores more than the master plan's literal minimum,
in `DECISIONS.md`.

## Filing and next-steps packets (Phase 6.4 — pilot)

A new `filing/next_steps.json` (see `filing/README.md`), keyed by
document id and deliberately sparse — only a document with a real
filing or follow-on step gets an entry, unlike `search/lay_terms.json`'s
universal coverage. Each step is sourced exactly like a clause
(citations + checkedDate), surfaced in a new "What happens after this
document" section rendered on the output screen (`renderNextSteps()`)
and in every prose export (`buildPlainText()`, `buildPdfDocDefinition()`,
`buildDocxDocument()`, all reading from `buildDocumentContent()`'s new
`nextSteps` field via the shared `resolveNextSteps()`). A step can
optionally carry a `reminder` — a `dateFieldId` naming a real date
field the document already collects, plus an `offsetDays` — and
`resolveNextSteps()` computes the actual due date from whatever the
reader entered there, or reports plainly (never guesses) when that
field was left blank or couldn't be parsed as a date.

A computed due date comes with a "Add to calendar (.ics)" button
(`buildIcsForStep()`) generating a minimal, real RFC 5545
VCALENDAR/VEVENT with the rule's own citation folded into its
`DESCRIPTION` — the master plan's "with the rule's citation shown,"
not a bare date with no source. `validate_corpus.py` gained a matching
check block: every `next_steps.json` entry names a real document,
every step has real citations and a non-future checkedDate, and a
`reminder.dateFieldId` must name an actual `type: "date"` field on
that document (extending the pre-existing "declares fields nothing
substitutes or conditions on" check, which otherwise has no way to
know a next-steps reminder is a legitimate use of a field, and would
either wrongly flag it as dead data or silently accept a typo).

This phase is explicitly a small, fully real pilot — one document
(`llc_articles_of_organization`), not category-wide coverage, and the
master plan's separate pre-filled-official-form sub-requirement wasn't
attempted at all. `filing/README.md` says plainly what's covered and
what's deliberately deferred; full design reasoning in `DECISIONS.md`.

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
recheck rule), 4.4 (the law-change watcher, including its first real
dry run), and 4.5 (citation recheck integration, including its own
first real validation run) are all done, end to end — see "Verification
& staleness gate," "Law-change watcher (Phase 4.4)," and "Citation
recheck integration (Phase 4.5)" above. All of Phase 4 as the master
plan scopes it is now complete.

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
