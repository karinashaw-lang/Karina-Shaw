# During employment, new document: Labor Rights Regardless of Immigration Status (Labor Code § 1171.5) — Information Sheet

## Why this document

Second processed item of wave 139 (During employment slot #1, 2×2
pattern). The agent confirmed the corpus's existing Immigrant Worker
Protection Act document addresses a different subject (worksite ICE-
cooperation restrictions), and ruled out a false-positive collision
with a FEHA "protected individual" definition and Lab. Code § 1197.5
(Fair Pay Act, an unrelated section). The chosen topic — Lab. Code
§ 1171.5's declaration that all labor-law protections, rights, and
remedies extend to workers regardless of immigration status (subject
to a federal reinstatement-remedy carve-out), plus the restricted-
inquiry standard and the California Supreme Court's *Salas v. Sierra
Chemical Co.* preemption holding — was confirmed genuinely open: zero
prior corpus hits on "1171.5," "Salas v. Sierra Chemical," or
"Hoffman Plastic."

## What this document covers

10 clauses: 4 drafting (intro, relationship to other documents, scope
note, acknowledgment) and 6 authority clauses, citing Lab. Code
§ 1171.5(a), (b), (c)-(d), and *Salas v. Sierra Chemical Co.* (2014)
59 Cal. 4th 407 (three citations):

- **`immstatus_declaration`** — the core rule extending protections
  regardless of immigration status, with the federal reinstatement
  carve-out.
- **`immstatus_liability_and_inquiry`** — immigration status's
  irrelevance to liability and the restricted-inquiry standard.
- **`immstatus_declaratory_severable`** — the declaratory-of-existing-
  law and severability provisions.
- **`immstatus_legislative_background`** — the statute's 2002 origin
  as a response to *Hoffman Plastic Compounds v. NLRB*.
- **`immstatus_sister_statutes_wording`** — *Salas*'s footnote
  comparing § 1171.5's wording to three companion statutes.
- **`immstatus_reinstatement_preemption_limit`** — *Salas*'s holding
  distinguishing prediscovery from postdiscovery preemption.

## Genuine findings and defects corrected during integration review

- **Two confirmed citation-accuracy defects found and fixed, not
  merely re-verified**: independent re-verification against the
  *Salas* opinion (via the CourtListener MCP API's internal opinion
  id) found the delivered `immstatus_sister_statutes_wording` quote
  contained a stray hyphen not present in the source ("provisions- —"
  instead of the source's "provisions —"), and the delivered
  `immstatus_reinstatement_preemption_limit` quote (1) stitched
  together two text fragments separated in the raw opinion by an
  entire intervening footnote and page break, presented as if
  contiguous, and (2) used "postdiscovery" where the source reads
  "post-discovery." The agent's own gap field had rationalized the
  stray hyphen as a genuine source artifact, but direct re-fetch of
  the same opinion confirmed no such artifact exists — this was a
  transcription error, not a formatting quirk. Both defects were
  corrected before merging: the stray hyphen was removed, and the
  reinstatement-preemption quote was shortened to the self-contained
  continuation clause that follows the footnote, with the correct
  hyphenation and a new gap-field disclosure explaining the footnote-
  boundary and a genuine line-wrap artifact, both verified directly
  against the raw opinion text.
- **A disclosed narrow holding scope**: the reinstatement-preemption
  clause's gap notes *Salas* applied specifically to FEHA and does not
  purport to resolve preemption for every other labor statute
  § 1171.5(a) covers.
- **A disclosed superseded-wording footnote**: the sister-statutes
  clause's gap notes the quoted 2014 footnote describes § 1171.5(b)'s
  pre-2018-amendment wording, now superseded by the current text
  quoted in a companion clause.
- **Multiple disclosed leginfo formatting artifacts**: a non-breaking
  space after "(b)," a mid-sentence line-wrap between "housing" and
  "laws," and a zero-character paragraph-adjacency boundary between
  subdivisions (c) and (d) — all verified directly against the raw
  HTML and preserved or normalized as disclosed.

## Honest gap(s) disclosed

This document does not resolve which specific reinstatement remedies
federal law bars in a given case, does not define what satisfies the
"clear and convincing evidence" inquiry standard, does not
independently verify whether Civ. Code § 3339, Gov. Code § 7285, or
Health & Saf. Code § 24000 currently read identically to § 1171.5(b),
does not address whether *Salas*'s prediscovery/postdiscovery
framework has been extended to statutes other than FEHA, and does not
independently verify *Hoffman Plastic Compounds*' own text (relies on
*Salas*'s characterization).

## Method

Fetched Lab. Code § 1171.5 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings via
curl, confirmed byte-identical. A CourtListener search located *Salas
v. Sierra Chemical Co.* without a rate-limit issue; the research
agent's own script extracted quotes by string-slicing directly from
the fetched source texts.

Independently re-verified during integration review via a two-
hundred-and-nineteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-219thVerify-ImmigrationStatusLaborRights/1.0") of the
statutory section — fetched cleanly on the first attempt. 2 of 3
statute citation instances confirmed clean on direct normalized-
whitespace substring match; the third (subdivisions (c)-(d))
confirmed clean only after replicating the tag-stripped-without-space
extraction method, directly matching the well-catalogued benign
leginfo paragraph-adjacency artifact. All three *Salas* citations were
independently re-verified via the CourtListener MCP document-search
tool against the opinion's correct internal id (2680642); this review
found and corrected the two citation-accuracy defects described above
before merging.

## Verification

- The statutory section fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-
  nineteenth independent fetch during integration review; all 3
  statute citation instances confirmed clean. All 3 case-law
  citations independently re-verified via the CourtListener MCP API
  against the correct internal opinion id; two were found to contain
  transcription defects and corrected before merging, the third
  confirmed clean as delivered.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `immstatus_` prefix has zero collisions. Ran term-
  specific greps for "1171.5," "Salas v. Sierra Chemical," and
  "Hoffman Plastic" — zero hits on all, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new field ids required — all four fields (`employeeName`,
  `companyName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Labor Rights Regardless of Immigration Status (Labor
  Code § 1171.5) — Information Sheet
  (`immigration_status_labor_rights_info_sheet`), 10 clauses (6
  authority + 4 drafting), in the During employment category. No new
  fields. Two citation-accuracy defects found and corrected during
  integration review (see above).
- Corpus: 4,602 → 4,612 clauses; 573 → 574 documents. Second processed
  item of wave 139.
