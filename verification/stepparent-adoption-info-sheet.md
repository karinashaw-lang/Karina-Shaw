# Family Law, new document: Stepparent Adoption — Information Sheet

## Why this document

No existing document in this corpus addresses adoption at all — this
is a genuinely new topic area. The existing Guardianship of the Person
(Petition Information Sheet) document is explicitly distinguished:
guardianship does not terminate a parent's legal rights or create a
new legal parent, while adoption does both.

## What this document covers

10 clauses: 3 drafting (declaration/scope, case-summary reference,
signature block) and 7 authority clauses:

- **`stepparentadopt_who_may_file`** (Fam. Code § 8600; § 9000(a),
  (b); § 8601(b)) — who may file and the applicable age-gap
  dispensation, correcting a materially wrong section-range assumption.
- **`stepparentadopt_investigation_and_fee`** (Fam. Code § 9001(a);
  § 9002) — the investigative report requirement (not a full home
  study by default) and its $700 cost cap.
- **`stepparentadopt_streamlined_exception`** (Fam. Code § 9000.5(a),
  (b)(1), (b)(2), (e)) — a narrower path removing the investigation,
  fee, hearing, and minimum-relationship-duration requirements for a
  child born during the marriage/partnership.
- **`stepparentadopt_consent_of_birth_parents`** (Fam. Code § 8604(a);
  § 8605; § 9003(a)) — whose consent is generally required.
- **`stepparentadopt_dispensing_with_consent`** (Fam. Code § 8604(b),
  (c); § 8606(a), (c); § 9006(b)) — the defined statutory categories
  for dispensing with consent, written with extra care to state
  categories as law, never as a finding about any specific parent.
- **`stepparentadopt_minor_own_consent`** (Fam. Code § 8602) — the
  child's own consent requirement above age 12, correcting an assumed
  phrasing ("over the age of 12," not "12 or older").
- **`stepparentadopt_effect_of_adoption`** (Fam. Code § 8616; § 8617(a)
  -(c); § 9004) — the legal effect of a completed adoption and the
  stepparent-specific inheritance-rights notice.

## Genuine corrections caught during research

- The task brief's section range ("§§ 8900-8823") was backward and
  non-existent, and its description of stepparent adoption as part of
  "the independent adoption framework" was wrong. Direct review shows
  stepparent adoption is its own standalone chapter (Chapter 5, §§
  9000-9007) within Part 2 ("Adoption of Unmarried Minors"); § 8900
  actually starts a different chapter entirely (Intercountry
  Adoptions).
- The task brief assumed the minor-consent age threshold reads "12
  years of age or older." Direct review of § 8602 shows the statute's
  actual wording is "if over the age of 12 years" — a real textual
  distinction from how this corpus's own Guardianship document quotes
  a different code section (Prob. Code § 1510(a)) on a related but
  separate point, flagged explicitly rather than silently normalized.
- The task brief anticipated a "procedurally lighter" stepparent
  mechanism; direct review confirms one exists but is narrower than
  assumed — § 9000.5's exception (no investigation, no $700 fee, no
  hearing, no minimum marriage/partnership duration) applies only
  where the child was born during the marriage/partnership; outside
  that, § 9001 still requires an investigative report.
- The task brief did not anticipate that dispensing with a parent's
  consent is not open-ended: § 8604(b)-(c) and § 8606 are the defined
  categories, and § 9006(b) confirms that within the stepparent
  chapter, a refusal by a parent whose consent is required simply
  results in dismissal — it does not let the chapter force an adoption
  through.
- The task brief did not anticipate § 9004's specific required notice
  that a child's inheritance rights from the non-adopting parent's
  side are not cut off if they ever lived together as parent and
  child — a nuance specific to stepparent adoptions.

## Honest gaps disclosed

- CourtListener was rate-limited (125/day, exhausted) before case law
  interpreting the "willfully fails to communicate" abandonment-type
  standard could be researched — no case law is cited anywhere in this
  document; every authority clause rests on statutory text only.
- § 7611's own presumed-father standards, § 9001(b)-(d)'s further
  procedural detail, § 8606(b), (d), (e)'s additional consent-dispensed
  categories, and Probate Code inheritance rules beyond § 9004's own
  notice text are each noted as existing but not detailed.

## Method

Fetched Fam. Code §§ 8600, 8601, 8602, 8604, 8605, 8606, 8616, 8617,
9000, 9000.5, 9001, 9002, 9003, 9004, 9005, 9006, 9007 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
Every citation's quote programmatically confirmed as an exact substring
of the verified text before the file was written.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the delivering agent
  found and fixed 7 leaks (petitioner/child/other-parent names
  embedded in `gap` narrative text) during its own self-check before
  delivery; my independent re-check on integration confirmed clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause correctly distinguishes same-section-
  multiple-subsection citations from citations to genuinely separate
  sections; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Extra scrutiny given to `stepparentadopt_dispensing_with_consent`
  given the sensitivity of the topic (parental rights, child welfare):
  confirmed the clause states only the statutory categories, and its
  gap field explicitly disclaims that any specific parent's consent
  has been or should be dispensed with in any specific case.
- Field names (`petitionerName`, `childName`, `childDOB`,
  `countyOfFiling`, `dateSigned`, `cityState`, `otherParentName`)
  confirmed to match existing Family Law document conventions exactly
  — seven of eight fields reused. New field: `legalParentName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Stepparent Adoption — Information Sheet
  (`stepparent_adoption_info_sheet`), 10 clauses (7 authority + 3
  drafting), in the Family Law category. New field: `legalParentName`.
- Corpus: 981 → 991 clauses; 128 → 129 documents. This completes
  wave 19 (4 documents: Wage Theft Prevention Notice, Copyright
  Registration Info Sheet, Foreign Entity Qualification Info Sheet,
  and this document).
