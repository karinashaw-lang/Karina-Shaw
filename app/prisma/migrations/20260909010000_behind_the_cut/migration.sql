-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "effortHours" DOUBLE PRECISION,
ADD COLUMN     "effortMinutesCut" INTEGER,
ADD COLUMN     "effortReshoots" INTEGER;

-- CreateTable
CREATE TABLE "BehindTheCut" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "planText" TEXT,
    "rawFootageUrl" TEXT,
    "cutScenesUrl" TEXT,
    "kitText" TEXT,
    "hardPartText" TEXT,
    "priceCents" INTEGER NOT NULL DEFAULT 300,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BehindTheCut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BehindTheCutUnlock" (
    "id" TEXT NOT NULL,
    "behindTheCutId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stripeCheckoutSessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BehindTheCutUnlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BehindTheCut_videoId_key" ON "BehindTheCut"("videoId");

-- CreateIndex
CREATE UNIQUE INDEX "BehindTheCutUnlock_stripeCheckoutSessionId_key" ON "BehindTheCutUnlock"("stripeCheckoutSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "BehindTheCutUnlock_behindTheCutId_userId_key" ON "BehindTheCutUnlock"("behindTheCutId", "userId");

-- AddForeignKey
ALTER TABLE "BehindTheCut" ADD CONSTRAINT "BehindTheCut_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BehindTheCutUnlock" ADD CONSTRAINT "BehindTheCutUnlock_behindTheCutId_fkey" FOREIGN KEY ("behindTheCutId") REFERENCES "BehindTheCut"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BehindTheCutUnlock" ADD CONSTRAINT "BehindTheCutUnlock_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

