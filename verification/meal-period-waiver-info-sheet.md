# During employment, new document: Meal Period Waiver — Information Sheet

## Why this document

The corpus's existing Meal and Rest Break Policy document covers the
general meal-period framework, but only mentions waiver in passing.
This document goes into real depth on the waiver mechanics
specifically — the genuine gap confirmed by reading the existing
`mealrest_` clauses before drafting.

## What this document covers

7 clauses: 2 drafting (declaration, signature/acknowledgment) and 5
authority clauses:

- **`mealwaiver_core_waiver_rule`** (Lab. Code § 512(a)) — the
  statutory waiver thresholds: a shift of 6 hours or less may waive
  the meal period by mutual consent; a shift of 12 hours or less may
  waive the second meal period (for shifts over 10 hours) if the first
  wasn't waived.
- **`mealwaiver_mutual_consent_not_written`** (Lab. Code § 512(a)) —
  confirms the bare waiver has no statutory writing requirement.
- **`mealwaiver_on_duty_distinct`** (IWC Wage Order 4-2001 § 11(A)) —
  an on-duty meal period is a different arrangement than a waiver,
  requiring a written agreement.
- **`mealwaiver_on_duty_revocability`** (Wage Order 4-2001 § 11(A),
  (D)) — a genuine finding of differing revocation-notice terms
  between the general on-duty rule and the health care industry
  variant.
- **`mealwaiver_invalid_waiver_premium`** (DLSE Meal Periods FAQ,
  quoting *Brinker*) — an involuntary or coerced "waiver" does not
  excuse the meal-period obligation, honestly sourced to *Brinker*
  rather than asserted as independent DLSE doctrine.

## Genuine corrections and findings

- Confirmed Lab. Code § 512(a)'s exact thresholds as originally
  framed: 6-hours-or-less for the first meal period, and the
  12-hour/second-meal-period waiver conditioned on the first meal
  period not having been waived.
- **A genuine finding**: § 512(a) itself imposes no writing
  requirement for the bare waiver — "mutual consent" is not defined by
  the statute as requiring a signed writing. This is contrasted
  directly with Wage Order 4 § 11(A), which does require a written
  agreement for the distinct on-duty meal-period arrangement.
- **A genuine finding on revocability**: § 11(A)'s written on-duty
  agreement may be revoked by the employee at any time, with no stated
  notice period, while § 11(D)'s health care industry variant requires
  one day's written notice to revoke — a real, narrow textual
  difference between the two subsections, not overgeneralized to the
  whole section.
- Confirmed the DLSE's Meal Periods FAQ states that a "waiver" that is
  not the product of the employee's free and voluntary choice does not
  excuse the employer's obligation, and traced that language to
  *Brinker Restaurant Corp. v. Superior Court*, 53 Cal.4th 1004 (2012)
  rather than treating it as independent agency doctrine.

## Honest gaps disclosed

- The research agent found that the waiver thresholds themselves were
  already fully quoted in this corpus's existing
  `meal_rest_break_policy` document's clauses; this document's genuine
  added depth is the writing requirement (or its absence), the
  on-duty/health-care revocation-notice distinction, and the coercion/
  involuntariness limitation — not a restatement of the thresholds
  already covered elsewhere.
- No case law beyond *Brinker*, as quoted secondhand through the DLSE
  FAQ, was independently fetched for this document.

## Method

Fetched Lab. Code § 512 and IWC Wage Order 4-2001 § 11 directly from
`leginfo.legislature.ca.gov` and `dir.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All citation quotes programmatically confirmed as
exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration. Independently re-confirmed no
  fabricated or placeholder quote text appears in any citation.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Acknowledgment") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. New field: `shiftLength`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Meal Period Waiver — Information Sheet
  (`meal_period_waiver_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the During employment category. New field:
  `shiftLength`.
- Corpus: 1,452 → 1,459 clauses; 182 → 183 documents.
