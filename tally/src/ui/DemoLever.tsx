import { useState } from 'react';
import { etDate, isMarketDay, nextMarketDay } from '../domain/time';
import { useStore } from '../store';

/** Demo lever: move the simulated clock through the daily ritual. */
export function DemoLever() {
  const { now, offsetMs, actions } = useStore();
  const [open, setOpen] = useState(false);
  const today = etDate(now);
  const day = isMarketDay(today) ? today : nextMarketDay(today);
  const btn = 'num rounded-md border border-line bg-panel2 px-2.5 py-2 text-xs text-fg hover:border-teal/60';
  return (
    <div className="mt-6 rounded-xl border border-dashed border-line p-3">
      <button className="meta flex w-full items-center justify-between" onClick={() => setOpen(!open)}>
        <span>Demo lever {offsetMs !== 0 && <span className="text-acid">· simulated clock</span>}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className={btn} onClick={() => actions.jumpTo(day, 15, 44, 50)}>{day} 3:44:50</button>
          <button className={btn} onClick={() => actions.jumpTo(day, 15, 52)}>Mid-window 3:52</button>
          <button className={btn} onClick={() => actions.jumpTo(day, 15, 59, 50)}>Last 10s 3:59:50</button>
          <button className={btn} onClick={() => actions.jumpTo(day, 16, 0, 2)}>Close 4:00 → resolve</button>
          <button className={btn} onClick={() => actions.jumpTo(nextMarketDay(day), 15, 44, 50)}>Next day 3:44:50</button>
          <button className={btn} onClick={() => actions.realTime()}>Real time</button>
          <a className={`${btn} text-center`} href="#/admin">Admin console</a>
          <button className={`${btn} text-loss`} onClick={() => confirm('Reset all demo data?') && actions.reset()}>Reset demo</button>
        </div>
      )}
    </div>
  );
}
