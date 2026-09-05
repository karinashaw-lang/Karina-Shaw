import "server-only";

import { headers } from "next/headers";

/**
 * Absolute origin for building redirect/callback URLs (Stripe success URLs,
 * etc). Prefers APP_URL if set (needed in production behind a proxy/CDN),
 * otherwise derives it from the incoming request.
 */
export async function getAppUrl(): Promise<string> {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/$/, "");

  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") ?? "http";
  return `${protocol}://${host}`;
}
