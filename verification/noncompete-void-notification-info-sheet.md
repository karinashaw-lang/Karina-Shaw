# Confidentiality & IP, new document: Noncompete Void Notification — Information Sheet and Notice Template

## Why this document

First document of wave 82. Read the existing Non-Compete Agreement
document's full clause set — confirmed `nc_enforceability` quotes and
discusses § 16600.1(a)'s general prohibition and narrow-tailoring
rule, but nowhere quotes or explains § 16600.1(b)-(c), the employer's
separate notice duty and its enforcement consequence. Confirmed by
grep that "16600.1" had only that single existing citation to
subdivision (a). Confirmed non-duplicative.

Shipped as a standalone document rather than a gap-fix into the
existing Non-Compete Agreement document: the delivered content is
structurally a notice TEMPLATE declaring a clause void, which serves
an opposite purpose from a contract template that creates a
restriction — merging the two would be substantively confusing within
one document.

## What this document covers

6 clauses: 3 drafting (notice recital, delivery statement, signature)
and 3 authority clauses, citing Cal. Bus. & Prof. Code § 16600.1(b)(1),
(b)(2), and (c):

- **`ncvoidnotice_duty`** (§ 16600.1(b)(1)) — **the central finding**:
  the affirmative notice duty, with the exact confirmed deadline of
  February 14, 2024, covering current employees and former employees
  employed after January 1, 2022 whose contract includes a
  noncompete clause that doesn't satisfy a Chapter exception.
- **`ncvoidnotice_delivery_req`** (§ 16600.1(b)(2)) — the required
  form (written, individualized — not a general announcement) and the
  statute's own dual-channel delivery requirement (both the last
  known address AND the email address).
- **`ncvoidnotice_enforcement`** (§ 16600.1(c)) — a violation of the
  section (including the notice duty, not just the underlying
  prohibition) is by the statute's own terms an act of unfair
  competition under Chapter 5 (§ 17200 et seq.).

## Genuine corrections and findings

- **The central finding**: confirmed the exact statutory deadline
  (February 14, 2024) and covered-employee definition directly from
  the statute's own text, distinguishing this affirmative notice duty
  from the general noncompete prohibition already covered elsewhere in
  the corpus.
- Confirmed the delivery requirement's "and" conjunction calls for
  both channels (last known address AND email address), not either —
  and honestly disclosed the statute's own text does not resolve what
  satisfies the requirement when one channel is unknown to the
  employer.
- Confirmed § 16600.1(c)'s enforcement consequence reaches a violation
  of the notice duty in subdivision (b), not just the underlying
  prohibition in subdivision (a) — correctly declined to summarize
  what remedies Chapter 5 (§ 17200 et seq.) itself provides, disclosed
  as a separate body of law not researched here.

## Honest gap(s) disclosed

What satisfies the delivery requirement when an employee's email
address is unknown to the employer is not resolved — the statute's own
text does not address it. Whether or how the notice duty applies to
employees hired after the one-time 2024 deadline is not resolved.
Chapter 5's own remedies, penalties, and procedures for an act of
unfair competition (§ 17200 et seq.) are not summarized — a separate
body of law outside this document's scope.

## Method

Fetched Cal. Bus. & Prof. Code § 16600.1 from
`leginfo.legislature.ca.gov`, fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 3 citation quotes across the 3 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a sixteenth fetch (a distinct curl User-Agent string,
"Groundtruth-SixteenthVerify-NCVoidNotice/1.0") — all 3 quotes
confirmed clean.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a sixteenth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that its citation is one subdivision of a single statutory
  section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Signature") matches a title used elsewhere in
  the corpus — confirmed as the established boilerplate-title reuse
  pattern, not a genuine collision.
- One new field required (`employeeEmail`) — checked against the full
  corpus's existing field ids first, confirmed no equivalent field
  already existed (zero prior use — a genuine first for the corpus).
  Five fields (`companyName`, `employeeName`, `employeeAddress`,
  `agreementDate`, `noticeDate`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Noncompete Void Notification (Bus. & Prof. Code
  § 16600.1(b)) — Information Sheet and Notice Template
  (`noncompete_void_notification_info_sheet`), 6 clauses (3 authority
  + 3 drafting), in the Confidentiality & IP category. 1 new field.
- Corpus: 2,840 → 2,846 clauses; 373 → 374 documents. First addition of
  wave 82.
