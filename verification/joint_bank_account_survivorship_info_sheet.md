# Estate Planning, new document: Joint Bank Accounts and Survivorship Rights — Information Sheet

## Why this document

Wave 145 (Estate Planning slot, 1×4 parallel pattern: Hiring, During
employment, Estate Planning, and Family Law each received one new
document to restore exact category balance). Before drafting,
`data/documents.json` was read in full and every one of the
category's existing ~75 titles was checked. The category already
covers a Payable-on-Death (POD) Account Designation information
sheet and a Transfer-on-Death (TOD) Security Registration information
sheet — both built on the same California Multiple-Party Accounts
Law (Prob. Code Part 2 of Division 5) — plus a Community Property
Agreement information sheet. None of the three, nor any other
existing document, quotes or restates the rules that govern a joint
bank account specifically: the net-contribution ownership rule
between living co-owners (§ 5301), the survivorship rule at a
party's death (§ 5302(a)), the rule that the account's form controls
that outcome (§ 5303(a)), or a joint survivor's right being valid
without will formalities (§ 5304, second sentence). The existing POD
information sheet references "the provisions of Chapter 3
(commencing with Section 5301)" only to say those provisions do
*not* govern a P.O.D. account — it never quotes what § 5301 or § 5302
actually say for the joint-account case those sections were written
for. A grep-based duplication check of `data/documents.json` for
"joint account", "5301", "multiple-party", "multi-party",
"representation", "per stirpes", and "per capita" confirmed no
existing document title or description already covers this topic.

## What this document covers

8 clauses (`jointaccount_*`): 2 drafting (`jointaccount_declaration`,
`jointaccount_signature_ack`) and 6 authority clauses, citing
Cal. Prob. Code §§ 5100, 5130, 5301(a)-(c), 5302(a), 5303(a) and (c),
5304, and 5305(d):

- **`jointaccount_definition`** — the statute's own short title
  (§ 5100) and the definition of "joint account" (§ 5130): payable on
  request to two or more parties, regardless of whether the account
  mentions survivorship.
- **`jointaccount_lifetime_ownership`** — § 5301's net-contribution
  ownership rule between living parties, the excess-withdrawal rule,
  and who may claim recovery of an excess withdrawal (three
  citations).
- **`jointaccount_survivorship_at_death`** — § 5302(a)'s rule that
  the surviving party or parties take the balance against the
  decedent's estate, and how shares are apportioned among multiple
  survivors.
- **`jointaccount_form_controls_modification`** — § 5303(a) (the
  account's form at death controls) and § 5303(c)'s first sentence
  (terms may be changed during a party's lifetime).
- **`jointaccount_nontestamentary_transfer`** — § 5304's second
  sentence: a joint survivor's statutory right is not denied for
  lack of will-executing formalities.
- **`jointaccount_community_property_note`** — § 5305(d): a joint
  account funded with community property does not, on its own,
  change community property rights.

## Overlap discipline with the existing POD information sheet

Because §§ 5301-5305 also govern P.O.D. and Totten trust accounts,
and the existing POD information sheet already quotes several
subdivisions of these same sections, each authority clause's `gap`
field explicitly identifies which subdivisions were already quoted
elsewhere in the corpus (and are deliberately not repeated here) and
which subdivisions are quoted fresh in this document. Concretely:
§ 5301(d)-(e), § 5302(b)-(e), § 5303(b) and the second sentence of
§ 5303(c), § 5304's first sentence, and § 5305(a)-(c) are all already
covered by the POD sheet and are not requoted; § 5100, § 5130,
§ 5301(a)-(c), § 5302(a), § 5303(a) and the first sentence of
§ 5303(c), § 5304's second sentence, and § 5305(d) were independently
fetched and verified fresh for this document and had not previously
been quoted in this corpus (confirmed by reading the POD sheet's
full clause set in `data/clauses.json` before drafting).

## Method

All seven statutory sections (Prob. Code §§ 5100, 5130, 5301, 5302,
5303, 5304, 5305) were fetched directly from
leginfo.legislature.ca.gov via `curl`, each **twice**, using two
distinct User-Agent strings:

- A: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) Groundtruth-Research-A/1.0`
- B: `curl/8.0 Groundtruth-Research-B/2.0 (independent fetch)`

Both fetches for every section returned HTTP 200. The `single_law_section`
div was extracted from each response, HTML tags stripped, HTML
entities unescaped, and the two independently-fetched copies of each
section were compared programmatically: all seven sections (5100,
5130, 5301, 5302, 5303, 5304, 5305) came back **byte-identical**
between the A and B fetches — no caching or mirroring artifacts
found. (One transient connection failure occurred on an early 5302
attempt and one on an early 5305 B-side attempt; both were retried
and succeeded on the next try, with no effect on the content
retrieved.)

Every quote used in the ten citations across this document's six
authority clauses was checked programmatically as an exact substring
of the corresponding fetched section, after normalizing only benign
HTML/whitespace artifacts: `&nbsp;` (`\xa0`, appearing after
subdivision letters like `(a)\xa0`) collapsed to a plain space, and
runs of whitespace (including the source's mid-sentence line-wrap
newlines and tab indentation, e.g. inside § 5301(c) and § 5302(b))
collapsed to a single space. No genuine defect — a character present
in a delivered quote but absent from the source — was found in any
of the ten quotes; all ten passed on the first check. This is the
same category of benign normalization already established elsewhere
in this corpus (e.g. the firearm-transfer-operation-of-law
information sheet's documented nbsp normalization) and did not
require a correction or a defect-disclosure sentence in any clause's
`gap` field, consistent with that precedent. The `gap` fields present
in this document instead disclose scope limits and the deliberate
cross-references to the existing POD information sheet described
above.

A CourtListener case-law search was not conducted for this document:
its scope is limited to the plain statutory ownership and
survivorship mechanics of Prob. Code §§ 5100-5305, which are stated
directly and unambiguously in the statutory text itself, paralleling
how the existing POD and TOD-security information sheets in this
corpus are built primarily on direct statutory citation.

## Honest gap(s) disclosed

This document does not address: § 5040 (cross-referenced by
§ 5302(a)'s "Subject to Section 5040" but not independently fetched
or verified); § 5301(d)-(e) and § 5302(b)-(e) (the parallel P.O.D.
and Totten trust rules, covered in this corpus's existing POD
information sheet); § 5303(b)'s account-modification methods and the
second sentence of § 5303(c) (also already covered there); § 5305(a)-(c)
(the community-property presumption, its rebuttal methods, and the
divorce cross-reference to § 5307, likewise already covered there);
and § 5307 itself. It does not determine the community or separate
property character of any specific account's funds, does not itself
open, modify, or close any account, and is not a substitute for the
signature card or account agreement a financial institution actually
uses.

## Corpus-wide validation

After merging, `data/documents.json` and `data/clauses.json` were
both re-parsed with `json.load` (no syntax errors), confirmed to
contain 597 documents and 4,820 clauses respectively, confirmed no
duplicate document or clause ids across the full corpus, confirmed
every id in this new document's `clauseOrder` resolves to an existing
clause, confirmed each new authority clause's keys are exactly
`{id, title, kind, status, checkedDate, body, gap, citations}` with
`status: "verified"` and each citation exactly
`{case, cite, url, quote}`, confirmed each new drafting clause's keys
are exactly `{id, title, kind, body}`, confirmed the new document's
keys are exactly `{id, title, description, categories, clauseOrder,
fields}`, and confirmed the Estate Planning category now totals 76
documents (75 + this one).
