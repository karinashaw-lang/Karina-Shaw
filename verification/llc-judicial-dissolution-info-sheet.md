# Business Formation, new document: Judicial Dissolution of a California LLC — Information Sheet

Wave 150 (Business Formation category), continuing the round-robin also
covered by waves 146/148.

## Why this document

The corpus's existing LLC Dissolution and Cancellation document covers
only the non-judicial route: the default winding-up conduct and the
certificate-of-dissolution / certificate-of-cancellation filings that
formally end an LLC's existence once it has already dissolved (by
member vote or an operating-agreement event). No existing document
addresses the separate, judicial route — a court ordering an LLC's
dissolution on a member's or manager's petition — which is governed by
Cal. Corp. Code § 17707.03. This is the direct LLC-law counterpart to
the corpus's existing Involuntary Dissolution of a Corporation
document (Corp. Code §§ 1800–1806, § 2000), but structurally distinct:
the LLC statute puts the grounds, standing rule, and buyout-avoidance
mechanism all in one self-contained section rather than splitting them
across chapters. Checked `data/documents.json` first against all ~78
existing Business Formation titles/ids; confirmed no overlap.

## What this document covers

8 clauses: 2 drafting (purpose declaration, closing/signature) and 6
authority clauses, all citing subdivisions of the single statute Cal.
Corp. Code § 17707.03:

- **`llcjuddiss_standing`** (§ 17707.03(a)) — any manager or member(s)
  may file; no ownership-percentage threshold; dissolution is
  discretionary ("may decree").
- **`llcjuddiss_five_grounds`** (§ 17707.03(b)(1)-(5)) — the five
  grounds: not reasonably practicable to carry on the business,
  protection of complaining members' interests, abandonment,
  deadlock/internal dissension, and fraud/mismanagement/abuse of
  authority.
- **`llcjuddiss_buyout_election`** (§ 17707.03(c)(1)-(2)) — the other
  members' right to buy out the petitioning members' interests at fair
  market value to avoid dissolution; the damages-deduction rule and its
  carve-out for suits on grounds (3)-(5); the bond-and-stay procedure.
- **`llcjuddiss_appraisal_and_decree`** (§ 17707.03(c)(3)-(4)) —
  three-appraiser valuation, the court's decree, payment consequences,
  and the right to appeal.
- **`llcjuddiss_valuation_date_and_dismissal`** (§ 17707.03(c)(5)-(6))
  — the default valuation date and the rule that a moving party's
  dismissal doesn't affect the other members' buyout rights.
- **`llcjuddiss_court_remedies_preserved`** (§ 17707.03(d)) — savings
  clause preserving the court's other remedies.

## Method — independent double-fetch

Fetched `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CORP&sectionNum=17707.03`
twice via `curl`, independently, with two distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) GroundtruthResearchBot/1.0`
2. `curl/8.5.0 GroundtruthAgent2`

Both returned HTTP 200. The raw HTML responses differed only in
per-request dynamic artifacts (a JSF `facelets.ui.DebugOutput` session
timestamp embedded in an inline script, and the hidden
`javax.faces.ViewState` token) — not in the statutory content. After
stripping HTML tags, unescaping entities, and normalizing whitespace,
the two fetches' extracted statutory text (from the `codeLawSectionNoHead`
div through the "(Amended by Stats. 2015..." enactment note) were
programmatically diffed and confirmed **byte-identical**. This
confirms no caching/mirroring artifact affected the source text used
for quotation.

## Quote-by-quote verification

All 13 citation quotes (1 for subdivision (a), 5 for subdivision (b)'s
paragraphs (1)-(5), 6 for subdivision (c)'s paragraphs (1)-(6), 1 for
subdivision (d)) were programmatically checked as exact substrings of
the normalized, confirmed-identical fetched text (whitespace collapsed
to single spaces on both sides — a benign formatting normalization for
PDF/HTML line-wrap spacing, not a content change). All 13 passed
verification with no defects — no genuine textual discrepancy was
found between the quoted strings and the fetched source, so no
correction or `gap`-field disclosure of a source defect was needed.
Curly quotation marks and apostrophes in the source (e.g. around
"moving parties," and in "attorney's fees," "members' rights") were
preserved verbatim in the quotes rather than converted to straight
quotes, since that is what the source page actually contains.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm
current schema. Authority clauses use exactly
`{id,title,kind,status,checkedDate,body,gap,citations:[{case,cite,url,quote}]}`;
drafting clauses use exactly `{id,title,kind,body}`. The document uses
`{id,title,description,categories,clauseOrder,fields}`. Verified
programmatically (key-set equality check) before merging — all 8
clauses conform.

Field reuse: `companyName`, `entityType`, `petitionerName`,
`groundsForProceeding`, `ownershipPercentage`, `dateSigned`, and
`cityState` all already exist as field ids elsewhere in the corpus
(the last four were reused directly from the Involuntary Dissolution
of a Corporation document's field set, since `ownershipPercentage` is
already used generically for shareholder *or* member interests
elsewhere in the corpus, e.g. the Shareholder and Member Inspection
Rights document). No new field ids were introduced.

## Corpus-wide validation (after merge)

Ran a script confirming:
- Both `data/clauses.json` and `data/documents.json` still parse as
  valid JSON.
- No duplicate clause ids across the full corpus (4,995 total).
- No duplicate document ids or titles across the full corpus (617
  total).
- Every clause id referenced in every document's `clauseOrder` — not
  just the new document's — exists in `clauses.json`.
- Every `{{placeholder}}` in the new document's clause bodies resolves
  to a field id declared in the new document's `fields` array.
- No stray `{{...}}` leakage in the new clauses' `title`, `gap`, or
  citation `case`/`cite`/`url`/`quote` fields.

All checks passed clean.

## Net changes

- New document: Judicial Dissolution of a California LLC — Information
  Sheet (`llc_judicial_dissolution_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Business Formation category. No new fields.
- Corpus: 4,987 → 4,995 clauses; 616 → 617 documents. Wave 150,
  Business Formation.
