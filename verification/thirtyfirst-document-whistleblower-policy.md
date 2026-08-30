# Thirty-first document — Whistleblower Policy

## Why this one

Named as a remaining gap when the corpus reached 29 documents: nothing in the corpus
stated the federal anti-retaliation protections for reports of securities fraud or
related misconduct, and this is one of the most consequential compliance areas for a
company to get wrong or leave silent.

## Research

Fetched 18 U.S.C. § 1514A (the Sarbanes-Oxley whistleblower protection, added by
§ 806 of the 2002 Act) and 15 U.S.C. § 78u-6 (the Dodd-Frank whistleblower provision,
including its own narrower anti-retaliation right at subsection (h)) fresh from
Cornell LII. Also fetched *Digital Realty Trust, Inc. v. Somers*, 583 U.S. 149 (2018)
from CourtListener — the Supreme Court case establishing that Dodd-Frank's
anti-retaliation right, unlike Sarbanes-Oxley's, requires an actual report to the SEC
itself, not just an internal report.

This case matters for accuracy, not just completeness: Sarbanes-Oxley and Dodd-Frank
are frequently treated as interchangeable "whistleblower protection," but they cover
different populations and offer different remedies. Stating one without distinguishing
the other would misstate real, litigated scope questions.

## The seven clauses

- `whistleblower_coverage` (authority) — who's covered under Sarbanes-Oxley: public
  companies (registered securities or required Exchange Act § 15(d) filers),
  subsidiaries/affiliates in consolidated financials, NRSROs, and their officers,
  employees, contractors, subcontractors, and agents. Citing § 1514A(a). Gap discloses
  plainly that this is federal law for public companies and their contractor/agent
  relationships — a privately held company with no public-company ties isn't covered
  by this specific statute, though many states have their own private-sector
  whistleblower laws not stated here.
- `whistleblower_protected_activity` (authority) — what's protected: providing
  information or assisting an investigation about conduct reasonably believed to
  violate specified fraud statutes, SEC rules, or federal shareholder-fraud law, when
  reported to a federal agency, Congress, or an internal supervisor with authority to
  address it. Citing § 1514A(a)(1), (a)(1)(C), and (a)(2). Gap makes explicit that the
  standard is a reasonable, good-faith belief — the report doesn't have to be proven
  correct — and that internal reports to a supervisor are protected exactly like
  reports to an outside regulator.
- `whistleblower_dodd_frank_scope` (authority) — the separate, narrower Dodd-Frank
  anti-retaliation right, which only protects someone who has actually reported to the
  SEC. Citing § 78u-6(a)(6)'s whistleblower definition and the *Digital Realty Trust
  v. Somers* holding verbatim from the slip opinion's syllabus. Gap states plainly
  that an employee protected only under Sarbanes-Oxley (internal report, never to the
  SEC) may still not be covered by this separate Dodd-Frank right.
- `whistleblower_no_waiver` (authority) — Sarbanes-Oxley rights can't be waived by
  agreement, policy, or condition of employment, including a predispute arbitration
  agreement; a predispute arbitration agreement isn't enforceable as to a claim under
  this statute. Citing § 1514A(e)(1)-(2). Gap distinguishes this from the existing
  `arb_agency_rights` clause in the Employment Arbitration Agreement document (which
  covers a government agency's own independent enforcement authority) — this is a
  stronger, more specific rule that exempts the employee's own personal claim under
  this statute from arbitration, not just an agency's separate authority to act.
- `whistleblower_remedies` (authority) — reinstatement, back pay with interest, and
  special damages (litigation costs, expert witness fees, attorney fees) under
  Sarbanes-Oxley; doubled back pay under the separate Dodd-Frank right. Citing
  § 1514A(c)(2) (two fragments) and § 78u-6(h)(1)(C)(ii). Gap flags that the doubled
  back pay is Dodd-Frank-specific — someone protected only under Sarbanes-Oxley gets
  ordinary, not doubled, back pay.
- `whistleblower_reporting_channel` (drafting) — the company's internal reporting
  channel and a policy-level no-retaliation statement.
- `whistleblower_ack` (drafting) — signature.

## Cross-document consistency check

Checked the existing `arb_agency_rights` clause (in the Employment Arbitration
Agreement document, tenth document) for whether it already made a claim this new
document would contradict. It covers general agency enforcement independence (EEOC
example), not the specific Sarbanes-Oxley non-waivability/arbitration-ban rule — the
two clauses are complementary, not overlapping, and `whistleblower_no_waiver`'s gap
text says so explicitly rather than leaving the relationship unstated.

## Verification

- All ten quote fragments (five from § 1514A across three clauses, two from § 78u-6,
  one Supreme Court syllabus quote, two more from § 1514A(c) and § 78u-6(h)) checked
  against the raw fetched HTML directly rather than my own cleaned text file, after
  finding that my HTML-to-text extraction script inserts spurious spaces at inline-tag
  boundaries (e.g. rendering "78l" as "78 l" because of an `<em>` tag wrapping just the
  trailing letter). Confirmed with `grep`/Python against the raw HTML that "78l",
  "78o(d)", and "Securities and Exchange Commission," (no space before the comma) are
  the real source text, and built every quote from spans that don't cross a tag
  boundary, rather than risk reproducing an extraction artifact as if it were the
  statute's actual text.
- The *Digital Realty Trust v. Somers* quote was pulled from the official slip-opinion
  syllabus text via CourtListener's `read_document`, not retyped from memory of the
  holding.
- Every `gap` and `title` field grepped for `{{` before the regression run — clean.
- Headless Playwright walkthrough: badge count matches (5), zero leftover
  placeholders, zero console errors. Screenshot confirms all five badges expand with
  their full citation sets and gap text.

## Net changes

- `data/clauses.json`: +7 clauses (`whistleblower_coverage`,
  `whistleblower_protected_activity`, `whistleblower_dodd_frank_scope`,
  `whistleblower_no_waiver`, `whistleblower_remedies`,
  `whistleblower_reporting_channel`, `whistleblower_ack`), corpus now 108 clauses.
- `data/documents.json`: +1 document (`whistleblower_policy`), corpus now 31
  documents.
