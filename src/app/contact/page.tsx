"use client";

import ContactList from "@/components/contact/ContactList";
import DashboardLayout from "@/components/dashboard/Dashboard";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contactPage");

  return (
    <DashboardLayout>
      <ShinyText text={t("title")} className="text-2xl font-bold mb-4" />
      <StarBorder
        as="div"
        className="text-left w-full mb-2"
        className2="p-6 overflow-hidden border-2 rounded-2xl"
      >
        <p>{t("description")}</p>
      </StarBorder>
      <ContactList />
    </DashboardLayout>
  );
}
