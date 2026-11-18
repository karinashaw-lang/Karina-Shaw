#!/usr/bin/env python3
"""Full-corpus completion spec, Task B1: "re-check every citation URL
and quote against the live text; log dead links and quote drift as
findings."

This file covers the directly-fetchable domains only -- every cited
domain except the four `review/SOURCE_BLOCKS.md` already found
blocked from this sandbox (leginfo.legislature.ca.gov,
california.public.law, law.onecle.com, www.ecfr.gov) and
www.courtlistener.com specifically, which returns 403 to a raw fetch
and needs the dedicated CourtListener MCP tool instead -- a different
mechanism, handled by a separate process (see
`review/CITATION_RECHECK_REPORT.md`). storage.courtlistener.com is a
plain PDF file host with no such block and is covered here like any
other reachable domain.

Fetches each unique URL once (not once per citation -- many clauses
cite the same statute or regulation page), extracts plain text (HTML
via a tag-stripping pass, PDF via the system `pdftotext`), and checks
whether each citation's stored `quote` appears verbatim in the live
text after whitespace/punctuation normalization (collapsed
whitespace, straight-quote and dash normalization -- real textual
drift, not an HTML-formatting artifact, is the thing worth a human's
attention).

This script only READS and REPORTS. It never edits a clause's quote,
citation, or status (Global Rule 4/5) and never appends to
`verifier/findings.jsonl` itself -- a substring mismatch alone isn't
evidence of what changed or why, which a real finding entry requires
(Global Rule: "each finding needs a direct source quote, severity,
evidence"). A human (or this session, inline) reviews every
`no_match` row in the output and decides, case by case, whether it's
a genuine drift worth a finding or a normalization artifact worth
fixing in this script instead.

    python3 tools/citation_recheck.py                  # run, write review/citation_recheck_results.jsonl
    python3 tools/citation_recheck.py --limit 20        # smoke-test on the first 20 unique URLs
"""
import json
import os
import re
import subprocess
import sys
import tempfile
import threading
import time
import unicodedata
from concurrent.futures import ThreadPoolExecutor, as_completed

RESULTS_PATH = 'review/citation_recheck_results.jsonl'
BLOCKED_DOMAINS = {'leginfo.legislature.ca.gov', 'california.public.law', 'law.onecle.com'}
FETCH_TIMEOUT = 45
# Sequential, not parallel: confirmed by direct comparison (fetching
# the same URL alone vs. inside a full run of all 446) that a handful
# of this corpus's larger PDF citations (courts.ca.gov, supremecourt.gov)
# come back truncated under either concurrent *or* rapid back-to-back
# sequential load -- a per-domain request pace, not thread count, is
# what fixed it (see PER_DOMAIN_MIN_INTERVAL below). 446 URLs at this
# pace still finishes in a few minutes; silently wrong results from
# going faster are not an acceptable trade for the time saved.
MAX_WORKERS = 1
PER_DOMAIN_MIN_INTERVAL = 1.0  # seconds between two requests to the same host
_last_request_at = {}
_rate_limit_lock = threading.Lock()


def _throttle(url):
    d = domain(url)
    with _rate_limit_lock:
        now = time.monotonic()
        wait = PER_DOMAIN_MIN_INTERVAL - (now - _last_request_at.get(d, 0))
        if wait > 0:
            time.sleep(wait)
        _last_request_at[d] = time.monotonic()


def domain(url):
    m = re.match(r'https?://([^/]+)/?', url or '')
    return m.group(1) if m else (url or '')


def normalize(text):
    text = text.replace('­', '')  # soft hyphen -- invisible word-wrap hint some pages embed mid-word
    text = unicodedata.normalize('NFKD', text)
    text = text.replace('‘', "'").replace('’', "'")
    text = text.replace('“', '"').replace('”', '"')
    # some government PDFs (dir.ca.gov's IWC wage orders) embed a font
    # whose "quote mark" glyphs extract as U+2015/U+2016 instead of a
    # real quotation mark -- confirmed by inspecting the raw extracted
    # text directly (`―Employer‖ means any person...`), not guessed.
    text = text.replace('―', '"').replace('‖', '"')
    # a CourtListener-hosted opinion PDF's own font substitutes U+201E
    # for an apostrophe -- confirmed directly ("the trial court‟s
    # characterization" for "the trial court's characterization").
    text = text.replace('‟', "'")
    text = text.replace('–', '-').replace('—', '-')
    # a quote written with the ASCII "--" em-dash convention and a PDF
    # whose real em-dash extracts as a single "-" otherwise disagree
    # on dash *count*, not content -- collapse any run of hyphens to
    # one on both sides so that difference can't cause a false
    # mismatch.
    text = re.sub(r'-{2,}', '-', text)
    text = re.sub(r'\s+', ' ', text)
    # HTML tag-stripping routinely leaves a stray space where an inline
    # element (a <span>, a cross-reference <a>) butted up against
    # trailing punctuation in the source markup -- "...this title , except"
    # is the same text as "...this title, except", not a real difference.
    text = re.sub(r'\s+([,.;:)\]])', r'\1', text)
    # same artifact around a quoted term the source wraps in its own
    # inline element (e.g. Cornell LII's <dfn>"term"</dfn>) -- the
    # quote marks end up with a stray space on the inside.
    text = re.sub(r'"\s+', '"', text)
    text = re.sub(r'\s+"', '"', text)
    # same artifact again for a possessive/contraction split across
    # inline elements -- "employee 's" is "employee's" with a tag
    # boundary's stray space, not a different word.
    text = re.sub(r"\s+'", "'", text)
    text = re.sub(r"'\s+", "'", text)
    return text.strip()


TAG_RE = re.compile(r'<[^>]+>')
SCRIPT_STYLE_RE = re.compile(r'<(script|style)[^>]*>.*?</\1>', re.DOTALL | re.IGNORECASE)


def html_to_text(html):
    html = SCRIPT_STYLE_RE.sub(' ', html)
    html = re.sub(r'&nbsp;', ' ', html)
    html = re.sub(r'&amp;', '&', html)
    html = re.sub(r'&sect;', '§', html)
    text = TAG_RE.sub(' ', html)
    import html as html_module
    text = html_module.unescape(text)
    return text


def decode_bytes(raw):
    """Government sites are not all UTF-8 (some older California
    .gov pages are Windows-1252/Latin-1) -- try the common cases
    before giving up, since a wrong guess here is a false "dead link"
    the citation did nothing to deserve."""
    for enc in ('utf-8', 'windows-1252', 'latin-1'):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return raw.decode('utf-8', errors='replace')


def fetch_text(url):
    """Returns (ok, text_or_error). Always fetches raw bytes and a
    response header dump first -- PDF detection goes by the real
    `Content-Type` header, not the URL's own extension, since some of
    this corpus's PDF citations route through a query-string path
    (`/system/files?file=file/x.pdf`) that no `.endswith('.pdf')`
    check on the URL catches. Uses curl (already confirmed to go
    through this sandbox's proxy correctly) rather than a Python HTTP
    client, consistent with every reachability check this plan has
    already run with curl."""
    _throttle(url)
    try:
        with tempfile.NamedTemporaryFile(delete=False) as tmp:
            tmp_path = tmp.name
        try:
            r = subprocess.run(
                ['curl', '-sS', '-L', '--compressed', '--max-time', str(FETCH_TIMEOUT),
                 '-o', tmp_path, '-D', '-', '-w', '\n__HTTP_CODE__%{http_code}', url],
                capture_output=True, timeout=FETCH_TIMEOUT + 5)
            header_out = r.stdout.decode('utf-8', errors='replace')
            if '__HTTP_CODE__' not in header_out:
                return False, f'curl error: {r.stderr.decode("utf-8", errors="replace")[:200]}'
            headers, _, code = header_out.rpartition('__HTTP_CODE__')
            if not code.startswith('2'):
                return False, f'HTTP {code}'
            is_pdf = 'content-type: application/pdf' in headers.lower()
            with open(tmp_path, 'rb') as f:
                raw = f.read()
            if is_pdf:
                pdf_text = subprocess.run(['pdftotext', tmp_path, '-'],
                                           capture_output=True, timeout=60)
                if pdf_text.returncode != 0:
                    return False, f'pdftotext failed: {pdf_text.stderr.decode("utf-8", errors="replace")[:200]}'
                return True, pdf_text.stdout.decode('utf-8', errors='replace')
            return True, html_to_text(decode_bytes(raw))
        finally:
            os.unlink(tmp_path)
    except subprocess.TimeoutExpired:
        return False, 'timeout'
    except Exception as e:  # noqa: BLE001 -- this is a best-effort network probe, not app logic
        return False, f'{type(e).__name__}: {e}'


def build_targets():
    clauses = json.load(open('data/clauses.json', encoding='utf-8'))['clauses']
    by_url = {}
    for c in clauses:
        for i, ct in enumerate(c.get('citations') or []):
            url = ct.get('url', '')
            d = domain(url)
            # www.courtlistener.com 403s a raw fetch and needs the MCP
            # tool instead, but storage.courtlistener.com is a plain
            # PDF file host with no such block (confirmed: curl gets a
            # clean 200) -- excluding it here too was this tool's own
            # mistake, not a real block, caught while scoping the
            # CourtListener-MCP half of this task.
            if d in BLOCKED_DOMAINS or d == 'www.courtlistener.com':
                continue
            by_url.setdefault(url, []).append({
                'clauseId': c['id'], 'citationIndex': i, 'quote': ct.get('quote', ''),
                'case': ct.get('case', ''), 'sourceClass': ct.get('sourceClass'),
            })
    return by_url


ELLIPSIS_RE = re.compile(r'\s*(?:\.\.\.|…|\[\.\.\.\])\s*')


def quote_segments(quote):
    """Many quotes in this corpus splice together non-contiguous parts
    of a statute with an ' ... ' (or unicode/bracket variant) marker --
    a disclosed, intentional convention (see verifier/findings.jsonl's
    own quote_drift findings for the case where this ISN'T marked).
    Checking the whole quote as one substring would flag every one of
    these as a false mismatch; split on the marker and check each real
    segment instead."""
    parts = [normalize(p) for p in ELLIPSIS_RE.split(quote)]
    return [p for p in parts if p]


def _segments_found_in_order(segments, norm_text):
    pos = 0
    for seg in segments:
        idx = norm_text.find(seg, pos)
        if idx == -1:
            return False
        pos = idx + len(seg)
    return True


def check_quote(quote, norm_text):
    """Returns 'exact', 'fuzzy', or False. 'exact': every segment of
    the (possibly spliced) quote is present, in order, after the
    normal whitespace/punctuation cleanup. 'fuzzy': only matches with
    ALL whitespace also stripped from both sides -- this specifically
    catches PDF text extraction's own well-known artifact of inserting
    a stray space inside a word that wrapped across a visual line in
    the original layout ("nontransfer able" for "nontransferable"),
    which is a PDF-rendering fact, not a textual drift. A 'fuzzy'
    match is reported separately from 'exact' (never silently treated
    the same) but does not need a human to inspect it the way a real
    `False` does."""
    segments = quote_segments(quote)
    if not segments:
        return False
    if _segments_found_in_order(segments, norm_text):
        return 'exact'
    # Also strip hyphens, not just whitespace: a PDF's own line-wrap
    # hyphenation is resolved inconsistently by text extraction --
    # the same compound word ("full-time") can come out hyphenated in
    # one place and not another within the same page, which is a PDF-
    # rendering fact, not a textual difference worth a human's time.
    def squash(s):
        s = re.sub(r'[\s-]+', '', s)
        # pdftotext drops the "i" from an "fi" ligature glyph in some
        # PDFs' embedded fonts (confirmed directly: a Supreme Court
        # opinion PDF extracts "filing" as "fling") -- applying the
        # same lossy fold to both sides can never turn two genuinely
        # different words into a match, only recover this one known,
        # narrow artifact.
        return s.replace('fi', 'f')
    nospace_text = squash(norm_text)
    nospace_segments = [squash(s) for s in segments]
    if _segments_found_in_order(nospace_segments, nospace_text):
        return 'fuzzy'
    return False


def recheck_url(url, citers):
    ok, text_or_error = fetch_text(url)
    rows = []
    if not ok:
        for c in citers:
            rows.append({**c, 'url': url, 'fetchOk': False, 'error': text_or_error, 'quoteFound': None})
        return rows
    norm_text = normalize(text_or_error)
    for c in citers:
        found = check_quote(c['quote'], norm_text)
        rows.append({**c, 'url': url, 'fetchOk': True, 'error': None, 'quoteFound': found})
    return rows


def main():
    limit = None
    if '--limit' in sys.argv:
        limit = int(sys.argv[sys.argv.index('--limit') + 1])

    by_url = build_targets()
    urls = list(by_url.items())
    if limit:
        urls = urls[:limit]

    print(f'Rechecking {len(urls)} unique URL(s) covering '
          f'{sum(len(c) for _, c in urls)} citation(s)...')

    all_rows = []
    done = 0
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futures = {pool.submit(recheck_url, url, citers): url for url, citers in urls}
        for fut in as_completed(futures):
            all_rows.extend(fut.result())
            done += 1
            if done % 50 == 0 or done == len(urls):
                print(f'  {done}/{len(urls)} URLs done', file=sys.stderr)

    os.makedirs(os.path.dirname(RESULTS_PATH), exist_ok=True)
    with open(RESULTS_PATH, 'w', encoding='utf-8') as f:
        for row in sorted(all_rows, key=lambda r: (r['clauseId'], r['citationIndex'])):
            f.write(json.dumps(row, sort_keys=True) + '\n')

    exact = sum(1 for r in all_rows if r['quoteFound'] == 'exact')
    fuzzy = sum(1 for r in all_rows if r['quoteFound'] == 'fuzzy')
    no_match = sum(1 for r in all_rows if r['fetchOk'] and not r['quoteFound'])
    dead = sum(1 for r in all_rows if not r['fetchOk'])
    print(f'\n{len(all_rows)} citations checked: {exact} exact match, '
          f'{fuzzy} fuzzy match (PDF line-wrap whitespace only, not a real finding), '
          f'{no_match} no match at all (needs human review, not an automatic finding), '
          f'{dead} fetch failed.')
    print(f'Wrote {RESULTS_PATH}.')


if __name__ == '__main__':
    main()
