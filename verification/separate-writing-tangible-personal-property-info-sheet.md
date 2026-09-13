# Estate Planning, new document: Separate Writing Disposing of Tangible Personal Property (Prob. Code §§ 6130-6132; Simon v. Grayson; Estate of Smith) — Information Sheet

## Why this document

Wave 165 (Estate Planning slot; the Hiring, During employment, and
Family Law slots of the wave are separate, parallel tasks). Before
drafting, `data/documents.json` was read in full and all 85 existing
Estate Planning titles were listed and checked. Several of the task
prompt's suggested topics turned out to be already covered by existing
documents: the California statutory will
(`california_statutory_will_info_sheet`), the revocable
transfer-on-death deed (`transfer_on_death_deed`), the small-estate
affidavit (`small_estate_affidavit`), the spousal property petition
(`spousal_property_petition_info_sheet`), trustee removal
(`trustee_removal_grounds_info_sheet`), and the prudent investor rule
(`uniform_prudent_investor_act_info_sheet`).

A grep of both data files was run for `6130`, `6131`, `6132`, `6110`,
`6111`, `6111.5`, `21110`, `16461`, `16003`, `6112`, `859`, `15800`,
"incorporation by reference", "separate writing", "tangible personal
property", "interested witness", "exculpat", "Simon v. Grayson", and
"Grayson", and every hit was opened in context. That check found:

1. **`6132` has zero hits anywhere in the corpus**, in either data
   file. Probate Code Chapter 4 of Part 1 of Division 6 ("Reference to
   Matters Outside the Will") is not the subject of any existing
   document.
2. **"incorporation by reference" appears once in the whole corpus**,
   in a Social Purpose Corporations Act clause using the phrase for the
   incorporation of one corporate statute into another — an unrelated
   sense of the words.
3. **Simon v. Grayson and Estate of Smith are cited nowhere in the
   corpus.**
4. The 7 pre-existing hits on "separate writing" are all in
   premarital-agreement, home-improvement-contract, and
   real-estate-agency clauses using the phrase in its ordinary sense;
   none concerns a testamentary writing.
5. The existing `antilapse_statute_lapsed_gifts_info_sheet` covers
   Prob. Code §§ 21109-21111. This sheet quotes § 21110(a) and (b)
   only to set the anti-lapse text beside the different lapse rule in
   § 6132(c), and expressly declines to say how the two interact; it
   does not restate the anti-lapse sheet.
6. The existing holographic-will material covers § 6111 as a route to a
   valid will. This sheet cites § 6111(a) and § 6111(b)(1) only for the
   contrast with § 6132's lighter conditions and for the structural
   parallel between § 6111(b) and § 6132(e).

The topic is therefore genuinely new, well-scoped (a single three-section
chapter of the Probate Code), and supported by two published California
Supreme Court decisions.

## What this document covers

13 clauses (`sepwrit_*`): 2 drafting (`sepwrit_declaration`,
`sepwrit_signature_block`) and 11 authority clauses:

- **`sepwrit_what_the_statute_allows`** (§ 6132(a)) — the permission for
  a will to refer to a writing directing disposition of tangible
  personal property not otherwise specifically disposed of by the will;
  the carve-outs for common coin or currency and for property used
  primarily in a trade or business; the three conditions (unrevoked
  will refers to the writing; writing dated and either handwritten or
  signed by the testator; items and recipients described with
  reasonable certainty); the section's place in Chapter 4 and its 2006
  enactment.
- **`sepwrit_what_is_tangible_personal_property`** (§ 6132(h)(1),
  (h)(2)) — the definition of "tangible personal property," its
  inclusion of precious metals in tangible form and articles held for
  investment, and its exclusion of real property, a mobilehome as
  defined in Civ. Code § 798.3, and intangible property including bank
  accounts, documents of title, and securities; the definition of
  "common coin or currency" and its exclusion of coins or currency kept
  for historical, artistic, collectable, or investment value.
- **`sepwrit_value_limits`** (§ 6132(g)) — the $25,000 aggregate limit;
  the $5,000 per-item limit and the passage of an over-limit item under
  the will's remainder clause; the rule that such an item is not
  counted toward the aggregate; the absence of any inflation
  adjustment.
- **`sepwrit_form_and_timing`** (§ 6132(c), (d)) — the writing may be
  written or signed before or after the will and need not have
  independent significance; it is given effect as if contained in the
  will itself; later handwritten or signed changes are permitted and
  the most recent writing controls an inconsistency.
- **`sepwrit_undated_writings`** (§ 6132(e)(1), (e)(2); § 6111(b)(1)) —
  what follows when the writing omits a statement of its date, both for
  inconsistency between writings and where testamentary capacity is in
  question, and the parallel rule for an undated holographic will.
- **`sepwrit_handwriting_or_signature_defect`** (§ 6132(b); § 6111.5) —
  that a failure to meet the handwriting-or-signature condition does
  not preclude the introduction of evidence of the testator's intent,
  and the separate admission of extrinsic evidence as to wills.
- **`sepwrit_recipient_predeceases`** (§ 6132(c); § 21110(a), (b)) —
  that property designated for a person who dies before the testator
  passes as the writing further directs and otherwise lapses, set beside
  the text of the anti-lapse statute, with the interaction expressly
  left open.
- **`sepwrit_filing_in_probate`** (§ 6132(f)(1), (f)(2)) — the personal
  representative's duty to file the writing concurrent with the
  inventory and appraisal required by § 8800, or no later than 60 days
  before the petition for final distribution under § 11640.
- **`sepwrit_incorporation_by_reference`** (§ 6130; § 6132(c); Simon v.
  Grayson) — the statutory statement of incorporation by reference;
  Simon's statement of the doctrine, of why a future document cannot be
  incorporated, of the reasonable-certainty standard of identification,
  and of republication by codicil; and the contrast with § 6132(c).
- **`sepwrit_acts_of_independent_significance`** (§ 6131) — dispositions
  by reference to acts and events with significance apart from their
  effect on the will's dispositions, and the contrast with the
  requirement § 6132(c) dispenses with.
- **`sepwrit_relationship_to_will_formalities`** (§§ 6110(c)(1),
  6110(c)(2), 6111(a); Estate of Smith) — the attested-will witnessing
  requirement and the clear-and-convincing harmless-error rule; the
  holographic-will alternative; and Smith's statement that a
  testamentary instrument may refer to and incorporate an informal or
  unattested document where the reference is unmistakable or can be
  made so by extrinsic proof.

Eight fields are declared: `testatorName`, `willDate`, `writingDate`,
`personalRepresentativeName`, `countyName`, `preparerName`,
`dateSigned`, `cityState`.

## Sources and how they were fetched (wave 165)

Every primary source was fetched **twice by two independent paths**, and
the extracted text of the two fetches compared.

| Source | Path A | Path B | Result |
| --- | --- | --- | --- |
| Prob. Code §§ 6130, 6131, 6132 | leginfo.legislature.ca.gov `codes_displaySection.xhtml?lawCode=PROB&sectionNum=<n>`, Chrome UA | leginfo `codes_displayText.xhtml?lawCode=PROB&division=6.&part=1.&chapter=4.` (whole-chapter page), Firefox UA | all 3 sections MATCH (extracted section text identical) |
| Prob. Code §§ 6110, 6111, 6111.5 | leginfo `codes_displaySection.xhtml?lawCode=PROB&sectionNum=<n>`, Chrome UA | leginfo `codes_displayText.xhtml?lawCode=PROB&division=6.&part=1.&chapter=2.` (whole-chapter page), Firefox UA | all 3 sections MATCH |
| Prob. Code § 21110 | leginfo `codes_displaySection.xhtml?lawCode=PROB&sectionNum=21110`, Chrome UA | leginfo `codes_displayText.xhtml?lawCode=PROB&division=11.&part=1.&chapter=1.` (whole-chapter page), Firefox UA | MATCH |
| Simon v. Grayson (1940) 15 Cal.2d 531 | courtlistener.com `/opinion/2611760/simon-v-grayson/`, Chrome header set + Referer | same URL, Safari header set + Referer | MATCH (extracted text identical, 9,944 chars) |
| Estate of Smith (1948) 31 Cal.2d 563 | courtlistener.com `/opinion/1801390/estate-of-smith/`, Chrome header set + Referer | same URL, Safari header set + Referer | MATCH (extracted text identical, 21,718 chars) |

The two leginfo paths are genuinely independent pages, not the same URL
fetched twice: Path A renders one section, Path B renders the entire
chapter that contains it, and the section text was extracted from each
and compared. Both paths also used different User-Agent strings. The one
mid-section line break leginfo inserts in § 21110(b) is normalized away
by the whitespace collapsing described below.

The CourtListener opinion pages were located through the public,
unauthenticated `/api/rest/v4/search/` JSON endpoint via curl; **no
CourtListener MCP tool call was made**, so none of the shared MCP quota
was consumed. The opinion pages return an empty HTTP 202 without a
`Referer` header; with `Referer: https://www.courtlistener.com/` plus a
browser User-Agent and Accept headers they returned HTTP 200 (the first
Safari-header pass returned 202 and was retried successfully after a
backoff, so both header sets did in the end return the full page).

**Disclosed limit on a third verification path.** A third, phrase-level
check was attempted — CourtListener public-search queries of the form
`cluster_id:2611760 AND "<exact phrase>"` — and returned HTTP 429 on
all five attempts, including after a 300-second backoff and three
further spaced retries. That avenue was
therefore abandoned rather than worked around. It was an *additional*
check: the two independent header-set fetches of each opinion both
succeeded and both contain every quoted passage, so no quote in this
sheet rests on a single fetch.

A search of the same public endpoint for published opinions containing
the phrase "Probate Code section 6132" returned **0 results**. No
construction of § 6132 is therefore attributed to any court anywhere in
this sheet; each § 6132 clause states the statute's own text, and each
such clause's `gap` records that no decision construing the section was
located.

## Quote verification

**35 citation quotes across 11 authority clauses** (30 statutory, 5 from
the two opinions). Each quote was verified programmatically — first at
drafting time (`verify.py`) and again after merging, by re-reading the
merged `data/clauses.json` and re-running the same check against the
same fetched texts — as an exact substring of the normalized text of
**both** independent fetches. Normalization applies Unicode NFC,
converts non-breaking spaces to ordinary spaces, and collapses
whitespace runs (leginfo wraps long lines mid-sentence); no other
transformation is applied.

The statutory check is the stricter, per-section form: each statutory
quote was required to appear inside the text of the **specific section**
its `cite` names, isolated from both the single-section page and the
whole-chapter page, not merely somewhere on either page.

Result: **35 of 35 verified in both fetches; no failures.** No quote
required correction, and nothing was paraphrased inside quotation marks.
Curly apostrophes and quotation marks are reproduced exactly as each
source renders them (leginfo uses `’` and `“ ”`).

Source artifacts and limits are disclosed in the relevant clauses' `gap`
fields rather than silently smoothed:

1. **Reporter transcription artifacts in the CourtListener texts.** The
   Simon text contains, elsewhere in the opinion, `see. 1963` for
   `sec. 1963`, `sec, 25`, `oivn` for `own`, `hand’s` for `hands`, and
   doubled single quotation marks standing in for double quotation
   marks. The Smith text contains `mating` for `making`, `iii` for
   `in`, and similar. **Every quoted passage was chosen to contain none
   of these**, and each opinion clause's `gap` says so expressly.
2. **Star paging.** Both texts carry markers such as `*533` at reporter
   page breaks, sometimes mid-word (`posses *565 sion`). Every quotation
   is taken from within a single reporter page so that no marker falls
   inside a quoted passage; a programmatic guard confirmed no `*NNN`
   appears in any quote, and the pin cites (Simon 533, 534; Smith 567)
   were read from those markers programmatically. In Smith, the `*568`
   marker falls inside the citation parenthetical that *follows* the
   quoted sentence, not inside the sentence, which lies wholly on page
   567; `sepwrit_relationship_to_will_formalities`'s `gap` states this.
3. **Dissent.** Estate of Smith carries a dissent by Justice Schauer.
   **Nothing quoted in this document comes from the dissent**, and the
   `gap` of the clause citing Smith states this. Simon was decided in
   Bank and carries no dissent; its `gap` states that too.
4. **Vintage of the two opinions.** Simon (1940) and Smith (1948)
   predate both the 1990 Probate Code and § 6132 (2006). Neither cites
   § 6130 or § 6132. Both are quoted for the common-law doctrine that
   § 6130 states, **not** as a construction of any current section, and
   both clauses' `gap` fields say so. Smith's actual holding concerns
   revocation of a will by a holographic writing, not a separate
   writing; its `gap` discloses that the single quoted sentence is
   relied on only for the incorporation principle.
5. **Statutory spelling reproduced, not corrected.** § 6132(h)(2)
   spells "collectable" with an "a"; the quote reproduces it exactly and
   `sepwrit_what_is_tangible_personal_property`'s `gap` notes it.
6. **One quotation deliberately truncated.** In
   `sepwrit_form_and_timing` the quote of § 6132(c)'s second sentence
   stops at "in the will itself" because the remainder of that sentence
   (the predeceased-recipient clause) is quoted in full in
   `sepwrit_recipient_predeceases`. Both clauses' `gap` fields disclose
   the split; the truncated quote is still an exact substring of the
   statute.
7. **Sections referred to but not fetched.** Prob. Code §§ 8800, 11640,
   8200, 240, 6100.5, 810-812 and Civ. Code § 798.3 are named by the
   quoted statutes and are described only as those statutes name them;
   none is quoted, and each relevant `gap` records the limit.
8. **Questions the statute leaves open are left open.** § 6132(g) does
   not state a valuation date, who values, or what an "item" is;
   § 6132(f) attaches no express consequence to a late filing; § 6132(b)
   does not say that a nonconforming writing is effective; and the
   interaction between § 6132(c) and the anti-lapse statute is
   unresolved by any located authority. Each of those gaps is stated in
   the relevant clause's `gap` field rather than filled in.
9. **No Judicial Council form number** is reproduced or identified
   anywhere in this sheet.

## Schema and corpus validation

Authority clauses carry exactly `{id, title, kind, status, checkedDate,
body, gap, citations[{case, cite, url, quote}]}` in that order, each
with a non-empty `gap`; drafting clauses exactly `{id, title, kind,
body}`; the document exactly `{id, title, description, categories,
clauseOrder, fields}`. After the merge both data files parse; a
whole-corpus pass reported **0 clause-level issues across all 5,708
clauses**; all 5,708 clause ids and all 677 document ids are unique;
every `clauseOrder` entry across every document resolves to an existing
clause (0 missing); every `{{placeholder}}` in every clause body and
gap resolves to a field declared by the owning document (0 unresolved);
and no clause is orphaned.

The same pass reports 103 documents whose keys are ordered `id, title,
description, clauseOrder, fields, categories` rather than the canonical
order. That count is **unchanged from HEAD** — it was verified against
`git show HEAD:data/documents.json`, which also has exactly 103 — so it
is a pre-existing property of the legacy documents and not introduced
here; the document added by this change uses the canonical order.

Before writing, re-serializing each untouched data file was confirmed to
reproduce it byte for byte, so the merge diff contains only the appended
objects. The merge was purely additive — `git diff --stat` shows 416
insertions and 0 deletions, touching only the 13 appended clause objects
and the one appended document object. `checkedDate` is 2026-09-13.
Estate Planning now has 86 documents; the corpus has 677 documents and
5,708 clauses.

## Inform, never advise

Every authority clause states what the statute or the opinion provides.
None tells the reader whether to make a separate writing, what to put in
one, how to date or sign it, what to appraise anything at, whether to
file anything, or how to respond to a dispute. Each authority clause
closes by naming the question it does **not** answer (whether a
particular writing satisfies the three conditions, whether an item falls
within a definition or a dollar limit, whether a date suffices, whether
capacity existed, whether a filing duty has been met, whether a will
incorporates anything by reference). The declaration and signature
clauses state expressly that the sheet does not determine whether the
writing satisfies § 6132, whether the will refers to it, what any
property is worth, whether any item falls inside or outside the
section's limits or definitions, or whether the personal representative
has complied with subdivision (f); the signature clause adds that the
sheet is not legal advice and creates no attorney-client relationship.
