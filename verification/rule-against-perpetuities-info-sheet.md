# Estate Planning, new document: Rule Against Perpetuities — Information Sheet

## Why this document

Confirmed by grep that "perpetuities" had zero hits anywhere in the
corpus. Fourth and final document of wave 59, closing the wave.

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses, citing Cal. Prob. Code §§ 21200-21202, 21205-21207, 21220, and
21225:

- **`perpetuities_scope_and_common_law`** (§§ 21200, 21201, 21202) — the
  statute's citation, its supersession of the common-law rule, and
  temporal scope.
- **`perpetuities_two_alternative_test`** (§ 21205(a)-(b)) — the core
  two-alternative validity test: traditional 21-years-after-death vs.
  the independent 90-year wait-and-see alternative.
- **`perpetuities_powers_of_appointment`** (§§ 21206, 21207) — **a key
  finding**: the same two-alternative structure applied to powers of
  appointment, correcting the research assignment's own speculation.
- **`perpetuities_judicial_reformation`** (§ 21220) — the mandatory
  "second look" judicial reformation remedy.
- **`perpetuities_exclusions`** (§ 21225(a)-(h)) — the statute's
  exclusions, including a double-negative nondonative-transfer
  structure.

## Genuine corrections and findings

- **A structural correction of the research assignment's own
  hypothesis**: the task brief speculated that § 21206 might be a
  standalone "90-year rule" section. Independent verification confirmed
  this is wrong — § 21206 applies the *same* two-alternative structure
  as § 21205 to general powers of appointment subject to a condition
  precedent, and § 21207 applies it again to nongeneral/general-
  testamentary powers. The 90-year alternative lives as subdivision (b)
  of each of the three sections individually, not in a standalone
  section — the delivered clauses state this correctly rather than
  perpetuating the assignment's own mistaken framing.
- **The two-alternative test is genuinely disjunctive, not merged**:
  an interest is valid if it satisfies EITHER the traditional
  certain-to-vest-within-21-years alternative OR the independent
  90-year wait-and-see alternative — confirmed precisely rather than
  collapsed into a single simplified rule.
- Confirmed § 21220's judicial reformation remedy is mandatory ("a
  court shall reform") once a petition is filed and one of three
  specific triggering conditions is established — not a discretionary
  cy pres power.
- Confirmed § 21225(a)'s double-negative structure: nondonative
  transfers are generally excluded from the rule, but eight specifically
  listed categories are carved back into coverage — preserved rather
  than simplified into a single flat list.
- Honestly disclosed that no standalone statutory definition of
  "nonvested property interest" was found in §§ 21200-21202 — rather
  than inventing one.

## Honest gap disclosed

A third verification method (WebFetch) was attempted as a cross-check
but blocked by the environment's egress proxy; verification rests on
two genuinely independent curl fetches per section rather than three
methods. § 21231's separate rule for measuring the 21-years-after-death
alternative against an individual described only as a living person's
spouse was not covered. § 21225(f)'s cross-referenced federal/state
employee-benefit-plan definitions were not independently verified.

## Method

Fetched Cal. Prob. Code §§ 21200, 21201, 21202, 21205, 21206, 21207,
21220, and 21225 directly from `leginfo.legislature.ca.gov`, each
fetched twice with two genuinely distinct User-Agent strings (desktop
Chrome vs. mobile Safari), confirmed byte-identical after whitespace
normalization. All 8 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- All eight sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source; §§ 21200/21201/21202,
  and §§ 21206/21207 correctly disclosed as independent code sections
  sharing one 1991 enactment (disclosed, not presented as unrelated
  corroboration); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Purpose of This Information
  Sheet").
- Field names (`preparerName`, `trustName`, `settlorName`,
  `trusteeName`, `dateSigned`, `cityState`) independently confirmed to
  match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Rule Against Perpetuities — Information Sheet
  (`rule_against_perpetuities_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Estate Planning category. No new fields.
- Corpus: 2,230 → 2,237 clauses; 286 → 287 documents. Fourth and final
  document of wave 59, closing the wave.
