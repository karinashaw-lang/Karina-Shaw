# DRAFT — AI legal document engine

Read this before doing anything. It exists so a new session does not have to re-derive
three days of findings.

## What this is

A single-file prototype (`draft-ai-engine.html`, compiled) over a clause corpus in
`templates/`. 363 clauses across 28 documents: NDA, incorporation, governance, employment,
commercial, property, money, partnership, invoice, business plan. The engine picks clauses
by jurisdiction, entity type, industry and headcount and assembles documents.

## The one thing to know

**The corpus that ships today is not the corpus the finding below is about.** On 2026-08-19
this branch deliberately narrowed the corpus to generic, jurisdiction-neutral templates and
parked every California-specific clause in `templates/parked-california/` (see its README and
`verification/MVP-GAP.md`). Nothing was deleted — `corpus.mjs` reads `templates/clauses/*.json`
with `readdirSync`, so a directory is just invisible to the build — but the five clauses named
below, and 32 of the 33 other clauses ever found defective, **are not in `templates/clauses/`
anymore.** A session that reads this file and starts "fixing" `hb_meal_rest` or `nda_nonsolicit`
is fixing content nobody ships; they are in the parked folder, not the live one.

The finding stays in this file because it is *why* the narrowing happened and it is the pattern
to watch for anywhere in this corpus, parked or not:

34 clauses were checked against primary sources before the narrowing. **33 were defective.**
95% lower bound on the defect rate is 87%. The failure was the same every time, and it matters
more than the count:

> The clause reproduces statutory language accurately and drops the case law that says
> what the language means.

Examples, all confirmed against court opinions quoting the source — all five now sit in
`templates/parked-california/`, not the shipped corpus:

- `hb_meal_rest`, `emp_meal` — "a missed meal period entitles the employee to one
  additional hour of pay". That is the *ensure* standard the California Supreme Court
  rejected in *Brinker*. The duty is to **relieve** the employee of duty; a break that was
  provided and worked through owes nothing. The error tells a small employer it owes money
  it does not owe.
- `ea_ca_925` — "any employee who primarily **works** in California". The statute reads
  "primarily **resides and** works". Covers people it does not cover.
- `ic_ca_abc` — prong C reads "an independently established trade of the same nature".
  The test is "trade, **occupation, or business** of the same nature **as that involved in
  the work performed**". A comparison with no second term.
- `nda_nonsolicit` — states as a categorical rule what *AMN* held on its facts.

This is what content written from memory looks like. It was written from memory — by an
earlier session of this assistant, before source access was attempted. The lesson outlives
the parked clauses: nothing in this corpus gets to claim a legal fact without a real check.

### What actually ships now

363 clauses across 28 documents — 245 across 17 right after the narrowing, plus 11
jurisdiction-neutral documents added since (property, money, partnership, two short-form
agreements, a proposal, an invoice, a business plan). **57 of the 363 currently assert law**
(`assertsLaw: true` — itself still `heuristic-unreviewed`; see Open items). Two have been
checked against a real source: `b83_instructions`, rebuilt 2026-08-19 from eCFR,
uscode.house.gov and two CourtListener opinions (`multi-cited`), and `ipa_wfh`, checked
2026-08-20 against two CourtListener opinions alone since every statutory host was blocked
that day — its central claim (that a founder's work is automatically work made for hire) was
found **contradicted** by Reid v. CCNV's actual holding, recorded honestly rather than
smoothed over; see `verification/findings/ipa_wfh.json`. The other 55 have never been checked
— `npm run queue` orders them by consequence. None of the five clauses named above are among
them; they are gone from the live set. Findings for clauses that are gone live in
`verification/findings-parked-california/`, not `verification/findings/` — `findings.mjs`
refuses to run at all if any file in the live directory names a clause outside the corpus.

## The strategy, decided

**Do not repair the authority clauses one at a time.** Rebuild them from the statutory
text. Read the section, write the clause from what it says, cite it. `b83_instructions` is
what that looks like done — the only clause in the live corpus this has happened to (`ipa_wfh`
is a partial case: real evidence, but case law alone, and its claim did not hold up). 55 more
remain unchecked. Rebuilding is cheaper than investigating clause-by-clause, and it removes the
from-memory contamination instead of patching around it.

The 306 drafting clauses are a different problem — they assert no law, so there is nothing
to verify. They need a named lawyer, and `npm run packet` produces what that person works
from.

## The standard

Two ladders, blind to each other by design (`templates/tools/review.mjs`):

- **Authority** (asserts law) → gate `primary-verified`. Needs two *distinct* primary
  hosts, at least one `publisher` tier, plus `readBy` and a check date.
- **Drafting** (asserts no law) → gate `counsel-reviewed`. Needs a named human. The
  validator refuses a reviewer that is a team, a tool, or a model. Citations do nothing here.

Tier test, in `templates/tools/sources.mjs`: *if this host and every other host disagreed,
whose version would be the law?* For California statutes that is only
`leginfo.legislature.ca.gov`. CourtListener is `mirror` — a court quoting a statute is
strong corroboration, never publisher tier.

Perfection is not the target and is not achievable in this domain. The target is: accurate
as of a date, traceable to the source, signed by a licensed person, re-checked on a
schedule.

## First actions in a new session

```
npm run probe            # is egress open? re-measure every session, do not trust a stale note here
npm run probe:reference  # same, for the practice-corroboration hosts (Common Paper, YC, SBA, CFPB)
npm test                 # 25 suites
npm run check            # validator + build sync
npm run preview          # what applying the classification would change
```

Egress opened briefly on 2026-08-20 (`leginfo.legislature.ca.gov` and 11 other
primary/reference hosts were reachable) but has since closed again: re-probed later the same
day and all 21 registry hosts plus all 4 reference hosts returned `http-403`/`EGRESS_BLOCKED`
— confirmed two independent ways, `npm run probe` and a direct `WebFetch` on leginfo, same
result. `verification/EGRESS.md` explains why this happens — "running sessions keep the
network they started with," so a session started before (or after) the environment's Network
access setting last changed will not see the current setting. **Re-run `npm run probe` every
session; never trust this note.** While the block from 2026-08-20 still held, a real bug was
found and fixed in `verify.mjs`'s `decideLevel` — it checked for `hostKind==='primary'`, a
value that can never occur, which made `primary-verified` structurally unreachable regardless
of evidence; a second bug (`gatherCitationEvidence` now tries every configured host for a
citation, not just the first that succeeds) was fixed the same day for the same reason. Those
two fixes are real and stay fixed regardless of network state. `npm run verify` (dry run) has
been run once since both fixes, while egress was briefly open: 9 clauses carry a raw citation,
11 real fetches, 0 upgrades — most of those 9 have only one citation on file, so even with
every host reachable and tried, they cannot reach `corroborated` (needs 2 distinct hosts)
until a second, genuinely independent citation is added. See `verification/last-run.json` for
that evidence trail and recent git log for the two fixes.

One thing that works regardless of the egress proxy: the **CourtListener MCP connector**
(tool prefix `mcp__be259e10-16f3-4af6-9e7d-79e4791a0626__`) bypasses it entirely — MCP
connectors are not routed through the proxy the way `fetch`/`WebFetch` are, and this project
already has that connector attached. It returns real case law (confirmed live — a search for
*Brinker Restaurant Corp. v. Superior Court* returned the actual 2012 opinion). Per
`sources.mjs`, CourtListener is `mirror` tier, never `publisher`: useful for the case-law half
of the corpus's core defect pattern (statutory text reproduced accurately, controlling case
law dropped), and for `corroborated`, but not sufficient alone for `primary-verified` — that
still needs `leginfo.legislature.ca.gov` itself, which remains blocked. If `probe` reports
refusals, see `verification/EGRESS.md` for how to open it (Fix 1, environment Network access
setting) or add a statute-serving MCP connector (Fix 2, candidates listed there). Nothing
gets fabricated around a block; report it.

## Open items

1. **Classification proposals now cover all 363 clauses and are ready to apply, pending
   review.** `verification/classification/proposals.json` was extended 2026-08-20 for the 11
   documents added since the narrowing and the shared `sh_*` blocks, and 38 dead exception
   references to clauses parked in the narrowing (in `msa`, `governance`, `charter`,
   `ip-assignment`, `employment-agreement`, `dpa`, `contractor-agreement`, `sow`, `nda`) were
   removed — `npm run proposals` now reports "proposals cover every clause, and every named
   exception exists," zero problems, up from 38. 363 clauses: 45 authority, 318 drafting.
   `verification/classification/proposed-decisions.csv` was regenerated from it. Applying is:
   `npm run classify -- --apply verification/classification/proposed-decisions.csv --by "<name>" --on <date>`
   — the user (Karina Shaw) approved the underlying proposals, but this specific extended
   version has not yet been reviewed by her, and the command is separately blocked by the
   permission classifier, not by the repo. One known gap in the proposals' own reasoning,
   not the mechanics: ea_ip's deferral entry points to `ipa_state_carveout` for its statutory
   content, and that clause is parked, so the content isn't actually anywhere in the shipped
   corpus — flagged in the proposals commit, not fixed.
2. **55 of the 57 currently-shipped authority clauses have never been checked** (only
   `b83_instructions` and `ipa_wfh` have). `npm run queue` orders them by consequence.
   `ipa_wfh`'s check (2026-08-20) used the CourtListener MCP connector, which works
   regardless of the egress proxy — real case law, no statute text, real citations
   contradicted the clause's central claim rather than confirming it. Same tool, same
   method, is available for any of the other 55 right now.
3. **1 validator warning**: `LAW_TALK_IN_DRAFTING` on `sh_return_property` — a clause
   classified as drafting whose body talks like it's citing a legal requirement. The old
   "citations that name a body of law but no provision" problem this item used to describe
   is gone from the current corpus (checked directly: 0 such citations remain).

## Hard rules, carried from the user

- Nothing from memory. Get the source text.
- Everything checked against the law, or it is not used.
- Never fabricate a human signoff. A test `--apply` with an invented reviewer was written
  once and deliberately reverted.
- Do not use GitHub, npm or package mirrors as legal-content sources.
- Do not retry organization egress denials (403/407) — report them.

## Commands

`test` `validate` `build` `check` `probe` `verify` `queue` `packet` `classify` `proposals`
`preview` `egress` `texts` `pins` `lint` `holdout` `propagation` `sources` `cost`
`provenance` `inspect` `plan` `findings` `ingest` `audit`
