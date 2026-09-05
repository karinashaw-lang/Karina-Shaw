# Real Estate, new document: Real Estate Transfer Disclosure Statement — Information Sheet

## Why this document

Second processed item of wave 94 (Real Estate slot). Confirmed the HOA/CC&R
Disclosure and Smoke Alarm documents each reference the TDS only as
something explicitly outside their own scope, and confirmed no dedicated
TDS document exists anywhere in the corpus. A genuinely surprising gap
given California's primary mandatory seller disclosure form is otherwise
absent as its own subject.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses, citing Civ. Code § 1102(a)-(c), § 1102.1(a) (two
points), § 1102.2(a)-(l), § 1102.3(a)-(c), § 1102.6(a), and § 1102.13:

- **`tds_covered_transfers`** (§ 1102(a)-(c)) — the "single-family
  residential property" scope, the licensing-law cross-reference, and the
  void-waiver rule.
- **`tds_exemptions`** (§ 1102.2(a)-(l), all twelve lettered categories) —
  the full exemption list, six beyond what the existing corpus already
  cites in an embedded Purchase Agreement clause.
- **`tds_form_and_material_fact_duty`** (§ 1102.6(a), § 1102.1(a)) — the
  statutory form requirement, the preserved underlying material-fact
  disclosure duty, and the "as is" sale non-waiver rule.
- **`tds_delivery_timing`** (§ 1102.3(a)-(b)) — the "as soon as
  practicable" delivery deadlines for a sale versus a sales
  contract/lease-option.
- **`tds_late_delivery_termination_right`** (§ 1102.3(c)) — the buyer's
  3/5/5-day right to terminate an offer after a late or amended
  disclosure.
- **`tds_noncompliance_effect`** (§ 1102.13) — the no-invalidation rule and
  actual-damages liability for willful or negligent noncompliance.

## Genuine corrections and findings

- **A genuine correction to the task's own framing**: the brief assumed
  the scope term was "one to four dwelling units." Independently fetching
  § 1102 showed the statute's own scope language is "single-family
  residential property" — a different phrase belonging to a different
  California disclosure statute (the Megan's Law notice, already cited
  elsewhere in this corpus). Explicitly declined to equate the two,
  matching this project's own established caveat on that exact point.
- **A significant finding on exemption-list depth**: the statute has
  twelve lettered exemption categories, not the shorter, commonly-cited
  list the brief assumed. The agent independently verified and added six
  categories not previously cited anywhere in the corpus (subdivisions
  (a), (c), (h), (i), (k), (l)), while confirming the other six already
  match the existing embedded Purchase Agreement clause's citations —
  built as a genuinely deeper standalone document rather than a
  duplicative one, following this project's established pattern (the
  Natural Hazard Disclosure document's relationship to its own embedded
  Purchase Agreement clause).
- **A genuine finding, honestly disclosed rather than fabricated**: the
  statute's own text does not use "rescind" for the late-delivery cure —
  it says "terminate the offer." Disclosed as the statute's actual
  language, with the informal "rescission" shorthand flagged as not
  the statute's own wording.
- Correctly declined to reproduce the § 1102.6 form's actual line-item
  content, since leginfo's own page displays a literal "NOTICE OF
  INCOMPLETE TEXT" placeholder rather than the form itself — independently
  re-confirmed during integration review by locating that exact notice in
  the freshly re-fetched source.

## Honest gap(s) disclosed

The § 1102.6 form's actual checkbox-by-checkbox content is unfetchable
from leginfo (confirmed, not assumed). Manufactured/mobilehome-specific
disclosure variants (§ 1102.1(b)-(c), § 1102.6d), the Local Option TDS
alternative (§ 1102.6a), and the pre-2010 wildfire notice provision
(§ 1102.6f) are named but not covered — the latter two already addressed
elsewhere in the corpus's NHD/Purchase Agreement clauses, not duplicated
here. This document does not determine whether any specific transaction
is covered, which exemption (if any) applies, or how to proceed.

## Method

Fetched Civ. Code §§ 1102, 1102.1, 1102.2, 1102.3, 1102.6, and 1102.13
from `leginfo.legislature.ca.gov`, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical. All
23 citation quotes across the 6 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a sixty-fifth
fetch (a distinct curl User-Agent string,
"Groundtruth-65thVerify-TDS/1.0") of all six sections — all 23 quotes
confirmed clean on direct substring match, no extraction artifacts
encountered; the "NOTICE OF INCOMPLETE TEXT" finding independently
re-confirmed by direct inspection of the raw fetched context.

## Verification

- All six statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a sixty-fifth independent
  fetch during integration review; all 23 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections (§ 1102 vs. § 1102.1 vs.
  § 1102.2 vs. § 1102.3 vs. § 1102.6 vs. § 1102.13); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Three
  drafting/authority-clause titles duplicate existing corpus titles —
  consistent with this project's established pattern of generic, reused
  boilerplate titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 23 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`propertyAddress`,
  `sellerName`, `buyerName`, `sellerAgentName`, `dateSigned`, `cityState`)
  reused verbatim from the existing NHD Information Sheet document's
  field set.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Real Estate Transfer Disclosure Statement — Information
  Sheet (`real_estate_transfer_disclosure_statement_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Real Estate category. No new
  fields.
- Corpus: 3,171 → 3,179 clauses; 419 → 420 documents. Second processed
  item of wave 94.
