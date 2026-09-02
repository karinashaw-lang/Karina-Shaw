# Business Formation, new document: Agent for Service of Process — Duties and Change of Agent Information Sheet

## Why this document

The corpus has many passing clauses about *designating* an agent for
service of process inside formation documents (LLC Articles of
Organization, Articles of Incorporation, Statement of Information,
etc.), but none address who is eligible to serve as a corporate
registered agent, the certificate a corporation must file to qualify,
or — the core gap — the separate statutory mechanism for changing an
agent after formation. Confirmed as a genuine, deeper gap by grepping
the corpus for "agent for service" / "agent_designation" and reading
every existing hit before drafting.

## What this document covers

7 clauses: 2 drafting (change-of-agent declaration, closing/signature)
and 5 authority clauses:

- **`agentservice_eligibility`** (Cal. Sec'y of State FAQ; Corp. Code
  § 1505(c)) — who is eligible to serve as an agent.
- **`agentservice_corporate_agent_certificate`** (Corp. Code
  § 1505(a)-(b); SOS Form 1505 Instructions) — the certificate a
  corporation must file to become a registered corporate agent.
- **`agentservice_change_after_formation`** (Corp. Code § 1502(e);
  § 17702.09(d); SOS FAQ) — an entity changes its agent via a current
  Statement of Information, not a separate filing.
- **`agentservice_agent_resignation`** (Corp. Code § 1503(a);
  § 17701.15(a)) — the agent's own, agent-initiated resignation
  mechanism.
- **`agentservice_consequences_no_valid_agent`** (Corp. Code
  § 17701.15(e); § 1702(a)) — consequences when no valid agent can be
  found.

## Genuine corrections and findings

- **The core, non-obvious finding**: California has no distinct
  "change of agent" filing separate from the Statement of Information
  system. Both the corporation statute (§ 1502(e)) and the LLC statute
  (§ 17702.09(d)) require filing a *current statement* — the same form
  used for periodic reporting — to change the agent, not a dedicated
  form. This corrects a plausible but incorrect assumption that
  changing an agent might be done by amending the articles; the
  document cross-references, without re-quoting, the corpus's existing
  Certificate of Amendment clause confirming articles generally cannot
  be amended to alter agent information once a Statement of Information
  has been filed.
- Confirmed the certificate a corporation must file to become a
  registered "1505 agent" (Corp. Code § 1505(a)) requires an officer's
  signed statement of California street address(es) and authorized
  recipients — a genuinely new, previously uncited layer beneath the
  corpus's existing "corporation that has complied with Section 1505"
  references.
- Confirmed a genuinely separate mechanism exists for an agent's own
  resignation (§ 1503(a) for corporations; § 17701.15(a) for LLCs) —
  initiated by the agent, not the entity, using a distinct Secretary of
  State form.
- A new finding not previously in the corpus: the corporation's own
  substituted-service-on-the-Secretary-of-State provision (§ 1702(a))
  — the corporate analog to the LLC's § 17701.16(c), already cited
  elsewhere in the corpus.
- Confirmed the LLC statute's specific list of triggering events
  requiring a prompt Statement of Information update (§ 17701.15(e):
  agent death, resignation, no longer residing in-state, or a
  corporate agent's dissolution/withdrawal/suspension) — a different
  subsection than the corpus's existing § 17701.16(c) citation, so not
  a duplicate.

## Honest gap disclosed

Two Secretary of State informational sources could not be reached
cleanly (a page specifically titled "registered corporate agents" and
the LLC-12/SI-550 form PDFs); the delivering agent relied instead on
the SOS Business Entities FAQ page and the Form 1505 PDF, which worked
and were sufficient, and disclosed the unreachable sources rather than
guessing their content.

## Method

Fetched Cal. Corp. Code §§ 1502, 1503, 1505, 1702, 17701.15, and
17702.09 directly from `leginfo.legislature.ca.gov` via curl (the
environment's WebFetch tool is blocked for this domain by the egress
proxy, confirmed directly), each verified against a second,
independent curl fetch with a distinct User-Agent — confirmed
text-identical. The Secretary of State's Business Entities FAQ page
and Form 1505 instructions PDF were each fetched twice and confirmed
identical (MD5-identical bytes for the PDF). All 12 citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same section
  (treated as one source) versus genuinely independent sections or
  agency sources; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`companyName`, `entityType`, `authorizedSignerName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention. New fields: `priorAgentName`, `newAgentName`,
  `newAgentAddress`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Agent for Service of Process — Duties and Change of
  Agent Information Sheet (`agent_for_service_of_process_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Business Formation
  category. New fields: `priorAgentName`, `newAgentName`,
  `newAgentAddress`.
- Corpus: 1,719 → 1,726 clauses; 218 → 219 documents. Completes wave
  42 (Petition for Legal Separation, Elder Abuse Restraining Order,
  EIN Information Sheet, Agent for Service of Process).
