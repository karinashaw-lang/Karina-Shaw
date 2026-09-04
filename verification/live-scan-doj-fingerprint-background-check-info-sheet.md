# Hiring, new document: Live Scan / DOJ Fingerprint Background Check — Information Sheet

## Why this document

Second document of wave 87. Read the existing five background-check-
related Hiring documents (Background Check Disclosure/FCRA, Adverse
Action Notice, ICRAA, Fair Chance Act, Arrest/Diversion/Sealed Record
Inquiry) in full and confirmed all five cover only private consumer-
reporting-agency-based checks (FCRA/ICRAA/CCRAA) and inquiry-timing/
scope restrictions. Grepped the corpus for "live scan," "11105.3,"
"fingerprint," "trustline," and "DOJ clearance" — the only hit was an
unrelated Labor Code §§ 1050-1054 blacklisting clause about sharing
fingerprints between employers, not a licensing-clearance statute.
Confirmed a real, non-duplicative gap: the separate state/DOJ
fingerprint-based Live Scan clearance regime, legally distinct from
private consumer-reporting checks.

## What this document covers

8 clauses: 2 drafting (declaration, signature/certification) and 6
authority clauses, citing Cal. Health & Saf. Code §§ 1522.04(a),
1596.871, 1265.5(a)(1), and Cal. Penal Code § 11105.3(a), (b)(1),
(b)(2)(F):

- **`livescan_what_it_is`** (H&S Code § 1522.04(a)) — what "Live Scan"
  is (electronic fingerprint-capture technology, the CAL-CII system)
  and the criminal-record-clearance-or-exemption requirement before
  initial presence in a regulated facility.
- **`livescan_general_framework`** (Pen. Code § 11105.3(a)) — the
  general authorization for a human resource agency or employer to
  request DOJ criminal history for a position with supervisory or
  disciplinary power over a minor or dependent person.
- **`livescan_state_and_federal_role`** (Pen. Code § 11105.3(b)(1)) —
  the fingerprint-submission requirement and the DOJ-to-FBI forwarding
  for federal-level record searches.
- **`livescan_applicant_rights`** (Pen. Code § 11105.3(b)(2)(F)) — the
  applicant's rights to a copy of the report, to challenge its
  accuracy, and to a determination on that challenge before a final
  decision.
- **`livescan_childcare_sector`** (H&S Code § 1596.871) — the childcare
  facility licensing sector's mandatory fingerprint-clearance
  requirement.
- **`livescan_healthcare_sector`** (H&S Code § 1265.5(a)(1)) —
  intermediate care facilities for the developmentally disabled's
  fingerprint-clearance mandate.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  described Penal Code § 11105.3 as a "general licensing/employment
  framework." The agent independently confirmed § 11105.3(a) is
  actually narrower — it applies specifically to positions with
  supervisory or disciplinary power over a minor or dependent person,
  not to licensed occupations generically.
- **A second genuine correction**: the brief's assumed framing of
  Health & Safety Code § 1265.5 as covering "healthcare facilities"
  generally is too broad. The agent independently confirmed, from the
  fetched text, that § 1265.5 by its own terms applies specifically to
  intermediate care facilities for the developmentally disabled
  (ICF/DD license subtypes) — not hospitals, skilled nursing
  facilities, or other health-facility types licensed under the same
  chapter. The document's own gap field explicitly warns against
  reading this clause as a general statement about healthcare
  licensure.
- Correctly identified Health & Safety Code § 1522.04(a) (not assumed
  in the brief) as the actual source defining what "Live Scan"
  technology is, rather than treating the term as self-explanatory.
- Correctly declined to catalog every Live Scan-mandated sector
  (elder care, transportation, education, Business and Professions
  Code licensing boards), per the instruction to prioritize a focused,
  accurate document over an exhaustive but thin one — disclosed as an
  intentional scope limit in the declaration clause.

## Honest gap(s) disclosed

Penal Code § 11105.3(c) (parent-notification), (d) (the full
cross-reference list of other mandatory statutes it doesn't supersede),
(f) (definitions), and (g) (confidentiality) are not covered. Health &
Safety Code § 1596.871's disqualifying-conviction list, exemption
criteria, and civil-penalty provisions are not covered. Health & Safety
Code § 1265.5's disqualifying-conviction list and rehabilitation
factors are not covered. This document does not identify every
occupation or sector subject to a Live Scan requirement, and does not
determine whether Live Scan clearance applies to any specific position.

## Method

Fetched Cal. Health & Saf. Code §§ 1522.04, 1596.871, 1265.5 and Cal.
Penal Code § 11105.3 from `leginfo.legislature.ca.gov`, each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 7 citation
quotes across the 6 authority clauses programmatically confirmed as
exact contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a thirty-seventh fetch (a
distinct curl User-Agent string, "Groundtruth-37thVerify-LiveScan/1.0")
of all four sections — all 7 quotes confirmed clean.

## Verification

- All four statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  thirty-seventh independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section, and which sections (§ 1522.04, § 11105.3,
  § 1596.871, § 1265.5) are genuinely independent of one another;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Signature and Certification") match the established boilerplate-
  title reuse pattern.
- Checked every citation's `case` field for emptiness — all 7
  populated with proper case/citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `jobTitle`) reused from the existing corpus (194,
  134, and 18 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Live Scan / DOJ Fingerprint Background Check —
  Information Sheet (`live_scan_doj_fingerprint_background_check_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 2,976 → 2,984 clauses; 392 → 393 documents. Second addition
  of wave 87.
