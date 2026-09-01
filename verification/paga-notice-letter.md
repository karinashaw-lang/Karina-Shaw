# Employment, twelfth document: PAGA Pre-Suit Notice Letter

## Why this document

Continuing the "go as humanely possible" build-out. California's
Private Attorneys General Act (PAGA), Labor Code § 2699 et seq., lets
an aggrieved employee bring a civil action to recover civil penalties
for Labor Code violations — but only after a specific pre-suit notice
procedure. This corpus already has a `wagestmt_paga_context` clause
(in the Wage Statement Itemization Policy document) scoped narrowly to
the § 226(a) cure mechanism; this document instead covers PAGA's
general notice/standing/penalty framework across Labor Code violations
broadly, without re-deriving that narrower existing clause. Sourced
from Labor Code §§ 2699, 2699.3, and Code of Civil Procedure § 340.

## What this document covers

10 clauses: 3 drafting (notice details, service confirmation, and
signature/verification) and 7 authority clauses:

- **`paga_notice_requirement`** (§ 2699.3(a)(1)(A)-(B)) — the core
  written-notice content and delivery requirements, including the $75
  LWDA filing fee.
- **`paga_notice_waiting_period`** (§ 2699.3(a)(2)(A)-(B)) — the LWDA's
  65-day response window and what happens if it does or doesn't
  investigate.
- **`paga_employer_cure_rights`** (§ 2699.3(c)(2)(A), (f)(1)(A), (g))
  — the 2024 reform's size-dependent cure tracks (under-100-employee
  confidential cure proposal vs. the court-supervised early evaluation
  conference for larger employers), confirmed operative October 1,
  2024.
- **`paga_aggrieved_employee_standing`** (§ 2699(c)(1)) — the current
  standing definition, with an honest, explicitly qualified note that
  its "personally suffered each violation" language is commonly
  described as narrower than pre-2024 law, based on general reform
  reporting rather than an independently verified historical text
  comparison.
- **`paga_civil_penalty_default`** (§ 2699(f)) — the real, current
  tiered penalty structure ($500/$100/$25/$50/$200), explicitly
  distinguished from the commonly-cited pre-2024 flat
  initial/subsequent-violation framework.
- **`paga_penalty_allocation`** (§ 2699(m)) — the current 65%/35%
  state/employee split, again flagged as different from the commonly
  cited pre-2024 75%/25% split without independently verifying the
  historical figure.
- **`paga_statute_of_limitations`** (CCP § 340(a); Labor Code
  § 2699.3(e)) — the one-year limitations period and the tolling that
  applies during the notice/cure process.

## Method

Fetched Labor Code §§ 2699 and 2699.3 and Code of Civil Procedure § 340
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical, including confirming both Labor Code sections reflect
the version amended by Stats. 2025, Ch. 67 (AB 1170), effective January
1, 2026 (i.e., current post-2024-reform law, not superseded pre-reform
text).

The research explicitly checked this project's existing corpus for
prior PAGA content before drafting, confirming `wagestmt_paga_context`
covers only the § 226(a) cure mechanism and that this document's
clauses don't duplicate it.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — correct throughout.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).

## Net changes

- New document: PAGA Pre-Suit Notice Letter (`paga_notice_letter`), 10
  clauses (7 authority + 3 drafting), in the During-employment category.
- Corpus: 485 → 495 clauses; 66 → 67 documents.
