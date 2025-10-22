"use client";

import ChatApp from "@/components/chat/personal-chat/PersonalChat";
import DashboardLayout from "@/components/dashboard/Dashboard";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";
import { useTranslations } from "next-intl";

export default function PersonalChat() {
  const t = useTranslations("personalChatPage");
  return (
    <DashboardLayout>
      <ShinyText text={t("title")} className="text-2xl font-bold mb-4" />
      <StarBorder
        as="div"
        className="text-left w-full"
        className2="p-6 overflow-hidden border-2 rounded-2xl"
      >
        <p>{t("description")}</p>
      </StarBorder>

      <ChatApp />
    </DashboardLayout>
  );
}
