# Estate Planning, new document: Physician Orders for Life-Sustaining Treatment (POLST) — Information Sheet

## Why this document

Confirmed by grep that "POLST," "physician orders for life-sustaining
treatment," and "§ 4780" had zero hits anywhere in the corpus. Read
the existing Advance Health Care Directive document's clauses in full
first — this document is a genuine companion, not overlap: an advance
directive is a future-wishes document a competent adult signs, often
while healthy; a POLST is a set of actual medical orders signed by
both the patient (or decisionmaker) and a physician. Second of wave
63's four documents.

## What this document covers

8 clauses: 2 drafting (intro, signature block) and 6 authority
clauses, citing Cal. Prob. Code §§ 4780, 4781, 4782, 4784, 4785, and
4786:

- **`polst_statutory_definition`** (§ 4780(a)(1)-(3)) — the statutory
  category "request regarding resuscitative measures" and how POLST
  fits within it, extending to life-sustaining measures generally.
- **`polst_not_advance_directive`** (§ 4780(a), (c)) — **a key
  finding**: the statute states directly, in its own text, that a
  POLST-type request "is not an advance health care directive," and
  that providers should explain the difference.
- **`polst_signature_execution`** (§ 4780(b)-(c)) — who must sign, and
  when a decisionmaker may execute the form on the patient's behalf.
- **`polst_revocation`** (§ 4780(d)) — the revocation standard.
- **`polst_provider_reliance_and_scope`** (§§ 4781, 4782, 4784) — the
  broad "health care provider" definition (including EMS/first
  responders), good-faith immunity, and validity presumption.
- **`polst_no_repeal_of_other_law`** (§§ 4785, 4786) — this Part
  doesn't displace other health care decisionmaking law and applies
  regardless of location.

## Genuine corrections and findings

- **The central finding**: the statute's own text expressly
  distinguishes a POLST-type request from an advance health care
  directive in the same sentence that defines it — not a distinction
  this document infers from general practice.
- **Honestly disclosed, not invented**: unlike the advance directive
  statute, this Part contains no explicit "must comply" duty for
  providers or EMS/first responders — only immunity and a validity
  presumption that function as practical incentives toward compliance,
  not a codified duty. This gap is stated plainly rather than
  characterized as a compliance mandate.
- **No portability provision found, and none invented**: no
  interstate-reciprocity or portability provision was located anywhere
  in §§ 4780-4786 — this topic is omitted entirely rather than
  asserted without a citation.
- Confirmed the broad statutory "health care provider" definition
  explicitly includes firefighters, law enforcement officers, EMT-I/II
  personnel, and paramedics, not just clinical staff.

## Honest gap disclosed

§ 4780's cross-reference to § 4682 (decisionmaker authority
effectiveness) and § 4695 (revocation standard) were not independently
re-verified here — a companion Advance Health Care Directive document
in this corpus verifies § 4695 directly. The statute states no rule
for resolving a conflict between a POLST form and a later-expressed
wish or a health care agent's decision; that is disclosed as outside
the codified text rather than filled in with an assumed hierarchy.

## Method

Fetched Cal. Prob. Code §§ 4780-4786 from `leginfo.legislature.ca.gov`
via curl (WebFetch blocked), each section fetched twice with distinct
User-Agent strings, confirmed byte-identical. All 12 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All seven sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 4780's own
  subsections correctly disclosed as one section, not independent;
  §§ 4781/4782/4784 and §§ 4785/4786 correctly disclosed as separately
  numbered, independent sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`patientName`, `agentName`) independently confirmed to
  match existing corpus field definitions. One genuinely new field
  added: `physicianName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Physician Orders for Life-Sustaining Treatment (POLST)
  — Information Sheet
  (`polst_physician_orders_life_sustaining_treatment_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Estate Planning category.
  One new field: `physicianName`.
- Corpus: 2,328 → 2,336 clauses; 300 → 301 documents. Second document
  of wave 63.
