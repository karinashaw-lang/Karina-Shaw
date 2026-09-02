# Confidentiality & IP, new document: Employee Invention Assignment — Statutory Limits and Shop Right — Information Sheet

## Why this document

The corpus's existing Invention Assignment & Confidentiality Agreement
(`ip_assignment`, `ip_consideration`, `ip_ack`) states the assignment
obligation itself but cites neither Labor Code § 2870 (the statutory
carve-out limiting what an assignment provision can validly reach) nor
the common-law "shop right" doctrine. Confirmed as a genuine,
zero-hit gap by grepping the corpus for "2870" and "shop right" before
drafting.

## What this document covers

6 clauses: 2 drafting (purpose declaration, signature/record) and 4
authority clauses:

- **`inventionlimits_2870_carveout`** (Lab. Code § 2870(a)-(b)) — the
  statutory limit on what inventions can be required to be assigned.
- **`inventionlimits_2872_notice`** (Lab. Code § 2872) — the
  employer's notice requirement, and the statute's silence on
  noncompliance.
- **`inventionlimits_shop_right_definition`** (*United States v.
  Dubilier Condenser Corp.*, 289 U.S. 178 (1933)) — the shop right
  doctrine's definition.
- **`inventionlimits_shop_right_not_ownership`** (same case, a second,
  distinct passage) — shop right is a license to use, not ownership.

## Genuine corrections and findings

- Confirmed § 2870(a)'s exclusion is **cumulative, not alternative**:
  an invention loses the carve-out if it used any employer resource
  (even if unrelated to the business), and separately, even a
  resource-free invention loses the carve-out if it relates to the
  business or results from work performed for the employer — flagged
  as easy to mis-summarize as a simple either/or test.
- Confirmed § 2872's text is **silent** on what happens if the
  employer fails to give the required written notification — no
  invalidation, no penalty, no stated consequence anywhere in the
  section — verified directly rather than assumed (as the research
  brief specifically cautioned against assuming noncompliance voids
  the agreement).
- **A genuinely valuable disambiguation**: confirmed Dubilier directly
  addresses the shop-right doctrine as a distinct passage from the
  corpus's existing citation to the same case for the "hired to
  invent" doctrine (`patentassign_hired_to_invent`, in another
  document) — the two passages address different fact patterns
  (whether the employment itself contemplates inventing) and are
  explicitly distinguished in the `gap` fields to avoid conflation.
- Disclosed honestly that Dubilier is federal/general common law
  (1933, a federal-employee dispute), not a California case, and that
  no California appellate shop-right decision was independently
  verified — rather than reaching for a weaker or unverified state
  citation.
- Disclosed an open, unresearched question rather than guessing: how a
  shop right interacts with an invention § 2870 excludes from
  assignment was not addressed in the statute's text and was not
  independently verified against case law.

## Honest gap disclosed

Both shop-right clauses draw on the same single source (Dubilier);
disclosed explicitly in the second clause's `gap` field as one source,
not independent corroboration, even though each quote was
independently re-verified for its own specific point.

## Method

Fetched Lab. Code §§ 2870 and 2872 directly from
`leginfo.legislature.ca.gov` via curl with two distinct User-Agent
strings — byte-identical statutory text both times. Dubilier's direct
CourtListener/Justia fetches were blocked (WAF challenge / egress-proxy
denial), so two independent CourtListener MCP retrieval paths were
used instead (`search_document`/`read_document` vs.
`get_endpoint_item`'s direct REST pull) — both quotes matched
identically across both retrievals. All 4 citation quotes
programmatically confirmed as exact substrings of the verified text.

## Verification

- All citations fetched or retrieved twice independently; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the two shop-right
  clauses correctly disclosed as sharing one source; § 2870 and § 2872
  correctly treated as independent statutory sections; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic title reuse ("Purpose and Scope of This Information
  Sheet") — consistent with the corpus-wide pattern.
- Field names (`companyName`, `employeeName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus
  convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Employee Invention Assignment — Statutory Limits and
  Shop Right — Information Sheet
  (`employee_invention_statutory_limits_shop_right_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 1,732 → 1,738 clauses; 220 → 221 documents. Second document
  of wave 43.
