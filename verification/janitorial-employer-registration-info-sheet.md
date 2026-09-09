# Hiring, new document: Property Service Workers Protection Act: Janitorial Employer Registration — Information Sheet

## Why this document

Sole item of wave 144 (Hiring slot). Hiring was the smallest category
in the corpus at 74 documents against 75-76 for the other seven
categories; this document brings it to 75.

Before settling on this topic, the following candidates were checked
against `data/documents.json` and confirmed already covered elsewhere
in the corpus, most of them thoroughly:

- Background-check disclosure (FCRA/ICRAA) — `background_check`,
  `background_check_adverse_action_notice_info_sheet`,
  `icraa_info_sheet`.
- Job-posting salary-range disclosure (Lab. Code § 432.3) —
  `pay_scale_disclosure_info_sheet`.
- New-hire notice (Wage Theft Prevention Act, Lab. Code § 2810.5) —
  `wage_theft_prevention_notice`.
- I-9 / E-Verify — `i9_employment_eligibility_info_sheet`,
  `everify_info_sheet` (the latter already comprehensively covers Lab.
  Code § 2814's California-specific E-Verify restrictions).
- Ban-the-box / criminal history (Gov. Code § 12952; Lab. Code
  §§ 432.7, 432.8, including the marijuana-conviction-specific rule)
  — `fair_chance_act_info_sheet`,
  `arrest_diversion_sealed_record_inquiry_info_sheet` (§ 432.8 is
  already quoted there).
- Reference-check liability (Civ. Code § 47(c)) — already present as
  `employer_reference_immunity_info_sheet`, filed under "Ending
  employment."
- Employee/applicant social media password protection (Lab. Code
  § 980) — already present under "Confidentiality & IP."
- Willful misclassification penalties (Lab. Code § 226.8), grocery
  worker retention, displaced janitor opportunity act, no-rehire
  clauses, military/veteran status discrimination (Mil. & Vet. Code
  § 394) — all already present, mostly filed under "Ending
  employment."

The topic ultimately chosen — the Property Service Workers Protection
Act's janitorial-employer registration requirement (Labor Code Part
4.2, §§ 1420-1434) — was confirmed genuinely uncovered: a corpus-wide
search for "1420," "1423," "1427," "1428," "1429," "1430," "1431,"
"1432," "Property Service Workers," and "janitorial employer" turned
up no existing coverage. The only other hits on those section numbers
were coincidental same-numbered sections in unrelated codes (Probate
Code § 11420, Code of Civil Procedure §§ 1420/1430/1431, Health and
Safety Code § 1432) and two passing references to "janitorial" inside
the existing Displaced Janitor Opportunity Act and COVID-19 Right of
Recall documents (both filed under "Ending employment" and both
addressing a different subject: post-transition workforce retention,
not pre-engagement registration).

## What this document covers

12 clauses: 2 drafting (intro, acknowledgment) and 10 authority
clauses, citing Lab. Code §§ 1420(b)(1), 1420(g)(1), 1423, 1427, 1428,
1429 (intro), 1429(a), 1429(a)(10), 1429.5(a) (twice, for two distinct
sentences), 1430 (intro), 1430(a), 1431, 1432(a), 1432(b):

- **`propsvcreg_covered_worker_and_employer_defined`** — the § 1420
  definitions of "covered worker" (a janitor, including independent
  contractors and franchisees, not employees only) and "employer"
  (broad enough to include a business that contracts for janitorial
  services, excluding only the recipient of those services).
- **`propsvcreg_annual_registration_required`** — the § 1423 annual
  registration duty, effective July 1, 2018.
- **`propsvcreg_no_business_without_registration`** — § 1428's
  prohibition on conducting janitorial business without registration
  and the commissioner's revocation authority.
- **`propsvcreg_registration_fee`** — § 1427's $500 initial and $500
  annual fee.
- **`propsvcreg_application_training_attestation`** — § 1429's written
  application requirement and, specifically, paragraph (a)(10)'s
  sexual violence and harassment prevention training attestation
  condition.
- **`propsvcreg_biennial_training_requirement`** — § 1429.5(a)'s
  biennial in-person training establishment duty.
- **`propsvcreg_training_relationship_to_general_training`** —
  § 1429.5(a)'s separate statement that this training is "in lieu of,
  and not in addition to" the general FEHA training duty under Gov.
  Code § 12950.1 (the statute this corpus's existing Mandatory Sexual
  Harassment Prevention Training info sheet addresses).
- **`propsvcreg_registration_denial_grounds`** — § 1430's bar on
  registering or renewing an employer with an unsatisfied unpaid-wage
  judgment (one of five listed grounds; only this one is quoted).
- **`propsvcreg_civil_fines`** — § 1432(a)-(b)'s civil fines for an
  unregistered employer and, separately, for a party that *contracts
  with* an unregistered janitorial employer.
- **`propsvcreg_public_database`** — § 1431's public online registry,
  the same database § 1432(b) references.

## Genuine findings

- **A self-caught schema error**: an initial draft of the
  `propsvcreg_annual_registration_required` clause's `gap` field
  referenced `{{companyName}}`. A corpus-wide check confirmed 0 of
  4,800 existing clauses ever place a template placeholder inside a
  `gap` field (placeholders belong only in `body` fields, resolved at
  document-assembly time; `gap` is meta-commentary about the source,
  not templated document text). Caught and corrected before delivery.
- **A disclosed, deliberate choice not to cite case law**: a
  CourtListener search for published opinions construing this Act's
  registration or training provisions returned zero on-point results.
  This is disclosed directly in the `propsvcreg_public_database`
  clause's `gap` field rather than silently omitted.
- **Deliberately partial coverage, disclosed per clause**: this
  12-clause document does not attempt to restate all 15 sections of
  Part 4.2. Sections 1421 (recordkeeping), 1422 (enforcement
  authority), 1424 (pamphlet/related-information duty), 1425
  (registration form), 1426 (renewal-notice procedure), 1429.6 (a
  2024-2027 UCLA Labor Center study, unrelated to any employer duty),
  1433 (fund deposits), and 1434 (successor wage/penalty liability)
  are not quoted; each authority clause's `gap` field discloses which
  neighboring subdivisions or sections it does not restate, following
  the corpus's established practice for a section this long.

## Honest gap(s) disclosed

Collectively, the clauses disclose: the procedural steps preceding a
registration revocation are not stated in § 1428's own text and are
not addressed; the current (possibly periodically adjusted) fee amount
is not confirmed beyond the $500 figures stated directly in § 1427;
nine of eleven categories of required application content under
§ 1429(a) are not restated; four of five registration-denial grounds
under § 1430 are not restated; the § 1432(c)-(d) misrepresentation
fine and exclusive-enforcement-authority provisions are not restated;
and no case law is cited (a search turned up none, not that none
exists). None of the clauses determine that any specific person,
entity, or position is or is not a "covered worker" or "employer,"
or that any specific registration, application, training, or fine
obligation currently applies to any specific party.

## Method

Fetched the full text of Labor Code Part 4.2 (§§ 1420-1434) from
`leginfo.legislature.ca.gov` via
`codes_displayText.xhtml?lawCode=LAB&division=2.&title=&part=4.2.`
twice, using two distinct User-Agent strings
("Groundtruth-Research-Agent-1/1.0" and
"GroundtruthResearch-SecondFetch/2.0 (+legal-research;
independent-verification)"); the two fetches were byte-identical
(36,775 characters each, `diff` empty).

Independently fetched each of the nine individually-cited sections
(1420, 1423, 1427, 1428, 1429, 1429.5, 1430, 1431, 1432) a second and
third time via `codes_displaySection.xhtml?lawCode=LAB&sectionNum=<n>.`
— once with User-Agent "Mozilla/5.0 (Macintosh...)
GroundtruthVerifyA/1.0" and once with User-Agent
"GroundtruthLegalResearchBot/3.7 (independent-fetch;
+https://example.invalid/bot)". Two of eighteen individual-section
requests hit a transient connection reset on the first attempt
(sections 1427 and 1430, fetch A) and succeeded on retry. Raw HTML
sizes differed slightly between the two User-Agents on most sections
(a JSF ViewState token embedded per-request — a benign, expected
artifact of this site's server-side form framework, not a content
difference); after stripping markup and normalizing whitespace, the
extracted section text was byte-for-byte identical between the two
independent fetches for all nine sections, and also matched the
full-part-text fetch.

## Verification

- All 15 `citations[].quote` strings checked as exact,
  whitespace-normalized substrings of the independently double-fetched
  section text — confirmed against **both** independent per-section
  fetches (User-Agent "GroundtruthVerifyA/1.0" and
  "GroundtruthLegalResearchBot/3.7"), not just one. All 15 passed on
  both. No genuine defects found; the only formatting artifacts
  encountered were mid-word/mid-sentence line-wrap whitespace (e.g.
  "covered\n successor employer," "ten\n thousand dollars") — benign
  HTML line-wrap artifacts, normalized to single spaces per the
  corpus's established convention (confirmed by inspecting how
  existing multi-line statutory quotes elsewhere in `clauses.json`
  already collapse the same kind of wrap into single spaces). No gap
  disclosure was needed for these, consistent with corpus precedent.
- Checked every citation's `case` field for emptiness — all 15
  populated.
- Checked for ellipsis-stitched quotes (`...` or `…`) — none found;
  every quote is a single contiguous run of source text.
- Checked for `{{` template-placeholder leakage in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field
  — one instance found and corrected (see Genuine findings above);
  clean after correction.
- Checked clause `kind` schema conformance: every `drafting` clause
  has exactly `{id, title, kind, body}`; every `authority` clause has
  `{id, title, kind, status, checkedDate, body, gap, citations}` with
  no extra keys; every citation has exactly `{case, cite, url, quote}`.
- Checked for duplicate clause IDs against the full corpus (none); the
  `propsvcreg_` prefix has zero collisions with the existing 4,800
  clause IDs.
- Checked the new document ID
  (`janitorial_employer_registration_info_sheet`) against all 595
  existing document IDs — no collision.
- Checked that `clauseOrder` in the new document references exactly
  the 12 new clause IDs, in order, with none missing and none extra.
- Checked that every `{{placeholder}}` used in the document's clause
  bodies (`companyName`, `applicantName`, `jobTitle`, `dateSigned`)
  has a matching entry in the document's `fields` array, and vice
  versa — exact match both directions.
- Ran a corpus-wide validation after merging: both `data/clauses.json`
  and `data/documents.json` parse as valid JSON; 4,812 clause IDs are
  unique corpus-wide; 596 document IDs are unique corpus-wide; every
  `clauseOrder` reference in every one of the 596 documents resolves
  to an existing clause ID (0 missing references corpus-wide).
- Confirmed `git status --short` showed no uncommitted changes to
  `data/documents.json` or `data/clauses.json` before this document
  was merged (three unrelated files — `app.js`, `index.html`,
  `styles.css` — had pre-existing local modifications, untouched by
  this change).

## Net changes

- New document: Property Service Workers Protection Act: Janitorial
  Employer Registration — Information Sheet
  (`janitorial_employer_registration_info_sheet`), 12 clauses (10
  authority + 2 drafting), in the Hiring category. No new fields (all
  four — `companyName`, `jobTitle`, `applicantName`, `dateSigned` —
  reused from the existing corpus).
- Corpus: 4,800 → 4,812 clauses; 595 → 596 documents. Hiring category:
  74 → 75 documents, reaching parity with the corpus's other
  categories (75-76 each).

## Wave 144 summary

Sole item of wave 144, Hiring category, closing the wave.
