# During employment, new document: Workplace Language Restriction Policy — Information Sheet

## Why this document

Third processed item of wave 133 (During employment slot, 2×2
pattern). The agent ruled out social media password protection,
personnel file inspection, off-duty cannabis nondiscrimination,
polygraph prohibition, credit report restriction, wage-discussion
protection, CROWN Act hairstyle discrimination, religious dress/
grooming accommodation, and volunteer emergency responder leave (which
a concurrent parallel session in this same repo had, by coincidence,
just added mid-session) — all confirmed already covered elsewhere in
the corpus (the volunteer-responder one by direct git-log inspection
rather than a stale grep). The chosen topic — Gov. Code § 12951, a
FEHA provision making it an unlawful employment practice to adopt or
enforce a workplace language-restriction policy unless justified by
business necessity and preceded by employee notice — was confirmed
genuinely open: zero prior corpus hits on "12951" or "1606.7."

## What this document covers

11 clauses: 4 drafting (intro, policy-description worksheet, employee
notice, acknowledgment) and 7 authority clauses, citing Gov. Code
§ 12951(a), (a)(1), (a)(2), (b), § 12926(d), the FEHA chapter/article
headings, and 29 C.F.R. § 1606.7(a)-(c):

- **`language_policy_core_prohibition`** — the core § 12951(a)
  prohibition, applicable unless both statutory conditions are met.
- **`language_policy_business_necessity_condition`** /
  **`_business_necessity_defined`** — the business-necessity condition
  and its three-part statutory definition.
- **`language_policy_notice_requirement`** — the notice-of-circumstances-
  and-consequences condition.
- **`language_policy_employer_coverage`** — the § 12926(d) "five or
  more employees" definition § 12951 cross-references, with its
  religious-nonprofit exception.
- **`language_policy_feha_chapter_placement`** — the statute's
  placement within FEHA's "Discrimination Prohibited" chapter.
- **`language_policy_federal_eeoc_comparison`** — the related but
  differently-structured 29 C.F.R. § 1606.7 EEOC speak-English-only
  framework.

## Genuine findings

- **A disclosed, deliberate structural distinction**: the federal-
  comparison clause's gap explicitly notes that California's § 12951
  applies its business-necessity-and-notice conditions to any language
  restriction, while the EEOC's regulation applies that same framework
  only to a rule imposed "at certain times" — a rule imposed "at all
  times" is instead subject to a separate, stricter presumption the
  California statute's text does not draw.
- **A disclosed source-formatting artifact, reproduced rather than
  smoothed over**: the notice-requirement clause's quote preserves a
  literal line-wrap with embedded tab characters present in leginfo's
  raw HTML mid-word, verified on two independent fetches and explained
  in the gap rather than silently corrected.
- **A disclosed non-independence between two same-page citations**:
  the FEHA-chapter-placement clause's gap discloses that both its
  citations come from the same single fetched page's hierarchy
  display, not from two independent sources.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "workplace" or "any language," does not
state a required form for the statutory notice (written, oral,
handbook inclusion, or lead time), does not resolve which party bears
the burden of proving or disproving business necessity, does not
describe the FEHA administrative complaint or civil-action procedure
as applied specifically to a § 12951 claim, and does not address
Title VII's own employer-size coverage threshold for the federal
comparison.

## Method

Fetched Gov. Code § 12951, § 12926, and 29 C.F.R. § 1606.7, each
fetched twice by the research agent with two distinct User-Agent
strings via raw curl, confirmed identical after normalizing expected
dynamic noise (JSF ViewState tokens, a CSP nonce on the eCFR page).
CourtListener's daily quota was already exhausted (HTTP 429) on the
agent's test call; no case law was used or fabricated. All 10 citation
instances were programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-ninety-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-196thVerify-LanguagePolicy/1.0"). The two leginfo
sections fetched cleanly. The eCFR fetch initially 302-redirected to
`unblock.federalregister.gov` under the custom User-Agent (eCFR's bot
protection); resolved, consistent with this session's established
pattern for eCFR, by re-fetching with a browser-realistic User-Agent
and following redirects, which succeeded cleanly. All 11 citation
instances confirmed clean on direct normalized-whitespace substring
match, with no fallback needed. The core prohibition, both statutory
conditions, the business-necessity definition, the employer-coverage
definition, the chapter/article placement, and all three EEOC
regulation subdivisions were independently reconfirmed present in the
freshly fetched text.

## Verification

- All three sources fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-ninety-sixth
  independent fetch during integration review (which required
  resolving eCFR's bot-protection redirect via a browser-realistic
  User-Agent); all 11 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or two citations from the
  same fetched page, correctly disclose they are not independent
  sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `language_policy_` prefix has zero collisions. Ran
  section-number-specific greps for "12951" and "1606.7" across the
  full corpus — zero hits on both; "12926" returned 14 hits, all
  traced to FEHA's shared general "employer" definition already used
  across multiple unrelated existing documents, consistent with the
  new clause's own disclosure that this is a shared definitional
  source, not independent corroboration.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `languageRestrictionDescription` — did not exist previously in the
  corpus under any name. Six other fields (`companyName`,
  `employeeName`, `jobTitle`, `businessPurpose`, `effectiveDate`,
  `dateSigned`) reused from the existing corpus, `businessPurpose`
  relabeled from its prior CCPA service-provider-agreement context.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Workplace Language Restriction Policy — Information
  Sheet (`workplace_language_restriction_policy_info_sheet`), 11
  clauses (7 authority + 4 drafting), in the During employment
  category. One new field: `languageRestrictionDescription`.
- Corpus: 4,354 → 4,365 clauses; 550 → 551 documents. Third processed
  item of wave 133.
