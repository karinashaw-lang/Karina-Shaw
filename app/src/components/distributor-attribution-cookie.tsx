"use client";

import { useEffect } from "react";

/**
 * Records a distributor-link click in a cookie so the attribution
 * survives leaving and coming back later — the plan's risk section calls
 * out that a same-visit-only window isn't the real goal. Every fresh `?d=`
 * visit overwrites this, so last click always wins within the window. A
 * 7-day, non-httpOnly cookie is enough: the value is just a link id,
 * resolved and validated server-side (self-referral checked, creator
 * matched) every time it's actually used, so there's nothing sensitive to
 * protect by making it httpOnly, and a client-side write is the simplest
 * way to set it from a page render (Server Components can't set cookies).
 */
export default function DistributorAttributionCookie({
  creatorId,
  linkId,
}: {
  creatorId: string;
  linkId: string;
}) {
  useEffect(() => {
    const sevenDaysInSeconds = 60 * 60 * 24 * 7;
    document.cookie = `dlink_${creatorId}=${linkId}; path=/; max-age=${sevenDaysInSeconds}; samesite=lax`;
  }, [creatorId, linkId]);

  return null;
}
