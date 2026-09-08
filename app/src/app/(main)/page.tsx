import Link from "next/link";

import prisma from "@/lib/prisma";

export default async function Home() {
  const videos = await prisma.video.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
    include: { creator: true },
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Latest</h1>

      {videos.length === 0 ? (
        <p className="mt-6 text-zinc-500">
          No videos yet.{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>{" "}
          and be the first to post one.
        </p>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {videos.map((video) => (
            <li
              key={video.id}
              className="rounded-lg border border-black/10 p-4 dark:border-white/10"
            >
              <Link href={`/videos/${video.id}`} className="text-lg font-medium">
                {video.title}
              </Link>
              <p className="mt-1 text-sm text-zinc-500">
                by{" "}
                <Link href={`/creators/${video.creator.handle}`} className="underline">
                  {video.creator.displayName}
                </Link>
              </p>
              {video.description && (
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {video.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
