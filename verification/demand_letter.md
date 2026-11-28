# Consumer & Civil Court, new document: General Demand Letter (Informal)

## Why this document

Highest UPL-risk document added in this batch. A demand letter
asserts, on its face, that the recipient owes something or must
do/stop doing something — closer to "legal position-taking" than a
roommate agreement or bill of sale. Built as a strictly neutral
format/template: the user supplies their own facts (open narrative
field) and their own request; the document never asserts the claim
has merit, never cites law as if it supports the user's specific
situation, and never uses the "you are entitled to X because of
[statute]" pattern. Modeled on `waiting_time_penalty_demand` and
`right_of_publicity_info_sheet`'s tone and disclaiming conventions
(reviewed both in full before drafting), but made general-purpose:
not tied to any one claim type, no dropdown of legal theories.

## What this document covers

7 clauses: 5 drafting (purpose/sender/recipient, statement of facts,
requested action/amount/deadline, if-the-deadline-passes, signature)
and 2 authority clauses, exactly the two research topics specified:

- **`demandletter_rosenthal_scope`** — California's debt-collection
  statute's actual scope.
- **`demandletter_extortion_boundary`** — the Penal Code § 519/523
  extortion boundary.

## Research findings (including a correction to the prompt's own assumption)

**Rosenthal Act scope — the prompt's assumption was backwards.** The
task brief assumed the Rosenthal Fair Debt Collection Practices Act
(Civil Code § 1788 et seq.) might not even apply to a person
collecting their own debt, since it "restricts DEBT COLLECTOR conduct
specifically." Fetching Civil Code § 1788.2(c) directly (via mirror;
leginfo blocked, see below) shows the opposite: the Act defines "debt
collector" as "any person who, in the ordinary course of business,
regularly, **on behalf of himself or herself or others**, engages in
debt collection" — language that explicitly includes a person
collecting on their own behalf. *Davidson v. Seterus, Inc.* (Cal. Ct.
App., 4th Dist., Div. 1, 2018) confirms this is deliberate and
settled California law, not an oversight: "the definition of 'debt
collector' provided in the Rosenthal Act is far broader than that
provided in the FDCPA," precisely because the federal Act "excludes
from the definition of 'debt collector' any person collecting ...
any debt owed or due ... to the extent such activity ... concerns a
debt which was originated by such person" — i.e., the FDCPA exempts
original creditors; the Rosenthal Act does not.

So the real, more nuanced scope question isn't "does Rosenthal ever
reach a self-collecting creditor" (it can) — it's whether the
sender's debt-collection activity is conducted "in the ordinary
course of business" and "regularly," which is a fact question about
the sender's own pattern of activity, not about whether they are the
original creditor. Also disclosed: the Act's *substantive*
protections reach only a "consumer debt" (Civil Code § 1788.2(f)) —
money owed by a natural person from a consumer credit transaction —
so a non-consumer debt is outside the Act regardless of collector
status. The clause states the finding plainly and does not claim this
document resolves either fact question for any actual sender.

**Extortion boundary.** Penal Code § 519 lists the threats that can
constitute extortion-inducing fear, including a threat to accuse
someone of a crime or to expose/impute a "deformity, disgrace, or
crime"; Penal Code § 523(a) makes sending a letter containing such a
threat, with intent to extort property, independently criminal. The
leading case, *Flatley v. Mauro* (2006) 39 Cal.4th 299, 332-333 &
fn. 16, draws the boundary the prompt anticipated: a demand letter
that asserts a legal claim and threatens to sue is not, by itself,
extortion — footnote 16 states in terms that "rude, aggressive, or
even belligerent prelitigation negotiations ... that may include
threats to file a lawsuit, report criminal behavior to authorities or
publicize allegations of wrongdoing" do not "necessarily constitute
extortion." What crossed the line on Flatley's facts was conditioning
payment on *withholding* an accusation of a crime (there, rape) —
using the threat of exposure/accusation itself, rather than the
underlying legal claim, as the leverage.

The clause's `gap` also flags that Flatley's own footnote 16 expressly
limits its "as a matter of law" holding to "the specific and extreme
circumstances of this case" — California has not reduced this to a
bright-line rule — and, more importantly for this specific document,
that the Statement of Facts and Requested Action clauses are open text
the user writes, which this document has no mechanism to screen for
extortionate content. That limitation is disclosed plainly rather than
glossed over.

## How claim-merit assertions were avoided in the letter template itself

- No clause states or implies the user's claim has merit. The
  Statement of Facts clause explicitly disclaims: "The description
  above reflects {{senderName}}'s own understanding and account of
  events. It is not a finding or determination by any court, agency,
  or other decision-maker, and nothing in this letter states that
  {{recipientName}} has any particular legal obligation to
  {{senderName}}."
- The factual-narrative field (`factualNarrative`) is a single open
  longtext field — never a dropdown of legal theories or causes of
  action, and nothing in the clause bodies characterizes the
  underlying facts as any particular statutory or common-law claim.
- The Requested Action clause disclaims that the deadline and the
  amount are the sender's own choice, not a court- or statute-imposed
  obligation.
- The "If the Deadline Passes" clause describes next steps the sender
  "may consider" ("renewing or revising this request, pursuing
  informal resolution, filing an action in small claims court or
  another court ... or any other lawful remedy") and explicitly states
  "Nothing in this letter states that any particular option will be
  pursued, or that pursuing any option would result in a particular
  outcome" — never "you should sue," never an assertion that a lawsuit
  would succeed.
- Checked every drafting clause body against `lint/advisory_phrases.json`
  (also enforced by `tools/validate_corpus.py`) and against the
  "you are entitled to X because of [statute]" pattern by hand — none
  present.

## Honest gaps disclosed

- **leginfo.legislature.ca.gov was unreachable in this environment** —
  confirmed with a direct `curl` (HTTP 403, Cloudflare interstitial
  challenge page) and again via the `WebFetch` tool and again via
  `curl` with an alternate browser User-Agent string, all three
  blocked identically. Fell back to `law.onecle.com` for Civil Code
  § 1788.2(c)/(f) and Penal Code §§ 519 and 523, disclosed as
  `sourceClass: "mirror"` (not `"primary-official"`) on every such
  citation, both in the `gap` text and in the citation's own field.
- `demandletter_rosenthal_scope`'s gap discloses that this clause does
  not resolve, for any actual sender, whether their collection
  activity is "regular"/"ordinary course of business," whether the
  underlying debt is a "consumer debt," or what the Act's substantive
  prohibitions (§§ 1788.10-1788.17, not sourced here) would require —
  only the threshold "who is a debt collector" question is addressed.
- `demandletter_extortion_boundary`'s gap discloses that Flatley's
  holding is expressly limited to its own "specific and extreme"
  facts (no bright-line rule exists), and that this document cannot
  screen the user's own free-text narrative/request fields for
  extortionate language.

## Method

- Civil Code § 1788.2: fetched directly via `curl` from
  `law.onecle.com/california/civil/1788.2.html` (HTTP 200); quotes
  for (c) and (f) copied verbatim from the extracted plain text.
- Penal Code §§ 519, 523: same method, `law.onecle.com/california/penal/519.html`
  and `.../523.html` (both HTTP 200).
- *Davidson v. Seterus, Inc.*: located via CourtListener keyword search
  (`"Rosenthal Act" "debt collector" "on behalf of himself or herself"`),
  read via `search_document`/`read_document` against the opinion's
  `html_with_citations` text (opinion id 4254206 / cluster id 4476953);
  quote copied verbatim from the returned snippet.
- *Flatley v. Mauro*: located via CourtListener keyword search
  (`Flatley v. Mauro extortion demand letter`), footnote 16 read in
  full via `search_document` against opinion id 9789156 / cluster id
  2600567; quote copied verbatim, including the page break and footnote
  boundary confirmed from the surrounding text.
- All six citation quotes individually spot-checked as verbatim
  substrings of the fetched/returned text before being written into
  `data/clauses.json`.

## Verification

- `python3 tools/validate_corpus.py` — passes (742 documents / 6,628
  clauses / 11,694 citations after this addition; no advisory-phrase,
  contradiction, jurisdiction-mismatch, or field-usage failures).
- `node tests/golden/golden.js --update` then `node tests/golden/golden.js`
  (served via `python3 -m http.server 8933`) — fixture created and
  check mode passes, 742/742 documents match their golden fixture.
- Confirmed both authority clauses render the app's own automatic
  "source hasn't been independently confirmed against the government's
  own primary text yet" mirror-sourcing banner in the rendered output,
  consistent with `sourceClass: "mirror"`.
- Added `search/lay_terms.json` entry for `demand_letter` (required by
  `validate_corpus.py`); no other per-document search/filing data files
  needed changes.

## Net changes

- New document: General Demand Letter (Informal) (`demand_letter`), 7
  clauses (2 authority + 5 drafting), in the "Consumer & Civil Court"
  category. New fields: `factualNarrative`, `requestedAction`,
  `requestedAmount`, `demandDate` (`senderName`/`recipientName`
  declared with `sharedFieldId`s `requestingPartyName`/`recipientName`;
  `factualNarrative` and `demandDate` also carry `sharedFieldId`s
  `incidentDescription` and `demandDate` respectively).
- Corpus: 741 → 742 documents; 6,621 → 6,628 clauses.
