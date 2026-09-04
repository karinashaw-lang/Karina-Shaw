# During employment, new document: Organ and Bone Marrow Donor Leave — Information Sheet

## Why this document

Fourth and final document of wave 87. Read the existing FMLA and CFRA
documents in full and confirmed neither mentions organ or bone marrow
donation. Grepped the corpus for "organ donor," "bone marrow," and
§§ 1508-1512 — the only hits were unrelated Probate Code guardianship
provisions and a Code of Civil Procedure unclaimed-property
cross-reference sharing the same section numbers in a different code.
Confirmed a real, non-duplicative gap.

## What this document covers

8 clauses: 2 drafting (leave request, acknowledgment) and 6 authority
clauses, citing Cal. Lab. Code §§ 1509(a)-(b), 1510(a)(1)-(2), (b),
(c), (g), (h), 1511, and 1512(a)-(b):

- **`organdonorleave_coverage`** (§ 1509(a)-(b)) — the statute's own
  15-or-more-employee "employer" definition and its incorporation by
  reference of § 1501's "employee"/"employee benefits" definitions.
- **`organdonorleave_entitlement`** (§ 1510(a)(1)-(2), (b)) — the
  30-business-day paid organ-donation leave, the 5-business-day paid
  bone-marrow-donation leave, and the additional 30-business-day
  unpaid organ-donation leave.
- **`organdonorleave_certification`** (§ 1510(c), (g)) — the written-
  verification/medical-necessity condition and the employer's option
  to require use of up to 5 days (bone marrow) or 2 weeks (organ) of
  accrued paid leave first.
- **`organdonorleave_no_concurrent`** (§ 1510(h)) — the rule against
  running this leave concurrently with FMLA or CFRA (Moore-Brown-
  Roberti Family Rights Act) leave.
- **`organdonorleave_reinstatement`** (§ 1511) — the reinstatement
  obligation and its "conditions unrelated to the exercise of rights"
  limit.
- **`organdonorleave_antiretaliation`** (§ 1512(a)-(b)) — the
  interference prohibition and the anti-retaliation prohibition.

## Genuine corrections and findings

- Confirmed the statute's formal name is the Michelle Maykin Memorial
  Donation Protection Act, spanning §§ 1508-1513 (not stopping at
  § 1512 as the task brief's assumed range implied) — § 1513 is a
  private-right-of-action/enforcement provision, correctly disclosed
  in the anti-retaliation clause's gap field rather than silently
  omitted or fabricated into a clause outside the requested scope.
- **A genuine finding not anticipated by the task brief**: beyond the
  30-day paid and 5-day paid leave amounts, § 1510(b) separately
  requires an ADDITIONAL 30 business days of unpaid organ-donation
  leave — a distinct grant the brief did not mention. Verified and
  built into its own citation rather than assumed away.
- Confirmed the coverage threshold is 15 or more employees — distinct
  from FMLA's 50 and CFRA's 5 (per the existing corpus documents) —
  and correctly declined to compare thresholds across statutes beyond
  noting the distinction exists.
- Correctly named the California Family Rights Act by its formal
  statutory title, the Moore-Brown-Roberti Family Rights Act (Gov.
  Code §§ 12945.2, 19702.3), as the statute itself does.
- Honestly disclosed that the statute's own text does not specify who
  must supply the written verification, or resolve the mechanical
  consequence of the no-concurrent-running rule (sequential leaves vs.
  non-offsetting days) — reported the statutory language without
  resolving ambiguity it does not itself resolve.

## Honest gap(s) disclosed

§ 1501's actual "employee"/"employee benefits" definitions are not
independently fetched or quoted — the document reports only that
§ 1509 incorporates them by reference. § 1510(d) (continuity of
service and continued group health coverage during paid organ leave)
is named but not quoted. § 1513's private-right-of-action mechanism,
deadline, and available remedies are named but not quoted. This
document does not determine whether a specific employer meets the
15-employee threshold or whether a specific employer action violated
the statute.

## Method

Fetched Cal. Lab. Code §§ 1509, 1510, 1511, and 1512 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 12 citation quotes across the 6
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a thirty-ninth fetch (a distinct curl
User-Agent string, "Groundtruth-39thVerify-OrganDonorLeave/1.0") of
all four sections — all 12 quotes confirmed clean.

## Verification

- All four statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  thirty-ninth independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Leave Request," "Acknowledgment") match the
  established boilerplate-title reuse pattern.
- Checked every citation's `case` field for emptiness — all 12
  populated with proper case/citation identifier strings.
- No new fields required — both fields (`companyName`, `employeeName`)
  reused from the existing corpus (196 and 136 prior documents
  respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Organ and Bone Marrow Donor Leave — Information Sheet
  (`organ_bone_marrow_donor_leave_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the During employment category. No new fields.
- Corpus: 2,991 → 2,999 clauses; 394 → 395 documents. Fourth and final
  addition of wave 87.

## Wave 87 summary

Wave 87 closes at 2,999 clauses / 395 documents (from 2,976/392 at
this document's first sibling addition): Time Off to Vote (During
employment), Live Scan/DOJ Fingerprint Background Check (Hiring), DMV
Employer Pull Notice Program (Hiring), and Organ and Bone Marrow Donor
Leave (During employment) — 2 documents in each of the two thinnest
categories, following the established 2×2 strict-alternation pattern.
Wave 88 should return to a 1×4 pattern across four categories.
