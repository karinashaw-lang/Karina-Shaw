# Business Formation, new document: Preemptive Rights of Shareholders — Information Sheet

## Why this document

Third processed item of wave 110 (Business Formation slot). Cumulative
voting, director removal, CRULPA general-partner liability, and the
FTB suspension/revivor overlap (already found to fold into
`soi_suspension_consequence`) were all confirmed already covered.
Voting trusts were reconsidered and reconfirmed to have only incidental
mentions inside inspection-rights and derivative-suit clauses, not
dedicated treatment, but the agent found preemptive rights of
shareholders a cleaner, fully unaddressed topic and confirmed zero
prior coverage of "preemptive," "subscribe," or "dilution" via both
document-level and clause-level checks.

## What this document covers

5 clauses: 2 drafting (intro, closing) and 3 authority clauses, citing
Corp. Code §§ 406, 204(a)(2), and 204(a):

- **`preempt_default_no_rights`** — the default rule that a board may
  issue new shares or securities without first offering them to
  existing shareholders, absent contrary articles language.
- **`preempt_articles_may_grant`** — preemptive rights as one of the
  optional provisions California law lists that the articles of
  incorporation may include.
- **`preempt_must_be_express`** — the requirement that such an articles
  provision be express; silence or ambiguity does not create the
  right.

## Genuine findings

- **A significant correction to the agent's own initial expectation**:
  the agent expected § 406 to contain a fuller two-part rule with a
  second clause elaborating on an opt-in mechanism. The actual, complete
  text of § 406 is a single sentence with no such second clause — the
  mechanics of an opt-in preemptive right, where one is created, come
  entirely from § 204(a)(2) and the articles' own drafting, not from
  any further statutory elaboration. Corrected and disclosed as a
  genuine statutory silence rather than an assumed omission.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not address whether any particular corporation's
actual articles already displace the default rule, does not address
preemptive-rights doctrine for entities other than California stock
corporations (e.g., LLC or limited partnership interests), does not
supply drafting language, a proportionality formula, or an exercise
period for an opt-in preemptive-rights provision since the statute
itself supplies none, and does not address how a court would
characterize non-standard or ambiguous articles language as "express"
or not.

## Method

Fetched Corp. Code §§ 406 and 204 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed identical (532 and 5,571 normalized characters
respectively). CourtListener's daily rate limit was already exhausted
on the agent's test call; no case law was used, a disclosed and
legitimate choice. All 3 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings, verified via a
full schema validation pass.

Independently re-verified during integration review via a
one-hundred-and-twenty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-126thVerify-Preemptive/1.0") of both sections —
all 3 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
single-sentence structure of § 406 (no second implementing clause) was
independently reconfirmed present in the freshly fetched text.

## Verification

- Both Corporations Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-twenty-sixth independent fetch during integration
  review; all 3 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each authority clause
  cites a single distinct statutory subdivision; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either). Independently reconfirmed this document is
  distinct from the existing Articles of Incorporation, Certificate of
  Amendment, and Stock Certificates documents, as the intro clause
  itself explicitly distinguishes.
- Checked every citation's `case` field for emptiness — all 3
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `preparerName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Preemptive Rights of Shareholders — Information Sheet
  (`preemptive_rights_of_shareholders_info_sheet`), 5 clauses (3
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 3,655 → 3,660 clauses; 480 → 481 documents. Third processed
  item of wave 110.
