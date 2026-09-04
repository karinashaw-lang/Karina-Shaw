# Estate Planning, new document: Ademption and Abatement of Testamentary Gifts — Information Sheet

## Why this document

Confirmed by grep that "ademption" had zero hits, and every
"abatement" hit was unrelated (wage abatement, hazardous-materials
abatement). Read the existing Last Will and Testament and Grounds to
Contest a Will/Trust documents in full — confirmed neither addresses
what happens to a specific gift when the gifted property is gone, or
how gifts are reduced when the estate runs short. Fourth and last
document of wave 71.

## What this document covers

8 clauses: 2 drafting (declaration, certification/signature) and 6
authority clauses, citing Cal. Prob. Code §§ 21133, 21134(a), (c),
21135(a), 21139, 21400, 21401, 21402(a)-(b), 21403(a)-(b), and 21404:

- **`ademptionabatement_extinction_core_rule`** (§ 21133) — ademption
  by extinction's core rule and the four statutory substitute-right
  categories (unpaid sale proceeds, eminent domain awards, insurance
  proceeds, foreclosure-acquired property).
- **`ademptionabatement_incapacity_exception`** (§ 21134(a), (c)) —
  the protective-proceeding exception when a conservator, DPOA agent,
  or trustee sells or encumbers specifically-given property for an
  incapacitated person, including the one-year post-termination
  carve-out for conservatorships.
- **`ademptionabatement_satisfaction`** (§ 21135(a), § 21139) —
  ademption by satisfaction's four-condition test, confirmed as a
  genuinely separate rule from extinction, plus the non-exhaustive
  disclaimer.
- **`ademptionabatement_order_of_reduction`** (§ 21402(a)-(b)) —
  **the central finding**: the precise six-class statutory abatement
  order, verified exactly rather than reconstructed from general
  knowledge, plus the "relative" definition tied to intestate
  succession.
- **`ademptionabatement_scope_and_override`** (§§ 21400-21401) — a
  testator's power to override the statutory order, and the order's
  broad default scope with its omitted-spouse/child and tax-proration
  carve-outs.
- **`ademptionabatement_prorata_and_exoneration`** (§ 21403(a)-(b),
  § 21404) — pro-rata reduction within each class, the demonstrative-
  gift exception, and the exoneration rule.

## Genuine corrections and findings

- **The central finding**: verified the exact six-step statutory
  abatement order precisely against the fetched text — exactly the
  point flagged as easy to get subtly wrong, confirmed rather than
  reconstructed from general testamentary-law knowledge.
- Confirmed ademption by extinction and ademption by satisfaction are
  governed by separate statutory rules (§ 21133 vs. § 21135), not one
  doctrine restated — satisfaction requires one of four specific
  conditions, none of which is presumed from the mere fact of a
  lifetime gift.
- Confirmed §§ 21136-21138 and § 21402.5 don't exist as assigned
  section numbers — verified via the chapter's own header range and
  § 21139's own exhaustive list of "Sections 21133 to 21135," rather
  than guessing at gaps in the numbering or fabricating content for
  them.
- Confirmed the incapacity exception's asymmetric presumption: acts of
  a DPOA agent are presumed to be for an incapacitated principal with
  no adjudication required, but no comparable presumption applies to a
  trustee's acts.

## Honest gap disclosed

§ 21134(b) (a parallel rule for eminent domain awards and insurance
proceeds paid to a conservator, agent, or trustee) and § 21135(b)-(d)
(valuation and predecease rules for partial satisfaction) were fetched
but not quoted or built into their own clauses. § 21400-21401's
tax-proration and omitted-spouse/child carve-outs are named but not
independently detailed.

## Method

Fetched Cal. Prob. Code §§ 21133-21140 and §§ 21400-21406 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each citable section fetched twice with distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. Confirmed
§§ 21136-21138 and § 21402.5 return empty/no-content pages on both
fetches — verified as non-existent section numbers via the chapter's
own header range rather than treated as fetch failures. All 12
citation quotes across the 6 authority clauses programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All citable statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 21134(a)/(c)
  pair, § 21402(a)/(b) pair, and § 21403(a)/(b) pair each correctly
  disclosed as one statutory section; §§ 21135/21139, §§ 21400/21401,
  and § 21403/§ 21404 correctly disclosed as independent, separately-
  numbered sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused generic titles "Purpose of This Information Sheet" and
  "Certification of Understanding" match this corpus's established
  cross-document pattern, not substantive duplicates.
- Field names (`decedentName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Ademption and Abatement of Testamentary Gifts —
  Information Sheet (`ademption_abatement_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Estate Planning category. No new
  fields.
- Corpus: 2,567 → 2,575 clauses; 334 → 335 documents. Fourth and last
  document of wave 71.
- **Wave 71 complete**: 2,547 → 2,575 clauses (28 new); 331 → 335
  documents (4 new), across Real Estate (Water-Conserving Plumbing
  Fixture Compliance, California Recording Act) and Estate Planning
  (IAEA Notice of Proposed Action, Ademption and Abatement) — the
  "2×2" alternation pattern.
