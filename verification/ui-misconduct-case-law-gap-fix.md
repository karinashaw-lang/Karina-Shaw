# Ending employment, gap fix: Amador case law added to UI Claimant Information Sheet

## Why this fix

A research agent assigned to draft a standalone document on the UI
misconduct-disqualification standard (Unemp. Ins. Code § 1256) found
substantial pre-existing overlap: the existing `ui_claimant_info_sheet`
document's `uiclaimant_disqualification_standard` clause already
quotes § 1256's core disqualification rule, the rebuttable
presumption, and the domestic-violence/spousal-relocation good-cause
categories — and its own `gap` field explicitly discloses that its
drafter tried and failed (CourtListener rate limit) to locate case
law construing "misconduct"/"good cause." The agent honestly flagged
this rather than shipping a third document that would restate the
same statutory sentence a third time, and recommended patching the
existing document instead. Following that recommendation.

## What changed

Added two new authority clauses to the existing `ui_claimant_info_sheet`
document, inserted immediately after `uiclaimant_disqualification_standard`
in its `clauseOrder` — the genuinely new content the flagged gap
called for, with the duplicative statutory-rule clauses from the
agent's original batch discarded rather than merged:

- **`uimisconduct_case_law_standard`** — the California Supreme
  Court's definition of "misconduct" in *Amador v. Unemployment Ins.
  Appeals Bd.* (1984) 35 Cal.3d 671 (adopting *Maywood Glass Co. v.
  Stewart*'s willful-or-wanton-disregard standard, and distinguishing
  it from mere inefficiency, ordinary negligence, or good-faith
  errors in judgment), plus the code's "fault" policy rationale and
  the case's own holding (a hospital employee's good-faith refusal to
  perform a procedure she believed would jeopardize patient health
  was not "misconduct").
- **`uimisconduct_good_cause_case_law_crossover`** — *Amador*'s
  observation that good-cause case law informs the misconduct
  standard (a refusal justified by good-cause-level reasons is not
  misconduct), its reiteration of the general "good cause" formula,
  and the good-faith-error-in-judgment limiting principle — each
  explicitly attributed to *Amador* itself (the opinion actually
  read), not to the further cases *Amador* quotes (Gibson, California
  Portland Cement, Delgado), which were not independently verified.

The document's description was updated to mention this addition. No
new fields — both clauses reuse the document's existing
`employeeName`/`companyName`/`separationDate` fields (though neither
clause actually uses a `{{placeholder}}`, since both state general
legal authority rather than case-specific facts).

## Genuine corrections and findings

- **The central finding**: verified via directly-read case law
  (*Amador*) the precise legal test that distinguishes disqualifying
  "misconduct" from mere inefficiency, unsatisfactory performance, or
  good-faith errors — filling exactly the gap the corpus's own
  existing clause flagged as unresolved.
- Confirmed the crossover principle between the "good cause" and
  "misconduct" doctrines — a refusal justified by good-cause-level
  reasons doesn't become misconduct merely because it's phrased as a
  refusal rather than a resignation.
- Honestly attributed quotations *Amador* itself draws from other
  cases (*Maywood Glass Co.*, *Gibson*, *California Portland Cement*,
  *Delgado*) to *Amador*'s own opinion rather than implying
  independent verification of those underlying cases.

## Discarded content (from the original research batch)

The agent's original delivery included a full standalone document's
worth of clauses restating § 1256's core rule and its statutory
good-cause categories (compulsory retirement under a CBA,
seniority-based layoff election) — genuinely accurate but largely
duplicative of `uiresponse_disqualification_standard` and
`uiclaimant_disqualification_standard`. Rather than force a
low-value third repetition of the same statutory text, only the two
clauses containing genuinely new content (the *Amador* case law) were
kept. The two additional statutory good-cause categories the agent
found (compulsory retirement, seniority layoff election) were not
separately added, to avoid the complexity of cleanly excerpting them
from a combined block quote without disturbing already-verified
content in the existing clause; this remains an available, smaller
future addition if wanted.

## Method

The underlying research agent fetched Unemp. Ins. Code § 1256 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
twice with distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. Read and verified *Amador v. Unemployment
Ins. Appeals Bd.* (1984) 35 Cal.3d 671 directly via CourtListener
(opinion id 9571860). All 4 citation quotes across the 2 kept
authority clauses programmatically confirmed as exact substrings/
quotes of the confirmed source.

## Verification

- Checked for `{{` leakage in both new clauses' `title`/`gap` and
  every citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — both clauses
  correctly disclosed as drawing on the same *Amador* opinion, not
  independent of each other; the underlying cases *Amador* itself
  quotes are correctly disclosed as not independently verified.
- Checked for duplicate clause IDs against the full corpus (none).
- No new fields; both clauses use the document's existing field set.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- `ui_claimant_info_sheet` document: added 2 new authority clauses
  (`uimisconduct_case_law_standard`,
  `uimisconduct_good_cause_case_law_crossover`) to its `clauseOrder`,
  filling a gap the document's own existing clause had flagged. No
  new document; no new fields.
- Corpus: 2,581 → 2,583 clauses; documents unchanged at 336. Second
  addition of wave 72 (a gap-fix, not a new document — the fourth
  document slot for Ending employment remains open).
