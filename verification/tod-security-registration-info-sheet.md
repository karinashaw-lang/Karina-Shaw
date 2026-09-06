# Estate Planning, new document: Transfer-on-Death (TOD) Security Registration — Information Sheet

## Why this document

Fourth and final processed item of wave 128 (Estate Planning slot,
1×4 pattern). The topic was directly signposted by the existing
Payable-on-Death (POD) Account document, whose own gap field
explicitly flags "the Uniform TOD Security Registration Act" as a
different statute it does not cover. The agent ruled out three other
candidates via specific greps: charitable trust supervision (Gov.
Code §§12580-12581, already covered), virtual representation/trust
beneficiary consent (a false lead — the "15800"/"15801" hits traced to
an unrelated revocable-trust-duties clause), and the Professional
Fiduciaries Act (Bus. & Prof. Code §6500 et seq., all corpus hits on
"6500" confirmed as unrelated false positives — remains technically
open but not pursued once TOD securities proved cleaner). The chosen
topic — the Uniform TOD Security Registration Act (Prob. Code
§§5500-5512), governing beneficiary-form registration of securities
and brokerage accounts, distinct from bank P.O.D. accounts and real-
property TOD deeds — was confirmed genuinely open: zero prior corpus
hits on §§5500-5512 before drafting.

## What this document covers

11 clauses: 2 drafting (declaration, signature/acknowledgment) and 9
authority clauses, citing Prob. Code §5500(a)-(c), §5501(a), (c), (d),
(e)(1)(A), (f), §5502, §5503, §5504, §5505, §5506, §5507, §5508(a),
(c), §5509, §5511, §5510(a), (b), §5512:

- **`todsec_purpose_and_definitions`** — the Act's short title, stated
  purpose, and the "beneficiary form"/"registering entity" definitions.
- **`todsec_security_and_account_scope`** — the "security"/"security
  account" definitions and the statute's own boundary against the
  Multiple-Party Accounts Law.
- **`todsec_eligible_owners_and_governing_law`** — who may register and
  which jurisdiction's law can authorize the registration.
- **`todsec_designation_mechanics`** — how a beneficiary-form
  registration is created and the "TOD"/"POD" wording.
- **`todsec_revocability_lifetime`** — no effect until death and free
  revocability without beneficiary consent.
- **`todsec_death_transfer_effect`** — passage to survivors, tenancy in
  common among multiple beneficiaries, and lapse to the estate.
- **`todsec_registering_entity_protections`** — the entity's discretion
  to offer registration and its discharge from claims after a
  good-faith transfer.
- **`todsec_nontestamentary_and_other_rights_preserved`** — the
  transfer's nontestamentary character and preserved spousal/creditor/
  community-property rights.
- **`todsec_terms_conditions_and_applicability`** — the registering
  entity's own terms, the "LDPS" substitute-beneficiary mechanism, and
  the Act's applicability date.

## Genuine findings

- **A disclosed, uncorrected uniform-act artifact flagged rather than
  resolved**: the eligible-owners clause's gap notes that §5502's text
  lists "tenants by the entireties" as a holding form even though
  California does not generally recognize tenancy by the entirety —
  flagged as apparent uniform-act language carried into the California
  statute without adaptation, with no resolution asserted.
- **A disclosed, deliberate choice not to independently fetch a
  cross-referenced chapter**: the nontestamentary-character clause's
  gap explicitly discloses that §5511's cross-reference to Chapter 2
  (commencing with §5010) of Part 1, Division 5 was not independently
  fetched, quoted, or verified.
- **A disclosed textual observation on a narrow carve-out**: the
  security-and-account-scope clause's gap notes that §5501(f)'s
  boundary against the Multiple-Party Accounts Law is narrow on its
  own terms — excluding only "cash equivalents in multiple-party
  accounts," not every brokerage or investment account outright.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not determine whether a specific security, account,
or instrument actually qualifies for beneficiary-form registration,
does not resolve what legal effect (if any) the "tenants by the
entireties" holding form would have for California owners, does not
independently verify the cross-referenced Chapter 2 (commencing with
§5010), does not identify which jurisdiction's law would govern an
LDPS substitute beneficiary's shares when domiciled outside California,
does not address what happens if surviving co-owners disagree about
canceling or changing a registration, and does not restate California's
Uniform Simultaneous Death Act's 120-hour survival rule, addressed
elsewhere in this corpus as a separate statutory scheme.

## Method

Fetched Prob. Code §§5500-5512 (13 sections) from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical
(excluding per-request JSF ViewState session tokens outside the
statutory content); several transient relay failures were resolved
with backoff retry, the same known transient-relay issue independently
encountered and resolved elsewhere in this project. CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 20 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-eighty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-181stVerify-TODSecurities/1.0") of all 13
sections — all 19 citation instances (excluding one drafting-only
count discrepancy in the original tally) confirmed clean; 2 of the 19
required the standard whitespace-stripped fallback check (the familiar
subdivision-marker-spacing artifact, confirmed benign via direct
context inspection of §5500 and §5509's raw fetched text). The Act's
short title and purpose, the beneficiary-form and registering-entity
definitions, the security/security-account definitions, the eligible-
owner and governing-law rules, the designation mechanics, lifetime
revocability, the death-transfer effect, the registering entity's
protections, the nontestamentary character and preserved rights, the
LDPS mechanism, and the applicability date were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All 13 Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-eighty-first independent fetch during integration
  review; all citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `todsec_` prefix has zero collisions. Ran
  section-number-specific greps for §§5500-5512 across the full
  corpus — zero hits outside the new clauses, confirming no disguised
  overlap.
- Checked every citation's `case` field for emptiness — all 20
  populated with proper citation identifier strings.
- No new fields required — all six fields (`ownerName`,
  `financialInstitutionName`, `accountDescription`, `beneficiaryName`,
  `additionalBeneficiaryName`, `contingentBeneficiaryName`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Transfer-on-Death (TOD) Security Registration —
  Information Sheet (`tod_security_registration_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 4,197 → 4,208 clauses; 535 → 536 documents. Fourth and final
  processed item of wave 128.

## Wave 128 summary

Wave 128 followed the established 1×4 pattern, targeting Hiring, Real
Estate, Estate Planning, and Family Law — the four categories tied
lowest after wave 127's rotation. All four agents ran section-number-
specific duplication checks before landing on genuinely open topics:
the Driver's License Requirement in Job Postings restriction (Gov.
Code §12940(q), added by SB 1100, after ruling out four already-
covered candidates), California Water Rights (Water Code provisions on
reasonable use, appropriation scope, riparian priority, SGMA, and
diversion filing, after ruling out seven already-covered candidates),
Abolished Heart-Balm Actions (Civ. Code §§43.5 and 1590, after ruling
out eight already-covered candidates and resolving a false-positive
substring collision on bare "1590" against RULPA sections), and TOD
Security Registration (Prob. Code §§5500-5512, directly signposted by
an existing document's own honest gap disclosure). This wave produced
zero genuine duplication findings requiring exclusion — every
delivered clause across all four documents survived independent
integration review intact, aside from routine transient-connectivity
retries and one integration-review script bug (a curly-to-straight-
apostrophe normalization error in the Water Rights re-verification,
promptly corrected and reconfirmed clean) that were not defects in the
delivered work itself. Each document surfaced at least one genuine,
disclosed finding: two verified source-formatting artifacts preserved
exactly (Driver's License Posting); a disclosed choice not to fetch a
basin-designation bulletin and not to quote allocation-trading
mechanics (Water Rights); a caught-and-resolved false-positive
substring collision (Heart-Balm Actions); and a disclosed,
uncorrected uniform-act artifact in the eligible-owners statute (TOD
Security Registration). Per the established alternation, wave 129
should return to a 2×2 pattern.
