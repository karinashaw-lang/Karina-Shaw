-- CreateEnum
CREATE TYPE "MomentSource" AS ENUM ('AI', 'MANUAL');

-- CreateEnum
CREATE TYPE "MomentStatus" AS ENUM ('SUGGESTED', 'PUBLISHED');

-- CreateTable
CREATE TABLE "CuratedMoment" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startSeconds" INTEGER NOT NULL,
    "endSeconds" INTEGER NOT NULL,
    "source" "MomentSource" NOT NULL,
    "status" "MomentStatus" NOT NULL DEFAULT 'SUGGESTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "CuratedMoment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CuratedMoment_videoId_idx" ON "CuratedMoment"("videoId");

-- AddForeignKey
ALTER TABLE "CuratedMoment" ADD CONSTRAINT "CuratedMoment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterEnum
ALTER TYPE "MomentStatus" ADD VALUE 'DISMISSED';

-- AlterEnum
ALTER TYPE "MomentSource" ADD VALUE 'CROWD';

