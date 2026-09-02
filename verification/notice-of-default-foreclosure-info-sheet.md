# Real Estate, new document: Notice of Default / Nonjudicial Foreclosure Process — Information Sheet

## Why this document

None of the existing Real Estate documents (deeds, leases, HOA
disclosure, mechanics lien, easement, lead-paint, home improvement)
address mortgage/deed-of-trust default or foreclosure. This document
covers California's nonjudicial ("power of sale") foreclosure process
under a deed of trust — the process used for the large majority of
California residential mortgage foreclosures. Informational only,
following the same non-dispositive pattern as the Guardianship and
Conservatorship Petition documents: it does not itself initiate,
halt, or affect any specific foreclosure.

## What this document covers

9 clauses: 2 drafting (intro/scope, closing acknowledgment) and 7
authority clauses:

- **`foreclosure_power_of_sale_vs_judicial`** (Civ. Code § 2924(a)) —
  distinguishes nonjudicial power-of-sale foreclosure from judicial
  foreclosure, drawn directly from the statute's own contrast.
- **`foreclosure_who_may_record_notice_of_default`** (Civ. Code
  § 2924(a)(1), (a)(6)) — who may record a notice of default.
- **`foreclosure_notice_of_default_trigger_and_content`** (Civ. Code
  § 2924(a)(1)(A)-(D)) — the notice of default's required content.
- **`foreclosure_waiting_period_before_notice_of_sale`** (Civ. Code
  § 2924(a)(2), (a)(3)) — the 3-month minimum waiting period.
- **`foreclosure_notice_of_sale_requirements`** (Civ. Code
  § 2924f(b)(1)-(4)) — the notice-of-sale posting, publication, and
  recording requirements (each independently subject to a 20-day
  minimum).
- **`foreclosure_reinstatement_right`** (Civ. Code § 2924c(a)(1), (e))
  — the right to cure the default and reinstate the loan up to 5
  business days before the sale date.
- **`foreclosure_antideficiency_rule`** (Code Civ. Proc. § 580d(a),
  (b)) — the anti-deficiency rule barring a deficiency judgment after
  a nonjudicial trustee's sale, with its guarantor/surety carve-out.

## Genuine corrections / confirmations from research

- All of the task brief's core numeric assumptions were verified as
  accurate rather than needing correction: the 3-month waiting period
  (§ 2924(a)(2)), the 20-day notice-of-sale minimum (§ 2924f(b)), the
  5-business-day reinstatement cutoff (§ 2924c(e)), and the § 580d(a)
  anti-deficiency rule with its § 580d(b) guarantor/surety carve-out.
- A real complication found and handled: Civ. Code § 2924f currently
  exists on leginfo in two chaptered 2025 versions (Stats. 2025, Ch.
  200, Secs. 7 and 8). The agent identified via the statute's own
  amendment annotations which version is currently operative
  (effective Jan. 1, 2026, sunsetting Jan. 1, 2031) and disclosed the
  versioning issue directly in that clause's `gap` field rather than
  silently picking one.
- The task brief's comparative claim that most California residential
  mortgages use a deed of trust with a power-of-sale clause
  specifically because it enables the faster nonjudicial process was
  deliberately NOT asserted as verified fact — only secondary/
  practitioner sources supported it, not primary sources meeting this
  project's double-fetch discipline. The relevant clause grounds its
  definitional distinction directly in § 2924(a)'s own text instead,
  and explicitly flags in its `gap` field that the prevalence claim is
  not made or relied on.

## Method

Fetched Civ. Code §§ 2924, 2924c, 2924f, and Code Civ. Proc. § 580d
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. Every citation quote and every quoted fragment
embedded in clause bodies was checked against the fetched text via an
automated substring check.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause combining citations to different subsections
  of the same statutory section carries an explicit disclosure
  sentence explaining they are quoted together because they jointly
  define one statutory requirement, not because they are independent
  corroborating sources — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`propertyAddress`) confirmed to match the existing Grant
  Deed, Quitclaim Deed, and Mechanics Lien documents' `fields` arrays
  exactly. New fields: `trustorName`, `beneficiaryName`, `trusteeName`,
  `noticeOfDefaultRecordingDate`, `defaultAmount`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Notice of Default / Nonjudicial Foreclosure Process —
  Information Sheet (`notice_of_default_foreclosure_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Real Estate category. New
  fields: `trustorName`, `beneficiaryName`, `trusteeName`,
  `noticeOfDefaultRecordingDate`, `defaultAmount`.
- Corpus: 845 → 854 clauses; 112 → 113 documents.
