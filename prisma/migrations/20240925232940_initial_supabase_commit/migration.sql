/*
  Warnings:

  - You are about to drop the column `image` on the `Paper` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Paper` table. All the data in the column will be lost.
  - Added the required column `type` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Paper` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('GITHUB', 'TWITTER', 'LINKEDIN', 'MEDIUM', 'YOUTUBE', 'INSTAGRAM', 'FACEBOOK', 'X', 'TELEGRAM', 'DISCORD', 'WEBSITE', 'PDF', 'IMAGE');

-- CreateEnum
CREATE TYPE "PaperStatus" AS ENUM ('AwaitingPeerReview', 'InPeerReview', 'RequiresRevision', 'Published', 'Minted');

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "paperId" TEXT,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paper" DROP COLUMN "image",
DROP COLUMN "state",
ADD COLUMN     "minted" DECIMAL(65,30),
ADD COLUMN     "price" DECIMAL(65,30),
ADD COLUMN     "status" "PaperStatus" NOT NULL,
ADD COLUMN     "version" DECIMAL(65,30);

-- DropEnum
DROP TYPE "PaperState";

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE SET NULL ON UPDATE CASCADE;
