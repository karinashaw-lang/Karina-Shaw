"use client";

import { useState, useTransition } from "react";

import { followGuest, unfollowGuest } from "@/lib/actions/guest";

export default function GuestFollowButton({
  guestId,
  initialFollowing,
}: {
  guestId: string;
  initialFollowing: boolean;
}) {
  const [following, setFollowing] = useState(initialFollowing);
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        const next = !following;
        setFollowing(next);
        startTransition(async () => {
          try {
            if (next) {
              await followGuest(guestId);
            } else {
              await unfollowGuest(guestId);
            }
          } catch {
            setFollowing(!next);
          }
        });
      }}
      className="rounded border border-black/20 px-3 py-1.5 text-sm disabled:opacity-50 dark:border-white/20"
    >
      {following ? "Following" : "Follow"}
    </button>
  );
}
