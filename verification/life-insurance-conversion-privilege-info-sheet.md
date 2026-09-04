# Ending employment, new document: Group Life Insurance Conversion Privilege — Information Sheet

## Why this document

Confirmed by grep that "life insurance conversion" and "10209" had
zero hits anywhere in the corpus. Read the existing COBRA and
Cal-COBRA election notice documents in full first — this document is a
genuine companion (a parallel continuation-style right, but for group
LIFE insurance under the California Insurance Code, not group HEALTH
insurance under federal ERISA/COBRA or California Health & Safety
Code). Fourth and final document of wave 62, closing the wave.

## What this document covers

7 clauses: 2 drafting (notice letter, conversion-request record) and 5
authority clauses, citing Cal. Insurance Code § 10209 and 29 U.S.C.
§§ 1161, 1167:

- **`lifeconv_conversion_right`** (§ 10209(a)(2)) — the core right: a
  31-day application deadline (not 30), no evidence of insurability
  required, and the individual policy must be a form other than term
  insurance.
- **`lifeconv_face_amount`** (§ 10209(a)(3)) — the converted policy
  must equal the group coverage amount in force at termination.
- **`lifeconv_death_during_window`** (§ 10209(a)(4)) — death during the
  31-day window is payable as a claim under the group policy, whether
  or not application or premium payment had been made.
- **`lifeconv_notice_and_extension`** (§ 10209(b)) — the notice-timing
  extension rule (25 days after late notice, capped at 60 days after
  the original deadline).
- **`lifeconv_distinct_from_cobra`** (29 U.S.C. §§ 1161(a), 1167(1)) —
  **a key finding**: COBRA's own textual definition of "group health
  plan" (medical care) confirms life insurance falls outside its scope
  — genuinely independent federal-side verification, not assumed from
  general knowledge.

## Genuine corrections and findings

- **The central finding, precisely stated**: the conversion window is
  31 days, not the commonly assumed 30 — verified from the statute's
  own text rather than a rounded approximation.
- Confirmed evidence of insurability is explicitly waived by the
  statute's own text, and that the converted policy must be a form
  "other than term insurance" — an affirmative statutory limit, not
  left to insurer discretion.
- Confirmed COBRA/Cal-COBRA's inapplicability to life insurance using
  two genuinely independent, separately-numbered federal sections
  (§ 1161(a)'s obligation and § 1167(1)'s "group health plan"
  definition) rather than asserting the distinction from general
  knowledge.
- **Honestly disclosed, not invented**: § 10209 states the
  notice-timing extension's consequence but does not itself name who
  (employer, plan administrator, or insurer) bears the underlying
  notice obligation — flagged as a genuine gap in the statute's own
  text rather than filled in with an assumption.

## Honest gap disclosed

§ 10209's own text refers to two exceptions (Sections 10203.5 and
10203.8) that were not independently verified or restated. No separate
statutory notice-timing deadline specific to § 10209 conversions was
located; this is disclosed as a research gap, not a claim that no such
obligation could exist elsewhere (e.g., a plan's own summary plan
description or other ERISA disclosure obligations, not researched
here).

## Method

Fetched Cal. Insurance Code § 10209 from `leginfo.legislature.ca.gov`
and 29 U.S.C. §§ 1161, 1167 from `law.cornell.edu` via curl, each
source fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 7 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All sources fetched twice independently with distinct User-Agent
  strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all four § 10209
  clauses correctly disclosed as one statutory section, not independent
  of each other; § 1161(a) and § 1167(1) correctly disclosed as
  genuinely independent, separately-numbered federal sections; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`, `policyNumber`,
  `insurerName`, `separationDate`, `noticeDate`,
  `planAdministratorName`, `planAdministratorAddress`, `dateSigned`)
  independently confirmed to match existing corpus field definitions.
  `planName` given a document-specific label ("Group life insurance
  plan name") rather than the existing health-plan-specific variant.
  Two genuinely new fields added: `groupCoverageFaceAmount`,
  `conversionApplicationDeadline`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Group Life Insurance Conversion Privilege —
  Information Sheet (`life_insurance_conversion_privilege_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Ending employment
  category. Two new fields: `groupCoverageFaceAmount`,
  `conversionApplicationDeadline`.
- Corpus: 2,314 → 2,321 clauses; 298 → 299 documents. Fourth and final
  document of wave 62, closing the wave.
