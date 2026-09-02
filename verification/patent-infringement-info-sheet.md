# Confidentiality & IP, new document: Patent Infringement — Information Sheet

## Why this document

The corpus's existing Patent Assignment Agreement and Provisional
Patent Application documents cover ownership and filing mechanics.
Neither addresses infringement. Confirmed no overlap by reading all
`patentassign_` clauses.

## What this document covers

8 clauses: 2 drafting (infringement observation record, certification)
and 6 authority clauses:

- **`patentinfringe_direct_infringement`** (35 U.S.C. § 271(a)) — the
  direct infringement definition.
- **`patentinfringe_indirect_infringement`** (§ 271(b),(c)) —
  inducement and contributory infringement.
- **`patentinfringe_injunctive_relief`** (35 U.S.C. § 283) — the
  discretionary nature of injunctive relief.
- **`patentinfringe_damages`** (35 U.S.C. § 284) — the reasonable-
  royalty floor and discretionary treble-damages cap.
- **`patentinfringe_marking_notice`** (35 U.S.C. § 287(a)) — the
  marking statute's effect on recoverable damages.
- **`patentinfringe_statute_of_limitations`** (35 U.S.C. § 286) — the
  six-year backward-looking damages cap.

## Genuine corrections and findings

- Confirmed § 271(a)'s exact clause order: "makes, uses, offers to
  sell, or sells" — corrected from an initial "makes, uses, sells,
  offers to sell" framing.
- **A precision correction on § 271(c)**: the knowledge element is
  "knowing the same to be especially made or especially adapted for
  use in an infringement of such patent" — a separate, additional
  element from the "no substantial noninfringing use" standard, not
  the trigger for the knowledge requirement itself.
- **A significant correction on § 286**: it caps recovery of damages
  looking backward from the complaint's filing date — it is not a
  deadline for filing suit itself, corrected explicitly in the clause
  body.
- A genuine additional finding: § 287(a)'s marking mechanism now also
  permits an internet-posting alternative to a physical patent number,
  added by a 2011 amendment — included for accuracy.
- Confirmed § 283's injunctions are discretionary ("may," tied to
  "principles of equity"), not automatic.

## Honest gap disclosed

*eBay v. MercExchange*'s four-factor injunction test could not be
verified — CourtListener returned HTTP 429 (rate limit) on the one
search attempt made this session. The test is described in the § 283
clause's body as a widely-known principle, with no citation entry, and
the `gap` field discloses the non-verification explicitly. *Halo
Electronics v. Pulse Electronics* on willfulness is similarly
mentioned only as an unverified, uncited aside rather than guessed at.

## Method

Fetched 35 U.S.C. §§ 271, 283, 284, 286, and 287 directly from
`law.cornell.edu`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical. All citation
quotes programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 271(b) and (c)
  correctly disclosed as subsections of the same section, not
  independent; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Certification") confirmed as the corpus's established,
  accepted generic drafting-title-reuse pattern.
- Field name (`patentDescription`) independently confirmed to match
  existing corpus convention (Patent Assignment document). New fields:
  `patentHolderName`, `allegedInfringerName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Patent Infringement — Information Sheet
  (`patent_infringement_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `patentHolderName`, `allegedInfringerName`.
- Corpus: 1,588 → 1,596 clauses; 200 → 201 documents.
