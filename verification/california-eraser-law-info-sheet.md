# Confidentiality & IP, new document: California "Eraser Law" — Information Sheet

## Why this document

Confirmed by grep that "eraser law," "22581," and "minors erase" had
zero hits anywhere. Read the California Age-Appropriate Design Code
Act, CalOPPA, and California Genetic Information Privacy Act documents
in full — none address a content-removal mechanism. Confirmed
non-duplicative. Second of wave 76's four documents.

## What this document covers

6 clauses: 2 drafting (purpose/scope, acknowledgment) and 4 authority
clauses, citing Cal. Bus. & Prof. Code §§ 22580(d)-(f), 22581(a),
(a)(1)-(4), (b), (b)(2), (d), (f):

- **`eraserlaw_scope`** (§§ 22581(a), 22580(d)-(f)) — **a key
  finding**: the dual coverage trigger (directed to minors OR actual
  knowledge a minor is a user) reaches general-audience operators too,
  and the statute's own "directed to minors" definition is
  self-contained — NOT cross-referencing COPPA, a genuine, disclosed
  distinction from this project's already-shipped Age-Appropriate
  Design Code Act, whose coverage test does cross-reference COPPA.
- **`eraserlaw_removal_right`** (§ 22581(a)(1), (b)(2), (f)) — **the
  central finding**: the removal right is limited to content the
  minor registered user posted THEMSELVES — not a broad right to be
  forgotten — verified via the statute's own third-party-posted-content
  exception and its "posted" definition.
- **`eraserlaw_notice_requirement`** (§ 22581(a)(2)-(4)) — the
  required notice of the right, clear instructions, and — notably — a
  required disclosure that removal does NOT ensure complete or
  comprehensive removal.
- **`eraserlaw_exceptions`** (§ 22581(b), (d)) — the statute's five
  exceptions and its "deemed compliant" safe harbor: rendering content
  invisible to other users and the public satisfies the statute even
  if the content remains on the operator's servers or becomes visible
  again via a third party's copy or repost.

## Genuine corrections and findings

- **The central finding**: confirmed the removal right reaches only
  content the minor posted themselves, verified precisely against a
  plausible overclaim (a general "right to be forgotten" for minors)
  that the statute's own third-party-content exception and "posted"
  definition rule out.
- Confirmed the statute's compliance standard is invisibility to
  others, not guaranteed deletion — content may remain on the
  operator's servers, and a third party's copy or repost doesn't
  break compliance so long as the operator's own posting is made
  invisible.
- Confirmed the "directed to minors" definition is self-contained
  (no COPPA cross-reference), explicitly distinguished from the
  AADC's own coverage test, which does cross-reference COPPA — a
  precise, disclosed distinction between two similar-sounding but
  differently-constructed statutes in the same category.
- Honestly disclosed that applying § 22580's chapter-level definitions
  to § 22581 (which uses the same defined terms without restating
  them) is an ordinary statutory-construction reading, not text quoted
  from § 22581 itself, and that no case law was checked confirming a
  court applied it that way.

## Honest gap disclosed

§ 22581(c) (law-enforcement carve-out) and § 22581(e) (no duty to
collect age information) were reviewed but not separately quoted.

## Method

Fetched Cal. Bus. & Prof. Code §§ 22580 and 22581 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 12 citation quotes
across the 4 authority clauses programmatically confirmed as exact
substrings of the confirmed text. Independently re-verified during
integration review via a third fetch (Chrome/Windows User-Agent) of
both sections — all 9 spot-checked passages confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 22580(d)/(e)/(f)
  and § 22581's various subsections each correctly disclosed as
  subsections of one statutory section, not independent of one
  another; § 22580 vs. § 22581 correctly disclosed as independent,
  separately-numbered sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`businessName`, `websiteURL`, `preparerName`,
  `signatureDate`) independently confirmed to match existing corpus
  field definitions. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California "Eraser Law" (Minor's Right to Remove
  Posted Content) — Information Sheet (`california_eraser_law_info_sheet`),
  6 clauses (4 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,687 → 2,693 clauses; 352 → 353 documents. Second document
  of wave 76.
