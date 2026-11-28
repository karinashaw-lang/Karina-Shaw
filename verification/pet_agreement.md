# Consumer & Civil Court, new document: Pet Custody and Care Agreement (`pet_agreement`)

## Scope decision

The corpus already has two pet-related *information sheets*:
`pet_trust_info_sheet` (Prob. Code § 15212, a death/incapacity-planning
mechanism) and `pet_animal_custody_ownership_info_sheet` (Fam. Code
§ 2605, a court's authority to order interim pet care and assign pet
ownership *inside a pending marital dissolution or legal separation
proceeding*). Reading both in full before starting (per the task)
showed the ownership/custody info sheet already explains § 2605's law
thoroughly — but it is explicitly an information sheet, not a usable
agreement, and its own `petcustody_intro` clause says in so many words
that resolving a pet's care "for {{party1Name}} and {{party2Name}} to
resolve by their own written agreement" is a distinct alternative it
does not itself provide. That is exactly the gap this document fills:
a genuinely new, drafting-heavy *agreement* for two co-owners —
spouses, registered domestic partners, unmarried partners, or
roommates — to privately settle a pet's possession schedule, expenses,
and what happens if one co-owner can no longer keep the pet, entered
independently of any court proceeding. This is logged as a dated
`DECISIONS.md` entry (2026-11-28), consistent with the project's
"choose the most conservative option, log it, continue" rule: building
the natural companion piece to the existing custody info sheet (a
private agreement separate from, and not dependent on, § 2605), rather
than a pet sale/transfer document, since California's bill-of-sale-
style transactional gap for pets looked thinner on inspection (no
pet-dealer-style warranty statute was found that would make a
sale/transfer document's authority content substantially different
from the corpus's existing general personal-property sale norms).

## What this document covers

9 clauses: 5 drafting (parties/pet, possession schedule,
expenses/veterinary decisions, right of first refusal if a co-owner
can no longer keep the pet, signatures) and 4 authority clauses:

- **`petagreement_private_contract_outside_family_code_2605`** (Fam.
  Code §§ 2000, 297(a)-(b), 297.5(a)) — the core research question the
  task posed: confirms Family Code Part 2000's own scope provision
  limits the dissolution/nullity/legal-separation framework (which
  § 2605 sits inside) to marriage proceedings, that a domestic
  partnership is never automatic and requires an affirmative
  Declaration of Domestic Partnership filed with the Secretary of
  State, and that § 297.5(a) is what extends spousal rights and
  obligations — and therefore that dissolution/legal-separation
  framework — to registered domestic partners. An unmarried,
  unregistered couple or roommates have no such proceeding available
  to them at all, so this agreement (a private contract) is not, and
  cannot be, a § 2605 order under any circumstance for them, and is
  not one for a married/registered couple either unless and until an
  actual proceeding is filed and a court actually acts under § 2605.
- **`petagreement_pet_value_is_economic_not_sentimental`**
  (*McMahon v. Craig* (2009) 176 Cal.App.4th 1502, 1518-1519, quoting
  Civ. Code § 3355) — a genuinely new, case-law-sourced finding: a
  California Court of Appeal holding that a pet's "peculiar value" for
  money-damages purposes is its unique *economic* characteristics
  (pedigree, breeding/competition record), not either owner's
  emotional attachment to it. Sourced entirely from a primary
  court-opinion fetch (CourtListener), not a mirror.
- **`petagreement_writing_and_statute_of_frauds`** (Civ. Code
  §§ 1549, 1550, 1624(a)(1)) — why an open-ended, ongoing
  possession-sharing arrangement is the kind of agreement California's
  statute of frauds requires to be in writing and signed.
- **`petagreement_remedy_for_wrongful_retention`** (Civ. Code
  §§ 3380, 3384) — the general California remedy letting a person
  compel delivery of a particular article of personal property rather
  than only collect its money value, with an honestly disclosed open
  question: § 3380's own text addresses a *non-owner* possessor, not a
  dispute between two people who are each already a co-owner of the
  same pet — exactly this agreement's situation — and no case law was
  found resolving that gap.

## Research process and what was and was not independently reachable this session

**leginfo.legislature.ca.gov was network-blocked for the entire
session.** Every attempt — direct `curl`, a retry with a different
`User-Agent`, and this tool's own `WebFetch` — returned an HTTP 403
Cloudflare "Just a moment..." bot-management challenge page instead of
statutory text, for every section tried (Fam. Code § 2605 among them).
This matches the task's own anticipation that leginfo might be
sandboxed-blocked.

**The task's suggested fallback, law.onecle.com, worked for most
sections but not all.** It served clean (if occasionally oddly
transcribed — see below) statutory text for Civ. Code §§ 655, 657,
663, 1549, 1550, 1624, 3380, 3384 and Fam. Code §§ 297, 297.5, 2000,
2300, 2310 — all independently fetched fresh this session, with exact
verbatim quotes extracted from the actual fetched HTML (not
reconstructed from memory). It does **not** carry Fam. Code § 2605 at
all (404) — consistent with the mirror's own footer date ("Last
modified: October 25, 2018"), which predates § 2605's January 1, 2019
operative date. That is disclosed plainly in
`petagreement_private_contract_outside_family_code_2605`'s `gap`,
which does not quote § 2605 itself for that reason and instead relies
on this corpus's own already-verified `pet_animal_custody_ownership_info_sheet`
clauses (checked 2026-09-06, directly against leginfo) as the existing
record of that statute's text, while independently re-verifying the
surrounding structural statutes (§§ 2000, 297, 297.5) fresh.

**Cross-check on the onecle mirror's reliability:** this session's
fresh onecle fetch of Fam. Code § 2550 — a section this corpus already
has independently verified against leginfo (2026-09-06, in
`petcustody_ownership_assignment_standard`) — matched that
primary-sourced quote **word for word**. That is real (not
conclusive) evidence the mirror's text for these long-standing
Civil/Family Code provisions is still current, noted in the relevant
gap rather than asserted as a guarantee.

**One transcription artifact found and avoided:** onecle's page for
Civ. Code § 657 renders its list as "l. Real or immovable; or, 2.
Personal or movable" — a lowercase "l" instead of "1.", evidently a
scanning/OCR artifact in the mirror itself. That section was dropped
from this document's citations rather than quoted with the typo or
silently "corrected," since either choice would misrepresent what was
actually fetched; Civ. Code § 663 ("Every kind of property that is not
real is personal") was considered as a cleaner replacement for the
same point but was ultimately not needed once the case-law-sourced
`petagreement_pet_value_is_economic_not_sentimental` clause (below)
gave a stronger, genuinely primary source for the "pet is property"
point.

**CourtListener case-law research:** `Juelfs v. Gough` — initially
recalled (incorrectly, from memory) as a California pet-custody case —
was checked via CourtListener search and turned out to be an **Alaska**
Supreme Court decision; it was not used, and this is exactly the kind
of memory-reconstruction error the task's verbatim-quote rule exists to
catch. Targeted searches for California case law specifically
addressing a *dispute between co-owners* over a shared pet's
possession, or judicial application of Civ. Code § 3380 to a
co-ownership dispute, returned nothing on point — disclosed as a real
gap in `petagreement_remedy_for_wrongful_retention`'s `gap`, not
papered over. One search (`"sentimental value" dog possession damages
California`) surfaced *McMahon v. Craig* (2009) 176 Cal.App.4th 1502,
read in full via `read_document` (opinion id 2255876,
`html_with_citations` source) — both quotes used in
`petagreement_pet_value_is_economic_not_sentimental` are verbatim
substrings of that fetched opinion text.

## Per-citation fetch log

| Clause | Citation | Source fetched | Result |
|---|---|---|---|
| `petagreement_private_contract_outside_family_code_2605` | Fam. Code § 2000 | `https://law.onecle.com/california/family/2000.html` | 200, text extracted, quote verified verbatim |
| `petagreement_private_contract_outside_family_code_2605` | Fam. Code § 297(a)-(b) | `https://law.onecle.com/california/family/297.html` | 200, text extracted, quote verified verbatim |
| `petagreement_private_contract_outside_family_code_2605` | Fam. Code § 297.5(a) | `https://law.onecle.com/california/family/297.5.html` | 200, text extracted, quote verified verbatim |
| `petagreement_pet_value_is_economic_not_sentimental` | *McMahon v. Craig*, 176 Cal.App.4th 1502, 1518 | CourtListener opinion id 2255876 | fetched in full, quote verified verbatim |
| `petagreement_pet_value_is_economic_not_sentimental` | *McMahon v. Craig*, 176 Cal.App.4th 1502, 1518-1519 | CourtListener opinion id 2255876 | fetched in full, quote verified verbatim |
| `petagreement_writing_and_statute_of_frauds` | Civ. Code § 1549 | `https://law.onecle.com/california/civil/1549.html` | 200, text extracted, quote verified verbatim |
| `petagreement_writing_and_statute_of_frauds` | Civ. Code § 1550 | `https://law.onecle.com/california/civil/1550.html` | 200, text extracted, quote verified verbatim |
| `petagreement_writing_and_statute_of_frauds` | Civ. Code § 1624(a)(1) | `https://law.onecle.com/california/civil/1624.html` | 200, text extracted, quote verified verbatim |
| `petagreement_remedy_for_wrongful_retention` | Civ. Code § 3380 | `https://law.onecle.com/california/civil/3380.html` | 200, text extracted, quote verified verbatim |
| `petagreement_remedy_for_wrongful_retention` | Civ. Code § 3384 | `https://law.onecle.com/california/civil/3384.html` | 200, text extracted, quote verified verbatim |
| (not cited) | Fam. Code § 2605 | `https://leginfo.legislature.ca.gov/...` | **blocked** (HTTP 403, Cloudflare challenge) |
| (not cited) | Fam. Code § 2605 | `https://law.onecle.com/california/family/2605.html` | **404** (mirror does not carry this section) |
| (checked, not cited) | Civ. Code § 655 | `https://law.onecle.com/california/civil/655.html` | 200, fetched, confirmed animals are subject to ownership ("of all domestic animals"); not used once the case-law clause covered the point more directly |
| (checked, not cited) | Civ. Code § 657 | `https://law.onecle.com/california/civil/657.html` | 200, fetched; dropped due to a mirror transcription artifact ("l." instead of "1.") — see above |
| (cross-check only) | Fam. Code § 2550 | `https://law.onecle.com/california/family/2550.html` | 200, fetched; matched this corpus's existing leginfo-verified quote word for word |

## Verification

`python3 tools/validate_corpus.py` passes (742 documents / 6630
clauses, 4993 authority / 1637 drafting, 11698 citations). The golden
fixture was regenerated (`node tests/golden/golden.js --update`) and
then re-checked in check mode, both passing.
