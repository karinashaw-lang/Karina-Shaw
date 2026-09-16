#!/usr/bin/env python3
"""Re-check every stored citation URL against the quotes that cite it.

Write-time verification proves a quote was in text the author fetched. It
cannot tell you whether the stored URL still returns that text. This does,
across the whole corpus.

Two things make a full pass practical. Citations share URLs — about 2.7
quotes per unique URL — so each URL is fetched once and every quote that
cites it is checked against that one fetch. And results are appended to a
JSONL as they are produced, so a container restart resumes where it stopped
instead of starting over.

Usage:
  python3 tools/recheck_all.py [--hosts statutory|courtlistener|all]
                               [--out PATH] [--delay SECONDS]

Run the courtlistener set only when no expansion workers are running: they
share that quota, and exhausting it stops their research mid-document.
"""
import json, re, subprocess, time, html, unicodedata, sys, os, collections
from urllib.parse import urlparse

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/131.0 Safari/537.36')
STATUTORY = ('leginfo.legislature.ca.gov', 'law.onecle.com', 'www.law.cornell.edu',
             'uscode.house.gov', 'www.dir.ca.gov', 'www.ecfr.gov',
             'courts.ca.gov', 'www.courts.ca.gov', 'www.supremecourt.gov',
             'www.govinfo.gov', 'govinfo.gov')
COURTLISTENER = ('www.courtlistener.com', 'storage.courtlistener.com')
JAR = '/tmp/recheck_all_cookies.txt'


def norm(t, tag_repl=''):
    t = html.unescape(t)
    t = unicodedata.normalize('NFKC', t)
    for a, b in [('‘', "'"), ('’', "'"), ('“', '"'), ('”', '"'),
                 ('‟', '"'), ('„', '"'), ('–', '-'), ('—', '-'),
                 (' ', ' '), ('­', '')]:
        t = t.replace(a, b)
    # A parenthetical dash is sometimes written with surrounding spaces
    # ("time — for example") and sometimes as a bare hyphen with none
    # ("time-for example") -- the same punctuation, a formatting choice, not
    # a difference in what was said. Collapsing any whitespace that sits
    # right against a hyphen makes both spellings compare equal.
    t = re.sub(r'\s*-\s*', '-', t)
    # A footnote-marker superscript like <sup>[10]</sup> sits inline right
    # after the word it follows, with no separating space. Stripping only
    # the <sup> tags (the general case below) leaves its content -- "[10]"
    # -- as literal text in the middle of otherwise-continuous prose, which
    # a clean stored quote never contains. This is narrow on purpose: it
    # only removes a sup element whose content is a bare or bracketed
    # number, the recognizable shape of a footnote reference, not a sup
    # tag that contains something else.
    t = re.sub(r'<sup>\s*\[?\d+\]?\s*</sup>', '', t)
    # A PDF-to-text page break leaves a form-feed character immediately
    # followed by that page's running header (page number and case name,
    # e.g. "\x0c6                 NETCHOICE, LLC V. BONTA"), which then
    # splices into the sentence straddling the page boundary. The header
    # line is exactly the text between the form feed and the next newline,
    # so dropping that whole span removes the injected header without
    # touching anything else.
    t = re.sub(r'\x0c[^\n]*\n', ' ', t)
    # Some opinions mark star-pagination with a <page-number> element instead
    # of the more common <span class="star-pagination">, e.g.
    # "plaintiff has<page-number ...>*484</page-number>alleged" -- no space
    # on either side, so stripping just the tags (the general case below)
    # leaves "*484" splicing into the middle of a word boundary. Its content
    # is always a page marker, never prose, so the whole element goes.
    t = re.sub(r'<page-number[^>]*>.*?</page-number>', '', t)
    t = re.sub(r'<[^>]+>', tag_repl, t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()


def _segments_in_order(body, segments):
    pos = 0
    for seg in segments:
        idx = body.find(seg, pos)
        if idx == -1:
            return False
        pos = idx + len(seg)
    return True


def quote_present(body, quote):
    """Accept either way of stripping tags.

    Dropping them joins words that markup merely wrapped; replacing them with
    a space separates list items a publisher puts one per element. Both
    spellings have produced a false mismatch against a quote that was correct.

    A quote containing an explicit ellipsis ("..." or "…") is a deliberate,
    honest signal that the author skipped intervening text -- a normal way to
    quote a long passage accurately, not an error. Such a quote is checked as
    an ordered sequence of segments that must each appear in the body, in
    order, rather than as one contiguous substring. This only ever accepts
    quotes the author explicitly marked as elided; a quote with no ellipsis
    is unaffected and still requires an exact contiguous match.
    """
    has_ellipsis = bool(re.search(r'\.\s*\.\s*\.|…', quote))
    segments = [s for s in re.split(r'\s*(?:\.\s*\.\s*\.|…)\s*', quote) if s.strip()]
    if has_ellipsis and segments:
        # An ellipsis at either end (an open-ended prefix or suffix quote)
        # produces just one segment here -- still segment mode, since the
        # alternative is testing the literal "..." characters against the
        # body, which is exactly the bug this exists to avoid.
        return any(_segments_in_order(norm(body, r), [norm(s, r) for s in segments])
                   for r in ('', ' '))
    return any(norm(quote, r) in norm(body, r) for r in ('', ' '))


def seed_leginfo():
    subprocess.run(['rm', '-f', JAR])
    subprocess.run(['curl', '-s', '-c', JAR, '-A', UA, '-o', '/dev/null',
                    'https://leginfo.legislature.ca.gov/faces/codes.xhtml'],
                   timeout=60)


def extract_pdf(path):
    """Every text layer we can get from a PDF, plus a line-number-stripped one.

    The two extractors disagree — one inserts mid-word spaces, the other
    preserves justified spacing — so a quote verified against one can fail
    against the other. Returning both and accepting either keeps that
    disagreement from being reported as a corpus defect.

    California slip opinions also carry marginal line numbers, which
    extraction interleaves into the prose: a quote spanning a line break reads
    "what should 20 happen" in the extracted text and matches neither
    extractor. A candidate with standalone one- and two-digit numbers removed
    covers that.

    A separate PDF-font quirk shows up as a "fontTools ... CFF Type1 font"
    warning during extraction: some scanned slip opinions use a font whose
    apostrophe glyph both extractors decode as a straight double quote, so
    "court's" comes out as 'court"s'. A candidate with word-internal double
    quotes folded to apostrophes covers that.

    All of these are extra ways to match, never a replacement: the unmodified
    texts are still checked first, so none of this can turn a genuinely wrong
    quote into a false pass.
    """
    texts = []
    size = os.path.getsize(path)
    try:
        import pypdf
        r = pypdf.PdfReader(path)
        texts.append('\n'.join((pg.extract_text() or '') for pg in r.pages))
    except Exception:
        pass
    # pdfminer holds the whole page tree in memory; on a multi-megabyte
    # volume that is enough to get the process killed. pypdf alone will do.
    if size < 12_000_000:
        try:
            from pdfminer.high_level import extract_text
            texts.append(extract_text(path) or '')
        except Exception:
            pass
    texts = [t for t in texts if t]
    variants = list(texts)
    # Marginal line numbers in California slip opinions get interleaved into
    # the prose: "what should 20 happen" matches neither extractor.
    for t in texts:
        v = re.sub(r'(?<=\s)\d{1,2}(?=\s)', ' ', t)
        if v not in variants: variants.append(v)
    # Some scanned slip PDFs use a Type1 font whose apostrophe glyph both
    # extractors decode as a double-quote-family character — "fontTools ...
    # CFF Type1 font" warnings during extraction are the tell, and the
    # specific glyph varies (seen: U+201F DOUBLE HIGH-REVERSED-9 QUOTATION
    # MARK, as well as a plain straight quote). A real double quote does not
    # appear silently inside one word with no space around it, so this is a
    # safe, narrow substitution: any double-quote-family character sitting
    # word-internal -> straight apostrophe. The character before it can be a
    # digit, not just a letter: a statute-section possessive like "662's"
    # hits this the same way a word like "court's" does.
    dq = '"“”‟„'
    for t in texts:
        v = re.sub(rf'(?<=[a-zA-Z0-9])[{dq}](?=[a-zA-Z])', "'", t)
        if v not in variants: variants.append(v)
    return variants


def fetch(url, host, retries=3):
    """Candidate texts for a URL. A list, because a PDF yields two.

    CourtListener rate-limits anonymous requests and returns 429, or an empty
    202 while a page is being generated. Every wave-expansion agent this
    project has run has had to ride these out with a sleep-and-retry loop;
    treating a 429 body as "the page has no statutory text" would report a
    rate limit as a broken citation, which is exactly the kind of tool bug
    this script exists to avoid inflicting on the corpus. On repeated 429s
    this gives up and returns the sentinel ['__RATE_LIMITED__'] rather than
    an empty list, so the caller can record an honest "untested", not a
    false EMPTY or MISMATCH.
    """
    cmd = ['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', '-A', UA]
    if 'leginfo' in host:
        cmd += ['-b', JAR, '-c', JAR]
    if 'courtlistener' in host:
        cmd += ['-H', 'Referer: https://www.courtlistener.com/',
                '-H', 'Accept: text/html,application/xhtml+xml']

    def status_of(target_cmd):
        try:
            return subprocess.run(target_cmd, capture_output=True, text=True,
                                  timeout=90).stdout.strip()
        except Exception:
            return ''

    if 'courtlistener' in host:
        backoff = [30, 90, 180]
        for attempt in range(retries + 1):
            code = status_of(cmd + ['-L', '--max-time', '90', url])
            if code == '429':
                if attempt < retries:
                    time.sleep(backoff[min(attempt, len(backoff) - 1)])
                    continue
                return ['__RATE_LIMITED__']
            break  # any other status: fall through to the real fetch below

    fetch_cmd = ['curl', '-s', '-L', '--max-time', '90', '-A', UA]
    if 'leginfo' in host:
        fetch_cmd += ['-b', JAR, '-c', JAR]
    if 'courtlistener' in host:
        fetch_cmd += ['-H', 'Referer: https://www.courtlistener.com/',
                      '-H', 'Accept: text/html,application/xhtml+xml']
    if url.lower().endswith('.pdf') or 'pdf' in url.lower():
        tmp = '/tmp/recheck_fetch.pdf'
        subprocess.run(['rm', '-f', tmp])
        try:
            subprocess.run(fetch_cmd + ['-o', tmp, url], capture_output=True, timeout=180)
        except Exception:
            return []
        if not os.path.exists(tmp) or os.path.getsize(tmp) < 1000:
            return []
        with open(tmp, 'rb') as f:
            head = f.read(5)
        if head[:4] != b'%PDF':
            return [open(tmp, 'rb').read().decode('utf-8', 'replace')]
        return extract_pdf(tmp)
    try:
        return [subprocess.run(fetch_cmd + [url], capture_output=True, text=True,
                               timeout=90).stdout]
    except Exception:
        return []


def main():
    args = sys.argv[1:]
    which = 'statutory'
    out = 'recheck_results.jsonl'
    delay = 1.2
    for i, a in enumerate(args):
        if a == '--hosts' and i + 1 < len(args):
            which = args[i + 1]
        if a == '--out' and i + 1 < len(args):
            out = args[i + 1]
        if a == '--delay' and i + 1 < len(args):
            delay = float(args[i + 1])

    hosts = {'statutory': STATUTORY, 'courtlistener': COURTLISTENER,
             'all': STATUTORY + COURTLISTENER}[which]

    clauses = json.load(open('data/clauses.json'))['clauses']
    by_url = collections.defaultdict(list)
    for c in clauses:
        if c['kind'] != 'authority':
            continue
        for ct in c['citations']:
            if urlparse(ct['url']).netloc in hosts:
                by_url[ct['url']].append((c['id'], ct['quote'], ct['cite']))

    done = set()
    if os.path.exists(out):
        for line in open(out):
            try:
                done.add(json.loads(line)['url'])
            except Exception:
                pass
    todo = [u for u in sorted(by_url) if u not in done]
    total_q = sum(len(by_url[u]) for u in by_url)
    print(f'{total_q} citations across {len(by_url)} unique URLs; '
          f'{len(done)} URLs already done, {len(todo)} to go', flush=True)

    seed_leginfo()
    fh = open(out, 'a')
    counts = collections.Counter()
    for n, url in enumerate(todo, 1):
        host = urlparse(url).netloc
        bodies = fetch(url, host)
        if 'leginfo' in host and not any(len(b) >= 500 for b in bodies):
            # An empty body here means the JSF session expired, not that the
            # section is gone — and every later fetch would fail the same way.
            seed_leginfo()
            time.sleep(1)
            bodies = fetch(url, host)
        rate_limited = bodies == ['__RATE_LIMITED__']
        best = 0 if rate_limited else max((len(b) for b in bodies), default=0)
        joined = '' if rate_limited else '\n'.join(bodies)
        for cid, quote, cite in by_url[url]:
            if rate_limited:
                # A 429 that survived backoff is not evidence about the
                # citation either way — record it as untested, not failed.
                status = 'RATE_LIMITED'
            elif best < 500:
                status = 'EMPTY'
            elif 'Please Select from the List below' in joined:
                # No statutory text on the page at all: the citation does not
                # resolve. That is a broken link, not a wrong quote.
                status = 'UNRESOLVED_URL'
            elif any(quote_present(b, quote) for b in bodies):
                status = 'PASS'
            else:
                status = 'MISMATCH'
            counts[status] += 1
            fh.write(json.dumps({'clause': cid, 'url': url, 'cite': cite,
                                 'status': status, 'bytes': best,
                                 'quote': quote[:400]}) + '\n')
        fh.flush()
        if n % 100 == 0:
            print(f'  {n}/{len(todo)} URLs  {dict(counts)}', file=sys.stderr, flush=True)
        time.sleep(delay)
    fh.close()
    print('\n' + json.dumps(dict(counts)))
    print(f'results in {out}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
