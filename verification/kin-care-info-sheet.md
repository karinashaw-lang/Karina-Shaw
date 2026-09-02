# During employment, new document: Kin Care — Using Sick Leave to Care for a Family Member Information Sheet

## Why this document

The corpus's existing California Paid Sick Leave document covers the
Healthy Workplaces, Healthy Families Act generally. Lab. Code § 233 is
a related but textually distinct statute about using accrued sick
leave for family-member care. Confirmed as a genuine gap: grep for
"kin care" across the corpus returned zero hits.

## What this document covers

7 clauses: 2 drafting (leave request declaration, acknowledgment) and
5 authority clauses:

- **`kincare_core_right_and_calculation`** (Lab. Code § 233(a)) — the
  core kin care right and its six-month accrual-floor calculation.
- **`kincare_family_member_cross_reference`** (§ 233(b)(2)) — the
  cross-reference to the Paid Sick Leave family-member definition.
- **`kincare_relationship_to_paid_sick_leave_act`** (§ 233(b)(3)(A);
  *McCarther v. Pacific Telesis Group*, 48 Cal.4th 104 (2010)) — how
  kin care functions as a usage floor on existing accrued sick leave.
- **`kincare_no_fault_absence_control_prohibition`** (Lab. Code § 234;
  *McCarther*) — the prohibition on counting kin care leave against a
  no-fault attendance policy.
- **`kincare_enforcement_and_remedies`** (§ 233(d)-(e)) — enforcement
  and remedies for a violation.

## Genuine corrections and findings

- Confirmed the six-months'-accrual floor exactly as originally
  framed. A refinement: § 233(a) doesn't itself list family
  relationships — it cross-references "the reasons specified in
  subdivision (a) of Section 246.5," a broader list than just illness
  of a family member (also covering preventive care and, by further
  cross-reference, crime-victim and agricultural-emergency leave).
- Confirmed § 233(b)(2)'s cross-reference to § 245.5's Paid Sick Leave
  family-member definition, not a separate CFRA definition.
- **A significant correction to the entire relationship framing**:
  § 233 is not an independent, differently-scoped right — its own
  definition of "sick leave" (§ 233(b)(3)(A)) is itself defined by
  reference to § 246.5(a)'s reasons. It functions as a usage-volume
  floor on whatever sick leave benefit already exists, not a separate
  accrual mechanism. **A genuine, non-obvious finding**: *McCarther*
  held § 233 does not apply to uncapped/unlimited paid-time-off-for-
  illness policies — only to measurable, banked, accrual-based sick
  leave — a limit that would not have been found without the case law.
- **A correction on employer conditions**: the originally-framed
  assumption that an employer may impose the same notice/documentation
  conditions on kin care use has no support in the current statutory
  text — § 233 is silent on notice/documentation procedure, disclosed
  explicitly rather than invented. What the statute does address,
  substituted in instead, is Lab. Code § 234: a per se violation for
  using a no-fault absence-control policy to discipline kin care
  absences, reinforced by *McCarther*'s discussion of how §§ 233-234
  work together.
- Confirmed § 233(d)-(e)'s enforcement mechanism (reinstatement/
  damages; Labor Commissioner enforcement or civil action, attorney's
  fees), disclosed as subdivisions of one section, not independent
  sources.

## Honest gaps disclosed

- The substance of the cross-referenced general Labor Commissioner
  enforcement provisions (§§ 92, 96.7, 98, 98.1-98.8) was not
  independently fetched.
- *McCarther* construed a 2010-era version of § 233(a) that listed
  relationships directly rather than cross-referencing § 246.5(a); it
  was relied on only for its still-good reasoning about "accrued/
  measurable/banked" leave, with the fact that its quoted statutory
  language is now superseded by the 2020 amendment (AB 2017)
  explicitly flagged.

## Method

Fetched Lab. Code §§ 233, 234, 245.5, and 246.5 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. *McCarther v. Pacific Telesis Group* fetched and verified
via CourtListener (rate-limited twice mid-session; the agent backed
off and retried rather than fabricating, and it recovered). All
citation quotes programmatically confirmed as exact substrings of the
fetched, normalized text.

## Verification

- All citations fetched twice independently; confirmed clean on
  integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 233(d)-(e)
  correctly disclosed as subdivisions of one section, not independent;
  § 234 correctly disclosed as a genuinely separate section; correct
  as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Kin Care — Using Sick Leave to Care for a Family
  Member Information Sheet (`kin_care_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 1,674 → 1,681 clauses; 212 → 213 documents.
