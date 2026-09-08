# Hiring, new document: State Disability Insurance New-Hire Notice — Information Sheet

## Why this document

Second processed item of wave 142 (Hiring slot, 1×4 pattern). The
agent ruled out blacklisting, social media passwords, English-only
rules, the Displaced Janitor Opportunity Act, Grocery Worker
Retention Law, and cannabis/AB 2188 — all already confirmed covered.
The chosen topic — Unemployment Insurance Code § 2613's hiring-
triggered notice duty (SDI and, since 2004, Paid Family Leave rights)
— was confirmed genuinely open: all 5 raw "2613" hits in the corpus
were read individually and confirmed false positives from unrelated
codes (Prob. Code § 2613, Health & Saf. Code §§ 26103/26130, an
opinion id number, and 29 U.S.C. § 2613/FMLA). The agent also read
the corpus's existing time-of-hire workers'-compensation notice
document (Lab. Code §§ 3550-3551) and the separation-triggered
unemployment pamphlet clause (UIC § 1089) to confirm both are legally
distinct statutes with different triggers, avoiding topical overlap.

## What this document covers

6 clauses: 3 drafting (intro, distinguishing note, acknowledgment) and
3 authority clauses, citing Unemp. Ins. Code § 2613(a), (b) (two
citations), and (c) (three citations):

- **`sdinotice_director_education_program`** — the Director's
  program-of-education duty under subdivision (a).
- **`sdinotice_time_of_hire_duty`** — the original 1988 at-hire notice
  duty and its sickness/injury/pregnancy content (two citations).
- **`sdinotice_2004_expansion_family_bonding`** — the 2004 expansion
  adding family-care and bonding-leave content tied to Paid Family
  Leave (three citations).
- **`sdinotice_distinguishing_other_notices`** — a drafting clause
  distinguishing this notice from the workers'-compensation notice,
  the Wage Theft Prevention Act notice, and the separation-triggered
  unemployment pamphlet.

## Genuine findings

- **A disclosed unresolved statutory-interaction question**: the
  time-of-hire clause's gap notes the statute's current text retains
  both the narrower 1988 notice-content description (subdivision (b))
  and the broader 2004 description (subdivision (c)) as separate
  subsections, and states plainly that this document does not resolve
  whether subdivision (b)'s content still operates independently for
  any employee or has been fully superseded in practice.
- **A disclosed comparison highlighting an asymmetry**: the 2004-
  expansion clause's gap contrasts this notice's lack of a statutory
  bilingual-delivery requirement with the workers'-compensation
  time-of-hire notice's express English/Spanish requirement under
  Lab. Code § 3551(b) — flagging a real textual difference rather than
  assuming parity between the two notices.
- **A disclosed negative case-law finding**: two CourtListener
  searches (a targeted phrase query and a broader keyword query)
  returned no opinions construing § 2613 — disclosed honestly across
  multiple clauses' gaps rather than stretched into tangential
  citations.
- **A disclosed absence of statutory specificity**: multiple gaps note
  that § 2613's text does not itself name a specific EDD form number
  (such as the commonly associated DE 2515 pamphlet), does not
  specify delivery format, and does not include a penalty provision
  for noncompliance — all flagged as absent from the statutory text
  itself rather than assumed from common practice.

## Honest gap(s) disclosed

This document addresses only the hiring-triggered branch of § 2613's
notice duty; it does not address the same statute's separation-
triggered notice duty, does not specify a required EDD form number or
delivery format, does not address bilingual-delivery requirements
(none appear in this statute's text), does not address penalties for
noncompliance, does not resolve how "hired on or after" applies to a
rehire, and does not cite any case law construing § 2613 (confirmed
genuine absence via two CourtListener searches).

## Method

Fetched Unemp. Ins. Code § 2613 from leginfo.legislature.ca.gov,
fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical. All 6 citation instances
were programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a two-
hundred-and-thirty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-231stVerify-SDINewHireNotice/1.0") — fetched
cleanly on the first attempt. All 6 citation instances confirmed
clean on direct substring match. The Director's program-of-education
duty, the original 1988 at-hire notice content and trigger date, and
the 2004 expansion's family-care/bonding-leave content, instruction
requirement, and trigger date were all independently reconfirmed
present in the freshly fetched text.

## Verification

- The cited statutory section fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-first independent fetch during integration
  review; all 6 citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `sdinotice_` prefix has zero collisions. Ran a
  section-number-specific grep for "2613" — 5 hits, all independently
  confirmed false positives from unrelated codes/titles or incidental
  digit substrings by inspecting each hit's exact context directly.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new field ids required — all three fields (`companyName`,
  `employeeName`, `startDate`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: State Disability Insurance New-Hire Notice —
  Information Sheet (`sdi_new_hire_notice_info_sheet`), 6 clauses (3
  authority + 3 drafting), in the Hiring category. No new fields.
- Corpus: 4,716 → 4,722 clauses; 585 → 586 documents. Second
  processed item of wave 142.
