# During employment, new document: Cash Shortage, Breakage, and Equipment Loss Wage Deductions — Information Sheet

## Why this document

Second processed item of wave 120 (During employment slot, 1×4
pattern). The research agent set out to build a broader "Permissible
and Prohibited Wage Deductions" document covering Lab. Code §§
221-224, 225.5, and IWC Wage Order 4-2001 § 8, after ruling out
personnel-file-inspection rights, right-to-copy-of-signed-instruments,
SDI, and wage-garnishment topics as already covered.

**A genuine, significant duplication finding caught during integration
review**: the delivered document's core §§ 221-224 coverage
substantially duplicated the existing `wage_repayment_clawback_info_sheet`
document (`wageclawback_s221_core_prohibition`, `wageclawback_s222_s223_related`,
and `wageclawback_s224_exception` already quote the same statutory text
this agent independently re-fetched and re-quoted) and, to a lesser
extent, `wage_advances_draws_against_commission_info_sheet`'s §221 and
§224 coverage. The research agent's own duplication check searched for
document titles and topic-level phrases ("wage deduction," "personnel
file") rather than checking clause bodies for the underlying statutory
citations already covered under a different document framing
("clawback" versus "deduction"), and so missed this.

Personally confirmed the overlap by reading the existing
`wageclawback_*` clause bodies directly: `wagededuct_no_recoupment`
duplicates `wageclawback_s221_core_prohibition`;
`wagededuct_collective_bargaining_withholding` and
`wagededuct_secret_underpayment` duplicate
`wageclawback_s222_s223_related`; and
`wagededuct_authorized_deductions_exception` and
`wagededuct_prohibited_tax_fee_diversion` duplicate
`wageclawback_s224_exception`. `wagededuct_itemization_is_separate_duty`
(Lab. Code §226(a)(4)) was thin, boundary-marking content already
substantively addressed by the corpus's existing Wage Statement
Itemization Policy document. None of these five authority clauses, nor
the general-purpose intro/ack drafting clauses built around them, were
merged.

Two authority clauses were confirmed, independently, to be genuinely
novel — personally re-confirmed via corpus search that "cash shortage,"
"breakage," and "225.5" appear nowhere else in the corpus. These two
clauses were salvaged into a smaller, narrowly scoped, non-duplicative
document with a new intro clause honestly describing this narrower
scope and its relationship to the corpus's existing clawback and
itemization documents, and the same acknowledgment/signature clause the
agent delivered (a generic drafting clause with no topic-specific
content to duplicate).

## What this document covers

4 clauses: 2 drafting (intro, acknowledgment/signature) and 2 authority
clauses, citing IWC Wage Order No. 4-2001 § 8 (Cal. Code Regs., tit. 8,
§ 11040, subd. 8) and Lab. Code § 225.5(a)-(b):

- **`wagededuct_cash_shortage_breakage`** — the Wage Order's
  dishonesty/willfulness/gross-negligence standard required before an
  employer may deduct wages, or require reimbursement, for a cash
  shortage, breakage, or equipment loss.
- **`wagededuct_civil_penalty`** — the civil penalty scheme (initial and
  subsequent-violation amounts, plus 25% of the amount withheld) for
  unlawfully withholding wages in violation of Lab. Code §§ 212, 216,
  221, 222, or 223, recovered by the Labor Commissioner.

## Genuine findings

- **A significant document-level duplication caught during integration
  review, not by the research agent itself**: five of the agent's eight
  delivered authority clauses substantially restated statutory text
  (Lab. Code §§ 221-224) already quoted and covered by the existing
  `wage_repayment_clawback_info_sheet` document under a different
  topical framing. Rather than merge a document with substantial
  overlapping content, only the two genuinely novel clauses were
  salvaged into a smaller, honestly-scoped standalone document.
- **A disclosed, deliberate choice not to assert an unverified doctrinal
  connection**: the salvaged `wagededuct_civil_penalty` clause's `gap`
  field explicitly states that this document does not assert whether,
  or under what circumstances, an unlawful cash-shortage/breakage
  deduction would itself constitute a violation of §§ 221-223 for
  purposes of the civil penalty — that connection is not stated in
  either provision's own text and is not asserted here.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  both authority clauses proceed on statute/regulation text alone.

## Honest gap(s) disclosed

This document does not address whether other numbered IWC wage orders
(besides Wage Order 4-2001) contain the identical cash-shortage/breakage
provision, does not specify who bears the burden of proof or under what
evidentiary standard for the dishonesty/willfulness/gross-negligence
showing, does not independently verify the cross-referenced Lab. Code §§
212 and 216, does not resolve whether an unlawful cash-shortage
deduction itself triggers the § 225.5 civil penalty, and does not
address a private right of action or PAGA civil-penalty procedure
(covered separately in this corpus's existing PAGA Pre-Suit Notice
Letter document).

## Method

Fetched IWC Wage Order No. 4-2001 (PDF) from dir.ca.gov and Lab. Code §
225.5 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical (PDF confirmed by checksum). CourtListener's daily rate
limit was already exhausted on the agent's test call; no case law was
used, a disclosed and legitimate choice.

Independently re-verified during integration review via a
one-hundred-and-fifty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-155thVerify-WageDeductions/1.0") of both sources —
the § 225.5 citation confirmed clean on direct normalized-whitespace
substring match; the Wage Order § 8 citation required the standard
whitespace-stripped fallback check (the source PDF's own text
extraction hyphenates "breakage" across a line break, preserved exactly
in the quote per this corpus's established practice), confirmed benign.
The "8. CASH SHORTAGE AND BREAKAGE" section heading and the full
provision text were independently reconfirmed present at the correct
location in the freshly fetched PDF.

## Verification

- Both primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-fifty-
  fifth independent fetch during integration review; both citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `wagededuct_` prefix has zero collisions.
  Independently confirmed, by direct clause-body inspection, that the
  two salvaged clauses (cash-shortage/breakage; the § 225.5 civil
  penalty) do not appear anywhere else in the corpus, while five other
  delivered clauses did substantially duplicate the existing
  `wage_repayment_clawback_info_sheet` document and were excluded from
  the merge for that reason.
- Checked every citation's `case` field for emptiness — both populated
  with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Cash Shortage, Breakage, and Equipment Loss Wage
  Deductions — Information Sheet
  (`cash_shortage_breakage_wage_deductions_info_sheet`), 4 clauses (2
  authority + 2 drafting), in the During employment category. No new
  fields. Six of the ten clauses the research agent delivered were
  excluded from the merge as substantial duplicates of existing corpus
  content (see Genuine findings, above).
- Corpus: 3,938 → 3,942 clauses; 509 → 510 documents. Second processed
  item of wave 120.
