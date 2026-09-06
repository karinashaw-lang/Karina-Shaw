# Confidentiality & IP, new document: Intellectual Property License Bankruptcy Protections (11 U.S.C. § 365(n)) — Information Sheet

## Why this document

First processed item of wave 121 (Confidentiality & IP slot, 2×2
pattern). The agent ruled out five candidates before landing here: UTSA
civil seizure, Anti-SLAPP, deceased-personality right of publicity,
copyright registration/§411, and the AI Transparency/Training-Data Acts
were all confirmed already covered; trademark genericide/abandonment
was ruled out as too close to the existing `ttab_abandonment_ground`
clause, which already quotes the operative statutory sentence. Personally
reconfirmed via corpus search: zero prior mentions of "365(n)," "Mission
Product," "Tempnology," or "Lubrizol" anywhere in the corpus. This
document is federal bankruptcy law rather than a California statute —
consistent with this corpus's established practice (DTSA, FLSA, the
federal WARN Act, and other federal-law documents already in the
corpus), each such document discloses its federal, non-California-
specific character in every clause's `gap` field, and this one does the
same throughout.

## What this document covers

9 clauses: 2 drafting (intro, signature/acknowledgment) and 7 authority
clauses, citing 11 U.S.C. §§ 365(g), 365(n)(1), 365(n)(2)(A)-(B),
101(35A), and Mission Product Holdings, Inc. v. Tempnology, LLC (No.
17-1657, U.S. Supreme Court, 2019):

- **`ipbankr_rejection_as_breach`** — the general rule that rejection of
  an executory contract in bankruptcy is a breach, not a rescission.
- **`ipbankr_ip_definition_scope`** — the closed six-category
  definition of "intellectual property" in 11 U.S.C. § 101(35A).
- **`ipbankr_trademark_exclusion`** — trademarks fall outside that
  definition, per the Supreme Court's own statement of the consequence.
- **`ipbankr_licensee_election`** — the licensee's two-option election
  when a covered license is rejected (terminate-and-claim-damages, or
  retain rights).
- **`ipbankr_retained_rights_scope`** — the trustee's and the retaining
  licensee's matching statutory obligations.
- **`ipbankr_mission_product_holding`** — the 2019 Supreme Court
  resolution for license categories outside § 365(n)'s coverage.
- **`ipbankr_lubrizol_background`** — the 1988 legislative history
  responding to the Fourth Circuit's Lubrizol decision.

## Genuine findings

- **A disclosed choice to draw legislative-history facts from the
  Supreme Court's own recitation, not an independent primary fetch**:
  the `ipbankr_lubrizol_background` clause explicitly discloses that the
  Fourth Circuit's 1985 Lubrizol opinion (756 F.2d 1043) was not itself
  independently fetched, and that the 1988 Public Law/Statutes at Large
  citation is drawn from the Supreme Court's own opinion text, not
  independently checked against a primary Statutes at Large source.
- **A disclosed citation-precision limitation**: every citation to
  Mission Product Holdings discloses that the commonly reported
  volume/page citation (587 U.S. 370 (2019)) was not independently
  confirmed against the bound U.S. Reports — only the docket number,
  argued/decided dates, party names, and full slip-opinion text were
  directly verified from the fetched Cornell LII source.
- **A disclosed, deliberate choice not to independently verify a
  cross-referenced source**: the `ipbankr_ip_definition_scope` clause's
  gap notes this document does not evaluate whether specific IP is in
  fact protected under the applicable non-bankruptcy law (patent,
  copyright, trade secret, or plant variety law) that § 101(35A) itself
  requires.
- **A disclosed, deliberate choice not to cite unverified additional
  case law**: CourtListener's daily quota was exhausted on the agent's
  search call; every authority clause proceeds on the Cornell LII
  primary-source statutory and opinion text alone.

## Honest gap(s) disclosed

This document does not evaluate whether any specific license would in
fact be treated as executory or would in fact be rejected in an actual
bankruptcy case, does not independently fetch or verify the Fourth
Circuit's 1985 Lubrizol opinion or the cited 1988 Public Law/Statutes at
Large volume, does not independently confirm Mission Product Holdings'
bound-U.S.-Reports citation, does not restate § 365(n)(3)'s full
written-request turnover mechanics beyond the one directly-quoted
royalty-payment sentence in § 365(n)(2)(B), and does not evaluate
whether any specific intellectual property is in fact protected under
the applicable non-bankruptcy law that § 101(35A) itself requires.
Every clause also explicitly discloses that this is federal law of
general application, not a California-specific statute, though it
routinely governs California businesses' IP licenses and is applied by
California's four federal bankruptcy districts.

## Method

Fetched 11 U.S.C. § 365, 11 U.S.C. § 101, and the Mission Product
Holdings, Inc. v. Tempnology, LLC slip opinion from Cornell's Legal
Information Institute, each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical (113,670 /
507,650 / 81,901 bytes respectively, both fetches). CourtListener's
daily rate limit was already exhausted on the agent's test call
(HTTP 429); no additional case law was used, a disclosed and legitimate
choice.

Independently re-verified during integration review via a
one-hundred-and-fifty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-158thVerify-IPBankruptcy/1.0") of all three
sources — all 10 citation instances confirmed clean on direct
normalized-whitespace substring match, zero extraction artifacts
encountered. The rejection-as-breach rule, the closed six-category
definition, the trademark exclusion, the licensee's election, the
retained-rights obligations, and the Lubrizol legislative history were
all independently reconfirmed present in the freshly fetched text.

## Verification

- All three primary sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-fifty-
  eighth independent fetch during integration review; all 10 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause correctly
  attributes each citation to its specific statutory subdivision or
  opinion passage; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `ipbankr_` prefix has zero collisions. Independently
  reconfirmed zero prior corpus mentions of "365(n)," "Mission
  Product," "Tempnology," or "Lubrizol," and reconfirmed the agent's
  pivot rationale (the existing `ttab_abandonment_ground` clause already
  covers trademark genericide/abandonment).
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `licensedIpDescription` — did not exist previously in the corpus
  under any name. Five other fields (`preparerName`, `companyName`,
  `licensorName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Intellectual Property License Bankruptcy Protections
  (11 U.S.C. § 365(n)) — Information Sheet
  (`ip_license_bankruptcy_protections_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Confidentiality & IP category. One
  new field: `licensedIpDescription`.
- Corpus: 3,963 → 3,972 clauses; 512 → 513 documents. First processed
  item of wave 121.
