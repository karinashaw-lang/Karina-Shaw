# Family Law, fourth document: Parenting Plan

## Why this document

Continuing the "go as dense as you can" Family Law build-out. A
Parenting Plan is the document separating, divorcing, or never-married
parents use to set out legal custody, physical custody, and a
visitation/timeshare schedule. Distinct from this project's existing
Estate Planning guardian-nomination clauses (`will_guardian_nomination`,
`guardian_nom_minor_preference`), which address who raises a child if a
parent dies — this document addresses ongoing custody between two
living, separating parents, deliberately not re-deriving that earlier
material.

## What this document covers

12 clauses: 3 drafting (declaration, visitation schedule reference, and
signature block) and 9 authority clauses, all citing California Family
Code Division 8 (Custody of Children) and one section from Division 12:

- **`parenting_custody_definitions`** (§§ 3003, 3004, 3006, 3007) — the
  real, precise definitions of legal vs. physical custody, joint vs.
  sole, drawn from four genuinely independent statutory sections rather
  than treating "custody" as one undifferentiated label.
- **`parenting_best_interest_factors`** (§ 3011) — the actual statutory
  best-interest factor list, with the sex/gender-identity/orientation
  exclusion the statute states explicitly.
- **`parenting_public_policy`** (§ 3020) — California's declared policy
  priority ordering: child safety controls when it conflicts with the
  frequent-and-continuing-contact preference, not the reverse.
- **`parenting_dv_presumption`** (§ 3044) — the real, heavily litigated
  rebuttable presumption against custody for a parent found to have
  perpetrated domestic violence, and the specific factors that can
  overcome it. Flagged as a genuine staleness catch: this exact version
  of § 3044 was enacted by Stats. 2024, Ch. 544 and only became operative
  January 1, 2026.
- **`parenting_agreement_court_review`** (§ 3080) — a parents' own
  custody agreement functions as a rebuttable presumption feeding a
  court's best-interest determination, not as an automatically binding
  private contract.
- **`parenting_modification_standard`** (§ 3087) — the actual statutory
  modification standard for a joint custody order, with an honest
  disclosure that the broader "changed circumstances" doctrine used for
  custody modification generally is judicial doctrine, not one clean
  statute — and that no case citation for it was independently verified
  through this project's fetch discipline, so none is offered.
- **`parenting_mediation`** (§ 3170(a)) — the mandatory pre-hearing
  mediation trigger for contested custody/visitation matters.
- **`parenting_records_access`** (§ 3025) — the self-executing rule that
  a non-custodial parent's access to a child's medical, dental, and
  school records can't be denied for that reason alone.
- **`parenting_relocation`** (§ 7501) — a custodial parent's presumptive
  right to move a child's residence, subject to the court's power to
  restrain a prejudicial move, and the Legislature's stated intent to
  affirm *In re Marriage of Burgess* (1996) as state policy — flagged
  as sitting in a different Division of the Family Code than the
  document's other citations.

## Method

Fetched all 12 candidate California Family Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
across both fetches for every section used.

This document produced two disciplined "honest gap" findings, both
caught by declining to cite something that couldn't be independently
verified rather than assuming it: the general changed-circumstances
custody-modification doctrine (real, but case law rather than a clean
statute — no case citation offered since none was independently
verified), and the § 3025 records-access rule's stated scope (the
research checked for a "unless prohibited by court order" carve-out the
task briefing suggested might exist, found no such language in the
actual statute, and didn't include it).

## Verification

- All 12 candidate sections fetched directly via `curl`, then
  re-verified on a second, independent fetch with a distinct
  User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 50 documents.

## Net changes

- New document: Parenting Plan (`parenting_plan`), 12 clauses (9
  authority + 3 drafting), in the Family Law category.
