# Real Estate, new document: Accessory Dwelling Unit / Junior Accessory Dwelling Unit Ministerial Approval — Information Sheet

## Why this document

Fourth and final document of wave 83. Grepped the corpus for
"65852.2," "65852.22," "accessory dwelling unit," and "ADU"/"JADU."
The only hits were inside the `justcause_rent_cap_exemptions` and
`justcause_eviction_exemptions` clauses (Civ. Code §§ 1947.12(d)(5),
1946.2(e)(5)), which mention "accessory dwelling unit" only as an
example unit type within an owner-occupied-duplex exemption list, with
no substantive ADU-approval-law content. Read the existing Home
Improvement Contract document's 8 clauses in full — confirmed it
covers unrelated CSLL contractor-contract mechanics (Bus. & Prof. Code
§§ 7159 et seq.). Confirmed non-duplicative.

## What this document covers

7 clauses: 1 drafting (project identification) and 6 authority
clauses, citing Cal. Gov. Code §§ 66313(d), 66314(b)(1), (d)(4)-(5),
(d)(10)-(11), 66315, 66317(a)(1)-(3), (c), 66321(b)(2), (b)(4)(A),
66322(a)(1), and 66333(b), (c), (f):

- **`adu_ministerial_approval_and_timeline`** (§ 66317) — the
  ministerial-review mandate (no discretionary review or hearing), the
  15-business-day completeness-determination deadline, the 60-day
  approve-or-deny deadline with deemed-approval on a missed deadline,
  and the bar on any non-ADU-ordinance basis for delay or denial.
- **`adu_ordinance_size_and_lotsize_limits`** (§§ 66314, 66321) — the
  statutory floors and ceilings a local ordinance's own standards must
  respect: no minimum-lot-size requirement at all; a maximum-size floor
  of 850/1,000 sq. ft.; a detached-ADU cap of 1,200 sq. ft. and an
  attached-ADU cap of 50% of the primary dwelling; and height floors of
  16/18/25 feet depending on circumstance.
- **`adu_parking_limits`** (§§ 66322, 66314) — the circumstances in
  which no parking requirement may be imposed at all (near transit, in
  historic districts, etc.), the one-space-per-unit-or-bedroom cap when
  parking can be required, and the bar on requiring replacement of
  parking spaces converted to an ADU.
- **`adu_no_owner_occupancy_requirement`** (§ 66315) — **a central
  finding**: no owner-occupancy requirement of any kind may be imposed
  on an ADU as such — only a 30-day-minimum-rental-term condition is
  permitted — genuinely distinct from the JADU rule below.
- **`adu_jadu_size_and_shared_sanitation`** (§§ 66313(d), 66333(f)) —
  the JADU's 500-sq.-ft. size cap, its option to share or not share
  sanitation facilities, and the separate-entrance/efficiency-kitchen
  requirements.
- **`adu_jadu_conditional_owner_occupancy`** (§ 66333(b), (c)) — the
  JADU's conditional owner-occupancy rule: required only if sanitation
  facilities are shared; not required for separate sanitation or a
  governmental/land-trust/housing-organization owner; plus the
  deed-restriction and minimum-rental-term requirements.

## Genuine corrections and findings

- **The central correction**: the task's original premise (Gov. Code
  §§ 65852.2/65852.22) is outdated. SB 477 (Stats. 2024, ch. 7),
  effective March 25, 2024, repealed those former sections and
  recodified ADU/JADU law into new Government Code Chapter 13
  (§§ 66310-66342). The research agent discovered this after an empty
  fetch result on the old section number (confirmed not a fetch
  failure, via a working control fetch of an unrelated section), then
  confirmed the recodification and current section numbers, and cited
  the current, correct sections throughout. Every clause's `gap` field
  discloses the recodification and names the former section number a
  reader might encounter in older material.
- Confirmed several of the current sections were further amended in
  2025 (SB 543, AB 1170, AB 1154), effective January 1, 2026 (in effect
  as of this document's checked date) — each affected clause's `gap`
  field names the specific amending act and advises confirming no
  further amendment has taken effect, given how frequently this area
  changes.
- **A second genuine finding**: confirmed the ADU owner-occupancy rule
  (§ 66315: none permitted) is structurally distinct from the JADU rule
  (§ 66333(b): conditional on shared sanitation) — correctly declined
  to conflate the two unit types' rules, which the statute itself
  treats differently.
- Correctly declined to draft a clause for § 66323 (the "notwithstanding"
  pathway for specific unit configurations like garage conversions),
  to avoid conflating it with the general ordinance-limits clause;
  disclosed by cross-reference in two clauses' `gap` fields instead of
  silently omitting it.

## Honest gap(s) disclosed

ADU sales/subdivision rules (Article 4, §§ 66340-66342), the
CEQA-exemption basis for ministerial review, ADU impact-fee rules, the
JADU one-per-lot limit, and the § 66339 no-local-ordinance fallback
provision are not covered and are flagged as out of scope in the
relevant clauses' `gap` fields rather than silently omitted. This
document does not determine whether a specific application is in fact
complete, whether a specific local ordinance in fact complies with the
statutory floors and ceilings, or whether a specific property falls
within a specific parking exemption.

## Method

Fetched Cal. Gov. Code §§ 66313, 66314, 66315, 66317, 66321, 66322,
and 66333 from `leginfo.legislature.ca.gov`, each fetched twice by the
research agent with two distinct User-Agent strings (with repeated
retries needed due to intermittent proxy connection resets, consistent
with known environment flakiness), confirmed byte-identical after
whitespace normalization. All 18 citation quotes across the 6
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a twenty-third fetch (a distinct curl
User-Agent string, "Groundtruth-23rdVerify-ADU/1.0"; one transient
`ws_closed_mid_exchange` proxy error on § 66333, resolved on retry) of
all seven sections — all 18 quotes confirmed clean.

## Verification

- All seven statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  twenty-third independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 18
  populated with proper case/citation identifier strings.
- One new field required: `localAgencyName` ("Local Agency (city,
  county, or city and county with permitting jurisdiction over the
  property)") — grepped the corpus for an existing city/county/agency-
  jurisdiction field id and found none that fit an ADU permitting-
  agency concept. `ownerName` and `propertyAddress` reused (8 and 43
  prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Accessory Dwelling Unit / Junior Accessory Dwelling
  Unit Ministerial Approval — Information Sheet
  (`adu_jadu_ministerial_approval_info_sheet`), 7 clauses (6 authority
  + 1 drafting), in the Real Estate category. One new field
  (`localAgencyName`).
- Corpus: 2,886 → 2,893 clauses; 380 → 381 documents. Fourth and final
  addition of wave 83.

## Wave 83 summary

Wave 83 closes at 2,893 clauses / 381 documents (from 2,867/377 at
wave 82's close): Stigmatized Property Disclosure, Intestate
Succession Distribution Shares, Presumption of Fraud/Undue Influence
for Donative Transfers to a Disqualified Person, and ADU/JADU
Ministerial Approval — 2 Real Estate, 2 Estate Planning, following the
established strict-alternation pattern (wave 82 was 1×4 across Hiring/
During Employment/Confidentiality & IP/Ending Employment; wave 84
should return to 1×4 across those same four categories).
