# Verification — Industrial Homework: Manufacture in the Worker's Own Home (Lab. Code §§ 2650–2667)

Document id: `industrial_homework_part_10_info_sheet`
Category: During employment
Clause prefix: `indhw_`
Checked date recorded in clauses: 2026-09-15

14 clauses (11 authority, 3 drafting), 47 citations — counts read back out of the written
`data/clauses.json`, not from the drafting notes.

---

## 1. Why this topic — the gap and how it was confirmed

The gap is structural, not lexical. Every one of the 88 pre-existing **During employment**
documents locates the work at a place the **employer** controls — the injury and illness
prevention program, heat illness, wildfire smoke, occupational noise, bloodborne pathogens,
the emergency action plan, workplace violence prevention, suitable seating, the smoking
prohibition, exit searches and employer-controlled time, covert video surveillance — or, in
the Domestic Worker Bill of Rights sheet, at *somebody else's* household. None asks what the
law says when the manufacturing happens inside the **worker's own dwelling**.

A second, sharper form of the same gap: the corpus already carries
`garment_manufacturing_registration_info_sheet` covering **Part 11** of Division 2 of the
Labor Code (Garment Manufacturing, §§ 2670–2693.1). **Part 10** of the same division
(Industrial Homework, §§ 2650–2667) sits immediately before it, governs the same industry
from the other direction, and is entirely absent — even though § 2651 flatly outlaws homework
manufacture of "articles of wearing apparel." The corpus took the part next door and left this
one untouched.

### Grep counts (run against `data/clauses.json` + `data/documents.json`, 732 docs / 6,491 clauses)

| pattern | raw hits | after inspection |
|---|---|---|
| `Industrial Homework` (case-sensitive) / `industrial homework` / `homeworker` | **0** | 0 |
| `homework` (any case, whole corpus blob incl. bodies, gaps, citations, urls) | **0** | 0 |
| `home work` | **0** | 0 |
| `2650` | 8 clause hits | **0 real.** All false positives: CourtListener opinion ids `2650742` (Nativi v. Deutsche Bank, 5 clauses) and `2265082` (Gifford v. J & A Holdings, 2 clauses), plus `Ed. Code § 22650` in `qdro_ca_public_plan_specific_statutes`. |
| `26[5-6]\d` (whole 2650–2669 range) | 20 clause hits | **0 real.** Opinion ids `2655498`, `2650742`, `2265471`, `2265082`; `Unemp. Ins. Code § 2652` and `§ 2655` (SDI/PFL sheets — different code); `26 U.S.C. §§ 2601–2663` (GST tax). |
| `§ 2665 \| § 2666 \| § 2667 \| 2664 \| 2663` | 1 | **0 real** — `ilit_gst_indirect_skip_allocation` (`26 U.S.C. §§ 2601–2663`). |
| `telework\|remote work\|work from home` | 4 | Real hits, but all about *office/service* remote work (WVPP applicability, indoor heat, expense reimbursement, salary-basis partial-day absences). None is manufacture, none cites Part 10. |
| `garment` | 25 | Real, all Part 11 / Wage Order / § 2810 material. Confirms the adjacent-part framing; none touches Part 10. |
| `employee's own home` / `worker's own home` | **0** | 0 |

Also checked and discounted as a *recorded negative rather than coverage*: none of the hits
above sits in a gap note recording a failed fetch of Part 10 — no clause in the corpus
mentions industrial homework at all, in body, gap, citation or URL.

Cross-check against neighbouring statute: Labor Code §§ 2671, 2673 and 2679 (Part 11) were
retrieved from leginfo and **none contains the string "home" in any form**, so Part 11 does
not silently absorb Part 10. (Stated in the clause gaps as a claim about those three sections
only, not about all of Part 11.)

---

## 2. Sources and fetch paths

### Statutes — two genuinely independent publishers

**Publisher A — Legislative Counsel of California (official).**
`https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=<N>.`
Saved HTML + extracted text per section under the scratchpad `src/` directory as
`leginfo_LAB_<N>.html` / `.txt`. Section body extracted from `<div id="codeLawSectionNoHead">`.

**Publisher B — law.onecle.com (independent 2017 snapshot).**
`https://law.onecle.com/california/labor/<N>.html`
Saved as `onecle_LAB_<N>.html` / `.txt`. Body extracted between the `CA Labor Code § N (2017)`
marker and the `<nav aria-label="Section Navigation">` block.

These two are genuinely independent publications. **`california.public.law` was deliberately
not used**: its pages print a "Source:" line naming the leginfo URL they were built from, so it
is at best a third copy of one publisher, and it has been caught altering text elsewhere in
this project. That is stated in every authority clause gap rather than left to be inferred.

### Comparison result — all 22 sections of Part 10

A scripted character-by-character comparison (`diff_sections.py`) of the leginfo body text
against the onecle body text, after benign normalization only, returned **IDENTICAL** for
every section:

```
2650 2651 2652 2653 2654 2655 2656 2658 2658.1 2658.5 2658.7 2659
2660 2660.1 2660.5 2661 2662 2663 2664 2665 2666 2667
```

(§ 2650 reported a trailing difference on the first pass; inspection showed it was onecle's
own site chrome — the section-navigation list and footer links — that the extraction regex had
not yet stripped. After the extractor was fixed, the statutory text itself matched. Recorded
here rather than quietly re-run.)

**Normalization applied, and disclosed in every gap:** non-breaking spaces converted to
ordinary spaces; runs of spaces and line breaks collapsed to single spaces (leginfo inserts
line breaks mid-sentence — e.g. inside § 2658(c), "Renewal fees shall be / at the same rate" —
and onecle wraps each subdivision in a `<p>` tag). Curly apostrophes (U+2019) and curly
quotation marks (U+201C/U+201D) are reproduced exactly as both sources print them. **No word
was added, removed, or changed.**

### Amendment currency — why no chaptered-bill corroboration was needed

onecle is a 2017 snapshot, so any section amended after 2017 would need corroboration against
Legislative Counsel chaptered bill text (disclosed as the same publisher in a different
document). Credit lines were read from **both** publishers for all 22 sections and they agree
section-for-section. The most recent is:

- § 2658 — Stats. 2016, Ch. 31, Sec. 187 (SB 836), eff. June 27, 2016
- § 2664 — Stats. 2003, Ch. 214, Sec. 1, eff. Jan. 1, 2004
- § 2650 — Stats. 1994, Ch. 1010, Sec. 185
- everything else — 1957, 1975 or 1980

**No section of Part 10 has been amended since the onecle snapshot**, so the snapshot is
current and no chaptered-bill fetch was required. Stated in every gap.

### Cross-reference checks (leginfo, one publisher each — disclosed as such)

Every outbound cross-reference in Part 10 was run down against the Legislative Counsel's
publication of the target section, and **all four are accurate**:

| Labor Code section says | target section's printed hierarchy | result |
|---|---|---|
| § 2653: "Article 2 (commencing with Section 11180) of Chapter 2, Part 1, Division 3, Title 2 of the Government Code" | Gov. Code § 11180 — "ARTICLE 2. Investigations and Hearings [11180 - 11191]", "CHAPTER 2. State Departments", "PART 1. STATE DEPARTMENTS AND AGENCIES", "DIVISION 3. EXECUTIVE DEPARTMENT", "TITLE 2." | accurate |
| § 2656: "Chapter 3 (commencing with Section 1523) of Title 12 of Part 2 of the Penal Code" | Pen. Code § 1523 — "CHAPTER 3. Of Search Warrants [1523 - 1542.5]", "TITLE 12. OF SPECIAL PROCEEDINGS OF A CRIMINAL NATURE", "PART 2. OF CRIMINAL PROCEDURE" | accurate |
| § 2665(a): "Chapter 1 (commencing with Section 1171) of Part 4 of Division 2 of the Labor Code" | Lab. Code § 1171 — "CHAPTER 1. Wages, Hours and Working Conditions [1171 - 1207]", "PART 4. EMPLOYEES [1171 - 1413]", "DIVISION 2." | accurate |
| § 2666: "Chapter 3.5 (commencing with Section 11340) of Part 1 of Division 3 of Title 2 of the Government Code" | Gov. Code § 11340 — "CHAPTER 3.5. Administrative Regulations and Rulemaking [11340 - 11361]" | accurate |

### Case law — a recorded negative

No California appellate authority construing Part 10 was located. The CourtListener REST search
endpoint returned **HTTP 429** ("Rate limit exceeded: 125/day"), so the counts below were taken
from the unthrottled HTML search interface at `https://www.courtlistener.com/?q=…&type=o`
(browser UA + `Referer: https://www.courtlistener.com/` + HTML Accept header):

| query | result |
|---|---|
| `"industrial homework"` | results only from NY, Vt., Pa., Ill., Mich. and federal courts (Dawn Joy Fashions, Fleece on Earth, Roberts v. Industrial Bd. of Appeals, ILGWU v. Donovan, Goldberg v. Whitaker House, Bureerong v. Uvawas). No California state court. |
| `"industrial homeworker"` | **17 Opinions** — none from a California state court. |
| `"Industrial Homework Act"` | **1 Opinion** — *Bureerong v. Uvawas* (C.D. Cal. 1996), a federal district court. |
| `"homeworker's permit"` | no opinion results |
| `"Labor Code section 2658"` | no opinion results |
| `"industrial homework" AND court_id:(cal OR calctapp OR calag)` | no opinion results |
| `"section 2651" "Labor Code"` | 2 opinions, neither about Part 10 (a 1976 WCAB case and a D. Ariz. case) |
| `"2658.5"` | 14 opinions, all false positives (Tex., 7th Cir., 4th Cir., Tenn. — unrelated numerals) |

*Bureerong* is a federal trial court decision and **is not quoted**, because this corpus quotes
out-of-state and non-controlling authority only as a controlling California opinion reproduces
it, and no California opinion reproduces it. **This document is statute-only.** That is stated
in every authority clause gap.

---

## 3. Defects and oddities disclosed rather than silently corrected

1. **§ 2652 calls a prohibition an exemption.** The section gives the division power to
   investigate "any industry **not specifically exempted and made unlawful by Section 2651**."
   § 2651 exempts nothing; it prohibits. Both publishers print the phrase identically, so it is
   in the record and not an extraction artifact. Disclosed in
   `indhw_industry_wide_order_and_hearing_sequence`.

2. **§ 2660.1 says "this section" where every neighbour says "this part."** The worker's
   disclosure duty extends to "any other information known to the homeworker and pertinent to
   the enforcement of **this section**" — but § 2660.1 imposes no substantive requirement whose
   enforcement the named information would bear upon, and §§ 2653, 2658, 2659, 2662, 2665, 2666
   and 2667 all say "this part." Confirmed identical on both publishers, read separately from
   each section page before the note was written. Reproduced verbatim; no interpretation
   offered. Disclosed in `indhw_worker_criminal_exposure_and_use_immunity`.

3. **§ 2658.7 says "this act" in codified text**, where every neighbour says "this part."
   Identical on both publishers. Disclosed in `indhw_confiscation_forfeiture_and_appeal`.

4. **An apparent cross-reference mismatch that turned out NOT to be a defect.** § 2658.7
   (amended 1980) speaks of goods confiscated "pursuant to an **order** obtained under Section
   2656," while § 2656 (rewritten 1975) authorizes the division to seek a **search warrant**.
   Ran it down: the Legislative Counsel's publication of Pen. Code § 1523 — the section § 2656
   cross-refers to — defines a search warrant as "an order in writing, in the name of the
   people, signed by a magistrate." The wording is consistent. Reported as a check that was run
   and came back clean, rather than asserted as a defect.

5. **§ 2664's notice of confiscation has no addressee but the label.** Subdivision (a) directs
   the certified-mail notice to "the person whose name and address are affixed to the article
   or material as provided in this part" — i.e. the § 2663 label — and § 2663's own violation
   (unlabelled goods) is among the violations that make the manufacture confiscable. The
   statute supplies no alternative addressee, no substituted service, no publication provision;
   the 15-day appeal clock in subdivision (b) runs from service of that notice. Confirmed § 2663
   is the only affixing provision by reading all 22 sections of the part. Recorded as drafting,
   with no prediction about how any agency or court would handle it.

6. **Order first, hearing afterwards.** § 2654 requires the division to declare homework
   unlawful in an industry *by order*; § 2655 opens "**After making such order** the division
   shall hold a public hearing." Part 10 contains no provision for affirming, modifying,
   rescinding or staying the § 2654 order after that hearing, and no judicial-review provision
   for such an order (§ 2664's writ remedy reaches confiscations only). Absence recorded, not
   characterized.

7. **The worker's permit falls with the employer's licence.** § 2662 authorizes revocation "on
   expiration or revocation of the industrial homework license of the employer" — a consequence
   turning on the employer's status, not the worker's conduct, with no notice, hearing or
   replacement route provided for the worker. Recorded, not interpreted.

8. **No § 2657 in the current code.** A request to leginfo for Labor Code § 2657 returns the
   publication's "section not found" page, and onecle's own section-navigation list for the
   part runs 2650, 2651, 2652, 2653, 2654, 2655, 2656, **2658**, 2658.1, … skipping 2657. Two
   publishers agree. Nothing in the sheet turns on it. Disclosed in
   `indhw_part_10_and_its_definitions`.

9. **Part 10 has no short-title section.** The name "Industrial Homework Act" appears in the one
   federal decision located, not in the code. Disclosed.

10. **"Distributor" (§ 2656) and "industrial homework laws" (§ 2658.7) are undefined terms.**
    § 2650 defines "employer," "person," "home," "industrial homeworker," "to employ," "to
    manufacture" and "division" — not those two. Recorded, not resolved.

11. **Single-publisher items, stated as such.** The Part 10 and Part 11 *headings* and
    enactment notes ("PART 10. INDUSTRIAL HOMEWORK [2650 - 2667] ( Part 10 added by Stats. 1939,
    Ch. 809. )"; "PART 11. GARMENT MANUFACTURING [2670 - 2693.1]") are printed by leginfo above
    the section text; onecle does not reprint part headings. So the headings rest on one
    publisher. Said plainly in the gap rather than left to be inferred. The four
    cross-reference checks in the table above likewise rest on leginfo alone for the target
    sections' hierarchies.

12. **Gendered pronouns preserved.** §§ 2658.1, 2658.5, 2659, 2660, 2662, 2663, 2665 and 2666
    retain the masculine pronouns of their 1957–1980 amendments; the Legislature modernized only
    § 2650 (1994). Quotations reproduce the sources; the gaps note this rather than silently
    modernizing.

13. **Nominal dollar figures reproduced as enacted** ($100 licence fee per worker, $25 permit
    fee, $50/$100 worker fines) with an express note that the statute carries no escalator and
    that **current DLSE administrative practice was not researched** — the sheet says nothing
    about whether the licensing programme currently operates, what it charges, or whether
    regulations exist under § 2666. The California Code of Regulations was not retrieved.

---

## 4. Per-citation verification

All 47 citations are Labor Code sections. Each `url` is the leginfo `codes_displaySection`
URL for the section named in `case`. Each `quote` was confirmed, **after re-reading it out of
the written `data/clauses.json`**, to be a verbatim substring of *both* the leginfo extraction
and the onecle extraction for that section, under the normalization described above.

| clause | sections cited | citations |
|---|---|---|
| `indhw_part_10_and_its_definitions` | 2650 ×6 | 6 |
| `indhw_flatly_unlawful_articles_2651` | 2651 ×2 | 2 |
| `indhw_industry_wide_order_and_hearing_sequence` | 2652, 2653, 2654, 2655 | 4 |
| `indhw_employer_license_2658` | 2658 ×4 | 4 |
| `indhw_homeworker_permit_2659_2660_2661_2662` | 2660 ×3, 2659, 2661, 2662 | 6 |
| `indhw_employer_criminal_exposure` | 2658.5 ×3, 2658.1, 2667 ×2 | 6 |
| `indhw_worker_criminal_exposure_and_use_immunity` | 2660.5 ×2, 2660.1 ×2 | 4 |
| `indhw_label_requirement_2663` | 2663 | 1 |
| `indhw_confiscation_forfeiture_and_appeal` | 2664 ×4, 2658.7 ×2 | 6 |
| `indhw_wage_standards_and_records_2665` | 2665 ×4 | 4 |
| `indhw_access_warrant_versus_free_access` | 2656, 2666 ×3 | 4 |
| **total** | | **47** |

Re-verification script output (read from the written data file, not from drafting notes):

```
clauses with indhw_ prefix: 14
  authority: 11
  drafting : 3
  citations: 47
  clauseOrder len: 14 | matches: True
  categories: ['During employment']
re-read from data/clauses.json: 47 quotes verbatim in BOTH publishers, 0 failures
```

No pin cites are used anywhere in this document — there is no case law, so there is no star
pagination to check.

---

## 5. Validation

```
$ python3 tools/validate_corpus.py
733 documents / 6505 clauses (4890 authority, 1615 drafting), 11253 citations
{'Business Formation': 93, 'Confidentiality & IP': 93, 'During employment': 93,
 'Ending employment': 93, 'Estate Planning': 92, 'Family Law': 92, 'Hiring': 92,
 'Real Estate': 93}

validation passed
```

`git diff --numstat` on the two data files reported `421 0` and `56 0` — pure additions, zero
deletions. No existing clause or document was modified or reordered.
