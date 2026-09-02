# Hiring, new document: E-Verify — Information Sheet

## Why this document

E-Verify was mentioned only once in this corpus, in passing, within
the existing I-9 Employment Eligibility Verification document's
retention clause. This document covers E-Verify itself — a separate,
largely optional federal system distinct from the mandatory I-9
process — and California's specific statutory restrictions on it.

## What this document covers

11 clauses: 3 drafting (scope, participation declaration,
acknowledgment) and 8 authority clauses:

- **`everify_program_basis`** (8 U.S.C. § 1324a note, IIRIRA
  §§ 401-405) — what E-Verify is and its legal basis as a
  statutory-note program, not a codified section.
- **`everify_voluntary_by_default`** (IIRIRA § 402(a), (e)) — E-Verify
  use is voluntary for most employers, with a federal-agency
  participation exception.
- **`everify_federal_contractor_mandate`** (48 C.F.R. §§ 22.1802-
  22.1803; § 52.222-54) — mandatory use for certain federal
  contractors.
- **`everify_ca_state_local_mandate_prohibition`** (Cal. Lab. Code
  § 2812) — California's prohibition on a state or local agency
  mandating E-Verify.
- **`everify_ca_restriction_on_employer_use`** (Cal. Lab. Code
  § 2814(a)) — California's restriction on an employer's own use of
  E-Verify beyond what federal law/the E-Verify MOU authorizes.
- **`everify_ca_notice_requirement`** (Cal. Lab. Code § 2814(b)) — the
  notice requirement upon a tentative nonconfirmation.
- **`everify_ca_civil_penalty`** (Cal. Lab. Code § 2814(c)) — the
  civil penalty for an unlawful use.
- **`everify_relationship_to_i9`** (Cal. Lab. Code § 2813; 48 C.F.R.
  § 52.222-54(b)(1)(ii)) — the relationship to Form I-9 and E-Verify
  timing, cross-referencing rather than duplicating the existing I-9
  document.

## Genuine corrections and findings

- **A significant correction to the original research framing**:
  § 2814 is not the state/local-mandate provision. That is a separate
  section, Cal. Lab. Code § 2812, which prohibits the state or a
  city/county/special district from requiring an employer to use
  E-Verify. Section 2814 instead restricts what an employer itself may
  do — using E-Verify on an existing employee or a not-yet-offered
  applicant outside what federal law/the E-Verify MOU authorizes.
  Written as two separate clauses rather than conflating them.
- Corrected an assumption that § 2815 exists — Article 2.5 of the
  Labor Code runs §§ 2811-2814 only. Section 2811 is the short title
  ("Employment Acceleration Act of 2011"); § 2813 is the definitions
  section, and is a genuinely useful find: it expressly ties
  "electronic employment verification system" to "the Basic Pilot
  Program, enacted by Section 404 of Public Law 104-208 and renamed in
  2007 as the E-Verify Program," and expressly excludes the I-9 form
  from that definition — a clean statutory basis for "E-Verify ≠ I-9."
- Confirmed E-Verify's federal authority is a statutory note under
  8 U.S.C. § 1324a (IIRIRA §§ 401-405), not a numbered codified
  section. A genuine, time-sensitive finding: this authorization isn't
  permanent — it has been extended by a chain of appropriations riders
  roughly annually, most recently to September 30, 2026 by Pub. L.
  119-75 (Feb. 3, 2026) — meaning it is due to lapse again at the end
  of that month unless extended again.
- Confirmed the federal-contractor mandate via FAR provisions
  (48 C.F.R. §§ 22.1802-22.1803, § 52.222-54) rather than the
  Executive Order text directly, since federalregister.gov was
  unreachable — the EO lineage is disclosed as unverified background,
  not presented as a verified citation.
- Confirmed the § 2814(c) civil penalty: up to $10,000 per violation,
  each unlawful use a separate violation, with no explicit private
  right of action stated in the text.
- Confirmed the § 2814(b) notice requirement almost exactly as
  framed: the employer must furnish any SSA/DHS notification specific
  to the employee's case "as soon as practicable" upon a tentative
  nonconfirmation.
- Confirmed the 3-business-day E-Verify query timing rule, but only at
  the regulation tier and only for federal contractors (48 C.F.R.
  § 52.222-54(b)(1)(ii)) — whether the same figure applies to
  voluntary, non-contractor E-Verify users via the MOU/User Manual
  could not be verified (e-verify.gov and uscis.gov were unreachable),
  so that broader claim is explicitly disclosed as unverified rather
  than asserted.

## Method

Fetched Cal. Lab. Code §§ 2812, 2813, 2814 directly from
`leginfo.legislature.ca.gov`, the 8 U.S.C. § 1324a statutory note from
`law.cornell.edu`, and 48 C.F.R. Subpart 22.18 and § 52.222-54, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All 14 citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (6 leaks in
  `gap` fields were found and fixed by the agent during its own
  drafting process, before delivery; independently re-scanned the
  delivered set and confirmed zero remaining).
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  title matches ("Acknowledgment," "About This Information Sheet")
  confirmed as the corpus's established, accepted generic drafting-
  title-reuse pattern.
- Field names (`companyName`, `employeeName`, `startDate`)
  independently confirmed to match the existing I-9 document's fields
  exactly. New fields: `participationStatus`, `mandateBasis`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: E-Verify — Information Sheet (`everify_info_sheet`),
  11 clauses (8 authority + 3 drafting), in the Hiring category. New
  fields: `participationStatus`, `mandateBasis`.
- Corpus: 1,312 → 1,323 clauses; 165 → 166 documents. First document
  of wave 29.
