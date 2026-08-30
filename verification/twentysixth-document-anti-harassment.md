# Twenty-sixth document — Anti-Harassment & Non-Discrimination Policy

## Why this one

The Employee Handbook has covered at-will status, timekeeping, work authorization,
accommodation, and monitoring since Phase 2, but never harassment or discrimination —
one of the most consequential gaps in the whole corpus, and one of the highest-value,
most commonly under-drafted policies in real HR practice. This document is also a
genuine test of "informing, not advising" at its hardest: an anti-harassment policy is
exactly the kind of document a non-lawyer might expect legal advice inside, and every
clause here had to state the law and its real consequence without crossing into
telling a specific reader what to do about a specific situation.

## Research

Fetched 42 U.S.C. §§2000e, 2000e-2, and 2000e-3 (Title VII's employer definition,
core prohibition, and anti-retaliation provision) fresh from Cornell LII. Confirmed via
CourtListener: *Faragher v. City of Boca Raton*, 524 U.S. 775 (1998) — the landmark
case establishing the employer affirmative defense to certain harassment claims — and
*Burlington Northern & Santa Fe Railway Co. v. White*, 548 U.S. 53 (2006) — the case
defining how broad Title VII's retaliation protection actually is.

## The five clauses

- `harassment_prohibition` (authority) — the core Title VII prohibition, citing
  §2000e-2(a)(1) and the 15-employee coverage threshold from §2000e(b). Gap discloses
  that other protected characteristics (age, disability, genetic information,
  pregnancy) come from separate statutes this citation doesn't reach.
- `harassment_reporting` (drafting) — how to report, a company procedure with no
  independent legal claim to source.
- `harassment_employer_response` (authority) — the real reason this policy exists
  under the law: the *Faragher* affirmative defense, citing both its two-element test
  and its own qualifier about the antiharassment policy itself. Gap discloses the
  defense's hard limit (unavailable once harassment culminates in a tangible
  employment action) and that having a written policy is neither automatically
  sufficient nor strictly required as a matter of law.
- `harassment_no_retaliation` (authority) — citing §2000e-3(a) and *Burlington
  Northern*'s "materially adverse" standard. Gap discloses that retaliation liability
  reaches further than classic adverse employment actions — a broader standard than
  discrimination liability itself, which the statute's text doesn't spell out but the
  Supreme Court has.
- `harassment_ack` (drafting) — signature.

## Two real defects caught before shipping

1. **A clause title used `{{companyName}}` placeholder syntax** ("How
   `{{companyName}}` Responds"). This is a new instance of a previously-caught bug
   *class* (unsubstituted `{{placeholder}}` text), but a genuinely new *location* —
   every prior instance was in gap text; this was the first time a title carried a
   placeholder. Checked `app.js` directly and confirmed `clause.title` renders via
   `h3.textContent = clause.title` with no substitution pass at all, exactly like gap
   text. Caught by reading the render code before shipping, not after — fixed to plain
   text ("How the Company Responds") before the regression run.
2. **`{{companyName}}` also leaked into `harassment_employer_response`'s gap text**
   itself, the same recurring class caught multiple times before in this project.
   Caught by the standing practice of grepping every new clause's `gap` and `title`
   fields for `{{` before running the regression, rather than relying on the
   regression script alone.

Both fixed; a full corpus-wide scan confirmed no other clause (old or new) has a
placeholder in its title, and the five new clauses are clean in both `gap` and
`title`.

## Verification

- Every statutory quote (§2000e-2(a)(1), §2000e(b), §2000e-3(a)) re-verified against a
  second, independent fresh fetch — programmatic substring match.
- All four case quotes (two from *Faragher*, one each from the core holding and the
  policy-specific qualifier; one from *Burlington Northern*) re-verified independently
  via a second `search_document` call against the opinion text, word for word.
- Headless Playwright walkthrough of all 26 documents: zero console errors, zero
  leftover placeholders anywhere in the corpus — including clause titles, which this
  session's regression script now effectively covers since titles render inside the
  same `#output-clauses` block the script scans.
- Screenshot of the assembled document confirms all three badges expand correctly with
  their full citation sets, and the title fix renders as intended.

## Net changes

- `data/clauses.json`: +5 clauses (`harassment_prohibition`, `harassment_reporting`,
  `harassment_employer_response`, `harassment_no_retaliation`, `harassment_ack`),
  corpus now 83 clauses.
- `data/documents.json`: +1 document (`anti_harassment_policy`), corpus now 26
  documents.
