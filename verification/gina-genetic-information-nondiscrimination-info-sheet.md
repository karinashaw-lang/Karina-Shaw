# Hiring, new document: Genetic Information Nondiscrimination Act (GINA) — Information Sheet

## Why this document

Category-balance analysis flagged Hiring as one of wave 62's four
perpetually-thin categories. Confirmed by grep that "genetic
information nondiscrimination act," "GINA," and "42 U.S.C. 2000ff" had
zero hits anywhere in the corpus. Read the existing post-offer medical
examination document (an ADA-related document) in full and confirmed
this is a genuine companion — disability-related medical inquiries
under the ADA are categorically distinct from genetic-information
rules under GINA. First of wave 62's four documents.

## What this document covers

7 clauses: 2 drafting (purpose, closing/signature) and 5 authority
clauses, citing 42 U.S.C. §§ 2000ff, 2000ff-1, 2000ff-5, and 2000e:

- **`gina_prohibition`** (§ 2000ff-1(a)) — the core discrimination
  prohibition based on genetic information.
- **`gina_definition`** (§ 2000ff(4)) — **a key finding**: the
  statutory definition of "genetic information" reaches family medical
  history directly, not just genetic tests.
- **`gina_acquisition_restriction`** (§ 2000ff-1(b)) — the restriction
  on requesting/requiring/purchasing genetic information and its six
  specific statutory exceptions.
- **`gina_confidentiality`** (§ 2000ff-5(a)) — the confidentiality
  requirement, including the statute's own cross-reference making ADA
  confidentiality compliance a recognized route to GINA compliance.
- **`gina_employer_threshold`** (§ 2000ff(2)(B)(i) + § 2000e(b)) — the
  fifteen-employee coverage threshold, verified as a citation chain
  (GINA borrows Title VII's definition by cross-reference).

## Genuine corrections and findings

- **The central finding**: GINA's definition of "genetic information"
  expressly includes "the manifestation of a disease or disorder in
  family members" — family medical history is directly covered by the
  statute's own text, not merely analogous to genetic testing.
- **The full six-exception list, not a smaller assumed set**: the
  acquisition restriction has six statutory exceptions (inadvertent
  acquisition, wellness/genetic-services programs, FMLA certification,
  commercially/publicly available sources, workplace toxic-substance
  genetic monitoring, and forensic/DNA-identification quality control)
  — verified against the statute's full text rather than the four the
  task brief initially suggested.
- Confirmed GINA's confidentiality provision explicitly ties compliance
  to the ADA's own confidentiality provision (42 U.S.C.
  § 12112(d)(3)(B)) as a recognized compliance route, rather than
  merely being "modeled on" it in a vaguer sense.
- Confirmed the fifteen-employee threshold is not stated directly in
  GINA's own text but is reached via an explicit cross-reference to
  Title VII's definition — disclosed as a citation chain, not two
  independent corroborating sources.

## Honest gap disclosed

The ADA's own confidentiality text (42 U.S.C. § 12112(d)(3)(B)),
though cross-referenced by GINA, was not independently re-fetched and
re-verified in this research session — only the fact that GINA
cross-references it is verified. GINA's "family member" definition (42
U.S.C. § 2000ff(3)) was reviewed but not separately quoted or cited.
EEOC implementing regulations (29 C.F.R. Part 1635), state
genetic-privacy laws, and GINA's Title I health-insurance provisions
were not covered.

## Method

Fetched 42 U.S.C. §§ 2000ff, 2000ff-1, 2000ff-5, and 2000e from
`law.cornell.edu` via curl, each fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. All 5 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- All four sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 2000ff's
  definitional paragraphs correctly disclosed as one section, not
  independent of each other; § 2000ff(2)(B)(i) and § 2000e(b) correctly
  disclosed as a citation chain rather than independent corroboration;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Acknowledgment").
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Genetic Information Nondiscrimination Act (GINA) —
  Information Sheet
  (`gina_genetic_information_nondiscrimination_info_sheet`), 7 clauses
  (5 authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,294 → 2,301 clauses; 295 → 296 documents. First document of
  wave 62.
