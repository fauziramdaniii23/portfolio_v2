'use client'
import DashboardLayout from "@/components/dashboard/Dashboard";
import Home from "@/components/home/Home";
import ShinyText from "@/components/ShinyText";
import { useTranslations } from "next-intl";

export default function Dashboard() {
    const t = useTranslations("HomePage");
    return (
        <DashboardLayout>
            <ShinyText text={t("title")} className="text-2xl font-bold mb-4"/>
            <Home/>
        </DashboardLayout>
    )
}