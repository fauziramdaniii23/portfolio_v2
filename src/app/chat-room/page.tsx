"use client";
import DashboardLayout from "@/components/dashboard/Dashboard";
import Chat from "@/components/chat/Chat";
import ShinyText from "@/components/ShinyText";
import { useTranslations } from "next-intl";
import StarBorder from "@/components/StarBorder";

export default function ChatRoom() {
  const t = useTranslations("chatroomPage");
  return (
    <DashboardLayout>
      <ShinyText text={t("title")} className="text-2xl font-bold mb-4"/>
      <StarBorder as="div" className="text-left w-full" className2="p-6 overflow-hidden border-2 rounded-2xl">
        <p>{t("description")}</p>

      </StarBorder>
      <Chat isPersonalChat={false}/>
        
    </DashboardLayout>
  );
}
