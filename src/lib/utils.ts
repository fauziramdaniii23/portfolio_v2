import { Author } from "@/app/constant/constant";
import { useAuthStore } from "@/store/authStore";
import { useUserStore } from "@/store/userStore";
import { TChatList, TPersonalChat, TUser } from "@/types/type";
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

    return {
      id: chat.id,
      userId: Number(otherUser.id),
      user: otherUser as TUser,
      content: chat.content ?? "",
      createdAt: chat.createdAt,
      updatedAt: chat.updatedAt,
      deletedAt: chat.deletedAt,
    };
  });

  return data;
};

export const handleLogout = () => {
  const userStore = useUserStore.getState();
  const authStore = useAuthStore.getState();
  userStore.deleteUser();
  authStore.logout();
};
