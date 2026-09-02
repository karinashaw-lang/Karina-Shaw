# Hiring, new document: Immigration-Related Unfair Employment Practices — Information Sheet

## Why this document

The corpus's existing I-9 document has a single, narrow clause
(`i9_antidiscrimination`) stating the prohibition exists. This
document adds real depth on 8 U.S.C. § 1324b: specific prohibited
practices, the protected-individual definition, document abuse as a
distinct violation, the complaint/enforcement mechanism, and remedies.

## What this document covers

8 clauses: 2 drafting (declaration, signature/certification) and 6
authority clauses:

- **`immigdiscrim_core_prohibited_practices`** (8 U.S.C. § 1324b(a)
  (1)) — the three prohibited actions and their split protection
  basis.
- **`immigdiscrim_protected_individual_defined`** (§ 1324b(a)(3)) —
  the statutory categories and exclusions.
- **`immigdiscrim_document_abuse`** (§ 1324b(a)(6)) — a genuinely
  separate, purpose-requiring violation.
- **`immigdiscrim_charge_and_deadline`** (§ 1324b(b)(1),(c)(1),(d)(3))
  — the charge-filing process and 180-day deadline.
- **`immigdiscrim_remedies`** (§ 1324b(g)(2)(A),(B)(iii),(B)(iv)(I),
  (C)) — available administrative remedies.
- **`immigdiscrim_employer_size_threshold`** (§ 1324b(a)(2)(A)-(B);
  42 U.S.C. § 2000e(b)) — the employer-size threshold and its
  relationship to Title VII.

## Genuine corrections and findings

- Confirmed the core prohibited-practices split: national origin
  protects "any individual" (except unauthorized aliens), while
  citizenship status protects only "protected individuals" — a
  genuine asymmetry in the statute's own text.
- Confirmed § 1324b(a)(6)'s document abuse is a genuinely separate
  violation from core hiring/discharge discrimination, corroborated by
  its own distinct (lower) civil-penalty tier under § 1324b(g)(2)(B)
  (iv)(IV).
- Confirmed the 180-day charge deadline runs from when the practice
  occurred to when the charge is filed with the Special Counsel for
  Immigration-Related Unfair Employment Practices (DOJ).
- Confirmed § 1324b(a)(2)(A)'s employer-size carve-out is "three or
  fewer employees" (so § 1324b reaches 4+ employee employers), and
  independently verified Title VII's own 15+ employee threshold (42
  U.S.C. § 2000e(b)), confirming a real 4-14 employee coverage gap.
- **A genuine additional finding**: the Title VII-overlap exception in
  § 1324b(a)(2)(B) is textually limited to national-origin
  discrimination — citizenship-status discrimination has no such
  carve-out, so the three-or-fewer-employees threshold is the only
  size boundary that applies to citizenship-status claims.

## Honest gaps disclosed

- The `immigdiscrim_remedies` clause discloses that the quoted civil-
  penalty dollar figures are the statute's own text, without
  independently verifying whether a later inflation-adjustment
  regulation has since revised them upward.
- Cross-referenced provisions not independently fetched: 8 U.S.C.
  § 1324a(h)(3) ("unauthorized alien"), §§ 1160(a)/1255a(a)(1)
  (temporary-resident legalization categories), and the EEOC's own
  Title VII charge-filing deadline — each disclosed in the relevant
  clause's `gap` rather than assumed.

## Method

Fetched 8 U.S.C. § 1324b and 42 U.S.C. § 2000e(b) directly from
`law.cornell.edu`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical. All citation
quotes programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subsections of
  § 1324b correctly labeled as one source; 42 U.S.C. § 2000e(b)
  correctly labeled as the one genuinely independent second statute;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Certification") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`, `incidentDate`,
  `additionalIncidents`, `signatureDate`) independently confirmed to
  match existing corpus convention. New field:
  `allegedPracticeDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Immigration-Related Unfair Employment Practices —
  Information Sheet
  (`immigration_related_unfair_employment_practices_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Hiring category. New
  field: `allegedPracticeDescription`.
- Corpus: 1,565 → 1,573 clauses; 197 → 198 documents.
