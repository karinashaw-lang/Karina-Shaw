# Estate Planning, new document: Probate Referee and the Inventory and Appraisal — Information Sheet

## Why this document

First processed item of wave 131 (Estate Planning slot, 2×2 pattern).
The agent ruled out six candidates via specific section-number greps
before landing here: Prop 19 parent-child transfer exclusion (already
covered, filed under Real Estate), will/nonprobate divorce revocation
(Prob. Code §6122), the anti-lapse statute (§21110), the Multiple-
Party Accounts Law (§5100 et seq.), and trustee acceptance/
certification of trust (a false-positive collision with the Talent
Services Act on "1810"/"1812") were all confirmed already
substantively covered or unrelated. The chosen topic — the general
inventory-and-appraisal procedure and probate-referee appointment
provisions (Prob. Code §8800 et seq., §400 et seq.) — was confirmed
genuinely open: every prior corpus mention of "inventory and
appraisal" or "probate referee" was only a passing reference inside a
different document (small estate real-property affidavit, guardianship
estate accounting, ancillary probate, spousal property petition,
petition to determine succession), never the subject of its own
document. Apparent hits on "8801"/"8802" traced to Family Code
adoption provisions, confirmed unrelated.

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority
clauses, citing Prob. Code §8800(a), (b), §400(a), (b), §401(a),
§8802, §8850(a), (c), §8901 intro/(a), (d), (e), §8902, §8801,
§8960(a)-(b), (c), §8961(a):

- **`probateinv_duty_and_deadline`** — the duty to file a combined
  inventory and appraisal and the four-month deadline.
- **`probateinv_referee_appointment_process`** — how the Controller
  appoints probate referees per county.
- **`probateinv_referee_qualification`** — the qualification exam and
  five-year eligibility window.
- **`probateinv_required_contents`** — the itemized fair-market-value
  listing and community/separate-property characterization
  requirements.
- **`probateinv_cash_items_appraised_by_pr`** — property the personal
  representative appraises directly.
- **`probateinv_referee_appraises_remaining_property`** — delivery to
  the referee and the referee's residual appraisal duty.
- **`probateinv_supplemental_inventory_duty`** — the supplemental-
  filing duty for later-discovered property.
- **`probateinv_referee_compensation`** — the referee's commission
  rate, payment priority, and the no-withholding rule.

## Genuine findings

- **A disclosed, deliberate choice not to independently verify three
  cross-referenced sections**: the compensation clause's gap
  discloses that §8963 (a further commission limit §8961(a) itself
  is "subject to") was not fetched; the referee-appraisal clause's gap
  discloses that §8904 (independent-expert appraisal) was not fetched;
  and the duty-and-deadline clause's gap discloses that Rev. & Tax.
  Code §480's change-in-ownership certification (cross-referenced by
  §8800(d)) was not independently researched — each named specifically
  rather than glossed over.
- **A disclosed textual observation on undefined terms shared across
  two sections**: the supplemental-inventory clause's gap notes that
  §8801 reuses the same undefined "reasonable under the circumstances"
  extension language as §8800(b), and neither section defines it.
- **A disclosed, deliberate choice not to quote a full subdivision**:
  the required-contents clause's gap discloses that §8850(b)'s
  specific-property-category list was not quoted, only noted to exist.
- **No case law was sought at all**: this was a deliberate, disclosed
  choice given the topic's purely statutory/administrative
  character (agency appointment and filing procedure), rather than an
  after-the-fact response to CourtListener's exhausted quota.

## Honest gap(s) disclosed

This document does not address §8800(d)'s change-in-ownership
certification requirement, does not state how many probate referees
any specific county currently has or whether it is in the
fewer-than-three-applicants contingency, does not detail the
qualification exam's frequency or subject matter, does not quote
§8850(b)'s specific-property-category list, does not verify §8904's
independent-expert appraisal provision or §8963's further commission
limit, and does not describe the Judicial Council's prescribed
inventory-and-appraisal form's mechanical layout.

## Method

Fetched Prob. Code §§400, 401, 8800, 8801, 8802, 8850, 8901, 8902,
8960, and 8961 from leginfo.legislature.ca.gov, each fetched twice by
the research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization; two transient
connection-reset failures on §8802 were resolved with backoff retry,
the same known transient-relay issue independently encountered and
resolved elsewhere in this project. No case law was sought, a
deliberate and disclosed choice given the topic's purely
statutory/administrative character. All 16 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-eighty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-188thVerify-ProbateReferee/1.0") of all ten
sections — all 16 citation instances confirmed clean on direct
normalized-whitespace substring match, with no fallback needed. The
filing duty and deadline, the referee-appointment and qualification
provisions, the required contents, the personal-representative-
appraised-property list, the referee's residual appraisal duty, the
supplemental-filing duty, and the compensation provisions were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All ten Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-eighty-eighth independent fetch during integration
  review; all 16 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `probateinv_` prefix has zero collisions. Ran
  section-number-specific greps for §§400, 401, 8800-8802, 8850, 8901,
  8902, 8960, and 8961 across the full corpus; the only hits were
  Family Code §§8801/8802 (independent adoption, unrelated statute)
  and "401" appearing inside "401k" and unrelated U.S. Code
  references — all confirmed false-positive substring collisions, not
  genuine coverage.
- Checked every citation's `case` field for emptiness — all 16
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`decedentName`,
  `personalRepresentativeName`, `courtName`, `countyOfFiling`,
  `courtCaseNumber`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Probate Referee and the Inventory and Appraisal —
  Information Sheet (`probate_referee_inventory_appraisal_info_sheet`),
  10 clauses (8 authority + 2 drafting), in the Estate Planning
  category. No new fields.
- Corpus: 4,269 → 4,279 clauses; 542 → 543 documents. First processed
  item of wave 131.
