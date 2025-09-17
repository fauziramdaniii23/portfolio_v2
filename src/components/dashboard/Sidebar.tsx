"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Settings, Users, BarChart3, FileText, Mail, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div
            className={cn(
                "bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col",
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
                {menuItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <Button
                            key={index}
                            variant={item.active ? "default" : "ghost"}
                            className={cn(
                                "w-full justify-start text-left",
                                item.active
                                    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                isCollapsed && "justify-center px-2",
                            )}
                        >
                            <Icon className={cn("h-4 w-4", !isCollapsed && "mr-3")} />
                            {!isCollapsed && (
                                <>
                                    <span className="flex-1">{item.label}</span>
                                    {item.badge && (
                                        <Badge variant="secondary" className="ml-auto bg-sidebar-accent text-sidebar-accent-foreground">
                                            {item.badge}
                                        </Badge>
                                    )}
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
