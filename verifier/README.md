# verifier/

Phase 4.1's adversarial verifier: an independent, after-the-fact review
of clauses already marked `"status": "verified"` in the corpus, looking
for citation mismatch, quote drift, overclaiming, wrong/undisclosed
jurisdiction, advisory language, superseded law, and internal
contradiction — see `prompt.md` for the full rubric a review worker
follows.

This directory is **read-only with respect to the corpus**: nothing
here ever edits `data/clauses.json` or `data/documents.json`.
`suggestedFix` in a finding is a proposed replacement string for a human
(Phase 4.2's triage workflow) to apply later, never something applied
automatically. The actual edit — when a finding is real enough to
fix — happens as a normal, direct edit outside this directory, checked
the same way every other corpus fix is (validate_corpus.py, golden
fixture regeneration); `triage.py --status fixed` records that it
already happened and writes the changelog entry, it doesn't perform
the edit itself.

## Pipeline

```
python3 verifier/sample.py --n 100
    │  draws (once) or reuses a random sample of N authority clauses,
    │  saved to sample.json so a resumed run checks the same set
    ▼
verifier/sample.json          {drawnAt, seed, populationSize, clauseIds}
    │
    │  python3 verifier/sample.py --n 100 --remaining
    │  prints each sampled clause's review packet (the clause, the
    │  document(s) using it, its sibling authority clauses — NEVER
    │  verification/*.md, so the review is independent of the
    │  original justification) as JSON
    ▼
Agent tool, prompt.md + a batch of packets
    │  a worker does real research (CourtListener/Lawstronaut/web
    │  fetch) and returns a JSON array: [{clauseId, findings: [...]}]
    ▼
python3 verifier/record_result.py <worker's output>
    │  validates the schema, refuses to re-record an already-checked
    │  clause id, appends to:
    ▼
verifier/checked.jsonl        one line per clause checked (resume state)
verifier/findings.jsonl       one line per finding (severity, category,
                               evidence, sourceChecked, suggestedFix)
    │
    ▼
python3 verifier/report.py
    finding rate, severity/category breakdown, example findings — the
    "sample report" the master plan's acceptance line asks for
    │
    ▼
python3 verifier/triage.py --list / --decide <id> --status ...
    Phase 4.2: accepted (stands, no edit), rejected (false positive,
    --reason required, fed back into prompt.md's "Known false
    positives" section), or fixed (the clause was already edited
    directly; this appends the changelog.html entry) — appends to:
    ▼
verifier/triage.jsonl         one line per finding, final disposition
```

## Why the orchestrator is split from the worker

`sample.py`/`record_result.py`/`report.py` are plain, deterministic
Python — sampling, file I/O, arithmetic. The actual judgment (does this
citation really say that; is this quote still live; does this cross
into advice) requires real research against external legal sources and
can't be done by a script. That part is `prompt.md`, run through the
`Agent` tool, the same split `tools/wave_agent_prompt.md` already
established for corpus-expansion work in this project — a versioned
prompt a worker follows, with a thin, testable harness around it rather
than the judgment and the bookkeeping living in the same place.

## Resuming an interrupted run

`checked.jsonl` is the only resume state that matters: a clause id in it
is done, full stop, regardless of how many findings it produced.
`sample.py --remaining` filters the saved sample against it, so
re-running after an interruption (or running the next batch) only ever
asks a worker to look at clauses nobody has looked at yet.

## Status so far

The first real sample is complete and fully triaged: 100/100 authority
clauses checked, 18 findings (1 major, 17 minor, 0 blockers), 8 fixed
(with changelog.html entries), 10 accepted with no clause edit (all
sourcing-access limitations, not false positives), 0 rejected. Full
breakdown of every finding and decision in `DECISIONS.md`.

Whether and when to run the verifier at full-corpus scale (thousands of
authority clauses, not 100) is a separate decision this sample and its
triage don't make on their own — the master plan reserves it for after
the sample is reviewed, and it's recorded as its own checkpoint in
`DECISIONS.md` given how much real, slow, external-API-dependent work
that would represent compared to everything else built so far.
