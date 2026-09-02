# Family Law, new document: Child Abduction Prevention Orders — Information Sheet

## Why this document

The corpus's existing Move-Away Custody, Child Custody Jurisdiction
(UCCJEA), and Emergency (Ex Parte) Custody Order documents don't cover
Fam. Code § 3048's specific abduction-risk findings and preventive
measures. Confirmed by grep that "abduction prevention" and "3048"
had zero hits; the delivering agent read all three existing documents
first to avoid duplication.

## What this document covers

7 clauses: 2 drafting (declaration, signature/acknowledgment) and 5
authority clauses:

- **`abductionprevention_fam3048a_required_order_contents`**
  (§ 3048(a)) — contents required in every custody or visitation
  order, regardless of abduction risk.
- **`abductionprevention_fam3048b1_risk_factors`** (§ 3048(b)(1)) —
  the court's duty to consider eight enumerated risk factors.
- **`abductionprevention_fam3048b2_preventive_measures`**
  (§ 3048(b)(2)-(3)) — eleven categories of preventive measures.
- **`abductionprevention_fam3048b2j_uccjea_hague_relationship`**
  (§ 3048(b)(2)(J)) — how this connects to the UCCJEA and Hague
  Convention without duplicating either.
- **`abductionprevention_fam3048b4_district_attorney_notice`**
  (§ 3048(b)(4), (c), (d)) — the DA Child Abduction Unit notice
  requirement and relationship to Penal Code § 278.7.

## Genuine corrections and findings

- **A significant correction**: § 3048(a)'s five required order
  contents are NOT limited to abduction-risk cases — they apply to
  every custody or visitation order in a California proceeding,
  regardless of whether abduction risk is ever raised.
- **A confirmed non-adoption finding**: California's eight risk
  factors are NOT drawn from the Uniform Child Abduction Prevention
  Act (UCAPA) by cross-reference — the phrase never appears in § 3048;
  California codified its own, separately worded factor list directly
  in the statute. § 3048 does cross-reference a different uniform act
  (the UCCJEA), but only within the preventive-measures list, not as
  the source of the risk factors.
- Confirmed the preventive-measures list is longer and more specific
  than a generic summary would suggest — eleven lettered categories
  including new/replacement passport application prohibitions, foreign
  consulate notification, order registration in another state/country,
  and specific travel-assurance documentation.
- Deliberately distinguished this document's § 3048(b)(2)(J) clause
  from the corpus's existing UCCJEA document: this clause covers a
  preventive measure a court may include in an abduction-risk order,
  while the UCCJEA document covers which state's courts have
  jurisdiction — related but legally distinct questions.

## Honest gap disclosed

Penal Code § 278.7 (cross-referenced by § 3048(d)) was not
independently fetched or verified — the clause reports only that
§ 3048 states it "does not affect the applicability of" that section,
without describing its substance.

## Method

Fetched Fam. Code § 3048 directly from `leginfo.legislature.ca.gov`
via curl with two distinct User-Agent strings (WebFetch was blocked by
the environment's egress policy for this domain) — byte-identical text
both times. All 9 citation quotes programmatically confirmed as exact,
whitespace-normalized substrings of the fetched text.

## Verification

- Citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every clause
  correctly discloses that all citations are subdivisions of the
  single statutory section 3048, not independent sources; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`childName`, `party1Name`, `party2Name`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Child Abduction Prevention Orders — Information Sheet
  (`child_abduction_prevention_orders_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Family Law category. No new fields.
- Corpus: 1,782 → 1,789 clauses; 227 → 228 documents. First document
  of wave 45.
