# Estate Planning, new document: Removal of a Trustee — Information Sheet

## Why this document

Second and final processed item of wave 123 (Estate Planning slot).
This item was re-run after the first attempt was lost to a mid-wave
container restart; the re-launched agent had no memory of the earlier
attempt and independently arrived at the same well-scoped topic area.
The agent's own duplication check caught a genuine near-overlap before
drafting: a planned clause on filling a trustee vacancy (Prob. Code
§15660) would have substantially restated the existing
`trust_successor_trustee_vacancy` clause in the corpus's Revocable
Living Trust document, so the agent dropped that clause and built a
`trustremv_vacancy_circumstances` clause on the distinct question of
what creates a vacancy (§15643) instead, with its gap field explicitly
cross-referencing the existing §15660 clause rather than re-quoting it.
Personally reconfirmed via corpus search: zero prior mentions of
"15642" or "15643" anywhere in the corpus, and confirmed the existing
`trust_successor_trustee_vacancy` clause addresses filling a vacancy —
a distinct question from what creates one.

## What this document covers

9 clauses: 2 drafting (declaration, signature/certification) and 7
authority clauses, citing Prob. Code § 15642(a), (b)(1)-(5), (b)(6),
(b)(7)-(9), (c), (d), (e), (f), § 15643, § 17200(b)(10)-(11), (c):

- **`trustremv_removal_pathways`** — the three pathways by which a
  trustee may be removed.
- **`trustremv_statutory_grounds`** — the general statutory grounds for
  court-ordered removal.
- **`trustremv_disqualified_person_ground`** — the distinct removal
  ground for a sole trustee who is a §21380(a) disqualified person.
- **`trustremv_professional_fiduciary_license`** — the court's
  own-motion authority to remove an unlicensed professional fiduciary
  trustee.
- **`trustremv_vacancy_circumstances`** — the eight circumstances that
  create a vacancy in the office of trustee.
- **`trustremv_cost_shifting`** — the cost-shifting rules tied to
  specific findings in a removal proceeding.
- **`trustremv_interim_protective_relief`** — the court's authority to
  protect trust property while a removal petition is pending.

## Genuine findings

- **A self-caught, genuine near-duplication avoided before drafting**:
  the agent's planned §15660 clause (filling a vacancy) was dropped
  after confirming it would substantially restate the existing
  `trust_successor_trustee_vacancy` clause; the delivered
  `trustremv_vacancy_circumstances` clause instead covers the distinct
  question of what creates a vacancy, with an explicit cross-reference
  disclosed in its gap field.
- **A disclosed structural connection to another existing corpus
  document**: the `trustremv_disqualified_person_ground` clause's gap
  field explicitly distinguishes this removal ground from the
  corpus's existing Disqualified-Transferee Donative Transfer
  Presumption information sheet, which addresses §21380 itself as a
  distinct question from removal from the office of trustee.
- **A disclosed, deliberate choice not to reproduce statutory
  exceptions verbatim**: the disqualified-person clause's gap
  explicitly discloses that the three statutory exceptions in
  §15642(b)(6)(A)-(C) (including the Certificate of Independent
  Review requirements) are not quoted.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not specify a filing fee, notice period, or
petition form for a removal proceeding, does not define "unfit to
administer the trust" or "excessive" compensation, does not address
how the removal grounds interact with a no-contest or exculpatory
clause, does not reproduce the three statutory exceptions to the
disqualified-person removal ground or the Certificate of Independent
Review's required content, does not define "professional fiduciary"
or reproduce Bus. & Prof. Code §6500 et seq., does not address how a
vacancy is filled once created (deferred to the existing corpus
clause), does not create a general fee-shifting rule beyond the two
specific findings the statute ties fees to, and does not specify a
standard of proof or procedure for interim protective relief.

## Method

Fetched Prob. Code §§15642, 15643, and 17200 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical (one
transient connection reset on a first attempt, resolved on retry — the
same known transient relay issue independently encountered and
resolved elsewhere this wave). CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 11 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-165thVerify-TrusteeRemoval/1.0") of all three
sections — all 11 citation instances confirmed clean on direct
normalized-whitespace substring match, zero extraction artifacts
encountered. The three removal pathways, the statutory grounds list,
the disqualified-person ground, the professional-fiduciary
own-motion authority, the eight vacancy circumstances, and the
cost-shifting and interim-relief provisions were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All three Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-sixty-fifth independent fetch during integration
  review; all 11 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `trustremv_` prefix has zero collisions. Independently
  reconfirmed zero prior corpus mentions of "15642" or "15643," and
  independently confirmed the existing `trust_successor_trustee_vacancy`
  clause addresses a distinct question (filling a vacancy) from this
  document's vacancy-circumstances clause (what creates one).
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new fields required — all ten fields (`trustName`,
  `originalTrustDate`, `trusteeName`, `successorTrusteeName`,
  `beneficiaryName`, `petitionerName`, `countyOfFiling`,
  `courtCaseNumber`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Removal of a Trustee — Information Sheet
  (`trustee_removal_grounds_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the Estate Planning category. No new fields.
- Corpus: 4,035 → 4,044 clauses; 519 → 520 documents. Second and final
  processed item of wave 123.

## Wave 123 summary

Wave 123 followed the established 2×2 pattern, targeting Hiring and
Estate Planning — the two categories tied lowest after wave 122's
rotation, both last touched in wave 120. Both agents ran careful
section-number-specific duplication checks before landing on genuinely
open topics: Transportation Network Company Driver Background Check
Requirements (Pub. Util. Code §§5431/5445.2/5445.3, after ruling out
two already-covered candidates) and Removal of a Trustee (Prob. Code
§§15642/15643/17200, after self-catching and avoiding a near-overlap
with an existing vacancy-filling clause before drafting). This wave's
integration review also encountered and resolved a transient
leginfo.legislature.ca.gov relay outage during the Hiring document's
independent re-verification fetch — confirmed via the environment's
own proxy status log as a genuine transient issue, resolved with a
backoff retry rather than treated as a verification failure. This
wave's Estate Planning item was also independently re-run in full
after its first attempt was lost mid-wave to a container restart,
with no loss of the wave's other (already-committed) work. Per the
established alternation, wave 124 should return to a 1×4 pattern.
