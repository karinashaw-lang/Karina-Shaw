import Link from "next/link";
import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { getAppUrl } from "@/lib/app-url";
import { getPublicMoment } from "@/lib/curated-moments";
import TipForm from "@/components/tip-form";

/**
 * The embeddable card for a Curated Moment — meant to live in an <iframe>
 * on someone else's page (newsletter, blog, social), so this deliberately
 * skips the site's nav/layout (see the (embed) route group) and keeps
 * itself to just the player, attribution, and a tip button.
 *
 * Tips/subscriptions here still require being signed in on this platform —
 * in a genuine cross-site iframe, third-party cookie restrictions mean
 * that will usually show the "log in" prompt rather than a signed-in tip
 * form. Guest checkout (no account needed) is the fix, and is planned but
 * not built yet.
 */
export default async function MomentEmbedPage(props: PageProps<"/embed/moments/[id]">) {
  const { id } = await props.params;

  const [moment, user, appUrl] = await Promise.all([getPublicMoment(id), getCurrentUser(), getAppUrl()]);

  if (!moment) notFound();

  const { video } = moment;
  const creator = video.creator;
  const isHls = Boolean(video.videoUrl?.endsWith(".m3u8"));

  return (
    <div className="flex h-full flex-col p-3 text-sm">
      {video.videoUrl ? (
        isHls ? (
          <video controls className="w-full rounded bg-black" src={video.videoUrl} />
        ) : (
          <video
            controls
            className="w-full rounded bg-black"
            src={`${video.videoUrl}#t=${moment.startSeconds},${moment.endSeconds}`}
          />
        )
      ) : (
        <div className="flex aspect-video items-center justify-center rounded bg-black text-xs text-zinc-300">
          Still processing.
        </div>
      )}

      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="min-w-0 truncate">
          <a href={`${appUrl}/moments/${moment.id}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
            {moment.title}
          </a>{" "}
          <span className="text-zinc-500">
            —{" "}
            <a href={`${appUrl}/creators/${creator.handle}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {creator.displayName}
            </a>
          </span>
        </p>
      </div>

      <div className="mt-2">
        {user ? (
          <TipForm creatorId={creator.id} handle={creator.handle} />
        ) : (
          <p className="text-xs text-zinc-500">
            <Link href="/login" target="_blank" className="underline">
              Log in
            </Link>{" "}
            on {new URL(appUrl).host} to tip {creator.displayName}.
          </p>
        )}
      </div>
    </div>
  );
}
