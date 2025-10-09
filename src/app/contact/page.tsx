'use client'

import DashboardLayout from "@/components/dashboard/Dashboard";
import UserList from "@/components/serverComponent";

export default function About() {
    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">Contact me Page</h1>
            <p>
                This is the contact me page of the application.
            </p>
            <UserList />
        </DashboardLayout>
    )
}