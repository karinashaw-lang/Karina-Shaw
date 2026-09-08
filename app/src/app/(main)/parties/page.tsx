import Link from "next/link";

import prisma from "@/lib/prisma";
import { hoursAgo, nowMs } from "@/lib/time";
import LiveBadge from "@/components/live-badge";

export default async function PartiesIndexPage() {
  const parties = await prisma.listeningParty.findMany({
    where: { scheduledAt: { gte: hoursAgo(3) } },
    orderBy: { scheduledAt: "asc" },
    take: 30,
    include: { video: { include: { creator: true } }, _count: { select: { rsvps: true } } },
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Listening parties</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Watch an episode together, synchronized, with live chat.
      </p>

      {parties.length === 0 ? (
        <p className="mt-6 text-sm text-zinc-500">Nothing scheduled yet.</p>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {parties.map((party) => {
            const isLive = party.scheduledAt.getTime() <= nowMs();
            return (
              <li key={party.id} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-zinc-500">{new Date(party.scheduledAt).toLocaleString()}</p>
                  {isLive && <LiveBadge />}
                </div>
                <Link href={`/parties/${party.id}`} className="text-lg font-medium underline">
                  {party.video.title}
                </Link>
                <p className="mt-1 text-sm text-zinc-500">
                  by{" "}
                  <Link href={`/creators/${party.video.creator.handle}`} className="underline">
                    {party.video.creator.displayName}
                  </Link>{" "}
                  · {party._count.rsvps} going
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
