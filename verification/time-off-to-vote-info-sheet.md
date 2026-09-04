# During employment, new document: Time Off to Vote — Information Sheet

## Why this document

First document of wave 87, chosen via a scoping agent's category-gap
survey. Grepped the corpus for "voting," "time off to vote," and
"14000" — confirmed every "voting" hit anywhere in the corpus is
unrelated corporate/LLC shareholder governance or HOA board-election
voting, never employment time off to vote. Confirmed a real,
non-duplicative gap for one of the most commonly needed California
workplace notices.

## What this document covers

7 clauses: 2 drafting (purpose/scope, sample workplace posting text)
and 5 authority clauses, citing Cal. Elec. Code §§ 14000(a)-(c),
14001, and 14002:

- **`votingleave_entitlement_condition`** (§ 14000(a)) — the
  entitlement trigger: insufficient time outside working hours to vote
  at a statewide election.
- **`votingleave_paid_time_amount_and_timing`** (§ 14000(b)) — the
  two-hour paid cap and default beginning-or-end-of-shift timing,
  subject to mutual agreement otherwise.
- **`votingleave_advance_notice_requirement`** (§ 14000(c)) — the
  employee's duty to give at least two working days' notice, triggered
  by knowledge or reason to believe as of the third working day before
  the election.
- **`votingleave_posting_requirement`** (§ 14001) — the employer's
  duty to post notice conspicuously not less than 10 days before every
  statewide election.
- **`votingleave_applies_public_and_private_employers`** (§ 14002) —
  extension of §§ 14000, 14001, and 14004 to public agencies as well
  as private employers.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  assumed the relevant chapter was §§ 14000-14003. The agent
  independently confirmed the "Privileges of Voters" chapter actually
  runs §§ 14000-14004, and that § 14003 is not about voting leave at
  all — it is an unrelated militia-duty exemption on election day.
  Correctly excluded § 14003 entirely rather than folding it in as if
  it were part of the leave entitlement.
- Identified § 14004 (added 2019, effective January 1, 2020, by AB 17)
  as a related but genuinely distinct right — barring an employer from
  requiring/requesting an employee bring a vote-by-mail ballot to work
  or vote it at work — and correctly declined to build it into an
  authority clause outside the requested entitlement/amount/notice/
  posting scope, instead disclosing it narratively in the purpose
  clause and relevant gap fields.
- Confirmed the 2019 amendment history: Stats. 2019, Ch. 223 (AB 17)
  amended § 14002 (to add § 14004 to its coverage list) and added new
  § 14004; §§ 14000 and 14001 themselves have not been amended since
  their 1994 enactment.
- Correctly declined to reuse an existing corpus field labeled
  "electionDate" — confirmed by inspection that field is scoped to a
  different concept (Alternative Workweek Schedule elections), not a
  statewide election, and avoided a semantically wrong field reuse.
- The sample posting text clause explicitly labels itself as not the
  official state-issued poster, since § 14001 does not itself prescribe
  required wording or format — an accurate, non-overstated disclosure.

## Honest gap(s) disclosed

§ 14004's vote-by-mail-ballot-at-work restriction is named but not
independently verified or quoted. What governs voting-time timing if
the employee and employer do not reach a mutual agreement on
scheduling (beyond the default start/end-of-shift rule) is not stated.
Whether time beyond two hours may be taken unpaid is not addressed.
This document does not determine whether a specific employee has
sufficient time to vote outside working hours, or whether a specific
election qualifies as a "statewide election."

## Method

Fetched Cal. Elec. Code §§ 14000, 14001, and 14002 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization (including preserving the curly-apostrophe
character in "two working days' notice"). All 5 citation quotes across
the 5 authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a thirty-sixth fetch (a distinct curl
User-Agent string, "Groundtruth-36thVerify-VotingLeave/1.0") of all
three sections — all 5 quotes confirmed clean.

## Verification

- All three statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  thirty-sixth independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of § 14000
  (entitlement, amount/timing, notice) versus the genuinely independent
  §§ 14001 and 14002; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 5
  populated with proper case/citation identifier strings.
- No new fields required — both fields (`companyName`, `employeeName`)
  reused from the existing corpus (193 and 133 prior documents
  respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Time Off to Vote — Information Sheet
  (`time_off_to_vote_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 2,969 → 2,976 clauses; 391 → 392 documents. First addition of
  wave 87.
