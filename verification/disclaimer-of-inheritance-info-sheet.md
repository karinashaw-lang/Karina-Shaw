# Estate Planning, new document: Disclaimer of Inheritance — Information Sheet

## Why this document

Confirmed by grep that "disclaimer of interest" / "qualified disclaimer" had
zero hits anywhere in the corpus (the only near-hit, `swlicense_disclaimer`,
is an unrelated software-license clause). The delivering agent reviewed the
existing Last Will and Testament, Small Estate Affidavit, Community Property
Agreement, Slayer Statute, and Payable-on-Death Account documents first for
tone, format, and field-id conventions.

## What this document covers

8 clauses: 2 drafting (disclaimer declaration, signature/notarization) and 6
authority clauses, all citing California Probate Code Division 2, Part 8
("Disclaimer of Testamentary and Other Interests"):

- **`disclaimer_who_may_disclaim`** (§§ 262, 264, 275) — who counts as a
  "beneficiary" versus "disclaimant," and the core statutory right to
  disclaim.
- **`disclaimer_scope_of_interests`** (§ 267) — the full, 15-category
  definition of a disclaimable "interest" (far broader than probate-estate
  inheritance alone).
- **`disclaimer_formal_requirements`** (§ 278; § 280(a)) — the writing,
  signature, and content requirements, and where a disclaimer must be filed.
- **`disclaimer_timing`** (§ 279(a)-(b); § 295) — the reasonable-time
  standard, the nine-month conclusive-presumption safe harbor, and the
  separate federal-law tie-in.
- **`disclaimer_effect`** (§ 281; § 282) — irrevocability and the
  predecease-fiction default for where a disclaimed interest goes.
- **`disclaimer_partial_and_bars`** (§ 275, reused; §§ 285-286) — the
  partial-disclaimer right, the acceptance bar, and the spendthrift
  non-bar.

## Genuine corrections and findings

- **A significant timing finding**: California's statute does not impose a
  hard deadline. § 279(a) sets an open-ended "reasonable time" standard;
  § 279(b) creates a rebuttable, conclusively-presumed-timely nine-month
  safe harbor — missing it only shifts a burden of proof (§ 279(f), not
  independently quoted). This state nine-month figure coincidentally
  resembles, but is legally distinct from, the federal "qualified
  disclaimer" deadline under 26 U.S.C. § 2518, which was deliberately not
  fetched or verified and is flagged as unverified background. § 295
  separately provides that a disclaimer effective under federal tax law is
  automatically effective under California law too.
- **A precise redirection finding**: § 282(a) directs a disclaimed interest
  to whatever alternative the creator of the interest specified, or failing
  that, under a predecease fiction — nothing in the text lets the
  disclaimant redirect the property to a person of their own choosing. The
  document flags this conclusion as its own reading of what the statute
  does not grant, not a separate express prohibition.
- Confirmed the "interest" definition (§ 267) is deliberately broad —
  reaching trusts, joint tenancy, insurance/annuity contracts, employee
  benefit plans, IRAs, and TOD deed designations, not just probate-estate
  inheritance, via an illustrative (not exhaustive) 15-item list.
- Confirmed the acceptance bar (§ 285) and its exceptions precisely,
  including the little-noticed carve-out that a joint tenant's acceptance
  of the original joint-tenancy interest does not itself bar disclaiming
  the separate interest received later by surviving another joint tenant.
- Confirmed the disclaimer_who_may_disclaim clause's own second use of
  § 275 (also cited independently in disclaimer_partial_and_bars) is
  correctly flagged in the second clause's `gap` as a restatement, not an
  independent source for that specific point.

## Honest gap disclosed

The federal "qualified disclaimer" deadline under 26 U.S.C. § 2518 — which
California's § 295 ties into but does not restate — was not independently
fetched or verified; the document names it and explains it is legally
distinct from the state nine-month presumption without quoting or relying
on its own text. The guardian/conservator/personal-representative
court-order process under §§ 276-277 and the anti-lapse cross-references in
§ 282(b) (Part 6, §§ 6409-6410) are named but not separately researched or
quoted.

## Method

Fetched Cal. Prob. Code §§ 262, 264, 267, 275, 278, 279, 280, 281, 282, 285,
286, and 295 directly from `leginfo.legislature.ca.gov`, each via two
separate requests using distinct User-Agent strings (Chrome/Windows and
Safari/macOS) — byte-identical both times. All 13 citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, corpus-wide.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are sections of the same Part 8 statutory
  family versus the one deliberate reuse of § 275 across two clauses;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic title reuse ("Signature and Notarization") — consistent
  with the corpus-wide pattern.
- Field names (`decedentName`, `dateSigned`, `cityState`,
  `propertyDescription`) independently confirmed to match existing corpus
  convention. New field: `disclaimantName`.
- Corpus-wide validation (placeholder resolution against document `fields`,
  dup ids/titles, `{{}}` leaks) run across the full updated corpus — clean.

## Net changes

- New document: Disclaimer of Inheritance — Information Sheet
  (`disclaimer_of_inheritance_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Estate Planning category. New field:
  `disclaimantName`.
- Corpus: 1,862 → 1,870 clauses; 238 → 239 documents. Fourth and final
  document of wave 47.
