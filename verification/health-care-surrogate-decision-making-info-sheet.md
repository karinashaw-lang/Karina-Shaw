# Estate Planning, new document: Health Care Surrogate Decision-Making — Information Sheet

## Why this document

Second processed item of wave 106 (Estate Planning slot). Extensive
scoping across the small estate affidavit, slayer statute, no-contest
clauses, statutory will, pour-over will, Totten trust/POD, TOD deed,
ancillary probate, trust decanting, UTMA, digital assets, disclaimer of
inheritance, certification of trust, and probate homestead/family
allowance all turned up existing coverage in this unusually
comprehensive corpus. The agent confirmed zero prior coverage of
Probate Code §§ 4711-4717's fallback surrogate-decisionmaker scheme via
both document-level and clause-level checks, and distinguished it
explicitly from the existing Advance Health Care Directive document
(executing a written directive naming an agent) and Individual Health
Care Instruction document (recording wishes directly without naming
anyone) — this document instead covers who decides when no such written
instrument, or no effective one, controls.

## What this document covers

10 clauses: 2 drafting (intro/scope, certification) and 8 authority
clauses, citing Prob. Code §§ 4711(a), (b), (d), 4685, 4712(a)-(b),
4714, 4715, 4716(a), and 4717(a):

- **`hcsurrogate_oral_designation`** — the informal, provider-recorded
  oral surrogate designation mechanism.
- **`hcsurrogate_temporary_priority_over_agent`** — the designation's
  time limit and its temporary priority over an agent.
- **`hcsurrogate_statutory_priority_order`** — the three-tier priority
  order among surrogate, agent, and conservator/guardian.
- **`hcsurrogate_provider_selected_surrogate`** — the provider-selection
  process and enumerated eligible-person categories when no recognized
  decisionmaker exists.
- **`hcsurrogate_decision_standard`** — the substituted-judgment/
  best-interest standard a surrogate must apply.
- **`hcsurrogate_patient_disqualification_right`** — a patient's right
  to disqualify a specific person from ever acting as surrogate.
- **`hcsurrogate_domestic_partner_parity`** — a registered domestic
  partner's parity with a spouse's decision-making authority.
- **`hcsurrogate_hospital_emergency_contact_duty`** — a hospital
  emergency department's 24-hour contact-effort duty.

## Genuine findings

- **A significant correction to the research brief's structural
  assumption**: the agent initially assumed California has an
  automatic "next of kin" default authority list, like some other
  states. Reading § 4712(b) directly showed this is wrong — when no
  surrogate/agent/conservator exists, a health care provider or
  facility designee affirmatively *chooses* a surrogate from an
  enumerated list, subject to a qualifying standard (demonstrated
  special care and concern, familiarity with the patient's values,
  availability and willingness). Corrected and stated as a
  provider-selection process rather than an automatic default.
- **A correctly identified time limit and priority nuance**: the agent
  found a § 4711 surrogate designation is not permanent — it expires
  after the course of treatment/stay or 60 days, whichever is shorter —
  and that while it temporarily outranks a named agent during that
  period, it does not revoke the agent's designation, which resumes
  once the surrogate designation expires.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone,
  disclosed explicitly in the two clauses most likely to be affected by
  unreviewed case law (priority order, decision standard).

## Honest gap(s) disclosed

This document does not cover Health & Safety Code § 1418.8's separate,
more procedurally detailed skilled-nursing-facility surrogate
procedure (explicitly disclosed as not researched here). It does not
determine whether any specific person qualifies as a valid
decisionmaker under any of the three categories, does not resolve a
family dispute over who should be provider-selected, does not
determine what a specific patient's wishes or values actually were, and
does not determine whether a specific hospital made reasonable contact
efforts in a specific case. § 4713 (within the 4711-4717 range) was
found to return an empty statute-text div on both fetch passes and was
not cited.

## Method

Fetched Prob. Code §§ 4711, 4712, 4685, 4695, 4714, 4715, 4716, and
4717 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with User-Agent strings rotating across Chrome/Windows,
Chrome/Linux, and Safari/macOS variants against a fixed bot UA for pass
1, confirmed byte-identical after isolating and normalizing the
statute-text div. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 10 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirteenth fetch (a new distinct curl User-Agent
string, "Groundtruth-113thVerify-HCSurrogate/1.0") of all 8 sections —
all 10 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
provider-selection (not automatic next-of-kin) correction and the
60-day/temporary-priority mechanics were both independently
reconfirmed present in the freshly fetched text. A personal spot-check
searched the corpus for "4711," "4712," "4714," "4715," "4716,"
"4717," and "surrogate" and confirmed zero prior coverage of this
specific statutory scheme (the "surrogate" hits found were unrelated —
gestational-surrogacy and conservatorship-petition clauses).

## Verification

- All 8 Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-thirteenth independent fetch during integration
  review; all 10 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or multiple sections (e.g.
  § 4711 and § 4685 together), correctly disclose they are not a single
  merged source; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Certification of Understanding") collides
  with a generic boilerplate title already reused by 4 other drafting
  clauses across the corpus — confirmed as intentional generic-title
  reuse, not a content duplicate. Independently reconfirmed this
  document is distinct from the existing Advance Health Care Directive
  and Individual Health Care Instruction documents.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new fields required — the one field (`patientName`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Health Care Surrogate Decision-Making — Information
  Sheet (`health_care_surrogate_decision_making_info_sheet`), 10
  clauses (8 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 3,531 → 3,541 clauses; 467 → 468 documents. Second processed
  item of wave 106.
