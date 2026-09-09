-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "feedToken" TEXT;

-- Backfill existing rows with a unique random token before enforcing NOT NULL.
UPDATE "Subscription" SET "feedToken" = md5(random()::text || clock_timestamp()::text || id) WHERE "feedToken" IS NULL;

ALTER TABLE "Subscription" ALTER COLUMN "feedToken" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_feedToken_key" ON "Subscription"("feedToken");
