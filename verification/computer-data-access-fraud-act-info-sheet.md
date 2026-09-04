# Confidentiality & IP, new document: California Comprehensive Computer Data Access and Fraud Act — Demand Letter Information Sheet

## Why this document

Confirmed by grep that "Penal Code 502," "computer data access and
fraud," and "CFAA" had zero hits anywhere in the corpus — a genuine
gap, since the corpus has federal trade secret law (DTSA) but not
California's own computer-access statute. Read the existing Trade
Secret Cease and Desist document's clauses first for citation style
and to confirm no overlap — that document covers trade secret
misappropriation broadly, while this one covers unauthorized computer
access specifically, a narrower and distinct legal theory. Fourth and
final document of wave 64, closing the wave.

## What this document covers

8 clauses: 2 drafting (intro, closing demand/signature) and 6
authority clauses, citing Cal. Penal Code § 502(c), (e)(1)-(2), (4)-(5),
plus Facebook, Inc. v. Power Ventures, Inc., 844 F.3d 1058 (9th Cir.
2016) (quoting United States v. Christensen, 801 F.3d 970 (9th Cir.
2015)):

- **`compfraud_prohibited_acts`** (§ 502(c)) — the statutory prohibited
  acts (fraud/deceit/extortion schemes, unauthorized taking/copying of
  data, unauthorized use of computer services), with an honest
  disclosure that only 3 of the statute's 14 numbered paragraphs are
  quoted.
- **`compfraud_civil_cause_of_action`** (§ 502(e)(1)) — the private
  civil cause of action, its damage/loss requirement, and compensatory
  damages including verification expenditures.
- **`compfraud_remedies_fees_and_punitive`** (§ 502(e)(2), (4)) —
  attorney's fees and the clear-and-convincing punitive-damages
  standard for willful violations.
- **`compfraud_limitations_period`** (§ 502(e)(5)) — the three-year
  limitations period.
- **`compfraud_without_permission_scope`** (Facebook v. Power Ventures)
  — **a key finding**: the statute's own 15-term definitions list
  doesn't define "without permission," and the Ninth Circuit held that
  continued access after an owner expressly revokes previously-implied
  permission is "without permission."
- **`compfraud_distinct_from_cfaa`** (same case, quoting Christensen) —
  **a key finding**: § 502 requires only knowing access, not
  unauthorized access like the federal CFAA.

## Genuine corrections and findings

- **The central finding**: verified directly from the statute's text
  that subdivision (b)'s fifteen defined terms do not include "without
  permission," despite that phrase appearing throughout the prohibited
  acts in subdivision (c) — a real textual gap, not assumed.
- Confirmed the Ninth Circuit's holding that § 502 doesn't require
  proof of unauthorized access the way the CFAA does — only knowing
  access plus the separate "without permission" element — a genuine,
  quoted textual distinction rather than a vague comparison.
- Confirmed the punitive-damages standard incorporates Civil Code
  § 3294(c)'s oppression/fraud/malice definitions by reference, and
  that § 502(e)(2)'s attorney's-fee provision is not itself conditioned
  on which party prevails.

## Honest gap disclosed

Facebook v. Power Ventures is a Ninth Circuit decision applying
California law, not a California state-court decision — disclosed as
persuasive, not binding, in both case-law clauses. Only 3 of § 502(c)'s
14 numbered prohibited-act paragraphs are quoted; the punishment
schedule (subd. (d)), forfeiture provision (subd. (g)), and
lawful-employment exemption (subd. (h)) are not addressed. No
independent second case-law source was found beyond the single Power
Ventures opinion, so the two case-law clauses share one source.

## Method

Fetched Cal. Penal Code § 502 from `leginfo.legislature.ca.gov` via
curl (WebFetch blocked), fetched twice with distinct User-Agent
strings, confirmed byte-identical after stripping dynamic session
tokens. Facebook, Inc. v. Power Ventures, Inc. read directly via
CourtListener. All 7 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- The statutory section fetched twice independently with distinct
  User-Agent strings; case law confirmed via CourtListener; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 502(e)(2) and (e)(4)
  correctly disclosed as the same subdivision, not independent; the two
  Power Ventures quotes correctly disclosed as the same case, not
  independent case-law sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `recipientName`, `incidentDescription`,
  `demandDate`) independently confirmed to match existing corpus field
  definitions. One genuinely new field added:
  `computerSystemDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: California Comprehensive Computer Data Access and
  Fraud Act — Demand Letter Information Sheet
  (`computer_data_access_fraud_act_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Confidentiality & IP category. One new field:
  `computerSystemDescription`.
- Corpus: 2,373 → 2,381 clauses; 306 → 307 documents. Fourth and final
  document of wave 64, closing the wave.
