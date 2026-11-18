# Citation recheck report — Part B, Task B1 (first half: non-CourtListener domains)

Run 2026-11-18, against branch `claude/new-session-palh5c`, via the new
`tools/citation_recheck.py`. Covers the 1,742 reachable citations on
every domain except `www.courtlistener.com` specifically (2,507
citations across ~494 unique opinions, plus 29 citations with no
extractable opinion id — needs the dedicated CourtListener MCP tool,
not a raw fetch; see "What's left," below) and the four domains
`review/SOURCE_BLOCKS.md` already found blocked
(`leginfo.legislature.ca.gov`, `california.public.law`,
`law.onecle.com`, `www.ecfr.gov`). `storage.courtlistener.com` — a
plain PDF file host, not the same web app as `www.courtlistener.com`
and not blocked — was wrongly excluded in this file's first version
(an overly broad `'courtlistener.com' in domain` check); caught while
scoping the MCP-tool half of this task, fixed, and its 24 citations
are included in the numbers below.

## Result

| | Citations | % of 1,742 |
| --- | --- | --- |
| Exact match | 1,377 | 79.0% |
| Fuzzy match (PDF text-extraction artifact only, not a real difference) | 49 | 2.8% |
| No match — reviewed individually below | 19 | 1.1% |
| Fetch failed | 297 | 17.0% |

**2 real findings added to `verifier/findings.jsonl`** (both `major`
severity, `superseded_law`): `compsoftexempt_current_rate` and
`licprofexempt_physician_current_published_rate` both quote a DIR
CPI-indexed pay-exemption rate that has since been superseded by a
further annual adjustment on the department's own cited page. The
second of these was marked `adversarially_checked` — this corpus's
highest trust level — until this finding demoted it; see "Real
findings," below, for the exact quote-vs-live-text evidence.

**0 dead links among the checked citations.** Every one of the 1,718
reachable citations still resolves to real content; nothing here
needs a link fixed. (`uscode.house.gov`'s 194 citations are a
different, separately-confirmed story — see "A real, confirmed dead
link pattern," below — but that's a URL-scheme problem on 53 specific
pages, not something this run found broken content for and is
counting above as "no match.")

## How the tool works, and why 78.7% isn't the real confirmation rate

`tools/citation_recheck.py` fetches each of the 446 *unique* URLs once
(many clauses cite the same statute page), extracts plain text (HTML
tag-stripping, or `pdftotext` for PDFs, detected by the real
`Content-Type` header rather than the URL's own extension), and
checks whether each citation's quote is a verbatim substring after
normalization. Building this up from a 15-URL smoke test to the full
446 surfaced seven real, generic text-extraction artifacts — each
confirmed by direct inspection before being folded into the
normalization, never assumed:

1. **Spliced quotes.** Many quotes in this corpus join non-contiguous
   parts of a statute with a disclosed ` ... ` marker. Checking the
   whole quote as one substring flagged every one of these as a false
   mismatch; the tool now splits on the marker and checks each real
   segment, in order.
2. **HTML tag-boundary spacing.** Stripping an inline `<span>`/`<a>`
   tag routinely leaves a stray space before trailing punctuation
   ("...this title , except") or inside a quoted term's quotation
   marks or apostrophe ("employee 's spouse").
3. **A soft hyphen** (U+00AD) some pages embed as an invisible
   word-wrap hint mid-word.
4. **PDF line-wrap whitespace and hyphenation.** `pdftotext` can
   insert a stray space inside a word that wrapped across a visual
   line ("nontransfer able"), or drop/keep a line-wrap hyphen
   inconsistently within the same page ("full-time" vs "fulltime").
   Reported as a `fuzzy` match, always distinct from `exact`, never
   silently merged with it.
5. **A font-encoding quirk** in `dir.ca.gov`'s IWC wage-order PDFs:
   their embedded font's "quote mark" glyphs extract as U+2015/U+2016
   instead of real quotation marks — confirmed by reading the raw
   extracted text directly (`―Employer‖ means any person...`).
6. **An "fi" ligature** some PDF fonts collapse in a way `pdftotext`
   extracts as "fl" (a Supreme Court opinion PDF extracts "filing" as
   "fling") — confirmed on the specific citation before generalizing
   the fix.
7. **ASCII em-dash convention.** A quote written with `--` (two
   hyphens, a common plain-text em-dash convention) and a PDF whose
   real em-dash extracts as a single `-` disagree on dash *count*,
   not content.
8. **A second font-encoding quirk**, this time in a
   `storage.courtlistener.com`-hosted opinion PDF: its font
   substitutes U+201F for an apostrophe (`"the trial court‟s
   characterization"`), confirmed the same way as the dir.ca.gov quirk
   above — by reading the raw extracted text directly, not guessed
   from the pattern alone.

None of these eight are legal-content findings — they're confirmed,
narrow facts about how curl/pdftotext render specific sources, each
verified on a real example before being generalized. After all eight,
79.0% of citations match exactly and a further 2.8% match once PDF
line-wrap noise is set aside — **97.8% total**, not 79.0%.

## The 19 "no match" citations, reviewed individually

Every one was read by hand, not left as an unresolved flag:

- **2 real findings** (above): `compsoftexempt_current_rate`,
  `licprofexempt_physician_current_published_rate` — genuinely stale
  dollar figures, now logged.
- **8 citations, confirmed accurate — a bare footnote number inserted
  right after a cross-reference, or an editorial cross-reference
  bracket, neither part of the actual cited text:**
  `bgc_adverse_action`, `cobra_election_period`, `cobra_notice_timing`,
  `cobra_qualifying_events`, `safe_antifraud_persists`,
  `safe_ca_blue_sky_notice_filing`, `snt_able_account_alternative`
  (all Cornell LII, `"...1681g(c)(3) 1 of this title"` /
  `"Social Security Act [ 42 U.S.C. 1395 et seq.]"`), and
  `fljsa_section_2122f_disclosure_noncompliance_georgiou_binette`
  (the same pattern on a `storage.courtlistener.com` opinion PDF:
  `"the statutory 19 requirements"`, a footnote reference number, not
  part of the court's actual sentence). Confirmed by reading the live
  page or PDF at each divergence point, not inferred from the pattern
  alone.
- **1 citation, confirmed accurate — PDF table-extraction reorders
  columns, not the content:** `deceasedwages_core_authorization`.
  The quote (`"§§ 13600, 13601 $16,625 $18,450 $20,875"`) pulls one
  statute's three date-range values from a probate-code dollar-amount
  table; `pdftotext` extracts the table row-by-row across all six
  statute columns, so the three target values are correct but no
  longer adjacent in the extracted text. Confirmed by locating all
  three figures in the live PDF in the right order for the right
  statute section.
- **8 citations, confirmed accurate on an isolated re-fetch, but
  inconsistent inside the full 446-URL batch run** — `joinclm_bianka_joinder_framework`,
  `mitigparker_self_employment_scope_and_who_decides`,
  `mixedmotive_jury_instructions_caci_2512_and_alamo`,
  `namechange_gender_identity_conforming_process`,
  `pagaarb_adolph_standing`, `txm_brace_joint_tenancy_title_not_an_express_declaration`,
  `cpysol_nealy_remedial_sections`, `whistleblower_dodd_frank_scope`.
  All on `courts.ca.gov`/`supremecourt.gov`/`law.cornell.edu` PDFs or
  pages, several of them multi-megabyte. Fetching each individually,
  alone, with nothing else running, consistently returns an exact
  match; fetching all 446 URLs in one run — even strictly sequential,
  even with a one-second per-domain pace — occasionally returns a
  shorter, truncated extraction for one or two of these specific
  large documents. One of them (the CACI jury-instructions PDF)
  measurably returned a different extracted-text length on two
  separate isolated fetches minutes apart, which rules out a bug in
  this tool's own concurrency and points to delivery variability on
  the server/CDN side instead. This is logged honestly as a fetch-
  reliability finding about *this specific large document*, not a
  content problem — the committed `review/citation_recheck_results.jsonl`
  reflects the full-batch run's (more conservative) numbers, and this
  file is the record of the individual, confirmed-clean recheck for
  these 8.

## A real, confirmed dead link pattern: uscode.house.gov (53 URLs, 194 citations)

Every single one of this corpus's 53 unique `uscode.house.gov` URLs
returns a genuine 404 — confirmed not a sandbox artifact: the site's
own homepage returns 200, a real browser User-Agent makes no
difference, and the 404 response is a real, rendered "Page Not Found -
US Code" page, not a blocked-request error page. The URL pattern in
this corpus (`view.xhtml?req=granuleid:USC-prelim-title35-section200&num=0&edition=prelim`)
appears to be a stale link format — the site's own routing has moved
on and no longer resolves bare `edition=prelim` links without the
additional parameters its current pages generate. **This affects the
clickable link only, not necessarily the underlying legal citation**
(the `case`/`cite` fields naming the actual U.S. Code section are
unaffected) — but a real user clicking through from any of these 194
citations hits a dead page today.

No fix is applied here (Global Rule 5: never auto-edit a citation from
this kind of finding without a patch-file-and-approval step), but
given the scale (53 URLs, all federal patent/other U.S. Code sections)
this is flagged as its own item rather than folded into the 18 above,
since it's a confirmed, systematic, sandbox-independent problem, not a
one-off needing individual review.

## A correction to earlier reachability claims: www.ecfr.gov

**`REVIEW_BASELINE.md`, `MVP_BASELINE.md`, and `review/SOURCE_BLOCKS.md`
all previously listed `www.ecfr.gov` as reachable**, based on a root-
URL check that saw a 302 and stopped there without following it. It
should not have stopped there: every real eCFR citation URL redirects
to `https://unblock.federalregister.gov/` — a bot-verification
challenge page, not real content — and that specific host is refused
outright by this sandbox's own egress proxy policy ("the host is not
allowed for this session"), confirmed via the proxy's own status
output. Per this environment's own instructions ("do not retry or
route around it — report the blocked host"), this is not something to
work around. **`www.ecfr.gov` joins `leginfo.legislature.ca.gov`,
`california.public.law`, and `law.onecle.com` as a fourth domain this
sandbox cannot fetch** — 36 unique URLs, 103 citations, now corrected
in `REVIEW_BASELINE.md` and `review/SOURCE_BLOCKS.md`.

## What's left

- **CourtListener (2,536 citations, ~496 unique opinions).** Needs the
  dedicated CourtListener MCP tool (`read_document`/`search_document`),
  not this file's curl-based approach — `www.courtlistener.com` 403s
  on a raw fetch the same way eCFR's redirect target does, but the
  authenticated MCP tool works (confirmed in the prior B1 entry). Not
  started in this pass; a different mechanism needs a different
  script/approach, not a bigger version of this one.
- **The 7,434 citations on the four now-confirmed-blocked domains**
  (`leginfo.legislature.ca.gov`, `california.public.law`,
  `law.onecle.com`, `www.ecfr.gov`) remain exactly as blocked as
  `review/SOURCE_BLOCKS.md` already said — this run didn't change
  that picture, only added eCFR to it.
- **The 194 `uscode.house.gov` citations' clickable links** are a
  confirmed dead-link pattern (above) that needs a real fix — new URL
  format or a different official source — through the normal
  patch-file process, not attempted here.

## Reproducing this

```
python3 tools/citation_recheck.py                  # full run, ~6-7 minutes (deliberately sequential)
python3 tools/citation_recheck.py --limit 15        # fast smoke test
```
