# Estate Planning, new document: California Statutory Will — Information Sheet

## Why this document

First document of wave 90 (1×4 pattern). A scoping agent proposed this
topic after grepping the corpus for "statutory will," "6240," and "6220" —
zero hits. Read the existing "Last Will and Testament" document's clauses in
full and confirmed it is a generic custom will citing the general
will-execution statute (Prob. Code §§ 6100.5, 6110, 6111) and general
divorce-revocation rule (§ 6122); it never addresses the codified
fill-in-the-blank statutory-will instrument (§§ 6200-6243). Confirmed a
real, non-duplicative gap.

## What this document covers

8 clauses: 3 drafting (purpose declaration, informational form-structure
overview, certification) and 5 authority clauses, citing Prob. Code
§§ 6200, 6201, 6220, 6221, 6222, 6223(a)-(b)(1), 6224, 6226(b)-(c), 6227(a),
and 6240 (its own questions-and-answers text):

- **`statwill_definition`** (§§ 6200, 6201, 6223(a)-(b)(1)) — what a
  statutory will is: a single, fixed, legislature-drafted instrument, not a
  freely drafted one.
- **`statwill_execution_requirements`** (§§ 6220, 6221, 6222) — the
  statutory will's own self-contained execution rule, distinct from the
  general will-execution statute.
- **`statwill_use_limitations`** (§ 6240's own Q&A text) — the form's own
  disclosed limitations: not for tax planning, business assets, trusts,
  out-of-state assets, disinheriting a spouse/partner/descendants, or
  significant pension interests; and that only the blanks may be filled in.
- **`statwill_incomplete_or_improper_use`** (§§ 6224, 6226(b)-(c)) — the
  effect of selecting more than one (or no) disposition clause, the
  clear-and-convincing-evidence standard for an off-instructions addition or
  deletion, and the "notwithstanding Section 6110" path to validating a
  defectively executed form.
- **`statwill_divorce_revocation`** (§ 6227(a)) — the automatic
  divorce/dissolution revocation-and-revival rule specific to the statutory
  will.

## Genuine corrections and findings

- **A genuine finding, not assumed away**: leginfo.legislature.ca.gov does
  not publish the operative fill-in-the-blank text of the § 6240 form
  itself — the fetched page states verbatim, "NOTICE OF INCOMPLETE TEXT:
  The California Statutory Will appears in the hard-copy publication of the
  chaptered bill. See Sec. 88, Chapter 50 (pp. 77-82), Statutes of 2016."
  Rather than fabricate or approximate the form's paragraph-and-blank text,
  the document discloses this explicitly and instead describes the form's
  structure only from the introductory Q&A material that IS published,
  framed as informational description rather than the form's own text.
- **A genuine textual-gap finding**: § 6221's witness-execution text does
  not itself state whether the two witnesses must be present at the same
  time as one another — unlike the general will-execution statute (§ 6110(c)(1)),
  already cited elsewhere in this corpus, which expressly requires
  simultaneous presence. Disclosed as an unresolved difference rather than
  assumed to carry over.
- A genuine finding on the form's own $600,000 figure: the statute ties the
  real, adjusting test to "the current amount excluded from estate tax
  under federal law," of which $600,000 is only the fixed number written
  into the statute's example text — disclosed as not a current test by
  itself.
- Correctly declined to independently verify Prob. Code § 8220 (cross-
  referenced by § 6222) or § 6122 (the general will's divorce-revocation
  rule, to confirm identical wording to § 6227(a)) — both disclosed as not
  independently verified here.

## Genuine delivered-quote defect found and fixed (integration review)

Independent re-verification found the § 6221 quote in
`statwill_execution_requirements` did not match on a strict check: the
delivered quote read "...as follows:(a) The testator..." and "...sign the
will.  (b) Each witness..." (missing space before "(a)"; double space
before "(b)"), while the independently fetched source reads "...as
follows: (a) The testator..." and "...sign the will. (b) Each witness..."
(single space in each case). This is the same missing/extra-space
delivered-quote-defect pattern documented twice in wave 86 (Labor Code
§ 925(a) and Prob. Code § 18100.5(b)) — a real transcription defect, not a
source-side rendering artifact. Corrected the quote in the scratchpad file
to match the source exactly, then re-verified the corrected quote as an
exact match before merging. All 12 other quotes matched cleanly on the
first check.

## Honest gap(s) disclosed

Prob. Code § 8220 (proof of a witnessed will at probate, cross-referenced
by § 6222), § 6226(a) (the general statement that a statutory will may be
revoked/amended by codicil), § 6227(b)-(d) (how revoked property passes,
the definition of dissolution/annulment, and a pre-1985 carve-out), and the
form's own separate caution about stepchildren/foster children are named
but not covered. The operative § 6240 form text itself is not reproduced
anywhere (unavailable from the fetched primary source). This document does
not determine whether the statutory will form fits any specific reader's
estate, and does not itself constitute a completed or executed will.

## Method

Fetched Prob. Code §§ 6200, 6201, 6220, 6221, 6222, 6223, 6224, 6226, 6227,
and 6240 from `leginfo.legislature.ca.gov`, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical. All 13 citation quotes across the 5 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes) after one delivered-quote defect (described above)
was corrected. Independently re-verified during integration review via a
forty-eighth fetch (a distinct curl User-Agent string,
"Groundtruth-48thVerify-StatutoryWill/1.0") of all ten sections — 12 of 13
quotes confirmed clean immediately; the § 6221 quote's defect was caught,
corrected, and re-confirmed clean.

## Verification

- All ten statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a forty-eighth independent
  fetch during integration review; all 13 quotes confirmed clean (one
  corrected before merge).
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Certification of Understanding") duplicate existing corpus titles —
  consistent with this project's established pattern of generic, reused
  boilerplate drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 13 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`testatorName`,
  `testatorCounty`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Statutory Will — Information Sheet
  (`california_statutory_will_info_sheet`), 8 clauses (5 authority + 3
  drafting), in the Estate Planning category. No new fields.
- Corpus: 3,057 → 3,065 clauses; 403 → 404 documents. First addition of
  wave 90.
