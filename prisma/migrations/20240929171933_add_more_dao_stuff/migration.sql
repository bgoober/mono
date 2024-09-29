/*
  Warnings:

  - A unique constraint covering the columns `[treasuryId]` on the table `DAO` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `DAO` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treasuryId` to the `DAO` table without a default value. This is not possible if the table is not empty.
  - Made the column `daoId` on table `Treasury` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Treasury" DROP CONSTRAINT "Treasury_daoId_fkey";

-- AlterTable
ALTER TABLE "DAO" ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "treasuryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Treasury" ALTER COLUMN "daoId" SET NOT NULL;

-- CreateTable
CREATE TABLE "_Member" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Member_AB_unique" ON "_Member"("A", "B");

-- CreateIndex
CREATE INDEX "_Member_B_index" ON "_Member"("B");

-- CreateIndex
CREATE UNIQUE INDEX "DAO_treasuryId_key" ON "DAO"("treasuryId");

-- AddForeignKey
ALTER TABLE "DAO" ADD CONSTRAINT "DAO_treasuryId_fkey" FOREIGN KEY ("treasuryId") REFERENCES "Treasury"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DAO" ADD CONSTRAINT "DAO_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Member" ADD CONSTRAINT "_Member_A_fkey" FOREIGN KEY ("A") REFERENCES "DAO"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Member" ADD CONSTRAINT "_Member_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
