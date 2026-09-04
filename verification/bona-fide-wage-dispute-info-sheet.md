# Ending employment, new document: Bona Fide Wage Dispute — Undisputed Portion Must Still Be Paid

## Why this document

First of wave 78's four documents (Business Formation + Family Law
closed with wave 77; wave 78 returns to a 1×4 pattern across Hiring,
During employment, Confidentiality & IP, and Ending employment, per
the established strict-alternation pattern).

Read the existing Final Paycheck Delivery Method and Location, Final
Wage Payment / Waiting-Time Penalty Demand Letter, and Prohibition on
Requiring a Release as a Condition of Wage Payment documents in full.
Confirmed by grep that "206" (as Labor Code § 206) and "bona fide
dispute"/"undisputed" do not already appear anywhere describing § 206's
own pay-the-undisputed-portion rule: the delivery-method document
covers only how/where wages are delivered; the waiting-time-penalty
document covers only the deadline and penalty for late payment of
undisputed wages; the release-prohibition document already fully
covers § 206.5 (the separate rule against conditioning payment of
conceded wages on a release), including a California Court of Appeal
decision on the bona-fide-dispute distinction in that context — but
none of the three covers § 206(a)'s own core rule. Confirmed
non-duplicative; scoped as a new standalone document (not a gap-fix)
because § 206 governs a substantively different question — what to do
about a disputed amount — from the delivery-mechanics and
lateness-penalty subjects the adjacent documents already cover.

## What this document covers

5 clauses: 3 drafting (intro/scope, amounts-claimed-conceded-disputed
recital, acknowledgment) and 2 authority clauses, citing Cal. Labor
Code § 206(a) and § 206(b):

- **`bonafidedispute_core_rule`** (§ 206(a)) — **the central finding**:
  an employer that disputes part of the wages owed to a discharged or
  resigning employee must still pay, without condition and within the
  otherwise-applicable deadline, whatever amount it concedes is due;
  paying the conceded amount does not waive or limit the employee's
  remedies for the disputed balance.
- **`bonafidedispute_commissioner_remedy`** (§ 206(b)) — one specific
  remedy for the disputed balance: a Labor Commissioner
  investigation-and-hearing determination, a 10-day payment window
  once notice issues, and treble damages for a willful failure to pay
  within that window despite the ability to pay — explicitly disclosed
  as one of several possible remedies, not the only one.

## Genuine corrections and findings

- **The central finding**: confirmed precisely from § 206(a)'s own
  text that the employer's obligation to pay the conceded portion is
  unconditional and does not require, or wait for, resolution of the
  dispute over the rest — correcting the common assumption that an
  employer may lawfully withhold an entire final paycheck while any
  part of it remains disputed.
- Confirmed § 206(b)'s treble-damages remedy is conditioned on the
  employer having the ability to pay AND acting willfully within the
  10-day window after a Labor Commissioner determination — not a
  strict-liability penalty.
- Correctly declined to restate § 206.5 (already fully covered by the
  existing release-prohibition document) or the bona-fide-dispute case
  law already discussed there — cross-referenced instead, avoiding
  duplicative re-verification of content already shipped.
- Confirmed § 206(a)'s "all remedies...as to any balance claimed"
  language is broader than the single Labor Commissioner pathway
  described in § 206(b) — the clause explicitly discloses that other
  remedies (e.g., a civil action) exist and are not described here.

## Honest gap(s) disclosed

The statute does not define what makes a wage dispute "bona fide" as
opposed to a pretextual withholding, and this document does not
attempt to draw that line. The Labor Commissioner's investigation-and-
hearing procedure itself is not described. How § 206(a)'s "within the
time set by this article" deadline interacts with the specific
discharge/quit deadlines of Labor Code §§ 201 and 202 is not worked
through — left to this project's existing delivery-method and
waiting-time-penalty documents.

## Method

Fetched Cal. Labor Code § 206 from `leginfo.legislature.ca.gov`, fetched
twice by the research agent with distinct User-Agent strings (Chrome/
Windows and Safari/macOS), confirmed byte-identical after whitespace
normalization. Both citation quotes across the 2 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a third fetch (a distinct curl User-Agent string,
"Groundtruth-Verification-Bot/3.0") — the first attempt hit a transient
proxy connection reset, resolved on retry — confirming both quotes as
exact contiguous substrings of that third fetch.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the § 206(a)/§ 206(b)
  pair correctly disclosed as not independent of one another (same
  statutory section); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Acknowledgment") match titles used elsewhere in the corpus —
  confirmed this is the corpus's established, intentional pattern
  (dozens of documents reuse these generic boilerplate titles on
  distinct, uniquely-id'd drafting clauses), not a genuine collision.
- Two new fields required (`concededAmount`, `disputedAmount`) —
  checked against the full corpus's existing field ids first to
  confirm no equivalent field already existed. Four fields
  (`employeeName`, `companyName`, `terminationDate`,
  `unpaidWagesAmount`) reused from the existing corpus (121, 179, 17,
  and 5 prior documents respectively), all contextually appropriate
  as-is.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Bona Fide Wage Dispute — Undisputed Portion Must Still
  Be Paid (`bona_fide_wage_dispute_info_sheet`), 5 clauses (2 authority
  + 3 drafting), in the Ending employment category. 2 new fields.
- Corpus: 2,738 → 2,743 clauses; 359 → 360 documents. First document of
  wave 78.
