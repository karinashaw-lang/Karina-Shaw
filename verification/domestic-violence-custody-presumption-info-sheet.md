# Family Law, new document: Domestic Violence Custody Presumption — Information Sheet

## Why this document

Read the existing DVRO Petition Information document's clauses in full
first — this document is a genuine companion (that document covers
obtaining a restraining order under the DVPA; this document covers a
distinct, later-stage consequence: how a court finding of domestic
violence affects a subsequent custody determination). Noted honestly:
the existing Parenting Plan document already has one embedded clause
(`parenting_dv_presumption`) briefly summarizing § 3044(a)-(b) at
agreement-appropriate brevity — this new document is a genuine
deepening that extends substantially beyond it (subdivisions (c)
through (h)), consistent with this project's established
"deepen a narrow embedded clause into a full document" pattern.
Second of wave 65's four documents.

## What this document covers

7 clauses: 2 drafting (declaration, signature/acknowledgment) and 5
authority clauses, citing Cal. Fam. Code § 3044(a)-(h) and § 3011(a)(2)(A):

- **`dvcustody_core_presumption`** (§ 3044(a) + § 3011(a)(2)(A)) — the
  core rebuttable presumption and the protected-persons list, fetched
  as the current text operative January 1, 2026 (added by Stats. 2024,
  Ch. 544/SB 899).
- **`dvcustody_rebuttal_factors`** (§ 3044(b)(1)-(2)(A)-(G)) — the full
  statutory factor list for overcoming the presumption.
- **`dvcustody_perpetration_definition`** (§ 3044(c)-(d)) — **a key
  finding**: § 3044 has its own self-contained "perpetrated domestic
  violence" definition, textually distinct from (though overlapping
  with) the general DVPA definitions, which appear only as one
  evidentiary path (prior conviction) in subdivision (d)(1), not as
  the operative trigger definition.
- **`dvcustody_finding_procedure_and_best_interest_interaction`**
  (§ 3044(e)-(g)) — the finding-timing procedure, the evidentiary
  limits on custody-evaluator conclusions, and the Jaime G. v. H.L.
  (2018) 25 Cal.App.5th 794 specific-findings requirement (as named by
  the statute's own text).
- **`dvcustody_mediation_notice_requirement`** (§ 3044(h)) — the
  required pre-mediation notice.

## Genuine corrections and findings

- **The central finding**: § 3044(c) supplies its own definition of
  "perpetrated domestic violence" — the general DVPA definitions
  (§§ 6211, 6203) are cross-referenced only in subdivision (d)(1) as
  one specific way (a prior criminal conviction) to satisfy the
  finding requirement, not as the operative test for a contested
  finding made directly under subdivision (a). A nuance easily missed
  and stated precisely rather than glossed over.
- Confirmed the statute names Jaime G. v. H.L. directly in its own
  text (§ 3044(f)(1)) as the specific-findings standard the Legislature
  intends courts to follow — the case citation traces to the statute's
  own text, not independent case-law research.
- Confirmed § 3044(g)'s temporary-order exception: a court may issue a
  temporary custody order pending a continuance to determine whether
  the presumption applies, provided it complies with §§ 3011 and 3020.
- Confirmed the version of § 3044 fetched and quoted throughout is the
  current, operative text (Stats. 2024, Ch. 544/SB 899, operative
  January 1, 2026) — not an older version.

## Honest gap disclosed

Item 5 of the original task brief (mutual restraining orders/
cross-findings interaction) was omitted entirely — no such provision
appears anywhere in § 3044's fetched text, and the agent declined to
guess or cite an untested cross-reference (§ 6305) rather than assert
one. Jaime G. v. H.L. is reported only as the statute itself describes
it; the opinion was not independently fetched or reviewed. §§ 3011's
full best-interest factor list and § 3020's legislative findings,
though referenced throughout § 3044, are not independently reproduced
here.

## Method

Fetched Cal. Fam. Code §§ 3044 and 3011 from
`leginfo.legislature.ca.gov` via curl (WebFetch blocked), each section
fetched twice with distinct User-Agent strings, confirmed
byte-identical; § 6211 was separately spot-checked without a formal
two-fetch confirmation and found consistent with this corpus's
existing DVRO document. All 12 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- Both statutory sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 3044's own
  subsections correctly disclosed as one statutory section, not
  independent of each other; the § 3044(a)/§ 3011(a)(2)(A)
  cross-reference correctly disclosed as one integrated rule rather
  than independent corroboration; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`childName`, `party1Name`, `party2Name`,
  `countyOfFiling`, `dateSigned`, `cityState`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Domestic Violence Custody Presumption — Information
  Sheet (`domestic_violence_custody_presumption_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 2,388 → 2,395 clauses; 308 → 309 documents. Second document
  of wave 65.
