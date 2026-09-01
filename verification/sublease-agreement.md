# Real Estate, sixth new document: Sublease Agreement

## Why this document

No sublease document existed in the corpus. This document covers a
tenant (sublessor) subletting to a new subtenant while remaining bound
to the original landlord under the master lease — a genuinely distinct
transaction from the existing Residential Lease Agreement.

## What this document covers

8 clauses: 4 drafting (parties/property, rent, master-lease
compliance/consent, signatures) and 4 authority clauses:

- **`sublease_governing_framework`** (Civ. Code §§ 1995.010,
  1995.020(b), 1995.270; *Kendall v. Ernest Pestana* footnote 1) — the
  real, easy-to-miss scope limit: California's statutory
  landlord-consent-to-transfer chapter applies only to nonresidential
  leases, so a residential sublease's rights turn entirely on the
  master lease's own terms — a limit confirmed doubly, both by the
  statute's own text and by *Kendall* itself expressly declining to
  say whether its commercial-lease rule reaches residential leases.
- **`sublease_assignment_vs_sublease`** (*Kendall v. Ernest Pestana*,
  40 Cal.3d 488, 493 n.2; *Hartman Ranch Co. v. Associated Oil Co.*,
  10 Cal.2d 232, 242-243; Civ. Code § 1995.020(a), (e)) — the
  assignment/sublease distinction, quote-verified directly against
  both cases' primary opinion text via CourtListener.
- **`sublease_sublessor_liability`** (*Kendall*, 40 Cal.3d at 500;
  *Peiser v. Mettler*, 50 Cal.2d 594, 602; Civ. Code § 1995.020(a),
  (d)) — the sublessor's continuing "surety"/primary-obligor liability
  to the landlord notwithstanding the sublease, quote-verified against
  two independent California Supreme Court opinions.
- **`sublease_no_privity`** (*Hartman Ranch Co.*, 10 Cal.2d at 242,
  244; Civ. Code § 822) — that a subtenant is liable only to the
  sublessor and lacks privity of estate with the original landlord,
  quote-verified against primary case text, corroborated by § 822's
  statutory silence as to subtenants (it names only "assignees").

## Notable research process: an incomplete first delivery, a rate-limited second delivery, then full verification on a third pass

The first research agent's delivery had three authority clauses left
as literal `PLACEHOLDER_BODY`/`PLACEHOLDER_GAP` placeholders with
empty citation arrays — caught immediately by this session's standard
review before any merge was attempted. A second agent hit a
CourtListener rate limit while trying to verify the case citations
(*Hartman Ranch Co. v. Associated Oil Co.*, 10 Cal.2d 232 (1937);
*Kendall v. Ernest Pestana, Inc.*, 40 Cal.3d 488 (1985)) and, after
being redirected to finish within one more retry rather than wait
~42 minutes, shipped an honest interim version: three clauses relied
only on independently verifiable statutory text and disclosed
plainly, in each affected clause's gap field, that the two commonly-
cited cases were leads that had not been quote-verified against
primary text — no invented or paraphrased case quotes were included.
That version was committed (`7cb2fcc`).

A third pass (this one) had time to wait out the CourtListener
rate-limit cooldown and then successfully pulled and read the primary
opinion text of *Kendall v. Ernest Pestana* (via `read_document`,
opinion id 9851318) and *Hartman Ranch Co. v. Associated Oil Co.*
(opinion id 1126371), plus, for additional independent corroboration
of the sublessor-liability point, *Peiser v. Mettler* (opinion id
1181332) — the case *Kendall* itself cites for that point. All
quotes now embedded in the four authority clauses were read directly
from CourtListener's opinion text, not reconstructed from a secondary
summary. The three clauses' rate-limit disclaimers have been replaced
with the verified quotes and updated gap-field reasoning; a fourth,
new citation was also added to `sublease_governing_framework` — a
footnote in *Kendall* itself in which the California Supreme Court
expressly declines to say whether its commercial-lease consent rule
extends to residential leases, which independently reinforces this
document's central honest disclosure.

## Defects caught and fixed during integration

- `sublease_no_privity`'s gap field contained a literal `{{landlordName}}`/
  `{{subtenantName}}` leak in an earlier draft — caught before merge
  and fixed with generic phrasing; re-checked clean on this pass.
- `sublease_sublessor_liability` cites a single statutory subsection
  in one of its supporting citations; that citation's gap disclosure
  was reviewed again on this pass and is accurate (it now also carries
  two independent case citations, so the "single source" framing was
  narrowed to describe only the statutory citation, not the clause as
  a whole).

## Method

Fetched Civil Code §§ 818–827, 822, 1995.010, 1995.020, 1995.270
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. Case law (*Kendall v. Ernest Pestana*, *Hartman Ranch
Co. v. Associated Oil Co.*, *Peiser v. Mettler*) fetched and read via
the CourtListener MCP tools (`search` + `read_document`) directly
against each opinion's own text; direct curl access to
courtlistener.com is blocked by a WAF in this environment, so no
attempt was made to bypass the MCP tools for case law.

## Verification

- All statutory citations fetched twice independently with distinct
  User-Agents; confirmed byte-identical.
- All case-law citations read directly from CourtListener's opinion
  text (not a secondary summary) and quoted verbatim, including page/
  footnote pinpoints.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean on this pass.
- Checked source-independence disclosure logic across all 4 authority
  clauses — each now names, accurately, which of its citations are
  independent sources versus subsections/passages of the same source.
- Checked for duplicate clause IDs against the full corpus (none);
  three duplicate titles ("Parties and Property," "Rent,"
  "Signatures") are the pre-existing generic drafting-title pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes (this pass)

- No new document, clauses, or fields — `sublease_agreement` and its
  8 clauses were already added and committed by an earlier pass in
  this session (604 → 612 clauses; 80 → 81 documents).
- This pass only replaced the honest-but-incomplete rate-limit
  disclaimers in three authority clauses' `gap`/`citations` with
  fully quote-verified case-law citations, and strengthened a fourth
  clause with an additional, independently verified case citation.

## Reconciliation note

Two independent research agents ended up working on this same file
concurrently after the original CourtListener-rate-limited agent
turned out to still be running in the background rather than
abandoned: one wrote fully-verified case citations directly into the
live repo files; a second, redirected copy of the same effort
separately caught and fixed a pinpoint-citation error (the
`sublease_no_privity` "sublessee is liable only to his own lessor"
quote is on page 242 of *Hartman Ranch Co.*, not 241 as first cited —
confirmed against the opinion's own star-pagination markers) and wrote
more complete source-independence disclosure language into two other
clauses' `gap` fields. Both sets of changes were reconciled by hand
into a single, consistent final version before this document was
committed: the page-242 correction and the fuller disclosure language
were kept; nothing from either pass was lost.
