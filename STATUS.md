# DRAFT — build status

August 20, 2026 · branch `claude/new-session-palh5c`

## What exists

A working prototype: `draft-ai-engine.html`. One self-contained file, no build step, no network.
Open it in a browser and it runs.

**235 clauses across 17 documents**, all jurisdiction-neutral. Formation, commercial and hiring.
Everything is data — clause text, conditions, rules, field provenance and glossary all live in
`templates/` as JSON, and the HTML is compiled from it. Nothing is authored in the page.

## What it does

**Answer a short form, get a document set.** 58 rules decide which documents apply and which
clauses go in each. 79 clauses carry conditions; the rest are unconditional.

**Describe what you need in plain English.** Type "who pays if we get sued" and the library
offers Indemnification. "Stop them poaching my staff" offers Non-Solicitation. Matching is
deterministic and shows which of your words matched, so a suggestion can always be checked.
Nothing is generated — it finds pre-written clauses and offers them.

**You choose what goes in.** 110 of 235 clauses are offered rather than inserted. The line is
whether the clause fires on something you said about your situation; those are your call. The
other 125 are the document skeleton — name, parties, definitions — identical for everyone.

**A shared clause library.** 17 General Provisions blocks written once and usable in any
template: governing law, entire agreement, amendment, notices, severability, waiver, assignment,
force majeure, dispute resolution, limitation of liability, indemnification, both terminations,
return of property, non-solicitation, non-compete, confidentiality. Where a document has its own
version of one — the NDA's confidentiality obligations, the MSA's liability cap — it declares
that and the generic block is withheld, so you never get both.

**Export.** PDF via the browser's print-to-PDF, Word as a downloadable file. Both carry the
disclaimer; neither carries any application chrome. The recommended format is per-template:
contracts default to PDF, narrative documents to Word.

**Template metadata.** Complexity, section and field counts are computed from the corpus so they
cannot go stale. Estimated time, industry tags, related templates, export format and review
cadence are authored. `npm run meta` emits the full record for all 17.

## What protects you

Every generated document carries the required footer, and the homepage carries the banner —
both in the exact wording from the protection guide.

The platform never tells a user what they need. Not "you are missing X", not "your contract is
incomplete", not a confidence score that falls when they decline a suggestion. It shows a count:
"139 sections in these templates, 44 selected". A test fails the build if that language returns.

Clause bodies attribute duties to the law rather than issuing them. "California requires an
employer to register with the EDD", never "Register with the EDD" — the second is the platform
instructing someone.

The library never claims to be complete. A scope note sits above the clause list the whole time
you are choosing, stating what the library holds and that it is not what the law requires of you.

## What is not done

**No clause has been reviewed by a named person.** 235 of them. The release gate for ordinary
contract terms requires a named lawyer and the validator refuses a team, a tool, or a model as
the reviewer. `npm run packet` produces what that person would work from. This is the single
biggest gap and no tooling closes it.

**8 of the spec's 20 templates are missing.** Partnership Agreement, Sales Proposal, Invoice,
Residential Lease, Rental Application, Sublease, Roommate Agreement, Loan Agreement, Promissory
Note, General Contract, Letter of Agreement. Invoice needs calculated fields the engine has no
concept of. The real-estate ones are a body of law nothing here touches.

**No sample preview.** Users cannot see a filled-out example before starting.

## The California corpus, parked

142 clauses are set aside in `templates/parked-*`, not deleted, with notes on restoring them.
That material was California-specific compliance depth — Prop 65, PAGA, meal and rest periods,
local ordinances — removed when the product narrowed to generic national templates.

Worth knowing what it cost: **34 of those clauses were checked against primary sources and 33
were defective.** The failure was the same every time — the clause reproduced statutory language
accurately and dropped the case law saying what the language means. The meal-period clauses
stated the standard the California Supreme Court rejected in *Brinker*, telling a small employer
it owed money it did not owe.

25 of them were then rebuilt from the statutory text on leginfo and carry a real citation and
check date. That is the only verified legal content this project has produced, and it is in the
parked folder.

The generic corpus that ships has none of that problem, for a simple reason: it asserts no law,
so there is nothing it can be wrong about.

## Health

- 598 assertions across 20 test suites, all passing
- Validator: 0 errors, 1 warning
- Prototype verified in a real browser: search, add a clause, export PDF and Word
- 63 commits, tree clean

## Commands

```
npm test        20 suites
npm run check   validator + build sync
npm run meta    template metadata
npm run packet  the review packet for a lawyer
npm run build   recompile the prototype from templates/
```
