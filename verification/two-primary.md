# The two-primary-source standard

Nothing is verified unless at least two primary sources say so. This is what that costs,
measured rather than estimated.

## What counts

| Tier | Primary? | What it is |
|---|---|---|
| `publisher` | **yes** | the sovereign's own text: the legislature, the code office, the register, the court |
| `agency` | **yes** | the agency that runs the programme, on its own site. Primary for its forms, procedures and deadlines; not for what a statute means |
| `mirror` | no | a copy: correct more often than not, and still a copy, with its own transcription errors and its own update schedule |
| `secondary` | no | a law firm, an accounting firm, a trade body. Corroboration; never verification |

Two primary sources means two **distinct** primary hosts. Two pages on one publisher are one
source: a publisher that is wrong is wrong on both pages. A statutory claim additionally
needs at least one publisher among the two, because an agency describing a statute is the
agency's reading of it, and agencies are wrong about statutes with some regularity.

An unclassified host is secondary. A host nobody has vouched for is not primary by default —
that is how a standard quietly stops being one.

## Where the corpus stands

**0 of 28 findings meet the standard.**

| Tier | Sources used | Distinct hosts |
|---|---|---|
| `publisher` | 0 | 0 |
| `agency` | 23 | 9 |
| `mirror` | 18 | 5 |
| `secondary` | 50 | 31 |

The decisive line is the first one: **zero publisher-tier sources appear anywhere in
91 recorded sources.** Not few — none. Every finding in this repo rests on agency
guidance, faithful republishers, and expert readings.

### The hosts actually used

**Primary — administering agency** — edd.ca.gov (6), dir.ca.gov (4), p65warnings.ca.gov (2), oehha.ca.gov (2), sos.ca.gov (2), dos.ny.gov (2), calcivilrights.ca.gov (2), cdph.ca.gov (2), elections.cdn.sos.ca.gov (1)

**Faithful republisher** — codes.findlaw.com (6), courtlistener.com (6), law.justia.com (3), california.public.law (2), law.cornell.edu (1)

**Expert reading** — ogletree.com (5), shrm.org (4), jonesday.com (3), stimmel-law.com (3), eminutes.com (2), kristinareed.com (2), upcounsel.com (2), newyorkregisteredagent.com (2), hrwatchdog.calchamber.com (2), shouselaw.com (2), californiaworkplacelawblog.com (2), cooley.com (2), kpmg.com (1), accountably.com (1), vestingstrategy.com (1), legalclarity.org (1), ebglaw.com (1), gtlaw-laborandemployment.com (1), traliant.com (1), sheppard.com (1), recordinglaw.com (1), legalaidatwork.org (1), cdflaborlaw.com (1), californiapayroll.com (1), fisherphillips.com (1), myhrconcierge.com (1), mondaq.com (1), fbm.com (1), patentlawip.com (1), wsgr.com (1), ktslaw.com (1)

## Which findings could be wrong the way Winet was

Reading one primary text corrected a finding of mine. It said *Winet v. Price* held that a
mere recital of waiver is not controlling; the opinion holds close to the opposite. It
survived because four secondary sources agreed — and they agreed because they were all
paraphrasing the same paraphrase, quoting an older case's language under this case's name.

Distinct hosts cannot catch that. The shape of the claim can, because the two kinds fail
differently. A **factual** claim — a deadline, a threshold, a dollar figure — survives
retelling; ten sources repeating a number are weak evidence but not systematically wrong in
one direction. An **interpretive** claim — what a court held, whether something is voidable,
what the test is — does not survive retelling. Each compression drifts toward the memorable
proposition rather than the actual holding.

So an interpretive claim with no primary source is not weakly evidenced. It is
**unverifiable as recorded**: nothing in the file could tell a reader whether it drifted.

| Level | Findings |
|---|---|
| `partial` | 16 |
| `secondary-only` | 8 |
| `judicially-corroborated` | 2 |
| `unverifiable-as-recorded` | 2 |

**These carry the Winet shape:**

- `ipa_state_carveout` — asserts enforceability; asserts something is void or voidable; 3 secondary and 0 mirror source(s), no primary
- `msa_ca_release` — appeals to case law; 2 secondary and 1 mirror source(s), no primary

That list includes findings this repo has leaned on hardest — the "primarily resides and
works" defect in ea_ca_925 and msa_ca_925, and the §2870/§2872 miscitation in
ipa_state_carveout. They may well be right. The point is that **nothing recorded here could
show it**, and the one finding in this category that has since been checked against a
primary text turned out to be wrong.

## Why there are no publisher sources

Not an oversight. Measured this session, every publisher host is denied at the egress proxy:

```
000  leginfo.legislature.ca.gov      connect_rejected — gateway answered 403 to CONNECT
000  uscode.house.gov                connect_rejected
000  www.ecfr.gov                    connect_rejected
000  www.law.cornell.edu             connect_rejected
000  govt.westlaw.com                connect_rejected
000  casetext.com                    connect_rejected
000  edd.ca.gov                      connect_rejected
000  www.dir.ca.gov                  connect_rejected
000  www.sos.ca.gov                  connect_rejected
000  oag.ca.gov                      connect_rejected
```

The `github.com` control tunnels through the same proxy and answers. This is an
organization egress policy, not a fault in this repo, and the proxy documentation says to
report a policy denial rather than retry it.

**So the standard cannot be met here for any new claim.** Web search returns summaries and
secondary commentary; it does not open a publisher's text, and a summary of a statute is not
the statute. Everything recorded so far is therefore correctly classified as below the gate,
and the gate has been raised to `primary-verified` so that stays true structurally rather
than by intention.

## What does not change

The 27 defects already found remain findings. The standard governs what may be
called **verified** — it does not un-find a gap. A clause shown by three law firms and an
agency page to omit a statutory exemption is still a clause that omits it; what nobody may
say is that the clause has been *checked against the law*. Those are different claims and
the second one is the one being withheld.

## What it would take

33 distinct provisions are cited by the 28 clauses checked so far. Each needs two
primary sources, at least one a publisher.

| Provision | Clauses resting on it |
|---|---|
| Cal. Health & Safety Code §25249.6 | `cal_ca_prop65_ops`, `msa_ca_prop65` |
| NY LLC Law §206 | `cal_ny`, `charter_ny_publication` |
| Cal. Lab. Code §§1030–1034 | `can_lactation`, `hb_ca_lactation_break` |
| Cal. Lab. Code §925 | `ea_ca_925`, `msa_ca_925` |
| Cal. Civ. Code §1542 | `ea_ca_release`, `msa_ca_release` |
| Treas. Reg. §1.83-2(c) | `b83_instructions` |
| Cal. Corp. Code §§1502, 17702.09 | `cal_ca_soi` |
| Cal. Corp. Code §17702.09 | `cal_soi` |
| Cal. Corp. Code §1502 | `cal_soi` |
| Cal. Lab. Code §§1400–1408 | `can_calwarn` |
| Cal. Unemp. Ins. Code §1086 | `can_edd` |
| Cal. Gov. Code §12952 | `can_fair_chance` |
| 2 C.C.R. §11023 | `can_harassment_policy` |
| Cal. Gov. Code §12950.1 | `can_harassment_training` |
| California Civil Rights Department — Sexual harassment prevention training FAQ for employers | `can_harassment_training` |
| FindLaw — Cal. Gov. Code §12950.1 | `can_harassment_training` |
| Traliant — California sexual harassment training requirements | `can_harassment_training` |
| 8 C.C.R. §3395 | `can_heat` |
| Cal. Lab. Code §2810.5 | `can_wtpa` |
| Ogletree Deakins — California publishes new wage theft notice | `can_wtpa` |
| CalChamber HRWatchdog — Updated wage theft notice released | `can_wtpa` |
| California Workplace Law Blog — Labor Commissioner publishes updated wage theft notice | `can_wtpa` |
| Cal. Lab. Code §§201-203 | `emp_finalpay` |
| Cal. Lab. Code §§230, 14350–14353 | `hb_ca_jury_voting` |
| Cal. Lab. Code §§245–249 | `hb_ca_sick` |
| Legal Aid at Work — SB 616 increases paid sick leave from 3 to 5 days | `hb_ca_sick` |
| CDF Labor Law — New California paid sick leave requirements | `hb_ca_sick` |
| LegiScan — CA SB616 text | `hb_ca_sick` |
| Cal. Bus. & Prof. Code §18100 (SB 988) | `ic_ca_freelance` |
| Cal. Lab. Code §2870 | `ipa_state_carveout` |
| Cal. Civ. Code §1646.5 | `msa_ca_925` |
| Cal. Bus. & Prof. Code §§17601–17606 | `msa_ca_auto_renew` |
| Cal. Civ. Code §§2782, 2782.05 | `msa_ca_indemnity_construction` |

Two routes, unchanged and independent:

1. **Egress to the publisher hosts.** One allowlist entry for `leginfo.legislature.ca.gov`
   covers most of this list. `npm run egress` generates the request, ranked by how many
   citations depend on each host.
2. **Supplied texts.** `npm run ingest -- --file <text> --citation "..." --by "..." --from "..."`
   stores the bytes verbatim, hashes them, records who obtained them and from where, and
   refuses the file outright if it is an error page, a rendered web page, a truncated copy,
   or missing the section it claims to be.

`mayFetch` was tightened alongside this: only the **publisher** of a text may be ingested as
a source text. An agency site is primary for the agency's own forms and procedures and is
still not the sovereign's words.
