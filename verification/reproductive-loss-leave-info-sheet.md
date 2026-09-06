# During employment, new document: Reproductive Loss Leave — Information Sheet

## Why this document

First processed item of wave 102 (During employment slot, 1×4 pattern
targeting six categories tied at the corpus's then-lowest count). A
scoping pass, followed by a direct clause-level grep, confirmed zero
prior coverage of this 2024 statute anywhere in the corpus, distinct
from the existing bereavement leave document.

## What this document covers

8 clauses: 2 drafting (leave-request form, acknowledgment) and 6
authority clauses, citing Government Code § 12945.6(a)-(f):

- **`reprolossleave_entitlement`** — the up-to-5-day-per-event
  entitlement and the 20-day combined cap within a 12-month period.
- **`reprolossleave_qualifying_events`** — the statutory definitions of
  a "reproductive loss event," "assisted reproduction," and "unsuccessful
  assisted reproduction."
- **`reprolossleave_eligibility_coverage`** — the 30-day employee
  tenure requirement and the five-or-more-employee employer threshold.
- **`reprolossleave_timing`** — the three-month completion window and
  its extension when combined with PDL, CFRA, or another leave.
- **`reprolossleave_pay_status`** — the leave's default unpaid status
  absent an employer policy, with existing accrued paid leave available.
- **`reprolossleave_confidentiality_and_protections`** — confidentiality,
  anti-retaliation, anti-interference, and the leave's independence from
  other statutory rights.

## Genuine findings

- **A significant correction to a common shorthand**: the research brief
  described the covered events using "IVF." The agent read the actual
  statutory text and found no reference to "IVF" at all — the term is
  "unsuccessful assisted reproduction," defined as an unsuccessful round
  of intrauterine insemination or an assisted reproductive technology
  procedure, materially broader than IVF alone. Corrected explicitly.
- **A disclosed omission from the brief**: the brief's "up to 5 days" was
  correct per event but omitted the statute's 20-day combined cap across
  multiple qualifying events within a 12-month period.
- **A disclosed extension mechanism the brief omitted**: the three-month
  completion deadline is extended to run from the end of an overlapping
  PDL, CFRA, or other leave entitlement, rather than a flat three months
  from the event in all cases.
- **A deliberately preserved silence, not resolved either way**: the
  agent noted this statute, unlike the corpus's existing bereavement
  leave document, contains no provision authorizing an employer to
  request supporting documentation — stated as an observed statutory
  silence, not as an affirmative conclusion about what that silence
  means for an employer's actual rights.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; expected and disclosed given this is a
  brand-new 2024 statute unlikely to have developed case law yet.

## Honest gap(s) disclosed

This document does not resolve whether the statute's 12-month period is
measured on a rolling or fixed basis. It does not independently define
"assisted reproductive technology procedure" beyond the statute's own
un-elaborated use of the term. It does not restate or verify the
eligibility rules of the pregnancy-disability-leave or CFRA statutes
this leave can interact with — those are addressed, where covered, in
this corpus's separate documents on those subjects. It does not address
whether State Disability Insurance may separately apply to the
underlying medical event.

## Method

Fetched Government Code § 12945.6 from `leginfo.legislature.ca.gov`
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical (169,054 bytes each, extracted statutory text
identical after whitespace normalization; raw HTML differed only in a
per-session JSF ViewState token and a debug-URL timestamp).
CourtListener's daily rate limit was already exhausted on the agent's
first lightweight test call; no case law was used, a disclosed and
legitimate choice consistent with this being a very recent (2024)
statute. All 15 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
ninety-sixth fetch (a new distinct curl User-Agent string,
"Groundtruth-96thVerify-ReproLossLeave/1.0") of the section — all 15
citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- Government Code § 12945.6 fetched twice independently by the research
  agent with distinct User-Agent strings, plus a ninety-sixth
  independent fetch during integration review; all 15 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — all citations draw on
  the same single statutory section, correctly not treated as
  independent sources of each other.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed no prior clause
  anywhere in the corpus references Government Code § 12945.6 before
  this document (a plain-text "miscarriage" match elsewhere in the
  corpus was confirmed to be an unrelated Civil Code § 1624
  lease-guaranty clause, not a false negative on this topic).
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — both fields (`employeeName`, `companyName`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Reproductive Loss Leave — Information Sheet
  (`reproductive_loss_leave_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 3,394 → 3,402 clauses; 450 → 451 documents. First processed
  item of wave 102.
