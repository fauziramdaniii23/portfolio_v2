// src/services/chatService.ts
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { pusher } from "@/lib/pusher/pusherServer";
import { TPersonalChat } from "@/types/type";
import { getServerSession } from "next-auth";

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
    userId: number;
    replyToId?: number;
  }) {

    const newMsg = await prisma.chat.create({
      data: {
        message: data.message,
        userId: data.userId,
        replyToId: data.replyToId || null,
      },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        replies: true,
        mentions: { include: { mentioned: true } },
      },
    });

    await pusher.trigger("chat", "chat-room-post", { newMsg });
    return newMsg;
  },

  async updateMessage(id: number, text: string) {
    const newMsg = await prisma.chat.update({
      where: { id },
      data: { 
         message: text,
         updatedAt: new Date(),
         },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        replies: true,
        mentions: { include: { mentioned: true } },
      }
    });
    
    await pusher.trigger("chat", "chat-room-update", { newMsg });
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
    
    await pusher.trigger("chat", "chat-room-delete", { deletedMsg });
    return deletedMsg;
  },

  
  async getChatList(userId: number) {
    const data = prisma.personalChat.findMany({
      where: { 
        deletedAt: null,
        OR: [
          { user1Id: userId },
          { user2Id: userId },
        ]
       },
      include: {
        user1: true,
        user2: true,
      },
      orderBy: { createdAt: "asc" },
    });

    return data;
  },

  async createChatList(data: {
    user1Id : number;
    user2Id : number;
  }) : Promise<TPersonalChat[]> {

    const newMsg = await prisma.personalChat.create({
      data: {
        user1Id: data.user1Id,
        user2Id: data.user2Id,
      },
      include: {
        user1: true, user2: true,
      },
    });

    return [newMsg as unknown as TPersonalChat];
  },
};
