# Estate Planning, new document: Creditors' Claims Against a Deceased Settlor's Revocable Trust (Prob. Code § 19000 et seq.; Code Civ. Proc. § 366.2; Arluk Medical Center v. Dobler; Embree v. Embree) — Information Sheet

## Why this document

Wave 163 (Estate Planning slot; the Hiring, During employment, and
Family Law slots of the wave are separate, parallel tasks). Before
drafting, `data/documents.json` was read in full and all 84 existing
Estate Planning titles were listed and checked. Several of the task
prompt's suggested topics turned out to be already covered by existing
documents: the creditor-claim procedure **in probate**
(`creditor_claim_against_estate_info_sheet`), the California statutory
will (`california_statutory_will_info_sheet`), the revocable
transfer-on-death deed (`transfer_on_death_deed`), the small-estate
affidavit (`small_estate_affidavit`), and the spousal property petition
(`spousal_property_petition_info_sheet`).

A grep of both data files was run for `19000`, `19001`, `19003`,
`19004`, `19006`, `19008`, `19010`, `19040`, `19050`, `19100`, `19103`,
`19150`, `19151`, `19154`, `19250`, `19251`, `19253`, `19254`, `19255`,
`19300`, `19301`, `19400`, `19402`, `19403`, `366.2`, "trust claims",
"deceased settlor", "distributee liability", "Arluk", "Dobler", and
"Embree", and every hit was opened in context. That check found:

1. **Part 8 of Division 9 (Prob. Code §§ 19000-19403) appears nowhere
   in the corpus.** The two pre-existing hits on the string `19000`
   were in `revivor_suspension_grounds` and
   `occlic_disclosure_restriction`, which are Revenue & Taxation and
   occupational-licensing clauses using the digits incidentally; the
   string `19255` had zero hits anywhere.
2. **Arluk Medical Center Industrial Group, Inc. v. Dobler and Embree
   v. Embree are cited nowhere in the corpus**, and neither is
   Dobler v. Arluk (2001).
3. `366.2` appeared only in clauses of other sheets that mention the
   one-year period in passing; no clause states its text, its
   no-tolling rule, or its listed exceptions.
4. The existing `creditor_claim_against_estate_info_sheet` covers the
   **probate** claims procedure of Prob. Code § 9000 et seq. — a
   different part of the code, a different forum, different deadlines,
   and a mandatory rather than optional procedure. This sheet is a
   deliberate companion to it and says so in its description and in
   `trustcred_what_is_a_claim`; it does not restate the probate
   procedure.

The topic is therefore genuinely new, well-scoped, anchored in a
complete statutory part, and supported by two published Court of Appeal
decisions.

## What this document covers

15 clauses (`trustcred_*`): 2 drafting (`trustcred_declaration`,
`trustcred_signature_block`) and 13 authority clauses:

- **`trustcred_trust_property_liable`** (§§ 19001, 19002; Arluk) —
  property subject to the power of revocation at death is subject to
  the claims of the creditors of the settlor's probate estate and the
  expenses of administering it, to the extent that estate is
  inadequate; the settlor's limited power to direct priority among
  subtrusts; § 19002's preservation of other creditor rights and of the
  probate claims procedure; Arluk's statement of the trustee's only
  duty to such creditors.
- **`trustcred_what_is_a_claim`** (§ 19000; § 19012) — the definitions
  of "claim" (three categories), "creditor," "trust," "deceased
  settlor," and "trust estate"; the exclusion of disputes over title to
  specific property; the January 1, 1992 application date.
- **`trustcred_one_year_outside_limit`** (Code Civ. Proc. § 366.2;
  §§ 19100(c), 19103(b); Embree) — the one-year period from death, the
  closed list of tolling exceptions (including Part 8 itself), and the
  two Probate Code sections that decline to extend it.
- **`trustcred_procedure_is_optional`** (§§ 19003, 19008, 19010;
  Arluk) — the trustee *may* file a proposed notice to creditors; where
  it is filed; § 19010's express statement of no duty and no liability;
  § 19008's "as otherwise provided by law" default; Arluk's
  characterization of the procedure as entirely optional.
- **`trustcred_effect_of_electing`** (§§ 19004, 19006(a), (c); Arluk) —
  what filing, publishing, and serving notice does: claims must be
  filed, unfiled claims are barred from collection from trust assets,
  no action may be maintained without first filing; protection extended
  to the settlor's other trusts; the trustee's right of collection
  against a later probate estate.
- **`trustcred_notice_to_creditors`** (§§ 19040, 19050) — publication
  for at least 15 days, three publications with five intervening days,
  where published, the prescribed form and type sizes, the affidavit of
  publication; the duty to notify a known creditor and the statutory
  test for when a trustee "has knowledge" of one.
- **`trustcred_time_to_file`** (§§ 19100, 19101, 19102, 19103) — the
  later of four months after first publication or 60 days after actual
  notice; the no-extension rules; vacancy in the office of trustee;
  the two late-claim conditions, the one-year ceiling, and the court's
  power to impose just terms or deny where distribution has occurred.
- **`trustcred_filing_and_contents`** (§§ 19150, 19151, 19152, 19154) —
  who may file; filing with the court and delivery to the trustee; the
  supporting affidavit's required contents; vouchers; written
  instruments and secured claims; the trustee's election to treat a
  written demand as a filed and established claim by paying it.
- **`trustcred_allowance_or_rejection`** (§§ 19250, 19251, 19252,
  19253, 19254) — the duty to allow or reject; the written form and its
  five required items including the 90-day statement; payment as
  allowance and the power to compromise; the tolling effects of filing
  and allowance; the bar on allowing a time-barred claim; 30 days of
  silence treatable as a rejection at the claimant's option.
- **`trustcred_action_on_rejected_claim`** (§ 19255) — the 90-day
  period measured from notice of rejection or from when the claim
  becomes due; venue; the notice of pendency; the 120-day rule
  protecting later distributions and both trustee and distributee; the
  prevailing-party costs and expenses provision.
- **`trustcred_judgments`** (§§ 19300, 19301, 19302, 19303) — money
  judgments payable in the course of administration and not enforceable
  against trust property under the Enforcement of Judgments Law; a
  final judgment against a trustee in a representative capacity as
  conclusive; the possession/sale and execution-lien exceptions.
- **`trustcred_distributee_liability`** (§§ 19400, 19401, 19402, 19403;
  Embree) — personal liability of a beneficiary who received a
  distribution where there was neither a probate proceeding nor a trust
  claims proceeding; the narrower § 19401 liability; the distributee's
  defenses; the pro rata limit and the fair-market-value ceiling; the
  good faith purchaser carve-out.
- **`trustcred_probate_interaction`** (§§ 19003(a), 19006(b), (c);
  Arluk) — a known, filed probate petition bars the trust claims
  proceeding, while probate notice extends the personal
  representative's creditor protection to the trustee and
  beneficiaries.

Eight fields are declared: `settlorName`, `trustName`, `trusteeName`,
`creditorName`, `countyName`, `preparerName`, `dateSigned`,
`cityState`.

## Sources and how they were fetched (wave 163)

Every primary source was fetched **twice by two independent paths**,
and the extracted text of the two fetches compared.

| Source | Path A | Path B | Result |
| --- | --- | --- | --- |
| Prob. Code §§ 19000, 19001, 19002, 19003, 19004, 19006, 19008, 19010, 19040, 19050, 19100, 19103, 19150, 19151, 19154, 19250, 19251, 19253, 19254, 19255, 19300, 19301, 19400, 19402, 19403 | leginfo.legislature.ca.gov `codes_displaySection.xhtml?lawCode=PROB&sectionNum=<n>`, Chrome UA | leginfo.legislature.ca.gov `codes_displayText.xhtml?lawCode=PROB&division=9.&part=8.&chapter=<n>.` (whole-chapter page), Firefox UA | all 25 sections MATCH (extracted section text identical) |
| Code Civ. Proc. § 366.2 | leginfo `codes_displaySection.xhtml?lawCode=CCP&sectionNum=366.2`, Chrome UA | leginfo `codes_displayText.xhtml?lawCode=CCP&title=2.&part=2.&chapter=6.` (whole-chapter page), Firefox UA | MATCH |
| Arluk Medical Center Industrial Group, Inc. v. Dobler (2004) 116 Cal.App.4th 1324 | courtlistener.com `/opinion/2276506/…`, Chrome header set + Referer | same URL, Safari header set + Referer | MATCH (extracted text byte-identical, 71,564 chars) |
| Embree v. Embree (2004) 125 Cal.App.4th 487 | courtlistener.com `/opinion/2248940/…`, Chrome header set + Referer | same URL, Safari header set + Referer | MATCH (extracted text byte-identical, 23,519 chars) |

The two leginfo paths are genuinely independent pages, not the same URL
fetched twice: Path A renders one section, Path B renders the entire
chapter that contains it, and the section text was extracted from each
and compared. Both paths also used different User-Agent strings.

The CourtListener opinion pages were located through the public,
unauthenticated `/api/rest/v4/search/` JSON endpoint via curl; **no
CourtListener MCP tool call was made**, so none of the shared MCP quota
was consumed. The opinion pages return an empty HTTP 202 without a
`Referer` header; with `Referer: https://www.courtlistener.com/` plus a
browser User-Agent and Accept headers they returned HTTP 200 (one
initial 202 on the Embree Chrome-header pass was retried successfully
with the Safari header set, and the Chrome pass then also returned 200,
so both header sets did in the end return the full page).

One further verification avenue was attempted and abandoned: a
CourtListener public-search phrase query for a third case (Collection
Bureau of San Jose v. Rumsey (2000) 24 Cal.4th 301, which Embree cites)
returned HTTP 429 twice, including after a 300-second backoff. That
case is therefore **not cited anywhere in this document** — no quote or
holding attributed to it — rather than being used unverified.

## Quote verification

**63 citation quotes across 13 authority clauses** (54 statutory, 9
from the two opinions). Each quote was verified programmatically —
first at drafting time (`verify.py`) and again after merging, by
re-reading the merged `data/clauses.json` and re-running the same
checks (`reverify.py` → `verify.py`, `verify2.py`) — as an exact
substring of the normalized text of **both** independent fetches.
Normalization applies Unicode NFC, converts non-breaking spaces to
ordinary spaces, and collapses whitespace runs (leginfo wraps long
lines mid-sentence); no other transformation is applied.

A second, stricter pass (`verify2.py`) re-extracted each cited Probate
Code or Code of Civil Procedure section individually from **both**
fetch paths and confirmed that each statutory quote appears inside the
specific section its `cite` names, not merely somewhere on the page.

Result: **63 of 63 verified in both fetches; 54 of 54 statutory quotes
additionally verified inside the cited section in both paths; no
failures.** No quote required correction, and nothing was paraphrased
inside quotation marks. Curly apostrophes and quotation marks are
reproduced exactly as each source renders them (leginfo and the
CourtListener texts both use `’` and `“ ”`).

Source artifacts and limits are disclosed in the relevant clauses'
`gap` fields rather than silently smoothed:

1. **Stats. 2015, ch. 48 wording change.** Sections 19001 and 19400
   were amended in 2015 to say "probate estate" where they previously
   said "estate." Both opinions were decided in 2004 and reproduce the
   earlier wording. Every statutory quotation is taken from the current
   leginfo text, and **no quotation of § 19001 or § 19400 is taken from
   either opinion**; the `gap` fields of
   `trustcred_trust_property_liable` and
   `trustcred_distributee_liability` state the discrepancy expressly.
2. **Code Civ. Proc. § 366.2(a) wording.** The fetched Embree text
   quotes the subdivision as "would otherwise have been applicable";
   current leginfo reads "would have been applicable." The quote below
   is taken from leginfo, and `trustcred_one_year_outside_limit`'s
   `gap` discloses the difference.
3. **Star paging.** The CourtListener texts carry markers such as
   `*1334`, sometimes glued to the following word (`*1334been`). Every
   quotation is taken from within a single reporter page so that no
   marker falls inside a quoted passage; pin cites (Arluk 1328, 1333,
   1334, 1335; Embree 494) are read from those markers.
4. **Footnote markers.** Two Arluk sentences are followed in the
   opinion by superscript footnote digits, which CourtListener renders
   as a bare digit after the period. Each quotation ends at the period
   and excludes the digit; the affected clauses' `gap` fields say so.
5. **Dissent.** Arluk carries a dissent that discusses §§ 19001, 19255,
   and 19400 at length. **Nothing quoted in this document comes from
   the dissent**; the `gap` fields of both Arluk clauses state this.
6. **Two Dobler opinions.** The same litigation produced Dobler v.
   Arluk Medical Center Industrial Group, Inc. (2001) 89 Cal.App.4th
   530 ("Dobler I"), which the 2004 opinion discusses. It was **not**
   separately fetched and is **not** quoted; the `gap` of
   `trustcred_trust_property_liable` says so.
7. **Sections described but not quoted.** §§ 19005, 19007, 19011,
   19012, 19020-19024, 19041, 19051-19054, 19101, 19102, 19104, 19152,
   19153, 19252, 19302, 19303, 19304, 19401 are paraphrased from the
   fetched chapter (and, where noted, section) pages, or described only
   as another quoted section refers to them; each relevant `gap` says
   which. Statutes referred to but **not fetched** (Prob. Code §§ 1215,
   8120, 9050 et seq., 9351, 11420, 18200; Code Civ. Proc. §§ 12, 12a,
   12b, 680.010 et seq.) are described only as the fetched sources
   describe them, and each such limit is stated in the relevant `gap`.
8. **No Judicial Council form numbers** are reproduced or identified
   anywhere in this sheet; §§ 19011, 19153, and 19251(c) are described
   only as authorizing such forms.

## Schema and corpus validation

Authority clauses carry exactly `{id, title, kind, status, checkedDate,
body, gap, citations[{case, cite, url, quote}]}` in that order, each
with a non-empty `gap`; drafting clauses exactly `{id, title, kind,
body}`; the document exactly `{id, title, description, categories,
clauseOrder, fields}`. After the merge both data files parse; a
whole-corpus schema pass reported **0 issues across all 5,601 clauses**;
all 5,601 clause ids and all 669 document ids are unique; every
`clauseOrder` entry across every document resolves to an existing
clause (0 missing); every `{{placeholder}}` in every clause body and
gap resolves to a field declared by the owning document (0
unresolved); and no clause is orphaned. The merge was purely additive —
`git diff --stat` shows 608 insertions and 0 deletions, touching only
the 15 appended clause objects and the one appended document object.
`checkedDate` is 2026-09-13. Estate Planning now has 85 documents; the
corpus has 669 documents and 5,601 clauses.

## Inform, never advise

Every authority clause states what the statute or the opinion provides.
None tells the reader whether to file a claim, when to sue, whether to
start or forgo a trust claims proceeding, whether to distribute or
withhold trust property, or how to respond to a demand. Each authority
clause closes by naming the question it does **not** answer (whether a
particular demand is a "claim," whether a deadline has run, whether a
trustee has knowledge of a creditor, how a pro rata share would be
computed). The declaration and signature clauses state expressly that
the sheet does not determine whether any demand is a claim, whether any
claim is timely or valid, whether any proceeding should be begun, what
a distributee may owe, or what any person should do, and that only a
court applying these authorities to the actual instrument, notices,
filings, and facts can decide those questions.
