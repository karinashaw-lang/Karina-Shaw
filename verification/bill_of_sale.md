# Consumer & Civil Court, new document: Bill of Sale (General Personal Property)

## Why this document

No general bill of sale existed in the corpus. This document covers a
private sale of personal property (furniture, electronics, appliances,
equipment) between two individuals — not a vehicle, not real property —
and surfaces two California-specific legal realities a reader would not
otherwise learn from a generic bill-of-sale template: (1) the Commercial
Code's implied warranty of merchantability is conditioned on the seller
being a "merchant," which a private, one-time seller usually is not, so
the warranty often does not even arise in the first place; and (2) an
"as is" sale is governed by a specific, narrower statutory rule than a
general disclaimer is.

## What this document covers

7 clauses: 4 drafting (parties/item, price/payment, as-is condition
statement, signatures) and 3 authority clauses:

- **`bill_of_sale_merchant_warranty_scope`** (Com. Code §§ 2314(1),
  2104(1), 2312(1)-(2)) — the implied warranty of merchantability is, by
  the statute's own text, conditioned on the seller being a "merchant
  with respect to goods of that kind," and a private individual selling
  their own property in a one-off sale generally does not meet that
  definition — meaning the warranty frequently does not attach to a
  sale like this one at all, independent of any as-is language. The
  warranty of title (§ 2312) is a separate warranty that is *not*
  merchant-conditioned.
- **`bill_of_sale_as_is_disclaimer_requirements`** (Com. Code
  §§ 2316(2), 2316(3)(a), 2312(2)) — "as is"/"with all faults" language
  is its own, separately sufficient statutory safe harbor under
  § 2316(3)(a), distinct from and not subject to § 2316(2)'s general
  "must mention merchantability and be conspicuous" rule for other
  disclaiming language. The title warranty (§ 2312) has its own,
  differently worded exclusion standard that this document does not
  assume a plain as-is statement automatically satisfies.
- **`bill_of_sale_vehicle_real_estate_scope`** (Veh. Code §§ 5600(a),
  5900(a)) — a registered vehicle has its own, separate statutory
  title-transfer and DMV-notice regime that this document does not
  perform, and real property is out of scope entirely.

## Research finding (reported as found, including where it was non-obvious)

The implied warranty of merchantability under Com. Code § 2314(1) only
arises "if the seller is a merchant with respect to goods of that
kind," and § 2104(1) defines "merchant" by reference to dealing in that
kind of goods or holding oneself out, by occupation, as having relevant
trade knowledge or skill. A private individual selling, say, a used
television in a one-off personal sale is generally *not* a "merchant"
with respect to televisions under that definition — so § 2314's implied
warranty of merchantability frequently does not attach to a private,
non-merchant sale in the first place, regardless of whether the bill of
sale includes "as is" language. That is a genuinely easy point to get
wrong by assuming warranty law treats every sale alike; the statute's
own text draws the merchant/non-merchant line explicitly.

A second, related finding: "as is" is not just casually effective —
§ 2316(3)(a) makes it a specific, named statutory safe harbor
("expressions like 'as is,' 'with all faults'... [exclude] all implied
warranties") that operates differently from, and is not subject to, the
general disclaimer rule in § 2316(2) (which otherwise requires
disclaiming language to "mention merchantability" and, if written, be
"conspicuous"). The statute expressly makes subdivision (2) "subject to
subdivision (3)," so the as-is safe harbor is the controlling path for
that specific phrasing. Separately, the warranty of title under § 2312
is *not* conditioned on merchant status at all, and is excluded only
under § 2312(2)'s own, differently worded standard — so a plain "as is"
statement addressing merchantability/fitness does not, on the statute's
face, automatically address the title warranty too. This document
discloses that open question in the `bill_of_sale_as_is_disclaimer_requirements`
clause's `gap` rather than assuming either answer.

## Method and per-citation fetch attempts

`leginfo.legislature.ca.gov` was tried first for every citation and was
blocked in this sandbox on every attempt: each direct request returned
HTTP 403 with a Cloudflare "Just a moment..." challenge page (not the
statute), confirmed individually, by direct `curl`, for all six
sections actually cited (Com. Code §§ 2104, 2314, 2316, 2312; Veh. Code
§§ 5600, 5900), and confirmed a second way for Com. Code § 2314
specifically — once by `curl` and once via the WebFetch tool — which
returned the same HTTP 403 both times. (Com. Code § 2315, fitness for a
particular purpose, was pulled from the mirror and read while scoping
this document but is not cited in any clause, so leginfo was not
separately tried for it.) No leginfo fetch for any cited section
succeeded, so no `leginfo.legislature.ca.gov` citation and no
`effectiveCycleChecked` key appear in this document's clauses.

Every citation therefore falls back to `law.onecle.com`'s reproduction
of the California codes, disclosed as `sourceClass: "mirror"` (not
`primary-official`) in every citation and called out again in each
clause's `gap`. For each section, the mirror page was located by
walking onecle's own table of contents (division → chapter → article →
section, e.g. `california/commercial/division-2/chapter-3/index.html`
→ `2314.html`) rather than guessing a URL pattern, then fetched once
with `curl` and the section text extracted from the HTML. Every
`citations[].quote` in this document was then checked as a literal
Python substring match against that fetched HTML text (tags stripped,
whitespace collapsed) before being written into `data/clauses.json` —
all six checks returned `True`; none were reconstructed from memory.

| Citation | leginfo attempt | Mirror used |
|---|---|---|
| Com. Code § 2314(1) | HTTP 403 (curl); HTTP 403 (WebFetch) | `law.onecle.com/california/commercial/2314.html` |
| Com. Code § 2104(1) | HTTP 403 (curl) | `law.onecle.com/california/commercial/2104.html` |
| Com. Code § 2312(1)-(2) | HTTP 403 (curl) | `law.onecle.com/california/commercial/2312.html` |
| Com. Code § 2316(2) | HTTP 403 (curl) | `law.onecle.com/california/commercial/2316.html` |
| Com. Code § 2316(3)(a) | HTTP 403 (curl) | `law.onecle.com/california/commercial/2316.html` |
| Veh. Code § 5600(a) | HTTP 403 (curl) | `law.onecle.com/california/vehicle/5600.html` |
| Veh. Code § 5900(a) | HTTP 403 (curl) | `law.onecle.com/california/vehicle/5900.html` |

(§ 2312(2) is cited twice, once in each of two clauses, from the same
fetched page.)

## What was disclosed rather than silently resolved

- **Mirror, not primary**: every citation's `sourceClass` is `mirror`
  because leginfo was unreachable for all of them; this is stated
  plainly in each authority clause's `gap`, not left implicit.
- **Merchant-status line-drawing**: whether a specific seller who
  occasionally resells goods has crossed into "merchant" status under
  § 2104(1) is a fact-specific question with no bright line in the
  statute; the `bill_of_sale_merchant_warranty_scope` clause's `gap`
  says this directly rather than asserting a private seller is never a
  merchant.
- **§ 2315 (fitness for a particular purpose)** is a separate implied
  warranty this document does not analyze; its `gap` says so rather
  than silently folding it into the merchantability discussion.
- **Interaction between § 2316's "as is" safe harbor and § 2312's title
  warranty**: the statute puts these in different sections with
  different wording, and this document does not assume a plain "as is"
  statement also disclaims the title warranty — that open question is
  named in the `gap` rather than resolved either way.
- **"Unless the circumstances indicate otherwise" (§ 2316(3)(a))** is
  undefined by the statute's own text; no case law construing that
  phrase is cited, and the `gap` says that directly rather than citing
  a case for it without having read one.
- **Scope limits named in `bill_of_sale_vehicle_real_estate_scope`'s
  `gap`**: this document does not walk through the actual DMV forms
  involved in a vehicle transfer, and does not address vessels,
  mobilehomes, or other separately title-registered property that may
  have its own transfer statute.

## Verification

- All seven citation `quote` values confirmed as verbatim substrings of
  the actually-fetched mirror HTML (tags stripped, whitespace
  collapsed), by direct Python string-membership check — not
  reconstructed from memory.
- `leginfo.legislature.ca.gov` tried for every cited section (six
  sections, one tried twice via two different tools) and failed
  identically (HTTP 403, Cloudflare challenge) every time — recorded
  above per citation rather than inferred from a single representative
  test.
- Checked for `{{` leakage in every new clause's `body`/`gap`/`title`
  and every citation's `case`/`cite`/`quote`/`url` — clean.
- Checked every `{{field}}` token used in a clause body/gap against
  `bill_of_sale`'s declared `fields` (none undeclared) and every
  declared field against clause usage (none unused).
- Checked `data/documents.json` and `data/clauses.json` for an existing
  `bill_of_sale` id/title or any of the seven new clause ids before
  adding anything — none existed.
- Reused five existing shared-field-library entries (`sellerName`,
  `buyerName`, `propertyDescription`, `purchasePrice`, `agreementDate`
  from `schema/fields/`) rather than declaring new document-local
  fields, after checking the library first.
- `python3 tools/validate_corpus.py` — passed (initially failed once,
  on the pre-existing corpus-wide rule that every document needs an
  entry in `search/lay_terms.json`; fixed by adding a `bill_of_sale`
  entry there, appended, not altering any existing entry).
- Golden fixture: `node tests/golden/golden.js --update` created
  `tests/golden/fixtures/bill_of_sale.json` as the only new/changed
  fixture (741/742 existing fixtures untouched); `node
  tests/golden/golden.js` (check mode) then reported 742/742 documents
  matching their golden fixture.

## Net changes (this pass)

- `data/clauses.json`: +7 clauses (3 authority, 4 drafting), all newly
  appended at the end of the `clauses` array; nothing else in the file
  changed (confirmed by a JSON round-trip diff before editing).
- `data/documents.json`: +1 document (`bill_of_sale`), appended at the
  end of the array; nothing else in the file changed (same round-trip
  check).
- `search/lay_terms.json`: +1 entry (`bill_of_sale`), appended;
  required by `tools/validate_corpus.py`'s existing search-coverage
  check, which fails the build for any document with no lay-terms
  entry.
- `tests/golden/fixtures/bill_of_sale.json`: new fixture file.
