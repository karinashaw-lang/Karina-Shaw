# What applying the classification would change

Computed by `templates/tools/gate-preview.mjs` against an in-memory overlay, using `gateFor` —
the same function the engine calls. Nothing was written to the corpus.

## The headline: nothing ships either way

| | Clears the gate | Blocked |
|---|---|---|
| As the corpus stands | 0 | 360 |
| With the proposals applied | 0 | 360 |

Applying a classification review to all 360 clauses moves **0** clauses
into usable. That is the number to hold onto before reading anything else here, because 360
judgement calls feel like progress and this one produces no releasable output at all.

## What it does change: the blocker stops being bookkeeping

Before:

- **360** — the assertsLaw classification is heuristic and unreviewed — which ladder this clause belongs on is not yet established

After:

- **193** — no drafting review recorded
- **167** — asserts law at "…" — the gate is "…"

One reason becomes two, and both of the new ones are real. The old reason was the corpus not
knowing which question to ask about a clause. It masked everything behind it: a clause with no
sources and a clause needing a lawyer were reported identically, so neither pile could be
started, sized, or handed to anyone.

## The two piles, which need different people

### 167 clauses assert law — they need sources

| | |
|---|---|
| Gate | `primary-verified` |
| Meet the two-primary standard | **0** |
| Have no sources at all | 56 |
| Have at least one source | 111 |
| By severity | 101 critical, 58 recommended, 8 optional |

Current verification labels: `single-source` 89, `multi-cited` 22, `unsourced` 56.

None of these labels was earned against a primary source. This pile cannot move at all while
egress to the publisher hosts is refused — the blocker is measured, not assumed, and it is not
a research problem.

### 193 clauses assert no law — they need a named lawyer

| | |
|---|---|
| Gate | `counsel-reviewed` |
| Reviews recorded so far | 0 |
| By severity | 81 critical, 83 recommended, 29 optional |

By document:

- `msa` — 51
- `governance` — 41
- `nda` — 13
- `sow` — 13
- `employment-agreement` — 13
- `charter` — 11
- `dpa` — 11
- `consent` — 10
- `ip-assignment` — 7
- `vesting` — 6
- `contractor-agreement` — 6
- `employment` — 4
- `handbook` — 3
- `schedules` — 3
- `foreign-qualification` — 1

This pile is not blocked by egress. It is blocked only on a person, and `npm run packet`
already produces the packet they would work from. It is the half of the corpus that could
start moving today.

## Why that split is the point

The two ladders are blind to each other by design: adding citations to a drafting clause does
nothing, and a lawyer reading an authority clause does not make it verified. Until every clause
said which ladder it was on, that design could not do any work — everything failed at the same
place for the same uninformative reason.

The proposals do not make the corpus more releasable. They make the remaining work divisible.
