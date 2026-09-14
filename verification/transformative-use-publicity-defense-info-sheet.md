# Verification — Transformative Use: The First Amendment Defense to a California Right of Publicity Claim

Document id: `transformative_use_publicity_defense_info_sheet`
Category: Confidentiality & IP
Clause prefix: `tuse_`
Checked date: 2026-09-14
Clauses: 15 (12 authority, 3 drafting). Citations: 24.

## 1. Why this topic was treated as uncovered

Greps over `data/clauses.json` and `data/documents.json` (case-insensitive, counts are
matching-line counts from `grep -ioc`):

| term | clauses.json | documents.json |
|---|---|---|
| `Comedy III` | 0 | 0 |
| `Saderup` | 0 | 0 |
| `Gary Saderup` | 0 | 0 |
| `25 Cal.4th 387` | 0 | 0 |
| `Winter v. DC Comics` | 0 | 0 |
| `30 Cal.4th 881` | 0 | 0 |
| `Edgar Winter` / `Johnny Winter` / `Autumn Brothers` | 0 | 0 |
| `Zacchini` | 0 | 0 |
| `Scripps-Howard` | 0 | 0 |
| `433 U.S. 562` | 0 | 0 |
| `human cannonball` | 0 | 0 |
| `Guglielmi` | 0 | 0 |
| `Spelling-Goldberg` | 0 | 0 |
| `25 Cal.3d 860` | 0 | 0 |
| `Three Stooges` | 0 | 0 |
| `Bird, C. J.` | 0 | 0 |

Hits that were inspected and discounted:

* `transformative use` — 3 clause hits, 1 document hit. All resolve to one clause,
  `fairuse_transformative_use_is_judicial_not_statutory` ("'Transformative Use' Is a Judicial
  Gloss on Factor One, Not Statutory Text"), in the **copyright fair use** information sheet.
  That is the 17 U.S.C. § 107 factor-one doctrine, a different inquiry from the right of
  publicity defense covered here. The new sheet carries an explicit scope warning about the
  distinction in `tuse_comedy3_borrowing_copyright_factor_one`.
* `right of publicity` (17 / 5) and `3344` (71 / 3) — resolve to five existing documents:
  `right_of_publicity_info_sheet`, `model_publicity_release_info_sheet`,
  `college_athlete_nil_compensation_info_sheet`,
  `digital_replica_performer_contracts_info_sheet`, and
  `trademark_nominative_classic_fair_use_info_sheet`. Their clause lists were read in full.
  They cover the statutory elements, the knowing-use standard, statutory exceptions,
  remedies, the posthumous right, registration, digital replicas, and consent. **None** of
  them contains a First Amendment or transformative-use clause.
* `Eastwood v. Superior` — exactly 1 clause hit. Inspected: it is not a citation but a `gap`
  note in the existing publicity sheet recording that a CourtListener search for
  *Eastwood v. Superior Court* failed with HTTP 429 before any case could be verified, so no
  case citation was included. That is a recorded negative result, not coverage.
* `3344.1` (44 / 3) — the posthumous statute, covered on its own terms. Note that Comedy III
  construed the *predecessor*, former Civ. Code § 990; that renumbering is the subject of
  `tuse_comedy3_posture_former_section_990`.
* `mediation confidentiality` was an earlier candidate and was **abandoned**: 7 clause hits
  resolved to a dedicated existing sheet, `mediation_confidentiality_info_sheet`
  (Evid. Code §§ 1115–1129, 703.5).

## 2. Sources fetched

Quota-free HTTP paths only; the CourtListener MCP tools were not used.

| key | publisher | URL / package |
|---|---|---|
| `cl_comedy3` | CourtListener | https://www.courtlistener.com/opinion/2570714/comedy-iii-productions-inc-v-gary-saderup-inc/ |
| `cl_winter` | CourtListener | https://www.courtlistener.com/opinion/2595311/winter-v-dc-comics/ |
| `cl_gug` | CourtListener | https://www.courtlistener.com/opinion/1431474/guglielmi-v-spelling-goldberg-productions/ |
| `cl_zac` | CourtListener | https://www.courtlistener.com/opinion/109730/zacchini-v-scripps-howard-broadcasting-co/ (first attempt returned an empty 202; retried in-turn, second attempt 200) |
| `lii_zac` | Cornell Legal Information Institute | https://www.law.cornell.edu/supremecourt/text/433/562 |
| `gov_zac` | GPO govinfo, bound *United States Reports* | https://www.govinfo.gov/content/pkg/USREPORTS-433/pdf/USREPORTS-433-562.pdf |
| `gov_hart3` | GPO govinfo, *Hart v. Electronic Arts, Inc.*, 717 F.3d 141 (3d Cir. 2013), No. 11-3750 | USCOURTS-ca3-11-03750-0 |
| `gov_hartnj` | GPO govinfo, *Hart v. Electronic Arts, Inc.* (D.N.J.) | USCOURTS-njd-3_09-cv-05990-1 |
| `gov_keller9` | GPO govinfo, *In re NCAA Student-Athlete Name & Likeness Licensing Litig.* (9th Cir.) | USCOURTS-ca9-10-15387-0 |
| `gov_kellerdc` | GPO govinfo, *Keller v. Electronic Arts Inc.* (N.D. Cal.) | USCOURTS-cand-4_09-cv-01967-4 |
| `gov_davis` | GPO govinfo, *Davis v. Electronic Arts, Inc.* (N.D. Cal.) | USCOURTS-cand-3_10-cv-03328-6 |
| `gov_moore` | GPO govinfo, *Moore v. The Weinstein Company, LLC* (6th Cir.) | USCOURTS-ca6-12-05715-0 |
| `gov_hamilton` | GPO govinfo, *Hamilton v. Speight* (3d Cir., NOT PRECEDENTIAL) | USCOURTS-ca3-19-03495-0 |
| `gov_mps` | GPO govinfo, *MPS Entertainment, LLC v. Abercrombie & Fitch Stores, Inc.* (S.D. Fla.) | USCOURTS-flsd-1_11-cv-24110-0 |

Every PDF was extracted **twice, with two different extractors** — `pypdf` and
`pdfminer.six` — and the two extractions were compared. They differ in whitespace
throughout (documented per-quote below where it mattered); no quoted span differs in
wording between extractors except as disclosed under "Defects".

### Reachability of a second publisher for the California cases

This is the central limitation of this document and it is disclosed in every affected
`gap`. **No second free publisher of California case law was reachable from this
environment.** Tried and failed:

* Justia, FindLaw, Google Scholar, case.law / static.case.law, Casetext, Leagle,
  openjurist, anylaw, casemine, vLex, SCOCAL, the Internet Archive — blocked at the egress
  proxy (`connect_rejected`) or a hard connection failure.
* `https://www.courts.ca.gov/opinions/archive/S076061.PDF` — HTTP 404 (the California
  Courts slip-opinion archive does not reach back to 2001).
* `https://law.lexisnexis.com/californiaofficialreports`, `https://www.lexisnexis.com/clients/CACourts/`,
  `tile.loc.gov`, `babel.hathitrust.org`, `huggingface.co`, `plainsite.org`, `uniset.ca`,
  `opencasebook.org` — all unreachable.

Two CourtListener URL paths would have been **one** publisher, so that route was not taken.
Instead, independent corroboration for the California quotations was obtained from
**federal opinions published by GPO govinfo that reproduce the California Supreme Court's
words verbatim**. This is corroboration of the *words*, not a second publication of the
*opinion*, and each affected gap says so. Where even that was unavailable, the gap states
plainly that "fetched twice" means two fetches of a single publisher.

## 3. Per-citation record

Notation for the match level actually required: `exact` = byte-for-byte substring;
`ws` = whitespace collapsed; `+quotes` = apostrophe/quote glyphs folded;
`+dehyphen` = line-wrap hyphens removed; `nospace` = interior spaces disregarded.

### tuse_zacchini_federal_baseline

1. `is in protecting the proprietary interest of the individual in his act in part to encourage such entertainment`
   — 433 U.S. at 573.
   govinfo pypdf **exact**; govinfo pdfminer **exact**; Cornell LII **exact**; CourtListener **exact**;
   additionally exact in gov_hart3. Genuinely independent publishers: **three** (GPO, Cornell, CourtListener).
2. `Wherever the line ... without his consent.` — 433 U.S. at 574–575.
   govinfo pypdf **exact**; govinfo pdfminer **exact**; CourtListener **exact**;
   Cornell LII **nospace+quotes** (LII wraps the line inside the sentence and uses straight apostrophes).
   Normalization disclosed in the clause gap.
3. `The broadcast of a film of petitioner's entire act poses a substantial threat to the economic value of that performance.`
   — 433 U.S. at 575. govinfo pypdf/pdfminer **exact**; CourtListener **exact**; Cornell LII **ws+quotes**.

**Defect disclosed (not corrected):** in the govinfo bound-volume scan, the majority's own
statement of the holding is broken across the 574/575 page break by the running head
`ZACCHINI v. SCRIPPS-HOWARD BROADCASTING CO. 575 562 Opinion of the Court`, so the majority
opinion as that file extracts contains **no contiguous verbatim copy** of quote 2. The
contiguous copy quoted is the one in **Justice Powell's dissent**, which reproduces the
sentence in full and pin cites it `Ante, at 574-575`; the pin cite in the clause follows the
dissent's own citation. The same scan carries OCR damage elsewhere in the case —
`cert, denied`, `a, decidedly beneficial effect`, `Pow el l, J., dissenting`, `lastminute` —
none of it inside any quoted span. Disclosed in the clause gap.

### tuse_guglielmi_expressive_works

4. `the right of publicity has not been held to outweigh the value of free expression` — 25 Cal.3d at 872
   (conc. opn. of Bird, C. J.). CourtListener **exact**; gov_mps pypdf **exact**; gov_mps pdfminer **exact**.
   The independent confirmation is an out-of-state **federal district court** reproduction, disclosed as such.
   Note: CourtListener's Guglielmi carries footnote markers `17` and `18` inside the full sentence
   (`factual and biographical 17 or fictional, 18 the right of publicity...`), so the quoted span was
   trimmed to the portion that is contiguous in both sources.
5. `it is of no moment that the advertisements may have increased the profitability of the film` — 25 Cal.3d at 873.
   **CourtListener only.** govinfo full-text search for the phrase: **0 results**. Disclosed in the gap.
6. `commanded the support of the majority of the court` — Comedy III, fn. 7. **CourtListener only.**
   govinfo full-text search: **0 results**. **No page pin cite is given**, because CourtListener
   relocates the opinion's footnotes into a block after the disposition and the star marker inside that
   block (`*397`) marks the call-out point, not the footnote text. Disclosed in the gap and in the `cite` field.

### tuse_comedy3_posture_former_section_990

7. `After we granted review, the Legislature renumbered the statute as section 3344.1 of the Civil Code.`
   — Comedy III, fn. 1. **CourtListener only**; govinfo full-text search **0 results**.
   **No page pin cite**, same footnote-relocation reason. Disclosed in gap and `cite`.

**Defect disclosed (not corrected):** CourtListener's Comedy III text carries OCR damage —
`violation of section 990 arid related business torts` (for "and"), `Kennard, I.,` (for
"Kennard, J.,") in the concurrence line, and `subd. (n)(l)` with lowercase `l` for the
numeral 1. None of it is inside any quoted span. Disclosed in the gap.

### tuse_comedy3_economic_right_not_censorship

8. `not a right of censorship, but a right to prevent others from misappropriating the economic value generated by the celebrity's fame`
   — 25 Cal.4th at 403. CourtListener **exact**; also exact in CourtListener's Winter;
   gov_hart3 pdfminer **ws+quotes**; gov_hart3 pypdf **nospace+quotes**.
   Two normalizations disclosed: (a) the pypdf extraction of the Hart PDF inserts a space inside
   `econo mic`, which pdfminer.six does not — an **extractor** artifact, resolved by comparing the two
   extractors; (b) the font in that PDF maps the apostrophe to U+201F, so apostrophe glyphs were folded.

### tuse_comedy3_borrowing_copyright_factor_one

9. `This inquiry into whether a work is "transformative" appears to us to be necessarily at the heart of any judicial attempt to square the right of publicity with the First Amendment.`
   — 25 Cal.4th at 404. **CourtListener only**; govinfo full-text search **0 results**.
   The `cite` field says the pin cite is not confirmed against a second publisher. Disclosed in the gap.
10. `when a work contains significant transformative elements, ... protected by the right of publicity`
    — 25 Cal.4th at 405. CourtListener **exact**; gov_keller9 pypdf **exact**; gov_keller9 pdfminer **exact**;
    also exact in CourtListener's Winter. No normalization.

### tuse_comedy3_core_inquiry

11. `from which an original work is synthesized, or whether the depiction or imitation of the celebrity is the very sum and substance of the work in question`
    — 25 Cal.4th at 406. CourtListener **exact**; gov_hartnj pypdf/pdfminer **exact**;
    gov_kellerdc **exact**; gov_davis pypdf/pdfminer **exact**; gov_hart3 pdfminer **exact**.
    No normalization.
12. `whether a product containing a celebrity's likeness is so transformed that it has become primarily the defendant's own expression rather than the celebrity's likeness`
    — 25 Cal.4th at 406, as reproduced by the Sixth Circuit in *Moore v. The Weinstein Co.*
    CourtListener Comedy III **exact**; CourtListener Winter **exact**; gov_moore pypdf/pdfminer **exact**;
    gov_kellerdc **exact**; gov_davis pypdf/pdfminer **exact**. No normalization.
13. `whether the product containing a celebrity's likeness is so transformed`
    — *Hart v. Electronic Arts, Inc.* (3d Cir.), as published by govinfo. gov_hart3 pypdf/pdfminer **exact**.

**Defect disclosed (not corrected) — a published federal court of appeals opinion misquotes
the California Supreme Court by one word.** Comedy III reads **"whether *a* product
containing a celebrity's likeness is so transformed"**. The Third Circuit's published opinion
in *Hart v. Electronic Arts, Inc.*, 717 F.3d 141 (3d Cir. 2013), block quotes the same
sentence as **"whether *the* product ..."**. Both PDF extractors of the govinfo copy of *Hart*
carry `the`, so this is in the record and not an extraction artifact.

Confirmed by exact-phrase index queries against govinfo's United States Courts Opinions
collection:

* `"whether a product containing a celebrity"` → **4** documents:
  USCOURTS-ca6-12-05715 (*Moore*, 6th Cir.), USCOURTS-cand-3_10-cv-03328 (*Davis*, N.D. Cal.),
  USCOURTS-cand-5_12-cv-02570 (*Estate of Buckminster Fuller*, N.D. Cal.),
  USCOURTS-cand-4_09-cv-01967 (*Keller*, N.D. Cal.).
* `"whether the product containing a celebrity"` → **3** documents:
  USCOURTS-ca3-11-03750 (*Hart*, 3d Cir.), USCOURTS-paed-2_17-cv-00169 (*Hamilton v. Speight*, E.D. Pa.),
  USCOURTS-paed-2_24-cv-04884 (*MLB Players Inc. v. DraftKings, Inc.*, E.D. Pa.).

The reading matching the California Supreme Court's own text is `a`; the variant appears to
have propagated from *Hart* to two later Eastern District of Pennsylvania decisions within
the Third Circuit. **The clause quotes the correct reading and also quotes the variant,
attributed to *Hart*, rather than silently correcting it.** The *Hart* citation gives **no
reporter pin cite** (the govinfo file is the slip opinion; the reporter page for the block
quote was not read off star pagination).

### tuse_comedy3_quality_and_quantity

14. `a literal depiction of a celebrity, even if accomplished with great skill, may still be subject to a right of publicity challenge`
    — 25 Cal.4th at 407. CourtListener Comedy III **ws+quotes+dehyphen**; CourtListener Winter **exact**.
    **CourtListener only** (govinfo full-text search for the sentence: **0 results**), across two
    different opinions from that one publisher.

**Defect disclosed (not corrected):** CourtListener's Comedy III text prints
`even if -accomplished with great skill` — a stray hyphen — and elsewhere prints
`significant trans-formative elements`. Both are line-wrap hyphenation artifacts that survived
into the running text. CourtListener's Winter, quoting the same Comedy III sentence, prints
`even if accomplished with great skill` with no hyphen. The quotation removes those hyphens;
that is the only normalization, and the unhyphenated reading is the one confirmed in Winter.
Disclosed in the gap.

15. `The inquiry is in a sense more quantitative than qualitative, asking whether the literal and imitative or the creative elements predominate in the work.`
    — 25 Cal.4th at 407. CourtListener **exact**; gov_hart3 pypdf/pdfminer **exact**;
    CourtListener Winter **exact**. No normalization.

Recorded negative: Comedy III's first caution ("courts are not to be concerned with the
quality of the artistic contribution") is **described but not quoted**, because a govinfo
full-text search for it returned **0 results** and CourtListener was the only source.

### tuse_comedy3_subsidiary_inquiry

16. `does the marketability and economic value of the challenged work derive primarily from the fame of the celebrity depicted?`
    — 25 Cal.4th at 407. CourtListener **exact**; gov_hart3 pypdf/pdfminer **exact** (Hart reproduces it
    in a footnote, pin citing Comedy III, 21 P.3d at 810). No normalization.

### tuse_comedy3_affirmative_defense

17. `protected by the First Amendment inasmuch as it contains significant transformative elements or that the value of the work does not derive primarily from the celebrity's fame`
    — 25 Cal.4th at 407. CourtListener Comedy III **ws+quotes+dehyphen** (the `trans-formative`
    line-wrap hyphen again); gov_davis pypdf/pdfminer **exact**; CourtListener Winter **exact**.

**Textual point recorded rather than smoothed over:** the Comedy III sentence as CourtListener
prints it reads `he or she may raise as affirmative defense`, without the article "an".
CourtListener's Winter quotes the same sentence with a bracketed insertion,
`may raise as [an] affirmative defense` — the conventional signal that a later court is
supplying a word the original omits. This is independent evidence that the CourtListener
Comedy III text is **accurate** at that point, not damaged. The quotation begins after that
point, so it takes no position on the article; the clause body supplies "an" in its own prose,
outside the quotation.

### tuse_comedy3_three_stooges_result

18. `discern no significant transformative or creative contribution` — 25 Cal.4th at 409.
    CourtListener **exact**; gov_hart3 pypdf/pdfminer **exact**; gov_keller9 pypdf/pdfminer **exact**;
    CourtListener Winter **exact**. (Quoted without the leading "we can" because *Hart*'s
    reproduction begins at "discern".)
19. `the marketability and economic value of Saderup's work derives primarily from the fame of the celebrities depicted`
    — 25 Cal.4th at 409. **CourtListener only**; govinfo full-text search for
    `"the marketability and economic value of Saderup"` → **0 results**. Disclosed in the gap.

### tuse_winter_application

20. `not just conventional depictions of plaintiffs but contain significant expressive content other than plaintiffs' mere likenesses`
    — 30 Cal.4th at 890. CourtListener **exact**; gov_hart3 pypdf/pdfminer **exact**;
    gov_hartnj pypdf/pdfminer **exact**; gov_keller9 pypdf/pdfminer **exact**. No normalization.
21. `plaintiffs are merely part of the raw materials ... lampoon, parody, or caricature.`
    — 30 Cal.4th at 890. CourtListener **exact**; gov_hart3 pypdf/pdfminer **exact**. No normalization.
    (*Keller* does **not** reproduce this two-sentence span contiguously; only *Hart* does.)

Pin cites for both were read off CourtListener's star pagination — the passage falls between
the `*890` and `*891` markers — not from memory, and not from the federal reproductions,
which cite the Pacific Reporter.

### tuse_winter_form_marketing_and_matter_of_law

22. `What matters is whether the work is transformative, not whether it is parody or satire or caricature or serious social commentary or any other specific form of expression.`
    — 30 Cal.4th at 891. CourtListener **exact**; gov_hamilton pypdf/pdfminer **exact**.
    *Hamilton v. Speight* is marked **NOT PRECEDENTIAL** on its face; it is used only as an
    independent publisher's reproduction of the words, and the gap says so.
23. `whether the work is transformative, not how it is marketed` — 30 Cal.4th at 891.
    CourtListener **exact**; gov_hart3 pypdf/pdfminer **exact**. Quoted beginning at "whether"
    because *Hart*'s reproduction begins mid-sentence; disclosed in the gap.
24. `courts can often resolve the question as a matter of law simply by viewing the work in question`
    — 30 Cal.4th at 891. **CourtListener only**; govinfo full-text search **0 results**. Disclosed in the gap.

## 4. Negative results recorded in the document

* A CourtListener search restricted to the California Supreme Court for
  `"Comedy III Productions"` returned **5** opinions: Comedy III (2001), Winter (2003),
  *DVD Copy Control Ass'n, Inc. v. Bunner* (2003), *Lyle v. Warner Brothers Television
  Productions* (2006), and *Serova v. Sony Music Entertainment* (2022). **Only Comedy III and
  Winter were retrieved and read for this sheet**; what the other three say about Comedy III
  was not examined. Recorded in `tuse_winter_form_marketing_and_matter_of_law`'s gap, with the
  note that a search is not a citator.
* Comedy III construed **former Civ. Code § 990**, renumbered § 3344.1 while review was
  pending and amended in several respects at the same time. The sheet records that it
  carries forward no holding about the current text, and that **Comedy III did not decide**
  whether the same analysis governs a § 3344 claim by a living person; no case deciding that
  was retrieved.
* No decision applying *Andy Warhol Foundation for the Visual Arts, Inc. v. Goldsmith* (2023)
  to a California right of publicity claim was retrieved or read; the sheet says nothing about
  how the copyright and publicity lines of authority interact.
* Comedy III's "quality of the artistic contribution" caution is described but not quoted
  (single-publisher only).
* Guglielmi's operative language is from a **concurring** opinion; the sheet relies on
  Comedy III's own footnote for the proposition that it commanded majority support, and says so.

## 5. Validation run

Script asserts: both files parse; clause ids unique; document ids unique; document titles
unique; every `clauseOrder` id resolves; every authority clause has a non-empty `gap` and at
least one citation; no orphan clauses; no undeclared `{{field}}` placeholders in any body or
gap; canonical key order for clauses (`id,title,kind,status,checkedDate,body,gap,citations`
and `id,title,kind,body`), for citations (`case,cite,url,quote`), and for documents
(`id,title,description,categories,clauseOrder,fields`).

Result after merge:

```
clauses: 6328 documents: 721
tuse_ clauses: 15 authority: 12 drafting: 3
tuse_ citations: 24
VALIDATION PASS
```

Quote re-read: all 24 `citations[].quote` values were read back **out of the written
`data/clauses.json`** and re-tested against the fetched source files.
**24 pass, 0 fail.** Match levels per quote are in section 3 above.
