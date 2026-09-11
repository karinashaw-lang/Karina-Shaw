-- AlterTable
ALTER TABLE "DistributorEarning" ADD COLUMN     "refundedAt" TIMESTAMP(3),
ADD COLUMN     "stripeTransferId" TEXT;

-- AlterTable
ALTER TABLE "DistributorLink" ADD COLUMN     "createdIp" TEXT;

-- AlterTable
ALTER TABLE "Tip" ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "stripePaymentIntentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Tip_stripePaymentIntentId_key" ON "Tip"("stripePaymentIntentId");
