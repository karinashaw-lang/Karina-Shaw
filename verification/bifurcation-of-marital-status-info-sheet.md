# Family Law, new document: Bifurcation of Marital Status — Information Sheet

## Why this document

Confirmed by grep that "bifurcation" and "section 2337" had zero hits
anywhere in the corpus. Read the existing Dissolution Petition and
Legal Separation documents' clauses in full first — this document is a
genuine companion (that document covers the overall dissolution
process; this document goes deep on a specific procedural mechanism
within it — severing and trying the marital-status issue early).
Fourth and final document of wave 65, closing the wave.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses, citing Cal. Fam. Code § 2337(a)-(g), plus In re
Marriage of Turfe (2018) 23 Cal.App.5th 1118 and In re Marriage of
Fink (1976) 54 Cal.App.3d 357:

- **`bifurcation_core_authority`** (§ 2337(a)) — the discretionary
  noticed-motion mechanism, and the observation that this is
  dissolution-specific (a legal separation judgment does not terminate
  marital status).
- **`bifurcation_disclosure_requirement`** (§ 2337(b)) — the
  preliminary declaration of disclosure requirement and its two
  exceptions.
- **`bifurcation_indemnification_conditions`** (§ 2337(c), (g)) — the
  indemnification conditions for tax consequences, health insurance,
  and retirement/survivor/social-security benefits, and their
  post-death enforceability.
- **`bifurcation_security_interest_conditions`** (§ 2337(c)(9)-(10)) —
  the bond/security-interest conditions and the general catchall.
- **`bifurcation_retirement_plan_joinder`** (§ 2337(d)-(e)) — mandatory
  pre-judgment retirement-plan joinder and protective-order
  requirements.
- **`bifurcation_status_termination_effect`** (§ 2337(f) + Turfe +
  Fink) — **a key finding**: the reserved-jurisdiction requirement,
  confirmed via genuinely independent case law that a status-only
  judgment is immediately appealable and, once final, restores freedom
  to remarry.

## Genuine corrections and findings

- **The central finding, precisely sourced**: In re Marriage of Fink
  (1976) — the case that originated the bifurcated-trial procedure
  later codified in § 2337 — supplies the verified "freedom to
  remarry" language; In re Marriage of Turfe (2018) independently
  confirms a status-only judgment terminates the marriage while
  reserving jurisdiction and is immediately appealable. Both were
  fetched and read directly via CourtListener, not from memory.
- **Honestly disclosed limitation on the case law**: Fink's "freedom
  to remarry" statement arises from that case's specific procedural
  posture (a pending appeal delaying finality), not a freestanding
  statutory holding — § 2337 itself never uses the word "remarry."
  Neither case nor any statutory text states a universally applicable
  moment at which status is restored.
- Confirmed § 2337(d)'s mandatory (not discretionary) retirement-plan
  joinder and protective-order requirements, genuinely distinct from
  the discretionary conditions in § 2337(c).
- Confirmed four of § 2337(c)'s ten numbered conditions ((3), (4), (7),
  (8)) were fetched but explicitly not restated, rather than silently
  treated as covered.

## Honest gap disclosed

Family Code § 2610 (cross-referenced by § 2337(d)(2) as one of three
protective-order options) was not independently re-verified in its own
right. The statutory attachment language in § 2337(d)(2)(C) is
paraphrased rather than reproduced in full. Paragraphs (3), (4), (7),
and (8) of § 2337(c) are not described.

## Method

Fetched Cal. Fam. Code § 2337 from `leginfo.legislature.ca.gov` via
curl, fetched twice with distinct User-Agent strings, confirmed
byte-identical. In re Marriage of Turfe and In re Marriage of Fink
read directly via CourtListener. All 17 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- The statutory section fetched twice independently with distinct
  User-Agent strings; both cases confirmed via CourtListener; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all § 2337 subsection
  citations correctly disclosed as one statutory section, not
  independent of each other; Turfe and Fink correctly disclosed as
  genuinely independent Court of Appeal decisions; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`party1Name`, `party2Name`, `countyOfFiling`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions. `marriageDate` given a document-specific
  "Date of marriage" label matching this dissolution context (rather
  than the premarital-agreement "Anticipated marriage date" variant).
  No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Bifurcation of Marital Status — Information Sheet
  (`bifurcation_of_marital_status_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Family Law category. No new fields.
- Corpus: 2,402 → 2,410 clauses; 310 → 311 documents. Fourth and final
  document of wave 65, closing the wave.
