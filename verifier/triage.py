#!/usr/bin/env python3
"""Phase 4.2: the triage workflow for verifier findings. Lists open
findings by severity, and records a decision for one: accepted (the
finding stands, whether or not a clause edit follows), rejected (false
positive, with a required reason — fed back into verifier/prompt.md's
"Known false positives" section so a future run doesn't repeat it), or
fixed (the clause has already been edited elsewhere; this call appends
the changelog.html entry documenting it, in the same format as the
project's existing defect entries).

This script never edits data/clauses.json or data/documents.json
itself — "fixed" records that an edit already happened, it doesn't
perform one. The actual correction is a normal direct edit, checked the
same way every other corpus fix in this project is (validate_corpus.py,
golden fixture regeneration if the rendered text changed), before
`--decide ... --status fixed` is ever called.

Finding ids are `<clauseId>#<n>`, where n is the 0-based position of
that finding among all findings recorded for the same clause id, in
findings.jsonl's (append-only, never reordered) order — stable without
needing findings.jsonl itself to carry an explicit id field.

    python3 verifier/triage.py --list                       # all open findings, by severity
    python3 verifier/triage.py --list --severity major       # just one severity
    python3 verifier/triage.py --decide <id> --status accepted --reason "..."
    python3 verifier/triage.py --decide <id> --status rejected --reason "..."
    python3 verifier/triage.py --decide <id> --status fixed \
        --changelog-date 2026-10-17 --changelog-clause "Label · Document" \
        --changelog-title "Headline" --changelog-found "What we found text" \
        --changelog-fix "What changed text" \
        --changelog-source "URL" [--changelog-source "URL2" ...]
    python3 verifier/triage.py --summary                     # counts by status
"""
import json
import os
import sys
from datetime import datetime
from html import escape

FINDINGS_PATH = 'verifier/findings.jsonl'
TRIAGE_PATH = 'verifier/triage.jsonl'
PROMPT_PATH = 'verifier/prompt.md'
CHANGELOG_PATH = 'changelog.html'
SEVERITY_RANK = {'blocker': 0, 'major': 1, 'minor': 2}
KNOWN_FALSE_POSITIVES_HEADER = '## Known false positives (from triage)'


def load_findings():
    findings = []
    counts = {}
    with open(FINDINGS_PATH, encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            entry = json.loads(line)
            cid = entry['clauseId']
            n = counts.get(cid, 0)
            entry['findingId'] = f'{cid}#{n}'
            counts[cid] = n + 1
            findings.append(entry)
    return findings


def load_triage():
    try:
        with open(TRIAGE_PATH, encoding='utf-8') as f:
            return {json.loads(line)['findingId']: json.loads(line) for line in f if line.strip()}
    except FileNotFoundError:
        return {}


def cmd_list(severity_filter):
    findings = load_findings()
    decided = load_triage()
    open_findings = [f for f in findings if f['findingId'] not in decided]
    if severity_filter:
        open_findings = [f for f in open_findings if f['severity'] == severity_filter]
    open_findings.sort(key=lambda f: SEVERITY_RANK.get(f['severity'], 3))

    print(f'{len(open_findings)} open finding(s){f" (severity={severity_filter})" if severity_filter else ""}:\n')
    for f in open_findings:
        print(f"[{f['severity']}/{f['category']}] {f['findingId']}")
        print(f"  {f['summary']}")
        print(f"  Evidence: {f['evidence'][:200]}")
        print(f"  Source: {f['sourceChecked']}")
        print(f"  Suggested fix: {f['suggestedFix']}")
        print()


def cmd_summary():
    findings = load_findings()
    decided = load_triage()
    by_status = {'accepted': 0, 'rejected': 0, 'fixed': 0, 'open': 0}
    for f in findings:
        d = decided.get(f['findingId'])
        by_status[d['status'] if d else 'open'] += 1
    print(f'Total findings: {len(findings)}')
    for status in ('open', 'accepted', 'rejected', 'fixed'):
        print(f'  {status:<10} {by_status[status]}')


def append_false_positive(reason, finding):
    with open(PROMPT_PATH, encoding='utf-8') as f:
        content = f.read()
    bullet = (f"- `{finding['category']}` on a clause like `{finding['clauseId']}`: "
              f"{reason}")
    if KNOWN_FALSE_POSITIVES_HEADER not in content:
        content = content.rstrip('\n') + f'\n\n{KNOWN_FALSE_POSITIVES_HEADER}\n\n' \
            'Reported by a past triage pass as NOT a real finding. Don\'t raise these again:\n\n' \
            f'{bullet}\n'
    else:
        content = content.rstrip('\n') + f'\n{bullet}\n'
    with open(PROMPT_PATH, 'w', encoding='utf-8') as f:
        f.write(content)


def append_changelog_entry(date, clause_label, title, found_text, fix_text, sources):
    with open(CHANGELOG_PATH, encoding='utf-8') as f:
        content = f.read()
    marker = '\n    </div>\n\n    <footer'
    if marker not in content:
        raise SystemExit(f'ABORT: expected marker not found in {CHANGELOG_PATH} — format may have changed.')

    source_links = '\n'.join(
        f'          <a href="{escape(url)}" target="_blank" rel="noopener noreferrer">{escape(url)}</a>'
        for url in sources
    )
    entry_html = f'''
      <div class="entry">
        <div class="entry-meta">
          <span class="entry-date">{escape(date)}</span>
          <span class="entry-clause">{escape(clause_label)}</span>
        </div>
        <h3>{escape(title)}</h3>
        <div class="entry-block">
          <b>What we found</b>
          {escape(found_text)}
        </div>
        <div class="entry-block fixed">
          <b>What changed</b>
          {escape(fix_text)}
        </div>
        <div class="entry-sources">
{source_links}
        </div>
      </div>
'''
    content = content.replace(marker, entry_html + marker)
    with open(CHANGELOG_PATH, 'w', encoding='utf-8') as f:
        f.write(content)


def cmd_decide(args):
    finding_id = args['decide']
    status = args.get('status')
    if status not in ('accepted', 'rejected', 'fixed'):
        raise SystemExit('ABORT: --status must be accepted, rejected, or fixed')

    findings = {f['findingId']: f for f in load_findings()}
    if finding_id not in findings:
        raise SystemExit(f'ABORT: no such finding id {finding_id!r}')
    decided = load_triage()
    if finding_id in decided:
        raise SystemExit(f'ABORT: {finding_id} already triaged as {decided[finding_id]["status"]!r}')

    finding = findings[finding_id]
    reason = args.get('reason')
    if status == 'rejected' and not reason:
        raise SystemExit('ABORT: --status rejected requires --reason')

    record = {
        'findingId': finding_id, 'clauseId': finding['clauseId'], 'status': status,
        'decidedAt': datetime.now().isoformat(timespec='seconds'),
    }
    if reason:
        record['reason'] = reason

    if status == 'fixed':
        required = ['changelog-date', 'changelog-clause', 'changelog-title', 'changelog-found', 'changelog-fix']
        missing = [k for k in required if not args.get(k)]
        if missing or not args.get('changelog-source'):
            raise SystemExit(f'ABORT: --status fixed requires {required} and at least one --changelog-source')
        append_changelog_entry(
            args['changelog-date'], args['changelog-clause'], args['changelog-title'],
            args['changelog-found'], args['changelog-fix'], args['changelog-source'],
        )
        record['changelogEntry'] = {'date': args['changelog-date'], 'clause': args['changelog-clause'],
                                     'title': args['changelog-title']}

    if status == 'rejected':
        append_false_positive(reason, finding)

    with open(TRIAGE_PATH, 'a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')
    print(f'Recorded {finding_id} as {status}.', file=sys.stderr)


def parse_args(argv):
    args = {}
    i = 0
    while i < len(argv):
        token = argv[i]
        if not token.startswith('--'):
            i += 1
            continue
        key = token[2:]
        if key == 'changelog-source':
            args.setdefault('changelog-source', []).append(argv[i + 1])
            i += 2
            continue
        if i + 1 < len(argv) and not argv[i + 1].startswith('--'):
            args[key] = argv[i + 1]
            i += 2
        else:
            args[key] = True
            i += 1
    return args


def main():
    args = parse_args(sys.argv[1:])
    if 'list' in args:
        cmd_list(args.get('severity'))
    elif 'summary' in args:
        cmd_summary()
    elif 'decide' in args:
        cmd_decide(args)
    else:
        print(__doc__)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
