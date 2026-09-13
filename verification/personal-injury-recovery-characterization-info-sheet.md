# Family Law, new document: Characterization and Division of a Personal Injury Recovery in Marriage — Information Sheet

Wave 167 (Family Law). Corpus before: 684 documents, 5,789 clauses,
86 Family Law documents. After: 685 documents, 5,802 clauses, 87
Family Law documents.

## Why this document

The Family Law category is heavily saturated, so the topic was chosen
only after grepping the whole corpus. Every candidate direction named
in the task brief already exists as a document: putative spouse and
nullity (`nullity_of_marriage_info_sheet`), move-away custody
(`move_away_custody_info_sheet`), § 271 sanctions
(`family_code_271_sanctions_info_sheet`), § 3910 adult incapacitated
child support (`adult_incapacitated_child_support_info_sheet`),
assisted reproduction / donor parentage
(`sperm_egg_donor_parentage_info_sheet`,
`gestational_carrier_agreement_info_sheet`), mandatory custody
mediation (`mandatory_child_custody_mediation_info_sheet`), the § 3044
DV custody presumption
(`domestic_violence_custody_presumption_info_sheet`), and the child's
right to be heard (covered inside `tpr_child_participation`).

What is NOT covered anywhere: the characterization and division of a
**personal injury recovery** received by a married person. A full-text
grep of `data/clauses.json` for "personal injury" matched exactly two
clauses (three occurrences), both in unrelated non-family documents (a
CCP § 335.1 limitations clause and a director-liability tort clause). "2603",
"§ 780", "§ 781", "§ 782", "§ 783", "community estate personal injury
damages", "uninsured motorist", and "Morris"/"Klug"/"Jackson"/"Fisk"
as family-law authorities returned no genuine hits. This is a distinct
characterization doctrine from the corpus's existing characterization
documents (Moore/Marsden, Pereira/Van Camp, § 2640, § 2641, § 2581,
transmutation, § 2556): it is governed by its own chapter of the
Family Code (Chapter 3 of Part 2 of Division 4, "Damages for Injuries
to Married Person") plus its own special division rule (§ 2603).

## What this document covers

13 clauses: 2 drafting (declaration, signature/acknowledgment) and 11
authority clauses carrying 16 citations.

Statutes (Cal. Fam. Code, leginfo text):

- **`pirecovery_general_rule_780`** (§ 780) — the general rule: a
  recovery on a cause of action that arose during the marriage is
  community property, "[e]xcept as provided in Section 781 and subject
  to the rules of allocation set forth in Section 2603."
- **`pirecovery_separate_property_781`** (§ 781(a)) — separate
  property of the injured person if the cause of action arose after
  entry of a dissolution/legal separation judgment, or while the
  injured spouse is living separate from the other spouse.
- **`pirecovery_781_reimbursement_and_interspousal`** (§ 781(b), (c))
  — the non-injured spouse's reimbursement right for expenses paid by
  reason of the injuries, and the rule for one spouse's cause of
  action against the other.
- **`pirecovery_2603_definition`** (§ 2603(a)) — the statutory
  definition of "community estate personal injury damages" **and its
  express commingling exception**.
- **`pirecovery_2603_assignment`** (§ 2603(b)) — assignment to the
  injured party unless the interests of justice require otherwise,
  the three enumerated factors, and the statutory one-half floor.
- **`pirecovery_782_tortfeasor_spouse_liability`** (§ 782(a), (b)) —
  community property may not discharge the tortfeasor spouse's
  liability until that spouse's non-exempt separate property is
  exhausted; written-consent exception.
- **`pirecovery_783_concurring_negligence`** (§ 783) — a spouse's
  concurring negligence is not a defense for a third-party tortfeasor
  merely because of the marriage.

Case law (CourtListener):

- **`pirecovery_morris_exception_equal_division`** — *In re Marriage
  of Morris* (1983) 139 Cal.App.3d 823, 827-828: the assignment rule
  is an exception to the equal-division mandate, **not** a
  liquid-asset preference requiring an offsetting award to the
  uninjured spouse.
- **`pirecovery_klug_arose_not_accrued`** — *Klug v. Klug* (2005) 130
  Cal.App.4th 1389, 1396, 1400: **a key finding** — characterization
  turns on when the cause of action **arose**, which is not
  necessarily when it **accrued** under delayed-discovery statute of
  limitations rules.
- **`pirecovery_jackson_uninsured_motorist`** — *In re Marriage of
  Jackson* (1989) 212 Cal.App.3d 479, 486: uninsured motorist proceeds
  counted as community estate personal injury damages; the agreement
  with the injured party's own insurer was "the equivalent of a
  settlement with the tortfeasor."
- **`pirecovery_fisk_workers_comp_boundary`** — *In re Marriage of
  Fisk* (1992) 2 Cal.App.4th 1698, 1706: a **boundary** clause — a
  workers' compensation permanent disability award received after
  separation is not a "personal injury recovery at law" and falls
  outside these sections' reimbursement requirement.

## Genuine corrections and findings

- **The arose/accrued distinction (Klug)** is the central finding and
  is easy to get wrong: the family-law characterization date is the
  date the cause of action arose (when all elements were established),
  NOT the accrual date used for the statute of limitations, which
  delayed discovery can move. The document states this as the Klug
  court stated it, and does not generalize it beyond what the opinion
  said.
- **The commingling exception in § 2603(a)** is part of the statutory
  definition itself, not a judicial gloss — confirmed against the
  enacted text rather than assumed.
- **Morris's actual holding** was verified rather than assumed: the
  husband's "liquid asset only / offset required" reading was
  expressly rejected, and the trial court's equal division of the
  *other* community property plus 100% of the settlement to the
  injured wife was affirmed.
- **Fisk was included precisely because it is a limit**: it prevents
  the document from implying that every post-injury payment (workers'
  compensation, disability) is governed by §§ 780-781/2603.
- § 781 was confirmed as **amended in 2019** (Stats. 2019, ch. 115,
  § 10 (AB 1817), effective Jan. 1, 2020) — the current text is quoted
  and the amendment is disclosed in the clause's gap.

## Honest gaps disclosed

- **Predecessor-statute disclosure.** Morris, Jackson and Fisk each
  construe the *former* Civil Code provisions (§ 4800, subds. (c) and
  (b)(4), and § 5126) rather than the current Family Code sections.
  Each of those three clauses' `gap` says so explicitly, states that
  the former language quoted in the opinion is *materially parallel*
  to the current text quoted elsewhere in this document, and expressly
  declines to assert that the 1992 recodification left the provisions
  identical in every respect (no independent legislative-history
  research was done). Klug (2005) applies the current sections
  directly and is disclosed as such.
- **Klug's recovery was a legal malpractice settlement**, not a bodily
  injury claim; the gap says so and declines to assert that every kind
  of tort claim is governed by §§ 780-781.
- **Fisk's § 2603-predecessor point is in a footnote with two grounds**
  (waiver at oral argument, plus lack of merit) — disclosed as an
  alternative holding, with no position taken on its precedential
  weight.
- **OCR artifacts in the 1983 Morris scan** (e.g. a concurring
  justice's surname rendered "Rickies") are disclosed in that clause's
  gap; neither quoted passage falls in an artifact-affected span, and
  both were confirmed by an independent phrase query.
- Statutes do not define "arose," "living separate," "commingled," or
  "the interests of justice," and do not state tracing methods,
  burdens of proof, or required findings — each disclosed rather than
  filled in by inference. Date of separation (Fam. Code § 70) is
  expressly routed to this corpus's own separate document.
- Source-independence: all five statutory sections are sections of one
  code enacted by one statute (Stats. 1992, ch. 162), and the
  multi-subdivision clauses cite subdivisions of a single section —
  disclosed in every affected gap as not independent of one another.

## Method

**Statutes.** Cal. Fam. Code §§ 780, 781, 782, 783 and 2603 fetched
from `leginfo.legislature.ca.gov` via curl through the sandboxed
proxy, **twice each** with two different User-Agent strings
(Chrome/macOS and Firefox/Linux). All five sections' extracted texts
were identical across the two fetches. (§ 2603's second fetch hit a
connection reset on the first attempt and was retried; the retry
succeeded and matched.)

**Case law.** No CourtListener MCP tool calls were used — the shared
5/min, 125/day MCP quota was left untouched. Instead:

1. Opinions located via the public unauthenticated
   `courtlistener.com/api/rest/v4/search/?type=o` JSON endpoint
   (query: `"community estate personal injury damages"` restricted to
   California courts; plus a `"Marriage of Devlin"` query used to map
   the citing line of authority).
2. Each opinion's HTML page fetched **twice** with two distinct
   header sets (different User-Agent, Accept and Accept-Language), each
   with `Referer: https://www.courtlistener.com/`. All four opinions
   (Morris 2178661, Klug 5809278, Jackson 2167383, Fisk 2256624) gave
   **byte-identical extracted text** across the two fetches after
   whitespace normalization. Morris's second fetch returned an empty
   202 on the first attempt and was retried with a different header set
   and a longer delay; the retry returned 200 and matched.
3. **Third, phrase-level verification**: each case quote re-confirmed
   through CourtListener's public search index with a
   `cluster_id:<id> AND "<exact phrase>"` query. All four returned
   `count: 1` and that opinion only. (Klug's query was throttled on
   the first attempt and succeeded on retry after a wait.)

**Quote check.** All 16 citation quotes were programmatically
confirmed as exact substrings of the confirmed source texts after
normalizing non-breaking spaces and line-wrap whitespace only. Two
statutory quotes (§ 781(a) with its numbered paragraphs, § 781(b) with
a mid-sentence line wrap in leginfo's markup) required whitespace
normalization only; this is disclosed in the affected gaps, and no
wording was altered. No quote required a substantive correction.

## Verification

- Round-trip check: both data files re-serialize byte-identically
  before the append, so the diff contains only the new content.
- Corpus-wide validation after merge: both files parse; clause ids
  unique (5,802); document ids unique (685); every `clauseOrder` id
  resolves; zero orphan clauses; every `{{placeholder}}` in every
  clause body and gap resolves against its document's declared
  `fields`; no `{{` leakage in any title or citation field.
- Schema check across the whole corpus: every authority clause has
  exactly `id,title,kind,status,checkedDate,body,gap,citations` in that
  order with a non-empty `gap`; every drafting clause exactly
  `id,title,kind,body`; every citation exactly `case,cite,url,quote`.
- Fields (`party1Name`, `party2Name`, `countyOfFiling`, `dateSigned`,
  `cityState`) reuse the established Family Law info-sheet field set
  exactly; no new fields.
- Clause id prefix `pirecovery_` confirmed unused elsewhere in the
  corpus.
- "Inform, never advise" pass: every clause states what the statutes
  and opinions say; the declaration and signature clauses expressly
  disclaim characterizing, tracing, valuing or assigning any recovery
  of the named parties.

## Net changes

- New document: Characterization and Division of a Personal Injury
  Recovery in Marriage — Information Sheet
  (`personal_injury_recovery_characterization_info_sheet`), 13 clauses
  (11 authority + 2 drafting, 16 citations), Family Law category.
- Corpus: 5,789 → 5,802 clauses; 684 → 685 documents; Family Law 86 →
  87 documents.
