# Real Estate, new document: California Subdivided Lands Law — Information Sheet

## Why this document

Second and final processed item of wave 125 (Real Estate slot, 2×2
pattern). The agent ruled out five candidates via section-number greps
before landing here: Mello-Roos disclosure (§§53340/53341), the
Homestead Exemption (§§704.710/704.730), Megan's Law (§290.46), the
Unruh Act, and Home Solicitation Sales cancellation (§1689.5) were all
confirmed already substantively covered. The chosen topic — the
Subdivided Lands Law's public-report regime (Bus. & Prof. Code §11000
et seq.) — was confirmed genuinely open and expressly distinct from
two related, already-covered statutes: the Subdivision Map Act
(local-government map approval, a different statute entirely) and the
Vacation Ownership and Time-Share Act (which the Subdivided Lands
Law's own text at §11004.5(g) expressly carves out). Personally
reconfirmed via corpus search: every apparent hit on §§11000, 11004.5,
11010, 11018, and 11018.1 elsewhere in the corpus was confirmed by
context to be an incidental cross-reference to the Subdivided Lands
Law as an exemption trigger inside unrelated documents (Costa-Hawkins
rent control, TDS disclosure exemptions, smoke alarm compliance
exemptions), not substantive coverage.

## What this document covers

11 clauses: 2 drafting (intro/declaration, acknowledgment) and 9
authority clauses, citing Bus. & Prof. Code § 11000(a), § 11004.5(a)-(e),
(g), § 11013, § 11010(a)-(b), § 11018, (a)-(i), § 11018.1(a)-(c),
§ 11023, § 11200:

- **`subdivland_definition_core`** — the five-or-more-lot threshold and
  its two express carve-outs.
- **`subdivland_expanded_definition`** — the statutory expansion to
  planned developments, condominiums, and cooperatives, with the
  express time-share carve-out.
- **`subdivland_blanket_encumbrance_definition`** — the "blanket
  encumbrance" definition.
- **`subdivland_public_report_application_requirement`** — the notice-
  of-intention filing requirement.
- **`subdivland_commissioner_examination_and_denial_grounds`** — the
  commissioner's examination duty and nine enumerated denial grounds.
- **`subdivland_report_delivery_and_availability`** — the pre-contract
  delivery obligation and public-availability/posting duty.
- **`subdivland_cid_disclosure_statement`** — the additional Common
  Interest Development General Information statement requirement.
- **`subdivland_criminal_penalties`** — criminal exposure for violating
  specific enumerated sections.
- **`subdivland_sales_contract_content_requirement`** — the required
  contents of a subdivision sales contract.

## Genuine findings

- **A disclosed, load-bearing textual observation**: the criminal
  penalties clause's gap explicitly notes that §11023's enumerated
  list includes §11010 but conspicuously omits §§11018 and 11018.1 —
  meaning this specific criminal sanction does not extend to every
  obligation the document otherwise describes, flagged rather than
  glossed over.
- **A disclosed research-scope discipline**: the agent's own report
  states it deliberately did not substantively treat §11010(b)(17)'s
  "Notice of Right to Farm" (Civ. Code §3482.5) beyond noting its
  existence within §11010's content list, to avoid overreach into a
  distinct Right-to-Farm-Act topic left open for a future wave.
- **A disclosed, deliberate choice not to quote lengthy prescribed
  statutory text in full**: the application-requirement clause's gap
  discloses that several of §11010(b)'s eighteen content categories
  (airport notice, SF Bay Conservation notice, right-to-farm notice)
  contain lengthy prescribed text not reproduced here.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not reproduce all eighteen enumerated categories of
required notice-of-intention content, does not address the procedures
for amending, renewing, or suspending a public report once issued,
does not quote the full CID General Information statement text, does
not address what enforcement avenue (if any) applies to a violation
outside §11023's enumerated list, does not determine whether any
specific parcel configuration or development meets the statutory
thresholds, and does not address the separate Davis-Stirling
disclosure obligations this corpus documents elsewhere for common
interest developments generally.

## Method

Fetched Bus. & Prof. Code §§11000, 11004.5, 11010, 11013, 11018,
11018.1, 11023, and 11200 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after excluding the dynamic ViewState
session token. One transient connection reset on §11200's second fetch
was resolved with a backoff retry — the same known transient relay
issue independently encountered and resolved elsewhere in this
project. CourtListener's daily rate limit was already exhausted on the
agent's test call; no case law was used, a disclosed and legitimate
choice. All 15 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-seventy-first fetch (a new distinct curl User-Agent
string, "Groundtruth-171stVerify-SubdividedLandsLaw/1.0") of all eight
sections — all 15 citation instances confirmed clean on direct
normalized-whitespace substring match; 3 of the 15 required the
standard whitespace-stripped fallback check (the familiar
subdivision-marker-spacing artifact), confirmed benign. The five-lot
threshold, the expanded-definition categories and time-share carve-out,
the notice-of-intention requirement, the nine denial grounds, the
delivery/posting duties, the CID statement requirement, and the
criminal-penalty enumerated list were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All eight Business and Professions Code sections fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-seventy-first independent fetch
  during integration review; all 15 citation instances confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `subdivland_` prefix has zero collisions.
  Independently confirmed, by direct clause-body inspection, that all
  four apparent prior hits on the cited section numbers were incidental
  exemption-trigger cross-references in unrelated documents (Costa-
  Hawkins, TDS exemptions, smoke alarm exemptions), not genuine
  substantive coverage.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all three fields (`ownerName`, `buyerName`,
  `propertyDescription`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Subdivided Lands Law — Information Sheet
  (`subdivided_lands_law_info_sheet`), 11 clauses (9 authority + 2
  drafting), in the Real Estate category. No new fields.
- Corpus: 4,096 → 4,107 clauses; 525 → 526 documents. Second and final
  processed item of wave 125.

## Wave 125 summary

Wave 125 followed the established 2×2 pattern, targeting Real Estate
and Family Law — the two categories tied lowest after wave 124's
rotation and least recently touched (wave 122). Both agents ran
section-number-specific duplication checks before landing on genuinely
open topics: Determination of Income for Guideline Child Support
(Fam. Code §§4058-4060, 4064, 4070-4072, after ruling out three
already-covered candidates and confirming a companion relationship to
the existing Child Support Agreement document) and the California
Subdivided Lands Law (Bus. & Prof. Code §11000 et seq., after ruling
out five already-covered candidates and confirming a careful
distinction from two related, already-covered statutes). Each surfaced
a genuine finding: a disclosed operative-date limitation and a
deliberate choice to select representative deductions rather than a
full enumerated list (Child Support Income Determination); and a
disclosed textual observation that the Subdivided Lands Law's criminal
penalty provision omits two of the sections this document otherwise
describes, plus a deliberate research-scope discipline avoiding
overreach into an adjacent, still-open Right-to-Farm-Act topic
(Subdivided Lands Law). This wave also independently encountered and
resolved a transient leginfo.legislature.ca.gov connectivity issue
during research, consistent with the pattern established in recent
waves. Per the established alternation, wave 126 should return to a
1×4 pattern.
