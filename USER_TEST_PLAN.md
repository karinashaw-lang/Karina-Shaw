# User test plan — CA Wedge Plan Step 23

A concrete script for the project owner to actually run with 3-5 real
people — not a template to fill in later. Centered on the wedge
cluster (California single-member LLC formation), since that's what
Step 19's home page and Step 22's SEO staging are both built around,
and it's the first thing worth knowing whether real people can
actually get through before spending more effort polishing anything
downstream of it.

## Who to recruit

3-5 people who are **not** this project's own builder and ideally not
familiar with it at all. At least one person who has never formed an
LLC before (the actual target user), and, if possible, one who has
(to catch anything that reads wrong to someone who already knows the
real process). Recruiting a lawyer or paralegal isn't necessary for
this round — Step 20's attorney review covers legal-accuracy
questions separately; this round is about whether the *product*
works for a real, non-expert user.

## Setup

Run this against a real deployed instance if one exists, or
`python3 -m http.server` against this repo's root locally (`index.html`
loads directly — no build step). Sit with each person if possible
(watch where they hesitate, misclick, or give up); a remote screen-share
works too. Don't help unless they're fully stuck — where they get
stuck *is* the data.

## Tasks (give these one at a time, in order; don't explain the product first)

1. **"You're starting a single-member LLC in California. Use this
   site to get the documents you need."** No further instructions.
   Watch: do they find the wedge callout at the top of the picker
   screen on their own, or do they scroll past it into the general
   document list? Do they understand what "wedge cluster" documents
   are for without that term ever being used on the page?
2. **"Fill out the Articles of Organization."** Watch: do they
   understand every field being asked (the `whyWeAsk` text added in
   Step 22 specifically exists to answer "why do you need this" —
   does it actually land, or do they skip past it)? Do they notice
   the tier/verification badges at all, and if asked, can they say in
   their own words what a badge means?
3. **"Now find out what you need to do after filing this."** Watch:
   do they find the "What happens after this document" section
   (Steps 12/15)? Do they understand the Statement of Information
   deadline and the $800 annual fee, or does either read as confusing
   or alarming rather than informative?
4. **"You got a contract from someone else — see what Groundtruth
   says about it."** Give them a short, real contract excerpt (a lease
   clause or an NDA paragraph works) to paste into "Read a contract."
   Watch: do they understand the "Resembles" / "May resemble" / "Not
   recognized" distinction? Does anyone read this feature as the
   product reviewing or approving their contract, rather than
   describing textual resemblance? (If so, that's a real finding —
   the whole point of that feature's wording is to avoid exactly this
   misreading.)
5. **"Would a subscription make sense for you here? Why or why not?"**
   Watch/ask: do they understand what's free versus what a
   subscription unlocks, without being told? Does the "See subscription
   options" button in the wedge callout make sense as a next step, or
   does it feel like a dead end (no price is shown yet — see
   `OWNER_TODO.md` item 8 — note whether that absence itself confuses
   or concerns anyone)?
6. **"Would you trust this enough to actually use it for your own
   LLC? Why or why not?"** This is the real question everything above
   is building toward. Let them answer in their own words before
   showing them `trust.html` or `methodology.html` — then ask again
   after they've seen those pages, and note whether seeing them
   changes the answer.

## What to watch for, across every task

- **Silent confusion** — someone who doesn't ask a question but also
  visibly doesn't understand something. Ask them to think out loud if
  they go quiet for more than a few seconds.
- **Any moment someone treats this as giving legal advice** — "so it's
  telling me to do X" rather than "it's telling me what the law says."
  This project's entire premise is "inform, never advise" (Global Rule
  1); a user reading it as advice anyway is a real finding, not a
  misunderstanding to correct in the room.
- **Whether the wedge callout actually gets noticed and used**, versus
  the general document picker below it — this is the literal question
  Step 19 exists to answer, and now that Step 23 wires up
  `wedge_link_clicked` analytics, it's measurable at scale too, not
  just in this small session.
- **Where they'd expect a price and don't find one.**

## After the session

For each person, write down (don't wait until all sessions are done —
capture it while it's fresh):
- Which task, if any, they couldn't complete without help.
- Any moment of real confusion, quoted close to verbatim if possible.
- Their answer to the trust question, before and after seeing
  `trust.html`/`methodology.html`.
- Anything they said unprompted that wasn't asked for — often the
  most useful finding in a session like this.

## What this is not

Not a substitute for Step 20's attorney review (legal accuracy) or a
formal, statistically powered usability study. 3-5 people is enough to
catch the obvious problems, not enough to catch rare ones — treat a
finding that shows up in 1 of 5 sessions as worth investigating, not
as settled either way.

## Instrumentation this step added, to see this at scale later

Two new analytics event types (`supabase/migrations/20261116000000_analytics_wedge_referral_events.sql`),
wired into the exact elements Task 1 and Task 5 above ask about:
- `wedge_link_clicked` — fires when someone clicks a document inside
  the wedge callout, with which document. Answers "does the wedge
  callout actually get used" with real numbers, not just this small
  session's observations.
- `referral_link_clicked` — fires when someone clicks a registered-
  agent or attorney-review referral link (Step 16), with which slot.
  Only becomes meaningful once `OWNER_TODO.md` item 6 (real referral
  partners) is set up.

Both follow the existing analytics system's own rules exactly (Phase
8.1): no field values recorded, on by default, opt-out any time from
the Account screen, fires only when cloud accounts are configured at
all. See `tools/analytics_report.js` for how the existing funnel
events (`opened`/`step_reached`/`completed`/`exported`/`search`) are
already summarized — these two new event types slot into the same
report once there's real traffic to report on.
