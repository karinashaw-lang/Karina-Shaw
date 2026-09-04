# Estate Planning, new document: California Intestate Succession Distribution Shares — Information Sheet

## Why this document

Second document of wave 83. Grepped the corpus for "intestate,"
"6401," and "6402" and read the existing `commprop_no_administration_
rule`, `probate_intestate_administrator_priority`, `omitted_spouse_
share`/`omitted_spouse_exceptions`, and `slayerstatute_predecease_
effect`/`slayerstatute_joint_tenancy_severance` clauses in full —
confirmed roughly 15 existing clauses cross-reference the CONCEPT of
intestate succession, but none quotes or explains § 6401(c)'s
separate-property fractions or any part of § 6402's descent order.
Confirmed `probate_intestate_administrator_priority` covers a
different question entirely (§§ 8460-8461, who gets APPOINTED
administrator, not who inherits). Confirmed non-duplicative — a real,
surprisingly unfilled gap for such a foundational topic.

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses, citing Cal. Prob. Code §§ 6400, 6401(c), and 6402
(introductory clause and subdivisions (a)-(g)):

- **`intestateshares_general_framework`** (§ 6400) — the basic trigger:
  any part of an estate not effectively disposed of by a valid will
  passes under the intestate succession statutes.
- **`intestateshares_spouse_separate_property_shares`** (§ 6401(c)) —
  **the central finding**: the surviving spouse's/domestic partner's
  separate-property share is a sliding scale (entire estate, one-half,
  or one-third) depending on which relatives survive — genuinely
  distinct from the community/quasi-community property share (already
  independently verified elsewhere in the corpus at `commprop_no_
  administration_rule`, cross-referenced rather than restated).
- **`intestateshares_no_spouse_or_remainder_to_descendants_parents`**
  (§ 6402 intro, (a)-(b)) — the first descent tier: issue (children
  and more remote descendants), then parents if no issue survives.
- **`intestateshares_siblings_grandparents_order`** (§ 6402(c)-(d)) —
  the next tiers: siblings'/their issue, then grandparents and their
  issue.
- **`intestateshares_next_of_kin_and_predeceased_spouse_kin`**
  (§ 6402(e)-(g)) — the final tiers: issue of a predeceased spouse,
  next of kin generally (with a nearest-common-ancestor tiebreaker),
  then in-laws of a predeceased spouse.

## Genuine corrections and findings

- **The central finding**: confirmed the exact sliding-scale fractions
  (entire estate / one-half / one-third) for the surviving spouse's
  separate-property share word-for-word from § 6401(c) — a genuinely
  distinct rule from the community-property share, which the document
  explicitly distinguishes rather than conflating the two.
- Confirmed § 6402's full seven-tier descent order precisely,
  including the less commonly known later tiers (next of kin generally,
  with the nearest-common-ancestor tiebreaker for collateral relatives;
  in-laws of a predeceased spouse) — verified rather than assumed to
  stop at the more commonly known descendants/parents/siblings tiers.
- Correctly declined to quote § 6401(a)-(b) (the community/quasi-
  community property share) a second time, since it is already
  independently verified elsewhere in the corpus — cross-referenced
  instead, avoiding duplicative re-verification.
- Honestly disclosed that §§ 6401/6402's own text uses "surviving
  spouse" without separately restating "registered domestic partner,"
  and that the extension to registered domestic partners rests on
  other Probate Code provisions (§ 37 among them) not independently
  re-verified by this document.

## Honest gap(s) disclosed

Probate Code § 6402.5 (the special rule for property attributable to a
predeceased spouse or domestic partner) and § 240 ("by representation"
division mechanics among descendants of unequal degree) are named by
cross-reference but not independently fetched or verified. Escheat to
the state when no statutory heir survives is noted as existing under
separate statutes not covered here. The exact mechanics of
"degree of kinship" counting beyond what § 6402(f)-(g) states on its
face are not elaborated.

## Method

Fetched Cal. Prob. Code §§ 6400, 6401, and 6402 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings (rotated across Chrome/Windows,
Safari/macOS, and iPhone Safari; one transient connection reset on
§ 6402, resolved on retry), confirmed byte-identical after whitespace
normalization. All 5 citation quotes across the 5 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes — the multi-subdivision quotes are genuinely
contiguous statutory text, not stitched fragments). Independently
re-verified during integration review via a twenty-first fetch (a
distinct curl User-Agent string, "Groundtruth-21stVerify-
Intestate/1.0") of all three sections — all 5 quotes confirmed clean.

## Verification

- All three statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  twenty-first independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered. Confirmed no § 6402
  subdivision is quoted more than once across the document's clauses.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Purpose of This Information Sheet") matches
  a title used elsewhere in the corpus — confirmed as the established
  boilerplate-title reuse pattern, not a genuine collision.
- No new fields required — all four fields (`preparerName`,
  `decedentName`, `dateSigned`, `cityState`) reused from the existing
  corpus (26, 18, 156, and 135 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Intestate Succession Distribution Shares
  (Prob. Code §§ 6400-6402) — Information Sheet
  (`intestate_succession_distribution_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Estate Planning category. No new
  fields.
- Corpus: 2,872 → 2,879 clauses; 378 → 379 documents. Second addition
  of wave 83.
