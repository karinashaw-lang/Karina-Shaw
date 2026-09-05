-- CreateEnum
CREATE TYPE "VideoStatus" AS ENUM ('PROCESSING', 'READY', 'ERRORED');

-- CreateEnum
CREATE TYPE "LiveStreamStatus" AS ENUM ('IDLE', 'ACTIVE', 'DISABLED');

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "stripeSubscriptionId" TEXT;

-- AlterTable
ALTER TABLE "Tip" ADD COLUMN     "stripeCheckoutSessionId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stripeCustomerId" TEXT;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "muxAssetId" TEXT,
ADD COLUMN     "muxPlaybackId" TEXT,
ADD COLUMN     "muxUploadId" TEXT,
ADD COLUMN     "status" "VideoStatus" NOT NULL DEFAULT 'READY',
ALTER COLUMN "videoUrl" DROP NOT NULL;

-- CreateTable
CREATE TABLE "LiveStream" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "muxLiveStreamId" TEXT NOT NULL,
    "muxStreamKey" TEXT NOT NULL,
    "muxPlaybackId" TEXT NOT NULL,
    "status" "LiveStreamStatus" NOT NULL DEFAULT 'IDLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LiveStream_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Briefing" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "script" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Briefing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LiveStream_creatorId_key" ON "LiveStream"("creatorId");

-- CreateIndex
CREATE UNIQUE INDEX "LiveStream_muxLiveStreamId_key" ON "LiveStream"("muxLiveStreamId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripeSubscriptionId_key" ON "Subscription"("stripeSubscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "Tip_stripeCheckoutSessionId_key" ON "Tip"("stripeCheckoutSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "User_stripeCustomerId_key" ON "User"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "Video_muxUploadId_key" ON "Video"("muxUploadId");

-- AddForeignKey
ALTER TABLE "LiveStream" ADD CONSTRAINT "LiveStream_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "CreatorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Briefing" ADD CONSTRAINT "Briefing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

