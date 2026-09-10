# During employment, new document: Hospital Nurse-to-Patient Staffing Ratios — Information Sheet

## Wave

Wave 151 (During employment category). This wave continues the even
round-robin cadence started by wave 145 (Hiring / During employment /
Estate Planning / Family Law); waves 147 and 149 covered the same four
categories. This task ran in an isolated git worktree
(`agent-a243f29d7d7c63e9a`) with no coordination with the other three
parallel wave-151 tasks.

## Why this document

Read `data/documents.json` and enumerated all 78 existing "During
employment" documents before choosing a topic. Grepped the corpus
(`data/clauses.json` and `data/documents.json`) for roughly sixty
candidate keywords/citations before settling on a topic. Confirmed the
task brief's own suggested topics are already covered:

- FEHA religious accommodation — `religious_accommodation_info_sheet`.
- Domestic Violence/Sexual Assault/Stalking Victim Leave (Lab. Code
  §230) — `crime_victim_domestic_violence_leave_info_sheet`.
- Organ/bone marrow donor leave (Lab. Code §1508 et seq.) —
  `organ_bone_marrow_donor_leave_info_sheet`.
- Emergency/disaster leave — `workers_rights_in_emergencies_info_sheet`.
- Indoor heat illness (8 CCR §3396) — already folded into
  `heat_illness_prevention_info_sheet` (covers both outdoor §3395 and
  indoor §3396).

Also checked and rejected several other candidates as already covered:
wage-discussion protections (Lab. Code §§232/232.5 —
`wageconf_*` clauses), personnel/payroll record inspection (Lab. Code
§1198.5 — `personnel_records_request` /
`personnel_payroll_record_retention_duration_info_sheet`), polygraph
prohibition, GPS/vehicle-tracking privacy
(`vehicle_tracking_device_privacy_info_sheet`), CalSavers, the
no-rehire-clause ban (Lab. Code §1002.5), and — most notably — the
**California Equal Pay Act / Fair Pay Act (Lab. Code §1197.5)**, which
a keyword search initially suggested was uncovered but which a
document-level check revealed is already a full document,
`california_fair_pay_act_info_sheet` (clause id prefix `fairpay_*`),
filed under the **Hiring** category rather than During employment.
Because the corpus duplication check is about the underlying legal
topic, not the document's assigned category, drafting a second
Equal-Pay-Act document was abandoned before any clause was written.

Settled on **hospital nurse-to-patient staffing ratios**, governed by
Health and Safety Code section 1276.4 — the statute requiring the
State Department of Public Health to adopt minimum, numerical
licensed nurse-to-patient ratios for California hospitals. Confirmed
via keyword grep (`nurse-to-patient`, `staffing ratio`, `patient
ratio`, `1276.4`, `mandatory overtime`) that this specific topic has
zero prior corpus coverage; a few unrelated coincidental hits on
"registered nurse" (e.g., listed as one of thirteen exempt occupations
in an unrelated emergency-conditions document) and on "1276." (an
unrelated case-citation number elsewhere) were confirmed, by reading
the actual clauses, not to be about this statute.

## What this document covers

13 clauses (11 authority + 2 drafting), id-prefixed `nursestaffing_`:

- **`nursestaffing_intro`** (drafting) — scope statement; discloses
  that the document does not state the specific numerical ratios
  themselves (those live in Title 22 CCR regulations adopted under
  this statute, not independently verified here), and does not
  restate the health care worker minimum wage statute, the health
  care worker whistleblower statute, or general Cal/OSHA standards,
  each already covered elsewhere in the corpus.
- **`nursestaffing_dph_mandate`** — the core §1276.4(a) mandate: DPH
  must adopt minimum, numerical ratios by January 1, 2002, by nurse
  classification and hospital unit, for facilities licensed under
  Health & Safety Code §1250(a) or (f); notes the statute's most
  recent amendment (effective June 30, 2025).
- **`nursestaffing_psychiatric_facility_rollout_timeline`** — the
  separate, later July 31, 2027 (or sooner) deadline for §1250(b)
  ("acute psychiatric hospital") facilities, and the January 31, 2026
  emergency-regulation deadline in subdivision (k); includes a
  citation to §1250(b)'s own definition of "acute psychiatric
  hospital" to substantiate that characterization.
- **`nursestaffing_hospital_unit_definition`** — the statutory list of
  covered "hospital unit" types.
- **`nursestaffing_minimum_floor_and_acuity_staffing`** — subd. (b):
  ratios are a floor; additional staff required per a documented
  patient-classification/acuity system.
- **`nursestaffing_critical_care_unit_definition`** — subd. (c).
- **`nursestaffing_orientation_training_requirement`** — subds.
  (d)-(e): written orientation/training policies and the
  competency-demonstration prerequisite before a nurse is assigned to
  a unit.
- **`nursestaffing_rural_hospital_waiver`** — subd. (g): the limited
  waiver for rural general acute care hospitals.
- **`nursestaffing_scope_of_practice_conflict_rule`** — subd. (h).
- **`nursestaffing_no_replace_stricter_existing_ratios`** — subds.
  (i)-(j): new regulations augment (don't replace) existing ICU/
  NICU/OR ratios, and don't replace State Department of State
  Hospitals staff-to-patient ratios.
- **`nursestaffing_psychiatric_unit_special_needs_consideration`** —
  subd. (k)(1): psychiatric-unit regulations must account for
  patients' special needs.
- **`nursestaffing_uc_teaching_hospital_consideration`** — subd. (l):
  UC teaching hospital consideration and Board of Registered Nursing
  coordination.
- **`nursestaffing_ack`** (drafting) — signature/acknowledgment block,
  matching the pattern used in `payday_ack` and
  `heatillness_acknowledgment_signature`.

Fields: `employeeName`, `companyName` (relabeled "Company (hospital)
name" with an adjusted placeholder to fit this document's subject
matter), `dateSigned`, `cityState` — same ids/shape as the existing
`payday_pay_frequency_requirements_info_sheet` document's fields. No
new field ids introduced.

Deliberately **excluded** from scope: the specific numerical ratios
themselves (e.g., 1:2 in an ICU, 1:4 on a medical/surgical floor) —
these are set by regulation under Title 22 of the California Code of
Regulations, not by the statutory text of section 1276.4 itself. An
attempt was made to locate and fetch the current Title 22 §70217 text
from the state's official regulations publisher
(govt.westlaw.com/calregs); the guessed document URL returned a "not
found" page, and rather than guess further or rely on a secondary
source, the specific numerical ratios were left out of this document
entirely, with that gap disclosed in the intro clause. Also excluded:
enforcement/penalty mechanisms for ratio violations (a distinct,
separately-sourced topic — Health & Safety Code citation-and-penalty
provisions — that would need its own independent verification) and
the mandatory-overtime restriction for direct patient care staff
(governed by different statutory sections), left as a candidate for a
future, separate document.

## Independent double-fetch

All sources for this document are California statutes, fetched
directly from `leginfo.legislature.ca.gov` via `curl` through the
environment's proxy, each fetched **twice**, independently, with two
distinct User-Agent strings:

- **Health & Safety Code §1276.4** (primary source; 11 of the
  document's authority clauses draw from it):
  - Fetch 1: UA `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
    Groundtruth-Wave151-Agent-A/1.0` — HTTP 200, 170,511 bytes.
  - Fetch 2: UA `curl/8.0 GroundtruthResearchBot/1.0 (+wave151)` —
    HTTP 200, 170,511 bytes.
  - After stripping HTML tags/entities and collapsing whitespace, the
    two extracted statutory texts were confirmed **identical**
    programmatically (`n1 == n2` → `True`) across the full 7,407
    (raw)/~7,100 (normalized) character section text.
- **Health & Safety Code §1250** (secondary source, used only to
  substantiate the "acute psychiatric hospital" characterization of
  the §1250(b) license category cited in one clause):
  - Fetch 1: UA `Mozilla/5.0 Groundtruth-Wave151-Agent-A/1.0` — HTTP
    200, 176,588 bytes.
  - Fetch 2: UA `curl/8.0 GroundtruthResearchBot/1.0 (+wave151)` —
    HTTP 200, 177,452 bytes (raw byte-size difference is from
    session-specific JS/debug tokens embedded in the page, not the
    statutory text).
  - Confirmed **identical** after HTML-stripping and whitespace
    normalization (`n1b == n2b` → `True`).

No CourtListener/case-law sources were used in this document — every
clause is grounded in the two statutes above, both independently
double-fetched.

## Quote verification

Wrote Python scripts (`quotes_check2.py`, then the more general
`verify_new_clauses.py`) that built a normalized (whitespace-collapsed)
text of each of the two independently-fetched, cross-confirmed
statutory sources, then checked every `citations[].quote` string in
all 11 new authority clauses for exact substring containment in its
cited source's normalized text (routed to the correct source — §1276.4
or §1250 — by matching each citation's `url` field), after applying
the identical whitespace-collapse normalization to each quote.

**Result: all 16 quotes across all 11 authority clauses verified as
exact substrings of their cited, independently-fetched, dual-confirmed
sources.** No genuine defects were found — no quote required
correction after the initial draft. The only normalization applied
uniformly to all quotes and source text was whitespace-collapse
(handling the mid-sentence line-wraps present in the HTML-extracted
statutory text, e.g. a line break falling in the middle of "the
patient care plan / and the ability for self-care"); no `nbsp` or
other formatting artifacts required disclosure beyond this standard,
uniformly-applied normalization.

One drafting-stage correction (caught before any clause was written to
disk, so not a `gap`-disclosed defect): an early draft of the
`nursestaffing_psychiatric_facility_rollout_timeline` clause's third
citation initially reused the §1276.4 URL by default (the helper
function's fallback), which would have been a URL/source mismatch for
a quote actually drawn from §1250(b). This was caught by the
verification script (which routes each quote to its cited source by
URL) before merge, and fixed by passing the correct `URL_1250` value
explicitly for that one citation.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm
current schema shapes, matching the exact patterns used by recent
"During employment" info-sheet documents
(`payday_pay_frequency_requirements_info_sheet`,
`heat_illness_prevention_info_sheet`). `verify_new_clauses.py`
confirmed, before merge:

- Every new authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` and every
  citation has exactly `{case,cite,url,quote}`.
- Every new drafting clause has exactly the keys `{id,title,kind,body}`.
- No duplicate clause ids within the new set.
- The new document's `clauseOrder` references exactly the 13 new
  clause ids.
- Every `{{field}}` placeholder used in the new drafting clauses'
  bodies (`employeeName`, `companyName`, `dateSigned`, `cityState`) is
  declared in the document's `fields` array.

## Corpus-wide validation (post-merge)

After merging, ran `postmerge_check.py`, which confirmed:

- Both `data/clauses.json` and `data/documents.json` still parse as
  valid JSON (confirmed with both Python's `json` module and Node's
  `JSON.parse`).
- No duplicate clause ids across all 5,035 clauses.
- No duplicate document ids across all 621 documents.
- Every `clauseOrder` entry across **all 621 documents** (not just the
  new one) resolves to an existing clause id — zero missing
  references found corpus-wide.
- The new document's `clauseOrder` has exactly 13 entries, and its
  `categories` field is exactly `["During employment"]`.

## Net changes

- New document: Hospital Nurse-to-Patient Staffing Ratios —
  Information Sheet (`hospital_nurse_patient_staffing_ratio_info_sheet`),
  category: During employment.
- 13 new clauses (11 authority + 2 drafting), all under the
  `nursestaffing_*` id prefix.
- No new field ids (reused `employeeName`, `companyName`, `dateSigned`,
  `cityState`, though `companyName`'s label/placeholder were adjusted
  for this document's hospital-employer context).
- Corpus: 5,022 → 5,035 clauses; 620 → 621 documents.
