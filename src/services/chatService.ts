// src/services/chatService.ts
import { prisma } from "@/lib/prisma";

export const chatService = {
  async getAllMessages() {
    return prisma.chat.findMany({
      where: { deletedAt: null },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        mentions: { include: { mentioned: true } },
      },
      orderBy: { createdAt: "asc" },
    });
  },

  async createMessage(data: {
    message: string;
    userEmail: string;
    replyToId?: number;
  }) {
    const user = await prisma.user.findUnique({
      where: { email: data.userEmail },
    });
    if (!user) throw new Error("User not found");

    return prisma.chat.create({
      data: {
        message: data.message,
        userId: user.id,
        replyToId: data.replyToId || null,
      },
    });
  },
};
