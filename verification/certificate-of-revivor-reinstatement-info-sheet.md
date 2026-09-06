# Business Formation, new document: Certificate of Revivor — Reinstatement of a Suspended or Forfeited Business Entity — Information Sheet

## Why this document

Second processed item of wave 116 (Business Formation slot). Two
candidates were checked and rejected before landing on this topic: RULLCA
fiduciary-duty defaults (Corp. Code §17704.09) were found already fully
covered by the existing `llc_mm_fiduciary_duties` clause in the
Multi-Member LLC Operating Agreement document, and Limited Liability
Limited Partnership (LLLP) turned out too thin — California's ULPA 2008
only mentions LLLP in passing (a single foreign-LLLP naming-requirement
clause). Document- and clause-level greps for "reinstat," "revivor,"
"23305," "FTB 3557," "suspension," "forfeiture" confirmed the only
pre-existing coverage is the existing `soi_suspension_consequence`
clause, which explicitly cites Rev. & Tax. Code §23301 only as "the
distinct, tax-nonpayment-based suspension mechanism referenced inside
both of the others," without detailing the revivor process itself.
Personally reconfirmed via corpus search: the ~20 other "reinstat"
corpus hits are all unrelated (job reinstatement as an employment-leave
remedy, loan reinstatement in foreclosure) — none touch corporate
revivor.

## What this document covers

9 clauses: 2 drafting (intro, closing acknowledgment) and 7 authority
clauses, citing Rev. & Tax. Code §§ 23301 (introductory clause and
subd. (a)), 23302(a), 23302(c), 23302(d), 23304.1(a), 23305 (two
passages), 23305a (two passages), 23305.1(a), 23305.1(b)(1)(B),
23305.1(c)(1)(A), 23305.5(a), 23305.5(b):

- **`revivor_suspension_grounds`** — the FTB's tax-nonpayment-based
  suspension/forfeiture power and its exempt-status filing carve-out.
- **`revivor_notice_and_sos_transmittal`** — the notice-before-effect
  requirement, FTB-to-Secretary-of-State transmittal, and the
  real-property-sale disability during suspension.
- **`revivor_contract_voidability`** — the general rule making contracts
  made during suspension voidable at the other party's election only.
- **`revivor_certificate_of_revivor_requirements`** — the application,
  return-filing, and payment conditions for a certificate of revivor,
  and who may apply.
- **`revivor_name_check_and_effect_of_reinstatement`** — the required
  Secretary of State name endorsement and what reinstatement does and
  does not undo.
- **`revivor_relief_from_voidability`** — the separate, narrower
  relief-from-voidability procedure and its $100/day penalty.
- **`revivor_scope_corporations_and_llcs`** — confirmation the scheme
  reaches both corporations and LLCs via a dedicated definitions
  section.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the task's own candidate framing suggested §23305.5 might be the
  "relief from contract voidability" provision. Reading the actual text
  showed §23305.5 is instead a definitions section (extending "taxpayer"
  to include an LLC); the real relief-from-voidability mechanism is
  §23305.1 — corrected before the clause structure was finalized.
- **A confirmed, disambiguated structural distinction**: the agent
  verified full revivor (§23305/§23305a) and relief from contract
  voidability alone (§23305.1) are two genuinely separate statutory
  remedies — full reinstatement versus curing only specific voided
  contracts — reflected in the document's separate clauses for each.
- **A disclosed, deliberate choice not to cite unverified case law**:
  the agent's one CourtListener search (for *Peacock Hill Association
  v. Peacock Lagoon Construction Corp.*, the leading case on revivor's
  retroactive effect) returned a rate-limit error; every authority
  clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not independently verify the cross-referenced
Section 21020 notice statute, Section 23304.5 (the contract-rescission
mechanism both voidability provisions are "subject to"), or the
Corporations Code name-distinguishability provisions cross-referenced by
§23305a, does not state the certificate-of-revivor application fee
(commonly set by FTB form/administrative practice, not statutory text),
does not detail every triggering condition of §23301(b)-(c) or every
voidability trigger of §23304.1(b)-(d), does not detail §23305.1's
alternative voluntary-disclosure-agreement path or its higher penalty
formula for periods already covered by an issued revivor certificate,
and does not address how the scheme applies to partnerships (which are
outside the §23305.5 "taxpayer" definition).

## Method

Fetched Rev. & Tax. Code §§ 23301, 23302, 23304.1, 23305, 23305a,
23305.1, and 23305.5 from leginfo.legislature.ca.gov, each fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical. CourtListener's daily rate limit was already exhausted
on the agent's test call; no case law was used, a disclosed and
legitimate choice. All 15 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-forty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-143rdVerify-Revivor/1.0") of all seven sections —
all 15 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
tax-nonpayment suspension trigger, the certificate-of-revivor
application requirements, the §23305.1 relief-from-voidability penalty,
and the LLC-inclusive "taxpayer" definition were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All seven Rev. & Tax. Code sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  one-hundred-and-forty-third independent fetch during integration
  review; all 15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the existing `soi_suspension_consequence`
  clause cites §23301 only incidentally as a cross-reference, not as
  substantive coverage of the revivor process — confirmed non-
  duplicative.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `preparerName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Certificate of Revivor — Reinstatement of a Suspended
  or Forfeited Business Entity — Information Sheet
  (`certificate_of_revivor_reinstatement_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 3,813 → 3,822 clauses; 497 → 498 documents. Second processed
  item of wave 116.
