# Family Law, seventh document: Voluntary Declaration of Parentage

## Why this document

Continuing the "go as deep as humanely possible" build-out. A Voluntary
Declaration of Parentage (VDOP) is the statutory mechanism by which two
people can establish legal parentage without a court proceeding —
distinct from the Parenting Plan (which addresses custody between
already-established parents) and from the Estate Planning
guardian-nomination clauses (which address who raises a child if a
parent dies). Sourced from California Family Code §§ 7570-7580.

## What this document covers

11 clauses: 3 drafting (declaration statement, no-competing-claim
statement, and signature block) and 8 authority clauses:

- **`parentage_legislative_basis`** (§ 7570(a), § 7573(d)) — the
  Legislature's stated purpose for the VDOP program and its legal
  effect: a completed declaration has the same force and effect as a
  judgment of paternity/parentage.
- **`parentage_signing_and_witnessing`** (§ 7571(a), § 7573(b)) — the
  execution requirements: signed by both parents, notarized or witnessed
  as specified.
- **`parentage_rescission_window`** (§ 7575(a)) — the statutory
  rescission window during which either signer may withdraw the
  declaration.
- **`parentage_later_challenge_by_signer`** (§ 7576(a)-(b)) — the
  narrower standard that applies after the rescission window closes:
  a signer can still challenge the declaration, but only on genetic-test
  or fraud/duress/material-mistake-of-fact grounds, and only within a
  specific time limit.
- **`parentage_scope_vs_custody_support`** (§ 7573(d), § 7577(j)(2)) —
  the declaration establishes parentage itself but does not by itself
  resolve custody or child support; those remain separate proceedings.
- **`parentage_marital_presumption_conflict`** (§ 7573.5(a)(1)) — how a
  VDOP interacts with the marital presumption of parentage when they
  conflict.
- **`parentage_genetic_testing_on_challenge`** (§ 7577(c)) — the
  genetic-testing mechanism available once a timely challenge is filed.
- **`parentage_minor_signer_timing`** (§ 7580(a)-(b)) — the specific
  timing rule that applies when a signer is a minor.

## Method

Fetched all candidate California Family Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent. Unlike the sibling
Domestic Partnership Declaration research, this clause set was built
correctly from the start — no `{{`-in-gap-field leaks were introduced,
confirmed by the standard automated leak-check before integration.

## Honest gap found

Research checked for a "pre-signing withdrawal" mechanism (a way to
back out before the declaration is ever filed, as distinct from the
post-filing rescission window) and did not find one independently
verifiable in the statute — this was disclosed rather than invented,
and no standalone clause claims such a mechanism exists.

## Verification

- Every candidate section fetched directly via `curl`, then
  re-verified on a second, independent fetch with a distinct
  User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles (none, aside from the pre-existing, accepted pattern
  of reused generic drafting-clause titles like "Acknowledgment").
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Voluntary Declaration of Parentage
  (`voluntary_declaration_of_parentage`), 11 clauses (8 authority + 3
  drafting), in the Family Law category.
- Corpus after this pair (Domestic Partnership Declaration +
  Voluntary Declaration of Parentage): 328 → 351 clauses; 50 → 52
  documents.
