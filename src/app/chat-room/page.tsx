"use client";
import DashboardLayout from "@/components/dashboard/Dashboard";
import Chat from "@/components/chat/Chat";
import ShinyText from "@/components/ShinyText";
import { useAuthStore } from "@/store/authStore";
import Image from "next/image";
import ButtonAuth from "@/components/button/ButtonAuth";

export default function ChatRoom() {
  const auth = useAuthStore((state) => state);
  return (
    <DashboardLayout>
      <ShinyText text="Chat Room" className="text-2xl font-bold mb-4"/>
      <p className="mb-2">This is the chat room page of the application.</p>
      {
        auth.isAuthenticated ? (<Chat isPersonalChat={false}/>) : (
          <div className="flex flex-col items-center justify-center border rounded-2xl h-[65vh]">
            <div className="flex flex-col items-center">
              <Image
                src="/logo/chat.png"
                alt="Chat Icon"
                width={200}
                height={200}
                className="mt-4"
              />
              <p>You must be logged in to try the chat room feature.</p>
            </div>
            <ButtonAuth />
          </div>
        )
      }
        
    </DashboardLayout>
  );
}
