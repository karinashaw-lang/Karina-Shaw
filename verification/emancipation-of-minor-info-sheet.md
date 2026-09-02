# Family Law, new document: Emancipation of a Minor — Information Sheet

## Why this document

No existing document addresses emancipation, a distinct legal status
that ends parental control — genuinely different from the existing
Guardianship of the Person, Guardianship of the Estate, and Petition
for Change of Name documents. Confirmed no overlap via grep.

## What this document covers

10 clauses: 3 drafting (declaration, information summary, signature
block) and 7 authority clauses:

- **`emancipation_statutory_purpose_and_paths`** (Fam. Code § 7001;
  § 7002(a), (b), (c)) — the three statutory paths to emancipated
  status (marriage/domestic partnership, active military duty, or
  court declaration).
- **`emancipation_eligibility_requirements`** (Fam. Code § 7120(a),
  (b)) — who may petition and the four facts a petition must allege.
- **`emancipation_notice_requirements`** (Fam. Code § 7121(a), (b),
  (c)) — notice to parents/guardian and public agencies before the
  hearing.
- **`emancipation_hearing_standard_and_declaration`** (Fam. Code
  § 7122(a), (b), (c)) — the court's findings and the declaration's
  conclusive-evidence effect.
- **`emancipation_legal_effects`** (Fam. Code § 7050(a)-(d), (e)) —
  the full statutory list of what emancipation changes, correcting a
  significant assumption about where this list lives.
- **`emancipation_voiding_and_rescission`** (Fam. Code § 7130(a), (b);
  § 7131; § 7132(a), (b); § 7133(a); § 7135) — the two distinct
  grounds and procedures for voiding (fraud) versus rescinding
  (indigency) a declaration.
- **`emancipation_guardianship_cross_reference`** (Prob. Code
  § 1600(b), (c)) — a genuine, on-point cross-reference: emancipation
  automatically terminates an existing guardianship of the person, but
  not of the estate.

## Genuine corrections caught during research

- The task brief guessed the statutory range as "§§ 7000-7002 and
  7120-7143." Direct review shows the correct full range is §§ 7000-
  7143, and critically, the effects-of-emancipation list lives in a
  separate chapter the brief's range skipped entirely: §§ 7050-7052
  (Chapter 2, "Effect of Emancipation"), which precedes the court-
  declaration procedure chapter (§§ 7110-7143) the brief focused on.
- Confirmed the eligibility requirements (age 14+, living apart with
  consent/acquiescence, managing own finances via Judicial Council
  form FL-150, lawful income source) exactly as anticipated.
- The effects list is far longer than assumed: a 17-item enumeration in
  § 7050(e) plus 4 additional effects in § 7050(a)-(d) — quoted in
  full rather than the handful of commonly-cited examples.
- Confirmed two genuinely distinct rescission mechanisms exist —
  voiding for fraud/withheld information (§ 7130(a), § 7131) and
  rescission for indigency (§ 7130(b), § 7132) — with different
  petitioners, standards, and procedures, not a single generic
  process.
- Confirmed the two automatic (non-judicial) emancipation paths
  (marriage/domestic partnership, active-duty military service) exist
  alongside the court-declaration path.
- Found a direct, on-point cross-reference not anticipated in the task
  brief: Prob. Code § 1600(b) automatically terminates an existing
  guardianship of the person (not the estate) upon a ward's
  emancipation under Fam. Code § 7002.

## Honest gaps disclosed

- No statutory provision was found barring a new guardian from being
  appointed for an already-emancipated minor — disclosed as an
  unresolved question rather than an invented rule.

## Method

Fetched Fam. Code §§ 7001, 7002, 7050, 7120, 7121, 7122, 7130-7133,
7135 and Prob. Code § 1600 directly from `leginfo.legislature.ca.gov`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All 23 citation quotes
programmatically confirmed as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Extra scrutiny given to this entire document given the sensitivity
  of the topic (a minor separating from parental control): confirmed
  every clause states only the statutory framework and never asserts
  that any specific minor's situation satisfies the eligibility tests.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`countyOfFiling`, `dateSigned`, `cityState`,
  `parent1Name`, `parent2Name`, `petitionerName`) confirmed to match
  existing Family Law document conventions exactly — `petitionerName`
  deliberately chosen (rather than `childName`) since the minor is the
  petitioner here, matching the existing Name Change document's
  convention for self-filing petitioners. New field: `petitionerDOB`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Emancipation of a Minor — Information Sheet
  (`emancipation_of_minor_info_sheet`), 10 clauses (7 authority + 3
  drafting), in the Family Law category. New field: `petitionerDOB`.
- Corpus: 1,108 → 1,118 clauses; 142 → 143 documents.
