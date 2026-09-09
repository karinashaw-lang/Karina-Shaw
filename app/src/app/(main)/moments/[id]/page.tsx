import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getAppUrl } from "@/lib/app-url";
import { isStripeConfigured } from "@/lib/integrations/stripe";
import { getPublicMoment } from "@/lib/curated-moments";
import TipForm from "@/components/tip-form";
import GuestTipForm from "@/components/guest-tip-form";
import SubscribeButton from "@/components/subscribe-button";
import SubscribeCheckoutForm from "@/components/subscribe-checkout-form";
import CopyMomentLinks from "@/components/copy-moment-links";
import DistributorShareCard from "@/components/distributor-share-card";
import SaveButton from "@/components/save-button";

export default async function MomentPage(props: PageProps<"/moments/[id]">) {
  const { id } = await props.params;
  const searchParams = await props.searchParams;
  const distributorLinkId = Array.isArray(searchParams.d) ? searchParams.d[0] : searchParams.d;

  const [moment, user] = await Promise.all([getPublicMoment(id), getCurrentUser()]);

  if (!moment) notFound();

  const { video } = moment;
  const creator = video.creator;
  const isOwner = user?.creatorProfile?.id === creator.id;
  const isHls = Boolean(video.videoUrl?.endsWith(".m3u8"));

  const isSubscribed =
    user && !isOwner
      ? Boolean(
          await prisma.subscription.findUnique({
            where: { subscriberId_creatorId: { subscriberId: user.id, creatorId: creator.id } },
          })
        )
      : false;

  const appUrl = await getAppUrl();

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      {video.videoUrl ? (
        isHls ? (
          <>
            <video controls className="w-full rounded-lg bg-black" src={video.videoUrl} />
            <p className="mt-1 text-xs text-zinc-500">
              Mux-hosted moments currently play the full source video — precise trimming for HLS
              sources isn&apos;t implemented yet.
            </p>
          </>
        ) : (
          <video
            controls
            autoPlay={false}
            className="w-full rounded-lg bg-black"
            src={`${video.videoUrl}#t=${moment.startSeconds},${moment.endSeconds}`}
          />
        )
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-lg bg-black text-sm text-zinc-300">
          Source video still processing.
        </div>
      )}

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{moment.title}</h1>
          <p className="mt-1 text-sm text-zinc-500">
            A moment from{" "}
            <Link href={`/videos/${video.id}`} className="underline">
              {video.title}
            </Link>{" "}
            by{" "}
            <Link href={`/creators/${creator.handle}`} className="underline">
              {creator.displayName}
            </Link>
          </p>
        </div>
        {user && <SaveButton kind="moment" itemId={moment.id} path={`/moments/${moment.id}`} />}
      </div>

      <div className="mt-4">
        <CopyMomentLinks
          momentUrl={`${appUrl}/moments/${moment.id}`}
          embedUrl={`${appUrl}/embed/moments/${moment.id}`}
        />
      </div>

      {!isOwner && (
        <div className="mt-6 flex flex-col gap-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
          {user ? (
            <TipForm creatorId={creator.id} handle={creator.handle} distributorLinkId={distributorLinkId} />
          ) : isStripeConfigured() ? (
            <GuestTipForm
              creatorId={creator.id}
              returnPath={`/moments/${moment.id}`}
              distributorLinkId={distributorLinkId}
            />
          ) : (
            <p className="text-sm text-zinc-500">
              <Link href="/login" className="underline">
                Log in
              </Link>{" "}
              to tip {creator.displayName}.
            </p>
          )}

          {creator.subscriptionPriceCents !== null &&
            (isSubscribed ? (
              <p className="text-sm text-green-700 dark:text-green-500">
                You&apos;re subscribed to {creator.displayName}.
              </p>
            ) : user && isStripeConfigured() ? (
              <SubscribeCheckoutForm
                creatorId={creator.id}
                handle={creator.handle}
                priceCents={creator.subscriptionPriceCents}
              />
            ) : user ? (
              <SubscribeButton
                creatorId={creator.id}
                handle={creator.handle}
                priceCents={creator.subscriptionPriceCents}
                initialSubscribed={false}
              />
            ) : null)}
        </div>
      )}

      {user && !isOwner && isStripeConfigured() && (
        <div className="mt-4">
          <DistributorShareCard
            momentId={moment.id}
            returnPath={`/moments/${moment.id}`}
            payoutsReady={user.stripeChargesEnabled}
          />
        </div>
      )}
    </div>
  );
}
