# Baseline

Phase 0.2. All three gates run clean against the current tip of
`claude/new-session-palh5c` (commit `03c7707`). Run from repo root.

## Gate results

| Gate | Command | Result | Wall time |
|---|---|---|---|
| Corpus validation | `python3 tools/validate_corpus.py` | **PASS** | 0.54s |
| Browser regression | `python3 -m http.server 8933 &`<br>`NODE_PATH="$(npm root -g)" node tools/regression.js` | **PASS** (2 expected sandbox console errors — Google Fonts + Supabase CDN both blocked by the egress proxy; see `tools/README.md`) | 7.6s |
| Merge guard | `python3 tools/merge_guard.py HEAD` | **PASS** — clean, 0 dropped/modified on both files | 1.3s |

Merge guard was also run against `263d510~1` (the commit before the last
clause edit that actually happened) to confirm it detects a real change,
not just that it passes on a no-op diff:

```
clauses: +0 net, 0 dropped, 1 pre-existing modified
  MODIFIED tmlicense_naked_licensing_abandonment
documents: +0 net, 0 dropped, 0 pre-existing modified
```
Exit 1, as designed. This is the known Barcamerica v. Tyfield quote fix
(commit `263d510`) — confirms the script actually flags real content
changes, not just that it runs.

**Note for CI (Phase 1.1):** `merge_guard.py`'s `base-ref` argument
defaults to `HEAD`, which is a no-op unless the script is invoked with the
actual pre-merge/base-branch ref explicitly — pass it, don't rely on the
default.

## Corpus counts vs. BUILD_STATUS claims

| Claim | Confirmed |
|---|---|
| 740 documents | ✅ exact match |
| 6,610 clauses | ✅ exact match (4,980 authority / 1,630 drafting) |
| 11,661 citations | ✅ exact match |
| 8 categories | ✅ exact match, 93–94 documents each |

No mismatch between BUILD_STATUS and the live data as of this baseline.

## Schema examples

See `ARCHITECTURE.md` → "Clause/document schema (confirmed by example)" for
one full document (`nda`), one authority clause (`nda_definition`), and one
drafting clause (`nda_obligations`), pulled directly from `data/*.json`
rather than reconstructed from memory.

## What this baseline does *not* cover

Per the master build plan's own task list, these are explicitly out of
scope for Phase 0 and were not attempted here:
- No CI exists yet (Phase 1.1) — these gates were run manually, once, in
  this sandbox.
- The Supabase test-row cleanup and HTTP-level auth round trip (Phase
  1.2/1.3) are unresolved from the prior session — see the Build Status
  artifact for the full account. Summary: RLS is verified directly against
  Postgres; the HTTP round trip is not, because this sandbox's egress
  policy blocks the live project's domain; two harmless test rows remain
  pending a deletion that previously hung on this tool.
- No golden-output fixtures exist yet (Phase 1.4) — `regression.js` checks
  structural rendering (counts, no leaked placeholders, badges present), not
  exact output text per document.
