# Family Law, second document: Marital Settlement Agreement

## Why this document

Continuing the "go as dense as you can on family law" build-out past the
Premarital Agreement flagship. A Marital Settlement Agreement (MSA) is
the document divorcing spouses actually use to divide property, debts,
and support — the single most common Family Law document after the
prenup itself.

## What this document covers

11 clauses: 3 drafting (declaration, property schedule reference, and
signature block) and 8 authority clauses, all citing California Family
Code:

- **`msa_equal_division_default`** (§ 2550) — the equal-division default
  and its written-agreement exception, which an MSA itself exercises.
- **`msa_community_separate_property`** (§ 760 + § 770) — the community
  vs. separate property characterization defaults.
- **`msa_date_of_separation`** (§ 70 + § 771(a)) — the real, litigated
  statutory test for "date of separation" (enacted in 2015 to abrogate
  the California Supreme Court's *Davis* decision) and its consequence
  for post-separation earnings.
- **`msa_spousal_support_factors`** (§ 4320) — the real, full factor list
  a court considers, including the "one-half the length of the marriage"
  self-support benchmark.
- **`msa_long_duration_marriage`** (§ 4336) — the rebuttable 10-year
  presumption for indefinite jurisdiction retention over support.
- **`msa_custody_agreements_subject_to_best_interest`** (§ 3080 + §
  3011(a)(5)(B)) — a parents' custody stipulation still has to be in the
  child's best interest; it isn't self-executing.
- **`msa_incorporation_into_judgment`** (§ 2550 + Code Civ. Proc. §
  664.6) — a genuine, disclosed gap: no single clean statute establishes
  that an MSA must be "incorporated" into a judgment to be enforceable as
  one; that specific proposition rests on case law and court procedure,
  and the clause says so directly rather than inventing a citation.
- **`msa_attorneys_fees_parity`** (§ 2030(a)) — the need-based
  attorney's-fee mechanism meant to ensure parity of access to counsel.

## Method

Fetched all candidate California Family Code (and one Code of Civil
Procedure) sections directly from `leginfo.legislature.ca.gov`. Every
quote re-verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical across both fetches.

A specific citation the research checked for and did NOT find: the exact
phrase "regardless of which party requested the order" for the
attorney's-fee clause. That phrasing doesn't appear in the current text
of § 2030 or its companion § 2032, so the clause uses only language
confirmed present in the statute rather than a remembered paraphrase.

## Verification

- Every candidate section fetched directly via `curl`, then re-verified
  on a second, independent fetch with a distinct User-Agent.
- Three clauses initially missing the standard single-source disclosure
  sentence were caught during integration-time validation and corrected
  before shipping (`msa_equal_division_default`,
  `msa_spousal_support_factors`, `msa_long_duration_marriage`).
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 48 documents.

## Net changes

- New document: Marital Settlement Agreement
  (`marital_settlement_agreement`), 11 clauses (8 authority + 3
  drafting), in the Family Law category.
