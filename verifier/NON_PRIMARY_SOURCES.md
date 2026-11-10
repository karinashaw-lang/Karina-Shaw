# Non-primary-sourced clauses — CA Wedge Plan Step 2.2

Every authority clause's citations now carry a `sourceClass`
(`tools/backfill_source_class.py`, run 2026-11-10, classified by URL
domain — only 28 domains exist across all 11,688 citations, so every
one was classified by hand, not guessed at). **A mirror is not
primary** (Global Rule 4): a clause with any `mirror`-class citation
cannot honestly claim the "Verified" level under Step 2's three-level
system, regardless of what its old single-value `status` field says.

**578 of 4,989 authority clauses (11.6%) carry at least one
`mirror`-class citation.** They split into two very different
priority groups:

## Priority 1 — 96 clauses citing a California-statute mirror

These cite `california.public.law` or `law.onecle.com` instead of
`leginfo.legislature.ca.gov` directly — **this is the group Step 2.2
and Step 6.3 specifically call out for primary-source re-verification**,
starting with the 9 small-claims CCP sections (7 of this document's 8
authority clauses; the 8th, `smallclaims_judgment_enforcement`, is
separately `"status": "unverified"` already and isn't in this list
because it cites no mirror at all — it cites nothing from leginfo
either, see below). This is the highest-priority group because CA
statutory law is this product's actual core trust claim, and leginfo
access (Cloudflare-blocking this sandbox) is the specific, named
obstacle, not a permanent one.

By document cluster:

| Cluster | Clauses | What it covers |
| --- | --- | --- |
| `smallclaims_*` | 7 | Small claims court (CCP §§ 116.220, 116.221, 116.231, 116.260, 116.340, 116.360, 116.530, 116.610, 116.710) |
| `gcapres_*` | 9 | Government Claims Act presentment requirements |
| `medsupp_*` | 11 | Medical support / health insurance assignment orders |
| `purpart_*` | 7 | Purported partner liability |
| `resptax_*` | 5 | Responsible-person tax liability |
| `revbenst_*` | 5 | Retirement/revocable-trust beneficiary rights |
| `saleconf_*` | 11 | Probate sale confirmation |
| `strikehire_*` | 6 | Hiring during a strike/lockout |
| `survclaim_*` | 7 | Survival of claims after a party's death |
| `taxdefsale_*` | 8 | Tax-defaulted property sale |
| `taxpro_*` | 11 | Estate tax proration |
| `titleins_*` | 6 | Title insurance |

Every one of these 96 is currently `"status": "verified"` under the
old single-value scheme. **Under Step 2's new scheme, all 96 should
display at the "Cited" level, not "Verified", until each is re-fetched
directly from leginfo (or another true primary source) and confirmed —
this is Step 6's job, not this step's.** This step only identifies and
labels them; it does not re-verify them.

## Priority 2 — 482 clauses citing only a federal-statute mirror

These cite `www.law.cornell.edu` (Cornell's Legal Information
Institute) for federal statutory text, with no California-statute
mirror involved. Cornell LII is a long-established, generally reliable
mirror of the U.S. Code, but it is still not `uscode.house.gov` or
`www.ecfr.gov` directly, so Global Rule 4 treats it the same way: a
mirror, not primary, and not eligible for "Verified" as drafted.

This group is **explicitly lower priority** than Priority 1: it's
federal law, not the California statutory law this product's trust
claim is actually built around, and the new plan's launch set (Step 5)
and verification effort (Step 6) are scoped to California content
first. These 482 clauses are listed here for completeness and future
reference, not queued for re-verification as part of this plan's
Part 1. (One clause, `medsupp_national_medical_support_notice`, cites
both a CA-mirror and the federal Cornell mirror and is counted in
Priority 1, not here, since it needs the CA-side fix regardless.)

## What this step did and didn't do

This step (2.2) only labels and lists — it does not re-verify any
clause, does not change any `status` value, and does not edit any
clause's body or citations beyond adding `sourceClass`. The actual
re-verification of Priority 1 against leginfo or another true primary
source is Step 6's job, scoped to whichever of these 96 clauses end up
in the approved launch set (Step 5) — re-verifying a clause that never
makes the launch set would be wasted effort under this plan's own
"correctness beats breadth... unverifiable content is labeled or
removed from the launch set" framing (Global Rule 11).

Full counts and the domain-classification method are in
`MVP_BASELINE.md`; the per-citation `sourceClass` values themselves are
in `data/clauses.json`.
