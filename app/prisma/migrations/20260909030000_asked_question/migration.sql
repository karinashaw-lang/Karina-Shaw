-- CreateTable
CREATE TABLE "AskedQuestion" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "askedById" TEXT,
    "question" TEXT NOT NULL,
    "answer" TEXT,
    "sourcesJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AskedQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AskedQuestion_creatorId_idx" ON "AskedQuestion"("creatorId");

-- AddForeignKey
ALTER TABLE "AskedQuestion" ADD CONSTRAINT "AskedQuestion_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "CreatorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AskedQuestion" ADD CONSTRAINT "AskedQuestion_askedById_fkey" FOREIGN KEY ("askedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
