# DRAFT template corpus

The template layer for the AI Template & Content Engine spec. Every clause, tag,
condition, rule, field, wizard question, and glossary entry the engine uses lives
here as JSON. Nothing is authored inside `draft-ai-engine.html` — that file is
compiled output.

360 clauses across 18 document schemas in three packages:

| Package | Documents |
|---|---|
| **Form a company** | charter filing · governing document (Operating Agreement or Bylaws) · founder IP assignment · vesting agreement · 83(b) election · initial consent · employment policy set · foreign qualification · compliance calendar · schedules and exhibits |
| **Sell or buy services** | mutual NDA · master services agreement · statement of work · data processing addendum |
| **Hire someone** | employment agreement · independent contractor agreement · employee handbook · California employer compliance set (notices at hire · local ordinances · postings · written policies · registration and insurance · enforcement exposure) |

### California

California is built out well past the other jurisdictions, because it is where the
obligations are densest and where they attach earliest. 98 clauses and 21 of the 31
risk definitions are California-specific — the deepest California package produces 91
clauses across three documents.

Most California duties key off headcount rather than revenue, so the corpus models
that directly. The `headcount` answer drives a band, and each band declares what it
turns on:

| Band | What attaches |
|---|---|
| 1–4 | workers' comp, IIPP, wage statements, paid sick leave, daily overtime |
| 5–9 | FEHA, CFRA, pregnancy disability leave, harassment training, Fair Chance Act, bereavement and reproductive loss leave, off-duty cannabis protections |
| 10–14 | Workplace Violence Prevention Plan |
| 15–19 | pay scale in job postings, organ donor leave |
| 20–49 | federal COBRA replaces Cal-COBRA; SF health care and family-friendly ordinances; school activity leave |
| 50–74 | federal FMLA alongside CFRA |
| 75–99 | Cal-WARN notice for layoffs, relocations, and terminations |
| 100+ | annual pay data reporting |

### California localities

Local ordinances are modelled as a second layer, because coverage follows where the
employee physically works — including a remote employee's home city — and a single
remote hire can pull a company into an ordinance it has no other connection to. San
Francisco, Los Angeles, San Diego, San Jose, and Oakland each carry their own clause
and their own rule. Local rules stack on state law rather than replacing it: where
they differ, the more employee-favorable provision governs.

### Enforcement

PAGA is modelled explicitly, because it is what makes the rest of the California
corpus consequential — penalties run per employee per pay period and a single
employee can pursue them for the whole workforce. The corpus covers the notice and
cure window, the value of a documented pre-notice audit, Cal-WARN, pay equity
records, whistleblower protection, and retention periods.

Coverage includes: the §2115 pseudo-foreign corporation doctrine for Delaware
corporations operated from California; the $800 annual tax and LLC gross receipts fee;
Statement of Information deadlines; the bar on LLCs rendering licensed services;
fictitious business name and seller's permit; the ABC test and the Freelance Worker
Protection Act; Labor Code §925 forum limits; daily overtime, double time, reporting
time and split shift premiums; day of rest; on-call, travel, and control time;
uniforms, tools, and seating; the full leave set including CFRA, pregnancy disability,
bereavement, reproductive loss, jury and voting, school activity, military and
military spouse, crime victim, and organ donor; the Wage Theft Prevention Act notice;
pay scale disclosure and the salary history ban; Fair Chance Act procedure; CCPA
coverage of HR data; PAGA; Cal-WARN; pay equity; and on the commercial side the
automatic renewal law, CCPA service provider terms, CIPA website tracking exposure,
Unruh Act accessibility claims, Song-Beverly consumer warranties, dark pattern
consent rules, CASp lease disclosure, and Civil Code §1542 waivers.

Figures California recalculates each January — minimum wage, the exempt salary
threshold — are written as formulas in `taxonomy.json` under `californiaReference`
rather than as amounts, so a clause does not silently go stale between updates.

### Both sides of the table

The commercial package is written from both sides: the `role` answer (provider or
customer) selects between paired variants of the deliverable-ownership, warranty,
and rate-adjustment clauses, and the validator proves the pairs are mutually
exclusive rather than assuming it.

```
templates/
  taxonomy.json              controlled vocabularies: entities, jurisdictions, industries,
                             funding stages, severities, insertion modes
  rules.json                 the conditional logic engine (§1.2), as data
  glossary.json              plain-English translations (§3.2)
  schemas/
    documents.json           document definitions, inclusion conditions, article order
    fields.json              auto-population layer with provenance (§1.3)
    aliases.json             entity-dependent cross-reference targets
    questions.json           the wizard itself, with per-package visibility conditions
    risks.json               risk-based suggestions (§2.3), gated by package
    benchmarks.json          market comparisons (§2.2), gated by package
  clauses/                   the corpus itself, 360 clauses across 21 files
  tools/
    evaluator.mjs            shared evaluation core (also inlined into the prototype)
    corpus.mjs               loader
    validate.mjs             integrity checks
    build.mjs                compiler
```

## Commands

```
npm run test        # verification pipeline unit tests (21 assertions)
npm run validate    # corpus integrity across 12,120 answer sets
npm run check       # validate, then assert the prototype is in sync with templates/
npm run probe       # measure which source hosts this environment can reach
npm run verify      # attempt verification; fails closed
npm run queue       # export the review backlog as CSV and Markdown
npm run audit       # all of the above, in order
```

## What is machine-verified, and what is not

The distinction matters more than any other fact about this repo, so it is produced by
running the tooling rather than asserted here.

**Verified by execution — reproducible with `npm run audit`:**

| Property | How |
|---|---|
| 12,120 answer sets assemble without error | `validate.mjs` sweep |
| No unresolved `{{field}}` token in any generated document | sweep |
| No broken cross-reference in any package | sweep |
| No clause dropped between eligibility and numbering | sweep |
| All 7 consistency checks pass in every package | sweep |
| Same-titled clause variants are never both present | proved per configuration, not assumed |
| Every risk fires somewhere inside its declared packages | reachability check |
| The release gate cannot be self-certified | 3 negative controls, all rejected |
| The verification pipeline cannot upgrade without evidence | 21 assertions in `verify.test.mjs` |
| `draft-ai-engine.html` matches `templates/` | `build.mjs --check` |
| Which source hosts are reachable | `probe-sources.mjs`, timestamped into the registry |

**Not verified — 360 of 360 clauses:** every statement about what the law requires.
No clause has been checked against any source. See the release gate section below.

## Verification pipeline

`verify.mjs` routes each citation to authoritative hosts via `sources/registry.json`,
fetches them, and upgrades a clause **only on evidence it obtained itself**. There is no
branch that upgrades on a timeout, a redirect, a short body, or an operator flag —
`verify.test.mjs` enumerates each of those and asserts the level does not move.

Current run: 111 clauses with citations, 341 fetch attempts, **341 HTTP 403, 0 upgrades.**

`probe-sources.mjs` records why. Every primary source, agency, statute mirror, and
ordinance host is blocked by the network egress proxy; `github.com` as a control is
reachable, so it is these hosts specifically and not the network. Until at least one
primary source is reachable, verification cannot proceed here and the pipeline says so
rather than degrading to something weaker.

## Review queue

`queue.mjs` turns the quarantined corpus into an ordered worklist, because a clause
below the gate is a unit of review work rather than a dead file. Ordering is by expected
cost of being wrong: severity, whether the clause is drafted automatically or merely
suggested, whether it is in the jurisdiction being led with, whether it asserts a
specific provision in its text, and how far it sits from the gate.

Output: `verification/review-queue.csv` and `review-queue.md`.

## Clause model

```json
{
  "id": "gov_deadlock",
  "doc": "governance",
  "group": "Ownership Transfers",
  "title": "Deadlock Resolution",
  "severity": "critical",
  "insertion": "suggest",
  "condition": {"rule": "even_split"},
  "jurisdictions": ["*"], "industries": ["*"], "entities": ["*"],
  "version": "1.1.0", "updated": "2026-06", "source": "DRAFT standard library",
  "benchmark": "Present in 43% of two-founder agreements",
  "rationale": "Two owners with an even split have no tiebreak...",
  "provides": ["Exhibit B"],
  "body": "If the {{ownerTerm}} are unable to agree..."
}
```

- **`severity`** ranks the finding when the clause is missing. **`insertion`** decides
  whether it is drafted automatically (`auto`) or held back and surfaced by
  missing-clause detection (`suggest`). They are independent: a clause can be
  `critical` and still `suggest`, which is how `gov_govlaw` produces the spec's own
  §2.3 example.
- **`condition`** is an expression in the language documented in `rules.json`
  (`eq`, `gte`, `in`, `taxonomy`, `rule`, `all`, `any`, `not`, …). Tags and condition
  are ANDed: a clause appears only if its entity, industry, and jurisdiction tags all
  match *and* its condition holds.
- **`rationale`** is what the user reads when the clause is suggested; **`benchmark`**
  is the market-comparison line beneath it.
- **`provides`** declares an attachment label so the consistency checker can prove
  every "Schedule A" reference has something behind it.

## Body syntax

| Token | Meaning |
|---|---|
| `{{field}}` | auto-populated from `schemas/fields.json`, rendered with its provenance on hover |
| `[[term]]` or `[[display\|key]]` | plain-English glossary hover |
| `<<xr:clause_id>>` | cross-reference, numbered and validated at assembly |
| `<<xr:@alias>>` | cross-reference resolved per entity type via `schemas/aliases.json` |

## What validation guarantees

`validate.mjs` walks 12,120 answer sets and fails the build on the checks below.

The space is enumerated in **blocks** rather than as one cross-product: a formation
answer set does not vary deal size, a commercial one does not vary founder count, and
headcount and the California locality overlay only change an outcome inside
California. Crossing all of them at once multiplies the space without reaching any
rule the blocks do not already reach. The `UNREACHABLE` checks are the guard — if a
block under-enumerates, a clause or risk shows up as dead content.

- **`DANGLING_XREF`** — a drafted clause references a clause absent from that package.
  This has caught eight real defects across two rounds of corpus work, including one
  shipped by an earlier version of the prototype.
- **`SOFT_XREF`** — a drafted clause references a `suggest` clause, so the reference
  would render unresolved until the user accepts a suggestion.
- **`MISSING_ATTACHMENT`** — a "Schedule A" or "Exhibit B" reference with nothing
  declaring `provides` for it.
- **`VARIANT_COLLISION`** — two clauses sharing a document, group, and title both
  appear in one package, i.e. their conditions are not actually mutually exclusive.
  This is proved per configuration, not assumed from the shape of the conditions.
- **`UNREACHABLE`** — a clause whose tags and condition can never both be satisfied.
- **`DOC_PACKAGE_LEAK`** — a document that declares one package but appears in another,
  which would put a hiring document inside a commercial package.
- **`UNREACHABLE_RISK`** / **`UNREACHABLE_BENCHMARK`** — a risk or benchmark that never
  fires inside the packages it declares, usually because the clause it looks for is
  always auto-inserted. Three risks were removed as dead content on the first run.
- Structural checks: undefined `{{field}}` tokens, unknown glossary terms, tags absent
  from the taxonomy, non-semver versions, groups missing from a document's `groupOrder`,
  references to undefined rules or answer fields.

The checks are negative-controlled: deliberately breaking a condition makes
`VARIANT_COLLISION` and `DUP_TITLE` fire, so a clean run means the checks ran.

## Adding a clause

1. Add the object to the right file in `clauses/`. Its `group` must already appear in
   the target document's `groupOrder`, and the document must belong to the package the
   clause is meant for.
2. `npm run validate` — fix anything it reports.
3. `npm run build` — recompiles the prototype.

## Risks

`schemas/risks.json` holds the §2.3 risk flags. A risk fires when its `condition`
holds, every clause in `absent` is missing from the package, and every clause in
`present` is in it. `packages` is the authoritative gate — a risk is filtered by it
before its condition is evaluated, so conditions do not need to restate the package.

```json
{
  "id": "ca_five_employee_threshold",
  "level": "high",
  "packages": ["formation", "hiring"],
  "condition": {"rule": "ca_5plus"},
  "title": "Five-employee threshold turns on several obligations at once",
  "source": "Cal. Gov. Code §§12945.2, 12945, 12950.1, 12952",
  "body": "At {{headcountBand}}, California turns on ..."
}
```

## Benchmarks

`schemas/benchmarks.json` holds the §2.2 comparisons, gated by `packages` and
`condition` exactly like risks. Every entry carries a required `basis` field, because
a percentage without a stated basis reads as authority the corpus cannot support. The
values here are all marked `illustrative`; in production they come from the anonymized
corpus and should carry an n= and a date.

`UNREACHABLE_BENCHMARK` reports any entry that never fires inside its declared
packages, the same way `UNREACHABLE_RISK` does.

## Adding a package

1. Add it to `packages` in `taxonomy.json`.
2. Add a `pkg_<name>` rule to `rules.json`.
3. Add documents to `schemas/documents.json` with `package` set and `include` gated on
   that rule.
4. Add any package-specific questions to `schemas/questions.json` with a `when`
   condition, and any new answer fields to `ANSWER_FIELDS` and `BASE_ANSWERS` in
   `tools/evaluator.mjs`, along with an enumeration block in `allConfigs`.

## Sourcing and the release gate

Every clause, risk, and benchmark carries a `sources` array and a `verification`
level. The engine will not draft anything below the **release gate**, set in
`taxonomy.json`. Withheld content is counted and reported, not silently dropped.

| Level | Rank | What it means |
|---|---|---|
| `unsourced` | 0 | Drafted from model knowledge, no citation. No independent basis for anything it asserts. |
| `single-source` | 1 | One citation asserted. Nothing has checked that the cited provision says what the clause says. |
| `multi-cited` | 2 | More than one citation asserted. Still self-asserted — several citations by one author are not corroboration. |
| `search-corroborated` | 3 | Matched a web search summary drawing on independent sources, URLs and date recorded. **No source document was opened.** A lead for a reviewer, not a verification. |
| `corroborated` | 4 | Two or more independent secondary sources opened and read, each recorded with URL and date. Primary text still unchecked. |
| `primary-verified` | 5 | Checked against the primary statutory text, recorded with source and date, by a named reviewer. |

**Gate: `corroborated`. Current state: 0 of 360 clauses clear it.**

```
unsourced           249   (69%)
single-source        89   (25%)
multi-cited          19   (5%)
search-corroborated   3   (1%)
```

All 31 risks and all 23 benchmarks are also below the gate. Every benchmark
percentage in this corpus was written for the prototype and is backed by nothing.

### The gate cannot be self-certified

`validate.mjs` rejects an unearned claim. Anything at `search-corroborated` or above
needs at least two sources with a recorded URL **and** a check date, on **distinct
hosts**. `corroborated` additionally requires a `readBy` record, and
`primary-verified` requires a primary source and a named `reviewer`. Padding the
`sources` array with more citations does not move a clause up — that was tested:

```
UNEARNED_CORROBORATION: clause "charter_name" claims "corroborated" but has 0
  source(s) with a URL and a check date — corroboration requires at least two
UNEARNED_CORROBORATION: clause "charter_purpose" claims "corroborated" but all
  sources are on one host (example.com) — independent sources required
UNEARNED_VERIFICATION:  clause "charter_agent" claims "primary-verified" without
  a primary source
```

This matters because the author of the content and the author of the gate are the
same model. Without the check, the gate is decorative.

### What blocked verification here

Measured, not asserted — see `sources/registry.json` for the timestamped result of
`npm run probe`. All 14 legal source hosts return HTTP 403 through the egress proxy;
`github.com` as a control is reachable. Web *search* works and returns summaries with
URLs; fetching any of those URLs does not. That is why three clauses sit at
`search-corroborated` and none at `corroborated`: the sources were listed, not read.

Restoring egress to primary-source hosts is the prerequisite for moving the corpus up
the ladder mechanically, and even then `primary-verified` requires a named reviewer by
design.

### Benchmarks were deleted rather than quarantined

A clause below the gate has a path to clearing it: a reviewer reads the source. A
fabricated percentage does not — no review turns an invented number into a measured
one. By the spec's own design (§2.2, §5.2) a benchmark is a query over the anonymized
document corpus. The 23 authored percentages were removed; the record is in
`schemas/benchmarks.removed.json` and the schema now requires `n`, `asOf`, and `query`
alongside any value.

## Scope and status

Clause text, benchmark percentages, and risk thresholds are illustrative content
written for this prototype. They are **not legal advice, not measured market data, and
not fit for use on a real formation.** The release gate above enforces that: as things
stand the engine drafts nothing at all, which is the correct output for a corpus in
this state. Every clause carries `sources`, `verification`, `version`, and `updated` so
a reviewed clause can be pinned and the rest can be worked through as a queue.
