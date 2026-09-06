# Confidentiality & IP, new document: California's Anti-SLAPP Statute in Confidentiality/IP Disputes — Information Sheet

## Why this document

Fourth and final processed item of wave 96 (Confidentiality & IP slot).
A scoping pass confirmed zero prior coverage of California's anti-SLAPP
statute (Code of Civil Procedure § 425.16) anywhere in the corpus,
despite its real, developed intersection with trade secret and
confidentiality litigation in California.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Code of Civil Procedure § 425.16(a)-(c), (e)-(g) and World
Financial Group, Inc. v. HBW Insurance & Financial Services, Inc., 172
Cal.App.4th 1561 (2009):

- **`antislapp_statute_overview`** — the statute's stated purpose, the
  special motion to strike mechanism, its filing/hearing timeline, and
  the automatic discovery stay.
- **`antislapp_two_prong_test`** — the two-step burden-shifting analysis
  (protected activity, then probability of prevailing).
- **`antislapp_protected_activity_categories`** — the four statutory
  categories of protected petitioning/free-speech activity.
- **`antislapp_fee_shifting`** — the prevailing-defendant fee
  entitlement and the frivolous-motion fee-shifting consequence running
  the other way.
- **`antislapp_ip_context_case_law`** — World Financial Group's holding
  that a trade-secret-misappropriation/breach-of-contract claim based on
  commercial solicitation of a competitor's associates and customers did
  not arise from protected activity, and the "principal thrust or
  gravamen" test courts use to make that determination.

## Genuine findings

- **A correctly scoped, non-overstated case-law finding**: World
  Financial Group holds that ordinary commercial solicitation using
  confidential information is not protected activity merely because it
  touches on "workforce mobility and free competition" in the abstract
  — but the document explicitly discloses this is a fact-intensive,
  mixed body of law where the outcome turns on the specific pleaded
  conduct, and names (without independently verifying) three other
  candidate cases surfaced in research (Raining Data Corp. v.
  Barrenechea; Industrial Waste & Debris Box Service v. Murphy; BioCorRx
  v. VDM Biochemicals) as unverified, not as confirmed authority.
- **An honestly disclosed rate-limit constraint**: CourtListener's
  roughly 50-requests-per-hour limit meant only one case was
  independently read and verified in full this session; the document
  discloses this explicitly rather than presenting a single case as a
  survey of the field.
- Correctly distinguished the statutory "two-step" terminology (case-law
  shorthand) from the statute's own text, which does not itself use that
  phrase.

## Honest gap(s) disclosed

This document does not address how courts calculate a reasonable
attorney-fee award under the fee-shifting provision (lodestar/multiplier
methodology). It does not independently verify the three other candidate
cases named in the case-law clause's gap disclosure. It does not
determine whether any specific claim arises from protected activity —
that determination depends on the specific pleaded conduct in an actual
case.

## Method

Fetched Code of Civil Procedure § 425.16 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. World
Financial Group, Inc. v. HBW Insurance & Financial Services, Inc.
verified via the CourtListener MCP tool (direct curl and WebFetch to
courtlistener.com remain blocked in this environment); the research
agent confirmed no cluster-id/opinion-id mismatch (both 2288025). All 10
citation quotes programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via a
seventy-fifth fetch (a new distinct curl User-Agent string,
"Groundtruth-75thVerify-AntiSLAPP/1.0") of § 425.16 — all 6 statutory
quotes confirmed clean on direct substring match. World Financial Group
independently re-verified via the CourtListener MCP tool, including a
fresh cluster/opinion-id check confirming no mismatch — all 4 case-law
quotes confirmed as exact, contiguous substrings of the freshly fetched
opinion text by direct comparison.

## Verification

- Code of Civil Procedure § 425.16 fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  seventy-fifth independent fetch during integration review; all 6
  statutory quotes confirmed clean.
- World Financial Group v. HBW independently re-verified via the
  CourtListener MCP tool during integration review, including a fresh
  cluster/opinion-id check; all 4 case-law quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 10 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`preparerName`,
  `companyName`, `adversePartyName`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California's Anti-SLAPP Statute in Confidentiality/IP
  Disputes — Information Sheet
  (`anti_slapp_confidentiality_ip_disputes_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. No new
  fields.
- Corpus: 3,240 → 3,247 clauses; 429 → 430 documents. Fourth and final
  processed item of wave 96.

## Wave 96 summary

Wave 96 followed the established 1×4 pattern, targeting the corpus's
four lowest-count categories: Corporate Transparency Act/BOI Reporting
(Business Formation), HOA Member Discipline and Fines (Real Estate),
California Overtime Pay Calculation (During employment), and this
Anti-SLAPP document (Confidentiality & IP). Per the established
alternation, wave 97 should return to a 2×2 pattern (two documents
concentrated in two categories).
