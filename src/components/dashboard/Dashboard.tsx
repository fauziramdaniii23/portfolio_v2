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
                {children}
            </div>
        </ThemeProvider>
    )
}