# Research file: `agent_for_service_of_process_info_sheet`

**MVP_FINISH_VERIFY_SHARPEN.md item 1.5.** Wedge cluster (7 of 7). Reviewed
2026-11-25 against the document's live state in `data/documents.json` /
`data/clauses.json` (all 5 authority clauses verified, `checkedDate` 2026-09-02).

Title: "Agent for Service of Process — Duties and Change of Agent Information
Sheet." Scope lock confirmed consistent throughout: this document explains the
requirement and the mechanics of changing an agent; it does not offer a
registered-agent service and does not file anything on the user's behalf
(`agentservice_change_of_agent_declaration`'s own body says so explicitly:
"It is not itself the Secretary of State's official statement form... and it
does not itself effect the change until that filing is accepted").

## 1. Governing California law

- Eligibility to serve as agent: a California resident individual, or a
  corporation registered as a "1505 agent" — `agentservice_eligibility`
  already cites Cal. Corp. Code § 1505(c) directly for the good-standing
  prerequisite, and the Secretary of State's own Business Entities FAQ for
  the individual-or-corporate-agent dichotomy and the advance-approval
  practice. This matches the same underlying rule this corpus already cites
  elsewhere for LLC/corporation formation (§ 17701.13(c), § 1502(b)) — the
  cross-reference in this clause's own `gap` field is accurate, confirmed by
  reading those other clauses.
- Corporate-agent certificate: Cal. Corp. Code § 1505(a)–(b), quoted directly
  in `agentservice_corporate_agent_certificate`, corroborated by the
  Secretary of State's Form 1505 instructions.
- Changing the agent after formation: Cal. Corp. Code § 1502(e) (corporations)
  and § 17702.09(d) (LLCs), both quoted directly in
  `agentservice_change_after_formation`. Confirmed this is genuinely the only
  mechanism — there is no separate "change of agent" form.
- Agent's own resignation: Cal. Corp. Code § 1503(a) (corporations) and
  § 17701.15(a) (LLCs), quoted directly in `agentservice_agent_resignation`.
- Consequences when no valid agent can be found: Cal. Corp. Code
  § 17701.15(e) (LLC duty to update) and § 1702(a) (corporation substituted
  service via the Secretary of State), quoted directly in
  `agentservice_consequences_no_valid_agent`. This clause's own `gap` field
  correctly notes the LLC's parallel substituted-service provision,
  § 17701.16(c), is already quoted in this corpus's LLC Articles of
  Organization document and isn't repeated here.

All five authority citations were spot-checked against the statutory section
numbers cited (not re-fetched line-for-line in this pass, since each one is
already a direct, dated quote with its own `checkedDate` of 2026-09-02 —
nine weeks old as of this review, well within this corpus's freshness
window) and found internally consistent with how California's agent-for-
service-of-process scheme actually works (corroborated independently via
web search against third-party legal-service summaries, which is a weaker
source than primary statutory text but sufficient to sanity-check, not
contradict, what's already cited).

## 2. Elements or notices California requires that this document's clauses omit

**One real, missing element, sourced below: a physical-street-address
requirement for the agent, with an explicit bar on a P.O. box or an "in care
of" address.** None of the seven clauses say this anywhere, even though the
document's own `newAgentAddress` field already models a street address
(placeholder: "123 Main St., Sacramento, CA 95814") without ever telling the
preparer why it has to be one. This is exactly the kind of common real-world
mistake this review item asked to check for.

Independent web search corroborates this requirement consistently across
multiple sources describing the Secretary of State's own Statement of
Information instructions (SI-550 for corporations; LLC-12 for LLCs):
"the address must be a physical California address, and entries cannot use a
P.O. Box, an 'in care of' address, or an abbreviated city name," and
separately, "a P.O. Box address is not accepted for the agent for service of
process." I could not fetch the Secretary of State's own PDF form
instructions directly in this research pass (no browser/fetch tool available
to this task) to pull the exact primary-source sentence the way every other
citation in this document does — **this needs a direct primary-source fetch
and quote (the current SI-550 and LLC-12 instructions, both at
bpd.cdn.sos.ca.gov) before it can be added as a fully verified clause**, not
just corroborated by secondary summaries. See the patch proposal below.

No other missing element was found. The resignation, certificate, and
consequences mechanics already match the statutory text directly.

## 3. Provisions California restricts or voids

- A business entity cannot designate itself as its own agent for service of
  process — already stated in `agentservice_eligibility`.
- A corporation cannot be designated as a corporate agent unless it is
  currently authorized to transact business in California and in good
  standing — already stated in `agentservice_eligibility`, sourced to
  § 1505(c).
- **The P.O.-box restriction from section 2 above is also, functionally, a
  restriction California places on what counts as a valid designation** —
  the Secretary of State will reject a filing that lists one. Same missing-
  element finding; not counted twice.

## 4. Federal overlay

None. Agent for service of process is a creature of California's own
corporate and LLC statutes and the Secretary of State's filing system; no
federal statute or regulation governs who may serve in this role for a
California entity, or how an entity changes it. Confirmed by the absence of
any federal citation anywhere in this document's existing clause set, and no
federal counterpart turned up in this review's own research.

## 5. Changes in the last 24 months, and anything effective Jan. 1 or Jul. 1, 2027

None found. Web search for recent amendments to Corp. Code §§ 1502, 1503,
1505, 1702, 17701.15, or 17702.09 turned up no 2026 or 2027 legislative
session bill, and third-party sources describe § 1505's text as unchanged
since a 2012 amendment (Stats. 2012, ch. 494, § 8) that took effect January
1, 2013. This is a secondary-source conclusion (I could not fetch
leginfo.legislature.ca.gov's own current bill-tracking pages directly in
this pass) and should be re-confirmed by a direct leginfo.ca.gov search
before the wedge publishes, per this corpus's own standing citation-recheck
discipline — but nothing in this research pass contradicts the document's
own clauses, all independently checked as recently as 2026-09-02.

## 6. Scope notes

- **Foreign entities.** This document's clauseOrder cites domestic-entity
  sections throughout (§ 1502, § 1505, § 1503, § 1702, § 17701.15,
  § 17702.09). `agentservice_agent_resignation`'s own § 1503(a) quote lists
  "Section 202, 1502, 2105, or 2117" as the sections an agent may have been
  designated under — §§ 2105/2117 are the foreign-corporation qualification
  statutes, meaning the underlying resignation mechanism already,
  correctly, covers a foreign corporation's agent too (the statute doesn't
  distinguish). But the document's own body text never says so, and its
  `entityType` field is free text with no foreign/domestic distinction
  surfaced anywhere in the interview or the clause bodies. This is a scope
  gap worth disclosing, not necessarily a launch blocker: the document's
  substance is still accurate for a foreign entity (the statutes it draws
  from already reach that case), but a foreign-entity user has no signal
  that this document covers their situation at all.
- **A registered corporate agent's own later FTB suspension.** The
  consequences clause already covers a corporate agent that "forfeits its
  right to transact intrastate business ... [or] has its corporate rights,
  powers, and privileges suspended" as a triggering event for the *entity's*
  duty to update — this is the right hook, already present, for the exact
  edge case this review was asked to check (a registered corporate agent
  getting FTB-suspended after being named). No gap here; flagged only to
  confirm it was checked, not missed.
- This document does not cover nonprofit corporations' or other entity
  types' (e.g., limited partnerships) separate agent-for-service-of-process
  statutes, which track closely but aren't identical in section number to
  the stock-corporation and LLC sections cited here. Not a launch blocker
  for the wedge (the wedge is single-member LLC formation), but worth
  knowing if this document is ever reused for a different entity type's
  document set.

## 7. Does the interview capture the facts the clauses depend on?

Fields: `companyName`, `entityType`, `priorAgentName`, `newAgentName`,
`newAgentAddress` (optional), `authorizedSignerName`, `dateSigned`,
`cityState`. All clause placeholders (`{{companyName}}`, `{{entityType}}`,
`{{priorAgentName}}`, `{{newAgentName}}`, `{{newAgentAddress}}`,
`{{authorizedSignerName}}`, `{{dateSigned}}`, `{{cityState}}`) are satisfied
by this field list — confirmed by reading both directly, not assumed.

**One real, non-blocking interview-capture gap:** whether the new agent is
an individual or a registered corporate agent is never asked directly — it's
inferred from whether the optional `newAgentAddress` field is filled in
(the field's own `whyWeAsk` text says as much: "Required only when the new
agent is an individual, not a corporate agent"). This is a plausible,
working design, but it has a real failure mode: someone naming an
*individual* agent who skips the optional address field (because they
misread "optional" as "not needed") would get a document that reads as if a
corporate agent were named, with no address at all — silently wrong, not
just incomplete. A direct yes/no or choice field ("Is the new agent an
individual or a registered corporate agent?") would remove the ambiguity
outright. This is a UX/data-integrity finding, not a legal-completeness
gap in the clauses themselves, so it does not block the wedge the way the
P.O.-box omission does — but it's worth the owner's attention since it sits
in the one document whose entire purpose is getting this exact fact right.

## Patch proposal (for owner approval before this wedge page publishes)

**Add a P.O.-box/physical-address requirement to `agentservice_eligibility`**
(or as a new clause) stating that the agent's California address must be a
physical street address — a P.O. box, mail-forwarding address, or "in care
of" address does not qualify — sourced to the Secretary of State's own
SI-550 (corporation) and LLC-12 (LLC) Statement of Information form
instructions, both at bpd.cdn.sos.ca.gov. **Before this patch is applied,
whoever has fetch access needs to pull the current SI-550 and LLC-12 PDF
instructions directly and quote the exact sentence**, the way every other
citation in this document already does — this review could not do that
itself (no browser/fetch tool available to this research task), so the
quote above is a secondary-source paraphrase, corroborated across multiple
independent sources but not independently verified against the primary PDF
the way this corpus's own citation standard requires. Do not copy the
secondary-source wording directly into `data/clauses.json` as if it were the
verified primary quote.

**Recommended, not required:** add an explicit `entityOriginState` or
similar field (foreign vs. domestic) and one sentence in
`agentservice_change_of_agent_declaration` or the eligibility clause noting
this document's rules apply the same way to a foreign entity registered to
transact business in California. Not a launch blocker — the underlying
statutes already reach this case — but worth doing before this document is
reused outside the single-member-LLC wedge.

**Recommended, not required:** add an explicit individual-vs-corporate-agent
choice field to remove the silent-failure-mode risk described in section 7.
