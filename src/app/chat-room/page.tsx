"use client";
import DashboardLayout from "@/components/dashboard/Dashboard";
import Chat from "@/components/chat/Chat";
import ShinyText from "@/components/ShinyText";

export default function ChatRoom() {
  return (
    <DashboardLayout>
      <ShinyText text="Chat Room" className="text-2xl font-bold mb-4"/>
      <p className="mb-2">This is the chat room page of the application.</p>
      
        <Chat isPersonalChat={false}/>
    </DashboardLayout>
  );
}
