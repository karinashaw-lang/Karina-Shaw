# Family Law, new document: De Facto Parent Status — Information Sheet

## Why this document

Confirmed by grep that "de facto parent" had zero hits anywhere in the
corpus. The delivering agent's own research assignment hypothesized this
doctrine would trace to Family Code §§ 3040 and 7601 — the same sections
covered by the corpus's existing Third-Party (Nonparent) Custody and
Visitation document. That hypothesis turned out to be wrong (see below),
which is itself the most important finding in this document.

## What this document covers

6 clauses: 2 drafting (background declaration, signature/acknowledgment)
and 4 authority clauses, citing California Rules of Court, rule 5.502(10)
and rule 5.534(a), plus two California Supreme Court cases:

- **`defactoparent_definition`** (Cal. Rules of Court, rule 5.502(10)) —
  the operative definition of "de facto parent," plus confirmation from
  the rule's own definitions preamble that every statute it cross-
  references is a Welfare and Institutions Code (juvenile dependency)
  provision, not a Family Code provision.
- **`defactoparent_standing_rights`** (Cal. Rules of Court, rule 5.534(a))
  — the discretionary "sufficient showing" standard and the three specific
  rights recognition confers (presence, counsel, presenting evidence),
  tied to the dispositional hearing and later hearings.
- **`defactoparent_origin_bg`** (*In re B.G.* (1974) 11 Cal.3d 679) — the
  doctrine's origin: the court coining the term, holding de facto parents
  may appear as full parties rather than as amici, and the qualifying
  standard (no rigid checklist; courts should have little difficulty
  determining status).
- **`defactoparent_not_legal_parent`** (*In re B.G.*, fn. 21, and *In re
  Kieshia E.* (1993) 6 Cal.4th 68, 77) — de facto parent status is not
  legal parentage or guardianship and does not carry all of a legal
  parent's rights.

## Genuine corrections and findings

- **The central finding**: California Family Code §§ 3040 and 7601 —
  which the research assignment hypothesized as the doctrine's statutory
  home — were independently fetched and re-fetched, and neither section's
  text uses the phrase "de facto parent" anywhere. Rule 5.502's own
  definitions preamble was checked and confirmed that every statute it
  cross-references for its definitions is a Welfare and Institutions Code
  section (dependency law) or a related federal statute, not a Family Code
  section. The document explicitly states that this corrects the research
  assignment's own premise, and that the doctrine is a term of art within
  California's juvenile dependency court system — distinct from the
  corpus's existing Third-Party (Nonparent) Custody and Visitation
  document's Family Code §§ 3040(a)(3)/3100(a) framework, which remains
  accurate on its own terms for what it actually covers.
- Confirmed recognition is discretionary ("the court may recognize"),
  conditioned on "a sufficient showing," and tied specifically to the
  dispositional hearing and later hearings — not to every stage of a
  dependency case, and rule 5.534(a)'s text does not itself address the
  separate jurisdictional hearing.
- Confirmed, via both *In re B.G.*'s own footnote 21 and *In re Kieshia
  E.*'s restatement of it nearly twenty years later, that de facto parent
  status is expressly not legal parentage or guardianship and does not
  carry all of a legal parent's rights — while honestly disclosing that
  Kieshia E.'s quoted passage is restating B.G.'s footnote, and, in turn,
  quoting an unverified Court of Appeal case (*In re Rachael C.*), so this
  is one line of authority reaffirmed and extended, not two independent
  ones.
- Confirmed *In re B.G.*'s qualifying standard is deliberately open-ended
  — no rigid checklist — rather than a fixed multi-factor test.

## Honest gap disclosed

Rule 5.534's separate subdivision (b) (a narrower right for a relative of
the child) was not independently quoted. The rules do not themselves
define "a sufficient showing" beyond the general standard *In re B.G.*
articulated, and this document does not resolve how that standard applies
to any specific applicant's facts. *In re Kieshia E.*'s actual holding —
narrower than the general proposition quoted here — is noted for context
but not relied upon. This document does not independently research how a
legal parent's rights compare item-by-item to a de facto parent's, nor
does it trace the Rules of Court' renumbering history between 1974 and
today.

## Method

Fetched Cal. Rules of Court, rule 5.502 and rule 5.534 directly from
`courts.ca.gov`, each independently re-fetched with a distinct User-Agent
string and confirmed byte-identical after whitespace normalization. Case
law (*In re B.G.* and *In re Kieshia E.*) was read from two independently
formatted CourtListener source records per opinion — different opinion
ids and captions, identical official citations — with quoted passages
confirmed to match across both records for each case.

## Verification

- All Rules of Court fetched twice independently with distinct
  User-Agents; both cases cross-checked across two independently
  formatted CourtListener records each; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the definition clause
  correctly discloses its two citations are parts of the same rule
  (rule 5.502), not independent sources; the "not legal parent" clause
  correctly discloses that *In re Kieshia E.* is restating *In re B.G.*'s
  footnote (and, through it, an unverified Court of Appeal case), not
  offering independent corroboration; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Signature and Acknowledgment
  Block").
- Field names (`petitionerName`, `childName`, `relationshipToChild`,
  `childDOB`, `countyOfFiling`, `parent1Name`, `parent2Name`,
  `dateSigned`, `cityState`) independently confirmed against
  `third_party_custody_visitation_info_sheet`'s existing field
  definitions — all 9 match exactly by id. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: De Facto Parent Status — Information Sheet
  (`de_facto_parent_status_info_sheet`), 6 clauses (4 authority + 2
  drafting), in the Family Law category. No new fields.
- Corpus: 2,049 → 2,055 clauses; 262 → 263 documents. Fourth and final
  document of wave 53.
