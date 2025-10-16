// src/services/chatService.ts
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { pusher } from "@/lib/pusher/pusherServer";
import { TCurrentMessage, TMessage, TPersonalChat } from "@/types/type";
import { getServerSession } from "next-auth";

export const chatService = {
  async getAllMessages() : Promise<TMessage[]> {
    const messages = await prisma.chat.findMany({
      where: { 
        deletedAt: null,
        personalChatId: null
       },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        mentions: { include: { mentioned: true } },
      },
      orderBy: { createdAt: "asc" },
    });

    return messages as unknown as TMessage[]
  },

  async getMessage(personalChatId: number) : Promise<TMessage[]> {
    const messages = await prisma.chat.findMany({
      where: { 
        deletedAt: null,
        personalChatId: personalChatId
       },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        mentions: { include: { mentioned: true } },
      },
      orderBy: { createdAt: "asc" },
    });

    return messages as unknown as TMessage[]
  },

  async createMessage(data: TCurrentMessage) : Promise<TMessage> {

    const newMsg = await prisma.chat.create({
      data: {
        message: data.message,
        userId: data.userId,
        replyToId: data.replyToId || null,
        personalChatId: data.personalChatId || null,
      },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        replies: true,
        mentions: { include: { mentioned: true } },
      },
    });

    return newMsg as unknown as TMessage;
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

  async deletePersonalChat(id: number) {
    await prisma.chat.updateMany({
      where: { personalChatId: id },
      data: { deletedAt: new Date() },
    });
    const deletedChat = await prisma.personalChat.delete({
      where: { id },
      include: {
        user1: true,
        user2: true,
      },
    });
    return deletedChat;
  },
};
