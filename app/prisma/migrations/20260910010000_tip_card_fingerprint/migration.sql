-- AlterTable
ALTER TABLE "Tip" ADD COLUMN     "cardFingerprint" TEXT;

-- CreateIndex
CREATE INDEX "Tip_cardFingerprint_idx" ON "Tip"("cardFingerprint");
