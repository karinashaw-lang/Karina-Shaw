# Wave-expansion agent prompt template

The canonical prompt for a corpus-expansion worker, one per category per wave. Copy this into the `Agent` tool call for each of the four categories in a wave, filling in `{CATEGORY}` and `{PRIOR_TOTALS}`. Keeping this versioned instead of retyped from memory each wave is what stopped `validate_corpus.py`'s checklist from drifting; the same discipline applies here.

---

You are adding ONE new verified document to the Groundtruth corpus in this git worktree. Category: **{CATEGORY}**. California law (federal law where it governs).

## Housekeeping first
1. **Check your base.** Run `git log --oneline -1` and `ls`. If there is no `data/` directory, reset onto the integration branch: `git fetch origin claude/new-session-palh5c && git reset --hard origin/claude/new-session-palh5c`. Expect roughly {PRIOR_TOTALS} in `data/`, and a `tools/` directory.
2. **All scratch work stays inside your own worktree.** Never write to the shared session scratchpad — it is one directory that every concurrent agent this wave can see, filenames like `build.py` or `check.py` collide across agents, and one agent has already had its file overwritten mid-run by another's. Your worktree (the directory you were launched into) is not shared with any other agent; put temporary scripts and downloads there, e.g. under `./.scratch/`. This is a structural guarantee, not a naming convention — there is no directory name to pick or get wrong.

## What Groundtruth is
A static, no-backend, self-help legal document assembler. Its architectural rule is **"inform, never advise"**: every clause states what the law says and what the authorities hold. No clause tells the reader what to do about their own situation, recommends a course of action, or predicts an outcome. Write in the register of a bar-journal survey, not a lawyer's memo to a client.

## Step 1 — Pick a genuinely uncovered topic
**Prefer a structural gap over a lexical one.** The strongest documents each wave have come from asking what question the category systematically never poses — not from a keyword nobody happened to type. Read the **gap notes of adjacent existing documents** for what they admit leaving out (an existing gap note recording the neighbouring sections it left behind has repeatedly become the next wave's document), and check the headings of statutes or code articles you already cite for the half nobody took.

**Then grep to confirm, and never trust the counts — inspect the hits.** Numeric greps are the most treacherous: past waves have found a plain section-number grep matching entirely unrelated codes, docket strings inside verification prose, `checkedDate` values, and CourtListener opinion ids. A hit inside a *gap note recording a failed fetch or an out-of-scope topic* is a recorded negative, not coverage. **Report your grep counts and say which hits you inspected and discounted.**

## Step 2 — Verify every source
1. Fetch from **two genuinely different publishers** where one exists.
   - **Statutes:** `leginfo.legislature.ca.gov` and **`law.onecle.com`** are genuinely independent — use that pair. `california.public.law` prints a "Source:" line naming leginfo and is **not** independent; it has been caught altering text (dropping a plural while auto-linking a cross-reference, inserting spaces before punctuation), so treat it as a third copy at best and say so. onecle is a 2017 snapshot: for sections amended since, corroborate against the Legislative Counsel's **chaptered bill text** and disclose that as *the same publisher in a different document*.
   - **US Code:** `uscode.house.gov` (OLRC) and Cornell LII are independent.
   - **Case law:** a second free publisher is usually unreachable; a **courts.ca.gov, govinfo, or supremecourt.gov slip PDF** is a genuine second publication where one exists — fetch it when you can, and extract with **both pypdf and pdfminer.six**. Otherwise say plainly in every affected gap that the quotes rest on one publisher. Two URL paths to one publisher are one source, and CourtListener's rendered HTML and its own search index have been caught disagreeing, so a phrase-index hit is a second *path*, not a second publisher.
2. Every `citations[].quote` must be a **verbatim substring of both fetches**. Never reconstructed from memory.
3. Normalize only benign artifacts (nbsp, line-wrap hyphenation, ligatures) and **say so in the gap**.
4. **Disclose genuine defects rather than silently correcting them.** Confirm a defect is in the record and not your extraction with an exact-phrase index query, and **never assume the official source is correct** — official and unofficial sources have each been caught wrong, sometimes on the same case in opposite directions.
5. Check pin cites against star pagination. Give **no pin cite** — saying why in the `cite` field — where an opinion is slip-only, where footnotes are relocated past the last star marker, where a rendering interleaves markers from several reporters, or where a quote precedes the first marker. **A reporter citation can resolve to the wrong cluster** (one resolved to a concurrence-only cluster, missing the majority) — fetch and diff both when a `/c/` redirect returns HTTP 300.
6. Quote out-of-state or intermediate-court authority only as a controlling opinion reproduces it, and say so.
7. Record negative results: no case law construing a section, questions expressly reserved, amendments postdating the opinions you quote. **A query that errors or throttles is not a zero** — re-run it shorter and record that you did.

## Quota-free source paths
The CourtListener **MCP tools** share a small quota across parallel agents and are usually exhausted. Use quota-free HTTP via Bash `curl`:
- Search JSON: `https://www.courtlistener.com/api/rest/v4/search/?type=o&q=<query>`
- Opinion HTML: empty 202 without a Referer. Send `Referer: https://www.courtlistener.com/` plus a real browser UA and Accept header; retry 202s in-turn.
- Citation redirect: `https://www.courtlistener.com/c/<Reporter>/<vol>/<page>/`
- Phrase check: `q=cluster_id:<id> AND "<exact phrase>"` — count 1 confirms presence.
- leginfo needs a JSF cookie seeded from `/faces/codes.xhtml`, and **one session does not survive a long run** — re-seed if bodies come back empty.
- On 429 or proxy reset, ride it out with an **in-turn** `sleep 300` loop.
- **Egress-blocked:** Justia, FindLaw, Google Scholar, case.law, casetext, leagle, openjurist, anylaw, casemine, vlex, scocal, archive.org, law.resource.org, ca9.uscourts.gov.

## Liveness rule
Do all waiting inside foreground Bash calls. **Never park work on a background task and end your turn** — nothing re-triggers you and the research is lost. Commit as soon as your clauses are verified; push right after.

## Step 3 — Write the clauses
Append to `data/clauses.json` (`{"clauses":[...]}`) and `data/documents.json` (bare array). Exact key sets, in this order:

Authority: `{id, title, kind:"authority", status:"verified", checkedDate, body, gap, citations:[{case, cite, url, quote}]}`
Drafting: `{id, title, kind:"drafting", body}`
Document: `{id, title, description, categories, clauseOrder, fields}`

Every authority clause needs a **non-empty** `gap`. Clause ids share a short distinctive prefix. `categories` exactly `["{CATEGORY}"]`. Every `{{field}}` used in any body or gap must be declared in the document's `fields`. Aim for 10-15 clauses. Document title unique corpus-wide.

**Append only — never modify or reorder an existing clause or document.** Merges resolve these files by union, which silently reverts edits to entries that already existed.

Write `verification/<document-id-slug>.md` recording, per citation, both fetch paths, the comparison result, and everything you disclosed.

## Step 4 — Validate before committing
Run `python3 tools/validate_corpus.py`. Then **re-read every quote out of the written `data/clauses.json`** and confirm each is still a verbatim substring of your fetched source. Report pass/fail. **Count your authority/drafting split from the written file, not from memory.**

## Step 5 — Commit and push
Commit to your own worktree branch ONLY. **Never push to `claude/new-session-palh5c`.** `git push -u origin <your-worktree-branch>`; retry on network failure with backoff (2s, 4s, 8s, 16s). Message: `Add <Full Document Title> (<key citations>) info sheet ({CATEGORY})`, ending with exactly these two trailer lines and no other attribution:
```
Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_018z5xBSbLrGMQxxqsTZWLVQ
```
Never put a model identifier anywhere else in the repository.

## Final message
Report: the topic and why it was uncovered (grep counts, discounted false positives, what made the gap structural), document id and title, clause split and citation count **read from the written file**, verification paths per source and whether the publishers were genuinely independent, anything you disclosed rather than fixed, validation output, branch and commit hash.
