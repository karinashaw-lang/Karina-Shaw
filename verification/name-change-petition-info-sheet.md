# Family Law, new document: Petition for Change of Name (Adult or Minor) — Information Sheet

## Why this document

Grep of the existing Family Law documents confirmed no prior document
addresses a court name-change petition — this is a genuinely distinct
topic from the corpus's existing dissolution, custody/support, and
paternity documents.

## What this document covers

9 clauses: 3 drafting (declaration, petition-summary, signature block)
and 6 authority clauses:

- **`namechange_superior_court_and_petition_contents`** (CCP § 1275;
  § 1276(a)(1), (a)(2), (g)(1)) — where and how a petition is filed,
  correcting an assumption about which section authorizes filing.
- **`namechange_minor_petition_and_parental_notice`** (CCP § 1276(c);
  § 1277(a)(4), (f)) — minor-specific petition contents and notice to
  a non-consenting parent or, for a guardian-filed petition, to
  living parents/grandparents.
- **`namechange_order_to_show_cause_and_publication`** (CCP
  § 1277(a)(1), (a)(2)(A), (a)(3)) — the order to show cause and the
  once-a-week-for-four-weeks publication requirement, confirmed as
  assumed.
- **`namechange_confidential_name_change`** (CCP § 1277(b)(1), (b)(2),
  (b)(3), (b)(5)) — the confidential/sealed-record exception,
  correcting an assumption about which section it lives in.
- **`namechange_hearing_standard_and_denial_grounds`** (CCP
  § 1278(a)(1), (a)(2), (b), (d); § 1279.5(e)) — the objector's
  "good cause" burden and the two mandatory statutory denial/grant
  rules, correcting an assumption about the statute's phrasing.
- **`namechange_marriage_domestic_partnership_distinct_process`** (Fam.
  Code § 306.5(a), (b)(1); § 298.5(e)) — the separate, non-court
  name-change mechanism tied to marriage or domestic-partnership
  registration.

## Genuine corrections caught during research

- The task brief assumed § 1277 is the section authorizing filing of a
  name-change petition. Direct review shows § 1276(a)(1) is the
  filing/venue statute; § 1277 instead governs the order to show
  cause, hearing scheduling, and publication that follow a filing.
- The task brief assumed the confidential/sealed-record mechanism
  lives in § 1276. Direct review shows it's codified in § 1277(b), not
  § 1276.
- The task brief assumed § 1278 states a "proper and reasonable
  causes" standard and lists examples like "intent to defraud or evade
  creditors." Direct review of § 1278 and § 1279.5 shows no such
  phrase or list — the statute instead frames the matter as an
  objector's burden to show "good cause against the change of name,"
  plus two specific mandatory rules (a best-interest finding for
  guardian-filed minor petitions, and a sex-offender-registrant denial
  bar). The "proper and reasonable cause" formulation could not be
  independently verified to a citable case this session (CourtListener
  rate-limited), so it is not included in the clause body.
- Confirmed the once-a-week-for-four-successive-weeks publication
  frequency exactly as assumed (CCP § 1277(a)(3)).

## Honest gaps disclosed

- § 1276(e)'s narrower jurisdictional carve-out for guardian-filed
  minor petitions already before a juvenile/probate court is noted but
  not detailed.
- § 1277(b)(4)'s narrower disclosure-at-petitioner's-request exception
  to the confidentiality rule is noted but not detailed.
- The Address Confidentiality Program statute itself (Gov. Code
  § 6205 et seq.) was not independently fetched.
- The "proper and reasonable cause" case-law standard commonly
  associated with this statute in secondary sources was not
  independently verified to a citable opinion — a CourtListener search
  attempt was blocked by the tool's daily rate limit — and is
  disclosed as unverified rather than included as fact.
- No minor-specific legal standard for resolving an actual parental
  objection is stated, because the statute does not provide one
  distinct from the general objection/hearing process.

## Method

Fetched CCP §§ 1275, 1276, 1277, 1278, 1279.5 and Fam. Code §§ 306.5,
298.5 directly from `leginfo.legislature.ca.gov`, each verified against
a second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All quotes programmatically confirmed as exact
substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause combining subsections of one statutory
  section carries an explicit disclosure; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  — one duplicate title was caught and renamed by the delivering agent
  before delivery ("Signature and Acknowledgment Block — Name Change
  Petition Information Sheet," to avoid colliding with
  `dissolution_signature_block`); none remain against the corpus.
- Field names (`dateSigned`, `cityState`) confirmed to match existing
  Family Law/Estate Planning documents' conventions. New fields:
  `petitionerName`, `currentName`, `proposedName`, `placeOfBirth`,
  `reasonForChange`, `otherParentName`, `countyOfFiling`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Petition for Change of Name (Adult or Minor) —
  Information Sheet (`name_change_petition_info_sheet`), 9 clauses (6
  authority + 3 drafting), in the Family Law category. New fields:
  `petitionerName`, `currentName`, `proposedName`, `placeOfBirth`,
  `reasonForChange`, `otherParentName`, `countyOfFiling`.
- Corpus: 929 → 938 clauses; 122 → 123 documents (counted before the
  HOA Assessment Lien document below was also merged in the same
  session pass — see that document's net-change line for the combined
  total).
