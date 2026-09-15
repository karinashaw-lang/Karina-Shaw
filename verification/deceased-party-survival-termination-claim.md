# Verification — Death of a Party While a Termination Claim Is Alive

Document id: `deceased_party_survival_termination_claim_info_sheet`
Category: Ending employment. Checked date: 2026-09-15.
Clauses: 15 (13 authority, 2 drafting), 44 citations — counted from the written `data/clauses.json`, not from memory.

---

## 1. Why the topic was uncovered (structural gap)

The 93 pre-existing **Ending employment** documents all assume a living former employee who can
prosecute whatever the separation left behind, and an existing employer to answer for it. The corpus
had already taken the *money* half of an employee's death and left the *claim* half:

* `deceased_employee_wages_surviving_spouse_info_sheet` — Prob. Code § 13600 affidavit for unpaid
  compensation;
* `cobra_election_notice`, `calcobra_election_notice` — death as a COBRA qualifying event;
* `life_insurance_conversion_privilege_info_sheet` — Ins. Code § 10209 death-during-window.

Nothing asked what becomes of the *lawsuit* — the wrongful-termination, FEHA, whistleblower or
unpaid-wage claim — when the employee dies, or of the *defence* when an individual employer dies.

### Grep counts, and the hits that were inspected and discounted

Run over `data/clauses.json` + `data/documents.json` (full corpus, before the append):

| pattern | raw hits | disposition |
|---|---|---|
| `377\.20` `377\.21` `377\.30` `377\.31` `377\.32` `377\.33` `377\.40` `377\.41` `366\.1` | **0 each** | genuine zero |
| `377\.34` | 2 | both inside one clause, `elderabuse_civil_remedies` (document `elder_financial_abuse_info_sheet`, category **Estate Planning**) — Welf. & Inst. Code § 15657(b) exception. Discounted. |
| `9351` | 6 | `creditorclaim_deadline_to_sue_after_rejection` and `trustcred_probate_interaction`, both **Estate Planning**. Discounted for this category. |
| `9370` | 9 | same two Estate Planning clauses. Discounted. |
| `section 377` | 11 clauses | 9 of the 11 are **false positives**: a loose regex matching `section 3770`/`section 3772` in the Family Law medical-support sheet, and `section 377.60` in `parentsupp_wrongful_death_distinction`. Only the elder-abuse clause is a real § 377 hit. Discounted. |
| `decedent` | 1444 | overwhelmingly Estate Planning / Family Law. Not category evidence. |
| `successor in interest` | 31 | inspected: corporate successor-liability and assignment language, not CCP § 377.11. Discounted. |
| `Quiroz`, `Cifuentes`, `1021.5` | 0 | genuine zeros (candidate topics checked and set aside) |

Targeted scan of the **762 clauses used by the 93 Ending-employment documents** for
`dies|died|death|deceased|survives|survival|successor in interest`: 25 clauses matched, and every
one was read. All 25 concern death as a *benefits* trigger (COBRA/Cal-COBRA qualifying event, group
life conversion, § 409A death event, HIPAA special enrolment), the Prob. Code § 13600 wage affidavit,
escheat of unclaimed wages to heirs, or incidental phrases ("injury to, or the death of, an
individual" in a limitations clause; "wrongful death" in the punitive-damages and workers'-comp
exclusivity sheets). **None** addresses survival of the cause of action, substitution of a
successor in interest, or the damages rule for a survival action.

---

## 2. Per-citation verification

Method: each source was fetched to a private scratch directory
(`…/scratchpad/agent-endemp-claims/`, named for this agent so a concurrently running agent could not
overwrite it). Every fetched file was normalized by stripping markup to spaces, unescaping entities,
mapping NBSP to a space, dropping soft hyphens, expanding the `fi`/`fl` ligatures, rejoining words
broken across a line by a hyphen, and collapsing whitespace runs to a single space. Curly
apostrophes and quotation marks were **not** altered and appear in the stored quotes exactly as the
publishers print them. Each stored `quote` was then re-read **out of the written
`data/clauses.json`** and tested as a substring of every mapped source. Result: **44 / 44 pass, 0
failures.** Statute quotes were additionally required to appear in the *other* publisher's fetch
(cross-publisher check) — also 0 failures.

### Statutes — two genuinely independent publishers

For each of CCP §§ 366.1, 377.11, 377.20, 377.21, 377.30, 377.31, 377.32, 377.33, 377.40, 377.41 and
Prob. Code §§ 9351, 9370:

* Path A — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CCP|PROB&sectionNum=…`
  (Legislative Counsel). A JSF session cookie was seeded from `/faces/codes.xhtml`; the session died
  once mid-run (`ws_closed_mid_exchange`, empty body for Prob. § 9351) and was **re-seeded** before
  the fetch was repeated successfully.
* Path B — `https://law.onecle.com/california/civil-procedure/<section>.html` and
  `…/probate/<section>.html`.
* Comparison: **word-for-word identical** for all twelve. Each carries the Legislative Counsel
  history note "Added by Stats. 1992, Ch. 178" (CCP) or "Enacted by Stats. 1990, Ch. 79" (Probate),
  i.e. unamended since, so onecle's 2017 snapshot is current for them.
* `california.public.law` was **not** used: it prints a "Source:" line naming leginfo, so it is at
  best a third copy of the same text, not an independent publisher. Stated in the gaps.

### CCP § 377.34 — onecle cannot corroborate subdivisions (b)–(f)

* Current text: leginfo code display. History note: **Amended by Stats. 2023, Ch. 131, Sec. 18 (AB
  1754), effective January 1, 2024**, and no later amendment as displayed on 2026-09-15.
* onecle's 2017 snapshot predates SB 447 (2021) entirely. It corroborates **subdivision (a) only**,
  where the 2017 text and the current subdivision (a) are word for word identical. Disclosed in
  clause `survclaim_damages_377_34a`.
* For subdivisions (b)–(f) the code display was corroborated against the Legislative Counsel's
  **chaptered text of AB 1754** — explicitly disclosed in the gap as *the same publisher in a
  different document*, not a second publisher.
* Normalization disclosed: both documents wrap "…pursuant to Section 36 before / January 1, 2022…"
  across a line, and § 377.34(f) wraps "Division / 9"; treated as line wraps.

### Disclosed defects (recorded, not silently corrected)

1. **Misspelling in enacted text.** The chaptered text of **SB 447 (Stats. 2021, Ch. 448)** spells
   subdivision (d)(1) "all **judgements**, consent **judgements**, or court-approved settlement
   agreements", while subdivision (c) of the same section spells the same word correctly three times
   ("a judgment, consent judgment, or court-approved settlement agreement"). Confirmed against the
   **raw fetched markup**, not merely a text extraction: `grep -o judgement bill_sb447.html` = **2**;
   `grep -o judgment bill_sb447.html` = **6**; `judgement` = **0** in both the fetched AB 1754 page
   and the fetched current code display. **AB 1754 (Stats. 2023, Ch. 131, Sec. 18)**, a bill titled
   "Maintenance of the codes", re-enacted § 377.34 with "judgments, consent judgments" and changed
   nothing else — which explains a 2023 amendment note on a section whose substance did not move.
   Clause `survclaim_enacted_text_spelling_defect`.
   *Corroboration limits, disclosed:* both bill texts are from leginfo (one publisher); onecle's 2017
   snapshot predates SB 447; the Legislative Counsel's `billPdf.xhtml` endpoint returned an HTML
   error page rather than a PDF on two attempts (with and without Referer), so no PDF rendering could
   be diffed; **LegiScan returned HTTP 403** from an interstitial challenge page. The load-bearing
   evidence is therefore the inconsistency *inside* SB 447 itself, subdivision (c) against (d)(1).
2. **Sunset/reporting mismatch inside § 377.34.** Subdivision (b) reaches actions **filed before
   January 1, 2026**; subdivision (c) imposes the reporting duty only on recoveries **between
   January 1, 2022 and January 1, 2025**; subdivision (d)(1) required the Judicial Council's report
   to the Legislature **on or before January 1, 2025**, covering dispositions only to **July 31,
   2024**, while (d)(2) keeps the subdivision on the books until it goes inoperative **January 1,
   2029**. The data-collection apparatus expired a year before the substantive rule it was enacted to
   measure. Recorded, not resolved, in `survclaim_pain_and_suffering_window_377_34b`.
3. **Rendering artifact, disclosed not corrected.** leginfo's article heading above Prob. Code
   § 9370 prints the range as `[9370- 9370.]`. Noted in `survclaim_when_the_employer_dies_377_40_377_41`
   as a heading artifact outside the quoted section text.
4. **Metadata artifact, disclosed and unused.** CourtListener's citation metadata for the Prilliman
   cluster lists both `53 Cal. App. 4th 935` and `53 Cal. App. 2d 935`; the second-series entry is
   wrong and is not used. Noted in `survclaim_prilliman_substitution_on_appeal`.

### Case law

| Opinion | Publisher path A | Publisher path B | Result |
|---|---|---|---|
| **County of Los Angeles v. Superior Court** (1999) 21 Cal.4th 292 (cluster 1160829) | CourtListener opinion HTML (`Referer` + browser UA) | **none reachable** — `https://courts.ca.gov/opinions/archive/S053930.PDF` requested, **HTTP 404**; Justia, FindLaw, Google Scholar, case.law, casetext, leagle, anylaw egress-blocked | **one publisher**, disclosed in the clause gap. Phrase-index confirmation on the same publisher: `cluster_id:1160829 AND "California survival law is not inconsistent with or preempted by federal law"` → **count 1**; `… AND "This is commonly called a survival action"` → **count 1**. Recorded as a second *path*, not a second publisher. |
| **Rubio v. CIA Wheel Group** (2021) 63 Cal.App.5th 82 (cluster 4873902) | CourtListener opinion HTML | **`https://courts.ca.gov/opinions/archive/B300021.PDF`** (official slip PDF, 267,828 bytes; identical byte count from `courts.ca.gov` and `www.courts.ca.gov`) | **two genuine publications.** PDF extracted with **both pypdf 6.18.1 and pdfminer.six 20260107**; normalized lengths identical (57,904 chars); 63 opcode differences, all of them ordering of the caption block, footnote blocks and page numbers — **body text agrees word for word**. All three Rubio quotes are verbatim substrings of the CourtListener HTML *and* both PDF extractions. Phrase-index: `cluster_id:4873902 AND "The trier of fact found appellants caused Lopez significant noneconomic damages"` → **count 1**. |
| **Quiroz v. Seventh Avenue Center** (2006) 140 Cal.App.4th 1256 (cluster 2304466) | CourtListener opinion HTML | **none reachable** — `archive/H028298.PDF` → **HTTP 404** | **one publisher**, disclosed. Phrase-index: `cluster_id:2304466 AND "a separate and distinct cause of action which belonged to the decedent before death"` → **count 1**. |
| **Prilliman v. United Air Lines, Inc.** (1997) 53 Cal.App.4th 935 (cluster 2284474) | CourtListener opinion HTML | **none reachable** — `archive/B098592.PDF` → **HTTP 404** | **one publisher**, disclosed. Phrase-index: `cluster_id:2284474 AND "who has filed an affidavit under Code of Civil Procedure section 377.32"` → **count 1** (first attempt returned **HTTP 429**; re-run after a 300 s in-turn sleep returned 200 — the throttled attempt is **not** recorded as a zero). |

### Pin cites checked against star pagination

* **County of Los Angeles**: the rendering carries markers for 21 Cal.4th 294–309. Quotes pin cited
  to 295, 295, 297 and 309, each verified to fall between consecutive markers. The marker sequence
  ends `…308, 309, 305, 307` — the footnotes are relocated past the last star marker and re-run
  earlier page numbers out of sequence, so **no quote is drawn from a footnote with a pin cite**.
* **Quiroz**: markers for 140 Cal.App.4th 1262–1281 run in order; the quoted passage sits between
  the 1264 and 1265 markers → pin cite **1264**.
* **Rubio**: **no pin cite given, and the `cite` field says why** — both the CourtListener rendering
  and the official PDF are the *slip opinion*, carrying slip page numbers (1, 2, 3 …) and no star
  pagination to the Official Reports.
* **Prilliman**: **no pin cite given, and the `cite` field says why** — the quoted words are in
  footnote 1, and the rendering relocates footnotes past the last star marker (*964) while re-running
  an earlier marker (*950) inside footnote 3.

### Out-of-jurisdiction / intermediate authority

The Ninth Circuit's contrary treatment of § 377.34 in 42 U.S.C. § 1983 survival cases is **named as a
recorded conflict between fora and not quoted**, consistent with the rule that out-of-state or
intermediate authority is quoted only as a controlling opinion reproduces it. Disclosed, not resolved.

---

## 3. Negative results recorded

* **PAGA and death of the aggrieved employee.** CourtListener search, `type=o`,
  `court=cal calctapp`, `q="Private Attorneys General Act" AND "377.30"` → **count 0**. An earlier,
  longer form of the query returned **HTTP 429**; it was re-run shorter after a 300 s in-turn sleep
  and returned HTTP 200 with count 0. The zero recorded is from the successful run.
* No authority identified on whether an administrative proceeding (Labor Commissioner wage claim,
  CRD complaint, UI appeal) passes to a successor in interest as a civil action does. Stated as
  unresolved.
* No authority identified apportioning a continuing wage loss between the pre-death and post-death
  periods under § 377.34(a).
* Whether the § 377.34(b) window has been extended by legislation later than AB 1754 was **not**
  searched; the statement that it closed rests solely on the Legislative Counsel's history note as
  displayed on 2026-09-15, and the clause says so.
* No search was run for a Judicial Council form implementing a § 377.31 motion; the clause records
  that as an absence of a finding, not a finding of absence.
* `Bickel v. Sunrise Assisted Living` (2012) 206 Cal.App.4th 1 and
  `Alexander v. Scripps Memorial Hospital La Jolla` (2018) 23 Cal.App.5th 206 surfaced in the first
  search and were **read and discarded**: both are Elder Abuse Act cases citing § 377.34 only for the
  Welf. & Inst. Code § 15657(b) exception, with no employment content.

---

## 4. Validation

`python3 tools/validate_corpus.py`:

```
737 documents / 6565 clauses (4942 authority, 1623 drafting), 11489 citations
{'Business Formation': 93, 'Confidentiality & IP': 93, 'During employment': 93, 'Ending employment': 94, 'Estate Planning': 93, 'Family Law': 93, 'Hiring': 93, 'Real Estate': 93}

validation passed
```

`git diff --numstat data/` → `419 0 data/clauses.json`, `51 0 data/documents.json` — **0 deletions,
append-only**.

Post-write quote re-check (quotes read back out of `data/clauses.json`): **44 checks, 0 failures**,
including the cross-publisher requirement for every statute quote and the dual-PDF-extraction
requirement for every Rubio quote.
