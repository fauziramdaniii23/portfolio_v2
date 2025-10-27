import { Author } from "@/constant/constant";
import { useAuthStore } from "@/store/authStore";
import { useChatStore } from "@/store/useChatStore";
import { useUserListStore } from "@/store/userStore";
import { TChatList, TMessage, TPersonalChat, TUser } from "@/types/type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAuthor = (email: string | null | undefined): boolean => {
  if (!email) return false;
  return email === Author.email;
};

export const getMessageReply = (message: string, reply: string) => {
  let replyMsg = reply;
  if (reply.length > message.length) {
    if (message.length < 10) {
      if (reply.length < 10) {
        replyMsg = reply;
      } else {
        replyMsg = reply.slice(0, 10) + "...";
      }
    } else {
      replyMsg = reply.slice(0, message.length) + "...";
    }
  }
  return replyMsg;
};

export const filterChatList = (
  currentUserId: number,
  chatList: TPersonalChat[]
): TChatList[] => {
  const data: TChatList[] = chatList.map((chat: TPersonalChat) => {
    const otherUser: TUser = Number(chat.user1.id) === currentUserId ? chat.user2 : chat.user1;
    const chats = chat.chats ?? [];
    const lastChatRaw = chats.length > 0 ? chats[0] : null;

    const lastChat: TMessage | null = lastChatRaw
      ? {
          ...lastChatRaw,
          isMine: lastChatRaw.userId === currentUserId,
        }
      : null;
    

    return {
      id: chat.id,
      userId: Number(otherUser.id),
      user: otherUser as TUser,
      lastMessage: lastChat,
      totalUnread: chat.totalUnread ?? 0,
      createdAt: chat.createdAt,
      updatedAt: chat.updatedAt,
      deletedAt: chat.deletedAt,
    };
  });

  return data;
};

export const clearState = () => {
  const userStore = useUserListStore.getState();
  const authStore = useAuthStore.getState();
  const chatStore = useChatStore.getState();
  chatStore.clearSelectedChat();
  userStore.deleteUserList();
  authStore.logout();
};
