/*
  Warnings:

  - You are about to drop the `_Backers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Backers" DROP CONSTRAINT "_Backers_A_fkey";

-- DropForeignKey
ALTER TABLE "_Backers" DROP CONSTRAINT "_Backers_B_fkey";

-- DropTable
DROP TABLE "_Backers";

-- CreateTable
CREATE TABLE "Backer" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Backer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Backer" ADD CONSTRAINT "Backer_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Backer" ADD CONSTRAINT "Backer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
