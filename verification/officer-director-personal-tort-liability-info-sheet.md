# Business Formation, new document: Personal Liability of Directors, Officers, Shareholders, and LLC Members for Torts They Personally Commit — Information Sheet

## Why this document

Processed item of wave 162 (Business Formation slot, continuing the
round-robin with waves 146/148/150/152/154/156/158/160). Read all 84
existing "Business Formation" document titles and ids in
`data/documents.json` before choosing a topic, and grepped both data
files for every candidate the brief suggested plus several of my own.
Results: the brief's suggestions were nearly all taken — distributions
to shareholders (`distribution_restrictions_info_sheet`), derivative
actions (`shareholder_derivative_lawsuit_info_sheet`),
interested-director transactions
(`self_dealing_interested_director_officer_transactions_info_sheet`),
the § 2115 quasi-California rule (`pseudo_foreign_corporation_2115_info_sheet`),
statutory close corporations (`close_corporation_info_sheet`), and the
§ 25102(f) limited offering exemption
(`california_limited_offering_exemption_info_sheet`) each already have a
dedicated sheet, and partnership formation by conduct (§ 16202) is
already treated inside the partnership-agreement and joint-venture
sheets (13 clause hits).

The chosen topic — when the people who run a California corporation or
LLC are personally liable in tort to an outsider for conduct they
themselves participated in — was confirmed genuinely open. Grep of both
data files: "Frances T." and "Village Green" — zero hits; "Haidinger" —
zero; "Michaelis" — zero; "de facto corporation" and "corporation by
estoppel" — zero; "Kadisha" — five hits, all inside one CUTSA
statute-of-limitations clause (`cutsasol_separate_claims_against_separate_defendants`)
citing *Cypress Semiconductor* and *Cadence*, none about personal tort
liability; "participation in tortious conduct" — one hit, in
`lpform_lp_liability_shield` (the limited partner statute, Corp. Code
§ 15903.03, a different provision). Corp. Code § 17703.04 appears in the
corpus only as subdivisions (a)–(b) in `alterego_llc_parity`; subdivision
(c), the tortious-conduct sentence used here, was unused.

The topic is the natural companion to — and is expressly distinguished
from — this corpus's alter ego sheet: alter ego asks whether to
disregard the entity, while this doctrine holds a participant liable
without disregarding anything. It is also the boundary of the corpus's
existing business-judgment-rule sheet, since *Frances T.* holds the
statutory standard of care does not govern an injured outsider's claim.

## What this document covers

Document id `officer_director_personal_tort_liability_info_sheet`;
11 clauses (`dirtort_*`): 2 drafting (applicability note and
closing/signature block) and 9 authority clauses, carrying 48
citation-quote instances drawn from *Frances T. v. Village Green Owners
Assn.* (1986) 42 Cal.3d 490 (23), *PMC, Inc. v. Kadisha* (2000) 78
Cal.App.4th 1368 (14), *Michaelis v. Benavides* (1998) 61 Cal.App.4th
681 (5), Corp. Code § 17703.04 (4), and Civ. Code § 2343 (2).

- **`dirtort_declaration`** (drafting) — applicability note naming the
  entity, the person, that person's position, and the conduct at issue
  (optional), while disclaiming any determination that anything
  happened or that any rule applies.
- **`dirtort_status_alone_neither_liability_nor_immunity`** — the two
  halves of the rule: no vicarious liability from status
  (*Frances T.* at 503; the *Haidinger-Hayes* formulation quoted at
  507), and no immunity from status ("Director status therefore neither
  immunizes … nor subjects him or her to vicarious liability," 505; the
  corporate fiction "never intended to insulate officers from liability
  for their own tortious conduct," 508), with *PMC*'s one-sentence
  restatement at 1379.
- **`dirtort_participation_authorization_or_knowing_consent`** — what
  participation means: joint liability where the director "personally
  directed or participated" (*Frances T.* 504); liability regardless of
  whether the act was on the corporation's behalf or the corporation is
  also liable (504); knowing consent or approval as participation
  (*PMC* 1380, 1388); conspirator liability (*PMC* 1380); and the
  policy-decision-versus-personal-participation contrast in *Michaelis*
  (686).
- **`dirtort_distinct_from_alter_ego_veil_piercing`** — "does not depend
  on the same grounds as 'piercing the corporate veil'" (*Frances T.*
  504); the legal fiction never intended to insulate officers (*PMC*
  1380); the "shield of his or her representative character" rationale
  (*Frances T.* 505).
- **`dirtort_duty_owed_to_the_third_person_requirement`** — the act must
  breach a duty owed to the third person, not to the corporation alone
  (*Frances T.* 505, 506); the traditional restriction of such agent
  liability to physical rather than pecuniary harm (505); *Michaelis*
  applying both limits (687).
- **`dirtort_what_a_plaintiff_must_show_negligence`** — the Supreme
  Court's two-part showing at 508–509 (specific authorization,
  direction, or participation, or knowledge of a hazardous condition
  under the directors' control plus negligent failure to act; plus the
  ordinarily-prudent-person element), the reasonable-reliance defense
  (509), and the independent duty of care (505).
- **`dirtort_business_judgment_rule_does_not_govern_third_party_claims`**
  — rejection of the argument that Corp. Code § 7231's standard controls
  a third party's claim (507); the rule's application to those owed a
  fiduciary obligation (507); no abrogation of the common law duty
  (507); *PMC*'s quotation of footnote 12's "societal duty" passage
  (1381).
- **`dirtort_agency_roots_civil_code_2343`** — the agency roots
  (*Frances T.* 505, including the *James v. Marinship* sentence);
  *PMC* 1381 on agency law, an agent's liability for her or his own
  acts, and its quotation of Civ. Code § 2343; and the statute's own
  text from leginfo (§ 2343 preamble and subdivision 3).
- **`dirtort_llc_members_managers_17703_04`** — Corp. Code § 17703.04(a),
  (a)(1), (a)(2) (the shield) and (c) (the shield does not affect a
  member's liability to third parties for the member's participation in
  tortious conduct, or under a written guarantee).
- **`dirtort_shareholders_investors_and_control_persons`** — *PMC*'s
  question presented and three-element holding (1372); shareholders not
  normally liable but liable when they specifically direct or authorize
  wrongful acts (1380); full damages against all participants in an
  intentional tort (1381).
- **`dirtort_signature_block`** (drafting) — closing and signature block
  with the standard non-advice bracket.

## Genuine findings

- **Two doctrines that are easy to conflate.** *Frances T.* says in
  terms that this liability "does not depend on the same grounds as
  'piercing the corporate veil,' on account of inadequate
  capitalization for instance, but rather on the officer or director's
  personal participation or specific authorization of the tortious
  act." The corpus's alter ego sheet covers the other doctrine; the
  `dirtort_distinct_from_alter_ego_veil_piercing` gap says so and does
  not repeat the unity-of-interest test.
- **The statute for LLCs says the same thing, but only about
  "members."** Corp. Code § 17703.04(c) preserves "the liability of a
  member of a limited liability company to third parties for the
  member's participation in tortious conduct." Subdivision (a)'s shield
  covers both members and managers; subdivision (c) names only members.
  The clause body tracks the statute and the gap discloses the
  asymmetry rather than smoothing it over.
- **The business judgment rule statute quoted in *Frances T.* is
  § 7231, not § 309.** The defendant was a condominium owners
  association, so the Supreme Court named the nonprofit mutual benefit
  corporation standard of care. The clause quotes the court's words
  (§ 7231) and the gap notes that the court elsewhere referred to
  §§ 7231 and 309 together and that this corpus's existing sheet covers
  § 309.
- **Physical harm versus pecuniary harm.** *Frances T.* quotes
  *Haidinger-Hayes* that agent liability for active participation "have
  been mostly restricted to cases involving physical injury, not
  pecuniary harm, to third persons [citations]" — a description of
  where courts had imposed such liability, not a categorical bar. The
  gap says so, and notes that the court analyzed the pecuniary claim
  before it under agency principles instead.
- **Procedural posture of every case is disclosed.** *Frances T.* was
  decided on demurrer (facts "as alleged"); *PMC* reversed a summary
  judgment, holding only that triable issues existed; *Michaelis*
  reviewed a nonsuit entered after the parties stipulated, for purposes
  of the motion, that the officer was individually negligent. Each
  affected gap says this, so that no clause reads as a finding that
  anyone was liable.
- **Star-page splits avoided rather than papered over.** Three
  *Frances T.* passages are interrupted mid-sentence by the reporter's
  markers (`*504` inside "may be liable *504 for such acts"; `*506`
  inside "to *506 impose personal liability"; `*508` inside "The legal
  *508 fiction"). No quotation crosses a marker: the Teledyne sentence
  is quoted as two adjacent fragments (disclosed in the
  `dirtort_status_alone_neither_liability_nor_immunity` gap), and the
  other two are quoted from the side of the break that reads
  continuously. The same technique handles the *Frances T.* sentence at
  508–509 whose internal citation separates its two halves, and the
  *Michaelis* sentence split around the italicized case name
  *Haidinger-Hayes*.
- **Every pin cite was machine-checked.** Each of the 42 case
  quotations was located in the fetched text and its page assigned from
  the nearest preceding star-page marker; 14 pin cites were corrected
  during drafting as a result (for example, *PMC*'s "knowing consent …
  suffices to impose personal liability" sits after `*1388`, not 1390).
  The two *PMC* introduction quotations precede the opinion's first
  marker (`*1373`, which falls inside the Standard of Review section),
  which places them on page 1372.
- **Nested quotations are attributed to the opinion that reproduces
  them.** *Teledyne Industries, Inc. v. Eon Corp.*,
  *United States Liab. Ins. Co. v. Haidinger-Hayes, Inc.*,
  *James v. Marinship Corp.*, *Wyatt v. Union Mortgage Co.*,
  *Spahn v. Guild Industries Corp.*, *Doctors' Co. v. Superior Court*,
  and *Golden v. Anderson* were not separately fetched; each gap says
  which words are quoted-within-a-quotation and that they are
  attributed to the fetched opinion.

## Honest gaps disclosed

The sheet does not define "participation," which the cases leave to
the facts. It does not address a corporation's or LLC's duty or right
to indemnify a participant (covered by this corpus's indemnification
sheet), insurance, the responsible-corporate-officer doctrine in
regulatory prosecutions, Labor Code § 558.1's separate statutory
liability of owners and officers for wage violations, or the personal
liability of an entity's ordinary employees beyond the general agency
rule in Civ. Code § 2343. It does not address whether managers (as
distinct from members) fall within Corp. Code § 17703.04(c)'s wording,
and says so. It quotes no federal decision and takes no position on
how these rules apply to a foreign entity doing business in
California.

## Method

**Statutes.** Corp. Code § 17703.04 and Civ. Code § 2343 were fetched
from `leginfo.legislature.ca.gov` via curl through the environment
proxy by two independent paths: first the per-section page
(`codes_displaySection.xhtml?lawCode=…&sectionNum=…`) with a Chrome
desktop User-Agent, then the whole-article page
(`codes_displayText.xhtml`, CORP Title 2.6 Article 3 and CIV Title 9
Chapter 1 Article 4) with a Firefox/Windows User-Agent. All six
statutory quotations were confirmed as exact whitespace-normalized
substrings of both fetches. The Civil Code article fetch required one
retry after the proxy reported `ws_closed_mid_exchange`; the retry
succeeded. WebFetch was not used.

**Cases.** All three opinions were located through CourtListener's
public, unauthenticated v4 search JSON (no MCP quota used): cluster ids
1318232 (*Frances T.*), 2274529 (*PMC*), and 2257967 (*Michaelis*).
Each opinion page was then fetched twice by curl with two distinct
header sets — Chrome/macOS with `Referer: https://www.courtlistener.com/`
plus Accept and Accept-Language, and Firefox/Windows (and, for
*Michaelis*, Firefox/Linux) with a different Referer — and the
extracted opinion text of the two fetches was byte-identical in every
case (*Frances T.* 107,825 chars; *PMC* 53,858; *Michaelis* 14,372).
The first *Michaelis* attempt returned an empty HTTP 202; a 20-second
wait and a third header set returned 200. The authenticated REST
`/api/rest/v4/opinions/` endpoint returned 401 without a token and was
not used. **No CourtListener MCP tool was called for this document.**

**Quote verification.** All 48 citation quotes were programmatically
confirmed as exact whitespace-normalized substrings of *both*
independent fetches of their source — first against the drafted
clauses, then again after merging, reading the quotes back out of
`data/clauses.json`. No quote required correction; no quote was
paraphrased, and no quote crosses a star-page marker or an omitted
citation.

**Phrase check.** As an independent, index-based second path for the
case law, one signature phrase per opinion was queried against
CourtListener's public search feed with a
`cluster_id:<id> AND "<phrase>"` filter. Each returned exactly one
result — the expected cluster:

- 1318232 — "Director status therefore neither immunizes a person from
  individual liability nor subjects him or her to vicarious liability"
  → count=1, *Frances T. v. Village Green Owners Assn.*
- 2274529 — "Corporate director or officer status neither immunizes a
  person from personal liability for tortious conduct nor subjects him
  or her to vicarious liability for such acts" → count=1, *PMC, Inc. v.
  Kadisha*.
- 2257967 — "did not merely make a corporate policy decision which was
  carried out by someone else" → count=1, *Michaelis v. Benavides*. (A
  first attempt using a phrase containing a curly apostrophe returned
  no count field; the apostrophe-free phrase above was used instead.)

The queries were spaced 20–25 seconds apart and none returned HTTP 429
on this pass.

**Corpus validation after merge.** Both data files parse; 5,533 clauses
and 664 documents; no duplicate clause or document ids; every
`clauseOrder` entry resolves to an existing clause across all 664
documents; every `{{placeholder}}` in every clause body and gap
resolves to a field declared by each document that uses the clause;
every authority clause in the corpus has the required key order
(`id,title,kind,status,checkedDate,body,gap,citations`), a non-empty
`gap`, and citations keyed `case,cite,url,quote`; every drafting clause
has exactly `id,title,kind,body`; no orphan clauses. Business Formation
now holds 85 documents.
