// src/controllers/chatController.ts
import { chatService } from "@/services/chatService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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

  async createChat(body: { message: string; replyToId?: number }) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const newMessage = await chatService.createMessage({
      message: body.message,
      userEmail: session.user.email,
      replyToId: body.replyToId,
    });

    return newMessage;
  },
};
