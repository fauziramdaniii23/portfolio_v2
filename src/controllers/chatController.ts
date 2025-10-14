// src/controllers/chatController.ts
import { chatService } from "@/services/chatService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { TCurrentMessage, TMessage } from "@/types/type";

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
      userEmail: session.user.email,
      replyToId: currentMessage.replyToId,
    });

    return newMessage;
  },

  async updateMessage(message : TMessage, editText: string) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const updatedMessage = await chatService.updateMessage(message.id, editText)
    return updatedMessage
  },

  async softDeleteMessage(messageId : number) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const deletedMessage = await chatService.softDeleteMessage(messageId)
    return deletedMessage
  }
};
