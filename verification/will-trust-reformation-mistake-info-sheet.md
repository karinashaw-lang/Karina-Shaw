# Estate Planning, new document: Reformation of an Unambiguous Will or Trust for Mistake — Information Sheet

## Why this document (coverage check at HEAD)

Candidate topics were grepped against `data/documents.json` and
`data/clauses.json` at HEAD (`grep -oF <term> data/documents.json data/clauses.json | wc -l`):

| term | hits at HEAD | note |
| --- | --- | --- |
| `Estate of Duke` | 0 | the 19 hits for the bare string `Duke` are all *In re Marriage of Duke*, a family-law case in `deferred_sale_of_home_order_info_sheet` |
| `61 Cal.4th 871` | 0 | |
| `Estate of Barnes` | 0 | |
| `Eimers` | 0 | |
| `Packard` | 0 | |
| `Ike v. Dolittle` / `Ike v. Doolittle` | 0 | |
| `Giammarrusco` | 0 | |
| `Bilafer` | 0 | |
| `latent ambiguity` / `patent ambiguity` | 0 / 0 | |
| `clear and convincing evidence of mistake` | 0 | |
| `reformation` | 18 | all in unrelated documents: `rule_against_perpetuities_info_sheet` (statutory reformation of a perpetuities violation) and `spousal_fiduciary_duty_breach_remedies_info_sheet` |
| `6111.5` | 9 | in `separate_writing_tangible_personal_property_info_sheet` and two will-execution clauses, cited only for whether a document is a will |
| `Estate of Russell` | 1 | a single mention in `drr_extrinsic_evidence` (dependent relative revocation), which expressly discloses that Russell was not fetched |
| `Stoker` | 13 | `will_witnesses_attestation_info_sheet`, on § 6110(c)(2) harmless error — a different doctrine, and this sheet quotes no § 6110 text |
| `21102` | 0 documents | |

Alternate candidates checked and rejected as already covered or
nearly so: Prob. Code § 15401 trust revocation (22 clause-level hits;
`trust_revocation_default`, `trustamend_revocation_procedure`,
`trustamend_exclusive_method` already cover both statutory routes and
the exclusive-method rule — though *Haggerty v. Thornton*, *Cundall*
and *King v. Lynch* are all at 0), § 16061.7 trustee notification (48),
§ 21380 care-custodian presumption (49), § 21700 contracts to make a
will (39). Reformation for mistake — the *Estate of Duke* line — was
the first candidate with essentially no coverage, and it is a
California Supreme Court doctrine with two later published Court of
Appeal decisions construing it.

## What this document covers

`will_trust_reformation_mistake_info_sheet` — 14 clauses (11 authority,
3 drafting), 50 citation instances drawn from 49 distinct verified
quotes (one Duke passage is cited in two clauses):

- `willreform_declaration` (drafting) — purpose and scope.
- `willreform_prior_rule` — Prob. Code § 6111.5 and the pre-2015 line:
  extrinsic evidence for ambiguity, not for mistake; the *Barnes*
  sentence "a court may not write a will which the testator did not
  write," quoted as *Duke* reproduces it.
- `willreform_holding` — the holding at p. 875 and its restatement at
  p. 898, plus the court's statement of its own authority to develop
  the rule.
- `willreform_elements` — footnote 2's definition of "actual specific
  intent"; the two features that made the claim a reformation claim.
- `willreform_reserved_question` — the general/putative-intent question
  the court expressly reserved.
- `willreform_burden` — the clear and convincing burden and the four
  reasons given for it, including the § 6110 analogy.
- `willreform_construction_contrast` — Prob. Code §§ 21102(a)-(c),
  21120, and *Duke*'s holding that the rules of construction do not
  apply where extrinsic evidence supplies the missing terms.
- `willreform_purposes` — intent, formalities, unjust enrichment,
  parity between wills and trusts.
- `willreform_who_decides` — Prob. Code § 825; no jury right.
- `willreform_restatement_upc` — Rest.3d Property § 12.1 and UPC
  § 2-805 as *Duke* reproduces them, and the limit the court placed on
  that comparison.
- `willreform_eimers_specific_reference` — Prob. Code §§ 632 and
  631(b); *Estate of Eimers* holding reformation cannot supply a
  statutorily required specific reference.
- `willreform_trusts` — *Packard v. Packard* extending the reasoning to
  trusts.
- `willreform_not_a_contest` — *Packard* holding a reformation petition
  is not a trust contest subject to the 120-day period.
- `willreform_signature_block` (drafting).

## Genuine defects found and disclosed rather than corrected

1. **The Supreme Court misspells a case name.** *Duke* cites the
   trust-reformation case at 61 Cal.App.4th 51 as **"Ike v.
   Dolittle"** — one "o". The correct name is *Ike v. Doolittle*:
   CourtListener's citation lookup for `Cal.App.4th/61/51` resolves to
   `/opinion/2258151/ike-v-doolittle/`, and *Packard*, quoting the same
   passage of *Duke*, prints "Ike v. Doolittle". The misspelling
   appears **identically in both independent fetches of *Duke*** (the
   courts.ca.gov slip PDF and the CourtListener official-reports text),
   so it is in the opinion, not a scanning defect in one mirror. Both
   spellings are quoted as each opinion prints them, side by side, in
   `willreform_trusts`, and the gap explains the discrepancy.
2. **A 2025 Court of Appeal parenthetical misdescribes the case it
   cites.** *Packard* describes *Duke* at p. 897 as "concluding that
   ambiguous will could be reformed…" — but the will in *Duke* was
   **unambiguous**, which is the premise of the holding and of
   *Packard*'s own surrounding discussion. Verified identical in both
   fetches of *Packard*. Quoted as printed in `willreform_not_a_contest`
   with the mismatch disclosed.
3. **A sentence that cannot be quoted verbatim from both sources.**
   *Duke* footnote 13 reads "there generally is no right to a jury
   trial in a will contest," but in the slip PDF the footnote marker
   sits inside the line, so the text layer extracts "…no right to a
   jury **13** trial in a will contest." The sentence is therefore not
   a verbatim substring of both fetches, and it is **not quoted**:
   `willreform_who_decides` reports it in the court's sense and quotes
   Prob. Code § 825 (which was checked and does say what the footnote
   cites it for) instead. Disclosed in the gap.
4. **Two differently worded statements of the same holding.** P. 875
   says "a mistake in the expression of the testator's intent"; p. 898
   says "a mistake in the testator's expression of intent." Both are
   quoted in full rather than merged into one; noted in the gap.
5. **The statute *Duke* quotes is no longer the statute in force.**
   *Duke* quotes Prob. Code § 21102(b) as "The rules of construction
   **expressed** in this part apply…" (the 1994 text, which the opinion
   labels as such). The current text, fetched twice from leginfo, drops
   "expressed". Both are noted so they are not confused.
6. **Footnote pin cites withheld.** CourtListener's rendering collects
   every *Duke* footnote into a block after the body of the opinion, so
   star pagination adjacent to a footnote reflects where the block
   sits, not the page the footnote appeared on. No official-reports
   page is asserted for footnotes 2, 13, 14 or 16. Footnote 2 also
   cross-refers to "p. 34, post" — a slip-opinion page with no
   counterpart in the official reports.
7. **The Restatement quote is broken by a footnote continuation.**
   Rest.3d Property § 12.1, as reproduced in *Duke* footnote 14, is
   interrupted mid-sentence by "(footnote continued on next page)" in
   the slip opinion. Rather than splice the halves, the two verified
   fragments are cited separately and the break is disclosed.
8. **No official Cal.App.5th citation exists in any reachable
   source** for *Estate of Eimers* or *Packard v. Packard*:
   CourtListener records no citation for either cluster, its search
   index contains no later opinion citing either by a Cal.App.5th
   citation, and the commercial reporters are unreachable from here.
   Both are cited by court, filing date and docket number rather than
   by a volume and page that could not be checked.
9. **A filing-date discrepancy.** The *Eimers* slip opinion is stamped
   "Filed 5/15/20"; CourtListener records 2020-05-18. The slip date is
   used and the discrepancy is noted rather than resolved.
10. **OCR noise in the CourtListener *Duke* text**, which carries the
    banner "The text of this document was obtained by analyzing a
    scanned document and may have typos" — e.g. `{Id., § 6111, subd.
    (a).)` with a brace for a parenthesis. No quoted passage contains
    any such defect; every quote was checked against the courts.ca.gov
    slip PDF as well.

## Normalizations applied before substring comparison (all disclosed in clause gaps)

- Non-breaking spaces → spaces; whitespace collapsed.
- Typographic quotes unified. **The 2015 slip PDF encodes both single
  quotation marks as U+201F and U+201E**, so an apostrophe extracts as
  a reversed comma; this is a font-encoding artifact of that PDF and is
  stated in every *Duke* clause gap. The rendering stored in each
  *Duke* quote is CourtListener's (ordinary U+2019).
- Line-wrap hyphenation rejoined.
- CourtListener star pagination markers (`*892`) removed — two quoted
  sentences span page breaks (pp. 891-892 and pp. 897-898) and are
  cited with page spans.
- Slip-opinion page numbers printed between pages removed; where a
  quote would have spanned such a break it was shortened instead
  (*Eimers* rule statement, *Packard* "not a contest" sentence).

## Per-citation verification record

Every quote was fetched twice by independent paths and confirmed a
verbatim substring of both. Phrase-level confirmation on CourtListener
opinion text was done by direct substring match against the fetched
document rather than by the search feed.

### `willreform_prior_rule`

1. **Cal. Prob. Code § 6111.5 (California Legislative Information text)** — extrinsic evidence about whether a document is a will and about unclear meaning
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Extrinsic evidence is admissible to determine whether a document constitutes a will pursuant to Section 6110 or 6111, or to determine the meaning of a will or a portion of a will if the meaning is unclear.`
2. **Estate of Duke (2015) 61 Cal.4th 871, 879 (CourtListener text of the official reports)** — the ambiguity side of the line
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `California law allows the admission of extrinsic evidence to establish that a will is ambiguous and to clarify ambiguities in a will.`
3. **Estate of Duke (2015) 61 Cal.4th 871, 879 (CourtListener text of the official reports)** — the mistake side of the line, as it stood before the decision
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `California law does not currently authorize the admission of extrinsic evidence to correct a mistake in a will when the will is unambiguous.`
4. **Estate of Duke (2015) 61 Cal.4th 871, 878 (CourtListener text of the official reports), quoting Estate of Barnes (1965) 63 Cal.2d 580, 583** — the limit as Barnes stated it
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `However, a court may not write a will which the testator did not write.`

### `willreform_holding`

5. **Estate of Duke (2015) 61 Cal.4th 871, 875 (CourtListener text of the official reports)** — the holding as first stated
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `an unambiguous will may be reformed if clear and convincing evidence establishes that the will contains a mistake in the expression of the testator’s intent at the time the will was drafted and also establishes the testator’s actual specific intent at the time the will was drafted`
6. **Estate of Duke (2015) 61 Cal.4th 871, 898 (CourtListener text of the official reports)** — the holding as restated in the conclusion
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `We hold that an unambiguous will may be reformed to conform to the testator’s intent if clear and convincing evidence establishes that the will contains a mistake in the testator’s expression of intent at the time the will was drafted, and also establishes the testator’s actual specific intent at the time the will was drafted.`
7. **Estate of Duke (2015) 61 Cal.4th 871, 886 (CourtListener text of the official reports)** — the court’s statement of its own authority to develop the rule
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `we may continue to develop the law concerning the admissibility of evidence to assist in the determination of the testator’s intent when the language of the document is clear on its face`

### `willreform_elements`

8. **Estate of Duke (2015) 61 Cal.4th 871 (CourtListener text of the official reports), fn. 2** — the definition of actual specific intent
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `a testator’s actual specific intent is the particular disposition of assets the testator intended to set forth in the will`
9. **Estate of Duke (2015) 61 Cal.4th 871, 897 (CourtListener text of the official reports)** — the mistake must relate to intent when the will was written
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `If Irving’s only intent at the time he wrote his will was to address the disposition of his estate in the circumstances in which he died before Beatrice or they died simultaneously, his will accurately reflects his intent.`
10. **Estate of Duke (2015) 61 Cal.4th 871, 897 (CourtListener text of the official reports)** — the specificity the court required of the claim
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `the alleged mistake and intent are sufficiently specific`

### `willreform_reserved_question`

11. **Estate of Duke (2015) 61 Cal.4th 871, 897-898 (CourtListener text of the official reports)** — the issue decided and the question reserved
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `The case before us presents only the issue of whether a will may be reformed when extrinsic evidence establishes that the will fails to set forth the actual specific intent of the testator at the time the will was executed, and we express no opinion on the availability of reformation in cases involving claims of general and putative intent.`

### `willreform_burden`

12. **Estate of Duke (2015) 61 Cal.4th 871, 892 (CourtListener text of the official reports)** — evidence of this kind already reaches probate courts
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Claimants have long been entitled, however, to present extrinsic evidence to establish that a will is ambiguous despite the fact that it appears to be unambiguous.`
13. **Estate of Duke (2015) 61 Cal.4th 871, 892 (CourtListener text of the official reports)** — the filtering function of the heightened standard
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `the heightened evidentiary standard will help the probate court to filter out weak claims`
14. **Estate of Duke (2015) 61 Cal.4th 871, 893 (CourtListener text of the official reports)** — the judgment the court read into section 6110
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Although section 6110 does not reduce the formalities of attestation, it reflects a judgment that the formalities should not be allowed to defeat the testator’s intent when clear and convincing evidence satisfies the evidentiary concerns underlying the formalities of the statute of wills.`
15. **Estate of Duke (2015) 61 Cal.4th 871, 894 (CourtListener text of the official reports)** — the effect on estate planning
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Rather than introducing uncertainty into estate planning, allowing reformation of a will upon a clear and convincing showing of a mistake in expression and the testator’s actual and specific intent helps ensure that the testator’s affairs are settled as intended.`
16. **Estate of Duke (2015) 61 Cal.4th 871, 894 (CourtListener text of the official reports), quoting Langbein & Waggoner (1982) 130 U.Pa. L.Rev. 521, 587** — reformation as a rule of litigation, not of drafting
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Precisely because the reformation doctrine is a rule of litigation, no draftsman would plan to rely on it when proper drafting can spare the expense and hazard of litigation.`

### `willreform_construction_contrast`

17. **Cal. Prob. Code § 21102(a) (California Legislative Information text)** — the intention of the transferor controls
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `The intention of the transferor as expressed in the instrument controls the legal effect of the dispositions made in the instrument.`
18. **Cal. Prob. Code § 21102(b) (California Legislative Information text)** — when the rules of construction apply
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `The rules of construction in this part apply where the intention of the transferor is not indicated by the instrument.`
19. **Cal. Prob. Code § 21102(c) (California Legislative Information text)** — the section does not limit extrinsic evidence
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Nothing in this section limits the use of extrinsic evidence, to the extent otherwise authorized by law, to determine the intention of the transferor.`
20. **Cal. Prob. Code § 21120 (California Legislative Information text)** — the preference against intestacy
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Preference is to be given to an interpretation of an instrument that will prevent intestacy or failure of a transfer, rather than one that will result in an intestacy or failure of a transfer.`
21. **Estate of Duke (2015) 61 Cal.4th 871, 898 (CourtListener text of the official reports)** — rules of construction do not apply to reformation
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `when reformation rather than construction of a will is at issue, the rules of construction, which set forth principles for determining disposition of estate assets where the testator’s intention is not reflected in the will (Prob. Code, § 21102), do not apply where extrinsic evidence supplies the missing terms`
22. **Estate of Duke (2015) 61 Cal.4th 871, 898 (CourtListener text of the official reports)** — a disinheritance clause may still show intent
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `although a disinheritance clause cannot prevent heirs from inheriting pursuant to the statutory rules of intestacy (Estate of Barnes, supra, at pp. 582-583), any intent reflected in such a clause may be relevant when reformation is sought`

### `willreform_purposes`

23. **Estate of Duke (2015) 61 Cal.4th 871, 892 (CourtListener text of the official reports)** — the purpose of the remedy
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `The purpose of reformation is to carry out the wishes of the testator, and the remedy reflects no judgment other than a preference for disposition pursuant to the wishes of the testator.`
24. **Estate of Duke (2015) 61 Cal.4th 871, 891-892 (CourtListener text of the official reports)** — formalities and the purpose of the statute of wills
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `We should not allow stringent adherence to formalities to obscure the ultimate purpose of the statute of wills, which is to transfer an estate in accordance with the testator’s intent.`
25. **Estate of Duke (2015) 61 Cal.4th 871, 893 (CourtListener text of the official reports)** — unjust enrichment
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `If, however, a testator did not intend to devise property to a particular party, that party’s receipt of the property as a result of a mistake constitutes unjust enrichment.`
26. **Estate of Duke (2015) 61 Cal.4th 871, 895 (CourtListener text of the official reports)** — parity among instruments
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `allowing reformation of trusts and other instruments, but never of wills, appears to favor those with the means to establish estate plans that avoid probate proceedings`
27. **Estate of Duke (2015) 61 Cal.4th 871, 895 (CourtListener text of the official reports)** — wills written without counsel
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Denying reformation in these circumstances seems particularly harsh with respect to individuals who write wills without the assistance of counsel, and are more likely to overlook flaws in the expression of their intent.`

### `willreform_who_decides`

28. **Cal. Prob. Code § 825 (California Legislative Information text)** — no right to a jury trial in proceedings under the Probate Code
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Except as otherwise expressly provided in this code, there is no right to a jury trial in proceedings under this code.`
29. **Estate of Duke (2015) 61 Cal.4th 871, 892 (CourtListener text of the official reports)** — the evidence probate courts already receive
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Claimants have long been entitled, however, to present extrinsic evidence to establish that a will is ambiguous despite the fact that it appears to be unambiguous.`

### `willreform_restatement_upc`

30. **Estate of Duke (2015) 61 Cal.4th 871, 895 (CourtListener text of the official reports)** — the Restatement and the uniform act support the remedy
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `However, both the Restatement Third of Property and the Uniform Probate Code now support the remedy.`
31. **Estate of Duke (2015) 61 Cal.4th 871 (CourtListener text of the official reports), fn. 14, quoting Rest.3d Property, § 12.1, p. 353 (first part)** — the Restatement standard
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `A donative document, though unambiguous, may be reformed to conform the text to the donor’s intention if it is established by clear and convincing evidence`
32. **Estate of Duke (2015) 61 Cal.4th 871 (CourtListener text of the official reports), fn. 14, quoting Rest.3d Property, § 12.1, p. 353 (continuation after the footnote break)** — the two Restatement elements
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `mistake of fact or law, whether in expression or inducement, affected specific terms of the document; and (2) what the donor’s intention was.`
33. **Estate of Duke (2015) 61 Cal.4th 871 (CourtListener text of the official reports), fn. 14, quoting U. Prob. Code (2008) § 2-805** — the uniform act provision
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `The court may reform the terms of a governing instrument, even if unambiguous, to conform the terms to the transferor’s intention if it is proved by clear and convincing evidence what the transferor’s intention was and that the terms of the governing instrument were affected by a mistake of fact or law, whether in expression or inducement.`
34. **Estate of Duke (2015) 61 Cal.4th 871 (CourtListener text of the official reports), fn. 16** — the limit the court placed on the comparison
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `We have no occasion to consider the extent to which the reformation remedies authorized in other jurisdictions or proposed by the Restatement Third of Property and the Uniform Probate Code are similar to the reformation remedy that we authorize in this case.`

### `willreform_eimers_specific_reference`

35. **Cal. Prob. Code § 632 (California Legislative Information text)** — the specific reference requirement
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `If the creating instrument expressly directs that a power of appointment be exercised by an instrument that makes a specific reference to the power or to the instrument that created the power, the power can be exercised only by an instrument containing the required reference.`
36. **Cal. Prob. Code § 631(b) (California Legislative Information text)** — no judicial excuse of that requirement
   - fetch A: leginfo codes_displaySection.xhtml (single section, Chrome UA)
   - fetch B: leginfo codes_displayText.xhtml (whole chapter/article, Safari UA)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `This section does not permit a court to excuse compliance with a specific reference requirement under Section 632.`
37. **Estate of Eimers (Cal. Ct. App., May 15, 2020, No. B295609) (certified for publication; slip opinion posted by the California Courts)** — the reformation rule as the Court of Appeal restated it
   - fetch A: courts.ca.gov/opinions/archive/B295609.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/4754748/estate-of-eimers/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `A will may be reformed to conform to the testator’s intent if clear and convincing evidence establishes that the will contains a mistake in the testator’s expression of intent at the time the will was drafted`
38. **Estate of Eimers (Cal. Ct. App., May 15, 2020, No. B295609) (certified for publication; slip opinion posted by the California Courts)** — the holding on the reformation argument
   - fetch A: courts.ca.gov/opinions/archive/B295609.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/4754748/estate-of-eimers/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `We conclude Duke is not relevant to the question before us.`
39. **Estate of Eimers (Cal. Ct. App., May 15, 2020, No. B295609) (certified for publication; slip opinion posted by the California Courts)** — how the court framed the question
   - fetch A: courts.ca.gov/opinions/archive/B295609.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/4754748/estate-of-eimers/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `The issue, aptly framed by respondent, is whether a trial court may amend or reform a will to excuse the testator’s failure to comply with sections 631, subdivision (b) and 632, which expressly prohibit the court from validating gifts that require a specific reference to the power of appointment.`
40. **Estate of Eimers (Cal. Ct. App., May 15, 2020, No. B295609) (certified for publication; slip opinion posted by the California Courts)** — why extrinsic evidence could not supply the reference
   - fetch A: courts.ca.gov/opinions/archive/B295609.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/4754748/estate-of-eimers/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Creating a reference based on extrinsic evidence is nothing more than nullification of the statutory requirement of an express reference.`
41. **Estate of Eimers (Cal. Ct. App., May 15, 2020, No. B295609) (certified for publication; slip opinion posted by the California Courts)** — the limit stated
   - fetch A: courts.ca.gov/opinions/archive/B295609.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/4754748/estate-of-eimers/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Where, as here, discerning decedent’s donative intent is not the issue, Duke does not apply. And it should go without saying that a donor’s intent alone cannot trump the requirements of the law.`

### `willreform_trusts`

42. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts)** — the reasoning extends to trusts
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Although Estate of Duke involved a will, its logic applies equally to the reformation of a trust.`
43. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts)** — the two elements as applied to a trust
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Reformation of a trust is therefore permitted even where the language appears facially unambiguous, so long as clear and convincing evidence establishes: (1) that the trust contains a mistake in the donor’s expression of intent at the time it was drafted; and (2) the donor’s actual specific intent at the time the trust was drafted.`
44. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts)** — who may petition
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Thus, a beneficiary may petition the probate court to reform a trust that, due to a mistake, does not accurately reflect the trustor’s intent.`
45. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts), quoting Estate of Duke (2015) 61 Cal.4th 871, 887** — the case name as the 2025 opinion spells it
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Ike v. Doolittle (1998) 61 Cal.App.4th 51`
46. **Estate of Duke (2015) 61 Cal.4th 871, 887 (CourtListener text of the official reports)** — the case name as the 2015 opinion spells it
   - fetch A: courts.ca.gov/opinions/archive/S199435.PDF (slip opinion PDF, text layer extracted locally)
   - fetch B: courtlistener.com/opinion/2820501/radin-v-jewish-national-fund/ (official-reports text, browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `Ike v. Dolittle (1998) 61 Cal.App.4th 51`

### `willreform_not_a_contest`

47. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts)** — the merits do not determine the character of the petition
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `It cannot be the case that the answer to whether a petition is deemed a contest to the trust or a request to reform the trust depends on how persuasive the extrinsic evidence is of the trustor’s intent`
48. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts)** — a weak petition is still a petition to reform
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `a meritless reformation petition is still a reformation petition.`
49. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts)** — the disposition, and what was left undecided
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `We express no opinion on the merits of Scott’s petition, only that he must be given the opportunity to prove by clear and convincing evidence that Newton’s intent was to have each son receive an equal distribution of the trust assets.`
50. **Packard v. Packard (Cal. Ct. App., Feb. 24, 2025, No. D082480) (certified for publication; slip opinion posted by the California Courts), describing Estate of Duke (2015) 61 Cal.4th 871, 897** — the parenthetical describing the 2015 case
   - fetch A: courts.ca.gov/opinions/archive/D082480.PDF (slip opinion PDF)
   - fetch B: courtlistener.com/opinion/10338302/packard-v-packard/ (browser UA + Referer)
   - comparison: quote is a verbatim substring of **both** after the disclosed normalizations — fetch A PASS, fetch B PASS
   - quote: `concluding that ambiguous will could be reformed and extrinsic evidence was admissible to demonstrate that the donor’s “intent was inartfully expressed”`

## Honest gaps (stated in the clauses themselves)

The sheet does not say whether any instrument contains a mistake or
what evidence would prove one; does not resolve the reserved
general/putative-intent question (no published decision locating a
claim on that side of the line was found in the CourtListener search
index); does not address appellate review of a clear-and-convincing
finding (no case applying *Conservatorship of O.B.* (2020) 9 Cal.5th
989 to a reformation finding was found, and O.B. is not cited); does
not quote Prob. Code §§ 16061.7, 16061.8, 6110(c)(2), 630, or the
no-contest statutes; and does not independently fetch *Barnes*,
*Russell*, *Dominici*, *Page*, *Ike v. Doolittle*, *Friedman*,
*Kazian*, the Langbein & Waggoner article, the Restatement, the
Uniform Probate Code, the Washington statute, or *Erickson v.
Erickson* — each of which is quoted or described only as a California
opinion reproduces it, with that stated in the gap.

## Post-merge corpus validation

Script asserted: both files parse; clause ids unique; doc ids unique;
every `clauseOrder` id resolves; every authority clause has a non-empty
gap and ≥1 citation; no orphan clauses; every `{{field}}` used in a
clause body or gap is declared in the document's `fields`; document
titles unique corpus-wide; canonical key order.

- clauses 6,134 → **6,148** (+14); documents 708 → **709** (+1).
- 0 duplicate clause ids, 0 duplicate doc ids, 0 unresolved
  `clauseOrder` ids, 0 orphan clauses, 0 undeclared placeholders,
  0 duplicate document titles.
- Key order: the new document and all 14 new clauses are canonical.
  103 pre-existing legacy documents carry `categories` last instead of
  fourth; that count is **identical at HEAD (103 of 708)** and is
  untouched by this change.
- Every quote re-read out of the written `data/clauses.json` and
  re-checked against both fetched sources: **PASS 50, FAIL 0**.
