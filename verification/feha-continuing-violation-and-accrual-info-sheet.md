# Ending employment, new document: When the Clock Starts on a FEHA or Wrongful-Termination Claim: Accrual at Actual Termination and the Continuing Violation Doctrine (Gov. Code §§ 12960, 12993; Romano v. Rockwell Internat.; Richards v. CH2M Hill; Yanowitz v. L’Oreal USA) — Information Sheet

## Why this document

Processed item of **wave 166** (Ending employment slot, continuing the
round-robin with waves 146/148/150/152/154/156/158/160/162/164). Read
all 86 existing "Ending employment" document titles/ids in
`data/documents.json` before choosing a topic, then grepped both data
files for every candidate the brief named.

Results of the dup-check: most of the brief's named candidates were
already covered — FEHA administrative exhaustion and the right-to-sue
notice (`crd_feha_administrative_complaint_info_sheet`, which quotes
Gov. Code §§ 12960(e)(5), 12960(b)/(c), 12965(a)(1)/(a)(2) and
12965(c)(1)(A)); the McDonnell Douglas framework (already discussed
inside `mixed_motive_same_decision_defense_harris_info_sheet` and
`whistleblower_retaliation_1102_6_burden_framework_info_sheet`);
workers'-compensation exclusivity under Lab. Code §§ 3600/3602 (already
a separate sheet, filed under During employment). What remained open,
and is the gap this document fills, is the **timing** half of the
subject — *when* a discharge claim accrues, and whether earlier conduct
can still be reached:

- `Romano` — 0 hits in either data file. `Rockwell` — 0. `Mullins` — 0.
- `Richards` — 0. `Yanowitz` — 0. `Accardi` — 0.
- `continuing violation` — 3 clause hits, **all three** in the PAGA /
  Labor Code limitations clauses (six-year cap on the period of relief),
  none about FEHA.
- `permanence` — 1 clause hit, unrelated (permanence of a trust
  provision).
- `Morgan` — many hits, **all** `In re Marriage of Morgan`, `Morgan
  Stanley`, or surnames; no hit for National Railroad Passenger Corp.
- `12960(d)`, `stray remark` (only the Ververka modification note),
  `Reid v. Google`, `Rojo` — 0 or unrelated.

The corpus already says what the FEHA forbids, how the CRD complaint
process works, what constructive discharge is, and how a
public-policy-discharge claim is proved. Nothing in it said when the
clock on any of those starts running, or what happens to conduct that
predates it. That is what this sheet adds.

## What this document covers

9 clauses: 1 drafting (scope note) and 8 authority clauses, with 39
citation-quote instances drawn from Gov. Code § 12960 (3), Gov. Code
§ 12993 (1), Romano v. Rockwell Internat., Inc. (9), Richards v. CH2M
Hill, Inc. (11) and Yanowitz v. L’Oreal USA, Inc. (15):

- **`contviol_declaration`** (drafting) — scope note naming the
  employee, employer, position, notice date, termination date and the
  earliest conduct described, while disclaiming any deadline
  calculation or determination of timeliness.
- **`contviol_feha_filing_deadline`** — § 12960(c) (who may file),
  (e)(5) (three years), (b) (intake-form relation back); § 12993(a)
  (liberal construction); and Richards’s quotation of the **one-year**
  version of § 12960 as it read in 2001, flagged as superseded.
- **`contviol_accrual_at_actual_termination_romano`** — Romano’s
  question presented; the plain-meaning reasoning from the statutory
  word "occurred"; the simplicity point about notice versus actual
  termination; and the holding that the FEHA period runs from the date
  of actual termination.
- **`contviol_romano_contract_and_public_policy_claims`** — Romano on
  the implied-contract claim (breach at termination; anticipatory
  repudiation may be disregarded), on the Tameny tort (accrual at
  dismissal), and the "termination decision still may be reversed"
  reasoning.
- **`contviol_doctrine_defined_richards`** — Richards’s one-sentence
  definition of the doctrine, the split between the evidentiary and
  the remedial question, and the observation that the federal doctrine
  is not a single theory.
- **`contviol_three_part_test_and_permanence`** — the Berry factors as
  Richards quotes them; Richards’s modified three-part holding; its
  redefinition of "permanence" as futility of further conciliation;
  Yanowitz’s restatement of the same three factors and (in fn. 19) of
  the same permanence definition; and Richards’s application of the
  doctrine to the discrimination claim as well as the harassment claim.
- **`contviol_when_the_clock_starts_richards`** — the accrual rule
  (end of the course of conduct, by cessation or resignation, or notice
  of futility); the employer’s ability to start the clock by a
  definitive refusal; the "barring a constructive discharge" carve-out;
  and Yanowitz’s "some degree of permanence or finality" restatement.
- **`contviol_retaliation_and_collective_acts_yanowitz`** — the
  materially-affects standard for an adverse employment action, the
  "minor or relatively trivial" line, the rejection of a one-swift-blow
  requirement, the collective-consideration holding, why a categorical
  bar would start the clock on a non-actionable first act, and the
  better-rule conclusion.
- **`contviol_federal_discrete_acts_contrast`** — Yanowitz’s refusal to
  import Morgan’s discrete-acts rule, the twin policy goals, the
  "unripe claims" conclusion, and majority footnotes 18 and 17.

## Genuine findings

- **No second full-text path exists for these three opinions, and this
  is disclosed rather than worked around.** Richards (2001), Yanowitz
  (2005) and Romano (1996) predate the California courts' online
  opinion archive: `courts.ca.gov/opinions/archive/S087484.PDF`,
  `.../S115154.PDF` and the Romano equivalent all resolve to
  `www4.courts.ca.gov` and return **404**. None of the three CourtListener
  clusters carries a `download_url` or `local_path`, so there is no slip
  PDF on `storage.courtlistener.com`. The CourtListener REST
  `opinions/<id>/` endpoint returns **401** without credentials.
  Independent hosts were tested and are egress-blocked from this
  session: `scocal.stanford.edu`, `leagle.com`,
  `law.resource.org`, `lexisnexis.com/clients/CACourts` all returned
  connection code `000`; Justia, FindLaw, Google Scholar and case.law
  are blocked by the brief's own account. The verification therefore
  rests on (a) two independent header sets against the CourtListener
  opinion HTML, byte-identical after extraction; (b) six phrase-level
  queries against the public CourtListener search index, a separate
  server-side path (see below); and (c) for the most important Richards
  passages, **Yanowitz's own quotation of them**, which is a separately
  digitized text of a different reporter page. This is stated plainly
  here instead of being papered over.
- **The CourtListener text of all three opinions is OCR of the bound
  reporter and contains scanning errors.** Confirmed examples: Richards
  renders "held liable" as "held hable" and "junctures" as
  "juncture's"; Yanowitz renders "title VII's definition" as "title
  VIPs definition", "(Morgan)" as "{Morgan)", "Romano v. Rockwell
  Internat., Inc." as "Romano v. Rockwell Internal Inc.", "refusal" as
  "refhsal", "his compensation" as "Ms compensation", and the majority's
  signature block as "Kennard, 1, Werdegar, L, and Moreno, L,
  concurred."; Romano renders "Black's Law Dict." as "Black's Law
  Diet." **Every candidate quote was read in context and no passage
  containing an OCR defect was quoted.** Where a sentence useful to the
  document was corrupted — notably Yanowitz's own description of
  Morgan's holding, which contains both "title VIPs" and "{Morgan)" —
  the clause **summarizes** that sentence in its body and quotes only
  adjacent, clean sentences.
- **Two paragraphs could not be quoted whole because a reporter page
  break or an italic-citation run sits inside them.** Richards's
  modified-test sentence runs through the parenthetical "(see Fielder v.
  UAL Corp., supra, 218 F.3d at pp. 987-988)"; the quote is cut at
  "may take a number of different forms" and the remaining two factors
  are given through **Yanowitz's** quotation of the same sentence, which
  replaces the parenthetical with "[citation]". Romano's Tameny holding
  opens "Because the cause of action recognized in *Tameny, supra,* 27
  Cal.3d 167, is defined…", where stripping the italic tags leaves a
  space before the comma; the clause quotes the following sentence
  instead.
- **Richards quotes a version of Gov. Code § 12960 that is no longer
  law.** The opinion's block quote begins "No complaint may be filed
  after the expiration of one year…". The current section, as amended by
  Stats. 2025, Ch. 321 (S.B. 477), sets three years in subdivision
  (e)(5) and is differently organized. Both texts are quoted in the same
  clause and the clause body and gap state which is current.
- **A first draft of two gap fields asserted judicial line-ups the
  sources do not support, and both were corrected before commit.**
  (1) Richards: the retrieved copy records only "George, C. J.,
  Kennard, J., and Chin, J., concurred." and carries **no** concurrence
  line at the end of Brown, J.'s dissent, so it does not say who joined
  it; the gap no longer calls the case four-to-three and no longer
  names Chin (who was in the **majority**) as a dissenter. (2) Yanowitz:
  Chin, J.'s separate opinion is marked `type="dissent"` in the source
  and opens "I dissent."; it is not a concurrence and dissent. The gap
  now says Chin, J. dissented and Baxter, J. concurred in that dissent.
- **A gap field's statement about Romano's limitations periods was
  corrected.** The first draft said Romano "applied a two-year period to
  the contract claims." Romano in fact records that the parties did not
  dispute which periods applied — Code Civ. Proc. § 340 (one year) for
  the public-policy tort, Gov. Code § 12960 (one year) for the FEHA
  claims, and Code Civ. Proc. § 339 (two years) for the contract claims
  — and that the case turned only on accrual. The gap now says that.
  The successor two-year personal-injury period in Code Civ. Proc.
  § 335.1 was then fetched twice from leginfo (identical) to confirm
  its source credit, "Added by Stats. 2002, Ch. 448, Sec. 2. Effective
  January 1, 2003."
- **Pin cites were computed, not guessed, and seven were wrong in the
  first draft.** A script mapped each verified quote back to the star
  pagination surrounding it and printed the reporter page range; the
  cites for the Richards § 12960 quote (811-812 → 811), Romano's FEHA
  conclusion (494-495 → 495), Romano's contract conclusion (492 → 491),
  Romano's "still may be reversed" passage (501-502 → 502), Richards's
  "not a single theory" sentence (812-813 → 813), Yanowitz's "Indeed,
  in Richards" sentence (1058 → 1057-1058) and Yanowitz footnote 17
  (1057 → 1058) were all corrected. Footnote pages were fixed
  separately, by locating each `<footnotemark>` in the body HTML and
  reading the star page it sits under: fn. 17 and fn. 18 at p. 1058,
  fn. 19 at p. 1059. Footnote numbers were confirmed from the
  `<footnote label="N">` attributes in the Yanowitz HTML.
- **Romano's opinion text begins on p. 483, not p. 479.** 14 Cal.4th
  479 is where the case starts in the volume; the first star marker in
  the opinion body is `*484`, mid-way through the opening sentence, so
  the opening quote is cited 483-484.

## Honest gap(s) disclosed

This document does not independently fetch or quote National Railroad
Passenger Corp. v. Morgan (2002) 536 U.S. 101; Berry v. Board of
Sup'rs of L.S.U. (5th Cir. 1983) 715 F.2d 971; Mullins v. Rockwell
Internat. Corp. (1997) 15 Cal.4th 731; Delaware State College v. Ricks
(1980) 449 U.S. 250; Chardon v. Fernandez (1981) 454 U.S. 6; Harris v.
Forklift Systems, Inc. (1993) 510 U.S. 17; Tameny v. Atlantic
Richfield Co. (1980) 27 Cal.3d 167; Walnut Creek Manor v. Fair
Employment & Housing Com. (1991) 54 Cal.3d 245; Regents of the
University of California v. Superior Court (1995) 33 Cal.App.4th 1710;
Accardi v. Superior Court (1993) 17 Cal.App.4th 341; Birschtein v. New
United Motor Manufacturing, Inc. (2002) 92 Cal.App.4th 994; Fielder v.
UAL Corp. (9th Cir. 2000) 218 F.3d 973; Taylor v. Johnston (1975) 15
Cal.3d 130; Brewer v. Simpson (1960) 53 Cal.2d 567; Lambert v.
Commonwealth Land Title Ins. Co. (1991) 53 Cal.3d 1072; Marketing
West, Inc. v. Sanyo Fisher (USA) Corp. (1992) 6 Cal.App.4th 603; Ross
v. Stouffer Hotel Co. (Hawai'i) Ltd. (1994) 76 Hawaii 454; or Code
Civ. Proc. §§ 312, 337, 339, 340. Each is reported only as the fetched
opinions describe it, and each omission is disclosed in the relevant
gap field.

The document also does not address: the Gov. Code § 12965 deadline for
filing a civil action after a right-to-sue notice (covered by this
corpus's separate CRD sheet); the § 12960(e)(6) extensions or the
§ 12960(f) tolling rule; equitable tolling generally; Government Code
claim presentation against public entities; how the doctrine applies to
non-FEHA claims; whether any particular course of conduct satisfies any
Richards factor; or post-Yanowitz Court of Appeal case law applying the
factors.

**CourtListener MCP quota: zero calls made.** All case-law work went
through the public unauthenticated REST search endpoint (3 lookup
queries + 6 phrase queries, spaced 20-40 s apart) and the CourtListener
opinion HTML front-end.

## Method

**Statutes.** Gov. Code §§ 12960 and 12993 and Code Civ. Proc. § 335.1
each fetched twice from `leginfo.legislature.ca.gov` via curl through
the environment proxy with two distinct User-Agent strings
(`curl-groundtruth/1.0` and a Safari/macOS UA). Section text extracted
from the `codeLawSectionNoHead` block; for each section the two
extractions are byte-identical (MD5s
`6247a310…` for § 12960, `af4f54cf…` for § 12993, `bf0695d8…` for
§ 335.1). One § 335.1 fetch failed mid-transfer with
`ws_closed_mid_exchange` / `Recv failure` and returned HTTP 200 on
retry after a wait.

**Case law, without touching the shared CourtListener MCP quota.**
Clusters located with three public REST search calls:
Richards = **2633435**, Yanowitz = **2567202**, Romano = **5607863**.
Each opinion page then fetched **twice** with two distinct browser
header sets (Chrome/Windows and Safari/macOS, each with
`Referer: https://www.courtlistener.com/` and a full `Accept` /
`Accept-Language` pair). All six fetches returned HTTP 200 on the first
attempt; for each case the two HTML bodies are byte-identical and the
two extractions are byte-identical (MD5s `7454f44f…` Richards,
`b8bfaaf7…` Yanowitz, `3b80b686…` Romano). Extraction preserved the
`star-pagination` spans as `*NNN` markers so pin cites could be
computed. Opinion boundaries were identified so that no quote comes
from a separate opinion: Richards's majority ends before Brown, J.'s
dissent; Yanowitz's majority and its footnotes end before Chin, J.'s
dissent (`<opinion … type="dissent">`); Romano is unanimous.

**Alternate full-text paths attempted and their results** (all
recorded above under Genuine findings): courts.ca.gov archive PDFs 404;
CourtListener REST `opinions/` 401; scocal.stanford.edu, leagle.com,
law.resource.org and lexisnexis.com/clients/CACourts unreachable
(code 000); casetext.com returned a 301 redirect and was not usable.

**Phrase-level third path.** Six `cluster_id:<id> AND "<exact phrase>"`
queries against the public REST search endpoint, spaced 20-40 s apart,
each returning exactly **1 result — the expected cluster**:

| cluster | phrase | result |
|---|---|---|
| 2633435 | "make clear to a reasonable employee that any further efforts at informal conciliation" | 1 → 2633435 |
| 2633435 | "when the course of conduct is brought to an end, as by the employer" + "resignation" | 1 → 2633435 |
| 2567202 | "one swift blow, rather than a series of subtle, yet damaging, injuries" | 1 → 2567202 |
| 2567202 | "acquires some degree of permanence or finality" | 1 → 2567202 |
| 5607863 | "the date that triggers the running of the limitations period under the FEHA is the date of actual termination" | 1 → 5607863 |
| 5607863 | "accrue at the time of dismissal for the purpose of the statute of limitations" | 1 → 5607863 |

(The last query returned an empty/throttled body on its first attempt
and the expected single result on retry after a 40 s wait.)

**Cross-opinion corroboration of the Richards holdings.** Because no
second full-text copy of Richards exists in reach, the two Richards
passages the document leans on hardest are additionally quoted **from
Yanowitz**, a separately digitized opinion: the three-factor test
(36 Cal.4th at p. 1059) and the definition of "permanence"
(36 Cal.4th at p. 1059, fn. 19). Both Yanowitz renderings match the
Richards text word for word after the disclosed normalizations.

**Quote verification.** All 39 citation-quote instances were
programmatically verified by `build.py` (dry run before writing) and
re-verified by `recheck.py` against the merged `data/clauses.json`,
asserting that each quote is an exact contiguous substring of **every**
fetched copy of its own source after these normalizations, applied
identically to quote and source: nbsp / thin / narrow / figure spaces →
space; curly quotation marks and apostrophes → ASCII; en/em dash, minus
and figure dash → hyphen; soft hyphen removed; fi/fl ligatures and
dotless ı → plain letters; ellipsis → three dots; removal of `*NNN`
star-pagination markers; whitespace collapse; and removal of the space
left before `, ; . ) ]` and after `( [` when CourtListener's italic
`<em>` spans around case names are stripped. Result: **39/39**, each
quote checked against both fetched copies of its source (10 fetched
copies in all).

## Verification

- Quote-verification output (final, re-run from the merged data file):
  `contviol_feha_filing_deadline` (5),
  `contviol_accrual_at_actual_termination_romano` (4),
  `contviol_romano_contract_and_public_policy_claims` (5),
  `contviol_doctrine_defined_richards` (4),
  `contviol_three_part_test_and_permanence` (6),
  `contviol_when_the_clock_starts_richards` (4),
  `contviol_retaliation_and_collective_acts_yanowitz` (6),
  `contviol_federal_discrete_acts_contrast` (5) — OK against every
  fetched copy of its source. Total 39/39.
- Pin-cite audit: every case quote mapped back to the star pagination
  bracketing it; all 35 case-law cites now agree with the computed page
  range (footnote cites carry the page of the footnote's reference
  mark, verified from the body HTML).
- Corpus-wide validation after merge: both JSON files parse; **681
  documents and 5,752 clauses**; clause ids and document ids unique;
  every `clauseOrder` id in every document exists; every
  `{{fieldId}}` placeholder in every clause body, gap and title of
  every document resolves to a declared field; every drafting clause
  has exactly `{id,title,kind,body}`; every authority clause has
  exactly `{id,title,kind,status,checkedDate,body,gap,citations}` in
  that order with a non-empty gap; every citation has exactly
  `{case,cite,url,quote}` with no empty values; no `{{` leakage into
  any citation field. The diff to both data files is purely additive.
- "Ending employment" category count: 86 → **87**.
- The six declared fields (`employeeName`, `companyName`,
  `positionTitle`, `separationNoticeDate`, `separationDate`,
  `earliestConductDate`) are the only placeholders used, and each is
  used at least once.
- Inform-never-advise review: every clause states what the statutes and
  the three opinions say and closes by naming what it does not
  determine; no clause tells a reader whether to file, when to file,
  whether a deadline has passed, whether any conduct was unlawful, or
  whether any claim is timely.
