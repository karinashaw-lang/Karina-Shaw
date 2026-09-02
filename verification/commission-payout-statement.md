# Ending employment, new document: Commission Payout Upon Termination — Statement of Earned but Unpaid Commissions

## Why this document

The existing Commission Agreement document covers the ongoing commission
structure during employment. The existing Waiting-Time Penalty Demand
Letter document covers general final-wage timing. Neither addresses the
genuinely distinct, prerequisite question this document covers: whether
a commission was already *earned* before termination (as opposed to
merely anticipated), and the lawful-contingency-vs-unlawful-forfeiture
line courts use to answer that.

## What this document covers

7 clauses: 2 drafting (declaration, statement/signature) and 5 authority
clauses:

- **`commpayout_wages_include_commissions`** (Lab. Code § 200(a);
  *Steinhebel v. L.A. Times Commc'ns, LLC*, 126 Cal.App.4th 696 (2005))
  — commissions are expressly "wages," which is what triggers the
  final-pay-timing rules covered elsewhere in this document set.
- **`commpayout_no_special_termination_default`** (Lab. Code § 2751) —
  an honest negative finding: the commission-writing statute sets no
  separate termination-triggered payout rule of its own.
- **`commpayout_earned_vs_contingent`** (*Steinhebel*, two passages) —
  the condition-precedent distinction: a payment made before an agreed
  contingency occurs is legally an advance, not a wage.
- **`commpayout_agreement_terms_control`** (*Steinhebel*, quoting
  *Commeford v. Baker*, 127 Cal.App.2d 111 (1954)) — no single universal
  trigger; the commission agreement's own terms control what "earned"
  means.
- **`commpayout_forfeiture_unlawful`** (Lab. Code § 221; *Steinhebel*) —
  once actually earned, a commission cannot lawfully be clawed back as
  wages already paid.

## Genuine corrections caught during research

- The task brief asked whether § 2751 sets a default termination-payout
  rule if there's no writing. Direct review of subsections (a)-(c)
  shows it does not — the statute is entirely about the writing
  obligation itself, disclosed as an honest negative finding rather than
  an inferred default rule.

## Honest gaps disclosed

- CourtListener's search and API-lookup tools were rate-limited
  (125/day exhausted) for this entire research session. A second,
  independent case beyond *Steinhebel* was not located and read in full;
  *Neisendorf v. Levi Strauss & Co.*, 143 Cal.App.4th 509 (2006) was
  identified only through secondary sources and is deliberately **not**
  cited with any quoted language, since its holding was not
  independently verified against primary text.
- *Commeford v. Baker* is cited only as quoted within the *Steinhebel*
  opinion; its own primary opinion text was not independently located
  and read this session, for the same rate-limiting reason — disclosed
  in the `commpayout_agreement_terms_control` clause's `gap` field as
  "Commeford as quoted by the Steinhebel court," not independent
  verification.

## Method

Fetched Lab. Code §§ 200, 221, and 2751 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
CourtListener's `search`/`call_endpoint` tools were rate-limited; the
agent discovered `read_document`/`search_document` draw from a separate
quota, located *Steinhebel*'s opinion ID via a public web-search result
URL (not the rate-limited search tool), and read its full primary text
directly to pull verified quotes.

## Verification

- All statutory citations fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — the two same-section/same-case clauses
  (`commpayout_wages_include_commissions`, `commpayout_forfeiture_unlawful`)
  carry explicit disclosure language; the two single-citation clauses
  (`commpayout_no_special_termination_default`,
  `commpayout_agreement_terms_control`) each explain their single-source
  status in detailed prose within the `gap` field even though they don't
  use the exact template sentence — reviewed and accepted as adequate
  disclosure given there is no risk of appearing as independent
  corroboration with only one citation present.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `terminationDate`,
  `commissionStructure`) confirmed to match the existing
  termination-document and Commission Agreement conventions exactly.
  New fields: `commissionAmount`, `commissionBasis`,
  `triggeringEventDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Commission Payout Upon Termination — Statement of
  Earned but Unpaid Commissions (`commission_payout_statement`), 7
  clauses (5 authority + 2 drafting), in the Ending employment category.
  New fields: `commissionAmount`, `commissionBasis`,
  `triggeringEventDate`.
- Corpus and document totals: see combined net totals in this wave's
  other verification docs (four documents merged together: 728 → 757
  clauses; 97 → 101 documents).
