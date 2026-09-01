# Business Formation, third new document: SAFE (Simple Agreement for Future Equity) Note

## Why this document

Continuing the "go as deep as humanely possible" build-out. A SAFE is a
common early-stage startup financing instrument where an investor pays
cash now for the right to future equity, typically at the next priced
round — fundamentally a private contract (not itself a creature of
statute), but issuing one implicates real federal and California
securities law that this document accurately describes rather than
glossing over. Sourced from 15 U.S.C. §§ 77e, 77q, 77r, 17 C.F.R.
§§ 230.501, 230.502, 230.506, and Cal. Corp. Code §§ 25102.1, 25401.

## What this document covers

9 clauses: 4 drafting (investment terms/valuation cap/discount rate,
conversion trigger, most-favored-nation provision, and signature
block) and 5 authority clauses:

- **`safe_sec_act_5_registration`** (15 U.S.C. § 77e) — the baseline
  federal registration requirement that makes a SAFE offering need an
  exemption in the first place.
- **`safe_reg_d_506_exemption`** (17 C.F.R. §§ 230.506(b), (c), 230.502(c))
  — the real, precise, commonly-garbled distinction between Rule 506(b)
  (unlimited accredited + up to 35 non-accredited investors, no general
  solicitation) and Rule 506(c) (general solicitation allowed, but every
  purchaser must be accredited and verified, not merely self-certified).
- **`safe_accredited_investor_definition`** (17 C.F.R. § 230.501(a)) —
  the current accredited-investor definition, confirmed to reflect the
  2020 rule changes (including the professional-certification category)
  and the most recent amendment effective February 2025.
- **`safe_ca_blue_sky_notice_filing`** (Cal. Corp. Code § 25102.1(d);
  15 U.S.C. § 77r(b)(4)(F)) — California's specific notice-filing
  requirement for a federally covered Rule 506 offering, with the
  cross-reference between the state and federal statutes independently
  confirmed rather than assumed.
- **`safe_antifraud_persists`** (15 U.S.C. § 77q(a); Cal. Corp. Code
  § 25401) — that antifraud liability applies at both the federal and
  California level regardless of any registration exemption.

## Honest gap: valuation cap and discount rate are not law

The research explicitly searched for any statutory or regulatory
definition of "valuation cap" or "discount rate" — the two terms most
commonly negotiated in a SAFE — and found none in the Securities Act,
Regulation D, or California's Corporate Securities Law. Rather than
force a citation that doesn't exist, `safe_investment_terms` is a
drafting clause with no legal citation, stating directly that these are
private contract terms popularized by market practice (originating with
Y Combinator's standard SAFE form), not creatures of statute.

## Method

Fetched federal statutes and regulations from `law.cornell.edu` and
California statutes from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent.

## Defect caught and fixed during integration

`safe_sec_act_5_registration` cites a single statutory section but
initially lacked the standard single-source disclosure sentence — added
during integration.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 5 authority
  clauses — corrected on one, confirmed correct on the rest (the
  California/federal citation pairs are genuinely independent sources).
- Checked for duplicate clause IDs against the full corpus (none, aside
  from the pre-existing "Signature Block" pattern).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: SAFE Note (`safe_note`), 9 clauses (5 authority + 4
  drafting), in the Business Formation category.
- Corpus: 456 → 465 clauses; 63 → 64 documents.
