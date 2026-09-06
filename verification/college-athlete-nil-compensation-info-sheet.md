# Confidentiality & IP, new document: College Athlete Name, Image, and Likeness (NIL) Compensation — Information Sheet

## Why this document

Second processed item of wave 102 (Confidentiality & IP slot). A
scoping pass and clause-level duplication check confirmed zero prior
coverage of Education Code § 67456 anywhere in the corpus, distinct
from the existing Model/Publicity Release document, which addresses a
general Civil Code § 3344 consent-to-use-of-identity between two
private parties rather than the statutory regime governing a student
athlete's rights against their own institution or athletic association.

## What this document covers

8 clauses: 1 drafting (disclosure declaration/signature) and 7
authority clauses, citing Education Code § 67456(a)-(f):

- **`nilathlete_scope_distinction`** — the core prohibition and an
  explicit distinction from the general right-of-publicity framework.
- **`nilathlete_no_restriction_by_association`** — the parallel bar on
  athletic associations/conferences (naming the NCAA), including the
  bar on penalizing the institution itself.
- **`nilathlete_no_recruiting_inducement`** — the significant, opposite-
  direction rule: institutions/associations may not themselves pay a
  prospective athlete.
- **`nilathlete_professional_representation`** — the right to licensed
  athlete-agent or attorney representation, and the federal SPARTA
  cross-reference.
- **`nilathlete_scholarship_not_compensation`** — the cost-of-attendance
  scholarship carve-out and its non-revocation protection.
- **`nilathlete_disclosure_and_conflict`** — the bidirectional NIL-
  contract/team-contract conflict disclosure rules.
- **`nilathlete_team_contract_limit`** — the limit on a team contract
  restricting commercial NIL use outside official team activities.

## Genuine findings

- **A significant clarification the brief's framing risked collapsing**:
  the agent distinguished subdivision (a)'s protection of a *current*
  athlete's outside NIL earnings from subdivision (b)'s *opposite-
  direction* bar on the institution/association itself paying a
  *prospective* athlete — explicitly noting the statute is not a
  blanket "schools can pay athletes" provision.
- **A disclosed, unresolved textual variance**: subdivision (c)(1)'s
  protected class ("a California student participating in
  intercollegiate athletics") uses different wording than subdivision
  (a)(1) ("a student of that institution participating in
  intercollegiate athletics") — flagged as an open question rather than
  assumed to mean the same thing.
- **A disclosed dating ambiguity**: subdivision (f)'s "enactment of this
  section" phrase is ambiguous given the statute has been amended more
  than once; the agent did not trace which specific enactment date it
  refers to and disclosed that gap rather than guessing.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone, disclosed explicitly.

## Honest gap(s) disclosed

This document does not independently fetch or verify Business and
Professions Code §§ 18895 et seq. or 6000 et seq., or 15 U.S.C. § 7801
et seq. — only what § 67456's own text states about them. It does not
define "official team activities" or specify a disclosure deadline,
form, or penalty for a student athlete's NIL-contract disclosure. It
does not resolve whether a non-institutional third-party organization
(e.g., an independent NIL collective) falls within the list of entities
barred from paying a prospective athlete. It does not determine whether
any specific institutional rule, team-contract provision, or NIL
contract complies with or violates § 67456.

## Method

Fetched Education Code § 67456 from `leginfo.legislature.ca.gov` twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical (5,252 characters of extracted statutory text, exact
match). CourtListener's daily rate limit was already exhausted on the
agent's first lightweight test call; no case law was used, a disclosed
and legitimate choice. All 13 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
ninety-seventh fetch (a new distinct curl User-Agent string,
"Groundtruth-97thVerify-NILAthlete/1.0") of the section — all 13
citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- Education Code § 67456 fetched twice independently by the research
  agent with distinct User-Agent strings, plus a ninety-seventh
  independent fetch during integration review; all 13 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — all citations draw on
  the same single statutory section, correctly not treated as
  independent sources of each other.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed the earlier scoping-
  stage finding that the existing Model/Publicity Release document
  addresses a genuinely distinct legal question (private-party consent
  under Civil Code § 3344, not institution/association conduct toward a
  student athlete).
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- Two new fields required: `athleteName` and `sportName` (both
  confirmed genuinely new via a corpus-wide field-id lookup before
  adding); the other four fields (`educationalInstitution`,
  `granteeName`, `compensationDescription`, `dateSigned`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: College Athlete Name, Image, and Likeness (NIL)
  Compensation — Information Sheet
  (`college_athlete_nil_compensation_info_sheet`), 8 clauses (7
  authority + 1 drafting), in the Confidentiality & IP category. Two
  new fields: `athleteName`, `sportName`.
- Corpus: 3,402 → 3,410 clauses; 451 → 452 documents. Second processed
  item of wave 102.
