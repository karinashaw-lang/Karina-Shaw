# Estate Planning, new document: Transfer of a Decedent's Firearm by Operation of Law — Information Sheet

## Why this document

First processed item of wave 144 (Estate Planning slot, 1×4
pattern). The agent's novelty check confirmed the corpus's existing
firearm-relinquishment clauses all concern DVPA restraining orders,
not estate administration, and ruled out several other candidate
topics (Heggstad petitions, Proposition 19 reassessment) as already
covered. A personal duplication spot-check independently confirmed
zero prior corpus hits on §§ 16990, 27545, or 27920, and confirmed
`firearmDescription` is a genuinely new field id not otherwise present
in the corpus's field set.

## What this document covers

6 clauses: 2 drafting (intro, closing limitations) and 4 authority
clauses, citing Pen. Code § 27545, § 16990(a), (h), (k)-(l), § 27920(a),
(a)(1), (b)(1), (c)(1):

- **`firearmopl_general_dealer_rule`** — the baseline rule that
  private firearm transfers must go through a licensed dealer.
- **`firearmopl_operation_of_law_categories`** — which estate/trust-
  related transfers count as "by operation of law" (three citations).
- **`firearmopl_exemption_conditions_reporting`** — the exemption's
  own conditions and the 30-day DOJ reporting requirement (two
  citations).
- **`firearmopl_out_of_state_import`** — the separate provision for
  bringing an out-of-state decedent's firearm into California (two
  citations).

## Genuine findings

- **Two genuine citation defects found and corrected during
  integration review, not silently accepted**: the delivered quotes
  for § 16990(a) and § 16990(k)-(l) each inserted a space at an
  enumerated-item boundary ("firearm: (a)" and "trust. (l)") that does
  not exist in the actual source text — leginfo's HTML has the
  punctuation directly adjacent to the opening parenthesis with no
  character at all between them (only a non-breaking space after each
  letter, which is separately and correctly normalized elsewhere in
  this document). This is a different category from the established
  "normalize an existing artifact character" exception: no character
  existed at that position in the source for the delivered quote to
  normalize. Both instances were corrected by removing the inserted
  space so the quotes match the source exactly, confirmed against a
  freshly and independently fetched copy of § 16990, and the
  correction is disclosed directly in the clause's `gap` field.
- **A disclosed narrow list of estate-relevant categories out of a
  much longer statutory list**: the categories clause's gap states
  § 16990 defines 19 lettered instances total, of which only 4 concern
  routine estate/trust administration — the other 15 (secured
  creditors, levying officers, receivers, bankruptcy trustees, and
  others) are named but not restated as being outside this document's
  scope.
- **A disclosed non-determination of prohibited-person status**: the
  exemption-conditions clause's gap states plainly that whether any
  specific person is "not prohibited by state or federal law" from
  possessing a firearm is a separate, fact-dependent question this
  document does not resolve.

## Honest gap(s) disclosed

This document does not restate 15 of § 16990's 19 lettered
instances, § 27920(a)(2)-(a)(4)'s alternative reporting/safety-
certificate conditions for certain other categories of recipient,
the remaining numbered conditions within § 27920(b) and (c) beyond
who qualifies, or § 27920(d)'s unrelated federal-import exemption. It
does not submit any report to the Department of Justice, does not
determine whether a specific person is a prohibited person, and does
not address firearms separately regulated under the federal National
Firearms Act.

## Method

Fetched Pen. Code §§ 16990, 27545, and 27920 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical. All 8 citation instances were checked by the research
agent via direct substring slicing from the fetched source text, then
re-verified against the final delivered JSON — a check that did not
catch the two inserted-space defects because the agent's own
verification script apparently normalized whitespace in both the
source and the quote before comparing, masking the added character.

Independently re-verified during integration review via a two-
hundred-and-thirty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-238thVerify-FirearmTransferOperationOfLaw/1.0")
of all three statutory sections — all fetched cleanly on the first
attempt. This review's own strict (non-whitespace-collapsing) direct
substring check caught the two inserted-space defects described
above; both were corrected and reconfirmed clean against the same
fresh fetch on a whitespace-normalized basis (consistent with the
already-disclosed nbsp-after-subdivision-letter normalization). The
baseline dealer-transfer rule, the four estate-relevant operation-of-
law categories, the exemption's conditions and 30-day reporting
requirement, and the out-of-state import provisions were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All three cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-eighth independent fetch during integration
  review; all 8 citation instances confirmed clean after correcting
  two inserted-space defects found during this review.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `firearmopl_` prefix has zero collisions. Ran section-
  number-specific greps for "16990," "27545," and "27920" — zero hits
  on all, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- One new field id required: `firearmDescription` — confirmed, via a
  corpus-wide field-id lookup, that no existing field captures
  firearm-specific make/model/serial-number description semantics,
  which the statute's own reporting requirement keys on. All six
  other fields (`decedentName`, `dateOfDeath`,
  `personalRepresentativeName`, `trusteeName`, `survivingSpouseName`,
  `relationshipToDecedent`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Transfer of a Decedent's Firearm by Operation of Law
  — Information Sheet (`firearm_transfer_operation_of_law_info_sheet`),
  6 clauses (4 authority + 2 drafting), in the Estate Planning
  category. One new field (`firearmDescription`).
- Corpus: 4,774 → 4,780 clauses; 592 → 593 documents. First processed
  item of wave 144.
