# tools

Maintenance scripts for the corpus. All are run from the repository root.

## validate_corpus.py

Corpus-wide integrity check. **Run after every merge, before committing.**

```
python3 tools/validate_corpus.py
```

Checks unique clause and document ids, unique document titles, that every
`clauseOrder` id resolves, that no clause is orphaned, that every authority
clause has a non-empty gap and at least one citation, that every citation has
a url and a quote, that key order matches the documented schema for clauses,
citations and documents, and that every `{{field}}` used in a body or gap is
declared by each document that includes the clause. Every one of these has
caught a real defect at least once.

Also checks every verified authority clause's `checkedDate`: that it's
present, a real calendar date, and not in the future (the key-order check
above only catches the field missing entirely, not present-but-empty or
garbage). And it enforces a recheck cadence — a verified clause whose
`checkedDate` is 24+ months old fails the build, since "verified" against a
source checked two years ago isn't the same claim as verified now; a
non-fatal heads-up prints for anything 18–24 months out so a clause due for
recheck shows up before it turns into a hard failure. Nothing in the corpus
trips either check today (everything was checked within the last couple of
months), but both are real, tested gates — see the script's own comments
for the reasoning behind the two thresholds.

Also checks that every document has one or two categories (never zero, never
three — the picker's filter is built on documents being in a small, known
set of categories) and that every category name is one of the eight declared
in the script. It then prints an explicit reconciliation: per-category counts
sum to more than the document count whenever a document carries two
categories (several "Hiring" documents are also "During employment", for
instance) — real, not a bug, but easy to misread as one if the two numbers
are quoted without the reason they differ.

It also reports (does not fail on) coverage of `verification/*.md` against
current document ids. That folder is **not** 1:1 with `documents.json` and
its file count should never be quoted as a document-count proxy: most files
are one per-document build note, but roughly twenty are batch or process
notes — a wave's `granularity-pass-*`, a `checklist-audit-phase*`, a
`nine-item-audit-*`, an N`th-document-*` milestone note, a `*-gap-fix` — that
were never about a single document, and a further ~60 per-document notes
predate a later id or filename change and no longer match by exact id. The
report lists current documents with no matching note under any `_`/`-`
normalization of their id, so that real gap (as of this writing, 57
documents) stays visible instead of being masked by the folder's total count
looking close enough to 740 to seem fine.

Since Phase 2.1, it also validates every document's `fields[]` against
`schema/field.schema.json` — loaded at runtime rather than re-typed here, so
the schema file stays the single source of truth. Checks per field: key
order, that all required keys (`id`, `label`, `type`, `required`) are
present, that `type` is one of the schema's enum values, that `id` matches
the schema's id pattern, and that `label` is non-empty. It also runs the
`{{field}}`-usage check in the other direction — a field a document declares
but no clause body or gap ever substitutes is just as much a defect as an
undeclared field being used, and this direction caught 4 real ones on the
corpus the day it was added (`pto_request`, `salary_change`, and
`interview_scorecard` each had a dead `companyName`; `testamentary_trust_info_sheet`
had a dead `testatorCounty` — see git history around the Phase 2.1 migration
commit). Finally, it validates `showIf` (present on no field in the corpus
yet, but exercised by `tests/validate_corpus/test_showif.py` against a
synthetic corpus): a field's `showIf.field` must name another field in the
same document, never itself, and the full set of `showIf` edges across a
document must not contain a cycle (checked via DFS from every field that has
one).

Since Phase 2.2, it also validates `schema/fields/*.json` (the shared field
library — see `build_field_library.py` below): every entry has the required
`id`/`label`/`type`, a valid `type`, and a unique `id` across all library
files; every document field's `sharedFieldId`, when present, resolves to a
real entry whose `type` agrees with the field's own. It reports (does not
fail on) what percentage of all field instances resolve to a shared
definition, against the 80% target set by the master plan — currently
80.0%. Exercised by `tests/validate_corpus/test_shared_fields.py` against a
synthetic corpus, since the real one is currently too clean to trigger any
of these on its own.

Since Phase 2.2b, it also lints every `whyWeAsk`/`helpText` string —
wherever one can appear, a shared field library entry or a document
field's own — against `lint/advisory_phrases.json` (phrases like "you
should", "we recommend", "make sure to"), case-insensitively. This is the
one place the project's "inform, never advise" rule is checked
mechanically rather than relying on review alone. Exercised by
`tests/validate_corpus/test_advisory_lint.py`.

Since Phase 2.4, it also validates clause-level `includeIf`: a
`clauseOrder` entry can now be `{id, includeIf}` instead of a bare
clause id, and every `includeIf.field` must name a field the document
declares, with exactly one of `equals`/`notEquals` set (both or neither
is a condition nothing can execute). Beyond per-entry shape, it
enumerates every real combination of a document's conditional fields
(each one contributing a binary "condition holds / doesn't" split —
enumerated exactly up to 64 branches, sampled beyond that rather than
skipped) and fails if any branch would render zero clauses. It also
extends the existing "every declared field is used" check: a field
referenced only by a `showIf` or `includeIf` condition, with no literal
`{{field}}` anywhere, still counts as used — it changes what the
assembled document looks like even without ever appearing in its text.
Exercised by `tests/validate_corpus/test_include_if.py` against a
synthetic corpus, since nothing in the real one uses `includeIf` yet.

## migrate_fields.py

```
python3 tools/migrate_fields.py        # dry run — prints a report, writes nothing
python3 tools/migrate_fields.py --write  # applies the migration to data/documents.json
```

One-time migration from the old field shape (`id`, `label`, `placeholder`,
`required`) to the one `schema/field.schema.json` now requires (adds `type`
and, where derivable, `example`). It infers each field's `type` from its id
alone, by splitting the camelCase id into lowercase words (keeping an
all-caps acronym like `DOB` or `SSN` as a single token) and matching against
curated word sets — some types match on *any* word in the id (`date`,
`email`, `phone`, `county`, `percent`, `address`), others only on the *last*
word, i.e. the head noun (`money`, `integer`, `longtext`), specifically
because matching anywhere produces real false positives in this corpus:
`payPeriodType` contains "pay" only as a modifier, not as the field's actual
meaning, and `mandateBasis` contains the substring "date" without being a
date. `example` is derived with the same e.g.-prefix-stripping and
instruction-field-override logic `tests/golden/golden.js` already used to
build fixtures, so the two stay in sync rather than drifting.

Before writing anything, it round-trips the untouched corpus through
`json.dump(..., indent=2, ensure_ascii=False)` plus a trailing newline and
confirms the result is byte-identical to the file on disk — a dump without
those exact settings reformats the entire 1.6MB file into a 39,000+ line
diff, which happened once during manual edits (see `GOLDEN_REVIEW.md`) and
is exactly the kind of mistake a migration touching every field in the
corpus can't afford to repeat. Already run once, for the full migration
(3,975 fields across 740 documents); re-running it now against the
post-migration file is a no-op, since every field already has a `type`.

## build_field_library.py

```
python3 tools/build_field_library.py         # dry run — prints the coverage report, writes nothing
python3 tools/build_field_library.py --write  # writes schema/fields/*.json and links documents.json
```

Phase 2.2's one-time build of the shared field library. Ranks every
reused field id (appears in 2+ documents) by frequency and takes as many
as it takes — not a fixed count picked up front — to cover 80% of all
field instances in the corpus, since that's the actual acceptance bar
(the master plan's "40 most frequently reused fields" is a starting
point, not the total; the real long tail needs 172 ids to clear 80%).
Before trusting a field id as the join key between a document field and
its shared definition, it asserts the one thing this whole approach
depends on: no field id maps to more than one `type` anywhere in the
corpus (true today — checked, not assumed). Writes one JSON file per
type bucket under `schema/fields/` (`people.json`, `entities.json`,
`dates.json`, `money.json`, `addresses.json`, `locations.json`,
`text.json` — grouping by type rather than the plan's illustrative
semantic categories because type is objective and already verified
consistent, where a hand-picked category couldn't be checked for
correctness at this scale), then adds `sharedFieldId` (same string as the
field's own `id`) to every linked field in `data/documents.json`,
appended last since that's where the schema puts it — inserting it
anywhere else would silently violate validate_corpus.py's canonical key
order check, which is exactly what the first version of this script did
before being caught and fixed. Same before-writing round-trip safety
check as `migrate_fields.py`. Deliberately leaves `whyWeAsk`/`helpText`
unset on every entry — that's Phase 2.2b.

Already run once: 172 definitions, 3,177/3,971 field instances (80.0%)
linked.

## add_why_we_ask.py

```
python3 tools/add_why_we_ask.py         # dry run
python3 tools/add_why_we_ask.py --write  # writes whyWeAsk into schema/fields/*.json
```

Phase 2.2b's one-time write of `whyWeAsk` text into the shared field
library — plain, factual, non-advisory sentences, one per library id,
from a hardcoded dict in the script. Aborts instead of guessing if the
library and the dict ever disagree on which ids exist (missing text for
a real id, or drafted text for an id no longer in the library), so a
future library change can't silently go undocumented. Deliberately
covers only the 172 ids in `schema/fields/`, not the ~650 field ids
outside it — see `DECISIONS.md` for why that's a scope decision made on
purpose, not a gap to close later by generating something generic for
the rest. Every string it writes is checked against
`lint/advisory_phrases.json` before being trusted (both by hand before
the first `--write`, and by `validate_corpus.py` on every run after).
Already run once: 172/172 entries.

## merge_guard.py

```
python3 tools/merge_guard.py <pre-merge-commit>
```

Compares a pre-merge snapshot against the working tree and fails if any
pre-existing clause or document was **modified or dropped**.

This exists because merging a worker branch resolves conflicts in the two
large JSON arrays by union — appending items whose ids are new and otherwise
keeping the current copy. That is correct for additions, which is all a
worker normally produces, but it silently reverts *edits to clauses that
already existed on both sides*, with no conflict reported. A gap note added
during expansion was lost that way once. Run this whenever an edit to an
existing clause is in flight, and prefer to make corpus-wide corrections
while no workers are running.

In CI (`.github/workflows/ci.yml`) this only runs on pull requests, against
the PR's actual base branch — never on a direct push. A direct push isn't a
merge, and this project's own history is full of legitimate direct commits
that edit existing content on purpose (every citation fix is one); gating
every push on "did anything change since the last commit" would fail on
every one of those. First version of the CI job got this wrong and failed
its own author's next commit over a one-field placeholder fix — fixed by
scoping the job to `pull_request` only.

## recheck_citations.py

```
python3 tools/recheck_citations.py [N] [host-substring ...]
```

Re-fetches stored citation URLs and re-checks that each quote is still a
verbatim substring of what comes back.

Quote verification at write time proves a quote was in text the author
fetched; it cannot tell you whether the stored URL still returns that text.
The first sampled run found a citation whose URL resolves to a version-picker
rather than to statutory text, because two versions of the section are on
file and the publisher disambiguates them only through a form submission.

Defaults to statutory publishers. Pass `courtlistener` deliberately and only
when no expansion workers are running, since they share that quota.

Read failures sceptically. Every failure investigated so far but one has
been a defect in the checker rather than in the corpus: a leginfo session
reused across a long run and silently expiring, and tag-stripping in both
directions. Neither way of stripping tags is right for every publisher —
dropping them joins words that markup merely wrapped (Cornell puts a defined
term in its own element mid-sentence), while replacing them with a space is
what separates list items that leginfo puts one per element, where dropping
them yields ";4. Names". The script now accepts a quote if either spelling
matches. Retry with a fresh session and check normalization before reporting
a defect.

## wave_agent_prompt.md

The canonical prompt for a corpus-expansion worker, one per category per wave.
Was previously retyped from memory into every `Agent` call, which is exactly
the drift risk `validate_corpus.py` exists to prevent for the corpus itself —
so it is versioned here instead. Notably fixes the shared-scratchpad
collision: earlier waves told each agent to "use a private directory named
for yourself," which is a convention, not a guarantee, and one agent's
`build.py` was in fact overwritten mid-run by another agent's file of the
same name in the shared session scratchpad. The fix is structural rather than
a naming rule: every agent already has its own git worktree that no other
agent can see, so the template now says to use that, not the scratchpad, for
every temporary file.

## recheck_all.py

```
python3 tools/recheck_all.py [--hosts statutory|courtlistener|all] [--out PATH] [--delay SECONDS]
```

The whole-corpus version of the sampler. Two things make a full pass
practical: citations share URLs (about 2.7 quotes per unique URL), so each
URL is fetched once and every quote citing it is checked against that one
fetch; and results are appended to a JSONL as they are produced, so a
container restart resumes rather than starting over — pass the same `--out`
and it skips URLs already recorded.

Handles PDFs, which matters more than it sounds: a slip opinion or the CACI
volume fetched as text looks like an empty page, so without extraction every
PDF citation reports a false `EMPTY`. A smoke run before that was added
produced 48 of them.

Statuses are deliberately distinct. `UNRESOLVED_URL` means the page carried
no statutory text at all — a broken citation, not a wrong quote. `EMPTY`
usually means a session expired or a fetch failed. Only `MISMATCH` is a claim
about the quote, and even then check normalization first.

**Assume a high failure rate is this script before you assume it is the
corpus.** The first full run reported 159 EMPTY and 51 MISMATCH in its first
1,631 checks. Every one was a bug here:

- All 159 EMPTY were leginfo at exactly 0 bytes. The JSF session had expired
  and the re-seed only fired on a loop counter, so once a session died every
  later fetch failed the same way. It now re-seeds and retries the moment a
  leginfo body comes back empty.
- The mismatches were PDF extractor disagreement. `extract_pdf` returned the
  first extractor that succeeded, while a quote had been verified against the
  other — one inserts mid-word spaces, the other preserves justified spacing.
  It now returns both texts and accepts a quote found in either.

After that fix the same population came back 1,315 PASS to 1 MISMATCH — and
the one remaining mismatch was also this script. California slip opinions
carry marginal line numbers, which extraction interleaves into the prose, so
a quote spanning a line break reads "what should 20 happen" and matches
neither extractor (they do not even agree on which number lands where).
`extract_pdf` now offers a third candidate with standalone one- and two-digit
numbers removed — an extra way to match, never a replacement, since the
unmodified texts are still checked first.

A long run was also killed outright, almost certainly for memory: pdfminer
holds a whole page tree at once, and doing that on a multi-megabyte volume is
enough to lose the process. Files over 12 MB now go through pypdf only.

A failure rate above a percent or so is a signal to debug this script, not to
start writing up findings.

Run `--hosts courtlistener` only when no expansion workers are running: they
share that quota, and exhausting it stops their research mid-document.

As of the session that added `courtlistener_recheck_results.jsonl` below,
`--hosts courtlistener` no longer works at all: CourtListener's AWS WAF
returns a JavaScript bot-challenge page to `curl` for that host, even on a
single isolated request, so every result in a curl-based run against it is a
false MISMATCH (the "body" fetched is a ~2.4 KB challenge stub, not the
opinion). Statutory hosts are unaffected. Verifying CourtListener-hosted
citations now goes through the CourtListener MCP tools instead (see below),
not this script.

## courtlistener_recheck_results.jsonl / courtlistener_recheck_todo.json

A from-scratch re-verification of every CourtListener-hosted citation in the
corpus (`opinion_id`s extracted from stored URLs), run via the CourtListener
MCP tools (`read_document`, `call_endpoint`) rather than curl, since those
tools use CourtListener's real API and are not WAF-gated the way `curl`
against `www.courtlistener.com` is.

`courtlistener_recheck_results.jsonl` accumulates one JSON line per citation
already checked (`clause`, `url`, `cite`, `case`, `status`, `quote`).
`courtlistener_recheck_todo.json` lists the opinion URLs (grouped, with their
citing clauses) not yet checked. A firing pulls a batch off the todo file,
appends confirmed results to the results file, and commits both — so the
work resumes exactly where it left off across sessions and container
restarts, the same resumability pattern as `recheck_all.py`'s own JSONL, just
split into two files because the MCP tools can only be called from an agent
turn, not from a standalone Python subprocess the way curl can.

The binding constraint is CourtListener's own account-wide API quota (50
requests/hour, 125/day, shared across every tool that hits it — check with
`get_api_usage` before a run) — not compute. Running many verification agents
in parallel against it does not go faster; it just contends for the same
budget and produces a wall of quota-exhaustion errors instead of results,
which is what happened the first time this was tried (parallel batches, most
of it wasted). One agent, one opinion at a time, checking quota headroom
first, is the only version of this that actually makes progress.

A MISMATCH from this pass is not automatically a corpus defect — the same
false-failure sources documented above for `recheck_all.py` apply (PDF
extraction quirks, line-number noise), plus a class specific to RECAP
federal-pleading text: every line is numbered 1-28, and that can collide
with a real short number sitting next to one (e.g. "9 U.S.C." wrapped across
a line boundary reads as two adjacent stray digits). Investigate before
concluding the corpus is wrong; two confirmed real defects this way
(`patentassign_hired_to_invent`'s Standard Parts quote — wrong quote-mark
style, then a separately-discovered silent truncation — and
`mandatoryarb_current_status`'s citation URL pointing at a docket listing
page instead of the actual order) are already fixed as of this writing.

## regression.js

Headless browser check of the application against the current corpus.

```
python3 -m http.server 8933 &
NODE_PATH="$(npm root -g)" node tools/regression.js
```

Confirms that the per-category document counts are level (the wave rotation
keeps them within one of each other), that the most recently added documents
assemble with no raw `{{field}}` placeholders in body or gap, that the output
screen renders clause blocks and badges, and times the contract reader.

It derives both the expected category spread and the documents to exercise
from the corpus itself — documents are appended, so the tail of the array is
the newest wave — rather than naming them, so it does not need editing as the
corpus grows.

Two console errors are expected in this sandbox and are not defects: the
Google Fonts stylesheet is deliberately aborted by the script itself
(`page.route(...).abort()`, so this one happens in any environment, CI
included), and the Supabase client on jsDelivr is unreachable through this
sandbox's egress proxy. Neither fails the run — only real structural
problems (category imbalance, a document that fails to assemble, a leaked
`{{field}}` placeholder anywhere including the final rendered output) set
the exit code, which is what CI (`.github/workflows/ci.yml`) actually
gates on. In an unrestricted environment (CI included) the Supabase error
won't happen at all, since jsDelivr is reachable — console-error count is
reported but never asserted against, precisely because it legitimately
differs by environment.

## wizard_regression.js

```
python3 -m http.server 8933 &
node tools/wizard_regression.js
```

Phase 2.3's full-corpus acceptance check for the generic wizard renderer
(`renderWizard()`/`renderWizardStep()` in app.js). Drives all 740
documents through the real step-by-step path: fills every currently
visible field with its own `example` value, clicks Next through every
step, reaches the review screen, submits, and fails on a step that never
advances, a document that never reaches review, or a leaked `{{field}}`
brace in the review screen or the final rendered output. Companion to
`regression.js`, which exercises `assembleDocument()`/`renderOutput()`
directly and was and still is unaffected by this phase, since it never
goes through the wizard UI at all.

This is what caught the first version of the money/integer/percent
validators being too strict: a stricter full-format regex rejected real
corpus examples like `"$25,000 cash"` and `"10,000,000 shares of common
stock"` on 15 real documents, found by running this script against the
real corpus before trusting the validator, not by guessing what formats
to allow.

## tests/wizard/wizard_unit.js

```
python3 -m http.server 8933 &
node tests/wizard/wizard_unit.js
```

Phase 2.3/2.4 behavioral checks for the specific claims `wizard_regression.js`'s
happy-path walk doesn't exercise: a field with `showIf` actually hides/
shows and an all-hidden step is actually skipped (against a synthetic
document — no field in the corpus sets `showIf` yet); validation
actually blocks on an empty required field and a malformed email, and
does *not* block on a blank optional field or a realistic money value; a
`sensitive` field gets `data-sensitive` and a note in the DOM (against
`ein_info_sheet`, the one document with a sensitive field); the review
screen's Edit button jumps back to the right step and focuses the right
input; draft resume restores the step the person was on, not always
step 0; and a clause with `includeIf` is actually included/excluded from
`assembleDocument()` and described correctly in both the output
screen's conditional-clauses note and the plain-text export (against a
synthetic document and clauses pushed into `state.documents`/
`state.clauses` — no clause in the corpus sets `includeIf` yet). Each
check failed once for a real reason while this was being written (a
validator too strict, a test that forgot `showScreen()` so nothing could
receive real DOM focus) before being fixed — not written blind and
trusted.

## tests/auth_roundtrip.js

```
SUPABASE_URL=https://xxxx.supabase.co \
SUPABASE_ANON_KEY=sb_publishable_... \
node tests/auth_roundtrip.js
```

A real HTTP round trip through Supabase Auth and the PostgREST API — the
one thing the cloud-sync feature's RLS verification could not cover from
inside this sandbox, since its egress policy blocks the project's domain
(see `DECISIONS.md`). Run it from anywhere that isn't this sandbox.

With just the two env vars above (the same ones `config.js` needs), it
confirms an unauthenticated client reads zero rows from
`public.agreements` and that requesting a magic link succeeds over HTTP.
Add `SUPABASE_SERVICE_ROLE_KEY` (server-side only — never in `config.js`)
to run the complete two-user test: real sessions for two throwaway users
via Supabase's admin `generate_link` (no inbox needed), one user's insert,
and confirmation that the other user's read, update, and delete of that
row each affect zero rows over the real REST API — then deletes the test
row and both test users itself, since a direct REST call with the service
role key isn't subject to the MCP tool gate `DECISIONS.md` describes.

Exits 0 immediately with a clear message if `SUPABASE_URL` /
`SUPABASE_ANON_KEY` aren't set, so it's safe to add to CI later without
breaking a run that has no project configured.
