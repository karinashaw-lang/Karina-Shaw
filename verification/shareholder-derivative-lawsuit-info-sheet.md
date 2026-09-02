# Business Formation, new document: Shareholder Derivative Lawsuit — Information Sheet

## Why this document

Confirmed by grep that Corp. Code § 800 and derivative-lawsuit-specific
content had zero hits anywhere in the corpus. Distinct from the existing
Shareholder and Member Inspection Rights document, which covers a
shareholder's right to inspect corporate/LLC records — a non-litigation
right — not the separate procedural prerequisites for suing on the
corporation's behalf.

## What this document covers

7 clauses: 2 drafting (purpose/scope declaration, closing/signature block)
and 5 authority clauses, all citing Cal. Corp. Code § 800:

- **`derivsuit_scope_and_definitions`** (subd. (a)-(b)) — the statute's
  broadened definitions ("corporation" includes an unincorporated
  association, etc.) and the "both conditions" threshold.
- **`derivsuit_contemporaneous_ownership`** (subd. (b)(1)) — the
  contemporaneous-ownership requirement and the five-factor discretionary
  court exception.
- **`derivsuit_demand_requirement`** (subd. (b)(2)) — the pleading
  requirement: allege demand efforts, or particularized reasons for not
  making them.
- **`derivsuit_security_bond_motion`** (subd. (c)-(d)) — the corporation's
  or an officer/director defendant's motion for a security bond, its two
  statutory grounds, and the $50,000 cap.
- **`derivsuit_bond_consequences`** (subd. (d)-(f)) — dismissal for
  non-payment, the effect of voluntarily posting the full bond, and the
  stay while a bond motion is pending.

## Genuine corrections and findings

- **A correction to a common imprecise shorthand**: the assignment brief
  (and popular summaries) describe the bond requirement as applying to a
  shareholder who owns only a "small percentage" of shares. The verified
  statutory text contains no ownership-percentage threshold or exemption
  at all — the two grounds for the bond motion turn on whether the suit
  has no reasonable possibility of benefiting the corporation, or whether
  the moving defendant didn't participate in the underlying transaction,
  not on how many shares the plaintiff holds. Flagged explicitly, while
  noting the practical (not textual) tendency for small holders to face
  this motion more often.
- Confirmed the statute's definitions extend beyond ordinary corporations
  — "corporation," "board," "shareholder," and "shares" each expressly
  include their unincorporated-association counterparts.
- Confirmed a shareholder who fails the contemporaneous-ownership
  requirement is not automatically barred — a court may allow the suit to
  proceed on a discretionary showing weighing five specific statutory
  factors.
- Confirmed the demand requirement gives the plaintiff two paths (plead
  demand efforts, or plead particularized reasons for not making a
  demand) without the statute itself specifying what reasons a court will
  accept — left as an open, fact-specific question rather than resolved
  by assumption.
- Confirmed a bond motion triggers an automatic stay of the action (no
  pleadings required from the defendant) until 10 days after the motion
  is resolved.

## Honest gap disclosed

The document does not address demand-futility case law standards, the
separate special-litigation-committee dismissal mechanism, or the
indemnification mechanics of the cross-referenced Corp. Code § 317 —
none of these were independently fetched or verified, so they are left
out rather than asserted from memory.

## Method

Fetched Cal. Corp. Code § 800 directly from `leginfo.legislature.ca.gov`
via two independent HTTP requests with distinct User-Agent strings —
HTML-stripped, whitespace-normalized, and diffed as byte-identical. All 10
citation quotes programmatically confirmed as exact substrings of the
confirmed text.

## Verification

- The statute fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every citation in this
  document is a subsection of the single statute § 800, and each clause's
  `gap` explicitly discloses this; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`companyName`, `entityType`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus convention. New
  fields: `shareholderName`, `transactionDescription`, `demandDetails`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Shareholder Derivative Lawsuit — Information Sheet
  (`shareholder_derivative_lawsuit_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the Business Formation category. New fields:
  `shareholderName`, `transactionDescription`, `demandDetails`.
- Corpus: 1,910 → 1,917 clauses; 244 → 245 documents. Second document of
  wave 49.
