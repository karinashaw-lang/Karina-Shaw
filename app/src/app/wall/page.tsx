import Link from "next/link";

import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { isOpenAIConfigured } from "@/lib/integrations/openai";
import RemoveFromWallButton from "@/components/remove-from-wall-button";
import GenerateBriefingButton from "@/components/generate-briefing-button";

export default async function WallPage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10">
        <p className="text-sm text-zinc-500">
          <Link href="/login" className="underline">
            Log in
          </Link>{" "}
          to see your wall.
        </p>
      </div>
    );
  }

  const [items, briefings] = await Promise.all([
    prisma.wallItem.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: {
        video: { include: { creator: true } },
        clip: { include: { sourceVideo: { include: { creator: true } } } },
      },
    }),
    prisma.briefing.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Your wall</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Videos and clips you&apos;ve saved from across creators.
      </p>

      <div className="mt-4">
        {isOpenAIConfigured() ? (
          <GenerateBriefingButton />
        ) : (
          <p className="text-xs text-zinc-500">
            Commute briefings need OPENAI_API_KEY configured.
          </p>
        )}
      </div>

      {briefings.length > 0 && (
        <div className="mt-4 flex flex-col gap-3">
          {briefings.map((briefing) => (
            <div key={briefing.id} className="rounded border border-black/10 p-3 dark:border-white/10">
              <audio controls src={briefing.audioUrl} className="w-full" />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{briefing.script}</p>
            </div>
          ))}
        </div>
      )}

      {items.length === 0 ? (
        <p className="mt-6 text-zinc-500">Nothing saved yet.</p>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {items.map((item) => {
            const isClip = Boolean(item.clip);
            const href = isClip ? `/clips/${item.clipId}` : `/videos/${item.videoId}`;
            const title = isClip ? item.clip!.title : item.video!.title;
            const creator = isClip
              ? item.clip!.sourceVideo.creator
              : item.video!.creator;

            return (
              <li
                key={item.id}
                className="flex items-start justify-between gap-4 rounded-lg border border-black/10 p-4 dark:border-white/10"
              >
                <div>
                  <span className="text-xs uppercase tracking-wide text-zinc-500">
                    {isClip ? "Clip" : "Video"}
                  </span>
                  <Link href={href} className="block text-lg font-medium">
                    {title}
                  </Link>
                  <p className="mt-1 text-sm text-zinc-500">
                    by{" "}
                    <Link href={`/creators/${creator.handle}`} className="underline">
                      {creator.displayName}
                    </Link>
                  </p>
                </div>
                <RemoveFromWallButton wallItemId={item.id} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
