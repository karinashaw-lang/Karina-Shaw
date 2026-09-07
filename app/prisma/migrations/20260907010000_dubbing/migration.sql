-- CreateEnum
CREATE TYPE "DubStatus" AS ENUM ('PROCESSING', 'READY', 'ERRORED');

-- CreateTable
CREATE TABLE "Dub" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "requestedById" TEXT NOT NULL,
    "targetLanguage" TEXT NOT NULL,
    "status" "DubStatus" NOT NULL DEFAULT 'PROCESSING',
    "elevenLabsDubbingId" TEXT,
    "audioUrl" TEXT,
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dub_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dub_elevenLabsDubbingId_key" ON "Dub"("elevenLabsDubbingId");

-- CreateIndex
CREATE UNIQUE INDEX "Dub_videoId_targetLanguage_key" ON "Dub"("videoId", "targetLanguage");

-- AddForeignKey
ALTER TABLE "Dub" ADD CONSTRAINT "Dub_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dub" ADD CONSTRAINT "Dub_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

