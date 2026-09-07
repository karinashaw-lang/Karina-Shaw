# Business Formation, new document: Limited Partnership Dissolution and Winding-Up — Information Sheet

## Why this document

Third processed item of wave 138 (Business Formation slot, 1×4
pattern). The agent ruled out candidates already covered by direct
grep confirmation (noncompete/§ 16600 family, franchise tax/$800
minimum tax, cumulative voting, nonprofit merger cross-refs, and two
coincidental substring collisions in unrelated codes). The chosen
topic — full limited partnership dissolution and winding-up mechanics
under the California Revised Uniform Limited Partnership Act of 2008,
Corp. Code §§ 15908.01-15908.09 — was confirmed genuinely open: the
corpus's existing LP-related documents (formation, and a narrow
control-safe-harbor document) explicitly scope themselves away from
dissolution, and the single "15908.03" hit traced to the existing
safe-harbor clause's own disclosed, unverified cross-reference, not
substantive coverage.

## What this document covers

9 clauses: 2 drafting (intro/scope, acknowledgment/signatures) and 7
authority clauses, citing Corp. Code § 15908.01(b), § 15908.02(a),
§ 15908.03(a), (c), § 15908.04(a), § 15908.06(b), § 15908.07(a),
(b)(3), § 15908.09(a), (b):

- **`lpdiss_dissolution_events`** — the statutory dissolution-
  triggering events, including the consent-based and dissociation-
  based pathways.
- **`lpdiss_judicial_dissolution`** — the "not reasonably practicable"
  standard for court-ordered dissolution.
- **`lpdiss_winding_up_authority`** — continued existence for winding
  up only, and appointment of a winding-up person absent a general
  partner.
- **`lpdiss_post_dissolution_binding_acts`** — when a general
  partner's post-dissolution act still binds the limited partnership.
- **`lpdiss_known_claims_procedure`** — the direct-notice content
  requirements for barring known creditors' claims.
- **`lpdiss_published_notice_claims`** — the published-notice
  mechanism and its four-year enforcement deadline.
- **`lpdiss_asset_priority`** — the creditor-first, surplus-to-
  partners distribution priority.

## Genuine findings

- **A disclosed scope boundary distinguishing this document from
  three existing corpus documents**: the intro clause explicitly names
  and distinguishes the LP Formation, LP Control Safe Harbor, and
  General Partnership Dissolution (a different entity type under a
  different statute) documents already in the corpus.
- **A disclosed deliberate omission of an alternative-to-dissolution
  mechanism**: the judicial-dissolution clause's gap notes § 15908.02's
  buyout-alternative subdivisions (b)-(g) were fetched but not quoted,
  leaving that mechanism undescribed here.
- **A disclosed negative CourtListener result**: a search for case
  law interpreting the "not reasonably practicable" standard returned
  a 429 rate-limit error — disclosed honestly, with no case law
  retrieved or relied on anywhere in the document.
- **Two disclosed benign leginfo paragraph-adjacency artifacts**,
  verified directly in the raw HTML as a `</p><p>` boundary with zero
  literal characters between subdivision markers (confirmed identical
  to the well-catalogued pattern seen repeatedly in this corpus), in
  § 15908.04(a) and § 15908.06(b).

## Honest gap(s) disclosed

This document does not quote § 15908.02(b)-(g)'s buyout-alternative
mechanism, § 15908.03(b)'s specific winding-up acts or (d)-(e)'s
court-supervision and compensation rules, § 15908.04(b)'s dissociated-
general-partner binding power or § 15908.05's post-dissolution
liability rule, § 15908.06(a), (c), (d)'s full known-claims bar
mechanics, § 15908.07(b), (c), (d), (e)'s full published-notice
mechanics including the tax-claim carve-out, or § 15908.09(c)'s
partner-contribution shortfall rules, and does not include any case
law (CourtListener quota exhausted).

## Method

Fetched Corp. Code §§ 15908.01, .02, .03, .04, .06, .07, .09 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical. A CourtListener search returned a 429 rate-limit error —
disclosed honestly, no case law used. All 10 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings via regex anchor-slicing directly out of the extracted
source text (never hand-typed), including the source's literal
non-breaking-space characters after subdivision labels; one candidate
quote with a genuine mid-sentence line-wrap artifact was dropped
rather than quoted, with the underlying rule paraphrased in the gap
field instead.

Independently re-verified during integration review via a two-
hundred-and-sixteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-216thVerify-LPDissolution/1.0") of all seven sections —
all fetched cleanly on the first attempt. 8 of 10 citation instances
confirmed clean on direct normalized-whitespace substring match; 2
(§ 15908.04(a) and § 15908.06(b)) matched only after whitespace
stripping, confirmed by direct raw-HTML inspection to be the well-
catalogued benign leginfo paragraph-adjacency artifact — not a
citation defect. The dissolution-triggering events, the judicial-
dissolution standard, the continued-existence and winding-up-person-
appointment rules, the post-dissolution binding-act rule, the known-
claimant and published-notice procedures, and the creditor-first
asset-priority rule were all independently reconfirmed present in the
freshly fetched text.

## Verification

- All seven cited sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-sixteenth independent fetch during integration review;
  all 10 citation instances confirmed clean (8 direct, 2 via the
  benign paragraph-adjacency whitespace artifact).
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `lpdiss_` prefix has zero collisions. Ran section-
  number-specific greps for all seven cited sections — the single
  "15908.03" hit traced to an existing clause's own disclosed,
  unverified cross-reference, confirmed a false-positive collision,
  not substantive overlap.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new field ids required — all eight fields (`partnershipName`,
  `generalPartnerName`, `limitedPartnerName`, `dissolutionReason`,
  `dissolutionDate`, `preparerName`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Limited Partnership Dissolution and Winding-Up —
  Information Sheet
  (`limited_partnership_dissolution_winding_up_info_sheet`), 9 clauses
  (7 authority + 2 drafting), in the Business Formation category. No
  new fields.
- Corpus: 4,575 → 4,584 clauses; 570 → 571 documents. Third processed
  item of wave 138.
