# Real Estate, new document: Methamphetamine or Fentanyl Contaminated Property Disclosure — Information Sheet

Wave 152 (Real Estate category). This wave continues the round-robin
covered by waves 146/148/150 (Confidentiality & IP, Ending employment,
Business Formation, Real Estate).

## Why this document

Read `data/documents.json` first and confirmed the existing ~79 Real
Estate documents do not cover this topic. The corpus already has a
`notice_of_default_foreclosure_info_sheet` (Civ. Code § 2924 et seq.
nonjudicial foreclosure timeline) and a `trustee_sale_surplus_proceeds_info_sheet`
(post-sale surplus proceeds) — both distinct from this document's subject.
Grepped the full clause/document id list for "meth" and "contam" — zero
hits anywhere in the corpus before this addition. No existing document
addresses a property's disclosed history as an illegal drug-manufacturing
site.

## Topic and controlling law

California's Methamphetamine or Fentanyl Contaminated Property Cleanup
Act, Health & Safety Code, Division 20, Chapter 6.9.1 (§§ 25400.10 -
25400.47). Originally enacted in 2005 covering only methamphetamine
contamination; substantially amended in 2019 (Stats. 2019, Ch. 691, AB
1596, effective January 1, 2020) to add parallel fentanyl-contamination
coverage throughout the chapter. The document focuses on: the chapter's
short title and legislative findings (§ 25400.10), key definitions
(§ 25400.11), the local health officer's contamination-order and lien
process (§ 25400.22), the property owner's/occupant's duty to vacate and
to retain an authorized remediation contractor (§ 25400.25), when the
chapter's disclosure duties run and how they end via a no-further-action
determination (§§ 25400.27-25400.28 chapeau), and the separate written
disclosure-and-acknowledgment duties owed to a prospective buyer, a
prospective tenant, and a prospective buyer/tenant of an affected
mobilehome, manufactured home, or recreational vehicle (§ 25400.28(a)-(c)).

## Method — independent double-fetch

All statutory sections were fetched directly from
`leginfo.legislature.ca.gov` (the official California Legislative
Information site), each fetched **twice**, independently, using two
distinct User-Agent strings, through the environment's proxy via `curl`
(WebFetch on this host returns an LLM-generated paraphrase/summary rather
than raw text, so `curl` was used for the verbatim source text needed for
quote verification):

- UA1: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
  (KHTML, like Gecko) Chrome/120.0 Safari/537.36`
- UA2: `Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101
  Firefox/121.0` (25400.28's second fetch used a Safari/macOS UA string
  instead, with the same result)

Sections fetched (twice each): § 25400.10, § 25400.11, § 25400.22,
§ 25400.25, § 25400.27, § 25400.28. Each pair was extracted from the
`id="single_law_section"` div of the raw HTML response, HTML tags
stripped, and diffed programmatically — **all six section pairs came back
byte-identical** between the two independent fetches. No caching or
mirroring artifacts were found.

## Quote-by-quote verification

Wrote a Python script that normalizes whitespace (collapsing HTML
line-wrap breaks and repeated spaces to single spaces, since the
leginfo.legislature.ca.gov HTML source wraps statutory text across raw
line breaks mid-sentence — a benign source-formatting artifact, not a
substantive character difference) and then checks each clause's
`citations[].quote` as an exact substring of the corresponding fetched
section text. All **19 citation quotes**, across all 8 authority clauses,
were confirmed as exact verbatim substrings of the confirmed (dual-fetch
identical) statutory text. No genuine defects were found — no quote
required a wording correction, so no correction-disclosure sentence was
needed in any `gap` field for that reason.

Quotes include the statute's own curly quotation marks (e.g. `"Property
owner"` as it appears with typographic quotes in the official text) and
curly apostrophes (e.g. "seller's or lessor's agent") — these were
preserved verbatim from the source rather than normalized to straight
quotes, since they are the actual characters used in the official
statutory text.

## Clauses added (10 total: 8 authority + 2 drafting)

- **`methfent_declaration`** (drafting) — purpose statement, ties the
  document to the merge fields without directing any party's conduct.
- **`methfent_act_framework`** (authority; §§ 25400.10(b), (a)(1), (a)(5))
  — short title and the original methamphetamine + later-added fentanyl
  legislative findings. `gap` discloses that the chapter originally
  covered only methamphetamine and fentanyl coverage was added by the
  2019 amendment.
- **`methfent_definitions`** (authority; § 25400.11(b), (v)(1), (w)(1))
  — "contaminated," "property" (parcel/structure branch), and "property
  owner." `gap` discloses the definition of "property" also separately
  covers mobilehome-park-sited units (handled in a later clause) and that
  ~25 other defined terms are not reproduced.
- **`methfent_order_and_lien`** (authority; § 25400.22(a)(1), (a)(4),
  (g)(6), (g)(7), (g)(9)) — the lien, the use/occupancy-prohibiting
  order, and three of the order's nine required-content items (use
  prohibition, decontamination-measures description, $5,000 civil
  penalty statement). `gap` discloses these are illustrative, not all
  nine required-content items, and notes parallel mobilehome/RV
  lien-equivalent procedures exist but aren't independently quoted.
- **`methfent_vacate_and_remediation`** (authority; § 25400.25(a), (c))
  — the immediate-vacate duty for a hazardous zone and the 30-day
  deadline to retain an authorized remediation contractor. `gap`
  discloses "authorized contractor" is itself defined by cross-reference
  to § 25400.40, which was not independently fetched.
- **`methfent_disclosure_duration_release`** (authority; § 25400.28
  chapeau, § 25400.27(a)) — states the disclosure duties below run until
  a no-further-action notice issues, and how that determination is made.
  `gap` discloses the lien/restraint/vehicle-license-stop release
  mechanics of § 25400.27(b) are not independently quoted, and that this
  document does not confirm any specific property's current order status.
- **`methfent_buyer_disclosure`** (authority; § 25400.28(a)) — written
  notice, copy of the pending order, and buyer's written acknowledgment.
  `gap` discloses the cross-reference to Civil Code §§ 1102.3/1102.3a
  (the Real Estate Transfer Disclosure Statement scheme, covered
  elsewhere in this corpus) was not independently verified beyond what
  § 25400.28(a) itself states.
- **`methfent_tenant_disclosure`** (authority; § 25400.28(b)) — written
  notice to an applicant-tenant, copy of the order, tenant's written
  acknowledgment before signing, notice attachment to the rental
  agreement, and the statutory voidability remedy for noncompliance.
- **`methfent_mobilehome_disclosure`** (authority; § 25400.28(c)(1),
  (c)(4)) — the mobilehome/manufactured-home/recreational-vehicle-
  specific sale/rental prohibition until written notice issues to the
  buyer/tenant and the park owner, and the voidability remedy. `gap`
  discloses that acknowledgment-timing, attachment, and park-owner
  remediation-authority provisions in the same subdivision's other
  paragraphs are not independently quoted.
- **`methfent_ack`** (drafting) — signature/date acknowledgment block,
  explicitly states it is not legal advice and does not resolve any
  disclosure question.

## Schema and corpus-wide checks

- Confirmed exact current schema by reading `data/clauses.json` and
  `data/documents.json` before drafting; every authority clause carries
  exactly `{id, title, kind, status, checkedDate, body, gap, citations}`
  and every citation exactly `{case, cite, url, quote}`; every drafting
  clause carries exactly `{id, title, kind, body}` — verified
  programmatically against the merged file, no extra or missing keys.
- Checked for `{{...}}` placeholder leakage into `title`, `gap`, and all
  citation fields — none found (placeholders appear only in the two
  drafting-clause `body` fields, resolved by the document's own `fields`
  list).
- Checked all 10 new clause ids and the new document id against the full
  pre-merge corpus — no collisions. Reused the existing
  `propertyAddress` / `sellerLandlordName` / `buyerTenantName` field
  convention already used by `mold_disclosure_info_sheet` and
  `stigmatized_property_disclosure_info_sheet` — no new field
  definitions were introduced.
- After merging, ran a corpus-wide validation script confirming: both
  `data/clauses.json` and `data/documents.json` still parse as valid
  JSON; no duplicate clause ids across all 5,075 clauses; no duplicate
  document ids across all 625 documents; every clause id in the new
  document's `clauseOrder` exists in `data/clauses.json`; every
  `{{field}}` placeholder referenced by the new document's clause bodies
  resolves against the new document's own `fields` list.

## Net changes

- New document: Methamphetamine or Fentanyl Contaminated Property
  Disclosure — Information Sheet
  (`meth_fentanyl_contaminated_property_disclosure_info_sheet`), 10
  clauses (8 authority + 2 drafting), in the Real Estate category. No
  new fields.
- Corpus: 5,065 → 5,075 clauses; 624 → 625 documents.
