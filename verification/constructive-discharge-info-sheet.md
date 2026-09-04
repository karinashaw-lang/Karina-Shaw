# Ending employment, new document: Constructive Discharge — Information Sheet

## Why this document

Confirmed by grep that "constructive discharge" had zero hits anywhere
in the corpus. Distinguished from the existing Wrongful Termination in
Violation of Public Policy document, which addresses actual discharges
— constructive discharge is a doctrine that supplies the fact of
"termination" for such an underlying claim, not a standalone tort.
Fourth and final document of wave 58, closing the wave.

## What this document covers

7 clauses: 2 drafting (background declaration, closing/signature) and 5
authority clauses, all citing *Turner v. Anheuser-Busch, Inc.* (1994) 7
Cal.4th 1238:

- **`constructivedischarge_core_doctrine`** — the doctrine: a
  resignation treated in law as an employer-initiated termination.
- **`constructivedischarge_underlying_claim`** — **a key finding**:
  constructive discharge is not itself a standalone claim; it supplies
  the "termination" element for a separate underlying claim.
- **`constructivedischarge_objective_standard`** — the objective,
  reasonable-employee standard (not the employee's subjective reaction).
- **`constructivedischarge_aggravated_pattern`** — a high threshold:
  unusually aggravated conditions or a continuous pattern, not isolated
  acts.
- **`constructivedischarge_employer_knowledge`** — **a second key
  finding**: the employer must have actually known of or deliberately
  created the conditions; mere constructive knowledge is insufficient.

## Genuine corrections and findings

- **Constructive discharge is not a standalone claim**: confirmed
  directly from Turner's own text — the doctrine addresses employer
  "end runs" around claims requiring an employer-initiated termination
  as an element, and Turner's own claim was framed as "constructive
  wrongful discharge in violation of fundamental public policy," the
  doctrine applied together with, not instead of, that separate
  underlying claim.
- **A precise narrowing of a prior, broader Court of Appeal standard**:
  Turner requires the employer to have actually known of or
  deliberately created the intolerable conditions — declining to follow
  an earlier Court of Appeal rule (*Brady v. Elixir Industries*) that
  had allowed mere constructive knowledge, over a dissent on exactly
  this point (Kennard, J.).
- Confirmed no requirement of the employer's express intent to force a
  resignation — California declined a stricter, Fourth-Circuit-only
  rule, disclosed explicitly as a genuine jurisdictional split rather
  than presented as a uniform national standard.
- Confirmed the "aggravated" or "continuous pattern" threshold
  expressly excludes ordinary supervisory actions (a single negative
  review, instance of criticism, or demotion) from qualifying alone.

## Honest gap disclosed

Direct WebFetch access to Justia, a Stanford California courts archive,
Leagle, Google Scholar, cite.case.law, and casetext.com was blocked by
this environment's network egress controls; the CourtListener MCP tool
was not blocked and supplied the primary quotations. The "second
independent path" requirement was satisfied via targeted web searches
returning the same language reproduced by independently hosted
secondary sources (a law review case comment and case-summary sites),
not by an independently-fetched primary-source copy of the opinion
itself — disclosed honestly rather than glossed over.

## Method

*Turner v. Anheuser-Busch, Inc.* verified via CourtListener MCP
(opinion cluster 1258971, full html-with-citations text), cross-checked
via targeted web searches returning the identical language from
multiple independently hosted secondary sources. All 10 citation quotes
programmatically confirmed as exact, unbroken substrings of the primary
opinion text (checked specifically to avoid straddling CourtListener's
mid-sentence page-break markers).

## Verification

- Primary opinion retrieved via CourtListener and cross-checked via an
  independent search path; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every citation
  correctly discloses it draws on the same single opinion, not
  independent sources; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field definitions.
  Three genuinely new fields confirmed necessary and added:
  `resignationDate`, `allegedIntolerableConditions`,
  `underlyingClaimDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Constructive Discharge — Information Sheet
  (`constructive_discharge_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Ending employment category. Three new fields:
  `resignationDate`, `allegedIntolerableConditions`,
  `underlyingClaimDescription`.
- Corpus: 2,200 → 2,207 clauses; 282 → 283 documents. Fourth and final
  document of wave 58, closing the wave.
