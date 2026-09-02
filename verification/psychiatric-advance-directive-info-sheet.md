# Estate Planning, new document: Psychiatric Advance Directive — Information Sheet

## Why this document

The corpus's existing Advance Health Care Directive document covers
general medical decision-making and touches mental health only via
the § 4652 carve-out (an agent can't consent to mental-health-facility
commitment or convulsive treatment). Confirmed by reading all 16
`ahcd_` clauses that this new document adds genuinely distinct depth:
the specific scope of permitted mental-health content, the ECT-
specific consent scheme under a wholly different code, and an honest
disclosure of a real gap in how the two schemes interact.

## What this document covers

8 clauses: 2 drafting (preferences declaration, signature/witness
block) and 6 authority clauses:

- **`psychadvdirective_single_statute`** (Prob. Code § 4600; § 4615)
  — no separate mental health advance directive statute exists.
- **`psychadvdirective_permitted_content`** (§ 4617(a); § 4701) —
  what a directive may address: provider selection, medication
  approval/disapproval.
- **`psychadvdirective_ect_commitment_carveout`** (§ 4652; § 4701) —
  what a directive categorically cannot authorize: commitment or ECT
  consent.
- **`psychadvdirective_ect_separate_procedure`** (Welf. & Inst. Code
  §§ 5325(f), 5326.7(d)) — ECT's wholly separate LPS Act consent
  scheme.
- **`psychadvdirective_capacity_cross_reference`** (§ 4658) — the same
  capacity rule as the general AHCD, cross-referenced rather than
  duplicated.
- **`psychadvdirective_conditional_effective_date`** (§ 4670) —
  instructions can be conditioned on a future circumstance.

## Genuine corrections and findings

- **A significant correction to the original framing**: no separate
  "Mental Health Advance Directives" statutory part exists — verified
  via leginfo's own table of contents that Division 4.7 (Health Care
  Decisions Law, Prob. Code §§ 4600-4806) has only five parts
  (Definitions/General, Uniform Health Care Decisions Act, Judicial
  Proceedings, Resuscitative Measures Request, Registry), none titled
  "Mental Health." Mental health treatment is simply one recognized
  subject within the general AHCD framework, confirmed via § 4615
  ("health care" includes physical or mental) and § 4617(a)(2)
  (medication programs "including mental health conditions").
- Confirmed the directive's permitted content (provider selection,
  medication approval/disapproval) and its categorical exclusion of
  commitment/ECT consent under § 4652.
- Confirmed ECT is governed by a wholly separate Welfare & Institutions
  Code (LPS Act) scheme requiring time-limited, revocable,
  contemporaneous written consent — not something an advance directive
  can substitute for.
- Confirmed capacity determination uses the same rule as the general
  AHCD (§ 4658) — no mental-health-specific variant exists.

## Honest gap disclosed

Could not find any statute stating how a mental-health advance
directive's ECT-related wishes are actually taken into account within
the separate LPS Act civil-commitment/involuntary-treatment consent
procedure. Confirmed the two schemes are independent (Article 7 of
the LPS Act never mentions "advance directive," "advance health care
directive," or "power of attorney" anywhere in its text) and that
Prob. Code § 4652 excludes ECT/commitment consent from the AHCD
framework entirely, but the practical interaction (e.g., whether an
advance ECT preference is given any weight by the two-physician review
committee or the superior court under § 5326.7) was not verified and
is disclosed as an open gap rather than asserted or guessed.

## Method

Fetched Prob. Code §§ 4600, 4615, 4617, 4652, 4658, 4670, and 4701,
and Welf. & Inst. Code §§ 5325 and 5326.7, directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical after HTML-tag stripping and whitespace normalization. All
citation quotes programmatically confirmed as exact substrings of the
fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`patientName`, `agentName`, `alternateAgentName`)
  independently confirmed to match existing corpus convention (Advance
  Health Care Directive, HIPAA Authorization documents). New fields:
  `preferredMedicationWishes`, `treatmentFacilityWishes`,
  `hospitalizationWishes`, `ectWishes` (labeled explicitly as
  informational only, not binding consent, consistent with the § 4652
  carve-out), `additionalMentalHealthWishes`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Psychiatric Advance Directive — Information Sheet
  (`psychiatric_advance_directive_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Estate Planning category. New fields:
  `preferredMedicationWishes`, `treatmentFacilityWishes`,
  `hospitalizationWishes`, `ectWishes`, `additionalMentalHealthWishes`.
- Corpus: 1,681 → 1,689 clauses; 213 → 214 documents. Completes wave
  41 (Kin Care, Personnel and Payroll Record Retention Duration,
  Psychiatric Advance Directive; Volunteer vs. Employee Classification
  still pending).
