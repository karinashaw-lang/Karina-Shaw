# Employment, tenth document: Meal and Rest Break Policy

## Why this document

Continuing the "go as deep as humanely possible" build-out. California has
some of the most detailed and heavily litigated meal-and-rest-break law in
the country — a genuinely dense area distinct from anything else already in
the Employment category. Sourced from California Labor Code §§ 512, 226.7,
204, IWC Wage Order No. 4-2001, and *Brinker Restaurant Corp. v. Superior
Court*, 53 Cal.4th 1004 (2012).

## What this document covers

9 clauses: 3 drafting (policy statement, employee acknowledgment, and
signature/receipt) and 6 authority clauses:

- **`meal_period_requirement`** (§ 512(a)) — the core 5-hour/30-minute
  first meal period rule and its waiver condition, plus the second meal
  period rule for shifts over 10 hours.
- **`rest_period_requirement`** (IWC Wage Order No. 4-2001, § 12(A)) —
  the 10-minutes-per-4-hours rest period formula, which is a regulation,
  not a Labor Code statute.
- **`meal_rest_premium_pay`** (§ 226.7(b)-(c)) — the one-additional-hour
  premium-pay remedy for a missed meal or rest period, with an honest
  disclosure that the "two premiums per day" reading is a widely applied
  practitioner interpretation, not itself quoted statutory text.
- **`brinker_provide_not_ensure`** (53 Cal.4th 1004, 1040) — the
  California Supreme Court's "provide, not ensure" standard for what an
  employer's meal-period obligation actually requires.
- **`brinker_meal_timing`** (53 Cal.4th 1004, 1041) — the timing rule:
  first meal period by the end of the 5th hour, second by the end of the
  10th hour, absent waiver.
- **`on_duty_meal_period`** (IWC Wage Order No. 4-2001, § 11(A); 53
  Cal.4th 1004, 1039-1040) — the narrow on-duty meal period exception
  and its written, revocable-agreement requirement.

## Method

Fetched Labor Code §§ 512, 226.7, and 204 directly from
`leginfo.legislature.ca.gov`, and IWC Wage Order No. 4-2001 directly from
`dir.ca.gov`, each verified against a second, independent fetch with a
distinct User-Agent. *Brinker* verified via two independent CourtListener
lookup paths.

An apparent typographical artifact in the *Brinker* opinion's own reported
text ("relinquishes, control") was preserved verbatim rather than silently
corrected, consistent with this project's practice of quoting exactly.

## Defect caught and fixed: PDF text-extraction artifact

The research agent's automated PDF text extraction of the Wage Order
rendered "the rate of ten (10) minutes" as "the rate often (10) minutes" —
a missing-space artifact. Rather than trust this uncorrected, the main
session independently re-fetched the same PDF and extracted the raw text
directly, confirming the underlying PDF's own text layer genuinely
contains this spacing glitch (not something introduced during research).
Consistent with this project's established practice of correcting
HTML/PDF extraction artifacts (collapsing bad spacing) while preserving
substance, the quote used is "at the rate of ten (10) minutes" — the
grammatically correct reading, confirmed by visual/contextual
reconstruction of the same PDF's actual printed content.

## Defect caught and fixed: vague body fields

The research agent's initial draft wrote `body` fields as vague
meta-commentary ("This information is provided to help {{companyName}}
understand...") rather than stating the actual substantive legal rule
directly, unlike the established corpus convention where `body` states
the rule itself. All six authority clause bodies were rewritten during
integration to state the actual California law directly, matching the
style of every other authority clause in the corpus.

## Verification

- All statutory and regulatory sources fetched directly, then
  re-verified on a second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic — correct throughout
  (the on-duty-meal-period clause correctly has no disclosure sentence,
  since its two citations are genuinely independent: a regulation and a
  case).
- Checked for duplicate clause IDs and titles against the full corpus
  (none, aside from the pre-existing generic drafting-title pattern).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Meal and Rest Break Policy (`meal_rest_break_policy`),
  9 clauses (6 authority + 3 drafting), in the During-employment
  category.
- Corpus: 400 → 409 clauses; 57 → 58 documents.
