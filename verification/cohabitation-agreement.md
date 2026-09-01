# Family Law, eighth document: Cohabitation Agreement

## Why this document

Continuing the "go as deep as humanely possible" build-out. A
Cohabitation Agreement is used by unmarried couples living together to
document property, expense-sharing, and financial expectations between
themselves — distinct from marriage, domestic partnership, or child
custody. This is one of the most jurisdiction-variable areas of family
law in the corpus, because California has never codified the doctrine
from *Marvin v. Marvin*, 18 Cal.3d 660 (1976) — cohabitant contract
rights exist only as judicial doctrine, not statute.

## What this document covers

8 clauses: 3 drafting (recitals, property/expense schedule reference,
and signature block) and 5 authority clauses, all citing the same
single case:

- **`cohab_marvin_doctrine`** (18 Cal.3d 660, 665) — the core holding:
  California courts enforce express contracts between nonmarital
  partners concerning property and finances, except to the extent the
  contract is explicitly founded on meretricious sexual services.
- **`cohab_implied_contract_equitable_remedies`** (18 Cal.3d 660,
  684-685) — that courts can also find an implied contract or apply
  equitable remedies (quantum meruit, constructive/resulting trust)
  based on conduct, even without an express agreement.
- **`cohab_meretricious_consideration_limit`** (18 Cal.3d 660, 670-671,
  672) — the narrow line the doctrine actually draws: a contract fails
  only if sexual acts form an inseparable part of its consideration,
  and a severable portion supported by independent consideration is
  still enforced.
- **`cohab_no_automatic_sharing`** (18 Cal.3d 660, 665, 674) — the
  default backdrop the contract exists to change: unmarried
  cohabitants get no automatic property/income sharing absent an
  actual agreement, unlike marital community property.
- **`cohab_state_variation_disclosure`** (18 Cal.3d 660, 681) — the
  explicit disclosure that California has never codified this doctrine
  by statute, and that cohabitant contract enforceability varies
  enormously by state.

## Method

Fetched *Marvin v. Marvin* via two independent CourtListener MCP lookup
paths (`read_document` by `opinion_id` and by `cluster_id`, at multiple
chunk positions) — confirmed byte-identical both times, including an
apparent OCR artifact ("that, state of affairs" — a stray comma) that
was preserved verbatim rather than silently corrected.

Separately checked for any Family Code or Civil Code provision
codifying nonmarital-cohabitant contract rights — found none; the
doctrine remains pure case law. Checked for a later, independent
Court of Appeal restatement of the "no automatic sharing" default
(*Bergen v. Wood* (1993) 14 Cal.App.4th 854 and *Velez v. Smith* (2006)
142 Cal.App.4th 1154) — both discuss Marvin but only recite its holding
rather than independently confirming the point with separate reasoning,
so neither was used as a second source; the gap field discloses this
honestly rather than treating either as independent corroboration.

## Independent re-verification before shipping

Per this project's standing discipline of never trusting agent-reported
quotes blindly, all 6 quoted passages (5 clauses, with one clause
citing two passages) were independently re-verified in a second pass
against a fresh CourtListener fetch of the same opinion
(cluster_id 1148641 / opinion_id 9538168) — confirmed verbatim matches
on every quote, including the OCR-artifact comma in the § 681 quote,
which the second pass confirmed is genuinely present in CourtListener's
own source text (checked in the raw HTML, not just the parsed text) and
not an error introduced during this project's own extraction.

## Defect caught and fixed during integration

One authority clause (`cohab_marvin_doctrine`) cites a single source
(the Marvin opinion) but initially lacked the standard single-source
disclosure sentence — added during integration
("This is a single source (the Marvin opinion); no additional
independent source was found for this."). No `{{`-in-gap-field leaks
were found — the research agent double-checked its own output for this
defect class before reporting, and the automated leak-check confirmed
clean.

## Verification

- *Marvin v. Marvin* fetched via two independent CourtListener lookup
  paths, then independently re-verified a second time in a separate
  pass before merging.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic: citations to multiple
  passages of the same opinion are treated as one source and require
  the disclosure sentence — corrected on one clause, confirmed correct
  on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none, aside from the pre-existing "Signatures" pattern).
- Full-corpus regression run headless against all 57 documents.

## Net changes

- New document: Cohabitation Agreement (`cohabitation_agreement`), 8
  clauses (5 authority + 3 drafting), in the Family Law category.
- Corpus: 392 → 400 clauses; 56 → 57 documents.

## Family Law category summary

Family Law now has eight documents: Premarital Agreement, Marital
Settlement Agreement, Postnuptial Agreement, Parenting Plan, Child
Support Agreement, Domestic Partnership Declaration, Voluntary
Declaration of Parentage, and Cohabitation Agreement — covering
marriage, divorce, domestic partnership, parentage, child custody and
support, and unmarried cohabitation.
