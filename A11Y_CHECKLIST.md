# Accessibility checklist (manual)

`tests/accessibility/axe_check.js` runs automatically in CI (axe-core
against every screen plus 50 sampled documents, light and dark theme)
and catches a real but bounded slice of accessibility problems —
roughly the ones with a programmatically detectable DOM/AX-tree
signature. It does not, and cannot, catch everything: whether tab
order actually makes sense to a person using only a keyboard, whether
a screen reader announces a state change at the right moment, whether
focus actually lands somewhere sensible after an action. Those need a
person to go through the app the way a person actually would. This
checklist is that pass — run it before a release that touches
`index.html`, `sign.html`, `styles.css`, or any screen's JS, not on
every commit.

Known, deliberately deferred findings from the automated pass, to keep
in mind while doing this one (not re-litigated here — see
DECISIONS.md, Phase 9.1):
- `heading-order` (moderate): the output screen's "Signature"/"What
  happens after this document"/"Related documents" headings are
  `<h3>` directly under an `<h1>`, skipping `<h2>`. Left alone because
  fixing it means touching tag-selector CSS (`.signature-section h3`
  etc.) across several sections with real visual-regression risk this
  pass can't verify by screenshot — worth fixing with real before/after
  visual review, not as a drive-by HTML tweak.

## Keyboard-only pass

Unplug the mouse, or just don't touch it. For each screen below:

- [ ] **Picker** — Tab reaches the search box, category chips, every
      visible document card, and "Show more" in a sensible left-to-right,
      top-to-bottom order. Enter/Space activates a focused chip or card.
      Focus is visible (an outline, not just a color change) on every
      stop.
- [ ] **Wizard** — Tab reaches every field in the current step, in the
      order they're laid out. Enter in a text field doesn't accidentally
      submit the step. Next/Back/Submit are reachable and activate with
      Enter/Space. After clicking Next, focus lands on the new step's
      heading (not left behind on the old Next button, not reset to the
      top of the page) — this is the one case the app explicitly tries
      to get right (`renderWizardStep()`'s `headingEl.focus()`); confirm
      it's actually landing somewhere a screen reader user would notice.
- [ ] **Review screen** — Every "Edit" link is reachable and jumps back
      to, and focuses, the right field.
- [ ] **Output** — Tab reaches every clause's badge (and its expandable
      citation detail), the signature pad/typed-name input, the
      feedback control, the export buttons, and "Start over" in order.
      A clause's body text is `contenteditable` — confirm Tab doesn't
      get stuck inside it, and that it's reachable at all by keyboard
      (not mouse-click-only).
- [ ] **Account / Library / Inbox / Relationships / Intake / Read a
      contract** — same baseline: every interactive element reachable,
      visibly focused, activatable without a mouse.
- [ ] **Sign page** (`sign.html?token=...`, from a real share link) —
      the signature pad is mouse/touch-drawn by nature; confirm the
      typed-name alternative is fully keyboard-reachable and that
      "Sign" is reachable and activatable without ever touching the
      canvas.

## Screen-reader pass

Run with a real screen reader (VoiceOver on macOS, NVDA on Windows —
whichever is available), not just axe's static analysis of ARIA
attributes.

- [ ] Each screen's `<h1>` is announced when the screen becomes active
      (the app calls `.focus()` on it — confirm that actually produces
      an announcement, not just a silent focus move).
- [ ] A clause's "Verified"/"Not yet verified" badge is announced in a
      way that conveys its meaning, not just as a generic expandable
      "button" or "details" with no label.
- [ ] A validation error on a wizard field is announced at the point it
      appears, not only visible to a sighted user.
- [ ] The draft-resume banner (`aria-live="polite"`) is actually
      announced when it appears, without needing to be focused first.
- [ ] The signature pad is announced as something a screen-reader user
      can't meaningfully use for drawing, with the typed-name
      alternative clearly presented as the real option for them — not
      silently skipped as if it weren't there.
- [ ] On the output screen, a long document's clause list doesn't read
      as one undifferentiated wall of text — clause titles read as
      actual headings a screen reader's "jump by heading" navigation
      can use.

## After this pass

Record what you found — even "nothing new" — as a dated note at the
bottom of this file, and file anything real as its own fix (not folded
silently into an unrelated commit), the same way every other finding
in this project gets tracked in DECISIONS.md.

### Pass log

(none yet — first real keyboard/screen-reader pass is still owner work,
not something this session could perform without a real screen reader
or a person's hands on a real keyboard.)
