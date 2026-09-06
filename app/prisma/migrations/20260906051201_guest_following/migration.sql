-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoGuest" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,

    CONSTRAINT "VideoGuest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestFollow" (
    "id" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GuestFollow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_name_key" ON "Guest"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VideoGuest_videoId_guestId_key" ON "VideoGuest"("videoId", "guestId");

-- CreateIndex
CREATE UNIQUE INDEX "GuestFollow_followerId_guestId_key" ON "GuestFollow"("followerId", "guestId");

-- AddForeignKey
ALTER TABLE "VideoGuest" ADD CONSTRAINT "VideoGuest_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoGuest" ADD CONSTRAINT "VideoGuest_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestFollow" ADD CONSTRAINT "GuestFollow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestFollow" ADD CONSTRAINT "GuestFollow_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

