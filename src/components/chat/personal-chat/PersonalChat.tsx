"use client"

import { useMemo, useState } from "react"
import { SidebarChatList } from "./SidebarChatList"
import { ChatWindow } from "./chat-window"
import { useAuthStore } from "@/store/authStore"
import ButtonAuth from "@/components/button/ButtonAuth"
import Image from "next/image"

export type Chat = {
  id: string
  name: string
  lastMessage: string
  unread?: number
}

export type Message = {
  id: string
  chatId: string
  author: "me" | "them"
  content: string
  createdAt: string
}

export default function ChatApp() {
    const auth = useAuthStore((state) => state);

  const chats: Chat[] = useMemo(
    () => [
      { id: "1", name: "Budi", lastMessage: "Siap, terima kasih!", unread: 2 },
      { id: "2", name: "Siti", lastMessage: "Nanti kubalas ya." },
      { id: "3", name: "Andi", lastMessage: "Oke mantap." },
    ],
    [],
  )

  const initialMessages: Message[] = useMemo(
    () => [
      { id: "m1", chatId: "1", author: "them", content: "Halo! Ada update?", createdAt: new Date().toISOString() },
      {
        id: "m2",
        chatId: "1",
        author: "me",
        content: "Halo Budi, sudah saya kirim.",
        createdAt: new Date().toISOString(),
      },
      { id: "m3", chatId: "1", author: "them", content: "Siap, terima kasih!", createdAt: new Date().toISOString() },
      { id: "m4", chatId: "2", author: "them", content: "Sore, sempat call?", createdAt: new Date().toISOString() },
      {
        id: "m5",
        chatId: "3",
        author: "me",
        content: "Proposalnya sudah approve.",
        createdAt: new Date().toISOString(),
      },
      { id: "m6", chatId: "3", author: "them", content: "Oke mantap.", createdAt: new Date().toISOString() },
    ],
    [],
  )

  const [selectedId, setSelectedId] = useState<string>(chats[0]?.id ?? "1")
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const selectedChat = chats.find((c) => c.id === selectedId)

  function handleSend(content: string) {
    const newMsg: Message = {
      id: crypto.randomUUID(),
      chatId: selectedId,
      author: "me",
      content,
      createdAt: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, newMsg])
  }

  const visibleMessages = messages.filter((m) => m.chatId === selectedId)

  return (
    <div className="flex border rounded-2xl my-2">
      {
        auth.isAuthenticated ? (
          <div className="w-full flex">
            <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-border">
              <SidebarChatList  onSelect={(id) => console.log(id)} />
            </aside>
            <section className="flex-1 min-w-0">
              <ChatWindow chat={selectedChat} messages={visibleMessages} onSend={handleSend} />
            </section>
          </div>
        ) : (
          <div className="flex-1 mb-4">
            <div className="flex flex-col items-center">
              <Image
                src="/logo/chat.png"
                alt="Chat Icon"
                width={200}
                height={200}
                className="mt-4"
              />
              <p>You must be logged in to try the personal chat feature.</p>
            </div>
            <ButtonAuth/>
          </div>
        )
      }
    </div>
  )
}
