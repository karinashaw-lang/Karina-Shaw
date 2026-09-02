# Real Estate, new document: Prescriptive Easement and Easement by Necessity — Information Sheet

## Why this document

The corpus's existing Easement Agreement document covers only an
express, negotiated easement (Civ. Code §§ 801-802, 806, 1069,
1213-1214, 1104) and never states prescriptive or necessity elements —
one of its own `gap` fields discloses a prior session's CourtListener
429 that blocked verifying those elements at the time. Confirmed by
reading both the existing Easement Agreement and Adverse Possession
documents before writing anything.

## What this document covers

6 clauses: 2 drafting (use-history declaration, claimant certification)
and 4 authority clauses:

- **`prescriptiveeasement_elements_and_five_year_period`** (*Warsaw v.
  Chicago Metallic Ceilings, Inc.*, 35 Cal.3d 564 (1984); Code Civ.
  Proc. § 321) — the case-law elements test and its borrowed five-year
  period.
- **`prescriptiveeasement_no_exclusivity_no_tax_distinction`**
  (*Silacci v. Abramson*, 45 Cal.App.4th 558 (1996)) — how a
  prescriptive easement differs from adverse possession, with honest
  nuance.
- **`prescriptiveeasement_necessity_elements`** (*Kellogg v. Garcia*,
  102 Cal.App.4th 796 (2002)) — easement by necessity's two-part test.
- **`prescriptiveeasement_termination_of_servitude`** (Civ. Code
  § 811; *Kellogg*) — how each type of easement can be extinguished.

## Genuine corrections and findings

- Confirmed prescriptive easements are case-law-only in California —
  no dedicated statute. The five-year figure comes from *Warsaw*,
  borrowing the same period Code Civ. Proc. § 321 sets for adverse
  possession — but no case was found that textually ties the number to
  § 321 itself, so this is disclosed as an inference from comparing
  numerals, not a confirmed citation chain.
- Confirmed no exclusivity or tax-payment requirement for a
  prescriptive easement, with an honest nuance from *Silacci* itself:
  tax payment is required if the easement area happens to be
  separately assessed, and *Silacci*'s no-exclusivity holding is
  fact-bound — it distinguishes rather than overrules *Otay Water
  Dist. v. Beckwith*, which upheld an exclusive prescriptive easement
  on different facts.
- **A significant correction**: Civ. Code § 1104 is not the easement-
  by-necessity statute, as originally framed — directly checked § 1104
  and the surrounding sections (§§ 1105-1106) and confirmed § 1104
  covers a different, related doctrine (implied easement from a
  property's own prior "obvious and permanent" use). Easement by
  necessity is confirmed case-law-only, with the two-part test (strict
  necessity plus common ownership at severance) from *Kellogg*.
- A genuine new find: Civ. Code § 811 governs general servitude
  extinguishment (merger, destruction of servient land, an
  incompatible act, or disuse for the prescriptive period) — not
  previously in the corpus. *Kellogg* itself supplies the necessity-
  specific rule that a necessity easement "will exist only so long as
  the necessity exists," so a separate case (Murphy v. Burch) wasn't
  needed.

## Honest gaps disclosed

Several cases quoted within the verified opinions (*Raab v. Casper*,
*Otay Water Dist. v. Beckwith*, *Moores v. Walsh*, *Bully Hill*,
*Lichty v. Sickels*, *Daywalt v. Walker*, *Pacific Gas & Electric Co.
v. Crockett Land & Cattle Co.*) were not independently fetched — each
`gap` field discloses these are the cited case's own block
quotations, not independently verified this session, rather than
citing them as directly checked.

## Method

Fetched Code Civ. Proc. §§ 321, 325(b) and Civ. Code §§ 806, 811
directly from `leginfo.legislature.ca.gov` via curl, each re-fetched a
second time — exact match both times. CourtListener returned a
genuine ~22-minute daily-cap cooldown mid-session (confirmed with real
decreasing 429 countdowns, not assumed); the agent waited it out and
completed all remaining case-law research inside the reopened window.
*Warsaw*, *Silacci*, and *Kellogg* were each fetched and re-fetched,
with pincites cross-checked against the opinions' own star-pagination
markers (corrected twice where an initial estimate was off by a page).
All 10 citation quotes across the 4 authority clauses programmatically
confirmed as exact substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently; confirmed clean on
  integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`claimantName`, `recordOwnerName`,
  `dominantPropertyAddress`, `dominantLegalDescription`,
  `servientPropertyAddress`, `servientLegalDescription`,
  `parcelNumber`, `recordingCounty`) independently confirmed to match
  existing corpus convention (Easement Agreement, Adverse Possession
  documents). New fields: `useStartDate`, `useMannerDescription`,
  `priorCommonOwnerName`, `severanceDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Prescriptive Easement and Easement by Necessity —
  Information Sheet (`prescriptive_easement_necessity_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Real Estate category. New
  fields: `useStartDate`, `useMannerDescription`,
  `priorCommonOwnerName`, `severanceDate`.
- Corpus: 1,661 → 1,667 clauses; 210 → 211 documents. Completes wave
  40 (Job Applicant Record Retention, Final Paycheck Delivery Method,
  Copyright Fair Use, Prescriptive Easement and Easement by Necessity).
