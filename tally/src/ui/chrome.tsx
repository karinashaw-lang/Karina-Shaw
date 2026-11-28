import { useStore } from '../store';

export function Toasts() {
  const { toasts } = useStore();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 mx-auto flex max-w-md flex-col items-center gap-2 px-4">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`rise num rounded-lg border px-3 py-2 text-sm shadow-lg ${
            t.tone === 'err' ? 'border-loss/50 bg-[#2a1216] text-loss' : t.tone === 'ok' ? 'border-acid/40 bg-[#1b200a] text-acid' : 'border-line bg-panel2 text-fg'
          }`}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

const TABS = [
  { to: '/', label: 'Today' },
  { to: '/receipts', label: 'Receipts' },
  { to: '/you', label: 'You' },
];

export function BottomNav({ route, go }: { route: string; go: (r: string) => void }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-3">
        {TABS.map((t) => {
          const active = route === t.to;
          return (
            <button
              key={t.to}
              onClick={() => go(t.to)}
              className={`py-3.5 text-xs font-bold tracking-[.18em] uppercase ${active ? 'text-acid' : 'text-mute'}`}
            >
              <span className={`mx-auto mb-1 block h-0.5 w-6 rounded ${active ? 'bg-acid' : 'bg-transparent'}`} />
              {t.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
