# Hiring, new document: Private Investigator Licensing — Information Sheet

## Why this document

First processed item of wave 126 (Hiring slot, 1×4 pattern). The agent
ruled out five candidates via specific section-number greps before
landing here: ICRAA background checks, pre-offer medical/psychological
exam restrictions under FEHA, reference-check/blacklisting statutes,
the cannabis pre-employment drug-testing restriction (Gov. Code
§12954), and sector-specific Live Scan variants (childcare, health
care) were all confirmed already substantively covered. The chosen
topic — California's Private Investigator Act (Bus. & Prof. Code
§§7512-7573.5), specifically the license requirement for anyone
investigating a person's honesty, integrity, or conduct, including an
employer investigating its own employees — was confirmed genuinely
open: zero prior corpus hits on §§7512, 7520, 7521, 7522, 7523,
7525.1, 7526, or 7531 in either clause bodies/citations or document
titles/descriptions before drafting.

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority clauses,
citing Bus. & Prof. Code §7521, §7520, §7523(a)-(c), §7522(a), (c),
(e), (m), §7526, §7525.1(e)(1), §7531:

- **`privinv_definition_scope`** — the statutory definition of
  "private investigator," including the specific sentence extending it
  to a person investigating and reporting to an employer about its own
  employees' honesty, integrity, or job performance.
- **`privinv_license_required`** — the license requirement to engage
  in the business of private investigator.
- **`privinv_employer_liability`** — misdemeanor exposure for a party
  that knowingly engages a nonexempt unlicensed investigator.
- **`privinv_inhouse_exemption`** — the exemption for a person employed
  exclusively and regularly by one employer for internal, unarmed
  investigative work.
- **`privinv_other_named_exemptions`** — the attorney, financial-rating
  business, and registered process-server exemptions (disclosed as a
  subset of a longer list).
- **`privinv_licensure_qualifications`** — the age, denial-grounds, and
  chapter-compliance qualifications for licensure.
- **`privinv_applicant_fingerprint_check`** — the license applicant's
  own fingerprint-based FBI background check.
- **`privinv_licensee_responsibility_for_staff`** — the licensee's
  statutory responsibility for its own employees'/agents' conduct.

## Genuine findings

- **A disclosed site-quirk workaround**: leginfo's single-section
  fetch endpoint does not resolve the decimal section number
  "7525.1" (returns a near-empty stub); the agent instead sourced that
  citation from the full-article listing page, fetched twice and
  confirmed byte-identical, and disclosed the different URL form
  directly in the citation's `url` field.
- **A disclosed, deliberate choice to quote a subset of a longer
  exemption list**: the other-named-exemptions clause's gap explicitly
  discloses that §7522 contains additional categories (government
  employees, licensed insurance adjusters, banks, secured creditors,
  labor-management committees) not restated here.
- **A disclosed, deliberate scope limitation**: the fingerprint-check
  clause's gap explicitly distinguishes the license applicant's own
  background check from any separate background check a business
  might conduct on a vendor — the statute does not address the latter.
- **A disclosed, deliberate choice not to cite unverified case law**:
  no case law was researched; the document rests entirely on statute
  text, a disclosed and reasonable choice given the purely
  licensing-mechanics nature of the topic.

## Honest gap(s) disclosed

This document does not determine whether any specific engagement or
role meets the statutory definition of "private investigator" or
falls within a listed exemption, does not confirm any particular
vendor's actual license status, does not reproduce Business &
Professions Code §480's denial-grounds standards or the director's
rules referenced in §7526(d), does not address civil or contractual
liability for a client engaging an unlicensed investigator (only the
misdemeanor exposure), does not restate the full list of §7522
exemptions, and does not address a client's separate contractual or
vicarious liability for a hired investigator's acts.

## Method

Fetched Bus. & Prof. Code §§7520, 7521, 7522, 7523, 7526, and 7531
from leginfo.legislature.ca.gov, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical.
Section 7525.1 was sourced from the full-article listing page (the
single-section endpoint does not resolve its decimal section number),
also fetched twice and confirmed byte-identical. CourtListener was not
attempted for this purely statutory licensing-mechanics topic; no case
law was used or fabricated. All 12 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-seventy-third fetch (a new distinct curl User-Agent
string, "Groundtruth-173rdVerify-PrivateInvestigator/1.0") of all
seven sections — all 12 citation instances confirmed clean on direct
normalized-whitespace substring match; 1 of the 12 required the
standard whitespace-stripped fallback check (the familiar
subdivision-marker-spacing artifact in §7526), confirmed benign. The
statutory definition, license requirement, misdemeanor exposure,
in-house exemption, three named exemptions, licensure qualifications,
fingerprint-check requirement, and licensee-responsibility rule were
all independently reconfirmed present in the freshly fetched text.

## Verification

- All seven Business and Professions Code sections fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-seventy-third independent fetch
  during integration review; all 12 citation instances confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `privinv_` prefix has zero collisions. Ran
  section-number-specific greps for 7512, 7520-7523, 7525.1, 7526,
  7531, and 7573.5 across the full corpus; the only hits were on bare
  "7520" (Family Code §17520, license suspension for child-support
  arrears) and "7573.5" (an unrelated parentage-declaration clause
  citation label), both confirmed by context to be unrelated
  substring collisions, not genuine coverage.
- Checked every citation's `case` field for emptiness — all 12
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `investigativeServicesUseDescription` — did not exist previously in
  the corpus under any name, follows the established
  `<topic>UseDescription` naming convention. Four other fields
  (`companyName`, `preparerName`, `cityState`, `dateSigned`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Private Investigator Licensing — Information Sheet
  (`private_investigator_licensing_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Hiring category. One new field:
  `investigativeServicesUseDescription`.
- Corpus: 4,117 → 4,127 clauses; 527 → 528 documents. Second processed
  item of wave 126 (first: Limited Partner Control Safe Harbor).
