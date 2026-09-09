# Confidentiality & IP, new document: Copyright Preemption Doctrine — Information Sheet

Wave 148 (Confidentiality & IP category), continuing the round-robin wave
148 covers with wave 146 (Confidentiality & IP, Ending employment, Business
Formation, Real Estate). This worktree adds one document to the
Confidentiality & IP category.

## Why this document

Checked `data/documents.json` for the ~77 existing Confidentiality & IP
documents before starting. The task's suggested example topics were checked
and rejected as already substantively covered:

- CUTSA damages/attorney's fees (Civ. Code §§ 3426.3-.4) — already fully
  quoted, with both statutory sections cited verbatim, in the existing
  `trade_secret_cease_and_desist` document's `tsmisap_ca_remedies` clause.
- Domain name/cybersquatting — already covered by
  `domain_name_dispute_info_sheet`.
- Non-disparagement clause enforceability — already covered by
  `non_disparagement_agreement_info_sheet` and `speak_out_act_info_sheet`.
- No-poach/no-solicit-of-employees between businesses — the leading
  authority (*AMN Healthcare, Inc. v. Aya Healthcare Services, Inc.*) is
  already cited and quoted at length in the existing `employee_nonsolicit`
  document's `nonsolicit_narrow_restraint` clause.

Also checked and confirmed not covered: federal Copyright Act preemption of
state-law claims under 17 U.S.C. § 301. A grep across `data/clauses.json`
found "17 U.S.C. § 301" quoted only in narrow, doctrine-specific contexts
(VARA's own preemption clause, and the Resale Royalties Act's preemption
clause) — no document addresses the general doctrine: the two-condition
threshold test and the judicially developed "extra element" test that
California courts use to decide whether a state-law claim (breach of
contract, fraud, breach of confidence, etc.) touching material within
copyright's subject matter survives alongside, or is displaced by, federal
copyright law. This is a natural companion to the existing Trade Secret
Preemption Doctrine Information Sheet (which addresses a different,
state-law-internal preemption question under Civil Code § 3426.7), and is
directly useful background for any of this project's NDA, trade-secret, or
idea-submission documents where the confidential or proprietary material at
issue might also be copyrightable.

## What this document covers

9 clauses: 2 drafting (purpose, signature/acknowledgment) and 7 authority
clauses.

- **`cpreempt_statute_301a`** / **`cpreempt_statute_301b`** — the statutory
  text of 17 U.S.C. § 301(a) (equivalent rights governed exclusively by
  federal law) and § 301(b)(3) (non-equivalent rights are not preempted).
- **`cpreempt_case_two_condition_test`** — *Fleet v. CBS, Inc.*, 50
  Cal.App.4th 1911 (1996): the two-condition threshold (work within
  copyright's subject matter; right asserted equivalent to § 106 rights).
- **`cpreempt_case_equivalence_test`** — *Fleet*'s test for when a state-law
  right is "equivalent" to a copyright right, applied to a right-of-publicity
  claim over a copyrighted film performance.
- **`cpreempt_case_extra_element_test`** — *Kabehie v. Zoland*, 102
  Cal.App.4th 513 (2002): the "extra element" test, and its note that the
  California Supreme Court has not addressed this issue.
- **`cpreempt_case_breach_of_contract_rule`** — *Kabehie*'s specific holding
  on how the extra-element test applies to breach of contract claims
  (adopting the majority view that a bare promise is not itself the extra
  element; a right to payment, royalties, or other independent covenant is).
- **`cpreempt_case_fraud_extra_element`** — *Kabehie*'s holding that fraud
  claims are not preempted because misrepresentation is an extra element,
  applied to the specific fraud claim before the court.

## Sources fetched and dual-fetch confirmation

**Statute — 17 U.S.C. § 301**, fetched twice directly from the official U.S.
Code site (`uscode.house.gov`) via `curl`, using two different `User-Agent`
strings (`GroundtruthResearchBot/1.0` and `curl/8.5.0 GroundtruthResearch/2`),
about a minute apart. The two raw HTML responses differed only in
dynamically generated JSF session-state tokens (a hidden form field and a
session-id fragment in the form action URL) that regenerate on every request
to that host; after stripping HTML tags and that session-state noise, a
`diff` of the two normalized text extracts showed **zero differences**
(confirmed programmatically). Both § 301(a) and § 301(b)(3) quotes were
confirmed as exact substrings of this normalized, dual-fetch-confirmed text.

**Case law — fetched via CourtListener MCP tools**, per the required
pipeline:

- *Kabehie v. Zoland*, 102 Cal.App.4th 513 (2002) — found via `search`
  (type "o"), cluster_id 2246073, lead opinion_id 9745064 (note: differs
  from the combined-opinion id, which coincides with the cluster_id here —
  checked the `cluster_opinions` field carefully to pick the correct lead
  opinion). Fetched via `get_endpoint_item` (`opinions`, fields
  `html_with_citations`/`plain_text`). All four quoted passages
  (`cpreempt_case_extra_element_test`, `cpreempt_case_breach_of_contract_rule`,
  `cpreempt_case_fraud_extra_element`, and the abbreviated version of the
  two-condition test) were confirmed programmatically as exact substrings of
  the fetched `html_with_citations` text (after HTML-tag stripping). As a
  second, independent verification path, each quoted phrase was also run as
  a separate CourtListener full-text `search` query; each returned Kabehie
  v. Zoland as a match (uniquely, for the two longer phrases tested) —
  disclosed honestly in each clause's `gap` field as querying the same
  underlying database rather than a second independently hosted source.
- *Fleet v. CBS, Inc.*, 50 Cal.App.4th 1911 (1996) — discovered as the
  original source of the two-condition test via the full-text search
  cross-check above (cluster_id 2292439). This is a genuinely independent
  **second primary case**, not merely a second query against the same
  document. Fetched twice via `get_endpoint_item` (`opinions`, field
  `html_with_citations`) at different points in this session (the first
  attempt hit CourtListener's 5/min rate limit — HTTP 429 — and was retried
  after the limit cleared); both fetches returned byte-identical opinion
  text. Both quotes drawn from Fleet (`cpreempt_case_two_condition_test`,
  `cpreempt_case_equivalence_test`) were visually cross-checked
  character-for-character against both fetches directly in the tool output
  (the response was not large enough to be written to a persisted-output
  file by the tool, so exact-substring matching was done by careful manual
  transcription-check against the full raw JSON shown in-conversation,
  rather than by an automated `in` check against a saved file — a real,
  disclosed difference in verification rigor from the statute and Kabehie
  quotes, which were checked programmatically against saved files).

Direct fetches of `courtlistener.com` opinion pages via `curl`/`WebFetch`
(attempted as a further independent path) returned an AWS WAF bot-challenge
(HTTP 202, `x-amzn-waf-action: challenge`, zero content) rather than page
content; Justia returned HTTP 403; `leagle.com` and `scholar.google.com`
were blocked by this environment's egress proxy policy. This matches limits
other agents in this effort have already disclosed for direct courtlistener.com
fetches, and is why the CourtListener MCP tool plus a full-text-search
cross-check (and, for Fleet, a second independent case) was used instead.

## Quote-by-quote verification results

| Clause | Quote source | Verified against |
|---|---|---|
| `cpreempt_statute_301a` | 17 U.S.C. § 301(a) | Dual curl fetch, byte-identical after normalization |
| `cpreempt_statute_301b` | 17 U.S.C. § 301(b)(3) | Dual curl fetch, byte-identical after normalization |
| `cpreempt_case_two_condition_test` | *Fleet v. CBS, Inc.* | Two independent `get_endpoint_item` fetches, cross-checked in full-text search |
| `cpreempt_case_equivalence_test` | *Fleet v. CBS, Inc.* | Two independent `get_endpoint_item` fetches |
| `cpreempt_case_extra_element_test` | *Kabehie v. Zoland* | `get_endpoint_item` fetch + independent full-text search match |
| `cpreempt_case_breach_of_contract_rule` | *Kabehie v. Zoland* | `get_endpoint_item` fetch + independent full-text search match |
| `cpreempt_case_fraud_extra_element` | *Kabehie v. Zoland* | `get_endpoint_item` fetch + independent full-text search match |

No genuine defects were found in any quote — no character present in a
proposed quote was absent from its source. All page-break `<page-number>`
markers embedded mid-opinion in the CourtListener HTML were checked against
each candidate quote's start/end offsets, and quote boundaries were chosen
to avoid crossing any such marker, so no formatting artifact (a stray page
number inserted mid-sentence) needed to be stripped or disclosed as a
correction. No `gap` field required a "genuine defect, corrected" disclosure
sentence on that basis.

## Honest limitations disclosed (in each clause's `gap` field)

- Both *Kabehie* and *Fleet* are Second Appellate District decisions; the
  document does not claim every California appellate district uses
  identical language, and it discloses that *Kabehie* itself states the
  California Supreme Court has not addressed federal copyright preemption
  of state actions.
- The fraud-claim clause quotes *Kabehie*'s own case-specific holding, not
  a direct quotation of *Gladstone v. Hillel* (which *Kabehie* cites for the
  general "fraud involves the extra element of misrepresentation"
  proposition); *Gladstone* itself was not independently fetched or
  verified for this document, and the `gap` field says so explicitly.
- The Fleet quotes' verification method (careful manual cross-check against
  full in-conversation tool output, rather than an automated substring
  check against a saved file) is disclosed as a real, if modest, difference
  in rigor from the programmatically-verified statute and Kabehie quotes.
- Statutory quotes reflect the currently codified text of § 301(a)/(b),
  which has not changed in the quoted portions since *Fleet* and *Kabehie*
  were decided, though Congress has since added further subsections to
  § 301 not addressed in this document (e.g., a 2018 addition concerning
  pre-1972 sound recordings) because they concern a narrower subject.

## Method

1. Checked `data/documents.json` and `data/clauses.json` for existing
   Confidentiality & IP coverage; rejected several suggested topics as
   already covered; selected copyright preemption doctrine.
2. Fetched 17 U.S.C. § 301 twice from `uscode.house.gov` via `curl` with two
   different User-Agent strings; confirmed byte-identical after normalizing
   HTML/session-state noise.
3. Used CourtListener `search` (type "o") to find *Kabehie v. Zoland*;
   fetched its opinion via `get_endpoint_item`; extracted and verified
   candidate quotes as exact substrings programmatically.
4. Used CourtListener full-text `search` as an independent cross-check for
   each Kabehie quote, which also surfaced *Fleet v. CBS, Inc.* as the
   original source of the two-condition test.
5. Fetched *Fleet v. CBS, Inc.* twice via `get_endpoint_item` (rate-limited
   and retried once); cross-checked quotes manually against both fetches.
6. Drafted 9 clauses matching the exact schema in `data/clauses.json` and
   `data/documents.json` (verified against several existing documents
   first), keeping every clause in "inform, never advise" voice.
7. Merged via a Python script that validates: no duplicate clause/document
   ids, every clause has exactly the allowed schema keys, every citation has
   exactly `{case, cite, url, quote}`, `clauseOrder` matches the new clause
   set exactly, every document field referenced by `{{...}}` in a clause
   body exists in the document's `fields` array, and no `{{` template syntax
   leaked into any `title`, `gap`, or citation field.
8. Ran corpus-wide validation after merging: both JSON files parse: clause
   ids and document ids are unique across the full corpus (4,922 clauses,
   609 documents); every `clauseOrder` reference across all 609 documents
   resolves to an existing clause id; category counts confirmed (78
   documents now in Confidentiality & IP, up from 77).

## Net changes

- New document: Copyright Preemption Doctrine — Information Sheet
  (`copyright_preemption_doctrine_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `claimsAtIssueDescription` (others — `preparerName`, `companyName`,
  `adversePartyName`, `dateSigned`, `cityState` — reuse the existing
  corpus-standard field ids and follow the same conventions).
- Corpus: 4,913 → 4,922 clauses; 608 → 609 documents. Confidentiality & IP:
  77 → 78 documents.
- Wave 148, Confidentiality & IP category.
