# Confidentiality & IP, new document: Sale-of-Business and Dissolution Noncompete Exceptions — Information Sheet

## Why this document

Third processed item of wave 91 (Confidentiality & IP slot). Read the
existing "Non-Compete Agreement" document's clauses in full — confirmed
it covers only the general § 16600 employment-noncompete voiding rule and
the § 16600.1 notice requirement. Grepped the corpus for "16601"/"16602"
and found only a false-positive cluster: several partnership clauses cite
Corp. Code §§ 16601/16602 (the Uniform Partnership Act's dissociation-
trigger and wrongful-dissociation provisions) — an entirely different code
and subject matter, not this document's Bus. & Prof. Code sections.
Confirmed no hits for "16602.5" or "goodwill" in the business-sale sense.
Confirmed a real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Bus. & Prof. Code §§ 16600(a), 16601 (its main clause and four
definitional paragraphs), 16602(a)-(b), and 16602.5:

- **`salenoncompete_general_ban_context`** (§ 16600(a)) — the general
  voiding rule, framing these as exceptions to it, not freestanding
  authority.
- **`salenoncompete_sale_of_business`** (§ 16601, main clause) — the three
  sale-of-goodwill/ownership-interest/asset-sale scenarios, and the
  restriction's validity conditioned on the buyer's continued operation.
- **`salenoncompete_sale_definitions`** (§ 16601's four definitional
  paragraphs) — "business entity," "owner of a business entity,"
  "ownership interest," and "subsidiary."
- **`salenoncompete_partnership_dissolution`** (§ 16602(a)-(b)) — the
  partner noncompete exception tied to dissolution or dissociation.
- **`salenoncompete_llc_dissolution`** (§ 16602.5) — the parallel LLC
  member exception tied to dissolution or termination of interest.

## Genuine corrections and findings

- **A genuine structural finding**: § 16601 has no top-level lettered
  subdivisions — it is one long sentence with inline "(a)/(b)/(c)" markers
  naming three asset-sale sub-scenarios, followed by four separately
  paragraphed definitions. Disclosed explicitly rather than assuming clean
  subsection lettering.
- **A genuine finding on § 16602.5's structure**: unlike § 16602(b), which
  separately enumerates "dissociation" and "dissolution" as two distinct
  listed circumstances, § 16602.5 uses a single compound trigger phrase
  ("a dissolution of, or the termination of ... interest in") with no
  parallel enumerated list — disclosed as a structural asymmetry, not
  smoothed over.
- **A genuine finding flagging an apparent drafting inconsistency in the
  statute's own text**, independently confirmed during integration
  review: § 16601's "ownership interest" definition defines the
  corporate-context term as "a capital stockholder" (a person) rather than
  an interest — inconsistent with the parallel "partnership interest"/
  "membership interest" phrasing used for the other two entity types in
  the same sentence. Quoted verbatim as a genuine statutory artifact, not
  corrected or smoothed over.
- Correctly declined to restate the Uniform Partnership Act's or RULLCA's
  own definitions of "dissolution" and "dissociation" — disclosed as found
  elsewhere, not restated, to avoid duplicating the corpus's existing
  partnership/LLC clauses.

## Honest gap(s) disclosed

What happens if the buyer stops operating the business after a
sale-of-goodwill noncompete takes effect is not resolved by the statute's
text and not addressed here. "Specified geographic area" is not further
defined by § 16601. The Uniform Partnership Act's and RULLCA's own
definitions of dissolution/dissociation are named but not restated. This
document does not state that any specific proposed noncompete restriction
actually satisfies a given exception's conditions.

## Method

Fetched Bus. & Prof. Code §§ 16600, 16601, 16602, and 16602.5 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical. All 9
citation quotes across the 5 authority clauses programmatically confirmed
as exact contiguous substrings ending at sentence/clause boundaries (no
ellipsis-joined or mid-word-truncated quotes). Independently re-verified
during integration review via a fifty-fourth fetch (a distinct curl
User-Agent string, "Groundtruth-54thVerify-SaleNoncompete/1.0") of all
four sections — all 9 quotes confirmed clean on direct substring match,
including independent re-confirmation of the "capital stockholder"
drafting-inconsistency finding.

## Verification

- All four statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fifty-fourth independent
  fetch during integration review; all 9 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions/paragraphs of the same
  statutory section versus genuinely independent sections (§ 16600 vs.
  § 16601 vs. § 16602 vs. § 16602.5); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Scope," "Acknowledgment") duplicate
  existing corpus titles — consistent with this project's established
  pattern of generic, reused boilerplate drafting-clause titles; clause
  IDs remain unique.
- Checked every citation's `case` field for emptiness — all 9 populated
  with proper citation identifier strings.
- No new fields required — all three fields (`businessName`, `sellerName`,
  `buyerName`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Sale-of-Business and Dissolution Noncompete Exceptions —
  Information Sheet
  (`sale_of_business_dissolution_noncompete_exceptions_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Confidentiality & IP category.
  No new fields.
- Corpus: 3,095 → 3,102 clauses; 408 → 409 documents. Third processed item
  of wave 91 (second new document). Confidentiality & IP category slot
  complete (2 of 2 documents shipped).
