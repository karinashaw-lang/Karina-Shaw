-- CreateTable
CREATE TABLE "RecapReel" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weekStart" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecapReel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecapReel_userId_weekStart_key" ON "RecapReel"("userId", "weekStart");

-- AddForeignKey
ALTER TABLE "RecapReel" ADD CONSTRAINT "RecapReel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

