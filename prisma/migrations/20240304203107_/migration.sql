/*
  Warnings:

  - You are about to drop the column `userId` on the `fundraisers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "fundraisers" DROP CONSTRAINT "fundraisers_userId_fkey";

-- AlterTable
ALTER TABLE "fundraisers" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "fundraisers" ADD CONSTRAINT "fundraisers_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
