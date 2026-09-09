-- AlterTable
ALTER TABLE "WallItem" ADD COLUMN     "momentId" TEXT;

-- AddForeignKey
ALTER TABLE "WallItem" ADD CONSTRAINT "WallItem_momentId_fkey" FOREIGN KEY ("momentId") REFERENCES "CuratedMoment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
