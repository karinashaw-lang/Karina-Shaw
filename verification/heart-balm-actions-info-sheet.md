# Family Law, new document: Abolished Heart-Balm Actions in California — Information Sheet

## Why this document

Third processed item of wave 128 (Family Law slot, 1×4 pattern). The
agent ruled out eight candidates via specific section-number and term
greps before landing here: transmutation of property (Fam. Code
§§850-853), the wage/earnings assignment for support (Fam. Code
§5230 et seq., already quoted in an existing clause), marriage
license/solemnization requirements (Fam. Code §§300, 350+), DVRO
firearm relinquishment (Fam. Code §6389), coercive control as
statutory abuse (Fam. Code §6320), custody evaluations (Fam. Code
§3111), the putative spouse doctrine (Fam. Code §2251), and
visitation after the death of a parent (Fam. Code §3102) were all
confirmed already substantively covered. The chosen topic — the
1939 statutory bar on heart-balm actions (Civ. Code §43.5: alienation
of affection, criminal conversation, seduction of a person over the
age of legal consent, and breach of promise of marriage) paired with
the related gift-recovery statute (Civ. Code §1590) — was confirmed
genuinely open: zero prior corpus hits on §43.5, and the apparent
hits on bare "1590" were confirmed to be false-positive substring
collisions with Corp. Code §§159xx (RULPA sections), not genuine
matches.

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority
clauses, citing Civ. Code §43.5 (full list, and separately (a)-(b),
(c), (d)), §1590 (the recovery right and the "just" amount standard),
and both sections' shared 1939 enactment history line:

- **`heartbalm_statute_overview`** — the full four-item list of barred
  claims.
- **`heartbalm_alienation_and_conversation`** — alienation of affection
  and criminal conversation specifically.
- **`heartbalm_seduction`** — seduction of a person over the age of
  legal consent.
- **`heartbalm_breach_of_promise`** — breach of promise of marriage.
- **`heartbalm_gift_recovery_survives`** — the separate, surviving
  right to recover a gift given because marriage was expected.
- **`heartbalm_gift_just_amount_standard`** — the discretionary "found
  to be just" recovery standard, not automatic full value.
- **`heartbalm_common_1939_enactment`** — both statutes' shared 1939
  enactment citation.
- **`heartbalm_scope_named_torts_only`** — the bar's text is limited to
  the four named claims and is silent on other legal theories.

## Genuine findings

- **A confirmed false-positive substring collision, caught and
  resolved before drafting**: a raw grep for "1590" returned 89 hits,
  all traced by the agent to Corp. Code §§159xx (limited-partnership
  formation clauses in Business Formation), not the Civil Code §1590
  this document actually cites — independently reconfirmed during
  integration review.
- **A disclosed, deliberate choice not to assert an unverified
  legislative-intent narrative**: the shared-enactment clause's gap
  explicitly declines to assert why the Legislature paired the two
  statutes (e.g., a "traded one remedy for another" theory), stating
  only the verified fact that both carry the identical 1939 enactment
  line.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone, and each gap
  field names exactly which undefined term (alienation of affection,
  criminal conversation, seduction, the age of legal consent) has
  historically depended on case law not fetched here.
- **A disclosed textual observation on an unaddressed scenario**: the
  gift-recovery clause's gap notes the statute's text covers only a
  marriage called off by the donee or by mutual consent — not a
  marriage called off unilaterally by the donor — a gap in the
  statute's own coverage rather than an interpretive gloss.

## Honest gap(s) disclosed

This document does not define "alienation of affection," "criminal
conversation," "seduction," or "breach of promise of marriage," does
not identify which statute sets the age of legal consent, does not
address a claim involving a person under that age, does not address a
marriage called off unilaterally by the donor, does not state a
limitations period for a gift-recovery claim, does not list what
circumstances a court or jury may consider in finding a "just"
recovery amount, and does not determine what other causes of action
(contract, replevin, fraud) might remain available on the same
underlying facts, which the statute's text does not address one way
or the other.

## Method

Fetched Civ. Code §43.5 and §1590 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings (one retry needed on a transient connection reset during the
second §43.5 fetch, the same known transient-relay issue independently
encountered and resolved elsewhere in this project), confirmed
byte-identical after whitespace normalization. CourtListener's daily
quota was already exhausted (HTTP 429) on the agent's test call; no
case law was used or fabricated. All 9 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-eightieth fetch (a new distinct curl User-Agent
string, "Groundtruth-180thVerify-HeartBalmActions/1.0") of both
sections — all 9 citation instances confirmed clean on direct
normalized-whitespace substring match, with no fallback needed. The
four-item bar list, each individually cited subdivision, the
gift-recovery right, the "just" amount standard, and both sections'
shared 1939 enactment line were all independently reconfirmed present
in the freshly fetched text.

## Verification

- Both Civil Code sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  eightieth independent fetch during integration review; all 9
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `heartbalm_` prefix has zero collisions. Ran
  section-number-specific greps for "43.5" and "1590" across the full
  corpus; §43.5 had zero hits and every "1590" hit was independently
  reconfirmed as a false-positive substring collision with Corp. Code
  §§159xx (RULPA), not genuine coverage.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new fields required — all four fields (`party1Name`,
  `party2Name`, `dateSigned`, `cityState`) reused from the existing
  corpus, matching the house style of the closest analogous existing
  document (the common law marriage non-recognition information
  sheet).
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Abolished Heart-Balm Actions in California —
  Information Sheet (`heart_balm_actions_info_sheet`), 10 clauses (8
  authority + 2 drafting), in the Family Law category. No new fields.
- Corpus: 4,187 → 4,197 clauses; 534 → 535 documents. Third processed
  item of wave 128.
