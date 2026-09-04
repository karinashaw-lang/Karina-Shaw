# During employment, new document: Employee Political Activity Protection — Information Sheet

## Why this document

Confirmed by grep that "Section 1101" and "Section 1102" (in this
statutory context) had zero substantive hits — the only hits were an
incidental exception carve-out cross-reference inside existing
Labor Code § 98.6 wage-retaliation clauses ("...including the conduct
described in subdivision (k) of Section 96, and Chapter 5
(commencing with Section 1101)..."). Also confirmed § 1102.5 (the
general whistleblower statute) is already substantively covered by
the existing Wrongful Termination document's clauses, and correctly
excluded it from this document's scope even though it sits in the
same Labor Code chapter. Second of wave 70's four documents.

## What this document covers

6 clauses: 2 drafting (purpose, signature/acknowledgment) and 4
authority clauses, citing Cal. Lab. Code §§ 1101, 1102, 1103, 1105,
and *Gay Law Students Assn. v. Pacific Tel. & Tel. Co.* (1979) 24
Cal.3d 458:

- **`politicalactivity_core_prohibition_1101`** (§ 1101) — the core
  prohibition on employer rules, regulations, or policies restricting
  political activity or candidacy.
- **`politicalactivity_coercion_prohibition_1102`** (§ 1102) — the
  separate prohibition on coercing employees' political choices
  through threat of discharge.
- **`politicalactivity_scope_case_law`** (*Gay Law Students*) — the
  California Supreme Court's construction of "political activity" as
  not narrowly confined to partisan activity, applied to hold that
  discrimination against employees identified with an advocacy
  movement stated a claim under §§ 1101-1102.
- **`politicalactivity_remedies_and_penalties`** (§ 1103, § 1105 +
  *Gay Law Students*) — the chapter's own criminal misdemeanor
  penalty and the preserved civil damages remedy, with the Supreme
  Court's recognition of a civil cause of action consistent with
  § 1105's text.

## Genuine corrections and findings

- **The central finding**: confirmed via directly-read California
  Supreme Court authority that §§ 1101-1102 are not limited to
  partisan political activity (voting, campaign work) — the Court
  approved a broader description ("espousal of a candidate or a
  cause, and some degree of action to promote... acceptance") and
  applied it to an advocacy-movement-affiliation case, a real,
  substantive scope finding rather than a bare statutory paraphrase.
- Confirmed § 1103's misdemeanor penalty is a two-tier structure
  (individual: jail and/or $1,000 fine; corporation: $5,000 fine) —
  precisely stated rather than generically labeled.
- Confirmed § 1106's extended "employee" definition applies only to
  §§ 1102.5-1102.8, 1104, and 1105 — NOT to §§ 1101, 1102, or 1103
  themselves — a precise scope limit the agent verified and disclosed
  rather than glossing over.
- Correctly distinguished § 1101 (employer rules/policies generally)
  from § 1102 (the specific coercion-through-threat-of-discharge
  mechanism) as two separate prohibitions, not one restated.

## Honest gap disclosed

*Mallard v. Boring* and *Lockheed Aircraft Corp. v. Superior Court*
were read only as quoted within the independently-verified *Gay Law
Students* opinion, not independently verified themselves — disclosed
as non-independent sourcing rather than treated as separately
confirmed authorities. *Rulon-Miller v. IBM* was not pursued since
*Gay Law Students* already gave strong, directly-verified, on-point
coverage.

## Method

Fetched Cal. Lab. Code §§ 1101-1106 from `leginfo.legislature.ca.gov`
via curl (through the sandboxed proxy), each section fetched twice
with distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. Read and verified *Gay Law Students Assn.
v. Pacific Tel. & Tel. Co.* via CourtListener. All 8 citation quotes
across the 4 authority clauses programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- All six statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — one round of leaks
  was caught and fixed by the agent itself during its own drafting
  process, per its self-report; re-scanned clean on delivery.
- Checked source-independence disclosure logic — the three *Gay Law
  Students* quotes in the case-law clause correctly disclosed as
  drawn from a single opinion, not independent of each other; § 1103
  and § 1105 correctly disclosed as independent, separately-numbered
  sections; the case law and the statutes correctly treated as
  independent of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  the reused generic drafting titles "Purpose" and "Acknowledgment"
  match this corpus's established cross-document pattern, not
  substantive duplicates.
- Field names (`companyName`, `employeeName`, `dateSigned`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Employee Political Activity Protection — Information
  Sheet (`political_activity_protection_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 2,529 → 2,535 clauses; 328 → 329 documents. Second document
  of wave 70.
