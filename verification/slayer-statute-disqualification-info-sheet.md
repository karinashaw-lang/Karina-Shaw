# Estate Planning, new document: Slayer Statute — Disqualification from Inheriting Information Sheet

## Why this document

The corpus's only existing slayer-statute coverage (`lifeinsbene_slayer_statute`)
is narrowly scoped to the life-insurance-beneficiary context inside the
Life Insurance Beneficiary Designation document. The general Probate
Code doctrine — as it applies to wills, trusts, intestate succession,
joint tenancy, and other property — had zero other coverage. Confirmed
as a genuine gap and deliberately built to cross-reference rather than
duplicate the existing narrow clause.

## What this document covers

7 clauses: 2 drafting (purpose declaration, certification/signature)
and 5 authority clauses:

- **`slayerstatute_core_disqualification`** (Prob. Code § 250(a)) — the
  five categories of property, interest, or benefit a killer is
  disqualified from.
- **`slayerstatute_predecease_effect`** (Prob. Code § 250(b)) — the
  statutory mechanism redirecting disqualified property as if the
  killer predeceased the decedent.
- **`slayerstatute_joint_tenancy_severance`** (Prob. Code § 251) — the
  distinct joint-tenancy severance rule.
- **`slayerstatute_killing_established`** (Prob. Code § 254(a)-(b)) —
  how a felonious and intentional killing is established.
- **`slayerstatute_catchall_other_property`** (Prob. Code § 253) — the
  residual rule for other acquisitions.

## Genuine corrections and findings

- Confirmed § 250(a) covers five distinct categories, not just
  wills/intestate succession — including a residual "Division 6 Part 3
  family-protection" category (temporary possession of the family
  dwelling and exempt property) easy to overlook.
- **A genuinely non-obvious finding, confirmed directly against the
  statute**: no criminal conviction is required for disqualification —
  a court may find a killing felonious and intentional by a
  preponderance of the evidence in the absence of a conviction, with
  the burden on the party seeking disqualification.
- **A precise mechanism distinction**: joint tenancy treatment under
  § 251 is a severance, not an outright forfeiture — the decedent's
  share passes as their own property while the killer loses
  survivorship rights, a materially different mechanism from § 250's
  "treated as predeceased" rule used everywhere else in the statute.
- Confirmed § 253 exists as an explicit statutory catch-all beyond
  §§ 250-252, confirming the doctrine isn't limited to its enumerated
  categories.
- Deliberately did not re-quote § 252 (the life-insurance-specific
  provision already covered by the existing corpus clause) —
  cross-referenced instead of duplicated, and disclosed as such.

## Honest gap disclosed

§ 250(b)'s cross-references to Prob. Code §§ 21110 (anti-lapse) and
673 (power-of-appointment revocation) are stated only as "does not
apply in this context" per the statute's own text — the document does
not independently research or describe what those two sections
otherwise provide.

## Method

Fetched Prob. Code §§ 250, 251, 253, and 254 directly from
`leginfo.legislature.ca.gov` via curl with two distinct User-Agent
strings each — byte-identical text both times. All 5 citation quotes
programmatically confirmed as exact substrings of the fetched,
tag-stripped text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same section
  (§ 250(a)/(b)) versus genuinely independent sections (§§ 251, 253,
  254); § 254's deliberate re-verification here (despite being the
  same section already quoted in the life-insurance clause) is
  disclosed as applying corpus-wide, not duplicative; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic title reuses ("Purpose of This Information Sheet";
  "Certification and Signature") — consistent with the corpus-wide
  pattern.
- Field names (`preparerName`, `decedentName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus
  convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Slayer Statute — Disqualification from Inheriting
  Information Sheet (`slayer_statute_disqualification_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 1,753 → 1,760 clauses; 223 → 224 documents. First document
  of wave 44.
