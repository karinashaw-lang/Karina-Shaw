# Confidentiality & IP, new document: California Genetic Information Privacy Act — Information Sheet

## Why this document

Confirmed by grep that "56.18," "Genetic Information Privacy Act,"
and "genetic data" had zero genuine hits — only unrelated matches
(Family Code parentage genetic testing, a "genetic data" field name
inside the existing data-breach-notification document's list of
covered data categories). Read the existing GINA document in full —
confirmed this is a genuine, non-duplicative companion: GINA is a
federal employment-discrimination statute; this is a California
consumer-privacy statute regulating direct-to-consumer genetic
testing companies' data practices, a completely different mechanism
and different regulated parties. Third of wave 72's four documents
(the Ending employment slot remains open after the UI misconduct
gap-fix substitution).

## What this document covers

8 clauses: 2 drafting (purpose, closing/signature) and 6 authority
clauses, citing Cal. Civ. Code §§ 56.18(b)(5)-(6), 56.181(a)(1)-(2),
(b)-(f), and 56.182(a)-(d):

- **`genprivacy_definitions`** (§ 56.18(b)(5)-(6)) — who the statute
  regulates ("direct-to-consumer genetic testing company") and its
  own "express consent" definition, including that consent cannot be
  inferred from inaction and that "dark pattern" agreement doesn't
  count.
- **`genprivacy_privacy_notice`** (§ 56.181(a)(1)) — the required
  privacy-practices summary and notice.
- **`genprivacy_consent_menu`** (§ 56.181(a)(2)) — **a key finding**:
  the statute requires a menu of five SEPARATE express consents
  (product use, sample storage, secondary use, third-party
  disclosure, marketing) — verified as genuinely distinct, not one
  blanket consent.
- **`genprivacy_revocation_security_deletion_rights`**
  (§ 56.181(b)-(d)) — the revocation mechanism, the 30-day
  revocation-honoring and sample-destruction deadlines, the data
  security duty, and consumer access/deletion rights.
- **`genprivacy_nondiscrimination_and_insurer_restriction`**
  (§ 56.181(e)-(f)) — the nondiscrimination rule for exercising
  statutory rights, and the restriction on disclosing genetic data to
  insurance and employment decisionmakers.
- **`genprivacy_enforcement_and_penalties`** (§ 56.182(a)-(d)) —
  **the central finding**: civil penalties ($1,000 negligent;
  $1,000-$10,000 willful) prosecuted exclusively by named public
  officials (AG, district attorney, county counsel, specified city
  attorneys/prosecutors) — explicitly disclosed as NOT a standalone
  private right of action, since prosecution is textually reserved to
  public officials even though a consumer's own injury complaint can
  trigger it.

## Genuine corrections and findings

- **The central finding**: confirmed the statute's enforcement
  structure does NOT give consumers a standalone civil claim to file
  and litigate directly, unlike some other California privacy
  statutes — prosecution is textually reserved exclusively to named
  public officials, with a consumer's complaint serving only as one
  stated basis on which those officials may act. This precise,
  easy-to-overclaim distinction was verified against the actual
  statutory text rather than assumed from the general pattern of
  privacy-statute enforcement.
- Confirmed the consent requirement is structured as a menu of five
  distinct, separately-required consents, not a single blanket
  authorization — a real, substantive requirement verified from the
  statute's own "at a minimum, separate and express consent for each
  of the following" language.
- Confirmed the recovered-penalty disposition rule: penalties are
  paid to the individual whose genetic data was involved, not
  retained by the enforcing government entity.
- Confirmed the statute's chapter range (§§ 56.18-56.186) via its own
  header, and that §§ 56.183, 56.185, 56.187 don't exist as assigned
  section numbers — verified via absent chapter markers rather than
  guessed at.

## Honest gap disclosed

§ 56.184 (scope/exemptions — HIPAA/CMIA carve-outs, research-
institution exemption, employer workplace-safety exemption) was
fetched and verified but not built into its own clause, to stay
within the target clause-count range. § 56.181(a)(2)(E)(ii)-(iii)'s
further marketing-consent conditions and same-company advertising
exception, and § 56.181(f)(2)'s exception to the insurer/employer
disclosure restriction, were not restated in full. Whether the
state's Unfair Competition Law supplies a separate enforcement avenue
was not researched.

## Method

Fetched Cal. Civ. Code §§ 56.18, 56.181, 56.182, 56.184, and 56.186
from `leginfo.legislature.ca.gov` via curl (through the sandboxed
proxy), each section fetched twice with distinct User-Agent strings
(Chrome/Windows, Firefox/Linux), confirmed byte-identical after
whitespace normalization. All 13 citation quotes across the 6
authority clauses programmatically confirmed as exact substrings of
the confirmed text.

## Verification

- All statutory sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all multi-subsection
  citations within § 56.18, § 56.181, and § 56.182 correctly disclosed
  as parts of one statutory section each, not independent of one
  another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused generic titles "Purpose of This Information Sheet" and
  "Acknowledgment" match this corpus's established cross-document
  pattern, not substantive duplicates.
- Field names (`businessName`, `preparerName`, `signatureDate`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: California Genetic Information Privacy Act —
  Information Sheet (`genetic_information_privacy_act_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,583 → 2,591 clauses; 336 → 337 documents. Third document
  of wave 72.
