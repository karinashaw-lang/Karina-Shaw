# Real Estate, new document: Manufactured Home Ownership and Title Transfer — Information Sheet

## Why this document

Third processed item of wave 105 (Real Estate slot, 2×2 pattern). A
scoping pass and clause-level duplication check (including a direct
`grep`-style search of `clauses.json` for "18075," "18085," "18100.5,"
"18080," "certificate of title," and "HCD registration") confirmed zero
prior coverage of HCD's certificate-of-title and registration system
anywhere in the corpus, distinct from the existing Mobilehome Park
Tenancy (Mobilehome Residency Law) document, which covers only the
landlord-tenant space-rental relationship and says nothing about
ownership of the home itself.

## What this document covers

9 clauses: 2 drafting (intro/scope, acknowledgment) and 7 authority
clauses, citing Health & Safety Code §§ 18007(a), 18008(a), 18075(a),
18075.5, 18075.5(a), 18075.5(b), 18551, 18551(a)(2)(A), 18009.5,
18005.8, 18005.3, 18085(a), 18085(b)(4), 18100.5(a), 18100.5(a)(1),
18080(a), and 18080(c):

- **`mhtitle_definitions`** — the age-based "manufactured home"
  (post-6/15/1976) vs. "mobilehome" (pre-6/15/1976) definitions.
- **`mhtitle_registration_requirement`** — the general HCD registration
  requirement and its trigger on sale or transfer.
- **`mhtitle_personal_vs_real_property`** — where the HCD title system
  stops: conversion to real property via foundation installation and
  county recording.
- **`mhtitle_ownership_roles`** — the three roles an HCD title record
  can carry (registered owner, legal owner, junior lienholder).
- **`mhtitle_original_registration_application`** — what an original
  HCD registration application must contain.
- **`mhtitle_transfer_of_ownership_process`** — the certificate-of-title
  execution process on a sale.
- **`mhtitle_coownership_signature_rules`** — whose signature is needed
  to transfer title for joint tenants vs. community-property spouses.

## Genuine findings

- **A significant correction to the research brief's assumed statutory
  anchor**: the brief pointed to "§ 18035 et seq." The agent found
  § 18035 is actually Chapter 5 ("Sales and Escrows," dealer
  escrow-account rules), not the registration/titling system, and that
  the correct chapter is Chapter 8 (§§ 18075–18124.5), "Registration and
  Titling of Manufactured Homes, Mobilehomes, and Commercial Coaches" —
  a real structural correction, not a citation nitpick, since it changed
  which sections the entire document is built on.
- **A concrete identification of the real-property conversion
  mechanism the brief only gestured at**: the agent found and quoted
  § 18551(a)(2)(A)'s specific 5-business-day county-recorder filing
  requirement that completes a home's conversion from HCD-registered
  personal property to real property — a precise boundary rather than a
  vague reference to "becoming a fixture."
- **A confirmed three-role ownership structure**: the agent verified
  registered owner, legal owner, and junior lienholder are three
  separately defined statutory roles (§§ 18009.5, 18005.8, 18005.3)
  rather than assuming a single generic "owner" concept, paralleling but
  distinct from vehicle title conventions.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not reproduce §§ 18007/18008's voluntary-compliance
size exception or subdivision (b) of each; § 18075(b)'s HCD/DMV
transition history; § 18075.5(c)-(f)'s further registration exceptions;
§ 18551(a)'s and (b)'s detailed prerequisites for fixture-or-improvement
or chattel installation; § 18005.8's lien carve-out or § 18080.7's
perfection mechanics; § 18085(a)'s duplicate-certificate procedure or
the rest of § 18085(b)'s application contents; § 18100.5's paragraphs
(2)-(5) or its unrelated subdivisions (d)-(h) on judgment liens for
unpaid rent; or § 18080(b)'s tenancy-in-common rule or (d)'s transition
rule. It does not determine whether any specific home is currently
registered as personal property, has become part of the real estate, or
has been lawfully transferred.

## Method

Fetched Health & Safety Code §§ 18007, 18008, 18075, 18075.5, 18551,
18009.5, 18005.8, 18005.3, 18085, 18100.5, and 18080 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical (matching
MD5) after normalization. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 17 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-tenth fetch (a new distinct curl User-Agent string,
"Groundtruth-110thVerify-MHTitle/1.0") of all 11 sections — all 17
citation instances confirmed clean on direct normalized-whitespace
substring match, no extraction artifacts encountered. The § 18035
correction and the § 18551(a)(2)(A) recording mechanism were both
independently reconfirmed present in the freshly fetched text.

## Verification

- All 11 Health & Safety Code sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  one-hundred-and-tenth independent fetch during integration review; all
  17 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed this document is
  distinct from the existing Mobilehome Park Tenancy document via a
  direct keyword search of the corpus.
- Checked every citation's `case` field for emptiness — all 17
  populated with proper citation identifier strings.
- One new field required (`serialOrDecalNumber`), confirmed genuinely
  new via a corpus-wide field-id lookup; the remaining six fields
  (`sellerName`, `buyerName`, `mobilehomeDescription`, `propertyAddress`,
  `cityState`, `dateSigned`) confirmed already existing and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Manufactured Home Ownership and Title Transfer —
  Information Sheet
  (`manufactured_home_ownership_title_transfer_info_sheet`), 9 clauses
  (7 authority + 2 drafting), in the Real Estate category. One new
  field (`serialOrDecalNumber`).
- Corpus: 3,507 → 3,516 clauses; 464 → 465 documents. Third processed
  item of wave 105.
