# filing/

Phase 6.4's "what happens after this document" packets — a structured
section on the output screen, and in every prose export, describing a
real filing or follow-on step a document creates, sourced from an
official agency page or statute with a citation and checked-date like
any clause. Separate from `data/clauses.json` because a next step is a
fact about what happens *after* the document, not part of the
document's own body.

## Scope: a small, real pilot — not category-wide coverage

The master plan's full 6.4 asks for this across every Business
Formation, Estate Planning, Family Law, and Real Estate document with
a real filing or follow-on step (potentially several dozen documents),
plus a separate, heavier sub-requirement: pre-filled official
government forms, with each mapped field covered by a test. Both are
genuinely large undertakings — the first needs real, individually
verified sourcing per document; the second needs a public form and a
verified field mapping before a single line of code is written.

Given that, this phase shipped the real mechanism — the data shape,
`validate_corpus.py` checks, the rendering in every export, and the
`.ics` reminder/export pipeline — proven against **one real, fully
verified pilot document** (`llc_articles_of_organization`) rather than
guessed or partial content across many. Official pre-filled forms were
not attempted at all this pass. Extending `next_steps.json` to more
documents is real future work, following the same pattern: find the
document's real next step, verify its source the way every clause in
this corpus already is, write the entry, run `validate_corpus.py`.

## next_steps.json

Keyed by document id. **Sparse by design** — unlike `search/lay_terms.json`
(every document needs an entry), only a document that actually has a
real filing or follow-on step gets one; `validate_corpus.py` has no
"every document must have an entry" check for this file, only "every
entry that exists is real": a known document id, a non-empty citation
list per step (case/cite/url/quote all required, same shape as a
clause's own citations), a real non-future `checkedDate`, and the
advisory-phrase lint (Phase 2.2b) extended to `title`/`body`.

Each step is:
```json
{
  "id": "...",
  "title": "...",
  "body": "...",
  "checkedDate": "YYYY-MM-DD",
  "citations": [{"case": "...", "cite": "...", "url": "...", "quote": "..."}],
  "reminder": {"dateFieldId": "...", "offsetDays": 90, "label": "..."}
}
```
`reminder` is optional — only a step whose due date is unambiguously
computable from one date the document already collects gets one (see
below for why the LLC's $800 annual tax deliberately doesn't).
`validate_corpus.py` checks `dateFieldId` names a real, `type: "date"`
field on that document — not a typo that the pre-existing "declares
fields nothing substitutes or conditions on" check would otherwise
either wrongly flag as dead data or silently accept as a reference to
nothing.

## The pilot: `llc_articles_of_organization`

Both of its two steps reuse citations **already verified elsewhere in
this corpus** (`llc_articles_statement_of_information`/
`llc_articles_annual_tax` in `data/clauses.json`, and
`statement_of_information`'s own clauses) rather than fetching
anything new — the facts were already checked, checkedDate and all;
this phase just surfaced them in a new, purpose-built structure.

1. **File an initial Statement of Information** (Cal. Corp. Code
   § 17702.09(a)) — within 90 days of the articles being filed. This
   step has a `reminder`: a new, optional `articlesFiledDate` field was
   added to the document (date type, not required — a user drafting
   before actually filing has no true date to enter), and the due date
   is computed as exactly 90 days after it.
2. **Pay California's $800 annual LLC tax** (Cal. Rev. & Tax. Code
   § 17941) — informational only, deliberately with no `reminder`. The
   statutory due date (the 15th day of the fourth month of the LLC's
   *taxable year*) depends on the LLC's own elected taxable year, which
   this document doesn't collect — approximating it from the filing
   date alone would be a fabricated precision this project's "state
   facts only" rule doesn't allow. The step's own body says this
   plainly instead of silently omitting the due date with no
   explanation.

## The `.ics` export

`buildIcsForStep()` (`app.js`) builds a minimal, valid RFC 5545
VCALENDAR/VEVENT — an all-day event on the computed due date, with the
rule's own citation folded into the `DESCRIPTION` (the master plan's
"with the rule's citation shown," not just a bare date with no source
attached). Downloaded directly from the "Add to calendar (.ics)"
button next to the one step that has a computable due date; a step
whose date field was left blank, or whose entered value couldn't be
parsed as a date, shows a plain, factual note instead ("wasn't entered
above" / "couldn't be read as a calendar date") rather than guessing
or silently showing nothing.

## Why this needed no new golden-fixture regeneration strategy

Adding a real `next_steps.json` entry for `llc_articles_of_organization`
changed that one document's `buildPlainText()` output, which
`tests/golden/golden.js`'s frozen fixture already covers for all 740
documents — `node tests/golden/golden.js --update` regenerated exactly
that one fixture (confirmed by its own diff output) and nothing else,
the same update path that fixture file is designed for.

Full writeup of the design decisions in `DECISIONS.md`'s Phase 6.4
entry; tests in `tests/filing/next_steps.js` (the feature, end to end,
including both export extraction and the `.ics` file's own content)
and `tests/validate_corpus/test_filing_next_steps.py` (the
`validate_corpus.py` checks, in isolation).
