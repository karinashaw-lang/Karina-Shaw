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
    t = re.sub(r'<[^>]+>', tag_repl, t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()


def quote_present(body, quote):
    """Accept either way of stripping tags.

    Dropping them joins words that markup merely wrapped; replacing them with
    a space separates list items a publisher puts one per element. Both
    spellings have produced a false mismatch against a quote that was correct.
    """
    return any(norm(quote, r) in norm(body, r) for r in ('', ' '))


def seed_leginfo():
    subprocess.run(['rm', '-f', JAR])
    subprocess.run(['curl', '-s', '-c', JAR, '-A', UA, '-o', '/dev/null',
                    'https://leginfo.legislature.ca.gov/faces/codes.xhtml'],
                   timeout=60)


def extract_pdf(path):
    """Every text layer we can get from a PDF, not just the first.

    The two extractors disagree — one inserts mid-word spaces, the other
    preserves justified spacing — so a quote verified against one can fail
    against the other. Returning both and accepting either keeps that
    disagreement from being reported as a corpus defect.
    """
    texts = []
    try:
        import pypdf
        r = pypdf.PdfReader(path)
        texts.append('\n'.join((pg.extract_text() or '') for pg in r.pages))
    except Exception:
        pass
    try:
        from pdfminer.high_level import extract_text
        texts.append(extract_text(path) or '')
    except Exception:
        pass
    return [t for t in texts if t]


def fetch(url, host):
    """Candidate texts for a URL. A list, because a PDF yields two."""
    cmd = ['curl', '-s', '-L', '--max-time', '90', '-A', UA]
    if 'leginfo' in host:
        cmd += ['-b', JAR, '-c', JAR]
    if 'courtlistener' in host:
        cmd += ['-H', 'Referer: https://www.courtlistener.com/',
                '-H', 'Accept: text/html,application/xhtml+xml']
    if url.lower().endswith('.pdf') or 'pdf' in url.lower():
        tmp = '/tmp/recheck_fetch.pdf'
        subprocess.run(['rm', '-f', tmp])
        try:
            subprocess.run(cmd + ['-o', tmp, url], capture_output=True, timeout=180)
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
        return [subprocess.run(cmd + [url], capture_output=True, text=True,
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
        best = max((len(b) for b in bodies), default=0)
        joined = '\n'.join(bodies)
        for cid, quote, cite in by_url[url]:
            if best < 500:
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
