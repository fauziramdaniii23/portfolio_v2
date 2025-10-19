'use client'
import DashboardLayout from "@/components/dashboard/Dashboard";
import Home from "@/components/home/Home";
import ShinyText from "@/components/ShinyText";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <ShinyText text="Home" className="text-2xl font-bold mb-4"/>
            <Home/>
        </DashboardLayout>
    )
}