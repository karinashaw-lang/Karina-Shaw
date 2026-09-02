# Family Law, new document: Third-Party (Nonparent) Custody and Visitation — Information Sheet

## Why this document

The corpus's existing Grandparent Visitation document covers only the
grandparent-specific statute (Fam. Code §§ 3102-3104). Confirmed as a
genuine gap: grep for "de facto parent" and "third-party" + "custody"
returned zero hits, and reading the full `grandvis_` clause set
confirmed those clauses don't touch the broader nonparent framework.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses:

- **`thirdpartycustody_3040_preference_order`** (Fam. Code § 3040(a))
  — the general custody preference order, including a nonparent.
- **`thirdpartycustody_3041_detriment_standard`** (§ 3041(a)-(c)) —
  the heightened detriment finding and its statutory definition.
- **`thirdpartycustody_3100_general_visitation`** (§ 3100(a)) — the
  general, discretionary nonparent visitation provision.
- **`thirdpartycustody_3101_stepparent_distinct`** (§ 3101(a),(c)) —
  stepparent visitation as a separate, narrower pathway.
- **`thirdpartycustody_standing_proceeding_requirement`** (§ 3021) —
  the proceeding-types requirement governing standing.
- **`thirdpartycustody_troxel_crossref`** — the constitutional
  backdrop, honestly reused from the corpus's existing Grandparent
  Visitation document.

## Genuine corrections and findings

- **A significant correction**: § 3101 is not the general nonparent
  visitation statute — it is limited by its own text to stepparents.
  The actual catch-all provision ("any other person having an
  interest in the welfare of the child") is § 3100(a).
- **A correction on the detriment standard**: it is not purely
  case-law-elaborated — § 3041(c) itself defines it in the statute's
  text (tied to someone who assumed a day-to-day parental role for a
  substantial time), though the word "includes" signals the
  definition is illustrative, not necessarily exhaustive.
- **A significant finding**: there is no freestanding nonparent
  standing statute analogous to the grandparent-specific § 3104.
  Sections 3040/3041/3100(a) apply only "in a proceeding described in
  Section 3021" (dissolution, nullity, legal separation, DVPA, UPA
  action, or a DA action) — disclosed as a genuine statutory gap
  rather than inventing a standing mechanism. Section 3120's exclusive
  custody action, cross-referenced by § 3021(d), is by its own text
  limited to "a spouse," so it doesn't supply nonparent standing
  either.
- The Troxel v. Granville quote is reused, not re-fetched, from the
  corpus's existing `grandvis_3104b_filing_restriction` clause —
  independently confirmed byte-identical to that already-verified
  entry, with the reuse disclosed rather than presented as a fresh
  verification.

## Honest gaps disclosed

- Section 3041(d)'s lower preponderance presumption and § 3041(e)'s
  ICWA evidentiary carve-out are mentioned in prose but not quoted as
  citations.
- Section 3100(b)-(f)'s domestic-violence visitation safeguards were
  not researched.
- Probate Code guardianship (a wholly separate, non-Family-Code
  nonparent custody route) is out of scope.
- No case law was located or verified this session, including any
  California case applying Troxel directly to §§ 3040/3041/3100 —
  disclosed explicitly rather than assumed.

## Method

Fetched Fam. Code §§ 3021, 3040, 3041, 3100, and 3101 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All citation quotes programmatically confirmed as exact
substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration. Reused Troxel quote independently
  confirmed byte-identical to the corpus's existing verified entry.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`childName`, `childDOB`, `cityState`, `countyOfFiling`,
  `dateSigned`, `parent1Name`, `parent2Name`, `relationshipToChild`,
  `petitionerName`) independently confirmed to match existing corpus
  convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Third-Party (Nonparent) Custody and Visitation —
  Information Sheet (`third_party_custody_visitation_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 1,580 → 1,588 clauses; 199 → 200 documents. Completes wave
  37 (Immigration-Related Unfair Employment Practices, Lactation
  Accommodation, No-Contest Clause Enforceability, Third-Party
  Custody and Visitation).
