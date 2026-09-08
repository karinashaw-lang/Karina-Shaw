-- DropForeignKey
ALTER TABLE "Tip" DROP CONSTRAINT "Tip_fromUserId_fkey";

-- AlterTable
ALTER TABLE "Tip" ADD COLUMN     "guestEmail" TEXT,
ALTER COLUMN "fromUserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tip" ADD CONSTRAINT "Tip_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

