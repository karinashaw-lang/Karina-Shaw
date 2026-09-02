# Real Estate, tenth new document: Home Improvement Contract

## Why this document

The existing Mechanics Lien Preliminary Notice document covers a
contractor's lien rights for nonpayment. This document covers the
distinct underlying contract itself — the actual, heavily regulated
agreement between a homeowner and a licensed contractor for home
improvement work under California's Contractors State License Law.
Confirmed non-overlap against every `mechlien_` clause before
drafting.

## What this document covers

8 clauses: 3 drafting (parties/license/project terms, three-day
right-to-cancel notice with statutory form language, mechanics lien
warning/CSLB notice) and 5 authority clauses:

- **`homeimprove_contract_required_and_writing`** (Bus. & Prof. Code
  § 7159(b), (c)(3)(A), (d), (d)(1), (e)(1)-(2), (e)(5)) — the $500
  threshold, writing requirement, and required disclosure notices
  (CGL insurance, workers' comp, CSLB contact/unlicensed-contractor
  risk).
- **`homeimprove_downpayment_and_progress_payments`** (Bus. & Prof.
  Code § 7159(d)(8)(C); § 7159.5(a)(3), (5), (8), (b)(1)) — the exact
  $1,000/10% down-payment cap, the prohibition on paying for
  incomplete work, the bonded-contractor exemption, and the
  misdemeanor penalty for violations.
- **`homeimprove_right_to_cancel`** (Bus. & Prof. Code § 7159(e)(6)(A),
  (e)(6)(B)(i), (e)(7)(A)) — the three/five/seven-day right-to-cancel
  framework.
- **`homeimprove_unlicensed_contractor_consequences`** (Bus. & Prof.
  Code § 7031(a), (b), (e)) — the bar on an unlicensed contractor
  recovering compensation, the homeowner's right to recover all
  compensation paid, and the narrow substantial-compliance exception.
- **`homeimprove_service_repair_contract_distinction`** (Bus. & Prof.
  Code § 7159.10(a)(1), (b)) — the narrower, more lightly regulated
  "service and repair contract" category and its fallback rule.

## Genuine correction caught during research

The task brief pointed to § 7159.5 as the source of the home-
improvement-contract-versus-service-and-repair-contract distinction.
Direct review shows that's wrong — § 7159.5 actually restates the
payment rules (down-payment cap, no-payment-for-incomplete-work) with
its own misdemeanor enforcement provision; the real HIC-versus-
service-and-repair distinction lives in the separate § 7159.10.
Corrected and disclosed rather than conflated.

## Additional findings beyond the task brief

- A bonded-contractor exemption (§ 7159.5(a)(8)) frees a contractor
  furnishing a qualifying performance/payment bond, lien-and-completion
  bond, or approved joint control from the down-payment cap and
  progress-payment restrictions — a real carve-out the brief didn't
  ask about.
- The contractor's-license bond (§ 7071.6, a condition of licensure)
  was confirmed as a distinct instrument from the contract's own
  performance-and-payment-bond notice (§ 7159(c)(6)) — kept separate
  rather than conflated.
- Confirmed the current version of § 7159 reflects a January 1, 2026
  amendment (Stats. 2025, Ch. 585, SB 517).

## Method

Fetched Business and Professions Code §§ 7031, 7159, 7159.5, 7159.10,
7071.6 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Home Improvement Contract
  (`home_improvement_contract`), 8 clauses (5 authority + 3 drafting),
  in the Real Estate category. New fields: `homeownerName`,
  `contractorName`, `contractorLicenseNumber`, `contractPrice`,
  `startDate`, `completionDate` (`propertyAddress` reused from
  existing conventions).
- Corpus: 704 → 712 clauses; 94 → 95 documents.
