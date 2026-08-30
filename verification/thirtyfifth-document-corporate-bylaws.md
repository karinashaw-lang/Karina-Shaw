# Thirty-fifth document — Corporate Bylaws

## Why this one

Third Business Formation document, and the first for a corporation rather than an
LLC. Bylaws are, like an operating agreement, an internal governance document — not
a state filing — so the same honest-sourcing approach that worked for both LLC
agreements applies directly. Unlike the LLC documents, there's no federal anchor
available here (corporate internal governance is purely a matter of state law), so
every authority clause in this document is state-sourced and explicitly disclosed
as such.

## Research

Fetched three California General Corporation Law provisions fresh, all from the
same legislature site already proven reliable across four earlier documents:

- **Cal. Corp. Code § 602(a)** — shareholder meeting quorum (majority of shares
  entitled to vote, with a statutory floor of one-third) and the voting threshold
  once a quorum is present.
- **Cal. Corp. Code § 307(a)(7)–(8)** — board meeting quorum (majority of the
  authorized number of directors, with a floor of one-third or two, whichever is
  larger) and the act-of-the-board rule.
- **Cal. Corp. Code § 317(b)–(c)** — the corporation's permissive power to
  indemnify directors, officers, and other agents, and a real, easy-to-miss
  limitation: indemnification for a derivative suit (a proceeding brought by or in
  the right of the corporation itself) is barred for amounts the person is found
  liable to the corporation for, unless a court specifically determines the person
  is fairly and reasonably entitled to it — a materially different rule from the
  general good-faith standard that governs third-party proceedings.

All six candidate quotes verified against a second, independent fetch before
writing any clause text.

## The eight clauses

- `bylaws_purpose` (drafting) — framing statement identifying the corporation and
  state of incorporation.
- `bylaws_shareholder_meetings` (authority) — quorum and voting-threshold defaults,
  citing §602(a) twice. Gap discloses this as one state's default, with a real
  statutory floor bylaws can't set below.
- `bylaws_board` (drafting) — director count and election terms.
- `bylaws_board_meetings` (authority) — board quorum and act-of-board defaults,
  citing §307(a)(7)–(8). Gap discloses the statutory floors on quorum and the bar
  on requiring less than a majority to act.
- `bylaws_officers` (drafting) — president/secretary/treasurer roles.
- `bylaws_indemnification` (authority) — the permissive indemnification power and
  its derivative-suit limitation, citing §317(b) and §317(c)(1). Gap makes
  explicit that the statute *authorizes* rather than *requires* indemnification,
  and states the derivative-suit carve-out plainly rather than only citing the
  general rule and letting a reader assume it covers every case.
- `bylaws_amendment` (drafting) — board- or shareholder-vote amendment mechanism.
- `bylaws_ack` (drafting) — director signature block.

## A naming fix caught on screenshot review

Initially titled `bylaws_purpose` "Adoption" — the same title as the actual closing
signature clause (`bylaws_ack`). Caught this reviewing the rendered screenshot: two
sections both headed "Adoption" reads as a mistake, not a deliberate structure.
Retitled the opening clause "Purpose," which accurately describes what it does
(states what the document is and which entity it governs) rather than duplicating
the closing clause's title.

## Verification

- All six citations checked against a second, independent fetch before writing —
  exact match.
- Every `gap`/`title` field grepped for `{{` — clean.
- Headless Playwright walkthrough: badge count matches (3), zero leftover
  placeholders, zero console errors. Re-ran after the title fix to confirm nothing
  broke.
- Full 35-document regression run clean.

## Net changes

- `data/clauses.json`: +8 clauses, corpus now 136 clauses.
- `data/documents.json`: +1 document (`corporate_bylaws`), corpus now 35 documents.
