/*
  Warnings:

  - You are about to drop the column `isRead` on the `PersonalChat` table. All the data in the column will be lost.
  - You are about to drop the column `replyToChatId` on the `PersonalChat` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `PersonalChat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."PersonalChat" DROP CONSTRAINT "PersonalChat_replyToChatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PersonalChat" DROP CONSTRAINT "PersonalChat_senderId_fkey";

-- DropIndex
DROP INDEX "public"."PersonalChat_replyToChatId_idx";

-- DropIndex
DROP INDEX "public"."PersonalChat_senderId_idx";

-- DropIndex
DROP INDEX "public"."PersonalChat_user1Id_user2Id_idx";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "personalChatId" INTEGER;

-- AlterTable
ALTER TABLE "PersonalChat" DROP COLUMN "isRead",
DROP COLUMN "replyToChatId",
DROP COLUMN "senderId";

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_personalChatId_fkey" FOREIGN KEY ("personalChatId") REFERENCES "PersonalChat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
