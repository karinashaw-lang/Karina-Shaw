# Confidentiality & IP, new document: Employee/Applicant Social Media Password Protection — Information Sheet

## Why this document

Confirmed by grep that "980," "social media password," and "social
media account" had zero genuine hits anywhere in the corpus. Read the
existing employee monitoring clause in full — confirmed this is a
genuine, non-duplicative companion: that clause covers company-owned
systems/devices/email accessed on employer equipment; Labor Code § 980
covers a distinct restriction on an employer reaching into an
employee's or applicant's personal social media accounts. First of
wave 68's four documents (Hiring/During employment/Confidentiality &
IP/Ending employment "1×4" alternation).

## What this document covers

6 clauses: 2 drafting (purpose, acknowledgment) and 4 authority
clauses, citing Cal. Lab. Code § 980(a)-(e):

- **`socialmediapw_prohibition`** (§ 980(a)-(b)) — the statute's
  broad "social media" definition and its three-item prohibition list
  (disclose username/password, access in employer's presence, divulge
  personal social media). **A key finding**: the statute does not
  distinguish publicly-shared from limited-audience content, unlike
  some sister-state statutes — verified as a genuine negative rather
  than assumed.
- **`socialmediapw_investigation_exception`** (§ 980(c)) — the
  misconduct/legal-violation investigation exception, tied to use
  solely for that investigation or a related proceeding.
- **`socialmediapw_device_exception`** (§ 980(d)) — the separate
  exception for employer-issued electronic devices, limited to the
  device itself.
- **`socialmediapw_retaliation`** (§ 980(e)) — the retaliation
  prohibition and its "otherwise permitted by law" limit. **A key
  finding**: the statute states no specific enforcement mechanism,
  agency, or private right of action of its own.

## Genuine corrections and findings

- **The central finding**: confirmed the statute's prohibition does
  not turn on a public-vs-private content distinction — a real
  negative finding worth stating plainly rather than assuming this
  statute mirrors sister-state social-media-privacy laws that do draw
  that line.
- Confirmed § 980 states no enforcement mechanism, agency, or remedy
  of its own beyond the retaliation prohibition — explicitly declined
  to assume Labor Code § 98.6 or PAGA necessarily extends to a § 980
  violation, since neither was checked or verified in this research.
- Confirmed the investigation exception is conditioned on the
  disclosed content being used "solely for purposes of that
  investigation or a related proceeding" — not a general-purpose
  carve-out.
- Confirmed the employer-issued-device exception is limited to
  accessing the device itself, not personal social media reachable
  from it — and honestly flagged that the statute doesn't resolve how
  the two provisions interact in that overlap case.

## Honest gap disclosed

No case law construing § 980's key terms ("personal social media,"
the presence requirement, "employer-issued electronic device," or the
investigation exception) was located or verified. Whether Labor Code
§ 98.6 or PAGA's general enforcement mechanism extends to a § 980
violation was not researched — flagged as an open question rather
than assumed either way.

## Method

Fetched Cal. Lab. Code § 980 from `leginfo.legislature.ca.gov` via
curl (through the sandboxed proxy), fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. All 5 citation quotes across the 4 authority clauses
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- The statutory section fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all four subsection
  citations correctly disclosed as one statutory section, not
  independent of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  the reused generic drafting titles "Purpose" and "Acknowledgment"
  match this corpus's established cross-document pattern, not
  substantive duplicates.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Employee/Applicant Social Media Password Protection
  — Information Sheet
  (`social_media_password_protection_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Confidentiality & IP category. No
  new fields.
- Corpus: 2,471 → 2,477 clauses; 319 → 320 documents. First document
  of wave 68.
