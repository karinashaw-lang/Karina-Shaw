-- CreateEnum
CREATE TYPE "TakedownTargetType" AS ENUM ('VIDEO', 'MOMENT');

-- CreateEnum
CREATE TYPE "TakedownStatus" AS ENUM ('PENDING', 'REMOVED', 'DISMISSED');

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "removedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "TakedownRequest" (
    "id" TEXT NOT NULL,
    "targetType" "TakedownTargetType" NOT NULL,
    "targetId" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "reporterName" TEXT NOT NULL,
    "reporterEmail" TEXT NOT NULL,
    "workDescription" TEXT NOT NULL,
    "infringingUrl" TEXT NOT NULL,
    "status" "TakedownStatus" NOT NULL DEFAULT 'PENDING',
    "resolutionNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "TakedownRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailSubscriber" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailSubscriber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TakedownRequest_creatorId_status_idx" ON "TakedownRequest"("creatorId", "status");

-- CreateIndex
CREATE INDEX "EmailSubscriber_creatorId_idx" ON "EmailSubscriber"("creatorId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailSubscriber_creatorId_email_key" ON "EmailSubscriber"("creatorId", "email");

-- AddForeignKey
ALTER TABLE "TakedownRequest" ADD CONSTRAINT "TakedownRequest_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "CreatorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailSubscriber" ADD CONSTRAINT "EmailSubscriber_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "CreatorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

