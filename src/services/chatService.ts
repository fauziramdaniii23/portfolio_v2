// src/services/chatService.ts
import { prisma } from "@/lib/prisma";
import { pusher } from "@/lib/pusher/pusherServer";

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

    const newMsg = await prisma.chat.create({
      data: {
        message: data.message,
        userId: user.id,
        replyToId: data.replyToId || null,
      },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        replies: true,
        mentions: { include: { mentioned: true } },
      },
    });

    await pusher.trigger("chat-room", "chat", { newMsg });
    return newMsg;
  },

  async updateMessage(id: number, text: string) {
    const newMsg = await prisma.chat.update({
      where: { id },
      data: {  message: text },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        replies: true,
        mentions: { include: { mentioned: true } },
      }
    });
    return newMsg
  },

  async softDeleteMessage(id: number) {
    const deletedMsg = await prisma.chat.update({
      where: { id },
      data: { deletedAt: new Date() },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        replies: true,
        mentions: { include: { mentioned: true } },
      },
    });
    return deletedMsg;
  }
};
