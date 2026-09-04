"use client";

import { useState, useTransition } from "react";

import { followCreator, unfollowCreator } from "@/lib/actions/follow";

export default function FollowButton({
  creatorId,
  handle,
  initialFollowing,
}: {
  creatorId: string;
  handle: string;
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
              await followCreator(creatorId, handle);
            } else {
              await unfollowCreator(creatorId, handle);
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
