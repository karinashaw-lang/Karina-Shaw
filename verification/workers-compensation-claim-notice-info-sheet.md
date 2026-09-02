# During employment, new document: Workers' Compensation Claim Notice — Information Sheet

## Why this document

Confirmed as a genuine gap: grep for "workers.compensation"/"workers
comp" across the corpus returned zero hits; a search for "5401"
returned only false-positive substring matches inside unrelated
trust-revocation statute citations (e.g. "§ 15401").

## What this document covers

9 clauses: 2 drafting (injury/claim declaration, signature/
certification) and 7 authority clauses:

- **`wcclaim_employee_notice_duty`** (Lab. Code § 5400) — the
  employee's duty to notify the employer of a work injury.
- **`wcclaim_employer_knowledge_equivalent_notice`** (§ 5402(a)) —
  the employer's actual knowledge as an equivalent to notice.
- **`wcclaim_claim_form_duty`** (§ 5401(a),(d)) — the employer's duty
  to provide the claim form and the tolling effect.
- **`wcclaim_claim_response_duty`** (§ 5402(b)(1),(c)) — the time
  limit to reject the claim and the presumption of compensability.
- **`wcclaim_statute_of_limitations`** (§ 5405) — the one-year time
  limit to file a claim, running from any of three alternative dates.
- **`wcclaim_exclusive_remedy_general_rule`** (§ 3600(a)) — workers'
  compensation as the exclusive remedy.
- **`wcclaim_exclusive_remedy_exceptions`** (§ 3602(a),(b)(1),(b)(2))
  — the narrow, named statutory exceptions.

## Genuine corrections and findings

- **A significant correction**: the 30-day employee notice duty is
  stated by § 5400, not § 5401 as originally framed. § 5401 is a
  different, employer-side duty — the claim-form duty.
- Confirmed § 5403's exception to the notice requirement is not a
  discretionary "good cause" standard — it turns on whether the
  employer was actually misled or prejudiced by the missing or
  defective notice, a materially different test than "did the
  employee have a good excuse."
- Confirmed § 5402(a)'s separate "employer already knew" exception.
- **A genuine correction on the "delay letter" mechanism**: § 5402
  confirms the 90-day (75-day for certain injury categories)
  presumption-of-compensability rule and the one-working-day/$10,000
  pre-decision treatment-authorization duty, but the statutory text
  contains no "delay letter" mechanism at all — that term is
  administrative-practice/regulatory vocabulary that could not be
  verified against a primary source this session, so it was omitted
  entirely rather than fabricated.
- **A correction on the limitations period**: § 5405's one-year
  period runs from any of three alternative dates — date of injury,
  expiration of disability payments, or the last date medical benefits
  were furnished — not from date of injury alone.
- **A significant correction on the exclusive-remedy exceptions**:
  § 3602(b) does not contain a general "intentional torts" exception.
  It names three specific, narrow exceptions: willful physical assault
  by the employer, fraudulent concealment of an existing injury, and a
  defective-product/third-party chain.

## Honest gaps disclosed

- The "DWC-1" form name/number is common shorthand but does not appear
  in § 5401's text itself; the implementing regulation (8 CCR) was not
  fetched, so this label is flagged as unverified terminology, not a
  sourced fact.
- Sections 3706 and 4558 (cross-referenced by §§ 3600(a)/3602(a) as
  further exclusivity exceptions) were named but not independently
  fetched or quoted.
- The 75-day-presumption injury categories cross-referenced in
  § 5402(b)(2) (§§ 3212-3213.2) were cited by reference only, not
  independently researched.
- No case law was used — this is a purely statutory topic.

## Method

Fetched Lab. Code §§ 5400, 5401, 5402, 5403, 5405, 3600, and 3602
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical after whitespace normalization. All citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — §§ 5400/5401/5402/
  5403/5405 (same chapter) and §§ 3600/3602 (same chapter) correctly
  disclosed as genuinely separate sections but not independent from
  each other within their respective groups; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus
  convention. New fields: `injuryDate`, `injuryDescription`,
  `employerNoticeDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Workers' Compensation Claim Notice — Information
  Sheet (`workers_compensation_claim_notice_info_sheet`), 9 clauses
  (7 authority + 2 drafting), in the During employment category. New
  fields: `injuryDate`, `injuryDescription`, `employerNoticeDate`.
- Corpus: 1,502 → 1,511 clauses; 189 → 190 documents.
