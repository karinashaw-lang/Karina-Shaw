# Opening leg 1: reaching the primary sources

Nothing in this repo can reach a statute. Every publisher, agency and mirror host returns
403 at the egress proxy — measured by `npm run probe`, re-measured 2026-08-18, unchanged.
`WebFetch` fails the same way, on every host including `courtlistener.com`. The block is not
aimed at legal sites; the environment's network access level is **Trusted**, which allows
package registries and GitHub and nothing else.

MCP connectors do **not** go through that proxy. That is the whole reason CourtListener works
while fetching the identical page directly does not. It is also why there are two independent
fixes below rather than one.

## Fix 1 — raise the environment's network access (the real fix)

This is what completes leg 1, because it reaches `leginfo.legislature.ca.gov` — the Legislative
Counsel's official publication of the California codes, and the only source that is
authoritative in the strict sense. If every other site disagreed with leginfo, leginfo would
still be the law.

1. Go to claude.ai/code.
2. In the row above the message box, select the cloud icon showing the current environment's
   name. There is no settings page or direct URL for it.
3. Hover the environment and select the settings icon on the right.
4. Set **Network access** to **Custom**.
5. Paste the contents of `verification/egress-allowlist.txt` into **Allowed domains**,
   one per line.
6. Tick **Also include default list of common package managers** — without it, npm and the
   GitHub tooling stop working and the build breaks.
7. Save, then start a new session. Running sessions keep the network they started with.

Verify it worked by running `npm run probe`. It should report reachable publisher hosts
instead of 17 refusals.

**Full** also works and is less fiddly, but Custom is worth the extra minute: the allowlist is
a record of which sources this project is entitled to rely on, and `npm run probe` checks the
list rather than the whole internet.

## Fix 2 — add a legal MCP connector (works today, no policy change)

Because connectors bypass the proxy, this needs no admin involvement.

In claude.ai connector settings, the candidates are:

- **Lawstronaut** — "52+ million verified legal records, sourced directly from official
  authorities", with tools for jurisdictions, law types and authority types. The only one in
  the directory that looks like it serves statutes rather than only case law. Best candidate,
  untested.
- **CoCounsel Legal** (Thomson Reuters) — authoritative underlying data, but its tools return
  research *reports*. This project needs verbatim statutory text, so it may not fit even though
  the data behind it is excellent.
- Midpage and Descrybe are case-law only and would duplicate CourtListener.

A third-party database is a republisher, so under `templates/tools/sources.mjs` it is `mirror`
tier. The two-primary rule requires at least one `publisher` source for a statutory claim, so a
connector alone is a large improvement over nothing but does not reach the top of the ladder.
Only Fix 1 does.

## Doing both

Fix 2 unblocks work immediately. Fix 1 completes the standard. Together they are exactly what
the two-primary rule asks for: the sovereign's own text, plus an independent second source that
was published separately and can disagree.
