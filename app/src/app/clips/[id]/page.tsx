import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import SaveButton from "@/components/save-button";

export default async function ClipPage(props: PageProps<"/clips/[id]">) {
  const { id } = await props.params;

  const [clip, user] = await Promise.all([
    prisma.clip.findUnique({
      where: { id },
      include: { sourceVideo: { include: { creator: true } }, owner: true },
    }),
    getCurrentUser(),
  ]);

  if (!clip) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <video
        controls
        className="w-full rounded-lg bg-black"
        src={`${clip.sourceVideo.videoUrl}#t=${clip.startSeconds},${clip.endSeconds}`}
      />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{clip.title}</h1>
          <p className="mt-1 text-sm text-zinc-500">
            clipped by {clip.owner.name} from{" "}
            <Link href={`/videos/${clip.sourceVideo.id}`} className="underline">
              {clip.sourceVideo.title}
            </Link>{" "}
            by{" "}
            <Link href={`/creators/${clip.sourceVideo.creator.handle}`} className="underline">
              {clip.sourceVideo.creator.displayName}
            </Link>
          </p>
        </div>
        {user && <SaveButton kind="clip" itemId={clip.id} path={`/clips/${clip.id}`} />}
      </div>

      <p className="mt-2 text-sm text-zinc-500">
        {clip.startSeconds}s – {clip.endSeconds}s
      </p>
    </div>
  );
}
