# tools

Maintenance scripts for the corpus. All are run from the repository root.

## validate_corpus.py

Corpus-wide integrity check. **Run after every merge, before committing.**

```
python3 tools/validate_corpus.py
```

Checks unique clause and document ids, unique document titles, that every
`clauseOrder` id resolves, that no clause is orphaned, that every authority
clause has a non-empty gap and at least one citation, that every citation has
a url and a quote, that key order matches the documented schema for clauses,
citations and documents, and that every `{{field}}` used in a body or gap is
declared by each document that includes the clause. Every one of these has
caught a real defect at least once.

## merge_guard.py

```
python3 tools/merge_guard.py <pre-merge-commit>
```

Compares a pre-merge snapshot against the working tree and fails if any
pre-existing clause or document was **modified or dropped**.

This exists because merging a worker branch resolves conflicts in the two
large JSON arrays by union — appending items whose ids are new and otherwise
keeping the current copy. That is correct for additions, which is all a
worker normally produces, but it silently reverts *edits to clauses that
already existed on both sides*, with no conflict reported. A gap note added
during expansion was lost that way once. Run this whenever an edit to an
existing clause is in flight, and prefer to make corpus-wide corrections
while no workers are running.

## recheck_citations.py

```
python3 tools/recheck_citations.py [N] [host-substring ...]
```

Re-fetches stored citation URLs and re-checks that each quote is still a
verbatim substring of what comes back.

Quote verification at write time proves a quote was in text the author
fetched; it cannot tell you whether the stored URL still returns that text.
The first sampled run found a citation whose URL resolves to a version-picker
rather than to statutory text, because two versions of the section are on
file and the publisher disambiguates them only through a form submission.

Defaults to statutory publishers. Pass `courtlistener` deliberately and only
when no expansion workers are running, since they share that quota.

Read failures sceptically. Every failure investigated so far but one has
been a defect in the checker rather than in the corpus: a leginfo session
reused across a long run and silently expiring, and tag-stripping in both
directions. Neither way of stripping tags is right for every publisher —
dropping them joins words that markup merely wrapped (Cornell puts a defined
term in its own element mid-sentence), while replacing them with a space is
what separates list items that leginfo puts one per element, where dropping
them yields ";4. Names". The script now accepts a quote if either spelling
matches. Retry with a fresh session and check normalization before reporting
a defect.

## recheck_all.py

```
python3 tools/recheck_all.py [--hosts statutory|courtlistener|all] [--out PATH] [--delay SECONDS]
```

The whole-corpus version of the sampler. Two things make a full pass
practical: citations share URLs (about 2.7 quotes per unique URL), so each
URL is fetched once and every quote citing it is checked against that one
fetch; and results are appended to a JSONL as they are produced, so a
container restart resumes rather than starting over — pass the same `--out`
and it skips URLs already recorded.

Handles PDFs, which matters more than it sounds: a slip opinion or the CACI
volume fetched as text looks like an empty page, so without extraction every
PDF citation reports a false `EMPTY`. A smoke run before that was added
produced 48 of them.

Statuses are deliberately distinct. `UNRESOLVED_URL` means the page carried
no statutory text at all — a broken citation, not a wrong quote. `EMPTY`
usually means a session expired or a fetch failed. Only `MISMATCH` is a claim
about the quote, and even then check normalization first.

Run `--hosts courtlistener` only when no expansion workers are running: they
share that quota, and exhausting it stops their research mid-document.

## regression.js

Headless browser check of the application against the current corpus.

```
python3 -m http.server 8933 &
NODE_PATH="$(npm root -g)" node tools/regression.js
```

Confirms that the per-category document counts are level (the wave rotation
keeps them within one of each other), that the most recently added documents
assemble with no raw `{{field}}` placeholders in body or gap, that the output
screen renders clause blocks and badges, and times the contract reader.

It derives both the expected category spread and the documents to exercise
from the corpus itself — documents are appended, so the tail of the array is
the newest wave — rather than naming them, so it does not need editing as the
corpus grows.

Three console errors are expected and are artifacts of the sandbox, not
defects: the Google Fonts stylesheet is deliberately aborted because the host
is blocked, `config.js` is absent by design (it is gitignored so keys never
enter the repository), and the Supabase client on jsDelivr is unreachable —
it would only be loaded if `config.js` existed.
