# Confidentiality & IP, new document: Electronic Vehicle Tracking Device Privacy — Information Sheet

## Why this document

Second processed item of wave 99 (Confidentiality & IP slot, 2×2 pattern
targeting the corpus's lowest-count categories). A scoping pass
confirmed zero prior coverage of California's electronic vehicle
tracking device statute (Penal Code § 637.7) anywhere in the corpus.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Penal Code §§ 637.7(a)-(f) and 637.2(a), (c):

- **`vehicletracking_general_prohibition`** — the general prohibition on
  using an electronic tracking device to determine a person's location
  or movement.
- **`vehicletracking_device_definition`** — the statutory definition of
  "electronic tracking device," not limited to any particular
  technology.
- **`vehicletracking_business_vehicle_exception`** — the registered-
  owner/lessor/lessee consent exception, including how it applies where
  a business is that owner/lessor/lessee, plus the separate law-
  enforcement exception.
- **`vehicletracking_penalty`** — the misdemeanor penalty and the
  professional-license-revocation consequence for certain licensees.
- **`vehicletracking_civil_remedy`** — the related civil remedy in
  § 637.2 for a violation of the Invasion of Privacy chapter.

## Genuine findings

- **A significant correction to the research brief's own assumed
  framing**: the brief assumed a standalone, separately-worded "business
  entity" exception with its own conditions (e.g., an employee-notice
  proviso). The agent read the actual current text and found no such
  distinct carve-out exists — subdivision (b)'s consent exception is
  worded generically in terms of a vehicle's "registered owner, lessor,
  or lessee," and a business's use of that exception is simply an
  application of the generic consent rule, not a separate business-
  specific provision. Disclosed explicitly rather than describing a
  business exception the statute doesn't actually contain.
- **A disclosed wording asymmetry the statute itself doesn't resolve**:
  subdivision (a)'s prohibition covers tracking "a person," while
  subdivision (b)'s consent exception is worded in terms of a "vehicle's"
  registered owner/lessor/lessee — the agent flagged this mismatch
  rather than silently harmonizing it.
- **A disclosed definitional gap**: the statute doesn't define
  "attached," leaving unclear whether factory-installed vehicle
  telematics (as opposed to an aftermarket device) fall within the
  "electronic tracking device" definition — disclosed as an open
  question, not resolved either way.
- **A disclosed, deliberate choice not to force unverified case law**:
  CourtListener's daily quota (125/day) was exhausted on the agent's
  first lightweight search call. Rather than wait out a multi-hour reset
  or rely on unverified memory, the agent proceeded statute-only and
  disclosed this explicitly in the affected clauses' gap fields.

## Honest gap(s) disclosed

This document does not resolve whether factory-installed vehicle
telematics constitute an "attached" device under the statutory
definition. It does not address tracking through a cell phone
application or other means not involving a device attached to a vehicle
or movable thing. It does not determine whether a particular business's
relationship to a particular vehicle (e.g., under a lease, financed
title, or an affiliated entity's ownership) actually makes that business
the vehicle's "registered owner, lessor, or lessee" for consent purposes.
It does not analyze § 637.2(d)'s noted interaction with California trade-
secret law. It does not state any case law construing subdivision (b) or
"attached," since CourtListener access was exhausted before this topic
could be researched.

## Method

Fetched Penal Code § 637.7 twice from `leginfo.legislature.ca.gov` with
two distinct User-Agent strings (the only byte difference being a per-
session JSF ViewState CSRF token; statutory text byte-identical after
whitespace normalization), and Penal Code § 637.2 once, as a factual
cross-reference needed to state the civil-remedy clause accurately.
CourtListener's daily rate limit was already exhausted on the agent's
first lightweight test call; no case law was used, a disclosed and
legitimate choice. All 7 citation quotes programmatically confirmed by
the research agent as exact, contiguous substrings.

Independently re-verified during integration review via an
eighty-fifth fetch (a new distinct curl User-Agent string,
"Groundtruth-85thVerify-VehicleTracking/1.0") of both sections — all 7
citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- Penal Code §§ 637.7 and 637.2 each fetched independently by the
  research agent with distinct User-Agent strings, plus an
  eighty-fifth independent fetch during integration review; all 7
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 7 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `preparerName`) reused from the existing
  corpus, `preparerName` confirmed present via a corpus-wide field
  lookup before use.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Electronic Vehicle Tracking Device Privacy — Information
  Sheet (`vehicle_tracking_device_privacy_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. No new
  fields.
- Corpus: 3,312 → 3,319 clauses; 439 → 440 documents. Second processed
  item of wave 99.
