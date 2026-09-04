# Confidentiality & IP, new document: California AI Transparency Act and AI Training Data Transparency Law — Information Sheet

## Why this document

Second document of wave 88. Read the existing "California Bot
Disclosure Law" document (Bus. & Prof. Code §§ 17940-17943) in full —
confirmed it covers a narrow, unrelated statute prohibiting an
undisclosed bot from communicating with intent to mislead about its
artificial identity, in a commercial-transaction or election-vote
context. Grepped the corpus for "SB 942," "AB 2013," "AI
Transparency," "provenance," "watermark," and "training data" — zero
hits anywhere except the Bot Disclosure Law's own unrelated §§ 17940
citations. Confirmed a real, non-duplicative, timely gap.

## What this document covers

7 clauses: 2 drafting (purpose/scope, certification) and 5 authority
clauses, citing Cal. Bus. & Prof. Code §§ 22757, 22757.1(d), (f),
22757.2(a), (a)(2)-(3), 22757.3(a)-(b), 22757.4(a)(1), (b), 22757.5,
22757.6, and Cal. Civ. Code §§ 3110(c), 3111:

- **`aitransparency_covered_provider`** (§ 22757; § 22757.1(d), (f)) —
  the AI Transparency Act's short title, the "covered provider"
  threshold (over 1,000,000 monthly visitors/users), and the "GenAI
  system" definition.
- **`aitransparency_detection_tool`** (§ 22757.2(a), (a)(2)-(3)) — the
  free AI detection tool requirement and its output limits (system
  provenance data yes, personal provenance data no).
- **`aitransparency_disclosure_requirements`** (§ 22757.3(a)-(b)) —
  the manifest (visible) and latent (embedded) content disclosure
  requirements.
- **`aitransparency_enforcement_and_scope`** (§ 22757.4(a)(1), (b);
  § 22757.5; § 22757.6) — the $5,000-per-violation civil penalty, the
  discrete-daily-violation rule, the non-user-generated-media
  exemption, and the operative date.
- **`aitransparency_training_data_transparency`** (Civ. Code § 3111;
  § 3110(c)) — the separate, distinct AI Training Data Transparency
  Act's developer public-posting requirement and its own "generative
  artificial intelligence" definition.

## Genuine corrections and findings

- **A major genuine correction to the task's own research brief**: the
  brief assumed the AI Transparency Act was codified somewhere near
  Bus. & Prof. Code §§ 17940 et seq. (the Bot Disclosure Law's own
  range). The agent independently confirmed the correct citation is
  Bus. & Prof. Code §§ 22757-22757.6, an entirely different chapter.
- **A second major genuine correction**: the brief assumed the AI
  Training Data Transparency Act (AB 2013) was codified in the Health
  and Safety Code. The agent independently confirmed it is actually
  codified at Civil Code Title 15.2, §§ 3110-3111 — verified that
  §§ 3111.1 and 3111.2 do not exist (both fetches returned empty),
  confirming the title contains only two sections.
- **A third genuine finding**: the brief assumed a January 1, 2026
  effective date for the AI Transparency Act. The agent independently
  confirmed the chapter's actual operative date is August 2, 2026 —
  AB 853 (Stats. 2025, Ch. 674) both amended the chapter's substance
  and pushed back the original operative date.
- Correctly distinguished "covered provider" (over 1,000,000 monthly
  visitors/users, § 22757.1(d)) from the separately defined "large
  online platform" (2,000,000 unique monthly users, § 22757.1(h)) —
  named but not conflated, since the latter carries different
  obligations not covered here.
- Confirmed AB 2013's § 3111 was itself further amended in 2025 by
  AB 1170 — this document's checked date falls after that amendment.

## Honest gap(s) disclosed

§ 22757.1's "large online platform" and "capture device manufacturer"
definitions and their own obligations are named but not covered.
§ 22757.2(b)-(c) (user-feedback collection, retention limits) and
§ 22757.3(b)(1)'s full latent-disclosure content list and § 22757.3(c)
(licensee contractual duties) are not covered. § 22757.4(a)(2)-(c)
(attorney's fees, third-party-licensee remedy) are not covered.
§ 3111(a)'s full twelve-item training-data disclosure list and
§ 3111(b)'s exemptions are not covered. This document does not
determine whether any specific product or business meets the
1,000,000-monthly-visitor threshold or otherwise qualifies as a
covered provider or developer.

## Method

Fetched Cal. Bus. & Prof. Code §§ 22757, 22757.1-22757.6 and Cal. Civ.
Code §§ 3110-3111 from `leginfo.legislature.ca.gov`, each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 13
citation quotes across the 5 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a
forty-first fetch (a distinct curl User-Agent string,
"Groundtruth-41stVerify-AITransparency/1.0"; one transient connection
failure on § 22757.1, resolved on retry) of all nine sections — all
13 quotes confirmed clean.

## Verification

- All nine statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  forty-first independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section, and which sections (the two separate statutes;
  §§ 22757.4, 22757.5, 22757.6) are genuinely independent; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Certification") match the established boilerplate-title
  reuse pattern.
- Checked every citation's `case` field for emptiness — all 13
  populated with proper case/citation identifier strings.
- No new fields required — all three fields (`preparerName`,
  `businessName`, `signatureDate`) reused from the existing corpus (29,
  13, and 22 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California AI Transparency Act and AI Training Data
  Transparency Law — Information Sheet
  (`california_ai_transparency_act_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Confidentiality & IP category. No
  new fields.
- Corpus: 3,006 → 3,013 clauses; 396 → 397 documents. Second addition
  of wave 88.
