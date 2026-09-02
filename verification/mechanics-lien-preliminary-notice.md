# Real Estate, ninth new document: Mechanics Lien Preliminary Notice

## Why this document

A genuinely new topic for the corpus — a contractor's, subcontractor's,
or supplier's statutory right to record a lien against real property
for unpaid work or materials, and the mandatory preliminary notice
that (with narrow exceptions) is a prerequisite to that lien right.
Confirmed non-overlap against every `lease_`, `commlease_`, and
deed-related prefix before drafting.

## What this document covers

8 clauses: 2 drafting (notice parties/property/work, statutory
warning/proof of service) and 6 authority clauses:

- **`mechlien_who_may_claim`** (Civ. Code § 8400) — the actual list of
  lien claimants (direct contractor, subcontractor, material supplier,
  equipment lessor, laborer, design professional).
- **`mechlien_prelim_notice_who_must_give`** (Civ. Code § 8200(a),
  (e)) — required notice recipients and the two real exceptions
  (laborers; claimants with direct contractual privity with the
  owner).
- **`mechlien_prelim_notice_deadline`** (Civ. Code § 8204(a)) — the
  20-day deadline and the partial-recovery (not complete-bar) rule for
  a late notice.
- **`mechlien_prelim_notice_content_and_service`** (Civ. Code
  § 8202(a); § 8110) — required content, the boldface statutory
  warning, and mail-service methods.
- **`mechlien_lien_recording_deadline`** (Civ. Code §§ 8412, 8414,
  8180(a)) — the split 90/60-day (direct contractor) vs. 90/30-day
  (every other claimant) recording deadlines, and the multi-trigger
  definition of "completion."
- **`mechlien_lien_claim_requirements`** (Civ. Code § 8416(a), (c)) —
  required content, verification, and service of the actual lien
  claim.

## Genuine corrections caught during research

- The task brief pointed to § 8034 as the "who may claim" section.
  Direct review shows § 8034 is purely a cross-reference defining the
  term "preliminary notice" — the actual claimant list is § 8400.
- The task brief's "except a direct contractor with a written
  contract" framing was imprecise: § 8200(e)(2) doesn't fully exempt a
  direct contractor — it reduces the requirement to noticing only the
  construction lender, if one exists. The statute also says "direct
  contractual relationship," not "written contract" — no writing
  requirement appears in the text.
- The task brief's "60/30-day" recording-deadline framing conflated
  two different claimant classes: § 8412 gives a direct contractor 90
  or 60 days; § 8414 gives every other claimant 90 or 30 days (not
  60) — confirmed each applies to a distinct section and claimant
  type.
- The 20-day partial-recovery rule for late notice was confirmed
  correct as assumed.
- Service method for a preliminary notice (§ 8110) is broader than
  "certified mail" alone — it also permits registered mail, express
  mail, or overnight delivery by an express carrier.

## Defects caught and fixed during integration

`mechlien_who_may_claim` and `mechlien_prelim_notice_deadline` each
cite a single statutory section but initially lacked the standard
explicit single-source disclosure sentence — added during integration.

## Method

Fetched Civil Code §§ 8110, 8180, 8200, 8202, 8204, 8400, 8412, 8414,
8416 directly from `leginfo.legislature.ca.gov`, each verified against
a second, independent fetch with a distinct User-Agent — confirmed
byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on two, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Mechanics Lien Preliminary Notice
  (`mechanics_lien_preliminary_notice`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. New fields: `claimantName`,
  `ownerName`, `directContractorName`, `amountOwed`,
  `firstFurnishedDate` (`propertyAddress` reused from existing
  conventions).
- Corpus: 683 → 691 clauses; 91 → 92 documents.
