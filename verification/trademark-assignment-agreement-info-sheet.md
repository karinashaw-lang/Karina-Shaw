# Confidentiality & IP, new document: Trademark Assignment Agreement — Information Sheet

## Why this document

The existing Trademark License Agreement document covers a license —
a grant of permission to use a mark while ownership stays with the
licensor. This document covers a genuinely distinct transaction: a
transfer of ownership, governed by its own statutory rules that a
license does not carry (the goodwill requirement chief among them).

## What this document covers

8 clauses: 2 drafting (assignment declaration, signature/
acknowledgment) and 6 authority clauses:

- **`tmassign_statutory_basis`** (15 U.S.C. § 1060(a)(1)) — the
  requirement that an assignment carry the goodwill of the business
  connected with the mark.
- **`tmassign_itu_restriction`** (15 U.S.C. § 1060(a)(1)) — the
  restriction on assigning an intent-to-use application before use is
  shown, with a successor-business exception.
- **`tmassign_in_gross_doctrine`** (15 U.S.C. § 1060(a)(1)) — the
  "assignment in gross" doctrine and its consequences (invalidity,
  loss of priority), described as a widely-recognized construction of
  the goodwill requirement, honestly disclosed as not independently
  case-law-verified this session.
- **`tmassign_writing_requirement`** (15 U.S.C. § 1060(a)(3)) — the
  requirement that an assignment be in writing.
- **`tmassign_recording`** (15 U.S.C. § 1060(a)(4)) — the 3-month
  recording window with the USPTO and its voidness-against-a-
  subsequent-purchaser consequence, with an honest note that recording
  is not itself an examination of the assignment's validity.
- **`tmassign_ca_state_law`** (Bus. & Prof. Code § 14220) — California's
  own parallel assignment statute for state-registered marks, mirroring
  the federal structure.

## Genuine corrections and findings

- Corrected an initial assumption that the intent-to-use assignment
  restriction lives in a separately numbered subsection. Direct review
  shows it is actually the second sentence of § 1060(a)(1) itself, the
  same subsection as the general goodwill rule — handled with an
  explicit "not independent" source disclosure.
- Confirmed the writing requirement (§ 1060(a)(3)) is worded
  consistently with the corpus's existing patent-assignment analog
  already covered elsewhere.
- Confirmed the 3-month recording window and voidness-against-a-
  subsequent-purchaser-for-value-without-notice rule under
  § 1060(a)(4), worded almost identically to the patent-assignment
  analog already in the corpus.
- Sourced the "recording is not itself an examination of validity"
  point directly from the statute's own language (recording is "prima
  facie evidence of execution," not of validity) rather than from
  blocked secondary sources.
- A genuine additional finding beyond the original research brief:
  California has its own parallel assignment statute, Bus. & Prof.
  Code § 14220 (Model State Trademark Law, Article 4) — distinct from
  § 14259 (common-law rights preservation) already cited in the
  corpus's existing Trademark Cease and Desist document. Section 14220
  mirrors the federal structure almost exactly: the goodwill
  requirement, the writing requirement, and the same 3-month recording
  window against a subsequent purchaser.

## Honest gap disclosed

CourtListener returned a hard rate-limit response (125/day quota
already exhausted) on the first query, and all attempted secondary
sources for the "assignment in gross" doctrine's case law (USPTO.gov,
Wikipedia, INTA, bitlaw, Cornell Wex) were blocked by this
environment's network egress policy. Well-known cases establishing the
doctrine (e.g., *Sugar Busters LLC v. Brennan*, *PepsiCo v. Grapette*)
were deliberately NOT cited, since neither could be independently
verified. The `tmassign_in_gross_doctrine` clause instead describes
the doctrine's substance sourced only to the statute's own goodwill
requirement, with an explicit disclosure that no case citation could
be verified this session.

## Method

Fetched 15 U.S.C. § 1060 directly from `law.cornell.edu`, and Cal.
Bus. & Prof. Code § 14220 directly from `leginfo.legislature.ca.gov`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All 7 citation quotes
programmatically confirmed as exact substrings of the raw fetched,
tag-stripped text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean (3 leaks found
  and fixed by the agent during its own drafting process, in `gap`
  fields, before delivery; independently re-scanned the delivered set
  and confirmed zero remaining).
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  non-generic title collision ("Recording the Assignment With the
  USPTO" vs. the existing patent-assignment document's
  `patentassign_recording`) was caught by the agent's own self-check
  and renamed to "Recording a Trademark Assignment With the USPTO" —
  independently confirmed clean against the full corpus. One remaining
  title match ("Signature and Acknowledgment") is the corpus's
  established, accepted generic drafting-title-reuse pattern.
- Field names (`assignorName`, `assigneeName` reused from the existing
  Patent Assignment document; `trademarkDescription` reused from the
  Trademark License and Trademark Registration documents) independently
  confirmed to match existing corpus convention. New field:
  `registrationOrApplicationNumber`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trademark Assignment Agreement — Information Sheet
  (`trademark_assignment_agreement_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Confidentiality & IP category. New
  field: `registrationOrApplicationNumber`.
- Corpus: 1,238 → 1,246 clauses; 156 → 157 documents. This completes
  wave 26 (4 documents: Piece-Rate Compensation Agreement, Pet Trust,
  Alternative Workweek Schedule Election, and this document).
