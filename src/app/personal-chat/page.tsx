'use client'

import ChatApp from "@/components/chat/personal-chat/PersonalChat";
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