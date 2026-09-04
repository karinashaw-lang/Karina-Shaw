import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import CommentForm from "@/components/comment-form";
import SaveButton from "@/components/save-button";
import ClipForm from "@/components/clip-form";

export default async function VideoPage(props: PageProps<"/videos/[id]">) {
  const { id } = await props.params;

  const [video, user] = await Promise.all([
    prisma.video.findUnique({
      where: { id },
      include: {
        creator: true,
        comments: { orderBy: { createdAt: "asc" }, include: { user: true } },
      },
    }),
    getCurrentUser(),
  ]);

  if (!video) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <video controls className="w-full rounded-lg bg-black" src={video.videoUrl} />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{video.title}</h1>
          <p className="mt-1 text-sm text-zinc-500">
            by{" "}
            <Link href={`/creators/${video.creator.handle}`} className="underline">
              {video.creator.displayName}
            </Link>
          </p>
        </div>
        {user && <SaveButton kind="video" itemId={video.id} path={`/videos/${video.id}`} />}
      </div>

      {video.description && <p className="mt-4">{video.description}</p>}

      {user && <ClipForm videoId={video.id} />}

      <h2 className="mt-8 text-lg font-medium">
        Comments ({video.comments.length})
      </h2>

      <ul className="mt-4 flex flex-col gap-3">
        {video.comments.map((comment) => (
          <li key={comment.id} className="text-sm">
            <span className="font-medium">{comment.user.name}</span>{" "}
            <span className="text-zinc-600 dark:text-zinc-400">{comment.body}</span>
          </li>
        ))}
      </ul>

      {user ? (
        <CommentForm videoId={video.id} />
      ) : (
        <p className="mt-4 text-sm text-zinc-500">
          <Link href="/login" className="underline">
            Log in
          </Link>{" "}
          to leave a comment, save this video, or make a clip.
        </p>
      )}
    </div>
  );
}
