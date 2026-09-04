# Hiring, new document: California ABC Test for Worker Classification — Information Sheet

## Why this document

Confirmed by grep that "abc test," "2775," and "2776" had zero hits
anywhere. Read the Independent Contractor Agreement document's
`ic_classification` clause in full — confirmed it states only the
FEDERAL common-law control test (citing *Reid* and *Darden*), never
California's own codified ABC test; its own `gap` field explicitly
disclaims resolving "any state-law test." Also read the Willful
Misclassification of Independent Contractors document — confirmed it
covers only the PENALTY for misclassification (Lab. Code § 226.8), not
the classification test itself. Confirmed non-duplicative. First of
wave 76's four documents (1×4: Hiring, During employment,
Confidentiality & IP, Ending employment).

## What this document covers

6 clauses: 2 drafting (purpose/scope, acknowledgment) and 4 authority
clauses, citing Cal. Lab. Code §§ 2775(b)(1), (b)(1)(A)-(C), (b)(3),
and 2776, (a)(1), (a)(3):

- **`abctest_presumption_and_burden`** (§ 2775(b)(1)) — the default
  presumption of employee status, with the burden on the hiring
  entity to rebut it.
- **`abctest_three_factors`** (§ 2775(b)(1)(A)-(C)) — the three ABC
  factors, verified as an ALL-THREE-required structure — failing even
  one factor means employee status.
- **`abctest_scope_and_fallback`** (§ 2775(b)(1), (b)(3)) — **the
  central finding**: the ABC test's own stated scope (Labor Code,
  Unemployment Insurance Code, and IWC wage orders — not every legal
  question about worker status) and its fallback to the older Borello
  multi-factor test where a court rules the ABC test cannot be
  applied.
- **`abctest_b2b_exemption`** (§ 2776, (a)(1), (a)(3)) — the
  business-to-business exemption's core framing and 2 of its 12
  specific conditions, with the other 10 explicitly named as not
  restated.

## Genuine corrections and findings

- **The central finding**: confirmed the ABC test explicitly does not
  present itself as governing every legal question about worker
  status — its own text limits its scope to Labor Code, Unemployment
  Insurance Code, and IWC wage-order purposes, with an explicit
  fallback to Borello where a court finds the three-part test cannot
  be applied — verified precisely rather than assumed to be a
  universal replacement for the older test.
- Confirmed the all-three-required structure of the ABC factors
  (failing even one factor means employee status) rather than
  presenting it as a balancing test.
- Explicitly distinguished this test from the federal common-law test
  already in the corpus's `ic_classification` clause — stating clearly
  that the two tests can produce different answers for the same
  relationship, addressing a real risk of a reader conflating the two.
- Correctly declined to restate all 12 business-to-business exemption
  conditions, naming precisely which 10 were omitted rather than
  silently truncating.

## Honest gap disclosed

The substantial body of California case law interpreting "free from
control," "usual course of business," and "customarily engaged in an
independently established" trade is not surveyed. The Borello
decision's own content was not independently fetched or quoted — only
what § 2775's text says about when it governs. § 2775(b)(2)'s
carve-out preserving express statutory/wage-order exceptions to
"employee" status, and § 2776(b)-(c), are noted but not detailed.

## Method

Fetched Cal. Lab. Code §§ 2775 and 2776 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 9 citation quotes
across the 4 authority clauses programmatically confirmed as exact
substrings of the confirmed text. Independently re-verified during
integration review via a third fetch (Safari/macOS User-Agent) of
both sections — all 9 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (three leaks
  caught and fixed by the agent's own self-check before delivery,
  independently re-confirmed clean here).
- Checked source-independence disclosure logic — § 2775(b)(1)(A)-(C),
  § 2775(b)(1)/(b)(3), and § 2776's intro/(a)(1)/(a)(3) each correctly
  disclosed as subsections of one statutory section, not independent
  of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California ABC Test for Worker Classification —
  Information Sheet (`california_abc_test_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,681 → 2,687 clauses; 351 → 352 documents. First document
  of wave 76.
