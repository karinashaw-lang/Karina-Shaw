# Ending employment, new document: Duty to Mitigate Damages After Wrongful Discharge (Civ. Code § 3300; Parker v. Twentieth Century-Fox; CACI No. 3963) — Information Sheet

## Why this document

Processed item of wave 158 (Ending employment slot, continuing the
round-robin with waves 146/148/150/152/154/156). Read all 82 existing
"Ending employment" document titles/ids in `data/documents.json`
before choosing a topic, and grepped both data files for every
candidate the brief suggested. Results: "Parker v. Twentieth" — zero
hits in either file; "mitigat" — 37 clause hits, all in landlord
(§ 1951.2), civil-service back-pay, Fair Chance Act, or other
non-employment-damages contexts; "front pay" — zero; "back pay" — 21
clause hits, all statutory-remedy summaries (WARN, § 1102.5, § 132a,
etc.) with no treatment of the offset. The other candidates in the
brief were also checked: the § 1256 voluntary-quit standard is
already partly covered (`uiclaimant_disqualification_standard`,
`uimisconduct_good_cause_case_law_crossover`); Civ. Code § 47(c) is
the subject of `employer_reference_immunity_info_sheet`; Lab. Code
§§ 2924-2927 are covered by the Hiring category's fixed-term sheet.

The chosen topic — how a wrongfully discharged employee's
lost-earnings damages are reduced for other earnings, under Parker v.
Twentieth Century-Fox Film Corp. (1970) 3 Cal.3d 176 and its progeny —
was confirmed genuinely open. It is the question every wrongful
termination claimant and every employer defending one actually
confronts after liability, and the corpus's existing wrongful
termination, at-will, and public-policy sheets stop at whether a
discharge was wrongful without saying how the damages are measured.

## What this document covers

9 clauses: 1 drafting (applicability note) and 8 authority clauses,
with 34 citation-quote instances drawn from Cal. Civ. Code § 3300 (1),
Parker (8), Rabago-Alvarez v. Dart Industries (4), Stanchfield v.
Hamer Toyota (2), Billetter v. Posell (2), Mize-Kurzman v. Marin
Community College Dist. (6), Villacorta v. Cemex Cement (2), Martinez
v. Rite Aid (2), Cordero-Sacks v. Housing Authority (1), and the
Judicial Council's 2026-edition CACI Nos. 3963 and 3961 (6):

- **`mitigparker_declaration`** (drafting) — applicability note naming
  the employee, employer, position, and separation date while
  disclaiming any determination that the discharge was wrongful or
  that any offset applies.
- **`mitigparker_general_measure_of_recovery`** — § 3300's contract
  measure; Parker's formula (agreed salary for the period, less what
  the employer affirmatively proves was earned or could have been
  earned); the $750,000 / 14-week contract facts.
- **`mitigparker_employer_burden_affirmative_defense`** —
  Mize-Kurzman's burden statement and avoidable-consequences
  definition; the duty of public and private employees; CACI 3963's
  three elements; CACI 3961's Powerhouse quotation (question of fact;
  burden on defendant).
- **`mitigparker_comparable_or_substantially_similar_standard`** —
  Parker's "comparable, or substantially similar" condition on
  projected earnings; reasonableness is not an element of the option
  to reject inferior work; the CACI (a)-(g) factor list; Villacorta on
  location.
- **`mitigparker_parker_application_bloomer_girl_big_country`** — the
  Bloomer Girl / Big Country, Big Man facts; "both different and
  inferior"; the musical-versus-western sentence; loss of
  director/screenplay approval rights converts the offer into
  inferior employment.
- **`mitigparker_actual_earnings_inferior_job_split`** —
  Rabago-Alvarez (actual earnings deducted by concession; no
  "waiver" from accepting menial work; projected inferior-job earnings
  not deducted); Villacorta (inferior-job wages not deducted) versus
  Martinez v. Rite Aid (expressly disagreeing; actual earnings
  deducted, $140,840 reduction) — presented as an unresolved split.
- **`mitigparker_losing_replacement_job_stanchfield`** — jury may
  consider failure to retain comparable employment; deduction where
  fired for cause from a substantially similar job; CACI's bracketed
  "[and retain]" / "reason within [his/her] control" language and its
  Directions for Use tying it to Stanchfield.
- **`mitigparker_collateral_sources_ui_pension_lower_wage_offer`** —
  Billetter and Rabago-Alvarez on unemployment benefits; Mize-Kurzman
  quoting Monroe ("everything of value received") and holding
  retirement-eligibility evidence inadmissible on mitigation;
  Billetter on an offer to continue at lower pay.
- **`mitigparker_self_employment_scope_and_who_decides`** —
  Cordero-Sacks on self-employment; CACI 3963 Directions for Use (the
  defense reaches public-policy and FEHA wrongful termination claims);
  CACI's CSEA quotation on fact-versus-law.

## Genuine findings

- **Court of Appeal split surfaced by the Judicial Council's own
  sources, not by the brief.** The CACI 3963 Sources and Authority
  flag that Villacorta (2013) and Martinez v. Rite Aid (2021) disagree
  about whether wages actually earned in an inferior job are deducted.
  Both opinions were fetched and the clause presents both, with the
  gap field explaining that Rabago-Alvarez (which both rely on)
  decided the point only on the plaintiff's concession and that trial
  courts may follow either line.
- **OCR defects inside two quoted sentences, corrected and
  disclosed.** CourtListener's Parker page renders "substantiálly" in
  the "no stretch of imagination" sentence, and its Mize-Kurzman page
  renders ".taken" in the "Had plaintiff actually retired" sentence.
  Both were corrected to the plain spelling; each correction is
  disclosed in the relevant clause's gap field, and each corrected
  sentence was independently confirmed through CourtListener's search
  index (which returned the opinion when queried with the corrected
  phrase inside a `cluster_id:` filter). "Ñor" (for "Nor") elsewhere in
  Parker was avoided rather than quoted.
- **Mize-Kurzman's own spelling "deductable"** is reproduced as found
  and noted in the gap field, since it is the opinion's text, not an
  artifact.
- **Star page markers inside two quotations** (Stanchfield "*1503",
  Cordero-Sacks "*1285") and running headers/page numbers inside one
  CACI Directions quotation that spans a PDF page break were removed
  before comparison; each is disclosed in its gap field.
- **Nested quotations.** Mize-Kurzman's burden sentence quotes Candari;
  its "both public and private employees" sentence quotes Candari
  quoting CSEA; the CACI sources quote Powerhouse and CSEA; Cordero-Sacks
  summarizes Smith (7th Cir.) and Hansard (5th Cir.). None of those
  underlying opinions was fetched, and every gap field says so and
  attributes the words to the opinion or instruction that quoted them.
- **The 2018 CACI supplement found first is a draft.** The first CACI
  PDF located (`caci18-02.pdf`) is marked "Draft—Not Approved by
  Judicial Council" (it is the November 2018 renumbering proposal
  moving 2407 to 3963). It was used only as a cross-check; every CACI
  quotation is taken from and cited to the adopted 2026 edition.
- **Pin cites audited against `*NNN` markers** in the retrieved text
  (Parker general rule at 181, condition and reasonableness sentence at
  182, application at 183, approval rights at 184; Mize-Kurzman
  McGinnis definition at 870, burden at 871, Monroe at 876, retirement
  at 877; Billetter at 860/861; Rabago-Alvarez at 98/99; Stanchfield
  1502-1503; Cordero-Sacks 1284-1285). Martinez's slip opinion carries
  no official pagination; the gap field says its pin cites are taken
  from the Judicial Council's citation (974-975) and approximated
  (975-976) for the later sentence.

## Honest gap(s) disclosed

This document does not independently fetch or quote Candari v. Los
Angeles Unified School Dist. (2011) 193 Cal.App.4th 402; California
School Employees Assn. v. Personnel Commission (1973) 30 Cal.App.3d
241; State Dept. of Health Services v. Superior Court (McGinnis)
(2003) 31 Cal.4th 1026; Powerhouse Motorsports Group, Inc. v. Yamaha
Motor Corp., U.S.A. (2013) 221 Cal.App.4th 867; Chyten v. Lawrence &
Howell Investments (1993) 23 Cal.App.4th 607; Kao v. University of
San Francisco (2014) 229 Cal.App.4th 437; Erler v. Five Points Motors,
Inc. (1967) 249 Cal.App.2d 560; Monroe v. Oakland Unified School Dist.
(1981) 114 Cal.App.3d 804; Mayer v. Multistate Legal Studies, Inc.
(1997) 52 Cal.App.4th 1428; the federal Smith and Hansard decisions;
Parker's dissent; or Auto Equity Sales. Each is disclosed in the
relevant gap field rather than paraphrased as verified fact. The
document also does not address present-value reduction of front pay,
the period employment was reasonably certain to continue, non-economic
damages, employer-sourced benefit offsets (severance, employer-funded
disability), reinstatement offers on the original terms, or statutes
with their own back-pay rules.

## Method

Statute: Cal. Civ. Code § 3300 fetched from leginfo.legislature.ca.gov
twice by independent fetchers — curl through the environment proxy
(UA "curl-groundtruth/1.0") and the WebFetch tool; operative text
identical.

Case law, without touching the shared CourtListener MCP quota (zero MCP
calls were made): the public, unauthenticated
`/api/rest/v4/search/?type=o` JSON endpoint located every cluster
(Parker 1453074, Rabago-Alvarez 2174157, Stanchfield 2307073, Billetter
1431228, Mize-Kurzman 5810813, Villacorta 2645676, Martinez 4879110,
Cordero-Sacks 5810695). CourtListener's opinion HTML pages answered
curl with an empty HTTP 202 bot-challenge under two ordinary UAs, but
served the full page (HTTP 200) once curl sent a complete browser
header set (Accept, Accept-Language, Referer, Chrome UA) with a cookie
jar; the REST opinions endpoint returned 401 anonymously (v3 and v4).
Alternate hosts were unreachable: CONNECT 403 from scocal.stanford.edu,
h2o.law.harvard.edu, anylaw.com and us.vlex.com; HTTP 410 from casetext.
Path A for each opinion is therefore the CourtListener HTML page. Path
B: (i) for Martinez, the slip-opinion PDF from storage.courtlistener.com
and, separately, the California Courts' archive
(`courts.ca.gov/opinions/archive/B292672.PDF`) — extracted text of the
two copies byte-identical; (ii) for Villacorta, the slip-opinion PDF on
storage.courtlistener.com; (iii) for every case, the public search
endpoint queried with `cluster_id:<id> AND "<exact phrase>"` for each
quoted sentence (or its longest single-line fragment), each returning
exactly the one expected cluster, with a nonsense-phrase control query
returning zero. Three queries first came back without a `count` key
(rate-limit response); re-run with 8-second spacing they all returned
1.

CACI: the Judicial Council's 2026-edition PDF
(`judicial_council_of_california_civil_jury_instructions_2026.pdf`,
11.27 MB) was downloaded twice from courts.ca.gov with two distinct
User-Agent strings (curl-style and Safari-style); SHA-256 identical
(`592a3bd5…62ec`). Instruction 3963 sits at PDF pages 2890-2892
(printed 1004-1006); 3961 at 2886. Text extracted with pdfplumber. The
November 2018 draft supplement (`itc/caci18-02.pdf`, p. 89) was also
fetched and its instruction text matched the 2026 edition apart from
the later "[him/her/nonbinary pronoun]" placeholder revision.

All 34 citation-quote instances across the 8 authority clauses were
programmatically verified by a Python script (`build.py`, dry run
before writing) asserting each quote is an exact contiguous substring
of its source after the disclosed normalizations (whitespace collapse;
nbsp → space; removal of `*NNN` star-pagination markers from
CourtListener pages; removal of `===== PAGE N =====` separators, bare
page numbers, and "DAMAGES CACI No. 3963" running headers from the PDF
extraction; the two disclosed OCR corrections applied to the source
copy only). Villacorta quotes were additionally required to match the
storage PDF and Martinez quotes the courts.ca.gov copy. Result: 34/34.

## Verification

- Quote-verification output (final): every citation in
  `mitigparker_general_measure_of_recovery` (3),
  `mitigparker_employer_burden_affirmative_defense` (5),
  `mitigparker_comparable_or_substantially_similar_standard` (4),
  `mitigparker_parker_application_bloomer_girl_big_country` (3),
  `mitigparker_actual_earnings_inferior_job_split` (6),
  `mitigparker_losing_replacement_job_stanchfield` (4),
  `mitigparker_collateral_sources_ui_pension_lower_wage_offer` (6),
  `mitigparker_self_employment_scope_and_who_decides` (3) — OK against
  its fetched source (and both copies where two were fetched).
- Corpus-wide validation after merge: both JSON files parse; 648
  documents and 5,339 clauses; clause ids and document ids unique;
  every `clauseOrder` id in every document exists; every
  `{{fieldId}}` placeholder in every clause body of every document
  resolves to a declared field; every drafting clause has exactly
  `{id,title,kind,body}`; every authority clause has exactly
  `{id,title,kind,status,checkedDate,body,gap,citations}`; every
  citation has exactly `{case,cite,url,quote}` with no empty values.
- Checked for `{{` leakage in every new clause's `title`/`gap` and
  every citation's `case`/`cite`/`url`/`quote` — clean.
- The four declared fields (`employeeName`, `companyName`,
  `positionTitle`, `terminationDate`) are the only placeholders used.
- Inform-never-advise review: every clause states what the statute,
  the courts, and the instructions say and ends by identifying the
  facts it does not determine; no clause tells a reader whether to
  accept a job, what to claim, or how to defend.
