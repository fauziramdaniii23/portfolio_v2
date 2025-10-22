"use client";

import ContactList from "@/components/contact/ContactList";
import DashboardLayout from "@/components/dashboard/Dashboard";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";

export default function Contact() {

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Contact me Page</h1>
      <p>This is the contact me page of the application.</p>
      <ContactList />
    </DashboardLayout>
  );
}
