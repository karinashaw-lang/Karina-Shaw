# Confidentiality & IP, new document: DTSA Civil Seizure Remedy — Information Sheet

## Why this document

First processed item of wave 116 (Confidentiality & IP slot, 1×4
pattern). This topic was flagged as a strong candidate directly from a
gap already disclosed in the corpus: the existing `tsmisap_dtsa_remedies`
clause (in the Trade Secret Misappropriation Cease and Desist Letter
document) explicitly states "Federal law separately authorizes an
extraordinary, ex parte civil seizure remedy in limited circumstances;
that seizure remedy is a different provision and isn't addressed by
this clause." The existing Trade Secret Injunctive Relief Standards
document likewise only covers § 1836(b)(3)(A) (the ordinary injunction),
not § 1836(b)(2) (the seizure remedy). Document- and clause-level greps
for "seizure," "1836(b)(2)," and "ex parte" confirmed no dedicated
treatment exists anywhere in the corpus's 69 existing Confidentiality &
IP documents. No pivot was needed.

## What this document covers

10 clauses: 2 drafting (intro, signature/acknowledgment) and 8 authority
clauses, citing 18 U.S.C. §§ 1836(b)(2)(A)(i), (b)(2)(A)(ii)(I)-(III),
(b)(2)(A)(ii)(IV)-(VI), (b)(2)(B)(ii), (b)(2)(B)(v), (b)(2)(E), (b)(2)(D)(i),
(b)(2)(G):

- **`dtsaseize_extraordinary_and_ex_parte`** — the ex parte,
  extraordinary-circumstances threshold for seeking seizure.
- **`dtsaseize_necessity_findings`** — the required findings on
  inadequacy of other relief, irreparable injury, and balance of harms.
- **`dtsaseize_merits_findings`** — the required findings on likelihood
  of success, possession, and particularity of the property to be
  seized.
- **`dtsaseize_order_narrowness_and_protection`** — the narrowest-
  seizure requirement and pre-hearing disclosure protection.
- **`dtsaseize_hearing_deadline_and_security`** — the seven-day hearing
  deadline and mandatory security bond.
- **`dtsaseize_execution_by_law_enforcement`** — execution by federal
  law enforcement only, barring the applicant's participation.
- **`dtsaseize_custody_and_confidentiality`** — court custody of seized
  materials and confidentiality safeguards, including the special-master
  option.
- **`dtsaseize_wrongful_seizure_liability`** — the wrongful/excessive-
  seizure cause of action (incorporating Lanham Act relief) and the
  encryption-motion mechanism.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially expected the statute's skeleton described in the
  task prompt to be a relatively simple provision. Reading the full text
  of § 1836(b)(2) revealed eight numbered findings, six required order
  elements, and separate subparagraphs for publicity protection,
  custody/confidentiality, service/execution, the hearing, wrongful-
  seizure liability, and encryption motions — leading the agent to split
  this into 8 distinct authority clauses rather than one omnibus clause,
  each cross-referencing sibling clauses covering the remainder of the
  shared subparagraph.
- **A disclosed cross-reference not independently verified**: the
  wrongful-seizure clause identifies the DTSA's incorporation of Lanham
  Act relief (15 U.S.C. § 1116(d)(11)) but does not independently fetch
  or quote that provision's own text, disclosed honestly as a
  cross-reference only.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not address how courts have actually applied the
"extraordinary circumstances" threshold since the DTSA's 2016 enactment,
does not independently verify the incorporated Lanham Act relief
standard's own text, does not restate the publicity-protection
provisions of subparagraph (C) as a separate clause, and does not
describe what amount of security bond any court would set or how
quickly any specific hearing would actually be scheduled in practice.

## Method

Fetched 18 U.S.C. § 1836 from Cornell LII, fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical via
matching MD5 checksums. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 8 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-forty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-142ndVerify-DTSASeizure/1.0") of the same source —
all 8 citation instances confirmed clean on direct normalized-whitespace
substring match, no extraction artifacts encountered. The extraordinary-
circumstances threshold, the eight numbered findings, the seven-day
hearing deadline, and the wrongful-seizure cause of action were all
independently reconfirmed present in the freshly fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-forty-second
  independent fetch during integration review; all 8 citation instances
  confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — all citations drawing
  from § 1836(b)(2)'s subparagraphs correctly disclose they are not
  independent sources of the sibling clauses covering the remainder of
  the same subparagraph; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the sole existing "seizure" corpus hit
  (`tsmisap_dtsa_remedies`) explicitly discloses this exact gap, and
  that the existing Trade Secret Injunctive Relief Standards document
  only covers § 1836(b)(3)(A), not (b)(2).
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`preparerName`, `companyName`,
  `tradeSecretDescription`, `adversePartyName`, `dateSigned`, `cityState`)
  reused from the sibling Trade Secret Injunctive Relief Standards
  document.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: DTSA Civil Seizure Remedy — Information Sheet
  (`dtsa_civil_seizure_remedy_info_sheet`), 10 clauses (8 authority + 2
  drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 3,803 → 3,813 clauses; 496 → 497 documents. First processed
  item of wave 116.
