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
    review.mjs               the two-ladder release gate, inlined into the prototype
    drafting-packet.mjs      the drafting review packet, with measured clause reach
    sources.mjs              who publishes what, and the two-primary-source standard
    propagation.mjs          where else a confirmed defect lands: shared wording, shared citation
    holdout.mjs              scoring the pre-registered detector predictions
    classification.mjs       textual evidence for which ladder a clause belongs on
    classification-packet.mjs the classification packet, and --apply to record decisions
    docdefects.mjs           source-document integrity: 13 structural checks, pure functions
    textstore.mjs            content-addressed attested text store
    ingest.mjs               the two supply paths, and --inspect / --audit
```

## Commands

```
npm run test        # verification pipeline unit tests (440 assertions)
npm run validate    # corpus integrity across 12,120 answer sets
npm run check       # validate, then assert the prototype is in sync with templates/
npm run probe       # measure which source hosts this environment can reach
npm run verify      # attempt verification; fails closed
npm run queue       # export the review backlog as CSV and Markdown
npm run egress      # generate the allowlist request from measured data
npm run packet      # write the drafting review packet for the 191 non-law clauses
npm run classify    # write the classification review packet; --apply records the verdicts
npm run holdout     # score the pre-registered detector predictions
npm run propagation # trace each confirmed defect to the clauses built from the same memory
npm run sources     # audit every finding against the two-primary-source standard
npm run inspect     # dry-run the integrity checks on a file, storing nothing
npm run texts:audit # re-run the current checks against every stored text
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

## Source texts: what "trusted" requires

Fetching a statute is the easy half. The hard half is being able to prove later that
what you hold is what the source said, and that nothing rewrote it in between.
`sources/texts/` is a content-addressed store built for that.

Three properties, enforced rather than promised:

1. **Verbatim only.** What is stored is bytes as received. `textstore.mjs` contains no
   model client, no network call, and no summarisation path — and `textstore.test.mjs`
   asserts that against the file's own source with comments stripped. A model artifact
   is not a source text, and the way to guarantee that is to make it structurally
   impossible rather than a matter of discipline.
2. **Content-addressed.** Every text is keyed by SHA-256 over its exact bytes. Two
   people holding the same `textId` hold identical bytes, or one has been tampered with.
   `get()` re-hashes on read and reports tampering.
3. **Provenance or nothing.** A text without a recorded origin, timestamp, and supplier
   is refused at the door. There is no "trust me" mode.
4. **No defective source documents.** Provenance says where a text came from; it says
   nothing about whether the text is any good. Every document is inspected before it is
   stored, and a defective one is refused rather than stored with a warning.

### Two supply paths

**A — fetch from an approved primary host.** Only hosts marked `primary` in the registry
qualify. A mirror is fine for corroboration but is not a source text: it is somebody
else's copy, with their transcription errors. Blocked in this environment; granting
egress is the only change required.

**B — operator-supplied.** You obtain the text (Westlaw, Lexis, a court library, the
Secretary of State) and hand over the file with an attestation naming who obtained it,
from where, and when.

```
npm run ingest -- --file lab-925.txt --citation "Cal. Lab. Code §925" \
  --by "K. Shaw" --from "Westlaw" --on 2026-08-15
```

### There should not be defects on source documents

A hash over a 404 page is a perfectly sound hash over a 404 page. A copy that stops
mid-subdivision hashes fine, pins fine, and then authorises a clause that omits whatever
was cut off — which is exactly the failure the corpus review found dominates. So
`docdefects.mjs` asks a different question from the store: not *where did this come from*
but *is this a whole, clean, correct copy of the provision it claims to be*.

Thirteen checks, each a pure function of the document and its citation. No network, no
model, no knowledge of what the law says — every one is a structural property anybody can
re-derive from the same bytes.

| Severity | Checks | Storable? |
|---|---|---|
| **fatal** — not a statutory text at all | `empty`, `too-short`, `error-page`, `markup`, `encoding` | never, under any circumstances |
| **serious** — may be real, but the pin would be unsafe | `citation-absent`, `truncated`, `subdivision-gap`, `subdivision-disorder`, `duplicated-block`, `scope-overrun`, `no-version-marker`, `character-noise` | only on a named waiver |

`citation-absent` catches the commonest silent failure: fetching a neighbouring section
and filing it under the one you wanted. `subdivision-gap` catches a copy missing (c),
which is how an omission defect gets *sourced*. `no-version-marker` catches a text with
no enactment note, session law, or as-of date — statutes are amended, and a text that
cannot be placed in time makes drift undetectable.

A waiver is a person, not a flag. It names who is waiving which finding and why, it is
refused if the reason is a token, it can never touch a fatal finding, and it is written
into the record and travels with the text forever. There is deliberately no `--force`.

```
$ npm run inspect -- truncated.txt --citation "Test Code §4200"
  11 check(s) passed, 0 inapplicable, 0 fatal, 2 serious
  SERIOUS truncated            the final line ends on a function word
                              "(b) It is long enough to clear the stub threshold, but this copy stops in the"
  SERIOUS no-version-marker    no enactment note, session-law reference, effective date, or as-of date found

this document would be REFUSED
```

The check runs inside `put()`, before any file is opened, and `textstore.test.mjs` asserts
that ordering against the function's own source — so the inspection cannot be routed
around by a future caller. `npm run texts:audit` re-runs the current checks against
everything already stored, because a text admitted under an older set of checks is not
thereby clean.

Path B is the one that works today, and it is not a downgrade — a text you obtained
from Westlaw and attested is more trustworthy than one I scraped. What the store adds is
that nobody afterwards has to take either of us on trust: the hash proves the bytes and
the attestation names the human.

### Pinning: from a trusted text to a verified clause

Holding a trusted text is still not knowing a clause is right. `pin.mjs` links them
assertion by assertion — this claim rests on THAT span of THAT attested text, recorded as
an exact quote with its offset and hash.

A pin must quote, and the quote must still match. Run against a real §925 text, the
pinning step independently refused the wording this corpus uses:

```
$ npm run pin -- --clause ea_ca_925 --assertion "primarily works in California" ...
refused: quote-absent — the quoted span does not appear in the attested text
```

The statute says *"primarily resides and works in California"*. The clause says
*"primarily works"*. That is the same defect the search pass found, caught again
mechanically and without anyone reading anything.

`primary-verified` requires every assertion pinned, every pin matching, **and** a named
reviewer. Pins remove the need to take anyone's word about what the source says; they do
not remove the reviewer.

### Drift

Statutes are amended. Re-attestation compares the live source against the stored hash. A
mismatch is not an error — it is a finding: the law moved, and every clause pinned to
that text is stale until re-checked.

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

## Two review tracks

A clause that states what the law requires and a clause that states a negotiated term
fail in different ways and are vetted by different people. Collapsing them is what makes
a 360-clause review look impossible; separating them is what makes a zero-defect standard
reachable.

*Measured:* **169 clauses assert what the law requires. 191 state a negotiated term.**

| Track | Clauses | The question | Fails by | Cannot be cleared by |
|---|---:|---|---|---|
| `authority` | 169 | Does the source say this, and all of it? | omission — right number, missing qualifier | drafting review, or a model re-reading its own output |
| `drafting` | 191 | Is this the term we want? | unfavourable, ambiguous, unenforceable | statutory verification — it asserts no statute |

The burden is concentrated, which is the scheduling insight: `ca-notices` (86%),
`handbook` (88%), and `compliance-calendar` (85%) are almost entirely legal assertion,
while `nda` (14%), `sow` (14%), and `msa` (26%) are almost entirely drafting. The
commercial package can be cleared by a commercial lawyer without a single statute being
pulled. The California package cannot be cleared without all of them.

`assertsLaw` is currently set by heuristic and marked `heuristic-unreviewed`. That is
itself a gate: `UNREVIEWED_CLASSIFICATION` fails the build if a clause reaches the
release gate while the classification routing it to a review track has not been checked.
A misrouted clause gets the wrong kind of vetting and passes anyway, which is the failure
this guards against.

`npm run cost` estimates the work from measured inputs, labelling every assumed rate.

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

The proxy is explicit about the cause. `curl http://127.0.0.1:36695/__agentproxy/status`
records `connect_rejected` — *"gateway answered 403 to CONNECT (policy denial or upstream
failure)"* — for every host. The CA bundle, trust store, and proxy settings are all
correct, and `github.com` reaches through the same path. This is an organization egress
policy decision, and the proxy README is explicit that it must be reported rather than
retried or routed around.

`npm run egress` generates the allowlist request from the registry and the last probe:
13 hosts, ranked by how many citations depend on each. `law.justia.com` (91),
`codes.findlaw.com` (85), and `leginfo.legislature.ca.gov` (78) carry most of it — one
primary plus one mirror is enough to start moving clauses to `corroborated`.

Granting egress relaxes nothing else. `primary-verified` still requires a named human
reviewer, the gate still refuses to draft below `corroborated`, and `verify.mjs` still
fails closed on a timeout, redirect, short body, or 403.

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
