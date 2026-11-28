# Tally — MVP

One call a day. Write down what people say will happen. Check if it did.

Built from *Tally MVP Build Spec v2.0*. React + TypeScript + Vite + Tailwind.

```bash
npm install
npm run dev     # http://localhost:5173
npm test        # domain rules (vitest)
npm run build
```

Use the **Demo lever** at the bottom of TODAY to move the simulated clock through
the ritual (3:44:50 → mid-window → close/resolve → next day). The admin console
is at `#/admin`; the invite landing is at `#/join/TAPE-7Q2K`.

## Layout

| Path | What |
|---|---|
| `src/domain/types.ts` | Data model (spec §5) |
| `src/domain/ledger.ts` | The ledger: lock rules, window enforcement, question freeze, auto/manual resolution, corrections, appeals, audit log. **No edit or delete operations exist.** |
| `src/domain/resolution.ts` | Resolution engine: evaluates a `sourceSpec` against the market feed, with evidence |
| `src/domain/market.ts` | `MarketFeed` interface + deterministic `MockFeed` |
| `src/domain/stats.ts` | Scoring (±confidence), streaks (days played), 35-day grid, ladder — derived from the ledger, never stored |
| `src/domain/view.ts` | Reveal lock projection: picks hidden until you lock, readings hidden until the window closes |
| `src/domain/metrics.ts` | The five metrics (spec §9) |
| `src/domain/sim.ts`, `seed.ts`, `bank.ts` | Demo crew, 30 days of history, question rotation |
| `src/screens/*` | TODAY, RECEIPTS, YOU, Admin, Join |
| `src/ui/*` | Verdict overlay, share-card renderer (1080×1350 PNG), nav, toasts, demo lever |

## Not yet built (needs the backend)

- Hono/tRPC + Postgres; the `domain/` modules are framework-free so the server can run them as-is. `dayView` must run server-side so hidden picks never reach a client that hasn't locked.
- Phone verification (accounts-lite), web-push at 3:45, real multi-user crews.
- A real EOD feed behind `MarketFeed`. NYSE holidays and early closes are skipped by hand in the admin console for now.
- Everything in the spec's OUT list stays out.
