# Real Estate, new document: Water-Conserving Plumbing Fixture Compliance Disclosure — Information Sheet

## Why this document

Confirmed by grep that "1101.1," "water conservation," and "plumbing
fixture" had zero genuine hits anywhere in the corpus. Read the
existing Smoke Alarm and CO Device Compliance Disclosure document in
full — confirmed this is a genuine, non-duplicative companion: that
document covers Health & Safety Code smoke alarm and CO device
compliance; this document covers a separate Civil Code plumbing-
fixture retrofit and disclosure scheme. Confirmed via direct fetch
that Civil Code §§ 1101.1-1101.9 is the correct article ("Installation
of Water Use Efficiency Improvements," within Transfer of Real
Property), distinct from the differently-named Water Conservation in
Landscaping Act. First of wave 71's four documents (Real Estate +
Estate Planning "2×2" alternation).

## What this document covers

6 clauses: 2 drafting (declaration, transferor's statement/signature)
and 4 authority clauses, citing Cal. Civ. Code §§ 1101.2, 1101.3(c),
(e), (f), 1101.4(a)-(c), 1101.5(a), (e), and 1101.7:

- **`waterfixture_applicability_and_definitions`** (§ 1101.2,
  § 1101.3(c), (e), (f)) — the pre-1994 applicability trigger and the
  statute's own numeric definition of "noncompliant plumbing fixture"
  (1.6 gal/flush toilets, 1 gal/flush urinals, 2.5 gpm showerheads,
  2.2 gpm faucets).
- **`waterfixture_single_family_retrofit_and_disclosure`**
  (§ 1101.4(a)-(c)) — the permit-conditioned retrofit trigger for
  alterations, the January 1, 2017 owner deadline, and the seller's
  written disclosure duty.
- **`waterfixture_multifamily_commercial_retrofit_and_disclosure`**
  (§ 1101.5(a), (e)) — the later January 1, 2019 deadline for
  multifamily/commercial property and its parallel disclosure duty.
- **`waterfixture_exemptions`** (§ 1101.7) — **a key finding**: the
  statute's own exemption list (historical sites, technical
  infeasibility certified by a licensed plumber, permanently
  disconnected water service) is narrower and differently drawn than
  the smoke alarm statute's exemption list — flagged explicitly rather
  than assumed to mirror it.

## Genuine corrections and findings

- **The central finding**: confirmed the statute sets two distinct
  calendar deadlines by property type — January 1, 2017 for
  single-family, January 1, 2019 for multifamily/commercial — rather
  than a single uniform deadline.
- Confirmed the statute's own precise numeric thresholds defining
  "noncompliant plumbing fixture," verified against the actual fetched
  text rather than approximated from general water-conservation
  knowledge.
- Confirmed the permit-conditioned retrofit trigger (tied to building
  alterations/improvements) operates independently from the fixed
  calendar deadline — two separate triggers, not one restated.
- Confirmed the exemption list is genuinely distinct from — not a
  copy of — the smoke alarm statute's exemption list already
  documented in this corpus, avoiding an easy assumption that transfer-
  disclosure exemption lists are interchangeable across statutes.

## Honest gap disclosed

§ 1101.5(d)'s additional retrofit triggers tied to building additions
and alteration-cost thresholds, and § 1101.6's demolition-postponement
rule, were fetched but not built into their own clauses or quoted —
flagged in the multifamily clause's `gap` field to keep the clause
count tight rather than padded.

## Method

Fetched Cal. Civ. Code §§ 1101.1, 1101.2, 1101.3, 1101.4, 1101.5, and
1101.7 from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each section fetched twice with distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
10 citation quotes across the 4 authority clauses programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All six statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 1101.2/
  § 1101.3(c)/(e)/(f) group, § 1101.4(a)-(c), and § 1101.5(a)/(e) each
  correctly disclosed as subsections of one statutory section; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused title "Transferor's Statement and Signatures" matches the
  existing Smoke Alarm document's established closing-clause pattern,
  not a substantive duplicate.
- Field names (`sellerName`, `buyerName`, `propertyAddress`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Water-Conserving Plumbing Fixture Compliance
  Disclosure — Information Sheet
  (`water_conserving_plumbing_fixture_compliance_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Real Estate category. No
  new fields.
- Corpus: 2,547 → 2,553 clauses; 331 → 332 documents. First document
  of wave 71.
