# During employment, new document: Injury and Illness Prevention Program (IIPP) — Information Sheet

## Why this document

Confirmed by grep that "injury and illness prevention" and "IIPP" had
zero hits anywhere in the corpus — the foundational California
workplace-safety-program requirement nearly every employer is subject
to had no coverage at all.

## What this document covers

8 clauses: 2 drafting (declaration/scope, acknowledgment of receipt)
and 6 authority clauses:

- **`iipp_statutory_duty_and_elements`** (Lab. Code § 6401.7(a),
  (e)(1)) — the statutory duty and its own enumerated program
  elements.
- **`iipp_program_administrator`** (§ 6401.7(a)(1); 8 CCR § 3203(a)(1))
  — identifying who has authority and responsibility for the program.
- **`iipp_hazard_evaluation_and_correction`** (8 CCR § 3203(a)(4),
  (a)(4)(B), (a)(6)(B); § 6401.7(b)) — hazard evaluation triggers and
  correction requirements.
- **`iipp_training_requirements`** (§ 6401.7(c); 8 CCR § 3203(a)(7),
  (a)(7)(F)) — when employee training is required.
- **`iipp_recordkeeping_and_employee_access`** (§ 6401.7(d); 8 CCR
  § 3203(b)(1)-(2), (a)(8)(B)(1)) — recordkeeping duration and
  employee access to the program.
- **`iipp_enforcement_and_safe_harbor`** (§ 6401.7(j)(1)) —
  enforcement and the model-program safe harbor.

## Genuine corrections and findings

- Confirmed the statute itself is not a bare delegation to Cal/OSHA —
  § 6401.7(a) enumerates the program's required elements directly, and
  separately directs the standards board to adopt an implementing
  regulation "consistent with" those subdivisions, rather than leaving
  the entire content to the regulation.
- **A significant correction to a natural assumption**: the regulation
  requires "scheduled periodic inspections" but states no fixed
  numeric interval (no annual/quarterly requirement) — inspections are
  trigger-based (program establishment, new hazard-representing
  substances/processes/equipment, newly recognized hazards), with the
  specific schedule left to the employer's own program.
- Confirmed a genuine wording difference between the statute
  ("responsible for implementing") and the regulation ("authority and
  responsibility") for identifying the program's administrator —
  neither requires a specific job title.
- Confirmed the regulation adds a supervisor-specific training
  requirement (§ 3203(a)(7)(F)) with no counterpart in the statutory
  text of § 6401.7(c), which speaks only of "employees."
- **A disciplined omission**: neither § 6401.7 nor § 3203 states a
  specific penalty dollar amount. § 6401.7(j)(1) confirms enforcement
  occurs via "citation" and "civil penalty" but presupposes a separate
  Cal/OSHA general citation/penalty framework found elsewhere in the
  Labor Code — that separate framework was not independently fetched
  or verified, so no citation is offered for it, correctly omitted
  rather than fabricated.

## Honest gap disclosed

The regulation's further exceptions for employers with fewer than 10
or fewer than 20 employees (which shorten or modify some recordkeeping
obligations) were not independently verified and are not summarized.

## Method

Fetched Lab. Code § 6401.7 from `leginfo.legislature.ca.gov` and 8 Cal.
Code Regs. § 3203 from `dir.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
both times. All 16 citation quotes programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same statute or
  regulation versus the genuinely independent statute/regulation pair;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic title reuse ("Acknowledgment of Receipt") —
  consistent with the corpus-wide pattern.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. New field:
  `programAdministratorName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Injury and Illness Prevention Program (IIPP) —
  Information Sheet (`injury_illness_prevention_program_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the During employment
  category. New field: `programAdministratorName`.
- Corpus: 1,831 → 1,839 clauses; 234 → 235 documents. Completes wave
  46 (California Art Preservation Act, Willful Misclassification
  Penalties, ICRAA, Injury and Illness Prevention Program).
