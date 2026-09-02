# Family Law, new document: Nullity of Marriage (Annulment) — Petition Information Sheet

## Why this document

The existing Petition for Dissolution of Marriage document has one
clause (`dissolution_scope_three_proceedings`) naming nullity as a
distinct proceeding from dissolution/legal separation, but does not
cover its grounds or procedure. This document builds on that clause
and covers the nullity proceeding in depth.

## What this document covers

9 clauses: 2 drafting (declaration, signature/verification) and 7
authority clauses:

- **`nullity_void_marriage_grounds`** (Fam. Code §§ 2200, 2201) —
  incestuous and bigamous/polygamous marriages, void from the outset.
- **`nullity_void_voidable_distinction`** (Fam. Code § 2201(a)-(b);
  § 2210(b)) — the void-versus-voidable distinction and the bigamy
  exception that crosses between them.
- **`nullity_voidable_marriage_grounds`** (Fam. Code § 2210(a)-(f)) —
  the six statutory grounds for a voidable marriage.
- **`nullity_standing_and_time_limits`** (Fam. Code § 2211) — who may
  sue for nullity of a voidable marriage, and the applicable time
  limits.
- **`nullity_putative_spouse_doctrine`** (Fam. Code §§ 2251, 2252) —
  the putative spouse doctrine and quasi-marital property.
- **`nullity_property_support_custody_consequences`** (Fam. Code
  §§ 2253, 2254) — where nullity's consequences differ from, and
  match, an ordinary dissolution.
- **`nullity_effect_of_judgment_and_fees`** (Fam. Code §§ 2212, 2255)
  — the legal effect of a nullity judgment and a fault-based
  attorney's-fees limit unique to nullity proceedings.

## Genuine corrections and findings

- Corrected a misattribution: standing and time-limit rules live in
  § 2211, not § 2212. Section 2212 actually governs the effect of a
  nullity judgment — it restores the parties to unmarried status and
  is conclusive only as to the parties and their privies — a distinct,
  useful provision added as its own clause.
- Confirmed the six voidable grounds (age, prior marriage, unsound
  mind, fraud, force, physical incapacity) verbatim against
  § 2210(a)-(f).
- A genuine, significant finding on the void/voidable boundary: the
  § 2201/§ 2210(b) bigamy interaction is real and non-obvious.
  Section 2201(a)'s own exception (a 5-year absence, or a spouse
  believed dead) pulls a remarriage out of the void category and into
  the voidable category via § 2201(b), which expressly says that
  marriage "is valid until its nullity is adjudged" under § 2210(b).
- A genuine, significant finding on consequences: nullity's
  consequences don't track dissolution uniformly. Support and property
  division are conditioned on putative-spouse status (§§ 2251, 2254)
  — a real divergence from dissolution — while custody is not
  conditioned at all, and uses the same Division 8 rules as
  dissolution (§ 2253).
- Confirmed § 2211 has two versions in force under a single 2025
  chapter (AB 1134): a currently-operative version (through December
  31, 2026, requiring the action to be "commenced" within the stated
  period) and a version becoming operative January 1, 2027, that adds
  a good-cause exception for late force-ground filings. The
  currently-operative version was quoted, and the pending 2027 change
  disclosed in the `gap` field.
- A genuine additional finding not in the original research brief:
  § 2255 imposes a fault-based limit on attorney's fees unique to
  nullity proceedings — a party can recover fees in a voidable-
  marriage case only if found innocent of fraud/wrongdoing and free
  from knowledge of the impediment — with no counterpart in
  dissolution's fee statute.

## Honest gaps disclosed

- No CourtListener case-law search was attempted — this topic is
  purely statutory, so the rate limit wasn't risked for it.
- Family Code §§ 302/303 (the underage-marriage exception referenced
  in § 2210(a)) and Division 7/Division 8 (the property/custody rules
  cross-referenced by §§ 2251/2253) were not independently
  re-verified — each gap field discloses this.

## Method

Fetched Cal. Fam. Code §§ 2200, 2201, 2210, 2211 (both currently-
operative and pending 2027 versions), 2212, 2251, 2252, 2253, 2254,
and 2255 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical or textually identical apart from session-
token noise. All 14 citation quotes programmatically confirmed as
exact substrings of the extracted primary-source text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — two clauses (voidable
  grounds; standing/limits and putative spouse) correctly disclose
  same-section citations as "treated as one source, not independent";
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`party1Name`, `party2Name`, `marriageDate`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed
  to match the existing Petition for Dissolution of Marriage document
  and other Family Law documents' fields exactly. New fields:
  `nullityGround`, `nullityFactualBasis`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Nullity of Marriage (Annulment) — Petition Information
  Sheet (`nullity_of_marriage_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the Family Law category. New fields: `nullityGround`,
  `nullityFactualBasis`.
- Corpus: 1,297 → 1,306 clauses; 163 → 164 documents.
