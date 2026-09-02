# Confidentiality & IP, new document: Trademark Registration (USPTO Application) Information Sheet

## Why this document

The existing Trademark License Agreement document covers licensing an
already-owned mark to someone else. This document covers the
genuinely distinct, upstream topic: how trademark rights arise in the
first place and how federal registration works under the Lanham Act.

## What this document covers

8 clauses: 2 drafting (applicant/mark info, basis for filing) and 6
authority clauses:

- **`tmreg_filing_basis_use_vs_itu`** (15 U.S.C. § 1051(a)(1), (a)(2),
  (b)(1), (d)(1)) — the two filing bases (use in commerce vs. intent
  to use) and the statement-of-use step required before an
  intent-to-use application matures into registration.
- **`tmreg_use_in_commerce_standard`** (15 U.S.C. § 1127) — the
  current statutory "use in commerce" standard.
- **`tmreg_refusal_grounds`** (15 U.S.C. § 1052(d), (e)(1), (f)) —
  likelihood-of-confusion and descriptiveness refusal grounds, and
  the secondary-meaning exception.
- **`tmreg_common_law_vs_federal_rights`** (15 U.S.C. § 1125(a)(1)(A);
  § 1057(b)) — unregistered rights from use alone, and registration's
  prima facie evidentiary effect.
- **`tmreg_registration_notice_and_incontestability`** (15 U.S.C.
  § 1072; § 1065) — nationwide constructive notice and
  incontestability after five years, with the generic-mark exclusion.
- **`tmreg_registration_symbol`** (15 U.S.C. § 1111) — the ® symbol is
  statutorily reserved for registered marks; ™ is not a statutory
  creature.

## Genuine corrections caught during research

- The task brief's "token use" framing is outdated: the current
  statutory text (post-1988 Trademark Law Revision Act) doesn't use
  that phrase at all — it codifies the standard as bona fide use "not
  made merely to reserve a right in a mark." The clause quotes the
  actual current wording rather than the older terminology.
- The task brief assumed "genericness" is an enumerated refusal ground
  in § 1052. Direct text search confirms the word "generic" does not
  appear anywhere in that section — genericness is instead addressed
  via § 1065(4) (excluded from incontestability), § 1127's abandonment
  definition, and § 1064(3)'s cancellation grounds. The refusal-grounds
  clause was built without fabricating a § 1052 subsection for it.
- The task brief asked whether ® vs. ™ is codified or a matter of
  practice. Direct review confirms ® is codified (§ 1111 ties it to
  registered marks and a real damages/attorney's fees consequence for
  omitting notice); ™ is confirmed absent from both § 1111 and § 1127
  by direct search of both — not assumed, verified as a genuine
  statutory silence.

## Honest gap disclosed

CourtListener was rate-limited (HTTP 429, 125/day quota exhausted)
when attempting to pull supporting case law (e.g., on how genericness
is proven, or the geographic-limitation doctrine for unregistered
common-law rights). No case citation was fabricated or waited out; the
corpus here is purely statutory, and the gap is disclosed in
`tmreg_registration_notice_and_incontestability`'s and
`tmreg_common_law_vs_federal_rights`'s gap fields.

## Method

Fetched 15 U.S.C. §§ 1051, 1052, 1057, 1065, 1072, 1111, 1125, and
1127 from `law.cornell.edu/uscode`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 14 citation quotes verified as exact substrings of the fetched
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the three same-section clauses
  (`tmreg_filing_basis_use_vs_itu`, `tmreg_refusal_grounds`,
  `tmreg_registration_notice_and_incontestability`) each carry an
  explicit "not independent sources" disclosure sentence — correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`trademarkDescription`) confirmed to match the existing
  Trademark License Agreement document's `fields` array exactly. New
  fields: `applicantName`, `goodsServicesDescription`, `firstUseDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trademark Registration (USPTO Application) Information
  Sheet (`trademark_registration_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Confidentiality & IP category. New fields:
  `applicantName`, `goodsServicesDescription`, `firstUseDate`.
- Corpus: 814 → 822 clauses; 108 → 109 documents.
