import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";

export default async function CreatorPage(props: PageProps<"/creators/[handle]">) {
  const { handle } = await props.params;

  const creator = await prisma.creatorProfile.findUnique({
    where: { handle },
    include: { videos: { orderBy: { createdAt: "desc" } } },
  });

  if (!creator) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">{creator.displayName}</h1>
      <p className="text-sm text-zinc-500">@{creator.handle}</p>
      {creator.bio && <p className="mt-4">{creator.bio}</p>}

      <h2 className="mt-8 text-lg font-medium">Videos</h2>
      {creator.videos.length === 0 ? (
        <p className="mt-2 text-sm text-zinc-500">No videos yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {creator.videos.map((video) => (
            <li key={video.id}>
              <Link href={`/videos/${video.id}`} className="font-medium underline">
                {video.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
