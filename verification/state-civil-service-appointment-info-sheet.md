# Verification — State Civil Service Appointment: Merit Examinations, Eligible Lists, Certification, and Probation — Information Sheet

- Document id: `state_civil_service_appointment_info_sheet`
- Category: Hiring (California law)
- Clause id prefix: `civsvcapt_`
- Clauses as written: 14 (11 authority, 3 drafting); 28 citations
- Checked date on every authority clause: 2026-09-14

---

## 1. Why this topic was treated as uncovered

The gap is structural, not lexical. The corpus already contains 91 Hiring documents and a
document on the **disciplinary** article of the State Civil Service Act
(`state_civil_service_disciplinary_due_process_info_sheet`, Gov. Code §§ 19570–19589, filed
under "Ending employment"). Nothing in the corpus asks **how a person is appointed to a state
civil service position in the first place** — examinations, eligible lists, certification,
veterans' preference, temporary appointment, probation, or the consequence of an appointment
made contrary to the civil service laws.

Greps run over `data/clauses.json` and `data/documents.json` before drafting (raw occurrence
counts, then inspection):

| term | count | disposition |
|---|---|---|
| `Miller v. State of California` | 0 | genuinely absent |
| `held by contract` | 0 | genuinely absent |
| `eligible list` | 0 | genuinely absent |
| `competitive examination` | 0 | genuinely absent |
| `merit principle` | 0 | genuinely absent |
| `Ferdig` | 0 | genuinely absent |
| `Boren` / `Aylward` / `Pinion v. State` | 0 / 0 / 0 | genuinely absent |
| `Professional Engineers` | 0 | genuinely absent |
| `19257.5` | 0 | genuinely absent |
| `18500` / `18900` / `18930` / `18935` | 0 / 0 / 0 / 0 | genuinely absent |
| `19057` / `19170` / `19172` / `19173` | 0 / 0 / 0 / 0 | genuinely absent |
| `veterans preference` / `veterans' preference` | 0 / 0 | genuinely absent |
| `Kim v. Regents` / `Hill v. City of Long Beach` | 0 / 0 | genuinely absent |

Hits that were **inspected and discounted as false positives**:

- **`18973` — 11 hits, all false.** Every hit is the string `S218973`, the Supreme Court docket
  number quoted in verification prose inside another document's gap notes, not Gov. Code
  § 18973. Numeric grep, discounted after inspection.
- **`19050` — 13 hits, all false.** Every hit is **Probate Code** § 19050 (notice to creditors
  of a revocable trust) in `creditor_claims_revocable_trust_info_sheet`, not Gov. Code § 19050.
- **`civil service` — 23 hits, all discipline-side.** They sit in
  `state_civil_service_disciplinary_due_process_info_sheet`,
  `certificated_teacher_dismissal_morrison_info_sheet`, and
  `judicial_exhaustion_administrative_findings_info_sheet` (Johnson v. City of Loma Linda).
  All concern discipline, dismissal, or preclusion — none concerns appointment.
- **`merit system` — 5 hits**, in `california_fair_pay_act_info_sheet` (the Labor Code
  § 1197.5 "merit system" affirmative-defense factor) and
  `classified_school_employee_layoff_seniority_info_sheet` (Education Code layoff). Unrelated.
- **`appointing power` — 6 hits**, all in the disciplinary sheet quoting § 19583 on the board's
  decision on an *adverse action*. Unrelated to appointment.
- **`Article VII` — 1 hit**, in the disciplinary sheet's gap, which expressly records that it
  does *not* address the Article VII, section 3 cross-reference. That is a recorded negative,
  i.e. the opposite of coverage.
- **`Raines` / `HealthWorks` — 10 / 9 hits, real coverage.** The Raines v. U.S. HealthWorks
  FEHA-agent question is already covered in `joint_employer_status_info_sheet` and
  `personal_liability_individual_defendants_termination_info_sheet`, so that "who can be named"
  angle was abandoned and is not duplicated here.
- Other candidates checked and abandoned because already covered: `1002.5` (33),
  `§ 925` (26), `12951` (43), `12950` (41), `1050`/`1054` (blacklisting, real coverage in
  `blacklisting_former_employee_info_sheet` and `neutral_reference_policy`), `Sullivan v.
  Oracle` (28), `12960`/`12965` (FEHA accrual, covered in
  `feha_continuing_violation_and_accrual_info_sheet`), `1624` (12), `disparate impact` (15),
  `bona fide occupational` (14), `222.5` (12), `2802` (37).

---

## 2. Source paths, per citation

### Publishers used

- **L** = Legislative Counsel, California Legislative Information (`leginfo.legislature.ca.gov`),
  code sections fetched with a JSF session cookie seeded from `/faces/codes.xhtml`.
- **O** = onecle (`law.onecle.com`), a **genuinely independent** publisher. Its California
  pages are a 2017-vintage snapshot and carry **no** "Source:" line pointing back to leginfo.
  It also publishes the California Constitution at
  `https://law.onecle.com/california/constitution/article-7.html`.
- **P** = `california.public.law`. **Not independent of L**: every page prints a
  `Source: Section NNNN, https://leginfo.legislature.ca.gov/...` line. Recorded as a third
  fetch only, never as a second publisher. Disclosed in each affected clause gap.
- **B** = Legislative Counsel chaptered **bill text** (`billTextClient.xhtml`). A different
  *document* (session law) but the **same publisher** as L. Used only where onecle's 2017
  snapshot predates an amendment; disclosed as same-publisher corroboration.
- **CL** = CourtListener opinion HTML (Referer + browser UA; 202s retried in-turn).
- **CCG** = `courts.ca.gov/opinions/archive/<DOCKET>.PDF` (redirects to `www4.courts.ca.gov`),
  extracted **twice**, with pypdf 6.18.1 and pdfminer.six 20260107, and compared.

### Normalization applied (and nothing else)

Collapsing runs of whitespace (needed because onecle hard-wraps and leginfo injects tab runs),
removal of line-wrap hyphenation in PDF extractions, `&nbsp;` → space, soft hyphen removal,
ligature `ﬁ`/`ﬂ` → `fi`/`fl`, and typographic quotation marks/apostrophes → straight. No word,
spelling, or punctuation was altered.

### Per-citation table

| clause | citation | fetch 1 | fetch 2 | fetch 3 | result |
|---|---|---|---|---|---|
| `civsvcapt_constitutional_merit_mandate` | Cal. Const. art. VII, § 1(a) | L (CONS art. VII) | O (art-7.html) | — | verbatim in both; independent |
| | Cal. Const. art. VII, § 1(b) | L | O | CL (Prof. Engineers) | verbatim in all three |
| | Prof. Engineers, 15 Cal.4th at 548 (ballot argument) | CL 1224847 | *none reachable* | — | single publisher; phrase query count 1 |
| `civsvcapt_act_purpose_and_equitable_treatment` | Gov. Code § 18500(c)(2) | L | O | P | L≡O byte-identical; independent |
| | Gov. Code § 18500(c)(5) | L | O | P | L≡O byte-identical; independent |
| `civsvcapt_examinations_and_eligible_lists` | § 18900(a) | L | O | P | L≡O byte-identical |
| | § 18930 (standard) | L | O | P | L≡O byte-identical |
| | § 18930 (forms of exam) | L | O | P | L≡O byte-identical |
| `civsvcapt_withholding_and_withdrawal_from_the_list` | § 18935(a) lead-in | L | O | P | L≡O byte-identical |
| | § 18935(a)(4) | L | O | P | L≡O byte-identical |
| `civsvcapt_certification_and_the_three_ranks` | § 19050 (strict accordance) | L | O | P | L≡O byte-identical |
| | § 19050 (from employment lists) | L | O | P | L≡O byte-identical |
| | § 19057.1(a) | L | B (AB 1195 chaptered) | P | **no independent second publisher — disclosed** |
| | § 19057.1(c) (rank definition) | L | O | B + P | verbatim in all four incl. independent O |
| `civsvcapt_veterans_preference` | Cal. Const. art. VII, § 6(a) | L | O | — | verbatim in both; independent |
| | § 18973.1 | L | O | P | L≡O byte-identical |
| | § 18973.5(b) | L | O | P | L≡O byte-identical |
| `civsvcapt_temporary_appointment_limits` | Cal. Const. art. VII, § 5 | L | O | — | verbatim in both; independent |
| | § 19058 | L | O | P | L≡O byte-identical |
| `civsvcapt_probationary_period` | § 19170(a) | L | B (SB 510 chaptered) | P | **no independent second publisher — disclosed** |
| | § 19173(a) | L | O | P | L≡O byte-identical |
| `civsvcapt_appointment_contrary_to_the_civil_service_laws_ferdig` | Ferdig, 71 Cal.2d at 101 | CL 5607624 | *none reachable* | — | single publisher; phrase query count 1 |
| | Ferdig at 104 (void) | CL 5607624 | *none reachable* | — | phrase query count 1 |
| | Ferdig at 104 (having concluded) | CL 5607624 | *none reachable* | — | phrase query count 1 |
| | Ferdig at 109 (§ 19173 not a cure) | CL 5607624 | *none reachable* | — | phrase query count 1 |
| `civsvcapt_good_faith_mistake_statute` | § 19257.5 | L | O | P | L≡O byte-identical |
| `civsvcapt_statutory_not_contractual` | Miller, 18 Cal.3d at 813 | CL 1148788 | *none reachable* | — | corroborated via Cal Fire (below); phrase query count 1 |
| | Cal Fire (S239958) reproducing Miller | CCG slip PDF (pypdf **and** pdfminer.six) | CL 4595926 | — | verbatim in all three extractions |

### Comparison method

`diff3.py` extracted each statutory section body from L, O and P and compared them character by
character after the normalization above. For every section quoted here except §§ 19057.1 and
19170, **L and O were byte-identical** — a genuine two-publisher confirmation.
`reverify.py` then re-read all 28 `citations[].quote` values **out of the written
`data/clauses.json`** and re-tested each as a substring of every fetch listed above:
**28 quotes, 0 substring failures.**

---

## 3. Things disclosed rather than silently corrected

1. **Professional Engineers reproduces Art. VII, § 1(b) with a bracketed initial.** The opinion
   prints `"[i]n the civil service permanent appointment ..."`. The constitutional text prints
   `"In the ..."`. Rather than reconstruct a capital `I` that appears in one source and not the
   other, the quote in the clause **begins after the bracketed letter**
   (`civil service permanent appointment and promotion shall be ...`), which is a verbatim
   substring of leginfo, onecle **and** the opinion. Stated in the clause gap.

2. **Missing opening bracket in CourtListener's Professional Engineers text.** The ballot-argument
   sentence is published as `... by "'prohibiting] appointments and promotion in the service ...'"`
   — a closing bracket with no opening bracket. That is an artifact of that scan. The quote in
   the clause **begins after that word**. Disclosed in the gap; not repaired.

3. **`(§3)` without a space in the same opinion**, printed alongside `(§ 2)` and `(§ 4)` with
   spaces — an internal inconsistency in that publication. No quote spans it.

4. **Ferdig prints `"acts in excess of, or in violation, of the powers conferred upon it"`** —
   the comma follows `violation` rather than `of`. Confirmed in the record, not in my
   extraction, by an exact-phrase index query (`cluster_id:5607624 AND "acts in excess of, or in
   violation, of the powers conferred upon it"` → **count 1**). Reproduced as printed and
   disclosed in the gap.

5. **Ferdig prints veterans' preference both ways in the same opinion**: `veterans' preference
   points` (apostrophe) and `the veterans preference points` (no apostrophe). Separate
   exact-phrase queries against cluster 5607624 each returned **count 1**, so both forms are in
   the record. The quote reproduces the apostrophe-free form as printed. Disclosed.

6. **Ferdig's publication carries heavy OCR damage**: `Kefrigeration Engineman`, `Naval Beserve`,
   `hut for` (where it quotes the 1968 statute), `bas designated`, `Departent`, `ease` for
   `case`, `XXIY` for `XXIV`, and a recurring stray `I`/`l`/`|` injected at line ends by a
   margin artifact. Every quoted span was selected from damage-free text. Disclosed.

7. **The `hut for` reading is a scan defect, not a statutory variant.** The statutory text of
   Gov. Code § 19257.5 quoted in the clause was taken from the statute publishers (L and O,
   byte-identical), not from the opinion. Disclosed.

8. **Gov. Code § 19257.5 has changed since Ferdig quoted it.** Ferdig quotes the 1968 enactment
   as vesting the power in **"the board"** and using `such appointment` / `which if known` /
   `such action`. The section now vests it in **"the department"** and uses `the appointment` /
   `that if known` / `the action`, under the credit line *Amended by Stats. 2013, Ch. 427,
   Sec. 67. (AB 1062)*. Recorded in the clause gap as an amendment postdating the opinion.

9. **Miller's publication also carries OCR damage** — `bom` for born, `salaiy` for salary,
   `impairement [jic]` for `[sic]` — none of it inside the quoted sentence. Disclosed.

10. **Two CourtListener clusters exist for Cal Fire Local 2881, and they are not the same
    document.** Cluster **4595926** (docket S239958, no reporter citation attached) carries the
    full majority opinion including the Miller quotation. The citation redirect
    `/c/Cal.5th/6/965/` resolves to a **different** cluster, **6240283**, which confirms the
    citation `6 Cal. 5th 965` but whose opinion text contains **only Justice Kruger's
    concurrence** — the quoted passage is not in it. Both were fetched and diffed. Disclosed in
    the clause gap, and it is the reason **no pin cite is given for Cal Fire**.

11. **california.public.law inserts a space before punctuation that follows an internal
    cross-reference** (`Section 18547 ,` / `Section 3513 .` / `Section 19680 ).` /
    `Section 12926 ,`). Any quote spanning a cross-reference would therefore not be a verbatim
    substring of that publisher. No quote in this document spans one; the § 18930 quote stops
    before the § 18547 cross-reference for this reason. Disclosed in the affected gaps.

12. **leginfo URL quirk for decimal section numbers** (recorded as a retrieval quirk, not a
    defect in the record): `codes_displaySection.xhtml?...&sectionNum=18973.1.` — with the
    trailing period — returns the article heading and an **empty** section body, while
    `sectionNum=18973.1` returns the text. The same holds for § 18973.5. The behaviour is not
    uniform across decimal sections: the trailing-period form was retested and **does** return
    the section body for §§ 19057.1 and 19257.5. The fetches relied on for §§ 18973.1, 18973.5
    and 19257.5 use the form without the trailing period.

---

## 4. Recorded negative results

- **No case law construing Gov. Code § 19257.5** was located in the course of this work; the
  clause says so rather than implying the section has been construed.
- **Gov. Code § 19057** (the predecessor certification section) **no longer exists**: a request
  returns a page with no section body. The operative provision is § 19057.1, with § 19057.3 for
  specified CDCR classes. Recorded here; the document cites § 19057.1.
- **Gov. Code § 18974** returns no section body; the veterans' preference article's operative
  sections are §§ 18973, 18973.1, 18973.5, 18974.5, 18975, 18976, 18977, 18979.
- **Amendments postdating onecle's snapshot** (and therefore breaking the two-publisher check
  for those two sections only): § 19057.1, Stats. 2022, ch. 892 (AB 1195); § 19170, Stats. 2023,
  ch. 74 (SB 510). Both divergences are quoted in full in the relevant clause gaps and treated
  as amendments, not as discrepancies.
- **No slip PDFs exist** for Miller (1977), Professional Engineers (1997, docket S049151 → 404)
  or State Personnel Bd. v. DPA (2005, S127785 → 404).
- **Questions expressly not reached** and flagged in the gaps: whether Gov. Code § 18500 creates
  a private right of action; whether an eligible certified within the three ranks has any
  enforceable entitlement to appointment; the standard of State Personnel Board review of a
  rejection during probation; whether a probationary state employee holds a constitutionally
  protected property interest; how the Art. VII, § 5 nine-month ceiling is computed across
  appointments.
- **Long-phrase queries re-run shorter (recorded as required):** the query
  `cluster_id:5607624 AND "entitled at any time to the veterans preference points"` failed with a
  malformed response; it was **re-run shorter** as
  `cluster_id:5607624 AND "to the veterans preference points"` → **count 1**.

---

## 5. Star pagination / pin cites

- **Miller**, cluster 1148788: body markers `*811 … *818`, strictly monotonic, single reporter
  (Cal.3d). The quoted sentence falls between `*813` and `*814` → **18 Cal.3d at p. 813**. That
  page number is independently confirmed by Cal Fire's own citation string
  `18 Cal.3d 808, 813 (Miller)`, present in both PDF extractions.
- **Professional Engineers**, cluster 1224847: body markers `*548 … ` monotonic through the
  majority; the two quoted passages both sit between `*548` and `*549` → **15 Cal.4th at p. 548**.
  The only non-monotonic markers in the document appear far later, inside the separate opinions,
  well past the quoted text.
- **Ferdig**, cluster 5607624: body markers `*100 … *110`, monotonic. A stray out-of-order `*102`
  reappears inside the **footnote block that CourtListener relocates to the end** of the
  document. All four quoted spans are body text before that block →
  **pp. 101, 104, 104, 109**. No pin cite is offered for anything in Ferdig's footnotes.
- **Cal Fire**: **no pin cite given** — see disclosure 10 above.

---

## 6. Out-of-state / intermediate-court authority

None is quoted. The only intermediate-court and out-of-court material referred to (California
State Employees' Assn. v. Williams; CSEA v. State of California; the 1934 ballot argument;
State Compensation Ins. Fund v. Riley) is described only as the California Supreme Court's own
opinion in Professional Engineers recites it, and the single quoted ballot-argument fragment is
quoted **as that controlling opinion reproduces it**, which the citation's `cite` field states.

---

## 7. Validation run

```
parsed: 6387 clauses, 725 documents
authority=4789 drafting=1598
TARGET DOC: 14 clauses (11 authority, 3 drafting), 28 citations
PASS
```

Assertions: both files parse; clause ids unique; document ids unique; document titles unique;
every `clauseOrder` id resolves; every authority clause has a non-empty `gap` and ≥ 1 citation;
no orphan clauses; no undeclared `{{placeholder}}` in any body or gap; canonical key order for
clauses (`id,title,kind,status,checkedDate,body,gap,citations` / `id,title,kind,body`),
citations (`case,cite,url,quote`) and documents
(`id,title,description,categories,clauseOrder,fields`); `categories` exactly `["Hiring"]`;
shared clause-id prefix `civsvcapt_`.

Quote re-read out of the written `data/clauses.json`: **28 quotes checked, 0 failures.**
