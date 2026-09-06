/**
 * How far back a "clip this moment" request during a live broadcast reaches
 * — same idea as Twitch's fixed-lookback clipping. Not configurable per
 * request; keeping it fixed avoids needing a live position/duration UI on
 * top of the HLS player.
 */
export const CLIP_LOOKBACK_SECONDS = 30;

export function clipWindow(markedAtSeconds: number): { startSeconds: number; endSeconds: number } {
  return {
    startSeconds: Math.max(0, markedAtSeconds - CLIP_LOOKBACK_SECONDS),
    endSeconds: markedAtSeconds,
  };
}
