# Decisions

Per the master build plan's global rule 8: ambiguous calls get the most
conservative option, recorded here with the reason, then work continues.

## 2026-10-14 — Supabase destructive-SQL is blocked for this session, not routed around

**Task:** Phase 1.2, delete the two RLS test rows (`rls-test-doc-a`,
`rls-test-doc-b`) and their two test users
(`groundtruth-rls-test-{a,b}@example.com`) from the live `groundtruth`
Supabase project.

**What was tried:**
1. `execute_sql` with the real DELETE — timed out at 60s (also timed out
   repeatedly in the prior session, across a project pause/restore cycle).
2. `apply_migration` with the same DELETE — timed out identically. Same
   tool-level warning text ("Destructive statements may require the user
   to confirm before they run") on both tools.
3. To isolate whether this was specific to this table/data: created a
   throwaway table (`public._scratch_probe`, no RLS, 2 dummy rows) and
   tried `DELETE FROM public._scratch_probe WHERE id = 1` — **same 60s
   timeout.**
4. Tried `DROP TABLE IF EXISTS public._scratch_probe` on that same
   harmless scratch table — **same 60s timeout.**

**Conclusion:** this is a blanket gate on destructive SQL
(DELETE/TRUNCATE/DROP) for this Supabase MCP connection in this session,
completely independent of which table or how sensitive the data is. Not a
fluke tied to the two real test rows, not fixed by the project coming back
from a pause. The tool's own description says a destructive statement "may
require the user to confirm before they run" — whatever surfaces that
confirmation isn't reaching this session, so the call just hangs to
timeout every time.

**What I did not try, and why:** disguising the DELETE to dodge whatever
is pattern-matching on it — wrapping it in a PL/pgSQL `DO` block, dynamic
SQL via `EXECUTE format(...)`, or a function that deletes as a side
effect. That would be evading a safety confirmation on purpose, not
"figuring out how to execute" a legitimate instruction, and I won't do
that regardless of how the request is phrased. I also didn't attempt a
direct `psql`/raw-TCP connection from this sandbox's shell: this
environment's own proxy documentation lists raw-TCP databases as
explicitly unsupported and says to report that, not route around it —
same category of thing.

**Decision:** stop retrying a path that's now proven not to work three
ways, and hand the one working path to the person who can actually use
it. One query, in the Supabase SQL editor (https://supabase.com/dashboard
→ groundtruth project → SQL Editor), clears all of it in one paste:

```sql
delete from public.agreements where id like 'rls-test-%';
delete from auth.users where email like 'groundtruth-rls-test-%';
drop table if exists public._scratch_probe;
```

**Everything else in 1.2 that didn't require DELETE was completed from
here:** table/RLS policies reconfirmed present (`list_tables`), both
leftover rows and both leftover users were shown to the user with exact
ids/emails/timestamps before this investigation started, and
`get_advisors` was run for both security and performance (findings below).
Two of the three security findings were fixed directly, since both fixes
are non-destructive DDL (confirmed: `ALTER TABLE ... ENABLE ROW LEVEL
SECURITY` and `CREATE OR REPLACE FUNCTION` both ran instantly, same
session, same project — the gate is specifically on DELETE/TRUNCATE/DROP,
not DDL in general). Moving on to 1.1 (CI) rather than stalling on the one
action only the project owner can actually take from here.

## Supabase advisor findings (2026-10-14/15)

**Performance** (4 warnings, 1 info — all pre-existing, none introduced
this session):
- `auth_rls_initplan` ×4: all four `agreements` RLS policies call
  `auth.uid()` directly, which Postgres re-evaluates per row instead of
  once per query. Fix: wrap as `(select auth.uid())` in each policy's
  `USING`/`WITH CHECK` clause. Immaterial at today's row count (2, soon
  0); worth fixing before Phase 7.1 adds more tables, since the same
  pattern would otherwise just get copied forward. Deferred, not fixed
  now, since `supabase/schema.sql` doesn't have a migration-based update
  path yet (that's Phase 7.1's own job) and fixing it by hand outside
  migrations here would itself be exactly the kind of manual-SQL drift
  the plan is trying to get away from.
- `unused_index` (info): `agreements_user_id_idx` has never been used —
  expected, given almost no real traffic yet. Not actionable signal yet;
  worth re-checking once there's real usage.

**Security** — found 3, fixed 2:
- `function_search_path_mutable` (WARN) on `public.set_updated_at` —
  **fixed**: re-created the function with `SET search_path = public,
  pg_temp`. Applied live via `execute_sql` (non-destructive DDL, ran
  instantly); `supabase/schema.sql` updated to match so the committed
  schema doesn't drift from the live fix.
- `rls_disabled_in_public` (ERROR) on `public._scratch_probe` — this was
  my own throwaway probe table from the investigation above, now an
  ERROR-level finding on the live project because of it. **Fixed**:
  `ALTER TABLE public._scratch_probe ENABLE ROW LEVEL SECURITY`. The
  table itself still needs dropping (included in the cleanup SQL above —
  it can't be dropped from here for the same DROP-is-gated reason).
  Residual: `rls_enabled_no_policy` (INFO) on the same table, since it now
  has RLS on with no policies — expected and harmless, goes away once the
  table is dropped.
- `auth_leaked_password_protection` (WARN) — Supabase Auth's
  HaveIBeenPwned check is off project-wide. Not a SQL-reachable setting;
  it's a dashboard toggle (Authentication → Policies) or a Management API
  call neither of which this session has a tool for. Left for the project
  owner; noted here so it isn't silently dropped from the record.

## Phase 2.2b scope: whyWeAsk drafted for the shared library only, not
## every field id

The master plan's 2.2b text says "for every field lacking whyWeAsk,
draft one... write them into the field library, not per document,
wherever possible." Taken completely literally, that's all 822 distinct
field ids in the corpus. This pass drafted and wrote whyWeAsk for the 172
ids in the shared library (`schema/fields/*.json`, built in Phase 2.2) —
which, by construction, already covers 80% of all field instances in the
corpus, deduplicated to one definition per id. The remaining ~650 ids are
outside the library (mostly used in a single document each, which is
exactly why they weren't worth a shared definition in 2.2), and still
have no whyWeAsk.

Decision: treat the library as the real scope of "wherever possible" for
this pass, and record the remaining ~650 ids as known-incomplete rather
than writing something for all of them now. Reasoning:
- The library-covered 80% is the highest-leverage set — one piece of text
  written once already explains the field everywhere it's reused, which
  is the whole point "not per document" is making.
- Writing real, non-generic, accurate text for ~650 more one-off fields
  (many of which only make sense in the specific context of the single
  document that declares them) is a comparable amount of work to this
  pass, and doing it carelessly just to claim 100% coverage would risk
  shipping inaccurate or generic-sounding "explanations" — worse than
  honestly leaving them unset, which the schema already treats as a
  normal, visible gap (nothing renders broken; `whyWeAsk` is optional).
- This is the conservative option per the plan's own decision rule: ship
  the clearly-correct, highest-value subset now, document the gap
  precisely instead of either stalling on the full 822 or quietly
  claiming more coverage than exists.

Not done, flagged as real remaining work: whyWeAsk for the ~650
non-shared field ids. Whoever picks this up next should decide then
whether any of those 126 "reused but below the 80% cutoff" ids (out of
the 650) are worth promoting into the shared library instead of writing
near-duplicate text per document for them.

## Phase 2.3 scope: "mark sensitive fields" ships marking only, not
## storage exclusion

The master plan's 2.3 acceptance line reads "Mark `sensitive` fields so
they are excluded from analytics and optionally never synced." This
pass marks them: a `sensitive: true` field gets `data-sensitive="true"`
on its wrapper in the wizard DOM and a plain-language note under the
input.

It deliberately does not go further and strip sensitive answers out of
what `saveDraft()`/`addToLibrary()` write to `localStorage`. The reason:
there is no analytics system yet (Phase 8.1 doesn't exist) and no remote
sync of documents yet (Phase 7.4 doesn't exist) for "excluded from" or
"never synced" to actually mean anything today — the only thing reading
`localStorage['groundtruth-library']` back is `viewLibraryEntry()`,
reopening a document the person already filled in and saw rendered on
screen in this same browser. Stripping the sensitive answer from that
storage wouldn't exclude it from any real analytics or sync pipeline
(none exists); it would just make reopening a saved document from "My
Documents" show a broken, unsubstituted `{{fieldId}}` for exactly the
field that mattered enough to mark sensitive in the first place — a real
regression with no present offsetting benefit. (Checked directly: only
one field in the whole corpus is marked sensitive today —
`ein_info_sheet.ssnOrItin` — so the blast radius of getting this wrong
would have been small, but the reasoning holds regardless of count.)

Decision: ship the marking now; wire real exclusion into
`saveDraft()`/`addToLibrary()` once Phase 7.4 or 8.1 actually builds a
consumer for the flag, at which point there's a real system to exclude
sensitive data *from* rather than a speculative one.

## Phase 3.1 scope: Tier A is honestly empty; "field schema complete"
## means whyWeAsk-resolvable

Two decisions made computing `tools/tiering.py`, both already explained
in the script's own comments and in `ARCHITECTURE.md`, recorded here
too since both were genuinely ambiguous calls, not mechanical ones.

**Tier A is always 0/740 right now, on purpose.** The master plan's
Tier A definition includes "passed adversarial verifier with no open
findings" and "accessibility checks passed" — Phase 4.1 and Phase 9.1,
neither of which exists yet. Taken literally, there's no real signal to
check at all. Two ways to handle that: treat the missing signal as
"vacuously true" (nothing has failed it, so let it pass) or as "not
met" (nothing has verified it, so it hasn't been shown to pass).
Picked the second, conservative option — vacuous-true would hand every
document meeting Tier B's bar a Tier A label that asserts two reviews
happened when they didn't, which is exactly the kind of overclaiming
this whole project exists to avoid making about the underlying legal
content, and would be a strange thing to do to the project's own
quality metric. `ADVERSARIAL_VERIFIER_EXISTS`/`ACCESSIBILITY_CHECK_EXISTS`
in `tools/tiering.py` are `False` until Phase 4.1/9.1 give them a real
per-document result to check.

**"Complete field schema" for Tier B means every field resolves a real
`whyWeAsk`** (directly, or via `sharedFieldId` into the Phase 2.2
library), not merely "has a `type`." Every field in the corpus already
has `type` (Phase 2.1), so using that alone as the bar would make every
one of the 740 documents trivially qualify — a tier gate that nothing
can fail isn't measuring anything. `whyWeAsk` coverage, by contrast, is
real and currently split close to evenly (382 documents where every
field resolves one, 358 where at least one doesn't), which is both an
honest signal and a direct, visible payoff for Phase 2.2/2.2b's own
work: a document only reaches Tier B once its fields are actually
explained to the person filling it in, not just typed.

**CI reads `tiers_history.jsonl`, never writes it.** `promotion_report.py
--write-history` appends a day's snapshot; CI's job-summary step runs
the script without that flag. Keeping CI read-only here avoids a bot
commit flow (and its failure modes — races, merge conflicts, permission
scope) for a file that only needs one entry a day and is cheap for a
developer to update as part of a normal commit, the same way `tiers.json`
itself is generated locally and committed rather than written by CI.

## Phase 4.1 scope: infrastructure built now, the real sample run is a
## separate checkpoint

Built in this pass: `verifier/{prompt.md,sample.py,record_result.py,
report.py,README.md}` and `tests/verifier/test_verifier.py`, wired into
CI. All of it tested against synthetic data, same as every other
phase's mechanical infrastructure.

Not done in this pass, on purpose: actually drawing the 100-clause
sample and dispatching real verification work against it. Every prior
phase's "figure out how to execute" judgment calls were about
engineering decisions inside this sandbox — schema shape, validator
strictness, tier definitions — reversible by editing a file and
re-running a script. Running the sample means spending a large amount
of real, slow, external-API-dependent research (CourtListener,
Lawstronaut, live web fetches against statute/case-law publishers)
re-examining content the corpus currently calls "verified," at a scale
(100 clauses, each potentially needing several source fetches) an order
of magnitude past anything else this project has done in one sitting.
That's a genuine resourcing/pacing decision, not a design decision the
master plan or prior instructions already settled — the plan fixes the
SIZE of the first sample (100) but says nothing about how to pace
dispatching it, and "go ahead start phase 4" authorized starting the
phase, not implicitly authorizing every downstream resource commitment
within it at once.

Decision: build and verify the infrastructure fully (done), then ask
before spending the research budget on a real run, rather than either
stalling on the whole phase or committing to 100 real clauses' worth of
external research without a check-in. This is offered as a question,
not treated as self-evidently requiring one — if directed to just
proceed, the infrastructure above is already built to do exactly that.

## Phase 4.1 sample report (the master plan's acceptance deliverable)

Directed to run the full 100-clause sample now rather than pilot
smaller first. Dispatched 10 parallel `Agent`-tool workers (10 clauses
each) against `verifier/prompt.md`'s rubric; each did real research
(CourtListener, Cornell LII, law.onecle.com, california.public.law,
official agency PDFs, and others per the clause) and wrote its batch's
results, recorded via `verifier/record_result.py` as each completed.

**Result: 100/100 clauses checked, 18 with at least one finding
(18.0%), 18 total findings — 1 major, 17 minor, 0 blockers.**

By category: unverifiable 10, other 3, citation_mismatch 2,
overclaiming 2, quote_drift 1.

The one major finding: `electrepair_documentation_mandate_two_tiers`
(Right to Repair Act documentation mandate) frames three disclosed
carve-outs as the complete set of statutory limits on the mandate, but
Civ. Code § 42488.2 has at least one more (subd. (g), a manufacturer
excused from selling service parts it no longer offers) plus a
free-equivalent-replacement exception, confirmed via a direct-fetched
official CA Bureau of Household Goods and Services advisory — neither
appears anywhere in that document's clause set.

Everything else is minor: a handful of genuine small defects (a quote
silently splicing two statutory paragraphs together and dropping the
sentence between them; a citation that doesn't itself support a claim
the clause body makes, even though the claim is independently true; a
stale pin cite split across two pages when the quote is wholly on one;
a gap note misattributing which part of a statute a list comes from)
and — the largest single category by far — 10 "unverifiable" findings
that are sourcing-access problems, not content errors: this session's
`leginfo.legislature.ca.gov` access was Cloudflare-blocked essentially
the entire run (confirmed independently by multiple workers, not one
agent's fluke), which repeatedly forced reliance on
`california.public.law` alone — a mirror the project's own sourcing
rules (`tools/wave_agent_prompt.md`) already treat as non-independent
corroboration. Every one of those 10 still had its substance checked
against *something* live; none surfaced an actual accuracy problem,
they're flagged because the independence bar wasn't clearly met this
session, which is exactly the conservative call the evidence standard
in `verifier/prompt.md` asks a worker to make rather than silently
passing or silently failing a clause over infrastructure flakiness.

This finding rate (18%, with 1 major and 0 blockers across a real,
cold, no-prior-context adversarial pass on content the corpus already
calls "verified") reads as a reasonably healthy result for a
first-of-its-kind check — not zero, which would be suspicious for a
genuinely adversarial pass, and not alarming either. Per the master
plan's own acceptance line, a full-corpus run is a separate decision
for later, not something this result on its own triggers.

## Phase 4.2: triage outcome for all 18 findings

Built `verifier/triage.py` (lists open findings by severity; records
accepted/rejected/fixed; a rejected decision feeds its reason back into
`verifier/prompt.md`'s "Known false positives" section; a fixed decision
appends a real `changelog.html` entry in the project's existing format
— never auto-edits a clause itself, only records that an edit already
happened). Tested against a synthetic corpus
(`tests/verifier/test_triage.py`).

Triaged all 18 findings from the sample report: **8 fixed, 10 accepted,
0 rejected.**

**Fixed** (data/clauses.json edited directly, golden fixtures for the 8
affected documents regenerated, validate_corpus.py/regression/wizard
suites re-run clean, each with its own changelog.html entry dated
2026-10-17):
- The major finding (`electrepair_documentation_mandate_two_tiers`):
  disclosed the two additional § 42488.2 carve-outs, sourced to the
  official BHGS industry advisory (fetched and extracted directly with
  pdftotext, since WebFetch couldn't parse the PDF's binary stream).
- `crt_payout_and_remainder_tests`: added the two missing citations for
  the 5%/50% payout test (26 U.S.C. § 664(d)(1)(A)/(d)(2)(A)), fetched
  fresh from Cornell LII.
- `sdi_interest_status`: extended a spliced quote to include the
  transitional sentence it had silently dropped, confirmed verbatim via
  a fresh fetch.
- `ein_how_to_apply`: narrowed an overclaimed daily-limit scope to what
  its own cited source actually supports.
- `mutualbenefit_dissolution_distribution_to_members`: removed an
  uncited comparison to a different corporate category rather than
  chasing down and freshly verifying two new citations for a tangential
  point — the more conservative fix given the finding was only minor.
- `fdo_who_may_sue`: corrected a pin cite that spanned a page boundary
  the quoted text never reached.
- `ulc_labor_rebuttal_factors`: corrected a gap note's misattribution of
  which part of a statute a list comes from.
- `founders_ip_preincorporation_gap`: clarified that the illustrative
  case is a patent case (patent law has no work-for-hire doctrine), not
  a parallel to the copyright rule it was illustrating.

**Accepted, no clause edit** (all 10 of the "unverifiable" findings):
every one of these reflects a real research-access limitation this
session — `leginfo.legislature.ca.gov` was Cloudflare-blocked
essentially throughout the whole verification run, and two findings
(`epnp_covered_vehicles`, `arrestrecord_marijuana`) surfaced a genuine
discrepancy between secondary mirrors that only the primary source
could resolve. None of these were rejected as false positives — the
findings are accurate statements of what couldn't be confirmed this
session — but none warranted guessing at a fix either. Each is recorded
in `verifier/triage.jsonl` with a reason noting it's flagged for
re-verification once `leginfo` (or another independent source) is
reachable, not silently dropped.

**Nothing was rejected**, so `verifier/prompt.md`'s "Known false
positives" section does not exist yet — correctly, since nothing in
this round turned out to be a false positive to record.

Separately, after this triage, bumped `checkedDate` to 2026-10-17 for
the 8 fixed clauses (the project's own rule: never bump it *without*
real re-verification, but *do* bump it when real re-verification
genuinely happened — all 8 fixes rested on fresh research, not just a
rephrasing). Golden fixtures for the 8 affected documents regenerated;
committed as its own dedicated commit, separate from the triage commits
themselves, with a message explaining why.

## Phase 4.3: per-category staleness thresholds — acceptance report

Replaced `validate_corpus.py`'s single global 24-month fatal / 18-month
warn staleness window with per-category thresholds from the new
`config/staleness.json`: Hiring, During employment, Ending employment,
and Real Estate (faster-moving law) get 12/9; Business Formation and
Family Law get 18/12; Confidentiality & IP and Estate Planning keep the
original 24/18. A clause used by documents spanning more than one
category — confirmed empirically to be 12 clauses in the corpus — is
held to the strictest (lowest) fatal/warn pair among every category any
of those documents carries, never the most lenient; `thresholds_for()`
in `validate_corpus.py` implements this directly off `documents.json`'s
`categories[]`, with no separate mapping to keep in sync.

Also added the annual California-statute recheck rule: any verified
authority clause citing a statute via `leginfo.legislature.ca.gov` (this
project's own citation convention — never used for case law, which
cites `courtlistener.com`/`courts.ca.gov`) must carry
`effectiveCycleChecked >=` the current year, since CA statutory
amendments generally take effect each January 1 and a 12/18/24-month
window doesn't track that cadence on its own. Backfilled once via
`tools/add_effective_cycle_checked.py`, seeded from each clause's own
`checkedDate` year (always a safe starting point — a clause checked in,
say, September of a year is necessarily checked after that year's own
January 1). 3,568 of the corpus's 4,980 authority clauses cite a CA
statute and were backfilled; none required special-casing.

**Acceptance (the master plan's literal line — "the number of clauses
newly flagged is reported"):** `validate_corpus.py` now prints how many
clauses the new, tighter per-category thresholds flag (fatal or warn)
that the old single 24/18-month window did not. As of this migration:
**0 fatal, 0 warn** — expected, since the whole corpus was checked or
re-verified within roughly the last month, well inside even the
tightest (12/9) category window. The gate is real and tested
(`tests/validate_corpus/test_staleness.py` builds a synthetic corpus old
enough to trip it, both for the per-category thresholds and the new
annual-cycle rule), it simply has nothing to catch in the current corpus
yet — the same pattern as every other new `validate_corpus.py` check
added so far in this project.

## Follow-up: tiering.py's staleness gate had drifted from validate_corpus.py

Discovered while starting Phase 4.4: `tools/tiering.py`'s Tier B gate
still compared a clause's `checkedDate` against a hardcoded
`STALE_MONTHS = 24`, left over from before Phase 4.3 replaced
`validate_corpus.py`'s single global threshold with per-category ones.
Its own comment said it "must match validate_corpus.py's constant" —
which no longer existed, so the two scripts had silently disagreed
since the Phase 4.3 commit: a document with a Hiring clause 15 months
stale would already fail `validate_corpus.py`'s real 12-month fatal
threshold (blocking the build) while `tiering.py`'s flat 24-month check
would still have called it fresh. Fixed to mirror
`validate_corpus.py`'s `thresholds_for()` exactly (the strictest fatal
month-count among every category a clause's documents carry), with a
new test (`test_per_category_threshold_used_not_flat_default`) proving
the per-category value is actually used, not just present. Committed
and pushed separately from the Phase 4.3 commit, once CI was already
green on it, since this was found only after that work shipped.

## Phase 4.4: law-change watcher — scope decisions

Two decisions made while building this, both before any real scan was
run:

**Architecture: an agent-run pipeline, not a GitHub Actions cron job.**
The master plan calls this "a scheduled task," but the actual research
step — Lawstronaut's `horizon_scan`, CourtListener's search/citation
tools — only exists as MCP tools inside an agent session. CI has
neither, and even quota-free `curl` against CourtListener is blocked by
their AWS WAF bot challenge (documented in `tools/README.md`'s
`recheck_all.py` section already, for the exact same reason). So the
watcher is split the same way `verifier/` is: deterministic pieces
(`tools/build_citation_index.py`, `watcher/scan_batch.py`,
`record_changes.py`, `report.py`, `flag_for_review.py`) run anywhere,
including CI's `--check` gate on the citation index; the real judgment
runs through the `Agent` tool following `watcher/prompt.md`, invoked
periodically by a human or a Claude Code scheduled task — not a
`ci.yml` `schedule:` trigger.

**`flag_for_review.py` never pushes or opens a PR.** The plan's own
wording — "open a draft branch or PR" — gives a local-branch reading
room, and this project's standing rule (independent of this phase) is
never to create a pull request unless a human explicitly asks for one.
An unattended scheduled job automatically opening PRs is exactly the
case that rule exists to prevent. The script creates the branch
**locally only**, with exactly one new file (the flag + evidence, never
a clause edit), and returns to the branch it started on; pushing it or
opening a PR is left as a separate, deliberate action for a human (or
an agent explicitly told to do so) to take after reading the flag.

**Citation index key granularity.** Grouping strictly by bare `url`
would have conflated unrelated citations: a single statute page (e.g.
8 U.S.C. § 1324b) is pin-cited at many different subsections across
different clauses, each a legally distinct, independently-affected
proposition — 1,958 urls in the real corpus have more than one distinct
`(case, cite)` pair attached. The index groups by `url` first (the
thing an external change is actually matched against) and keeps each
distinct `(case, cite)` pair underneath it, so two different pin-cites
sharing a page don't share a `clauseIds` list.

**Infrastructure built, no real scan run yet.** Same reasoning as Phase
4.1's 100-clause sample: an actual dry run spends a real, slow,
external-research budget, which is a separate checkpoint from building
and testing the pipeline that would run it.
