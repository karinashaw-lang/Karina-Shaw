# Real Estate, new document: Mortgage Foreclosure Consultants — Information Sheet

## Why this document

Second processed item of wave 116 (Real Estate slot). Two candidates
were checked and eliminated before landing on this topic: right of
first refusal (already covered by the existing `buysell_row_first_refusal`
clause) and trustee's-sale/notice-of-sale mechanics (already covered by
the existing `foreclosure_notice_of_sale_requirements` and
`hoalien_sale_mechanics_and_redemption` clauses). Document- and
clause-level greps for "foreclosure consultant," "2945," "density
bonus," "water right," "right of first refusal," and "trustee sale"
confirmed genuine zero coverage for foreclosure consultants — the only
apparent "2945" hits were false-positive substrings inside Gov. Code
§12945.8 citations in unrelated leave-law clauses. The topic is
confirmed legally distinct from the existing Home Equity Sales Contract
Act document (which regulates "equity purchasers" who buy a foreclosure
property outright, not consultants who provide services) and from the
Homeowner Bill of Rights/Notice of Default documents (servicer conduct
and the trustee's-sale process itself, not third-party consultants).
Personally reconfirmed via corpus search: all ~22 apparent "2945" hits
are false positives from Gov. Code §12945.8 substring collisions.

## What this document covers

11 clauses: 2 drafting (intro/scope, closing acknowledgment) and 9
authority clauses, citing Civ. Code §§ 2945(a), 2945.1(a), 2945.1(b),
2945.2(a), 2945.3(a), 2945.3(b), 2945.4(a), 2945.4(b), 2945.4(c),
2945.4(e), 2945.4(f), 2945.6(a), 2945.6(b), 2945.11(a)(1):

- **`fcconsult_legislative_findings`** — the Legislature's stated
  findings on fraud, deception, and unfair dealing by foreclosure
  consultants.
- **`fcconsult_definition`** — the broad statutory definition of
  "foreclosure consultant," reaching solicitation alone.
- **`fcconsult_exemptions`** — the nine categories of persons the
  definition excludes, and the narrowed surplus-proceeds exclusion.
- **`fcconsult_right_to_cancel`** — the owner's five-business-day
  statutory cancellation right.
- **`fcconsult_contract_content_and_notice`** — required written-
  contract form, the boldface warning notice, and other content
  requirements.
- **`fcconsult_no_advance_fee_and_rate_cap`** — the prohibition on
  advance compensation and the 10%-per-annum loan-fee cap.
- **`fcconsult_no_security_poa_or_property_interest`** — bars on
  security interests, property-interest acquisition, and powers of
  attorney.
- **`fcconsult_remedies_and_limitations`** — the private right of
  action, mandatory treble-damages rule, and four-year limitations
  period.
- **`fcconsult_representative_license_and_bond`** — license and bond
  disclosure required of certain representatives.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed a distinct "advance fee ban" provision
  analogous to Civ. Code §§2944.6/2944.7 for mortgage-modification
  consultants. Reading the actual text showed the no-advance-fee rule
  instead lives in §2945.4(a), a general violation list, echoed inside
  the mandatory boldface warning notice required by §2945.3(b) — a
  different structure than assumed.
- **A corrected assumption about a standalone definitions section**: the
  agent initially expected a standalone "residence in foreclosure"
  definition but found §2945.1(f)/(g) instead cross-reference Civ. Code
  §1695.1 (the Home Equity Sales Contract Act's definitions) rather than
  defining those terms independently — disclosed as a gap rather than
  quoted, since §1695.1 was not fetched for this batch.
- **A caught and corrected drafting-compliance issue**: the agent's own
  imperative-phrasing scan found and removed two borderline instances
  ("a reader should consult the statute directly," "a reader should not
  assume"), rewriting both as purely descriptive statements before
  delivery — consistent with the corpus's "inform, never advise"
  convention.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not reproduce all nine enumerated categories of
represented service in §2945.1(a) or all nine exclusions in §2945.1(b)
beyond the attorney exclusion, does not independently verify Civ. Code
§2945.3(h)'s separate cancellation trigger for a noncompliant contract,
does not reproduce the exact fill-in boldface notice text (which does
not render as continuous prose once extracted from the statute's HTML
formatting), does not independently verify the §2945.9(b) "representative"
definition cross-referenced by §2945.11, and does not resolve the
bona-fide-purchaser carve-out to §2945.4(e)'s voidability rule for any
specific transfer.

## Method

Fetched Civ. Code §§ 2945, 2945.1, 2945.2, 2945.3, 2945.4, 2945.6, and
2945.11 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after normalization. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 14 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-forty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-144thVerify-ForeclosureConsultant/1.0") of all
seven sections — 12 of 14 citation instances matched directly on a
strict normalized-whitespace check; the remaining 2 (the §2945.1(a) and
§2945.1(b) definitional quotes) were flagged and investigated, and both
traced to this session's established subdivision-marker-spacing
artifact (a colon immediately followed by "(1)" with no space in the
extracted quote, versus a space in the actual source) — confirmed benign
via a whitespace-tolerant re-check. All 14 citation instances confirmed
clean overall, no genuine defects. The broad solicitation-based
definition, the five-business-day cancellation window, and the mandatory
treble-damages rule were all independently reconfirmed present in the
freshly fetched text.

## Verification

- All seven Civil Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-forty-fourth independent fetch during integration review; all 14
  citation instances confirmed clean (2 via the confirmed-benign
  subdivision-marker-spacing artifact, 12 on direct match).
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed all ~22 apparent "2945" corpus hits are
  false-positive substring collisions with Gov. Code §12945.8 in
  unrelated leave-law clauses, and confirmed non-overlap with the
  existing Home Equity Sales Contract Act and Notice of Default/HOA-lien
  documents.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- Two new field ids confirmed genuinely necessary and non-duplicative:
  `foreclosureConsultantName` and `foreclosureConsultantAddress`
  (needed for the §2945.3(e)(1) statutory cancellation-notice address
  requirement) — neither existed previously in the corpus under any
  name. Four other fields (`propertyAddress`, `ownerName`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Mortgage Foreclosure Consultants — Information Sheet
  (`mortgage_foreclosure_consultants_info_sheet`), 11 clauses (9
  authority + 2 drafting), in the Real Estate category. Two new fields:
  `foreclosureConsultantName`, `foreclosureConsultantAddress`.
- Corpus: 3,822 → 3,833 clauses; 498 → 499 documents. Second processed
  item of wave 116.
