# watcher/

Phase 4.4's law-change watcher: periodically checks whether a source
already cited in the corpus has changed — a statute amended, a case
limited or overruled, a regulation superseded — and reports which
clause ids are affected. Unlike `verifier/` (which asks "was this
citation ever right?"), the watcher asks "is it still right?"

This directory is **read-only with respect to the corpus**, same as
`verifier/`: nothing here ever edits `data/clauses.json` or
`data/documents.json`. A finding is a flag for a human to review, never
an automatic edit to legal text.

## Why this can't be a GitHub Actions cron job

The master plan describes this as "a scheduled task." It isn't one in
the GitHub Actions sense, because the actual research step — querying
Lawstronaut's `horizon_scan` and CourtListener for real changes — only
exists as MCP tools inside an agent session, the same constraint
`verifier/`'s adversarial pass runs into (see `tools/README.md`'s
`recheck_all.py` section: even quota-free `curl` against CourtListener
is blocked by their AWS WAF bot challenge). A CI runner has neither.

So the watcher is split the same way the verifier is: the deterministic
pieces below run anywhere, including CI, and the actual judgment —
"does this hit really describe a change to this exact citation, not
just something nearby" — runs through the `Agent` tool following
`watcher/prompt.md`, the same way `tools/wave_agent_prompt.md` and
`verifier/prompt.md` do. "Running the watcher weekly" means invoking
that worker periodically — by a human, or by a Claude Code scheduled
task a human sets up — not a cron step in `ci.yml`.

## Pipeline

```
python3 tools/build_citation_index.py
    │  index/citation_to_clauses.json, rebuilt whenever the corpus
    │  changes, checked in CI (tools/build_citation_index.py --check)
    ▼
python3 watcher/scan_batch.py --since S --through T [--remaining]
    │  one batch of distinct corpus citations, split statute-vs-case
    │  by url host
    ▼
Agent tool, watcher/prompt.md + a batch
    │  a worker checks Lawstronaut/CourtListener for real changes in
    │  the window and returns a JSON array of findings (clean
    │  citations need no entry at all — unlike the verifier, a horizon
    │  scan has nothing to say about a citation that didn't change)
    ▼
python3 watcher/record_changes.py batch.json results.json
    │  validates the schema, refuses a finding whose url wasn't in the
    │  scanned batch, looks up affected clause ids via the citation
    │  index, and appends to:
    ▼
watcher/scanned.jsonl      one line per citation checked (resume state)
watcher/changes.jsonl      one line per real finding, with affectedClauseIds
    │
    ▼
python3 watcher/report.py --since S --through T
    writes watcher/reports/<T>.md — the master plan's literal 4.4
    deliverable ("a dry run against last quarter's changes produces a
    report")
    │
    ▼
python3 watcher/flag_for_review.py <clauseId>
    for one affected clause, creates a LOCAL git branch
    (watcher/needs-review-<clauseId>) with one new file
    (watcher/flags/<clauseId>.md: the evidence, nothing else) —
    never pushed, never a PR, see below
```

## Why `flag_for_review.py` never pushes or opens a PR

The master plan says "open a draft branch or PR containing only a
needs-review flag and the evidence." This project's standing rule —
not specific to the watcher — is **never create a pull request unless
a human explicitly asks for one**. Automatically pushing a branch or
opening a PR on a schedule, unattended, is exactly the kind of action
that rule exists to prevent: it's visible to others and hard to walk
back quietly if the watcher got something wrong.

`flag_for_review.py` satisfies the letter of "open a draft branch"
without crossing that line: it creates the branch **locally only**,
containing exactly one new file (the flag + evidence, never a clause
edit), and returns to the branch you started on. Pushing that branch,
or opening a PR from it, is a separate, deliberate action for a human
(or an agent a human explicitly told to do it) to take after reading
the flag — not something this script, or any scheduled run of the
watcher, does on its own.

## Resuming an interrupted scan

`watcher/scanned.jsonl` is the resume state, same role as
`verifier/checked.jsonl`: a `(url, case, cite)` triple in it is done for
that scan window, regardless of whether it produced a finding.
`scan_batch.py --remaining` filters the full citation list against it,
so re-running after an interruption only ever hands a worker citations
nobody has checked yet in this window.

## Status so far

Infrastructure only. No real scan has been run yet — doing so spends a
real, slow, external-research budget the same way the verifier's
100-clause sample did (see `DECISIONS.md`'s Phase 4.1 entry), so it's
held as its own checkpoint rather than run as part of building this.
