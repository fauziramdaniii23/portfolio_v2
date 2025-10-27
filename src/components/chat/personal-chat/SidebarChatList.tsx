"use client";

import { cn, isAuthor } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";
import NewChat from "./NewChat";
import { TChatList, TMessage, TUser } from "@/types/type";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/authStore";
import { encryptForUrl } from "@/lib/encryptor";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { FaTrash } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";
import { useChatStore } from "@/store/useChatStore";
import { Author } from "@/constant/constant";
import { GoShieldCheck } from "react-icons/go";
import { pusherClient } from "@/lib/pusher/pusherClient";

export function SidebarChatList() {
  const { user, isAuthenticated } = useAuthStore();
  const [query, setQuery] = useState("");
  const [chatList, setChatList] = useState<TChatList[]>([]);
  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const { selectedChat, setSelectedChat, clearSelectedChat } = useChatStore();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chatList;
    return chatList.filter((c) => c.user.name.toLowerCase().includes(q));
  }, [chatList, query]);

  useEffect(() => {
    if (!chatList.length) return;
    const chanel = pusherClient.subscribe(`chat`);
    chatList.forEach((chat) => {
    const eventName = `chat-list-${chat.id}`;
    chanel.bind(eventName, (data: any) => {
      const newMsg: TMessage = data.newMessage;
      const isSelectedChat = selectedChat?.id === newMsg.personalChatId;
      const isMine = newMsg.user.email === user?.email

       setChatList((prev) => {
        const updatedList = prev.map((c) =>
          c.id === newMsg.personalChatId
            ? {
                ...c,
                lastMessage: newMsg,
                totalUnread:
                  !isMine && !isSelectedChat
                    ? c.totalUnread + 1
                    : c.totalUnread,
              }
            : c
        );

        const targetChat = updatedList.find(
          (c) => c.id === newMsg.personalChatId
        );

        const others = updatedList.filter(
          (c) => c.id !== newMsg.personalChatId
        );

        return targetChat ? [targetChat, ...others] : updatedList;
      });

      if(isSelectedChat){
        updateTotalUnread(newMsg.id);
      }
      
    });
  });
    return () => {
      chatList.forEach((chat) => {
       chanel.unbind(`chat-list-${chat.id}`);
      });
      chanel.unsubscribe();
    };
  }, [user?.id, selectedChat?.id, chatList]);

  const updateTotalUnread = (id: number) => {
    if(isAuthenticated){
      const encryptedId = encryptForUrl(id);
      fetch(`/api/unread-chat`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: encryptedId }),
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const encryptedId = encryptForUrl(user?.id);
      fetch(`/api/chat-list?userId=${encryptedId}`)
        .then((res) => res.json())
        .then((data) => setChatList(data));
    }
  }, []);

  const findExistingChat = (user: TUser): Boolean => {
    return chatList.some((chat) => chat.user.id === user.id);
  };

  const handleNewChat = (user: TUser) => {
    if (findExistingChat(user)) {
      chatList.find((chat) => {
        if (chat.user.id === user.id) {
          setSelectedChat(chat);
        }
      });
    } else {
      fetch("/api/chat-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSelectedChat(data[0]);
          setChatList((chatList) => [data[0], ...chatList]);
        });
    }
  };

  const handleSelectChat = async (chat: TChatList) => {
    setSelectedChat(chat);
    await fetch(`/api/chat-list`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: encryptForUrl(chat.id) }),
    });
    setChatList((prev) =>
      prev.map((c) => {
        if (c.id === chat.id) {
          return { ...c, totalUnread: 0 };
        }
        return c;
      })
    );
  };

  const handleSelectChatForDelete = (chat: TChatList) => {
    setSelectedChat(chat);
    setOpenAlertDelete(true);
  };

  const handleDeletePersonalChat = async () => {
    const encryptedId = encryptForUrl(selectedChat?.id);
    setLoadingDelete(true);
    await fetch("/api/chat-list", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: encryptedId }),
    })
      .then((res) => res.json())
      .then(() => {
        setChatList((chatList) =>
          chatList.filter((c) => c.id !== selectedChat?.id)
        );
        clearSelectedChat();
        setLoadingDelete(false);
      });

    setOpenAlertDelete(false);
  };

  return (
    <div className="flex flex-col">
      <div className="h-14 flex justify-between items-center px-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-emerald-500" aria-hidden />
          <div className="font-semibold text-lg">Chats</div>
        </div>
        <NewChat handleNewChat={handleNewChat} />
      </div>

      <div className="p-4">
        <Input
          id="search"
          placeholder="Cari chat..."
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div
        role="list"
        aria-label="Daftar chat"
        className="flex-1 overflow-y-auto"
      >
        {filtered.length === 0 || !Array.isArray(filtered) ? (
          <p className="h-[65vh] px-4 py-8 text-sm text-muted-foreground">
            Tidak ada chat.
          </p>
        ) : (
          <ScrollArea className="h-[65vh]">
            {Array.isArray(filtered) &&
              filtered.map((chat) => (
                <ContextMenu key={chat.id}>
                  <ContextMenuTrigger>
                    <button
                      key={chat.id}
                      role="listitem"
                      onClick={() => handleSelectChat(chat)}
                      className={cn(
                        "relative w-full px-4 py-3 flex items-center gap-3 border-y first:border-t-0 last:border-b-0 border-transparent hover:bg-accent transition-colors",
                        chat.id === selectedChat?.id && "bg-accent"
                      )}
                      aria-current={
                        chat.id === selectedChat?.id ? "true" : "false"
                      }
                    >
                      <Avatar className="w-8 h-8">
                        {chat.user.image ? (
                          <AvatarImage
                            src={
                              isAuthor(chat.user.email)
                                ? Author.image
                                : chat.user.image
                            }
                            alt={chat.user.name ?? "User"}
                          />
                        ) : null}
                        <AvatarFallback>
                          {chat.user.name
                            ? chat.user.name[0].toUpperCase()
                            : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 text-left">
                        <div className="flex flex-col justify-between gap-2">
                          <div className="flex gap-2 font-medium truncate">
                            {chat.user.name}
                            {isAuthor(chat.user.email) && (
                              <div className="flex justify-center align-center items-center gap-1 rounded-2xl bg-blue-500/50 px-2">
                                <GoShieldCheck className="text-blue-500 text-xs" />
                                <p className="text-[10px] italic">Author</p>
                              </div>
                            )}
                          </div>
                          
                            {chat.lastMessage && (
                              <p className="text-xs">{chat.lastMessage.message.slice(0, 30) + "..."}</p>
                            )}
                          
                        </div>
                      </div>
                      
                      
                        {chat.totalUnread > 0 && (
                          <div className="absolute top-1/2 right-3 -translate-y-1/2 size-5 rounded-full bg-red-600 text-white text-xs flex justify-center items-center">
                            {chat.totalUnread}
                          </div>
                        )}                  
                    </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem
                      onSelect={() => handleSelectChatForDelete(chat)}
                    >
                      <FaTrash /> Delete Chat {chat.user.name} ?
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
          </ScrollArea>
        )}

        <AlertDialog open={openAlertDelete} onOpenChange={setOpenAlertDelete}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Hapus Pesan?</AlertDialogTitle>
              <AlertDialogDescription>
                Semua pesan dengan {selectedChat?.user.name} akan dihapus secara
                permanen dan tidak dapat dikembalikan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlertDelete(false)}>
                Batal
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeletePersonalChat}
                disabled={loadingDelete}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Hapus {loadingDelete && <Spinner />}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
