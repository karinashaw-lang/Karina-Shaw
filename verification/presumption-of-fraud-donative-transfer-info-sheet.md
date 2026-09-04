# Estate Planning, new document: Presumption of Fraud or Undue Influence — Donative Transfers to a Disqualified Person — Information Sheet

## Why this document

Third document of wave 83. Grepped the corpus for "21380," "21382,"
"21384," and "disqualified person" and read the existing Omitted
Spouse, Elder/Dependent Adult Financial Abuse, and Grounds to Contest
a Will or Trust documents in full. Confirmed the Omitted Spouse
document's `omitted_spouse_exceptions` clause quotes Prob. Code
§§ 21362/21366 (care-custodian/dependent-adult definitions) but its own
gap note explicitly discloses those definitions are "incorporated by
reference from... the presumption-of-fraud-or-undue-influence
statutes, §§ 21360-21392" without ever explaining § 21380 itself.
Confirmed the Grounds to Contest document's undue-influence coverage
is under the general contest statute, Prob. Code § 6104, and never
mentions § 21380. Confirmed Elder/Dependent Adult Financial Abuse
covers a wholly different statute (Welf. & Inst. Code § 15610.70).
Zero corpus hits for "21380" or "disqualified person" outside the one
cross-reference note. Confirmed non-duplicative — a real, previously
unfilled gap.

## What this document covers

7 clauses: 2 drafting (declaration, certification/signature) and 5
authority clauses, citing Cal. Prob. Code §§ 21380(a)-(d), 21382,
21384(a), 21384(c), and Cal. Evid. Code § 606:

- **`disqualifiedtransfer_core_presumption`** (§ 21380(a), (b); Evid.
  Code § 606) — the core rule: a donative transfer to a disqualified
  person is presumed to be the product of fraud or undue influence,
  and what "a presumption affecting the burden of proof" means under
  Evidence Code § 606 (the party against whom it operates bears the
  burden of proving the nonexistence of the presumed fact by a
  preponderance of the evidence, unless a different standard is
  specified — here, clear and convincing evidence).
- **`disqualifiedtransfer_disqualified_categories`** (§ 21380(a)(1)-(7))
  — the seven categories of disqualified person: the instrument's
  drafter; a fiduciary who transcribed it or caused it to be
  transcribed; certain care custodians of a dependent adult, within
  specific timing windows; a care custodian who marries or begins
  cohabiting with a dependent adult within six months of providing
  services; blood/affinity relatives within the third degree, or the
  cohabitant, of a person in the first three categories; an employee
  of such a person or their spouse/cohabitant; and a partner,
  shareholder, or employee of a law firm in which a category-1-or-2
  person has an ownership interest. Cross-references the existing
  `omitted_spouse_exceptions` clause for the §§ 21362/21366
  definitions of "care custodian" and "dependent adult" rather than
  re-quoting them.
- **`disqualifiedtransfer_conclusive_presumption_and_costs`**
  (§ 21380(c), (d)) — **the central finding**: the presumption is
  conclusive, not rebuttable, only for transfers to the drafter
  personally or to the blood/affinity/cohabitant/employee/law-firm
  relations of the drafter (categories 5-7) — a fiduciary transcriber
  or care custodian (categories 2-4) remains under the ordinary
  rebuttable presumption. Also the cost-shifting rule: if the
  presumption is not successfully rebutted, the disqualified person
  bears the costs of the proceeding, including reasonable attorney's
  fees.
- **`disqualifiedtransfer_exceptions`** (§ 21382) — the six statutory
  exemptions from § 21380 entirely: fourth-degree-or-more-distant
  blood/affinity relatives or cohabitants; instruments drafted by such
  relatives; court-approved instruments after full disclosure;
  transfers to public entities or certain tax-exempt organizations;
  transfers of $5,000 or less where the estate exceeds the small-estate
  threshold; and instruments executed outside California by a
  non-California-resident transferor.
- **`disqualifiedtransfer_certificate_of_independent_review`**
  (§ 21384(a), (c)) — the Certificate of Independent Review escape
  route (an independent attorney counsels the transferor outside the
  presence of any heir or beneficiary, concludes the transfer is not
  the product of fraud or undue influence, and signs a certificate),
  and the restriction that the instrument's own drafting attorney may
  personally review and certify only where the disqualified person is
  a care custodian (categories 3-4), not in any other circumstance.

## Genuine corrections and findings

- **The central finding**: confirmed word-for-word that § 21380's
  presumption is conclusive only for the drafter and the drafter's
  blood/affinity/cohabitant/employee/law-firm relations (categories
  5-7) — a fiduciary transcriber or care custodian (categories 2-4)
  remains under the ordinary rebuttable, clear-and-convincing-evidence
  presumption. This is a real structural split within one statutory
  section, verified rather than assumed to apply uniformly.
- **A second genuine finding, honestly disclosed**: the blood/affinity
  degree threshold is asymmetric between triggering and exempting the
  presumption — third-degree relatives trigger it under
  § 21380(a)(5), but only fourth-degree-or-more-distant relatives are
  exempted under § 21382(a)-(b). The statute does not use the same
  degree on both sides of the line.
- Confirmed the cost-shifting rule (§ 21380(d)) and the core
  presumption (§ 21380(a)) are subdivisions of the same statutory
  section and are not independent corroborating sources for one
  another — disclosed explicitly in the relevant clause's gap field.
- Confirmed the drafting-attorney certification restriction in
  § 21384(c) is scoped specifically to care-custodian disqualification
  (categories 3-4) and does not extend to the drafter's own
  disqualification under category 1 — correctly declined to generalize
  the exception beyond what the statute's text states.

## Honest gap(s) disclosed

The §§ 21362/21366 definitions of "care custodian" and "dependent
adult" that § 21380(a)(3)-(4) depends on are cross-referenced to the
existing `omitted_spouse_exceptions` clause rather than independently
re-verified in this document. The mechanics of what qualifies as "full
disclosure" for the court-approval exception under § 21382(c), and the
small-estate threshold cross-referenced by § 21382(e), are not
independently fetched or elaborated here. Whether or how a Certificate
of Independent Review interacts with a later will contest is not
addressed.

## Method

Fetched Cal. Prob. Code §§ 21380, 21382, and 21384, and Cal. Evid.
Code § 606, from `leginfo.legislature.ca.gov`, each fetched twice by
the research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 9 citation quotes
across the 5 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a twenty-second fetch (a
distinct curl User-Agent string, "Groundtruth-22ndVerify-
DisqualifiedTransfer/1.0") of all four sections — all 9 quotes
confirmed clean.

## Verification

- All four statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  twenty-second independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section (not independently corroborating), and which cite
  a genuinely separate code (Evidence Code § 606 alongside Probate
  Code § 21380) — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Certification and Signature") matches a
  title used elsewhere in the corpus — confirmed as the established
  boilerplate-title reuse pattern, not a genuine collision.
- Checked every citation's `case` field for emptiness — all 9 populated
  with proper case/citation identifier strings.
- No new fields required — all five fields (`preparerName`,
  `transferorName`, `relationshipToTransferor`, `dateSigned`,
  `cityState`) reused from the existing corpus (27, 2, 1, 157, and 136
  prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Presumption of Fraud or Undue Influence — Donative
  Transfers to a Disqualified Person — Information Sheet
  (`disqualified_transferee_donative_transfer_presumption_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Estate Planning
  category. No new fields.
- Corpus: 2,879 → 2,886 clauses; 379 → 380 documents. Third addition of
  wave 83.
