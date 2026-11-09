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

## Addendum, 2026-11-09 (Phase 12 Step 10)

This document was recategorized from `["Family Law"]` to
`["Consumer & Civil Court"]` (the new 9th category added this step —
see `DECISIONS.md`'s 2026-11-09 entry) and one clause was added to
close a coverage gap found while scoping Step 10's planned documents.

- **Gap found:** no clause anywhere in the corpus discussed
  California's separate, newer process for a name change that conforms
  to the petitioner's gender identity (confirmed by grepping
  `data/clauses.json` for "1277.5", "103437", "gender identity", and
  "gender identifier" — the only hits were unrelated FEHA/housing
  protected-characteristic clauses). This was a pure coverage gap, not
  an existing error.
- **New clause:** `namechange_gender_identity_conforming_process`,
  inserted into `clauseOrder` right after
  `namechange_confidential_name_change`. It covers two already-enacted
  statutes, both operative July 1, 2026 (already past as of this
  addendum's date): Health & Safety Code § 103437(b)(1), (c)(1), (3)
  (Senate Bill 59, Stats. 2025, ch. 738 — confidentiality of records in
  a gender-identity/gender-and-sex-identifier name-change proceeding,
  and when that confidentiality attaches) and Code of Civil Procedure
  § 1277.5(a)-(b)(1) (Assembly Bill 1084, Stats. 2025, ch. 723 — no
  order-to-show-cause, no-hearing, six-week process for an adult's or a
  fully-parent-consented minor's gender-identity-conforming name
  change).
- **Why `status: "unverified"`, not `"verified"`:** every other
  authority clause in this corpus is `"verified"` against a direct
  fetch of the actual statutory text (almost always from
  `leginfo.legislature.ca.gov`). For this clause, every such direct
  fetch failed: `leginfo.legislature.ca.gov` returned a Cloudflare 403
  for both § 103437 and § 1277.5 (the same sandbox limitation already
  on record elsewhere in this corpus for leginfo generally);
  `law.onecle.com` returned 404 for § 103437; and several guessed
  `california.public.law` URL slugs for both sections returned 404,
  including after confirming the site's working slug pattern against a
  known-good reference section already cited elsewhere in this
  document (CCP § 1277). Rather than mark this clause `"verified"` on
  the strength of a secondary source, or skip the clause and leave the
  gap undisclosed, it is included with real citations and quotes, each
  attributed to its actual source — the Judicial Council's Invitation
  to Comment W26-03 ("Civil Practice and Procedure: Name Change and
  Gender Change Rules and Forms," `courts.ca.gov`) — and marked with a
  status value, `"unverified"`, not otherwise used anywhere in this
  corpus. `tools/tiering.py` and `tools/add_effective_cycle_checked.py`
  both already key off `status == "verified"` specifically, so this
  clause is automatically excluded from Tier A/B eligibility and from
  the effective-cycle/staleness machinery that applies to `"verified"`
  clauses — it will not silently count toward either until someone
  re-checks it against the statute's actual text and bumps its status.
- **What the source actually supports:** the Judicial Council document
  describes the effect of two bills the Legislature already enacted
  (Stats. 2025, chs. 723 and 738); its own "not yet approved by the
  Judicial Council ... circulated for comment" disclaimer is about the
  specific *rules and forms* (a proposed NC-200 form series, comment
  period closed January 7, 2026) the committee was proposing to
  implement those bills, not about whether the bills themselves are
  law — they already are. Accordingly the clause describes only the
  statutory confidentiality and no-hearing requirements and names no
  specific form number.
- **Not covered by the new clause:** CCP § 1277.5(b)(2)(A)-(C)'s
  retained order-to-show-cause process for a minor's petition where
  not all living parents sign; § 1279.5(e)'s sex-offender-registrant
  bar (already in `namechange_hearing_standard_and_denial_grounds`);
  and the related but distinct "recognition of a change in gender and
  sex identifier" petition track under Health & Safety Code §§ 103430
  and 103435, which this document does not address at all.
- **Checks run:** `python3 tools/validate_corpus.py` passes (4,981
  authority clauses, up from 4,980; 0 newly flagged fatal/warn; no
  duplicate-id or key-order failures).
