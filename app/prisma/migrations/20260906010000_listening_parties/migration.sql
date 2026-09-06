-- CreateTable
CREATE TABLE "ListeningParty" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListeningParty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyMessage" (
    "id" TEXT NOT NULL,
    "partyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartyMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyRsvp" (
    "id" TEXT NOT NULL,
    "partyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartyRsvp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PartyMessage_partyId_createdAt_idx" ON "PartyMessage"("partyId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "PartyRsvp_partyId_userId_key" ON "PartyRsvp"("partyId", "userId");

-- AddForeignKey
ALTER TABLE "ListeningParty" ADD CONSTRAINT "ListeningParty_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyMessage" ADD CONSTRAINT "PartyMessage_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "ListeningParty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyMessage" ADD CONSTRAINT "PartyMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyRsvp" ADD CONSTRAINT "PartyRsvp_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "ListeningParty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyRsvp" ADD CONSTRAINT "PartyRsvp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

