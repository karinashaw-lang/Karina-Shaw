# Estate Planning, new document: Beneficiary's Right to a Trust Accounting — Information Sheet

## Why this document

Third processed item of wave 114 (Estate Planning slot). The agent's
duplication check pivoted away from two initial candidates: "Heggstad
Petition" was found already covered by the existing
`trustfunding_heggstad_petition` clause inside the Living Trust Funding
document, and an escheat/unclaimed-property candidate's hits turned out
to be about unclaimed *wages* (an employment-law topic), not estate
escheat — a genuine gap noted but set aside in favor of the
accounting-rights topic. The decisive finding: exactly one existing
clause, `trust_accounting_duty` (embedded in the Revocable Living Trust
document), touches trust accounting at all, and it covers only
§16062(a)'s trigger and §16069(a)(1)'s revocable-trust carve-out —
nothing on required account contents (§16063), waiver limits (§16064),
the disqualified-trustee void-waiver rule (§16062(e)), the enforcement
petition (§17200), the three-year limitations period (§16460), or the
180-day boldface-notice shortcut (§16461). The existing "Trustee's
Notification to Beneficiaries" document was confirmed to cover only the
one-time §16061.7 initial notice, a genuinely distinct scope from
ongoing accounting duties. Personally reconfirmed via corpus search:
`trust_accounting_duty` and `pettrust_accounting_threshold_and_inspection`
are the only other corpus mentions, both scoped narrowly and
non-duplicative of this document's coverage.

## What this document covers

11 clauses: 2 drafting (intro, signature block) and 9 authority clauses,
citing Prob. Code §§ 16060, 16062(a), 16062(b), 16062(c), 16062(e),
16063(a)(1), 16063(a)(5)-(6), 16064(a), 16064(b), 16069(a)(2), 16069(b),
16460(a)(1)-(2), 16461(c), 16461(e), 17200(a), 17200(b)(7)(C):

- **`benacct_general_duty_informed`** — the general duty to keep
  beneficiaries reasonably informed.
- **`benacct_triggering_events`** — the annual/termination/change-of-
  trustee accounting triggers and which beneficiaries are entitled.
- **`benacct_legacy_trust_exception`** — the narrow pre-July-1987
  exception for living and testamentary trusts.
- **`benacct_required_contents`** — the mandatory financial content and
  the two mandatory statutory notices an account must contain.
- **`benacct_waiver_limits`** — trust-instrument and individual waiver
  of the duty to account, and the disqualified-sole-trustee void-waiver
  rule.
- **`benacct_no_duty_exceptions`** — no duty where beneficiary and
  trustee are the same person, and the incapacity-triggered duty shift.
- **`benacct_petition_to_compel`** — the § 17200 petition mechanism and
  its 60-day/six-month trigger.
- **`benacct_limitations_period`** — the three-year deadline to sue for
  breach after receiving a disclosing account.
- **`benacct_shortened_objection_notice`** — a trust instrument's
  optional shortened-objection procedure and its required boldface
  notice.

## Genuine findings

- **A significant correction to the agent's own initial research plan**:
  the agent initially expected companion waiver provisions at §§16065-
  16066. Fetching those section numbers returned no content, and cross-
  checking the page's own ARTICLE 3 range marker `[16060-16069]`
  confirmed those section numbers do not exist — the waiver rules
  actually live inside §16064(a)-(b), with a related void-waiver rule
  for disqualified trustees inside §16062(e), not a separate section. A
  real, disclosed correction rather than an assumed citation.
- **A correction to the scope of §17200**: the agent initially expected
  a purely generic catch-all petition statute, but found it contains a
  specific accounting-enforcement mechanism at (b)(7)(C) with an exact
  60-day/six-month trigger.
- **A correction to the scope of §16461**: the agent initially expected
  a simple shortened-objection rule, but found a detailed nine-
  subdivision procedure (exact boldface notice text, a 180-day minimum,
  and a carve-out for intentional/grossly-negligent/bad-faith breaches)
  and scoped the clause narrowly to (c) and (e), disclosing the
  unquoted subdivisions in the gap field.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "currently" required/authorized
distribution for every fact pattern, does not restate the donative-
transfer disqualification definitions cross-referenced by §16062(e)
(former §21350.5, current §§21380/21382), does not restate §15800(b)(2)'s
list of beneficiaries entitled to notice during a settlor's incapacity,
does not address a facially compliant but substantively deficient
account, does not define "adequately discloses" beyond the statute's own
general language, and does not restate §16461's full nine-subdivision
procedure or its carve-out for intentional/grossly-negligent/bad-faith
breaches.

## Method

Fetched Prob. Code §§ 16060, 16062, 16063, 16064, 16069, 16460, 16461,
and 17200 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after normalization (raw HTML differed only in embedded
JSF ViewState/session tokens, a disclosed, non-substantive artifact).
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. The
agent self-reported 14 citation instances programmatically confirmed as
exact, contiguous substrings; an independent recount during integration
review found 16 citations actually present across the 9 authority
clauses (a minor self-report discrepancy, not a data defect, consistent
with a pattern observed elsewhere this session — always independently
recounted rather than trusting an agent's self-report).

Independently re-verified during integration review via a
one-hundred-and-thirty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-138thVerify-TrustAccounting/1.0") of all eight
sections — all 16 citation instances confirmed clean on direct
normalized-whitespace substring match (curly apostrophes/quotes
normalized), no extraction artifacts encountered. The nonexistence of
§§16065-16066, the §17200(b)(7)(C) enforcement mechanism, and the
§16461 boldface-notice procedure were all independently reconfirmed
against the freshly fetched text.

## Verification

- All eight Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-thirty-eighth independent fetch during integration review; all 16
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section (§§16062, 16063, 16064,
  16069, 16461, 17200) correctly disclose they are not independent
  sources of each other, while the §16064/§16062(e) pairing in the
  waiver-limits clause is correctly treated as citing a different
  section for a related but distinct rule; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). The
  signature-block drafting clause's "declare under penalty of perjury"
  framing matches the corpus's established convention for this
  sub-family of information sheets. Independently reconfirmed this
  document does not duplicate the existing `trust_accounting_duty` or
  `pettrust_accounting_threshold_and_inspection` clauses (see Why this
  document above), and is distinct from the existing Trustee's
  Notification to Beneficiaries document's one-time §16061.7 notice.
- Checked every citation's `case` field for emptiness — all 16
  populated with proper citation identifier strings.
- No new fields required — all six fields (`trustName`,
  `originalTrustDate`, `trusteeName`, `beneficiaryName`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Beneficiary's Right to a Trust Accounting — Information
  Sheet (`beneficiary_right_to_trust_accounting_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 3,760 → 3,771 clauses; 492 → 493 documents. Third processed
  item of wave 114.
