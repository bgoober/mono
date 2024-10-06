/*
  Warnings:

  - Added the required column `status` to the `Bounty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `track` to the `Bounty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `BountyApplication` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BountyStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'OPEN');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('ACCEPTED', 'PENDING', 'REJECTED');

-- CreateEnum
CREATE TYPE "Tracks" AS ENUM ('FRONTEND', 'BACKEND', 'RUST');

-- DropForeignKey
ALTER TABLE "Bounty" DROP CONSTRAINT "Bounty_companyId_fkey";

-- AlterTable
ALTER TABLE "Bounty" ADD COLUMN     "status" "BountyStatus" NOT NULL,
ADD COLUMN     "track" "Tracks" NOT NULL,
ALTER COLUMN "companyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "BountyApplication" ADD COLUMN     "status" "ApplicationStatus" NOT NULL;

-- AddForeignKey
ALTER TABLE "Bounty" ADD CONSTRAINT "Bounty_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
