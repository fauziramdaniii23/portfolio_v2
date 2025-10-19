"use client";

import ContactList from "@/components/contact/ContactList";
import DashboardLayout from "@/components/dashboard/Dashboard";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";

export default function Contact() {
  const [messages, setMessages] = useState<string[]>([]);
  
  const t = useTranslations("HomePage");

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Contact me Page</h1>
      <p>This is the contact me page of the application.</p>
      <p>{t("description")}</p>
      <ContactList />
    </DashboardLayout>
  );
}
