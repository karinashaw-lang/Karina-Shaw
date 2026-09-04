# During employment, new document: California Warehouse Quota Law — Information Sheet

## Why this document

Confirmed by grep that "warehouse" had no genuine hits — only
incidental job-title placeholder text ("Warehouse Associate") and a
CASp commercial-lease clause using "private warehouse" as an example
of non-public space. Read the Meal and Rest Break Policy, Reporting
Time Pay, and Employer's Duty to Reimburse Business Expenses documents
in full — none address warehouse-specific quota regulation. Confirmed
non-duplicative. Third of wave 76's four documents.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Cal. Lab. Code §§ 2100(f), (h), (i), 2101, 2102, 2103(b),
2104(a)(1), (b), (c), and 2105:

- **`warehousequota_scope`** (§ 2100(f), (h), (i)) — **a key
  finding**: coverage is limited to a "warehouse distribution center
  employer" meeting BOTH a specific NAICS-code test AND an
  employee-count threshold (100 at a single center or 1,000 statewide,
  aggregating the commonly controlled group) — not every employer
  using a quota system.
- **`warehousequota_disclosure_requirement`** (§ 2101) — the written
  quota disclosure required upon hire or within 30 days, with its
  three required content categories.
- **`warehousequota_meal_rest_bathroom_limit`** (§ 2102, § 2103(b)) —
  the prohibition on a quota that prevents meal/rest compliance or
  bathroom use (including reasonable travel time), and that meal/rest
  breaks aren't counted as productive time unless the employee must
  remain on call.
- **`warehousequota_employee_data_request_right`** (§ 2104(a)(1), (b),
  (c)) — **the central finding**: the employee's data-request right is
  CONDITIONAL, not general — triggered only by a belief that a quota
  caused a meal/rest or OSH violation, with a 21-day employer response
  deadline and no obligation to produce data the employer never
  monitored in the first place.
- **`warehousequota_retaliation_presumption`** (§ 2105) — the 90-day
  rebuttable presumption of retaliation, precisely scoped to two
  specific triggering acts.

## Genuine corrections and findings

- **The central finding**: confirmed the employee's quota/work-speed
  data-request right is conditional (triggered by a specific belief
  about a meal/rest or OSH violation), not a general right to request
  quota data at any time — a precise, easy-to-overclaim distinction
  verified from the statute's own text.
- Confirmed coverage requires both the NAICS-code test AND the
  employee-count threshold — not assumed to cover every warehouse
  employer regardless of size or industry classification.
- Confirmed the statute expressly excludes farm-product warehousing
  (NAICS 493130) from the definition of a covered "warehouse
  distribution center."
- Confirmed the retaliation presumption is rebuttable and precisely
  scoped to a 90-day window and two specific triggering acts — not
  presented as a conclusive or open-ended presumption.
- Confirmed an employer with no obligation to monitor work-speed data
  has no obligation to produce data it never collected.

## Honest gap disclosed

The statute's separate definition of "employee" (§ 2100(d)) is
paraphrased, not quoted. The statute does not specify a particular
form or format for the written quota disclosure beyond its three
required content categories.

## Method

Fetched Cal. Lab. Code §§ 2100-2105 (part of the full §§ 2100-2112
range, confirmed as entirely substantive with no reserved section
numbers) from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each section fetched twice with distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
10 citation quotes across the 5 authority clauses programmatically
confirmed as exact substrings of the confirmed text. Independently
re-verified during integration review via a third fetch (Safari/
macOS User-Agent) of all six cited sections — all 10 quotes confirmed
clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 2100(f)/(h)/(i) and
  § 2104(a)(1)/(b)/(c) each correctly disclosed as subsections of one
  statutory section, not independent of one another; § 2102 vs.
  § 2103(b) correctly disclosed as independent, separately-numbered
  sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`employeeName`, `companyName`) independently confirmed
  to match existing corpus field definitions. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California Warehouse Quota Law — Information Sheet
  (`warehouse_quota_law_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 2,693 → 2,700 clauses; 353 → 354 documents. Third document
  of wave 76.
