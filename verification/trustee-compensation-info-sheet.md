# Estate Planning, new document: Trustee Compensation and the Court's Review of It (Prob. Code §§ 15680-15688; Cal. Rules of Court, rule 7.776; Thorpe v. Reed; Scott v. McDonald; Estate of Gump) — Information Sheet

## Why this document

Wave 161 (Estate Planning slot — the last of wave 161's four documents;
the Hiring, During employment, and Family Law slots of the wave were
already merged when this one was drafted). Before drafting,
`data/documents.json` was read in full and all 83 existing Estate
Planning titles were listed and checked. Several of the task prompt's
suggested topics turned out to be already covered: the creditor-claim
procedure in probate (`creditor_claim_against_estate_info_sheet`), the
California statutory will (`california_statutory_will_info_sheet`), the
revocable transfer on death deed (`transfer_on_death_deed`), trust
decanting, the trust director/protector, and the trustee accounting.

A grep of both data files for `15680`, `15681`, `15682`, `15683`,
`15684`, `15685`, `15686`, `15687`, `15688`, `16420`, `7.776`,
"trustee compensation", "trustee fee", "reasonable compensation",
"exculpat", "Uzyel", "Gilfillan", "Thorpe", "Gump", "Scott v.
McDonald", and "Donahue" was run and every hit opened in context. That
check found: (1) §§ 15680, 15682, 15683, 15684, 15685, 15686, 15687,
15688 and 16420, and rule 7.776, have **zero** hits anywhere in the
corpus; (2) § 15681 appears in exactly one clause,
`trustprotector_procedural_defaults` of the Directed Trust Act sheet,
which cites it only in a list of default rules that apply to a trust
director — it does not state the compensation rules, the § 15680(b)
grounds, or any of the review machinery; (3) "trustee compensation"
appears incidentally in `benacct_required_contents` (an account must
state the trustee's compensation) and `trustremv_statutory_grounds`
(excessive compensation as a removal ground), neither of which explains
how compensation is set or reviewed; (4) Thorpe v. Reed, Scott v.
McDonald, and Estate of Gump are cited **nowhere** in the corpus; (5)
the existing `personal_representative_statutory_compensation_info_sheet`
covers the Probate Code § 10800 scale for a decedent's estate — a
different office, a different statute, and expressly contrasted here.
No existing document in any category is dedicated to trustee
compensation. The topic is therefore genuinely new, well-scoped,
statutorily anchored, and supported by three published Court of Appeal
decisions.

## What this document covers

13 clauses (`trustcomp_*`): 2 drafting (`trustcomp_declaration`,
`trustcomp_signature_block`) and 11 authority clauses:

- **`trustcomp_trust_instrument_controls`** (Prob. Code § 15680(a);
  Thorpe v. Reed) — the trust instrument's own compensation terms
  govern; Thorpe's reversal of a fee award to a temporary trustee where
  the trust denied a successor trustee compensation; the Estate of
  Whitney principle as Thorpe quotes it; the holding that §§ 15642(e)
  and 17206 confer no authority to compensate a temporary trustee
  differently from the instrument.
- **`trustcomp_court_may_fix_greater_or_lesser`** (§ 15680(b)(1)-(3),
  (c); Scott) — the three circumstances permitting greater or lesser
  compensation on proper showing, and the prospective-only effect of
  such an order.
- **`trustcomp_reasonable_compensation_default`** (§§ 15681, 15682;
  Estate of Gump) — reasonable compensation under the circumstances
  when the instrument is silent; entitlement on settlement of each
  account; the trial court's sound discretion.
- **`trustcomp_rule_7776_factors`** (Cal. Rules of Court, rule 7.776;
  Scott) — the eight non-exclusive factors, the rule's adoption and
  renumbering history, and Scott's use of factor (2).
- **`trustcomp_cotrustee_apportionment`** (§ 15683) — apportionment
  among cotrustees according to services rendered, subject to the
  instrument or the trustees' agreement.
- **`trustcomp_repayment_and_equitable_lien`** (§§ 15684, 15685) —
  repayment of expenditures properly incurred, and of improper ones to
  the extent they benefited the trust; the trustee's equitable lien.
- **`trustcomp_fee_increase_notice`** (§ 15686) — what "trustee's fee"
  includes, the 60-day written notice before an increased fee, the
  three notice recipients, and the effect of a timely § 17200 petition.
- **`trustcomp_attorney_trustee_dual_compensation`** (§ 15687;
  § 17200(b)(21)) — the dual-compensation restriction for an
  attorney-trustee and for a trustee's relatives or law firm; the
  settlor-relative exception; the two approval routes after full
  disclosure; the void-waiver rule; the January 1, 1994 application
  date.
- **`trustcomp_petition_and_standard_of_review`** (§ 17200(a), (b)(9);
  § 15682; Scott; Gump) — the petition to fix, allow, or review the
  reasonableness of trustee compensation, and the abuse-of-discretion
  standard on appeal.
- **`trustcomp_reduction_or_denial_for_breach`** (§ 16420(a)(7); Gump;
  Scott) — reduction or denial of compensation as a breach-of-trust
  remedy; Gump's limit that absent fraud, personal benefit, or loss the
  denial reaches only services attributable to the mismanaged asset;
  Gump's rationale where there is no loss; Scott's affirmance of a
  total denial.
- **`trustcomp_public_guardian_trustee`** (§ 15688) — the carve-out
  referenced in § 15680(a) for a public guardian or public
  administrator appointed under § 15660.5.

Seven fields are declared: `trustName`, `trusteeName`,
`beneficiaryName`, `countyName`, `preparerName`, `dateSigned`,
`cityState`.

## Sources and how they were fetched (wave 161)

Every primary source was fetched **twice by two independent paths** —
two curl requests bearing different User-Agent and Accept-Language
header sets — and the extracted text of the two fetches compared
byte-for-byte.

| Source | Path A | Path B | Result |
| --- | --- | --- | --- |
| Prob. Code §§ 15680, 15681, 15682, 15683, 15684, 15685, 15686, 15687, 15688, 16420, 17200 | leginfo.legislature.ca.gov, Safari UA | leginfo.legislature.ca.gov, Firefox UA + en-GB Accept-Language | all 11 sections MATCH (identical SHA-256 of extracted text) |
| Cal. Rules of Court, rule 7.776 | courts.ca.gov `/cms/rules/index/seven/rule7_776`, Safari UA | same URL, Firefox UA | MATCH |
| Thorpe v. Reed (2012) 211 Cal.App.4th 1381 | courtlistener.com `/opinion/5811522/thorpe-v-reed/`, Safari header set + Referer | same URL, Firefox header set + Referer | MATCH |
| Scott v. McDonald (2018) 26 Cal.App.5th 463 | courtlistener.com `/opinion/6239858/scott-v-mcdonald/`, Safari header set | same URL, Firefox header set | MATCH |
| Estate of Gump (1991) 1 Cal.App.4th 582 | courtlistener.com `/opinion/2275313/estate-of-gump/`, Safari header set | same URL, Firefox header set | MATCH |

The CourtListener opinion pages were located through the public,
unauthenticated `/api/rest/v4/search/` JSON endpoint via curl; **no
CourtListener MCP tool call was made**, so none of the shared MCP quota
was consumed. The opinion pages returned HTTP 200 on both passes with a
`Referer: https://www.courtlistener.com/` header and a browser
User-Agent.

## Quote verification

**45 citation quotes across 11 authority clauses.** Each quote was
copied from the fetched source text and verified programmatically —
first at drafting time (`verify.py`) and again, after merging, by
re-reading `data/clauses.json` (`reverify.py`) — as an exact substring
of the normalized text of **both** independent fetches of the cited
section, rule, or opinion. Result: **45 of 45 verified in both fetches,
no failures.** Normalization collapses whitespace runs and non-breaking
spaces and applies Unicode NFC; no other transformation is applied.
Curly apostrophes and quotation marks are reproduced exactly as each
source renders them — leginfo uses `’` and `“ ”`, while the
CourtListener texts of Scott v. McDonald and Estate of Gump and the
courts.ca.gov text of rule 7.776 use straight `'` and `"`, so the same
word ("trustee's") appears with different apostrophes in different
quotes by design.

No quote required correction; nothing was paraphrased inside quotation
marks. Three source artifacts are disclosed in the relevant clauses'
`gap` fields rather than silently smoothed:

1. The CourtListener texts carry star-paging markers (e.g. `*1392`,
   sometimes glued to the following word as in `*1392compensated`).
   Every quotation is taken from within a single reporter page so that
   no marker falls inside a quoted passage; pin cites are read from
   those markers.
2. In the fetched text of **Scott v. McDonald** the star-paging runs
   `*143`-`*156`, which is the pagination of the parallel California
   Reporter citation (237 Cal.Rptr.3d 137), not of the official
   26 Cal.App.5th 463 citation. The Scott pin cites therefore give the
   California Reporter pages the fetched text actually shows, and each
   Scott clause's `gap` says so.
3. The Scott sentence quoted in
   `trustcomp_reduction_or_denial_for_breach` ends before the opinion's
   parenthetical citation to rule 7.776(2), which CourtListener's
   citation markup renders with inserted spacing (`( Cal. Rules of
   Court, rule 7.776(2) )`). Nothing inside the quoted words is
   altered.

Second-hand quotations are labelled as such in the `cite` field and
disclosed in the `gap`: the Estate of Whitney (1926) 78 Cal.App. 638
language is quoted **as it appears within** Thorpe, and the Estate of
Cassity (1980) 106 Cal.App.3d 569 language **as it appears within**
Gump; neither older opinion was separately fetched. Two published
decisions are captioned Estate of Gump (128 Cal.App.3d 111 (1982) and
1 Cal.App.4th 582 (1991)); all quotes here are from the 1991 opinion,
whose CourtListener page is captioned "Estate of Gump" and also indexed
as "Wells Fargo Bank v. Gump," and the `gap` of the breach clause says
so. Secondary materials the opinions discuss (Rest.2d Trusts § 243,
Bogert, the Law Revision Commission comment) and statutes referred to
but not fetched (Prob. Code §§ 15660.5, 15800, 16062, 16247, 17203,
10800 et seq.) are described only as the fetched sources describe them,
and each such limit is stated in the relevant `gap`.

## Schema and corpus validation

Authority clauses carry exactly `{id, title, kind, status, checkedDate,
body, gap, citations[{case, cite, url, quote}]}` in that order, each
with a non-empty `gap`; drafting clauses exactly `{id, title, kind,
body}`; the document exactly `{id, title, description, categories,
clauseOrder, fields}` (the majority key order in the file). After the
merge both data files parse; all 5,535 clause ids and all 664 document
ids are unique; every `clauseOrder` entry across every document
resolves to an existing clause; and every `{{placeholder}}` in every
clause body and gap resolves to a field declared by the owning
document. The merge was purely additive: the diff touches only the 13
appended clause objects and the one appended document object.
`checkedDate` is 2026-09-13. Estate Planning now has 84 documents.

## Inform, never advise

Every authority clause states what the statute, the rule of court, or
the opinion provides; none tells the reader what fee to charge, whether
to object to a fee, whether to petition, or how to structure a trust's
compensation clause. The declaration and signature clauses state
expressly that the sheet does not determine what compensation the named
trustee may claim, whether any fee is reasonable, whether compensation
should be fixed, allowed, reduced, or denied, or what rights any
beneficiary has, and that only a court applying the cited authorities
to the actual trust instrument, accounts, and facts can decide those
questions.
