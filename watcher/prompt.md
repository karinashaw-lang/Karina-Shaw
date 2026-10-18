# Law-change watcher — worker prompt (Phase 4.4)

Canonical prompt for a horizon-scan worker, one per batch of corpus
citations. Copy this into the `Agent` tool call, filling in
`{SINCE_DATE}`, `{THROUGH_DATE}`, and `{CITATION_BATCH}` (the JSON array
`watcher/scan_batch.py` prepared). Same reasoning as
`verifier/prompt.md` and `tools/wave_agent_prompt.md` for keeping this
versioned rather than retyped from memory each run.

---

You are checking whether any source already cited in the Groundtruth
corpus — a static, no-backend, self-help legal document assembler whose
architectural rule is **"inform, never advise"** — has changed between
`{SINCE_DATE}` and `{THROUGH_DATE}`. You are not re-verifying whether the
citation was ever correct (that's `verifier/`'s job); you are checking
whether something that *was* correct has since moved: a statute amended,
a case limited or overruled, a regulation superseded.

## What you have
`{CITATION_BATCH}` is a JSON object with two arrays, drawn from
`index/citation_to_clauses.json`:
- `statuteCitations`: `{url, case, cite}` entries whose `url` is a
  statute/regulation publisher (leginfo, Cornell LII, uscode.house.gov,
  CFR, etc).
- `caseCitations`: `{url, case, cite}` entries whose `url` is a
  CourtListener opinion.

You do **not** need to look up which clause ids a citation affects —
that's `watcher/record_changes.py`'s job, matching your output's `url`
back against the index. Just report what changed, for which cited
source, with evidence.

## Statutes and regulations: Lawstronaut `horizon_scan`
For California changes, try `horizon_scan(iso="US-CA", since="{SINCE_DATE}")`
first; the tool's own documentation only confirms country-level ISO
codes (`"US"`, `"NL"`, ...), not state subdivisions, so if `"US-CA"`
errors or returns nothing, fall back to `iso="US"` and filter results
yourself to ones that are plainly California state law (by
`issuing_authority` or the document's own text) — note which path
actually worked, the first time this prompt is run for real, so later
runs don't have to rediscover it. Also run at least one federal scan
(`iso="US"`) for each batch, since the plan asks for "relevant federal"
changes too, not California alone — use `topic` to narrow it to
something related to the batch's subject matter if the unfiltered feed
is too broad to read through.

For each `horizon_scan` hit, decide whether it's actually about one of
`statuteCitations`' sources — matching on the code and section number
(e.g. "Civil Code § 1950.5"), not just a topic-word overlap — before
treating it as a real match. A hit that's merely in the same code
chapter as a batch citation is not itself a finding.

## Case law: CourtListener
For each `caseCitations` entry, look for a *later* opinion (filed between
`{SINCE_DATE}` and `{THROUGH_DATE}`) that cites, limits, distinguishes,
or overrules it. The CourtListener MCP tools' quota is usually already
exhausted — same constraint `verifier/prompt.md` documents — so prefer:
- `search(type="o", q="\"<case name>\" OR \"<cite>\"", filed_after="{SINCE_DATE}", filed_before="{THROUGH_DATE}")`
  to find recent opinions that mention the cited case or its reporter
  citation by name.
- For a hit, read enough of it (via `read_document`/`search_document`,
  or quota-free `curl` per `verifier/prompt.md`'s source paths) to tell
  whether it actually limits/distinguishes/overrules the cited case,
  versus citing it approvingly or in passing — only the former is a
  finding.
- `get_endpoint_schema(endpoint_id="opinions-cited")` /
  `call_endpoint` is the structured citing-relationship data if the
  keyword search above is too noisy; use it if you need it, and note
  whether it was actually useful for this prompt's next run.

## Evidence standard
**Every finding needs a direct quote** from the new source (the amended
statute's current text, or the later opinion's own limiting/overruling
language) plus the URL you fetched it from. "Something probably changed"
with no fetched quote is not a finding — keep checking the batch for the
next citation instead.

## What you must NOT do
- **Never edit `data/clauses.json` or `data/documents.json`.** This is a
  read-only scan. You are reporting that a clause may need review, never
  deciding what the new text should say.
- Never invent a hit, quote, or URL. If a source you need is unreachable
  (egress-blocked, paywalled, a tool error), say so as a `sourceAccess`
  change with `whatChanged: "unverifiable"` rather than guessing either
  way — same reasoning `verifier/prompt.md` uses for an unreachable
  source, so these don't get silently treated as "nothing changed."
- Don't report a hit just because something in the same code section or
  the same court changed — it has to be the *same* statute/regulation
  text or the *same* case being limited, not merely adjacent to one.

## Output format
Return **only** a JSON array, no prose outside the array. One object per
real finding — clean citations with nothing to report need no entry at
all (unlike `verifier/`'s per-clause report, a horizon scan has nothing
useful to say about a citation that didn't change):
```json
[
  {
    "url": "the exact url from statuteCitations/caseCitations this finding is about",
    "sourceType": "statute" | "case",
    "whatChanged": "one or two sentences, factual, no advice",
    "evidenceQuote": "the direct quote from the new source confirming it",
    "sourceChecked": "URL you actually fetched to confirm this",
    "discoveredAt": "{THROUGH_DATE}"
  }
]
```
A `whatChanged` of `"unverifiable"` means you couldn't confirm either
way (not that nothing changed) — `evidenceQuote` can be `"n/a"` in that
one case, but `sourceChecked` still names what you tried and failed to
reach.
