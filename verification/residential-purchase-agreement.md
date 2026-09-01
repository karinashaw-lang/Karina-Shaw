# Real Estate, second document: Residential Purchase Agreement

## Why this document

Continuing the "go as deep as humanely possible" build-out into Real
Estate, alongside the existing Residential Lease Agreement. A
Residential Purchase Agreement covers the sale of single-family
residential property, centered on California's dense statutory
disclosure regime. Sourced from California Civil Code § 1102 et seq.
(Transfer Disclosure Statement), § 1103 et seq. (Natural Hazard
Disclosure), § 2079.10a (Megan's Law notice), §§ 1675/1677
(liquidated-damages deposit), plus federal lead-based-paint disclosure
law (42 U.S.C. § 4852d, § 4851b; 40 C.F.R. § 745.113).

## What this document covers

10 clauses: 3 drafting (parties/property, contingencies/closing date,
and signatures) and 7 authority clauses:

- **`purchase_tds_requirement`** (§ 1102(a), (c); § 1102.2(b), (d)-(g), (j))
  — the core Transfer Disclosure Statement (TDS) requirement, its
  non-waivability, and the real, specific list of statutory exemptions
  (court-ordered sales, fiduciary/estate transfers with their own
  built-in exception, co-owner transfers, spousal/consanguinity
  transfers, divorce-related transfers, governmental transfers).
- **`purchase_tds_content`** (§ 1102.6(a), § 1102.1(a), § 1102.3) — what
  the TDS must cover: the material-fact disclosure standard and the
  form's three-part structure. Deliberately does not quote the form's
  own checkbox-by-checkbox line items as statutory language, because the
  actual codified form text (§ 1102.6) is not extractable from any
  fetchable primary source — see "Honest gap" below.
- **`purchase_tds_timing_termination`** (§ 1102.3(a), § 1102.3, § 1102.13)
  — delivery timing and the buyer's 3/5/5-day termination right for a
  late-delivered disclosure, plus the non-invalidation/liability rule
  for noncompliance.
- **`purchase_natural_hazard_disclosure`** (§ 1103(b), (d); § 1103.2(a)
  ×6; § 1102.6f(a)) — the separate Natural Hazard Disclosure Statement
  and its six real, itemized hazard categories (flood, dam inundation,
  fire severity zone, wildland fire area, earthquake fault zone, seismic
  hazard zone), plus the additional pre-2010-construction wildfire
  notice.
- **`purchase_lead_paint_federal`** (42 U.S.C. § 4852d(a)(1), (a)(3);
  § 4851b(27); 40 C.F.R. § 745.113(a)(1)) — the federal lead-based-paint
  disclosure regime for pre-1978 "target housing," which applies
  nationwide regardless of which state's law otherwise governs.
- **`purchase_megans_law_notice`** (§ 2079.10a(a), (a)(3), (b)) — the
  required sex-offender-registry notice for residential sale contracts.
- **`purchase_liquidated_damages`** (§ 1675(a), (c)-(d); § 1677) — the
  3%-of-purchase-price presumptive-validity cap on a good-faith deposit
  as liquidated damages, and the separate signature/type-size
  formatting requirement for such a provision.

## Honest gap: the TDS form's own text is not fetchable

Civil Code § 1102.6 — which is supposed to contain the actual TDS form
text — renders on `leginfo.legislature.ca.gov` as a literal "NOTICE OF
INCOMPLETE TEXT" placeholder. The underlying chaptered bill (SB 1371,
Stats. 2020, Ch. 370), fetched directly, likewise shows a "PRINTER
PLEASE NOTE: TIP-IN MATERIAL TO BE INSERTED" placeholder — the
checkbox-by-checkbox form was a printed physical insert in the original
bill and was never digitized as extractable statutory text. Rather than
fabricate or reconstruct the form's specific line items from secondary
sources, `purchase_tds_content` is built only from statutory language
that is genuinely fetchable and twice-verified, and its `gap` field
states this limitation directly. Separately, a proposed home-inspection
contingency clause was dropped: California statute (Bus. & Prof. Code
§ 7195 et seq.) regulates home inspectors' licensing but creates no
buyer contingency/cancellation right by statute — that right exists
only by private contract, so `purchase_contingencies_closing` remains a
blank-fill drafting clause with no legal claim attached.

## Method

A background research agent fetched every candidate California Civil
Code section directly from `leginfo.legislature.ca.gov`, and the two
federal citations from `law.cornell.edu`, each verified against a
second, independent fetch with a distinct User-Agent, using a
quote-verification script that flattens HTML, decodes entities, and
repairs Cornell's inline-term-tagging spacing artifacts.

## Verification

- All citations fetched twice independently with distinct User-Agents
  by the research agent; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses (several cite many subsections of the same statutory
  section alongside genuinely independent sections) — correct
  throughout.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Parties and Property," shared with the existing
  Residential Lease Agreement clause) is the pre-existing, accepted
  pattern of reused generic drafting-clause titles, not a defect.
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Residential Purchase Agreement
  (`residential_purchase_agreement`), 10 clauses (7 authority + 3
  drafting), in the Real Estate category.
- Corpus: 382 → 392 clauses; 55 → 56 documents.
