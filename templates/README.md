# DRAFT template corpus

The template layer for the AI Template & Content Engine spec. Every clause, tag,
condition, rule, field, wizard question, and glossary entry the engine uses lives
here as JSON. Nothing is authored inside `draft-ai-engine.html` — that file is
compiled output.

262 clauses across 17 document schemas in three packages:

| Package | Documents |
|---|---|
| **Form a company** | charter filing · governing document (Operating Agreement or Bylaws) · founder IP assignment · vesting agreement · 83(b) election · initial consent · employment policy set · foreign qualification · compliance calendar · schedules and exhibits |
| **Sell or buy services** | mutual NDA · master services agreement · statement of work · data processing addendum |
| **Hire someone** | employment agreement · independent contractor agreement · employee handbook |

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
  clauses/                   the corpus itself, 262 clauses across 13 files
  tools/
    evaluator.mjs            shared evaluation core (also inlined into the prototype)
    corpus.mjs               loader
    validate.mjs             integrity checks
    build.mjs                compiler
```

## Commands

```
npm run validate    # integrity checks across all 12,720 wizard configurations
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

`validate.mjs` walks all 12,720 wizard configurations — enumerated per package, so a
formation answer set does not vary deal size and a commercial one does not vary
founder count — and fails the build on:

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
