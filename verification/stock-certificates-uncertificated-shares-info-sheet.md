# Business Formation, new document: Stock Certificates and Uncertificated Shares — Information Sheet

## Why this document

Confirmed by grep that certificate mechanics generally had no
dedicated coverage — only three passing mentions existed
(`buysell_corp_restriction_notice` § 418(a)(1), `closecorp_transfer_
restriction_legend` § 418(c)/(d)/§ 421, and `dissenters_procedure_
demand` §§ 1301-1302's certificate-endorsement mechanics), none
covering certificate mechanics as a general topic. Read the full
Corporate Bylaws document's clauses and confirmed no overlap. Second
of wave 61's four documents.

## What this document covers

6 clauses: 2 drafting (purpose/scope, closing/signature) and 4
authority clauses, citing Cal. Corp. Code §§ 416, 417, and 419:

- **`stockcert_certificate_entitlement`** (§ 416(a)) — every
  shareholder's default entitlement to a signed certificate, the
  required officer co-signature, facsimile-signature permission, and
  the former-officer validity rule.
- **`stockcert_uncertificated_shares`** (§ 416(b)) — **a key finding**:
  California does not require physical certificates; a corporation may
  adopt an uncertificated (book-entry) system instead, subject to
  stated conditions.
- **`stockcert_class_series_disclosure`** (§ 417) — required content
  when shares are classified into classes or series, with three
  alternative compliance methods.
- **`stockcert_lost_stolen_destroyed`** (§ 419(a)-(b)) — the
  replacement procedure for a lost, stolen, or destroyed certificate,
  including the corporation's indemnification-security option and the
  shareholder's court-order remedy if refused.

## Genuine corrections and findings

- **The central finding**: California law does not mandate
  certificated shares — § 416(b) expressly permits an uncertificated,
  electronic system as an alternative, subject to SEC approval, federal
  statutory authorization, or compliance with California Commercial
  Code Division 8.
- Confirmed the specific officer-signature pairing required for a
  valid certificate (one from a board/president group, one from a
  CFO/secretary group), and that facsimile signatures are expressly
  permitted for any or all of them.
- Confirmed a genuinely uncertificated system does not retroactively
  displace already-issued physical certificates until they are
  surrendered.
- Confirmed § 417's class/series disclosure requirement offers three
  distinct compliance paths (full statement, cross-referenced summary,
  or an on-request-copy statement) rather than a single mandatory
  format.

## Honest gap disclosed

An attempted fetch of California Commercial Code § 8408 (referenced by
§ 416(b)'s text) did not return usable statutory text and that point is
omitted rather than guessed at. The Commissioner of Financial
Protection and Innovation's own administrative requirements under the
Corporate Securities Law of 1968 were not independently verified.
§ 419's replacement procedure only textually covers "certificates,"
with no resolution stated for how (or whether) an equivalent procedure
applies to a lost or misappropriated uncertificated-share notice.
§ 419(c)'s further detail on what a court must find before ordering
reissuance is not addressed. § 418(a)-(b)'s separate content
requirements (transfer restrictions, redemption rights, voting
agreements) and § 418(c)-(d)'s close-corporation legend are left to the
existing Buy-Sell Agreement and Close Corporation documents,
respectively, rather than duplicated here.

## Method

Fetched Cal. Corp. Code §§ 416, 417, and 419 directly from
`leginfo.legislature.ca.gov` via curl, each section fetched twice with
two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 7 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All three sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each pair of same-
  subsection citations (§ 416(a)'s two quotes, § 416(b)'s two quotes,
  § 419(a)/(b)'s two quotes) correctly disclosed as not independent of
  one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `stateOfFormation`, `shareholderName`,
  `numberOfSharesHeld`, `dateSigned`, `cityState`) independently
  confirmed to match existing corpus field definitions exactly. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Stock Certificates and Uncertificated Shares —
  Information Sheet
  (`stock_certificates_uncertificated_shares_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 2,272 → 2,278 clauses; 292 → 293 documents. Second document
  of wave 61.
