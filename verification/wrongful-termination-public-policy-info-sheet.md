# Ending employment, new document: Wrongful Termination in Violation of Public Policy — Information Sheet

## Why this document

The existing `whistleblower_*` clauses cover SOX/Dodd-Frank federal
protections for an employer *policy* document; the existing
Termination Letter's `term_*` clauses cover final pay/COBRA/PTO
mechanics; the existing Severance Agreement's `sev_*` clauses cover
release/OWBPA terms. None address California's public-policy-tort
framing for a termination, or Labor Code §§ 1102.5/98.6, at all —
confirmed via grep of the existing corpus before drafting.

## What this document covers

8 clauses: 2 drafting (declaration/background, closing/signature) and
6 authority clauses:

- **`wrongfulterm_at_will_baseline`** (Labor Code § 2922) — the
  at-will default, with the judicially created public-policy exception
  (Tameny, Gantt, Stevenson) named but explicitly disclosed as
  unverified this session.
- **`wrongfulterm_1102_5_protected_disclosure`** (Labor Code
  § 1102.5(a), (b)) — the disclosure-protection and anti-retaliation
  language.
- **`wrongfulterm_1102_5_refusal_and_scope`** (Labor Code § 1102.5(c),
  (d), (e)) — refusal to participate in unlawful activity, protection
  carried from a former job, and government-employee reports.
- **`wrongfulterm_1102_5_penalty`** (Labor Code § 1102.5(f)(1), (f)(2),
  (j)) — the up-to-$10,000-per-employee civil penalty (Labor
  Commissioner-assessed, not automatic) and attorney's-fee provision.
- **`wrongfulterm_98_6_wage_retaliation`** (Labor Code § 98.6(a),
  (b)(1), (b)(3)) — a second, distinct statutory anchor: wage-
  complaint/Labor Commissioner retaliation, reinstatement and lost
  wages, the 90-day rebuttable presumption, and a separate $10,000
  penalty.
- **`wrongfulterm_tort_characterization`** (Code Civ. Proc. § 335.1) —
  the general two-year personal-injury tort filing deadline, used
  carefully without claiming it's confirmed to govern a Tameny-style
  claim specifically.

## A major, honestly disclosed limitation

CourtListener was unavailable for the entire research session: every
tool attempted (`search`, `call_endpoint` against `clusters` and
`courts`, `get_endpoint_item`) returned `Rate limit exceeded:
125/day`, and a direct fetch to courtlistener.com was separately
blocked by this environment's network egress controls. As a result,
**no clause in this document cites any case law.** Tameny v. Atlantic
Richfield Co., Gantt v. Sentry Insurance, and Stevenson v. Superior
Court are named as commonly-discussed case names for context in two
clauses' `gap` fields, but their holdings, the fundamental-policy test
formulation, and the tort/punitive-damages remedy characterization are
explicitly disclosed as unverified rather than stated as fact or
supported by a fabricated citation. Every authority clause in this
document rests only on California statutes fetched directly and
independently re-verified.

## Honest gaps disclosed

- Whether a Tameny-style public-policy wrongful-termination claim is
  treated by California courts as the kind of personal-injury tort
  covered by the two-year deadline in CCP § 335.1, as opposed to some
  other claim classification, was not verified.
- Whether such a claim carries tort remedies (including emotional-
  distress or punitive damages) distinct from the narrower remedies
  available on a straightforward wage claim was not verified.
- The Tameny holding, and the Gantt/Stevenson "fundamental policy"
  test, are named but not stated as verified fact anywhere in the
  document.

## Method

Fetched Labor Code §§ 2922, 1102.5, 98.6 and Code Civ. Proc. § 335.1
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All 10 quotes programmatically confirmed as exact
substrings of the verified text.

## Verification

- All statutory citations fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`employeeName`, `companyName`, `terminationDate`,
  `dateSigned`, `cityState`) confirmed to match existing Termination
  Letter/Severance Agreement and signature-block conventions exactly.
  New fields: `allegedProtectedActivity`, `allegedPolicyViolated`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Wrongful Termination in Violation of Public Policy —
  Information Sheet (`wrongful_termination_public_policy_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Ending employment
  category. New fields: `allegedProtectedActivity`,
  `allegedPolicyViolated`.
- Corpus: 947 → 955 clauses; 124 → 125 documents. This completes
  wave 18 (4 documents: CCPA Consumer Privacy Policy, Name Change
  Petition, HOA Assessment Lien/Foreclosure, and this document).
