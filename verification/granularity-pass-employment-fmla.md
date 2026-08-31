# Granularity pass — Employment category (first cut)

## Why this pass, and why it's narrower than the last two

Continuing the same standing instruction into the largest remaining part of the
corpus: 32 Employment documents, the bulk of it already covered by earlier
dedicated audit phases (Phase 6, Phase 7, and Phase 18's "deep audit of the 5
never-audited authority clauses"). Spot-checking a sample of authority clauses
against their full source text confirmed that most of this corner of the corpus
already reflects that scrutiny — `work_auth`'s own gap field, for example,
documents exactly this kind of granularity check having already been done
("two further qualifiers, found by reading past the already-quoted fragments of
both sources"). Rather than re-run the same check corpus-wide with lower odds of
finding anything new, this pass targeted the clauses most likely to still have
headroom: authority clauses citing a source with only a single quoted fragment,
which by definition explore less of that source's full text than a clause with
several.

## What changed

- **`fmla_entitlement`**: the clause's own gap field already flagged, in prose,
  that two more FMLA leave categories exist beyond the four quoted — qualifying
  exigency leave for a family member's covered active military duty, and up to 26
  workweeks (not the standard 12) to care for a covered servicemember family
  member — without citing either. **New clause** `fmla_military_family_leave`,
  citing both provisions directly, including the real interaction between them
  (the two together are capped at a combined 26 workweeks in the relevant
  12-month period, not additive).

## A near-miss, caught and reverted

A second addition was drafted and then reverted before shipping: a new clause
citing California's daily-overtime statute (Cal. Lab. Code § 510) as a concrete
illustration for the Exempt/Non-Exempt Classification Notice, whose existing gap
field says only "some states set a higher overtime threshold... this document
doesn't catalog those." Before wiring it in, a check of the project's own
changelog turned up an explicit, recorded prior decision (2026-08-29,
"Generalized away from named-state examples"): on the user's direction, the
corpus had deliberately removed named-state illustrative examples from clauses
whose core content is federal law, specifically because the project is meant to
stay state-general rather than state-specific. The new clause would have
reintroduced exactly that pattern. It was removed from both `clauses.json` and
`documents.json` before the commit, and the near-miss is recorded in
`changelog.html` alongside the original policy entry — including why this
policy doesn't apply to the California statutes cited throughout Business
Formation and Real Estate (those documents govern subjects that are entirely
creatures of state law, with no federal counterpart to cite instead, unlike the
FLSA-governed classification document).

## Verification

- Both FMLA quotes checked against a second, independent fetch before writing.
- Checked for `{{` leakage and duplicate clause titles across the full corpus
  (not just the touched documents) — clean.
- Full-corpus regression run after the correction, confirming the reverted
  clause left no trace and the FMLA document assembles correctly with the new
  clause included.

## Net changes

- FMLA Leave Request & Employer Notice: 6 → 7 clauses.
- Corpus total: 170 → 171 clauses.

## Scope note

This is a first, narrow cut at Employment — one document, prioritized by a
single-citation heuristic rather than a full re-audit of all 32 documents. The
heuristic is a reasonable way to triage a large space quickly, but it isn't a
substitute for reading every already-cited source's full text the way the lease
and Business Formation passes did. The remaining Employment documents haven't
had that full treatment yet.
