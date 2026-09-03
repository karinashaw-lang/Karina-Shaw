# Estate Planning, new document: Family Allowance — Information Sheet

## Why this document

Confirmed by grep that "family allowance" had zero hits anywhere in the
corpus. Distinct from the existing Small Estate Affidavit, Petition for
Probate, and Community Property Agreement documents — none address the
support-allowance mechanism.

## What this document covers

8 clauses: 2 drafting (petitioner declaration, signature/acknowledgment)
and 6 authority clauses, citing Cal. Prob. Code §§ 6540-6545 and § 11420:

- **`familyallow_eligible_persons_and_standard`** (§ 6540(a)-(c)) — who
  is entitled (spouse, minor children, incapacitated dependent adult
  children) versus who the court may discretionarily include (other
  dependent adult children, a dependent parent), and the
  maintenance-according-to-circumstances standard.
- **`familyallow_petition_ex_parte_and_notice`** (§ 6541(a)-(c)) — any
  interested person may petition; the ex parte option before the
  inventory is filed; notice requirements otherwise.
- **`familyallow_commencement_and_retroactivity`** (§ 6542) —
  commencement date is at the court's discretion but cannot predate the
  decedent's death.
- **`familyallow_duration_and_termination`** (§ 6543(a)-(b)) —
  terminates no later than final distribution, or one year after letters
  if the estate is insolvent.
- **`familyallow_costs_paid_by_estate`** (§ 6544) — proceeding costs are
  an administration expense.
- **`familyallow_priority_among_estate_debts`** (§ 11420(a)-(b)) — family
  allowance is priority class 5 of 7: below administration expenses,
  secured obligations, funeral expenses, and expenses of last illness;
  above wage claims and general debts.

## Genuine corrections and findings

- Confirmed the correct statutory range (Prob. Code Chapter 4, "Family
  Allowance," §§ 6540-6545) directly from the fetched page's own
  division/part/chapter header.
- **A genuine cross-chapter research finding**: the "priority relative to
  other estate claims/debts" question isn't addressed within Chapter 4
  itself — it required locating and independently verifying the separate
  Part 9 debt-priority statute, § 11420, which explicitly lists "Family
  allowance" as class (5) of 7.
- Confirmed the ex parte petition option is available only before the
  inventory is filed and only for the § 6540(a)-entitled categories (not
  the § 6540(b)-discretionary ones), which require § 1220 notice
  regardless of timing.
- Confirmed the one fixed limit on retroactivity: a family allowance may
  not be made retroactive to a date earlier than the decedent's date of
  death, though the court otherwise has discretion over the commencement
  date.
- Confirmed a family allowance terminates no later than final
  distribution, or, for an insolvent estate, no later than one year after
  letters are granted — an outer limit distinct from the court's
  otherwise-discretionary termination authority.

## Honest gap disclosed

The statute states a general "maintenance according to circumstances"
standard but does not itemize specific dollar-amount factors beyond that.
§ 6545 (appeal-bond mechanics) was fetched and verified but deliberately
omitted as outside the requested scope. The statutory definition of
estate insolvency and the point at which letters are considered granted
(both referenced by § 6543(a)'s one-year limit) were not independently
verified.

## Method

Fetched Cal. Prob. Code §§ 6540, 6541, 6542, 6543, 6544, 6545, and 11420
directly from `leginfo.legislature.ca.gov`, each via two independent curl
requests using distinct User-Agent strings — confirmed byte-identical
after whitespace normalization across all seven sections. All 9 citation
quotes programmatically confirmed as exact substrings of the confirmed
text.

## Verification

- All seven sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory
  section versus the genuinely separate cross-chapter citation to
  § 11420; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`petitionerName`, `decedentName`, `relationshipToDecedent`,
  `dateOfDeath`, `countyOfFiling`, `dateSigned`, `cityOfExecution`)
  independently confirmed to match existing corpus convention. New
  field: `requestedAllowanceAmount`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Family Allowance — Information Sheet
  (`family_allowance_info_sheet`), 8 clauses (6 authority + 2 drafting),
  in the Estate Planning category. New field: `requestedAllowanceAmount`.
- Corpus: 1,971 → 1,979 clauses; 252 → 253 documents. Second document of
  wave 51.
