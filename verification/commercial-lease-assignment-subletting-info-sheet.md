# Real Estate, new document: Commercial Lease Assignment and Subletting — Information Sheet

Part of wave 146 (four parallel, isolated single-document additions — Confidentiality
& IP, Ending Employment, Business Formation, and Real Estate — each adding one
document to keep even coverage across the corpus's eight categories). This task
covers the Real Estate category.

## Why this document

The Real Estate category (76 documents before this addition) already covers
residential leases, subleases, security deposits, foreclosure topics, and many
disclosure info sheets, but no document addressed the statutory standards
governing a **commercial** tenant's right to assign or sublease its lease
interest, or the reasonableness standard that governs a landlord's consent.
The existing `sublease_agreement` document (a residential sublease drafting
document) has three clauses (`sublease_governing_framework`,
`sublease_assignment_vs_sublease`, `sublease_sublessor_liability`) that touch
Civil Code Chapter 6 (§§ 1995.010–1995.340) and Kendall v. Ernest Pestana, but
only to establish (a) that the chapter is commercial-only and therefore does
not govern the residential sublease being drafted, (b) the doctrinal
assignment-vs-sublease distinction, and (c) that a sublessor remains liable to
the landlord. None of those clauses address the actual substance of this
document: the three kinds of transfer restriction a commercial lease may
contain (§§ 1995.230–1995.250), the implied reasonableness standard and
burden of proof that apply when a lease requires consent but states none
(§ 1995.260), the historical *Kendall* holding itself, or the statute's
retroactivity date boundary (§ 1995.270(b)). This new information sheet fills
that gap without duplicating the existing sublease document's content —
distinct clause IDs, and only one citation subsection (§ 1995.020(c)) overlaps
in *source* with the existing document, quoting a different subsection than
any already used (the existing document quotes § 1995.020(a), (b), (d), (e);
this document quotes § 1995.020(c), never previously quoted in the corpus).

## What this document covers

6 clauses: 2 drafting (declaration, acknowledgment) and 4 authority clauses:

- **`commlease_assign_restriction_types`** (Civ. Code §§ 1995.020(c), 1995.230,
  1995.240, 1995.250) — the three kinds of transfer restriction: absolute
  prohibition, an express standard/condition (including landlord
  profit-sharing), or consent required subject to an express standard.
- **`commlease_assign_implied_standard`** (Civ. Code § 1995.260) — the implied
  not-unreasonably-withheld standard when a lease requires consent but states
  none, and the tenant's burden of proof (with one specific way to satisfy it).
- **`commlease_assign_kendall_standard`** (Kendall v. Ernest Pestana, Inc.
  (1985) 40 Cal.3d 488) — the pre-codification judicial holding: a landlord
  may withhold consent only for a commercially reasonable objection to the
  assignee or proposed use.
- **`commlease_assign_retroactivity`** (Civ. Code § 1995.270(b)) — the
  September 23, 1983 date boundary determining whether the implied standard
  applies to a given lease's restriction.

## Sources fetched

**Statutes** (leginfo.legislature.ca.gov), fetched via direct `curl` (the
`WebFetch` tool returned `EGRESS_BLOCKED` for this host in this session; the
proxy status endpoint showed prior relay failures — `ws_closed_mid_exchange`
— for the same host from other activity, so direct HTTPS via the configured
agent proxy with the project's CA bundle was used instead, which succeeded):

- Cal. Civ. Code § 1995.010 (chapter scope: nonresidential only)
- Cal. Civ. Code § 1995.020 (definitions, subsection (c) quoted)
- Cal. Civ. Code § 1995.230 (absolute prohibition allowed)
- Cal. Civ. Code § 1995.240 (express standard/condition, profit-sharing)
- Cal. Civ. Code § 1995.250 (consent-required-with-standard)
- Cal. Civ. Code § 1995.260 (implied standard, burden of proof)
- Cal. Civ. Code § 1995.270 (legislative findings and retroactivity boundary)

**Case law** (CourtListener): *Kendall v. Ernest Pestana, Inc.* (1985) 40
Cal.3d 488 — opinion id 9851318 (lead opinion), cluster id 1282333. Retrieved
via `mcp__CourtListener__search` (type "o", confirming case name, citations,
and the opinion_id/cluster_id relationship — here they are numerically
distinct: opinion_id 9851318 vs. cluster_id 1282333, though a
"combined-opinion" sibling entry with id 1282333 also exists) and
`mcp__CourtListener__get_endpoint_item` (endpoint "opinions", item_id
9851318, fields `html_with_citations`/`plain_text` — `plain_text` was empty
for this record, so `html_with_citations` with tags stripped was used).

## Independent double-fetch confirmation

**Statutes**: Each of the seven sections above was fetched twice, in separate
`curl` invocations, with two distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like
   Gecko) Chrome/120.0 Safari/537.36`
2. `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15
   (KHTML, like Gecko) Version/17.0 Safari/605.1.15 SecondaryFetchAgent/1.0`

The two fetches' extracted statutory text (HTML tags stripped, whitespace
normalized) was compared programmatically for all seven sections: all seven
matched byte-for-byte identically. (One first attempt at § 1995.230 under the
second User-Agent hit a mid-transfer connection reset — a known proxy relay
issue per `/root/.ccr/README.md`, not a content problem — and was retried
successfully with `--retry 3`.)

**Case law**: The CourtListener MCP tool doesn't expose User-Agent rotation,
so independence was confirmed differently: the full opinion
(`html_with_citations`, 91,247 characters) was fetched via two separate
`get_endpoint_item` tool calls in this session, and the two results compared
programmatically — byte-for-byte identical (`h1 == h2` confirmed `True` in
Python).

## Quote-by-quote verification

All 9 citation quotes across the 4 authority clauses were checked
programmatically as exact substrings of the fetched, whitespace-normalized
source text (statute quotes against the extracted `leginfo.legislature.ca.gov`
text; *Kendall* quotes against the extracted opinion text). Result: **0
failures out of 9 quotes.**

One genuine, disclosed correction was made during verification:
`commlease_assign_kendall_standard`'s second citation (the "commercially
reasonable objection" holding, at 40 Cal.3d 488, 506–507) sits at a
CourtListener page-break marker: the source's `html_with_citations` embeds a
`<page-number citation-index="1" label="507">*507</page-number>` tag *inside*
the word "assignee" (rendering as "as" + the tag + "signee" once tags are
naively stripped). This is a benign HTML-source formatting artifact (a
pagination pincite marker, not missing or altered substantive text) — the
same category of artifact the task brief calls out (nbsp after subdivision
letters, PDF/HTML line-wrap whitespace). The quote strips that embedded tag
rather than reproducing the split word, and the clause's `gap` field
discloses this correction explicitly, including the exact tag content and
its location, so the correction is checkable against the source.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm current
schema. Authority clauses use exactly `{id, title, kind, status, checkedDate,
body, gap, citations:[{case, cite, url, quote}]}`; drafting clauses use
exactly `{id, title, kind, body}`. Verified programmatically (Python: exact
key-set comparison, no extra or missing keys) across all 6 new clauses. Also
checked programmatically for `{{` leakage into any `title`, `gap`, or
citation field (none found — placeholders only appear in `body` fields, and
only for the 3 declared document fields: `landlordName`, `tenantName`,
`propertyAddress`).

## Corpus-wide validation (after merge)

Ran a script that: (1) confirms both `data/clauses.json` and
`data/documents.json` still parse as valid JSON; (2) confirms all clause ids
are unique across the full corpus; (3) confirms all document ids are unique;
(4) confirms every clause id in the new document's `clauseOrder` exists in
`data/clauses.json`; (5) confirms every `{{fieldId}}` placeholder used in the
new document's clause bodies is declared in that document's `fields` array.

Result: `OK: 4851 clauses, 601 docs, all checks passed.` (4845 → 4851
clauses; 600 → 601 documents.)

## Net changes

- New document: Commercial Lease Assignment and Subletting — Information
  Sheet (`commercial_lease_assignment_subletting_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Real Estate category. No new fields beyond
  the corpus's existing `landlordName`/`tenantName`/`propertyAddress` pattern.
- Corpus: 4,845 → 4,851 clauses; 600 → 601 documents.
