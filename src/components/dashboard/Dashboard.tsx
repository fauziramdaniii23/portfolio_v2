'use client'
import {Sidebar} from "@/components/dashboard/Sidebar";
import {ThemeProvider} from "@/components/theme-provider";

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {
    return (
        <ThemeProvider>
            <div className="flex h-screen">
                <Sidebar/>
                <div className="p-6 flex-1 overflow-auto">{children}</div>
            </div>
        </ThemeProvider>
    )
}