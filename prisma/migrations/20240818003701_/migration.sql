/*
  Warnings:

  - You are about to drop the column `accessToken` on the `sessions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "sessions_accessToken_key";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "accessToken";
