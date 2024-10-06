/*
  Warnings:

  - Made the column `description` on table `Flick` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Flick" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
