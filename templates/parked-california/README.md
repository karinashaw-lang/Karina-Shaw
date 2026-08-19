# The California corpus, parked

115 clauses, one document, one risk, 31 glossary terms and 7 fields were taken out of the build
when the product narrowed to generic national templates. Nothing was deleted. `corpus.mjs` reads
`templates/clauses/*.json` with `readdirSync`, and a directory does not end in `.json`, so this
folder is invisible to the build without any exclusion rule to maintain.

## What is here

| File | Holds |
|---|---|
| `california-*.json` (7 files) | The 98 clauses that lived in California-only files |
| `extracted-from-generic-files.json` | 17 California clauses that were mixed into otherwise-generic files, keyed by the file each came from so they can go back where they were |
| `risks.json` | The one risk rule whose trigger clause was parked |
| `glossary-and-fields.json` | Terms and auto-populated fields nothing else referenced |

The document `ca-notices` — the California Employer Compliance Set, 37 clauses — was removed from
`templates/schemas/documents.json`. It was the only document that emptied completely.

## Why this was worth keeping

Of the 34 clauses ever checked against a primary source, 25 now carry a leginfo URL and a check
date, and most of them are in here. That is the only verified content this project has produced,
and it took the whole egress fight to get.

The reasoning behind the split is in `verification/MVP-GAP.md`: the clauses that assert what the
law requires are the ones that can be wrong about it, and every defect found in this corpus — 33
of 34 — was in one of them. Generic contract terms make no claim about any state's law, so they
cannot misstate it. That is why the generic corpus is the safer thing to ship first, and also why
this material is the harder half rather than the disposable half.

## Restoring

Move the `california-*.json` files back to `templates/clauses/`, put the extracted clauses back
into the files named as their keys, restore the risk, the glossary terms and the fields, and add
the `ca-notices` document back to `templates/schemas/documents.json`. The eight `ca_*` rules in
`templates/rules.json` were left in place, so the conditions those clauses depend on still exist.
