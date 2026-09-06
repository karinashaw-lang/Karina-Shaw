# Ending employment, new document: Stay-or-Pay and Training Repayment Provisions at Termination — Information Sheet

## Why this document

Fourth and final processed item of wave 124 (Ending employment slot,
1×4 pattern). The agent's first candidate, the Lab. Code §1053
service-letter safe harbor, was found already covered across three
existing clauses in two documents, so the agent pivoted away. The
chosen topic — California's brand-new "stay-or-pay" statute (Bus. &
Prof. Code §16608 and Lab. Code §926, added by AB 692, Stats. 2025,
Ch. 703, effective for contracts entered into on or after January 1,
2026) — was confirmed genuinely open: the only related corpus hit
("16608") was confirmed by context to be an unrelated Probate Code
trust-protector provision, and a search for "stay-or-pay," "quit fee,"
and "training repayment" found the general, decades-old Lab. Code §221
wage-clawback framework in a different document (`wage_repayment_clawback_info_sheet`,
Hiring category), which explicitly does not address this new 2026
statute. Personally reconfirmed via corpus search: zero genuine prior
mentions of "16608" in a Business & Professions Code context anywhere
in the corpus.

## What this document covers

10 clauses: 2 drafting (declaration, acknowledgment) and 8 authority
clauses, citing Bus. & Prof. Code § 16608(a)(2), (a)(4), (a)(7),
(a)(11), (b)(1), (b)(2)(A), (b)(2)(B), (b)(2)(C), (b)(2)(D), (b)(2)(E),
(c), (d), and Lab. Code § 926(a), (b), (c), (d):

- **`stayorpay_core_prohibition`** — the core prohibition on
  termination-triggered debts, fees, and penalties.
- **`stayorpay_key_definitions`** — the broad statutory definitions of
  "debt," "penalty, fee, or cost," "worker," and "employer."
- **`stayorpay_void_and_effective_date`** — the §16600 voidness rule
  and the January 1, 2026 contracting-date limitation.
- **`stayorpay_transferable_credential_exception`** — the five-
  condition exception for transferable-credential tuition repayment.
- **`stayorpay_signing_bonus_exception`** — the five-condition
  exception for a discretionary signing bonus with a retention period.
- **`stayorpay_other_statutory_exceptions`** — the government-loan-
  program, apprenticeship, and residential-property exceptions.
- **`stayorpay_civil_remedies`** — the private civil action and
  $5,000-per-worker statutory-damages floor.
- **`stayorpay_cumulative_with_other_law`** — the statute's
  cumulative-with-other-law provision.

## Genuine findings

- **A disclosed, load-bearing new-law finding**: every relevant clause
  explicitly discloses that this is a genuinely new statute (effective
  January 1, 2026, roughly eight months before the checked date), with
  no case law, DLSE opinion letters, or appellate interpretation yet
  available — each clause grounds its statements in the statute's own
  text alone rather than implying settled interpretation exists.
- **A disclosed structural distinction from an existing corpus
  document**: the topic-discovery process confirmed the general Lab.
  Code §221 wage-clawback framework (a different, decades-old statute
  in a different document) does not address this new stay-or-pay law.
- **A disclosed, deliberate choice not to resolve fact-specific
  questions the statute leaves open**: multiple gap fields explicitly
  decline to characterize whether a specific payment is "discretionary
  or unearned," what happens when a contract satisfies some but not
  all of an exception's conditions, or what result follows for a
  pre-2026 contract.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call
  (and, independently, no litigation could plausibly have reached a
  published opinion yet given the statute's recency).

## Honest gap(s) disclosed

This document does not address a repayment term triggered by an event
other than termination of the work relationship "with a specific
employer," does not resolve what law (if any) governs a materially
identical provision in a pre-2026 contract, does not restate the full
definitional list beyond the four terms most central to the
prohibition and its trigger (leaving "debt collector," "freelance
worker," "misconduct," "transferable credential," and "training
provider" to their own cross-referenced or undefined terms), does not
address partial compliance with a multi-condition exception, does not
specify class-certification or representative-action procedures under
§926(b), and does not exhaustively catalog the "including, but not
limited to" cumulative-remedies or residential-property-exception
lists.

## Method

Fetched Bus. & Prof. Code §16608 and Lab. Code §926 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
excluding a dynamic per-request debug-timestamp artifact. One
transient connection failure on the first §16608 fetch attempt was
resolved with a short backoff retry — the same known transient relay
issue independently encountered and resolved elsewhere this wave.
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice
that is also substantively unsurprising given the statute's recency.
All 16 citation instances programmatically confirmed by the research
agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-169thVerify-StayOrPay/1.0") of both sources — all
16 citation instances confirmed clean on direct normalized-whitespace
substring match; 4 of the 16 required the standard whitespace-stripped
fallback check (the familiar subdivision-marker-spacing artifact),
confirmed benign. The core prohibition, the key definitions, the
voidness rule and effective-date limitation, all five statutory
exceptions, the civil remedy provisions, and the cumulative-with-
other-law provisions were all independently reconfirmed present in the
freshly fetched text.

## Verification

- Both primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-sixty-
  ninth independent fetch during integration review; all 16 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or one subdivision each
  from two different statutes, correctly disclose their
  source-independence status; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `stayorpay_` prefix has zero collisions. Independently
  reconfirmed the corpus's "16608" hits are all false positives from
  an unrelated Probate Code trust-protector provision, and reconfirmed
  the agent's pivot rationale (the existing service-letter safe-harbor
  coverage) against the corpus.
- Checked every citation's `case` field for emptiness — all 16
  populated with proper citation identifier strings.
- No new fields required — all five fields (`employeeName`,
  `companyName`, `repaymentTriggerDescription`, `repaymentAmount`,
  `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Stay-or-Pay and Training Repayment Provisions at
  Termination — Information Sheet
  (`stay_or_pay_training_repayment_termination_info_sheet`), 10
  clauses (8 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 4,076 → 4,086 clauses; 523 → 524 documents. Fourth and final
  processed item of wave 124.

## Wave 124 summary

Wave 124 followed the established 1×4 pattern, targeting
Confidentiality & IP, Business Formation, During employment, and
Ending employment — four categories rotated toward after wave 123's
2×2 rotation, prioritizing the two categories least recently touched
(wave 121) alongside two from wave 122's set. All four agents ran
section-number-specific duplication checks before landing on genuinely
open topics: Occupational Noise Exposure and Hearing Conservation
(8 CCR §§5095-5100, after ruling out two already-covered candidates),
California Corp. Code §2115 Pseudo-Foreign Corporation (after
confirming no overlap with the existing Foreign Entity Qualification
document), Computer Fraud and Abuse Act Civil Remedy (18 U.S.C.
§1030(g), after ruling out four already-covered candidates), and
Stay-or-Pay and Training Repayment Provisions at Termination (Bus. &
Prof. Code §16608 / Lab. Code §926, a genuinely new January 2026
statute, after ruling out an already-covered candidate). Each surfaced
a genuine finding: a disclosed textual observation that the noise
standard's industry exemption does not name the exposure-limits
section, an explained source table-formatting artifact strengthened
during integration review (Occupational Noise); a careful structural
distinction from an existing qualification-requirement document
(Pseudo-Foreign Corporation); a disclosed, carefully-excluded editorial
footnote-marker artifact confirmed present in two independent sources
(CFAA Civil Remedy); and the discipline of grounding an entire document
in a statute barely eight months old with explicit disclosure of the
resulting absence of case law (Stay-or-Pay). This wave also
independently encountered and resolved two transient
leginfo.legislature.ca.gov connectivity issues during research and
verification, both confirmed as genuine transient relay problems and
resolved with backoff retries rather than treated as verification
failures. Per the established alternation, wave 125 should return to
a 2×2 pattern.
