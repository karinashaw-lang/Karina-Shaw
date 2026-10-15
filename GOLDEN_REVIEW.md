# Golden fixture review

Phase 1.4's required spot-check: 25 random fixtures (seed 42, so
reproducible — `random.sample(manifest, 25)` with `random.seed(42)`),
reviewed by hand for nonsensical inputs. Done twice: once against the
first bulk generation (placeholder text used verbatim), and once more
after fixing what the first pass found — this file covers both passes,
since the first pass's findings are what justified the fix.

## What the first pass found

Every field in the corpus has a non-empty `placeholder` (3,975/3,975,
confirmed by script, not sampling), so the first version of
`tests/golden/golden.js` just used each field's placeholder verbatim as
its fixture input. That's realistic for the large majority of fields —
`"Jordan Lee"`, `"Acme, Inc."`, `"123 Main St, San Francisco, CA 94103"` —
but wrong for two patterns the 25-sample review actually caught:

1. **UI-hint-style placeholders.** Some fields use `"e.g., Jane Doe"`
   rather than a drop-in example — good copy for the real wizard input
   (showing a format hint before someone types), bad as a literal fixture
   value, since it renders a document that literally says "Prepared for
   e.g., Jane Doe." A full scan (not just the 25-sample) found **73
   documents** with at least one field like this: `captive_audience_
   meetings_info_sheet` and `elder_abuse_inheritance_disqualification_
   info_sheet` were the two in the original 25-document sample.

2. **Instruction-phrased placeholders.** A smaller set — **23 fields**
   across the corpus — read as an instruction rather than an example:
   `"Describe what happened"`, `"Describe the adverse action"`,
   `"Describe the donation"`. `sperm_egg_donor_parentage_info_sheet`'s
   `donationType` field (`"Describe the donation"`) was the one caught in
   the original 25-document sample.

3. **One genuine data bug**, found while investigating the pattern above
   rather than in the 25-sample itself:
   `utma_custodial_account_info_sheet`'s `propertyDescription` field had
   placeholder `"0,000 cash"` — almost certainly a mangled `"$10,000
   cash"` that lost its leading `$1` at some point. This wasn't a fixture
   problem, it was a real bug in `data/documents.json` itself, meaning
   the actual wizard shows this broken placeholder to a real user today.
   Fixed directly (`$10,000 cash`), confirmed `validate_corpus.py` still
   passes.

## What was fixed, and how

- `data/documents.json`: the one real data bug above, fixed as a
  single-line text edit (not a JSON round-trip — see the note below).
- `tests/golden/golden.js`: `sampleValueFor()` now strips a leading
  `"e.g., "` / `"e.g. "` (case-insensitive) from any placeholder before
  using it, which fixes all 73 documents in category 1 without hardcoding
  a single one of them — the fix is general, not a list of special cases.
  For the 23 instruction-phrased fields in category 2, which have no
  example text to recover by stripping anything, `golden.js` now carries
  a small override map keyed by field id (`incidentDescription`,
  `allegedAdverseAction`, `donationType`, etc.) — the same field id means
  the same thing in every document that uses it, the same convention the
  app itself already relies on elsewhere (`app.js`'s Inbox matches any
  `*Date`-suffixed field id, Relationships any `*Name`-suffixed one,
  regardless of which document it's in).
- All 740 fixtures were regenerated from scratch after these fixes (not
  incrementally — the old fixtures' `inputs` were already baked in, so
  reusing them would have kept the very text just fixed).
- A full scan of all 740 regenerated fixtures' `inputs` (not just the 25
  sampled ones) confirmed zero remaining `"e.g."`-prefixed values. One
  instruction-style field missed on the first fix pass
  (`allegedIntolerableConditions`, on `constructive_discharge_info_sheet`
  — a variant of the "describe the adverse action" pattern this review
  hadn't separately named yet) was caught by that full scan, added to the
  override map, and that one fixture regenerated again.
- `"State University"` (2 fields: `educationalInstitution` on
  `unpaid_internship_compliance_info_sheet` and
  `college_athlete_nil_compensation_info_sheet`) was flagged by an early,
  broader automated pass but judged fine on inspection — it reads as a
  plausible, if generic, real institution name, the same kind of
  deliberately bland example the corpus already uses throughout
  (`"Acme, Inc."`, `"Beta Corp."`). Left as-is.

## A note on how the data bug was fixed

The first attempt at the `documents.json` fix used
`json.load()`/`json.dump()` in Python, which silently reformatted the
*entire* 1.6 MB file (the dump call didn't preserve the original file's
indentation), turning a one-field fix into a 39,367-line diff. Caught via
`git diff --stat` before committing, reverted with `git checkout --`, and
redone as a direct text edit of just the one line instead — `git diff
--stat` afterward showed exactly `1 insertion(+), 1 deletion(-)`. Noted
here because it's a sharp edge worth remembering for any future fix to
`data/documents.json` or `data/clauses.json`: never round-trip either
file through a JSON parser/serializer for a small fix, only ever edit the
specific line(s).

## Final state

- 740/740 documents have a fixture (`tests/golden/golden-manifest.json`).
- `node tests/golden/golden.js` passes clean: 740/740 match.
- Acceptance criterion verified empirically, not just asserted: the
  `at_will` clause (shared by exactly 3 documents — `handbook`, `offer`,
  `written_warning`) was temporarily mutated, `golden.js` was run, and
  **exactly those 3 documents failed, the other 737 did not** — then the
  mutation was reverted and a clean run confirmed 740/740 again.
