-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "highlightsComputedAt" TIMESTAMP(3),
ADD COLUMN     "highlightsJson" JSONB;

