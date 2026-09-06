-- AlterTable
ALTER TABLE "LiveStream" ADD COLUMN     "wentLiveAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "LiveChatMessage" (
    "id" TEXT NOT NULL,
    "liveStreamId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LiveChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiveClipRequest" (
    "id" TEXT NOT NULL,
    "liveStreamId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "markedAtSeconds" INTEGER NOT NULL,
    "resultClipId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LiveClipRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LiveChatMessage_liveStreamId_createdAt_idx" ON "LiveChatMessage"("liveStreamId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "LiveClipRequest_resultClipId_key" ON "LiveClipRequest"("resultClipId");

-- AddForeignKey
ALTER TABLE "LiveChatMessage" ADD CONSTRAINT "LiveChatMessage_liveStreamId_fkey" FOREIGN KEY ("liveStreamId") REFERENCES "LiveStream"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveChatMessage" ADD CONSTRAINT "LiveChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveClipRequest" ADD CONSTRAINT "LiveClipRequest_liveStreamId_fkey" FOREIGN KEY ("liveStreamId") REFERENCES "LiveStream"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveClipRequest" ADD CONSTRAINT "LiveClipRequest_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveClipRequest" ADD CONSTRAINT "LiveClipRequest_resultClipId_fkey" FOREIGN KEY ("resultClipId") REFERENCES "Clip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

