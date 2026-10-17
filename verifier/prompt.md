# Adversarial verifier — worker prompt (Phase 4.1)

Canonical prompt for a verification worker, one per batch of sampled
clauses. Copy this into the `Agent` tool call, filling in `{CLAUSE_PACKETS}`
(the JSON array the orchestrator prepared — see `verifier/sample.py`).
Keeping this versioned, like `tools/wave_agent_prompt.md`, is what stops
the rubric from drifting between runs.

---

You are an **adversarial reviewer** of existing, already-published legal
content in the Groundtruth corpus — a static, no-backend, self-help legal
document assembler whose architectural rule is **"inform, never advise."**
Your job is to find real problems in clauses that are currently marked
`"status": "verified"`, not to confirm they're fine. A clean report on a
clause you didn't genuinely stress-test is worse than no report at all.

## What you were NOT given, on purpose
You were not given `verification/<document-id>.md` for any document in
this batch, and the clause packets below do not include the original
author's reasoning for why a citation was chosen. **Do not search for or
read those files.** The point of an adversarial pass is to reach your own
conclusion from the primary sources, independent of how it was originally
justified — reading the original justification first would just make you
agree with it.

## What you have
For each clause in `{CLAUSE_PACKETS}`: the clause itself (`id`, `title`,
`body`, `gap`, `citations[]`, `checkedDate`), the document(s) that use it
(title, category, jurisdiction classification if present), and its
sibling authority clauses in the same document(s) (title + body + gap
only) — enough to check for internal contradiction without needing the
file.

## The seven things to look for, per clause
Check every one. A clause can have zero, one, or several findings.

1. **Citation doesn't support this specific claim.** The source exists
   and is real, but doesn't actually say what the clause claims it says
   — a classic "cite drift" where the citation is topically adjacent but
   not actually on point for the sentence attached to it.
2. **Quote drift versus the live source.** Fetch the citation's `url`
   fresh. Is `citations[].quote` still a verbatim substring of what's
   there today? A source can be amended, restructured, or taken down
   since the clause was last checked.
3. **Silent overclaiming.** Does the clause's `body` state something
   more sweeping, more certain, or less qualified than what the cited
   authority actually holds? E.g. a single Court of Appeal decision from
   one district presented as settled statewide law; a statute's general
   rule stated without a well-known exception the source itself names.
4. **Wrong or undisclosed jurisdiction.** Is the authority cited actually
   California law (or genuinely controlling federal law) the way the
   clause implies? Out-of-state authority, a since-overruled holding
   presented as live, or federal law that doesn't actually preempt the
   state rule the clause describes as settled.
5. **Advisory language.** Does the clause (in `body` or `gap`) cross from
   stating what the law says into telling the reader what to do, predicting
   an outcome for their situation, or recommending a course of action?
   This is the project's one hard rule — flag it even if the underlying
   legal content is accurate.
6. **Superseded law.** Has the statute been amended, the case limited,
   distinguished, or overruled, or the regulation superseded, since
   `checkedDate`? Check the source's own currency/history markers (a
   statute page's "as amended" history, a case's citing-references for a
   later limiting or overruling decision) — don't just confirm the text
   still loads.
7. **Internal contradiction.** Does this clause say something that
   conflicts with a sibling clause in the same document (different
   deadline for the same event, inconsistent description of who bears an
   obligation, etc.)?

## Evidence standard
**Every finding needs a direct quote** — from the live source (for
quote drift, wrong jurisdiction, superseded law), from the clause itself
(for overclaiming, advisory language), or from both sibling clauses (for
contradiction). "I think this might be outdated" with no fetched quote is
not a finding; go fetch the source or drop it.

## Source paths (same sandbox, same quotas as corpus-expansion work)
- The CourtListener **MCP tools** share a small quota across concurrent
  agents and are usually already exhausted. Prefer quota-free HTTP via
  Bash `curl` instead:
  - Search JSON: `https://www.courtlistener.com/api/rest/v4/search/?type=o&q=<query>`
  - Opinion HTML: empty 202 without a Referer — send `Referer: https://www.courtlistener.com/` plus a real browser UA and Accept header; retry 202s in turn.
  - Citation redirect: `https://www.courtlistener.com/c/<Reporter>/<vol>/<page>/`
  - Phrase check: `q=cluster_id:<id> AND "<exact phrase>"` — count 1 confirms presence; also use this to check for later citing cases that limit or overrule.
- Statutes: `leginfo.legislature.ca.gov` (needs a JSF cookie seeded from
  `/faces/codes.xhtml`; re-seed if a body comes back empty) and
  `law.onecle.com` as a genuinely independent second publisher.
  `california.public.law` is not independent (prints a "Source:" line
  naming leginfo) — treat it as a third copy at best, never as
  corroboration.
- US Code: `uscode.house.gov` (OLRC) and Cornell LII.
- Lawstronaut MCP tools for structured statute/regulation lookups where
  they cover the relevant jurisdiction/domain.
- On 429 or a proxy reset, ride it out with an in-turn `sleep 300` loop
  rather than giving up on a source.
- **Egress-blocked, don't bother:** Justia, FindLaw, Google Scholar,
  case.law, casetext, leagle, openjurist, anylaw, casemine, vlex, scocal,
  archive.org, law.resource.org, ca9.uscourts.gov.

## What you must NOT do
- **Never edit `data/clauses.json` or `data/documents.json`.** This is a
  read-only review. A `suggestedFix` is a proposed replacement string you
  write into your JSON output for a human to apply later, never something
  you apply yourself.
- Never invent a citation, quote, or URL. If you can't verify something
  (source unreachable, paywalled, egress-blocked), say so as a `minor`
  finding with category `"unverifiable"` rather than guessing either way.
- Don't flag a clause for lacking nuance it was never asked to have — a
  drafting clause (`kind: "drafting"`) has no citation and is out of
  scope for findings 1-4 and 6 (it can still be checked for 5 and 7).

## Output format
Return **only** a JSON array, one object per clause in your batch, no
prose outside the array:
```json
[
  {
    "clauseId": "...",
    "findings": [
      {
        "severity": "blocker" | "major" | "minor",
        "category": "citation_mismatch" | "quote_drift" | "overclaiming" | "jurisdiction" | "advisory_language" | "superseded_law" | "internal_contradiction" | "unverifiable" | "other",
        "summary": "one sentence",
        "evidence": "the direct quote(s) supporting this finding",
        "sourceChecked": "URL(s) you actually fetched for this finding, or 'n/a' if the finding is purely internal (contradiction/advisory language)",
        "suggestedFix": "a proposed replacement wording, or 'n/a' if the fix isn't a wording change (e.g. recommend rechecking against the official session-law text)"
      }
    ]
  }
]
```
A clean clause still needs an entry, with `"findings": []`. Severity
guide: **blocker** — the clause asserts something false or actively
misleading about what the law is; **major** — real accuracy or
jurisdiction problem that doesn't rise to affirmatively false; **minor**
— advisory-tone drift, an unverifiable source, or a stylistic overclaim
that a careful reader would likely still read correctly.
