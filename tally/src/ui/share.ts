// Receipt cards: rendered to a 1080×1350 PNG built to travel to X / group chats.
import type { Receipt } from '../domain/types';

export interface CardStats { w: number; l: number; pts: number; streak: number; name: string; handle: string }

const C = { ink: '#0B0E11', teal: '#00FDCF', acid: '#DEFF03', loss: '#FF4D61', fg: '#E8EEF2', mute: '#7E8A96', line: '#232B33' };

function wrap(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxW: number, lh: number) {
  const words = text.split(' ');
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, y);
      y += lh;
      line = w;
    } else line = test;
  }
  ctx.fillText(line, x, y);
  return y;
}

export async function renderReceipt(r: Receipt, s: CardStats): Promise<Blob> {
  await document.fonts?.ready;
  const W = 1080, H = 1350;
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext('2d')!;
  const won = r.verdict === 'called';
  const accent = won ? C.acid : C.loss;
  ctx.fillStyle = C.ink;
  ctx.fillRect(0, 0, W, H);
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, accent);
  g.addColorStop(1, C.teal);
  ctx.strokeStyle = g;
  ctx.lineWidth = 18;
  ctx.strokeRect(9, 9, W - 18, H - 18);

  const mono = (px: number, wt = 500) => `${wt} ${px}px "Fira Code", monospace`;
  const disp = (px: number, wt = 700) => `${wt} ${px}px "Space Grotesk", sans-serif`;

  ctx.fillStyle = C.fg;
  ctx.font = disp(52);
  ctx.fillText('TALLY', 80, 130);
  ctx.fillStyle = C.mute;
  ctx.font = mono(30);
  ctx.textAlign = 'right';
  ctx.fillText(`[${r.date}]`, W - 80, 130);
  ctx.textAlign = 'left';

  ctx.fillStyle = C.fg;
  ctx.font = disp(64, 500);
  const qy = wrap(ctx, r.question, 80, 270, W - 160, 78);

  ctx.font = mono(34);
  ctx.fillStyle = C.mute;
  ctx.fillText('MY CALL', 80, qy + 110);
  ctx.fillStyle = r.side === 'yes' ? C.teal : C.loss;
  ctx.font = mono(64, 700);
  ctx.fillText(r.side.toUpperCase(), 80, qy + 185);
  ctx.fillStyle = C.fg;
  ctx.fillText(`[CONF ${r.conf}%]`, 80 + ctx.measureText(r.side.toUpperCase() + '  ').width, qy + 185);

  ctx.fillStyle = accent;
  ctx.font = disp(150);
  ctx.fillText(won ? 'CALLED IT' : 'I ATE IT', 74, qy + 380);
  ctx.font = mono(84, 700);
  ctx.fillText(`${r.delta > 0 ? '+' : '−'}${Math.abs(r.delta)} PTS`, 80, qy + 490);

  ctx.fillStyle = C.mute;
  ctx.font = mono(32);
  ctx.fillText(`REALITY SAID ${r.outcome.toUpperCase()}`, 80, qy + 560);

  ctx.strokeStyle = C.line;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(80, H - 250);
  ctx.lineTo(W - 80, H - 250);
  ctx.stroke();
  ctx.fillStyle = C.fg;
  ctx.font = mono(40, 700);
  ctx.fillText(`${s.w}–${s.l}`, 80, H - 175);
  ctx.fillText(`${s.pts >= 0 ? '+' : '−'}${Math.abs(s.pts)}`, 380, H - 175);
  ctx.fillText(`${s.streak}D`, 720, H - 175);
  ctx.fillStyle = C.mute;
  ctx.font = mono(24);
  ctx.fillText('RECORD', 80, H - 135);
  ctx.fillText('CAREER PTS', 380, H - 135);
  ctx.fillText('STREAK', 720, H - 135);
  ctx.fillStyle = C.teal;
  ctx.font = disp(34, 500);
  ctx.fillText(`@${s.handle} · Think you can beat me?`, 80, H - 70);

  return new Promise((res) => cv.toBlob((b) => res(b!), 'image/png'));
}

export function receiptText(r: Receipt, s: CardStats) {
  return `${r.verdict === 'called' ? 'CALLED IT' : 'I ATE IT'} on Tally — "${r.question}" I said ${r.side.toUpperCase()} [CONF ${r.conf}%], reality said ${r.outcome.toUpperCase()}. ${r.delta > 0 ? '+' : '−'}${Math.abs(r.delta)} pts. Record ${s.w}–${s.l}, ${s.streak}-day streak. Think you can beat me?`;
}

/** Native share sheet with the PNG when available; otherwise download it. */
export async function shareReceipt(r: Receipt, s: CardStats): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const blob = await renderReceipt(r, s);
  const file = new File([blob], `tally-${r.date}.png`, { type: 'image/png' });
  const text = receiptText(r, s);
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text });
      return 'shared';
    } catch {
      return 'cancelled';
    }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = file.name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  try { await navigator.clipboard?.writeText(text); } catch { /* optional */ }
  return 'downloaded';
}
