# Family Law, new document: Determination of Income for Guideline Child Support — Information Sheet

## Why this document

First processed item of wave 125 (Family Law slot, 2×2 pattern). The
agent ruled out three candidates via specific section-number greps
before landing here: spousal fiduciary duty (Fam. Code §§721/1100),
DVPA firearm relinquishment (Fam. Code §6389), and the putative-spouse
doctrine (Fam. Code §2251) were all confirmed already substantively
covered. The chosen topic — the statutory rules defining and measuring
a parent's income *before* the guideline formula itself is applied
(Fam. Code §§4058-4060, 4064, 4070-4072) — was confirmed genuinely
open: the existing `child_support_agreement` document covers only the
guideline formula (§4055), departure factors (§4057), and add-on
expenses (§4062), never the definition of "income" itself. Personally
reconfirmed via corpus search: zero prior mentions of §§4058, 4060,
4064, 4070, 4071, or 4072 anywhere in the corpus; the single §4059 hit
is a passing cross-reference to the term "net disposable income"
inside an unrelated departure-factors clause, not substantive coverage
of §4059's own deduction list.

## What this document covers

10 clauses: 2 drafting (declaration, signature/acknowledgment) and 8
authority clauses, citing Fam. Code § 4058(a), (a)(1)-(3), (b)(1)(A)-(B),
(b)(2), (b)(3), (c); § 4059 intro, (a), (b), (e); § 4060; § 4064;
§ 4070; § 4071(a)-(b); § 4072(a):

- **`csincomedet_gross_income_definition`** — the broad, non-exhaustive
  definition of annual gross income.
- **`csincomedet_business_and_benefit_income`** — business proprietorship
  income and discretionary employee/self-employment benefits.
- **`csincomedet_earning_capacity_imputation`** — the mandatory-vs-
  discretionary standard for considering earning capacity instead of
  actual income.
- **`csincomedet_incarceration_not_voluntary_unemployment`** — the
  specific rule that incarceration or involuntary institutionalization
  is not treated as voluntary unemployment.
- **`csincomedet_gross_income_exclusions`** — the statutory exclusions
  from gross income.
- **`csincomedet_net_disposable_income_deductions`** — the enumerated
  deductions computing net disposable income from gross income.
- **`csincomedet_monthly_conversion_and_adjustment`** — the annual-to-
  monthly conversion and the court's adjustment powers for inaccurate
  or seasonal/fluctuating income.
- **`csincomedet_extreme_hardship_deduction`** — the extreme financial
  hardship deduction's enumerated circumstances, cap, and required
  findings.

## Genuine findings

- **A disclosed operative-date finding**: multiple gap fields note
  that §4058 became operative September 1, 2024 (Stats. 2023, Ch.
  213), and that this document does not address or quote the prior
  version of the section.
- **A disclosed, deliberate choice not to independently verify a
  cross-referenced definition**: the incarceration clause's gap
  explicitly discloses that Fam. Code §4007.5(e), cross-referenced for
  the definition of "incarcerated or involuntarily institutionalized,"
  was not independently fetched or verified.
- **A disclosed, deliberate choice to select representative deductions
  rather than the full enumerated list**: the net-disposable-income
  clause's gap explicitly names the additional deduction categories
  (union dues, health insurance premiums, job-related expenses, the
  hardship deduction) it does not quote, rather than presenting the
  three quoted deductions as exhaustive.
- **A disclosed structural relationship to an existing corpus
  document**: the document description explicitly positions this as a
  companion to the existing Child Support Agreement document, which
  covers the guideline formula itself rather than the upstream income
  definitions this document addresses.

## Honest gap(s) disclosed

This document does not catalog every category of receipt a court has
treated as gross income beyond the statute's own non-exhaustive list,
does not define "expenditures required for the operation of the
business," does not restate the full list of circumstances a court
considers when determining earning capacity, does not independently
verify Fam. Code §4007.5(e)'s definition, does not quote §4059's
remaining deduction subdivisions (union dues, health insurance
premiums, job-related expenses) in full, does not describe any
particular adjustment method for inaccurate or seasonal income or
address how the §4060 and §4064 adjustment powers interact when both
apply, and does not quote §4071(c) (Judicial Council hardship tables),
§4072(b) (deduction-duration specification), or §4073 (goals
guidance).

## Method

Fetched Fam. Code §§4058, 4059, 4060, 4064, 4070, 4071, and 4072 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. One transient connection failure on the
second §4072 fetch attempt was resolved with a short backoff retry —
the same known transient relay issue independently encountered and
resolved elsewhere in this project. CourtListener was not needed for
this pure-statutory topic. All 21 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-seventieth fetch (a new distinct curl User-Agent
string, "Groundtruth-170thVerify-ChildSupportIncome/1.0") of all seven
sections — all 21 citation instances confirmed clean on direct
normalized-whitespace substring match; 2 of the 21 required the
standard whitespace-stripped fallback check (the familiar
subdivision-marker-spacing artifact), confirmed benign. The gross-
income definition, the earning-capacity standard, the incarceration
rule, the deduction list, the monthly-conversion mechanism, and the
hardship-deduction framework were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All seven Family Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-seventieth independent fetch during integration
  review; all 21 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `csincomedet_` prefix has zero collisions.
  Independently reconfirmed the corpus's single §4059 hit is a passing
  cross-reference in an unrelated clause, not genuine coverage, and
  reconfirmed the agent's three pivot rationales against the corpus.
- Checked every citation's `case` field for emptiness — all 21
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`parent1Name`,
  `parent2Name`, `childName`, `childDOB`, `countyOfFiling`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Determination of Income for Guideline Child Support —
  Information Sheet (`child_support_income_determination_info_sheet`),
  10 clauses (8 authority + 2 drafting), in the Family Law category.
  No new fields.
- Corpus: 4,086 → 4,096 clauses; 524 → 525 documents. First processed
  item of wave 125.
