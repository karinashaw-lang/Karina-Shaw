# Real Estate, new document: Boundary Line Agreement — Information Sheet

## Why this document

No existing document or clause covered how adjoining landowners fix
an uncertain property boundary — a distinct common-law doctrine, not
covered by the corpus's existing deed and easement documents.

## What this document covers

6 clauses: 2 drafting (declaration, signature/acknowledgment) and 4
authority clauses:

- **`boundaryline_doctrine_and_elements`** (Code Civ. Proc. §§ 318,
  319) — the agreed-boundary doctrine's general shape, anchored to the
  independently-verified 5-year real-property statute of limitations,
  with the doctrine's case-law elements honestly disclosed as
  secondary-sourced.
- **`boundaryline_vs_adverse_possession`** (Code Civ. Proc. § 325(a),
  (b)) — the factual distinction from adverse possession as a
  different legal theory.
- **`boundaryline_no_specific_recording_statute`** (Civ. Code
  §§ 1213, 1214; Gov't Code §§ 27201(a)(1)(A), 66412(d)) — the absence
  of a boundary-specific recording statute, the general recording
  rules that apply instead, and a distinguishing note on the
  unrelated Subdivision Map Act "lot line adjustment" concept.
- **`boundaryline_legal_description_requirement`** (Civ. Code
  §§ 1213, 1214) — legal-description sufficiency for recording and
  notice to later purchasers.

## Genuine corrections and findings

- Corrected the acquiescence-period framing: the third doctrinal
  element (acceptance and acquiescence) is not simply "N years" —
  secondary sourcing describes it as disjunctive: a period equal to
  the statute of limitations, or circumstances where changing the line
  would cause substantial loss. This is described as a long-standing
  formulation, not a 1990s-era relaxation, and flagged as unverified
  against primary case text either way.
- Corrected the adverse-possession framing: Code Civ. Proc. § 325's
  actual text does not use "open, notorious, hostile, continuous"
  language. It requires "substantial enclosure" or "usual
  cultivation/improvement," plus 5 years of continuous occupation and
  timely tax payment — the familiar phrasing is case-law shorthand,
  not statutory text.
- Confirmed no boundary-specific recording statute exists. A genuinely
  useful additional finding: Gov't Code § 66412(d) creates a different
  statutory concept, a Subdivision Map Act "lot line adjustment" (a
  regulatory reconfiguration of recorded lines), easy to confuse with
  the common-law agreed-boundary doctrine but analytically unrelated —
  added as a distinguishing citation so the document doesn't conflate
  the two.

## Honest gap disclosed

The agreed-boundary doctrine's leading case (commonly associated with
*Bryant v. Blevins* (1994) 9 Cal.4th 47, and secondary sourcing traces
the disjunctive acquiescence formulation back further to *Ernie v.
Trinity Lutheran Church* (1959)) could not be independently verified.
CourtListener's rate limit was already exhausted, and direct fetches
to courtlistener.com, law.justia.com, caselaw.findlaw.com, and
scocal.stanford.edu were all blocked by this environment's network
egress policy. The doctrine's existence and elements are described via
secondary legal-commentary sourcing only, explicitly disclosed in the
`boundaryline_doctrine_and_elements` clause's `gap` field, with no
case citations and no fabricated quotes — that clause's `citations`
array anchors only to the independently-verified statutory sections,
matching this corpus's established pattern of keeping `status:
"verified"` while citing only what was actually verified and naming
unverified case law for identification only.

## Method

Fetched Code Civ. Proc. §§ 318, 319, 325; Civ. Code §§ 1213, 1214;
and Gov't Code §§ 27201, 66412 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. All citation quotes programmatically confirmed as
exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 325(a)/(b)
  correctly treated as one source, not independent, per the agent's
  own delivery; correct as reviewed.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signatures, Notarial Acknowledgment, and Recording,"
  duplicating the existing Easement Agreement document's signature-
  block title) confirmed as the corpus's established, accepted generic
  drafting-title-reuse pattern.
- Field names (`party1Name`, `party2Name`) independently confirmed to
  match existing corpus convention. New fields:
  `party1PropertyAddress`, `party1ParcelNumber`,
  `party1LegalDescription`, `party2PropertyAddress`,
  `party2ParcelNumber`, `party2LegalDescription`,
  `agreedBoundaryDescription`, `recordingCounty`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Boundary Line Agreement — Information Sheet
  (`boundary_line_agreement_info_sheet`), 6 clauses (4 authority + 2
  drafting), in the Real Estate category. New fields:
  `party1PropertyAddress`, `party1ParcelNumber`,
  `party1LegalDescription`, `party2PropertyAddress`,
  `party2ParcelNumber`, `party2LegalDescription`,
  `agreedBoundaryDescription`, `recordingCounty`.
- Corpus: 1,306 → 1,312 clauses; 164 → 165 documents. This completes
  wave 28 (4 documents: DMCA Counter-Notification, Certificate of
  Amendment, Nullity of Marriage, and this document).
