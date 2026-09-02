# Family Law, thirteenth document: Paternity Action Petition Information Sheet

## Why this document

The existing Voluntary Declaration of Parentage document covers the
out-of-court, agreed, signed-form process. This document covers the
genuinely distinct contested court process under the Uniform Parentage
Act, used when parentage is disputed or a party won't voluntarily
sign. Follows the same informational, non-dispositive pattern as the
Guardianship Petition and Grandparent Visitation documents — explicit
throughout that it does not itself establish or disestablish
parentage.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses:

- **`paternity_scope_vs_voluntary_declaration`** (Fam. Code § 7630(a))
  — the two distinct pathways to parentage and their difference.
- **`paternity_standing`** (Fam. Code § 7630(a), (c)) — who has
  standing to bring an action, correcting an assumption that an
  alleged father's standing under § 7630(c) is unconditional.
- **`paternity_marital_presumption_disestablishment`** (Fam. Code
  §§ 7540(a), 7541(a)-(b)) — the conclusive marital presumption and
  its firm two-year disestablishment deadline.
- **`paternity_genetic_testing`** (Fam. Code §§ 7551(a), 7555(a)) —
  when the court must order testing and the actual statistical
  threshold for genetic-parent identification.
- **`paternity_competing_presumptions`** (Fam. Code § 7612(a)-(b)) —
  the "weightier considerations of policy and logic" standard,
  correcting an assumption that genetic evidence automatically
  overrides a competing presumption.
- **`paternity_timing_rules`** (Fam. Code § 7630(a)(1)-(2)) — the
  varied timing rules: no deadline to establish, a flexible
  reasonable-time standard to disestablish a § 7611 presumption, and
  the separate fixed two-year deadline for the marital presumption.

## Genuine corrections caught during research

- The task brief assumed an alleged father has unconditional standing
  under § 7630(c). Direct review shows that standing is conditional —
  limited to when the mother is the sole presumed parent, or a
  dependency or adoption action is pending.
- The task brief assumed a genetic-parent identification under § 7555
  creates its own presumption overriding a conflicting § 7611
  presumption. Direct review shows it doesn't — it's one input into
  the same weightier-considerations balancing test used for two
  conflicting § 7611 presumptions.
- Confirmed there is no single statute of limitations for a parentage
  action — the timing rule genuinely depends on what's being asked of
  the court (establish vs. disestablish vs. the marital-presumption-
  specific two-year deadline).

## Honest gap disclosed

No general, catch-all limitations period for a § 7630(c) action
(outside the marital-presumption and nonexistence-challenge
categories) was located in the sections reviewed — disclosed as "not
located in the sections reviewed," not as "does not exist."

## Method

Fetched Family Code §§ 7540, 7541, 7551, 7555, 7611, 7612, 7613, 7630
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. Consistent with the existing Voluntary Declaration of
Parentage document, no case law is cited (a CourtListener search for
the "weightier considerations" standard's case-law origin hit the
daily rate limit and was not pursued further).

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed six real leaks during its own drafting process, then
  re-confirmed clean on the final file (also independently
  re-confirmed clean during this integration).
- Checked source-independence disclosure logic across all 6 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`childName`) confirmed to match the existing Voluntary
  Declaration of Parentage document exactly.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Paternity Action (Petition to Establish Parental
  Relationship) Information Sheet (`paternity_action_petition`), 8
  clauses (6 authority + 2 drafting), in the Family Law category. New
  fields: `petitionerName`, `allegedParentName`, `respondentName`.
- Corpus: 712 → 720 clauses; 95 → 96 documents.
