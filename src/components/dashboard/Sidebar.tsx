"use client"

import { useState } from "react"
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Settings, Users, BarChart3, FileText, Mail, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {Menus} from "@/app/constant/menus";
import {useNavigate} from "@/lib/navigate";

const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics" },
    { icon: Users, label: "Users" },
    { icon: FileText, label: "Reports" },
    { icon: Mail, label: "Messages", badge: "3" },
    { icon: Calendar, label: "Calendar" },
    { icon: Settings, label: "Settings" },
]

export function Sidebar() {
    const pathname = usePathname();
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false)

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <div
            className={cn(
                "bg-transparent m-2 transition-all duration-300 ease-in-out flex flex-col",
                isCollapsed ? "w-16" : "w-64",
            )}
        >
            {/* Header with collapse toggle */}
            <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
                {!isCollapsed && <h2 className="text-lg font-semibold text-sidebar-foreground">Dashboard</h2>}
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-sidebar-foreground hover:bg-sidebar-accent"
                >
                    {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
            </div>

            {/* Profile Section */}
            <div className="p-4 border-b border-sidebar-border">
                <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="/professional-profile.png" alt="Profile" />
                        <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">JD</AvatarFallback>
                    </Avatar>
                    {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
                            <div className="flex items-center space-x-2">
                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                <p className="text-xs text-sidebar-foreground/70">Online</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-4 space-y-2">
                {Menus.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Button
                            onClick={() => navigate(item.path)}
                            key={index}
                            variant={isActive(item.path) ? "default" : "ghost"}
                            className={cn(
                                "group w-full justify-start text-left hover:scale-110 transition-all duration-200",
                                isActive(item.path)
                                    ? "bg-gradient-to-r from-blue-600 to-transparent text-sidebar-primary-foreground "
                                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                isCollapsed && "justify-center px-2",
                            )}
                        >
                            <Icon className="h-4 w-4 mr-2 group-hover:-rotate-12 transition-all duration-200" />
                            {!isCollapsed && (
                                <>
                                    <span className="flex-1">{item.label}</span>
                                </>
                            )}
                        </Button>
                    )
                })}
            </nav>

            {/* Footer */}
            {!isCollapsed && (
                <div className="p-4 border-t border-sidebar-border">
                    <div className="text-xs text-sidebar-foreground/50 text-center">© 2024 Dashboard App</div>
                </div>
            )}
        </div>
    )
}
