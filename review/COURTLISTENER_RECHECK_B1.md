# Citation recheck report — Part B, Task B1 (second half: CourtListener)

Run 2026-11-18, branch `claude/new-session-palh5c`. Covers the
`www.courtlistener.com`-cited half of B1 that
`review/CITATION_RECHECK_REPORT.md` explicitly left for the dedicated
CourtListener MCP tool. This file reconciles three things found or
built this session: a pre-existing, undocumented prior effort already
committed to the repo; 7 parallel background agents' fresh work; and
the hard account-wide API quota that cut this pass short of the full
~496-opinion sweep.

## What already existed, undocumented: `tools/courtlistener_recheck_results.jsonl`

This file (1,656 lines) was already committed to the repo — in commit
`147d916`, "CA Wedge Plan Step 22," a message with no mention of
CourtListener — with no script in git history that produced it and no
`DECISIONS.md` entry. It covers **941 of the 949 clauses currently
citing `courtlistener.com` (99.2%)**, across two record shapes (an
older per-clause-citation shape and a newer per-opinion summary
shape). Status counts: **1,589 PASS, 57 MISMATCH, 10 FIXED**.

Reading the 10 FIXED entries confirms this was real, careful work, not
noise: two of them (`opinion_id` 4474533, Alvarado v. Dart Container,
and 4620972, In re Marriage of George & Deamon) were already fixed for
**the exact same cluster_id/opinion_id namespace bug** this session's
new batch work independently rediscovered (below) — whoever ran this
before had already found and worked around it on some opinions.
Others are genuine, specific defects: a double-hyphen vs. real em-dash
mismatch (Sciarratta), an appended self-authored sentence not in the
court's text (Split Rail Fence), a misquoted citation and a missing
clause (In re Marriage of Benson / section 852), a wrong citation
(Salas v. Sierra Chemical), and similar — each with a one-line note
naming the specific defect and fix.

**The 57 MISMATCH entries have no root-cause note** — just the stored
quote and a bare `MISMATCH` status, unlike this session's own
`tools/citation_recheck.py` (which always records *why*). They are
listed in full in `review/COURTLISTENER_OLD_MISMATCHES.md`
(unchanged from this file's own records) for whoever re-runs this with
quota: several read as likely the same kind of cosmetic
text-extraction artifact `CITATION_RECHECK_REPORT.md` catalogued for
the non-CourtListener domains (smart quotes, ellipsis-joined quotes,
star-pagination markers, italics markup stripped to brackets), but
none were re-fetched this session to confirm that, and none should be
assumed clean without doing so. They are **not** being treated as new
findings — they're flagged as open, unverified-this-session items.

**The 8 clauses this file doesn't cover at all**, confirmed by
diffing it against the current `data/clauses.json`: `cadoingbiz_swart_limits`,
`fljsa_section_2122_duress_and_mental_incapacity`,
`fljsa_section_2122f_disclosure_noncompliance_georgiou_binette`,
`mandatoryarb_current_status`, `spbiz_brooks_van_camp_application`,
`txm_section_852_gift_exception_commingling_and_1985_cutoff`,
`txm_valli_form_of_title_presumption_yields`,
`txm_valli_third_party_purchases_subject_to_transmutation_statutes`.
None of these appear in this session's new batch work either (below)
— still genuinely uncovered.

## What this session added: 7 parallel background agents, then a hard quota wall

Given the scale (~496 unique opinions, 2,536 citations) and the
CourtListener MCP tool's per-call cost, this session split the
citing-clause set into 7 batches and ran each as a background agent
calling `read_document`/`search_document` directly. This surfaced two
real problems, in order:

1. **A cluster_id/opinion_id namespace bug**, independently
   rediscovered (the committed file's own FIXED entries show its
   author hit the same thing on a smaller scale). Every CourtListener
   citation URL in this corpus has the form
   `/opinion/<N>/case-name-slug/`, and `<N>` is that opinion's
   **cluster_id**, not its `opinion_id` — two separate ID spaces that
   coincidentally collide often enough to be dangerous. The batch
   agents' input files mislabeled `<N>` as `opinion_id` and called
   `read_document(opinion_id=N)` directly. When `N` happens to also be
   some *other* opinion's real `opinion_id` — which it did 19 times —
   the tool returns that unrelated opinion instead, and the agent
   correctly reports "quote not found" because the quote is genuinely
   absent from a genuinely wrong case. This was caught before being
   written up as a real finding: one instance (`yvvoid_post_yhudai`,
   `N=4242947`) was personally verified by calling the tool both ways
   — `opinion_id=4242947` returns *Judicial Watch, Inc. v. CIA* (a
   2018 FOIA case with zero connection to the quote); `cluster_id=4242947`
   resolves correctly to *Yhudai v. Impac Funding Corp.* (opinion_id
   4020208). All 7 agents were corrected to use `cluster_id=` — but by
   the time the correction landed, most of the mismatched records
   below had already been written under the wrong parameter.

2. **The account's real CourtListener quota is 5/min AND 50/hour AND
   125/day, shared across every concurrent call** (confirmed via the
   free `get_api_usage` tool). Running 7 agents in parallel against
   this shared budget did not give 7x throughput — it exhausted the
   hourly and most of the daily budget while completing only 405 of
   the needed ~2,536 citation checks, and competing simultaneously
   made individual agents' own retries worse, not better. All 7 were
   stopped (`TaskStop`) once this was understood, rather than letting
   them keep spending the same scarce, shared pool.

### Results from the 405 citation-checks completed before the quota wall

Raw records: `review/courtlistener_recheck_batch_results.jsonl`.

| Verdict | Count | What it means |
| --- | --- | --- |
| `exact` | 313 | Quote confirmed verbatim in the correct opinion. |
| `cosmetic` | 21 | Quote confirmed in the correct opinion; only a footnote marker, page-break marker, or punctuation/spacing artifact differs — same taxonomy as `CITATION_RECHECK_REPORT.md`'s non-CourtListener findings. Spot-checked by hand; every one is a correctly-identified case with a trivial, confirmed-cosmetic difference, not a quote failure. |
| `discrepancy` | 71 | **100% explained by bug #1 above, not real content problems.** Every single one of the 71 notes says, in substance, "this opinion_id resolves to an unrelated case, not the one the clause cites" — 19 unique wrong IDs across 71 clause-citations (one ID, 5811374, alone accounts for 19 of them, all under the `succliab_*`/`preorgcontract_*` clause family citing "Cleveland v. Johnson," which 5811374-as-opinion_id actually resolves to an unrelated 1970s New York car-accident case). None of these 71 were written to `verifier/findings.jsonl` — doing so would have logged 71 false "major" findings against clauses whose real cited opinions were never actually re-fetched. |

**313 + 21 = 334 citations gained a real, trustworthy new confirmation**
this session (covering 172 unique clauses, of which 51 clauses were
not in the pre-existing file's coverage at all — genuinely new
ground, not just double-checking).

The 19 bugged opinion numbers, with the unique clause count each
affects, are in `review/courtlistener_recheck_batch_results.jsonl`
(verdict `discrepancy`) and need re-checking with `cluster_id=`
instead of `opinion_id=` once quota allows — this is a **parameter
fix to redo a lookup**, not a corpus defect, and nothing should be
written to `findings.jsonl` for any of them without that re-check.

## Net coverage after this session

| | Clauses |
| --- | --- |
| Covered by the pre-existing file (PASS, with 57 MISMATCH and 10 FIXED folded in) | 941 of 949 |
| Of those, also independently re-confirmed this session (exact/cosmetic) | 121 |
| New clauses covered this session that the old file missed | 51 |
| Still genuinely uncovered by either effort | 8 (listed above) |
| Flagged for mandatory re-check once quota allows (bug #1, not findings) | 19 opinion IDs / 71 clause-citations |
| Flagged for re-check, root cause unconfirmed (old file's bare MISMATCH) | 57 clause-citations |

**0 new findings written to `verifier/findings.jsonl` from this half
of B1.** Every discrepancy found had an identified, non-content root
cause (the parameter bug) rather than a confirmed quote failure; the
old file's 57 MISMATCH entries are carried forward as open, not
resolved one way or the other.

## What's left, in priority order, once quota resets

1. Re-run the 19 bugged opinion lookups with `cluster_id=` (not
   `opinion_id=`) — cheapest, highest-confidence win, likely clears
   most or all of the 71 false discrepancies.
2. Re-check the pre-existing file's 57 open MISMATCH entries with the
   normalization logic `tools/citation_recheck.py` already built for
   the non-CourtListener half (ellipsis splicing, footnote/star-page
   markers, smart quotes) — most look cosmetic on inspection but none
   were confirmed this session.
3. Cover the 8 still-uncovered clauses (includes the one docket-URL
   citation and the Giraldin citator-permalink-format citations noted
   in earlier scratch work).
4. Only after 1–3: write any real findings to `verifier/findings.jsonl`
   for whatever turns out, on actual re-fetch, to be a genuine quote
   or dead-link problem — not before.

## Reproducing the quota check

```
# via the CourtListener MCP tool's get_api_usage — free, does not spend quota
```
