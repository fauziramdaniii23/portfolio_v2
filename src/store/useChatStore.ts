import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createEncryptedStorage } from "@/lib/encryptor";
import { TChatList, TMessage, TProject } from "@/types/type";

type ChatState = {
  selectedChat: TChatList | null;
  setSelectedChat: (selectedChat: TChatList) => void;
  clearSelectedChat: () => void;
  updateLastMessage?: (message: TMessage) => void;
};

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      selectedChat: null,
      setSelectedChat: (selectedChat: TChatList) =>
        set({
          selectedChat: selectedChat,
        }),
      clearSelectedChat: () =>
        set({
          selectedChat: null,
        }),
      updateLastMessage: (message: TMessage) => {
        const currentChat = get().selectedChat;
        if (!currentChat) return;

        set({
          selectedChat: {
            ...currentChat,
            lastMessage: message,
          },
        });
      },
    }),
    {
      name: "selected-chat",
      storage: createEncryptedStorage(),
      partialize: (state) =>
        ({
          selectedChat: state.selectedChat,
        } as ChatState),
    }
  )
);
