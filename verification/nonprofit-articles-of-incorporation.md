# Business Formation, eighth new document: Nonprofit Public Benefit Corporation Articles of Incorporation

## Why this document

The existing Articles of Incorporation document covers an ordinary
for-profit corporation under the General Corporation Law. This
document covers formation under California's entirely separate
Nonprofit Corporation Law — different required content, different
naming analysis, and a distinct statutory prohibition on
distributions that the for-profit statute has no counterpart for.

## What this document covers

8 clauses: 3 drafting (purpose declaration, agent designation,
incorporator signature) and 5 authority clauses:

- **`nonprofit_required_content`** (Corp. Code § 5130(a)-(e)) — the
  actual five-item required-content list, with no authorized-shares
  item since a nonprofit has no stock.
- **`nonprofit_purpose_state_vs_federal`** (Corp. Code § 5130(b)(1);
  26 U.S.C. § 501(c)(3); Treas. Reg. § 1.501(c)(3)-1(b)(1)(i)) — a
  load-bearing correction: the specific "organized and operated
  exclusively for" 501(c)(3) language is not a California statutory
  requirement at all — it's purely federal, layered on top of the
  state's own, different fixed purpose sentence.
- **`nonprofit_dissolution_state_vs_federal`** (Corp. Code §§ 5132(a)
  (2)(B), 6716(a)-(b); Treas. Reg. § 1.501(c)(3)-1(b)(4)) — that the
  familiar "assets to another exempt org" dissolution clause is not a
  California filing requirement at all; it's a separate federal
  organizational-test condition. California's own dissolution
  mechanics run through a superior court decree with the Attorney
  General as a party.
- **`nonprofit_no_distributions`** (Corp. Code §§ 5410, 5142(a)) — the
  freestanding statutory prohibition on distributions and who has
  standing to enforce it.
- **`nonprofit_name_requirements`** (Corp. Code § 5122(a)-(b)) — that
  nonprofit naming rules substantively mirror the for-profit rules,
  correcting an assumed designator-word difference that never actually
  applied to either entity type outside the close-corporation
  election.

## Genuine corrections caught during research

- The task brief assumed the 501(c)(3) "organized and operated
  exclusively for" language is a state requirement. Direct review of
  § 5130(b)(1) shows it uses no such language at all — that specific
  phrasing comes entirely from federal law (26 U.S.C. § 501(c)(3) and
  its Treasury organizational-test regulation).
- The task brief assumed § 5134 imposes a dissolution-clause
  requirement. Direct review shows § 5134 is actually about
  incorporator powers before directors are named — unrelated to
  dissolution. The familiar "assets to another exempt organization"
  language is a federal organizational-test requirement, not part of
  California's own five-item required-content list at all.
- The task brief expected a nonprofit-specific naming difference
  (e.g., no designator-word requirement). Direct review shows the
  naming rules are substantively identical to the for-profit statute
  — the designator-word requirement only ever applied to a for-profit
  close corporation, an election unavailable to any nonprofit.

## Method

Fetched Corp. Code §§ 5122, 5130, 5132, 5134, 5142, 5410, 6716 from
`leginfo.legislature.ca.gov`, 26 U.S.C. § 501(c)(3) from
`uscode.house.gov`, and Treas. Reg. § 1.501(c)(3)-1(b) from
`ecfr.gov`, each verified against a second, independent fetch with a
distinct User-Agent — confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `principalOfficeAddress`, `agentName`,
  `agentAddress`, `incorporatorName`) confirmed to match the existing
  Articles of Incorporation document exactly; no `authorizedShares`
  field, since nonprofits issue no stock.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Nonprofit Public Benefit Corporation Articles of
  Incorporation (`nonprofit_articles_of_incorporation`), 8 clauses (5
  authority + 3 drafting), in the Business Formation category. New
  field: `nonprofitPurpose`.
- Corpus: 720 → 728 clauses; 96 → 97 documents.
