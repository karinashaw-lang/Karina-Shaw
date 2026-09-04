# Confidentiality & IP, new document: California Labor Code Section 925 — Forum Selection and Choice-of-Law Restriction — Information Sheet

## Why this document

First document of wave 85, chosen via a scoping agent's category-gap
survey. Read the existing "Noncompete Void Notification" document
(Bus. & Prof. Code § 16600.1(b)) and all six of its clauses in full —
confirmed it covers only the notice-of-void-noncompete duty, nothing
about forum selection or choice of law. Grepped the corpus for "925"
(only false hits: Civ. Code § 5925 HOA ADR, Fam. Code §§ 3900-3925
UTMA, Labor Code §§ 2924/2925), "forum selection" (zero hits), "choice
of law" (hits only in premarital-agreement and UIFSA clauses,
unrelated employment contexts), and "adjudicate" (hits in parentage,
conservatorship, dissolution, adverse-possession, PAGA, and workers'-
comp clauses — none touching Labor Code § 925). Confirmed
non-duplicative.

## What this document covers

7 clauses: 2 drafting (purpose statement, signature) and 5 authority
clauses, citing Cal. Labor Code §§ 925(a)-(f) and its enactment
history note:

- **`lab925_prohibition`** (§ 925(a), (d)) — the core prohibition on
  requiring a California-resident-and-worker employee to agree to
  out-of-state adjudication of a California claim, or deprivation of
  California law's protection for a California controversy, plus the
  statute's own definition of "adjudication" (litigation and
  arbitration both).
- **`lab925_voidability`** (§ 925(b)) — the voidable-at-the-employee's-
  request mechanism and the California-forum/California-law
  consequence once voided.
- **`lab925_remedies`** (§ 925(c)) — the court's discretionary
  authority to award injunctive relief and reasonable attorney's fees.
- **`lab925_counsel_exception`** (§ 925(e)) — the exception for a
  contract individually negotiated with an employee represented by
  counsel specifically on the venue/forum/choice-of-law terms.
- **`lab925_applicability`** (§ 925(f); enactment note) — the January
  1, 2017 applicability date for contracts entered, modified, or
  extended on or after that date.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  described § 925(c) as authorizing "injunctive relief, actual
  costs/fees." The agent's fetched, verified statutory text authorizes
  only "reasonable attorney's fees" (discretionary, "may award") — it
  does not use or contain the word "costs" at all. The clause states
  only what the verified text actually says, and the discrepancy is
  disclosed explicitly in `lab925_remedies`'s gap field rather than
  silently conforming to the brief's incorrect premise.
- Correctly declined to define "primarily resides and works in
  California," "a claim arising in California," or what representation/
  negotiation suffices under the counsel exception — the statute's own
  text does not define these terms, and no independent case law was
  fetched or verified to fill the gap, so each is disclosed as an open,
  fact-specific question rather than resolved.
- Correctly recognized that all citations in this document are
  subdivisions of a single six-subdivision statutory section (with no
  independent second source), and disclosed this in every clause's gap
  field rather than padding with an unearned appearance of
  corroboration.

## Honest gap(s) disclosed

No case law is cited anywhere in this document — every clause rests on
the statutory text alone, disclosed explicitly. The statute's own
procedural mechanism for how an employee exercises the option to void
a provision is not addressed, since the text itself doesn't specify
one. Whether a specific contract's modification or extension falls on
or after the January 1, 2017 applicability date is not determined.

## Method

Fetched Cal. Labor Code § 925 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
7 citation quotes across the 5 authority clauses were checked against
the fetched text; 6 confirmed as exact contiguous substrings
immediately, and one (the § 925(a) core-prohibition quote) initially
mismatched due to two missing spaces the research agent's own
transcription had dropped at "following:(1)" and ".(2)" — confirmed via
independent re-fetch that the source text has "following: (1)" and
". (2)" with proper spacing, corrected the delivered quote to match
exactly, and re-confirmed the corrected quote as an exact substring.
No ellipsis-joined quotes were used anywhere. Independently re-verified
during integration review via a twenty-eighth fetch (a distinct curl
User-Agent string, "Groundtruth-28thVerify-Lab925/1.0") — all 7 quotes
(including the corrected one) confirmed clean.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a twenty-eighth independent
  fetch during integration review; all 7 quotes confirmed clean after
  correcting one delivered-quote spacing defect.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause correctly
  discloses that its citations are subdivisions of the same statutory
  section, with no independent corroborating source; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Signature") match the established boilerplate-title reuse pattern.
- Checked every citation's `case` field for emptiness — all 7
  populated with proper case/citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus (189, 130, 160, and 138 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Labor Code Section 925 — Forum Selection
  and Choice-of-Law Restriction — Information Sheet
  (`labor_code_925_forum_choice_of_law_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. No new
  fields.
- Corpus: 2,915 → 2,922 clauses; 384 → 385 documents. First addition of
  wave 85.
