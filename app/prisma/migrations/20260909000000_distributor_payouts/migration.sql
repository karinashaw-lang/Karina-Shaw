-- AlterTable
ALTER TABLE "Tip" ADD COLUMN     "distributorLinkId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stripeAccountId" TEXT,
ADD COLUMN     "stripeChargesEnabled" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "DistributorLink" (
    "id" TEXT NOT NULL,
    "distributorId" TEXT NOT NULL,
    "momentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DistributorLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributorEarning" (
    "id" TEXT NOT NULL,
    "distributorId" TEXT NOT NULL,
    "tipId" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DistributorEarning_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DistributorLink_distributorId_momentId_key" ON "DistributorLink"("distributorId", "momentId");

-- CreateIndex
CREATE UNIQUE INDEX "DistributorEarning_tipId_key" ON "DistributorEarning"("tipId");

-- CreateIndex
CREATE UNIQUE INDEX "User_stripeAccountId_key" ON "User"("stripeAccountId");

-- AddForeignKey
ALTER TABLE "Tip" ADD CONSTRAINT "Tip_distributorLinkId_fkey" FOREIGN KEY ("distributorLinkId") REFERENCES "DistributorLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributorLink" ADD CONSTRAINT "DistributorLink_distributorId_fkey" FOREIGN KEY ("distributorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributorLink" ADD CONSTRAINT "DistributorLink_momentId_fkey" FOREIGN KEY ("momentId") REFERENCES "CuratedMoment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributorEarning" ADD CONSTRAINT "DistributorEarning_distributorId_fkey" FOREIGN KEY ("distributorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributorEarning" ADD CONSTRAINT "DistributorEarning_tipId_fkey" FOREIGN KEY ("tipId") REFERENCES "Tip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

