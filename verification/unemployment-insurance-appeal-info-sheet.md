# Ending employment, new document: Unemployment Insurance Appeal — Information Sheet

## Why this document

The existing Unemployment Insurance Benefits — Claimant Information
Sheet and Employer's Response to Unemployment Insurance Claim
documents cover filing a claim and an employer's initial response.
Neither covers the appeal process after a determination is made — a
distinct, multi-level administrative and judicial process.

## What this document covers

7 clauses: 2 drafting (appeal request declaration, signature/
certification) and 5 authority clauses:

- **`uiappeal_right_and_deadline`** (Unemp. Ins. Code § 1328(a)) —
  the right to appeal a determination to an administrative law judge,
  the 30-day deadline running from service of notice, and both
  claimant and employer standing.
- **`uiappeal_hearing_process`** (Unemp. Ins. Code §§ 1951, 1952,
  1953) — the hearing process: telephone participation on request and
  good cause, relaxed evidence rules, and subpoena power.
- **`uiappeal_further_appeal_to_board`** (Unemp. Ins. Code §§ 1334(a),
  1336) — further appeal to the CUIAB itself, with the same 30-day
  deadline running from mailing of the ALJ's decision.
- **`uiappeal_judicial_review`** (Unemp. Ins. Code § 410; Code Civ.
  Proc. § 1094.5(a)) — judicial review after the CUIAB's decision, and
  its genuinely different six-month deadline.
- **`uiappeal_continued_benefits`** (Unemp. Ins. Code §§ 1326, 1375(a))
  — the honest finding that no forward-looking continued-benefits
  entitlement exists, and the backward-looking overpayment/waiver
  framework that actually applies.

## Genuine corrections and findings

- Confirmed § 1328(a) as the right-to-appeal and standing provision,
  and confirmed the 30-day deadline runs from service of the notice of
  determination (not its date), extendable for good cause (mistake,
  inadvertence, surprise, excusable neglect).
- Confirmed the hearing process citation location differs from the
  original assumption: Title 22 of the California Code of Regulations
  is not hosted on leginfo.legislature.ca.gov, and the official CCR
  host returned a server error on direct fetch. The actual, fully
  sufficient citations instead live directly in Unemployment Insurance
  Code Chapter 8's "Hearing Procedure" sections — §§ 1951 (telephone
  participation available on request and good cause), 1952 (relaxed
  evidence rules, full record, recorded testimony), and 1953
  (subpoena power).
- Confirmed further appeal to the CUIAB uses the same 30-day deadline
  (§ 1334(a)) as the first-level appeal, running from mailing of the
  ALJ's decision, with § 1336 as the substantive further-appeal
  section (not previously cited anywhere in this corpus).
- Confirmed judicial review under § 410 carries a genuinely different,
  six-month deadline — not the same 30-day period as the two
  administrative levels — paired with Code Civ. Proc. § 1094.5(a)'s
  writ of administrative mandate.
- **A significant correction, not merely a partial confirmation**: no
  forward-looking "continued benefits pending appeal" entitlement
  exists. Section 1326 ties payment directly to the EDD's own
  determination — filing an appeal does not independently trigger
  payment. The real mechanism runs the other direction: if a favorable
  determination already produced payments and is later reversed,
  § 1375(a) makes the recipient liable for the overpayment, subject to
  a non-fault/equity waiver.

## Honest gaps disclosed

- Title 22 CCR hearing regulations exist but were not independently
  verified — disclosed in the `uiappeal_hearing_process` clause.
- No case law confirms that § 410 judicial review specifically
  proceeds under Code Civ. Proc. § 1094.5 rather than ordinary
  mandate. CourtListener's rate limit was already exhausted before any
  search ran — disclosed honestly rather than fabricated.

## Method

Fetched Unemployment Insurance Code §§ 410, 1326, 1328, 1334, 1336,
1375, 1951, 1952, and 1953, and Code Civ. Proc. § 1094.5, directly
from `leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All 10 citation quotes programmatically confirmed as exact
substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every multi-citation
  clause either draws from genuinely distinct statutory sections
  (disclosed as such) or is honestly flagged as single-source with no
  independent second source found; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Certification") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`employeeName`, `companyName`) independently confirmed
  to match the existing UI Claimant and Employer Response documents'
  fields exactly. New fields: `appealingParty`, `eddCaseNumber`,
  `determinationDate`, `groundsForAppeal`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Unemployment Insurance Appeal — Information Sheet
  (`unemployment_insurance_appeal_info_sheet`), 7 clauses (5 authority
  + 2 drafting), in the Ending employment category. New fields:
  `appealingParty`, `eddCaseNumber`, `determinationDate`,
  `groundsForAppeal`.
- Corpus: 1,262 → 1,269 clauses; 159 → 160 documents.
