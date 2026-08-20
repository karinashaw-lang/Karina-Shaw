# Findings for parked California clauses

33 findings, moved out of `verification/findings/` on 2026-08-20. Each one is a real search
pass against a clause that no longer exists in `templates/clauses/` — the clause it names was
parked into `templates/parked-california/` by the 2026-08-19 narrowing to jurisdiction-neutral
templates. Nothing here is wrong; the clauses they check are just not part of the corpus that
ships today.

## Why they had to move

`templates/tools/findings.mjs` refuses to run at all if any file in `verification/findings/`
names a clause that isn't in the live corpus — `if(unknown.length){ ...error...; process.exit(1); }`
— so leaving these 33 in place blocked scoring for every finding, including ones for clauses
that do ship. Moving them here is the same trick `templates/parked-california/` itself uses:
`readdirSync('verification/findings')` never sees this directory, so nothing has to remember an
exclusion rule.

## Restoring

If the parked California content comes back, move the matching finding back into
`verification/findings/` alongside it. 25 of the 33 clauses these findings check already carry
a `leginfo` URL and a check date and are the only verified content this project has produced —
see `templates/parked-california/README.md` for why that content was worth keeping rather than
deleting.
