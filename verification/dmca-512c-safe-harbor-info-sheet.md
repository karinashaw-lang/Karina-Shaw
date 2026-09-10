# Confidentiality & IP, new document: DMCA § 512(c) Safe Harbor for Online Service Providers — Information Sheet

## Why this document

Wave 152, Confidentiality & IP slot (one of four parallel, isolated
worktree tasks each adding one document to a different category).
Continues the round-robin covered by waves 146/148/150.

The task prompt's suggested candidates were checked first and each
turned out to already be covered in the existing ~79 Confidentiality &
IP documents:

- **DTSA whistleblower immunity notice (18 U.S.C. § 1833(b))** — a
  `grep` across `data/clauses.json` and `data/documents.json` found
  this is already the *full* notice-in-agreements requirement (not
  just the bare definition), covered by name in the `nda` document
  (`nda_dtsa_notice`), the `mutual_nda` document
  (`mutualnda_dtsa_notice_scope`), and cross-referenced in the
  `ip_agreement` document, with citations to § 1833(b)(1)-(4) including
  the policy-document alternative and anti-retaliation carve-out. Not
  available.
- **False patent marking** — already its own document,
  `false_patent_marking_info_sheet`. Not available.
- **California data breach notification, Civ. Code § 1798.82** —
  already its own document, `data_breach_notification_info_sheet`,
  whose description confirms full coverage of the trigger, 30-day
  deadline, notice content, substitute-notice thresholds, AG
  notification, and civil remedies. Not available.
- **Source-code escrow agreement basics** — not covered, but on
  investigation this is predominantly a private contractual practice
  without a dedicated controlling statute (the closest statutory
  hooks — UCC Article 9 and 11 U.S.C. § 365(n) — are already covered
  by this project's existing bankruptcy-protections document); judged
  too thin on "real, checkable legal sources" of the kind this
  pipeline requires, so not pursued further.

Pivoted to a topic identified by close reading of this project's own
existing DMCA documents: `dmca_takedown_notice` (the notice-sender's
required elements, designated-agent-finding requirement, and
misrepresentation liability), `dmca_counter_notification_info_sheet`
(the put-back procedure), and
`dmca_anticircumvention_reverse_engineering_info_sheet` (17 U.S.C.
§ 1201) all exist — but none of them states the safe-harbor
*eligibility conditions* a service provider itself must satisfy under
17 U.S.C. § 512(c), (i), (k), and (m): the three-part
knowledge/financial-benefit/notice-response test, the provider's own
duty to designate and register an agent, the repeat-infringer-policy
and standard-technical-measures threshold conditions applicable to
every § 512 safe harbor, the two statutory definitions of "service
provider," and the express no-monitoring rule. A `grep` for `512(c)`,
`safe harbor`, and `service provider` across the full corpus confirmed
no existing document addresses this from the provider's own
qualifying-conduct perspective. No further pivot was needed.

## What this document covers

12 clauses: 3 drafting (intro, cross-reference to sibling DMCA
documents, signature/acknowledgment) and 9 authority clauses, citing
17 U.S.C. § 512(c)(1) (intro clause, (A), (B), (C)), § 512(c)(2),
§ 512(i)(1)(A), § 512(i)(1)(B), § 512(i)(2), § 512(k)(1)(A),
§ 512(k)(1)(B), § 512(m), § 512(m)(1), plus one case citation:

- **`dmca512c_general_limitation`** — the § 512(c)(1) introductory
  limitation (monetary relief barred entirely; injunctive relief
  limited).
- **`dmca512c_knowledge_condition`** — the first condition: no actual
  knowledge, no "red flag" awareness, or expeditious removal once
  aware (§ 512(c)(1)(A)).
- **`dmca512c_financial_benefit_condition`** — the second condition:
  no financial benefit directly attributable to infringement the
  provider can control (§ 512(c)(1)(B)), plus the Ninth Circuit's
  "substantial influence" gloss on "right and ability to control"
  from *UMG Recordings, Inc. v. Shelter Capital Partners LLC*.
- **`dmca512c_notice_response_condition`** — the third condition:
  expeditious response to a qualifying takedown notification
  (§ 512(c)(1)(C)).
- **`dmca512c_designated_agent_duty`** — the provider's own duty to
  designate and register an agent with the Copyright Office
  (§ 512(c)(2)).
- **`dmca512c_repeat_infringer_policy`** — the threshold
  repeat-infringer termination policy condition applicable to every
  § 512 safe harbor (§ 512(i)(1)(A)).
- **`dmca512c_standard_technical_measures`** — the threshold
  standard-technical-measures accommodation condition and its
  statutory definition (§ 512(i)(1)(B), (i)(2)).
- **`dmca512c_service_provider_definitions`** — the two different
  statutory definitions of "service provider" (§ 512(k)(1)(A), (B)).
- **`dmca512c_no_monitoring_duty`** — the express no-monitoring rule
  (§ 512(m), (m)(1)).

## Genuine findings

- **A citation-label error caught and corrected before merge**: the
  first draft of every "case" field mislabeled the statute as
  "18 U.S.C. § 512" (copying the numbering pattern from this project's
  existing DTSA documents, which really are Title 18). The DMCA's
  § 512 is in fact codified at **17 U.S.C. § 512** (Title 17, the
  Copyright Act) — confirmed against the fetched Cornell LII page URL
  itself (`.../uscode/text/17/512`) and the document's own body text,
  which had correctly said "17 U.S.C." throughout. Fixed via a
  targeted `sed` substitution across all 15 statutory citation "case"
  fields before merge; no incorrect quote or URL was ever used, only
  the title-number label in the citation's descriptive "case" field.
- **A disclosed, single-source case-law addition**: the
  "right and ability to control" holding in
  *UMG Recordings, Inc. v. Shelter Capital Partners LLC*, 718 F.3d
  1006 (9th Cir. 2013), was added as a second, independent source in
  the financial-benefit-condition clause. The clause's `gap` field
  discloses that this is a single circuit's holding (not Supreme
  Court authority) and that the Ninth Circuit expressly agreed with,
  rather than independently derived from a different source than,
  similar Second Circuit reasoning in a different case that is not
  itself cited or quoted here.

## Honest gap(s) disclosed

This document does not address what counts as "expeditious" action,
what specificity of facts makes infringing activity "apparent" (red
flag knowledge), what financial-benefit/business-model structures are
"directly attributable" to infringement, or whether any particular
technology qualifies as a "standard technical measure" — all
fact-specific determinations left unresolved, as disclosed in each
relevant clause's `gap` field. It does not restate the required
elements of an effective takedown notification (covered by the
existing DMCA Takedown Notice document) or the put-back procedure
(covered by the existing DMCA Counter-Notification Information Sheet),
and does not detail the narrower forms of injunctive relief available
under § 512(j) against an otherwise-qualifying service provider.

## Method

Fetched 17 U.S.C. § 512 from Cornell LII
(`https://www.law.cornell.edu/uscode/text/17/512`) twice independently
via `curl`, using two distinct User-Agent strings:
`"Mozilla/5.0 (Windows NT 10.0; Win64; x64) Groundtruth-Research-Agent-1/1.0"`
and `"Groundtruth-DoubleCheck-Agent-2/2.0 (Macintosh; Intel Mac OS X 10_15) curl"`.
Both requests returned HTTP 200. The two fetched HTML files are
byte-for-byte identical (confirmed by both `diff` and matching MD5
checksums), so no caching/mirroring artifact was found.

Case law for *UMG Recordings, Inc. v. Shelter Capital Partners LLC*
was retrieved via the CourtListener MCP tools: `search` (type `"o"`,
case name query) returned two results — the original opinion
(667 F.3d 1022, withdrawn) and the superseding opinion
(718 F.3d 1006, `cluster_id`/`opinion_id` 855221, coinciding in this
case) — then `get_endpoint_item` on `opinions` id 855221 with
`fields: ["id", "plain_text"]` retrieved the superseding opinion's
full text, confirmed from the opinion's own summary section to be the
"Filed March 14, 2013" panel opinion that withdrew and superseded the
2011 opinion. The quoted holding was located in that single API
response; CourtListener's stored text is the authoritative record for
that endpoint, so no second independent CourtListener fetch was
performed (the dual-fetch protocol in this pipeline applies to primary
sources fetched via WebFetch/curl against a live website, where
caching or mirroring artifacts are a live risk).

All 16 citation `quote` values (15 statutory + 1 case) were
programmatically verified as exact, whitespace-normalized, contiguous
substrings of the fetched source text using a Python script (character
and curly-apostrophe/curly-quote fidelity preserved, only runs of
whitespace collapsed). Two quotes initially failed this check during
drafting because the draft used straight apostrophes (`'`) where the
source uses curly apostrophes (`'`) in "provider's" and "user's" —
a benign source-formatting difference, not a genuine defect; corrected
to match the source's actual curly-apostrophe characters, then
reverified as passing. No genuine defect (a character present in a
quote but absent from the source) was found in any citation.

## Verification

- Both fetches of 17 U.S.C. § 512 (distinct User-Agent strings)
  returned HTTP 200 and are byte-identical (diff clean, matching MD5).
- All 16 citation quotes (15 statutory, 1 case) confirmed as exact
  substrings of the fetched/retrieved source text after whitespace
  normalization only; zero failures on final verification pass.
- Checked every clause against the exact schema from `data/clauses.json`:
  drafting clauses have exactly `{id, title, kind, body}`; authority
  clauses have exactly `{id, title, kind, status, checkedDate, body,
  gap, citations}` with each citation exactly `{case, cite, url,
  quote}`. Confirmed programmatically — no extra or missing keys.
- Checked for duplicate clause IDs and duplicate document IDs against
  the full corpus before merge (none) and again after merge (none).
- Checked every `clauseOrder` entry in the new document resolves to an
  existing clause ID after merge (all 12 resolve).
- Checked every `{{placeholder}}` in the new document's clause bodies
  resolves to a defined field ID, and that no defined field goes
  unused: `preparerName`, `companyName`, `serviceDescription`,
  `dateSigned`, `cityState` — all five used, none orphaned.
- Confirmed the merged `data/clauses.json` and `data/documents.json`
  both still parse as valid JSON.
- `git diff --stat` after merge shows an additive-only change to both
  files (no lines removed), consistent with a pure append.
- Corpus-wide validation script run after merge: total clause and
  document counts, zero duplicate clause/document IDs, zero missing
  `clauseOrder` references, category counts recomputed (Confidentiality
  & IP: 79 → 80) — clean.

## Net changes

- New document: DMCA § 512(c) Safe Harbor for Online Service Providers
  — Information Sheet (`dmca_512c_safe_harbor_info_sheet`), 12 clauses
  (9 authority + 3 drafting), in the Confidentiality & IP category.
  5 new fields (`preparerName`, `companyName`, `serviceDescription`,
  `dateSigned`, `cityState`), all reused conventions from sibling
  info-sheet documents.
- Corpus: 5,065 → 5,077 clauses; 624 → 625 documents. Confidentiality
  & IP category: 79 → 80 documents. Wave 152, Confidentiality & IP
  slot.
