# Real Estate, new document: FEHA Housing Discrimination — Information Sheet

## Why this document

Fourth and final document of wave 90. Read all 51 existing "Real Estate"
category documents' descriptions — confirmed none cover housing
discrimination law. Grepped the corpus for "Fair Housing," "12955,"
"Unruh," and "housing discrimination" and found only two passing,
unrelated cross-references (an Ellis Act clause citing § 12955.3 in
passing, and a religious-accommodation employment clause mentioning the
Unruh/§ 12955 relationship in passing) plus the existing
`crd_feha_administrative_complaint_info_sheet` document, which covers only
the *procedural* FEHA administrative-complaint process (Gov. Code §§ 12960,
12965) in the Ending employment category, not the substantive
housing-discrimination provisions of § 12955. Confirmed a real,
non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (declaration, acknowledgment) and 5 authority
clauses, citing Gov. Code §§ 12927(c)(1), (d), (e), (h)(1), 12955(a), (c),
(d), (m), (p)(1), and Civ. Code § 51(a)-(b):

- **`fehahousing_scope_and_covered_transactions`** (§ 12927(d), (e),
  (h)(1)) — the statutory definitions of "housing accommodation," "owner,"
  and "real estate-related transactions."
- **`fehahousing_protected_characteristics`** (§ 12955(a), (m)) — the list
  of protected characteristics and the perceived/associational-
  discrimination rule.
- **`fehahousing_prohibited_practices`** (§ 12927(c)(1), § 12955(c)) —
  the statutory examples of "discrimination" (refusal, inferior terms,
  harassment, segregated housing, etc.) and the discriminatory-advertising
  prohibition.
- **`fehahousing_source_of_income`** (§ 12955(p)(1)) — the "source of
  income" protected-characteristic definition, including Section 8 and VASH
  vouchers.
- **`fehahousing_unruh_relationship`** (§ 12955(d); Civ. Code § 51(a)-(b))
  — FEHA's own cross-reference to the Unruh Civil Rights Act as applied to
  housing accommodations, and Unruh's general nondiscrimination text.

## Genuine corrections and findings

- **A genuine structural finding**: the task brief assumed § 12955 itself
  would contain the operative definitions. Independently fetching the text
  showed the key definitions ("housing accommodation," "owner," "real
  estate-related transactions," and the base "discrimination" definition)
  actually live in the separate § 12927, cross-referenced into § 12955's
  prohibitions — disclosed and cited accordingly rather than assumed to be
  self-contained in § 12955.
- **The Unruh Act relationship was independently verified, not assumed**:
  § 12955(d) itself textually cross-references Civil Code § 51 "as that
  section applies to housing accommodations." Civil Code § 51 was
  separately fetched and confirmed as the Unruh Civil Rights Act. The
  clause explicitly discloses that the two statutes' protected-
  characteristic lists are not identical (Unruh separately lists
  citizenship, primary language, immigration status, and medical
  condition; the FEHA housing list separately lists source of income,
  familial status, and veteran/military status) and takes no position on
  which statute would govern any specific situation.
- Correctly declined to assert how the FEHA-housing protected-
  characteristics list compares to FEHA's employment-discrimination list
  (Gov. Code § 12940) — § 12940 was not fetched in this research round, and
  the gap field discloses this rather than assuming a comparison.
- Correctly disclosed, rather than silently omitting, seven further
  prohibited practices named in § 12955 but not quoted (retaliation,
  aiding/abetting, blockbusting, real-estate-transaction/appraisal
  discrimination, MLS/service-access denial, and land-use/restrictive-
  covenant discrimination) and two named-but-unquoted exemptions (the
  religious-organization exemption at § 12955.4 and the senior-housing
  exemption at § 12955.9), both independently fetched and verified but
  deliberately not built into clauses to keep the document to its scoped
  size.

## Genuine defects found and fixed (integration review)

Independent re-verification found two defects, both corrected before
merge:
1. **A genuine mid-word truncation**: the `fehahousing_source_of_income`
   clause's delivered quote cut off mid-word — "...a housing owner or
   landlord is not considered a representative o" — ending on a bare "o"
   rather than completing "of a tenant unless the source of income is a
   federal Department of Housing and Urban Development Veterans Affairs
   Supportive Housing voucher." Because "o" is itself a substring of "of"
   in the source text, this truncated quote passed a naive substring check
   despite being incomplete — caught only by manually inspecting the
   quote's ending against the source's actual continuation. Extended the
   quote to the complete sentence and re-verified.
2. **A genuine missing-space delivered-quote defect** in the
   `fehahousing_scope_and_covered_transactions` clause's § 12927(h)(1)
   quote ("...following:(1) The making..." vs. the source's "...following:
   (1) The making..."), matching the established missing-space pattern
   documented repeatedly this window. Corrected and re-verified.

## Honest gap(s) disclosed

Section 12927(c)(1)'s reasonable-modification and reasonable-accommodation
provisions for disabled persons, § 12955(f)-(l)'s retaliation, aiding/
abetting, blockbusting, real-estate-transaction, MLS-access, and land-use
provisions, § 12955(o)'s further source-of-income protections tied to
government rent subsidies, § 12955.3's "disability" definition, and the
religious-organization and senior-housing exemptions are named but not
quoted. Whether or how Unruh has been held by courts to apply to specific
housing transactions was not researched (statutory text only). This
document does not resolve which statute governs, or determine, any
specific housing transaction, application, or dispute.

## Method

Fetched Gov. Code §§ 12927, 12955, and Civ. Code § 51 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical. All 11 citation
quotes across the 5 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes) after two genuine defects
(described above) were corrected. Independently re-verified during
integration review via a fifty-first fetch (a distinct curl User-Agent
string, "Groundtruth-51stVerify-FEHAHousing/1.0") of all three sections —
9 of 11 quotes confirmed clean immediately; the truncation and missing-
space defects were caught, corrected, and re-confirmed clean.

## Verification

- All three statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fifty-first independent
  fetch during integration review; all 11 quotes confirmed clean (two
  corrected before merge).
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section (§ 12927's three definitions; § 12955's two protected-
  characteristics subdivisions) versus genuinely independent sections
  (§ 12927 vs. § 12955; Gov. Code § 12955(d) vs. Civ. Code § 51); correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 11 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`propertyAddress`,
  `preparerName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: FEHA Housing Discrimination — Information Sheet
  (`feha_housing_discrimination_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Real Estate category. No new fields.
- Corpus: 3,079 → 3,086 clauses; 406 → 407 documents. Fourth and final
  addition of wave 90.

## Wave 90 summary

Wave 90 closes at 3,086 clauses / 407 documents (from 3,057/403 at this
wave's first addition): California Statutory Will (Estate Planning),
CalSavers Retirement Savings Program (Hiring), Immigrant Worker Protection
Act (During employment), and FEHA Housing Discrimination (Real Estate) —
one document in each of four target categories, following the established
1×4 strict-alternation pattern. This wave's integration review caught four
genuine delivered-quote defects across three documents (two missing-space
defects, one mid-word truncation caught despite passing a naive substring
check, one earlier missing-space defect in the Statutory Will document)
and two significant genuine research corrections (the actual Immigrant
Worker Protection Act codification split between Labor Code § 90.2 and
Government Code §§ 7285.1-7285.3, and CalSavers' uncorrected internal
cross-reference). Wave 91 should return to a 2×2 pattern across two of the
less-recently-touched category pairs.
