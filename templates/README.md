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
npm run validate    # integrity checks across the configuration space (12,120 answer sets)
npm run build       # compile the corpus into draft-ai-engine.html
npm run check       # validate, then assert the prototype is in sync
```

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

## Scope and status

Clause text, benchmark percentages, and risk thresholds are illustrative content
written for this prototype. They are **not legal advice, not measured market data, and
not fit for use on a real formation.** Statutory citations are included because the
spec's examples turn on them; they are unverified here. Every clause carries a `source`
field for that review pass, and `version`/`updated` so a reviewed clause can be pinned.
