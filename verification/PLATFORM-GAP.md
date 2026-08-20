# General Platform Features spec → prototype gap map

Source: `DRAFT_General_Platform_Features.docx` (uploaded 2026-08-20, latest-governs).
Scope rule applied: the prototype is one HTML file running from `file://` with no server,
no accounts, and no payments. Anything that needs a backend is recorded here, not faked
client-side. Everything marked **built** is covered by `templates/tools/platform.test.mjs`
(34 property checks) and a 35-assertion Playwright drive that must pass before shipping.

## Built in this pass

| Spec § | Feature | How it landed |
|---|---|---|
| 1 | Welcome screen "What brings you to DRAFT?" | First-visit overlay; 3 choices mapped to the 3 real packages; "I'll browse on my own" skip; dismissal remembered; never shown over existing documents; revisitable from the help panel |
| 2 | Recently edited cards, continue-where-you-left-off, all-documents list (sortable), favorites pinned, trash with 30-day recovery, search bar, empty state | New Home tab (default view), backed by a localStorage document store (`draft.documents.v1`). Expired trash is purged on load. UI discloses "saved in this browser only" |
| 4 | Duplicate, rename, status tags (Draft / In Progress / Review / Final / Archived) | Home table actions; rename is inline, trimmed, capped; duplicate gets "(copy)" |
| 5 | Auto-save every 10 s with "Saved" indicator; Ctrl+S / Cmd+S | Auto-save is change-guarded so "modified" timestamps stay truthful; badge shows the save time |
| 5 | Keyboard shortcuts via `?` | Shortcuts/help overlay; `?` ignored while typing; Esc closes |
| 6 | Progress indicator "8 of 15 fields completed" | Wizard progress bar; counts only currently visible (conditional) questions |
| 7 | Export HTML | Same discipline as Word export: chrome stripped from markup, disclaimer footer travels |
| 13 | Recovery after crash/close | Auto-saved documents reload from the store on next visit |
| 16 | Empty states & microcopy | Home empty state, home-search no-results, trash copy. Clause-search no-results copy already existed in a more honest form than the spec's and was kept |

## Already existed before this spec

- §3 template cards with complexity badge, estimated time, field counts (`template-meta.json` work)
- §5 find (browser Ctrl+F), print preview (print stylesheet)
- §6 field types, smart defaults, conditional fields, required-field gating, field help
- §7 export PDF (print-to-PDF), export Word, print stylesheet with page-break handling
- §7/§16 disclaimer footer on every export (see conflicts below)

## Built in the second pass (Canva-shape: user picks, user assembles)

| Spec § | Feature | How it landed |
|---|---|---|
| 3 | Template gallery: category grid, search, preview-before-select, cards with clause counts and estimated time | New Templates tab, generated from the corpus. Preview renders a completed sample (demo answers) with no editing chrome. "Use this template" starts a fresh document and generate opens *that* template — a gallery pick force-includes the document even where the package rule would have excluded it, because the user picked it |
| — | Editable canvas | Every clause on the page: ✎ edit (textarea seeded with the resolved text; edited clauses are labeled "edited by you — no longer updates from answers", restorable to template text), ✕ remove (goes to a visible "Removed by you" tray, restorable; removal happens in assembly so numbering, the withheld banner, and cross-references stay consistent), ▲▼ move within its own section, "+ Add your own paragraph" (labeled "written by you", exports under ADDITIONAL TERMS) |
| — | Product-shaped UI | Gallery + Fill in + Editor + Clause options are the visible product; Consistency & QA and Engine Internals sit behind an "Advanced" toggle; the KPI strip shows only on engineering views. Welcome choices land on the gallery filtered to the situation |
| — | Immediate save on assembly actions | Every edit/remove/move/add saves to the store at once, not on the next 10 s tick — found by the Playwright drive as a real loss path |
| — | Consistency checker knows whose fault a broken reference is | A reference broken because the user removed the target section is blamed on the removal, with the restore path named — not reported as an engine defect |

## Client-side possible, not built (candidates for a later pass)

- §4 document info panel (word/page count), export history log, bulk actions
- §5 named version history, zoom, fullscreen, dark mode (the page is dark; a light theme
  for the editor canvas would be the real feature), reading time
- §6 bulk fill ("same address as Member 1"), profile-based auto-fill (needs a profile store —
  straightforward next step on top of the document store)
- §15 local usage stats (documents created, by template)
- §4 duplicate detection — fuzzy similarity; skipped as low-value guesswork
- Gallery sort options and favorites-on-templates (§3) — worth it as the template count grows

## Needs a backend, an account system, or a payments provider — out of prototype scope

- §1 Google signup · §7 email/share links/ZIP · §8 profile sync, billing, 2FA, sessions
- §9 all of billing & subscriptions · §10 all notifications · §11 chat support, status page
- §12 all team/workspace features · §14 all security features · §13 uptime/load targets
- §17 landing page, blog, waitlist

## Conflicts with standing decisions — resolved against the spec

1. **§7 "Export settings: include/exclude watermark."** The disclaimer footer is the load-bearing
   piece of the liability posture and is not removable. No toggle was built and none should be.
   (The Free-tier watermark concept has no meaning here anyway — there are no tiers.)
2. **§17 "Trusted by 10,000+ founders" and testimonials with photos, names, titles.** There are
   no users and no testimonials. Fabricating social proof is the same defect as fabricated
   benchmarks and signoffs; `platform.test.mjs` now fails the build if such copy appears.
3. **§15 "Time saved" estimates and §15 streak/milestone flattery.** The spec's own numbers are
   invented; skipped until there is measured data to show.
4. **§16 suggested search hints "contract"/"lease".** The existing clause-search no-results copy
   explains what the search actually does (matches clause wording, writes nothing new) and was
   kept over the spec's wording.
