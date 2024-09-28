/*
  Warnings:

  - Added the required column `amount` to the `Backer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Backer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Backer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Backer" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
