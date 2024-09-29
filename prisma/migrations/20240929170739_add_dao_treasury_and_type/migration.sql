/*
  Warnings:

  - Added the required column `type` to the `DAO` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DAOType" AS ENUM ('NFT', 'TOKEN', 'HYBRID');

-- AlterTable
ALTER TABLE "DAO" ADD COLUMN     "type" "DAOType" NOT NULL;

-- CreateTable
CREATE TABLE "Treasury" (
    "id" TEXT NOT NULL,
    "daoId" TEXT,
    "balance" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Treasury_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Treasury_daoId_key" ON "Treasury"("daoId");

-- AddForeignKey
ALTER TABLE "Treasury" ADD CONSTRAINT "Treasury_daoId_fkey" FOREIGN KEY ("daoId") REFERENCES "DAO"("id") ON DELETE SET NULL ON UPDATE CASCADE;
