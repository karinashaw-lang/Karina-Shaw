# Confidentiality & IP, new document: Economic Espionage Act — Information Sheet

## Why this document

First processed item of wave 94 (Confidentiality & IP slot). Read the
existing "Criminal Trade Secret Theft" document's clauses in full —
confirmed it addresses only California Penal Code § 499c (state law), no
federal statute. Grepped the corpus for "economic espionage," "1831," and
"1832" — zero hits (the only "1839"/"1836" hits are the corpus's existing
civil DTSA clauses, confirmed as genuinely different sections/mechanisms,
not overlap). Confirmed a real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (purpose/scope, closing notice) and 5 authority
clauses, citing 18 U.S.C. §§ 1831(a), (b), 1832(a), (b), 1836(a), 1838,
1839(3):

- **`econespionage_1831_foreign_benefit_offense`** (§ 1831(a)) — the
  foreign-government-benefit offense and its $5,000,000/15-year individual
  penalty.
- **`econespionage_1832_general_offense`** (§ 1832(a)) — the general
  offense (no foreign-benefit element, but requiring intent to convert to
  economic benefit and an interstate/foreign commerce nexus) and its
  10-year imprisonment maximum.
- **`econespionage_organizational_penalties`** (§ 1831(b), § 1832(b)) — the
  differing organizational fine floors ($10M vs. $5M, or 3× value).
- **`econespionage_trade_secret_definition`** (§ 1839(3)) — the
  chapter-wide "trade secret" definition governing both criminal offenses
  and the civil DTSA cause of action.
- **`econespionage_relationship_to_state_and_civil_law`** (§ 1838,
  § 1836(a)) — the non-preemption clause and the Attorney General's
  separate civil-injunction mechanism.

## Genuine corrections and findings

- **A genuine correction to the agent's own initial working assumption,
  disclosed rather than silently fixed**: before fetching the text, the
  agent assumed §§ 1831 and 1832 stated the same specific individual fine
  figure. Independently fetching both showed this was wrong — only
  § 1831 states a specific $5,000,000 individual cap in its own text;
  § 1832 states only "fined under this title," cross-referencing the
  general federal fine statute (18 U.S.C. § 3571), which was not
  independently fetched. Disclosed as a genuine research limitation.
- **A significant structural finding**: § 1839's "trade secret" definition
  is not merely textually similar to the civil DTSA definition, as
  California's § 499c/CUTSA pair is — it is the literal same statutory
  text, because § 1839 says "as used in this chapter" and Chapter 90
  contains both the criminal offenses (§§ 1831-1832) and the civil cause
  of action (§ 1836). Verified via each section's own Cornell LII
  breadcrumb navigation confirming chapter membership, disclosed as the
  researcher's own structural observation rather than a case holding.
- Correctly identified § 1836(a) (a DOJ/Attorney General civil-injunction
  mechanism, distinct from the private § 1836(b) civil suit already
  covered elsewhere in the corpus) as a third, non-criminal, non-private
  federal mechanism — confirming three genuinely distinct tracks (state
  criminal, federal criminal, federal civil) rather than assuming only two.
- Correctly disclosed that no case law was researched for any clause in
  this document, consistent with how the existing corpus's DTSA clauses
  handled prior CourtListener access failures.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 4 of 7 quotes initially mismatched on a
strict byte-for-byte check, all passing on whitespace-collapsed
comparison. Manual inspection of each confirmed the established Cornell
LII markup-stripping artifact pattern (documented previously in this
project for the wave-89 IRC § 409A document): spurious spaces appear
around linked/defined terms when tags are stripped — e.g., the source's
"In General.— Whoever" (extra space after the em-dash header) vs. the
delivered quote's "In General.—Whoever"; "trade secret ," (extra space
before punctuation, twice, around the linked term "trade secret") in
§ 1832; "term “ trade secret ” means" (extra spaces around the linked
term) in § 1839; and "Information Act ) ." (extra space before the closing
parenthesis) in § 1838. All four confirmed as genuine source-side
rendering artifacts via direct context inspection — no correction to any
delivered quote was needed, and all quote boundaries were separately
confirmed to end correctly (no truncation) in each case.

## Honest gap(s) disclosed

18 U.S.C. § 3571 (the general federal fine statute cross-referenced by
§ 1832's "fined under this title" language) was not independently fetched.
The amending Public Laws' own text (relied on Cornell's editorial-notes
summaries for amendment history) was not independently verified. How a
single set of facts supporting a § 1831/1832 prosecution might interact
procedurally with a parallel Penal Code § 499c prosecution or civil DTSA
suit (timing, double jeopardy, discovery) is not addressed. This document
does not state that any specific conduct does or does not violate either
statute, and does not initiate, threaten, or request any criminal
investigation or prosecution.

## Method

Fetched 18 U.S.C. §§ 1831, 1832, 1836, 1838, and 1839 from Cornell Law
School's Legal Information Institute (`law.cornell.edu`), each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 7 citation
quotes across the 5 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes); 3 confirmed clean
immediately, 4 confirmed clean via whitespace-collapsed comparison after
manual context inspection ruled out genuine transcription defects.
Independently re-verified during integration review via a sixty-fourth
fetch (a distinct curl User-Agent string,
"Groundtruth-64thVerify-EconEspionage/1.0") of all five sections —
reproduced the identical 4-artifact pattern, confirming it is a stable
source-side rendering characteristic rather than a one-off transcription
error.

## Verification

- All five federal sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a sixty-fourth independent
  fetch during integration review; all 7 quotes confirmed clean (3 direct,
  4 via whitespace-normalized match after confirming genuine source-side
  artifacts).
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title duplicates existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 7 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`preparerName`, `companyName`,
  `adversePartyName`, `tradeSecretDescription`, `dateSigned`, `cityState`)
  reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Economic Espionage Act — Information Sheet
  (`economic_espionage_act_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 3,164 → 3,171 clauses; 418 → 419 documents. First processed
  item of wave 94.
