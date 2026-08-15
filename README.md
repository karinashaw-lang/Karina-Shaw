# DRAFT — AI Template & Content Engine

A working prototype of the deterministic layer described in the DRAFT AI Engine Spec,
plus the template corpus it runs on and the tooling that decides whether any of that
corpus is fit to use.

**Current state: the engine works, and it drafts nothing.** 0 of 360 clauses clear the
release gate, so every generated document comes out empty. That is the correct output
for a corpus in this state, and making it visible rather than burying it in a disclaimer
is the point of the gate.

```
npm run audit        # everything below, reproducible
```

## What is here

| Path | |
|---|---|
| `draft-ai-engine.html` | The prototype. Self-contained, opens from `file://`, makes no model API call. Compiled output — do not edit by hand. |
| `templates/` | The corpus and its tooling. Everything the engine knows lives here as JSON. [Full documentation](templates/README.md). |
| `verification/` | Generated reports: review queue, findings, cost model, egress request. |

## What is verified, and what is not

**Verified by execution.** 12,120 answer sets assemble without error; no unresolved field
tokens; no broken cross-references; all seven consistency checks pass in every package;
same-titled clause variants proved mutually exclusive per configuration; the release gate
rejects all three self-certification attempts; the verification pipeline fails closed
across 137 test assertions in seven suites; the prototype matches `templates/`.

**Not verified.** Every statement about what the law requires. 360 of 360 clauses.

## What the measurements say

Nine clauses were checked against sources, spanning California employment, California
entity, New York entity, and federal tax.

- **8 of 9 confirmed defective.** At 95% confidence, at least 57% of the corpus is
  defective — roughly 206 of 360, point estimate near 320.
- **The dominant failure is omission, not invention.** The clauses get the headline
  number right and drop the qualifier that decides whether it applies. That is the
  failure mode least likely to be caught by reading a clause on its own, because a
  correct number missing its qualifier reads as complete.
- **169 clauses assert what the law requires; 191 state a negotiated term.** They fail
  differently and are vetted by different people. The commercial package is 14–26% legal
  assertion and can be cleared without pulling a statute; the California compliance
  documents are 85–88% and cannot.
- **116 clauses carry a detector flag** from patterns derived from the sample. The
  detectors independently rediscovered the specific defects the search pass found.

`verification/cost.md` estimates ~133 hours of qualified review from those inputs, and
labels every assumed rate rather than burying it.

## Why nothing ships

Verification is blocked by an organization egress policy, not by anything in this repo.
All 14 legal source hosts return `connect_rejected` — *"gateway answered 403 to CONNECT"*
— while `github.com` reaches through the same path. `npm run egress` generates the
allowlist request, ranked by how many citations depend on each host.

Two things unblock it, and they are independent:

1. **Egress to one primary source host.** Moves clauses to `corroborated` mechanically.
2. **A source text supplied directly.** `npm run ingest -- --file lab-925.txt --citation
   "Cal. Lab. Code §925" --by "..." --from "Westlaw"`. Stored verbatim, hashed, attested.

Neither reaches `primary-verified`, which requires a named human reviewer by design.

## Nothing from memory

The 360 clauses were written from model memory. Sampling put the defect rate at 89%, and
the dominant failure is omission — the qualifier that decides whether a rule applies is
exactly what memory drops. No review fixes that at the source, because the next clause
written the same way fails the same way.

`npm run provenance` makes the rule structural. Every clause body is hashed into
`templates/sources/authored.json`. A body that is new or changed may only enter the corpus
if it is **pinned to an attested source text** — otherwise the build fails:

```
2 clause(s) authored without a source:
  charter_name      modified   — body changed with no pin, the change can only have come from memory
  charter_invented  unrecorded — new clause with no pin, it can only have come from memory
```

The existing 360 are sealed as `memory-legacy`: grandfathered so the repo builds,
permanently marked so nobody mistakes them for sourced, and blocked from shipping by the
release gate regardless. Re-seeding is refused — relabelling modified clauses as legacy is
precisely the bypass the file exists to prevent.

## Can the source texts be obtained here?

No, and this was tested rather than assumed:

| Route | Result |
|---|---|
| leginfo, Cornell, eCFR, Justia, FindLaw, govinfo, Congress, Caselaw Access Project + 6 more | HTTP 403 at the egress proxy |
| GitHub repository search | blocked — this session is scoped to one repository |
| `raw.githubusercontent.com` | reachable, but the legal repos are *parsers* that download from the blocked hosts |
| npm and PyPI | reachable, but every legal package is a *client* for a blocked API |

The tooling exists in abundance; the text lives on exactly the hosts that are denied.
`npm run egress` generates the allowlist request. Failing that, supply a text directly and
`npm run ingest` will store, hash, and attest it.

## Getting texts in: what is actually needed

No new connector is required. **Google Drive is already attached and tested** — it is the
delivery path. Save a provision as plain text, drop it in Drive, and `npm run ingest`
stores the bytes verbatim, hashes them, records who supplied them and from where, and
`npm run pin` ties each clause assertion to an exact quoted span.

`npm run shopping` ranks what to obtain first. 109 distinct provisions are cited by the
169 clauses that assert law; the drafting clauses need none of them. The ranking weights
each provision by how many clauses depend on it, their severity, whether they are drafted
automatically, and whether they already carry a confirmed defect — so the first few
documents buy the most verification.

The connectors were tested, not assumed:

| Connector | State | Use here |
|---|---|---|
| Google Drive | live | **the delivery path** — read a supplied text and ingest it |
| CourtListener | live, rate-limited | case law only; covers 1 of 130+ citations, which are overwhelmingly statutes |

## The honest summary

The clause text is illustrative content written by a model and is **not legal advice, not
measured data, and not fit for use.** An 89% sampled defect rate is a verdict on the
drafting method rather than on any individual draft: text written from model memory omits
qualifiers, and reviewing 169 such clauses costs more than composing them from attested
sources would. The pinning workflow in `templates/tools/pin.mjs` exists to invert that —
quote the provision, pin the assertion, and the omission failure largely cannot occur.
