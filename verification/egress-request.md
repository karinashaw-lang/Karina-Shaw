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

Measured at 2026-08-20T20:15:42.983Z by `npm run probe`. Reproduce with `npm run audit`.

## Impact while blocked

- 347 of 347 clauses sit below the release gate and cannot be drafted.
- `npm run verify` attempts every routable citation and upgrades nothing. Last run: 341 fetches, 341 HTTP 403.
- The product generates empty documents, which is the correct output but not a shippable one.

## Hosts, in priority order

| Host | Kind | Citations needing it | Covers | Current |
|---|---|---:|---|---|
| `www.law.cornell.edu` | mirror | 7 | tax, regulation, statute | http-403 |
| `www.irs.gov` | agency | 3 | tax | http-403 |
| `www.ecfr.gov` | publisher | 2 | regulation | http-403 |
| `uscode.house.gov` | publisher | 2 | statute | http-403 |
| `leginfo.legislature.ca.gov` | publisher | 1 | statute | http-403 |
| `law.justia.com` | mirror | 1 | statute | http-403 |
| `codes.findlaw.com` | mirror | 1 | statute | http-403 |

## Minimum viable subset

If the full list is not acceptable, the smallest set that unblocks meaningful progress is:

- `www.irs.gov` — agency, needed by 3 citations (tax)
- `www.ecfr.gov` — publisher, needed by 2 citations (regulation)
- `uscode.house.gov` — publisher, needed by 2 citations (statute)

One reachable primary source plus one reachable mirror is enough to move a clause to
`corroborated`. `primary-verified` additionally requires a named human reviewer and is
not unblocked by network access alone — that requirement is deliberate.

## What will not change if this is granted

- No clause reaches `primary-verified` without a named reviewer.
- The gate still refuses to draft anything below `corroborated`.
- `verify.mjs` still fails closed on a timeout, a redirect, a short body, or a 403.
  Its 21 unit tests assert exactly that; granting egress does not relax any of it.
