# Family Law, sixth document: Domestic Partnership Declaration

## Why this document

Continuing the "go as deep as humanely possible" build-out. A Domestic
Partnership Declaration documents California's statutory domestic
partnership registration — a distinct legal status from marriage, with
its own eligibility rules, filing mechanism, and effect, sourced from
California Family Code §§ 297-299.2.

## What this document covers

12 clauses: 3 drafting (recitals, declaration of intent, and signature
block) and 9 authority clauses, all citing California Family Code
Division 2.5:

- **`dp_eligibility`** (§ 297(a)-(b)) — who may register: same-sex
  couples of any age, or opposite-sex couples where at least one partner
  is 62 or older and meets Social Security/Medicare eligibility criteria.
- **`dp_filing_mechanism`** (§ 298(c), § 298.5(a)-(b)) — the actual
  filing mechanism: a Declaration of Domestic Partnership filed with the
  Secretary of State, with the effective date set at filing.
- **`dp_legal_effect`** (§ 297.5(a), (d)) — the core legal-effect
  statute: registered partners have the same rights, protections, and
  benefits, and are subject to the same responsibilities, as spouses.
- **`dp_community_property`** (§ 297.5(k)(1)) — community property law
  applies to registered domestic partners the same as it applies to
  spouses.
- **`dp_termination`** (§ 299(a), (d)) — how a domestic partnership ends:
  the statutory termination procedures, distinct from marital divorce
  procedures in specific ways.
- **`dp_confidential`** (§ 298.7) — the confidential domestic partnership
  option, a distinct registration category with restricted public
  record access.
- **`dp_intermarriage`** (§ 299(e)) — how the domestic partnership status
  interacts with a later marriage between the same two partners.
- **`dp_outofstate_recognition`** (§ 299.2) — California's recognition
  of a legal union validly formed in another jurisdiction that is
  substantially equivalent to a California domestic partnership.
- **`dp_exclusivity`** (§ 298.5(c)) — the exclusivity requirement: neither
  person may be married to, or in another domestic partnership with,
  anyone else at the time of filing.

## Method

Fetched all candidate California Family Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent.

## Defect caught and fixed during integration

Every one of the 9 authority clauses' `gap` fields was initially written
with literal `{{party1Name}}`/`{{party2Name}}` placeholder syntax —
since `gap` fields are never substituted by the rendering engine (only
`body` is), this would have rendered as literal unsubstituted text in
the methodology/sourcing view. Caught by the standard automated
`{{`-leak check, not by the research agent that drafted the content. An
initial automated regex-based fix produced grammatically broken prose
and was rejected; each of the 8 affected gap fields was manually
rewritten with natural, generic phrasing (e.g., "not a claim about
which state's law governs a specific couple's registration"). Also
found and fixed during integration: 3 clauses (`dp_eligibility`,
`dp_legal_effect`, `dp_termination`) cited only a single statutory
section each but initially lacked the standard single-source disclosure
sentence — added via a targeted fix.

## Verification

- Every candidate section fetched directly via `curl`, then
  re-verified on a second, independent fetch with a distinct
  User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean
  after the fix described above.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles (none, aside from the pre-existing, accepted pattern
  of reused generic drafting-clause titles like "Acknowledgment").
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Domestic Partnership Declaration
  (`domestic_partnership_declaration`), 12 clauses (9 authority + 3
  drafting), in the Family Law category.
