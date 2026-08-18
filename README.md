# DRAFT — AI Template & Content Engine

A working prototype of the deterministic layer described in the DRAFT AI Engine Spec,
plus the template corpus it runs on and the tooling that decides whether any of that
corpus is fit to use.

**Current state: the engine works, and it drafts nothing.** 0 of 360 clauses clear the
release gate, so every generated document comes out empty. That is the correct output
for a corpus in this state, and making it visible rather than burying it in a disclaimer
is the point of the gate.

```
npm run audit        # everything below, reproducible
```

## What is here

| Path | |
|---|---|
| `draft-ai-engine.html` | The prototype. Self-contained, opens from `file://`, makes no model API call. Compiled output — do not edit by hand. |
| `templates/` | The corpus and its tooling. Everything the engine knows lives here as JSON. [Full documentation](templates/README.md). |
| `verification/` | Generated reports: review queue, findings, cost model, egress request. |

## What is verified, and what is not

**Verified by execution.** 12,120 answer sets assemble without error; no unresolved field
tokens; no broken cross-references; all seven consistency checks pass in every package;
same-titled clause variants proved mutually exclusive per configuration; the release gate
rejects all three self-certification attempts; the verification pipeline fails closed
across 137 test assertions in seven suites; the prototype matches `templates/`.

**Not verified.** Every statement about what the law requires. 360 of 360 clauses.

## What the measurements say

Nine clauses were checked against sources, spanning California employment, California
entity, New York entity, and federal tax.

- **8 of 9 confirmed defective.** At 95% confidence, at least 57% of the corpus is
  defective — roughly 206 of 360, point estimate near 320.
- **The dominant failure is omission, not invention.** The clauses get the headline
  number right and drop the qualifier that decides whether it applies. That is the
  failure mode least likely to be caught by reading a clause on its own, because a
  correct number missing its qualifier reads as complete.
- **169 clauses assert what the law requires; 191 state a negotiated term.** They fail
  differently and are vetted by different people. The commercial package is 14–26% legal
  assertion and can be cleared without pulling a statute; the California compliance
  documents are 85–88% and cannot.
- **116 clauses carry a detector flag** from patterns derived from the sample. The
  detectors independently rediscovered the specific defects the search pass found.

`verification/cost.md` estimates ~133 hours of qualified review from those inputs, and
labels every assumed rate rather than burying it.

## Why nothing ships

Verification is blocked by an organization egress policy, not by anything in this repo.
All 14 legal source hosts return `connect_rejected` — *"gateway answered 403 to CONNECT"*
— while `github.com` reaches through the same path. `npm run egress` generates the
allowlist request, ranked by how many citations depend on each host.

Two things unblock it, and they are independent:

1. **Egress to one primary source host.** Moves clauses to `corroborated` mechanically.
2. **A source text supplied directly.** `npm run ingest -- --file lab-925.txt --citation
   "Cal. Lab. Code §925" --by "..." --from "Westlaw"`. Stored verbatim, hashed, attested.

Neither reaches `primary-verified`, which requires a named human reviewer by design.

## Reading one primary text corrected one of my own findings

CourtListener came back online. It is a republisher, not a court — a mirror under this
repo's own test — so it cannot satisfy the standard. It can still be *read*, and the corpus
cites exactly one case among 118 distinct citations, so the question was whether reading it
changed anything. It did, and not in the direction expected.

The finding on `msa_ca_release` and `ea_ca_release` said Winet v. Price holds that a mere
recital of waiver is not controlling, and that releasing unknown claims needs evidence of
intent beyond the words. **The opinion says close to the opposite.** That proposition belongs
to *Casey v. Proctor* (1963), which Winet quotes and then **distinguishes**: Casey was a
personal-injury form release signed days after an accident by an unrepresented claimant with
no §1542 waiver at all. Winet was a sophisticated businessman, advised by his own counsel
about §1542 specifically, in an arm's-length commercial settlement — and the court refused
his uncommunicated subjective intent as parol evidence and **enforced** the waiver. Casey
itself says such waivers bind "upon a showing the parties consciously understood and agreed
such was the effect of their release."

The original note came from law-firm summaries quoting Casey's language under Winet's name.
No primary text had been opened.

The clauses are still defective — they state a drafting convention as a rule of law, and the
consequence they assert is not automatic — but the defect is now described correctly, and
the finding records what actually decides these cases: conscious understanding and advice,
not any particular form of words.

**This is the argument for the two-primary standard, made by the corpus against itself.** A
finding assembled from four secondary sources, all agreeing with each other, was wrong about
what the authority held. Secondary sources agreeing is not corroboration when they are all
paraphrasing the same paraphrase.

### Which other findings could be wrong the same way

Distinct hosts cannot catch a paraphrase chain. The *shape of the claim* can, because the two
kinds fail differently. A **factual** claim — a deadline, a threshold, a dollar figure —
survives retelling; ten sources repeating a number are weak evidence but not systematically
wrong in one direction. An **interpretive** claim — what a court held, whether something is
voidable, what the test is — does not survive retelling. Each compression drifts toward the
memorable proposition rather than the actual holding.

So an interpretive claim with no primary source is not weakly evidenced. It is
**unverifiable as recorded**: nothing in the file could tell a reader whether it drifted.
`npm run sources` now classifies every finding:

| Level | Findings |
|---|---|
| `partial` — some primary, fewer than two | 16 |
| `secondary-only` — factual claim, no primary | 8 |
| **`unverifiable-as-recorded`** — interpretive claim, no primary | **4** |

The four were `ea_ca_925`, `msa_ca_925`, `ipa_state_carveout`, `msa_ca_release` — including
the findings this repo has leaned on hardest.

### Two of them have since been answered, by courts

The Winet failure was not that the sources were weak. It was that they were **not
independent** — four hosts, one paraphrase chain. The evidence that answers that is a court
quoting the provision verbatim, and two California Courts of Appeal do:

> "An employer shall not require an employee who **primarily resides and works** in
> California, as a condition of employment, to agree to a provision that would … Require the
> employee to adjudicate outside of California a claim arising in California."
> — *Midwest Motor Supply Co. v. Super. Ct.* (2020), and materially identically
> *Zhang v. Super. Ct.* (2022)

The clauses say "primarily works in California". The residence conjunct is missing, exactly
as the finding claimed. Two courts, two years apart, quoting the same operative language —
that is independence four summaries of one summary never had.

**It still does not meet the standard.** A court quoting a statute is not the body that
enacted it, and these were read through CourtListener, which republishes opinions rather than
issuing them. So `fragility` gains a level between the two: `judicially-corroborated` — the
claim is no longer unverifiable as recorded, and it is not verified.

| Level | Findings |
|---|---|
| `partial` | 16 |
| `secondary-only` | 8 |
| `judicially-corroborated` | 2 |
| **`unverifiable-as-recorded`** | **2** |

### The third was answered too — and the rule still refused it

The Federal Circuit states the division of labour between the two sections in terms:

> "Related to § 2870, California Labor Code **§ 2872** requires that an employer must
> 'provide a written notification' to an employee that any assignment provision 'does not
> apply to an invention which qualifies fully under the provisions of Section 2870.'"
> — *Whitewater West Industries v. Alleshouse* (Fed. Cir. 2020)

The clause cites §2870 for the notice duty. §2872 creates it. The finding was right.

**And `ipa_state_carveout` stays at `unverifiable-as-recorded`,** because the independence
test needs two opinions and CourtListener holds exactly one quoting §2872's operative
language. That is a fact about the case law, not a gap in the search — and the rule is not
being relaxed to let a finding of mine through. The count is now reported at every level, so
a reader can see the one quotation exists rather than going looking for it again.

The same opinion yielded a gap the finding had missed: the district court found §2872
"states no remedy for its violation" and treated the absent notification as not
determinative. A clause that says to give the notice without indicating what turns on giving
it leaves the reader unable to weigh the obligation.

`msa_ca_release` remains the last finding in the worst category.

## The prototype was making a stale claim about itself

Checking what the product actually does under the new standard turned up a defect in the
artifact rather than the corpus. The prototype's own prose said **"3 clauses reached
search-corroborated"**; the true figure is **0**, and had been for some time. A
hand-maintained claim about data, gone stale, sitting in the one document that describes this
project's standards — the identical failure the corpus is full of, committed by the thing
that reports it.

Correcting the number would have been the wrong fix. The numbers are now **derived from the
corpus the page ships** — the usable count, the gate name, the clause total, and each
verification share are computed at render time, so they cannot disagree with the data.
`selfaudit.test.mjs` fails the build if a typed statistic reappears in the copy.

That test needed the same care as the checks it enforces: its first version fired on the
comment explaining the bug, because the comment necessarily quotes the stale claim. It now
strips comments before scanning, and asserts that distinction explicitly — a check that fires
on its own documentation teaches people to delete the documentation.

What the product does under the standard, verified live in the page: `0 of 360 clauses are
usable and every document comes out empty`. That is the correct behaviour. Nothing is checked
against the law, so nothing is used.

## The standard: two primary sources, or it is not verified

**Measured, not assumed: the standard cannot be met in this environment.** Every publisher
host is denied at the egress proxy — `leginfo.legislature.ca.gov`, `uscode.house.gov`,
`ecfr.gov`, `govt.westlaw.com`, `edd.ca.gov`, `sos.ca.gov`, `dir.ca.gov` and the rest all
return `connect_rejected — gateway answered 403 to CONNECT`, while the `github.com` control
tunnels through the same proxy and answers.

So the bar was made structural instead of promised. `npm run sources` audits every recorded
finding against it.

| Tier | Primary? | What it is |
|---|---|---|
| `publisher` | **yes** | the sovereign's own text — legislature, code office, register, court |
| `agency` | **yes** | the agency administering the rule, on its own site. Primary for its forms, procedures and deadlines; not for what a statute means |
| `mirror` | no | a faithful republisher. Usually right, still a copy, with its own transcription errors and update schedule |
| `secondary` | no | an expert reading — a law firm, an accounting firm, a trade body |

Two primary sources means two **distinct** primary hosts: two pages on one publisher are one
source, because a publisher that is wrong is wrong on both pages. A statutory claim needs at
least one publisher among the two. An unclassified host is secondary — a host nobody has
vouched for is not primary by default, which is how a standard quietly stops being one.

**The result: 0 of 28 findings meet it, and zero publisher-tier sources appear anywhere in
the 87 recorded sources.** Not few — none. Every finding rests on agency guidance, faithful
republishers, and expert readings.

Three things changed so this holds structurally:

- **The gate is now `primary-verified`**, and `gateFor` checks the *sources*, not the label.
  A clause with `"verification": "primary-verified"` typed into it and two Justia links is
  refused, in the validator and in the compiled prototype alike — verified live in the page.
- **The registry was wrong on its own terms.** It listed Cornell LII, casetext and Westlaw
  as `primary` while `ingest.mjs` already refused mirrors on the principle that a copy is not
  a source text. Reclassified.
- **`mayFetch` was tightened** to the publisher tier only. An agency site is primary about
  the agency's own forms and is still not the sovereign's words.

**What this does not change:** the 27 defects already found remain findings. The standard
governs what may be called *verified*; it does not un-find a gap. A clause shown by an agency
page and three law firms to omit a statutory exemption still omits it. What nobody may now
say is that the clause has been *checked against the law*. Those are different claims, and
the second is the one being withheld.

## The detectors were tested properly, and half of them failed

The first detector score — 88% precision, 88% recall — was measured against the same nine
findings the detectors were written after seeing. That is fit, not accuracy, and it was
labelled as such. So eight predictions were written to
`verification/holdout/pre-registration.json` and **committed before any search was run on
them**, then checked.

| | |
|---|---|
| Predicted defective | 8 |
| Actually defective | 8 — **100% precision** |
| Predicted defect type matched | 75% |

Then the part that mattered: **three clauses the detectors predicted *clean*** were checked
the same way. All three were defective.

- `msa_ca_prop65` omits that Proposition 65 does not apply to a business with fewer than ten
  employees — the most consequential qualifier in the statute for a product built for small
  companies, and the clause tells the reader most likely to be exempt that they are covered.
- `msa_ca_release` states a drafting convention as a rule of law: §1542 does not require a
  release to quote the statute, and quoting it is neither necessary nor sufficient.
- `msa_ca_indemnity_construction` omits the 2013 effective date of §2782.05 and its third
  protective branch, for work outside the subcontractor's scope.

**The detectors rank; they do not screen.** A flagged clause is worth reading first. An
unflagged clause is not thereby safe, and nothing in the pipeline may treat it as such.
`npm run holdout` reproduces all of this.

## Defects propagate, and now they are traced

`msa_ca_925` repeated the exact "primarily works" error already confirmed in `ea_ca_925` —
written twice, found twice, at the cost of two separate searches. Nobody reading one clause
would have known to read the other. That is what a corpus written from memory does: the same
wrong recollection comes out the same way every time it is needed.

So a confirmed defect is treated as a lead on every clause built from the same recollection.
`propagation.mjs` finds them two ways — clauses sharing distinctive eight-word runs of
wording, and clauses resting on the same cited provision.

The 19 confirmed defects implicated **5 unchecked clauses**. Four were checkable against
evidence already on file — the question was whether the *same* defect is present, and the
sources establishing it were already recorded — and **all four carried it**:

| Clause | Implicated by | The defect that travelled |
|---|---|---|
| `cal_ca_prop65_ops` | `msa_ca_prop65` | no fewer-than-ten-employees threshold, again |
| `ea_ca_release` | `msa_ca_release` | "quoting it, or unknown claims survive" — §1542 requires no such thing |
| `hb_ca_lactation_break` | `can_lactation` | the under-50 undue-hardship exemption appears in neither |
| `cal_ny` | `charter_ny_publication` | "two designated newspapers" — one must be a daily, one a weekly |

`hb_ca_lactation_break` is instructive twice over: it is actually *better* than its pair on
one point (it says the non-concurrent break is unpaid, which `can_lactation` omits) and
carries the parent defect on another. Duplication is not cloning, and each lead still has to
be read.

**The standing exposure: 25 groups of near-duplicate clauses covering 51 of the 360.** Each
is a place where one defect lands more than once. Most have no confirmed defect yet, which
says what has been checked, not what is there. `npm run propagation` regenerates all of it.

## The defect rate, on a sample twice the size

| | Before | Now |
|---|---|---|
| Clauses checked | 9 | 28 |
| Demonstrably defective | 8 | 27 |
| 95% lower bound | 57% | **84%** |
| Implied defective clauses in the 360 | ≥206 | **≥302** |

Nothing about the corpus changed. What changed is how much of it has been looked at.

Two predicates are kept deliberately distinct: *demonstrably defective* (a contradiction or
a gap) drives the rate, while *withheld by the gate* (anything short of corroborated) drives
releases and fails closed. `hb_ca_sick` separates them — two of its assertions found no
source either way, which is absence of evidence and is not counted as a defect.

Newly confirmed, among others: `emp_finalpay` states the final-pay rule as absolute and
omits the 72-hour, 24-hour and next-payday industry exceptions; `msa_ca_auto_renew` describes
the automatic-renewal regime as it stood before AB 2863, in force since July 2025;
`msa_ca_925` repeats the *same* "primarily works" defect already confirmed in `ea_ca_925`,
so that error has propagated across clauses; `can_heat` asserts the indoor heat duty while
citing only the outdoor section.

## Two ladders, because a term is not a statute

The release gate was one number applied to all 360 clauses: reach `corroborated` on the
source ladder or the engine withholds you. That is right for a clause that says what the
law requires and a category error for a clause that says what the parties agree. A
payment-terms clause cites nothing because there is nothing to cite — grading it on
citations left all 191 drafting clauses permanently unreleasable for a reason that does
not apply to them. That is not a strict standard, it is a broken one.

| Track | Clauses | Ladder | Gate | Cleared by |
|---|---|---|---|---|
| authority (`assertsLaw: true`) | 169 | `verificationLevels` | `corroborated` | sources opened and read, assertions pinned to attested text |
| drafting (`assertsLaw: false`) | 191 | `draftingReviewLevels` | `counsel-reviewed` | a named lawyer who is not the author, on a recorded date, against a stated scope |

The ladders are blind to each other, and the tests assert it both ways: an authority clause
with a lawyer's signoff and no sources still fails, and a drafting clause with a full
citation stack and no review still fails. A statute does not tell you whether an indemnity
cap is the one you want; a lawyer's approval does not tell you what a statute says.

`self-reviewed` sits below the drafting gate on purpose — an author checking their own work
is not review, for the same reason two citations by one author are not corroboration. A
reviewer must be a named human with a role, a date and a stated scope; "the team", a tool
name, and a model name are all refused.

**Today both gates report 0 passing, for one root reason:** every clause's `assertsLaw`
classification is still `heuristic-unreviewed`, so which ladder it belongs on is not yet
established. `classifiedBy: "reviewed"` is not a magic string either — claiming it requires
naming who decided and when. That single review is now the cheapest unblocking step in the
repo: a binary judgement per clause, no statutes needed.

`npm run packet` writes `verification/drafting-review.md` — the 191 drafting clauses grouped
by document, ordered by cost of being wrong, each with its text, the fields it interpolates,
when it applies, how much of the 12,120-configuration space it actually reaches, and the
JSON to paste back once it has been read.

## The classification review, and what it already found

`npm run classify` writes the packet for the one field that blocks everything. It does not
classify anything — it reads each clause body for textual evidence of what kind of clause it
is, reports the facts it found ("the body cites a numbered provision"), and compares them
against the label already recorded. The two directions of disagreement are not equally bad:

| Recorded | Evidence says | | Count |
|---|---|---|---|
| drafting | authority | **Dangerous** — routed to a review that never checks for a missing legal requirement, which is this corpus's dominant defect | 7 |
| authority | drafting | **Stuck** — waiting on the authority ladder for a statute that does not exist | 12 |
| — | both | Ambiguous — cannot be read off the text | 10 |
| — | neither | Unevidenced — the recorded label rests on nothing checkable | 232 |
| — | agrees | Consistent | 99 |

That 232 is the headline finding: for two thirds of the corpus, the classification that
decides which ladder a clause is graded on rests on no evidence a reader can check.

The seven dangerous ones are named in the packet and should be decided first. `can_benefit_notices`
is the clearest: it lists the notices an employer must distribute at hire, recorded as a
negotiated term, so a commercial reviewer would never ask whether the list is complete.

Decisions go in the `decision` column of `verification/classification-review.csv`, then:

```
node templates/tools/classification-packet.mjs --apply verification/classification-review.csv \
  --by "Full Name" --on YYYY-MM-DD
```

Blank rows are skipped rather than defaulted, a malformed decision aborts the run without
writing anything, and a reviewer name that is a team, a tool, or a model is refused.

## Nothing from memory

The 360 clauses were written from model memory. Sampling put the defect rate at 89%, and
the dominant failure is omission — the qualifier that decides whether a rule applies is
exactly what memory drops. No review fixes that at the source, because the next clause
written the same way fails the same way.

`npm run provenance` makes the rule structural. Every clause body is hashed into
`templates/sources/authored.json`. A body that is new or changed may only enter the corpus
if it is **pinned to an attested source text** — otherwise the build fails:

```
2 clause(s) authored without a source:
  charter_name      modified   — body changed with no pin, the change can only have come from memory
  charter_invented  unrecorded — new clause with no pin, it can only have come from memory
```

The existing 360 are sealed as `memory-legacy`: grandfathered so the repo builds,
permanently marked so nobody mistakes them for sourced, and blocked from shipping by the
release gate regardless. Re-seeding is refused — relabelling modified clauses as legacy is
precisely the bypass the file exists to prevent.

## There should not be defects on source documents

Getting a text is not the same as getting a good text. A 404 page hashes as cleanly as a
statute; a copy truncated mid-subdivision pins perfectly and then authorises a clause
that omits whatever was cut off. `docdefects.mjs` runs 13 structural checks over every
document *before* it is stored — five fatal (error page, markup, damaged encoding, stub,
empty) and eight serious (cited section absent, truncation, a skipped subdivision,
out-of-order subdivisions, duplicated passages, a whole-chapter dump, no version marker,
extraction junk).

Fatal defects can never be stored. Serious ones require a named person to waive that
specific finding for a stated reason, which is kept in the record forever. There is no
`--force`. The inspection runs inside `put()` before any file is opened, and the test
suite asserts that ordering against the function's own source.

```
npm run inspect -- lab-925.txt --citation "Cal. Lab. Code §925"   # dry run, stores nothing
npm run texts:audit                                                # re-check what is stored
```

## Can the source texts be obtained here?

No, and this was tested rather than assumed:

| Route | Result |
|---|---|
| leginfo, Cornell, eCFR, Justia, FindLaw, govinfo, Congress, Caselaw Access Project + 6 more | HTTP 403 at the egress proxy |
| GitHub repository search | blocked — this session is scoped to one repository |
| `raw.githubusercontent.com` | reachable, but the legal repos are *parsers* that download from the blocked hosts |
| npm and PyPI | reachable, but every legal package is a *client* for a blocked API |

The tooling exists in abundance; the text lives on exactly the hosts that are denied.
`npm run egress` generates the allowlist request. Failing that, supply a text directly and
`npm run ingest` will store, hash, and attest it.

## Getting texts in: what is actually needed

No new connector is required. **Google Drive is already attached and tested** — it is the
delivery path. Save a provision as plain text, drop it in Drive, and `npm run ingest`
stores the bytes verbatim, hashes them, records who supplied them and from where, and
`npm run pin` ties each clause assertion to an exact quoted span. Run `npm run inspect`
on the file first — it reports what the store would refuse and why, without storing
anything.

`npm run shopping` ranks what to obtain first. 109 distinct provisions are cited by the
169 clauses that assert law; the drafting clauses need none of them. The ranking weights
each provision by how many clauses depend on it, their severity, whether they are drafted
automatically, and whether they already carry a confirmed defect — so the first few
documents buy the most verification.

The connectors were tested, not assumed:

| Connector | State | Use here |
|---|---|---|
| Google Drive | live | **the delivery path** — read a supplied text and ingest it |
| CourtListener | live, rate-limited | case law only; covers 1 of 130+ citations, which are overwhelmingly statutes |

## The honest summary

The clause text is illustrative content written by a model and is **not legal advice, not
measured data, and not fit for use.** An 89% sampled defect rate is a verdict on the
drafting method rather than on any individual draft: text written from model memory omits
qualifiers, and reviewing 169 such clauses costs more than composing them from attested
sources would. The pinning workflow in `templates/tools/pin.mjs` exists to invert that —
quote the provision, pin the assertion, and the omission failure largely cannot occur.
