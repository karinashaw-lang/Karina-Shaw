# Hiring, new document: Volunteer vs. Employee Classification — Information Sheet

## Why this document

The corpus's existing Unpaid Internship Compliance document covers
interns, and a single existing clause
(`internship_public_agency_volunteers`) touches volunteers only in the
public-agency context. Neither addresses the private-sector/nonprofit
volunteer question: when is a person genuinely a "volunteer" rather
than an employee entitled to minimum wage and overtime? Confirmed as
a genuine gap by reading every existing `internship_`/`volunteer`
clause before drafting.

## What this document covers

8 clauses: 2 drafting (role declaration, signature/acknowledgment) and
6 authority clauses:

- **`volunteerclass_flsa_employ_definition`** (29 U.S.C. § 203(g);
  *Walling v. Portland Terminal Co.*, 330 U.S. 148 (1947)) — the FLSA's
  broad "employ" definition and the judicially recognized volunteer
  exception carved out of it.
- **`volunteerclass_key_factors`** (29 C.F.R. § 553.101(b)-(d); U.S.
  Dep't of Labor Field Operations Handbook Ch. 10, § 10b03) —
  considerations distinguishing a volunteer from an employee.
- **`volunteerclass_forprofit_limits`** (U.S. Dep't of Labor elaws
  FLSA Advisor, "Volunteers") — for-profit employers and volunteer
  status.
- **`volunteerclass_nonprofit_not_exempt`** (*Klick v. Cenikor
  Foundation*, 79 F.4th 433 (5th Cir. 2023)) — a charitable purpose
  alone does not create volunteer status.
- **`volunteerclass_california_standard`** (California DLSE,
  Enforcement Policies and Interpretations Manual § 43.6.7,
  "Volunteers") — California substantially follows the federal
  volunteer framework.
- **`volunteerclass_nominal_benefits`** (29 C.F.R. § 553.106(a),
  (e), (f)) — nominal fees, benefits, and expense reimbursement for
  volunteers.

## Genuine corrections and findings

- Confirmed the FLSA's "employ" definition (§ 203(g): "to suffer or
  permit to work") is genuinely silent on volunteers — the volunteer
  exception is entirely judicial in origin, tracing to *Walling v.
  Portland Terminal Co.* (1947), which held railroad trainees who
  worked "for their own advantage" and displaced no regular employees
  were not "employees" under the Act.
- **A distinctness correction from the existing corpus clause**:
  independently confirmed via the title and text of 29 C.F.R. Part 553
  itself that both § 553.101 and § 553.106 are captioned "Application
  of the Fair Labor Standards Act to Employees of State and Local
  Governments" — i.e., public-agency-only regulations. This document's
  private-sector/nonprofit clauses cite the same regulatory sections
  as the existing `internship_public_agency_volunteers` clause but for
  a materially different, non-duplicative purpose: illustrating the
  DOL's general "volunteer" reasoning (economic reality, no
  expectation of compensation, no displacement of paid staff) as
  persuasive background for the private-sector question, not as
  binding public-sector law — disclosed explicitly in each clause's
  `gap` field rather than presented as directly on-point private-sector
  authority.
- **A significant, non-obvious finding**: the DOL's own elaws FLSA
  Advisor states that for-profit private employers cannot use
  "volunteers" at all — an employee of a for-profit business can never
  be an unpaid volunteer for that same employer under the FLSA,
  regardless of the work's charitable character. This corrected an
  original assumption that "private-sector and nonprofit" volunteer
  status could be treated as one continuous framework; the corpus now
  states the for-profit/nonprofit line as a categorical rule in its
  own dedicated clause rather than blending it into the general
  factors clause.
- Confirmed via *Klick v. Cenikor Foundation* (5th Cir. 2023) that a
  nonprofit's charitable mission does not by itself exempt it from
  employee-status analysis — the same economic-realities inquiry
  applies regardless of the organization's tax status.
- Confirmed California's DLSE Enforcement Manual § 43.6.7 states no
  separate statutory test for volunteer status — it substantially
  adopts the federal framework, disclosed as a comparison to the
  federal clauses rather than an independent California test.
- Confirmed 29 C.F.R. § 553.106(a), (e), (f) permits nominal fees,
  benefits, and expense reimbursement without destroying volunteer
  status, but found **no bright-line dollar figure** in the
  regulation itself — § 553.106(f) expressly calls for a fact-specific
  "economic realities" analysis rather than a fixed threshold,
  disclosed honestly rather than inventing a number.
- An originally-considered fourth factor ("work of a type typically
  associated with volunteer activity") could not be traced to a
  citable primary-source formulation distinct from the § 553.101
  factors already covered, and was not included as a separate,
  independently sourced factor.

## Honest gaps disclosed

- The § 553.101/§ 553.106 regulations are public-agency-specific by
  their own Part 553 caption; each clause that draws on them for
  private-sector/nonprofit reasoning discloses this scope limitation
  explicitly rather than presenting the regulation as directly
  governing private employers.
- No bright-line dollar figure or percentage-of-wage threshold for
  "nominal" fees/benefits exists in the regulation — disclosed as an
  open, fact-specific standard rather than a fixed number.

## Method

Fetched 29 U.S.C. § 203(g) and 29 C.F.R. §§ 553.101 and 553.106
directly from `law.cornell.edu`, and *Walling v. Portland Terminal
Co.* and *Klick v. Cenikor Foundation* from CourtListener, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical (statutory/regulatory text) or
consistent (case text). The DOL Field Operations Handbook and elaws
FLSA Advisor pages, and the California DLSE Enforcement Manual, were
fetched directly from their respective government sources and
re-fetched a second time to confirm stability. All citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents
  or independent methods; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the two
  `volunteerclass_forprofit_limits` citations correctly disclosed as
  the same source (one elaws Advisor page), not independent; all other
  authority clauses draw on genuinely separate sources — correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  One accepted generic title reuse ("Signature and Acknowledgment"),
  consistent with the corpus-wide pattern of reusing generic drafting
  titles.
- Field names (`companyName`, `supervisorName`, `startDate`,
  `endDate`, `hoursPerWeek`, `dateSigned`, `cityState`) independently
  confirmed to match existing corpus convention (mostly reused from
  the Unpaid Internship Compliance document). One new field:
  `volunteerName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus (1,697 clauses / 215 documents) — clean.

## Net changes

- New document: Volunteer vs. Employee Classification — Information
  Sheet (`volunteer_employee_classification_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. New field:
  `volunteerName`.
- Corpus: 1,689 → 1,697 clauses; 214 → 215 documents. Completes wave
  41 (Kin Care, Personnel and Payroll Record Retention Duration,
  Psychiatric Advance Directive, Volunteer vs. Employee
  Classification).
