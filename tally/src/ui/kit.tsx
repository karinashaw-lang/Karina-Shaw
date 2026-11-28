import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-xl border border-line bg-panel p-4 ${className}`}>{children}</section>;
}

/** Bracket metadata: [CONF 80%] */
export function Br({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`meta whitespace-nowrap ${className}`}>[{children}]</span>;
}

type Tone = 'acid' | 'teal' | 'loss' | 'ghost';
const tones: Record<Tone, string> = {
  acid: 'bg-acid text-ink',
  teal: 'bg-teal text-ink',
  loss: 'bg-loss text-ink',
  ghost: 'bg-panel2 text-fg border border-line',
};

export function Button({ tone = 'acid', className = '', ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: Tone }) {
  return (
    <button
      {...rest}
      className={`btn rounded-lg px-4 py-3 font-bold tracking-wide uppercase ${tones[tone]} ${className}`}
    />
  );
}

export function Pts({ n, className = '' }: { n: number; className?: string }) {
  const color = n > 0 ? 'text-acid' : n < 0 ? 'text-loss' : 'text-mute';
  return <span className={`num ${color} ${className}`}>{n > 0 ? '+' : n < 0 ? '−' : '±'}{Math.abs(n)}</span>;
}

export function SideTag({ side, conf }: { side: 'yes' | 'no'; conf?: number }) {
  return (
    <span className="num inline-flex items-center gap-1.5 text-sm">
      <b className={side === 'yes' ? 'text-teal' : 'text-loss'}>{side.toUpperCase()}</b>
      {conf !== undefined && <span className="text-mute">{conf}%</span>}
    </span>
  );
}

export function fmtDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' });
}

export function fmtTimeET(iso: string) {
  return new Date(iso).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', second: '2-digit' });
}
