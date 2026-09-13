# Confidentiality & IP, new document: Copyright Management Information (17 U.S.C. § 1202) — Information Sheet

Part of wave 166 (Confidentiality & IP category; wave 166 covers the
same four categories as waves 146/148/.../164: Confidentiality & IP,
Ending employment, Business Formation, Real Estate).

## Why this document

Read the full Confidentiality & IP title list in `data/documents.json`
(86 documents) first. Every candidate the task brief suggested already
exists as its own document: Code Civ. Proc. § 2019.210
(`trade_secret_pre_discovery_identification_info_sheet`), the
§ 16601/§ 16602.5 sale-of-business and dissolution exceptions
(`sale_of_business_dissolution_noncompete_exceptions_info_sheet`), CIPA
(`california_invasion_of_privacy_act_info_sheet`), the CUTSA injunction
and remedy standards (`trade_secret_injunctive_relief_standards_info_sheet`),
employee non-solicitation after AMN Healthcare (inside
`employee_nonsolicit`; "AMN Healthcare" returns 7 hits and "Loral" 7),
and 17 U.S.C. § 411(a)/Fourth Estate ("Fourth Estate" 3 hits, "411(a)"
9, inside `copyright_registration_info_sheet`).

The search therefore moved to the one section of DMCA Chapter 12 that
the corpus does not touch. Grepped both data files at `HEAD` before
drafting: `copyright management information` (0 hits), `CoreLogic`
(0), `integrity of copyright` (0), `1202(a)`/`1202(b)` (5 hits, every
one a citation to **26** U.S.C. § 1202 — the qualified-small-business-
stock exclusion in the Business Formation category — not Title 17),
`CMI` (0 as a standalone term). The adjacent documents were then read
rather than grepped: `dmca_anticircumvention_reverse_engineering_info_sheet`
covers § 1201 only, `dmca_512c_safe_harbor_info_sheet`,
`dmca_takedown_notice`, and `dmca_counter_notification_info_sheet`
cover § 512 only, and `visual_artists_rights_act_info_sheet` and
`california_art_preservation_act_info_sheet` cover moral rights in
works of visual art, not CMI conveyed with copies of any work.

One deliberate, disclosed overlap: the single sentence of
17 U.S.C. § 1203(a) creating the civil action is already quoted in
`dmca1201_general_prohibition` (the § 1201 sheet). It is quoted again in
`dmca1202_false_cmi` because that sentence is the premise of every
remedy clause here; the rest of § 1203 (powers of the court, the damages
election, the § 1202-specific statutory range, the repeat-violation and
innocent-violation adjustments) appears nowhere in the corpus, and
neither does any part of § 1202 or § 1204.

## What this document covers

12 clauses — 3 drafting (purpose/scope, relationship to the project's
other copyright documents, signature/acknowledgment) and 9 authority
clauses citing 17 U.S.C. §§ 1202(a), 1202(b)(1), 1202(b)(3), the
concluding clause of 1202(b), 1202(c), 1202(c)(1)–(3), 1202(c)(6)–(7),
1202(d), 1202(e)(1), 1203(a), 1203(b)(1), 1203(b)(5), 1203(c)(2),
1203(c)(3)(B), 1203(c)(4), 1203(c)(5)(A), 1203(c)(5)(B)(ii), 1204(a),
1204(c); and Stevens v. Corelogic, Inc., 899 F.3d 666 (9th Cir. 2018):

- **`dmca1202_false_cmi`** (§ 1202(a)) — providing, or distributing or
  importing for distribution, false CMI, and the single front-loaded
  mental state ("knowingly and with the intent to induce, enable,
  facilitate, or conceal infringement") that governs both paragraphs;
  no alternative "reasonable grounds to know" standard in subsection (a).
- **`dmca1202_removal_or_alteration`** (§ 1202(b)) — the three
  prohibited acts, the "without the authority of the copyright owner or
  the law" precondition, and the separate concluding knowledge clause
  that applies to all three paragraphs and is relaxed to "reasonable
  grounds to know" only for civil remedies under § 1203.
- **`dmca1202_cmi_defined`** (§ 1202(c)) — the eight enumerated
  categories, the "conveyed in connection with copies or phonorecords …
  including in digital form" limitation, and the express exclusion of
  personally identifying information about a user.
- **`dmca1202_stevens_mental_state`** (Stevens v. Corelogic) — the Ninth
  Circuit's holding that a § 1202(b) plaintiff must make an affirmative
  showing (a past "pattern of conduct" or "modus operandi" are the
  court's examples) that the defendant was aware or had reasonable
  grounds to be aware of the probable future impact of its actions, and
  the court's statement that, the statute being written in the future
  tense, the plaintiff need not show a completed infringement but must
  offer evidence from which future infringement can be inferred to be
  likely.
- **`dmca1202_civil_action_and_court_powers`** (§ 1203(a), (b)) — who
  may sue and where; injunctions with the express prior-restraint
  limitation; impoundment; discretionary costs and attorney's fees;
  remedial modification or destruction.
- **`dmca1202_damages_election`** (§ 1203(c)(1)–(3)) — the election
  between actual damages plus the violator's additional profits and
  statutory damages, and the two different statutory ranges: $200–$2,500
  per act for § 1201, $2,500–$25,000 for each violation of § 1202.
- **`dmca1202_damages_adjustments`** (§ 1203(c)(4), (5)) — trebling for
  a violation within 3 years after a final judgment for another such
  violation; discretionary reduction or remission for an innocent
  violator; mandatory remission for a nonprofit library, archives,
  educational institution, or public broadcasting entity.
- **`dmca1202_statutory_limitations`** (§ 1202(d), (e)) — the
  government investigative/protective/information-security/intelligence
  carve-out and its internal definition of "information security"; the
  analog- and digital-transmission limitations available to broadcast
  stations, cable systems, and their programming suppliers.
- **`dmca1202_criminal_penalties`** (§ 1204) — willfulness plus
  commercial advantage or private financial gain; $500,000/5 years for a
  first offense and $1,000,000/10 years for a subsequent one; the
  nonprofit exclusion; the 5-year limitations period.

## Verification and findings

- **Every statute was fetched twice, from two publishers.** Cornell LII
  (`law.cornell.edu/uscode/text/17/1202`, `/1203`, `/1204`) and,
  independently, the Office of the Law Revision Counsel
  (`uscode.house.gov`, prelim edition, whose retrieved pages state
  "Text contains those laws in effect on September 11, 2026"), each
  under a distinct User-Agent. All 22 new quotes are present in both
  hosts' texts.
- **The only differences between the two hosts are typographic, and the
  clauses disclose them.** Cornell prints curly quotation marks and
  apostrophes and an em dash where the Law Revision Counsel prints
  straight marks and a hyphen (Cornell's `attorney’s fees` and
  `infringement—` against the Law Revision Counsel's `attorney's fees`
  and `infringement-`). Quotes reproduce the Cornell
  characters exactly; 6 of the 22 matched the second host only after
  normalizing those characters, and every authority clause's `gap`
  states that the second host's rendering carries the identical
  statutory words and differs only in typography. No quote text was
  altered to make a match.
- **An extraction artifact was identified and avoided, not written
  into a gap.** A first markup-stripping pass that replaced HTML tags
  with a space made Cornell's rendering appear to read "the term
  “ copyright management information ” means". Re-extracting with tags
  removed rather than replaced shows Cornell's text is identical to the
  Law Revision Counsel's, so no such claim appears anywhere in the
  document. All quote checks were run against both extraction variants.
- **Stevens v. Corelogic was located without spending any CourtListener
  MCP quota.** The public, unauthenticated
  `api/rest/v4/search/?type=o` endpoint returned cluster id 9022953
  (899 F.3d 666) and, separately, 4509128 (893 F.3d 648, the panel's
  earlier opinion that 899 F.3d 666 superseded). No CourtListener MCP
  tool was called at any point in this task.
- **The opinion page was fetched twice under two distinct browser
  header sets**, with `Referer: https://www.courtlistener.com/`; both
  responses were HTTP 200 and the two extracted texts were
  character-identical (36,870 characters each).
- **Each of the three case quotes was independently phrase-confirmed**
  through CourtListener's public search index with
  `cluster_id:9022953 AND "<exact phrase>"`; each query returned
  count=1 with `Stevens v. Corelogic, Inc.` as the only result. The
  second of the three queries initially returned HTTP 429 and succeeded
  on retry after a 300-second wait; queries were spaced to stay inside
  the shared rate limit.

## Honest gaps disclosed

- **No retrieval path for the opinion that is wholly independent of
  CourtListener exists in this environment.** `cdn.ca9.uscourts.gov` is
  refused by the egress proxy (403 on CONNECT) for both the
  2018-06-20 and 2018-08-06 slip-opinion paths; CourtListener's
  authenticated REST endpoints return 401 without credentials; and
  storage.courtlistener.com carries no slip PDF for this opinion.
  `dmca1202_stevens_mental_state`'s `gap` says so expressly and records
  what was done instead (two header-set fetches with identical
  extractions, plus per-phrase cluster-restricted search confirmation).
- **CourtListener labels its copy of the reported opinion as derived
  from a scanned document** and therefore capable of containing typos.
  The three quoted passages were read in full context and contain no
  visible OCR damage; the quotes reproduce the retrieved characters
  exactly, including the straight double quotation marks the source
  uses around "pattern of conduct", "modus operandi", and "will induce,
  enable, facilitate, or conceal". The gap field states the scanned-text
  caveat.
- **No case law is cited for § 1202(a).** Stevens construes § 1202(b)
  only. Rather than rely on unverified recollection of decisions
  construing subsection (a)'s intent element, `dmca1202_false_cmi`'s
  gap states that no case-law citation is offered for that subsection
  and why (the shared, rate-limited CourtListener search budget was
  spent on the § 1202(b) decision).
- **Open questions the document does not resolve, each named in the
  relevant gap**: what "false" means in § 1202(a); whether an automated
  process that discards metadata is an "intentional" removal; whether
  CMI must have been removed from the same copy later distributed (the
  "identicality" question on which district courts have divided); what
  counts as a single "violation" for the $2,500–$25,000 range; the
  limitations period for a civil action under § 1203, which § 1203 does
  not state; and the standards governing the discretionary powers in
  § 1203(b).
- **Cross-referenced provisions not separately retrieved**, and
  disclosed as such: 17 U.S.C. § 118(f) (the "public broadcasting
  entity" definition used by § 1203(c)(5)(B)(i) and § 1204(b)) and
  47 U.S.C. §§ 153, 522 (the "broadcast station" and "cable system"
  definitions used by § 1202(e)(3)). Section 1202(e)(2)'s
  digital-transmission conditions are summarized rather than quoted,
  and the gap says so.
- **Stevens is Ninth Circuit law**, binding in the circuit that
  includes California but not a national rule; the clause body and gap
  say so rather than presenting it as settled everywhere.
- **Scope.** The document addresses 17 U.S.C. §§ 1202–1204 only. It
  does not address infringement under § 501, the § 512 notice-and-
  takedown regime, § 1201 anti-circumvention, registration as a
  precondition to suit, or state-law claims; a dedicated drafting
  clause places those with the sibling documents that cover them.

## Method

- Grepped `data/clauses.json` and `data/documents.json` for every
  element of the topic before drafting (results above), and read the
  six adjacent copyright/DMCA documents in full.
- Verified every `citations[].quote` by substring match against the
  retrieved texts after collapsing whitespace runs to single spaces,
  reporting separately which quotes needed typographic normalization
  (curly/straight marks, em dash/hyphen) to match the second host:
  22 new quotes, 0 failures. Re-ran the same check against the merged
  `data/clauses.json`, where it also re-confirmed the one pre-existing
  § 1203(a) quote in `dmca1201_general_prohibition`.
- Fields: `companyName`, `preparerName`, `dateSigned`, and
  `workDescription` ("Description of the work") all reuse existing
  corpus definitions verbatim; no new field id was introduced. All
  fields are required, because the app leaves a blank field's
  `{{placeholder}}` visible in the assembled output.
- Authority clauses carry exactly
  `{id,title,kind,status,checkedDate,body,gap,citations}` in that order,
  with a non-empty `gap`; drafting clauses exactly
  `{id,title,kind,body}`; citations exactly `{case,cite,url,quote}`;
  the document exactly
  `{id,title,description,categories,clauseOrder,fields}`.
- Corpus-wide validation after merge: both JSON files parse and
  round-trip byte-identically in the repo's two-space,
  non-ASCII-preserving format; no duplicate clause or document ids;
  every id in every document's `clauseOrder` resolves to an existing
  clause; every `{{placeholder}}` in every document's clause bodies and
  gap notes resolves to a field declared on that document.

## Net changes

- New document: Copyright Management Information (17 U.S.C. § 1202) —
  Information Sheet (`copyright_management_information_info_sheet`),
  12 clauses (9 authority + 3 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 5,743 → 5,755 clauses; 680 → 681 documents. Wave 166,
  Confidentiality & IP (86 → 87 documents in the category).
