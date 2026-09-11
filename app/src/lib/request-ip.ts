import "server-only";

import { headers } from "next/headers";

/**
 * Best-effort client IP for the current request — one of three
 * self-referral signals (alongside card fingerprint and guest email) used
 * to catch a distributor tipping through their own share link. Not a
 * strong guarantee on its own: shared networks, NAT, and VPNs can put
 * unrelated people behind the same address, which is exactly why it's
 * combined with the other two rather than used alone.
 */
export async function getRequestIp(): Promise<string | null> {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return headerList.get("x-real-ip");
}
