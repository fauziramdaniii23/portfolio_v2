// src/controllers/chatController.ts
import { chatService } from "@/services/chatService";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { TChatList, TCurrentMessage, TMessage, TPersonalChat, TUser } from "@/types/type";
import { filterChatList } from "@/lib/utils";
import { pusher } from "@/lib/pusher/pusherServer";

export const chatController = {
  async getAllChats() : Promise<TMessage[]> {
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

  async getChatByPersonalChatId(id : number) : Promise<TMessage[]> {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    const messages = await chatService.getMessage(id)
    const formatted = messages.map((msg) => ({
      ...msg,
      isMine: msg.user.email === userEmail,
    }));

    return formatted;
  },

  async createChat(currentMessage: TCurrentMessage ) : Promise<TMessage> {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const newMsg = await chatService.createMessage(currentMessage);
    const newMessage = {
        ...newMsg,
        isMine: newMsg.user.email === userEmail
      }

    await pusher.trigger("chat", `chat${currentMessage.personalChatId ? `-${currentMessage.personalChatId}` : "-room"}-post`, { newMessage });
    if(currentMessage.personalChatId){    
     await pusher.trigger("chat", `chat-list-${currentMessage.personalChatId}`, { newMessage }); 
    }
    return newMessage;
  },

  async updateMessage(message : TMessage, editText: string) {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    const updatedMsg = await chatService.updateMessage(message.id, editText)
    const updatedMessage = {
        ...updatedMsg,
        isMine: updatedMsg.user.email === userEmail
      }
    await pusher.trigger("chat", `chat${message.personalChatId ? `-${message.personalChatId}` : "room"}-update`, { updatedMessage });

    return updatedMessage
  },

  async softDeleteMessage(message : TMessage) {
    const deletedMessage = await chatService.softDeleteMessage(message.id)
    await pusher.trigger("chat", `chat${message.personalChatId ? `-${message.personalChatId}` : "room"}-delete`, { deletedMessage });

    return deletedMessage
  },

  async getChatList(userId: number) : Promise<TChatList[]> {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Unauthorized");

    const chatList = await chatService.getChatList(userId)
    const data = filterChatList(Number(session.user.id), chatList);

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

  async deletePersonalChat (id : number) {
    const deletePersonalChat = await chatService.deletePersonalChat(id)
    return deletePersonalChat
  }
};
