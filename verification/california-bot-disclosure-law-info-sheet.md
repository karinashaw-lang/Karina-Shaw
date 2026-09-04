# Confidentiality & IP, new document: California Bot Disclosure Law (Bus. & Prof. Code §§ 17940-17943) — Information Sheet

## Why this document

Substitute topic for wave 78's Confidentiality & IP slot: the
originally assigned topic (California's postmortem right of publicity,
Civil Code § 3344.1) turned out to already be fully, independently
verified in the existing `right_of_publicity_info_sheet` document — the
research agent correctly stopped rather than duplicate that coverage.

Confirmed by grep that "B.O.T. Act," "bot disclosure," and §§
17940-17943 had zero prior hits (the only "1794x" hits in the corpus
were unrelated Revenue & Taxation Code LLC-tax provisions, a different
code and subject entirely). Read all six existing privacy-titled
documents (CCPA Service Provider DPA, CCPA Consumer Privacy Policy,
CalOPPA, CCPA Employee/Applicant Data, CIPA, Genetic Information
Privacy Act) in full — confirmed all concern consumer-data privacy,
communications interception, or genetic-data consent, none touch
bot-identity disclosure. Confirmed non-duplicative.

## What this document covers

6 clauses: 2 drafting (purpose/scope, certification) and 4 authority
clauses, citing Cal. Bus. & Prof. Code §§ 17940(a)-(c), 17941(a)-(b),
and 17942(c):

- **`botact_definitions`** (§ 17940(a), (b), (d)) — the statutory
  definitions of "bot" (an automated online account where all or
  substantially all actions are not the result of a person), "online,"
  and "person."
- **`botact_core_prohibition`** (§ 17941(a)) — **the central finding**:
  the core prohibition is narrower than "undisclosed bot activity" —
  it requires intent to mislead about the bot's artificial identity,
  coupled with a purpose of knowingly deceiving about the content of
  the communication, directed at one of two specific ends (a
  commercial transaction or an election vote) — plus the
  disclosure-based liability exception.
- **`botact_disclosure_standard`** (§ 17941(b)) — the "clear,
  conspicuous, and reasonably designed" disclosure standard, honestly
  disclosed as undefined in further detail by the statute's own text,
  with no codified safe harbor located.
- **`botact_service_provider_exemption`** (§ 17940(c), § 17942(c)) —
  the exemption for service providers of "online platforms" — a
  defined term carrying a 10,000,000-monthly-visitor threshold, so the
  exemption is narrower than one for service providers of any
  website/app regardless of size.

## Genuine corrections and findings

- **A genuine premise correction**: the research brief assumed the
  statute is popularly known as the "B.O.T. Act" or "Bolstering Online
  Transparency Act." Neither phrase appears anywhere in the codified
  chapter text or the enacting bill (SB 1001) itself — the chapter is
  captioned only "CHAPTER 6. Bots." The informal nickname is
  mentioned once in the drafting intro clause with an explicit hedge
  that the statute's own text does not assign it, and is never
  presented as authoritative in any authority clause.
- **The central finding**: confirmed the core prohibition is
  substantially narrower than "any undisclosed bot use online" —
  it requires the layered mental-state elements (intent to mislead
  about artificial identity, purpose of knowingly deceiving about
  content) AND one of two specific ends (commercial transaction or
  election vote), not a general disclosure mandate for all bots.
- Confirmed the service-provider exemption is qualified by the
  "online platform" definition's 10-million-monthly-visitor threshold
  — correcting a natural assumption that the exemption might apply to
  any web host or ISP regardless of the platform's size.
- Confirmed no enforcement mechanism exists within this chapter's own
  text (no named plaintiff, agency, or penalty) — honestly omitted
  rather than guessed, since Business and Professions Code violations
  of this kind typically run through the separate Unfair Competition
  Law (§ 17200 et seq.), which was not independently verified here.

## Honest gap(s) disclosed

§ 17942(a) (duties cumulative with other law) and § 17942(b)
(severability) are not restated as their own clauses — generic
statutory boilerplate, mentioned only in passing in a gap note. No
enforcement mechanism is described. No implementing regulations,
administrative guidance, or case law construing the "clear,
conspicuous, and reasonably designed" disclosure standard were located
or cited.

## Method

Fetched Cal. Bus. & Prof. Code §§ 17940, 17941, and 17942 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with distinct User-Agent strings (Chrome/Windows and Safari/macOS;
one section required a retry after a transient proxy connection reset),
confirmed byte-identical after whitespace normalization. All 7
citation quotes across the 4 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a fourth fetch
(a distinct curl User-Agent string, "Groundtruth-Third-Verify/1.0") of
all three sections — all 7 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a fourth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the § 17940(a)/(b)/(d)
  triple citation and the § 17941(a)/(b) pair each correctly disclosed
  as not independent of one another (same statutory section); the
  § 17940(c)/§ 17942(c) pairing in the exemption clause correctly
  disclosed as independent (separately numbered sections); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Certification") match titles used elsewhere in the corpus —
  confirmed as the corpus's established, intentional boilerplate-title
  reuse pattern (unique clause ids), not a genuine collision.
- No new fields required — all three fields (`preparerName`,
  `businessName`, `signatureDate`) reused from the existing corpus (22,
  12, and 20 prior documents respectively), all contextually
  appropriate as-is.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California Bot Disclosure Law (Bus. & Prof. Code
  §§ 17940-17943) — Information Sheet
  (`california_bot_disclosure_law_info_sheet`), 6 clauses (4 authority
  + 2 drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 2,743 → 2,749 clauses; 360 → 361 documents. Second document
  of wave 78.
