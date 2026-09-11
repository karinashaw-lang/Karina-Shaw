# Ending employment, new document: Mixed-Motive Discharge Under FEHA and the Employer's "Same-Decision" Showing (Gov. Code § 12940(a); Harris v. City of Santa Monica; Alamo v. Practice Management; CACI Nos. 2507, 2512) — Information Sheet

## Why this document

Processed item of wave 160 (Ending employment slot, continuing the
round-robin with waves 146/148/150/152/154/156/158). Read all 83
existing "Ending employment" document titles/ids in
`data/documents.json` before choosing a topic, and grepped both data
files for every candidate the brief suggested. Results: every named
candidate was already covered — Civ. Code § 1542
(`civil_code_1542_general_release_waiver_info_sheet`), Lab. Code
§ 206.5 (`release_as_condition_of_wages_info_sheet`), Tameny
(`wrongful_termination_public_policy_info_sheet`), Lab. Code § 98.6
(`wage_claim_retaliation_info_sheet`), and Lab. Code § 2751 /
post-termination commissions (`commission_payout_statement`). A wider
sweep of roughly sixty further candidates found the mixed-motive
question untouched: "Harris v. City of Santa Monica" — zero hits in
either file; "mixed-motive" — zero; "same-decision" — zero;
"substantial motivating" — 3 clause hits, none about FEHA causation;
"same decision" — 13 hits, all the phrase "the same decision" used in
gap fields to mean "the same opinion"; "Alamo v" — zero; "CACI No.
2512" — zero; "Price Waterhouse" / "Desert Palace" / "2000e-5(g)" —
zero.

The chosen topic — what happens when a termination was motivated by
both a discriminatory (or retaliatory) reason and a legitimate one,
under Harris v. City of Santa Monica (2013) 56 Cal.4th 203 — was
confirmed genuinely open. It is the causation and remedies question
that sits between the corpus's existing "was the discharge wrongful"
sheets (public policy, at-will/Guz, FEHA administrative complaint) and
its "how are damages measured" sheet (Parker mitigation), and none of
those addresses the "substantial motivating factor" standard or the
same-decision limitation on remedies.

## What this document covers

9 clauses: 1 drafting (applicability note) and 8 authority clauses,
with 48 citation-quote instances drawn from Gov. Code § 12940(a) (1),
Gov. Code § 12965(c)(6) (1), Harris v. City of Santa Monica (33),
Alamo v. Practice Management Information Corp. (5), the Judicial
Council's 2026-edition CACI Nos. 2507 (1) and 2512 (4), and 42 U.S.C.
§§ 2000e-2(m) and 2000e-5(g)(2)(B) (2):

- **`mixedmotive_declaration`** (drafting) — applicability note naming
  the employee, employer, position, separation date, and the
  employer's stated reason while disclaiming any determination that a
  protected characteristic played a part or that the employer would
  have made the same decision.
- **`mixedmotive_feha_because_of_and_the_mixed_motive_question`** —
  § 12940(a)'s "because of" text; Harris's McDonnell Douglas summary;
  why the single-motive framework presupposes one "true" reason; the
  three plausible readings and the silent legislative history.
- **`mixedmotive_substantial_motivating_factor_standard`** — the
  "substantial motivating factor/reason" holding at p. 232; "mere
  discriminatory thoughts or stray remarks" (p. 225); discrimination
  need not be alone sufficient (p. 229); the Court's refusal to
  describe sufficient evidence in the abstract; CACI No. 2507's
  definition.
- **`mixedmotive_same_decision_showing_defined_not_complete_defense`**
  — the p. 224 definition; the p. 225 holding that the showing is not
  a complete defense; p. 232 "exposes the employer to liability";
  Alamo's summary (p. 481) that the defense is only a limitation on
  remedies.
- **`mixedmotive_remedies_unavailable_after_same_decision_showing`** —
  reinstatement and backpay rejected (pp. 232-233); windfall and
  employer-prerogative reasoning; front pay (p. 233); noneconomic
  damages "closer" but not compensable (pp. 233-234); the IIED
  aside; "better position" (p. 237).
- **`mixedmotive_remedies_available_declaratory_injunctive_attorney_fees`**
  — the three consequences (declaratory relief, injunctive relief,
  fees) at pp. 234-235; fee discretion and the "no public purpose"
  limit; the "In sum, we hold" fee holding; current § 12965(c)(6)
  text.
- **`mixedmotive_burden_standard_of_proof_and_pleading`** — the
  p. 241 allocation of burdens; preponderance (p. 239); the pleading
  requirement and the sufficiency of the City's answer (p. 240); no
  need to concede mixed motives (p. 240); Alamo's waiver holding and
  the motion-in-limine timing (p. 482).
- **`mixedmotive_jury_instructions_caci_2512_and_alamo`** — Harris's
  instruction direction (p. 241); CACI No. 2512's operative text and
  Directions for Use (mixed-motive vs. pretext); Alamo's holding that
  former CACI Nos. 2430, 2500, 2505, and 2507 were prejudicially
  erroneous (pp. 482-483) and its rejection of the "no meaningful
  distinction" argument (p. 479).
- **`mixedmotive_federal_title_vii_comparison`** — 42 U.S.C.
  § 2000e-2(m) and § 2000e-5(g)(2)(B) text; Harris's description of
  the 1991 amendments (pp. 219-220).

## Genuine findings

- **Slip opinion vs. official reporter, Harris p. 232.** The Supreme
  Court's slip opinion as filed (storage.courtlistener.com copy) reads
  "We hold that that the jury should instead determine whether
  discrimination was ―a substantial motivating factor/reason,‖ and
  that..." — a doubled "that" and a comma inside the closing quotation
  mark. The official-reporter text on CourtListener (both fetches) has
  neither. The reporter text is quoted; the variant is disclosed in the
  clause's gap field and accepted in `build.py` only through an
  explicit, printed exception that requires the variant sentence to be
  present in the slip copy (it is).
- **Slip opinion vs. reporter, Alamo p. 470.** For Alamo's
  introductory holding sentence, CourtListener's reporter-based text
  reads `"a substantial motivating" reason,` while the slip PDF reads
  `"a substantial motivating reason,"`. Rather than pick a side, the
  clause quotes Alamo's concluding summary at pp. 482-483, on which
  both copies agree; the discrepancy is disclosed in the gap field.
- **Quotation-mark artifact in the Harris HTML.** Throughout the
  passage construing "because of," CourtListener renders the closing
  quotation mark as an apostrophe (`“because of’`). Every sentence
  containing that artifact was avoided; the three-readings passage is
  represented by its artifact-free final sentences (p. 217).
- **Statutory renumbering.** Harris cites the FEHA fee provision as
  § 12965(b); the Legislature's current text places it at
  § 12965(c)(6) and adds a limit on fee awards to prevailing
  defendants. The clause quotes the current text and notes the
  renumbering.
- **§ 12940(a) has been amended since Harris.** The version quoted
  (current leginfo text) lists reproductive health decisionmaking,
  genetic information, gender identity/expression, and veteran or
  military status, which the version quoted inside the Harris opinion
  does not; the "because of" causation language is unchanged. Noted in
  the gap field.
- **Name of the 1991 federal statute.** Harris calls it the "Civil
  Rights Restoration Act of 1991"; the enacting statute is commonly
  cited as the Civil Rights Act of 1991. Quoted as Harris wrote it and
  flagged in the gap field without resolution.
- **Pin cites audited against `*NNN` markers** in the CourtListener
  text (Harris: 211, 214-215, 215, 217, 219, 220, 224, 225, 229, 232,
  232-233, 233, 234, 235, 237, 239, 240, 241; Alamo: 479, 481, 482,
  482-483). CACI pin cites are the printed page numbers (2507 at
  1560-1561; 2512 at 1577-1579; PDF pages 1634-1635 and 1651-1653).
- **Nested quotations.** Harris's p. 235 fee sentence quotes an
  earlier decision's "unnecessary litigation of claims that serve no
  public purpose" language; the words are attributed to Harris as
  quoted there and the underlying decision was not fetched. The
  "substantial factor" formulation traces to Justice O'Connor's Price
  Waterhouse concurrence, not fetched; disclosed.

## Honest gap(s) disclosed

This document does not independently fetch or quote Price Waterhouse
v. Hopkins (1989) 490 U.S. 228; Desert Palace, Inc. v. Costa (2003)
539 U.S. 90; Gross v. FBL Financial Services, Inc. (2009) 557 U.S.
167; Guz v. Bechtel National, Inc. (2000) 24 Cal.4th 317 (beyond
Harris's summary of it); Aguilar v. Avis Rent A Car System, Inc.
(1999) 21 Cal.4th 121; Husman v. Toyota Motor Credit Corp. (2017) 12
Cal.App.5th 1168; Davis v. Farmers Ins. Exchange (2016) 245
Cal.App.4th 1302; Code Civ. Proc. §§ 431.30 or 1060; Lab. Code
§ 1102.6; or 2 Cal. Code Regs. § 11009(c) (cited in CACI No. 2507's
Sources and Authority). Each is disclosed in the relevant gap field
rather than paraphrased as verified fact. The document also does not
address adverse actions other than termination, punitive damages,
workers' compensation exclusivity as a bar to the IIED claim Harris
mentioned, the federal treatment of retaliation or the ADEA, or how a
court would exercise fee discretion in a given posture.

A second, phrase-level verification through CourtListener's public
search endpoint (`cluster_id:<id> AND "<phrase>"`) was **not**
possible: after one successful anonymous query the endpoint returned
`{"detail":"Request was throttled. Expected available in 24001
seconds."}` for every further request. The independent second path for
each opinion is therefore the slip-opinion PDF on
storage.courtlistener.com (see Method), not the search index. Zero
CourtListener MCP calls were made.

## Method

Statutes: Gov. Code §§ 12940 and 12965 each fetched twice from
leginfo.legislature.ca.gov via curl through the environment proxy with
two distinct User-Agent strings ("curl-groundtruth/1.0" and a Safari
UA); extracted section text byte-identical for each section.

Federal statute: 42 U.S.C. §§ 2000e-2 and 2000e-5 fetched from the
Legal Information Institute (law.cornell.edu) and, independently, from
the Office of the Law Revision Counsel (uscode.house.gov, prelim
edition); the quoted provisions match apart from LII's typographic
apostrophe/em dash versus OLRC's plain characters and whitespace that
LII's hyperlink markup introduces before punctuation (both normalized;
see below).

Case law, without touching the shared CourtListener MCP quota: one
anonymous query to the public `/api/rest/v4/search/?type=o` endpoint
located Alamo (cluster 1039967) before the endpoint throttled;
Harris's cluster (821508) was then found through CourtListener's HTML
front-end search page, which served with browser headers. Path A for
each opinion: the CourtListener opinion HTML page, fetched twice with
two distinct browser header sets (Chrome/Windows and Safari/macOS,
each with `Referer: https://www.courtlistener.com/`), both HTTP 200
and byte-identical after extraction (the earlier-documented empty-202
bot challenge did not recur). Path B: the courts' slip-opinion PDFs
mirrored on storage.courtlistener.com (`pdf/2013/02/07/
harris_v._santa_monica.pdf`, SHA-256 `94c49004…dea9`;
`pdf/2013/09/05/alamo_v._practice_management_etc..pdf`, SHA-256
`9d4570c1…ab03`), text extracted with pdfplumber. The California
Courts' own archive URL for S181004 returned 404.

CACI: the Judicial Council's 2026-edition PDF
(`judicial_council_of_california_civil_jury_instructions_2026.pdf`,
11.27 MB) downloaded twice from courts.ca.gov with two distinct
User-Agent strings; SHA-256 identical (`592a3bd5…62ec`). Instruction
2507 sits at PDF pages 1634-1635 (printed 1560-1561); 2512 at
1651-1653 (printed 1577-1579). Text extracted with pdfplumber.

All 48 citation-quote instances across the 8 authority clauses were
programmatically verified by a Python script (`build.py`, dry run
before writing) asserting each quote is an exact contiguous substring
of every fetched copy of its source after the disclosed
normalizations: whitespace collapse; nbsp → space; curly quotation
marks and apostrophes, and the slip opinions' non-standard glyphs
(`―` `‖` `‗` `‘` `‟`), mapped to plain ASCII quotes; en/em dashes
mapped to hyphens; removal of `*NNN` star-pagination markers from
CourtListener pages; removal of `===== PAGE N =====` separators, bare
page numbers, and "FAIREMPLOYMENTANDHOUSINGACT CACI No. NNNN" running
headers from the PDF extractions; re-joining of a hyphenated compound
split at a PDF line end ("same-\ndecision"); and removal of whitespace
before `;` `,` `.` introduced by HTML link boundaries. One quote (the
Harris p. 232 "We hold that the jury should instead determine"
sentence) is accepted against the slip PDF only through the disclosed
variant described under Genuine findings. Result: 48/48.

## Verification

- Quote-verification output (final): every citation in
  `mixedmotive_feha_because_of_and_the_mixed_motive_question` (5),
  `mixedmotive_substantial_motivating_factor_standard` (6),
  `mixedmotive_same_decision_showing_defined_not_complete_defense` (6),
  `mixedmotive_remedies_unavailable_after_same_decision_showing` (7),
  `mixedmotive_remedies_available_declaratory_injunctive_attorney_fees`
  (6), `mixedmotive_burden_standard_of_proof_and_pleading` (7),
  `mixedmotive_jury_instructions_caci_2512_and_alamo` (7),
  `mixedmotive_federal_title_vii_comparison` (4) — OK against every
  fetched copy of its source (both HTML fetches and the slip PDF for
  each opinion; both leginfo fetches for each statute; LII and OLRC
  for the federal code; both CACI downloads, which are identical).
- Corpus-wide validation after merge: both JSON files parse; 655
  documents and 5,422 clauses; clause ids and document ids unique;
  every `clauseOrder` id in every document exists; every
  `{{fieldId}}` placeholder in every clause body (and gap) of every
  document resolves to a declared field; every drafting clause has
  exactly `{id,title,kind,body}`; every authority clause has exactly
  `{id,title,kind,status,checkedDate,body,gap,citations}` with a
  non-empty gap; every citation has exactly `{case,cite,url,quote}`
  with no empty values. The diff to both data files is purely
  additive (433 inserted lines, none removed).
- Checked for `{{` leakage in every new clause's `title`/`gap` and
  every citation's `case`/`cite`/`url`/`quote` — clean.
- The five declared fields (`employeeName`, `companyName`,
  `positionTitle`, `terminationDate`, `employerStatedReason`) are the
  only placeholders used.
- Inform-never-advise review: every clause states what the statute,
  the courts, and the instructions say and ends by identifying the
  facts it does not determine; no clause tells a reader whether to
  plead a defense, what to claim, or how to try a case.
