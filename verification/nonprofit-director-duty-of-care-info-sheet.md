# Business Formation, new document: Nonprofit Corporation Director's Duty of Care — Information Sheet

## Why this document

Third processed item of wave 118 (Business Formation slot). The agent's
duplication check pivoted away from one initial candidate: domestication
of a foreign LLC/corporation into California was found to be handled by
California's existing Conversion statute (Chapter 11.5) — already
covered by the existing Statutory Conversion document, since California
has no separate "domestication" scheme the way Delaware does. Document-
and clause-level greps for "5231," "7231," "9241," "fiduciary," "duty of
care" confirmed the existing `bjr_*` clauses (Director's Duty of Care
and Business Judgment Rule document) cover only for-profit general
corporations under Corp. Code §309, and the existing Self-Dealing and
Interested Director/Officer Transactions document covers only the
interested-transaction safe-harbor statutes (§§310/5233/7233) — neither
touches the nonprofit general standard-of-care statutes. Personally
confirmed both existing documents' first clauses cite §309 and §310
respectively, with zero overlap with this document's §§5231/7231/9241
coverage.

## What this document covers

10 clauses: 2 drafting (intro, certification) and 8 authority clauses,
citing Corp. Code §§ 5231(a), 7231(a), 5231(b), 5231(c), 7231(b),
7231(c), 9241(a), 9241(b)(4), 9241(c), 9241(d), 5239(a), 5239(e),
7231.5(a), 7231.5(d), 5142(a):

- **`npdoc_standard_care_pb_mb`** — the near-identical duty-of-care
  standard for public benefit and mutual benefit corporation directors.
- **`npdoc_reliance_liability_pb`** — public benefit director reliance
  rights, liability protection, and the §5233 self-dealing carve-out.
- **`npdoc_reliance_liability_mb`** — the parallel mutual benefit
  provision, disclosing its textual absence of a self-dealing
  cross-reference (unlike the public benefit version).
- **`npdoc_standard_religious`** — the religious corporation's
  differently worded "appropriate under the circumstances" standard and
  its added religious-authority reliance category.
- **`npdoc_religious_compensation_liability`** — the religious
  corporation compensation/loan-resolution rule and §9243 carve-out.
- **`npdoc_volunteer_immunity_pb`** — the public benefit volunteer
  director/officer immunity and its conditions.
- **`npdoc_volunteer_immunity_mb_narrow`** — the mutual benefit
  volunteer immunity, disclosing its narrower scope limited to trade/
  professional/labor organizations.
- **`npdoc_enforcement_standing_pb`** — who may sue a public benefit
  corporation director for breach of charitable trust.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed the three nonprofit-type statutes would be
  functionally parallel. Full reading revealed §7231(c) (mutual benefit)
  contains no "Except as provided in Section 7233" cross-reference that
  its public-benefit and religious counterparts have — the self-dealing
  carve-out for mutual benefit appears only in the separate, narrower
  §7231.5 volunteer-immunity statute. Disclosed as a genuine textual
  finding without over-claiming a substantive legal conclusion.
- **A corrected assumption about §7231.5's scope**: the agent initially
  assumed it was a general mutual-benefit analog to §5239. Reading
  subdivision (d) revealed it applies only to trade/professional/labor
  organizations operating for fraternal/educational purposes under IRC
  §501(c) — a much narrower scope than assumed, now the basis of a
  dedicated clause and specific gap disclosure.
- **A confirmed structural distinction for religious corporations**:
  §9241(a) uses "appropriate under the circumstances" rather than
  "ordinarily prudent person," and gains a fourth reliance category
  (religious authorities/clergy) unavailable to the other two types.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not independently verify §§5233, 5237, 7233, 7236,
9243 (the cross-referenced self-dealing/loan statutes), §5141
(cross-referenced by §5142's "Notwithstanding" clause), or §5239's
modified insurance-inquiry standard for small public benefit
corporations under $25,000 in annual budget; does not resolve whether
"appropriate under the circumstances" is functionally equivalent to
"ordinarily prudent person"; did not locate a volunteer-immunity statute
for religious corporations or a standing statute parallel to §5142 for
mutual benefit or religious corporations; and does not evaluate whether
any specific mutual benefit corporation qualifies for the narrow
§7231.5 immunity category.

## Method

Fetched Corp. Code §§ 5231, 7231, 9241, 5239, 7231.5, and 5142 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
normalization. CourtListener's daily rate limit was already exhausted
on the agent's test call; no case law was used, a disclosed and
legitimate choice. All 15 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-fiftieth fetch (a new distinct curl User-Agent string,
"Groundtruth-150thVerify-NonprofitDuty/1.0") of all six sections — all
15 citation instances confirmed clean on direct normalized-whitespace
substring match, no extraction artifacts encountered. The near-identical
public/mutual benefit standard, the mutual benefit statute's absent
self-dealing cross-reference, the religious corporation's differently
worded standard, and the §7231.5 scope limitation were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All six Corp. Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-fiftieth independent fetch during integration review;
  all 15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the existing `bjr_*` and `selfdealing_*`
  clause sets address §§309/310, the for-profit general corporation
  statutes, with zero overlap with this document's nonprofit-specific
  coverage.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all six fields (`companyName`,
  `directorName`, `entityType`, `preparerName`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Nonprofit Corporation Director's Duty of Care —
  Information Sheet (`nonprofit_director_duty_of_care_info_sheet`), 10
  clauses (8 authority + 2 drafting), in the Business Formation
  category. No new fields.
- Corpus: 3,886 → 3,896 clauses; 504 → 505 documents. Third processed
  item of wave 118.
