# Estate Planning, new document: Charitable Remainder Trust — Basics Information Sheet

## Why this document

First processed item of wave 97 (Estate Planning slot, 2×2 pattern
targeting Business Formation and Estate Planning — tied at the corpus
low of 54 documents each before this wave). A scoping pass confirmed
"charitable remainder" appeared only once in the corpus, as a triggering
example inside a trustee-notification-duty clause — the substantive CRT
structure itself was uncovered. Confirmed distinct from the existing
Registry of Charitable Trusts information sheet, which covers California
state-law registration/reporting duties, not the federal tax-law
qualification structure — this document's own `crt_distinction_from_
registration_sheet` clause draws that line explicitly.

## What this document covers

8 clauses: 3 drafting (intro, a distinguishing note, acknowledgment) and
5 authority clauses, citing 26 U.S.C. §§ 664(a), (b), (c)(1), (d)(1)-(2)
and § 170(f)(2)(A):

- **`crt_basic_structure`** — the split-interest structure (income
  interest for a term, remainder to charity).
- **`crt_annuity_trust_structure`** — the CRAT's fixed "sum certain"
  payout, 5%-50% of initial trust value.
- **`crt_unitrust_structure`** — the CRUT's fixed-percentage payout
  revalued annually, and the net-income/make-up exception.
- **`crt_payout_and_remainder_tests`** — the central finding: both the
  5%-50% payout range and the 10%-minimum-remainder-value test are
  stated directly within § 664(d) itself, not in a separate section.
- **`crt_tax_treatment_and_deduction`** — the trust-level income tax
  exemption and the § 170(f)(2)(A) charitable deduction eligibility
  rule that gives the CRT structure its tax significance.

## Genuine findings

- **A correction to the research brief's own uncertainty**: the brief
  flagged the 10%-minimum-remainder-value test as possibly living in a
  different Code section or in Treasury regulations, asking the agent
  to check rather than assume. The agent verified it is in fact stated
  directly in § 664(d)(1)(D) (for the CRAT) and § 664(d)(2)(D) (for the
  CRUT), each cross-referencing § 7520 for the valuation method —
  independently re-confirmed during integration review via a fresh
  fetch of § 664.
- **Consistently disclosed verification-tier boundaries**: every
  authority clause names specific adjacent topics not independently
  verified from primary text (short first-year sum-certain adjustments,
  flip-unitrust rules, § 7520's own discount-rate mechanics, AGI-based
  deduction limits, ordinary-income/short-term-capital-gain property
  reduction rules, gift/estate tax deductions, and UBTI excise tax
  computation) — a genuinely thorough set of honest limitations rather
  than a single generic disclaimer.
- Correctly used no case law, a legitimate and disclosed choice for a
  purely statutory/regulatory topic.

## Honest gap(s) disclosed

This document does not walk through the § 7520 present-value
computation, the make-up computation for a net-income unitrust, the
"flip" unitrust rules (found in Treasury regulations, not independently
verified), the severance-of-additional-contributions mechanics of
§ 664(d)(4), AGI-based deduction percentage limits, property-type
deduction reductions, gift/estate tax charitable deductions, or the
excise tax computation for unrelated business taxable income. This
document is not a trust instrument and does not itself create, qualify,
or fund any trust.

## Method

Fetched 26 U.S.C. § 664 from `uscode.house.gov` and § 170 from Cornell
LII (`law.cornell.edu`), each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical (the § 664
fetches differed only in embedded JSF session-id boilerplate; the
Cornell fetches were byte-identical even at the raw HTML level). All 8
citation quotes programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via a
seventy-sixth fetch (a new distinct curl User-Agent string,
"Groundtruth-76thVerify-CRT/1.0") of both § 664 and § 170 — all 8 quotes
confirmed clean on direct substring match after HTML stripping and
whitespace normalization, no extraction artifacts encountered.

## Verification

- 26 U.S.C. §§ 664 and 170 each fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  seventy-sixth independent fetch during integration review; all 8
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- One new field required: `charityBeneficiaryName` (the qualified
  charitable remainder beneficiary) — confirmed genuinely new via a
  corpus-wide field-id check before being added; all other fields
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Charitable Remainder Trust — Basics Information Sheet
  (`charitable_remainder_trust_basics_info_sheet`), 8 clauses (5
  authority + 3 drafting), in the Estate Planning category. One new
  field: `charityBeneficiaryName`.
- Corpus: 3,247 → 3,255 clauses; 430 → 431 documents. First processed
  item of wave 97.
