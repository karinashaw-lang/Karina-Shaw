"use client";

import { useState, useTransition } from "react";

import { getOrCreateDistributorLink } from "@/lib/actions/distributor";
import { DISTRIBUTOR_SHARE } from "@/lib/distributor";
import DistributorOnboardingForm from "@/components/distributor-onboarding-form";

function ShareLinkButton({ momentId }: { momentId: string }) {
  const [pending, startTransition] = useTransition();
  const [link, setLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function getLink() {
    startTransition(async () => {
      const result = await getOrCreateDistributorLink(momentId);
      if ("error" in result) {
        setError(result.error);
      } else {
        setLink(result.url);
      }
    });
  }

  if (link) {
    return (
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(link).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          });
        }}
        className="rounded border border-black/20 px-3 py-1.5 text-xs dark:border-white/20"
      >
        {copied ? "Link copied" : "Copy your share link"}
      </button>
    );
  }

  return (
    <div>
      <button
        type="button"
        disabled={pending}
        onClick={getLink}
        className="rounded bg-black px-3 py-1.5 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black"
      >
        {pending ? "Getting your link…" : "Get my share link"}
      </button>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default function DistributorShareCard({
  momentId,
  returnPath,
  payoutsReady,
}: {
  momentId: string;
  returnPath: string;
  payoutsReady: boolean;
}) {
  return (
    <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h2 className="text-sm font-medium">Share this and earn</h2>
      <p className="mt-1 text-xs text-zinc-500">
        Get {Math.round(DISTRIBUTOR_SHARE * 100)}% of any tip that comes through your personal
        link for this moment.
      </p>
      <div className="mt-3">
        {payoutsReady ? (
          <ShareLinkButton momentId={momentId} />
        ) : (
          <DistributorOnboardingForm returnPath={returnPath} label="Set up payouts to earn from sharing this" />
        )}
      </div>
    </div>
  );
}
