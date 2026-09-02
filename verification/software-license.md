# Confidentiality & IP, ninth document: Software License Agreement

## Why this document

Every existing IP document assigns ownership (copyright, patent,
trademark license as a use-permission but for marks not software).
This document is a genuinely distinct mechanism: licensing software
under copyright without transferring ownership — with real, litigated
doctrine on when a "license" is actually a "license" versus a sale in
disguise.

## What this document covers

7 clauses: 2 drafting (grant, warranty disclaimer) and 5 authority
clauses:

- **`swlicense_license_vs_sale`** (17 U.S.C. §§ 106, 109(a)) — the
  exclusive-rights/first-sale-doctrine framework underlying the
  license/sale distinction.
- **`swlicense_vernor_factors`** (*Vernor v. Autodesk, Inc.*, 621
  F.3d 1102 (9th Cir. 2010)) — the actual three-factor test for
  whether a software transaction is a license (no first-sale rights)
  or a sale.
- **`swlicense_clickwrap_enforceability`** (*Nguyen v. Barnes & Noble
  Inc.*, 763 F.3d 1171 (9th Cir. 2014)) — the clickwrap/browsewrap
  distinction and the actual/constructive-notice standard, with an
  honest note that the case applied New York law, not California.
- **`swlicense_exclusive_license_writing`** (17 U.S.C. §§ 101, 204(a))
  — that an exclusive license is treated as a transfer of copyright
  ownership and requires the same signed writing an assignment does.
- **`swlicense_warranty_disclaimer_basis`** (Cal. Com. Code § 2314) —
  an honest disclosure that whether the implied warranty of
  merchantability even applies to licensed (intangible) software is a
  genuinely unsettled, contested question.

## Honest gaps disclosed

- *Nguyen v. Barnes & Noble* applied New York law under the parties'
  choice-of-law clause, not California law — the court only noted the
  two states would reach the same result on the facts, so it never had
  to choose. Disclosed rather than presented as squarely California
  authority.
- The case-law question of whether software licensing counts as a
  "sale" of "goods" under UCC Article 2's merchantability warranty was
  not resolved — a promising case was found but CourtListener's daily
  rate limit prevented quote-verifying it before drafting concluded,
  so no case citation was forced in.

## Defect caught and fixed by the agent itself

The agent's own `{{` leak self-check caught a real leak in the
clickwrap clause's gap field before delivery and fixed it with plain
prose — confirmed clean on independent re-check during integration.

## Defect caught and fixed during integration

`swlicense_warranty_disclaimer_basis` cites a single statutory section
but initially lacked the standard explicit single-source disclosure
sentence — added during integration.

## Method

Fetched 17 U.S.C. §§ 101, 106, 109, 204 from `law.cornell.edu` and
Cal. Com. Code § 2314 from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical. *Vernor v. Autodesk* and *Nguyen v. Barnes &
Noble* verified via CourtListener against full opinion text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean on this final
  pass (one real leak was caught and fixed by the agent before
  delivery).
- Checked source-independence disclosure logic across all 5 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Software License Agreement (`software_license`), 7
  clauses (5 authority + 2 drafting), in the Confidentiality & IP
  category. New fields: `licensorName`, `licenseeName`,
  `softwareDescription`.
- Corpus: 697 → 704 clauses; 93 → 94 documents.
