# Ending employment, new document: Internal Revenue Code Section 409A Payment-Timing Rules — Information Sheet

## Why this document

First document of wave 89, chosen via a scoping agent's category-gap
survey as the natural companion topic the just-added Golden Parachute
Excise Tax document's own scope did not reach. Read the existing
"Deferred Compensation and Equity Vesting at Termination" and "Golden
Parachute Excise Tax" documents in full — confirmed neither touches
§ 409A payment-timing rules. Grepped the corpus for "409A,"
"nonqualified deferred compensation," "specified employee," and
"separation from service" — zero hits anywhere. Confirmed a real,
non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (declaration/scope, status declaration/
signature) and 5 authority clauses, citing 26 U.S.C. § 409A(d)(1),
(d)(3), (a)(2)(A), (a)(2)(A)(i), (a)(2)(B)(i), (a)(1)(A)(i), (a)(1)(B)(i),
(a)(1)(B)(i)(II), (a)(1)(B)(ii), and 26 CFR § 1.409A-1(b)(4)(i), (b)(4)(i)(A),
(b)(9)(iii), (b)(9)(iii)(A), (b)(9)(iii)(B):

- **`section409a_nonqualified_deferred_compensation_defined`**
  (§ 409A(d)(1), (d)(3)) — the broad, exclusion-based "plan" definition,
  including that a single-person severance agreement can itself be a
  "plan."
- **`section409a_separation_from_service_permitted_timing`**
  (§ 409A(a)(2)(A), (a)(2)(A)(i)) — the six permitted payment-triggering
  events, with separation from service listed first.
- **`section409a_specified_employee_six_month_delay`**
  (§ 409A(a)(2)(B)(i)) — the six-month delay for a "specified employee"
  of a publicly traded corporation.
- **`section409a_regulatory_exemptions_short_term_deferral_and_separation_pay`**
  (26 CFR § 1.409A-1(b)(4)(i), (b)(4)(i)(A), (b)(9)(iii), (b)(9)(iii)(A),
  (b)(9)(iii)(B)) — the "short-term deferral" rule and the involuntary-
  separation/window-program branch of the "separation pay plan"
  exception, both found in Treasury regulations rather than the
  statute itself.
- **`section409a_violation_consequences`** (§ 409A(a)(1)(A)(i),
  (a)(1)(B)(i), (a)(1)(B)(i)(II), (a)(1)(B)(ii)) — accelerated income
  inclusion of all deferred compensation, a 20% additional tax, and
  interest.

## Genuine corrections and findings

- **A genuine finding confirming the task brief's own hint**: § 409A's
  statutory text contains no "short-term deferral" or "separation pay
  plan" terminology at all — both exemptions live entirely in Treasury
  regulations (26 CFR § 1.409A-1). The agent independently fetched and
  verified the regulatory text from Cornell LII's CFR mirror (distinct
  from its U.S. Code mirror), with the same two-User-Agent discipline,
  rather than asserting the exemptions as if they were statutory.
- No corrections were needed to the subsection lettering the task
  brief anticipated — confirmed to match the current fetched text
  exactly.
- Correctly disclosed that "separation from service" itself is left by
  the statute to be "determined by the Secretary" — its operative
  definition lives in regulations the document does not independently
  address, disclosed rather than assumed or invented.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 7 of 11 quotes initially mismatched
on a strict byte-for-byte check, all passing on whitespace-collapsed
comparison. Manual inspection of the source context for each
confirmed a consistent, genuine source-side rendering artifact: Cornell
LII's HTML markup inserts spurious spaces around defined terms (e.g.
"term “ plan ” includes") and around parenthetical/citation
boundaries (e.g. "§ 1.409A-2(b)(2) )" and "requirements : (A)") when
tags are stripped — not a defect in the delivered quotes, which
correctly state the underlying text without that markup artifact. No
correction to the delivered quote text was needed in any of the 7
cases, following this project's established PDF/HTML-extraction-
artifact pattern.

## Honest gap(s) disclosed

§ 409A(d)(2)'s "qualified employer plan" cross-references, § 416(i)'s
full "key employee" definition, § 409A(a)(2)(B)-(C)'s disability and
unforeseeable-emergency sub-definitions, § 409A(a)(3)'s no-
acceleration rule, § 409A(a)(4)'s election-timing rules, and all of
§ 409A(b)'s funding/trust rules are named but not covered. The
regulation's collectively-bargained, foreign, reimbursement/medical,
and limited-dollar-amount separation-pay-plan branches, and the
short-term-deferral rule's delayed-payment carve-out, are named but
not covered. This document does not determine whether any specific
arrangement or payment is in fact subject to § 409A, is a "specified
employee," or qualifies for either exemption.

## Method

Fetched 26 U.S.C. § 409A and 26 CFR § 1.409A-1 from Cornell Law
School's Legal Information Institute (`law.cornell.edu`), each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
14 citation quotes across the 5 authority clauses were checked against
the fetched text; 7 confirmed as exact contiguous substrings
immediately, and 7 (spread across both the statute and the
regulation) initially mismatched due to source-side markup-stripping
whitespace artifacts, all confirmed as genuine extraction artifacts
(not delivered-quote defects) via manual context inspection —
whitespace-collapsed comparison confirms exact textual identity in
every case. No ellipsis-joined quotes were used anywhere.
Independently re-verified during integration review via a
forty-fourth fetch (a distinct curl User-Agent string,
"Groundtruth-44thVerify-Section409A/1.0") of both sources.

## Verification

- Both federal sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a forty-fourth
  independent fetch during integration review; all 14 quotes confirmed
  clean (7 via direct match, 7 via whitespace-normalized match after
  confirming genuine source-side rendering artifacts).
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of § 409A(d),
  § 409A(a)(2), § 409A(a)(1), or 26 CFR § 1.409A-1(b) respectively, and
  that the CFR citations are Treasury regulations distinct from and not
  part of the statutory text; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 14
  populated with proper case/citation identifier strings.
- Six fields reused (`companyName`, 199 prior documents; `employeeName`,
  138; `separationDate`, 9; `planName`, 5; `severanceAmount`, 1;
  `effectiveDate`, 8). One new field required (`specifiedEmployeeStatus`)
  — grepped the corpus and confirmed no existing field fit this
  tax-specific concept.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Internal Revenue Code Section 409A Payment-Timing
  Rules — Information Sheet (`section_409a_payment_timing_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Ending employment
  category. One new field (`specifiedEmployeeStatus`).
- Corpus: 3,028 → 3,035 clauses; 399 → 400 documents. First addition of
  wave 89, and the corpus's first crossing of the 400-document mark.
