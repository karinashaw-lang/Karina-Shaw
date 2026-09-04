# During employment, new document: Suitable Seating Requirement — Information Sheet

## Why this document

Category-balance analysis flagged During employment as one of wave
62's four perpetually-thin categories. Confirmed by grep that "suitable
seating," "suitable seats," and "Kilby v. CVS" had zero hits anywhere
in the corpus. Read the existing Reporting Time Pay document to match
this project's established Wage Order citation format. Second of wave
62's four documents.

## What this document covers

6 clauses: 2 drafting (purpose, signature/receipt) and 4 authority
clauses, citing IWC Wage Order No. 4-2001 § 14, Kilby v. CVS Pharmacy,
Inc. (2016) 63 Cal.4th 1, and Cal. Labor Code §§ 1198, 2699:

- **`seating_wage_order_requirement`** (Wage Order 4-2001 § 14(A)-(B))
  — the core seating requirement for actively-working employees and
  the adequate-seats-nearby rule for those not engaged in active
  duties.
- **`seating_kilby_nature_of_work_test`** (Kilby, 63 Cal.4th at 8) —
  **a key finding**: "nature of the work" means location-specific
  tasks, not a holistic view of an employee's entire duty range across
  a shift; the standard is objective, totality-of-the-circumstances.
- **`seating_kilby_burden_of_proof`** (Kilby, 63 Cal.4th at 24) — the
  employer bears the burden of proving seating is infeasible once the
  wage order's threshold is met.
- **`seating_enforcement_mechanism`** (Labor Code §§ 1198, 2699(a),
  (f)) — the general PAGA-based civil-penalty mechanism inferred from
  reading two Labor Code provisions together, since neither the wage
  order nor Kilby specifies a penalty amount.

## Genuine corrections and findings

- **The central finding**: Kilby rejected a "holistic" reading of
  "nature of the work" that would look at an employee's entire range
  of duties — the inquiry is location- and task-specific, evaluated
  objectively under a totality-of-the-circumstances standard, with an
  employer's business judgment and workspace layout relevant but not
  dispositive.
- Confirmed the burden of proof sits with the employer once the
  threshold is met — the wage order "unambiguously states employees
  'shall be provided with suitable seats,'" per Kilby's own reasoning.
- Confirmed section 14's text is word-for-word identical across Wage
  Orders 4-2001 and 7-2001 (both independently fetched), though only 2
  of California's 18 wage orders were checked — disclosed honestly as
  a limited sample rather than a claim about every wage order.
- Confirmed the enforcement mechanism is not stated directly anywhere
  — it was reconstructed by reading Labor Code § 1198 (which makes
  wage-order violations unlawful without itself setting a penalty)
  together with § 2699(a), (f)'s PAGA default civil-penalty provision.

## Honest gap disclosed

No case law was found quantifying a specific dollar penalty for a
seating violation specifically. Labor Code § 1199's separate criminal
misdemeanor track was identified but not incorporated into the stated
remedy. Only 2 of California's 18 IWC wage orders were checked for
identical § 14 text.

## Method

Fetched IWC Wage Orders 4-2001 and 7-2001 from `dir.ca.gov` and Labor
Code §§ 1198 and 2699 from `leginfo.legislature.ca.gov`, each via curl
with two distinct User-Agent strings, confirmed byte-identical. Kilby
v. CVS Pharmacy, Inc. read directly from CourtListener. All 7 citation
quotes programmatically confirmed as exact substrings of the confirmed
text.

## Verification

- All sources fetched twice independently with distinct User-Agent
  strings (wage orders and statutes) or read via CourtListener (case
  law); confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — Wage Order § 14(A)/(B)
  correctly disclosed as two paragraphs of the same section, not
  independent; the two Kilby quotes on the nature-of-work test
  correctly disclosed as the same opinion, not independent; § 2699(a)
  and (f) correctly disclosed as the same section; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Suitable Seating Requirement — Information Sheet
  (`suitable_seating_info_sheet`), 6 clauses (4 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 2,301 → 2,307 clauses; 296 → 297 documents. Second document
  of wave 62.
