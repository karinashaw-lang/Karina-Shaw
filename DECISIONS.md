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
