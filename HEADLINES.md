# Home page headline options — v2 Phase 1, Task D1.3

Three options for the owner to pick from. Each checked by hand against
`lint/advisory_phrases.json`'s blocklist (no match in any of the three)
and against the three constraints v2 states explicitly: no advice, no
guaranteed outcomes, no "AI-powered" framing. None of these three
claims a legal outcome, tells the reader what they personally should
do, or frames the product as an AI system rather than a sourced
document assembler.

## Option 1 — "Every clause, sourced. Every source, checkable."

Leads with the mechanism itself, which is the actual differentiator
(per v2 Section 0: "the proof is the pitch"). Pairs naturally with the
interactive demo widget sitting right below it — the headline makes a
claim, the demo lets a visitor confirm it themselves in the next
scroll, with no sign-up.

## Option 2 — "California legal documents you can verify, not just trust."

Names the contrast directly (verify vs. trust) rather than implying
it. Works well above the verify-page promise sentence, since "verify"
in the headline and "verify page" in the promise sentence reinforce
each other without repeating words awkwardly.

## Option 3 — "See the law behind every clause, before you sign anything."

The most concrete and action-oriented of the three without crossing
into advice — "before you sign anything" describes a moment in the
reader's own process, not an instruction ("you should see this before
signing" would be advice; "see this before you sign" describing what
the product shows is not). Slightly longer, reads well as a subhead
if a shorter headline is wanted above it.

## What was deliberately avoided

- Nothing promises a document is "valid," "enforceable," "guaranteed,"
  or "correct for your situation" — any of those would be an outcome
  claim this product is built specifically not to make.
- Nothing says "AI-powered," "AI-generated," or similar — the product
  is a sourced-document assembler with a verification pipeline, not
  pitched as an AI feature.
- Nothing uses "you should," "you must," "we recommend," or any other
  phrase from `lint/advisory_phrases.json` — each option was checked
  against that exact list, not just read for a similar feel.

**Owner decision needed:** pick one (or ask for different options).
Nothing above has been placed on the live or built `index.html` yet.
