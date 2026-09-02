# Real Estate, new document: Timeshare Purchase — Information Sheet

## Why this document

No existing document covered real estate timeshares — the only prior
"timeshare" hits in this corpus were false-positive substring matches
inside unrelated custody-schedule ("timeshare") clauses.

## What this document covers

8 clauses: 2 drafting (purchase declaration, acknowledgment) and 6
authority clauses:

- **`timeshare_definitions`** (Bus. & Prof. Code § 11212) — the two
  statutory categories of time-share interest: time-share estate
  (coupled with a real property interest) and time-share use (not so
  coupled).
- **`timeshare_rescission_right`** (Bus. & Prof. Code § 11238(a),
  (a)(1), (a)(2)) — the 7-calendar-day statutory right to cancel a
  purchase contract without penalty.
- **`timeshare_required_disclosures`** (Bus. & Prof. Code §§ 11226,
  11234) — registration and the public report, correcting an initial
  mis-citation.
- **`timeshare_conspicuous_notice_requirement`** (Bus. & Prof. Code
  §§ 11212(h), 11238(d)(7)) — the conspicuous-notice placement
  requirement and its precise typography rule.
- **`timeshare_rescission_enforcement`** (Bus. & Prof. Code
  § 11238(e)) — the court cost-shifting remedy, not an automatic fine.
- **`timeshare_ongoing_assessments`** (Bus. & Prof. Code
  § 11238(d)(3)) — the honest finding that the statute only requires
  disclosure of the current year's assessment, leaving future
  increases entirely to the plan's own governing documents.

## Genuine corrections and findings

- Confirmed the statute uses hyphenated "time-share estate" and
  "time-share use" (§ 11212(x)), not "timeshare estate"/"timeshare use
  right" — confirmed correct in substance: estate = coupled with a
  freehold/estate-for-years real property interest; use = the same
  occupancy right without a real-property interest.
- Confirmed the rescission section and 7-calendar-day period as
  originally framed, with the trigger exactly as framed: the later of
  receipt of the public report or execution of the purchase contract.
- **A significant correction**: § 11225 is not the disclosure-
  requirements section — direct review shows it actually lists
  exemptions from registration. The actual public-report/registration
  duties are §§ 11226 (registration required before sale) and 11234
  (the developer must prepare and provide the public report, and the
  purchaser must certify receipt in writing), with § 11236 supplying
  the statutory receipt form confirming the purchaser must read the
  report before signing or paying.
- Confirmed the current statutory naming: § 11212(e) currently defines
  "Department" as "Department of Real Estate" (not the defunct interim
  "Bureau of Real Estate" name) — flagged as background, not
  independently re-verified for historical naming dates.
- A genuine additional finding: § 11238(d)(7) contains the actual
  statutory notice text that must run immediately before the signature
  line, and § 11212(h) independently defines "conspicuous type" with a
  precise typography rule (2 point sizes larger, minimum 10-point).
  Section 11238(d)(3) requires the current year's assessment to be
  disclosed in the contract — the statute's only touch on ongoing
  assessments; it does not cap or regulate future increases.
- Confirmed the enforcement mechanism (§ 11238(e)) provides only a
  fee/cost-shifting remedy — a court may award attorney's fees and
  costs to a purchaser who proves wrongful denial of rescission in
  litigation — not an automatic fine or statutory penalty amount. No
  penalty figure was fabricated.

## Honest gap disclosed

No case law was used — this topic is statutory, and CourtListener was
not queried, consistent with the guidance that case law here is
optional.

## Method

Fetched Bus. & Prof. Code §§ 11212, 11225, 11226, 11234, 11236, and
11238 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical apart from session-timestamp JS tokens. All
13 citation quotes programmatically confirmed as exact substrings of
the normalized fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 11212 pair in
  `timeshare_definitions` and the § 11238(a)/(a)(1)/(a)(2) trio in
  `timeshare_rescission_right` correctly disclosed as one source, not
  independent; genuinely independent sections elsewhere correctly
  labeled; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Acknowledgment of Review," duplicating the Real Estate
  Agency Disclosure document's `agencydisc_signature_ack`) confirmed
  as the corpus's established, accepted generic drafting-title-reuse
  pattern.
- Field names (`buyerName`, `purchasePrice`) independently confirmed
  to match existing corpus convention across the Residential Purchase
  Agreement and HOA/CC&R Disclosure documents. New field:
  `timeshareResortDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Timeshare Purchase — Information Sheet
  (`timeshare_purchase_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. New field:
  `timeshareResortDescription`.
- Corpus: 1,411 → 1,419 clauses; 177 → 178 documents. Second document
  of wave 32 (the first, UDRP Domain Name Dispute, was relaunched
  after an unrelated API content-filtering error and is still
  pending).
