# Hiring, new document: Fraudulent Inducement to Change Residence for Work — Information Sheet

## Why this document

First document of wave 80. Confirmed by grep that "970," "fraudulent
inducement," "section 970," and "§ 970" had zero substantive prior
hits (only incidental numeric coincidences — a 1970 date reference, an
unrelated citation number). Read the Offer Letter document's clauses
in full and the existing Blacklisting Former Employee document (Labor
Code §§ 1050-1054) — confirmed the latter addresses a different fact
pattern (a former employer blocking re-employment elsewhere) and
statute, not inducement to relocate for a new job. Confirmed
non-duplicative.

## What this document covers

5 clauses: 2 drafting (purpose/scope, certification) and 3 authority
clauses, citing Cal. Labor Code §§ 970, 971, and 972:

- **`reloinduce_core_prohibition`** (§ 970) — the core prohibition on
  inducing a person to change residence for work through knowingly
  false representations, limited to four specific statutory
  categories: the work's kind/character/existence, its duration or
  compensation, sanitary/housing conditions, and a pending labor
  dispute.
- **`reloinduce_criminal_penalty`** (§ 971) — the misdemeanor penalty
  for a violation (a $50-$1,000 fine, up to six months imprisonment,
  or both).
- **`reloinduce_civil_double_damages`** (§ 972) — **a key finding**:
  the separate civil remedy sets the multiplier at double damages
  (not treble), and — verified precisely from the statute's own
  text — does NOT itemize "moving expenses" or any other specific
  category of recoverable loss; the statute uses only the general
  phrase "double damages resulting from such misrepresentations."

## Genuine corrections and findings

- **The central finding**: confirmed precisely that § 972's text does
  not mention "moving expenses" anywhere — correcting a common
  assumption (reflected in the original research brief itself) that
  moving-expense recovery is textually guaranteed. The clause
  candidly discloses that whether a specific cost counts as "damages
  resulting from" the misrepresentation would require case-law
  research outside this statute-text-only document's scope.
- Confirmed the civil remedy's multiplier is exactly "double," not
  treble or another multiple — verified against the statute's own
  words rather than assumed from general familiarity with the area.
- Confirmed the four-category limitation on what "knowingly false
  representation" can trigger the prohibition — a false statement on
  some other subject is outside this specific statute's reach.
- Correctly distinguished this statute from the corpus's existing
  Blacklisting document (Labor Code §§ 1050-1054), which addresses a
  different fact pattern and different statutory chapter entirely.

## Honest gap(s) disclosed

Labor Code §§ 973 and 974 (advertising-disclosure duties during a
labor dispute) and §§ 976 and 977 (a good-faith-publisher exception
for sales/broker/agent compensation advertisements) — separate,
related provisions in the same chapter — are not covered. Whether a
specific statement was "knowingly" false, and whether it was actually
the means of inducing a specific move, are fact-specific questions
this document does not resolve. Common-law fraud-in-the-inducement
tort doctrine is not researched or addressed — only this specific
statute's own text.

## Method

Fetched Cal. Labor Code §§ 970, 971, and 972 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 3 citation quotes across the 3 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via an eighth fetch (a distinct curl User-Agent string,
"Groundtruth-EighthVerify-Reloinduce/1.0") of all three sections — all
3 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus an eighth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the criminal-penalty
  and civil-remedy clauses each correctly disclose their dependency on
  the core-prohibition clause's § 970 violation trigger, rather than
  presenting themselves as unrelated confirmations; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Certification") match titles used elsewhere in the corpus —
  confirmed as the corpus's established, intentional boilerplate-title
  reuse pattern, not a genuine collision.
- No new fields required — all five fields (`preparerName`,
  `companyName`, `jobseekerName`, `dateSigned`, `cityState`) reused
  from the existing corpus (23, 181, 1, 149, and 128 prior documents
  respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Fraudulent Inducement to Change Residence for Work
  (Labor Code §§ 970-972) — Information Sheet
  (`fraudulent_inducement_to_relocate_info_sheet`), 5 clauses (3
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,787 → 2,792 clauses; 366 → 367 documents. First addition of
  wave 80.
