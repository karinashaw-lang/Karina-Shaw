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

## Phase 4.4: first real dry run

Before running it, fixed a real gap `watcher/scan_batch.py` had:
`index/citation_to_clauses.json` sorts by url, and leginfo.legislature.ca.gov
alone is ~73% of distinct citations but sorts late among the corpus's
hosts, so handing out the index's raw order would have given an early
batch nothing but rare agency-guidance hosts and zero leginfo or
CourtListener citations -- not a representative scan of anything.
Fixed to shuffle deterministically, seeded from the scan window, before
slicing a batch.

Ran the dry run: 100 distinct citations (81 statute, 19 case; the
window's own random seed), 2026-07-01 through 2026-10-01 ("last
quarter" relative to when this ran), split into 5 batches of 20 and
dispatched to 5 parallel `Agent`-tool workers following
`watcher/prompt.md`. All 5 completed; 4 returned a clean `[]`, 1
returned a real finding.

**The one finding:** Cal. Bus. & Prof. Code § 22757.2(a) -- the
California AI Transparency Act's AI-detection-tool requirement, cited
by clause `aitransparency_detection_tool` -- shows a current-text
update date of September 30, 2026 (confirmed via a california.public.law
mirror, which itself attributes the date to leginfo), inside the scan
window. Recorded, not yet triaged: deciding whether the clause's body
text needs a real edit, and running `flag_for_review.py` to create the
local needs-review branch, are separate steps nobody has taken yet --
recording a change and acting on it are different the same way
`verifier/`'s triage is separate from its sample report.

**A worker-output defect caught before recording, not silently
patched:** worker 2's returned JSON had the finding's `url` with an
HTML entity (`&amp;`) instead of a literal `&`, almost certainly from
copying text off a rendered web page rather than the raw citation.
`record_changes.py`'s strict url-match check against the scanned batch
caught this immediately (the entity-encoded url matched nothing in the
batch). Rather than loosening that check -- which exists specifically
to catch a worker fabricating or misattributing a result -- the one
character was corrected by hand before recording, since the batch file
itself proved unambiguously what the real url was.

**Acceptance, read literally:** "a dry run against last quarter's
changes produces a report" -- `watcher/reports/2026-10-01.md` is that
report. 100/10,431 distinct citations have been scanned; the remaining
~10,300 and whether to scan them are a separate, later decision, not
something this dry run resolves on its own (same reasoning as the
verifier's full-corpus-run question).

## Phase 4.5: citation recheck integration

Extended `tools/recheck_all.py` to be schedulable: results go to
`recheck/history.jsonl`, tagged with the run's own `checkedAt` date,
and "already done" (for resume purposes) means "already done in THIS
run," not "ever" — a container restart resuming mid-run skips what
today's run already finished, but a later scheduled run re-checks
every URL from scratch rather than skipping it forever after its first
pass. `--limit N` caps one invocation's URL count, for spreading a
full sweep across several scheduled runs. Only `--hosts statutory` is
actually schedulable unattended; `--hosts courtlistener`/`all` now
print a loud warning, since the CourtListener curl path is WAF-blocked
and always produces a false `MISMATCH` (same constraint that keeps the
Phase 4.4 watcher off a `ci.yml` schedule). `tools/recheck_findings.py`
turns the latest run's bad statuses into `recheck/findings.json`;
`tools/promotion_report.py` surfaces a dead-link/mismatch count from
it — the master plan's literal 4.5 deliverable.

**Validating this against the real corpus found two real defects in
`recheck_all.py` itself**, both corrected before trusting any of its
output, per this project's own standing rule for this script
("assume a high failure rate is this script before you assume it is
the corpus"):

1. **PDF text extraction silently failed in this session's
   environment.** `pypdf` and `pdfminer.six` were not importable under
   the `python3` this script runs as (they exist only under a
   different Python installation's site-packages in this container).
   `extract_pdf()`'s `except Exception: pass` around each extractor
   swallowed the `ImportError` the same way it would swallow a genuine
   per-PDF extraction failure, so every PDF citation (8 `courts.ca.gov`
   URLs, 52 citations) came back a false `EMPTY` — confirmed false by
   fetching one of the 8 URLs directly: a real, 254,886-byte, 17-page
   PDF, not a dead link. `pip install pypdf pdfminer.six` fixed the
   import in this environment but then crashed the whole script with
   a Rust/PyO3 panic from a native ABI conflict with the
   already-installed system `cryptography` package — worse than the
   silent failure, so that install was reverted. This is recorded as a
   known environment limitation (not a code fix made here, since
   there's no requirements-pinning setup in this project to fix it
   into), and the 52 contaminated `EMPTY` records were removed from
   `recheck/history.jsonl` before committing rather than kept as
   data — they say nothing true about the citations themselves. A
   future run from an environment with a working PDF stack should
   recheck these 8 URLs for real.
2. **leginfo's `billTextClient.xhtml` (enrolled bill text) pages
   return a Cloudflare JS bot-challenge page**, not the real content —
   confirmed by fetching one directly: a 5,888-byte `<title>Just a
   moment...</title>` page referencing `challenges.cloudflare.com`.
   That's well over the script's 500-byte EMPTY threshold, so every
   quote checked against it reported a false `MISMATCH` — 131 of them,
   across 61 distinct bill-text URLs, in the validation run. Added a
   new `BLOCKED` status (checked before the quote-match attempt, same
   "untested, not failed" reasoning as `RATE_LIMITED`) so this is
   recorded honestly instead of looking like 131 real citation
   mismatches. Extracted the per-citation classification logic into a
   standalone `classify_status()` so this exact regression — and the
   `UNRESOLVED_URL` one already in the code — has a direct,
   network-free unit test (`tests/tools/test_recheck_all_resume.py`)
   instead of only being catchable by a live run.

**The validation run itself, after both fixes**: 265 citations checked
across 150 statutory URLs (a `--limit` sample, not the full ~3,400-URL
population) — 134 `PASS`, 131 `BLOCKED` (not a finding — untested, not
failed), 0 `MISMATCH`, 0 `EMPTY`. `recheck/findings.json` and the
promotion report both correctly show 0 dead links / 0 mismatches for
this run. A full statutory sweep (and periodically re-running it on a
schedule, the way this phase's whole design is meant to support) is a
separate, later decision — same reasoning as the verifier's and
watcher's full-corpus-run questions, and this one's quicker to resume
any time since it's a deterministic curl loop, not an LLM research
task.

## Phase 5.1: plain-language search

**"The existing TF-IDF engine" the master plan refers to didn't exist
for documents** — it exists for *clauses*, built for the "read a
contract" clause-matching feature (`buildClauseIndex()`/`matchPassage()`
in `app.js`). Read literally, 5.1 would need to "use" something that
isn't there; read as intended, it's clearly asking to reuse that same
tf-idf/cosine-similarity approach for a new purpose. Built
`buildDocumentIndex()`/`searchDocuments()` as the document-level
counterpart rather than a new search implementation from scratch —
same math, same resumability pattern (indexed once at load), applied
to documents' title/description/categories/lay-terms instead of
clauses' title/body.

**Lay-term generation (`search/lay_terms.json`) was treated as content
generation, not research**, and built directly rather than through the
verifier/watcher's prompt-plus-harness split: a lay phrasing has no
external, fact-checkable answer to get right or wrong the way a
citation does, it's paraphrasing from a document's own
title/description/categories, already fully available. Dispatched to
10 parallel `Agent`-tool fork workers (74 documents each) rather than
done by hand, purely for throughput — not because it needed research
tools. Validated against `lint/advisory_phrases.json` across all
~4,170 generated phrasings: 0 hits. Manually spot-checked 50 random
entries against their real title/description for relevance and
tone — all good.

**183 of 740 documents initially fell short of the master plan's
"5 to 10" floor** (as low as 3) — caught by a full-corpus count, not
just the 50-entry spot check (which happened not to sample any of
them). Rather than accept the shortfall or pad with filler, dispatched
a second, smaller wave of parallel workers with explicit instructions
to add non-duplicate phrasings reaching the floor for exactly those
183 documents. Final distribution: 313 documents with 5, 304 with 6,
123 with 7 — every document now meets the floor.

**A concurrent-write scare, resolved cleanly:** one of the first-wave
fork workers (tasked with only its own 74-document batch) independently
noticed the other 9 batches' output files already existed on disk,
consolidated all 10 itself, and wrote directly to the real
`search/lay_terms.json` — at the same time this session was doing the
same consolidation from the same source files. Checked the file
immediately after: 740/740 entries, matching the corpus exactly, no
corruption, including the one single-entry fix that fork had made on
its own initiative. No data was lost or duplicated, but it's worth
recording as a reason to prefer one clear owner for a merge step next
time a wave of workers might independently reach for the same output
path.

**A real precision bug, found by testing the engine against the real
corpus, not assumed correct on arrival:** the query "i got fired"
ranked on "got," not "fired" — "got" happened to appear in only 8 of
740 lay-term sets (versus 37 for "fired"), so its idf weight came out
*higher* despite carrying no real signal as a common filler verb. Fixed
by adding `got`/`get`/`gets`/`getting`/`im`/`my`/`mine`/`myself` to the
shared `STOPWORDS` set used by both the clause index and the new
document index — harmless for the clause corpus's third-person contract
text, which essentially never uses first-person casual filler words,
confirmed by re-running `tools/regression.js`'s "read a contract"
check clean after the change.

**Golden search queries are verified against the live engine before
being committed, not hand-guessed.** `generate_golden_queries.js`
(not run by CI) picks ~13 documents per category, tries each one's own
lay-term phrasings against the real `searchDocuments()`, and only
keeps a (query, expectedDocId) pair once it's confirmed the expected
document actually lands in the top 3 — skipping a document entirely
rather than forcing in a query that doesn't verify. All 100 queries in
the committed fixture pass today, by construction; `golden_search.js`
(the one CI actually runs) re-checks all 100 against the live engine
on every run, so a future regression in the engine — not just a typo
in the fixture — is what a red CI run here would mean.

## Phase 5.2: "which document do I need?" intake

**Reused the search engine for ranking, rather than hand-authoring a
decision tree.** The master plan asks for "situation category, then 2
to 4 narrowing questions" that "route to a ranked list of documents."
A literal decision tree — a hand-written mapping from every possible
combination of category + narrowing answers to a specific document
list — would mean curating well over 100 cases (8 categories × up to
16 answer combinations each) by hand, with no principled way to check
any of them stayed correct as documents, lay terms, or the category
list changed later. Instead, each answer option carries a `keywords`
string; selecting one folds those keywords into a query alongside the
category name and runs it through `scoreDocuments()` — Phase 5.1's
real search-engine scoring function, restricted to that category's
documents via its new `allowedIndices` parameter. The "ranked list" a
reader sees is the same tf-idf/cosine ranking free-text search already
uses, not a second, separately-maintained ranking mechanism.

**Narrowing questions were written by hand, not generated.** Only 8
categories exist — nowhere near `lay_terms.json`'s 740-document scale
— and getting a narrowing question right (genuinely useful, grounded
in what's actually in that category, carefully neutral in wording) is
closer to the kind of editorial judgment this project reserves for
direct authorship than to bulk paraphrasing. Grounded each category's
questions in a real sample of its documents' actual titles (pulled
before writing anything), not guessed in the abstract.

**Every real path is checked for whether its narrowing questions
actually do anything**, not just whether the screen shows something.
`renderIntakeResults()` has a deliberate fallback — if the
keyword-scored search comes back empty, show the whole category rather
than nothing — which is the right UX call, but would make a trivial
"does it show results" test pass even for a narrowing question whose
keywords share no vocabulary with anything in its own category (i.e.,
a question that does nothing). `tests/search/intake_coverage.js`
instead checks the pre-fallback, keyword-scored result for every one
of the 88 real combinations across all 8 categories' flows. All 88
pass on real matches today — the hand-written keywords turned out to
be well-aligned with the real corpus on the first attempt, verified
rather than assumed.

**Extended the advisory-phrase lint and added structural validation
to `validate_corpus.py`** for both `search/lay_terms.json` and the new
`search/intake_flow.json`, rather than treating the one-time checks
already run during Phase 5.1/5.2's own build as sufficient forever: a
lay phrasing or an intake prompt/label is exactly the kind of
user-facing prose "inform, never advise" has to hold for on every
future edit, not just the day it was written. Caught a real scoping
bug in the process — `validate_corpus.py` already had a local
`import os` deep inside `main()` for the `verification/*.md` coverage
check; adding an earlier `os.path.exists()` call made Python treat
`os` as local to the whole function and crash on the earlier reference
before its original import line ever ran. Moved the import to the
module level rather than adding a second local one, which would have
just hidden the same fragility from the next person who needed `os`
earlier in the function.

## Phase 5.3: related-document suggestions

**Weighted shared signals by rarity before writing any scoring code,**
not after finding a bug. Checked the real corpus distributions first:
clause sharing is rare in absolute terms (17 of 6610 clauses are ever
reused across documents at all) so any shared clause is inherently
meaningful, but shared-field usage via `sharedFieldId` ranges from 3
documents up to 409 (`companyName`). Raw, unweighted counting would
have treated a shared `companyName` field as equally significant as a
shared field used by only 3 documents, which is exactly the kind of
false-signal bug Phase 5.1's search engine hit with the stopword "got"
outweighing "fired" — so this phase applied the same idf-weighting fix
proactively, before implementing the naive version at all, rather than
discovering the flaw in production. `idfWeight()` reuses the identical
log-scaled formula Phase 5.1 already uses for query-term weighting.

**Never considered usage telemetry**, despite the master plan listing
it as one of three possible signals ("related documents computed from
shared clauses, shared fields, and category adjacency"). This is a
static, no-backend app with no server and no analytics pipeline — there
is no usage data to compute from, and adding one to support this one
feature would be a far larger architectural change than the feature
itself justifies. The three signals actually used (shared clauses,
shared fields, category adjacency) are exactly the three the master
plan names; nothing was dropped, just nothing was invented to stand in
for telemetry that doesn't exist.

**The "often used alongside" vs. "Related documents" label decision is
a threshold on real signal strength, not a vibe.** The stronger label
only appears when at least one shown result shares a real clause or a
genuinely rare (≤10-document) field with the document being viewed —
never earned by category adjacency alone or by sharing only
near-universal fields, both of which still contribute to ranking (at
low weight) but never unlock the stronger wording on their own. This
mirrors how Phase 5.1/5.2's "never advise" principle extends past literal
recommendation language into labels that could themselves overstate
confidence: "often used alongside" is a claim about real overlap, so it
only appears when the overlap is real and specific.

**Verified full-corpus coverage against the live app before writing the
CI test**, the same way Phase 5.1's golden queries and Phase 5.2's
intake branches were verified against the real engine before being
frozen into a fixture: 740/740 documents produce at least one related
suggestion (0 empty), with both labels genuinely exercised (343 "often
used alongside," 397 "Related documents") rather than one being only
theoretically reachable. `tests/search/related_coverage.js` encodes this
as a CI gate with slack for corpus growth (≤2% empty, ≥10% floor on each
label) rather than hardcoding the exact counts, so the test stays
meaningful as documents are added rather than becoming a brittle
snapshot.

**No new free-text content needed authoring, and no new advisory-lint
coverage was needed either.** Unlike 5.1 (`lay_terms.json`) and 5.2
(`intake_flow.json`), this phase introduces no new user-facing strings
beyond the two fixed, master-plan-specified labels — related documents
are presented using their own already-existing, already-linted titles
and descriptions. There was nothing new for `validate_corpus.py`'s
advisory lint to check.

## Phase 5.4: picker performance

**Chose pagination ("Show more") over true DOM virtualization.** The
master plan allows either ("virtualize or paginate"). Virtualization —
recycling a fixed window of DOM nodes as the list scrolls — is the
more sophisticated answer, but needs a fixed or measured row height
and scroll-position bookkeeping, and this picker's cards aren't a
fixed height (description length varies, as does whether a jurisdiction
or tier badge is present). Pagination needed none of that: render a
page, append another page on a button click, done. It's also the same
pattern this project already uses for "more than you need right now"
(`DOC_SEARCH_LIMIT = 24` caps free-text search results) rather than a
new mechanism introduced just for this. Measured why it matters before
writing it: rendering all 740 cards at once costs ~85ms in this
sandbox; a first page of 60 costs ~5ms. A real mid-range phone, slower
than this sandbox, is exactly the case the master plan names.

**Resetting to page one is keyed off "the filtered list changed," not
off time or a page counter.** `renderPicker()` — called from every
place that can change which documents match (category filter, tier
filter, tier-sort toggle, search input, initial load) — always resets
`state.pickerVisibleCount` to one page. Only the "Show more" button's
own handler extends it without resetting. This means a filter change
mid-scroll always starts the new, different list from its own
beginning, never showing "page 3" of a list that no longer applies.

**Fixed a real test assumption pagination broke, rather than loosening
the test it broke.** `tools/regression.js`'s tier check asserted
`pillCount === docCount` (every one of 740 documents gets a tier pill)
and `filteredCount === bCount` (filtering to tier B shows exactly the
382 tier-B documents) by counting `.doc-card` nodes in the DOM — both
assumptions pagination breaks on purpose, since the DOM now only ever
holds one page. Rewrote the check to verify "every document" against
`getPickerDocs()`'s full filtered list (the data-level claim that was
actually being tested) while still asserting the DOM itself is capped
at exactly `PICKER_PAGE_SIZE` — so the test now checks both the
original claim and the new pagination behavior, instead of silently
checking less than it used to.

**Set performance thresholds from this sandbox's own measured
numbers, with headroom, not from a guess.** Measured first-page render
(~5ms), full unpaginated render (~85ms), and `searchDocuments()` across
ten representative queries (under 2ms, worst case) before writing
`tests/performance/performance_budget.js`'s thresholds. The first-render
budget (50ms) sits well above the measured first-page cost but well
below the measured full-render cost, so a regression back to rendering
everything upfront fails the test even on this fast sandbox, let alone
a slower CI runner or a real phone. The search budget (100ms) is the
master plan's own number, applied as a hard ceiling since the measured
cost (under 2ms) already clears it with enormous margin — slower
device or larger future corpus would have to grow search time by
roughly 50x before this test would ever need revisiting.

## Phase 6.1: native PDF export

**Vendored pdfmake into the repo instead of loading it from a CDN.**
The one precedent for an external script (`@supabase/supabase-js`) is
explicitly optional — the app works identically if that request 404s.
PDF export is a core output path next to "Download as text" and
"Export data (JSON)," so "zero-config must keep working" applies
literally here: generating a PDF needs no network request, to any
host. Pulled the library via `npm pack pdfmake` (registry.npmjs.org
isn't blocked the way the CDN hosts this environment's network policy
covers are) and copied pdfmake's own official standalone browser build
(`build/pdfmake.min.js` + `build/vfs_fonts.js`) verbatim — not a
custom build, not hand-picked files.

**Checked pdfmake's actual font coverage against this corpus's real
text before trusting it, rather than assuming Unicode support.**
Generated a test PDF containing every non-ASCII character this corpus
actually uses (found by scanning `data/clauses.json`/`data/documents.json`
directly) and extracted it back out. Seven characters — ☐, ◻ (both
checkbox markers; ☐ alone appears 633 times, mostly in "Check one"
style drafting clauses), ‖, ‟, ℠, ⅓, Ⓜ — came back as a literal
`\u0000`, pdf.js's signature for "no glyph in this font," while every
accented letter, curly quote/apostrophe, en/em dash, and the section/
paragraph/registered-mark symbols this corpus also uses came back
correctly and needed no fix. `sanitizeForPdf()` swaps just those seven
for plain-ASCII equivalents (`☐`/`◻` → `[ ]`, `‖` → `||`, `‟` → `"`,
`℠` → `(SM)`, `⅓` → `1/3`, `Ⓜ` → `(M)`) before the text reaches
pdfmake — only in the PDF; the on-screen page, plain-text export, and
JSON export are untouched and keep every real character. Finding this
before shipping, rather than after someone opened a generated PDF and
found a null glyph in a checkbox clause, is the same "verify against
real behavior before trusting it" discipline this project has applied
at every phase (Phase 5.1's STOPWORDS bug, Phase 4.5's two false-
positive bugs) — just applied to a new kind of real behavior (font
glyph coverage) this project hadn't needed to check before.

**Did not implement tagged-PDF / PDF-UA accessibility structure,
and said so plainly rather than silently skipping it.** The master
plan allows this explicitly ("tagged PDF if the library supports it").
Checked pdfmake's documentation and source for a tagging or structure-
tree option before writing any code; found none. What's delivered
instead — real, embedded-font, selectable text (verified by actually
extracting it back out in `tests/pdf/pdf_golden.js`, not assumed) — is
a genuine, meaningful piece of PDF accessibility (a screen reader can
read selectable text; it cannot read a rasterized image), just not the
full structure-tree tagging PDF/UA calls for. `lib/README.md` and the
ARCHITECTURE.md entry both say this directly instead of letting
"embed fonts; ensure text is selectable" read as a claim of full
accessibility compliance it doesn't make.

**Built one shared content model (`buildDocumentContent()`) that both
exports render from, instead of letting `buildPdfDocDefinition()`
re-derive the same facts from `assembleDocument()` independently.**
Two formats describing one document from two independent code paths
is exactly the kind of drift this project avoids elsewhere (Phase 5.3
computing relatedness once and reusing it for both the label and the
ranking, Phase 5.1's search engine reused instead of re-implemented for
5.2's intake flow). This also made the golden test meaningfully
possible: comparing the PDF's extracted text against `buildPlainText()`
is comparing two renderings of one source, not independently checking
whether two unrelated implementations happen to agree.

**A real test-writing finding, not assumed:** per-page footers
interrupt concatenated multi-page text. A PDF's text, read in document
order, is grouped page by page; a footer sits at the bottom of each
page's content, so when a paragraph spans a page break, the next
page's continuation text comes immediately after that page's own
footer in reading order — concatenating all pages' extracted text for
a simple substring comparison would make a footer's own words appear
spliced into the middle of an unrelated sentence. This isn't lost or
corrupted content; it's a property of any paginated footer.
`tests/pdf/pdf_golden.js`'s `stripFooterLines()` removes recognizable
footer/page-number lines (known exactly, since the footer's own format
is this project's code) before comparing, and the test also separately
asserts the footer's presence (document id, generated-on date, and
"Page N of M") directly against the raw, un-stripped text — so the
test both correctly ignores the footer as a formatting artifact and
still genuinely checks that the master plan's "footer carrying a
document id and generated-on date" and "page numbers" requirements
are real, not merely assumed un-testable.

**Derived "1-page, 10-page, very long" from the live corpus's own
clause counts (shortest/median/longest), not three hardcoded document
ids.** Same reasoning as `tools/regression.js`'s category-balance and
newest-documents checks: a hardcoded id stops testing the intended
*shape* of document the moment the corpus changes around it. At the
time this was written the three were a 1-clause/1-page document, an
8-clause/6-page document, and a 20-clause/20-page document — all real,
verified page counts, not guessed.

## Phase 6.2: export polish (DOCX + sources appendix)

**Chose `docx`'s own official standalone browser build for the same
reason pdfmake's was chosen in 6.1: a real, self-contained, pre-built
file this project's no-build-step app can load with a plain `<script>`
tag.** `npm pack docx` and inspecting `dist/` turned up
`dist/index.iife.js` — a single-global (`docx`) bundle with no further
build step needed, the same shape as pdfmake's `pdfmake.min.js`.
Copied verbatim, not hand-built, same as 6.1's library.

**Generating a `.docx` needed none of Phase 6.1's font-glyph
sanitizing, and checked that rather than assuming it.** A `.docx`'s
body is plain XML text (`word/document.xml`); Word supplies whatever
installed font covers a given character when the file is opened,
unlike a PDF's embedded, subsetted font. Ran the same corpus-wide
character scan from Phase 6.1 against a generated `.docx` containing
the heaviest real test case (the 633-occurrence checkbox marker, ☐)
and extracted it back out clean — no `sanitizeForPdf()`-style fallback
needed here. `buildDocxDocument()` passes every string through
untouched.

**A real test-writing finding: `mammoth` (the library chosen to
extract a generated `.docx`'s text back out, for the golden test)
doesn't read header/footer parts at all — by design, since it
converts the main document body.** First pass of
`tests/docx/docx_golden.js` reported 0 missing plain-text lines for
every document (correct) but also failed every footer assertion
(because the assertion was checking mammoth's extracted body text,
which structurally never contains footer content). Verified directly,
not assumed, that the footer really was in the generated file by
unzipping it and reading `word/footer1.xml` — it was. Added `jszip` as
a second new devDependency specifically to read that part directly,
rather than dropping the footer check or claiming "not testable."

**The "sources and checked-dates appendix" is one new piece of shared
logic (`buildSourcesAppendix()`), used identically by all four
exports, not four separate re-derivations of the same list.** Same
reasoning as `buildDocumentContent()` in 6.1: one function answering
"what are this document's sources" that `buildPlainText()`,
`buildPdfDocDefinition()`, `buildDocxDocument()`, and the JSON export
handler all call, rather than four places that could each decide
differently what counts as a citation worth listing.

**Off by default, in every export, deliberately.** The master plan
calls it an "appendix option," not a requirement — and defaulting it
on would have meant re-verifying (and likely updating) `golden.js`'s
frozen `buildPlainText()` fixture across all 740 documents for a
feature that's explicitly optional. Defaulting
`state.includeSourcesAppendix` to `false` means every export keeps
its pre-6.2 shape until a reader deliberately checks the box — verified
directly: `golden.js` still passes against its existing fixture with
zero changes needed, and both new golden test files assert the
appendix heading does *not* leak into a document where the toggle
wasn't turned on, not just that it appears when it was.

## Phase 6.3: document lifecycle and versioning

**`schemaVersion` names the saved-entry record's own shape, not the
corpus's or a document's field schema.** The master plan lists
`schemaVersion` and `corpusVersion` side by side without defining the
first one, and this project has no other existing notion of a
"schema version" to borrow from field.schema.json or
shared_field.schema.json. The only thing that's actually useful to
version-stamp here, for a future migration to check, is the shape of
the JSON object stored in `localStorage` itself — so `SCHEMA_VERSION`
is a single constant bumped only when that record's own fields
change, independent of anything about the corpus.

**Stored more per clause than the master plan's literal minimum
("clause ids and clause checkedDates"), because the next sentence of
the same requirement — "a diff of what changed" — is undeliverable
without it.** By the time a clause drifts, the corpus's old state is
gone (nothing else in this repo keeps a general history of every
clause edit); the only place "what it looked like when this document
was generated" can live is on the document record itself. So
`buildClauseSnapshot()` keeps each used clause's title, kind, status,
checkedDate, body, gap, and citations — not just id and checkedDate —
and `corpusVersion` is still computed and stored exactly as the plan
describes (a single content hash over that snapshot), for the literal
requirement; `detectDrift()` just doesn't rely on the hash alone to
describe a change, since a hash can only say *that* something
differs, never *what*.

**Chose a plain FNV-1a string hash over anything cryptographic.**
`corpusVersion`'s only job is to change when the input changes and
stay stable when it doesn't — there's no adversary to resist, no
signature to verify, so pulling in a hashing library (or the Web
Crypto API's async `SubtleCrypto`, which would turn a currently
synchronous save into an async one for no real benefit) would be
solving a problem that doesn't exist here.

**Built a real word-level diff (classic LCS over whitespace-split
tokens) rather than just showing old-text-then-new-text.** The master
plan says "a diff of what changed," which a simple before/after
display technically shows but doesn't actually highlight — a reader
would have to spot the difference themselves in two paragraphs of
legal drafting prose. `diffWords()` is a few dozen lines and cheap
even for the corpus's longest clauses (at most a few hundred words,
so the O(n·m) table it builds is trivial), and it's what the banner
in `renderLibrary()` actually renders, as real `<ins>`/`<del>` markup.

**"Regenerate" turns out to do less than it sounds like, once the
existing render path is understood, and that's correct rather than a
shortcut.** `renderOutput()`, `buildPlainText()`, and every export
already always recompute from `state.clauses` (live) plus the entry's
stored `answers` — nothing about a saved document's displayed content
was ever frozen before this phase, so there is no "stale rendering" to
fix. The only thing that *was* frozen, and needed refreshing, is
`detectDrift()`'s comparison baseline. Realizing this kept
`regenerateLibraryEntry()` to exactly that: replace
`clauseSnapshots`/`corpusVersion`/`schemaVersion`, touch nothing else
— which is also exactly what "preserves inputs" asks for, verified
directly in `tests/library/versioning.js` (the stored `answers` object
is checked byte-for-byte identical before and after regenerating).

**Restoring a prior version keeps what it replaces, rather than
discarding it.** "Keep prior versions... and allow restore" could have
meant a one-way pop (restore removes the version from history once
it's back in use), but that would mean a restore immediately followed
by another corpus change could silently lose the version that was
current a moment ago. `restoreLibraryVersion()` instead pushes
whatever was current onto `versions` before replacing it with the
target — version history only ever grows by one per regenerate-or-
restore action, never shrinks, which is the more conservative reading
of "keep."

**An entry saved before this phase has no `clauseSnapshots` at all,
and `detectDrift()` says so by reporting no drift, not by guessing.**
There's no way to know whether a pre-6.3 saved document's clauses have
since changed, because nothing was ever captured to compare against —
reporting a false "no changes" would overclaim certainty, but so would
inventing a generic "we can't tell" banner the master plan never asked
for. Silently reporting zero drift for these is the same backward-
compatibility stance already used elsewhere for an optional field
added after other data already existed (an undated tier falling back
to `'C'`, a document with no signature simply not rendering one).

## Phase 6.4: filing and next-steps packets (pilot scope)

**Asked the user how to scope this before writing anything, rather
than guessing or quietly doing less than asked.** Every phase before
this one built app logic on top of corpus content this project had
already verified. 6.4's full scope asks for new sourced content —
real California SOS/FTB/county-recorder/court-forms citations — across
potentially dozens of documents in four categories, plus a separate,
heavier sub-requirement (pre-filled official government forms with a
verified field mapping and a test per field) that's its own
undertaking before a line of code is written. Fabricating any of that
would violate this project's one load-bearing rule, and guessing at
the right scope unilaterally risked either wildly over-committing or
under-delivering relative to what was actually wanted. Presented the
real tradeoff (infrastructure + a small real pilot vs. zero content
vs. a full multi-category research effort vs. skipping the phase) and
built to the answer, rather than picking one silently.

**Found the pilot's entire source material already verified elsewhere
in this corpus, and reused it instead of fetching anything new.**
Before treating this as new research, checked whether
`llc_articles_of_organization` or any of its sibling documents already
covered the relevant rules — they did:
`llc_articles_statement_of_information`/`llc_articles_annual_tax` (on
the pilot document itself) and `statement_of_information`'s own
clauses, all `status: verified` with real checkedDates from the prior
corpus-build work. Reusing already-checked facts in a new structure is
categorically different from, and far safer than, fetching and
verifying new ones under time pressure — and it meant the pilot could
be built with zero new verification risk while still being completely
real, not a placeholder.

**Didn't compute a due date for the $800 annual LLC tax, even though a
reminder for it would have been the more complete-looking feature.**
The statutory due date (15th day of the fourth month of the LLC's
*taxable year*) depends on the LLC's own elected taxable year, which
this document doesn't collect — approximating it from the filing date
alone would silently assume a calendar-year election that isn't always
true, which is exactly the kind of invented precision this project's
"state facts only" rule exists to prevent. The step still appears,
fully cited, with its body stating plainly why no reminder is offered
for it — the honest version of "no computable date," not a missing
feature or a silently wrong one.

**Added `articlesFiledDate` as a new, optional field — not required —
on the existing `llc_articles_of_organization` document**, since
nothing in its schema previously collected any date and a next-steps
reminder needs one. Optional because a person drafting these articles
before actually filing them has no true answer yet; the reminder
degrades to a plain, factual "wasn't entered above" note rather than
blocking the wizard or inventing a date. The field is never
substituted into any clause body (an LLC's articles don't need to
state when they were filed, inside the filing itself) — extended
`validate_corpus.py`'s existing "declares fields nothing substitutes
or conditions on" check to also recognize a `filing/next_steps.json`
reminder's `dateFieldId` as a real use, the same way it already
recognizes a field gating a `showIf`/`includeIf`, rather than either
wrongly flagging the field as dead or leaving a typo'd reference
silently unchecked.

**Built a real RFC 5545 calendar file, not a bare date string, and
verified it by extracting it back out in the test, not by inspecting
the generation code and assuming it's right.** `tests/filing/next_steps.js`
downloads the actual `.ics` the
real "Add to calendar" button produces and checks its `DTSTART`
matches the computed due date, its `DESCRIPTION` contains the rule's
own citation (case, cite, and URL — the master plan's "with the
rule's citation shown"), and it uses CRLF line terminators per the
spec — the same "exercise the real render path, verify by extracting
real output" discipline `tests/pdf/pdf_golden.js`/`tests/docx/docx_golden.js`
already established for the PDF/.docx exports.

**Extended all three prose exports (plain text, PDF, .docx) through
the same shared `buildDocumentContent()`/`resolveNextSteps()` path
Phase 6.1/6.2 already built, rather than writing the next-steps
section four separate times.** This did mean regenerating one entry
in `tests/golden/golden.js`'s frozen fixture (`llc_articles_of_organization`,
via its own `--update` mode) — checked the diff directly before
trusting it, and it changed exactly the one document this phase
touched, nothing else.

## Phase 7.1: backend foundation (orders, order_items, audit_log,
## document_versions, feedback)

**Used migrations, not manual SQL, as instructed.** All 5 tables were
created with `mcp__Supabase__apply_migration`, each in its own named,
tracked migration (`create_orders_and_order_items`,
`create_audit_log`, `create_document_versions`, `create_feedback`,
plus `track_set_updated_at_function`, which re-registers the
pre-existing trigger function under migration tracking so it's no
longer the one untracked piece of the schema). Confirmed afterward via
`list_migrations` that all 5 are recorded.

**Designed RLS per table's actual trust model, not a copy-paste of
`agreements`' full CRUD.** `agreements` is user-authored content, so a
user can do anything to their own row. The new tables aren't:
- `orders`/`order_items` have **no insert/update/delete policy for
  anyone** — only a select-for-owner policy. A client that could
  insert its own "paid" order would own its own invoicing. These rows
  can only ever be written by something with elevated privilege (a
  future Phase 7.2 service-role edge function, once Stripe webhooks
  exist); until then the tables exist with real RLS but no write path
  from the anon-key client at all, which is the point.
- `audit_log` has select+insert for the owner, **no update/delete for
  anyone** — an editable or deletable audit trail isn't one. Its
  schema has no column for the user's field answers at all (per the
  master plan's 7.3 instruction, applied a phase early since the
  table exists now): only `document_id`, `corpus_version`,
  `clause_ids`, `clause_checked_dates`, `output_hash`.
- `document_versions` has select+insert for the owner, **no update**
  (mirrors Phase 6.3's own client-side rule — a pushed version
  snapshot is never mutated in place) but does allow owner-delete, to
  match the client-side version-history feature actually being able
  to prune old versions.
- `feedback` has select+insert for the owner, **no update/delete for
  anyone** — a submitted record is fixed. Self-delete would be
  reasonable future work but isn't in the 7.1 instruction.

`order_items.user_id` is denormalized from its parent `orders.user_id`
rather than requiring an `exists (select 1 from orders ...)` subquery
in its own RLS policy — a flat equality check is simpler to audit than
a cross-table one, consistent with how `agreements` was already kept
simple. All 5 tables use `id uuid primary key default
gen_random_uuid()`, unlike `agreements`' client-generated `id text` —
none of these have an existing client-side id scheme to mirror, and a
financial/audit record in particular shouldn't have a client-chosen
primary key.

**Used `(select auth.uid())`, not plain `auth.uid()`, in every new
policy from the start.** The 2026-10-14/15 advisor run flagged
`agreements`' 4 policies for calling `auth.uid()` unwrapped (Postgres
re-evaluates it per row instead of once per query) and deferred fixing
it "before Phase 7.1 adds more tables, since the same pattern would
otherwise just get copied forward." Confirmed via `get_advisors`
(performance) after this phase's migrations: `auth_rls_initplan` still
only fires on `agreements`' original 4 policies, not on any of the 25
new ones.

**The `agreements` fix itself is still blocked, for a new reason that
generalizes the 2026-10-14 finding.** Tried
`fix_agreements_rls_initplan` (4× `drop policy if exists ... create
policy ...`, to switch `agreements` to the same `(select auth.uid())`
form) via `apply_migration` — **timed out at 60s**, the identical
symptom DECISIONS.md's first entry documented for
DELETE/TRUNCATE/DROP TABLE. This confirms the destructive-SQL
confirmation gate also covers `DROP POLICY`, not just
data/table-destroying statements — a broader scope than previously
known. Checked for damage the same way as before (the standard here
now): `get_advisors` showed no new finding, `execute_sql` against
`pg_policies` showed all 4 original policies unchanged in their
original plain-`auth.uid()` form, `list_migrations` never recorded the
attempt. Nothing broke; the migration cleanly never ran. Re-deferred
to the project owner, who can run this directly in the dashboard SQL
editor (where the confirmation prompt this session never receives
actually surfaces):

```sql
drop policy if exists "Users can view their own agreements" on public.agreements;
create policy "Users can view their own agreements" on public.agreements
  for select using ((select auth.uid()) = user_id);
drop policy if exists "Users can insert their own agreements" on public.agreements;
create policy "Users can insert their own agreements" on public.agreements
  for insert with check ((select auth.uid()) = user_id);
drop policy if exists "Users can update their own agreements" on public.agreements;
create policy "Users can update their own agreements" on public.agreements
  for update using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "Users can delete their own agreements" on public.agreements;
create policy "Users can delete their own agreements" on public.agreements
  for delete using ((select auth.uid()) = user_id);
```

**`supabase/schema.sql` now documents only `agreements`; new tables
are migration-only.** Decided, not left ambiguous: the master plan's
own 7.1 instruction is "using Supabase migrations (not manual SQL)",
and hand-copying the 5 new tables' `create table`/policy statements
into `schema.sql` too would immediately start drifting from whatever
the migrations actually say the moment either one is edited without
the other. `schema.sql` keeps its original, narrower meaning — the
one table that predates migration tooling — with a header comment
added pointing at `supabase/migrations/` as the source of truth going
forward. Said plainly in the same comment so a future reader isn't
left to guess why 5 tables aren't there.

**No `supabase/migrations/*.sql` files exist in this repo, and this
phase did not create them.** `apply_migration` pushes directly to the
live project and records the migration in Postgres's own
`supabase_migrations.schema_migrations` table (visible via
`list_migrations`) — it does not write a local file, and this
session's toolset is the Supabase MCP server, not the Supabase CLI, so
there's no `supabase db pull` available to generate matching local
files from the live history. Writing them by hand after the fact from
memory was considered and rejected: a hand-reconstructed "migration
file" that quietly drifted from the exact SQL actually applied would
be worse than no local file at all, since it would look authoritative
without being verified against the live schema. The live project's own
migration history is the real source of truth for now; a project owner
with CLI access running `supabase db pull` against
`impurvwwjdgurbjbnydu` would be the correct way to backfill
`supabase/migrations/` properly, and is noted here as a real gap, not
silently papered over.

**Adversarial RLS testing — pivoted from a live anon-key client to
direct Postgres role/claim impersonation, for a known, pre-existing
reason, not a new workaround.** The 7.1 instruction's exact words are
to test this "against the live anon-key client," so a Node script
using `@supabase/supabase-js` (added as a devDependency, then removed
again once the script was deleted — see below) was written first,
creating two real users via `auth.signUp()`. It could not run:
every call to `impurvwwjdgurbjbnydu.supabase.co` from this sandbox's
shell gets a `403` from the egress proxy (`connect_rejected`, "host
not allowed for this session" — confirmed via
`curl .../__agentproxy/status`, not a transient failure). This is the
same constraint BASELINE.md already recorded for Phase 1.3 ("this
sandbox's egress policy blocks the live project's domain") — not a new
discovery, and per this environment's own documented policy, a 403
policy denial gets reported, not retried or routed around. Deleted the
unexecuted script rather than commit Node code that was never run even
once and so could easily have its own bugs no one would catch.

Switched to the technique BASELINE.md's Phase 1.3 line already named
as the fallback — "RLS is verified directly against Postgres" — using
Supabase/Postgres's own documented method for testing RLS without a
live client: `set local role authenticated;` plus `select
set_config('request.jwt.claim.sub', '<uuid>', true);` inside one
`execute_sql` call, which makes `auth.uid()` (defined in terms of that
same setting) return the chosen id for the rest of that implicit
transaction. This tests the exact same thing the instruction cares
about — does the live, deployed policy actually allow or deny a given
`auth.uid()` — with no HTTP/auth-session layer in between to introduce
unrelated failure modes. Reused the two leftover test users from the
2026-10-14 session (`groundtruth-rls-test-a@example.com`,
id `db274ca7-8c85-46cf-8243-8d1dcd5e570d`; `...-b@example.com`, id
`6711c26a-6876-4da2-b63d-88d57a5170db`) rather than creating new ones —
this technique needs their real uuids, never their passwords, so the
existing leftover rows were enough and no new auth debris was added.

**Every check actually run and its real result** (via `execute_sql`,
each a fresh `set local role authenticated` + `set_config` + the
operation under test, so no result below is inferred or assumed):

| Table | Owner insert | Cross-user select | Cross-user/forged insert | Owner (or cross-user) update |
|---|---|---|---|---|
| `agreements` | succeeded | denied (0 rows) | denied (`42501`) | owner update succeeded; cross-user update denied (0 rows, confirmed by re-reading the row's title unchanged) |
| `document_versions` | succeeded | denied (0 rows) | denied (`42501`) | owner update denied (0 rows — no update policy exists at all) |
| `audit_log` | succeeded | denied (0 rows) | denied (`42501`) | owner update denied (0 rows — no update policy exists at all) |
| `feedback` | succeeded | denied (0 rows) | denied (`42501`) | owner update denied (0 rows — no update policy exists at all) |
| `orders` | denied (`42501`) — no insert policy for anyone; row was seeded via the privileged default role instead, simulating a future service-role edge function | denied (0 rows) | n/a | owner update denied (0 rows — no update policy exists at all) |
| `order_items` | denied (`42501`), same seeding approach | denied (0 rows) | — | not separately re-tested; identical empty policy set to `orders`, same migration pattern |

**DELETE was not empirically tested on any table, for the same
destructive-SQL-gate reason documented since 2026-10-14 — not skipped,
blocked.** Every `delete` statement sent through `execute_sql` in this
session (including a harmless cross-user attempt expected to affect 0
rows) hit the identical 60s confirmation timeout, confirmed to roll
back cleanly with zero side effects each time. Rather than retry a
path already proven not to work, this is handled two ways instead of
one: (1) a structural argument, not a guess — Postgres governs DELETE
with the same `USING` clause as UPDATE and SELECT for a given policy,
and UPDATE/SELECT denial was directly verified against the live
project for every table above, so DELETE denial follows from the same
mechanism, not from an assumption specific to this schema; (2) exact
SQL for the project owner to run in the dashboard SQL editor, if they
want to see it happen directly rather than take the structural
argument on its own:

```sql
-- as the owner (db274ca7-...), expect each to succeed only where noted:
set local role authenticated;
select set_config('request.jwt.claim.sub', 'db274ca7-8c85-46cf-8243-8d1dcd5e570d', true);
delete from public.agreements where id = 'rls-adv-agreement-1';         -- should succeed (owner, full CRUD)
delete from public.document_versions where id = 'dd916d94-08b5-497b-9f21-183958fd7d1d'; -- should succeed (owner-delete is allowed here)
delete from public.audit_log where id = '1431c533-0c52-49d8-90c4-d2601d6d0826';          -- should affect 0 rows (append-only, no delete policy)
delete from public.feedback where id = 'beafc6e7-f17d-4c12-8247-892c940aa87d';           -- should affect 0 rows (no delete policy)
-- as the other user (6711c26a-...), expect every one of these to affect 0 rows:
select set_config('request.jwt.claim.sub', '6711c26a-6876-4da2-b63d-88d57a5170db', true);
delete from public.orders where id = '57db32b5-8718-4c92-95bf-5641376fd7b1';
delete from public.order_items where id = '40ce05c7-fa71-4936-bba5-204bd5d9cf32';
```

**Test debris left behind in the live project, for the project owner
to clean up (same situation as the 2026-10-14 entry, now with more
rows; no new auth users were created this time).** All of it is
harmless placeholder data with no real user impact:

```sql
delete from public.agreements where id = 'rls-adv-agreement-1';
delete from public.document_versions where id = 'dd916d94-08b5-497b-9f21-183958fd7d1d';
-- audit_log, feedback, orders, and order_items have no owner-delete path at all
-- (by design — see above), so these four rows can only be removed as the
-- project owner, outside RLS entirely, e.g. via the dashboard's table editor
-- or a service-role connection:
delete from public.audit_log where id = '1431c533-0c52-49d8-90c4-d2601d6d0826';
delete from public.feedback where id = 'beafc6e7-f17d-4c12-8247-892c940aa87d';
delete from public.order_items where id = '40ce05c7-fa71-4936-bba5-204bd5d9cf32';
delete from public.orders where id = '57db32b5-8718-4c92-95bf-5641376fd7b1';
```

**Other advisor findings after this phase's migrations, both
pre-existing and already documented, neither new:** `unused_index`
(info) now also fires on the 7 new indexes this phase's migrations
created, for the same reason as `agreements_user_id_idx` in the
2026-10-14 entry — expected and harmless at zero real rows.
`auth_leaked_password_protection` (WARN) is unchanged and still not
SQL-reachable from this session's tools; still the project owner's to
toggle in the dashboard.

**Not touched this pass, per the explicit scoping instruction:**
Stripe/payments (7.2), the rest of the audit trail beyond the table
existing (7.3 — a viewable/exportable log UI is still unbuilt), account
basics (7.4), e-signature (7.5). `@supabase/supabase-js` was installed
for the adversarial test script above, then removed again
(`npm uninstall`) once that script was deleted unexecuted — no trace of
it left in `package.json`. The shipped app still talks to Supabase only
via the plain `fetch`-based REST/Auth calls `app.js` already had;
nothing in this phase changed that.

## Phase 7.2: skipped, by the user's own explicit choice

Asked directly whether to (a) get real Stripe test keys, (b) write the
edge function/webhook code without being able to deploy or verify it
against real Stripe, or (c) skip this phase and keep going. The user
chose (c). No Stripe-related code, `config/pricing.json`, or edge
function exists from this pass. Continued straight to 7.3.

## Phase 7.3: audit trail (log + viewer/export; table itself was
## already built in 7.1)

**Logs once, at the moment a document is first generated, not again on
regenerate.** `addToLibrary()` (app.js) is the one call site that
creates a new saved document; `account.js`'s existing wrap-not-replace
pattern around it (the same one that already syncs to `agreements`)
now also writes one `audit_log` row, only when signed in — there's no
server-side anything for a signed-out user, so there's nowhere to log
to, consistent with this app's "fully functional without an account"
architecture. `regenerateLibraryEntry()` (Phase 6.3) refreshes an
*existing* saved document's drift baseline; it isn't a new generation
event, so it isn't logged again — recorded as a real choice, not left
ambiguous, since the master plan's wording ("per generated document")
doesn't force a reading that includes a refresh of something already
logged once.

**Never logs field answers, by construction, not just by discipline.**
The `audit_log` table (Phase 7.1) has no column that could even hold
them. What's written: `document_id`, `corpus_version` (already
computed by Phase 6.3's `buildClauseSnapshot()`), `clause_ids` and
`clause_checked_dates` (derived from the same `clauseSnapshots` that
already exist on the saved entry — nothing new computed), and
`output_hash` — a fingerprint of the actual rendered plain-text output
(`hashString(buildPlainText())`, the same non-cryptographic FNV-1a hash
Phase 6.3 already uses for `corpusVersion`, reused rather than adding a
second hashing scheme for the same purpose).

**Viewer + export added to the existing Account screen, not a new
screen.** The log only exists for a signed-in user, and the Account
screen was already the one place that distinguishes signed-in from
not; a separate "Activity log" screen would need its own signed-out
state to handle for no real benefit. Fetches fresh from `audit_log`
each time Account is opened (no local cache to keep in sync with the
server) and offers "Export log as JSON" — a plain client-side
`Blob`/`URL.createObjectURL` download of exactly the rows just
fetched, the same download mechanism the app already uses for PDF/.docx/
raw-JSON document exports, not a new one.

**Not tested by the browser gate suite, for the same already-documented
reason the rest of `account.js` isn't** — this sandbox's egress policy
blocks the live Supabase domain (BASELINE.md, Phase 1.3), and there's
no config.js in CI either, so `supabaseConfigured()` is false in every
environment this suite actually runs in and the new code never
executes there. **Extended `tests/auth_roundtrip.js` instead** — the
file this project already uses for exactly this situation (a real HTTP
round trip against Supabase Auth/PostgREST, written to be run from an
unrestricted machine, no-ops cleanly here) — adding the same RLS matrix
already verified at the SQL level in the Phase 7.1 entry above, but now
over real HTTP for all 5 new tables, closing the gap that entry's
`agreements`-only coverage left open. In retrospect this is also the
pattern the Phase 7.1 adversarial test should have extended from the
start, rather than reaching for a new `@supabase/supabase-js`-based
script that had to be written and then deleted once the same network
block was discovered the hard way a second time.

## Phase 7.4: account basics (recovery note, sessions, data export,
## account deletion) — deferred E2E encryption

**Passwordless recovery is a factual statement, not a flow, because
there's no password to reset.** Added one line to the sign-in form:
losing access to the email address means losing access to the synced
account, full stop — nothing in `account.js` or Supabase changes this,
so the honest thing is to say so plainly rather than design a
"recovery" UI around a mechanism (password reset) this app doesn't
have. The local-only "My Documents" copy is unaffected either way,
which the same note says.

**Session revocation needed no new backend at all.** `signOut({scope:
'others'})` is a documented capability of the plain anon-key client,
callable by a user on their own session with no elevated privilege —
added as a button in the new "Sessions" section of the Account screen.

**Session listing needed a real edge function, for a reason specific
to this table, not a general rule.** `auth.sessions` isn't reachable
through PostgREST at any privilege level (anon or service-role) —
Supabase's REST API only exposes the `public` schema, and `auth` isn't
in it. A direct Postgres connection is the only way to read it, so
`supabase/functions/list-sessions` uses the `SUPABASE_DB_URL` every
edge function gets by default (the `postgres` npm driver, standard for
this kind of direct-DB access in a Deno function) rather than going
through `supabase-js`. The caller's identity is established by
verifying their own access token with `auth.getUser()` against the
Auth server — not by trusting a user id the client could claim to be
anyone's; the token's `session_id` claim (already verified, just read
a second time) marks which row is "this device."

**Data export needed no edge function either.** Every table a signed-in
user can read is already readable through their own select policy
(Phase 7.1) — `fetchAllUserData()` just fetches from all 6 tables plus
the browser-only `loadLibrary()` copy and bundles them, the same
`Blob`/`createObjectURL` download pattern the per-document JSON export
in `app.js` already uses.

**Account deletion needed an edge function because deleting a row from
`auth.users` is admin-only — no self-service path exists for a user to
delete their own auth record with just the anon key.** Checked, rather
than assumed, that this is otherwise sufficient on its own:
`pg_constraint` confirms every one of the 6 tables' `user_id` columns
is `references auth.users(id) on delete cascade`, so
`supabase/functions/delete-account` deleting the auth user via
`auth.admin.deleteUser()` (service role) removes every row that user
ever wrote in one step — no separate per-table deletes needed, and
none are done. There's no file storage in this project (no Supabase
Storage bucket exists), so the master plan's "removes rows, versions,
**and files**" is fully covered by rows alone here; noted rather than
silently assumed equivalent. A typed `DELETE` confirmation (not a
single click, not a native `confirm()` dialog) gates the button, and
the deletion receipt (what was deleted, when, row counts per table) is
built from a fetch that runs *before* calling the edge function, since
there's nothing left to query — and no session left to be signed out
of — once the account is actually gone.

**Neither edge function was invoked from this sandbox, for the same
reason `tests/auth_roundtrip.js` already can't be run here.** This
sandbox's egress policy blocks `impurvwwjdgurbjbnydu.supabase.co`
entirely (Phase 7.1/7.3's entries above). What *was* verified from
here: both functions deployed successfully (`ACTIVE`, confirmed via
the deploy response) and passed `get_advisors` with no new finding;
the `list-sessions` function's exact SQL was run directly via
`execute_sql` against the real `auth.sessions` table and returned
without error (empty result, since no real browser session exists for
the SQL-impersonation test users — but the query itself, its column
names, and the `ip::text` cast are all confirmed valid against the
live schema, not guessed). Extended `tests/auth_roundtrip.js` with
real HTTP calls to both functions (`list-sessions` for both test
users, confirming the current-session flag and that neither user's
session ids leak to the other; `delete-account` for user A, then
confirming the cascade actually removed A's `agreements` row rather
than trusting the function's own "deleted: true" response) — unrun
from here, run manually, exactly like the rest of that file.

**End-to-end encryption (the one line in 7.4 the master plan itself
marks "optional," unlike every other imperative "Add:" in the same
section) is deliberately not built this pass.** Everything else in 7.4
is now real and working end-to-end (session revoke is live and
testable right now; listing/export/deletion are deployed and
SQL/HTTP-verified per above). A passphrase-derived WebCrypto scheme
touches every place a document's answers get synced or read back
(`account.js`'s sync/merge paths, the export above, the audit-log
write) and is the one piece of this phase where getting a subtle
detail wrong (salt handling, key derivation parameters, where
plaintext can leak) has real security consequences — it deserves a
pass of its own rather than being the last thing squeezed into a
session that's already moving on to 7.5 and the much larger Phase
8-11 backlog. Recorded here as a conscious deferral, not silently
dropped; `ROADMAP.md` (Phase 11) is the right place to scope it
properly when it's actually taken up.

## Phase 7.5: e-signature and sharing

**Two new tables, both owner-select-only from the anon key, written
only by two public (no-session) edge functions.** `document_shares`
freezes exactly what Phase 6.3 already freezes onto a saved library
entry (`clauseSnapshots`, `answers`, `corpusVersion`) onto the share
row at creation time, plus a random token and an `expires_at` — so a
later edit to the saved document, or a corpus update, never
retroactively changes what a signer already looked at or signed.
`document_signatures` has `owner_id` denormalized from the parent
share (same reasoning as `order_items.user_id` in Phase 7.1) so its
one policy stays a flat equality check. Verified directly, not
assumed: owner insert/select on `document_shares` succeeds; a second
user's select of it returns zero rows; a second user's insert
claiming to own it is rejected (`42501`); **and an insert into
`document_signatures` is rejected for every role, including the
owner** — not even the document's own owner can write a signature row
directly, which is the whole point: a signing record a client could
fabricate wouldn't be one.

**The signer has no Supabase session, by design — not an oversight
that needs patching later.** Requiring an account to sign a document
someone sent you would defeat the point of a share link. This is why
`document_shares`/`document_signatures` have *no* RLS policy at all
for an anonymous or even cross-owner reader: there's no safe way to
write "the bearer of this token" as an RLS `USING` clause without
exposing the token to a timing or enumeration side channel, so the
only path in is two edge functions —
`supabase/functions/share-view` (GET, returns the frozen document plus
any existing signature) and `supabase/functions/share-sign` (POST,
records exactly one signature, rejecting a second attempt on the same
share with `409` rather than overwriting it) — both deployed with
`verify_jwt: false`, since there's no JWT to verify. Every other edge
function this project has (`list-sessions`, `delete-account`) keeps
`verify_jwt: true`; this pair is a deliberate, narrow exception, not a
general relaxation.

**A second, genuinely standalone page (`sign.html`/`sign.js`), not a
new screen inside the main app.** A signer clicking a link has no
account and no reason to download `data/documents.json`/`clauses.json`
(the whole corpus) just to see the one document shared with them.
`sign.js` duplicates `substitute()` from `app.js` (six pure lines)
rather than loading `app.js` to get it — pulling in the full app would
defeat the point of keeping this page light. Every network call in it
is wrapped so a thrown fetch (not just a non-2xx response) becomes the
same plain on-page message instead of a silently stuck "Loading…" —
checked by intentionally never mocking the network in one of this
phase's own test cases and confirming the page still says something
useful.

**This is the one piece of Phase 7.1/7.3/7.4/7.5's Supabase-shaped work
that got a real, run-right-now browser test, and it's worth saying
why the others didn't.** `account.js` talks to Supabase through the
`supabase-js` client; `sign.js` talks to it through plain `fetch()` to
exactly two URLs. That's a small enough, stable enough surface that
`page.route()` can stand in for the live edge functions convincingly —
`tests/share/sign_page.js` (14 checks, wired into CI) drives the real
`sign.html`/`sign.js` against scripted `share-view`/`share-sign`
responses and checks the actual rendered DOM: the no-token message,
the not-configured message, an invalid token's 404, real `{{field}}`
substitution into real clause text, the signing-form-vs-already-signed
switch, a full typed-signature submission reaching the real submit
handler, and a `409` on a second signing attempt surfacing the
server's own message. `account.js`'s equivalent surface (session
listing, data export, account deletion, share creation) stays
unverified from this sandbox for the reason already on record
(BASELINE.md, Phase 1.3) — the `supabase-js` client itself would need
mocking, not just two URLs, which is a bigger and more fragile stub to
build and trust than this page's genuinely small fetch surface
justified building here.

**The sealed PDF reuses `buildPdfDocDefinition()` rather than a second
PDF builder.** Gave it two optional parameters, `content` and
`certificate`, both defaulting to the existing zero-arg behavior
(`content = buildDocumentContent()`, `certificate = null`) — confirmed
`tests/pdf/pdf_golden.js` still passes byte-for-byte, so every PDF this
function has ever produced is unaffected. `buildDocumentContentFromSnapshot()`
builds the same shape `buildDocumentContent()` returns, but from a
frozen share's `clauseSnapshots`/`answers` instead of live `state` —
`jurisdictionNotice`/`conditional`/`nextSteps` are left empty rather
than guessed, since recomputing them needs the live document's
`clauseOrder`/fields that a frozen share doesn't carry, and inventing
them from a snapshot would be exactly the kind of fabricated content
this project doesn't do. The certificate page itself (signer, signed-at,
link created/expires, a `hashString()` fingerprint of the frozen
clauses+answers — reusing the same FNV-1a function Phase 6.3/7.3
already use rather than adding a second hashing scheme) carries the
same "not a certified e-signature service" line the existing local
signature feature already uses, word for word where it still applies.

**Revoking an unsigned share is a delete, not a status flag** — Owners
can delete their own `document_shares` row (no `document_signatures`
row exists yet to cascade), ending the link immediately rather than
waiting out its expiry. A signed share has nothing to revoke; the
signing audit page offers "Download sealed PDF" for those instead.

**Not invoked from this sandbox**, same reason as every edge function
in this project: the egress block on this project's own domain. What
*was* verified from here: both functions deploy `ACTIVE`; `get_advisors`
shows no new finding; the RLS matrix above was run directly via
`execute_sql` role/claim impersonation; `tests/auth_roundtrip.js` was
extended with a full real-HTTP round trip (create a share as user A,
fetch it with **no** auth header at all via `share-view`, sign it via
`share-sign`, confirm a second signature attempt gets `409`, confirm
user B's REST reads of both tables return zero rows, confirm the share
is gone after `delete-account`'s cascade) — written, not run, for
manual verification outside this sandbox, consistent with the rest of
that file.

**Test debris left behind in the live project this pass, for the
project owner (same situation as every prior Phase 7.x entry — no new
delete path from this session for these two rows either):**

```sql
delete from public.document_shares where token in ('rls-adv-share-token');
-- document_signatures has no rows from this session's SQL-level testing
-- (every insert attempt into it was correctly rejected -- that was the
-- point) -- nothing to clean up there.
```

## Phase 8.1: privacy-friendly analytics

**`analytics_events` has no `user_id` at all, by design, not as a
privacy afterthought.** Most usage of this app has no account — tying
analytics to one would make it analytics about the minority who sign
in. The table carries only `event_type`, `document_id`, `step_id`,
`export_format`, `search_query`, `search_result_count`, and a
`client_session_id` (added below), nothing that identifies a person,
and no IP column at all — the master plan's own "no IP storage" is
true structurally, not just by convention, since there's no column to
put one in even by accident.

**Discovered, empirically, that `anon`-role INSERT needs the client to
never request the row back.** The planned policy — permissive INSERT
for everyone, no SELECT policy for anyone — looked right on paper but
failed in testing: `insert ... returning id` as `anon` raised the
*same* `42501 row-level security` error a genuinely blocked insert
would, even though the row was never written (confirmed: a plain
`insert` with no `returning` succeeded and left exactly one row;
`count(*)` after the earlier `returning`-shaped attempts confirmed
zero of those had landed). Postgres treats `RETURNING` as needing the
inserted row to be independently readable, which a table with no
SELECT policy for the inserting role can never satisfy — this is
documented Postgres/PostgREST behavior, not a bug in this table's
policy. Fixed in the one place it actually matters: `trackEvent()` in
`account.js` calls plain `.insert(...)` with no `.select()` chained,
which `supabase-js` sends as `Prefer: return=minimal` by default — no
`RETURNING`-equivalent request, no conflict. Verified directly via
`execute_sql` role impersonation before writing the client code, not
discovered the hard way after shipping it.

**Added `client_session_id` as a second migration, after noticing the
table as first designed couldn't actually deliver "slowest screens."**
The master plan's own 8.1 line asks for four things; a table with no
correlation key between a visit's own events can report aggregate
counts (completion rate, search misses) but not sequencing (how long
someone spent before moving on, which needs *this* person's step 1
timestamped after *their own* step 0, not just "some step 0 happened
and some step 1 happened"). `client_session_id` is a random id
generated into `sessionStorage` (not `localStorage` — gone when the
tab closes, regenerated the next visit, never sent anywhere outside
this one table) specifically to make that computation possible without
identifying who made the visit; it groups one visit's events, nothing
more. Caught before shipping, not after — checked what the dashboard
script could actually compute from the originally-planned columns
before writing it, rather than writing the script first and
discovering the gap in its output.

**Opt-out is a plain `localStorage` flag, checked in `trackEvent()`
before anything is sent, and fails closed.** If reading the flag
throws (storage blocked, private browsing, whatever), `trackEvent()`
treats that as opted-out rather than opted-in — "can't tell" should
default to not tracking, not the opposite. The toggle lives on the
Account screen, shown whenever cloud accounts are configured,
**signed in or not** — analytics isn't tied to an account, so gating
its toggle behind having one would be backwards.

**Instrumentation wraps the five real trigger points, not five new
ones invented for this phase.** `renderWizard()` is the one function
every "open a document" path (picker card, search result, intake
result, related-document card) already calls — wrapped once there
covers "document opened" everywhere it happens. `renderWizardStep()`
is the one function every step transition (first step, Next, Back)
already calls. `renderOutput()` is what actually assembles a finished
document. The four export buttons have no named function to wrap —
each is an anonymous click listener already in `app.js` — so `account.js`
attaches a *second* listener to the same four buttons rather than
refactoring four working export paths just to make them wrappable.
`searchDocuments()` is wrapped to log the query text and result count
— the master plan's own exception to "never record field values" is
"search query text," since a document search isn't a wizard field.

**Not tested by the browser gate suite, for the same reason the rest
of `account.js`'s Supabase-touching code isn't** (egress block, no
`config.js` in CI). `tools/analytics_report.js`'s actual aggregation
logic — the part with real risk of being wrong — is tested directly
with synthetic events
(`tests/tools/test_analytics_report.js`, 8 checks, wired into CI): a
known completion rate, a known step drop-off, `"review"` ordered last
rather than sorted as a string before numeric steps, case-folded
no-result search counting, and a verified median computed from two
same-session step pairs while a cross-document jump and a
session-less event are correctly excluded rather than guessed at.

**Test debris left behind in the live project this pass:** one
`analytics_events` row (`document_id = 'nda_test4'`, from confirming
the RETURNING/RLS interaction above) and one more
(`document_id = 'nda_test'`, confirming `client_session_id` inserts
cleanly). Harmless by construction — this table was designed to carry
nothing identifying in the first place.

```sql
delete from public.analytics_events where document_id in ('nda_test', 'nda_test4');
```

## Phase 8.2: in-app feedback, routed into the verifier findings queue

**Widened the Phase 7.1 `feedback` table rather than building a second
one.** `user_id` is now nullable (same reasoning as `analytics_events`
— most usage has no account, and "on every output screen" means every
visitor, not just signed-in ones), with a second permissive INSERT
policy (`with check (user_id is null)`) added alongside the existing
owner-scoped one — adding, not replacing, since replacing would mean a
`DROP POLICY` and this project doesn't route around that gate (see the
first DECISIONS.md entry). Added `document_id`, `clause_id`, and
`routed_at` columns, since the original table had nowhere to record
which document/clause feedback was *about* at all.

**The clause-id requirement for "wrong or outdated information" is a
database constraint, not just a UI rule.** `feedback_clause_id_required_for_wrong_or_outdated`
(`check (category <> 'wrong_or_outdated' or clause_id is not null)`)
means a malformed or buggy client can't submit that category without
a clause id even if the UI's own validation is bypassed or has a bug
— confirmed directly: an anon insert of `wrong_or_outdated` with no
`clause_id` is rejected (`23514`), the same category with a real
`clause_id` succeeds, and `confusing_question`/`missing_document`
(which don't need one) succeed with none.

**"Route ... directly into the verifier findings queue" can't mean a
literal live write from a visitor's browser — there is no server of
this app's own that could do that, and `verifier/findings.jsonl` is a
git-tracked file, not a database row.** The real pipeline, built to
match that constraint rather than pretend around it: feedback lands in
Supabase (written by anyone, read only with the service role key, same
as `analytics_events`); `tools/ingest_feedback_findings.js` (manual,
run by the project owner, same no-op-without-credentials shape as
every other Supabase-reading tool in this project) pulls unrouted
`wrong_or_outdated` rows, appends each to `findings.jsonl`, and marks
the row routed so a re-run doesn't duplicate it.

**Deliberately does not call `verifier/record_result.py`.** That
script enforces "never re-record an already-checked clause id" — a
rule written for the *sampling* pipeline, to stop it double-processing
a clause, which has nothing to do with whether a user can report an
issue on a clause the adversarial verifier has (or hasn't) already
sampled. Writes directly to `findings.jsonl` instead, in the exact key
shape `record_result.py` itself writes (`clauseId`, `foundAt`,
`severity`, `category`, `summary`, `evidence`, `sourceChecked`,
`suggestedFix`) so `triage.py`/`report.py` — both fully generic over
`category`, confirmed by reading them rather than assumed — keep
working on it unchanged. `category: 'user_reported'` is a new value,
not one of the verifier's own research categories (`citation_mismatch`,
`overclaiming`, etc.) — it's a different kind of entry and says so.

**Never fabricates verification work that wasn't done.** A user's
report is not independently checked against any source — `evidence`
says plainly "not independently verified," `sourceChecked` says "n/a
— not yet researched," `suggestedFix` says a human/verifier still
needs to look at it. Writing a finding that read like genuine research
when none happened would be exactly the kind of fabrication this
project's one load-bearing rule exists to prevent, regardless of how
literally the master plan's "route into the findings queue" phrasing
could otherwise be read.

**A clause id that no longer exists in `data/clauses.json` (the corpus
changed since the report was filed) is skipped, not written as a
finding, but still marked routed** — so it's not silently lost from
the record (the ingestion script prints which rows it skipped and
why) but also doesn't get retried forever or produce a finding against
something that isn't there to fix.

**Tested the same way as Phase 8.1's dashboard script**: the real
decision logic (`buildFindingLines()`) against synthetic feedback rows
— a valid report, a missing-message report, an unknown-clause-id
report, and a mixed batch — not just that the script runs
(`tests/tools/test_ingest_feedback_findings.js`, 15 checks, in CI).
The live-credentials path is the same manual, no-op-without-them shape
as `tools/analytics_report.js`.

**Test debris left behind in the live project this pass:** three
`feedback` rows from confirming the new constraint/policy behavior
directly (`'test anon feedback'`, `'test confusing'`, both anonymous;
`beafc6e7-f17d-4c12-8247-892c940aa87d` from Phase 7.1, already noted
there). All harmless, none tied to a real person.

```sql
delete from public.feedback where message in ('test anon feedback', 'test confusing');
```

## Phase 8.3: programmatic SEO pages

**Reused an already-verified dataset for "one page per specific
California question" rather than inventing new questions.**
`tests/search/golden_queries.json` is 100 real plain-language queries
Phase 5.1 already built and verified map to a real document through
the live search engine — not written for this phase, just reused as
the question set. 99 produced a page; 1 was skipped because its
matching document has no authority clause with a real citation to
answer the question with — "do not publish thin or unsupported pages"
applied as a hard filter, not a suggestion. No new research, no new
citations, nothing beyond what the corpus already carries.

**Generated output is gitignored, not committed.** `build/seo/` (840
HTML files + a sitemap) is a pure, deterministic function of
`data/documents.json`, `data/clauses.json`, `config/seo.json`, and
`tests/search/golden_queries.json` — committing it would mean 840
files' worth of diff noise on every unrelated corpus change, for
content that regenerates identically from what's already tracked. "Add
the page generation to CI" is read as "CI runs the generator and
validates its output," not "CI commits generated files" — the master
plan's own phrasing doesn't say to commit them, and this project
already treats `tiers.json`/the citation index as the one kind of
generated artifact worth committing (because *those* feed back into
the live app and have their own `--check` drift guard); SEO pages feed
nothing else in this repo and have no such role.

**Jurisdiction classification is reimplemented in Python, not shared
with `app.js`.** Same tradeoff `tools/tiering.py`/`build_citation_index.py`
already made for this same corpus data — there's no realistic way to
share a six-line pure function between a browser script and a Python
one here, so it's kept in sync by eye. Checked directly
(`test_jurisdiction_classification_matches_app_js_logic`) against a
synthetic California citation rather than assumed to match.

**Found and fixed a real XSS-shaped bug via the test that was written
to catch something else.** `test_html_escaping_prevents_injection_from_corpus_text`
was meant to confirm HTML-escaping in ordinary page text; it caught
that the JSON-LD `<script type="application/ld+json">` block embedded
`json.dumps()`'s output directly, which escapes for JSON syntax only —
a corpus title or case name containing `</script` would prematurely
close the tag and leak raw text into the page. Fixed by escaping `<`
as `<` (valid inside a JSON string, invisible to a JSON parser,
the standard technique for this exact situation) before embedding.
The corpus is this project's own, curated content today, so the
practical exposure is low — but the fix makes the generator correct
regardless of what the corpus ever contains, rather than correct only
because today's content happens to be safe.

**Similarity checking is scoped to same-category document pairs (and
question pages as their own group), not every pair.** Comparing all
~840 pages against each other is ~350K pairs for zero added safety —
two pages about unrelated legal topics were never going to collide on
a word-shingle Jaccard score. Scoping by shared category still checks
every pair that could plausibly be too similar (39,438 of them, ~3.6s)
while making the check cheap enough to run on every push.

**No new corpus research, no new RLS, no Supabase involvement at
all** — this phase is pure static-site generation from data already
in the repo, the first Phase 8.x item with no live-credentials gap to
document.

## Phase 9.1: accessibility in CI

**A real `axe-core` run, not a hand-rolled approximation of one.**
`tests/accessibility/axe_check.js` injects the real `axe-core` library
into the real, live page (same "drive the real app" discipline every
other browser test in this project already follows) and scans every
one of the app's 9 screens plus 50 sampled documents' output screens
(every ~15th document id, for an even spread, the same sampling shape
`tools/wizard_regression.js`'s full 740-document walk already proved
safe to reuse), each under both the light and dark theme — this app
has a real `prefers-color-scheme` dark mode (`styles.css`), so "across
both themes" names something concrete rather than a hypothetical.

**Fails only on serious/critical, by the master plan's own wording —
not zero-tolerance on every axe rule.** A first real run found 3
moderate violations (a missing `<main>` landmark, a heading-level skip,
page content not contained by a landmark) and 0 serious/critical ones.
Printed, not hidden: every scan logs its lower-impact count even when
it passes, so a moderate finding is visible in CI output without
failing the build over it — that gap between "automated catches" and
"everything a screen reader or keyboard-only user would notice" is
exactly what `A11Y_CHECKLIST.md`'s manual pass exists to cover, per the
master plan's own two-part instruction.

**Fixed the landmark issues directly — safe, structural, zero visual
risk; left the heading-order issue for later, on purpose.** Wrapping
the topbar in `<header>` and `<nav aria-label="Main">`, and the screen
sections in `<main>`, are pure semantic tag swaps against
class-only CSS selectors (checked `styles.css` directly: nothing
selects `div.topbar` or similar by tag) — re-ran `tools/regression.js`/
`wizard_regression.js`/`golden.js` after to confirm nothing rendering-
or logic-visible changed, and re-ran `axe_check.js` to confirm the
count dropped from 3 moderate findings to 1. The remaining one
(`<h3>` directly under `<h1>` on the output screen, skipping `<h2>`)
needs touching tag-selector CSS (`.signature-section h3`,
`.next-steps-section h3`, `.related-section h3`) across several
sections — real visual-regression risk this pass has no way to verify
by screenshot, so it's recorded in `A11Y_CHECKLIST.md` as a known,
deliberate deferral rather than fixed as a drive-by HTML change.

**A separate file, not folded into `tools/regression.js` itself**,
despite the master plan's literal "add axe-core checks to
regression.js" — each scan is a real DOM/AX-tree walk, and running
~20 of them (9 screens × 2 themes + 50 documents) is slow enough to
want its own CI step and its own log on failure, the same reasoning
`tests/pdf/pdf_golden.js`/`tests/docx/docx_golden.js` already got
their own files instead of being folded into `golden.js`.

**`A11Y_CHECKLIST.md` is honest that no real pass has happened yet.**
A keyboard-only or screen-reader pass needs a person's actual hands on
an actual keyboard or actual screen reader — this session has neither,
so the checklist's own "Pass log" says so plainly rather than
fabricating a pass that didn't happen. Written specifically for this
app's own real screens and real behaviors (e.g. "confirm the draft-
resume banner's `aria-live="polite"` is actually announced,"
"confirm the signature pad's typed-name alternative is clearly
presented, not silently skipped"), not a generic accessibility
checklist copied in from elsewhere.

## Phase 9.2: performance budgets, and a real web-worker fix the
## profiling itself called for

**Extended `tests/performance/performance_budget.js` rather than
starting a second budget file** — same file, same conventions
(measured-numbers-with-headroom, not aspirational targets), three new
budgets: initial load size (~5.6MB measured on this sandbox's
uncompressed, uncached static server — mostly real sourced clause
text in `data/clauses.json`, not something a "slim the bundle" pass
should or could shrink), time to interactive (from navigation start to
`state.documents`/`clauses`/`sharedFields` all ready — the actual
moment this app becomes usable, not a generic browser metric), and
contract-reader timing on a realistic ~20-page synthetic paste (60
paragraphs, ~165 words each, separated by blank lines the way a real
contract's sections actually are — not 20 pages of random characters,
since `splitPassages()`'s paragraph-boundary logic behaves differently
on each).

**Profiling the contract-reader budget found a real ~1.9-2.1s
synchronous main-thread block — exactly the scenario the master plan
named by name ("move heavy work (TF-IDF indexing...) off the main
thread with web workers if profiling shows jank").** Not hypothetical:
measured directly, on the real `matchPassage()` TF-IDF scoring a
realistic paste's 60 passages against the full clause corpus with no
cross-passage caching. Given explicit instruction plus concrete
evidence, fixed it rather than only budgeting around the slowness —
unlike the heading-order finding in 9.1 (a side discovery, not
explicitly named, with real fix-side risk this pass couldn't verify),
this was named outright and the profiling data to act on it was
already in hand.

**`contract_worker.js` duplicates `tokenize()`/`buildClauseIndex()`/
`matchPassage()` rather than sharing code with `app.js`.** Same
tradeoff `sign.js` already made for `substitute()`: `app.js`'s top
level runs `document.getElementById(...)` calls immediately on load,
which throw in a Worker's global scope (no `document` there), so
`importScripts('app.js')` was never viable — a small, pure, easy-to-
keep-in-sync duplication (STOPWORDS, `tokenize`, the index-build, and
the scoring function, ~115 lines) was the actual tradeoff, not a
restructuring of `app.js` around a Worker's constraints just to avoid
it.

**The main thread hands the worker plain data (`state.clauses`) and
gets back plain data (`{clauseIndex, confidence}`), never clause
objects.** The worker only ever sees a scoring-sized copy of the
corpus; resolving `clauseIndex` back to the real `state.clauses[idx]`
object happens on the main thread, in `matchPassages()` — keeping the
worker's own responsibility to exactly "score passages against an
index," nothing about rendering or the app's broader state.

**Verified correctness, not just "doesn't crash."** Ran the real
worker against a passage taken verbatim from the `at_will` clause's
own body and confirmed it resolves to "At-Will Employment" at
`strong` confidence; ran a full real form submission (typed into
`#incoming-text`, the real submit button, the real DOM) end to end and
confirmed the rendered result includes the real citation badge. The
full gate suite (`tools/regression.js`, `wizard_regression.js`,
`golden.js`, every search/performance/export/signing test) was re-run
after removing `buildClauseIndex()`/`matchPassage()` from `app.js`
entirely — nothing else in the codebase called either function
outside `tools/regression.js`'s own contract-reader smoke check,
confirmed by grepping for every reference before deleting them, and
that one call site was updated to the new async
`matchPassages()` + `await` shape rather than left calling a function
that no longer exists.

**Added a visible "Reading…" state while the worker runs** — now that
the main thread genuinely isn't blocked, the screen would otherwise
show nothing changing for up to ~2 seconds on a long paste, which
reads as broken even though it isn't. A plain text swap in
`#incoming-results`, replaced once the real results arrive; no new
CSS, no spinner.

## Phase 9.3: error monitoring, and a real staging environment

**Created a second Supabase project for staging** (`groundtruth-staging`,
`ihlszzsnlcmtmuydkkpk`), per the user's own earlier answer to exactly
this question ("yes, create what's needed") when Phase 9.3 was first
scoped. Checked the organization's plan and existing project count
first (free tier, 1 existing project) rather than assuming headroom —
this is the account's second project, within the free tier.

**Reversed the Phase 7.1 decision not to mirror migrations into local
files — for a concrete, new reason, not a change of heart on the old
one.** That decision was right for what it was deciding: this
session's only tool is the Supabase MCP server, not the CLI, so there
was no way to *pull* migrations down faithfully, and reconstructing
them from memory risked drifting from what's actually live. What's
different now: making staging a real mirror of production, and
giving CI a real "deploy to staging" step, both need a *local* file —
`supabase db push` has nothing to push without one. So
`supabase/migrations/20261028000000_baseline.sql` was generated the
safe way the earlier decision anticipated: from the production
project's own live `information_schema`/`pg_constraint`/`pg_policies`/
`pg_indexes` (introspected directly, not recalled), so it's verified
accurate to what's actually live, not a guess at history. Applied
line-for-line to staging and confirmed via `list_tables` (all 9
tables present) and `get_advisors` (security: clean — even cleaner
than production, which still carries `_scratch_probe` and the
leaked-password-protection finding from before this session).
`supabase/schema.sql`'s `agreements` table was applied to staging too
(adjusted to drop the `drop trigger if exists` line schema.sql itself
has, since a fresh project has nothing to drop and that text hits the
same destructive-SQL gate; and written with `(select auth.uid())`
from the start, since staging has no history forcing the older plain
form the way production's `agreements` does).

**Found a second pre-existing, DROP-POLICY-gate-blocked performance
finding by actually checking, instead of assuming the last check still
covers everything.** Running `get_advisors` (performance) on the new
staging project surfaced `multiple_permissive_policies` on
`feedback` INSERT (`"Anyone can submit anonymous feedback"` and
`"Users can insert their own feedback"` both apply to the same
role/action) — then confirmed via the same check against *production*
that this has been there since Phase 8.2 added the second policy,
simply never re-checked (Phase 8.2's own entry only ran the security
advisor, not performance — a real gap in that pass, recorded here
rather than quietly fixed in place). Same structural block as the
`agreements` `auth_rls_initplan` finding: combining the two policies
into one needs `drop policy`, which hits the same gate. Left
identical on both staging and production (consistent with each other
being more valuable here than fixing one and drifting from the
other), handed off with exact SQL:

```sql
drop policy if exists "Anyone can submit anonymous feedback" on public.feedback;
drop policy if exists "Users can insert their own feedback" on public.feedback;
create policy "Users can insert their own or anonymous feedback" on public.feedback
  for insert with check (user_id is null or (select auth.uid()) = user_id);
```

**Edge functions deployed identically to staging** (`list-sessions`,
`delete-account`, `share-view`, `share-sign`) — same code, same
`verify_jwt` settings, confirmed via each function's deploy response.

**`error_reports` (new): "a lightweight self-hosted or
privacy-respecting service, scrubbing field values."** Self-hosted
means this project's own Supabase, the same choice already made for
`analytics_events`/`feedback`, not a third-party SaaS (Sentry and
similar were never seriously considered — this app already has a
backend-of-sorts, and introducing a second one for one feature would
contradict the whole architecture). No `user_id` (same reasoning as
`analytics_events`), anon-insertable, no SELECT policy for anyone via
the client — read only by the project owner via
`tools/error_report_summary.js`.

**Scrubbing happens client-side, before anything is sent, and is
tested directly against synthetic errors — not trusted to "error
messages probably don't contain user data."** `account.js`'s
`scrubErrorText()` redacts anything email-shaped and any quoted string
over 15 characters (long enough to plausibly be a pasted field value,
short enough that real error-message phrasing mostly survives) before
a message is ever sent; `parseStackFrames()` keeps only structural
location info (function/file/line/column) from a stack trace,
discarding its first line entirely (which just repeats the
already-separately-scrubbed message) and never the inline source
snippet some browsers append.
`tests/error_reporting/error_reporting.js` (16 checks, in CI) verifies
this directly: dispatches a real `ErrorEvent` and a real
`unhandledrejection` whose message/reason text contains a
long-quoted-string "field value," and confirms the row a stubbed
Supabase client actually receives has it redacted — not just that the
scrub function returns a redacted string in isolation, but that the
real capture pipeline (the `window.addEventListener('error'/
'unhandledrejection')` handlers in `app.js`, routed through the
optional `groundtruthReportError` hook, reaching
`window.groundtruthReportErrorImpl` in `account.js`) actually uses it.

**`app.js` calls a plain function (`groundtruthReportError`), not
`window.reportError`** — that name collides with a real, standard Web
API (`reportError()`, which surfaces to the browser's own error
console) that already existed before this phase touched anything;
using it as a custom hook name would have shadowed a built-in global
with app-specific behavior, a real bug caught by checking the name
against MDN before writing it, not by trial and error.

**Fixed a mistaken diagnostic from the Phase 9.2 commit along the
way**: that commit added `window.addEventListener('error', ...)` to
catch `contract_worker.js` failing to load, but a Worker's own errors
never reach the main `window`'s `'error'` listener at all — the
Worker instance's own `.onerror` is the real hook. Caught while
building this phase's real error-reporting pipeline (which needed to
route Worker errors into `error_reports` too), not left in place as
silently-dead code; `initContractWorker()` now sets
`contractWorker.onerror` directly.

**Real-time alerting is a documented recipe, not a built feature** —
same category of gap as Stripe (7.2): it needs a destination (an
email service, a Slack incoming webhook) this project has no
credentials for, and fabricating one would be pointless. Once the
project owner has a destination, turning this on is a Database
Webhook in the Supabase dashboard (Database → Webhooks → Create a new
hook): table `error_reports`, event `INSERT`, HTTP target the
destination's own webhook URL, with the webhook's own payload-shape
requirements (many email/Slack webhook providers expect a specific
JSON shape, not Supabase's raw row payload) handled by either the
destination's own webhook-transform feature or a thin edge function
in between — not something to design abstractly here without a real
destination to build against.

**Source maps are a non-issue, not a silently-skipped requirement** —
`app.js`/`account.js`/`contract_worker.js` ship unminified, exactly as
written (`package.json`'s own description: "no build step for the app
itself"). A source map exists to map minified/bundled output back to
real source; there is no minification step here for one to map back
*from*. Stated plainly rather than either building a fake source map
for a build step that doesn't exist, or silently dropping this part
of the instruction.

**Not done this pass**: enabling the staging deploy job for real (it's
written and reasoned through, but genuinely needs the two repo
secrets only the project owner can add — see `tools/README.md`);
turning on the production project's leaked-password-protection
setting (same no-tool-for-it gap as every prior phase); the
`multiple_permissive_policies`/`auth_rls_initplan` fixes above
(DROP-POLICY-gated, handed off with exact SQL).

## Phase 9.4: security review

**CSP construction was verified empirically, not copy-pasted.** Added
a real `Content-Security-Policy` `<meta>` tag to `index.html`
(allowing exactly the origins the app actually loads from: the
jsDelivr CDN the PDF/DOCX export libraries pull from, Google Fonts'
two origins, `worker-src 'self'` for `contract_worker.js`, `connect-
src ... https://*.supabase.co`) and a narrower one to `sign.html`
(same base policy, minus `cdn.jsdelivr.net` script-src and `worker-
src`, since `sign.js` has neither a vendored library nor a Worker).
Both tested via real Playwright navigation before being trusted —
`index.html` initially logged a harmless "`frame-ancestors` is
ignored when delivered via `<meta>`" warning, which is the browser
telling the truth: that directive only works as a real HTTP response
header, so it was removed from the tag entirely (with a comment
pointing at the hosting layer for where it'd actually need to live)
rather than kept in as dead configuration that looks like protection
but isn't. Added a dedicated check to `tools/regression.js` that
fails the build on any `Content Security Policy|Refused to` console
message — deliberately separate from, and zero-tolerance unlike, the
file's pre-existing informational total-console-error count (which
legitimately differs between this sandbox and real CI; a CSP
violation does not — the policy either blocks something the app
needs or it doesn't, in every environment equally).

**XSS audit found one real gap, closed with a corpus-level check.**
Re-read every clause/citation render path in `app.js`: all of them
use `textContent`/`createElement`, never `innerHTML` with untrusted
input. The one place that doesn't go through text-content assignment
is citation links, which set `.href` directly from `c.url` (corpus
data) with no scheme check — meaning a `javascript:`/`data:` URL in
the corpus would execute on click. Rather than add a runtime check
for something that should never be possible to author in the first
place, added two new checks to `tools/validate_corpus.py` (the
authority-clause citations loop and the `filing/next_steps.json`
citations loop) requiring every citation URL to start with
`https://` — confirmed zero existing violations before adding either
check, so this is a new hard constraint, not a retroactive cleanup.

**Full git-history secret scan, two independent tools, cross-
checked.** Ran `gitleaks detect --source . --log-opts="--all"`
(1085 commits, ~101MB, "no leaks found") and `detect-secrets scan
--all-files` (6 hits) against the same history. `go install
github.com/gitleaks/gitleaks/v8@latest` fails with a module-path
conflict (the module's real declared path is
`github.com/zricethezav/gitleaks/v8`); fixed by installing the
correct path. Read all 6 `detect-secrets` hits individually rather
than dismissing them as "probably fine": 4 are in
`tests/golden/fixtures/*.json` fixtures for real documents about
trade-secret law (CUTSA, economic espionage) tripping the "Secret
Keyword" heuristic on the word "secret"; 1 is
`tools/add_why_we_ask.py`'s `tradeSecretDescription` field-
explanation string (same cause); 1 is `tools/fetch_via_browser.js`'s
`PROXY_CA_SPKI` constant, which is a *public* TLS certificate SPKI
pin hash — not a secret by definition, since certificate pinning
only works if the pinned hash is known in advance. Separately
confirmed via `git log --all --full-history -- config.js` (empty)
that the gitignored file holding real Supabase keys was never
committed. Added `gitleaks/gitleaks-action@v2` as a new CI job
(`secret-scan`, `fetch-depth: 0`) and `npm audit --audit-level=high`
as a new step in the regression job, so both checks run on every
future push rather than being one-time.

**Rate limiting: built the half that needed building, documented the
half that didn't.** Supabase Auth's magic-link rate limiting is a
dashboard-configurable platform setting (Authentication → Rate
Limits), on by default — same "no MCP tool to toggle it, nothing to
build" shape as `auth_leaked_password_protection` in this file's
earliest entries. What a magic-link setting can't cover is
`share-view`/`share-sign`: the only two edge functions with no
Supabase session at all (`verify_jwt: false`), so there's no
authenticated caller for the platform's own per-session throttling
to apply to. Built `supabase/functions/_shared/rate_limit.ts`: a
single atomic `INSERT ... ON CONFLICT ... DO UPDATE` against a new
`rate_limits` table, keyed by caller IP, that resets the count when
the stored window is more than a minute old and increments it
otherwise — one SQL statement, so Postgres's own per-row lock makes
the read-reset-or-increment atomic without needing a transaction or
`SELECT ... FOR UPDATE`. Wired into `share-view` (60 req/min — a page
a real signer might reload or poll a few times) and `share-sign` (10
req/min — tighter, since it writes; ten is retry headroom, not an
invitation). Deployed to both production and staging, with the
`rate_limits` table added to both (migration
`20261029000000_rate_limits.sql`, applied directly to staging too).

**`rate_limits` gets RLS enabled with zero policies, by design, not
as an oversight.** `get_advisors` correctly flags this as
`rls_enabled_no_policy` (INFO) on both projects — the expected
result, not a gap to close. The table must never be reachable
through the public REST API in either direction: reading it would
expose rate-limit state to probing, and writing it would let a
caller reset their own counter and defeat the entire mechanism. Both
edge functions reach it only through a direct Postgres connection
(`SUPABASE_DB_URL`), the same privileged, RLS-bypassing path
`list-sessions` already uses for `auth.sessions`.

**Fails open, deliberately.** If the rate-limit check itself errors
(the DB connection fails, say), `withinRateLimit()` logs and returns
`true` rather than blocking the request. A rate limiter that takes
real signers offline when the database hiccups is a worse outcome
than occasionally letting a burst of requests through — especially
given what this limiter is actually defending: a share token is 192
bits of randomness, not brute-forceable at any rate limit this could
plausibly set, so its job is bounding abuse/cost and slowing a
signing race, not standing as the only real barrier between an
attacker and a document.

**`list-sessions`/`delete-account` deliberately excluded.** Both
have `verify_jwt: true`, so Supabase's platform gateway rejects an
unauthenticated or forged-token caller before the function body runs
at all — a materially higher bar than `share-view`/`share-sign`'s
token-only trust model. An attacker who already holds a valid,
unexpired access token for a real account has a much bigger problem
than an unthrottled `delete-account` call, and repeated calls to it
don't compound (the account either still exists or it doesn't).
Scoped the new work to the two functions actually exposed to
anonymous abuse rather than adding rate limiting everywhere on
principle.

## Phase 9.5: privacy and legal-copy surfaces

**The data inventory is generated from the real schema and app code,
not retyped independently of it, and fails loudly on anything it
doesn't recognize.** `tools/generate_data_inventory.py` parses every
`create table`/`create policy` statement in `supabase/schema.sql` and
`supabase/migrations/*.sql`, and every `localStorage`/`sessionStorage`
key constant in `app.js`/`account.js`/`sign.js`, into
`PRIVACY_DATA_INVENTORY.md`. The one thing that can't come from
parsing SQL — what a table is actually *for*, in plain language, and
its retention/deletion story — is a small hand-written
`TABLE_NOTES`/`LOCAL_KEY_NOTES` dict in the script; a table or key
with no entry there is a hard `SystemExit`, not a warning, so nothing
touching user data can ship without a human having written down what
it is. `--check` detects staleness the same way `tools/tiering.py
--check` does for `tiers.json`, wired into CI right after the
citation-index check. Confirmed accurate against the live schema by
cross-checking: Supabase's `createClient()` call in `account.js` sets
no custom `storage`/`auth` option, so its session token lives in
`localStorage` under the key the `@supabase/supabase-js` library
names itself (`sb-<project-ref>-auth-token`) — documented in the
generated file as a fact about the library's own default, since it's
never written by this project's own code and so can't be extracted
the same mechanical way.

**Found and fixed one real "what to do" nudge while auditing the
contract reader and cross-document consistency wording, as the
master plan specifically asked.** The contract reader's own wording
(`app.js`'s `renderIncomingResults()`) was already exactly right —
"Resembles"/"May resemble"/"Not recognized... yet", and an explicit
comment stating it must never characterize a passage as good, bad, or
enforceable. The cross-document consistency checker
(`computeConsistency()`, flagging the same field id holding two
different values across saved documents — this *is* the feature
Phase 10.2 will later expand with dedicated checks for dates/party
names/amounts/governing law) was almost right: its note read "This
might be intentional... **Worth a second look if it was meant to be
the same.**" That closing clause tells the reader what to do about
the mismatch, not just what it is. Reworded to state only the fact:
"This might be intentional — the same field can hold a different
value in each document." Also rewrote a nearby code comment that
independently used the same banned phrase to describe this behavior
(`lint/copy_lint.py` scans comments too — see below — so this wasn't
optional cleanup, the build would have failed on it).

**`lint/copy_lint.py` is new, `lint/advisory_phrases.json` already
existed.** `tools/validate_corpus.py` already lints *corpus* text
(whyWeAsk/helpText, search copy, filing/next_steps.json) against
`lint/advisory_phrases.json` — that coverage predates this phase and
wasn't touched. What was missing is Groundtruth's *own* voice: the
literal UI copy in `index.html`, `sign.html`, `app.js`, `account.js`,
`sign.js`. Added `lint/enforcement_phrases.json` (claims like "is
enforceable in court", "complies with", "fully compliant") alongside
the existing advisory list, and `lint/copy_lint.py` to scan the 5 app
files against both. Deliberately excludes the three new legal pages
(privacy.html/terms.html/storage-notice.html): a Terms of Service
correctly says "you must be 18" and "you agree" as ordinary contract
language, which isn't Groundtruth personally advising a reader about
*their* situation — the actual thing "inform, never advise" governs.
Mixing the two scopes would either force a ToS into unnatural English
or collapse the phrase lists to nothing.

**Dropped "legally binding" from the enforcement list after it
flagged the app's own correct disclaimers.** A first draft of
`enforcement_phrases.json` included the bare phrase "legally
binding". Running the lint against the real files immediately caught
it hitting `index.html`/`account.js`/`sign.js`'s existing e-signature
disclaimer — "We make no determination of whether or how a signature
here is legally binding" — which is the *opposite* of an enforcement
claim; it's the app correctly declining to make one. A substring lint
can't tell "X is legally binding" from "we don't determine whether X
is legally binding" apart, so rather than keep a banned phrase that
would permanently false-positive on the app's own best practice,
removed it and kept only unambiguous affirmative-claim phrases that
have no legitimate disclaiming use in this app's text ("this is
legally binding", "guarantees compliance", "complies with", and
similar) — verified each has zero existing hits before committing the
list. `copy_lint.py` scans raw file text, comments included, on
purpose (its own module docstring explains why: a comment describing
real UI wording tends to echo it, which is exactly what happened with
the "worth a second look" phrase above) — a known, accepted tradeoff
over building a real JS/HTML tokenizer this project has no other
need for.

**Privacy Policy, Terms of Service, and Cookie/Storage notice are
real pages, explicitly marked as drafts.** `privacy.html`,
`terms.html`, and `storage-notice.html` are standalone pages (same
"small, separate page" pattern as `sign.html` — no account, no JS at
all, so their CSP is tighter than either `index.html`'s or
`sign.html`'s: `default-src 'none'`, nothing but the stylesheet and
its font import). Each opens with a `.legal-draft-notice` banner
(new CSS, reusing the `--flag`/`--flag-soft` tokens already used
elsewhere for attention states) stating plainly that it hasn't been
reviewed by an attorney and isn't yet the project's in-effect policy
— the master plan's own instruction, not a hedge added on top of it.
Linked from a new footer on `index.html` (visible on every screen,
not just one) and `sign.html` (a signer's signature/IP is personal
data too, so they get a path to the Privacy Policy without needing
an account). `privacy.html`'s CCPA/CPRA section maps each right to a
real, already-built mechanism rather than generic boilerplate:
access → the Account screen's data export; deletion → account
deletion (with the honest caveat that anonymous analytics/error/
feedback rows have no identifier to delete *by*, since they were
never linked to a person to begin with — not a loophole, the actual
privacy-protective design); correction → editing and regenerating
your own library documents, with an honest note that there's no
separate tool to edit a past audit-log or signature record, since
both exist specifically as a historical record; opt-out of sale →
stated plainly that we don't sell or share personal information, so
there's nothing to opt out of in that specific sense, distinct from
the pre-existing analytics toggle. The owner-contact email is left as
an explicit `[to be added before this page is published]` placeholder
rather than guessed — nothing requires a specific contact address to
exist for the app's own tools to work, and it's not this session's
call to publish an address on the project owner's behalf.

**Both new checks verified against the real app, not just written
and trusted.** Ran `lint/copy_lint.py` against the real files before
committing (clean) and `tools/generate_data_inventory.py --check`
(clean). Added the three new pages to `tests/accessibility/
axe_check.js`'s existing scan (0 serious/critical violations, both
themes — these are plain static pages, but accessibility matters as
much here as anywhere, maybe more, since they're the one place a
visitor reads what the product actually does with their data) and a
focused check in `tools/regression.js` confirming each page's own
CSP is violation-free and the draft banner is actually present in
the DOM (not just in the source, in case a future edit accidentally
removed the element while leaving the text elsewhere).

**Noted, not fixed: `_scratch_probe`.** `get_advisors` on production
still shows a stray `public._scratch_probe` table (2 rows, each just
an integer id, created while probing the destructive-SQL
confirmation gate's behavior early in this project — see this file's
very first entries) with RLS enabled and no policies. Checked its
actual contents directly (`select * from public._scratch_probe`) to
confirm before writing this: it holds no personal data of any kind
and is written to by zero app code, so it has no privacy-inventory
impact and wasn't added to `TABLE_NOTES`. Left in place rather than
pulled into this phase's scope — the DROP TABLE that would remove it
hits the same confirmation gate as every other destructive statement
in this project, so removing it needs the project owner, the same
handoff already recorded for the `auth_rls_initplan`/
`multiple_permissive_policies` fixes.

**Not done this pass**: `lint/copy_lint.py`'s phrase lists are a
reasonable, verified-against-the-real-app starting set, not an
exhaustive one — a future UI string using different advisory/
enforcement phrasing than anything seen so far would need a human to
notice and add it, same limitation `lint/advisory_phrases.json`
already had for corpus text. The `[contact email]` placeholders in
`privacy.html`/`terms.html` need the project owner to fill in before
either page is actually published.
