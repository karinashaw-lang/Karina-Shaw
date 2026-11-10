"""CA Wedge Plan Step 2.1: the single source of truth for a clause's
honest verification level, shared by tools/tiering.py (which needs it to
decide Tier A/B) and tools/build_verification_levels.py (which needs it to
ship the same answer to the client for the sourcing-UI badges). Computing
this in two places, even slightly differently, is exactly how a "Verified"
badge and a "Tier A" label could quietly disagree -- so neither file
computes it from scratch; both import this.

Three levels, each strictly containing the ones before it:

  cited                  Has a citation, a quote, and a checkedDate --
                          true of every authority clause in the corpus by
                          construction (validate_corpus.py's own gates).
                          The floor, not an achievement.
  verified                `status: "verified"` AND every one of the
                          clause's citations has sourceClass in
                          {primary-official, court-opinion, agency} --
                          never `mirror` or `secondary` (Global Rule 4:
                          "A mirror is not primary"). A clause citing a
                          mirror stays at `cited` no matter what its old
                          status field says.
  adversarially_checked   All of `verified`, PLUS the clause has actually
                          been run through the adversarial verifier
                          (appears in verifier/checked.jsonl) and carries
                          no finding of ANY severity that isn't `fixed` --
                          an open (never-triaged) or `accepted` finding of
                          even minor severity blocks this level. This is
                          stricter than the pre-Wedge-Plan Tier A gate,
                          which only blocked on blocker/major severity;
                          Step 2's own wording ("adversarially checked ...
                          with no open findings") carries no severity
                          qualifier, so none is read into it here.

A drafting clause has no citation to check at all; `clause_level` returns
None for it, meaning "not applicable", not "cited" -- a drafting clause
was never a legal-authority claim in the first place, and Step 2.3's
"Drafting only (no legal authority claimed)" label is the honest way to
describe a document built entirely from such clauses, not a tier.
"""
import json

# A positive allowlist, not "anything that isn't mirror/secondary" --
# a missing sourceClass must NOT count as primary by default. "Absent is
# not met, never assumed met" (tiering.py's own governing rule) applies
# here too: an unrecognized or missing sourceClass is unknown, not safe.
PRIMARY_SOURCE_CLASSES = {'primary-official', 'court-opinion', 'agency'}

CHECKED_PATH = 'verifier/checked.jsonl'
FINDINGS_PATH = 'verifier/findings.jsonl'
TRIAGE_PATH = 'verifier/triage.jsonl'


def _load_jsonl(path):
    try:
        with open(path, encoding='utf-8') as f:
            return [json.loads(line) for line in f if line.strip()]
    except FileNotFoundError:
        return []


CLOSED_TRIAGE_STATUSES = {'fixed', 'rejected'}  # "accepted" still leaves a clause unclean -- the defect stands


def load_verifier_state():
    """checked_ids: clause ids the adversarial checkpoint has actually
    reached. unclean_ids: clause ids carrying at least one finding of ANY
    severity whose triage disposition isn't "fixed" or "rejected" --
    includes a finding nobody has triaged yet and one explicitly
    "accepted" (the defect stands, just not corrected). A "rejected"
    finding (a confirmed false positive) does NOT leave a clause unclean.
    Unlike tiering.py's pre-Wedge-Plan OPEN_BLOCKING_SEVERITIES, there is
    no severity filter here at all -- a minor finding counts the same as
    a blocker."""
    checked_ids = {c['clauseId'] for c in _load_jsonl(CHECKED_PATH)}

    findings_by_clause = {}
    for entry in _load_jsonl(FINDINGS_PATH):
        findings_by_clause.setdefault(entry['clauseId'], []).append(entry)
    triage_status = {t['findingId']: t['status'] for t in _load_jsonl(TRIAGE_PATH)}

    unclean_ids = set()
    for cid, flist in findings_by_clause.items():
        for i, f in enumerate(flist):
            fid = f'{cid}#{i}'
            if triage_status.get(fid) not in CLOSED_TRIAGE_STATUSES:
                unclean_ids.add(cid)
                break

    return checked_ids, unclean_ids


def citations_are_all_primary(clause):
    citations = clause.get('citations') or []
    return bool(citations) and all(
        ct.get('sourceClass') in PRIMARY_SOURCE_CLASSES for ct in citations
    )


def clause_level(clause, checked_ids, unclean_ids):
    """Returns 'cited' | 'verified' | 'adversarially_checked' for an
    authority clause, or None for a drafting clause (not applicable)."""
    if clause.get('kind') != 'authority':
        return None
    if clause.get('status') != 'verified':
        return 'cited'
    if not citations_are_all_primary(clause):
        return 'cited'
    if clause['id'] in checked_ids and clause['id'] not in unclean_ids:
        return 'adversarially_checked'
    return 'verified'
