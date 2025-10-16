"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";
import NewChat from "./NewChat";
import { TChatList, TPersonalChat, TUser } from "@/types/type";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/authStore";
import { encrypt, encryptForUrl } from "@/lib/encryptor";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { set } from "@/lib/js/nprogress";
import { Spinner } from "@/components/ui/spinner";

type ChatListProps = {
  onSelect: (personalChat: TChatList) => void;
};

export function SidebarChatList({ onSelect }: ChatListProps) {
  const {user, isAuthenticated} = useAuthStore();
  const [query, setQuery] = useState("");
  const [chatList, setChatList] = useState<TChatList[]>([]);
  const [selectedChat, setSelectedChat] = useState<TChatList | null>(null);
  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chatList;
    return chatList.filter((c) => c.user.name.toLowerCase().includes(q));
  }, [chatList, query]);

  useEffect(() => {
      if(isAuthenticated){ 
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
          onSelect(chat);
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
          onSelect(data[0].id);
          setChatList((chatList) => [data[0], ...chatList]);
        });
    }
  };

  const handleSelectChat = (chat: TChatList) => {
    setSelectedChat(chat);
    onSelect(chat);
  };

  const handleSelectChatForDelete = (chat: TChatList) => {
    setSelectedChat(chat);
    setOpenAlertDelete(true);
  };

  const handleDeletePersonalChat = async () => {
    const encryptedId = encryptForUrl(selectedChat?.id);
    setLoadingDelete(true);
    await fetch('/api/chat-list', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: encryptedId }),
    })
      .then((res) => res.json())
      .then(() => {
        setChatList((chatList) => chatList.filter((c) => c.id !== selectedChat?.id));
        setSelectedChat(null);
        setLoadingDelete(false);
      });

     setOpenAlertDelete(false); 
  }

  return (
    <div className="flex flex-col">
      <div className="h-14 flex justify-between items-center px-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-emerald-500" aria-hidden />
          <div className="font-semibold text-lg">Chat</div>
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
          <p className="px-4 py-8 text-sm text-muted-foreground">
            Tidak ada chat yang cocok.
          </p>
        ) : (
          <ScrollArea className="h-[65vh]">
          {
            Array.isArray(filtered) && filtered.map((chat) => (             
              <ContextMenu key={chat.id}>
                <ContextMenuTrigger>
                  <button
                    key={chat.id}
                    role="listitem"
                    onClick={() => handleSelectChat(chat)}
                    className={cn(
                      "w-full px-4 py-3 flex items-center gap-3 border-y first:border-t-0 last:border-b-0 border-transparent hover:bg-accent transition-colors",
                      chat.id === selectedChat?.id && "bg-accent"
                    )}
                    aria-current={chat.id === selectedChat?.id ? "true" : "false"}
                  >
                    <Avatar className="size-9">
                      <AvatarFallback>u</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium truncate">{chat.user.name}</p>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {chat.content}
                      </p>
                    </div>
                  </button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem onSelect={() => handleSelectChatForDelete(chat)}>
                      <FaTrash /> Delete Chat {chat.user.name} ?
                    </ContextMenuItem>
                  </ContextMenuContent>
              </ContextMenu>
            
          ))
          }
          </ScrollArea>
        )}
        
            <AlertDialog open={openAlertDelete} onOpenChange={setOpenAlertDelete}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Hapus Pesan?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Semua pesan dengan {selectedChat?.user.name} akan dihapus secara permanen dan tidak dapat dikembalikan.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setOpenAlertDelete(false)}>Batal</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeletePersonalChat} disabled={loadingDelete} className="bg-red-600 text-white hover:bg-red-700">
                    Hapus {loadingDelete && <Spinner />}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
      </div>
    </div>
  );
}
