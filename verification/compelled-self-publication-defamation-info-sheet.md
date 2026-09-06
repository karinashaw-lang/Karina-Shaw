# Ending employment, new document: Compelled Self-Publication Defamation — Information Sheet

## Why this document

Fourth and final processed item of wave 94 (Ending employment slot). The
first candidate topic assigned to this slot, Fraudulent Inducement to
Relocate (Labor Code §§ 970-972), turned out to already exist in full in
the corpus (`fraudulent_inducement_to_relocate_info_sheet`, category
`["Hiring"]` only) — that was fixed separately as a one-line
discoverability gap-fix (categories → `["Hiring", "Ending employment"]`,
commit `247604d`, no new clauses), and a replacement topic was researched
for this slot instead. Confirmed via corpus grep that "self-publication,"
"compelled self-publication," "McKinney," "Tilkey," and "Live Oak
Publishing" had zero prior hits — a genuinely uncovered doctrine distinct
from this project's existing Employer Reference Immunity (Civ. Code
§ 47(c)) and Blacklisting a Former Employee (Lab. Code §§ 1050-1054)
information sheets, both of which this document's intro clause explicitly
distinguishes itself from.

## Method — a longer-than-usual research path

This document's research agent was interrupted twice by container
restarts that silently killed it mid-fetch (each surfaced by an explicit
system notification that the in-flight work was lost), and a third
attempt ran over three hours with no completion — well outside this
session's normal 5-10 minute agent turnaround — and was deliberately
stopped. Its scratchpad's already-fetched raw source files were reused as
a starting point for a fourth attempt, launched with an explicit time
budget; that attempt completed in roughly seven minutes and is the one
whose output is reflected here. No corpus content was at risk at any
point, since nothing was merged until this integration pass.

## What this document covers

7 clauses: 2 drafting (purpose statement, closing acknowledgment) and 5
authority clauses, citing three published California Court of Appeal
decisions:

- **`selfpubdefam_general_rule_and_exception`** — the general rule that a
  plaintiff cannot manufacture a defamation claim by their own
  disclosure, and the foreseeability-based exception. Cites Live Oak
  Publishing Co. v. Cohagan, 234 Cal.App.3d 1277 (1991).
- **`selfpubdefam_mckinney_doctrine`** — the doctrine's 1980 origin in the
  employment-termination context. Cites McKinney v. County of Santa
  Clara, 110 Cal.App.3d 787 (1980).
- **`selfpubdefam_elements`** — the current four-element test as restated
  in 2020, referencing (but not independently verifying) that
  restatement's own further citations to Beroiz v. Wahl and Davis v.
  Consolidated Freightways.
- **`selfpubdefam_tilkey_current_state`** — the central finding of this
  document: Tilkey v. Allstate Ins. Co., 56 Cal.App.5th 521 (2020),
  reaffirmed and extended (did not narrow) the doctrine, holding for the
  first time in a published California decision that punitive damages
  can be available in a compelled self-publication defamation case.
- **`selfpubdefam_qualified_privilege_interaction`** — Civil Code
  § 47(c)'s qualified privilege (the same privilege addressed in this
  project's Employer Reference Immunity document) remains available as
  an employer defense even against a claim framed as compelled
  self-publication.

## Genuine findings

- **The central substantive finding**: Tilkey did not limit or narrow the
  compelled self-publication doctrine — if anything, it extended it,
  being the first published California decision to hold punitive damages
  available on this theory (while separately reducing the punitive award
  amount on due-process ratio grounds, a distinct issue from the
  liability and availability holdings, which were both affirmed).
- **A genuine, disclosed source-independence limitation**: the elements
  clause's citation is to Tilkey's own restatement of the test, which in
  turn cites Beroiz and Davis; those two cases were not independently
  retrieved or quote-verified for this document — only their
  restatement within the verified Tilkey text was checked. Disclosed in
  that clause's `gap` field rather than presented as independently
  confirmed.
- **Correctly scoped exclusions**: the clause on Tilkey's current state
  explicitly excludes that same opinion's separate holdings on an
  out-of-state domestic-violence-diversion wrongful-termination claim and
  an after-acquired-evidence defense, and excludes a narrower
  securities-industry-specific Civil Code § 47(b) absolute-privilege
  question the opinion also resolved — none of which bear on the
  compelled self-publication doctrine itself.

## Genuine extraction-artifact finding (integration review)

Independent re-verification uncovered two distinct source-side artifact
patterns, neither requiring correction:

- **A new artifact pattern for this corpus**: CourtListener's HTML
  opinion rendering inserts inline pincite/page-break markers (e.g.,
  `*798`) mid-sentence via `<span class="star-pagination">` tags. Both
  McKinney quotes matched exactly once these page-marker spans (and their
  visible page-number text, not just the surrounding tags) were excluded
  from the comparison — confirmed as a purely editorial artifact of how
  the court reporter's pagination is encoded in the HTML, not a
  transcription defect. This is a different artifact from the
  previously-documented Cornell LII whitespace-around-links pattern, but
  the same category of finding: a stable, source-side rendering
  characteristic requiring disclosure, not correction.
- **A PDF-extraction hyphenation artifact**: Tilkey's plain-text
  extraction (sourced from the underlying court PDF) renders
  "self-published" as "self- published" (a line-wrap hyphen with an
  inserted space) in two places. Both of the delivered clause's quotes
  correctly use the dehyphenated, readable "self-published" — matching
  word-for-word once that single artifact space is normalized. Confirmed
  as a PDF line-wrap artifact in the source extraction, not a
  transcription defect in the delivered clause.
- **A verification-methodology note, not a source defect**: CourtListener
  cluster URLs (e.g., `/opinion/4800305/tilkey-v-allstate-ins-co/`) encode
  the cluster ID, not the underlying opinion's own ID. Fetching opinion
  ID 4800305 directly returns an unrelated Alabama workers'-compensation
  case that happens to share that numeric ID in CourtListener's opinions
  table. The correct opinion text for this cluster lives at a different
  ID (4580652, the October 2020 opinion on rehearing) and was located via
  the cluster's `sub_opinions` field before verification proceeded. The
  clause's own citation URL is correct as delivered; this was purely a
  wrinkle in how this integration review located the underlying text.

All three Live Oak quotes, both McKinney quotes, and all six Tilkey quotes
(five cited directly plus the elements-clause citation) were confirmed as
exact, contiguous substrings of the independently-fetched source text
after accounting for the two disclosed rendering artifacts above.

## Honest gap(s) disclosed

This document does not state a damages-pleading standard or statute of
limitations for a defamation claim. It does not address the separate
absolute privilege under Civil Code § 47(b) in any general way (only
noting that Tilkey resolved a securities-filing-specific version of that
question, without generalizing that analysis here). It does not survey
every California or out-of-state case discussing the compelled
self-publication doctrine — research was limited to the three published
decisions actually read and quote-verified. It does not determine whether
any particular statement was defamatory, whether any particular
repetition was legally compelled, or what any specific employer or
employee should do about an actual dispute.

## Verification

- All three cited opinions independently re-fetched during integration
  review via the CourtListener MCP tool's `get_endpoint_item` (a
  sixty-seventh independent verification pass; direct curl fetches to
  courtlistener.com with a new distinct User-Agent string,
  "Groundtruth-67thVerify-SelfPubDefam/1.0", and WebFetch both returned
  blocked/empty responses, consistent with this session's prior
  experience of that domain being intermittently blocked for scripted
  fetches — the MCP tool succeeded where both fell back attempts did
  not).
- All 11 unique citation quotes across the 5 authority clauses
  programmatically and manually confirmed as exact, contiguous
  substrings of the independently-fetched text (no ellipsis-joined
  quotes), after accounting for the two disclosed source-side rendering
  artifacts (CourtListener star-pagination markers; a PDF line-wrap
  hyphenation artifact in Tilkey).
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — the elements clause
  correctly discloses that its citation to Beroiz and Davis is only
  through Tilkey's own restatement, not independently verified; the
  other clauses' citations are to genuinely independent opinions
  (Live Oak, McKinney, Tilkey) — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 11 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check, schema
  check, placeholder-to-field resolution check) run across the full
  updated corpus — clean.

## Net changes

- New document: Compelled Self-Publication Defamation — Information
  Sheet (`compelled_self_publication_defamation_info_sheet`), 7 clauses
  (5 authority + 2 drafting), in the Ending employment category. No new
  fields.
- Corpus: 3,186 → 3,193 clauses; 421 → 422 documents. Fourth and final
  processed item of wave 94.

## Wave 94 summary

Wave 94 followed a 1×4 pattern (one category, Ending employment,
originally targeted, though the wave in practice spanned four categories
across its four items: Hiring/Ending employment discoverability fix,
Business Formation, Real Estate, and Ending employment): Economic
Espionage Act info sheet, Real Estate Transfer Disclosure Statement info
sheet, California Limited Offering Exemption info sheet, a categories-only
fix to the existing Fraudulent Inducement to Relocate document, and this
Compelled Self-Publication Defamation info sheet. Per this project's
established alternation, wave 95 should return to a 2×2 pattern (two
documents concentrated in two categories).
