# Real Estate, new document: Post-Foreclosure Tenant 90-Day Notice — Information Sheet

## Why this document

Third processed item of wave 92 (Real Estate slot). Read the existing
"Notice of Default" and "California Homeowner Bill of Rights" documents'
clauses in full — confirmed both stop at the trustee's-sale/pre-sale-
servicer-conduct stage, never reaching post-sale eviction of occupants.
Grepped the corpus for "1161b," "bona fide tenant," "90-day notice," and
"successor in interest" — zero substantive hits. Confirmed a real,
non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (intro/scope, closing acknowledgment) and 5
authority clauses, citing CCP §§ 1161a(b)(3), (c), 1161b(a), (b), (c),
(d)-(e):

- **`postforeclosure90_90day_notice_general_rule`** (§ 1161b(a)) — the
  90-day notice requirement for a periodic-tenancy tenant, displacing the
  shorter § 1161a period.
- **`postforeclosure90_prior_default_rule_1161a`** (§ 1161a(b)(3), (c)) —
  the general rule § 1161b's 90-day requirement overrides.
- **`postforeclosure90_fixedterm_lease_protection`** (§ 1161b(b)) — the
  fixed-term lease survival right and its four disqualifying conditions
  (owner-occupancy intent, mortgagor-relative lessee, non-arm's-length
  lease, below-market rent).
- **`postforeclosure90_burden_of_proof`** (§ 1161b(c)) — the purchaser's
  burden of proving a disqualifying condition.
- **`postforeclosure90_exceptions_partytonote_localordinance`**
  (§ 1161b(d)-(e)) — the party-to-the-note exclusion and the local
  just-cause-ordinance savings clause.

## Genuine corrections and findings

- **A genuine correction to the task's own framing**: the brief assumed
  "bona fide tenant" was § 1161b's own statutory term. Independently
  fetching the current text showed the statute never uses that phrase —
  it comes from the now-expired federal Protecting Tenants at Foreclosure
  Act. What § 1161b(b) actually does is grant a fixed-term lessee a right
  to ride out the lease term, defeasible only by one of four listed
  conditions — those conditions gate the fixed-term-lease survival
  protection specifically, not the baseline 90-day notice, which applies
  to any periodic tenant regardless of those factors. Disclosed explicitly
  in the intro clause rather than presenting "bona fide tenant" as
  statutory language.
- **A second genuine correction**: the brief's "immediate successor in
  interest" phrasing is also not the statute's own language — § 1161b uses
  only "the purchaser or successor in interest." Corrected accordingly.
- Confirmed current CCP § 1161b subsection lettering (a)-(e), with (b)
  further broken into unlettered (1)-(4), and confirmed the statute is
  currently operative and permanent (last amended by SB 18, Stats. 2019,
  ch. 134, § 3, effective Jan. 1, 2020, with no sunset clause in the
  fetched text) — addressing the research brief's specific instruction to
  verify this wasn't an older, expired version.
- A genuine, disclosed source-side finding: the agent traced an apparent
  quote mismatch to leginfo's use of `&nbsp;` (U+00A0) after subdivision
  letters — the opposite of the usual "missing space" defect pattern (an
  unusual space character, not a missing one) — confirmed as a genuine
  rendering artifact requiring no text-level fix.
- Correctly declined to draft a fillable notice-to-quit template, judging
  that determining whether a specific tenancy is periodic or fixed-term,
  or whether a disqualifying condition applies, would cross from
  "inform" into "advise" — consistent with the sibling foreclosure
  documents' own pure-info-sheet structure.

## Honest gap(s) disclosed

How the 90-day period is counted (calendar vs. court days) is not stated
by the statute and not addressed here. CCP § 1162's service mechanics
(personal delivery, substituted service, posting) are out of scope. The
other § 1161a enumerated sale-causes unrelated to foreclosure (execution
sale, judicial foreclosure, private sale, conditional-sale-contract
default) are not covered. Any specific city/county just-cause ordinance
(preserved by § 1161b(e)) is not researched — a reader would need to
consult that jurisdiction's own ordinance. The separate statewide
just-cause statute (Civ. Code § 1946.2, AB 1482), already covered
elsewhere in this corpus, is noted as operating independently. This
document does not itself serve any notice, and does not determine whether
any specific tenancy is periodic or fixed-term, or whether any specific
condition or exception applies.

## Method

Fetched CCP §§ 1161a and 1161b from `leginfo.legislature.ca.gov`, each
fetched twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical. All 6 citation quotes across the 5 authority
clauses programmatically confirmed as exact contiguous substrings ending
at sentence/clause boundaries (no ellipsis-joined or mid-word-truncated
quotes). Independently re-verified during integration review via a
fifty-eighth fetch (a distinct curl User-Agent string,
"Groundtruth-58thVerify-PostForeclosure90/1.0") of both sections — all 6
quotes confirmed clean on direct substring match.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fifty-eighth independent
  fetch during integration review; all 6 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections (§ 1161a vs. § 1161b);
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 6 populated
  with proper citation identifier strings.
- Five fields reused (`propertyAddress`, `tenantName`, `buyerName`,
  `dateSigned`, `cityState`). One new field required
  (`foreclosureSaleDate`) — grepped the corpus and confirmed no existing
  field covers a foreclosure-sale date specifically.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Post-Foreclosure Tenant 90-Day Notice — Information Sheet
  (`post_foreclosure_tenant_90_day_notice_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Real Estate category. One new field
  (`foreclosureSaleDate`).
- Corpus: 3,122 → 3,129 clauses; 412 → 413 documents. Third processed
  item of wave 92.
