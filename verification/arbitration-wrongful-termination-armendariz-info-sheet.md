# Ending employment, new document: Enforceability of an Arbitration Agreement Covering a Wrongful-Termination Claim: the Armendariz Minimum Requirements, Unconscionability, and Severance (Code Civ. Proc. §§ 1281.2, 1281.97, 1281.98; Civ. Code § 1670.5; Armendariz v. Foundation Health Psychcare Services; Little v. Auto Stiegler; OTO, L.L.C. v. Kho; Ramirez v. Charter Communications) — Information Sheet

## Why this document

Processed item of **wave 168** (Ending employment slot, continuing the
round-robin with waves 146/148/150/152/154/156/158/160/162/164/166).
Read all 87 existing "Ending employment" document titles and ids in
`data/documents.json` before choosing a topic, then grepped the whole
corpus (both data files) for every candidate the brief named and for
every candidate of my own.

Results of the dup-check on the brief's named candidates:

- **McDonnell Douglas / Guz / pretext / Reid v. Google** — already in
  the corpus: `McDonnell` 23 hits, `Guz` 103, `pretext` 17, `Reid v.
  Google` 1. Covered inside
  `mixed_motive_same_decision_defense_harris_info_sheet`,
  `whistleblower_retaliation_1102_6_burden_framework_info_sheet` and
  `at_will_presumption_implied_contract_guz_info_sheet`.
- **Workers' comp exclusivity / Lab. Code § 3602 / emotional distress
  from termination** — `3602` 30 hits, `exclusivity` 41, `exclusive
  remedy` 28, `emotional distress` 18; already a separate sheet.
- **Lab. Code § 132a** — already its own document,
  `workers_compensation_retaliation_132a_info_sheet`.
- **ADEA/OWBPA disclosure on a reduction in force** — already its own
  document, `owbpa_group_program_disclosure_notice`, plus
  `layoff_selection_criteria_info_sheet`.

The one candidate that came back **empty across the entire corpus** was
arbitration *enforceability*:

- `Armendariz` — **0 hits** in either data file.
- `Livitsanos` — 0. `Shoemaker` — 0. `Cole v. Fair Oaks` — 0.
- `Little v. Auto Stiegler` — **0 hits**.
- `1281.97`, `1281.98`, `1670.5`, `1286.2` — **0 hits** (combined
  grep count 0).
- `arbitration` has 122 hits, but only four documents are about
  arbitration at all, and each is about something else:
  `arbitration` (a drafting *Employment Arbitration Agreement*, Hiring),
  `mandatory_arbitration_restriction_info_sheet` (Lab. Code § 432.6 and
  the Ninth Circuit's preemption holding, Hiring),
  `paga_arbitration_standing_info_sheet` (Adolph standing after the
  individual claim is compelled), and
  `labor_code_925_forum_choice_of_law_info_sheet` (forum selection).
  Only four clause titles in 5,846 clauses contain "arbitrat".
- `unconscionab` appears 15 times corpus-wide, none of it the
  procedural/substantive framework.

So the corpus told a reader that California restricts *requiring*
arbitration, and gave them an agreement to sign, but said nothing about
the standards a court actually applies when an employer moves to compel
arbitration of a discharge claim. That is the gap this sheet fills.

## What this document covers

Document id `arbitration_wrongful_termination_armendariz_info_sheet`,
13 clauses — 2 drafting and 11 authority — with **35 citation-quote
instances**: Code Civ. Proc. § 1281.2 (2), Civ. Code § 1670.5 (2),
Code Civ. Proc. § 1281.97 (2), Code Civ. Proc. § 1281.98 (2),
Armendariz (13), Little v. Auto Stiegler (4), OTO, L.L.C. v. Kho (4),
Ramirez v. Charter Communications (4).

- **`armenmin_declaration`** (drafting) — scope note naming the
  employee, employer, position, separation date, agreement date and
  arbitration provider, disclaiming any review of the actual agreement
  and any determination of enforceability.
- **`armenmin_statutory_frame`** — § 1281.2 (court shall compel where
  an agreement exists; waiver and rescission exceptions; merit is not
  a ground to refuse) and § 1670.5(a)-(b) (the three judicial responses
  to unconscionability; the evidentiary opportunity).
- **`armenmin_five_minimum_requirements`** — Armendariz's own
  four-item summary at p. 91 and its quotation of the five Cole
  requirements at p. 102.
- **`armenmin_remedies_may_not_be_limited`** — the undisputed
  principle at p. 103 and the holding that the agreement's damages
  limitation was contrary to public policy and unlawful (p. 104).
- **`armenmin_discovery_and_written_award`** — the discovery
  entitlement and implied employer consent (p. 106) and the
  written-decision holding (p. 107).
- **`armenmin_forum_costs`** — the holding that a mandatory employment
  arbitration agreement covering FEHA claims impliedly obliges the
  employer to pay all costs unique to arbitration (p. 113).
- **`armenmin_tameny_claims_little`** — Little's four holdings used
  here: Tameny claims are subject to the Armendariz requirements
  (p. 1069), the unwaivability reasoning (p. 1077), the list of
  minimal protections (p. 1081), and the no-FAA-preemption
  characterization (p. 1079).
- **`armenmin_unconscionability_elements`** — OTO's definition of an
  unconscionable contract, its "as rigorous and demanding" limit and
  its burden-of-proof sentence, plus Armendariz's sliding-scale
  formulation (p. 114).
- **`armenmin_adhesion_and_bilaterality`** — Armendariz on adhesion and
  economic pressure (p. 115), the "unfairly one-sided" holding
  (p. 117), the same-transaction mutuality rule (p. 120), and OTO's
  oppression-or-surprise framing.
- **`armenmin_severance_or_refusal`** — Armendariz's severability
  framework and the multiple-defects/permeation passage (both p. 124).
- **`armenmin_severance_ramirez`** — Ramirez's 2024 clarification: no
  bright line rule, the qualitative inquiry, the interests-of-justice
  focus, the numerical observation, and the limit on severance clauses.
- **`armenmin_fee_payment_default`** — §§ 1281.97(a)(1), 1281.97(c),
  1281.98(a)(1) and 1281.98(b)(1).
- **`armenmin_boundaries`** (drafting) — what the sheet does not cover.

## Sources and how each was fetched twice

Every one of the 35 quotes was checked programmatically against **two**
independently retrieved copies of its source, after whitespace/nbsp and
curly-quote normalization. Final end-to-end run against the merged
`data/clauses.json`: **35 citations, 35 verified in both passes, 0
failures.**

| Source | Pass A | Pass B |
| --- | --- | --- |
| Code Civ. Proc. § 1281.2 | leginfo `codes_displaySection.xhtml?lawCode=CCP&sectionNum=1281.2.` (Chrome UA) | leginfo `codes_displayText.xhtml` for CCP Part 3, Title 9, **Chapter 2** as a whole (Firefox UA) — a different page assembled by a different code path |
| Code Civ. Proc. §§ 1281.97, 1281.98 | same, per-section pages | same chapter-level text page |
| Civ. Code § 1670.5 | leginfo section page (Chrome UA) | leginfo `codes_displayText.xhtml` for CIV Division 3, Part 2, **Title 4** (Firefox UA) |
| Armendariz (2000) 24 Cal.4th 83 | CourtListener opinion HTML, cluster **2594580**, Chrome UA + Referer | same page, Edge UA + different Accept/Accept-Language; extracted text **byte-identical** |
| Little v. Auto Stiegler (2003) 29 Cal.4th 1064 | CourtListener opinion HTML, cluster **2630646**, Chrome UA | same page, Edge UA; extracted text **byte-identical** |
| OTO, L.L.C. v. Kho (2019) 8 Cal.5th 111 | **California Supreme Court slip opinion PDF**, `courts.ca.gov/opinions/archive/S244630.PDF` (98 pp.), text extracted with pypdf | CourtListener opinion HTML, cluster **6240738** |
| Ramirez v. Charter Communications (2024) 16 Cal.5th 478 | **California Supreme Court slip opinion PDF**, `courts.ca.gov/opinions/archive/S273802.PDF` (52 pp.) | CourtListener opinion HTML, cluster **10003342** |

CourtListener API budget actually spent: **three** anonymous
`/api/rest/v4/search/` calls (two of which located Armendariz and
confirmed the 1999 hit was the wrong cluster), then the endpoint
returned HTTP 429 with "Expected available in 2996 seconds". No MCP
CourtListener tool was used at any point. Everything after that went
through paths that were still open: the `/c/<reporter>/<vol>/<page>/`
citation-redirect (which resolved OTO to cluster 6240738), the public
**Atom search feed** at `/feed/search/` (which resolved Ramirez to
cluster 10003342 after `/c/Cal.5th/16/478/` returned 404), and plain
opinion HTML pages.

## Genuine findings

- **Two of the four opinions have no second publisher reachable from
  this session, and that is disclosed in the clauses themselves rather
  than worked around.** `courts.ca.gov/opinions/archive/S075942.PDF`
  (Armendariz) and `.../S100137.PDF` (Little) both return **404** — the
  archive does not reach back to 2000 or 2003. CourtListener's
  `/api/rest/v4/opinions/?cluster__id=...` returns **401** without
  credentials, so no slip PDF or alternate text is retrievable there.
  Independent hosts were tested and are egress-blocked by the proxy
  (`connect_rejected`): `scocal.stanford.edu`, `www.leagle.com`,
  `www.anylaw.com` all failed at CONNECT; `caselaw.findlaw.com`
  returned 403. Justia, Google Scholar and case.law are blocked per the
  brief. For those two cases the verification therefore rests on
  (a) two fetches with distinct browser header sets, extracted text
  byte-identical; (b) **exact-phrase queries against the public
  CourtListener search feed restricted to the cluster id**, a separate
  server-side index rather than the same HTML —
  `cluster_id:2594580 AND "impliedly obliges the employer to pay all
  types of costs that are unique to arbitration"` returned exactly one
  entry, *Armendariz v. Found. Health Psychcare Servs., Inc.*, and
  `cluster_id:2630646 AND "the Armendariz requirements are as
  appropriate to the arbitration of Tameny claims as to unwaivable
  statutory claims"` returned exactly one entry, *Little v. Auto
  Stiegler, Inc.*; and (c) for two Armendariz passages, **independent
  corroboration from the courts.ca.gov slip PDFs of the other two
  cases** — OTO's PDF contains Armendariz's sliding-scale sentence
  ("the more substantively oppressive the contract term, the less
  evidence of procedural unconscionability is required to…") and
  Ramirez's PDF contains "the central purpose of the contract is
  tainted with illegality". The
  `armenmin_five_minimum_requirements` and `armenmin_tameny_claims_little`
  gap fields state this limitation in the document itself.
- **The CourtListener texts of Armendariz and Little are OCR of the
  bound reporter and contain scanning errors.** Confirmed examples:
  Armendariz renders "Graham Oil" as "**Gaham Oil**" in one citation
  parenthetical; Little renders "Armendariz's discussion" as
  "**Armendariz,s** discussion" and a paragraph mark as "**ffl]**".
  Every candidate quote was read in context first and **no quoted
  passage contains an OCR defect** — the corrupted sentences sit in
  passages this sheet summarizes rather than quotes.
- **Pin cites were computed from star pagination, not guessed.** A
  script located each verified quote inside the normalized opinion text
  and reported the nearest preceding `*NNN` marker. This is how the
  Armendariz cites (91, 102, 103, 104, 106, 107, 113, 114, 115, 117,
  120, 124) and the Little cites (1069, 1077, 1079, 1081) were set. It
  also caught that the marker preceding the discovery quotes prints as
  `*1061283` — the page marker `*106` immediately followed by the
  statute number "1283.05" with no space — so those quotes are at
  p. 106, not p. 1061.
- **OTO and Ramirez are cited without a pinpoint page, deliberately.**
  Neither retrieved copy supplies Cal.5th pagination: the slip PDFs
  carry only slip-opinion page numbers, and CourtListener's OTO text
  carries **Cal.Rptr.3d** star pagination (`*726`), not Cal.5th. Rather
  than infer a reporter page, the `cite` fields give the first page of
  each case and the gap fields say where the passage sits (OTO part
  II.A and II.A.1; Ramirez slip opn. pp. 44-47) and why no reporter
  page is given.
- **The first CourtListener search hit for "Armendariz v. Foundation
  Health Psychcare" is the wrong decision.** Cluster 1302187 is dated
  **1999-03-09** (973 P.2d 51) — not the 2000 decision at 24 Cal.4th
  83. A date-bounded search returned exactly one 2000 result, cluster
  **2594580**, carrying `24 Cal. 4th 83`, `6 P.3d 669` and `99 Cal.
  Rptr. 2d 745`. A sheet built on the first hit would have quoted the
  wrong opinion.
- **Quote boundaries were chosen to avoid statutory subdivision breaks
  and nested quotation marks.** On leginfo, subdivision boundaries
  render as `that:(a)` on a section page but as a line break on the
  chapter-level page, so no statutory quote crosses a subdivision
  boundary. In the case law, Armendariz's "unconscionability has both a
  'procedural' and a 'substantive' element" and its "modicum of
  bilaterality" sentences carry two levels of nested quotation marks;
  the clauses quote the adjacent clean sentences instead and describe
  the quoted phrases in the body.
- **Ramirez is the reason the Armendariz severance clause is worded as
  "did not abuse its discretion" rather than as a rule.** Armendariz
  reviewed a trial court's *refusal* to enforce for abuse of
  discretion. Ramirez (2024) expressly resolved the Court of Appeal
  split that had grown up around that passage, holding there is no
  bright line rule keyed to the number of unconscionable terms. Both
  points are stated, and the `armenmin_severance_or_refusal` gap
  cross-references the Ramirez clause.

## Honest gap(s) disclosed

The sheet does not independently fetch or quote: Cole v. Burns Intern.
Security Services (D.C. Cir. 1997) 105 F.3d 1465 (quoted only as
Armendariz quotes it); Gilmer v. Interstate/Johnson Lane Corp. (1991)
500 U.S. 20; Green Tree Financial Corp.-Ala. v. Randolph (2000) 531
U.S. 79; AT&T Mobility LLC v. Concepcion (2011) 563 U.S. 333;
Doctor's Associates, Inc. v. Casarotto (1996) 517 U.S. 681; the Federal
Arbitration Act itself (9 U.S.C. § 1 et seq.); Graham v. Scissor-Tail,
Inc. (1981) 28 Cal.3d 807; Stirlen v. Supercuts, Inc. (1997) 51
Cal.App.4th 1519; Kinney v. United Healthcare Services, Inc. (1999) 70
Cal.App.4th 1322; A & M Produce Co. v. FMC Corp. (1982) 135 Cal.App.3d
473; Moncharsh v. Heily & Blase (1992) 3 Cal.4th 1; Sonic-Calabasas A,
Inc. v. Moreno (2013) 57 Cal.4th 1109; Pinnacle Museum Tower Assn. v.
Pinnacle Market Development (US), LLC (2012) 55 Cal.4th 223; Sanchez v.
Valencia Holding Co., LLC (2015) 61 Cal.4th 899; Baltazar v. Forever
21, Inc. (2016) 62 Cal.4th 1237; Tameny v. Atlantic Richfield Co.
(1980) 27 Cal.3d 167; Commodore Home Systems, Inc. v. Superior Court
(1982) 32 Cal.3d 211; Lange v. Monster Energy Co. (2020) 46
Cal.App.5th 436; Mills v. Facility Solutions Group, Inc. (2022) 84
Cal.App.5th 1035; Code Civ. Proc. §§ 1281, 1281.4, 1281.99, 1283.05,
1283.1, 1284.2, 1286.2; and Civ. Code § 1599. Each is named in the gap
field of the clause that relies on it and is reported only as the
fetched opinion describes it.

Substantive limits stated in the clauses themselves: the sheet takes no
position on whether the FAA applies to or preempts any agreement
(including the divided federal authority on §§ 1281.97 and 1281.98); it
does not address delegation clauses, who decides arbitrability, class
or representative waivers, litigation-conduct waiver of the right to
compel, or vacatur and confirmation of awards; it does not address
post-dispute arbitration agreements; and it makes no statement about
whether any particular agreement exists, is mandatory, covers any
claim, or is enforceable.

## Corpus-wide validation after merge

- Both data files parse as JSON. Formatting preserved (indent 2,
  `ensure_ascii=False`, trailing newline); `git diff --stat` shows
  **404 insertions, 0 deletions**.
- Clause ids unique across all **5,859** clauses; document ids unique
  across all **689** documents.
- Every id in the new `clauseOrder` exists; every authority clause has
  the exact key order `id,title,kind,status,checkedDate,body,gap,
  citations` with a non-empty `gap`; every drafting clause has exactly
  `id,title,kind,body`; every citation object has exactly
  `case,cite,url,quote`.
- Every `{{placeholder}}` in every clause of every document resolves to
  a declared field — **0 unresolved** corpus-wide. The new document
  declares `employeeName`, `companyName`, `positionTitle`,
  `separationDate`, `agreementDate`, `arbitrationProvider`, and uses
  all six.
- The only validator complaints corpus-wide are 103 **pre-existing**
  documents that order the document keys `id,title,description,
  clauseOrder,fields,categories` instead of the canonical order. The
  new document uses the canonical order; nothing pre-existing was
  touched.
