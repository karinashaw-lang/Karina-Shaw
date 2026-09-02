# Family Law, new document: UIFSA — Registration of an Out-of-State Support Order Information Sheet

## Why this document

The existing Child Support Agreement document covers a private,
in-state agreement. This document covers a distinct topic: enforcing
an existing out-of-state court support order within California under
the Uniform Interstate Family Support Act.

## What this document covers

8 clauses: 2 drafting (registration declaration, signature/
certification) and 6 authority clauses:

- **`uifsa_registration_enforcement`** (Fam. Code § 5700.601;
  § 5700.602(a), (d)-(e)) — registering an out-of-state support order
  for enforcement.
- **`uifsa_continuing_exclusive_jurisdiction`** (Fam. Code
  § 5700.205; § 5700.211) — the continuing-exclusive-jurisdiction
  principle, including a genuine asymmetry between child and spousal
  support.
- **`uifsa_modification_vs_enforcement_registration`** (Fam. Code
  § 5700.609; § 5700.611(a)) — the distinct additional requirements
  for registering to seek a modification.
- **`uifsa_contesting_registered_order`** (Fam. Code § 5700.606;
  § 5700.607(a)) — the limited, enumerated defenses available to
  contest a registered order.
- **`uifsa_effect_of_registration_and_confirmation`** (Fam. Code
  § 5700.603(b)-(c); § 5700.608) — the effect of registration and
  confirmation.
- **`uifsa_choice_of_law_arrears_interest`** (Fam. Code
  § 5700.604(a)-(d)) — the choice-of-law rule for arrears and
  interest versus California's own enforcement procedures.

## Genuine corrections and findings

- **A significant correction to the entire research framing**:
  California's UIFSA is not codified at Fam. Code § 4900 et seq.
  anymore. Effective January 1, 2016 (Stats. 2015, Ch. 493, SB 646),
  the old §§ 4900-4986 codification was repealed and UIFSA was
  recodified into Division 9, Part 6, §§ 5700.101-5700.905. Confirmed
  directly: fetching the old § 4900 on leginfo returns an empty
  code-text body, while § 5700.101 et seq. holds the live text. Every
  citation in this document uses the correct current numbering.
- Confirmed the enforcement-registration filing list, with one
  precision fix: it is "two copies, including one certified copy," not
  just two plain copies. Also found § 5700.602(d)-(e)'s additional
  filing requirements when two or more orders are in effect.
- Confirmed the residency-based continuing-exclusive-jurisdiction test
  for child support (§ 5700.205). A genuine, non-obvious finding not
  in the original research brief: spousal-support continuing
  exclusive jurisdiction has no residency condition at all — it lasts
  for the entire life of the obligation (§ 5700.211), a real asymmetry
  with child support. The "what happens if nobody still lives in the
  issuing state" answer is disclosed as an inference from
  § 5700.205(a) read with § 5700.611(a)(1)(A), not a direct statutory
  sentence.
- Confirmed modification registration is a real, distinct track that
  reuses the enforcement-registration mechanics but requires
  additional jurisdictional findings (either nobody left in the
  issuing state plus a nonresident petitioner plus California
  personal jurisdiction over the respondent, or California residence/
  personal jurisdiction plus filed-party consent).
- **A significant correction**: the actual list of grounds for
  contesting a registered order has 8 items, not 5 as originally
  assumed — richer than the original framing. Added: the order being
  stayed pending appeal, a California-law defense to the specific
  remedy sought, and the "not the controlling order" ground. Confirmed
  the burden of proof is on the contesting party, and failure to
  timely request a hearing confirms the order by operation of law.
  The specific hearing deadline lives in § 5700.605, which was not
  independently verified — disclosed as a gap.
- Confirmed the "treated as if issued by a California tribunal"
  language is actually in § 5700.603(b) (registration itself), while
  § 5700.608 supplies the separate "precludes further contest of
  matters that could have been raised" preclusion effect after
  confirmation. Also found § 5700.603(c)'s real limit: California "may
  not modify" a registered order even though it must enforce it, if
  the issuing tribunal had jurisdiction.
- Confirmed the issuing-state-law rule for arrears/interest
  computation and the California-procedure rule for enforcement
  mechanics (§ 5700.604(a)-(d)). Corrected a nuance: the statute-of-
  limitations rule isn't "the issuing state's law bars enforcement" —
  it's whichever of the two states' limitations periods is longer that
  applies, a pro-enforcement rule rather than a strict choice-of-law
  rule.

## Honest gaps disclosed

- Section 5700.605's exact contest-hearing deadline was not
  independently fetched/verified.
- Sections 5700.610 and 5700.613 are cross-referenced but not
  independently fetched or quoted.
- The Convention/foreign-country-specific provisions (Chapter 7) are
  named but not verified.
- No case law was researched — this topic is purely statutory.

## Method

Fetched Cal. Fam. Code §§ 5700.205, 5700.211, 5700.601, 5700.602,
5700.603, 5700.604, 5700.606, 5700.607, 5700.608, 5700.609, and
5700.611 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical. All citation quotes programmatically
confirmed as exact substrings of the whitespace-normalized fetched
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 5700.604(a)-(b)/
  (c)-(d) and § 5700.603(b)-(c) correctly disclosed as one source, not
  independent; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`dateSigned`, `cityState`) independently confirmed to
  match existing corpus convention. New fields: `obligorName`,
  `obligeeName`, `issuingState`, `issuingCourtName`,
  `issuingCaseNumber`, `orderIssuanceDate`, `orderedSupportAmount`,
  `arrearsAmount`, `arrearsAsOfDate`, `registeringPartyName`,
  `californiaCounty`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: UIFSA — Registration of an Out-of-State Support Order
  Information Sheet (`uifsa_registration_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Family Law category. New fields:
  `obligorName`, `obligeeName`, `issuingState`, `issuingCourtName`,
  `issuingCaseNumber`, `orderIssuanceDate`, `orderedSupportAmount`,
  `arrearsAmount`, `arrearsAsOfDate`, `registeringPartyName`,
  `californiaCounty`.
- Corpus: 1,419 → 1,427 clauses; 178 → 179 documents.
