"use client"

import { useMemo, useState } from "react"
import { SidebarChatList } from "./SidebarChatList"
import { useAuthStore } from "@/store/authStore"
import ButtonAuth from "@/components/button/ButtonAuth"
import Image from "next/image"
import Chat from "../Chat"
import { TChatList, TUser } from "@/types/type"

export default function ChatApp() {
  const auth = useAuthStore((state) => state);
  const [selectedChat, setSelectedChat] = useState<TChatList>();

  return (
    <div className="flex border rounded-2xl my-2">
      {
        auth.isAuthenticated ? (
          <div className="w-full flex">
            <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-border">
              <SidebarChatList onSelect={setSelectedChat} />
            </aside>
            <section className="flex-1 min-w-0">
              <Chat selectedChat={selectedChat}/>
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
