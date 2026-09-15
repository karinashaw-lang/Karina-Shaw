#!/usr/bin/env python3
"""Re-fetch stored citation URLs and re-check that each quote is still there.

Quote verification at write time proves a quote was in text the author
fetched. It cannot tell you whether the stored URL still returns that text
later. This closes that gap, and found a citation URL that resolves to a
version-picker rather than to statutory text.

Usage:
  python3 tools/recheck_citations.py [N] [host-substring ...]

With no host given it samples statutory publishers only. Pass
"courtlistener" deliberately and only when no expansion workers are running,
since they share that quota.
"""
import json, re, subprocess, time, html, unicodedata, sys, random, collections
from urllib.parse import urlparse

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/131.0 Safari/537.36')
DEFAULT_HOSTS = ('leginfo.legislature.ca.gov', 'law.onecle.com',
                 'www.law.cornell.edu', 'uscode.house.gov')

def norm(t):
    t = html.unescape(t)
    t = unicodedata.normalize('NFKC', t)
    for a, b in [('\u2018', "'"), ('\u2019', "'"), ('\u201c', '"'), ('\u201d', '"'),
                 ('\u201f', '"'), ('\u201e', '"'), ('\u2013', '-'), ('\u2014', '-'),
                 ('\u00a0', ' '), ('\u00ad', '')]:
        t = t.replace(a, b)
    # Strip tags to nothing, not to a space: inserting a space splits words
    # that markup had merely wrapped, and produces false mismatches.
    t = re.sub(r'<[^>]+>', '', t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

def seed_leginfo(jar):
    subprocess.run(['curl', '-s', '-c', jar, '-A', UA, '-o', '/dev/null',
                    'https://leginfo.legislature.ca.gov/faces/codes.xhtml'], timeout=60)

def main():
    n = int(sys.argv[1]) if len(sys.argv) > 1 else 40
    hosts = tuple(sys.argv[2:]) or DEFAULT_HOSTS
    clauses = json.load(open('data/clauses.json'))['clauses']
    pool = [(c['id'], c['checkedDate'], urlparse(ct['url']).netloc, ct['url'], ct['quote'])
            for c in clauses if c['kind'] == 'authority'
            for ct in c['citations']
            if any(h in ct['url'] for h in hosts)]
    print(f'{len(pool)} citations match {hosts}; sampling {min(n, len(pool))}')
    random.shuffle(pool)
    sample = pool[:n]

    jar = '/tmp/recheck_cookies.txt'
    results = []
    for i, (cid, date, host, url, quote) in enumerate(sample, 1):
        # Re-seed per request: one JSF session does not survive a long run.
        if 'leginfo' in host:
            subprocess.run(['rm', '-f', jar])
            seed_leginfo(jar)
            time.sleep(1)
            cmd = ['curl', '-s', '-L', '--max-time', '60', '-b', jar, '-c', jar, '-A', UA, url]
        else:
            cmd = ['curl', '-s', '-L', '--max-time', '60', '-A', UA, url]
        try:
            body = subprocess.run(cmd, capture_output=True, text=True, timeout=90).stdout
        except Exception as e:
            results.append((cid, host, url, quote, 'FETCH_ERROR', str(e)[:80]))
            continue
        if len(body) < 500:
            results.append((cid, host, url, quote, 'EMPTY', f'{len(body)} bytes'))
            continue
        nb, nq = norm(body), norm(quote)
        status = 'PASS' if nq and nq in nb else 'MISMATCH'
        # A page with no statutory text at all is a broken citation, not a bad quote.
        if status == 'MISMATCH' and 'Please Select from the List below' in body:
            status = 'UNRESOLVED_URL'
        results.append((cid, host, url, quote, status, f'{len(body)} bytes'))
        time.sleep(1.5)
        if i % 10 == 0:
            print(f'  ...{i}/{len(sample)}', file=sys.stderr)

    print(dict(collections.Counter(r[4] for r in results)))
    for r in results:
        if r[4] != 'PASS':
            print(f'\n[{r[4]}] {r[0]}\n  {r[2]}\n  ({r[5]})\n  quote: {r[3][:140]}')
    json.dump(results, open('/tmp/recheck_results.json', 'w'))
    print('\nNote: an EMPTY or MISMATCH is often this script, not the corpus.')
    print('Retry with a fresh session and check normalization before reporting a defect.')
    return 1 if any(r[4] not in ('PASS',) for r in results) else 0

if __name__ == '__main__':
    sys.exit(main())
