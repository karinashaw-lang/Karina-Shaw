# During employment, new document: Captive Audience Meetings — Information Sheet

## Why this document

First processed item of wave 110 (During employment slot, 1×4 pattern).
Every topic named in the assignment's own examples (wage statements,
meal/rest breaks, HWHFA sick leave, CFRA, workplace violence
prevention, split-shift pay, reporting-time pay, personnel files, PAGA,
lactation accommodation) was confirmed already covered. Several
follow-on candidates (off-duty cannabis protections, vacation cash-out,
WARN mass-layoff notice) were also confirmed covered. The agent
confirmed zero prior coverage of Labor Code § 1137 (the California
Worker Freedom from Employer Intimidation Act, effective January 1,
2025) via both document-level and clause-level checks — a substring
hit on "1137" turned out to be a false positive (a case citation inside
an unrelated remote-work expense-reimbursement clause). The document is
explicitly distinguished from the existing Political Activity
Protection document (Lab. Code §§ 1101-1106), which protects an
employee's own off-duty political activity rather than restricting what
an employer may compel employees to attend.

## What this document covers

8 clauses: 2 drafting (intro, signature/acknowledgment) and 6 authority
clauses, citing Lab. Code § 1137(a), (b)(2)-(4), (c), (d), (e), (f)(1),
(g)(1)-(2), (h)(2), (5), and the statute's own historical/effective-date
note:

- **`captiveaudience_definitions`** — the statutory definitions of
  "employee," "employer," "political matters," and "religious
  matters."
- **`captiveaudience_short_title`** — the chapter's official title and
  its January 1, 2025 effective date.
- **`captiveaudience_core_prohibition`** — the core prohibition on
  adverse action for declining a mandatory religious/political
  meeting, with continued pay for a declining employee working at the
  time.
- **`captiveaudience_permitted_communications`** — communications the
  statute expressly does not prohibit.
- **`captiveaudience_exempt_entities`** — six categorical exemptions,
  including religious corporations, political organizations,
  educational institutions, and legal-compliance training.
- **`captiveaudience_enforcement_remedies`** — the statute's three
  enforcement tracks: a $500-per-employee civil penalty, Labor
  Commissioner enforcement, and a private civil action with punitive
  damages.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent expected § 1137 to be a short, single-rule statute. Reading
  the actual text showed a full chapter with a five-part definitions
  subsection, a core prohibition with a pay-continuation proviso, four
  permitted-communication carve-outs, six categorical exemptions
  (including a Title-VII-linked religious-employer exemption and a
  public-employer-orientation exemption), a severability clause, and
  three distinct enforcement tracks — considerably more structurally
  rich than a summary would suggest, reflected in separate dedicated
  clauses rather than a compressed single-clause treatment.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  the agent additionally noted that given the January 1, 2025 effective
  date, reported appellate authority construing this section may not
  yet exist regardless of quota status.

## Honest gap(s) disclosed

This document does not define "control and direction," "wages or
other remuneration," or "adverse action," does not restate the
higher-education or public-entity-policy items in subdivision (g)
verbatim, does not independently verify the Title VII and California
Government/Labor Code cross-references embedded in the religious-
corporation exemption, does not reproduce the cross-referenced
enforcement procedures in Lab. Code §§ 98.3, 98.7, 98.74, or 1197.1,
and does not determine whether any specific meeting, entity, or
communication falls within any exception or exemption.

## Method

Fetched Lab. Code § 1137 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings; the
full-page fetches were not byte-identical due to leginfo's per-request
JSF ViewState token, but the isolated statute-text container was
confirmed exactly byte-identical between passes. CourtListener's daily
rate limit was already exhausted on the agent's test call; no case law
was used, a disclosed and legitimate choice. All 14 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-twenty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-124thVerify-CaptiveAudience/1.0") of the section —
all 14 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
statute's full multi-subdivision structure (definitions, prohibition,
permitted communications, exemptions, enforcement) was independently
reconfirmed present in the freshly fetched text.

## Verification

- The section fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-twenty-fourth
  independent fetch during integration review; all 14 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  three drafting/authority-clause titles ("About This Information
  Sheet," "Enforcement and Remedies," "Acknowledgment of Receipt")
  collide with titles already used elsewhere in the corpus (including
  a topically adjacent "Enforcement and Remedies" clause in the
  Family Wage Protection Act document) — confirmed as intentional
  generic-title reuse, not a content duplicate. Independently
  reconfirmed this document is distinct from the existing Political
  Activity Protection document.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Captive Audience Meetings — Information Sheet
  (`captive_audience_meetings_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 3,639 → 3,647 clauses; 478 → 479 documents. First processed
  item of wave 110.
