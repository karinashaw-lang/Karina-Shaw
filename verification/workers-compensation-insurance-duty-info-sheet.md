# Hiring, new document: Employer's Duty to Secure Workers' Compensation Insurance — Information Sheet

## Why this document

Confirmed by grep that "3700" and "workers' compensation insurance
requirement" had zero genuine hits anywhere in the corpus. Read the
existing Workers' Compensation Claim Notice and Workers' Compensation
Retaliation (§ 132a) documents in full — confirmed this is a genuine,
non-duplicative companion: those cover the claims process and
retaliation for filing a claim; this document covers the employer's
threshold duty to carry coverage in the first place. Second of wave
68's four documents.

## What this document covers

6 clauses: 2 drafting (purpose, signature/certification) and 4
authority clauses, citing Cal. Labor Code §§ 3700, 3700(a)-(b),
3700.5(a)-(b), 3710.1, 3706, 3707, and 3708:

- **`wcinsurance_mandatory_duty`** (§ 3700, § 3700(a)-(b)) — the
  mandatory coverage-securing duty and its two private-employer
  mechanisms (private insurance, self-insurance certificate). **A key
  finding**: the statute's own text does not name the State
  Compensation Insurance Fund, contrary to popular understanding —
  the agent declined to assert a mechanism the fetched text doesn't
  state.
- **`wcinsurance_criminal_penalty`** (§ 3700.5(a)-(b)) — the
  misdemeanor penalty structure with its knowledge requirement and
  escalating fine minimums ($10,000 first offense, $50,000 repeat).
- **`wcinsurance_stop_order_authority`** (§ 3710.1) — the Director of
  Industrial Relations' immediate stop-order authority and the
  protest/hearing/writ-of-mandate procedure. **A key finding**:
  correctly identified this authority as the Director's, not the
  Labor Commissioner's — a distinct DIR official.
- **`wcinsurance_employee_civil_remedy`** (§§ 3706, 3707, 3708) — the
  injured employee's civil action with the exclusive-remedy bar
  lifted, attachment rights, and the presumption of employer
  negligence with common-law defenses stripped.

## Genuine corrections and findings

- **The central finding**: confirmed § 3700's own text lists only
  private insurance and a self-insurance certificate as the two
  private-employer mechanisms — it does not name the State
  Compensation Insurance Fund specifically, despite that fund's
  prominence in general public understanding of California workers'
  comp. The clause states only what the fetched text supports.
- Confirmed the stop-order authority in § 3710.1 belongs to the
  Director of Industrial Relations, not the Labor Commissioner — two
  distinct DIR officials with different enforcement functions.
- Confirmed § 3708's presumption-of-negligence and stripped-defenses
  rule contains its own further cross-reference (to § 3351(d) and
  § 3715(b)) that the clause honestly declines to resolve, rather than
  assuming those provisions' scope.
- Confirmed §§ 3701, 3702, and 3702.5 (initially assigned for research)
  are self-insurer administrative/security-deposit provisions, not
  part of the core duty/penalty/remedy structure — the agent
  correctly redirected to §§ 3706-3708 and § 3710.1 instead of forcing
  citations to less relevant sections.
- Confirmed § 3708.1 does not exist as a real section (empty fetch
  result) — omitted rather than guessed at.

## Honest gap disclosed

Section 3700(c)'s public-entity self-insurance pathway was read but
only summarized, not quoted, since it's not the general private-
employer rule this document centers on. Section 3700.5(c)'s
investigation-costs provision, and § 3710.1's exact post-hearing
findings language, were summarized rather than separately quoted.
Section 3708's cross-referenced exceptions (§ 3351(d), § 3715(b)) were
not independently fetched or verified — flagged as requiring separate
research to know whether they apply to a particular employment
relationship.

## Method

Fetched Cal. Labor Code §§ 3700, 3700.5, 3706, 3707, 3708, and 3710.1
from `leginfo.legislature.ca.gov` via curl (through the sandboxed
proxy), each section fetched twice with distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 8
citation quotes across the 4 authority clauses programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All six statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 3700(a)/(b)
  pair and § 3700.5(a)/(b) pair each correctly disclosed as one
  statutory section; §§ 3706, 3707, and 3708 correctly disclosed as
  three separately-numbered sections that nonetheless operate together
  as one linked remedy scheme, not fully independent in effect;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused generic drafting title "Purpose of This Information Sheet"
  matches this corpus's established cross-document pattern, not a
  substantive duplicate.
- Field names (`companyName`, `employeeName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Employer's Duty to Secure Workers' Compensation
  Insurance — Information Sheet
  (`workers_compensation_insurance_duty_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,477 → 2,483 clauses; 320 → 321 documents. Second document
  of wave 68.
