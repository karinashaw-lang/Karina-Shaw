# Estate Planning, new document: Creditor's Claim Against a Decedent's Estate — Information Sheet

## Why this document

Confirmed no dedicated document exists on the creditor-facing claims
procedure. Read the Petition for Probate document in full and every
existing clause mentioning "creditor claim" (`tod_creditor_medical_recovery`,
`probate_notice_of_hearing_and_creditor_claims`,
`podaccount_revocability_creditors`, `ancillaryprobate_administrator_authority`)
— confirmed each mentions creditor claims only in passing (a filing
period starting, or a personal representative's general powers), never
the creditor's own filing procedure, claim contents, or what happens
after filing. One partial overlap was flagged and avoided: the
existing `probate_notice_of_hearing_and_creditor_claims` clause quotes
the same "later of 4 months/60 days" deadline via the § 8100 notice
form's boilerplate text; this document's own deadline clause cites the
operative § 9100(a) directly instead of re-quoting that notice form,
minimizing duplication. Fourth and last document of wave 75.

## What this document covers

7 clauses: 2 drafting (intro/purpose, acknowledgment) and 5 authority
clauses, citing Cal. Prob. Code §§ 9000(a), (c), 9002(a)-(b), 9100(a),
9150(a)-(d), 9151(a), 9250(a)-(c), 9256, 9351, and 9353(a):

- **`creditorclaim_definition_and_bar`** (§§ 9000, 9002) — the
  statute's own broad "claim" and "creditor" definitions, and the bar
  on an untimely-filed claim.
- **`creditorclaim_filing_deadline`** (§ 9100(a)) — **the central
  finding**: the "later of" deadline structure (4 months after letters
  issue, or 60 days after notice of administration), verified as a
  two-pronged test rather than a single flat deadline, and its own
  cross-reference confirming it does NOT extend CCP § 366.2's separate
  one-year limitations period.
- **`creditorclaim_contents_and_filing`** (§§ 9150, 9151(a)) — the
  filing-and-service mechanics (both required; either omission
  invalidates the claim) and the affidavit content requirements.
- **`creditorclaim_pr_response`** (§§ 9250, 9256) — the personal
  representative's allow/reject duty and its required content, plus
  **a key finding**: a default-rejection rule — 30 days of PR/court
  silence lets the creditor treat inaction as a rejection.
- **`creditorclaim_deadline_to_sue_after_rejection`** (§§ 9351, 9353(a))
  — the requirement that a claim be filed and rejected before suing,
  and the creditor's own 90-day deadline to sue on a rejected claim —
  explicitly distinguished from the underlying debt's ordinary civil
  statute of limitations.

## Genuine corrections and findings

- **The central finding**: confirmed the claim-filing deadline is a
  "later of two dates" test, not a single flat deadline — precisely
  verified from § 9100(a)'s own text rather than assumed as a simple
  4-month rule.
- **Corrected the research prompt's own section-guess**: the brief
  suggested Chapter 2 for the substantive procedure; the agent verified
  from the Probate Code's own table of contents that Chapter 2 is
  actually just "Notice to Creditors" (§§ 9050-9054), and the
  substantive claim procedure lives across Chapters 1, 3, 4, 6, and 8.
- Confirmed the 90-day post-rejection lawsuit deadline is a distinct,
  probate-specific time limit — separate from, and in addition to,
  whatever generally applicable civil statute of limitations governs
  the underlying debt, not a substitute for it.
- Confirmed the default-rejection rule (30 days of silence = deemed
  rejection, at the creditor's own option) — a precise mechanism
  verified from the statute's text rather than assumed.
- **Caught and fixed a genuine `{{` leak during the agent's own
  self-check** (a stray `{{decedentName}}` inside a `gap` field,
  reworded to "the decedent") — confirmed clean on integration review.

## Honest gap disclosed

§ 9000(b)'s title-dispute carve-out, § 9103's late-claim petition
exception, §§ 9152-9153 (written-instrument attachment and Judicial
Council form requirements), §§ 9251-9252, 9255 (alternate PR-response
procedures), § 9352 (tolling) and § 9353(b) (office-vacancy exclusion),
and Article 2 (§ 9370, claims where an action was already pending at
death) are not restated. Code of Civil Procedure § 366.2 was not
independently verified beyond the Probate Code's own cross-reference
to it.

## Method

Fetched Cal. Prob. Code §§ 9000, 9002, 9100, 9150, 9151, 9250, 9256,
9351, and 9353 from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each section fetched twice with distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
10 citation quotes across the 5 authority clauses programmatically
confirmed as exact substrings of the confirmed text. Independently
re-verified during integration review via a third fetch (Chrome/
Windows User-Agent) of all nine cited sections — all 13 spot-checked
passages confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (one leak
  caught and fixed by the agent's own self-check before delivery,
  independently re-confirmed clean here).
- Checked source-independence disclosure logic — the two § 9000
  citations correctly disclosed as not independent of one another;
  § 9002, § 9100, § 9150/9151, § 9250/9256, and § 9351/9353 each
  correctly disclosed as independently-numbered sections; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- One new field required (`personalRepresentativeName`) — checked
  against the full corpus's existing field ids first, including the
  narrower existing `executorName` field, confirmed a genuinely
  distinct concept (personal representative covers both executor and
  administrator). Five other fields (`decedentName`, `courtName`,
  `countyOfFiling`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Creditor's Claim Against a Decedent's Estate —
  Information Sheet (`creditor_claim_against_estate_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Estate Planning category.
  1 new field.
- Corpus: 2,674 → 2,681 clauses; 350 → 351 documents. Fourth and last
  document of wave 75.
- **Wave 75 complete**: 2,655 → 2,681 clauses (26 new); 347 → 351
  documents (4 new: Costa-Hawkins Rental Housing Act and Good Neighbor
  Fence Act [Real Estate]; Special Administrator and Creditor's Claim
  Against a Decedent's Estate [Estate Planning]).
