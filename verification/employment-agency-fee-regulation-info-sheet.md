# Hiring, new document: California Fee-Charging Employment Agency Regulation — Information Sheet

## Why this document

Substitute topic for wave 78's Hiring slot: the originally assigned
topic (pre-offer disability-related inquiry limits under ADA/FEHA) was
found already fully covered in the existing Post-Offer, Pre-Employment
Medical Examination document's `medexam_preoffer_prohibition` clause.

Read the existing `talent_agencies_act_info_sheet` document in full —
confirmed it is scoped entirely to Labor Code § 1700 et seq. (procuring
entertainment-industry engagements for artists), not general
fee-charging employment agency regulation. Confirmed by grep that
"1812.501," "employment agenc[y]," and "fee-charging" turned up only
incidental phrase matches elsewhere in the corpus (FEHA record-
retention clauses naming "employment agency" as a covered category in
passing; one unrelated IRS EIN mention) — no substantive prior
coverage. Confirmed non-duplicative.

**Citation correction**: the research brief's assumed citation, "Labor
Code §§ 1812.501 et seq.," does not exist — Labor Code § 1812.501
returns no section. The actual statute is codified at Civil Code Title
2.91, §§ 1812.500-1812.544 (the "Employment Agency, Employment
Counseling, and Job Listing Services Act"), confirmed directly against
leginfo. All citations in this document use the corrected Civil Code
numbering.

## What this document covers

7 clauses: 2 drafting (declaration/purpose, record/signature) and 5
authority clauses, citing Cal. Civ. Code §§ 1812.501(a)(1)(A), (e),
1812.503(a), (c)(1), 1812.505(a)(1), (b), (c), 1812.506(a), 1812.507(c),
and 1812.508(a), (b)(4):

- **`empagencyfee_definition_and_scope`** (§ 1812.501(a)(1)(A), (e)) —
  the statutory definition of a fee-charging "employment agency" and
  "jobseeker," and the statute's own exclusion of "employment
  counseling services" and "job listing services" from that definition.
- **`empagencyfee_bonding_requirement`** (§ 1812.503(a), (c)(1)) — **a
  key finding**: unlike the Talent Agencies Act's Labor Commissioner
  license, this statute requires a $3,000 surety bond filed with the
  Secretary of State, not a license — a genuinely different regulatory
  mechanism from the corpus's other agency-licensing document.
  Explicitly distinguishes this from the Talent Agencies Act's
  approach.
- **`empagencyfee_fee_disclosure_and_limits`** (§ 1812.505(a)(1), (b),
  (c)) — the jobseeker fee-schedule disclosure requirement, the flat
  no-above-schedule-fee rule, and the no-registration-fee prohibition.
- **`empagencyfee_refund_right`** (§ 1812.506(a)) — **the central
  finding**: if a jobseeker who paid a fee or deposit does not accept
  the arranged employment, the agency must refund on request, and if
  not refunded within 48 hours, must pay an additional sum equal to
  the deposit — a real penalty-doubling mechanism, not a bare refund
  obligation.
- **`empagencyfee_prohibited_practices`** (§ 1812.507(c), § 1812.508(a),
  (b)(4)) — the prohibition on referring a jobseeker to a job the
  agency knows or has reason to know does not exist or is falsely
  described, plus the broader false-advertising/false-representation
  prohibitions.

## Genuine corrections and findings

- **The citation correction itself**: caught that the research brief's
  assumed Labor Code citation does not exist, and independently
  confirmed via leginfo's own table of contents that the actual statute
  is codified in the Civil Code under a different title entirely.
- **The central finding**: confirmed the 48-hour refund-doubling
  penalty precisely from § 1812.506(a)'s own text — the agency's
  exposure is not capped at a bare refund if it misses the 48-hour
  window.
- Confirmed the bonding mechanism (surety bond filed with the Secretary
  of State) is structurally different from the Talent Agencies Act's
  Labor Commissioner licensing scheme — correcting an assumption that
  California's various agency-regulation statutes share one licensing
  model.
- Confirmed §§ 1812.507 and 1812.508 independently prohibit
  overlapping conduct (misrepresenting a job's existence or
  description) — corroborating that this is a settled statutory
  feature rather than an artifact of one section's drafting, and
  disclosed this corroboration explicitly in the gap field.

## Honest gap(s) disclosed

Employment Counseling Services (Chapter 3) and Job Listing Services
(Chapter 4) are statutorily excluded from "employment agency" and not
covered here. The nurses'-registry carve-out (§ 1812.501(d), routed to
a separate chapter) is flagged but not covered. § 1812.505's temporary-
employment fee proration, commission-based fee computation, and
interagency fee-dispute rules, and § 1812.506(b)'s 90-day just-cause/
misconduct refund-reduction rules, are summarized but not quoted.
§ 1812.508's "FEE"/"NO FEE" advertisement-labeling rules, salary-
advertisement formatting rules, and home-health-agency representation
restriction are not covered. The domestic-worker employer-of-record
carve-out (§ 1812.5095) and minors/labor-dispute notice rules
(§ 1812.509) are out of scope.

## Method

Fetched Cal. Civ. Code §§ 1812.501, 1812.503, 1812.505, 1812.506,
1812.507, and 1812.508 from `leginfo.legislature.ca.gov`, each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 11
citation quotes across the 5 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a third fetch
(a distinct curl User-Agent string, "Groundtruth-ThirdVerify-
EmpAgency/1.0") of all six sections — all 11 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean. (An initial draft had briefly misplaced two
  placeholders inside `gap` fields; the agent caught and fixed this
  itself before delivery, confirmed clean on independent re-check.)
- Checked source-independence disclosure logic — each clause correctly
  discloses that its citations draw from a single statutory section (no
  independent corroboration beyond the dual-fetch consistency check),
  except the prohibited-practices clause, which correctly notes that
  §§ 1812.507 and 1812.508 are separate, independently numbered
  sections that happen to prohibit overlapping conduct; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Declaration and Purpose," "Record and
  Signature") do not collide with existing corpus titles.
- Two new fields required (`jobseekerName`, `employmentAgencyName`) —
  checked against the full corpus's existing field ids first, confirmed
  no equivalent field already existed. Two fields (`dateSigned`,
  `cityState`) reused from the existing corpus (147 and 126 prior
  documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California Fee-Charging Employment Agency Regulation —
  Information Sheet (`employment_agency_fee_regulation_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Hiring category. 2 new
  fields.
- Corpus: 2,749 → 2,756 clauses; 361 → 362 documents. Third document of
  wave 78.
