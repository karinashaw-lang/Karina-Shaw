# Family Law, new document: Petition for Dissolution of Marriage (Divorce) — Information Sheet

## Why this document

The existing Marital Settlement Agreement document covers the
settlement terms once parties agree on how to divide things — it does
not cover the actual court dissolution process itself. Until this
document, the corpus had no document covering the filing/residency
requirements, the legal grounds, or the mandatory waiting period —
the foundational court process that a settlement agreement presupposes.
Follows the same informational, non-dispositive pattern as the
Guardianship Petition and Grandparent Visitation documents: explicit
throughout that it does not itself dissolve a marriage.

## What this document covers

8 clauses: 3 drafting (declaration, petition-contents reference,
signature block) and 5 authority clauses:

- **`dissolution_scope_three_proceedings`** (Fam. Code § 2330(a);
  § 2210) — dissolution, legal separation, and nullity are three
  distinct proceedings governed by different statutory parts.
- **`dissolution_grounds_no_fault`** (Fam. Code § 2310(a)-(b); § 2311;
  § 2312) — the two exclusive, generally-pleaded no-fault grounds.
- **`dissolution_residency_requirement`** (Fam. Code § 2320(a),
  (b)(1)-(2)) — the 6-month state/3-month county residency requirement
  and the same-sex-marriage exception.
- **`dissolution_waiting_period`** (Fam. Code § 2339(a)-(b)) — the
  mandatory 6-month wait from service or appearance before a judgment
  becomes final.
- **`dissolution_property_division_default`** (Fam. Code § 2550) — the
  community-property equal-division default absent a settlement
  agreement, cross-referenced to (not duplicating) the existing
  Marital Settlement Agreement document's fuller treatment.

## Genuine corrections / confirmations from research

- All of the task brief's core assumptions were verified as accurate
  rather than needing correction: the exact residency requirement, the
  same-sex-marriage exception, the two no-fault grounds with no fault
  ground anywhere in the statute, the six-month waiting period's exact
  trigger event, the three-distinct-proceedings structure, and the
  § 2550 equal-division default.
- One nuance flagged rather than overclaimed: the "no fault ground
  exists" statement is drawn from the absence of any such ground in
  § 2310's text, not from a separate statute affirmatively abolishing
  fault grounds — disclosed as an inference from statutory silence,
  not an affirmative holding.

## Honest gaps disclosed

- § 2339(a)'s cross-referenced exceptions (§§ 2340-2344) were not
  independently fetched or verified.
- The nullity/void-marriage category (§§ 2200-2201, incest/bigamy) was
  not independently double-verified (one fetch failed on a proxy
  hiccup), so it is mentioned only in passing in
  `dissolution_scope_three_proceedings`'s gap field, not cited as
  authority.

## Method

Fetched Fam. Code §§ 2320, 2310, 2311, 2312, 2339, 2330, 2210, and
2550 directly from `leginfo.legislature.ca.gov`, each verified against
a second, independent fetch with a distinct User-Agent — the agent
extracted only the statutory-text block from both copies and diffed
them, confirming byte-identical text (the JSF session-token noise in
the raw HTML wasn't hiding any substantive difference). Every quote
was then programmatically confirmed as an exact substring of the
verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed one real leak during its own drafting process (a
  `{{party1Name}}/{{party2Name}}/{{countyOfFiling}}` leak in a `gap`
  field, rephrased generically) and a duplicate-title collision
  (`dissolution_declaration` originally collided with the existing
  `msa_declaration` clause's title) before delivery; independently
  re-confirmed clean on integration.
- Checked source-independence disclosure logic across all 5 authority
  clauses — the one same-section clause
  (`dissolution_residency_requirement`, citing § 2320(a) and
  § 2320(b)(1)-(2)) carries an explicit disclosure sentence — correct
  as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none, after the agent's own pre-delivery fix).
- Field names (`party1Name`, `party2Name`, `marriageDate`,
  `separationDate`) confirmed to match the existing Marital Settlement
  Agreement document's `fields` array exactly; `dateSigned`/`cityState`
  confirmed to match the Guardianship Petition and Grandparent
  Visitation documents' convention exactly. New field:
  `countyOfFiling`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Petition for Dissolution of Marriage (Divorce) —
  Information Sheet (`dissolution_petition_info_sheet`), 8 clauses (5
  authority + 3 drafting), in the Family Law category. New field:
  `countyOfFiling`.
- Corpus: 773 → 781 clauses; 103 → 104 documents.
