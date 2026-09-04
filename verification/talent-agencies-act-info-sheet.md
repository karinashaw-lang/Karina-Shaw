# Hiring, new document: California Talent Agencies Act — Information Sheet

## Why this document

Confirmed by grep that "Talent Agencies Act" and "1700" combined with
"talent" had zero genuine hits, and no existing document covers
entertainment-industry employment procurement or artist
representation. Fourth document of wave 72's four-document run.

## What this document covers

7 clauses: 2 drafting (declaration/purpose, record/signature) and 5
authority clauses, citing Cal. Lab. Code §§ 1700.4(a)-(b), 1700.5,
1700.23, 1700.44(a)-(c), and *Marathon Entertainment, Inc. v. Blasi*
(2008) 42 Cal.4th 974:

- **`talentagency_definition_and_scope`** (§ 1700.4(a)-(b)) — the
  statutory definition of "talent agency" (the activity, not the job
  title, triggers regulation), the recording-contract carve-out, and
  the broad "artists" definition.
- **`talentagency_licensing_requirement`** (§ 1700.5) — the core
  licensing requirement and its posting/advertisement conditions.
- **`talentagency_required_contract_terms`** (§ 1700.23) — the
  required Labor-Commissioner-approved contract form and its
  mandatory license-disclosure language.
- **`talentagency_labor_commissioner_jurisdiction`** (§ 1700.44(a)-(c))
  — **a key finding**: the referral-to-Labor-Commissioner mechanism,
  and two precise, easily-overclaimed details verified from the
  statute's own text — unlicensed activity is expressly NOT a
  criminal act under California law, and a one-year time limit applies
  to actions under the Act.
- **`talentagency_personal_manager_case_law`** (*Marathon
  Entertainment v. Blasi*) — **the central finding**: the Act applies
  to personal managers (not just people titled "agent") who procure
  employment, and the Labor Commissioner has discretion to sever
  rather than void an entire contract for unlawful procurement —
  verified by directly reading the California Supreme Court's opinion.

## Genuine corrections and findings

- **The central finding**: confirmed via directly-read California
  Supreme Court authority that the Act's licensing requirement turns
  on the activity performed (procuring employment), not on job title
  — a personal manager who procures employment is subject to the same
  licensing requirement as someone titled "agent."
- Confirmed the statute's own text expressly states that unlicensed
  activity is NOT a criminal act — a precise negative finding verified
  from the actual statutory language rather than assumed.
- Confirmed the one-year limitations period from the statute's own
  text (§ 1700.44(c)), rather than assuming a different general
  limitations period applies.
- Confirmed the Labor Commissioner has discretion — not a mandatory
  duty — to void an unlawfully-formed management contract entirely;
  severability lets lawful portions be enforced separately.
- Correctly noted the statute's own text never uses the phrase
  "exclusive jurisdiction" — that characterization is left to the
  case-law clause rather than overstated as explicit statutory
  language.

## Honest gap disclosed

§ 1700.45's union-arbitration exception (cross-referenced by
§ 1700.23) and § 1700.44(d)'s exception for an unlicensed person
acting at a licensed agency's request were noted as existing but not
independently fetched or characterized in detail. The Marathon
opinion was read from a single source (CourtListener) rather than
cross-checked against a second host, and later cases applying or
limiting it were not researched.

## Method

Fetched Cal. Lab. Code §§ 1700.4, 1700.5, 1700.23, and 1700.44 from
`leginfo.legislature.ca.gov` via curl (WebFetch blocked as expected),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. Read and verified
*Marathon Entertainment, Inc. v. Blasi* directly via CourtListener.
All 9 citation quotes across the 5 authority clauses programmatically
re-verified as exact substrings of the confirmed source text before
finalizing.

## Verification

- All statutory sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 1700.4(a)-(b) and
  § 1700.44(a)-(c) each correctly disclosed as subsections of one
  statutory section; the *Marathon* case law correctly disclosed as
  genuinely independent of the Labor Code citations; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused generic drafting titles "Declaration and Purpose" and "Record
  and Signature" match this corpus's established cross-document
  pattern, not substantive duplicates.
- One new field required: `talentRepresentativeName` — checked against
  the full corpus's existing field ids first to confirm no equivalent
  field already existed under a different name. Three other fields
  (`artistName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: California Talent Agencies Act — Information Sheet
  (`talent_agencies_act_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Hiring category. 1 new field
  (`talentRepresentativeName`).
- Corpus: 2,591 → 2,598 clauses; 337 → 338 documents. Fourth document
  of wave 72.
- **Wave 72 status**: Domestic Worker Bill of Rights (During
  employment), UI misconduct case-law gap-fix (Ending employment, no
  new document), California Genetic Information Privacy Act
  (Confidentiality & IP), and Talent Agencies Act (Hiring) shipped.
  The Ending employment document slot remains open after the UI
  misconduct substitution — a substitute topic is pending.
