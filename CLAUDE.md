# DRAFT — AI legal document engine

Read this before doing anything. It exists so a new session does not have to re-derive
three days of findings.

## What this is

A single-file prototype (`draft-ai-engine.html`, compiled) over a clause corpus in
`templates/`. 360 clauses across 18 documents: NDA, incorporation, governance, employment,
commercial. The engine picks clauses by jurisdiction, entity type, industry and headcount
and assembles documents.

## The one thing to know

**The corpus is not shippable and must not be treated as a starting point for repair.**

34 clauses have been checked against primary sources. **33 were defective.** 95% lower
bound on the defect rate is 87%. The failure is the same every time, and it matters more
than the count:

> The clause reproduces statutory language accurately and drops the case law that says
> what the language means.

Examples, all confirmed against court opinions quoting the source:

- `hb_meal_rest`, `emp_meal` — "a missed meal period entitles the employee to one
  additional hour of pay". That is the *ensure* standard the California Supreme Court
  rejected in *Brinker*. The duty is to **relieve** the employee of duty; a break that was
  provided and worked through owes nothing. The error tells a small employer it owes money
  it does not owe.
- `ea_ca_925` — "any employee who primarily **works** in California". The statute reads
  "primarily **resides and** works". Covers people it does not cover.
- `ic_ca_abc` — prong C reads "an independently established trade of the same nature".
  The test is "trade, **occupation, or business** of the same nature **as that involved in
  the work performed**". A comparison with no second term.
- `nda_nonsolicit` — states as a categorical rule what *AMN* held on its facts.

This is what content written from memory looks like. It was written from memory — by an
earlier session of this assistant, before source access was attempted.

## The strategy, decided

**Do not repair the authority clauses one at a time.** Rebuild them from the statutory
text. Read the section, write the clause from what it says, cite it. 167 rebuilds is
cheaper than 167 investigations, and it removes the from-memory contamination instead of
patching around it.

The 193 drafting clauses are a different problem — they assert no law, so there is nothing
to verify. They need a named lawyer, and `npm run packet` produces what that person works
from.

## The standard

Two ladders, blind to each other by design (`templates/tools/review.mjs`):

- **Authority** (asserts law) → gate `primary-verified`. Needs two *distinct* primary
  hosts, at least one `publisher` tier, plus `readBy` and a check date.
- **Drafting** (asserts no law) → gate `counsel-reviewed`. Needs a named human. The
  validator refuses a reviewer that is a team, a tool, or a model. Citations do nothing here.

Tier test, in `templates/tools/sources.mjs`: *if this host and every other host disagreed,
whose version would be the law?* For California statutes that is only
`leginfo.legislature.ca.gov`. CourtListener is `mirror` — a court quoting a statute is
strong corroboration, never publisher tier.

Perfection is not the target and is not achievable in this domain. The target is: accurate
as of a date, traceable to the source, signed by a licensed person, re-checked on a
schedule.

## First actions in a new session

```
npm run probe        # is egress open? 17 hosts, all 403 as of 2026-08-18
npm test             # 14 suites
npm run check        # validator + build sync
npm run preview      # what applying the classification would change
```

If `probe` still reports refusals, egress was not opened — see `verification/EGRESS.md`.
Nothing can be verified until it is; do not fabricate around it.

## Open items

1. **Classification proposals are recorded but NOT applied.** All 360 calls are in
   `verification/classification/proposals.json` (a per-document default plus named
   exceptions, with reasons). Applying needs:
   `npm run classify -- --apply verification/classification/proposed-decisions.csv --by "<name>" --on <date>`
   The user (Karina Shaw) approved this. It was blocked by the permission classifier, not
   by the repo. 167 authority / 193 drafting; 58 differ from the current heuristic labels.
2. **133 law clauses never checked.** `npm run queue` orders by consequence.
3. **12 validator warnings** are citations that name a body of law but no provision.

## Hard rules, carried from the user

- Nothing from memory. Get the source text.
- Everything checked against the law, or it is not used.
- Never fabricate a human signoff. A test `--apply` with an invented reviewer was written
  once and deliberately reverted.
- Do not use GitHub, npm or package mirrors as legal-content sources.
- Do not retry organization egress denials (403/407) — report them.

## Commands

`test` `validate` `build` `check` `probe` `verify` `queue` `packet` `classify` `proposals`
`preview` `egress` `texts` `pins` `lint` `holdout` `propagation` `sources` `cost`
`provenance` `inspect` `plan` `findings` `ingest` `audit`
