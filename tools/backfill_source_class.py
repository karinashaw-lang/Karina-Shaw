#!/usr/bin/env python3
"""CA Wedge Plan Step 2.2: backfill `sourceClass` onto every citation in
data/clauses.json, by URL domain.

One-time migration, in the same style as migrate_fields.py /
build_field_library.py / add_why_we_ask.py: dry-run by default (prints the
classification report and any domain this script doesn't recognize, so a
new domain never gets silently miscategorized), --write applies it.

The five sourceClass values (Global Rule 4 of the CA Wedge Plan):
  primary-official  - the government body's own publication of codified
                       statutory/regulatory text (leginfo, the U.S. Code,
                       the eCFR, govinfo).
  court-opinion     - a court's own opinion text (CourtListener, which
                       hosts the opinions themselves, not a summary; the
                       Supreme Court's own site).
  agency            - a government agency's own guidance, explanation, or
                       administrative material that is not itself the
                       codified law and not a court opinion (courts.ca.gov
                       self-help, DIR, EDD, IRS, FTB, SOS, DOL, CPPA, etc).
  mirror            - a non-governmental site that reproduces primary text
                       (california.public.law, law.onecle.com, Cornell's
                       Legal Information Institute). A mirror is not
                       primary, per Global Rule 4 -- it can support
                       "Cited" but never "Verified".
  secondary         - commentary, analysis, or any other non-authoritative
                       discussion of the law (not used by any citation's
                       url today, per the dry run below, but kept as a
                       valid value for anything that doesn't fit the other
                       four going forward).

Every domain actually present in this corpus is listed explicitly below;
an unrecognized domain is reported, not guessed at, and the script refuses
to write until every domain is classified.
"""
import json, re, sys
from collections import Counter

DOMAIN_TO_CLASS = {
    # primary-official
    'leginfo.legislature.ca.gov': 'primary-official',
    'www.leginfo.ca.gov': 'primary-official',
    'uscode.house.gov': 'primary-official',
    'www.ecfr.gov': 'primary-official',
    'www.govinfo.gov': 'primary-official',
    'www.nysenate.gov': 'primary-official',
    # court-opinion
    'www.courtlistener.com': 'court-opinion',
    'storage.courtlistener.com': 'court-opinion',
    'www.supremecourt.gov': 'court-opinion',
    # agency
    'www.dir.ca.gov': 'agency',
    'dir.ca.gov': 'agency',
    'courts.ca.gov': 'agency',
    'www.courts.ca.gov': 'agency',
    'selfhelp.courts.ca.gov': 'agency',
    'cppa.ca.gov': 'agency',
    'edd.ca.gov': 'agency',
    'oag.ca.gov': 'agency',
    'cuiab.ca.gov': 'agency',
    'www.irs.gov': 'agency',
    'www.sos.ca.gov': 'agency',
    'www.ftb.ca.gov': 'agency',
    'webapps.dol.gov': 'agency',
    'bhgs.dca.ca.gov': 'agency',
    'www.dol.gov': 'agency',
    'bpd.cdn.sos.ca.gov': 'agency',
    # mirror
    'www.law.cornell.edu': 'mirror',
    'law.onecle.com': 'mirror',
    'california.public.law': 'mirror',
}

def domain_of(url):
    m = re.match(r'https?://([^/]+)/?', url or '')
    return m.group(1) if m else None

def main():
    write = '--write' in sys.argv
    data = json.load(open('data/clauses.json', encoding='utf-8'))
    clauses = data['clauses']

    unknown_domains = Counter()
    class_counts = Counter()
    clauses_touched = 0
    citations_touched = 0
    already_set = 0

    for c in clauses:
        touched_this_clause = False
        for ct in c.get('citations', []):
            dom = domain_of(ct.get('url'))
            if dom is None:
                unknown_domains['(no url)'] += 1
                continue
            if dom not in DOMAIN_TO_CLASS:
                unknown_domains[dom] += 1
                continue
            cls = DOMAIN_TO_CLASS[dom]
            if ct.get('sourceClass') == cls:
                already_set += 1
                continue
            class_counts[cls] += 1
            citations_touched += 1
            touched_this_clause = True
            if write:
                ct['sourceClass'] = cls
        if touched_this_clause:
            clauses_touched += 1

    print(f'{sum(class_counts.values())} citations to classify '
          f'({already_set} already correctly set, 0 ambiguous domains unless listed below)')
    for cls, cnt in class_counts.most_common():
        print(f'  {cnt:6d}  {cls}')
    print(f'{clauses_touched} clauses affected')

    if unknown_domains:
        print('\nUNRECOGNIZED DOMAINS -- add these to DOMAIN_TO_CLASS before writing:')
        for dom, cnt in unknown_domains.most_common():
            print(f'  {cnt:6d}  {dom}')
        if write:
            print('\nRefusing to write: unrecognized domains present.')
            sys.exit(1)

    if not write:
        print('\nDry run only. Re-run with --write to apply.')
        return

    with open('data/clauses.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')
    print('\nWrote sourceClass into data/clauses.json.')

if __name__ == '__main__':
    main()
