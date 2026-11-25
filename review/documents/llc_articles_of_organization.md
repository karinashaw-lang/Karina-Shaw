# Research file: `llc_articles_of_organization` (LLC Articles of Organization)

MVP_FINISH_VERIFY_SHARPEN.md item 1.5. Sourced findings only — this file
states facts about California law and compares them against this
document's current clause set and interview; it does not advise anyone
on what to do.

Current clauseOrder (9 clauses, read directly from `data/clauses.json`,
not summarized): `llc_articles_declaration`, `llc_articles_filing_requirement`,
`llc_articles_required_content`, `llc_articles_name_requirements`,
`llc_articles_agent_designation`, `llc_articles_agent_for_service`,
`llc_articles_statement_of_information`, `llc_articles_annual_tax`,
`llc_articles_organizer_signature`. Current fields: `companyName`,
`managementStructure`, `agentName`, `agentAddress`, `organizerName`,
`articlesFiledDate` (the last one isn't referenced by any clause body in
*this* document — it feeds the Statement of Information filing-reminder's
90-day deadline calculation in the next-steps feature, confirmed by its
own `whyWeAsk` text, so its absence from this document's own clause
bodies is expected, not a gap).

## 1. Governing California law

The controlling statute is the Revised Uniform Limited Liability Company
Act, Cal. Corp. Code Title 2.6 (§ 17701.01 et seq.), specifically:

- **§ 17702.01** — formation by filing (subds. (a), (d), (e)) and the
  articles' required content (subd. (b)). Already quoted verbatim and
  cited in `llc_articles_filing_requirement` and
  `llc_articles_required_content`.
- **§ 17701.08** — the LLC name designator requirement (subd. (a)) and
  restricted words (subd. (e)). Already quoted verbatim in
  `llc_articles_name_requirements`.
- **§ 17701.13** — the duty to maintain an in-state office and agent for
  service of process (subd. (a)) and who may serve as agent (subd. (c)).
  Already quoted verbatim in `llc_articles_agent_for_service`.
- **§ 17701.16(c)** — service on the Secretary of State when no agent
  can be found. Already quoted verbatim in `llc_articles_agent_for_service`.
- **§ 17702.09** — the initial/biennial statement of information.
  Already quoted verbatim in `llc_articles_statement_of_information`.
- **Rev. & Tax. Code §§ 17941, 23153(d)(1)** — the $800 annual LLC tax
  and its SB 180 (2026) first-year-reduction amendment. Already quoted
  verbatim in `llc_articles_annual_tax`.

All six of the document's existing authority clauses already cite and
quote this corpus's own primary sources directly (leginfo.legislature.ca.gov),
each with its own `checkedDate` of 2026-09-01 and `status: verified`. This
research file did not find a basis to dispute any of those six clauses'
current text or citations — they match the statutory text found again
independently during this review (via secondary-source corroboration;
this fork had no working `WebFetch`/`web-fetch` access to re-quote
leginfo.legislature.ca.gov directly itself, unlike the clauses' own
original verification — see the Methodology note at the end of this file).

## 2. Elements California requires that this document's clause set omits — **one real gap found**

Cross-checking `llc_articles_required_content`'s own quoted text of
§ 17702.01(b) against this document's actual fields and drafting clauses
found a genuine omission:

> § 17702.01(b)(3): "The street address of the initial principal office
> and the mailing address of the limited liability company if different
> from the street address of the initial principal office."

**This document's own authority clause already states this requirement
correctly — but nothing in the document's fields or drafting clauses
actually asks for or states the LLC's principal office address.** The
only address collected is the agent for service of process's address
(`agentAddress`), which § 17701.13(c) makes clear is a *separate*,
independent requirement from the principal-office-address requirement
in § 17702.01(b)(3) — an LLC's agent can be a different person at a
different address than its own principal office. A buyer using this
document today would file articles of organization (via the content
this tool gives them) that are missing a statutorily required element,
with no field in the interview that would have caught it.

This is a launch blocker under this item's own rule. **Patch proposal**
below.

Everything else § 17702.01(b) requires is already collected and stated:
the lawful-purpose statement (`llc_articles_declaration`), the LLC name
(`companyName`, checked against `llc_articles_name_requirements`), the
agent's name and address (`agentName`/`agentAddress`,
`llc_articles_agent_designation`), and the manager-managed/single-manager
statement (`managementStructure`, stated unconditionally in
`llc_articles_declaration` — stating the member-managed default
explicitly is not required by the statute but is not prohibited by it
either, so this is not a gap, just more explicit than the statute
strictly demands).

### Patch proposal (for owner approval — not applied to `data/clauses.json`)

**New field**, added to `llc_articles_of_organization`'s `fields` array,
sharedFieldId so other documents (e.g. `statement_of_information`) can
reuse it:

```json
{
  "id": "principalOfficeAddress",
  "label": "LLC's initial principal office address (California or elsewhere)",
  "type": "address",
  "required": true,
  "placeholder": "456 Market St., San Francisco, CA 94105",
  "example": "456 Market St., San Francisco, CA 94105",
  "sharedFieldId": "principalOfficeAddress",
  "whyWeAsk": "California's articles-of-organization statute requires the filed document to state the LLC's initial principal office address -- a separate requirement from the agent for service of process's address above; the two can be different."
}
```

**New drafting clause**, `llc_articles_principal_office`, inserted into
`clauseOrder` right after `llc_articles_declaration` (so the address
statement sits with the other identity-establishing content, before the
agent section):

```json
{
  "id": "llc_articles_principal_office",
  "title": "Initial Principal Office",
  "kind": "drafting",
  "body": "The street address of {{companyName}}'s initial principal office is {{principalOfficeAddress}}."
}
```

This intentionally mirrors `llc_articles_agent_designation`'s own
drafting-clause shape (a single sentence stating one required address),
not a new authority clause — the requirement to state this address is
already fully covered by `llc_articles_required_content`'s existing
quote of § 17702.01(b)(3); no new citation is needed, only the missing
drafting content and its interview field.

Not proposed: a separate "mailing address if different" field/clause.
§ 17702.01(b)(3) only requires stating a mailing address *if* it differs
from the principal office address — adding an always-shown second
address field for a conditional case this document doesn't otherwise
support (no existing pattern in this corpus for "state X only if it
differs from Y" within one document) is a smaller, separate design
decision left to the owner, not bundled into this blocker's minimal fix.

## 3. Provisions California restricts or voids

- § 17701.08(e) (already quoted in `llc_articles_name_requirements`):
  an LLC's name may not include "bank," "trust," "trustee,"
  "incorporated," "inc.," "corporation," "corp.," or words suggesting
  the business of insurance.
- No provision was found specifically voiding or restricting *content*
  of the articles of organization itself beyond the naming restriction
  above and the required-content list in § 17702.01(b) — this document
  does not currently state or imply anything else that California law
  restricts or voids.

## 4. Federal overlay

Formation of an LLC under state law has no independent federal filing
requirement — the EIN application (a federal, IRS-level step, covered
by the separate `ein_info_sheet` document) and federal tax
classification (covered by `llc_operating_agreement_single_member`'s
own `llc_tax_classification`/`llc_tax_election_mechanics` clauses) are
deliberately handled by those other wedge documents, not duplicated
here. No gap in this document from that division of labor.

## 5. Changes in the last 24 months, and anything effective January 1 or July 1, 2027

**Already covered, not a gap**: `llc_articles_annual_tax`'s own `gap`
field already discloses the one real near-term change found —
Rev. & Tax. Code § 17941(g)(2), added by Stats. 2026, Ch. 85 (SB 180,
effective July 13, 2026), reduces the $800 annual LLC tax to $400 for an
LLC's first taxable year, for taxable years beginning on or after
January 1, 2027 and before January 1, 2030, for LLCs required to file a
return under § 18633.5. Multiple independent secondary sources (law-firm
guides, a tax-forms tracking site) corroborate this exact effective date
and cross-reference during this review — including one claim that an
earlier 2026 bill (reportedly SB 122) first added this subdivision with
an incorrect cross-reference, which SB 180 then corrected to § 18633.5.
That bill-history detail doesn't change the current operative text,
which the existing clause already cites correctly (§ 18633.5, not the
earlier miscite some sources describe). No independent re-verification
of § 18633.5's own scope was done in this review either — the existing
clause's own gap text already discloses that as unresolved, and this
review found nothing to add to it.

**Addendum (parent coordinating session, same review pass):** independently
confirmed via a direct fetch of the current codified § 17941(g)(2) text
(not a secondary summary) — `california.public.law/codes/revenue_and_taxation_code_section_17941`,
whose own footer reads "updated Jul. 13, 2026," matching SB 180's
chaptering date exactly. Verbatim operative text: *"For taxable years
beginning on or after January 1, 2027, and before January 1, 2030, every
limited liability company required to file a return under Section
18633.5 ... [shall] pay the annual tax to this state in the amount of
four hundred dollars ($400) for its first taxable year ... instead of
the amount specified in Section 23153."* This matches the existing
`llc_articles_annual_tax` clause's own gap text exactly — no discrepancy
found, no patch needed for this document on this point. (The parallel
`llc_annual_fee_info_sheet` review found the equivalent disclosure
missing there — that document's own § 17941 clause had not been updated
the same way; see that file's patch proposal.)

No other change in the last 24 months, and no other pending January 1
or July 1, 2027 effective date, was found affecting this document's
other six authority clauses.

## 6. Scope notes — entity types and situations this document does not fit

- **Licensed professionals cannot use this document at all.** Cal.
  Corp. Code § 17701.04(e) bars an LLC (domestic or foreign) from
  rendering "professional services" as Bus. & Prof. Code § 13401(a)
  defines that term — services lawfully renderable only under a
  license, certificate, or registration under the Business and
  Professions Code, the Chiropractic Act, or the Osteopathic Act
  (confirmed by multiple independent legal-guide sources describing
  the same cross-reference; this review did not independently re-quote
  § 17701.04(e)'s or § 13401(a)'s text directly — see Methodology
  note). A physician, dentist, psychologist, therapist, lawyer,
  accountant, architect, or engineer in California generally cannot
  form an LLC to practice their licensed profession through at all —
  the usual alternative is a professional corporation under the
  Moscone-Knox Professional Corporation Act (Corp. Code §§ 13400–13410),
  or for some professions a registered limited liability partnership.
  This document's own content doesn't claim otherwise, but nothing in
  it currently warns a licensed professional away from using it either
  — worth the owner's own decision on whether to add such a warning
  given how common this mistake reportedly is (several of the
  secondary sources found are law-firm pages specifically written to
  correct this exact misconception for one profession after another).
- **No series LLC support.** California's LLC act, as enacted, does not
  include series-LLC provisions — a 2012 bill (SB 323) that would have
  added them was withdrawn at the Secretary of State's own request, and
  multiple sources confirm no series-LLC legislation has been enacted
  since. This document's content is accurate for a single, undivided
  LLC and makes no series-LLC claim; it simply isn't usable for anyone
  trying to set up a California series structure, because California
  has none to set up.
- **Foreign LLC registration is a different filing.** This document
  covers forming a new LLC in California, not registering an
  out-of-state LLC to do business in California (a different
  Secretary of State filing, Application to Register a Foreign Limited
  Liability Company, governed by different sections of the same Act).
  Nothing in this document's text claims otherwise, but it isn't the
  right document for that situation.
- **Not a facsimile of the Secretary of State's actual prescribed PDF
  form.** This document states the *content* California law requires
  the articles to contain; it is not a pixel-for-pixel reproduction of
  the Secretary of State's own Form LLC-1 (which carries its own
  perjury-certification boilerplate and signature-block formatting set
  by the agency, not by statute). A buyer still files through the
  state's own form or portal using this content, the same relationship
  every other document in this corpus has to its own governing filing.

## 7. Does the interview capture the facts the clauses depend on?

| Field | Used by | Covered? |
|---|---|---|
| `companyName` | `llc_articles_declaration`, `llc_articles_agent_designation`, and every authority clause's prose | Yes |
| `managementStructure` | `llc_articles_declaration` | Yes |
| `agentName` | `llc_articles_agent_designation` | Yes |
| `agentAddress` | `llc_articles_agent_designation` | Yes |
| `organizerName` | `llc_articles_organizer_signature` | Yes |
| `articlesFiledDate` | Not used by this document's own clauses — feeds the Statement of Information filing-reminder elsewhere | Yes (by design, not a gap) |
| *(none — see §2)* | `llc_articles_principal_office` (proposed) | **No field exists yet for this** — the gap this file's patch proposal fixes |

Every `{{placeholder}}` that currently appears in any of this document's
9 clause bodies resolves to a real field. The one clause this document
is missing (`llc_articles_principal_office`, proposed above) is the only
place a field gap exists.

## Methodology note

This review's statutory-text confirmations relied on this corpus's own
already-verified clause citations (each independently checked and
dated 2026-09-01, per `data/clauses.json`) plus corroborating secondary
legal-guide sources (law-firm and formation-service sites, multiple
independent ones agreeing on each point) found via web search. This
fork's own tool access did not include a working page-fetch tool at the
time of this review, so the two new statutory references this file adds
beyond what was already in the corpus — § 17701.04(e)/§ 13401(a) (the
professional-services bar) and the series-LLC history — were not
independently re-quoted verbatim from leginfo.legislature.ca.gov the way
every existing clause in this document already was. Both are corroborated
by several independent secondary sources agreeing on the same statute
number and substance, which is why they're reported here as findings,
but a primary-source re-verification of those two specific points (not
the patch-proposal gap itself, which rests entirely on the corpus's own
already-primary-verified § 17702.01(b)(3) quote) is still worth doing
before they're treated as "verified" at the same `checkedDate`-tracked
standard the rest of this document's clauses carry.
