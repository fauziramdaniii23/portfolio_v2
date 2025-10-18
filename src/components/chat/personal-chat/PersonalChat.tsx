"use client";

import { SidebarChatList } from "./SidebarChatList";
import { useAuthStore } from "@/store/authStore";
import ButtonAuth from "@/components/button/ButtonAuth";
import Image from "next/image";
import Chat from "../Chat";

export default function ChatApp() {
  const auth = useAuthStore((state) => state);

  return (
    <div className="flex border rounded-2xl overflow-hidden mt-2">
      {auth.isAuthenticated ? (
        <div className="w-full flex">
          <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-border">
            <SidebarChatList />
          </aside>
          <section className="flex-1">
            <Chat isPersonalChat />
          </section>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center h-[65vh]">
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
          <ButtonAuth />
        </div>
      )}
    </div>
  );
}
