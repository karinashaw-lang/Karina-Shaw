# Business Formation, new document: LLC Member and Manager Fiduciary Duties — Information Sheet

## Why this document

Wave 148, Business Formation slot. The duplication check against the
existing 77 Business Formation documents in `data/documents.json`
confirmed that while the corpus already covers the general-partner
fiduciary duties of a California limited partnership
(`lp_general_partner_fiduciary_duties_info_sheet`, Corp. Code
§§ 15904.08/15901.10) and a corporate director's duty of care and the
business judgment rule (`director_duty_of_care_bjr_info_sheet`), no
document in the corpus states the analogous statutory fiduciary
duties a *member or manager of a California LLC* owes under the
California Revised Uniform Limited Liability Company Act (RULLCA),
Corp. Code §§ 17701.10 and 17704.09. A grep of `data/clauses.json`
for "17704.09" and "17701.10" and of `data/documents.json` for
title/id text confirmed zero prior hits, and zero `llcduty_` id
collisions against the full existing clause-id set.

## What this document covers

15 clauses: 2 drafting (intro, acknowledgment) and 13 authority
clauses, citing Corp. Code § 17704.09(a)-(f) and
§ 17701.10(c),(e),(g):

- **`llcduty_duty_source`** — § 17704.09(a): the two-duty framework
  (loyalty and care) for a member of a member-managed LLC.
- **`llcduty_loyalty_accounting`** — § 17704.09(b)(1): the
  accounting/trustee duty, including appropriation of an LLC
  opportunity.
- **`llcduty_loyalty_adverse_interest`** — § 17704.09(b)(2): the bar
  on adverse-interest dealing.
- **`llcduty_loyalty_noncompete`** — § 17704.09(b)(3): the bar on
  competing with the LLC.
- **`llcduty_care_standard`** — § 17704.09(c): the gross-negligence
  duty-of-care standard.
- **`llcduty_good_faith_fair_dealing`** — § 17704.09(d),(e): the
  good-faith-and-fair-dealing obligation and the self-interest
  carve-out (two citations).
- **`llcduty_manager_managed_reallocation`** — § 17704.09(f)(1)-(3):
  how these duties shift to the manager(s) in a manager-managed LLC,
  and that a member owes no fiduciary duty solely by being a member
  (three citations). This subdivision has no LP-statute analog and is
  the feature that most distinguishes this document from the
  corpus's existing LP general-partner fiduciary-duty document.
- **`llcduty_agreement_cannot_eliminate_general`** — § 17701.10(c)(4):
  the general bar on an operating agreement eliminating fiduciary
  duty.
- **`llcduty_agreement_loyalty_carveout`** — § 17701.10(c)(14),
  (14)(A),(14)(B): the two narrower things an operating agreement may
  do instead of eliminating the duty of loyalty (three citations).
- **`llcduty_agreement_care_carveout`** — § 17701.10(c)(15): the bar
  on unreasonably reducing the duty of care.
- **`llcduty_agreement_good_faith_carveout`** — § 17701.10(c)(5): the
  bar on eliminating the good-faith-and-fair-dealing obligation.
- **`llcduty_informed_consent_requirement`** — § 17701.10(e): the
  requirement that any modification of these duties be made in a
  *written* operating agreement with the members' *informed consent*,
  and that merely assenting to the operating agreement does not
  itself constitute that consent. This subdivision also has no direct
  analog in the corpus's LP fiduciary-duty document.
- **`llcduty_liability_limitation`** — § 17701.10(g), (g)(1): the
  operating agreement's power to alter indemnification and limit
  money-damages liability, and the duty-of-loyalty exception to that
  power (two citations).

## Genuine findings

- **A disclosed negative case-law finding**: no clause cites case
  law. A CourtListener search for California opinions construing
  § 17704.09 or § 17701.10 by name returned no on-point results —
  disclosed honestly in each clause's gap rather than stretched into
  a tangential citation.
- **A disclosed unresolved statutory-interaction question**: the
  good-faith/self-interest clause's gap notes the statute's text does
  not itself resolve how the § 17704.09(e) self-interest carve-out
  interacts with the § 17704.09(b)(2) adverse-interest prohibition
  when conduct arguably satisfies both (the same open question the
  corpus's LP fiduciary-duty document discloses for the parallel LP
  statute).
- **A consistently disclosed pattern of partial-subdivision quoting**:
  every authority clause's gap names the specific neighboring
  paragraphs or subdivisions not quoted, including the eleven
  restrictions in § 17701.10(c) unrelated to fiduciary duty, the four
  other exceptions in § 17701.10(g)(2)-(5) not quoted, and
  § 17701.10(f) (the responsibility-shifting provision) not addressed
  in this document.
- **A benign source-formatting artifact, normalized**: the fetched
  HTML wraps each lettered/numbered paragraph in its own `<p>` tag
  with internal line-wrapping whitespace (tabs and newlines used for
  HTML source indentation, e.g. after "a limited liability" before
  "company opportunity" in § 17704.09(b)(1)). This collapses to a
  single space in ordinary rendering and was normalized the same way
  (all whitespace runs collapsed to one space) before every quote was
  checked; no clause's `quote` field contains a raw tab or embedded
  newline, and no character present in a quote is absent from the
  source, so no `gap` disclosure of a quote correction was needed.

## Honest gap(s) disclosed

This document does not define "manifestly unreasonable" or
"informed consent" beyond the statute's own words (both left
undefined by the statute), does not address whether a member who is
also a manager of a manager-managed LLC owes duties in both
capacities (not addressed by the quoted subdivisions), does not
quote § 17701.10(f) (the responsibility-shifting/duty-adjustment
provision) or § 17704.08(a) (the indemnification statute referenced
in § 17701.10(g)), does not quote four of the five exceptions in
§ 17701.10(g)(2)-(5) to the liability-limitation power (only the
duty-of-loyalty exception is quoted; the other four are named in the
gap of `llcduty_liability_limitation`), and does not cite any case
law (confirmed genuine absence via CourtListener search).

## Method

Fetched Corp. Code §§ 17704.09 and 17701.10 from
leginfo.legislature.ca.gov, each fetched twice independently via curl
with two distinct User-Agent strings per section (four fetches
total):

- § 17704.09: `Mozilla/5.0 (Windows NT 10.0; Win64; x64)
  Groundtruth-Research-A/1.0` and `Mozilla/5.0 (Macintosh; Intel Mac
  OS X 10_15_7) Groundtruth-Research-B/2.0`.
- § 17701.10: `curl-groundtruth-research/3.1 (Linux x86_64)` and
  `Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101
  Firefox/119.0 Groundtruth-Research-D/4.0`.

All four fetches returned HTTP 200. For each section, the two
independently fetched HTML documents differ only in dynamic,
per-request artifacts (JSF component ids like `j_idt7`/`j_idt5`,
session-specific `javax.faces.ViewState` tokens, and feedback/login
link ids) — confirmed by diffing the raw HTML. The substantive law
content, isolated by extracting the `id="codeLawSectionNoHead"` div
from each fetch and comparing, was byte-for-byte identical between
the two independent fetches of each section, ruling out caching or
mirroring drift.

All 19 citation quotes across the 13 authority clauses were then
verified programmatically as exact, contiguous substrings of the
extracted statutory text (HTML tags stripped, entities unescaped,
whitespace runs collapsed to single spaces to match how a browser
renders the source) — see the "benign source-formatting artifact"
note above. Zero quote mismatches; zero corrections needed.

## Verification

- Both cited statutory sections fetched twice independently with
  distinct User-Agent strings; substantive content confirmed
  byte-identical between fetches for each section.
- All 19 citation-quote instances (across 13 authority clauses)
  confirmed as exact substrings of the fetched, whitespace-normalized
  statutory text via a standalone Python verification script.
- Checked for `{{` leakage in every clause's `title`/`body`/`gap` and
  every citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked every authority clause's key set against the exact schema
  (`id, title, kind, status, checkedDate, body, gap, citations`) and
  every citation's key set (`case, cite, url, quote`) — clean; every
  drafting clause's key set (`id, title, kind, body`) — clean.
- Checked `status` is `"verified"` on all 13 authority clauses.
- Checked for duplicate clause IDs against the full corpus (none),
  and confirmed the `llcduty_` prefix has zero collisions. Ran
  section-number-specific greps for "17704.09" and "17701.10" against
  the pre-merge corpus — zero hits on both, confirming genuine
  novelty of the citations.
- Checked the new document's `clauseOrder` (15 entries) resolves
  against the merged `clauses.json` — all 15 found.
- Checked drafting-clause `{{placeholder}}` tokens
  (`llcName`, `dutyBearerName`, `otherMemberName`,
  `authorizedSignerName`, `dateSigned`, `cityState`) all resolve
  against the new document's `fields` array — clean; no new field ids
  were required beyond these six (patterned on the existing LP
  fiduciary-duty document's field set, adapted for LLC terminology).
- Corpus-wide validation run across the full updated corpus: both
  `data/clauses.json` and `data/documents.json` parse as valid JSON;
  zero duplicate clause ids across all 4,928 clauses; zero duplicate
  document ids across all 609 documents; every `clauseOrder` entry in
  every document (not just the new one) resolves to an existing
  clause id.

## Net changes

- New document: LLC Member and Manager Fiduciary Duties — Information
  Sheet (`llc_manager_member_fiduciary_duties_info_sheet`), 15
  clauses (13 authority + 2 drafting), in the Business Formation
  category. Six fields, none newly coined beyond adapting the LP
  document's field pattern to LLC terminology.
- Corpus: 4,913 → 4,928 clauses; 608 → 609 documents. Business
  Formation document added as part of wave 148 (which also covers
  Confidentiality & IP, Ending employment, and Real Estate in three
  separate, isolated worktrees).
