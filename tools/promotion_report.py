#!/usr/bin/env python3
"""Phase 3.3: the promotion report — tier counts per category, the 20
documents closest to Tier B with their exact missing gates, and
week-over-week change against a stored history file.

Reads tiers.json (doesn't recompute tiers itself — run
`python3 tools/tiering.py` first; tiering.py is the one place tiers are
computed, consistent with "computed, never hand-assigned"). "Closest to
the next tier" only covers Tier C documents' real, actionable distance
to Tier B: Tier B documents are all equally blocked from Tier A by the
same two missing systems (Phase 4.1's adversarial verifier, Phase 9.1's
accessibility checks), so ranking them against each other today would
report a difference that doesn't actually exist yet.

    python3 tools/promotion_report.py                 # print the report
    python3 tools/promotion_report.py --markdown       # GFM output, for a CI job summary
    python3 tools/promotion_report.py --write-history  # also append today's snapshot to
                                                        # tiers_history.jsonl (at most once
                                                        # per calendar day — a developer
                                                        # action, not something CI does)
"""
import json
import os
import sys
from datetime import date, timedelta

TIERS_PATH = 'tiers.json'
HISTORY_PATH = 'tiers_history.jsonl'
TOP_N = 20
TIER_KEYS = ('A', 'B', 'C', 'total')
EMPTY_COUNTS = {'A': 0, 'B': 0, 'C': 0, 'total': 0}


def load_tiers():
    if not os.path.exists(TIERS_PATH):
        raise SystemExit(f'{TIERS_PATH} not found — run `python3 tools/tiering.py` first.')
    with open(TIERS_PATH, encoding='utf-8') as f:
        return json.load(f)


def load_history():
    if not os.path.exists(HISTORY_PATH):
        return []
    entries = []
    with open(HISTORY_PATH, encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:
                entries.append(json.loads(line))
    return entries


def append_history(tiers):
    today = date.today().isoformat()
    history = load_history()
    if history and history[-1]['date'] == today:
        return False  # already recorded today — stay idempotent on reruns
    with open(HISTORY_PATH, 'a', encoding='utf-8') as f:
        f.write(json.dumps({'date': today, 'summary': tiers['summary']}, ensure_ascii=False) + '\n')
    return True


def find_week_ago_baseline(history):
    cutoff = date.today() - timedelta(days=7)
    candidates = [e for e in history if date.fromisoformat(e['date']) <= cutoff]
    if not candidates:
        return None
    return max(candidates, key=lambda e: e['date'])


def week_over_week_deltas(tiers, baseline):
    """Returns {category: {A, B, C, total}} of deltas, omitting any
    category with no change at all, across every category either
    snapshot mentions (a category could exist in one and not the
    other, if the corpus's own category list ever changes)."""
    categories = sorted(set(tiers['summary']) | set(baseline['summary']))
    deltas = {}
    for cat in categories:
        now = tiers['summary'].get(cat, EMPTY_COUNTS)
        then = baseline['summary'].get(cat, EMPTY_COUNTS)
        delta = {k: now[k] - then[k] for k in TIER_KEYS}
        if any(delta.values()):
            deltas[cat] = delta
    return deltas


def closest_to_b(tiers):
    docs = tiers['documents']
    c_docs = [(doc_id, info) for doc_id, info in docs.items() if info['tier'] == 'C']
    c_docs.sort(key=lambda item: (len(item[1]['blockingB']), item[0]))
    return c_docs[:TOP_N]


def format_text(tiers, history):
    lines = [f"Promotion report — {tiers['generated_at']}", '']

    lines.append(f"{'Category':<24} {'A':>5} {'B':>5} {'C':>5} {'Total':>7}")
    for cat, counts in tiers['summary'].items():
        if cat == 'ALL':
            continue
        lines.append(f"{cat:<24} {counts['A']:>5} {counts['B']:>5} {counts['C']:>5} {counts['total']:>7}")
    allb = tiers['summary']['ALL']
    lines.append(f"{'ALL':<24} {allb['A']:>5} {allb['B']:>5} {allb['C']:>5} {allb['total']:>7}")
    lines.append('')

    baseline = find_week_ago_baseline(history)
    if baseline is None:
        lines.append('Week-over-week: no history entry 7+ days old yet to compare against.')
    else:
        lines.append(f"Week-over-week change (vs {baseline['date']}):")
        deltas = week_over_week_deltas(tiers, baseline)
        if not deltas:
            lines.append('  (no change)')
        for cat, d in deltas.items():
            lines.append(f"  {cat}: A {d['A']:+d}, B {d['B']:+d}, C {d['C']:+d}, total {d['total']:+d}")
    lines.append('')

    lines.append(f"Top {TOP_N} documents closest to Tier B "
                  f"(Tier B→A has no actionable path yet — Phase 4.1/9.1 don't exist):")
    top = closest_to_b(tiers)
    if not top:
        lines.append('  (no Tier C documents)')
    for doc_id, info in top:
        lines.append(f"  {doc_id}: {'; '.join(info['blockingB'])}")

    return '\n'.join(lines)


def format_markdown(tiers, history):
    lines = [f"## Promotion report — {tiers['generated_at']}", '']

    lines.append('| Category | A | B | C | Total |')
    lines.append('|---|---|---|---|---|')
    for cat, counts in tiers['summary'].items():
        if cat == 'ALL':
            continue
        lines.append(f"| {cat} | {counts['A']} | {counts['B']} | {counts['C']} | {counts['total']} |")
    allb = tiers['summary']['ALL']
    lines.append(f"| **ALL** | {allb['A']} | {allb['B']} | {allb['C']} | {allb['total']} |")
    lines.append('')

    baseline = find_week_ago_baseline(history)
    lines.append('### Week-over-week')
    if baseline is None:
        lines.append('No history entry 7+ days old yet to compare against.')
    else:
        deltas = week_over_week_deltas(tiers, baseline)
        lines.append(f"Compared to {baseline['date']}:")
        if not deltas:
            lines.append('No change.')
        else:
            lines.append('')
            lines.append('| Category | ΔA | ΔB | ΔC | ΔTotal |')
            lines.append('|---|---|---|---|---|')
            for cat, d in deltas.items():
                lines.append(f"| {cat} | {d['A']:+d} | {d['B']:+d} | {d['C']:+d} | {d['total']:+d} |")
    lines.append('')

    lines.append(f"### Top {TOP_N} documents closest to Tier B")
    lines.append("(Tier B→A has no actionable path yet — Phase 4.1's adversarial verifier "
                  "and Phase 9.1's accessibility checks don't exist.)")
    lines.append('')
    top = closest_to_b(tiers)
    if not top:
        lines.append('No Tier C documents.')
    else:
        lines.append('| Document | Missing to reach Tier B |')
        lines.append('|---|---|')
        for doc_id, info in top:
            lines.append(f"| `{doc_id}` | {'; '.join(info['blockingB'])} |")

    return '\n'.join(lines)


def main():
    markdown = '--markdown' in sys.argv
    write_history = '--write-history' in sys.argv

    tiers = load_tiers()
    history = load_history()

    print(format_markdown(tiers, history) if markdown else format_text(tiers, history))

    if write_history:
        wrote = append_history(tiers)
        print(f"\n{'Recorded' if wrote else 'Already recorded'} today's snapshot in {HISTORY_PATH}.",
              file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
