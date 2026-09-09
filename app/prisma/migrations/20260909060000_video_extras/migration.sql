-- CreateEnum
CREATE TYPE "VideoExtraType" AS ENUM ('RESOURCE_SHEET', 'OUTTAKES', 'ATTACHMENT');

-- CreateTable
CREATE TABLE "VideoExtra" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "type" "VideoExtraType" NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT,
    "fileUrl" TEXT,
    "priceCents" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VideoExtra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoExtraUnlock" (
    "id" TEXT NOT NULL,
    "videoExtraId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "stripeCheckoutSessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoExtraUnlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VideoExtra_videoId_idx" ON "VideoExtra"("videoId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoExtraUnlock_stripeCheckoutSessionId_key" ON "VideoExtraUnlock"("stripeCheckoutSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoExtraUnlock_videoExtraId_userId_key" ON "VideoExtraUnlock"("videoExtraId", "userId");

-- AddForeignKey
ALTER TABLE "VideoExtra" ADD CONSTRAINT "VideoExtra_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoExtraUnlock" ADD CONSTRAINT "VideoExtraUnlock_videoExtraId_fkey" FOREIGN KEY ("videoExtraId") REFERENCES "VideoExtra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoExtraUnlock" ADD CONSTRAINT "VideoExtraUnlock_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
