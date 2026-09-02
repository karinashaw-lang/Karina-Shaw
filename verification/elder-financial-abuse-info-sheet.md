# Estate Planning, new document: Elder and Dependent Adult Financial Abuse — Information Sheet

## Why this document

The existing Conservatorship of an Adult document concerns court
appointment of a substitute decision-maker. This document covers a
distinct legal question: California's statutory definition of
financial abuse and the civil remedies available for it, which can
arise whether or not anyone is or ever becomes subject to a
conservatorship.

## What this document covers

9 clauses: 2 drafting (declaration/purpose, signature/acknowledgment)
and 7 authority clauses:

- **`elderabuse_elder_dependent_adult_definitions`** (Welf. & Inst.
  Code § 15610.27; § 15610.23(a), (b)) — the statutory definitions of
  "elder" and "dependent adult," including the two independent
  dependent-adult branches.
- **`elderabuse_financial_abuse_definition`** (Welf. & Inst. Code
  § 15610.30(a), (b)) — the three alternative statutory prongs of
  financial abuse, including the knew-or-should-have-known wrongful-
  use presumption.
- **`elderabuse_undue_influence_factors`** (Welf. & Inst. Code
  § 15610.70(a), (b)) — the statutory undue-influence definition and
  its four evidentiary factor categories.
- **`elderabuse_civil_remedies`** (Welf. & Inst. Code § 15657.5(a),
  (b)) — the attorney's-fees remedy (preponderance standard) and the
  higher clear-and-convincing standard that applies only to removing
  the survival-damages cap, correcting a significant assumption.
- **`elderabuse_statute_of_limitations`** (Welf. & Inst. Code
  § 15657.7) — the 4-year discovery-based limitations period specific
  to financial-abuse damages claims.
- **`elderabuse_mandated_reporters_general`** (Welf. & Inst. Code
  § 15630(a), (b)(1), (b)(1)(F)) — the general mandated-reporter
  categories and duty, which treats financial abuse identically to
  physical abuse.
- **`elderabuse_financial_institution_reporters`** (Welf. & Inst. Code
  § 15630.1(a), (d)(1), (f); § 15630(h)) — the narrower, financial-
  abuse-specific mandated-reporter category for financial institution
  officers and employees, with its distinct civil-penalty (not
  misdemeanor) enforcement mechanism.

## Genuine corrections caught during research

- The task brief assumed § 15657 covers financial abuse remedies with
  a clear-and-convincing standard. Direct review shows § 15657 governs
  only physical abuse, neglect, and abandonment claims by its own
  terms — financial abuse's remedies live exclusively in § 15657.5,
  which uses an ordinary preponderance standard for attorney's fees;
  clear-and-convincing evidence is required only for the narrower
  removal of the § 377.34 survival-damages cap. This is a materially
  more favorable structure for plaintiffs than assumed.
- Confirmed § 15657.7's four-year discovery-based limitations period
  exists exactly as hypothesized, and confirmed § 15610.70 (undue
  influence, added 2013) at the correct section and year.
- The task brief anticipated a "narrower mandated-reporter category for
  financial abuse" but framed it imprecisely. Direct review shows
  § 15630's general categories treat financial abuse identically to
  physical abuse; the actual narrower category is a separate statute,
  § 15630.1 (the Financial Elder Abuse Reporting Act of 2005), which
  makes financial institution officers/employees mandated reporters
  only for financial abuse, with a distinct civil-penalty enforcement
  mechanism ($1,000/$5,000 if willful, enforced only by AG/DA/county
  counsel) rather than § 15630(h)'s misdemeanor.
- Confirmed the two independent branches of "dependent adult" (§
  15610.23(a): age-based with disability/limitation showing; (b):
  age-based inpatient admission, no disability finding required).

## Honest gaps disclosed

- CourtListener was rate-limited before any case law applying the
  § 15610.70 undue-influence factors could be verified — no case
  citation is included; that clause rests on statutory text alone.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration. All 17 citation quotes
  programmatically confirmed as exact substrings of the verified text.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Extra scrutiny given to this entire document given the sensitivity
  of the topic: confirmed every clause states only statutory
  definitions/standards and explicitly disclaims that any specific
  person is an elder/dependent adult or that any specific conduct
  constitutes or was suffered as abuse.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — one title was proactively renamed by the delivering agent
  before delivery to avoid colliding with `drugtest_purpose` and
  `landlordentry_declaration`).
- Field names (`dateSigned`, `cityState`) confirmed to match existing
  corpus conventions. New fields: `preparerName`,
  `personOfConcernName`, `relationshipToPersonOfConcern` — chosen
  deliberately to avoid asserting legal status (not `elderName` or
  `victimName`).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Elder and Dependent Adult Financial Abuse —
  Information Sheet (`elder_financial_abuse_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Estate Planning category. New
  fields: `preparerName`, `personOfConcernName`,
  `relationshipToPersonOfConcern`.
- Corpus: 1,079 → 1,088 clauses; 139 → 140 documents.
