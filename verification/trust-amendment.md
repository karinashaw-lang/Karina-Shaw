# Estate Planning, fourteenth document: Trust Amendment

## Why this document

This project already has a Revocable Living Trust document (trust
*creation*) and a Codicil to a Will (*will* amendment). Neither covers
the actual mechanism for changing an existing revocable trust after
it's created. The research confirmed no overlap: the Revocable Living
Trust clauses are limited to Probate Code §§ 15200, 15201, 15203,
15205, 15400, 15401(a); none of them touch § 15402 (the modification
power) or the modification-specific case law below, so this is a
genuinely distinct document.

## What this document covers

9 clauses: 3 drafting (declaration identifying the trust and the
change, ratification of unchanged provisions, signature/notarization)
and 6 authority clauses:

- **`trustamend_statutory_basis`** (§ 15402) — the settlor's
  independent statutory power to modify a revocable trust, separate
  from the power to revoke it.
- **`trustamend_revocation_procedure`** (§ 15401(a)) — the actual
  procedure the modification power incorporates by reference: the
  trust instrument's own method, or a signed writing delivered to the
  trustee if the instrument doesn't make its method exclusive.
- **`trustamend_exclusive_method`** (§ 15401(a)(2) cross-reference;
  *Huscher v. Wells Fargo Bank* (2004) 121 Cal.App.4th 956) — what
  happens when the trust instrument does make its stated method
  exclusive.
- **`trustamend_capacity`** (§§ 812, 811(a)-(b); *Andersen v. Hunt*
  (2011) 196 Cal.App.4th 722) — the capacity standard, including the
  narrower holding that the will-specific standard applies only when
  an amendment closely resembles a will or codicil in content and
  complexity.
- **`trustamend_joint_settlors`** (§ 15401(b)) — each settlor's power
  over their own contributed portion in a trust with more than one
  settlor.
- **`trustamend_vs_restatement`** (§ 15402, disclosed reuse) — that
  "amendment" versus "restatement" is a drafting convention, not a
  distinct statutory category.

## Genuine corrections and honest gaps caught during research

- The task's working assumption that § 15402 offers a "clear and
  convincing evidence of intent" alternative modification method
  (language found in some other states' statutes and the Restatement
  Third of Trusts) was checked directly against the current statutory
  text and found not present — § 15402 is a single sentence that
  incorporates the revocation procedure, nothing more. Disclosed
  rather than attributed to the statute.
- No California Supreme Court decision was found squarely deciding
  whether a trust instrument can make its own amendment method
  exclusive. *Donkin v. Donkin* (2013) 58 Cal.4th 412 was checked and
  found to address a different question (no-contest-clause law), so it
  is not cited. The Court of Appeal decision that is cited
  (*Huscher*) states the current-law rule in dicta — the case's actual
  holding turned on a pre-1987 trust governed by prior law — disclosed
  explicitly in the gap field rather than presented as squarely
  decided.
- The capacity clause's holding is narrower than a blanket rule: the
  will-specific capacity standard applies to a trust amendment only
  when the amendment, in content and complexity, closely resembles a
  will or codicil — quoted precisely from *Andersen v. Hunt* rather
  than generalized.
- No separate statute for joint-trust modification beyond § 15401(b)
  was found; the Family Code § 761 cross-reference for community
  property is disclosed as not independently researched.

## Defect caught and fixed during integration

`trustamend_statutory_basis` cites a single statutory section but
initially lacked the standard explicit single-source disclosure
sentence — added during integration.

## Method

Fetched Probate Code §§ 15402, 15401, 811, 812 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. *Huscher v. Wells Fargo Bank* and *Andersen v. Hunt*
verified via CourtListener (direct `curl` to courtlistener.com is
blocked by a WAF in this environment).

## Verification

- All citations fetched twice independently with distinct User-Agents
  (case law via CourtListener); confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Signature and Notarization") is the pre-existing
  generic drafting-title pattern.
- Field names (`settlorName`, `settlorCounty`, `trustName`,
  `trusteeName`) independently confirmed against the existing
  Revocable Living Trust document's fields before use.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across all 73 documents — clean.

## Net changes

- New document: Trust Amendment (`trust_amendment`), 9 clauses (6
  authority + 3 drafting), in the Estate Planning category. New
  fields: `originalTrustDate`, `amendmentDate` (all other fields
  reused from the Revocable Living Trust document's convention).
- Corpus: 541 → 550 clauses; 72 → 73 documents.
