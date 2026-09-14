# Verification record — `employee_obligations_labor_code_article_3_info_sheet`

**Document title:** The Employee's Own Obligations During Employment (Lab. Code §§ 2850–2866; Foley v.
Interactive Data Corp.; Tameny v. Atlantic Richfield Co.; Paratransit, Inc. v. Unemployment Ins. Appeals
Bd.; Fermino v. Fedco, Inc.; Aetna Building Maintenance Co. v. West; Kerr's Catering Service v. Department
of Industrial Relations) — Information Sheet

**Category:** During employment (exactly `["During employment"]`).
**Clause prefix:** `empdut_`. **Checked date:** 2026-09-14.
**Split (counted from the written `data/clauses.json`):** 14 clauses — 12 authority, 2 drafting; 29
citations.

---

## 1. Why the topic is uncovered — the structural gap

The 87 pre-existing "During employment" documents all pose the same question from one direction: *what
does the employer owe?* Every one of them states an employer duty, an employee right, or an agency
standard enforceable against an employer. None asks the reciprocal question the Labor Code itself poses in
a dedicated article: *what does the employee owe?*

That article is **Division 3, Chapter 2, Article 3, "Obligations of Employee," Lab. Code §§ 2850–2866** —
the facing article to "Obligations of Employer," §§ 2800–2810.8, which the corpus already covers heavily
(§ 2802 has its own information sheet).

### Grep counts before writing (run over `data/clauses.json` and `data/documents.json`)

Word-boundary regex over the JSON serialisation of each clause:

| pattern | clause hits | disposition |
|---|---|---|
| `\b2850\b` | 0 | — |
| `\b2851\b` | 0 | — |
| `\b2852\b` | 0 | — |
| `\b2853\b` | 0 | — |
| `\b2854\b` | 0 | — |
| `\b2855\b` | 0 | — |
| `\b2856\b` | 1 | **false positive** — `antidef_waiver_of_antideficiency_protection`, which cites **Civil Code § 2856** (guaranty waivers), not Labor Code § 2856. Inspected and discounted. This is exactly the numeric-grep trap the brief warns about. |
| `\b2857\b` | 0 | — |
| `\b2858\b` | 0 | — |
| `\b2859\b` | 0 | — |
| `\b2860\b` | 0 | — |
| `\b2861\b` | 0 | — |
| `\b2862\b` | 0 | — |
| `\b2863\b` | 0 | — |
| `\b2864\b` | 0 | — |
| `\b2865\b` | 0 | — |
| `\b2866\b` | 0 | — |
| `Obligations of Employee` | 0 | — |
| `ordinary care and diligence` | 0 | — |
| `usage of the place` | 0 | — |
| `reasonable degree of skill` | 0 | — |
| `culpable degree` | 0 | — |
| `just accounts` | 0 | — |
| `acquires by virtue` | 0 | — |
| `Petermann` | 0 | — |
| `Paratransit` | 0 | — |
| `Hawaiian Dredging` | 0 | — |
| `Fermino` | 0 | — |
| `Sanfax` | 0 | — |
| `Dahl-Beck` | 0 | — |
| `Bancroft` | 0 | — |
| `Lugosi` | 0 | — |
| `Nicholas Laboratories` / `Huong Que` | 0 | — |
| `duty of loyalty` | 26 | **all discounted.** Inspected: every hit is entity-fiduciary material — `llc_mm_fiduciary_duties`, `poa_fiduciary_duties`, `trust_fiduciary_duty_loyalty`, `partnership_fiduciary_duties`, `founders_fiduciary_duties_by_entity`, `testtrust_trustee_obligations`, `llcdefault_nonwaivable_floor`, `lpgpduty_*` etc. None cites Lab. Code § 2863 or any Article 3 section. |
| `GAB Business` | 1 | **discounted** — `atwillraid_gab_disapproved`, in the **Hiring** document `hiring_competitors_at_will_employees_info_sheet` (Reeves v. Hanlon). That sheet is about *employer-versus-employer* interference liability, not about the employee's own statutory obligations. |
| `Tameny` | 10 | **discounted as coverage of this topic.** All ten use Tameny for the wrongful-discharge tort (`wrongfulterm_*`, `armenmin_tameny_claims_little`, `wcxemo_*`, `contviol_*`, `cotrangc_*`). None quotes or mentions Lab. Code § 2856. The Tameny § 2856 footnote is new to the corpus. |
| `Foley v. Interactive` | 8 | **discounted as coverage of this topic.** All eight use Foley for implied-in-fact contract / Foley factors / handbook disclaimers / the implied covenant (`atwillguz_*`, `founders_atwill_status`, `fraudhire_*`, `punidam_*`). None quotes § 2854 or records the question Foley reserved. |
| `Kerr's Catering` | 2 | **discounted as coverage of this topic.** `wageclawback_dlse_opinion_letters` and `ecb_quillian_shortage_bonus` cite it on wage clawbacks and shortage deductions from bonuses. Neither quotes the § 2860 passage at p. 326. |
| `Aetna Building` | 1 | **discounted as coverage of this topic.** `custlist_solicitation_versus_announcement` uses Aetna for the solicitation/announcement distinction. It does not quote the § 2860 trade-secret sentence. |
| `2804` | 2 | `expreimb_nonwaivable`, `expreimb_remote_work` — § 2804 is used there for its effect on § 2802. The Article 2 / Article 3 **asymmetry** (Article 3 has no anti-waiver analogue) is not recorded anywhere. |
| `2870` | 6 | `inventionlimits_*` — the invention-assignment limits are covered; this sheet cross-references them and does not restate them. |

Also checked and found already covered (so *not* chosen as the topic): joint employment / client employers
(`2810.3` → 89 clause hits, `Martinez v. Combs` → 17, `client employer` → 64); personnel records (`1198.5`
→ 71); polygraph (`432.2` → 18); drug testing (`drugtest_*`); wage garnishment (`wagegarnish_*`,
`earnings withholding` → 8); cannabis/§ 12954 (36).

**Conclusion:** Labor Code Article 3 is wholly absent from a corpus of 6,373 clauses. The one numeric hit
(`2856`) is a Civil Code false positive.

---

## 2. Per-citation verification

### 2.1 Statutes — three publishers, three-way character comparison

Every Labor Code section quoted was fetched from **three** publications and compared:

1. **leginfo.legislature.ca.gov** (Legislative Counsel, official). Fetched twice by two different paths:
   the whole-article page
   `codes_displayText.xhtml?lawCode=LAB&division=3.&chapter=2.&article=3.` and the per-section page
   `codes_displaySection.xhtml?lawCode=LAB&sectionNum=<n>.` A JSF session cookie seeded from
   `/faces/codes.xhtml` was required; without it the section body returns empty.
2. **california.public.law** `/codes/ca_lab_code_section_<n>` (301 → follow redirects required).
3. **law.onecle.com** `/california/labor/<n>.html` — page self-labels `CA Labor Code § <n> (2017)`.

**Disclosed non-independence:** each california.public.law page prints a `Source:` line naming the exact
leginfo section URL it was built from. Those two are therefore *not* independent publishers for California
statutes. The genuinely independent comparison is **leginfo vs. onecle**, and onecle's 2017 snapshot is an
editorially separate chain. This is stated in every affected clause gap.

**Normalisation applied (benign only, and disclosed in each gap):** non-breaking spaces; the U+00AD soft
hyphens california.public.law injects into its link text (`leginfo.­legislature.­ca.­gov`); collapsing runs
of spaces and line breaks. No word, apostrophe or quotation mark was altered.

**Result — all 16 sections identical across all three publishers, word for word and punctuation mark for
punctuation mark:**

| § | verdict |
|---|---|
| 2850, 2853, 2854, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866 | MATCH-3 |
| 2802 (subd. (a) quoted), 2804 | MATCH-3 (cpl differs only by its appended `Source:` line and a space before a cross-reference hyperlink) |

Enactment notes: every Article 3 section carries `(Enacted by Stats. 1937, Ch. 90.)` with **no amendment
note**, in both the leginfo rendering and the onecle 2017 snapshot — i.e. no amendment postdating either
publication is recorded. § 2855 (not quoted) is the only Article 3 section carrying a later amendment note
(Stats. 2006, ch. 538); § 2802 carries later amendments and is quoted only for subd. (a).

**Artifact recorded, not quoted:** the leginfo *whole-article* render of § 2802 breaks a line inside the
phrase `necessary expenditure\n or loss` in subd. (b). Subd. (b) is not quoted anywhere in this sheet.

### 2.2 Case law — fetch paths per case

CourtListener opinion HTML was fetched with `Referer: https://www.courtlistener.com/` plus a real browser
UA and Accept header (empty 202 without them). Every opinion was fetched **twice**, by two different URL
paths and two different UA/Accept/Accept-Language header sets:

* **Path A** — `https://www.courtlistener.com/opinion/<cluster>/x/` (Chrome/Linux UA, `en-US`).
* **Path B** — the reporter-citation redirect `https://www.courtlistener.com/c/<reporter>/<vol>/<page>/`
  (Safari/macOS UA, `en-GB`).

The extracted texts from A and B are **byte-identical** for all seven opinions (md5 compared). **This is
one publisher read twice, not two publishers**, and that is stated plainly in every affected clause gap.
No second free publisher of California Supreme Court opinions was reachable from this environment: Justia,
FindLaw, Google Scholar, case.law, casetext, leagle, openjurist, anylaw, casemine, vlex, SCOCAL and
archive.org are all egress-blocked (Justia and FindLaw were tried and returned 403 through the proxy).

**Duplicate-cluster check:** the citation redirect for each of the seven reporter cites returned a single
302 (no 300), so no case in this sheet has two clusters to diff.

**Slip-PDF availability check:** `courts.ca.gov/opinions/archive/<DOCKET>.PDF` was tried for Paratransit
(S204221 — **available**, see below) and for Green v. Ralee (S063015 — 301 with no working target). The
other five opinions (1952–1994) predate that archive entirely.

**Phrase-check (index confirmation that the text is in the record, not an extraction artifact).** Every
quoted sentence was re-confirmed via
`https://www.courtlistener.com/api/rest/v4/search/?type=o&q=cluster_id:<id> AND "<phrase>"`. All returned
**count 1**:

| cluster | phrase | count |
|---|---|---|
| 1170824 | attempted to codify the common law of master-servant relations | 1 |
| 1170824 | subsumed under the statutory duty of ordinary care | 1 |
| 1170824 | No enactment expressly requires an employee to report relevant information | 1 |
| 1212906 | that statute provides additional support for the Petermann ruling | 1 |
| 1212906 | an employer enjoys no authority to direct an employee to engage in unlawful conduct | 1 |
| 2681898 | would impose new and unreasonable burdens upon the employee | 1 |
| 1189781 | do not authorize the employer to forcibly detain the person of an employee | 1 |
| 1178841 | of trade secrets given to him only for the purpose of carrying on his | 1 |
| 5607243 | it is manifest that wages due belong to the employee, and not to the employer | 1 |
| 5607243 | an employer with an unliquidated claim for damages against an employee would be permitted | 1 |
| 1179323 | cannot be maintained until the loss has been ascertained | 1 |

### 2.3 Per-case detail

| case | cluster | paths | pin cite | star-pagination finding |
|---|---|---|---|---|
| Foley v. Interactive Data Corp. (1988) 47 Cal.3d 654 | 1170824 | A + B (identical) | **p. 670** | markers ascend 663→700 in main text; the quoted sentences sit inside that run. After the footnote block the markers restart (665, 671, 673, 687, 695) and stop tracking. Nothing from the footnote block is quoted. Pin cite reliable. |
| Tameny v. Atlantic Richfield Co. (1980) 27 Cal.3d 167 | 1212906 | A + B (identical) | **none given** | the quoted sentences are in **footnote 8** (`<footnote label="8">` in the retrieved markup). Markers ascend 170→179, then restart 171, 172, 173, 177 inside the footnote block before the separate opinions resume at 180. No reporter page can be assigned; none given. |
| Paratransit, Inc. v. Unemployment Ins. Appeals Bd. (2014) 59 Cal.4th 551 | 2681898 | A + B + **official slip PDF** | **none given** | quoted sentence is **footnote 8**; CL footnote block carries a stray `*561` after markers 556→567; the slip PDF has no star pagination at all. No pin cite. |
| Fermino v. Fedco, Inc. (1994) 7 Cal.4th 701 | 1189781 | A + B (identical) | **p. 717** | markers ascend 707→724, no footnote block, no restart. Pin cite reliable. |
| Aetna Building Maintenance Co. v. West (1952) 39 Cal.2d 198 | 1178841 | A + B (identical) | **p. 204** | markers ascend 200→210, no footnote block. Pin cite reliable. |
| Kerr's Catering Service v. Dept. of Industrial Relations (1962) 57 Cal.2d 319 | 5607243 | A + B (identical) | **p. 326** and **pp. 325-326** | markers ascend 323→334 then a stray `*332`. Quote 1 follows `*326`. Quote 2 **straddles the break** (`…would be permitted *326 to withhold…`), hence the 325-326 span; the marker was removed before the substring comparison and nothing else altered. |
| County of San Diego v. Sanfax Corp. (1977) 19 Cal.3d 862 | 1179323 | A + B (identical) | **none given** | quoted sentence is **footnote 10** (`<div class="footnote" id="fn10" label="10">`). Markers ascend 869→887, then restart 869, 871 inside the footnote block. No pin cite. |

---

## 3. Defects and discrepancies disclosed rather than silently corrected

### 3.1 **Paratransit: the official slip opinion and the Official Reports disagree by one word**

Footnote 8 of *Paratransit, Inc. v. Unemployment Ins. Appeals Bd.* (2014) 59 Cal.4th 551 ends with a
parenthetical cross-reference. The two publications do not agree:

* **Official slip opinion**, `https://courts.ca.gov/opinions/archive/S204221.PDF`
  (→ `https://www4.courts.ca.gov/opinions/archive/S204221.PDF`):
  `…upon the employee." (See also Regs., § 1256-36, subd. (b).)`
* **California Official Reports text carried by CourtListener** (cluster 2681898):
  `…upon the employee." (See Regs., § 1256-36, subd. (b).)`

The word **"also"** is present in the slip and absent from the reports.

**Confirmed to be in the record, not in my extraction:**
* Both PDF extractors return "See also" — pypdf and pdfminer.six independently.
* Exact-phrase index queries against cluster 2681898: `"employee See also Regs"` → **count 0**;
  `"burdens upon the employee See Regs"` → **count 1**.
* *Recorded per instruction:* the shorter query `"See also Regs"` alone was rejected by the search endpoint
  with an error payload rather than a count, so it was **re-run in the longer form** given above, which
  returned a clean 0.

**Not resolved against either publisher.** Neither the court's own file nor the Official Reports is assumed
correct. The quotation used in the clause stops at the closing quotation mark of the statutory text and so
does not depend on the difference; the statutory text itself is identical in both and was independently
verified against three publications of the code. Disclosed in `empdut_obedience_2856`.

### 3.2 **Aetna: one publisher spells a cited case name two ways**

The CourtListener opinion text for *Aetna Building Maintenance Co. v. West* renders a cited 1941 decision as
**"Reiss v. Sanford"**, while CourtListener's own search index returns that same decision as
**"Riess v. Sanford" (1941) 47 Cal.App.2d 244**. Two records of one publisher, two spellings. Recorded, not
resolved: this sheet neither quotes nor relies on that decision, and no assertion is made about which
spelling the Official Reports carry. Disclosed in `empdut_acquisitions_2860`.

### 3.3 **Dahl-Beck: the reported jury instruction says "damages" where § 2865 says "damage"**

*Dahl-Beck Electric Co. v. Rogge* (1969) 275 Cal.App.2d 893 reproduces the trial court's instruction as
"…is liable to his employer for the **damages** thereby caused to the employer." Labor Code § 2865 reads
"…for the **damage** thereby caused to the employer" — singular — in all three publications of the code
checked here, and the section carries no amendment note, so the 1969 text was the same. The variance lies
in the instruction as given or as reported, not in the statute. This is one reason the decision is
**described but not quoted** in `empdut_negligence_liability_2865`. The same rendering also carries heavy
hyphen/spacing damage ("defined- to the jury", "distinction between-", "duty to- use", a mangled
`1 ' culpable negligence. ' '`).

### 3.4 **Slip-PDF extractor disagreement (pypdf vs pdfminer.six)**

Both extractors were run on S204221.PDF and diffed. They disagree: **pypdf inserts spurious mid-word
spaces** — it renders "committed" as "co mmitted" and "the" as "t he" — which pdfminer.six does not, and
the two place running page numbers differently. Both were checked for the quoted sentence and both contain
it. Disclosed in `empdut_obedience_2856`.

### 3.5 **Slip-PDF apostrophe encoding**

S204221.PDF encodes apostrophes as **U+201F** (double high-reversed-9), so "employer's" extracts as
"employer‟s". Normalised to U+2019 before comparison and disclosed. The quoted sentence contains no
apostrophe and is unaffected.

### 3.6 **Mirror scanning damage in the older opinions (recorded, none inside any quote)**

* **Tameny**: "Employment at Will **vs-.** Individual Freedom"; "Cal. Const., art. **Ill**, § 3" (for
  art. III); "Gay Law Stu **\*180** dents Assn." (word broken across a star marker).
* **Kerr's Catering**: "merchan **\*328** dise"; a stray `’'` pair after a quoted sentence; irregular
  ellipsis spacing.
* **Sanfax**: "Board of **A dministration** v. **A mes**".
* **Aetna**: "see **eases** collected in 165 A.L.R. 1453"; a paragraph opening ", The facts of this case".

None falls inside any quoted sentence; each quote was separately confirmed by the cluster-scoped phrase
query (count 1).

---

## 4. Restraint on intermediate and out-of-state authority

Quoted **only as a controlling California Supreme Court opinion reproduces them**, and said so in the gap:

* *Moffat v. Buffums' Inc.* (1937) 21 Cal.App.2d 371 — quoted only as **Fermino** prints it.
* *St. Paul Fire & Marine Ins. Co. v. Cunningham* (9th Cir. 1958) 257 F.2d 731 — quoted only as **Sanfax**
  prints it.

**Described but never quoted** (intermediate appellate, no controlling reproduction found): Petermann v.
International Brotherhood of Teamsters (1959) 174 Cal.App.2d 184; Dahl-Beck Electric Co. v. Rogge (1969)
275 Cal.App.2d 893; Nicholas Laboratories v. Chen (2011) 199 Cal.App.4th 1240; Huong Que, Inc. v. Luu
(2007) 150 Cal.App.4th 400; Guild Mortgage Co. v. CrossCounty Mortgage (2026); Earll v. McCoy; Townsend v.
Flotill Products; Pray v. Trower Lumber Co.; Burns v. Sennett & Miller; Parrott v. Bank of America.

**Dissent flagged, not relied on:** *Lugosi v. Universal Pictures* (1979) 25 Cal.3d 813 contains the
statement that § 2860 yields to a contrary contract and that the section "applies to a limited class of
cases." That passage was located **after the dissent marker** in the retrieved text (offset 77026 vs the
`Dissent` marker at 32298) — it is in **Bird, C. J.'s dissenting opinion**, not the opinion of the court.
It is neither quoted nor relied on; its provenance is stated in `empdut_no_anti_waiver_analogue`.

---

## 5. Negative results recorded in the clauses

* **Foley expressly reserved** whether a duty to communicate relevant information is subsumed under
  § 2854's ordinary-care duty or is a separate uncodified duty. No later Supreme Court answer located.
* **§ 2863**: no California Supreme Court decision uses "Labor Code section 2863" or "Lab. Code, § 2863";
  the phrase "preference to the business of the employer" returns only Huong Que (Ct. App. 2007) and a 2026
  decision. Statute quoted alone.
* **§ 2861**: the citation-form search returned **no cases at all**. §§ 2862, 2864, 2866: no construing
  decision located, and the distinctive-phrase searches run for other sections were **not** repeated for
  these three — recorded as the absence of a targeted search as much as an absence of authority.
* **§ 2865**: Dahl-Beck states no case defines "culpable degree of negligence" as the section sets it out.
  A phrase search returned 10 cases, of which **five are criminal-negligence false positives** inspected
  and discounted — People v. Penny (1955) 44 Cal.2d 861 (the only Supreme Court hit), People v. Villalobos,
  People v. Rodriguez, People v. Bernhardt, People v. Diamond. No Supreme Court definition exists.
* **§ 2854**: the citation-form search returned one case (Dahl-Beck); the abbreviated form "Lab. Code,
  § 2854" returned Foley alone at Supreme Court level. Recorded as a floor, not a census.
* **§ 2857**: four phrase hits, none a modern Supreme Court decision; none fetched, none quoted, and no
  representation made that any construes the section.
* **Article 3 has no anti-waiver provision** answering to § 2804 (which is expressly limited to "this
  article"). Statement rests on reading the full published text of §§ 2850–2866; not a holding.
* **No remedy, limitations period, procedure or forum** is supplied anywhere in Article 3.

---

## 6. Validation run (against the written files)

```
parse OK: clauses=6387 documents=725
new doc: 14 clauses (authority=12 drafting=2), citations=29
re-verified 29 citation quotes out of the written clauses.json
ALL CHECKS PASS
```

Assertions: both files parse; clause ids unique; document ids unique; document titles unique corpus-wide;
every `clauseOrder` id resolves; every authority clause has a non-empty `gap` and ≥ 1 citation; no orphan
clauses; every `{{placeholder}}` in every body and gap is declared in the owning document's `fields`;
canonical key order enforced for clauses (`id,title,kind,status,checkedDate,body,gap,citations` /
`id,title,kind,body`), citations (`case,cite,url,quote`) and documents
(`id,title,description,categories,clauseOrder,fields`); shared `empdut_` prefix; categories exactly
`["During employment"]`.

**Post-merge totals:** 6,373 → **6,387** clauses (+14); 724 → **725** documents (+1).

Finally, all 29 `citations[].quote` values were **re-read out of the written `data/clauses.json`** and
re-checked as verbatim substrings of the fetched sources — statutes against all three publisher fetches,
cases against both CourtListener paths, and Paratransit additionally against both extractions of the
official slip PDF. All 29 pass.

**Fields declared:** `companyName`, `employeeName`, `positionTitle`, `serviceDescription`.
