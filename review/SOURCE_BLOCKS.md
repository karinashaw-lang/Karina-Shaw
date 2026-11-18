# Source blocks for owner manual check — Part B, Task B1

Checked live 2026-11-17 and updated 2026-11-18 (adding `www.ecfr.gov`,
found blocked while running the actual citation recheck — see
`review/CITATION_RECHECK_REPORT.md`), from this sandbox, via both
`curl` and `WebFetch`, same result either way. Every one of the
corpus's 29 cited domains was tested; 25 are reachable, 4 are not.
This file lists exactly the 4 that need the owner's own network, or a
different session with different access, to resolve — each with the
exact URL and the exact question that's blocked on it.

## 1. `leginfo.legislature.ca.gov` — blocked (HTTP 403)

**The single most important source this product depends on.** Every
primary California statute citation in the corpus (7,281 of 11,688
citations, 65% of all citations) points here. This sandbox has never
been able to reach it, across every prior session segment that
checked.

- **Exact URL tested:** `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CCP&sectionNum=116.220`
- **Result:** HTTP 403 Forbidden, via both `curl` and `WebFetch`.
- **Question for the owner:** can you (or a session running from your
  own network, or Claude Code's desktop/Remote-Control mode on your
  own machine) fetch this URL directly? If so, the 96 Priority-1
  clauses in `review/NON_PRIMARY.md` could be re-verified against the
  real primary source instead of staying at the `cited` level
  indefinitely. If leginfo blocks everyone the same way (a geographic
  or bot-detection block, not something specific to this sandbox),
  that's useful to know too — it would mean this product's own
  "Verified" claim for California statutes depends on a source most
  automated tooling can't reach, which is worth knowing regardless of
  who does the re-verification.

## 2. `california.public.law` — blocked (HTTP 403)

The mirror site 23 of the 96 Priority-1 clauses currently cite instead
of leginfo directly. Also blocked, so it's not a usable fallback path
either.

- **Exact URL tested:** `https://california.public.law/`
- **Result:** HTTP 403 Forbidden.
- **Question for the owner:** same as above — can this be reached
  from outside this sandbox? If leginfo itself becomes reachable,
  this mirror becomes moot for these 40 clauses (they'd re-cite
  leginfo directly instead); it only matters if leginfo stays blocked
  and this is the next-best option to at least confirm the mirror's
  own text is current.

## 3. `law.onecle.com` — connection does not complete (not a clean 403)

73 of the 96 Priority-1 clauses cite this mirror — more than any
other single source in this group, including leginfo-direct citations
elsewhere in the corpus. Unlike the two sources above, this one
doesn't return an explicit 403 — the HTTPS connection itself never
finishes (the proxy tunnel opens, but the TLS handshake past it
doesn't complete, confirmed with `curl -v`). This sandbox cannot tell
from here whether the site is actually down, or whether it's being
blocked in a way that doesn't announce itself as cleanly as the two
403s above.

- **Exact URL tested:** `https://law.onecle.com/california/taxation/6829.html`
  (one of the 56 real citations, not a synthetic test URL)
- **Result:** proxy `CONNECT` tunnel succeeds, TLS handshake does not
  complete, request times out.
- **Question for the owner:** is `law.onecle.com` still a live site at
  all from a normal browser? If it's actually gone, every one of the
  73 clauses citing it needs a different source entirely (ideally
  leginfo directly, once reachable, or another working mirror), not
  just a reachability retry — a cited link that 404s or times out for
  a real user reading the document is worse than the "not yet
  independently confirmed" caveat the `cited` level already shows.

## 4. `www.ecfr.gov` — blocked (redirects to a bot-wall this sandbox's own proxy refuses)

Added 2026-11-18. Every real eCFR citation URL — including the exact
path an earlier session segment reported as working, re-tested here
and found no longer working — 302-redirects to
`https://unblock.federalregister.gov/`, a bot-verification challenge
page, and this sandbox's own egress proxy refuses that specific host
outright ("the host is not allowed for this session," confirmed via
the proxy's own status endpoint). Per this environment's own
documentation, a policy refusal like this is reported, not retried or
routed around.

- **Exact URL tested:** `https://www.ecfr.gov/current/title-26/chapter-I/subchapter-A/part-301/section-301.7701-3`
  (the same path a prior citation upgrade used)
- **Result:** HTTP 302 to `unblock.federalregister.gov`, then
  `connect_rejected` by this sandbox's proxy. Confirmed via both
  `curl` and `WebFetch`.
- **Question for the owner:** is eCFR reachable from your own network
  without hitting this challenge page? If eCFR's bot-detection has
  simply gotten stricter since it last worked here, that's useful to
  know on its own — it means this corpus's federal-regulation
  citations need the same kind of manual-check path leginfo already
  does, not a one-time fix.

## The real scale of this, in citations rather than clauses

The clause counts above (96 Priority-1 clauses) understate the actual
blockage, because `leginfo.legislature.ca.gov` alone — the primary
source for California statutes, already `verified`-level, not part of
the mirror-citing group at all — carries **7,281 of the corpus's
11,688 citations (62%)**. Counting all four blocked domains together:

| | Citations | % of all 11,688 |
| --- | --- | --- |
| On a blocked domain (leginfo, california.public.law, law.onecle.com, www.ecfr.gov) | 7,547 | 64.6% |
| Reachable from this sandbox today | 4,141 | 35.4% |

**This means B1's "re-check every citation URL and quote against the
live text" is only directly runnable, from this sandbox, for about
35% of all citations** — not nearly all of them. The other 65%
includes most of the corpus's already-`verified` California statute
citations, not just the 96 mirror-citing ones this file's first three
sections cover. Re-checking those needs the same resolution this file
already asks for (owner network access, or a session with different
access), just at a much larger scale than the mirror-clause count
alone suggested. `REVIEW_BASELINE.md`'s WS1/B1 cost estimate has been
updated to match.

**The reachable 35% has actually been run, not just estimated** — see
`review/CITATION_RECHECK_REPORT.md` for the full result: 1,352 exact
matches, 49 PDF-extraction-artifact matches, 18 individually reviewed
(2 real findings logged), and a confirmed, separate dead-link pattern
on `uscode.house.gov` (53 unique URLs, 194 citations, a genuinely
broken link format on that site — not a sandbox block) that needs its
own fix through the normal patch process.

## What this does NOT block

Every other domain this corpus cites — `www.courtlistener.com` (via
the CourtListener MCP tool, not a raw fetch, which also returns 403),
`www.law.cornell.edu`, `www.dir.ca.gov`, `uscode.house.gov` (reachable,
though see the dead-link finding above), `courts.ca.gov` (and
`www.courts.ca.gov`), `www.supremecourt.gov`, `storage.courtlistener.com`,
`cppa.ca.gov`, `www.govinfo.gov` (and the bare `govinfo.gov`),
`edd.ca.gov`, `selfhelp.courts.ca.gov`, `oag.ca.gov`, `cuiab.ca.gov`,
`www.irs.gov`, `www.sos.ca.gov` (and `bpd.cdn.sos.ca.gov`'s actual
cited PDF path, confirmed separately from its blocked bare root),
`www.ftb.ca.gov`, `webapps.dol.gov`, `bhgs.dca.ca.gov`,
`www.leginfo.ca.gov`, `www.nysenate.gov`, `www.dol.gov`, and
`dir.ca.gov` — are all reachable from this sandbox today, covering
the 4,141 citations in the table above.
