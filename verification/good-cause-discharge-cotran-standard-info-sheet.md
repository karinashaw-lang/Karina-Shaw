# Ending employment, new document: "Good Cause" for Discharge Under an Implied Employment Contract and the Jury's Role (Lab. Code § 2922; Cotran v. Rollins Hudig Hall Internat.; Jameson v. Pacific Gas & Electric Co.; CACI Nos. 2404, 2405) — Information Sheet

## Why this document

Processed item of **wave 172** (Ending employment slot, continuing the
round-robin with waves 146/148/150/152/154/156/158/160/162/164/166/168/170).
Read all 89 existing "Ending employment" document titles and ids in
`data/documents.json` before choosing a topic, then grepped the whole
corpus (both data files) for every candidate the brief named and for
every candidate of my own.

Results of the dup-check on the brief's named candidates:

- **McDonnell Douglas burden-shifting under FEHA (Guz Part IV; Reid v.
  Google on stray remarks)** — substantially covered already:
  `McDonnell Douglas` 16 clause hits, `Guz v. Bechtel` 31,
  `Reid v. Google` 1, `stray remark` 3, `pretext` 17. The framework is
  carried by `mixed_motive_same_decision_defense_harris_info_sheet` and
  `whistleblower_retaliation_1102_6_burden_framework_info_sheet`
  (which has a clause expressly titled "McDonnell Douglas does not
  govern").
- **Lab. Code § 132a** — already its own document,
  `workers_compensation_retaliation_132a_info_sheet`.
- **Defamation and compelled self-publication in references** — already
  its own document, `compelled_self_publication_defamation_info_sheet`
  (and `employer_reference_immunity_info_sheet` for § 47(c)).
- **Unemployment insurance overpayment and recovery** — already its own
  document, `ui_overpayment_fraud_info_sheet`.
- **Duty to return company property / withholding final pay** — already
  covered by `property_return` plus the final-pay sheets
  (`waiting_time_penalty_demand`, `final_paycheck_delivery_method_...`,
  `bona_fide_wage_dispute_info_sheet`).
- **Intentional interference with an employment relationship by a third
  party** — still genuinely empty (`Reeves v. Hanlon` 0, `Buckaloo` 0),
  as the wave-170 file also recorded. Held again for a later wave; it
  reads as a business-tort topic more than an ending-employment one.

**What "good cause" means, and who decides whether the misconduct
happened**, was the chosen topic, and the dup-check is clean:

- `Cotran` — **1 hit** in `data/clauses.json` before this change, and
  that hit is not about Cotran at all: it is the string
  "Cotran v. Rollins Hudig Hall Internat., Inc. (1998) 17 Cal.4th 93"
  appearing inside a *parallel citation* in the
  `atwillguz_freedom_to_contract_around_default` clause, which quotes
  Guz quoting **Scott v. Pacific Gas & Electric Co.** for the phrase
  "a fair and honest cause or reason, regulated by good faith."
  Nothing in the corpus stated Cotran's holding.
- `Rollins Hudig` — 1 (the same parallel citation). `17 Cal.4th 93` — 1
  (same). `Wilkerson` — 1, and that hit is only the bare surname inside
  a list of out-of-state and lower-court authorities in the gap field of
  `atwillguz_handbook_disclaimers_and_personnel_policies`; the case was
  nowhere discussed. `adequate investigation`
  — **0**. `substantial evidence gathered` — **0**.
  `thrust into a managerial role` — **0**. `Walker v. Blue Cross` — **0**.
  `CACI No. 2404` — **0**. `Jameson` — **0**.
  `King v. United Parcel` — **0**. `Serri v. Santa Clara` — **0**.
- The neighbouring sheet
  `at_will_presumption_implied_contract_guz_info_sheet` answers a
  *different* question — whether a for-cause agreement exists at all
  (§ 2922's presumption, the Foley/Pugh factors, handbook disclaimers,
  the implied covenant). It does not say what "good cause" requires once
  such an agreement is found, and it does not touch the jury's role when
  the employee denies the misconduct. That is this sheet's entire
  subject.

One deliberate clause-level overlap is disclosed rather than hidden: the
operative sentence of Labor Code § 2922 is quoted both in the new
`cotrangc_when_the_standard_applies` clause and in
`atwillguz_statutory_presumption`. The new clause's `gap` field says so
in terms and points the reader at the other sheet; the statute is the
threshold condition for everything else here, so the sheet would not be
readable on its own without it.

## What this document covers

Document id `good_cause_discharge_cotran_standard_info_sheet`,
**15 clauses** — 2 drafting and 13 authority — with **46
citation-quote instances**: Cotran majority (31, of which 2 are from
footnote 1 and 1 from footnote 3), Cotran conc. opn. of Mosk, J. (5),
Jameson (5), CACI No. 2404 (2), CACI No. 2405 (2), Lab. Code § 2922 (1).

- **`cotrangc_declaration`** (drafting) — scope note naming the employee,
  employer, position, hire and separation dates and the employer's stated
  reason; disclaims any determination that a contract existed, that any
  investigation occurred, or that good cause existed.
- **`cotrangc_when_the_standard_applies`** — § 2922's default, plus
  Cotran footnote 1: the limitation in Cotran was implied (preliminary
  negotiations and a letter about "permanent employment"), and an
  **explicit** good-cause promise "may call for a different standard,
  depending on the precise terms of the contract provision."
- **`cotrangc_question_presented_and_holding`** — the opening question at
  p. 95, the grant of review at p. 99, and the disposition at p. 109
  (the critical question is whether the employer, in good faith and
  after an appropriate investigation, had reasonable grounds to believe).
- **`cotrangc_good_cause_defined`** — Pugh I's "fair and honest cause or
  reason, regulated by good faith" at p. 100 and the operative
  Scott-Pugh definition at p. 108, including "a reasoned conclusion, in
  short, supported by substantial evidence gathered through an adequate
  investigation that includes notice of the claimed misconduct and a
  chance for the employee to respond."
- **`cotrangc_proper_inquiry_for_the_jury`** — the p. 107 contrast
  ("Did the employee in fact commit the act …?" vs. "Was the factual
  basis … reached honestly …?"), the two-inquiries paragraph, and the
  p. 103 statement that the jury assesses the **objective
  reasonableness** of the employer's factual determination.
- **`cotrangc_employer_retains_the_factfinding_prerogative`** — Simpson
  (Or.) on the fact-finding prerogative at p. 103, Baldwin (Wash.) at
  p. 104, and Cotran's own p. 102 adoption sentence.
- **`cotrangc_objective_not_subjective_good_faith`** — Baldwin's
  "checks the subjective good faith … with an objective reasonable
  belief standard" (p. 104), the substantial-evidence/reasonable-belief
  formulation (p. 105), and footnote 3's "reasonable employer"
  explanation (pp. 106-107).
- **`cotrangc_wilkerson_de_novo_rule_disapproved`** — what Wilkerson held
  (p. 101), why the Wilkerson-Toussaint standard was rejected (p. 106),
  the "signed confession or an eyewitness account" passage (p. 106), and
  the disapproval sentence (p. 96).
- **`cotrangc_what_an_adequate_investigation_contemplates`** — p. 108:
  the court's refusal to specify the essentials of an adequate
  investigation, Lord Halsbury in Board of Education v. Rice, and
  Pinsker's fair-procedure rule.
- **`cotrangc_managerial_discretion_substantial_but_not_unlimited`** —
  Walker's balancing and "not unrestricted" language (p. 100) and
  Pugh II's "wide latitude" / "should not be thrust into a managerial
  role" (pp. 100-101).
- **`cotrangc_pretext_and_arbitrariness_remain_reviewable`** — the
  employee's standardless-good-faith argument and the court's answer
  (p. 106), the scrutiny sentence (p. 107), and "All of the elements of
  the governing standard are triable to the jury." (p. 108).
- **`cotrangc_mosk_concurrence_substantial_evidence_and_default_definition`**
  — Justice Mosk's three points at pp. 109-110, labelled in both body and
  gap as a **concurrence, not a holding**.
- **`cotrangc_jameson_three_determinations_and_summary_judgment`** —
  Jameson's three factual determinations, the "could have been better or
  more comprehensive" sentence, King's honest-belief rule, and Serri's
  summary-judgment qualification.
- **`cotrangc_pattern_jury_instructions_2404_and_2405`** — the text of
  CACI No. 2404, its Directions for Use pointing to No. 2405 where the
  misconduct is disputed, and the two operative paragraphs of CACI
  No. 2405.
- **`cotrangc_signature_block`** (drafting) — declaration, and a closing
  note that the sheet is not a demand, claim, pleading, notice or
  agreement.

## Sources and how each was fetched twice

Every one of the 46 quotes was checked programmatically against **two**
independently retrieved copies of its source after ligature/nbsp and
whitespace normalization. Final end-to-end run against the merged
`data/clauses.json`: **15 clauses, 46 citations, 0 failures**, 4 of the
92 (quote × pass) checks matching only after whitespace-insensitive
comparison — all four are the two CACI No. 2405 paragraphs, whose PDF
text layer splits words with kerning spaces ("Y ou may ﬁnd"). That
normalization is disclosed in the clause's own `gap` field.

| Source | Pass A | Pass B |
| --- | --- | --- |
| Lab. Code § 2922 | leginfo `codes_displaySection.xhtml?lawCode=LAB&sectionNum=2922.` via curl through the environment proxy, Chrome UA | the **WebFetch tool** on the same section — a structurally different fetcher and renderer; it returned the identical operative sentence plus "(Amended by Stats. 1971, Ch. 1607.)" |
| Cotran v. Rollins Hudig Hall Internat., Inc. (1998) 17 Cal.4th 93 | CourtListener opinion HTML, cluster **1125361**, Chrome UA + `Referer: https://www.courtlistener.com/` + Accept | the quota-free **`/c/Cal.4th/17/93/` citation redirect**, Firefox UA + different Accept/Accept-Language; it resolved to opinion 1125361 and returned a **byte-identical** 150,177-byte body |
| Jameson v. Pacific Gas & Electric Co. (2017) 16 Cal.App.5th 901 | CourtListener opinion HTML, cluster **4439816**, Chrome UA + Referer | the **slip-opinion PDF** on `storage.courtlistener.com` (`/pdf/2017/11/01/jameson_v._pacific_gas_and_electric_co..pdf`), Firefox UA, text extracted with pypdf — a genuinely different artifact, not a re-render of the same HTML |
| CACI Nos. 2404 & 2405 (2026 ed.) | `courts.ca.gov/system/files/file/judicial_council_of_california_civil_jury_instructions_2026.pdf`, Chrome UA | the same PDF re-downloaded with a Firefox UA and `Accept: application/pdf`; both copies are 11,274,649 bytes with sha256 `592a3bd5…625662ec`, and the extracted text of PDF pages 1544/1545/1547/1548 (printed pp. 1470, 1471, 1473, 1474) is identical |

On top of the paired fetches, Cotran received a **third, structurally
independent check**: exact-phrase queries against the public
CourtListener search API restricted to the cluster id. This queries a
server-side index rather than re-reading the page HTML.

| Query | Result |
| --- | --- |
| `cluster_id:1125361 AND "supported by substantial evidence gathered through an adequate investigation that includes notice of the claimed misconduct and a chance for the employee to respond"` | count=1 → *Cotran v. Rollins Hudig Hall International, Inc.* |
| `cluster_id:1125361 AND "Was the factual basis on which the employer concluded a dischargeable act had been committed reached honestly, after an appropriate investigation and for reasons that are not arbitrary or pretextual"` | count=1 → *Cotran v. Rollins Hudig Hall International, Inc.* |
| `cluster_id:1125361 AND "All of the elements of the governing standard are triable to the jury"` | count=1 → *Cotran v. Rollins Hudig Hall International, Inc.* |

The official citation of Jameson was confirmed the same quota-free way:
`/c/Cal.App.5th/16/901/` resolves to a CourtListener opinion page for
*Jameson v. Pac. Gas & Elec. Co.* (the official-reports cluster,
6239177), which is what fixes the "16 Cal.App.5th 901" cite used in the
citations; the slip-opinion cluster 4439816 carries no citation field.

**No MCP CourtListener tool was used at any point.** The API budget
actually spent was **five** anonymous `/api/rest/v4/search/` calls (two
case lookups plus the three phrase checks). The endpoint returned HTTP
429 three times during the session; each was ridden out with a 300-second
`sleep` retry loop inside the turn. The `/api/rest/v4/opinions/` endpoint
was tried once and refused anonymous access (401), so the second Cotran
pass went through the citation redirect instead.

## Genuine findings and corrections

- **Two quotes had to be re-cut because the reporter text opens them with
  a bracketed letter.** The first drafts read "The common law requirement
  of a fair procedure …" and "an employer must have wide latitude …";
  the source prints "**[t]he** common law requirement …" and "**[A]n**
  employer must have wide latitude …". Both quoted strings were corrected
  to reproduce the brackets, and both then matched exactly. Nothing in
  the corpus was written from the uncorrected strings.
- **Star-pagination markers were avoided rather than quoted through.**
  The CourtListener render of Cotran interleaves `*NNN` page markers, and
  several of them fall mid-sentence — most importantly inside the
  sentence that introduces the good-cause definition ("in the context of
  implied ***108** employment contracts"). Rather than delete a marker
  from inside a quotation, every quote was cut so that no marker falls
  within it. `cotrangc_good_cause_defined`'s gap field states that this
  is why the quotation begins where it does.
- **Pin cites were computed from star pagination, not guessed — and the
  computation corrected eight of mine.** A script located each verified
  quote in the normalized opinion text and reported the nearest preceding
  `*NNN` marker plus any marker falling inside the quote. It changed:
  "We granted review …" from 99-100 to **99**; the disposition sentence
  from 108-109 to **109**; "these courts have arrived at a standard …"
  from 102-103 to **103**; the Baldwin "not for [an] arbitrary,
  capricious, or illegal reason" formulation from 104-105 to **105**;
  "We believe the Wilkerson-Toussaint standard is too intrusive" from
  105-106 to **106**; Pugh II's "wide latitude" from 100-101 to **100**;
  and the "will ensure that 'good cause' dismissals continue to be
  scrutinized" sentence from 106-107 to **107**. Jameson's "The issue is
  not whether Lee's conclusions were correct" was widened from 910 to
  **909-910**, since the slip opinion carries no star pagination and only
  the sentences CACI pins can be fixed to 910 exactly.
- **Three computed pages are known artifacts and were not followed.**
  CourtListener prints the majority's footnotes *after* the disposition
  and before the concurrences, so the nearest-preceding-marker method
  reports p. 109 for footnote 1 and p. 107 for Justice Mosk's first
  point. Footnote 1 is called on p. 96 (it precedes the `*97` marker) and
  is cited "96, fn. 1"; footnote 3 contains a `*107` marker inside itself
  and is cited "106-107, fn. 3"; Mosk's concurrence begins at p. 109 and
  his first point crosses to p. 110 (the `*110` marker falls inside that
  paragraph), so it is cited "109-110".
- **The CourtListener scan of Cotran carries OCR damage, and quoting was
  restricted accordingly.** The text renders "the state's **modem**
  wrongful termination employment law" (for "modern"), "the jury's**,**
  function", "Toussaint v. Blue Cross **§** Blue Shield of Mich.", "fi[]"
  where a paragraph mark belongs in the Walker quotation, "Crosier v.
  United Parcel Service, Inc**,**", and "Douglás D. Mandell" in the
  counsel list. **Nothing from any damaged span is quoted.** The
  Wilkerson-disapproval quote stops before the OCR-damaged "jury's,
  function"; the "too intrusive" quote stops before "modem"; the Walker
  quote begins after the "fi[]" artifact. The clause bodies state
  Toussaint's name correctly ("Blue Cross & Blue Shield") from the
  reporter citation rather than from the damaged string.
- **CACI text required two disclosed normalizations.** The 2026 edition
  PDF's text layer uses the "ﬁ" ligature and inserts kerning spaces
  inside words. Both were normalized (ligature expanded to the two
  letters; intra-word spaces closed) with no word changed, added or
  removed, and `cotrangc_pattern_jury_instructions_2404_and_2405`'s gap
  field discloses this in terms. The bracketed CACI placeholders and the
  optional bracketed clause in No. 2404 are reproduced as printed,
  including the spacing inside brackets that the instruction itself uses.
- **Out-of-state and intermediate authorities are quoted only as Cotran
  and Jameson reproduce them, and every such clause says so.** Simpson
  (Or.), Baldwin (Wash.), Kestenbaum (N.M.), Vargas (Nev.), Toussaint
  (Mich.), Walker, Pugh I, Pugh II and Wilkerson were **not**
  independently fetched, and neither were Serri and King; each relevant
  gap field discloses that the quotation comes from the California
  opinion that cites it.
- **One limit of the holding is stated in the body, not buried.** Cotran
  expressly reserved "the question of the jury's role in resolving the
  related but separate issue of whether the reasons assigned by an
  employer for termination are legally sufficient to constitute good
  cause." Because a `*100` marker falls inside that sentence it is not
  quoted; it is paraphrased in the `cotrangc_question_presented_and_holding`
  gap field, which flags the reservation.

## Schema and corpus validation

- `data/clauses.json` and `data/documents.json` both parse; both were
  rewritten with `indent=2`, `ensure_ascii=False` and a trailing newline,
  which reproduces the pre-existing files **byte for byte** outside the
  appended blocks (verified by round-tripping each file before the merge).
  `git diff --stat`: 512 insertions, 0 deletions.
- All 13 authority clauses carry exactly
  `id, title, kind, status, checkedDate, body, gap, citations` in that
  order, `status: "verified"`, `checkedDate: "2026-09-13"`, and a
  non-empty `gap`. Both drafting clauses carry exactly
  `id, title, kind, body`. Every citation object carries exactly
  `case, cite, url, quote` in that order.
- Corpus-wide after the merge: **6,096 clauses, 705 documents, 90
  "Ending employment" documents**; 0 duplicate clause ids, 0 duplicate
  document ids, 0 `clauseOrder` entries without a matching clause, 0
  orphan clauses, 0 authority clauses with an out-of-order key set, 0
  authority clauses with an empty gap, and **0 unresolved
  `{{placeholder}}`s** across all 705 documents (every placeholder in a
  clause body or gap resolves to a field declared by each document that
  uses that clause).
- The new document declares nine fields — `employeeName`, `companyName`,
  `positionTitle`, `hireDate`, `terminationDate`, `statedReason`,
  `preparerName`, `dateSigned`, `cityState` — and every one of them is
  used by at least one clause in `clauseOrder`.

## Inform-never-advise check

Every authority clause states what the statute, the opinions or the
pattern instructions say. No clause tells the reader what to do, what to
sign, whom to contact, or whether any claim or defence would succeed.
The clauses that come closest to the line are the investigation clause
and the Mosk concurrence clause, because both describe procedural
fairness; each is written as a report of what the court said and each
gap field states expressly that the sheet does not evaluate any
investigation concerning `{{employeeName}}`. The declaration and the
signature block both disclaim any evaluation of the separation or of the
reason recorded in `{{statedReason}}`.
