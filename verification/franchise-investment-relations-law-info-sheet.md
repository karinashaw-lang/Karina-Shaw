# Business Formation, new document: California Franchise Investment Law and Franchise Relations Act — Information Sheet

## Why this document

Second document of wave 86. Grepped the corpus for "franchise
disclosure document," "FDD," "franchise investment law," "20020," and
"31000" — confirmed every existing "franchise" hit anywhere in the
corpus is actually "franchise tax" (an unrelated Revenue & Taxation
Code topic). Read the existing SAFE Note document (SEC Act §5
registration, Reg D 506 exemption, accredited-investor definition, CA
blue-sky notice filing) and confirmed it is entirely unrelated to
franchise regulation. Confirmed a real, previously unfilled gap.

## What this document covers

8 clauses: 2 drafting (declaration, signature/certification) and 6
authority clauses, citing Cal. Corp. Code §§ 31005(a), 31110, 31119(a)
and Cal. Bus. & Prof. Code §§ 20001(a)-(c), 20020, 20025, 20030:

- **`franchise_definition`** (Corp. Code § 31005(a); Bus. & Prof.
  Code § 20001(a)-(c)) — the three-part statutory definition of
  "franchise" codified in materially identical terms in both statutes.
- **`franchise_presale_registration`** (Corp. Code § 31110) — the
  pre-sale registration requirement with the Commissioner of Financial
  Protection and Innovation.
- **`franchise_disclosure_document_timing`** (Corp. Code § 31119(a)) —
  the 14-day franchise disclosure document delivery requirement before
  execution or receipt of consideration.
- **`franchise_good_cause_termination`** (Bus. & Prof. Code § 20020) —
  the good-cause requirement for termination and the 60-day-notice/
  60-to-75-day-cure mechanics.
- **`franchise_nonrenewal_notice`** (Bus. & Prof. Code § 20025) — the
  180-day prior-written-notice rule for non-renewal.
- **`franchise_notice_requirements`** (Bus. & Prof. Code § 20030) —
  the form, delivery method, and content requirements for a
  termination or non-renewal notice.

## Genuine corrections and findings

- Confirmed via full statutory text (not assumed) that the Franchise
  Relations Act's structure is: Article 1 (Definitions, §§ 20000-20010),
  Article 3 (Termination, §§ 20020-20022), Article 4 (Nonrenewal,
  §§ 20025-20026, a separate article from Termination), and Article 5
  (Notices, § 20030 only) — used the correct section for each topic
  rather than assuming a single "termination" section covers both
  termination and non-renewal.
- Deliberately used Corp. Code § 31110 (the actual registration
  requirement) rather than § 31013 (a situs-of-offer rule that could be
  mistaken for the same thing), and § 31119(a) (the pre-sale delivery
  timing requirement) rather than § 31114 (which governs the disclosure
  document's contents, a different topic) — both confirmed only by
  reading the full statutory text rather than assumed from section
  proximity.
- Correctly disclosed that Corp. Code § 31005(a) and Bus. & Prof. Code
  § 20001(a)-(c) are independently codified in two different codes
  (not subdivisions of one section) despite using nearly identical
  operative language — genuinely independent sources, not treated as
  duplicative.

## Honest gap(s) disclosed

Corp. Code § 31005(b)-(c) (petroleum-marketing extension and nonprofit-
cooperative exclusion) and the parallel Bus. & Prof. Code § 20001(d)
exclusions are not restated. The "area franchise"/"subfranchise"
extensions (Corp. Code § 31010; Bus. & Prof. Code § 20006) and the
"franchise fee" definition (Corp. Code § 31011; Bus. & Prof. Code
§ 20007) are not covered. The registration exemptions (Corp. Code
§§ 31100-31109.1), the application/escrow/stop-order process
(§§ 31111-31118), and disclosure-document content requirements
(§ 31114) are not covered. Bus. & Prof. Code § 20021's list of
immediate-termination circumstances, § 20022's post-termination
repurchase obligations, § 20025's six lettered non-renewal conditions,
and § 20026's term-extension option are named but not quoted. This
document does not evaluate whether any specific arrangement is a
"franchise," or whether any specific offer, sale, termination, or
non-renewal complied with these statutes.

## Method

Fetched Cal. Corp. Code §§ 31005, 31110, 31119 and Cal. Bus. & Prof.
Code §§ 20001, 20020, 20025, 20030 from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization
(two transient proxy connection failures during the Article 4/5
fetches were retried successfully and yielded identical text). All 7
citation quotes across the 6 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a
thirty-third fetch (a distinct curl User-Agent string,
"Groundtruth-33rdVerify-Franchise/1.0") of all seven sections — all 7
quotes confirmed clean.

## Verification

- All seven statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  thirty-third independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the definition
  clause correctly discloses that its two citations are independently
  codified in different codes despite near-identical language; every
  other clause correctly states it quotes a single section. Correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Signature and Certification") match the established
  boilerplate-title reuse pattern.
- Checked every citation's `case` field for emptiness — all 7
  populated with case/citation identifier strings (a shorter format
  than most recent documents' "(California Legislative Information
  text)" suffix, but non-empty and accurate; a stylistic variance, not
  a defect).
- No new fields required — all four fields (`preparerName`,
  `companyName`, `dateSigned`, `cityState`) reused from the existing
  corpus (28, 192, 164, and 142 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Franchise Investment Law and Franchise
  Relations Act — Information Sheet
  (`franchise_investment_relations_law_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 2,946 → 2,954 clauses; 388 → 389 documents. Second addition
  of wave 86.
