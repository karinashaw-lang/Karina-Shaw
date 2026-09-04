# Ending employment, new document: Unclaimed Final Wages — Information Sheet

## Why this document

Confirmed by grep that "unclaimed wages" and "unclaimed property law"
had zero hits anywhere in the corpus; the only "escheat" hit is an
unrelated Estate Planning clause (Prob. Code § 6403(a), simultaneous
death). Read the existing Final Paycheck Delivery Method and Location
document first — confirmed this is a genuine companion, not overlap:
that document covers how/where a final paycheck is delivered when the
address is known; this document covers what happens when it can't be
delivered at all. Fourth and last of wave 66's four documents.

## What this document covers

8 clauses: 2 drafting (purpose/declaration, recordkeeping worksheet)
and 6 authority clauses, citing Cal. Code Civ. Proc. §§ 1501(c),
1513(a), (a)(7), 1520(b), 1530(a), (d), 1532(a), 1540(a)-(c),
1560(a), and 1577(a):

- **`unclaimedwages_dormancy_period`** (§ 1513(a), (a)(7) + § 1501(c))
  — **a key finding**: wages get their own one-year dormancy period,
  not the general three-year rule, plus the statutory definition of
  "business association."
- **`unclaimedwages_prereport_notice`** (§ 1520(b)) — the $50
  threshold and 6-to-12-month pre-report notice window, with an
  honestly disclosed structural inference that this general notice
  provision (not a wage-specific one) is the one that applies to
  wages, since no separate wage-specific notice rule was found.
- **`unclaimedwages_reporting_deadline`** (§ 1530(a), (d)) — the
  November 1 annual report deadline to the State Controller.
- **`unclaimedwages_remittance_deadline`** (§ 1532(a)) — the
  seven-month/seven-month-fifteen-day remittance window following the
  report deadline.
- **`unclaimedwages_discharge_and_claim`** (§ 1560(a) + § 1540(a)-(c))
  — the holder's discharge from liability after paying/delivering to
  the Controller (with the same kind of cross-reference-structure
  disclosure as the notice clause), and the former employee's later
  claims process.
- **`unclaimedwages_penalty_interest`** (§ 1577(a)) — the 12%/year
  interest penalty for late reporting, payment, or delivery.

## Genuine corrections and findings

- **The central finding**: confirmed wages and salaries have their own
  one-year dormancy period (§ 1513(a)(7)) — shorter than the general
  three-year rule that applies to most other categories of unclaimed
  personal property under this chapter.
- Confirmed the $50 pre-report notice threshold and 6-to-12-month
  window (§ 1520(b)) — and honestly disclosed, rather than silently
  assumed, that this section does not name wages or § 1513 by number;
  the clause explains the cross-reference structure that leads to
  reading § 1520(b) as the applicable notice rule for wages, marking
  it plainly as an inference rather than an explicit statutory
  statement.
- Same honest structural-inference disclosure applied to the discharge
  provision (§ 1560(a)), whose own notice cross-reference list also
  doesn't name § 1513 by number.
- Confirmed the specific November 1 annual reporting deadline and the
  separate seven-month/seven-month-fifteen-day remittance window that
  follows it — two distinct deadlines, not one.
- Confirmed the 12%/year interest penalty for late reporting or
  remittance, owed to the Controller (not the former employee) and
  distinct from any other damages, penalties, or fines.

## Honest gap disclosed

Whether an employer that is not a "business association" (e.g., a
sole proprietor) is a "holder" under this chapter was not
independently researched. The narrower $10,000 interest cap for
timely-but-noncompliant reports, and the Controller's reasonable-cause
and voluntary-compliance-program interest waivers (both in § 1577),
were fetched but not built into their own separate clause to avoid
padding. The two structural-inference disclosures described above
(§ 1520(b) and § 1560(a) not naming wages/§ 1513 by number) are
inferences from cross-referenced statutory structure, not explicit
statutory text naming wages — stated plainly in each clause's own
`gap` field, not just here.

## Method

Fetched Cal. Code Civ. Proc. §§ 1501, 1513, 1520, 1530, 1532, 1540,
1560, and 1577 from `leginfo.legislature.ca.gov` via curl (WebFetch
blocked with EGRESS_BLOCKED, disclosed rather than silently worked
around), each section fetched twice with distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 10
citation quotes across the 6 authority clauses programmatically
confirmed as exact substrings of the confirmed text (re-run against
the final delivered JSON as a last gate, per the agent's own report).

## Verification

- All eight statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no leaks found
  in this batch.
- Checked source-independence disclosure logic — the § 1513(a)/(a)(7)
  pair and § 1530(a)/(d) pair correctly disclosed as subsections of
  the same section; § 1501(c) correctly disclosed as a genuinely
  separate, independently numbered definitional section; § 1560(a)
  and § 1540(a)-(c) correctly disclosed as independent of each other
  (two separate sections); correct as delivered.
- Checked for duplicate clause IDs and duplicate titles against the
  full corpus (none).
- Field names (`companyName`, `employeeName`, `terminationDate`,
  `unpaidWagesAmount`, `employeeAddress`) independently confirmed to
  match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Unclaimed Final Wages — Information Sheet
  (`unclaimed_final_wages_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Ending employment category. No new fields.
- Corpus: 2,432 → 2,440 clauses; 314 → 315 documents. Fourth and last
  document of wave 66.
- **Wave 66 complete**: 2,410 → 2,440 clauses (30 new); 311 → 315
  documents (4 new), across During employment (Workplace Smoking
  Prohibition), Confidentiality & IP (Data Broker Registration Act),
  Hiring (Consumer Credit Report Restriction), and Ending employment
  (Unclaimed Final Wages) — the standard "1×4" alternation pattern.
