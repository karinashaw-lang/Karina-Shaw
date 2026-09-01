# Employment, ninth document: Commission Agreement

## Why this document

Continuing the "go as deep as humanely possible" build-out beyond Family
Law, back into the Employment category. A Commission Agreement documents
how commission wages are computed and paid — California is one of a
minority of states that statutorily requires this to be in writing.
Sourced from California Labor Code § 2751, § 204, and § 204.1.

## What this document covers

8 clauses: 3 drafting (declaration of parties, commission structure and
rate schedule, and signature/receipt acknowledgment) and 5 authority
clauses:

- **`commission_writing_requirement`** (§ 2751(a)) — the core
  requirement: any California employment contract involving commission
  pay must be in writing and set forth the computation/payment method.
- **`commission_signed_receipt`** (§ 2751(b)) — the employer must give
  a signed copy to the employee and obtain a signed receipt.
- **`commission_expired_contract_continuation`** (§ 2751(b)) — if the
  contract expires and the parties keep working under its terms, the
  terms are presumed to remain in force until superseded or employment
  ends.
- **`commission_statutory_definition`** (§ 2751(c), § 204.1) — what
  counts as a "commission" for this specific writing requirement, and
  what's carved out (short-term retail-clerk-style bonuses, temporary
  variable incentive payments that only increase pay, and bonus/profit
  plans unless a fixed percentage was offered).
- **`commission_payment_timing`** (§ 204(a), § 204.1) — the general
  twice-monthly payday rule that applies to most commission wages, and
  the separate once-monthly rule specific to vehicle-dealer commissions.

## Deliberate exclusion

The research agent also proposed a `commission_earned_status` clause
addressing when a commission is legally "earned" (as opposed to merely
computed) — this point is not codified in a single clean California
statute, and the proposed clause had zero independent citations. Rather
than ship a citation-less "authority" clause, it was dropped entirely,
consistent with how other "not codified" findings have been handled
throughout this project.

## Method

Fetched all candidate California Labor Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent.

## Verification

- Every candidate section fetched directly via `curl`, then
  re-verified on a second, independent fetch with a distinct
  User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Commission Agreement (`commission_agreement`), 8
  clauses (5 authority + 3 drafting), in the Hiring/During-employment
  categories.
- Corpus: 351 → 359 clauses; 52 → 53 documents.
