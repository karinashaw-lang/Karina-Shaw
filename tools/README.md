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

## wave_agent_prompt.md

The canonical prompt for a corpus-expansion worker, one per category per wave.
Was previously retyped from memory into every `Agent` call, which is exactly
the drift risk `validate_corpus.py` exists to prevent for the corpus itself —
so it is versioned here instead. Notably fixes the shared-scratchpad
collision: earlier waves told each agent to "use a private directory named
for yourself," which is a convention, not a guarantee, and one agent's
`build.py` was in fact overwritten mid-run by another agent's file of the
same name in the shared session scratchpad. The fix is structural rather than
a naming rule: every agent already has its own git worktree that no other
agent can see, so the template now says to use that, not the scratchpad, for
every temporary file.

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

**Assume a high failure rate is this script before you assume it is the
corpus.** The first full run reported 159 EMPTY and 51 MISMATCH in its first
1,631 checks. Every one was a bug here:

- All 159 EMPTY were leginfo at exactly 0 bytes. The JSF session had expired
  and the re-seed only fired on a loop counter, so once a session died every
  later fetch failed the same way. It now re-seeds and retries the moment a
  leginfo body comes back empty.
- The mismatches were PDF extractor disagreement. `extract_pdf` returned the
  first extractor that succeeded, while a quote had been verified against the
  other — one inserts mid-word spaces, the other preserves justified spacing.
  It now returns both texts and accepts a quote found in either.

After that fix the same population came back 1,315 PASS to 1 MISMATCH — and
the one remaining mismatch was also this script. California slip opinions
carry marginal line numbers, which extraction interleaves into the prose, so
a quote spanning a line break reads "what should 20 happen" and matches
neither extractor (they do not even agree on which number lands where).
`extract_pdf` now offers a third candidate with standalone one- and two-digit
numbers removed — an extra way to match, never a replacement, since the
unmodified texts are still checked first.

A long run was also killed outright, almost certainly for memory: pdfminer
holds a whole page tree at once, and doing that on a multi-megabyte volume is
enough to lose the process. Files over 12 MB now go through pypdf only.

A failure rate above a percent or so is a signal to debug this script, not to
start writing up findings.

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
