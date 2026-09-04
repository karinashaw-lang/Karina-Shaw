# Family Law, new document: Guardian Ad Litem Appointment — Information Sheet

## Why this document

Second document of wave 89 (Family Law slot, 2×2 pattern paired with Ending
employment). Grepped the corpus for "guardian ad litem" and found only two
incidental prior mentions — `paternity_marital_presumption_disestablishment`
quoting Fam. Code § 7541(b) in passing, and
`elderabuseTRO_who_may_petition` quoting Welf. & Inst. Code § 15657.03(a)(2)(A)
in passing — neither explains the appointment mechanism itself. Confirmed
Code Civ. Proc. §§ 372-373 cited nowhere else in the corpus. Confirmed the
corpus's existing Probate Code guardianship documents (Guardian of the
Person/Estate) cover ongoing custody/property management, a role this
document explicitly distinguishes from the litigation-specific guardian ad
litem role. Confirmed a real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (application declaration, signature block/proposed
order) and 5 authority clauses, citing Code Civ. Proc. §§ 372(a)(1),
(a)(2)(A), (a)(2)(B), (a)(2)(C), (a)(3), (b)(1), (c)(1), (c)(2), (d), (e),
and § 373(a), (b), (c):

- **`galappoint_when_required_or_permitted`** (§ 372(a)(1), (a)(2)(A)) —
  the mandatory-appearance rule and the separate discretionary "expedient"
  standard for appointment.
- **`galappoint_who_and_distinct_from_estate_guardian`** (§ 372(a)(1),
  (a)(2)(B), (a)(2)(C)) — the distinction between a guardian ad litem and an
  existing guardian/conservator of the estate, and the notice-and-adequacy
  showing and five-court-day opposition window when one already exists.
- **`galappoint_application_process_and_disclosure`** (§ 373(a), (b), (c);
  § 372(d), (e)) — who may apply and by when (plaintiff-minor, defendant-
  minor, incapacitated person), and the pre- and post-appointment
  conflict-of-interest disclosure duties.
- **`galappoint_scope_of_authority`** (§ 372(a)(3)) — the guardian ad
  litem's litigation-specific authority (compromise the action, agree to
  judgment, satisfy/release the claim, all subject to court approval),
  disclosed as narrower than a general guardian's or conservator's ongoing
  authority.
- **`galappoint_family_law_and_protective_order_exceptions`** (§ 372(b)(1),
  (c)(1), (c)(2)) — the exceptions letting a minor 12+ appear without a
  guardian ad litem for specified protective orders, and a minor parent
  appear without one in specified family-law/dependency/guardianship/
  custody-visitation-support proceedings, subject to the court's discretion
  or obligation to appoint one.

## Genuine corrections and findings

- **A genuine finding, not a correction**: no separate, freestanding Family
  Code provision governing the guardian ad litem appointment mechanism
  itself was located — only Code Civ. Proc. § 372's own appearance-exception
  cross-references to specific Family Code proceedings. Disclosed explicitly
  in the exceptions clause's gap field rather than implied to exist.
- Correctly distinguished this document's litigation-specific guardian ad
  litem role from the corpus's existing Probate Code guardian-of-the-
  person/estate documents, which govern an ongoing, non-litigation role —
  disclosed in the scope-of-authority clause as the reason the statute
  itself treats the two as distinct kinds of representative.
- Correctly declined to independently verify the cross-referenced Family
  Code sections (§§ 6200, 7710, 7720, Part 3 commencing with § 7600) or the
  Welfare and Institutions Code juvenile dependency provisions named in the
  exceptions clause — disclosed as named only as the statute itself names
  them, not independently verified here.
- Correctly declined to describe how money or property payable under a
  compromise must be handled, disclosing that a separate Probate Code
  provision (not independently verified) governs it.
- One `{{}}` leak (literal `{{minorOrIncapacitatedPersonName}}` in a `gap`
  field) was caught and corrected by the research agent itself before
  delivery — confirmed clean on independent re-scan.

## Honest gap(s) disclosed

The statute's undefined "expedient" standard, the definition of an
"inadequate" existing guardian/conservator of the estate, the form and
required contents of the application beyond identity/timing, the
consequence of a guardian ad litem's failure to disclose a conflict once
discovered, and the Probate Code provision governing compromise proceeds
are named but not covered. The cross-referenced Family Code and Welfare and
Institutions Code proceedings named in the exceptions clause are not
independently verified. This document does not determine that any specific
person requires a guardian ad litem, that any specific proposed guardian ad
litem is adequate or free of disqualifying conflicts, or that any specific
proceeding falls within the appearance exceptions.

## Method

Fetched Code Civ. Proc. §§ 372 and 373 from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All 14
citation quotes across the 5 authority clauses programmatically confirmed
as exact contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a forty-fifth fetch (a distinct
curl User-Agent string, "Groundtruth-45thVerify-GALAppoint/1.0") of both
sections — all 14 quotes confirmed clean on direct substring match, no
extraction artifacts encountered this time.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a forty-fifth independent
  fetch during integration review; all 14 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean (one leak caught and fixed by the agent pre-delivery, confirmed
  clean on re-scan).
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of § 372, which are
  subdivisions of § 373, and that the two sections are grouped separately
  where a clause draws on both; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 14 populated
  with proper citation identifier strings.
- Seven fields reused (`petitionerName`, `proposedGuardianName`,
  `courtCaseNumber`, `courtName`, `countyOfFiling`, `cityState`,
  `dateSigned`). One new field required (`minorOrIncapacitatedPersonName`)
  — grepped the corpus and confirmed no existing field covers CCP § 372's
  actual scope (minor, or person lacking legal capacity, or person with an
  appointed conservator).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Guardian Ad Litem Appointment — Information Sheet
  (`guardian_ad_litem_appointment_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Family Law category. One new field
  (`minorOrIncapacitatedPersonName`).
- Corpus: 3,035 → 3,042 clauses; 400 → 401 documents. Second addition of
  wave 89.
