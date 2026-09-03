# Hiring, new document: Minor Work Permits — Information Sheet

## Why this document

Confirmed by grep that "minor work permit" and related citations had
zero hits anywhere in the corpus. Distinct from the existing I-9
Employment Eligibility Verification document (a federal, age-neutral
work-authorization requirement) and the existing Nomination of Guardian
for Minor Children document (an unrelated estate-planning topic).

## What this document covers

7 clauses: 2 drafting (purpose declaration, signature/certification) and
5 authority clauses, citing Cal. Labor Code §§ 1286(c), 1299, 1391 and
Cal. Educ. Code §§ 49101, 49110, 49114, 49116(c), 49118:

- **`minorwork_covered_minors`** (Lab. Code § 1286(c)) — who counts as a
  "minor" for this framework.
- **`minorwork_permit_request_and_issuer`** (Educ. Code § 49110(b)-(c)) —
  the school-based issuing authorities and the written-request
  prerequisite.
- **`minorwork_permit_to_employ_recordkeeping_expiration`** (Educ. Code
  §§ 49114, 49118; Lab. Code § 1299) — the certificate-of-age/permit-to-
  employ mechanism, employer recordkeeping and inspection duty, and the
  five-days-after-next-school-year expiration.
- **`minorwork_hours_and_revocation`** (Lab. Code § 1391(a)-(b); Educ.
  Code § 49116(c)) — the full age-tiered hour and time-of-day limits, and
  permit revocation for schoolwork/health impairment.
- **`minorwork_exemption_graduates`** (Educ. Code § 49101) — the
  exemption for a minor who has already graduated high school or its
  equivalent.

## Genuine corrections and findings

- **A correction to the assignment's own working hypothesis**: the
  assignment guessed Labor Code § 1391 might be the core permit-
  requirement statute. Verified research shows § 1391 actually governs
  only the age-tiered hour and time-of-day limits — it does not create or
  explain the permit itself. The actual permit-issuance mechanism lives
  in Education Code, Part 27, Chapter 7, Article 2 ("Permits to Work"),
  §§ 49110-49120, corroborated by Labor Code § 1290's own cross-reference
  tying lawful minor employment to compliance with either that Labor Code
  chapter or Education Code Part 27.
- Confirmed the permit process is school-initiated, not employer-
  initiated: a permit cannot be issued at all until a written request
  from the parent, guardian, or another specified caregiver is filed with
  the issuing school official.
- **A careful avoidance of double-sourcing**: Education Code § 49116(a)-(b)
  states hour limits for 14-15 and 16-17 year-olds that closely track
  Labor Code § 1391(a)(2) and (a)(4). Rather than presenting the same
  restriction as if corroborated by two independent sources, the document
  cites only § 1391 for the hour limits and cites § 49116 only for its
  distinct impairment-based revocation subdivision (c).
- **An honest negative finding**: the document searched for a specific
  statutory emancipated-minor exemption within the work-permit chapter
  and did not find one — rather than assuming this corpus's separate
  Emancipation of Minors document's doctrine applies here, it discloses
  the negative finding and omits the claim.
- Confirmed a certificate of age (Educ. Code § 49114) itself serves as
  the permit to employ for a minor not legally required to attend school
  but otherwise required to hold a permit to work — a distinct mechanism
  from the ordinary work permit.

## Honest gap disclosed

Education Code §§ 49102-49104 returned no retrievable content when
queried directly and are treated as not currently in force rather than a
hidden source of additional rules. Education Code § 48412 (the
certificate-of-proficiency provision the graduate exemption cross-
references) and the compulsory-attendance cross-references (Educ. Code
§§ 48200, 48400) were not independently fetched or verified. The
entertainment-industry minor permit system (Lab. Code § 1308.7) is
expressly carved out of § 1391's coverage and is not addressed here.

## Method

Fetched Cal. Lab. Code §§ 1286, 1299, 1391 and Cal. Educ. Code §§ 49101,
49110, 49114, 49116, 49118 directly from `leginfo.legislature.ca.gov`,
each via two independent curl requests using distinct User-Agent strings
(desktop Chrome, then mobile Safari) — confirmed byte-identical after
whitespace normalization across all eight sections. All 9 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All eight sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory
  section versus genuinely separate statutes (e.g. the three-statute
  combination in the permit-to-employ clause, explicitly disclosed as
  none being a subdivision of another); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose of This Information
  Sheet," "Signature and Certification").
- Field names (`companyName`, `minorName`, `jobTitle`,
  `parentGuardianName`, `educationalInstitution`, `startDate`)
  independently confirmed to match existing corpus convention. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Minor Work Permits — Information Sheet
  (`minor_work_permits_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Hiring category. No new fields.
- Corpus: 2,021 → 2,028 clauses; 258 → 259 documents. Closes wave 52
  (Heat Illness Prevention, Displaced Janitor Opportunity Act, CCPA
  Employee and Job Applicant Data, Minor Work Permits).
