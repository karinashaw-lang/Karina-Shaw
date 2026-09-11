import "server-only";

import crypto from "node:crypto";

/**
 * Signed, expiring URLs for paid files (Behind the Cut's raw footage/cut
 * scenes, Video Extras' outtakes/attachments) — a stand-in for what a real
 * object store's presigned URLs would do, since these still live on local
 * disk (see video-storage.ts). The file itself sits outside `public/`, so
 * the only way to reach it at all is through /api/files/[token], and that
 * token is only ever minted server-side, at render time, for a viewer who
 * has already passed the real access check (owner, subscriber, or a
 * recorded unlock) — never stored, never handed to a client component
 * that doesn't already have access. A short TTL means a copied link stops
 * working on its own even if someone tries to share it.
 */
const DEFAULT_TTL_SECONDS = 60 * 60; // 1 hour — long enough to watch/download once, short enough that a shared link goes stale fast

function getSigningSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET is not set");
  }
  return secret;
}

function sign(relativePath: string, expires: number): string {
  return crypto.createHmac("sha256", getSigningSecret()).update(`${relativePath}:${expires}`).digest("hex");
}

/** Mints a signed URL for a file stored under the private uploads root
 * (see PRIVATE_UPLOAD_ROOT in video-storage.ts), e.g.
 * "behind-the-cut/<uuid>.mp4" -> "/api/files/<token>". */
export function signFileUrl(relativePath: string, ttlSeconds = DEFAULT_TTL_SECONDS): string {
  const expires = Date.now() + ttlSeconds * 1000;
  const signature = sign(relativePath, expires);
  const token = Buffer.from(`${relativePath}\n${expires}\n${signature}`).toString("base64url");
  return `/api/files/${token}`;
}

export function verifyFileToken(token: string): { relativePath: string } | null {
  let decoded: string;
  try {
    decoded = Buffer.from(token, "base64url").toString("utf8");
  } catch {
    return null;
  }

  const parts = decoded.split("\n");
  if (parts.length !== 3) return null;
  const [relativePath, expiresRaw, signature] = parts;

  const expires = Number(expiresRaw);
  if (!relativePath || !Number.isFinite(expires) || !signature) return null;
  if (Date.now() > expires) return null;

  const expectedSignature = sign(relativePath, expires);
  const provided = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);
  if (provided.length !== expected.length || !crypto.timingSafeEqual(provided, expected)) {
    return null;
  }

  return { relativePath };
}
