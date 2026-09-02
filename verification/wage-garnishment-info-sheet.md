# Ending employment, new document: Wage Garnishment (Earnings Withholding Order) — Information Sheet

## Why this document

No existing document or clause covered how an employer processes a
judgment creditor's wage garnishment order — a distinct compliance
duty from any existing termination-related document.

## What this document covers

8 clauses: 2 drafting (processing declaration, signature/
certification) and 6 authority clauses:

- **`wagegarnish_framework`** (Code Civ. Proc. § 706.020 et seq.) —
  California's Wage Garnishment Law and how an employer becomes
  obligated to withhold upon service of an earnings withholding order.
- **`wagegarnish_withholding_limits`** (Code Civ. Proc. § 706.050) —
  the current lesser-of-two-formulas general withholding limit.
- **`wagegarnish_support_priority`** (Code Civ. Proc. § 706.052; 15
  U.S.C. § 1673(b)) — the different, higher cap for a support
  withholding order.
- **`wagegarnish_employer_duties_timing`** (Code Civ. Proc. §§ 706.022,
  706.025) — when withholding must begin and when withheld amounts
  must be remitted.
- **`wagegarnish_antiretaliation`** (Cal. Lab. Code § 2929; 15 U.S.C.
  § 1674(a)) — anti-retaliation protection against discharge based on
  garnishment.
- **`wagegarnish_employer_liability`** (Code Civ. Proc. § 706.154(a),
  (b)) — employer liability to the judgment creditor for
  noncompliance, and the good-faith-compliance immunity.

## Genuine corrections and findings

- **A significant correction**: the § 706.050 withholding formula's
  multiplier was wrong in the original framing. The current (post-SB
  1477, operative September 1, 2023) formula is the lesser of 20% of
  disposable earnings, or 40% of the amount by which disposable
  earnings exceed 48 times the applicable minimum hourly wage — not 40
  times. Confirmed the pre-2022 formula (tied to federal poverty
  guidelines) is superseded.
- Corrected the support-order cap mechanism: § 706.052(a) works by
  exempting one-half of disposable earnings from levy (i.e., up to 50%
  may be withheld), with any court-ordered equitable division capped
  by federal law. The federal ceiling (15 U.S.C. § 1673(b)(2)) is
  actually tiered — 50%/55% if supporting a current spouse/child (55%
  for arrears over 12 weeks), 60%/65% if not — so the real ceiling can
  reach 65%, higher than the original "up to 50% or more" framing.
- Confirmed § 2929(b)'s anti-retaliation protection is narrower than
  it might appear: it protects only against discharge for garnishment
  "for the payment of one judgment" — the statute is silent on
  multiple garnishments for different debts. The federal parallel, 15
  U.S.C. § 1674(a), uses "any one indebtedness" and is likewise silent
  on multiple-debt scenarios.
- Refined the timing citation: rather than a generic "10 days" rule,
  the actual mechanic is that the withholding period begins the 30th
  day after service (or the 45th day if a timely exemption claim is
  filed and the employer gets actual notice by the close of business
  on the 29th day) under § 706.022(a). Remittance to the levying
  officer is due monthly by the 15th day of each month, or within 10
  days of pay-period close if the employer elects more frequent
  payment, under § 706.025.
- Confirmed employer liability under § 706.154(a) authorizes recovery
  of the shortfall amount, not a separately specified penalty figure
  — no penalty amount was fabricated. Section 706.154(b) grants the
  employer immunity for good-faith compliance with a facially valid
  order, absent active participation in fraud.
- A genuine additional finding: California's primary mechanism for
  support wage deductions is generally the Family Code "earnings
  assignment order" (not the Code of Civil Procedure "earnings
  withholding order for support"), and per § 706.031, the Family Code
  assignment order takes priority over any Code of Civil Procedure
  earnings withholding order — disclosed honestly as out of the
  verified scope for this pass rather than researched independently.

## Honest gap disclosed

No case law was researched — the statutory text was unambiguous
enough to answer every research question, so CourtListener's
rate-limited quota was not spent on this document.

## Method

Fetched Code Civ. Proc. §§ 706.020, 706.022, 706.023, 706.025,
706.050, 706.052, 706.154 (and §§ 706.030, 706.024, 706.031 for
context), and Cal. Lab. Code § 2929, directly from
`leginfo.legislature.ca.gov`; fetched 15 U.S.C. §§ 1673 and 1674
directly from `law.cornell.edu`. Each verified against a second,
independent fetch with a distinct User-Agent — confirmed textually or
byte-identical. All citation quotes programmatically confirmed as
exact substrings of the fetched, tag-stripped text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 706.154(a)/(b) is
  correctly flagged "treated as one source, not independent"; all
  other multi-citation clauses draw from different sections or
  different sovereigns and are labeled accordingly; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Certification") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`,
  `employerRepresentativeName`, `signatureDate`, `amountOwed`)
  independently confirmed to match existing corpus convention. New
  fields: `judgmentCreditorName`, `courtCaseNumber`,
  `levyingOfficerName`, `orderServiceDate`, `disposableEarningsAmount`,
  `payPeriodType`, `applicableMinimumWage` — deliberately not reusing
  the corpus's existing `officerName`/`officerTitle` fields, since
  those refer to a corporate officer elsewhere in the corpus, not a
  levying officer; reusing them would have created a semantic
  collision.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Wage Garnishment (Earnings Withholding Order) —
  Information Sheet (`wage_garnishment_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Ending employment category. New
  fields: `judgmentCreditorName`, `courtCaseNumber`,
  `levyingOfficerName`, `orderServiceDate`, `disposableEarningsAmount`,
  `payPeriodType`, `applicableMinimumWage`.
- Corpus: 1,323 → 1,331 clauses; 166 → 167 documents.
