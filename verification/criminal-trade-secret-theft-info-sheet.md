# Confidentiality & IP, new document: Criminal Trade Secret Theft — Information Sheet

## Why this document

Second processed item of wave 91 (Confidentiality & IP slot). Read the
existing "Trade Secret Cease and Desist" and "Trade Secret Preemption
Doctrine" documents in full — confirmed both address only the civil CUTSA
framework (Civ. Code § 3426 et seq.). Confirmed the existing "Computer
Data Access and Fraud Act" document covers Penal Code § 502 (computer
access generally), a different statute. Grepped the corpus for "499c" —
zero hits. Confirmed a real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (purpose, signature/acknowledgment) and 5 authority
clauses, citing Penal Code § 499c(a)(9), (b), (c), (d), and Civ. Code
§§ 3426.1(d), 3426.7(a)-(b):

- **`pc499c_trade_secret_definition`** (§ 499c(a)(9); Civ. Code
  § 3426.1(d)) — the criminal statute's own "trade secret" definition,
  independently compared side-by-side against CUTSA's civil definition.
- **`pc499c_prohibited_theft_acts`** (§ 499c(b)) — the four theft-type
  prohibited acts, with the finding that subdivision (b) states no
  penalty of its own.
- **`pc499c_bribery_inducement_offense`** (§ 499c(c)) — the separate
  bribery/inducement offense and its specific stated penalty.
- **`pc499c_return_not_a_defense`** (§ 499c(d)) — the rule that returning
  the article is no defense to a prosecution under the section generally.
- **`pc499c_relationship_to_civil_cutsa`** (Civ. Code § 3426.7(a)-(b)) —
  CUTSA's non-supersession of criminal remedies generally, with the
  finding that § 3426.7 does not name § 499c specifically.

## Genuine corrections and findings

- **A genuine finding confirming, rather than assuming, the task's own
  hint that the definitions might differ**: independently fetching and
  comparing § 499c(a)(9) against Civ. Code § 3426.1(d) side-by-side showed
  the operative wording is textually identical, differing only in
  (A)/(B) versus (1)/(2) subdivision labeling — verified programmatically
  during integration review, confirming the agent's own comparison.
  Disclosed as the researcher's own textual comparison, not a holding from
  any case that has tested it.
- **A genuine finding, disclosed rather than papered over**: § 499c(b)
  (the core theft prohibition) states only that described conduct "is
  guilty of theft," without itself specifying a penalty — unlike
  subdivision (c), which states its own explicit penalty. The document
  does not fabricate a cross-reference to California's general
  theft-grading statutes to fill this gap; it discloses the gap honestly
  and states a reader would need to separately research those statutes.
- **A genuine, deliberate architectural decision disclosed in the self-
  report**: no demand-letter or accusatory drafting clause was included —
  the agent reasoned that using a criminal statute to pressure a specific
  person carries real extortion risk under California law (the Flatley v.
  Mauro line of authority), which would conflict with the project's
  "inform, never advise" architecture. The document was built instead as a
  neutral information sheet, consistent with how the existing Preemption
  Doctrine document is structured.
- Correctly disclosed that CUTSA's own non-supersession provision
  (§ 3426.7) does not name § 499c by section number — verified via direct
  text search rather than assumed.

## Honest gap(s) disclosed

Section 499c(a)(1)-(8) (the eight ancillary definitions), Penal Code
§ 1170(h) (the realignment sentencing provision cross-referenced by
§ 499c(c)'s penalty), California's general theft-grading statutes (needed
to determine what penalty attaches to a § 499c(b) violation), and
§ 3426.7(c) (a public-records carve-out already addressed elsewhere in the
corpus) are named but not covered. No case law was researched for this
statute. This document does not state that any specific conduct does or
does not violate § 499c, and does not itself constitute, request, or
recommend a report to law enforcement or a prosecuting authority.

## Method

Fetched Penal Code § 499c, Civ. Code § 3426.1, and Civ. Code § 3426.7 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical. All 6 citation
quotes across the 5 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a fifty-third fetch (a distinct
curl User-Agent string, "Groundtruth-53rdVerify-PC499c/1.0") of all three
sections — all 6 quotes confirmed clean on direct substring match, no
extraction artifacts encountered; the "textually identical definitions"
claim was independently re-confirmed programmatically.

## Verification

- All three statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fifty-third independent
  fetch during integration review; all 6 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections/codes; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 6 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`preparerName`, `companyName`,
  `adversePartyName`, `tradeSecretDescription`, `dateSigned`, `cityState`)
  reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Criminal Trade Secret Theft — Information Sheet
  (`criminal_trade_secret_theft_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 3,088 → 3,095 clauses; 407 → 408 documents. Second processed
  item of wave 91 (first new document).
