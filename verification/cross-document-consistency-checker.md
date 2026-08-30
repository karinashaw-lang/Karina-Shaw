# Feature — Cross-document consistency checker ("My Documents")

## Why this one

LegalZoom and similar document mills generate each form from its own isolated
template — there's no shared record of what you typed into a previous document, so
nothing can compare them. Groundtruth's architecture is different by construction:
every document is assembled from a shared clause pool and a shared set of typed
field values (`companyName`, `employeeName`, `restrictionPeriod`, etc.), the same
field id reused across documents. That structure makes something genuinely new
possible: checking whether a value the user typed into one document actually matches
what they typed into another — a company name typo, a restriction period that
drifted between a Non-Compete and an Employee Non-Solicitation Agreement, an
inconsistent reporting channel between a Whistleblower Policy and the Handbook.

This is pure information, not advice: the checker only reports that two saved
documents disagree on a field with the same name. It never says which value is
correct, and it says plainly that a difference can be intentional — the same field id
can legitimately carry a different real value in a different document. Staying on
that side of the informing/advising line was the main design constraint, same as
every clause in the corpus.

## Design

- **Storage**: a new `groundtruth-library` localStorage key, separate from the
  existing single-slot `groundtruth-draft` key used for in-progress wizard state.
  Every *completed* document (on submit) is appended to the library automatically —
  no separate save action, consistent with how draft-saving already works silently
  in the background. Each entry stores `{id, documentId, title, answers,
  generatedAt}`. Browser-local only; nothing is sent anywhere, and the library
  screen's lede says so explicitly.
- **The check**: `computeConsistency()` groups every saved document's field values
  by field id, then flags any field id where two or more saved documents hold a
  different non-empty (trimmed) value. This is a generic, structural mechanism — it
  needs no hand-authored rule per document pair, and it scales automatically as new
  documents and fields are added to the corpus without further code changes.
- **UI**: a new "My Documents" screen, reachable from a topbar button (with a live
  count badge). Shows either a green "no field carries two different values"
  confirmation, or one flagged block per mismatched field id — the field's label,
  every document and the value it holds, and a fixed note that a difference isn't
  necessarily wrong. Below that, a list of saved documents with a per-item Remove
  button and a Clear all button.

## Files touched

- `index.html`: added the "My Documents" topbar button (with count badge) and the
  new `#screen-library` section.
- `styles.css`: `.topbar-link-btn` (button styled to match the existing `.topbar-link`
  anchor style), `.consistency-ok`, `.consistency-heading`, `.consistency-block`,
  `.consistency-field`, `.consistency-note`, `.library-row` and related rules.
- `app.js`: `loadLibrary`/`saveLibraryEntries`/`addToLibrary`/`removeFromLibrary`/
  `clearLibrary`/`updateLibraryCount`, `computeConsistency`, `renderLibrary`, and the
  event wiring (`library-link`, `library-back`, `library-clear`, plus a call to
  `addToLibrary` in the wizard's submit handler and `updateLibraryCount` in `init`).

## Verification

- Headless Playwright run: generated three documents (Non-Compete Agreement with
  `restrictionPeriod` "12 months", Employee Non-Solicitation Agreement with
  `restrictionPeriod` "24 months", Whistleblower Policy with `companyName` "Acme Inc"
  vs. the other two documents' "Acme, Inc.") and confirmed the library screen
  correctly flagged exactly the two fields (`restrictionPeriod`, `companyName`) that
  actually differ, listed every saved document with its value, and left the
  matching `employeeName` field unflagged. Zero console errors.
- Confirmed the "Remove" button and "Clear all" button both work and re-render
  correctly (rows: 3 → 2 → 0, with the empty-state message shown after clearing).
- Separately generated two documents with identical values in every shared field and
  confirmed the green "no field carries two different values" state renders instead
  of the mismatch panel.
- Ran the standing full 32-document regression script afterward to confirm the new
  topbar button and screen didn't break picker rendering, wizard rendering, or
  output assembly for any existing document — zero console errors, zero leftover
  placeholders, all 32 documents still assemble correctly.

## Scope notes

- The checker compares by field id only (a structural, not semantic, comparison).
  It doesn't yet know that some same-id mismatches are more actionable than others
  (a company name mismatch is very likely a typo; a restriction period mismatch
  might be a deliberate business choice) — the UI's neutral "might be intentional"
  framing is deliberately even-handed across all mismatch types rather than trying
  to rank them, to avoid quietly implying a judgment the tool can't actually make.
- No cross-field semantic rules yet (e.g., checking a termination date against a
  COBRA election deadline computed from it) — left for a later pass if useful,
  since the generic same-field-id mechanism already covers the highest-value,
  lowest-risk case with no hand-authored rules to maintain.
