// src/controllers/chatController.ts
import { chatService } from "@/services/chatService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { TChatList, TCurrentMessage, TMessage, TPersonalChat, TUser } from "@/types/type";
import { filterChatList } from "@/lib/utils";

export const chatController = {
  async getAllChats() {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    const messages = await chatService.getAllMessages();

    // Tambahkan flag isMine untuk setiap pesan
    const formatted = messages.map((msg) => ({
      ...msg,
      isMine: msg.user.email === userEmail,
    }));

    return formatted;
  },

  async createChat(currentMessage: TCurrentMessage ) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const newMessage = await chatService.createMessage({
      message: currentMessage.message,
      userId: Number(session.user.id),
      replyToId: currentMessage.replyToId,
    });

    return newMessage;
  },

  async updateMessage(message : TMessage, editText: string) {
    const updatedMessage = await chatService.updateMessage(message.id, editText)
    return updatedMessage
  },

  async softDeleteMessage(messageId : number) {
    const deletedMessage = await chatService.softDeleteMessage(messageId)
    return deletedMessage
  },

  async getChatList() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const chatList = await chatService.getChatList()
    const data = filterChatList(Number(session.user.id), chatList as unknown as TPersonalChat[]);

    return data
  },

  async createChatList(userId : number) : Promise<TChatList[]> {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const currentUserId = Number(session.user.id);

    const newChatList = await chatService.createChatList({
      user1Id: currentUserId,
      user2Id: userId,
    });

    const data = filterChatList(currentUserId, newChatList);

    return data;
  },
};
