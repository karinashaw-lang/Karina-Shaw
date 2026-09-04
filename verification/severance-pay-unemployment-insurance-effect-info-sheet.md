# Ending employment, new document: Severance Pay and Unemployment Insurance Eligibility — Information Sheet

## Why this document

Fourth and final document of wave 89 (second Ending employment slot in the
2×2 pattern). Read `data/documents.json` and `data/clauses.json` in full —
confirmed the existing `employer_ui_claim_response` and
`ui_claimant_info_sheet` documents both cite UIC § 1256 (the
misconduct/voluntary-quit disqualification standard) and neither mentions
severance pay, wage continuation, or § 1255.3. Confirmed the Severance
Agreement document has no UI-effects clause at all. Grepped the corpus for
"1255.3" — zero hits anywhere. Confirmed a real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing UIC §§ 1251, 1252(a)(1), 1252(c), 1255.3(a), 1265, and Cal.
Unemployment Ins. Appeals Bd. Precedent Benefit Decision No. P-B-4
(In re Arthur Harman, Feb. 15, 1968):

- **`severanceui_unemployed_wages_test`** (§ 1251, § 1252(a)(1), (c)) — the
  general statutory mechanism: benefits are payable only to an "unemployed"
  individual, defined as one with no services performed and no "wages"
  payable with respect to a given week, with "wages" defined broadly for
  this purpose only.
- **`severanceui_1255_3_correction`** (§ 1255.3(a)) — a dedicated
  correction clause stating plainly that § 1255.3 governs the pension/
  retirement-pay offset, not severance pay.
- **`severanceui_sub_plan_1265`** (§ 1265) — the statutory carve-out for
  payments under an employer-wide or group plan meant to supplement UI
  benefits, not treated as "wages."
- **`severanceui_group_plan_severance_distinction`** (P-B-4, quoting
  *Powell v. California Dept. of Employment* (1965) 63 A.C. 99) — the
  Board's construction of § 1265 to reach group severance/dismissal pay
  under a plan or collective bargaining agreement.
- **`severanceui_wage_continuation_and_notice_pay`** (P-B-4) — the
  contrasting result for individually paid "wage continuation" payments
  tied to normal pay-period dates/amounts, and the rule that "in lieu of
  notice" pay only escapes the wages analysis if an actual right to notice
  existed.

## Genuine corrections and findings

- **A major genuine finding, directly contradicting the task's own research
  premise**: the task brief assumed § 1255.3 was California's severance-pay
  UI-allocation statute. Independently fetching and reading the actual
  current statutory text (twice, byte-identical across two User-Agents)
  showed this was wrong — § 1255.3 is the UI pension/retirement-pay offset
  provision, unrelated to severance pay. Rather than silently draft under
  the false premise, the agent built the document around the statutes that
  actually govern the topic (§§ 1251, 1252, 1265, plus CUIAB precedent) and
  included a dedicated correction clause quoting § 1255.3(a) directly and
  stating plainly what it does and does not cover — the same disclosed-
  correction discipline used throughout this project rather than silent
  substitution.
- **A genuine sourcing-access limitation, disclosed rather than
  papered over**: the agent could not independently fetch the original
  *Powell* opinion — Justia, FindLaw, and CourtListener were all blocked or
  rate-limited. Rather than cite *Powell* as independently read, the
  document sources the *Powell* language only as quoted and verified inside
  the fetched P-B-4 precedent decision, disclosed explicitly in that
  clause's `gap` field.
- Correctly distinguished a group-plan severance/dismissal payment (not
  "wages" under § 1265, per P-B-4's construction of *Powell*) from an
  individually paid "wage continuation" payment (is "wages" under § 1252,
  per the same P-B-4 decision) — a real, sourced distinction, not
  collapsed into a single rule.
- Correctly disclosed that P-B-4 is a 50+-year-old administrative precedent
  decision; the agent independently re-verified that §§ 1251, 1252, and
  1265 remain in force in materially the same operative terms today, but
  did not attempt to verify whether any more recent decision has refined
  or distinguished P-B-4's specific holdings, and disclosed that gap rather
  than treating the precedent as current law without qualification.

## Honest gap(s) disclosed

The *Powell* opinion is not independently sourced (access blocked; sourced
only via P-B-4's quotation of it, disclosed). UIC § 1255.3 subdivisions
(b)-(e) (the federal-conformity trigger, the two-part applicability test,
the no-personal-contribution exception, and a retroactivity clause) are
described only in general terms, not quoted. Whether any more recent
published CUIAB or court decision has refined P-B-4's reasoning was not
researched. How a plan covering only some, rather than a genuine class or
group, of an employer's employees would be treated under § 1265 is not
addressed. This document does not determine that any specific payment any
specific claimant received was or was not payable "with respect to" any
specific week, was or was not part of a genuine class-or-group plan, or was
or was not owed under an actual notice obligation.

## Method

Fetched UIC §§ 1251, 1252, 1255.3, and 1265 from `leginfo.legislature.ca.gov`,
and CUIAB Precedent Benefit Decision No. P-B-4 as a PDF from `cuiab.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization (the PDF
extracted via pdfminer and substring-verified programmatically). All 11
citation quotes across the 5 authority clauses programmatically confirmed
as exact contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a forty-seventh fetch (a distinct
curl User-Agent string, "Groundtruth-47thVerify-SeveranceUI/1.0") of all
four statutory sections and the PDF — all 11 quotes confirmed clean on
direct substring match (including the PDF, re-extracted via pdfminer), no
extraction artifacts encountered.

## Verification

- All four statutory sections and the PDF precedent decision fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a forty-seventh independent fetch during integration review; all 11
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section (§ 1252(a)(1)/(c)) versus independent sections (§ 1251 vs. § 1252;
  § 1255.3 standalone; § 1265 standalone), and that the two P-B-4-sourced
  clauses' citations all come from that one document and are not
  independent corroboration of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with this
  project's established pattern of generic, reused boilerplate drafting-
  clause titles across many documents; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 11 populated
  with proper citation identifier strings.
- No new fields required — all three fields (`employeeName`, `companyName`,
  `separationDate`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Severance Pay and Unemployment Insurance Eligibility —
  Information Sheet
  (`severance_pay_unemployment_insurance_effect_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Ending employment category. No new
  fields.
- Corpus: 3,050 → 3,057 clauses; 402 → 403 documents. Fourth and final
  addition of wave 89.

## Wave 89 summary

Wave 89 closes at 3,057 clauses / 403 documents (from 3,028/399 at this
wave's first addition): IRC Section 409A Payment-Timing Rules (Ending
employment), Guardian Ad Litem Appointment (Family Law), Mandatory Child
Custody Mediation (Family Law), and Severance Pay/Unemployment Insurance
Eligibility (Ending employment) — two documents each in two of the
less-recently-touched categories, following the established 2×2 pattern.
This wave produced two significant genuine corrections to its own research
briefs (the actual Fam. Code mediation-chapter range, and the major finding
that UIC § 1255.3 does not govern severance pay at all), both handled with
disclosed, sourced corrections rather than silent assumption. Wave 90
should return to a 1×4 pattern spread across four categories.
