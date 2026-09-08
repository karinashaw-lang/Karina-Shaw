import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { isMuxConfigured, MUX_RTMP_INGEST_URL } from "@/lib/integrations/mux";
import GoLiveSetup from "@/components/go-live-setup";
import RevealSecret from "@/components/reveal-secret";
import LiveBadge from "@/components/live-badge";

export default async function CreatorLivePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.creatorProfile) redirect("/creator/setup");

  if (!isMuxConfigured()) {
    return (
      <div className="mx-auto max-w-sm px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">Go live</h1>
        <p className="mt-4 text-sm text-zinc-500">
          Live streaming needs Mux configured (MUX_TOKEN_ID / MUX_TOKEN_SECRET). Ask whoever
          runs this deployment to add those, then come back here.
        </p>
      </div>
    );
  }

  const liveStream = await prisma.liveStream.findUnique({
    where: { creatorId: user.creatorProfile.id },
  });

  return (
    <div className="mx-auto max-w-sm px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Go live</h1>

      {!liveStream ? (
        <div className="mt-6">
          <p className="text-sm text-zinc-500">
            Set up your live stream once, then reuse the same RTMP details every time you go
            live.
          </p>
          <div className="mt-4">
            <GoLiveSetup />
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">Status:</span>
            {liveStream.status === "ACTIVE" ? <LiveBadge /> : <span>{liveStream.status}</span>}
          </div>

          <div>
            <p className="font-medium">RTMP server URL</p>
            <p className="font-mono">{MUX_RTMP_INGEST_URL}</p>
          </div>

          <div>
            <p className="font-medium">Stream key</p>
            <RevealSecret value={liveStream.muxStreamKey} />
            <p className="mt-1 text-xs text-zinc-500">
              Treat this like a password — anyone with it can broadcast as you.
            </p>
          </div>

          <p className="text-xs text-zinc-500">
            Plug these into OBS (or any RTMP encoder). The status above updates automatically —
            it may take a few seconds after you start streaming.
          </p>

          <Link href={`/creators/${user.creatorProfile.handle}/live`} className="underline">
            View your public live page
          </Link>
        </div>
      )}
    </div>
  );
}
