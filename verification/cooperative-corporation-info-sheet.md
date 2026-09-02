# Business Formation, new document: Cooperative Corporation — Formation Information Sheet

## Why this document

The corpus already covers for-profit corporations, LLCs, nonprofit
public/mutual benefit/religious corporations, and benefit
corporations. Confirmed as a genuine gap: grep for "cooperative
corporation" across the corpus returned zero hits.

## What this document covers

7 clauses: 2 drafting (purpose/membership declaration, incorporator
signature) and 5 authority clauses:

- **`coop_definition_and_purpose`** (Corp. Code §§ 12200, 12201) —
  the patronage-based purpose requirement.
- **`coop_one_member_one_vote`** (§§ 12480, 12314) — the default rule
  and its narrow exception.
- **`coop_patronage_distribution`** (§§ 12201, 12243) — the statutory
  basis and definition of "patronage."
- **`coop_capital_return_limit`** (§§ 12451, 12235) — the statutory
  cap on distributions for capital contributions.
- **`coop_required_articles_content`** (§§ 12310, 12311) — required
  articles content.

## Genuine corrections and findings

- Confirmed the statutory range: Corp. Code Part 2 of Division 3 of
  Title 1, §§ 12200-12704, matching the original framing.
- Confirmed § 12200/§ 12201's purpose requirement: cooperatives are
  organized "for the mutual benefit of its members as patrons," and
  are "democratically controlled... not organized to make a profit
  for themselves."
- Confirmed the one-member-one-vote default under § 12480, with a
  narrow carve-out only for "central organizations" (co-ops of
  co-ops) under § 12314, which still cannot reduce any member below
  one vote.
- Confirmed § 12451's hard statutory cap on distributions for capital
  contributions (15%/year), and that § 12235's definition of
  "distribution" excludes patronage distributions specifically —
  confirming the cap targets capital return only.
- **A correction to the original framing**: the statute's scope
  (§ 12200) covers consumer cooperatives, worker cooperatives, and
  cooperatives formed for recycling/hazardous-waste treatment — it
  does not list agricultural cooperatives. Confirmed by § 12311(b)'s
  naming rule, which explicitly cross-references a separate statute
  for agricultural co-ops (Food and Agricultural Code § 54001 et
  seq.), flagged in the relevant clauses' `gap` fields rather than
  silently including agricultural cooperatives under this Corp. Code
  part.

## Honest gap disclosed

No explicit statutory cap on the volume of business a California
cooperative may transact with nonmembers was found in the sections
reviewed (unlike the explicit 15% capital-return cap). Disclosed
directly in the `coop_capital_return_limit` clause's `gap` field
rather than fabricated; no separate nonmember-business-volume clause
was written.

## Method

Fetched Corp. Code §§ 12200, 12201, 12235, 12243, 12310, 12311, 12314,
12451, and 12480 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text. Each authority clause cites two independently
enacted sections, never subsections of one section presented as
independent.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `principalOfficeAddress`, `agentName`,
  `agentAddress`, `incorporatorName`, `additionalPurposeDescription`)
  independently confirmed to match the existing Nonprofit and Benefit
  Corporation documents' fields exactly — no new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Cooperative Corporation — Formation Information Sheet
  (`cooperative_corporation_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Business Formation category. No new fields.
- Corpus: 1,596 → 1,603 clauses; 201 → 202 documents.
