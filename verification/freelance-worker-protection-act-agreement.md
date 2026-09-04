# Hiring, new document: California Freelance Worker Protection Act Agreement

## Why this document

Second document of wave 84, chosen via a scoping agent's category-gap
survey. Read the existing "Independent Contractor Agreement" document
and all four of its clauses (`ic_scope`, `ic_payment`,
`ic_classification`, `ic_ack`) in full — confirmed it covers only
generic scope-of-work and payment terms and federal common-law
misclassification risk (*CCNV v. Reid*, *Nationwide Mutual v.
Darden*), with a `gap` field explicitly disclaiming any state-specific
wage-and-hour test resolution and zero mention of the Freelance Worker
Protection Act. Grepped the corpus for "2777," "freelance," and "SB
988" — no hits. Confirmed non-duplicative.

## What this document covers

8 clauses: 2 drafting (purpose/coverage statement, acknowledgment) and
6 authority clauses, citing Cal. Bus. & Prof. Code §§ 18101(a)-(c),
18102(a)-(b), 18103(a)-(c), 18104, 18105, 18106(a)-(b), 18107, and Cal.
Labor Code § 2778(b)(2):

- **`fwpa_coverage_definitions`** (§ 18101(a)-(c); Lab. Code
  § 2778(b)(2); § 18107) — the "freelance worker"/"hiring
  party"/"professional services" definitions, the $250 threshold
  (single or 120-day-aggregated), and the January 1, 2025 applicability
  date.
- **`fwpa_written_contract_required`** (§ 18103(a), (c)) — the
  written-contract mandate, the four-year retention duty, and the
  statute's own preservation of oral-contract/promissory-estoppel
  remedies if a hiring party refuses to provide one.
- **`fwpa_contract_contents`** (§ 18103(b)) — the four statutory
  minimum contract contents.
- **`fwpa_timely_payment`** (§ 18102(a)-(b)) — the payment-timing
  default (30 days if unspecified) and the anti-lowball protection
  against conditioning payment on reduced compensation or extra
  goods/services/IP rights.
- **`fwpa_antiretaliation`** (§ 18105, § 18104) — the anti-retaliation
  protection and the separate non-waivability rule.
- **`fwpa_enforcement_remedies`** (§ 18106(a)-(b)) — civil enforcement
  by an aggrieved freelance worker or public prosecutor, attorney's
  fees/costs/injunctive relief, and the three statutory damages
  measures ($1,000 for a refused written contract; up to double unpaid
  compensation; contract-or-work value for any other violation).

## Genuine corrections and findings

- **The central finding**: the research brief's premise — that FWPA is
  codified at Labor Code § 2777 et seq. — is incorrect. Labor Code
  § 2777 (added 2020 by AB 2257) is actually the referral-agency/
  service-provider ABC-test exemption, unrelated to FWPA. The agent
  independently confirmed, from SB 988's own chaptered bill text and
  Legislative Counsel's Digest, that SB 988 instead adds Part 5
  (§§ 18100-18107) to Division 7 of the Business and Professions Code.
  Every citation in this document uses the correct Business and
  Professions Code sections.
- Confirmed § 18101(c)'s cross-reference to Labor Code § 2778(b)(2) for
  the "professional services" definition, and confirmed that Labor
  Code section was itself amended by AB 1514 (Stats. 2025, Ch. 305),
  effective January 1, 2026 — the fetched text already reflects the
  amended version, disclosed in the relevant clause's gap field.
- **A genuine statutory-text quirk, preserved rather than "corrected"**:
  § 18106(b)(1) reads "requested a written contact" where the parallel
  § 18106(b)(2) reads "requested a written contract" — verified as
  present in the actual enacted text across two independent fetches (my
  own independent re-fetch confirms this too), not a transcription
  error introduced by the research agent or this integration. Disclosed
  in the clause's gap field.
- Correctly declined to reproduce the full occupation-by-occupation
  list in Labor Code § 2778(b)(2) (only the "professional services"
  opening definition plus the first example, marketing, is quoted) —
  disclosed as an intentional scope limit in the gap field rather than
  silently truncated.

## Honest gap(s) disclosed

The full occupation-specific category list and conditions in Labor
Code § 2778(b)(2) (photographers, translators, licensed estheticians,
etc.) are not reproduced. The "public prosecutor" definition
(§ 18101(d), cross-referencing Labor Code § 180) is not independently
verified. This document does not determine, for a specific engagement,
whether professional services in fact fall within the statutory
categories, or whether specific facts establish that an oral contract
was formed.

## Method

Fetched Cal. Bus. & Prof. Code §§ 18101-18107 and Cal. Labor Code
§ 2778 from `leginfo.legislature.ca.gov`, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 14 citation quotes
across the 6 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a twenty-fifth fetch (a
distinct curl User-Agent string, "Groundtruth-25thVerify-FWPA/1.0") of
all seven Business and Professions Code sections plus Labor Code
§ 2778 — all 14 quotes confirmed clean, and independently re-confirmed
the "written contact" (not "contract") text at § 18106(b)(1) is
genuinely present in the source.

## Verification

- All eight statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  twenty-fifth independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section, and which (the Labor Code § 2778(b)(2)
  cross-reference) are genuinely separate sections; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Acknowledgment") matches the established
  boilerplate-title reuse pattern.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper case/citation identifier strings.
- No new fields required — all five fields (`hiringPartyName`,
  `contractorName`, `workDescription`, `contractPrice`, `dateSigned`)
  reused from the existing corpus (1, 2, 6, 1, and 159 prior documents
  respectively), each with a document-specific label per the corpus's
  established field-reuse pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Freelance Worker Protection Act Agreement
  (`freelance_worker_protection_act_agreement`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,900 → 2,908 clauses; 382 → 383 documents. Second addition
  of wave 84.
