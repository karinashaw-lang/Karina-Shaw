# Egress allowlist request

## What is being asked for

Outbound HTTPS to the hosts below, so that `templates/tools/verify.mjs` can check the
corpus against its cited sources. Read-only GET requests to public statutory and
regulatory text. No credentials, no writes, no user data leaves the session.

## Why it is blocked

The agent proxy reports `connect_rejected` — *"gateway answered 403 to CONNECT (policy
denial or upstream failure)"* — for every host in this list. That is an organization
egress policy decision, not a misconfiguration: the CA bundle, trust store, and proxy
settings are all correct, and `github.com` reaches through the same path without error.

Measured at 2026-08-15T04:26:59.980Z by `npm run probe`. Reproduce with `npm run audit`.

## Impact while blocked

- 360 of 360 clauses sit below the release gate and cannot be drafted.
- `npm run verify` attempts every routable citation and upgrades nothing. Last run: 341 fetches, 341 HTTP 403.
- The product generates empty documents, which is the correct output but not a shippable one.

## Hosts, in priority order

| Host | Kind | Citations needing it | Covers | Current |
|---|---|---:|---|---|
| `law.justia.com` | statute-mirror | 91 | statute, regulation, case | http-403 |
| `codes.findlaw.com` | statute-mirror | 85 | statute | http-403 |
| `leginfo.legislature.ca.gov` | primary | 78 | statute, session-law | http-403 |
| `www.law.cornell.edu` | primary | 7 | tax, regulation, statute | http-403 |
| `library.municode.com` | ordinance-host | 6 | ordinance | http-403 |
| `codelibrary.amlegal.com` | ordinance-host | 6 | ordinance | http-403 |
| `govt.westlaw.com` | primary | 5 | regulation | http-403 |
| `www.dir.ca.gov` | agency | 4 | wage-order | http-403 |
| `www.irs.gov` | agency | 3 | tax | http-403 |
| `www.ecfr.gov` | primary | 2 | regulation | http-403 |
| `uscode.house.gov` | primary | 2 | statute | http-403 |
| `casetext.com` | primary | 1 | case | http-403 |
| `legiscan.com` | statute-mirror | 1 | session-law | http-403 |

## Minimum viable subset

If the full list is not acceptable, the smallest set that unblocks meaningful progress is:

- `leginfo.legislature.ca.gov` — primary, needed by 78 citations (statute, session-law)
- `www.law.cornell.edu` — primary, needed by 7 citations (tax, regulation, statute)
- `govt.westlaw.com` — primary, needed by 5 citations (regulation)

One reachable primary source plus one reachable mirror is enough to move a clause to
`corroborated`. `primary-verified` additionally requires a named human reviewer and is
not unblocked by network access alone — that requirement is deliberate.

## What will not change if this is granted

- No clause reaches `primary-verified` without a named reviewer.
- The gate still refuses to draft anything below `corroborated`.
- `verify.mjs` still fails closed on a timeout, a redirect, a short body, or a 403.
  Its 21 unit tests assert exactly that; granting egress does not relax any of it.
