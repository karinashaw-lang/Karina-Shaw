# Estate Planning, seventh document: Nomination of Guardian for Minor Children

## Why this document

Completes the Estate Planning build-out for now. This is a standalone
instrument, deliberately distinct from the existing Last Will and
Testament's `will_guardian_nomination` clause: many parents want a
guardian nomination that doesn't depend on probating a will, or a
short-term/no-court mechanism for travel, medical emergencies, or
temporary unavailability — real, common needs a testamentary nomination
alone doesn't reach.

## What this document covers

10 clauses: 2 drafting (a nomination declaration and a
signature/acknowledgment block) and 8 authority clauses citing California
Probate Code, Family Code, and Education Code:

- **`guardian_nom_standalone_writing`** (Prob. § 1500 + § 1502(a)) — a
  parent's nomination can be made by a signed writing, independent of a
  will and independent of an already-pending court case.
- **`guardian_nom_conditional_temporary`** (Prob. § 1502(b)-(c)) — a
  nomination can be drafted to take effect immediately or only upon a
  stated condition, and remains effective despite the nominating
  parent's later absence, incapacity, or death unless the writing says
  otherwise.
- **`guardian_nom_minor_preference`** (Prob. § 1510(a) + § 1514(b)(1) +
  Fam. § 3042(a),(c)) — a minor 12 or older may personally petition for
  a guardian, and the court must consider and give due weight to a
  child's own preference, with a 14-or-older child entitled to address
  the court directly absent a contrary best-interest finding.
- **`guardian_nom_caregiver_affidavit_scope`** (Fam. § 6550(a) +
  § 6552) — California's real, no-court Caregiver's Authorization
  Affidavit: what a caregiver can authorize (school enrollment and
  school-related care for any qualifying caregiver; full medical/dental
  authorization matching a guardian's for a statutory "relative").
- **`guardian_nom_caregiver_affidavit_limits`** (Fam. § 6552 + §
  6550(b)) — the affidavit doesn't create legal guardianship and doesn't
  override a parent's contravening decision unless it would jeopardize
  the child's life, health, or safety.
- **`guardian_nom_caregiver_affidavit_termination`** (Fam. § 6550(f) +
  § 6552) — the affidavit's validity is tied to actual notice once the
  child stops living with the caregiver, not a fixed expiration date.
- **`guardian_nom_court_guardianship_basics`** (Prob. § 1510(b) +
  § 1514(a)) — the actual, minimal contrast: formal guardianship requires
  a real court petition and hearing, unlike the affidavit mechanism.
- **`guardian_nom_school_residency`** (Educ. § 48204(a)(5) + Fam. §
  6552) — a real, distinct bonus finding: the caregiver's affidavit
  alone satisfies school-district residency requirements, without a
  guardianship or custody order, unless the district determines
  otherwise from actual facts.

## Method

Fetched every candidate section directly from `leginfo.legislature.ca.gov`
across three different California codes (Probate, Family, Education).
Every quote re-verified against a second, independent fetch with a
distinct User-Agent — confirmed byte-identical across both fetches for
every section used. One candidate section, Family Code § 6551, was
checked and found to return no substantive statutory text on either
independent fetch — consistent with having been repealed or consolidated
into §§ 6550/6552 by a 2025 amendment — and is not cited anywhere in this
document's clauses, disclosed rather than silently dropped.

## Verification

- Every candidate section fetched directly via `curl`, then re-verified
  on a second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 45 documents.

## Net changes

- New document: Nomination of Guardian for Minor Children
  (`guardianship_nomination`), 10 clauses (8 authority + 2 drafting), in
  the Estate Planning category.
- Corpus: 251 → 268 clauses; 43 → 45 documents (this document shipped
  together with the Codicil to a Will document, built in the same
  research wave).

## Estate Planning category summary

With this document, the category now has seven documents: Last Will and
Testament, Financial Power of Attorney, Advance Health Care Directive,
Revocable Living Trust, HIPAA Authorization, Codicil to a Will, and this
Guardian Nomination — covering the core estate plan, its standard
amendments, and the standalone instruments (health information release,
guardian designation) that don't require a full will or trust to matter.
