# Family Law, third document: Postnuptial Agreement

## Why this document

Continuing the Family Law build-out. A postnuptial agreement is legally
distinct from the Premarital Agreement already shipped — the Uniform
Premarital Agreement Act, by its own statutory definition, only covers
agreements made "in contemplation of marriage," which by definition
excludes an agreement signed by people who are already married. This
document is built on the correct, different statutory basis: California's
interspousal fiduciary duty (§ 721) and its transmutation statute
(§§ 850–853).

## What this document covers

11 clauses: 3 drafting (declaration, property schedule/express
declaration reference, and signature/notarization block) and 8 authority
clauses:

- **`postnup_fiduciary_duty`** (§ 721(b)) — the confidential-relationship
  fiduciary duty spouses owe each other, with an explicit, honest
  disclosure that the statute itself contains no "presumption" language
  — any presumption of undue influence for a spousally-advantageous
  transaction is judicial doctrine, not codified, and no citation is
  offered for it.
- **`postnup_transmutation_writing_requirement`** (§ 850 + § 852(a)) —
  the actual formality that makes a postnuptial property reclassification
  valid: a writing with an express declaration.
- **`postnup_transmutation_personal_gift_exception`** (§ 852(c)) — the
  bounded carve-out for personal gifts (clothing, jewelry) between
  spouses.
- **`postnup_transmutation_recording_third_parties`** (§ 852(b)) — real
  property transmutations need recording for third-party effect, a
  distinct concept from validity between the spouses themselves.
- **`postnup_property_characterization_defaults`** (§ 760 + § 770(a)) —
  the community/separate property defaults a postnuptial agreement
  exists to override.
- **`postnup_spousal_support_provision_basis`** (§ 1610(a) + § 1612(c))
  — the single most important scoping clause: the Premarital Agreement
  Act's independent-counsel/unconscionability conditions are, by the
  statute's own definitional terms, tied to agreements made before
  marriage, and no statutory text was found extending them to a
  postnuptial spousal-support provision — disclosed as a real gap rather
  than assumed either way.
- **`postnup_community_property_management_disclosure`** (§ 1100(b) +
  § 1100(e)) — the written-consent-for-gifts rule and the restated
  disclosure duty.
- **`postnup_transmutation_effect_at_death`** (§ 853(a) + § 853(c)) — two
  narrow, specific rules connecting transmutation to death-related
  proceedings, with an honest disclosure that beyond these two rules, how
  a transmuted property's new character generally carries into probate
  or divorce proceedings wasn't independently verified as a distinct
  statutory rule.

## Method

Fetched all 9 candidate California Family Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
across both fetches for all nine sections.

This document's research produced two of the most disciplined "honest
gap" findings in this session: confirming that § 721 contains no
statutory presumption language (leaving a real judicial doctrine
uncited rather than inventing a citation for it), and confirming that
the Premarital Agreement Act's spousal-support conditions don't, by
their own terms, carry over to a postnuptial agreement — a distinction
the sibling Premarital Agreement document's own statutory definition
makes possible to verify precisely.

## Verification

- All 9 candidate sections fetched directly via `curl`, then
  re-verified on a second, independent fetch with a distinct
  User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 48 documents.

## Net changes

- New document: Postnuptial Agreement (`postnuptial_agreement`), 11
  clauses (8 authority + 3 drafting), in the Family Law category.
- Corpus: 282 → 304 clauses (combined with the Marital Settlement
  Agreement, shipped in the same wave); 46 → 48 documents.
