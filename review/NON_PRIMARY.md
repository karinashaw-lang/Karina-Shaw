# Non-primary-sourced clauses, ranked by clauses affected — Part B, Task B1

Run 2026-11-17. This is Part B's own index into the same underlying
fact `verifier/NON_PRIMARY_SOURCES.md` already covers in full narrative
detail (written 2026-11-10, numbers refreshed 2026-11-17 as part of
Part A's A1 task) — this file doesn't repeat that reasoning, it ranks
the same 571 mirror-citing authority clauses by how many clauses each
document cluster contributes, for Part B's cluster-by-cluster review
order (Section 8: Business Formation first).

**571 of 4,989 authority clauses (11.4%) carry at least one
`mirror`-class citation.** 0 carry a `secondary`-class citation — no
clause in the corpus cites anything below a mirror.

## Ranked by clauses affected

Recomputed fresh today directly from `data/clauses.json` (the
reproduction command at the bottom of this file gives the same
numbers) — Priority 1, the California-statute mirrors, all 96:

| Rank | Cluster / document prefix | Clauses | What it covers |
| --- | --- | --- | --- |
| 1 | `medsupp_*` | 13 | Medical support / health insurance assignment orders |
| 2 | `taxpro_*` | 12 | Estate tax proration |
| 3 | `saleconf_*` | 11 | Probate sale confirmation |
| 4 | `gcapres_*` | 9 | Government Claims Act presentment requirements |
| 5 | `taxdefsale_*` | 8 | Tax-defaulted property sale |
| 6 | `purpart_*` | 7 | Purported partner liability |
| 6 | `survclaim_*` | 7 | Survival of claims after a party's death |
| 6 | `smallclaims_*` | 7 | Small claims court — called out first by the handoff spec's own text, not because it's the largest cluster |
| 9 | `titleins_*` | 6 | Title insurance |
| 9 | `strikehire_*` | 6 | Hiring during a strike/lockout |
| 11 | `revbenst_*` | 5 | Retirement/revocable-trust beneficiary rights |
| 11 | `resptax_*` | 5 | Responsible-person tax liability |

All 96 cite `california.public.law` or `law.onecle.com` instead of
`leginfo.legislature.ca.gov` directly.

Priority 2 (federal-statute mirrors, `www.law.cornell.edu` only, no
California mirror involved) is not broken out by cluster here — at
475 clauses spread across many unrelated clusters, a by-cluster
ranking adds little the flat Priority 1/Priority 2 split in
`NON_PRIMARY_SOURCES.md` doesn't already say, and federal content is
explicitly lower priority than the California statutory law this
product's trust claim is actually about.

**Priority 1 (96 clauses, California-statute mirrors) stays the
correctness-critical group** — this is the law the product's core
trust claim is actually about. **Priority 2 (475 clauses, federal-
statute mirrors via Cornell LII) is real but lower-priority**: Cornell
LII is an established, generally reliable U.S. Code mirror, and this
product's launch wedge and Part B's own cluster order are both scoped
to California content first.

## What this file adds beyond `NON_PRIMARY_SOURCES.md`

Nothing new is claimed here — same 571 clauses, same two priority
groups, same reasoning. This file exists because Part B's cluster
review (B2-B5) needs a by-cluster view to know which clusters carry
the most Priority-1 weight going in; `NON_PRIMARY_SOURCES.md` is
organized by priority group, this one by cluster, for that purpose.

Re-derive the ranked table with:
```
python3 -c "
import json, re
from collections import defaultdict
clauses = json.load(open('data/clauses.json'))['clauses']
CA_MIRROR = {'california.public.law', 'law.onecle.com'}
def domain(u):
    m = re.match(r'https?://([^/]+)/?', u)
    return m.group(1) if m else u
p1 = [c['id'] for c in clauses if c.get('kind') == 'authority'
      and {domain(ct['url']) for ct in (c.get('citations') or [])
           if ct.get('sourceClass') == 'mirror'} & CA_MIRROR]
buckets = defaultdict(list)
for cid in p1:
    buckets[re.match(r'^[a-z]+', cid).group(0)].append(cid)
for prefix, ids in sorted(buckets.items(), key=lambda kv: -len(kv[1])):
    print(len(ids), prefix)
"
```
