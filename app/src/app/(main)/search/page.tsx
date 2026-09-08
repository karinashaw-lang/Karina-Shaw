import Link from "next/link";

import prisma from "@/lib/prisma";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default async function SearchPage(props: PageProps<"/search">) {
  const searchParams = await props.searchParams;
  const qParam = Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q;
  const query = (qParam ?? "").trim();

  const results = query
    ? await prisma.video.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
            { transcript: { some: { text: { contains: query, mode: "insensitive" } } } },
          ],
        },
        include: {
          creator: true,
          transcript: {
            where: { text: { contains: query, mode: "insensitive" } },
            orderBy: { startSeconds: "asc" },
            take: 5,
          },
        },
        orderBy: { createdAt: "desc" },
        take: 20,
      })
    : [];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Search</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Search video titles, descriptions, and transcripts — down to the exact moment something
        was said.
      </p>

      <form action="/search" className="mt-6 flex gap-2">
        <input
          name="q"
          type="text"
          defaultValue={query}
          placeholder="Search…"
          className="flex-1 rounded border border-black/20 px-3 py-2 text-sm dark:border-white/20"
        />
        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black"
        >
          Search
        </button>
      </form>

      {query && results.length === 0 && (
        <p className="mt-6 text-sm text-zinc-500">No matches for &ldquo;{query}&rdquo;.</p>
      )}

      <ul className="mt-6 flex flex-col gap-6">
        {results.map((video) => (
          <li key={video.id} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <Link href={`/videos/${video.id}`} className="text-lg font-medium underline">
              {video.title}
            </Link>
            <p className="mt-1 text-sm text-zinc-500">
              by{" "}
              <Link href={`/creators/${video.creator.handle}`} className="underline">
                {video.creator.displayName}
              </Link>
            </p>

            {video.transcript.length > 0 && (
              <ul className="mt-2 flex flex-col gap-1 text-sm">
                {video.transcript.map((segment) => (
                  <li key={segment.id}>
                    <Link
                      href={`/videos/${video.id}?t=${segment.startSeconds}`}
                      className="hover:underline"
                    >
                      <span className="mr-2 text-zinc-500 tabular-nums">
                        {formatTime(segment.startSeconds)}
                      </span>
                      &ldquo;{segment.text}&rdquo;
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
