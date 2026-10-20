# search/

Phase 5.1's plain-language document search — data only; the engine
itself (`buildDocumentIndex()`, `searchDocuments()`, `resolveTypo()`)
lives in `app.js`, next to the clause-matching engine it reuses the
same tf-idf/cosine math from (`buildClauseIndex()`/`matchPassage()`,
the "read a contract" feature).

## lay_terms.json

Maps each document id to 5-10 plain-language phrasings a non-lawyer
might type into a search box or use to describe their situation — the
synonym/lay-term layer the master plan asks for ("deposit back" maps
to security deposit; "fired" maps to termination). These phrasings are
indexed directly alongside each document's title/description/category
in `buildDocumentIndex()`, so the mapping is structural (a search for
"deposit back" matches the security-deposit document because that
phrase is literally in its index) rather than a separate synonym
substitution step applied at query time.

Generated across all 740 documents by parallel `Agent`-tool workers
(10 batches of 74), each grounded only in that document's own
title/description/categories — no external research needed, pure
paraphrasing. Validated against `lint/advisory_phrases.json` (0 hits
across ~4,170 phrasings — "inform, never advise" applies to search
phrasings too: they describe what someone is looking for, never what
they should do about it) and spot-checked by hand (50 random entries).
183 documents initially fell short of the master plan's 5-phrase floor
(as low as 3); backfilled with additional, non-duplicate phrasings in
a second pass so every document now has 5-7.

## Why this directory has no scripts

Unlike `verifier/` or `watcher/`, there's no orchestration script here
because generating a lay phrasing isn't a research task with an
external, fact-checkable answer — it's paraphrasing from data already
in `data/documents.json`, done directly rather than through a
versioned prompt + harness split. If this data needs regenerating for
new or changed documents later, the same approach (batch documents,
dispatch parallel `Agent`-tool workers grounded in each document's own
title/description/categories, validate against the advisory lint, spot
check a sample) is the one to repeat — see `DECISIONS.md`'s Phase 5.1
entry for the full writeup, including a real precision bug this data
surfaced in the search engine itself (a common filler word getting an
inflated tf-idf weight — see `app.js`'s `STOPWORDS` comment).

## Golden search tests

`tests/search/golden_queries.json` + `tests/search/golden_search.js`
are the master plan's literal 5.1 deliverable ("golden search tests: a
list of 100 lay queries with expected top-3 documents, run in CI").
The fixture was built by `tests/search/generate_golden_queries.js`
(not run by CI) by trying each candidate document's own lay-term
phrasings against the real, live `searchDocuments()` until one
actually placed that document in the top 3 — so every entry in the
committed fixture reflects verified behavior against this engine, not
an aspiration that might not hold. A later failure in `golden_search.js`
means the engine's behavior changed since the fixture was generated,
not that the fixture was ever hopeful.
