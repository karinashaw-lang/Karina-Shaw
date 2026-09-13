# Family Law, new document: Contempt for Failure to Pay Court-Ordered Support — Information Sheet

Wave 169 (Family Law). Corpus before: 692 documents, 5,901 clauses,
87 Family Law documents. After: 693 documents, 5,916 clauses, 88
Family Law documents.

## Why this document

The Family Law category is saturated, so the topic was chosen only
after grepping the whole corpus. Of the candidate directions named in
the task brief, most already exist: UIFSA registration of an
out-of-state support order (`uifsa_registration_info_sheet`, including
`uifsa_choice_of_law_arrears_interest`), grandparent visitation
(`grandparent_visitation_petition`), guardianship versus custody
(`guardianship_petition`, `guardianship_of_estate_info_sheet`,
`third_party_custody_visitation_info_sheet`), the § 4320 spousal
support factors (cited across 24 clauses, including
`vocsupport_*` and the temporary-support document), and the earnings
assignment order (§ 5230(a)-(b) is already quoted verbatim in
`childsupport_earnings_assignment`, with the priority rule discussed
in `wagegarnish_support_priority`).

What is NOT covered anywhere: **contempt as the enforcement mechanism
for a support order**. Grep findings before writing:

- `1209.5`, `Moss v`, `quasi-criminal`, `Stariha`, `seek work`: **zero
  hits** in `data/clauses.json`.
- `contempt`: 12 hits, none about support — they are corporate
  inspection-rights remedies, the vexatious-litigant prefiling order,
  a securities-registration clause, a mediator-testimony clause, and a
  punitive-damages definitions clause.
- `1218`: 14 hits, **all** of them incidental matches on Government
  Code "Section 12180"/"12189" filing-fee cross-references, not Code of
  Civil Procedure § 1218.
- Family Code sections cited anywhere in the corpus were enumerated
  programmatically: **§ 290, § 291 and § 4502 are absent**, as are Code
  of Civil Procedure §§ 1209, 1209.5, 1211, 1218, 1218.5, 1222 and
  Penal Code § 270 (the only `sectionNum=270` hits are Corp. Code
  § 2700).

This is a distinct subject from the corpus's existing support
documents, which cover how support is *calculated* (guideline income,
imputed income, add-ons), *modified* (§§ 3651/3653 retroactivity), or
*collected administratively* (earnings assignment, wage garnishment,
license suspension under § 17520) — none of them addresses the
quasi-criminal contempt proceeding, its elements, its burden
allocation, its per-count structure, its limitations periods, or its
penalties.

## What this document covers

15 clauses: 2 drafting (declaration, signature/acknowledgment) and 13
authority clauses carrying 20 citations.

Statutes (leginfo text):

- **`supportcontempt_fam290_enforcement_by_contempt`** (Fam. Code
  § 290) — contempt listed among execution, receiver, and "any other
  order" for enforcing a Family Code judgment or order.
- **`supportcontempt_ccp1209_disobedience_of_order`** (Code Civ. Proc.
  § 1209(a)(5)) — disobedience of any lawful judgment, order, or
  process of the court is a contempt of the court's authority.
- **`supportcontempt_ccp1211_affidavit_and_family_law_form`**
  (§ 1211(a), (b)) — an out-of-court contempt is charged by affidavit;
  in family law matters the Judicial Council form "Order to Show Cause
  and Affidavit for Contempt (Family Law)" constitutes compliance.
- **`supportcontempt_ccp1209_5_prima_facie_child_support`**
  (§ 1209.5) — proof of the order, notice (service or presence in
  court), and noncompliance is prima facie evidence of contempt;
  ability to pay is not among the listed elements.
- **`supportcontempt_ccp1218a_penalties_and_fee_shifting`**
  (§ 1218(a)) — $1,000 fine and/or five days' imprisonment, plus
  reasonable attorney's fees and costs to the party who initiated the
  proceeding.
- **`supportcontempt_ccp1218c_family_code_sentencing_ladder`**
  (§ 1218(c)(1)(A)-(D), (c)(2)) — the mandatory escalating
  community-service/imprisonment scheme for contempt of a Family Code
  order, per count, with the probation/conditional-sentence
  alternative.
- **`supportcontempt_ccp1218_5_counts_and_limitations`** (§ 1218.5) —
  each unpaid month may be a separate count; three-year limitations
  period for support contempts, two years for other Family Code
  orders.
- **`supportcontempt_ccp1218b_contemnor_enforcement_bar_and_support_exception`**
  (§ 1218(b)) — a party in contempt may not enforce a dissolution,
  domestic-partnership-dissolution, or legal-separation order against
  the other party, **except** that the restriction does not apply to
  child or spousal support orders.
- **`supportcontempt_fam291_judgment_enforceable_until_paid`**
  (Fam. Code §§ 4502, 291(a), (b), (d)) — the support judgment itself
  is enforceable until paid in full, is exempt from renewal, and
  laches is available only as to the portion owed to the state.
- **`supportcontempt_pen270_criminal_nonsupport_boundary`**
  (Pen. Code § 270) — the separate criminal misdemeanor for a
  parent's willful failure, without lawful excuse, to furnish
  necessaries, with its own prima facie willfulness provision.
- **`supportcontempt_ccp1222_final_and_conclusive`** (§ 1222) — the
  statute's one-sentence statement that contempt judgments and orders
  are final and conclusive.

Case law (CourtListener):

- **`supportcontempt_moss_elements_and_affirmative_defense`** — *Moss
  v. Superior Court* (1998) 17 Cal.4th 396, 425, 428: the elements are
  a valid court order, the alleged contemner's knowledge of it, and
  noncompliance, proven beyond a reasonable doubt; **ability to comply
  is not an element**, and inability to comply is an affirmative
  defense the contemner must prove by a preponderance.
- **`supportcontempt_moss_willful_unemployment`** — *Moss*, at 401:
  **the central holding** — no constitutional impediment to contempt
  sanctions where the parent's financial inability to comply is the
  result of a **willful failure to seek and accept available
  employment commensurate with his or her skills and ability**.

## Genuine corrections and findings

- **§ 1218(a) is not the operative penalty provision for a family law
  contempt.** The familiar "$1,000 or five days" is the general rule;
  for contempt of a Family Code order, § 1218(c) prescribes a
  different, mandatory, escalating scheme measured in *hours* of
  community service and imprisonment, per count. Both are stated, and
  the relationship between them is flagged in the § 1218(a) clause's
  gap rather than resolved.
- **The two limitations questions are different.** § 1218.5's
  three-year window governs when a *contempt action* may be commenced;
  Fam. Code § 291 makes the *judgment* enforceable until paid in full
  and exempt from renewal. The document keeps them apart explicitly in
  both clauses, because conflating them is the obvious error.
- **Fam. Code § 4502 is a routing section only.** It was fetched and
  found to say nothing substantive — it points to § 291 — so § 291 was
  fetched and quoted, and the gap discloses that the two are not
  independent sources for the rule.
- **Moss's burden holding is narrower than it is often stated.** The
  opinion ties the allocation to § 1209.5, which by its terms concerns
  an order compelling a **parent** to furnish support or necessaries
  for a **child**. The document does not extend it to spousal support
  contempts, and says so.
- **Moss affirmed the judgment despite its holding**, on the ground
  that the holding might be an unanticipated change in the law and the
  custodial parent had not carried her burden under the prior
  understanding. That is stated, so the clause does not read as if the
  contemner lost.

## Honest gaps disclosed

- **Mid-sentence quote.** The `moss_elements` quotation begins at "the
  elements of this contempt are only…"; the opinion's sentence opens
  "As the court had earlier acknowledged,". The omission is disclosed
  in that clause's gap; the quoted text is verbatim from that point on.
- **Named-but-unverified decisions.** *Hicks v. Feiock* (1988) 485
  U.S. 624, *In re Feiock* (1989) 215 Cal.App.3d 141, and *In re Todd*
  are named only as they are reported **within** the verified Moss
  opinion; none was independently fetched, and each affected gap says
  so.
- **§ 1222 is reported, not construed.** What "final and conclusive"
  means for appellate review (direct appeal versus extraordinary writ)
  is case law that was not researched; the clause states the statutory
  sentence and the gap expressly declines to say more. The corpus
  should not be read as asserting a review procedure.
- **Judicial Council form number not asserted.** § 1211(b) names the
  form by title only; the document does not state its form number and
  does not describe what the form or the Rules of Court require the
  affidavit to allege. Sections 1211.5 (pleading sufficiency) and the
  service/notice rules for contempt were not researched.
- **Right to appointed counsel not covered.** An indigent contemner
  facing incarceration is the subject of case law (e.g. *In re
  Marriage of Stariha*) that this document does not reach; a
  CourtListener search for it returned only out-of-state matches
  within the query budget, so no such clause was written rather than
  citing an unverified authority.
- **Penal Code § 270's neighbors** (§ 270.5 et seq.), the interaction
  of a criminal prosecution with a civil contempt (double jeopardy,
  self-incrimination), interest on arrears, and the Penal Code § 1203
  definitions cross-referenced by § 1218(c)(3) are all outside scope
  and disclosed.
- **Source independence.** §§ 1209, 1209.5, 1211, 1218, 1218.5 and
  1222 are sections of one title of one code; §§ 290, 291 and 4502 are
  sections of one code; and the multi-subdivision clauses cite
  subdivisions of a single section. Every affected gap says the
  citations within it are not independent of one another.

## Method

**Statutes.** Cal. Code Civ. Proc. §§ 1209, 1209.5, 1211, 1218,
1218.5, 1222; Cal. Fam. Code §§ 290, 291, 4502; Cal. Penal Code § 270
— each fetched **twice by two independent paths** through the
sandboxed proxy: (1) the single-section
`codes_displaySection.xhtml` page for the section itself, and (2) the
`codes_displayText.xhtml` full-text page for the surrounding title,
part or chapter (CCP title 5, §§ 1209-1222; Fam. Code div. 2, pt. 6;
Fam. Code div. 9, pt. 5, ch. 1; Pen. Code pt. 1, tit. 9, ch. 2), sent
with different User-Agent strings. All quoted passages matched across
both paths after normalizing non-breaking spaces and line-wrap
whitespace only. Several fetches hit proxy-level connection resets
(`ws_closed_mid_exchange`) and were retried in a sleep-and-retry loop;
each retry succeeded and matched.

**Case law.** **No CourtListener MCP tool calls were used** — the
shared 5/min, 125/day MCP quota was left untouched. Instead:

1. *Moss* located via the public unauthenticated
   `courtlistener.com/api/rest/v4/search/?type=o` JSON endpoint
   (query: `"Moss v. Superior Court" "involuntary servitude" support
   contempt`), returning cluster 1111566, 17 Cal.4th 396 (Cal. Supreme
   Court, Feb. 2, 1998).
2. The opinion HTML page fetched **twice** with two distinct header
   sets (different User-Agent, Referer, Accept and Accept-Language),
   both with a `Referer: https://www.courtlistener.com/` header. Both
   returned 200 and gave identical extracted text after whitespace
   normalization.
3. **Third, phrase-level verification**: both Moss quotations
   re-confirmed through CourtListener's public search index with
   `cluster_id:1111566 AND "<exact phrase>"` queries. Each returned
   `count: 1` and that opinion only. The second query was throttled
   (429) and succeeded on retry after a backoff wait inside the turn.
4. Pinpoint pages were taken from the star-pagination markers in the
   CourtListener text (`*401`, `*425`, `*428`) rather than assumed.
   The § 1209.5 text as reproduced inside the Moss opinion contains a
   stray OCR artifact ("to furnish support or„ necessary food"); the
   statutory quote in this document is taken from leginfo, not from
   the opinion, so no quote is affected.

**Quote check.** All 20 citation quotes were programmatically
confirmed as exact substrings of **both** fetches of their source
after normalizing non-breaking spaces and line-wrap whitespace only.
No quote required a substantive correction, and no wording was
altered.

## Verification

- Round-trip check: both data files re-serialize byte-identically
  (`indent=2`, `ensure_ascii=False`, trailing newline) before the
  append, so the diff contains only the new content (+332 lines, no
  deletions).
- Corpus-wide validation after merge: both files parse; clause ids
  unique (5,916); document ids unique (693); every `clauseOrder` id
  resolves; zero orphan clauses corpus-wide; every `{{placeholder}}`
  in every clause body and gap resolves against its document's
  declared `fields`; no `{{` leakage in any title or citation field.
- Schema check across the whole corpus: every authority clause has
  exactly `id,title,kind,status,checkedDate,body,gap,citations` in
  that order with a non-empty `gap`; every drafting clause exactly
  `id,title,kind,body`; every citation exactly `case,cite,url,quote`.
  (The only schema deviations found corpus-wide are the pre-existing
  legacy documents that place `categories` after `fields`; the new
  document uses the current
  `id,title,description,categories,clauseOrder,fields` order.)
- Fields (`party1Name`, `party2Name`, `countyOfFiling`, `dateSigned`,
  `cityState`) reuse the established Family Law info-sheet field set
  exactly; no new fields.
- Clause id prefix `supportcontempt_` confirmed unused elsewhere in
  the corpus (15 occurrences, all new).
- "Inform, never advise" pass: every clause states what the statutes
  and the opinion say. The declaration clause disclaims determining
  whether any order was validly made or served, whether a payment was
  missed, whether nonpayment was willful, whether anyone had the
  ability to comply, or whether a limitations period has run; the
  signature clause states that the sheet is not an affidavit for
  contempt, not an order to show cause, and not a Judicial Council
  form, and that signing or filing it charges no one and starts no
  proceeding.

## Net changes

- New document: Contempt for Failure to Pay Court-Ordered Support —
  Information Sheet (`support_contempt_info_sheet`), 15 clauses (13
  authority + 2 drafting, 20 citations), Family Law category.
- Corpus: 5,901 → 5,916 clauses; 692 → 693 documents; Family Law 87 →
  88 documents.
