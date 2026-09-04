# Estate Planning, new document: IAEA Notice of Proposed Action Procedure — Information Sheet

## Why this document

Deepens a gap the corpus explicitly flagged on itself: the existing
`probate_independent_administration_vs_court_supervision` clause (in
the Petition for Probate document) states plainly, "This document
does not describe the separate notice-of-proposed-action procedure
(Probate Code §§ 10580-10592) that IAEA administration otherwise
substitutes for many court petitions." This document covers that
procedure in real depth, going substantially beyond the existing
clause's summary-level treatment of IAEA generally (§§ 10450, 10501,
10404). Third of wave 71's four documents.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses, citing Cal. Prob. Code §§ 10580(a)-(b),
10581-10584, 10585(a), 10586, 10587-10588(a), 10589(a)-(b), 10590(a),
10591-10592, and Prob. Code § 1215(a)-(c):

- **`noticeproposedaction_when_required`** (§ 10580(a)-(b)) — notice
  is required only when the specific Chapter 3 provision granting the
  power itself requires it; voluntary notice for an optional action
  doesn't create a broader notice obligation.
- **`noticeproposedaction_who_and_consent_waiver`** (§§ 10581-10584)
  — who must receive notice (devisees, heirs, special-notice
  requesters, and the Attorney General for escheat interests), and how
  written consent or waiver eliminates the requirement, including
  revocation mechanics.
- **`noticeproposedaction_contents_and_delivery`** (§ 10585(a),
  § 10586, § 1215(a)-(c)) — **a key finding**: the notice's required
  content and the 15-day delivery period, with § 1215's express
  statement that the period is "not extended" for mail or electronic
  delivery — verified precisely rather than assumed.
- **`noticeproposedaction_objection_procedure`** (§§ 10587-10588(a))
  — how a person objects, and the ex parte restraining-order
  alternative that a court must grant without notice or cause shown.
- **`noticeproposedaction_consequence_of_objection_or_silence`**
  (§§ 10589(a)-(b), 10590(a)) — what the personal representative must
  do after a timely objection, and the waiver that results from
  silence.
- **`noticeproposedaction_noncompliance_consequences`** (§§ 10591-10592)
  — third-party/bona fide purchaser protection for noncompliant
  actions already taken, and the court's discretionary authority to
  remove the personal representative.

## Genuine corrections and findings

- **The central finding**: confirmed via Probate Code § 1215 that the
  15-day notice period is expressly NOT extended for mail or
  electronic delivery — a precise, easily-assumed-wrong detail
  verified against the actual statutory text rather than guessed at.
- Confirmed notice is conditional, not universal — tied to whether the
  specific Chapter 3 power-granting provision itself requires it, with
  an honest disclosure that this document doesn't enumerate every
  individual provision.
- Confirmed the ex parte restraining-order mechanism requires the
  court to grant it without notice to the personal representative and
  without cause shown — a strong protection verified precisely.
- Confirmed the noncompliance consequences are discretionary
  ("may remove"), not automatic — explicitly not characterized as
  guaranteed outcomes.
- Confirmed no expedited/emergency-notice procedure was found anywhere
  in the sections checked — an honest, scoped negative finding rather
  than an overclaimed absence.

## Honest gap disclosed

Probate Code § 1215(a)(3)'s cross-reference to § 1212 (mailing
address rules) was not independently verified. § 10588(b)'s
cross-reference to CCP §§ 415.10/415.30 (service of a restraining
order) was reviewed but not independently verified against those Code
of Civil Procedure sections, so its specific terms are omitted rather
than characterized. § 10590's subdivisions (b)-(d) (narrow exceptions
to the waiver-by-silence rule, and how an objection is defined for
that section) were not quoted or independently verified.

## Method

Fetched Cal. Prob. Code §§ 10580-10592 (13 sections) plus Prob. Code
§ 1215 from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), all 14 sections fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization via script. All 14 citation quotes across the 6
authority clauses programmatically confirmed as exact substrings of
the confirmed text.

## Verification

- All fourteen statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 10580(a)-(b)
  combined quotation and the § 10589(a)-(b) combined quotation each
  correctly disclosed as one statutory section; §§ 10581-10584 (four
  separate citations), §§ 10585/10586/§ 1215 (three separate
  citations across two different Probate Code divisions), §§ 10587/
  10588, and §§ 10591/10592 each correctly disclosed as independent,
  separately-numbered sections; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`decedentName`, `executorName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: IAEA Notice of Proposed Action Procedure —
  Information Sheet (`iaea_notice_of_proposed_action_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 2,559 → 2,567 clauses; 333 → 334 documents. Third document
  of wave 71.
