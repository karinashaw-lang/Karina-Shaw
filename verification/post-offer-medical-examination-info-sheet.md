# Hiring, new document: Post-Offer, Pre-Employment Medical Examination — Information Sheet

## Why this document

The corpus's existing Background Check, Drug Testing, and ADA
Reasonable Accommodation documents don't cover when an employer may
require a job applicant to undergo a medical examination. Confirmed as
a genuine, zero-hit gap; the delivering agent read all three related
documents in full before drafting to avoid duplication.

## What this document covers

6 clauses: 2 drafting (purpose declaration, acknowledgment) and 4
authority clauses:

- **`medexam_preoffer_prohibition`** (42 U.S.C. § 12112(d)(2)(A)-(B);
  29 C.F.R. § 1630.14(a); Gov. Code § 12940(e)(1)-(2)) — no medical
  exams or disability inquiries before a job offer.
- **`medexam_postoffer_permitted`** (42 U.S.C. § 12112(d)(3)(A); 29
  C.F.R. § 1630.14(b); Gov. Code § 12940(e)(3)) — a post-offer exam
  may be required, under a genuinely different federal vs. state
  standard.
- **`medexam_confidentiality`** (42 U.S.C. § 12112(d)(3)(B); 29 C.F.R.
  § 1630.14(b)(1)) — confidentiality requirements and their three
  limited exceptions.
- **`medexam_withdrawal_standard`** (29 C.F.R. § 1630.14(b)(3); Gov.
  Code § 12940(a)(1)) — the standard if the exam reveals a disability.

## Genuine corrections and findings

- **A significant correction to the FEHA subsection numbering**: the
  applicant-stage medical-exam rule is Gov. Code § 12940(e), not (f)
  as older sources might suggest — § 12940(f) now governs
  current-employee exams. Verified directly against the current
  statute rather than assumed.
- **A significant, non-obvious divergence finding**: California's
  § 12940(e)(3) requires the post-offer exam itself to be "job related
  and consistent with business necessity" — the federal ADA statute
  has no such express requirement, and the EEOC's own regulation (29
  C.F.R. § 1630.14(b)(3)) affirmatively states federal post-offer
  exams "do not have to be job-related and consistent with business
  necessity," with that standard applying only if results are later
  used to screen someone out. This is a real, sourced divergence
  between the two laws, not a restatement of one by the other.
- Confirmed no confidentiality provision exists within Gov. Code
  § 12940 itself paralleling the ADA's separate-forms/separate-files
  rule — disclosed conservatively as limited to this specific statute,
  not a claim that California has no other medical-confidentiality
  law generally.
- Confirmed the withdrawal-after-exam standard is sourced precisely:
  the federal point from a regulation addressed specifically to
  post-offer exams, the California point from FEHA's general
  disability-discrimination carve-out (no FEHA provision addressing
  post-offer withdrawal as specifically as the federal regulation
  does) — disclosed as two independent sources reaching a similar
  result, not one confirming the other.

## Honest gap disclosed

No case law was needed or fetched — the statutory/regulatory text
sufficiently covered every planned sub-topic, so nothing had to be
omitted for unverifiability. A WebFetch cross-check on
law.cornell.edu was blocked by the environment's egress proxy; this
did not affect verification since the required double-fetch was
already satisfied via two independent curl calls per source with
distinct User-Agents.

## Method

Fetched 42 U.S.C. § 12112 from `law.cornell.edu`, 29 C.F.R. § 1630.14
from `ecfr.gov` and `law.cornell.edu`, and Cal. Gov. Code § 12940 from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
text-identical after HTML-tag stripping. All 12 citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — federal statute vs.
  regulation correctly treated as one connected source where
  appropriate (confidentiality clause), and federal vs. California law
  correctly treated as independent throughout; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic title reuses ("Purpose of This Information Sheet";
  "Acknowledgment") — consistent with the corpus-wide generic-title-
  reuse pattern.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Post-Offer, Pre-Employment Medical Examination —
  Information Sheet (`post_offer_medical_examination_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 1,726 → 1,732 clauses; 219 → 220 documents. First document
  of wave 43.
