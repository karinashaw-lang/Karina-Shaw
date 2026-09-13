# Ending employment, new document: Emotional-Distress Claims Arising From a Termination and the Workers' Compensation Exclusive Remedy (Lab. Code §§ 3600, 3601, 3602, 3208.3; Cole v. Fair Oaks Fire Protection Dist.; Shoemaker v. Myers; Livitsanos v. Superior Court; Miklosy v. Regents; City of Moorpark v. Superior Court; Light v. Department of Parks & Recreation) — Information Sheet

## Why this document

Processed item of **wave 170** (Ending employment slot, continuing the
round-robin with waves 146/148/150/152/154/156/158/160/162/164/166/168).
Read all 88 existing "Ending employment" document titles and ids in
`data/documents.json` before choosing a topic, then grepped the whole
corpus (both data files) for every candidate the brief named and for
every candidate of my own.

Results of the dup-check on the brief's named candidates:

- **McDonnell Douglas / Guz / pretext / Reid v. Google** — already in
  the corpus: `McDonnell` 17 clause hits, `Guz` 82, `pretext` 17,
  `Reid v. Google` 1. Covered inside
  `mixed_motive_same_decision_defense_harris_info_sheet`,
  `whistleblower_retaliation_1102_6_burden_framework_info_sheet` and
  `at_will_presumption_implied_contract_guz_info_sheet`.
- **Lab. Code § 132a** — already its own document,
  `workers_compensation_retaliation_132a_info_sheet`.
- **Compelled self-publication defamation in references** — already its
  own document, `compelled_self_publication_defamation_info_sheet`.
- **Unemployment insurance overpayment and recovery** — already its own
  document, `ui_overpayment_fraud_info_sheet`.
- **Intentional interference with an employment relationship by a third
  party** — genuinely empty (`Reeves` 0, `Sheppard v. Freeman` 0), and
  was the runner-up topic. Held for a later wave.

**Workers' compensation exclusivity for emotional distress arising from
termination** was the chosen candidate, and the dup-check needs care
because the wave-168 verification file records it as "already a separate
sheet." That is not accurate, and the grep results say so:

- `Cole v. Fair Oaks` — **0 hits** in either data file.
- `Livitsanos` — **0**. `Shoemaker v. Myers` — **0**. `Miklosy` — **0**.
  `City of Moorpark` — **0**. `Light v. Department of Parks` — **0**.
- `normal part of the employment` — **0**. `43 Cal.3d 148` — **0**.
  `2 Cal.4th 744` — **0**. `18 Cal.4th 1143` — **0**.
- `3208.3` — **0** before this change (the figure now includes only the
  new clauses).
- `3602` had 22 clause hits, but they sit in **five** clauses across
  four documents, and only two of those clauses are about exclusivity:
  `wcclaim_exclusive_remedy_general_rule` and
  `wcclaim_exclusive_remedy_exceptions`, both inside
  `workers_compensation_claim_notice_info_sheet`, which is a **During
  employment** sheet about filing a workers' compensation claim. Those
  two clauses state §§ 3600(a)/3602(a) and the three § 3602(b) statutory
  exceptions and stop there. Neither they nor anything else in the
  corpus addressed the question a terminated person actually asks —
  whether emotional-distress damages from the discharge can be sued for
  at all — or the case law that answers it.

Two clause-level overlaps are acknowledged rather than hidden: the
§ 3600(a) opening clause and the § 3602(a) exclusivity sentence are
quoted in the new `wcxemo_compensation_bargain` clause and also in
`wcclaim_exclusive_remedy_general_rule`. The new clause's `gap` field
says so explicitly and points at the other sheet. The § 3602(b)
exceptions are **not** re-covered here; the gap defers to that sheet.

## What this document covers

Document id `workers_comp_exclusivity_emotional_distress_termination_info_sheet`,
**14 clauses** — 2 drafting and 12 authority — with **43 citation-quote
instances**: Lab. Code § 3600 (2), § 3601 (3), § 3602 (2),
§ 3208.3 (9), Cole (3), Shoemaker (6), Livitsanos (4), Miklosy (4),
City of Moorpark (4), Light (6).

- **`wcxemo_declaration`** (drafting) — scope note naming the employee,
  employer, position, notice date and separation date; disclaims any
  determination that a claim exists or is barred.
- **`wcxemo_compensation_bargain`** — § 3600(a) opening, § 3602(a)
  exclusivity, § 3602(c) outer edge, and Shoemaker's description of the
  compensation bargain at 52 Cal.3d 16.
- **`wcxemo_normal_part_cole`** — Cole's holding at pp. 160-161: conduct
  that is a normal part of the employment relationship (demotions,
  promotions, criticism of work practices, friction over grievances)
  cannot be pleaded around by calling it outrageous; why; and the
  application to disciplinary hearings, demotions and involuntary
  retirement applications.
- **`wcxemo_termination_itself`** — Shoemaker at pp. 7, 18, 19:
  disabling injuries from termination are generally covered; a
  nonconsensual termination is indistinguishable from Cole's list; and
  "arising from and in the course of the employment" reaches past the
  technical end of the employment relationship.
- **`wcxemo_emotional_only_livitsanos`** — Livitsanos at pp. 747, 752,
  754: IIED and NIED preempted even with no physical disability; the
  physical/emotional dichotomy is "logically insupportable"; the
  two-exception formulation; and the requirement of an industrial
  disability.
- **`wcxemo_outside_the_bargain`** — Shoemaker's "stepped out of their
  proper roles" formulation (p. 16) and "well outside the compensation
  bargain" holding (p. 23), plus Light's restatement of the Vacanti
  two-step at 14 Cal.App.5th 96-97.
- **`wcxemo_miklosy_iied_not_tameny`** — Miklosy at 44 Cal.4th 902-903:
  worksite conduct in the normal course of the relationship is barred;
  the public-policy exception preserves the *Tameny* action, not a
  separate distress count; Shoemaker's p. 25 language as Miklosy
  reproduces it.
- **`wcxemo_feha_based_distress_light`** — Light at pp. 96, 98, 100,
  101: distress claims founded on FEHA-prohibited conduct fall outside
  the compensation bargain; the Accardi passage; and Light's express
  disagreement with *Yau v. Santa Margarita Ford*.
- **`wcxemo_moorpark_division_four`** — City of Moorpark: § 132a is not
  the exclusive remedy; the exclusive remedy provisions textually reach
  only division 4 remedies; the existence of a remedy does not make it
  exclusive; certain employer conduct falls outside the bargain.
- **`wcxemo_psychiatric_compensability`** — § 3208.3(a), (b)(1),
  (b)(2)-(3), (d): the compensability definition, the predominant-cause
  standard, the violent-act "substantial cause" carve-out at 35-40
  percent, and the six-month employment requirement.
- **`wcxemo_good_faith_personnel_action`** — § 3208.3(h) and (c): the
  lawful, nondiscriminatory, good-faith personnel action bar and the
  burden-of-proof sentence.
- **`wcxemo_post_notice_claim_bar`** — § 3600(a)(10), § 3208.3(e),
  (e)(4) and (g): the post-notice claim rules, the harassment-finding
  condition, the 60-day limit and the frequent-notice bad-faith rule.
- **`wcxemo_coemployee_3601`** — § 3601(a), (a)(1)-(2), (b): co-employee
  exclusivity, its two exceptions, and the employer's non-liability for
  damages awarded under them.
- **`wcxemo_boundaries`** (drafting) — what the sheet does not cover.

## Sources and how each was fetched twice

Every one of the 43 quotes was checked programmatically against **two**
independently retrieved copies of its source, after whitespace/nbsp and
curly-quote normalization. Final end-to-end run against the merged
`data/clauses.json`: **43 citations, 43 matched in every independent
fetch, 0 failures.**

| Source | Pass A | Pass B |
| --- | --- | --- |
| Lab. Code § 3600 | leginfo `codes_displaySection.xhtml?lawCode=LAB&sectionNum=3600.` (Chrome UA, no Referer) | same section, **reversed query-parameter order** `?sectionNum=3600.&lawCode=LAB`, Firefox UA + Referer + Accept-Language |
| Lab. Code § 3601 | same pattern (Chrome UA) | same pattern (Firefox UA) |
| Lab. Code § 3602 | same pattern (Chrome UA) | same pattern (Firefox UA) |
| Lab. Code § 3208.3 | same pattern (Chrome UA) | same pattern (Firefox UA) |
| Cole v. Fair Oaks Fire Protection Dist. (1987) 43 Cal.3d 148 | CourtListener opinion HTML, cluster **1227871**, Chrome UA + Referer | same page, Firefox UA + different Accept/Accept-Language/Upgrade-Insecure-Requests |
| Shoemaker v. Myers (1990) 52 Cal.3d 1 | CourtListener opinion HTML, cluster **1441972**, Chrome UA | same page, Firefox UA |
| Livitsanos v. Superior Court (1992) 2 Cal.4th 744 | CourtListener opinion HTML, cluster **1171504**, Chrome UA | same page, Safari/macOS UA |
| Miklosy v. Regents (2008) 44 Cal.4th 876 | CourtListener opinion HTML, cluster **5608068**, Chrome UA | same page, Firefox UA |
| City of Moorpark v. Superior Court (1998) 18 Cal.4th 1143 | CourtListener opinion HTML, cluster **1175976**, Chrome UA | same page, Firefox UA |
| Light v. Dept. of Parks & Recreation (2017) 14 Cal.App.5th 75 | CourtListener opinion HTML, cluster **6238957**, Chrome UA | same page, Firefox UA |

For all four statutes the two extracted texts were **byte-identical**;
the same was true for all six opinions.

On top of the paired fetches, each of the six opinions received a
**third, structurally independent check**: an exact-phrase query against
the public CourtListener search API restricted to that cluster id. This
queries a server-side index rather than re-reading the same HTML, so it
confirms the phrase is in CourtListener's record of that case
independently of the page render.

| Query | Result |
| --- | --- |
| `cluster_id:1227871 AND "a normal part of the employment relationship, such as demotions, promotions, criticism of work practices"` | count=1 → *Cole v. Fair Oaks Fire Protection District* |
| `cluster_id:1441972 AND "disabling injuries, whether physical or mental, arising from termination of employment are generally within the coverage"` | count=1 → *Shoemaker v. Myers* |
| `cluster_id:1171504 AND "nor exceeds the risks inherent in the employment relationship"` | count=1 → *Livitsanos v. Superior Court* |
| `cluster_id:5608068 AND "occurred at the worksite, in the normal course of the employer-employee relationship"` | count=1 → *Miklosy v. Regents of the University of California* |
| `cluster_id:1175976 AND "apparently limits those provisions to division 4 remedies"` | count=1 → *City of Moorpark v. Superior Court* |
| `cluster_id:6238957 AND "unlawful discrimination and retaliation in violation of FEHA falls outside the compensation bargain"` | count=1 → *Light v. Cal. Dep't of Parks & Recreation* |

**No MCP CourtListener tool was used at any point.** The API budget
actually spent was **nine** anonymous `/api/rest/v4/search/` calls (three
case lookups plus the six phrase checks). The endpoint returned HTTP 429
("Rate limit exceeded: 125/day") four separate times during the session;
each was ridden out with `sleep` loops inside the turn (300-480 s), and
two cases — Livitsanos and Light — were located instead through the
**`/c/<reporter>/<vol>/<page>/` citation-redirect**, which costs no API
quota: `/c/Cal.%204th/2/744/` resolved to opinion 1171504 and
`/c/Cal.%20App.%205th/14/75/` to opinion 6238957.

## Genuine findings and corrections

- **One quoted string was corrected, and the correction is disclosed in
  the clause.** Light's quotation of the Vacanti two-step has a reporter
  page break inside it; the retrieved text renders it as
  `…fall outside the risks *97encompassed within the compensation
  bargain.` The star-pagination marker `*97` was removed from the quoted
  string as a retrieval artifact. `wcxemo_outside_the_bargain`'s gap
  field states this removal in terms.
- **The CourtListener scan of Cole contains OCR dropouts, and quoting
  was restricted accordingly.** The opinion's own statement of the issue
  reads "whether an may maintain a civil action" (missing "employee")
  and "the complained of has caused total, permanent, mental and
  physical compensable under workers' compensation law" (missing
  "conduct" and "disability"). Nothing from those sentences is quoted.
  The three Cole quotes were read in full context in both retrievals and
  read as complete sentences; the second of them was additionally
  confirmed through the cluster-scoped phrase query above.
  `wcxemo_normal_part_cole`'s gap discloses the OCR problem.
- **Pin cites were computed from star pagination, not guessed — and the
  computation caught two errors of mine.** A script located each
  verified quote in the normalized opinion text and reported the nearest
  preceding `*NNN` marker. It corrected the Shoemaker
  "nonconsensual termination" quote from a drafted p. 20 to **p. 18**,
  the "arising from and in the course of" quote from p. 22 to **p. 19**,
  and the Light "not the exclusive remedy … because they are based on
  conduct prohibited by FEHA" quote from p. 95 to **p. 96**. It also
  exposed a regex bug of my own making: a marker immediately followed by
  a letter (`*152Leonard`) does not match `\*(\d{1,4})\b`, which made
  every Cole quote appear to sit on p. 151 until the `\b` was dropped.
- **City of Moorpark is cited without a pinpoint page, deliberately.**
  The CourtListener text for cluster 1175976 is the reporter-service
  version and carries **Cal.Rptr.2d** star pagination (`*448`, `*452`),
  not Cal.4th. Rather than infer an official-reporter page, all four
  Moorpark citations give the first page of the case, and the clause's
  gap says why. The same version uses straight rather than typographic
  quotation marks; the quotes reproduce its punctuation, and the
  verifier normalizes both forms so the difference cannot mask a
  mismatch.
- **Cross-verification between opinions, not just between fetches.**
  Livitsanos's two-exception sentence — the most load-bearing sentence
  in the sheet — is quoted verbatim inside **both** Miklosy and Light,
  which were fetched separately. Shoemaker's p. 25 language is quoted
  inside Miklosy, and Miklosy's p. 902 and p. 903 passages are cited to
  those exact pages inside Light. The pinpoints for Miklosy therefore
  rest on two sources, not one; the gap fields for
  `wcxemo_emotional_only_livitsanos` and `wcxemo_miklosy_iied_not_tameny`
  record this.
- **Cole was decided under the pre-1982 statutes, and the sheet says
  so.** The opinion expressly declines to apply the 1982 amendments
  retroactively, so the current §§ 3600/3601 text quoted elsewhere in
  the sheet is not the text Cole construed. Two clauses disclose this.
- **A live Court of Appeal split is reported as a split, not resolved.**
  Light (3d Dist., Div. 1) and Yau v. Santa Margarita Ford (4th Dist.,
  Div. 3) disagree about how far Miklosy reaches, and Light says so in
  terms. The sheet describes both readings, notes that Light is a
  Court of Appeal decision and that the California Supreme Court has not
  resolved the question as of the checked date, and takes no position.
  Yau itself was not fetched and is reported only as Light quotes it —
  disclosed in the gap.
- **Light is published only in part.** The opinion states that its
  exclusivity and retaliation discussions are published while its
  disability-discrimination and assault discussions are not. Every
  passage quoted here comes from the published portion, and the gap says
  so.
- **A statutory reading that the sheet declines to make.** Section
  3208.3(b)(3) defines "substantial cause" as 35 to 40 percent "for the
  purposes of this section," and subdivision (h) uses the phrase
  "substantially caused." Whether the defined term controls subdivision
  (h) is a construction question; `wcxemo_good_faith_personnel_action`
  states the text of each and its gap expressly declines to resolve the
  relationship.
- **Two near-duplicate post-notice rules were kept separate.** Section
  3600(a)(10) and section 3208.3(e) state parallel but non-identical
  rules, and the 60-day / frequent-notice sentences appear in both
  § 3208.3(g) and the flush text of § 3600(a)(10) with "this
  subdivision" referring to different things. The clause quotes the
  § 3208.3(g) version, notes the near-duplicate in § 3600, and declines
  to say which subdivision each sentence governs.
- **Sections named but not fetched are named as not fetched.** Lab. Code
  §§ 3207, 3351, 3370, 3370.1, 3706, 4558, 5400, 5411, 5412 and 139.2,
  Gov. Code §§ 815, 12940, 12993 and former 19683, and the opinions in
  Gantt v. Sentry Insurance, Tameny, Vacanti, Accardi and Yau were all
  referenced by the fetched sources but not independently retrieved.
  Each is disclosed in the gap of the clause that mentions it.

## Inform, never advise

Every clause states what a statute or an opinion says. No clause tells
the reader to file anything, to sue anyone, to refrain from suing, or
which forum to choose. Each authority clause ends by stating that the
question is not evaluated as to the named parties, and the closing
drafting clause lists what the sheet does not cover and points to the
sibling sheets in this corpus that do.

## Validation

Run against the merged files:

- Both `data/clauses.json` and `data/documents.json` parse as JSON.
- **5,975** clauses, **697** documents, **89** in "Ending employment"
  (was 5,961 / 696 / 88).
- Clause ids unique corpus-wide; document ids unique corpus-wide.
- Every id in every `clauseOrder`, in every document, resolves to an
  existing clause.
- Every `{{placeholder}}` in every clause body and gap resolves to a
  field declared by each document that uses that clause — checked
  corpus-wide, not just for the new document.
- Key order checked corpus-wide: 0 clauses deviate from
  `{id,title,kind,status,checkedDate,body,gap,citations}` (authority) or
  `{id,title,kind,body}` (drafting); every citation object is exactly
  `{case,cite,url,quote}`; every authority clause has a non-empty `gap`.
- The five declared fields — `employeeName`, `companyName`,
  `positionTitle`, `noticeDate`, `separationDate` — are each used by at
  least one clause.
