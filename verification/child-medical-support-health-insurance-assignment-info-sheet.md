# Verification — Medical Support: Health Insurance Coverage Orders and Assignments in a California Child Support Case

Document id: `child_medical_support_health_insurance_assignment_info_sheet`
Category: Family Law. Checked date on every authority clause: 2026-09-15.
15 clauses (13 authority, 2 drafting), 110 citations.

## 1. Why this topic was uncovered

The 92 pre-existing Family Law documents treat child support as a money question: how
income is determined (`child_support_income_determination_info_sheet`), what add-ons are
ordered (`childsupport_addon_expenses`), how arrears are collected (`support_contempt_info_sheet`,
`license_suspension_child_support_info_sheet`). None asks who insures the child. Family Code
Division 9, Part 1, Chapter 7 — "Health Insurance," sections 3750 through 3773 — was untouched.

Grep counts run against `data/clauses.json` and `data/documents.json` before drafting:

| pattern | raw hits | after inspection |
| --- | --- | --- |
| `medical support` | 0 / 0 | genuinely absent |
| `income withholding` | 0 / 0 | genuinely absent |
| `National Medical Support` | 0 / 0 | genuinely absent |
| `abstract of judgment` | 0 / 0 | genuinely absent |
| `3760`–`3773` (word-bounded) | 2 clauses | **discounted**: both are `Section 3771` of the **Revenue and Taxation Code** (`detectorcompliance_smoke_alarm_exemptions`, `tds_exemptions`), tax-sale chapters, not Family Code |
| `3750`, `3753`, `3754`, `3757`, `3768`, `3769` (unbounded `grep -oE`) | 6/2/1/9/3/2 | **discounted in full**: every one is a substring inside a longer number or a year; a word-bounded re-run returned zero |
| `health insurance` | 18 clauses | **discounted**: COBRA/Cal-COBRA, HIPAA special enrollment, TAA health coverage tax credit, data-broker and genetic-privacy definitions, CFRA benefits, `bifurcation_indemnification_conditions` (Fam. Code § 2337 conditions), `famfacilitator_*` (§§ 10003, 10005 listing "health insurance" among the facilitator's subject matters), `csincomedet_net_disposable_income_deductions` (naming § 4059(d) without quoting it), `parentage_legislative_basis` (§ 7573(d) benefits list). None states any rule of Chapter 7. |
| `Chalmers` | 2 | **discounted**: `live_testimony_family_law_hearings_info_sheet`, describing *Chalmers v. Hirschkop* as *Swain* describes it — a different case entirely |
| `reasonable cost` | 57 | not inspected individually; the 5 percent presumption of § 3751(a)(2) is absent, confirmed by the zero word-bounded hits on `3751` |
| `4062`, `4063` | present | real coverage — `childsupport_addon_expenses` quotes § 4062(a)(2). Chapter 7 is the *insurance premium* side; §§ 4062/4063 are the *uninsured cost* side. The new sheet treats that boundary as a scope limit and does not re-quote § 4062. |

The gap is structural, not lexical: the corpus assumes a support order is an order to pay
money, so it never reaches the instrument (a health insurance coverage assignment served on
an employer) that operates on a third party and does not move any money to the other parent.

## 2. Sources, per citation group

### 2.1 California Family Code §§ 3750, 3751, 3751.5, 3753, 3760–3773

Fetch path A: `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FAM&sectionNum=<sec>.`
(Legislative Counsel). A JSF session cookie was first seeded from `/faces/codes.xhtml`; without it
the section body returns empty. One section (§ 3768) returned HTTP 000 / 0 bytes on the first
pass and was re-fetched successfully.

Fetch path B: `https://law.onecle.com/california/family/<sec>.html` — onecle, an independent
publisher, 2017 snapshot ("Last modified: October 25, 2018").

These two are genuinely independent. `california.public.law` was **not** used: it prints a
"Source:" line naming leginfo and is at best a third copy of the same chain.

Comparison result: for every section quoted, the leginfo body and the onecle body agree word
for word, **except § 3751**, treated below. Benign normalizations applied before comparison and
disclosed in the clause gaps: runs of whitespace collapsed to a single space (leginfo runs
subdivisions together inside one paragraph and wraps lines mid-sentence — e.g. "rebuttably
presumed to / be reasonable" in § 3751(a)(2) and "on behalf of the / parties' child" in
§ 3761(b)(1); onecle sets each subdivision on its own line), and typographic apostrophes and
quotation marks (U+2018/U+2019/U+201C/U+201D) folded to their ASCII equivalents. Nothing else
was changed.

**§ 3751 — amended after the onecle snapshot.** leginfo's note reads "(Amended by Stats. 2019,
Ch. 115, Sec. 42. (AB 1817) Effective January 1, 2020.)". A word-level diff of the two fetches
isolated exactly two changes, both in subdivision (a)(2):

* onecle (2017): "**In any case in which** an amount is set for current support" → current: "**When** an amount is set for current support"
* onecle (2017): "5 percent of **his or her** gross income" → current: "5 percent of **the parent's** gross income"

The post-2017 wording was corroborated against the Legislative Counsel's **chaptered text of
AB 1817** (`billTextClient.xhtml?bill_id=201920200AB1817`; the page carries "CHAPTERED" and
"CHAPTER 115"), at "SEC. 42. Section 3751 of the Family Code is amended to read:". This is
**the same publisher in a different document**, not an independent second publisher, and both
affected clauses say so in their gaps. Sentences of § 3751 untouched by the 2019 amendment —
(a)(1), the low-income-adjustment sentence, the reasons-on-the-record sentence, (b) and (c) —
are quoted from both independent publishers.

### 2.2 Judicial Council forms FL-478 and FL-470

* FL-478 fetched from `https://www.courts.ca.gov/documents/fl478.pdf` and from
  `https://courts.ca.gov/sites/default/files/courts/default/2024-11/fl478.pdf`. Both returned
  166,965 bytes; identical. **Two URL paths to one publisher, not two publishers** — recorded
  as such in the clause gap, not counted as corroboration.
* FL-470 fetched from `https://www.courts.ca.gov/documents/fl470.pdf` and
  `https://courts.ca.gov/sites/default/files/courts/default/2024-11/fl470.pdf`; identical MD5
  `50e434e4f6a780d8bfa629e606548957`. Same finding.
* Each PDF was extracted twice, with **pypdf** and with **pdfminer.six**. The two extractors
  order form-field text differently, so comparison was phrase by phrase rather than whole-document.
  Every quoted phrase was confirmed present in both extractions (11 phrases for FL-478, 6 for FL-470).
* No independent second publisher of a Judicial Council form was located; the sheet says so.

### 2.3 Federal statutes

* 42 U.S.C. § 666(a)(19) and 29 U.S.C. § 1169(a)(5)(C) were each fetched from **two genuinely
  independent publishers**: the Office of the Law Revision Counsel (`uscode.house.gov`,
  prelim edition) and the Legal Information Institute (`law.cornell.edu`).
* Every federal quote is a verbatim substring of both after whitespace collapsing.

## 3. Defects and divergences disclosed rather than corrected

1. **Family Code § 3765(b) still says "district attorney."** Both independent publishers print
   the clerk's duty as delivery "to (1) the district attorney personally or by first-class mail."
   § 3765 was last amended by Stats. 1994, ch. 1269, § 41. Its companion sections in the same
   chapter were conformed to California's transfer of support enforcement to local child support
   agencies — § 3752 by Stats. 2000, ch. 808, § 30; § 3761 by § 31; § 3771 by § 32 — and each
   now reads "local child support agency." § 3765 was not conformed, so within one article the
   applicant is the "local child support agency" (§ 3761(b)) while the party the clerk must notify
   of a motion to quash is the "district attorney" (§ 3765(b)). Confirmed in the record, not in
   extraction, because both publishers print it identically. Disclosed in
   `medsupp_motion_to_quash`; the sheet does not say what effect it has.

2. **Mandatory form FL-478's checkboxes are not § 3765(a)'s list.** § 3765(a) says the obligor
   may move to quash on "error on any of the following grounds" and enumerates six. FL-478
   item 2 lists nine boxes. Three track the statute (2.a not-the-obligor; 2.g coverage otherwise
   provided; 2.h employer's choice inappropriate). Four have no counterpart in § 3765(a):
   2.b "Health insurance coverage is not available at a reasonable cost" (the Article 1 standard
   from § 3751), 2.c the half-of-net-income ceiling, 2.d children "are emancipated" (a § 3770(d)
   *termination* condition), 2.e the 15-day pre-filing notice (a § 3761(b)(1) requirement).
   Conversely § 3765(a)(2) and (a)(3) get no dedicated box. Disclosed in
   `medsupp_fl478_grounds_diverge_from_statute`; the sheet does not say which list governs.

3. **Mandatory form FL-470 instruction 2 contradicts § 3766(a).** The form tells the employer
   to act "Unless you receive a **motion** to quash the assignment"; § 3766(a) excuses the
   employer only where it "receives an **order** issued pursuant to Section 3765 to quash."
   On the statute a motion does not suspend the duty; on the form it appears to. Disclosed in
   `medsupp_fl470_and_section_3772_forms`.

4. **§ 3771(e) is not an item of information.** § 3771 is introduced as a list of information
   the employer must supply within 30 days on the agency's request; subdivisions (a)–(d) are such
   items, but (e) imposes a separate continuing duty to report a later lapse in coverage, with no
   request and no stated period. Both publishers print it that way. Noted in
   `medsupp_termination_liability_and_information_duties`.

5. **PDF extraction artifacts, disclosed and worked around.** In FL-470 instruction 2,
   pdfminer.six preserves justified spacing ("within  30  days  after  you  deliver") while pypdf
   splits a word ("to th e obligor"). No quotation spans either point; the instruction-2 quote
   stops at "coverage of the specified children," which is byte-identical in both extractions.

6. **Legal Information Institute rendering artifacts.** LII's hyperlinking inserts spaces the
   Law Revision Counsel does not have: 29 U.S.C. § 1169(a)(5)(A)(i) reads "the plan**' s**
   procedures" on LII and "the plan's procedures" at uscode.house.gov; 42 U.S.C. § 666(a)(19)(B)
   reads "child support order **)**" on LII. LII also prints an em dash where OLRC prints a
   hyphen. Quotations were chosen to avoid every such point; none spans a dash or a bracketed
   cross-reference. Disclosed in `medsupp_national_medical_support_notice`.

7. **Retired domain on both forms.** FL-470 [Rev. January 1, 2007] and FL-478 [New January 1,
   2007] both print "www.courtinfo.ca.gov." Noted as a fact about the forms; no substitute
   address is asserted.

## 4. Negative results recorded

CourtListener opinion-database searches (quota-free REST v4 `search/?type=o`), each an exact
phrase query:

| query | count |
| --- | --- |
| `"health insurance coverage assignment"` | **0** |
| `"Family Code section 3751"` | **0** |
| `"Family Code section 3751.5"` | **0** |
| `"Family Code section 3761"` | **0** (first attempt returned a throttling error rather than a count; re-run after the limit cleared — recorded in the clause gap) |
| `"Family Code section 3765"` | **0** |
| `"section 3753" AND "health insurance"` | **0** |
| `"national medical support notice"` | **2**, neither Californian: *Franklin Electric Co. v. Lutheran Hospital of Indiana* (Ind. Ct. App., Mar. 31, 2010) and *State v. Burke* (N.C. Ct. App., Aug. 7, 2007). Neither opinion was fetched and neither is quoted; out-of-state intermediate appellate authority is quoted in this corpus only as a controlling opinion reproduces it. |

Two rate-limit walls were hit during the run (125/day) and were ridden out with in-turn polling
loops rather than abandoning the searches.

Questions left open and labelled as such in the clause gaps, not answered:

* who serves a *future* employer under § 3763(a), and when the § 3764(a) 20-day period runs for one;
* whether the Article 2 remedies (§§ 3768, 3769) reach a violation of § 3751.5, which sits in Article 1;
* how § 3753's "in addition to" direction reconciles with its "due consideration" reference to § 4059(d);
* from what date § 3765(b)'s 15 days run when the instrument served is a national medical support
  notice under § 3773 rather than an assignment order delivered under § 3764(b);
* what rebuts the § 3751(a)(2) presumption, and how "gross income" is measured for it;
* what consequence follows a § 3761(b)(1) statement of notice that is untrue.

Named but deliberately not fetched, and identified in the gaps as named only as the quoted
statute names them: Health & Safety Code § 1373; Insurance Code §§ 10277, 10278; Code of Civil
Procedure §§ 706.052, 1013, 1218; 15 U.S.C. § 1673; Family Code §§ 4055, 4059, 4062, 4063, 5246,
17400, 17422; and the federal National Medical Support Notice form itself (OMB 0970-0222).

## 5. Machine checks

* `python3 tools/validate_corpus.py` → `733 documents / 6506 clauses (4892 authority, 1614 drafting), 11316 citations` … `validation passed`.
* Every one of the 110 `citations[].quote` values was **re-read out of the written
  `data/clauses.json`** and re-tested as a verbatim substring of the stored fetches, routed by
  URL to the right source (leginfo section / onecle section / AB 1817 chaptered text / both PDF
  extractions / OLRC / LII): **110 checked, 0 failures.**
* Clause/document split counted from the written file: **15 clauses in `clauseOrder`, 13
  authority, 2 drafting, 0 empty gaps, order matches.**
* `git diff --stat`: `data/clauses.json | 815 +`, `data/documents.json | 69 +`, 884 insertions,
  **0 deletions** — append-only.
