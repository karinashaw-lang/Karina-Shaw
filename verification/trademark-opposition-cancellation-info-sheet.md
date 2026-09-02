# Confidentiality & IP, new document: Trademark Opposition and Cancellation — Information Sheet

## Why this document

The corpus's existing Trademark Registration, License, Assignment,
and Cease and Desist documents all cover non-adversarial-registration
or infringement contexts. None covers the TTAB's administrative
proceedings for opposing an application or cancelling a registration.
One existing clause, `tmlicense_cancellation_ground`, touches
abandonment narrowly in the license context — read first to avoid
duplicating that point.

## What this document covers

7 clauses: 2 drafting (notice declaration, signature/certification)
and 5 authority clauses:

- **`ttab_opposition_basis_and_timing`** (15 U.S.C. § 1063(a)) — who
  may oppose, the 30-day deadline, and its extension mechanism.
- **`ttab_cancellation_basis_and_timing`** (15 U.S.C. § 1064) —
  standing and how the available grounds narrow after five years.
- **`ttab_grounds_common_to_both_proceedings`** (§ 1064(3); § 1052(d),
  (e)(1)) — statutory grounds supporting either proceeding.
- **`ttab_administrative_tribunal_scope`** (§ 1067(a); § 1068;
  § 1116(a)) — the Board's register-only authority, contrasted with
  federal court remedies.
- **`ttab_abandonment_ground`** (15 U.S.C. § 1127(1)) — the statutory
  definition of abandonment and its nonuse presumption, deliberately
  using a different subsection than the corpus's existing
  `tmlicense_naked_licensing_abandonment` (§ 1127(2)).

## Genuine corrections and findings

- **Confirmed uspto.gov is unreachable** this session (`curl` returned
  a 403 CONNECT tunnel failure on both `/trademarks/ttab` and the root
  domain). Per the standing rule, the document is built entirely on
  the Lanham Act text itself (law.cornell.edu), not TTAB's own
  procedural rules (37 C.F.R. Part 2), with the reachability finding
  disclosed in every clause's `gap`.
- Confirmed § 1064's structure: a five-year general window (¶ 1)
  versus enumerated "at any time" grounds (¶ 3) that survive past five
  years — richer than a flat single-deadline framing.
- **A precision correction**: § 1064(3)'s fraud ground is explicitly
  tied by statutory text to violations of § 1054 or § 1052(a)-(c) —
  not § 1052(d)/(e). Confusing-similarity and mere-descriptiveness
  grounds are sourced instead as general registrability bars under
  § 1052(d), (e)(1), with the link between them and Board practice
  disclosed as established practice that could not be independently
  verified via case law this session (uspto.gov blocked).
- Confirmed the TTAB/court distinction as an honest textual
  inference — § 1068's exhaustive, register-only list of available
  actions, contrasted with § 1116/§ 1117's court-only damages/
  injunction remedies — disclosed as an inferential step rather than
  overstated as a direct quote.

## Honest gaps disclosed

- No TTAB procedural-rule content (filing mechanics, ESTTA, discovery
  rules) is included — uspto.gov was blocked.
- No supporting case law (e.g., the multi-factor confusion test or
  genericness proof standards) was pursued for this document.

## Method

Fetched 15 U.S.C. §§ 1052, 1063, 1064, 1067, 1068, 1116, and 1127
directly from `law.cornell.edu`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All citation quotes programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration. Independently re-confirmed no
  fabricated or placeholder quote text appears in any citation.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (5 instances
  caught and fixed by the research agent's own self-check before
  delivery).
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`trademarkDescription`, `goodsServicesDescription`,
  `registrationOrApplicationNumber`) independently confirmed to match
  existing corpus convention. New fields: `filingPartyName`,
  `adversePartyName`, `proceedingType`, `groundsForProceeding`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trademark Opposition and Cancellation — Information
  Sheet (`trademark_opposition_cancellation_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. New
  fields: `filingPartyName`, `adversePartyName`, `proceedingType`,
  `groundsForProceeding`.
- Corpus: 1,534 → 1,541 clauses; 193 → 194 documents.
