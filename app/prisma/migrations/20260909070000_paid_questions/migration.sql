-- CreateEnum
CREATE TYPE "PaidQuestionStatus" AS ENUM ('PENDING', 'ANSWERED');

-- AlterTable
ALTER TABLE "CreatorProfile" ADD COLUMN     "questionPriceCents" INTEGER;

-- CreateTable
CREATE TABLE "PaidQuestion" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "fromUserId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "status" "PaidQuestionStatus" NOT NULL DEFAULT 'PENDING',
    "answeredVideoId" TEXT,
    "stripeCheckoutSessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaidQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaidQuestion_stripeCheckoutSessionId_key" ON "PaidQuestion"("stripeCheckoutSessionId");

-- CreateIndex
CREATE INDEX "PaidQuestion_creatorId_idx" ON "PaidQuestion"("creatorId");

-- AddForeignKey
ALTER TABLE "PaidQuestion" ADD CONSTRAINT "PaidQuestion_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "CreatorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaidQuestion" ADD CONSTRAINT "PaidQuestion_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaidQuestion" ADD CONSTRAINT "PaidQuestion_answeredVideoId_fkey" FOREIGN KEY ("answeredVideoId") REFERENCES "Video"("id") ON DELETE SET NULL ON UPDATE CASCADE;
