'use client'

import ChatApp from "@/components/chat/personal-chat/chat-app";
import ChatList from "@/components/chat/personal-chat/ChatList";
import DashboardLayout from "@/components/dashboard/Dashboard";
import ShinyText from "@/components/ShinyText";

export default function PersonalChat() {
    return (
        <DashboardLayout>
            <ShinyText text="Personal Chat" className="text-2xl font-bold mb-4"/>
            <p> This is the personal chat page of the application.</p>
                
            <ChatApp />
            
        </DashboardLayout>
    )
}