# Research file: `llc_annual_fee_info_sheet` (California LLC Annual Fee — Information Sheet)

MVP_FINISH_VERIFY_SHARPEN.md item 1.5. Wedge document (single-member LLC
formation cluster). Sourced findings only — nothing below is legal advice,
and nothing here tells a reader what to do.

## 1. Governing California law

- **Cal. Rev. & Tax. Code § 17942** — the income-tiered LLC fee itself. The
  document's own `llcfee_schedule` clause already quotes the current
  statutory brackets directly (checked 2026-09-04): $900 at $250,000–
  $499,999 total income, $2,500 at $500,000–$999,999, $6,000 at
  $1,000,000–$4,999,999, $11,790 at $5,000,000+. Cross-checked against
  current third-party CPA/law-firm guides (GreenGrowth CPAs, Catalyst CPA,
  Reed Corporation, Ridley Law Offices, SW Accounting) via web search —
  every source found in late 2026 states the same four brackets and dollar
  amounts, with no indication of an inflation adjustment or amendment since
  this document's own checked date. Not independently re-fetched from
  leginfo.legislature.ca.gov in this pass (this session's own network
  access didn't reach that page this time); the document's own existing
  citation to § 17942(a)(1)–(4) is a direct quote already checked once,
  which this pass corroborates rather than re-verifies from scratch.
- **Cal. Rev. & Tax. Code § 17941** — the separate flat annual tax
  (currently $800) this document's `llcfee_addition_to_franchise_tax`
  clause distinguishes the fee from. See the finding below — this amount
  is no longer unconditionally "$800" for every LLC.
- **Cal. Rev. & Tax. Code § 24271 / 26 U.S.C. § 61** — the "total income"
  definition chain, already quoted directly in `llcfee_total_income_defined`.

## 2. Elements or notices this document's clauseOrder omits — FINDING

**`llcfee_addition_to_franchise_tax` states the § 17941 tax is "currently
$800" with no qualification. That's no longer true for every LLC, as of a
real, dated statutory change:**

- **Correction to this file's own first-pass finding**: the enacting bill
  is **SB 180** ("Taxation trailer bill," chaptered **July 13, 2026** as
  **Chapter 85, Statutes of 2026**), not SB 122. This file's first pass
  (and, separately, the sibling `llc_articles_of_organization.md` review's
  own account that SB 122 first added this provision with an error SB 180
  then corrected) both named SB 122 as at least part of the story; a
  follow-up pass fetched the **current codified text of § 17941(g)(2)
  directly** (`california.public.law/codes/revenue_and_taxation_code_section_17941`,
  a mirror whose own footer reads "updated Jul. 13, 2026" — matching SB
  180's chaptering date exactly, not SB 122's June 29, 2026 date) and
  confirmed its operative text verbatim: *"For taxable years beginning on
  or after January 1, 2027, and before January 1, 2030, every limited
  liability company required to file a return under Section 18633.5 ...
  [shall] pay the annual tax to this state in the amount of four hundred
  dollars ($400) for its first taxable year ... instead of the amount
  specified in Section 23153."* No budget-contingency clause gates this
  subdivision (unlike the earlier (g)(1) exemption for 2021–2023
  formations, which the same section shows *is* contingent on a budget
  appropriation) — so this $400 first-year reduction is not conditional,
  it is already operative law for the stated window. SB 122 (2026 Budget
  Act trailer bill, signed June 29, 2026) is a real, separate 2026 bill,
  but the direct source check above does not independently confirm it
  ever touched § 17941 at all — that claim rests on secondary CPA/law-firm
  commentary only (GreenGrowth CPAs, Catalyst CPA, ThinkLegal PC) and
  should not be repeated as fact without its own primary-text check,
  which is out of scope for this already-resolved finding.
- This document's own clause was last checked **2026-09-04** — *after*
  SB 122 was signed (June 29, 2026) and *before* SB 180 was chaptered
  (July 13, 2026). Either way, the verification evidently checked only
  the baseline §17941(a)/§23153(d)(1) amount and not this year's
  intervening legislation, so the clause was already incomplete at the
  moment it was last verified, not just stale since.
- The $400 relief applies **only** to the flat § 17941 tax, not to the
  § 17942 fee this document is actually about — confirmed by every source
  above and consistent with the statute's own separate-section structure
  this document already relies on. So `llcfee_schedule`'s own $900+
  figures are unaffected either way.
- **This same fact also touches `llc_articles_of_organization`'s
  `llc_articles_annual_tax` clause** (reviewed separately in this item's
  own pass) — flagging here so whoever reviews that document checks the
  same statute.

**Patch proposal (for owner approval, not applied by this pass):**

Add a qualifying sentence to `llcfee_addition_to_franchise_tax`'s body,
immediately after the existing "$800" reference, along these lines:

> For an LLC whose first taxable year begins on or after January 1, 2027
> and before January 1, 2030, Cal. Rev. & Tax. Code § 17941(g)(2) sets
> that first-year amount at $400 instead of $800 (added by Stats. 2026,
> ch. 85 (SB 180)); the flat annual tax returns to $800 from the LLC's
> second taxable year on.

New citation needed:

```json
{
  "case": "Cal. Rev. & Tax. Code § 17941(g)(2) (added by Stats. 2026, ch. 85 (SB 180))",
  "cite": "First-taxable-year reduction of the annual tax to $400 for LLCs/LPs/LLPs, taxable years 2027-2029",
  "url": "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=17941.",
  "quote": "For taxable years beginning on or after January 1, 2027, and before January 1, 2030, every limited liability company required to file a return under Section 18633.5 ... shall pay the annual tax to this state in the amount of four hundred dollars ($400) for its first taxable year ... instead of the amount specified in Section 23153.",
  "sourceClass": "primary-official",
  "state": "CA"
}
```

The quote above is verbatim from a direct fetch of the current codified
text (not a secondary summary) — see the corrected finding above for the
source and why it's trustworthy — but whoever applies this patch should
still do one more direct confirmation against `leginfo.legislature.ca.gov`
itself before committing it to `data/clauses.json`, consistent with this
corpus's own primary-source-only citation standard (the mirror used here,
while reliable, is still not the official source of record).

**Do not publish this wedge document's page until this is resolved** — per
item 1.5's own rule, a missing-element finding on a wedge document is a
launch blocker. The fix itself is small (one clause-body sentence plus one
citation).

## 3. Provisions California restricts or voids

None found. This is a tax-collection statute, not a contract-restriction
one — there's no analog here to, say, a noncompete-restriction statute.
Confirmed by reading the document's full clause set: nothing in it purports
to restrict or waive a right, so there's nothing of this kind to flag.

## 4. Federal overlay

None beyond what the document already discloses. `llcfee_total_income_defined`
already correctly traces the "total income" definition's chain down to
26 U.S.C. § 61 (federal gross income) via Cal. Rev. & Tax. Code § 24271 —
the one place federal law actually enters this topic, and it's already
cited. No independent federal fee or tax applies to this specific
state-fee topic.

## 5. Changes in the last 24 months / effective Jan 1 or July 1, 2027

- **SB 180** (above) — effective **January 1, 2027**, through January 1,
  2030. The single most important dated fact for this document and for
  `llc_articles_of_organization`.
- No other change to § 17942's own fee schedule or § 24271's income
  definition was found in this pass's searches.

## 6. Scope notes

- Confirmed by `llcfee_scope`'s own clause and citation: the fee (and this
  document) applies only to an LLC "subject to tax under Section 17941" —
  which § 17941(d) itself excludes an LLC that has elected or is otherwise
  taxable as a corporation for California tax purposes from. The document
  does not use the federal "disregarded entity"/"partnership" terminology
  anywhere in its body text, which is accurate to the statute's own wording
  (the statute doesn't use those terms either) — not a gap, a faithful
  choice already explained in `llcfee_scope`'s own gap note.
- The document does not address, and correctly leaves to this project's
  separate Operating Agreement documents, how a specific LLC determines
  its own tax classification in the first place.

## 7. Does the interview capture the facts the clauses depend on?

- Fields collected: `preparerName` (required), `companyName` (optional —
  "if applicable"), `dateSigned` (required), `cityState` (required). All
  four are used correctly in `llcfee_declaration` and `llcfee_ack`.
- This document is explicitly, correctly scoped as a **reference sheet
  that states the law**, not a calculator — `llcfee_declaration` and
  `llcfee_ack` both say so directly ("does not calculate, estimate, or
  evaluate what any particular limited liability company owes"). It does
  **not** ask for the LLC's actual total income, and it doesn't need to —
  no clause depends on an income figure the interview would otherwise have
  to supply; `llcfee_schedule` states the brackets as reference information
  only. This is a deliberate, already-disclosed design choice, not an
  interview gap.

## Summary

One real, dated, sourced finding: `llcfee_addition_to_franchise_tax`'s
"$800" reference needs a first-year-reduction qualifier for § 17941(g)(2)
(added by SB 180, effective January 1, 2027) — a launch blocker per item
1.5's own rule, pending owner approval of the patch proposal above (the
quote is already verified against a direct fetch of the current codified
text; one more direct confirmation against leginfo.legislature.ca.gov
itself is recommended before it's committed to `data/clauses.json`, per
this corpus's own primary-source standard). Everything else reviewed
(governing law, restricted provisions, federal overlay, scope, and
interview coverage) checked out with no further gap found.
