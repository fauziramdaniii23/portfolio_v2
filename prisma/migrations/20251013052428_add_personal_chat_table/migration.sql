-- CreateTable
CREATE TABLE "PersonalChat" (
    "id" SERIAL NOT NULL,
    "user1Id" INTEGER NOT NULL,
    "user2Id" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,
    "content" TEXT,
    "replyToChatId" INTEGER,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PersonalChat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PersonalChat_user1Id_user2Id_idx" ON "PersonalChat"("user1Id", "user2Id");

-- CreateIndex
CREATE INDEX "PersonalChat_replyToChatId_idx" ON "PersonalChat"("replyToChatId");

-- CreateIndex
CREATE INDEX "PersonalChat_senderId_idx" ON "PersonalChat"("senderId");

-- AddForeignKey
ALTER TABLE "PersonalChat" ADD CONSTRAINT "PersonalChat_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalChat" ADD CONSTRAINT "PersonalChat_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalChat" ADD CONSTRAINT "PersonalChat_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalChat" ADD CONSTRAINT "PersonalChat_replyToChatId_fkey" FOREIGN KEY ("replyToChatId") REFERENCES "PersonalChat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
