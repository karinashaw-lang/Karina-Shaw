# Business Formation, new document: Corporate Dissolution (Certificate of Dissolution)

## Why this document

The existing LLC Dissolution and Cancellation document covers the
Revised Uniform LLC Act's dissolution scheme. This document covers
the parallel but separately-codified process for dissolving a
California for-profit corporation, under a different part of the
Corporations Code (Division 1, General Corporation Law).

## What this document covers

8 clauses: 2 drafting (recitals, dissolution declaration/signatures)
and 6 authority clauses:

- **`corpdiss_grounds_for_dissolution`** (Corp. Code § 1900(a), (b)) —
  the fixed 50%-or-more shareholder vote threshold, and the narrower
  board-only election path for three specific categories.
- **`corpdiss_winding_up_commencement_and_powers`** (Corp. Code
  § 1903; § 2001) — when winding up commences, notice requirements,
  and the directors'/officers' statutory winding-up powers.
- **`corpdiss_certificate_filings`** (Corp. Code § 1901; § 1905) — the
  certificate of election and the certificate of dissolution, and
  which one actually ends the corporation's powers.
- **`corpdiss_distribution_priority`** (Corp. Code § 2004) — remaining
  assets distributed according to shareholders' rights and
  preferences.
- **`corpdiss_continued_existence_and_claims`** (Corp. Code § 2010;
  § 2011(a)(1)-(2)) — continued existence for winding-up purposes, and
  the 4-year cutoff on claims against a dissolved corporation's
  shareholders.
- **`corpdiss_tax_clearance`** (Rev. & Tax. Code § 23332(c)) — the
  Franchise Tax Board minimum-tax clearance mechanism.

## Genuine corrections caught during research

- The task brief assumed § 1900 might defer to a corporation's own
  articles on the vote threshold (as some LLC statutes do). Direct
  review shows § 1900 is a flat 50%-or-more rule with no such
  qualifier — unlike the LLC dissolution statutes.
- The task brief assumed "certificate of dissolution" is the first
  filing, by analogy to the LLC scheme. Direct review reveals the
  naming is inverted for corporations: § 1901's certificate of
  election is the (often-skippable) first filing, and § 1905's
  certificate of dissolution is what actually terminates the
  corporation's powers — the reverse of the LLC scheme, where a
  certificate of dissolution comes first and a certificate of
  cancellation ends the LLC. Flagged explicitly in the clause to
  prevent confusion between the two documents.
- The task brief assumed § 1903 contains the winding-up activities
  list. Direct review shows § 1903 covers only commencement and
  notice; the actual statutory list of winding-up powers is at § 2001
  (not named in the brief), and distribution priority is at § 2004
  (also not named).
- The task brief asked about surviving claims and time limits. Direct
  review of § 2010 confirmed the expected continued-existence rule,
  and the agent went further to independently verify § 2011 (not named
  in the brief), which supplies the actual answer: claims survive
  against undistributed assets and against shareholders individually
  up to their pro-rata share, extinguished unless suit is filed within
  the earlier of the ordinary limitations period or 4 years after
  dissolution.
- The task brief assumed tax clearance runs through Corp. Code § 1905
  itself. Direct review shows § 1905(a)(6) only requires the
  certificate to represent that a final return has been/will be
  filed — the actual mechanism conditioning minimum-franchise-tax
  relief on that representation is a separate statute, Rev. & Tax.
  Code § 23332(c), structurally parallel to but distinct from the
  LLC's § 17947.

## Honest gaps disclosed

Several statutes referenced only by number within § 23332(c)(1)(C)
(Corp. Code §§ 1809, 2112, 6615, 8615, 12635; Fin. Code § 3126; Rev. &
Tax. Code § 18601) were not independently fetched and verified beyond
confirming § 23332 itself names them. The quiet-title survival
carve-out and shareholder-suit procedural mechanics in § 2011(c) and
(a)(3) are disclosed but not detailed. Distribution priority under
§ 2004 depends on share rights/preferences defined in each
corporation's own articles, not the statute itself.

## Method

Fetched Corp. Code §§ 1900, 1901, 1903, 1905, 2001, 2004, 2010, 2011,
and Rev. & Tax. Code § 23332 directly from `leginfo.legislature.ca.gov`,
each verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All 11 citation quotes verified
as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the two same-section clauses
  (`corpdiss_grounds_for_dissolution`, citing § 1900(a) and (b);
  `corpdiss_continued_existence_and_claims`, citing two subsections of
  § 2010) each carry an explicit "treated as one source, not
  independent" disclosure sentence — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `dissolutionDate`, `dissolutionReason`)
  confirmed to match the existing LLC Dissolution and Cancellation
  document's `fields` array exactly — no new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Corporate Dissolution (Certificate of Dissolution)
  (`corporate_dissolution`), 8 clauses (6 authority + 2 drafting), in
  the Business Formation category. No new fields — full reuse of the
  existing LLC Dissolution and Cancellation document's field set.
- Corpus: 837 → 845 clauses; 111 → 112 documents.
