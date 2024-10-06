/*
  Warnings:

  - You are about to drop the `FlickReaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `parentId` to the `FlickResponse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FlickReaction" DROP CONSTRAINT "FlickReaction_creatorId_fkey";

-- AlterTable
ALTER TABLE "FlickResponse" ADD COLUMN     "parentId" TEXT NOT NULL;

-- DropTable
DROP TABLE "FlickReaction";

-- CreateTable
CREATE TABLE "_likes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_saves" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_likes_AB_unique" ON "_likes"("A", "B");

-- CreateIndex
CREATE INDEX "_likes_B_index" ON "_likes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_saves_AB_unique" ON "_saves"("A", "B");

-- CreateIndex
CREATE INDEX "_saves_B_index" ON "_saves"("B");

-- AddForeignKey
ALTER TABLE "FlickResponse" ADD CONSTRAINT "FlickResponse_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Flick"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_likes" ADD CONSTRAINT "_likes_A_fkey" FOREIGN KEY ("A") REFERENCES "Flick"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_likes" ADD CONSTRAINT "_likes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_saves" ADD CONSTRAINT "_saves_A_fkey" FOREIGN KEY ("A") REFERENCES "Flick"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_saves" ADD CONSTRAINT "_saves_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
