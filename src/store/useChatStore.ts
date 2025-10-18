import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {createEncryptedStorage} from "@/lib/encryptor";
import {TChatList, TProject} from "@/types/type";

type ChatState = {
    selectedChat: TChatList | null;
    setSelectedChat: (selectedChat: TChatList) => void;
    clearSelectedChat: () => void;
};

export const useChatStore= create<ChatState>()(
    persist(
        (set) => ({
            selectedChat:null,
            setSelectedChat: (selectedChat : TChatList ) =>
                set({
                    selectedChat: selectedChat,
                }),
            clearSelectedChat: () =>
                set({
                    selectedChat: null,
                })
        }),
        {
            name: 'selected-chat',
            storage: createEncryptedStorage(),
            partialize: (state) => ({
                selectedChat: state.selectedChat,
            }) as ChatState,
        }
    )
);

